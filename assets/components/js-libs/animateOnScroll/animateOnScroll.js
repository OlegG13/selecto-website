// ;(function() {
//
//     var slide1 = document.getElementById("slide01");
//     var slide2 = document.getElementById("slide02");
//     var slide3 = document.getElementById("slide03");
//     var slide4 = document.getElementById("slide04");
//     var slide5 = document.getElementById("slide05");
//     var slide6 = document.getElementById("slide06");
//     var slide7 = document.getElementById("slide07");
//
//     var headers = ["#slide01", "#slide02", "#slide03", "#slide04", "#slide05", "#slide06", "#slide07"];
//
//     // init
//     var controller = new ScrollMagic.Controller();
//
//     // build tween
//     //var tween = TweenMax.to("#target", 0.5, {backgroundColor: "black"});
//
//
//     // function countFunc() {
//     //     return demo.start();
//     // };
//
//     // SCENE 1
//     // create scenes for each of the headers
//     if (slide1 !== null || slide2 !== null || slide3 !== null || slide4 !== null || slide5 !== null || slide6 !== null || slide7 !== null) {
//         headers.forEach(function (header, index) {
//
//             // number for highlighting scenes
//             var num = index+1;
//
//             // make scene
//             var headerScene = new ScrollMagic.Scene({
//                 triggerElement: header, // trigger CSS animation when header is in the middle of the viewport
//                 offset: -100 // offset triggers the animation 95px earlier than middle of the viewport, adjust to your liking
//             }).setClassToggle('#slide0'+num, 'is-active') // set class to active slide
//             //.addIndicators() // add indicators (requires plugin), use for debugging
//             //.setTween(tween)
//             //.setPin("#target")
//                 .on('start', function () {
//                     if (num === 2) {
//                         setTimeout(projectCount.start.bind(projectCount), 1000);
//                         setTimeout(yearsCount.start.bind(yearsCount), 1300);
//                         setTimeout(peopleCount.start.bind(peopleCount), 1600);
//                         setTimeout(officesCount.start.bind(officesCount), 1900);
//                     }
//                 }).addTo(controller);
//         });
//     }
// })();

;(function() {

    function AnimationFactory() {
        this.controller = new ScrollMagic.Controller();
        this.scenes = [];
    }

    AnimationFactory.prototype = {

        controller: null,

        scenes: null,

        constructor: AnimationFactory,

        createAnimation: function(element, args) {

            //
            console.log(element);

            element = typeof element === "string"
                ? document.getElementById(element)
                : element;

            var tween = TweenMax.to(element, args.tween.duration, args.tween.options),
                scene = new ScrollMagic.Scene(args.scene.options);

            scene.setTween(tween)
            scene.addTo(this.controller)
            //scene.addIndicators();

            this.scenes.push(scene);

            return this;
        },

        createAnimations: function(element) {
            var tween = null,
                scene = null,
                elements = element.querySelectorAll("[data-animation]"),
                i = 0,
                args;

            for (i; i < elements.length; i++) {
                args = JSON.parse(elements[i].getAttribute("data-animation"));
                this.createAnimation(elements[i], args);
            }
        }

    };

    var animationFactory = new AnimationFactory();

    window.onload = function() {
        animationFactory.createAnimations(document.body);
    };


})();