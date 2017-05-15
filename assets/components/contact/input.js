
;(function () {

    $('.material__field').on('focus', function () {
        $(this).next('.material__label').addClass('active');
    });
    $('.material__field').on('blur', function () {
        var $this = $(this);
        if (!$this.val()) {
            $this.next('.material__label').removeClass('active');
        }
    });

})();