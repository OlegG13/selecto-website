var count = (function () {

    var $counter = $('[data-count]');

    function init() {
        return $counter.each(function () {
            console.log($(this))
        })
    }

    return {
        init: init
    }

})();