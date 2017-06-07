;(function () {

    var sliders = $('[data-slider="review"]');

    sliders.each(function () {

        var scope = $(this);
        var slides = $('[data-slider-slides]', scope).attr('data-slider-slides');

        $('[data-slider-slides]', scope).find('[data-slider-slide]').css('float', 'left').end().slick({
            dots: true,
            arrows: true,
            infinite: false,
            adaptiveHeight: false,
            slidesToShow: $.slickSlider.getFirstCol(slides),
            autoplay: false,
            autoplaySpeed: 3000,
            swipeToSlide: true,
            mobileFirst: true,
            infinite: true,
            rows: 1,
            prevArrow: $('[data-slider-arrow-left]', scope).removeClass('slider__arrow--hidden'),
            nextArrow: $('[data-slider-arrow-right]', scope).removeClass('slider__arrow--hidden'),
            responsive: $.slickSlider.getCols(slides)
        });

    });


    var sliderTablet = $('[data-slider="tablet"]');

    sliderTablet.each(function () {

        var scope = $(this);
        var slides = $('[data-slider-slides]', scope).attr('data-slider-slides');

        $('[data-slider-slides]', scope).find('[data-slider-slide]').css('float', 'left').end().slick({
            dots: true,
            arrows: true,
            infinite: false,
            adaptiveHeight: false,
            slidesToShow: $.slickSlider.getFirstCol(slides),
            autoplay: false,
            autoplaySpeed: 3000,
            swipeToSlide: true,
            mobileFirst: true,
            infinite: true,
            rows: 1,
            prevArrow: $('[data-slider-arrow-left]', scope).removeClass('slider__arrow--hidden'),
            nextArrow: $('[data-slider-arrow-right]', scope).removeClass('slider__arrow--hidden'),
            responsive: $.slickSlider.getCols(slides)
        });

    });

})();