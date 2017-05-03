var gulp           = require('gulp'),
    minifyCss      = require('gulp-clean-css'),
    renameFile     = require('gulp-rename'),
    sass           = require('gulp-sass'),
    combineMq      = require('gulp-combine-mq'),
    autoprefixer   = require('gulp-autoprefixer'),
    jsmin          = require('gulp-uglify'),
    mainBowerFiles = require('main-bower-files'),
    addsrc         = require('gulp-add-src'),
    modifyCssUrls  = require('gulp-modify-css-urls'),
    sprite         = require('gulp.spritesmith'),
    changed        = require('gulp-changed'),
    imagemin       = require('gulp-imagemin'),
    svgStore       = require('gulp-svgstore'),
    cheerio        = require('gulp-cheerio'),
    concat         = require('gulp-concat'),
    runSequence    = require('run-sequence');


var scssSrc = 'components/**/*.scss';
var cssDist = '../css';

var jsSrc          = 'components/**/*.js';
var jsLocalLibsSrc = 'components/js-libs/*.js';
var jsDist         = '../js';

var imageminSrc  = 'uploads/**/*';
var imageminDist = 'uploads_opt';

var svgSpriteSrc  = "components/svg/sprite/";
var svgSpriteDest = "../includes/svg";


/* Call while working with project */
gulp.task('default', ['watch']);

/* Call at first start, after changes in bower.json or in gulp.js */
gulp.task('build', function (cb) {
  runSequence('svg', 'font', 'img', 'sprite', 'cssbuild', 'libs', 'jsbuild', cb);
});


/* Watch command */
gulp.task('watch', ['css', 'js'], function () {
  gulp.watch(scssSrc, ['css']);
  gulp.watch(jsSrc, ['js']);
  gulp.watch(svgSpriteSrc + "**/*.svg", ['svg']);
});


/* CSS production file packaging */
gulp.task('css', function () {

  /* Bower css libraries. You can config list of files in bower.json */
  var bowerCss = mainBowerFiles('**/*.css');

  return gulp.src('components/final.scss')
      .pipe(sass({
        precision:    10,
        includePaths: require('node-bourbon').includePaths
      }).on('error', sass.logError))
      .pipe(addsrc.append(bowerCss))
      .pipe(concat('final.min.css'))
      .pipe(modifyCssUrls({
        'modify': function (url, filePath) {
          var distUrl = url,
              fonts   = ['.eot', '.svg', '.ttf', '.woff', '.woff2'],
              imgs    = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'],
              pathEnd,
              fileName;

          /* Extraction file name from URL in css file */
          pathEnd  = url.lastIndexOf('/') + 1;
          fileName = url.substring(pathEnd);

          /* Extraction fonts from css urls */
          fonts.forEach(function (e) {
            if (fileName.indexOf(e) > 0)
              distUrl = '../_font/' + fileName;
          });

          /* Extraction images from css urls */
          imgs.forEach(function (e) {
            if (fileName.indexOf(e) > 0)
              distUrl = '../_img/' + fileName;
          });

          return distUrl;
        }
      }))
      .pipe(gulp.dest(cssDist));
});


/* CSS production file packaging */
gulp.task('cssbuild', function () {

  /* Bower css libraries. You can config list of files in bower.json */
  var bowerCss = mainBowerFiles('**/*.css');

  return gulp.src('components/final.scss')
      .pipe(sass({
        precision:    10,
        includePaths: require('node-bourbon').includePaths
      }).on('error', sass.logError))
      .pipe(addsrc.append(bowerCss))
      .pipe(concat('final.min.css'))
      .pipe(modifyCssUrls({
        'modify': function (url, filePath) {
          var distUrl = url,
              fonts   = ['.eot', '.svg', '.ttf', '.woff', '.woff2'],
              imgs    = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'],
              pathEnd,
              fileName;

          /* Extraction file name from URL in css file */
          pathEnd  = url.lastIndexOf('/') + 1;
          fileName = url.substring(pathEnd);

          /* Extraction fonts from css urls */
          fonts.forEach(function (e) {
            if (fileName.indexOf(e) > 0)
              distUrl = '../_font/' + fileName;
          });

          /* Extraction images from css urls */
          imgs.forEach(function (e) {
            if (fileName.indexOf(e) > 0)
              distUrl = '../_img/' + fileName;
          });

          return distUrl;
        }
      }))
      .pipe(autoprefixer({
        browsers: ['last 4 versions', 'ie > 8', '> 1%']
      }))
      .pipe(combineMq())
      .pipe(minifyCss({"keepSpecialComments": 0}))
      .pipe(gulp.dest(cssDist));
});


/* JS production file packaging */
gulp.task('js', function () {

  /* Packaging all js files into one minified file */
  return gulp.src([jsLocalLibsSrc, jsSrc])
      .pipe(concat('final.min.js'))
      .pipe(gulp.dest(jsDist));
});


/* JS project scripts minimize */
gulp.task('jsbuild', function () {
  return gulp.src([jsLocalLibsSrc, jsSrc])
      .pipe(concat('final.min.js'))
      .pipe(jsmin())
      .pipe(gulp.dest(jsDist));
});


/* JS production file packaging */
gulp.task('libs', function () {

  /* Bower js libraries. You can config list of files in bower.json */
  var bowerJs = mainBowerFiles('**/*.js');

    console.log(bowerJs);

    /* Packaging all js files into one minified file */
  return gulp.src(bowerJs)
      .pipe(concat('vendor.min.js'))
      .pipe(jsmin())
      .pipe(gulp.dest(jsDist));
});


/* Fonts production file packaging */
gulp.task('font', function () {
  var bowerFonts = mainBowerFiles(['**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2']);

  return gulp.src(bowerFonts)
      .pipe(gulp.dest('../_font'))
});


/* Images production file packaging */
gulp.task('img', function () {
  var bowerFonts = mainBowerFiles(['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.bmp']);

  return gulp.src(bowerFonts)
      .pipe(gulp.dest('../_img'))
});


/* Sprite */
gulp.task('sprite', function () {

  // Generate our spritesheet
  return gulp.src('components/icons/img/**/*.png')
      .pipe(sprite({
        imgName: 'sprite.png',
        cssName: 'sprite.scss'
      }))
      .pipe(gulp.dest('../_img'))
      .pipe(gulp.dest('components/icons/'));

});


/* Optimize images. Require uploads folder in _assets folder */
gulp.task('imagemin', function () {
  return gulp.src(imageminSrc)
      .pipe(imagemin([
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 3})
      ]))
      .pipe(gulp.dest(imageminDist));
});

/* Build SVG icons sprite */
gulp.task("svg", function () {
  return gulp.src(svgSpriteSrc + "**/*.svg", {base: svgSpriteSrc})
      .pipe(imagemin([
        imagemin.svgo({
          plugins: [
            {cleanupIDs: true},
            {removeTitle: true},
            {removeDimensions: true},
            {removeViewBox: false},
            {removeStyleElement: true},
            // {cleanupListOfValues: {
            //   floatPrecision: 0,
            //   leadingZero: true,
            //   defaultPx: true,
            //   convertToPx: true
            // }},
            {removeAttrs: {attrs: ["data-name"]}}
          ]
        })
      ]))
      .pipe(renameFile({
        prefix: "svg-icon__"
      }))
      .pipe(svgStore({fileName: "svg-sprite.svg", inlineSvg: true}))
      .pipe(cheerio({
        run:           function ($, file) {
          $('svg').css('display', 'none');
          // $('[fill]').removeAttr('fill');
        },
        parserOptions: {xmlMode: true}
      }))
      .pipe(renameFile({
        extname: ".tpl"
      }))
      .pipe(gulp.dest(svgSpriteDest));
});
