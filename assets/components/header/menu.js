var menu = (function () {

    var $menuFrame = $('.menu'),
        $menuBtn = $('[data-btn-mobile-menu]'),
        $menuTopLine = $menuBtn.find('.mobile-menu-btn__line--top'),
        $menuMidLine = $menuBtn.find('.mobile-menu-btn__line--mid'),
        $menuBotLine = $menuBtn.find('.mobile-menu-btn__line--bot'),
        $header = $('.page__header'),
        isOpen = false;

    function openMenu() {
        console.log("Open!");
        _reverseStatus();
        $menuTopLine.addClass('mobile-menu-btn__line--top-active');
        $menuMidLine.addClass('mobile-menu-btn__line--mid-active');
        $menuBotLine.addClass('mobile-menu-btn__line--bot-active');
        $header.addClass('page__header--menu-open');
        $menuFrame.addClass('menu--open');
    }

    function closeMenu() {
        console.log("Close!");
        _reverseStatus();

        $menuTopLine.removeClass('mobile-menu-btn__line--top-active');
        $menuMidLine.removeClass('mobile-menu-btn__line--mid-active');
        $menuBotLine.removeClass('mobile-menu-btn__line--bot-active');
        $header.removeClass('page__header--menu-open');
        $menuFrame.removeClass('menu--open');
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