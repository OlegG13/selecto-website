(function ($) {

    var screenW = screen.width;
    var screenH = screen.height;
    var screenHHalf = screenH/2;
    var contentH = $(".page__content").height();
    var footerH = $(".page__footer").height();
    var footerShow = contentH - footerH - footerH - screenH;

    console.log(contentH);
    console.log(footerShow + 'footerShow');
    console.log(screenH);


    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // get all break up sections
    var breakSections = ["#particlesJS"];

    // Enable ScrollMagic only for desktop, disable on touch and mobile devices
    if (document.getElementById("particlesJS") !== null) {
        // move bcg container when intro gets out of the the view
        var introTl = new TimelineMax();

        introTl
        //.to($('.page__top header, .scroll-hint'), 0.2, {autoAlpha: 0, ease:Power0.easeNone})
            .to($('#particlesJS'), 0.2, {autoAlpha: 0, ease: Power0.easeNone}, '-=0.01');
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

    // var introScene = new ScrollMagic.Scene({
    //     //triggerElement: '.page__content',
    //     triggerHook: 1,
    //     offset: footerShow,
    //     duration: "100%"
    // }).setTween(footerTl)
    //     .addTo(controller);


    //Main Page
    var footerSceneMain = new ScrollMagic.Scene({
        triggerElement: '.page__bottom',
        triggerHook: 1,
        offset: -350,
        duration: "100%"
    }).setTween(footerTl)
        .addTo(controller);

    // About us
    var footerSceneAbout = new ScrollMagic.Scene({
        triggerElement: '[data-bottom-about]',
        triggerHook: 1,
        offset: -450,
        duration: "100%"
    }).setTween(footerTl)
        .addTo(controller);

    // Cases list
    var footerSceneCasesList = new ScrollMagic.Scene({
        triggerElement: '[data-bottom-cases-list]',
        triggerHook: 1,
        offset: -400,
        duration: "100%"
    }).setTween(footerTl)
        .addTo(controller);

    // Cases Msfit
    var footerSceneCasesMsfit = new ScrollMagic.Scene({
        triggerElement: '[data-bottom-msfit]',
        triggerHook: 1,
        offset: -400,
        duration: "100%"
    }).setTween(footerTl)
        .addTo(controller);


}(jQuery));
