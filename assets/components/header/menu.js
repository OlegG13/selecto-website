var menu = (function () {

    var $menuFrame = $('.menu'),
        $menuBtn = $('[data-btn-mobile-menu]'),
        $menuTopLine = $menuBtn.find('.mobile-menu-btn__line--top'),
        $menuMidLine = $menuBtn.find('.mobile-menu-btn__line--mid'),
        $menuBotLine = $menuBtn.find('.mobile-menu-btn__line--bot'),
        $menuAllLine = $menuBtn.find('.mobile-menu-btn__line'),
        $fixedHeader = $('.page__top--fx-na'),
        $header = $('.page__header'),
        $logo = $('.logo'),
        $page = $('.page'),
        isOpen = false,
        screenWidth = 0;

    function screenW() {
        screenWidth = screen.width;
    }

    $( window ).on("resize", function() {
        screenW();
    }).resize();

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            closeMenu();
        }
    });

    function openMenu() {
        _reverseStatus();
        $menuTopLine.addClass('mobile-menu-btn__line--top-active');
        $menuMidLine.addClass('mobile-menu-btn__line--mid-active');
        $menuBotLine.addClass('mobile-menu-btn__line--bot-active');
        //$menuAllLine.removeClass('mobile-menu-btn__line--dark');
        $logo.addClass('logo--menu');
        $header.css("width", screenWidth).addClass('page__header--menu-open');
        $menuFrame.addClass('menu--open');
        $page.css("overflow", "hidden");

        if ($fixedHeader.length !== 0) {
            $fixedHeader.css({"position": "relative", "z-index": "9999"});
            $fixedHeader.find(".mobile-menu-btn__line").css("background-color", "#fff");
        }
    }

    function closeMenu() {
        _reverseStatus();
        $menuTopLine.removeClass('mobile-menu-btn__line--top-active');
        $menuMidLine.removeClass('mobile-menu-btn__line--mid-active');
        $menuBotLine.removeClass('mobile-menu-btn__line--bot-active');
        //$menuAllLine.addClass('mobile-menu-btn__line--dark');
        $logo.removeClass('logo--menu');
        $header.css("width", "auto").removeClass('page__header--menu-open');
        $menuFrame.removeClass('menu--open');
        $page.css("overflow", "visible");
        if ($fixedHeader.length !== 0) {
            $fixedHeader.css({"position": "fixed", "z-index": "10"});
            $fixedHeader.find(".mobile-menu-btn__line").css("background-color", "#161C26");
        }
    }
    
    function _reverseStatus() {
        isOpen = !isOpen;
    }


    function _init() {
        if (isOpen === true) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    $menuBtn.on('click', function () {
       _init();
    });

    return {
        open: openMenu,
        close: closeMenu
    }
})();