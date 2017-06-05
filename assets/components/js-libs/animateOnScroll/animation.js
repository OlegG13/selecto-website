(function ($) {

    var screenW = screen.width;

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // get all break up sections
    var breakSections = ["#particlesJS"];

    // Enable ScrollMagic only for desktop, disable on touch and mobile devices
    if (document.getElementById("particlesJS") !== null) {
        // move bcg container when intro gets out of the the view
        var introTl = new TimelineMax();

        introTl.to($('#particlesJS'), 0.2, {autoAlpha: 0, ease: Power0.easeNone}, '-=0.01');
        //.to($('.page__top header, .scroll-hint'), 0.2, {autoAlpha: 0, ease:Power0.easeNone})
        //.to($('#particlesJS .hero__title'), 1.4, {y: '10%', ease:Power1.easeOut}, '-=0.2');

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

    var footerTl = new TimelineMax();
    footerTl.to($('.page__footer'), 0.2, {autoAlpha: 1, ease: Power0.easeNone}, '=0.1');

    var offsetBottom = $('[data-bottom]').data(),
        offsetBottomVal = offsetBottom.bottom;
    var footerSceneMain = new ScrollMagic.Scene({
        triggerElement: '[data-bottom]',
        triggerHook: 1,
        offset: offsetBottomVal,
        duration: "100%"
    }).setTween(footerTl).addTo(controller);


    /* Parallax photos */

    var animationPhoto = new TimelineMax();
    animationPhoto.fromTo($('.animate-block-top .animate-block__photo'), 1, {y: '0%', ease: Power0.easeNone}, {y: '70%', ease: Linear.easeNone}, '+=0.1');

    var animationPhoto2 = new TimelineMax();
    animationPhoto2.fromTo($('.animate-block .animate-block__photo'), 1, {y: '0%', ease: Power0.easeNone}, {y: '70%', ease: Linear.easeNone}, '+=0.1');

    var animationPhotoObj = $('.animate-block');

    Array.prototype.forEach.call(animationPhotoObj, function (item, index) {
        var newAnimationPhotoScene = new ScrollMagic.Scene({
            triggerElement: '.animate-block-top',
            triggerHook: 0,
            offset: -300,
            duration: "100%"
        }).setTween(animationPhoto).addTo(controller);

        //newAnimationPhotoScene.addIndicators();
    });

    var animationPhotoObjTop = $('.animate-block-top');

    Array.prototype.forEach.call(animationPhotoObjTop, function (item, index) {
        var newAnimationPhotoSceneTop = new ScrollMagic.Scene({
            triggerElement: '.animate-block',
            offset: -300,
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
        })
        //.setClassToggle(item, 'chess-list__item--active')
            .setTween(text).addTo(controller);

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
    //videoLife.addIndicators();

    /* About us (Principles) */

    // var $principles = $('[data-principles]'),
    //     principlesTitle = $principles.find('[data-principles-title]'),
    //     principlesItems = $principles.find('[data-principles-items]');
    //
    // Array.prototype.forEach.call(casesList, function (item, index) {
    //
    //
    //     var principlesTitleTM = new TimelineMax();
    //     principlesTitleTM.fromTo(principlesTitle, {y: '10%', autoAlpha: 0, ease: Power0.easeNone}, {
    //         y: '0%',
    //         autoAlpha: 1,
    //         ease: Linear.easeNone
    //     });
    //
    //     var principlesItemsTM = new TimelineMax({delay: 0.5});
    //     principlesItemsTM.fromTo(principlesItems, {y: '10%', autoAlpha: 0, ease: Power0.easeNone}, {
    //         y: '0%',
    //         autoAlpha: 1,
    //         ease: Linear.easeNone
    //     });
    //
    //     var principlesTitleScene = new ScrollMagic.Scene({
    //         triggerElement: $principles,
    //         triggerHook: 0.75,
    //         offset: 0,
    //         reverse: false
    //     }).setTween(principlesTitleTM).addTo(controller);
    //
    //     principlesTitleScene.addIndicators();
    //
    //     var principlesItemsScene = new ScrollMagic.Scene({
    //         triggerElement: $principles,
    //         triggerHook: 0.75,
    //         offset: 0,
    //         reverse: false
    //     }).setTween(principlesItemsTM).addTo(controller);
    //
    //     principlesItemsScene.addIndicators();
    //
    // })
}(jQuery));
