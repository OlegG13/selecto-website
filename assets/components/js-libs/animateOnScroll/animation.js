(function ($) {

    var screenW = screen.width;

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    var breakSections = ["#particlesJS"];
    if (document.getElementById("particlesJS") !== null) {

        /* Main hero */
        var introTl = new TimelineMax();
        introTl.to($('#particlesJS'), 0.2, {autoAlpha: 0.35, ease: Power0.easeNone}, '-=0.01');
        //.to($('.page__video'), 0.2, {css: {scale: 1.1, transform: translate3d(0, '-200px', 0)}}, '-=0.01');

        var introScene = new ScrollMagic.Scene({
            //triggerElement: '#particlesJS',
            triggerHook: 0,
            offset: 0,
            duration: "100%"
        }).setTween(introTl)
            .addTo(controller);





        /* First slide. Begin */
        breakSections.forEach(function (breakSection, index) {

            // number for highlighting scenes
            var breakID = $(breakSection).attr('id');

            // make scene
            var breakScene = new ScrollMagic.Scene({
                triggerElement: breakSection, // trigger CSS animation when header is in the middle of the viewport
                triggerHook: 0.75
            }).setClassToggle('#' + breakID, 'is-active')
                .addTo(controller);
        });
        /* First slide. End */
    }


    /* Footer */
    // var footerTl = new TimelineMax();
    // footerTl.to($('.page__footer'), 0.2, {autoAlpha: 1, ease: Power0.easeNone}, '=0.1');
    //
    // var offsetBottom = $('[data-bottom]').data(),
    //     offsetBottomVal = offsetBottom.bottom;
    // var footerSceneMain = new ScrollMagic.Scene({
    //     triggerElement: '[data-bottom]',
    //     triggerHook: 1,
    //     offset: offsetBottomVal,
    //     duration: "100%"
    // }).setTween(footerTl).addTo(controller);


    /* Parallax photos */

    var animationPhoto = new TimelineMax();
    //animationPhoto.fromTo($('.animate-block-top .animate-block__photo'), 1, {y: '0%', ease: Power0.easeNone}, {y: '70%', ease: Linear.easeNone}, '+=0.1');
    animationPhoto.fromTo($('.animate-block-top .animate-block__photo'), 1, {css: {backgroundPositionY: "50%"}}, {css: {backgroundPositionY: "0%"}}, '+=0.1');


    var animationPhoto2 = new TimelineMax();
    animationPhoto2.fromTo($('.animate-block .animate-block__photo'), 1, {css: {backgroundPositionY: "100%"}}, {css: {backgroundPositionY: "50%"}}, '+=0.1');

    var animationPhotoObj = $('.animate-block');

    Array.prototype.forEach.call(animationPhotoObj, function (item, index) {
        var newAnimationPhotoScene = new ScrollMagic.Scene({
            triggerElement: '.animate-block-top',
            triggerHook: 0,
            offset: -700,
            duration: "100%"
        }).setTween(animationPhoto).addTo(controller);

        //newAnimationPhotoScene.addIndicators();
    });

    var animationPhotoObjTop = $('.animate-block-top');

    Array.prototype.forEach.call(animationPhotoObjTop, function (item, index) {
        var newAnimationPhotoSceneTop = new ScrollMagic.Scene({
            triggerElement: '.animate-block',
            offset: -700,
            triggerHook: 0,
            duration: "100%"
        }).setTween(animationPhoto2).addTo(controller);

        //newAnimationPhotoSceneTop.addIndicators();
    });


    /* Cases animation */
    var chessList = $('.chess-list__item');
    
    Array.prototype.forEach.call(chessList, function (item, index) {

        var nodeItems = item.childNodes;

        var img = new TimelineMax();
        img.fromTo(nodeItems[1], 0.4, {y: '10%', autoAlpha: 0, ease: Power0.easeNone}, {y: '0%', autoAlpha: 1, ease: Linear.easeNone});

        var text = new TimelineMax({delay: 0.4});
        text.fromTo(nodeItems[3], 0.4, {y: '10%', autoAlpha: 0, ease: Power0.easeNone}, {y: '0%', autoAlpha: 1, ease: Linear.easeNone});

        var chessItems = new ScrollMagic.Scene({
            triggerElement: item,
            triggerHook: 0.75,
            offset: -200,
            reverse: false
        })
            //.setClassToggle(item, 'chess-list__item--active')
            .setTween(img).addTo(controller);

        var chessItemsText = new ScrollMagic.Scene({
            triggerElement: item,
            triggerHook: 0.75,
            offset: 0,
            reverse: false
        }).setTween(text).addTo(controller);

        //chessItems.addIndicators();

    });


    /* Cases list item */

    var casesList = $('.cases-list__item');

    Array.prototype.forEach.call(casesList, function (item, index) {

        var nodeItems = item.childNodes;

        var imgCase = new TimelineMax();
        imgCase.fromTo(nodeItems[1], 0.4, {y: '10%', autoAlpha: 0, ease: Power0.easeNone}, {y: '0%', autoAlpha: 1, ease: Linear.easeNone});

        var textCase = new TimelineMax({delay: 0.5});
        textCase.fromTo(nodeItems[3], 0.4, {y: '10%', autoAlpha: 0, ease: Power0.easeNone}, {y: '0%', autoAlpha: 1, ease: Linear.easeNone});

        var casesItemPhoto = new ScrollMagic.Scene({
            triggerElement: item,
            triggerHook: 0.75,
            offset: 0,
            reverse: false
        }).setTween(imgCase).addTo(controller);

        //casesItemPhoto.addIndicators();

        var casesItemText = new ScrollMagic.Scene({
            triggerElement: item,
            triggerHook: 0.75,
            offset: 0,
            reverse: false
        }).setTween(textCase).addTo(controller);

        //casesItemText.addIndicators();

    });

    /* Video Life fot me */
    var caseVideo = document.querySelector('[data-video-life]');
    if (caseVideo !== null && typeof (caseVideo) !== "undefined") {
        var videoLife = new ScrollMagic.Scene({
            triggerElement: '[data-video-life]',
            triggerHook: 0.5,
            offset: 0,
            reverse: false
        }).addTo(controller).on('start', function () {
            var landing = document.querySelector('[data-landing-life]');

            if (landing !== null && typeof (landing) !== "undefined") {
                landing.currentTime = 5;
                landing.play();
            }

        });
    }

    /* Gifs */
    /* Video Life fot me */
    var caseGif = document.querySelector('[data-gif]');
    var imageUrl = "../../img/Big-logo_standart.gif";
    if (caseGif) {
        caseGif.style.opacity = "0.5";
    }
    var restartAnim = function () {
        caseGif.style.opacity = "1";
        caseGif.setAttribute("src", imageUrl);
    };
    if (caseGif !== null && typeof (caseGif) !== "undefined") {
        var gifLifeForMe = new ScrollMagic.Scene({
            triggerElement: caseGif,
            triggerHook: 0.9,
            offset: 0,
            reverse: false
        }).addTo(controller).on('start', function () {
            restartAnim();
        });
    }


    //videoLife.addIndicators();

    /* Case hero */
    // var caseTop = new TimelineMax();
    //
    // caseTop.fromTo($('.main-article__head--case'), 0.4, {y: '10%', autoAlpha: 0, ease: Linear.easeNone}, {y: '0%', autoAlpha: 1, ease: Linear.easeNone});
    //
    // var caseHero = new ScrollMagic.Scene({
    //     triggerElement: '.page__section--white',
    //     triggerHook: 0.75,
    //     offset: 0,
    //     reverse: false
    // }).setTween(caseTop).addTo(controller);

    //caseHero.addIndicators();


    /* Case content items */
    var casesList = $('.case-article');

    Array.prototype.forEach.call(casesList, function (item, index) {

        var nodeItems = item.childNodes;

        var imgCase = new TimelineMax();
        imgCase.fromTo(nodeItems[1], 0.4, {y: '20%', autoAlpha: 0, ease: Power0.easeNone}, {y: '0%', autoAlpha: 1, ease: Linear.easeNone});

        var textCase = new TimelineMax({delay: 0.2});
        textCase.fromTo(nodeItems[3], 0.4, {y: '20%', autoAlpha: 0, ease: Power0.easeNone}, {y: '0%', autoAlpha: 1, ease: Linear.easeNone});

        var casesItemTitle = new ScrollMagic.Scene({
            triggerElement: item,
            triggerHook: 0.75,
            offset: 0,
            reverse: false
        }).setTween(imgCase).addTo(controller);

        //casesItemTitle.addIndicators();

        var casesItemDesc = new ScrollMagic.Scene({
            triggerElement: item,
            triggerHook: 0.75,
            offset: 0,
            reverse: false
        }).setTween(textCase).addTo(controller);

        //casesItemDesc.addIndicators();

    });


    /* About us */
    var aboutUsCounts = $('[data-about-count]');

    if (aboutUsCounts !== null && typeof (aboutUsCounts) !== "undefined") {
        var aboutUsScene = new ScrollMagic.Scene({
            triggerElement: '[data-about-count]',
            triggerHook: 0.75,
            offset: 0,
            reverse: false
        }).addTo(controller).on('start', function () {

            setTimeout(projectCount.start.bind(projectCount), 100);
            setTimeout(yearsCount.start.bind(yearsCount), 400);
            setTimeout(countryCount.start.bind(countryCount), 700);
            setTimeout(officesCount.start.bind(officesCount), 1000);


        });

        //aboutUsScene.addIndicators();

    }


}(jQuery));
