//Работа слайдера
$(document).ready(function() {
  $(function() {
    let liCount = $('.slider li').length;
    let ulWidth = (liCount * 100);
    let liWidth = (100 / liCount);
    let leftIncrement = (ulWidth / liCount);
    $('.slider').height($('.slider li').height());
    $('.slider img').on('load', function() {
      $('.loader').fadeOut();
      $('.slider').height($(this).height());
    })
    $(window).resize(function() {
      $('.slider').css('height', $('.slider li').height());
    });
    $('.slider ul').css('width', ulWidth + '%');
    $('.slider li').css('width', liWidth + '%');
    $('.slider').append(function() {
      $(this).append('<div class="navigator"></div>');
      $(this).prepend('<span class="prev"></span><span class="next"></span>');
      $(this).find('li').each(function() {
        $('.navigator').append('<span></span>');
      });
    });
    $('.slider').css('height', $('.slider li').height());
    $('.navigator span:first-child').addClass('active');
    if(liCount > 2) {
      $('.slider ul').css('margin-left', -leftIncrement + '%');
      $('.slider ul li:last-child').prependTo('.slider ul');
    } else if(liCount == 1) {
      $('.slider span').css('display', 'none');
      $('.autoPlay').css('display', 'none');
    } else if(liCount == 2) {
      $('.slider .prev').css('display', 'none');
    }

    function moveLeft() {
      $('.slider ul').animate({
        left: -leftIncrement + '%'
      }, 500, function() {
        $('.slider ul li:first-child').appendTo('.slider ul');
        $('.slider ul').css('left', '');
        if($('.navigator span').hasClass('active')) {
          if($('.navigator span.active').is(':last-child')) {
            $('span.active').removeClass('active');
            $('.navigator span:first-child').addClass('active');
          } else {
            $('span.active').next().addClass('active');
            $('span.active').prev().removeClass('active');
          }
        }
      });
    }

    function moveRight() {
      $('.slider ul').animate({
        left: leftIncrement + '%'
      }, 500, function() {
        $('.slider ul li:last-child').prependTo('.slider ul');
        $('.slider ul').css('left', '');
        if($('.navigator span').hasClass('active')) {
          if($('.navigator span.active').is(':first-child')) {
            $('span.active').removeClass('active');
            $('.navigator span:last-child').addClass('active');
          } else {
            $('span.active').prev().addClass('active');
            $('span.active').next().removeClass('active');
          }
        }
      });
    }
    if(liCount > 1) {
      invertalValue = setInterval(function() {
        moveLeft();
      }, 5000);
    }
    $('.prev').click(function() {
      moveRight();
    });
    $('.next').click(function() {
      moveLeft();
    });
  });
});
/*Показ дополнительных картинок*/
let more = document.querySelectorAll('.news__deeper');
let box = document.querySelectorAll('.news__img');
for(let i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function() {
    let showPerClick = 3;
    let hidden = this.parentNode.querySelectorAll('img.hidden');
    if(hidden.length > 0) {
      for(let i = 0; i < showPerClick; i++) {
        if(!hidden[i]) return this.outerHTML = "";
        hidden[i].classList.add('news__img');
        hidden[i].classList.remove('hidden');
      }
    };
  });
}
/*Появление блока выдвигающегося меню*/
let menuTrigger = document.querySelector('.item-logo__inner-menu');
let menuTouch = document.querySelectorAll('.slide-menu');
let shiftBlock = document.querySelector('.shift__down');
for(let i = 0; i <= menuTouch.length - 1; i++) {
  menuTouch[i].addEventListener('mouseover', function() {
    shiftBlock.classList.add('shift-show');
  });
  menuTouch[i].addEventListener('mouseout', function() {
    shiftBlock.classList.remove('shift-show');
  });
}
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
