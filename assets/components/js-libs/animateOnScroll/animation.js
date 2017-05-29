(function ($) {

    var screenW = screen.width;

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // get all slides
    //var slides = [".page__top", ".page__section--count", ".page__section--our-work"];

    // get all headers in slides that trigger animation
    //var headers = [".page__top page__header--main", ".page__section--count .main-article__head--main", "#slide03 header"];

    // get all break up sections
    var breakSections = ["#particlesJS"];

    // Enable ScrollMagic only for desktop, disable on touch and mobile devices
    if (screenW > 992) {

        // move bcg container when intro gets out of the the view
        var introTl = new TimelineMax();

        introTl
            //.to($('.page__top header, .scroll-hint'), 0.2, {autoAlpha: 0, ease:Power0.easeNone})
            //.to($('#particlesJS .hero__title'), 1.4, {y: '0%', ease:Power1.easeOut}, '-=0.2')
            .to($('#particlesJS'), 0.2, {autoAlpha: 0, ease:Power0.easeNone}, '-=0.01');

        var introScene = new ScrollMagic.Scene({
            triggerElement: '#particlesJS',
            triggerHook: 0,
            offset: 0,
            duration: "100%"
        })
            .setTween(introTl)
            .addTo(controller);

        /* First slide. Begin */
        breakSections.forEach(function (breakSection, index) {

            // number for highlighting scenes
            var breakID = $(breakSection).attr('id');

            console.log(breakID);

            // make scene
            var breakScene = new ScrollMagic.Scene({
                triggerElement: breakSection, // trigger CSS animation when header is in the middle of the viewport
                triggerHook: 0.75
            }).setClassToggle('#'+breakID, 'is-active')
                .addTo(controller);
        });
        /* First slide. End */

    }

}(jQuery));
