var app = {
  dom: {
    $alert: $(".alert")
  }
};
app.dom.$contact_form = $(".js-popup__content__form");

function sendMail($form) {
  var formData = $form.serializeObject();

  //show spinner
  $('.js-preloader').removeClass('hidden-block');

  fetch("/php/mail.php", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(function(response) {
    //hide spinner
    $('.js-preloader').addClass('hidden-block');
    $('.js-popup__content__form').addClass('hidden-block');

    if (response === "ok") {
      //show success
      TweenMax
        .fromTo('.js-success-response', 0.5, {
          opacity: 0,
          display: 'none'
        }, {
          opacity: 1,
          display: 'block'
        })
    } else {
      //show error
      TweenMax
        .fromTo('.js-error-response', 0.5, {
          opacity: 0,
          display: 'none'
        }, {
          opacity: 1,
          display: 'block'
        })
    }
  });
}

(function(dom) {
  var rules_contact = {
    name: "required",
    message: "required",
    email: {
      required: true,
      email: true
    }
  };
  dom.$contact_form.validate({
    rules: rules_contact,
    errorPlacement: function(error, element) {
      return true;
    }
  });
  $.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || "");
      } else {
        o[this.name] = this.value || "";
      }
    });
    return o;
  };
  dom.$contact_form.on("submit", function(e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.valid()) {
      sendMail($this);
    }
  });
})(app.dom);
