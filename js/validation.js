/*Валидация и AJAX для основной формы*/
$(document).ready(function() {
  $('button[type="submit"]').click(function() {
    $.validator.addMethod("lettersonly", function(value, element) {
      return this.optional(element) || /^[а-яА-ЯёЁa-zA-Z\-\ ]+$/.test(value);
    }, "Цифры в имени не допустимы");
    $('#mainform').validate({
      rules: {
        name: {
          required: true,
          lettersonly: true,
        },
        email: {
          required: true,
          email: true
        },
        text: {
          required: true,
        },
      },
      messages: {
        name: {
          required: "Заполните поле",
        },
        email: {
          required: "Заполните поле",
          email: "Неверный формат Email",
        },
        text: {
          required: "Заполните поле",
        },
      },
      errorElement: 'span',
      errorClass: 'invalid',
      validClass: 'valid',
      errorPlacement: function(error, element) {
        element.before(error);
        if(window.matchMedia('(min-width: 320px)').matches) {
          error.css({
            "position": "absolute",
            "left": "100px",
            "top": "-10px",
            "background-color": "transparent",
            "color": "red",
            "font-size": "10px"
          });
        };
        if(window.matchMedia('(min-width: 960px)').matches) {
          error.css({
            "position": "absolute",
            "left": "130px",
            "top": "-8px",
            "background-color": "transparent",
            "color": "red",
            "font-size": "14px"
          });
        };
      },
      highlight: function(element, errorClass, validClass) {
        $(element).addClass(errorClass).removeClass(validClass);
        $(element.form).find("input").addClass(errorClass);
      },
      submitHandler: function() {
        sendAjaxForm('mainform');
        return false;
      }
    });
  });

  function sendAjaxForm(mainform, url) {
    $.ajax({
      url: "https://httpbin.org/post", //Указано для примера
      type: "POST",
      dataType: "html",
      data: $("#" + mainform).serialize(),
      success: function(response) {
        let alertSuccess = document.querySelector('.alert__success');
        let popupThanks = document.querySelector('.popup-thanks');
        let nameField = document.querySelector('.name-field');
        let enterField = document.querySelector('.enter-field');
        let enterFieldArea = document.querySelector('.enter-field-area');
        alertSuccess.classList.add('add_alert_shift');
        popupThanks.classList.add('add_alert_popup');
        nameField.value = '';
        enterField.value = '';
        enterFieldArea.value = '';
      },
      error: function(response) {
        let alertError = document.querySelector('.alert__error');
        alertError.classList.add('add_alert_shift');
      }
    });
  }
});
/*Валидация и AJAX для формы футера*/
$(document).ready(function() {
  $('button[type="submit"]').click(function() {
    $('#footerform').validate({
      rules: {
        email: {
          required: true,
          email: true
        },
      },
      messages: {
        email: {
          required: "Заполните поле",
          email: "Неверный формат Email",
        },
      },
      errorElement: 'span',
      errorClass: 'invalid',
      validClass: 'valid',
      errorPlacement: function(error, element) {
        error.insertBefore(element);
        error.css({
          "position": "absolute",
          "left": "15px",
          "top": "35px",
          "background-color": "transparent",
          "color": "red"
        });
      },
      highlight: function(element, errorClass, validClass) {
        $(element).addClass(errorClass).removeClass(validClass);
        $(element.form).find("input").addClass(errorClass);
      },
      submitHandler: function() {
        sendAjaxForm('footerform');
        return false;
      }
    });
  });

  function sendAjaxForm(footerform, url) {
    $.ajax({
      url: "https://httpbin.org/post", //Указано для примера
      type: "POST",
      dataType: "html",
      data: $("#" + footerform).serialize(),
      success: function(response) {
        let alertSuccessFooter = document.querySelector('.alert__success-footer');
        let fieldPlace = document.querySelector('.field__place');
        alertSuccessFooter.classList.add('add_alert_shift-footer');
        fieldPlace.value = '';
      },
      error: function(response) {
        let alertErrorFooter = document.querySelector('.alert__error-footer');
        alertErrorFooter.classList.add('add_alert_shift-footer');
      }
    });
  }
});
