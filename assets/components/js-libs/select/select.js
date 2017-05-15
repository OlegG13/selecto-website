var select = (function () {

    var $select = $('.select'),
        $dropDown = $select.find('.select__drop'),
        $dropDownItem = $select.find('.select__item'),
        $selectInput = $select.find('.select__input'),
        $selectBtn = $select.find('.select__title');

    function openSelect() {
        $dropDown.slideDown(300);
    }

    function closeSelect() {
        $dropDown.slideUp(300);
    }

    function selectSelect() {
        console.log(this);
        closeSelect();
    }

    $selectBtn.on('click', function () {
        openSelect();
    });

    $dropDownItem.on('click', function () {
        selectSelect();
    });

    return {
        open: openSelect,
        close: closeSelect
    }
})();