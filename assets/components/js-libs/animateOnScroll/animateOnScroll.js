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

            element = typeof element === "string"
                ? document.getElementById(element)
                : element;

            var tween = TweenMax.to(element, args.tween.duration, args.tween.options),
                scene = new ScrollMagic.Scene(args.scene.options);

            scene.setTween(tween)
            .addTo(this.controller)
            .on('start', function () {
                if (element.getAttribute("data-animation") === 'ourSolutionCount') {
                    setTimeout(projectCount.start.bind(projectCount), 100);
                    setTimeout(yearsCount.start.bind(yearsCount), 400);
                    setTimeout(peopleCount.start.bind(peopleCount), 700);
                    setTimeout(officesCount.start.bind(officesCount), 1000);
                }
                if (element.getAttribute("data-animation") === 'ourSolution') {
                    setTimeout(projectCount.start.bind(projectCount), 100);
                    setTimeout(yearsCount.start.bind(yearsCount), 400);
                    setTimeout(countryCount.start.bind(countryCount), 700);
                    setTimeout(officesCount.start.bind(officesCount), 1000);
                }
                if (element.getAttribute("data-animation") === 'lifeCount') {
                    setTimeout(joinedLifeCount.start.bind(joinedLifeCount), 100);
                    setTimeout(platformsLifeCount.start.bind(platformsLifeCount), 400);
                    setTimeout(peopleLifeCount.start.bind(peopleLifeCount), 700);
                    setTimeout(publicationsLifeCount.start.bind(publicationsLifeCount), 1000);
                }
                if (element.getAttribute("data-animation") === 'msfitCount') {
                    setTimeout(joinedMsfitCount.start.bind(joinedMsfitCount), 100);
                    setTimeout(platformsMsfitCount.start.bind(platformsMsfitCount), 400);
                    setTimeout(peopleMsfitCount.start.bind(peopleMsfitCount), 700);
                    setTimeout(publicationsMsfitCount.start.bind(publicationsMsfitCount), 1000);
                }

                if (element.getAttribute("data-animation") === 'sproutCount') {
                    setTimeout(joinedSproutCount.start.bind(joinedSproutCount), 100);
                    setTimeout(platformsSproutCount.start.bind(platformsSproutCount), 400);
                    setTimeout(peopleSproutCount.start.bind(peopleSproutCount), 700);
                    setTimeout(publicationsSproutCount.start.bind(publicationsSproutCount), 1000);
                }


            });
            //scene.addIndicators();

            this.scenes.push(scene);

            return this;
        },

        createAnimations: function(element) {
            var tween = null,
                scene = null,
                elements = element.querySelectorAll("[data-animation]"),
                i = 0,
                args,
                scenes = {
                    top: '{"tween": { "duration": 0.5, "options": { "opacity": 1 } }, "scene": { "options": { "offset": 0, "reverse": false } } }',
                    heroTitle: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "offset": 0, "reverse": true } } }',
                    heroBorder: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "offset": 0, "reverse": true } } }',
                    ourSolutionHead: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--count", "offset": -250, "reverse": false } } }',
                    ourSolutionText: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--count", "offset": -100, "reverse": false } } }',
                    ourSolutionCount: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--count", "offset": 0, "reverse": false } } }',
                    ourSolutionBtn: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--count", "offset": 100, "reverse": false } } }',

                    workWithHead: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--our-work", "offset": -200, "reverse": false } } }',
                    tableInfo: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--our-work", "offset": 0, "reverse": false } } }',
                    technologyList: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--our-work", "offset": 500, "reverse": false } } }',
                    brandsTop: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".brands", "offset": -350, "reverse": false } } }',
                    brandsBottom: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".brands", "offset": -50, "reverse": false } } }',
                    review: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".review", "offset": -300, "reverse": false } } }',
                    blogHead: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--blog", "offset": -200, "reverse": false } } }',
                    blog: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--blog", "offset": -100, "reverse": false } } }',
                    startProject: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".action-project", "offset": -250, "reverse": false } } }',
                    footer: '{"tween": { "duration": 0.5, "options": { "y": 0 } }, "scene": { "options": { "triggerElement": ".footer", "offset": -550, "reverse": false } } }',

                    aboutSelecto: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--about", "offset": -200, "reverse": false } } }',
                    columns: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--about", "offset": 0, "reverse": false } } }',
                    ourSolution: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--map", "offset": 869, "reverse": false } } }',
                    mapTitle: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--map", "offset": -200, "reverse": false } } }',
                    principlesTitle: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--map", "offset": -200, "reverse": false } } }',

                    lifeCount: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--result", "offset": 220, "reverse": false } } }',
                    msfitCount: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--result", "offset": 220, "reverse": false } } }',
                    sproutCount: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "triggerElement": ".page__section--result", "offset": 220, "reverse": false } } }',
                    menu: '{"tween": { "duration": 0.5, "options": { "opacity": 1, "y": 0 } }, "scene": { "options": { "offset": 790, "reverse": true } } }',
                    msfitcases: '{"tween": { "duration": 0.5, "options": { "opacity": 1 } }, "scene": { "options": { "offset": 0, "reverse": false } } }',
                    sproutcases: '{"tween": { "duration": 0.5, "options": { "opacity": 1 } }, "scene": { "options": { "offset": 0, "reverse": false } } }',
                    lifecases: '{"tween": { "duration": 0.5, "options": { "opacity": 1 } }, "scene": { "options": { "offset": 0, "reverse": false } } }',
                    dopecases: '{"tween": { "duration": 0.5, "options": { "opacity": 1 } }, "scene": { "options": { "offset": 0, "reverse": false } } }'
                };

            for (i; i < elements.length; i++) {

                    var animateElName = elements[i].getAttribute("data-animation");
                    args = JSON.parse(scenes[animateElName]);
                    this.createAnimation(elements[i], args);

            }
        }

    };

    var animationFactory = new AnimationFactory();

    window.onload = function() {
        animationFactory.createAnimations(document.body);
    };


})();
