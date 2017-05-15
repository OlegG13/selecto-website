;(function($){

    // hero animation
    //var options = {"particles":{"number":{"value":99,"density":{"enable":true,"value_area":552.4033491425909}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":70,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1.5782952832645452,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false};

    var options = {
        "particles": {
        "number": {
            "value": 80,
                "density": {
                "enable": true,
                    "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
                "stroke": {
                "width": 0,
                    "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                    "width": 100,
                    "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
                "random": false,
                "anim": {
                "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
            }
        },
        "size": {
            "value": 3,
                "random": true,
                "anim": {
                "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
            }
        },
        "line_linked": {
            "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
        },
        "move": {
            "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
            }
        }
    },
        "interactivity": {
        "detect_on": "canvas",
            "events": {
            "onhover": {
                "enable": true,
                    "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                    "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                    "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
            },
            "repulse": {
                "distance": 200,
                    "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
        "retina_detect": true
    }


    if (document.getElementById("slide01") !== null) {
        particlesJS("slide01", options);
    }

    $(document).ready(function() {

        $(".chosen-select").chosen({
            max_selected_options: 5,
            width: "95%",
            disable_search: true
            }).on('chosen:showing_dropdown', function() {
                //$(this).next('.chosen-container').children('.chosen-drop').css({'height': chosenHeight}).slideDown(400);
            }).on('chosen:hiding_dropdown', function () {
                //$(this).next('.chosen-container').children('.chosen-drop').slideUp(400);
            });
        });

    // Chosen.prototype.results_show = function() {
    //     if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
    //         this.form_field_jq.trigger("chosen:maxselected", {
    //             chosen: this
    //         });
    //         return false;
    //     }
    //     this.container.addClass("chosen-with-drop");
    //
    //     //Add Here
    //     var windowHeight = $(window).height() + $('html').scrollTop(),
    //         totalHeight  = this.container.height() + Math.ceil(this.container.offset().top)+270;
    //     if (totalHeight > windowHeight) {
    //         $('.chosen-drop').css({'top':'auto',"bottom":"100%","border-top":"1px solid #aaaaaa"});
    //     }
    //     //End
    //
    //     console.log("Height");
    //
    //     this.results_showing = true;
    //     this.search_field.focus();
    //     this.search_field.val(this.search_field.val());
    //     this.winnow_results();
    //     return this.form_field_jq.trigger("chosen:showing_dropdown", {
    //         chosen: this
    //     });
    // };

})(jQuery);





