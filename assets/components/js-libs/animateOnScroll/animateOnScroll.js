;(function() {

    var headers = ["#slide01", "#slide02", "#slide03", "#slide04", "#slide05", "#slide06", "#slide07"];

    // init
    var controller = new ScrollMagic.Controller();

    // build tween
    //var tween = TweenMax.to("#target", 0.5, {backgroundColor: "black"});


    // function countFunc() {
    //     return demo.start();
    // };

    // SCENE 1
    // create scenes for each of the headers
    headers.forEach(function (header, index) {

        // number for highlighting scenes
        var num = index+1;

        // make scene
        var headerScene = new ScrollMagic.Scene({
            triggerElement: header, // trigger CSS animation when header is in the middle of the viewport
            offset: -100 // offset triggers the animation 95px earlier than middle of the viewport, adjust to your liking
        })
            .setClassToggle('#slide0'+num, 'is-active') // set class to active slide
            //.addIndicators() // add indicators (requires plugin), use for debugging
            //.setTween(tween)
            //.setPin("#target")
            .on('start', function () {
                if (num === 2) {
                    setTimeout(projectCount.start.bind(projectCount), 1000);
                    setTimeout(yearsCount.start.bind(yearsCount), 1300);
                    setTimeout(peopleCount.start.bind(peopleCount), 1600);
                    setTimeout(officesCount.start.bind(officesCount), 1900);
                }
            })
            .addTo(controller);
    });



})();