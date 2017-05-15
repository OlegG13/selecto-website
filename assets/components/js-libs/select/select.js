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
        var selectItemTitle = this.innerHTML;
        var selectItemVal = this.getAttribute("data-select-val");
        $selectInput.val(selectItemVal);
        $selectBtn.html(selectItemTitle);
        closeSelect();
    }

    $selectBtn.on('click', function () {
        openSelect();
        console.log(this);
    });

    $dropDownItem.on('click', selectSelect);

    $(document).mouseup(function (e){
        if (!$select.is(e.target)
            && $select.has(e.target).length === 0) {
            closeSelect()
        }
    });

})();