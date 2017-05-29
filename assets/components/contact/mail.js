var app = {
    dom: {
        $alert: $('.alert')
    }
};
app.dom.$contact_form = $('.js-popup__content__form');

function sendMail($form) {
    var formData = $form.serializeObject();
    //var $spinner = $form.find('.fa-spinner').addClass('is-show');
    fetch('/php/mail.php', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => {
        //$spinner.removeClass('is-show');
            if (res.ok) {
                TweenMax.fromTo(app.dom.$alert, 0.3, {
                    display: 'none',
                    y: '-100%',
                    opacity: 0,
                    className: '-=alert--danger'
                }, {display: 'block', y: '0%', opacity: 1, className: '+=alert--success'});

                app.dom.$alert.html('Success');

                setTimeout(() => {
                    TweenMax.to(app.dom.$alert, 0.3, {y: '-100%', opacity: 0});
                }, 3000);
            } else {
            TweenMax.fromTo(app.dom.$alert, 0.3, {
                display: 'none',
                y: '-100%',
                opacity: 0,
                className: '-=alert--success'
            }, {display: 'block', y: '0%', opacity: 1, className: '+=alert--danger'});
            app.dom.$alert.html('Error');
            setTimeout(() => {
                TweenMax.to(app.dom.$alert, 0.3, {y: '-100%', opacity: 0});
            }, 3000);
        }
    })
}

(function (dom) {
    var rules_contact = {
        name: "required",
        email: {
            required: true,
            email: true
        }
    };
    dom.$contact_form.validate({
        rules: rules_contact,
        errorPlacement: function (error, element) {
            return true;
        }
    });
    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
    dom.$contact_form.on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.valid()) {
            sendMail($this);
        }
        //console.log("Submit");
    });
})(app.dom);