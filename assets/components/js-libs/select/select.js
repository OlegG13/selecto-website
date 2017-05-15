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

    function selectSelect(event) {
        var selectItemTitle = this.innerHTML;
        $selectBtn.html(selectItemTitle);

        closeSelect();
    }

    $selectBtn.on('click', function () {
        openSelect();
    });

    $dropDownItem.on('click', selectSelect);

    return {
        open: openSelect,
        close: closeSelect
    }
})();