(function ($) {
  "use strict";
  /*=================================
      JS Index Here
  ==================================*/
  /*
    01. On Load Function
    02. Preloader
    03. Mobile Menu Active
    04. Sticky fix
    05. Scroll To Top
    06. Set Background Image
    07. Slider Activations
    08. Counter Up
    09. Slick Refresh
    10. Form Validation
    11. Shape Mockup
    12. Indicator
    13. WOW Animation
    00. Right Click Disable
    00. Inspect Element Disable
  */
  /*=================================
      JS Index End
  ==================================*/
  /*

  /*---------- 01. On Load Function ----------*/
  $(window).on('load', function () {
    $('.preloader').fadeOut();
      setTimeout(function() {
        if ($('.slick-slider'.length)) {
            $('.slick-slider').each(function() {
                $(this).slick('refresh');
            });
        }
    }, 300);
  });

  /*---------- 02. Preloader ----------*/
  if ($('.preloader').length > 0) {
    $('.preloaderCls').each(function () {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.preloader').css('display', 'none');
      })
    });
  };

  /*---------- 03. Mobile Menu Active ----------*/
  $.fn.otmobilemenu = function (options) {
    var opt = $.extend({
      menuToggleBtn: '.ot-menu-toggle',
      bodyToggleClass: 'ot-body-visible',
      subMenuClass: 'ot-submenu',
      subMenuParent: 'ot-item-hot-children',
      subMenuParentToggle: 'ot-active',
      meanExpandClass: 'ot-mean-expand',
      appendElement: '<span class="ot-mean-expand"></span>',
      subMenuToggleClass: 'ot-open',
      toggleSpeed: 400,
    }, options);

    return this.each(function () {
      var menu = $(this); // Select menu

      // Menu Show & Hide
      function menuToggle() {
        menu.toggleClass(opt.bodyToggleClass);

        // collapse submenu on menu hide or show
        var subMenu = '.' + opt.subMenuClass;
        $(subMenu).each(function () {
          if ($(this).hasClass(opt.subMenuToggleClass)) {
            $(this).removeClass(opt.subMenuToggleClass);
            $(this).css('display', 'none')
            $(this).parent().removeClass(opt.subMenuParentToggle);
          };
        });
      };

      // Class Set Up for every submenu
      menu.find('li').each(function () {
        var submenu = $(this).find('ul');
        submenu.addClass(opt.subMenuClass);
        submenu.css('display', 'none');
        submenu.parent().addClass(opt.subMenuParent);
        submenu.prev('a').append(opt.appendElement);
        submenu.next('a').append(opt.appendElement);
      });

      // Toggle Submenu
      function toggleDropDown($element) {
        if ($($element).next('ul').length > 0) {
          $($element).parent().toggleClass(opt.subMenuParentToggle);
          $($element).next('ul').slideToggle(opt.toggleSpeed);
          $($element).next('ul').toggleClass(opt.subMenuToggleClass);
        } else if ($($element).prev('ul').length > 0) {
          $($element).parent().toggleClass(opt.subMenuParentToggle);
          $($element).prev('ul').slideToggle(opt.toggleSpeed);
          $($element).prev('ul').toggleClass(opt.subMenuToggleClass);
        };
      };

      // Submenu toggle Button
      var expandToggler = '.' + opt.meanExpandClass;
      $(expandToggler).each(function () {
        $(this).on('click', function (e) {
          e.preventDefault();
          toggleDropDown($(this).parent());
        });
      });

      // Menu Show & Hide On Toggle Btn click
      $(opt.menuToggleBtn).each(function () {
        $(this).on('click', function () {
          menuToggle();
        })
      })

      // Hide Menu On out side click
      menu.on('click', function (e) {
        e.stopPropagation();
        menuToggle()
      })

      // Stop Hide full menu on menu click
      menu.find('div').on('click', function (e) {
        e.stopPropagation();
      });

    });
  };

  $('.ot-menu-wrapper').otmobilemenu();


  /*---------- 04. Sticky fix ----------*/
  var lastScrollTop = '';
  var scrollToTopBtn = '.scrollToTop'

  function stickyMenu($targetMenu, $toggleClass, $parentClass) {
    var st = $(window).scrollTop();
    var height = $targetMenu.css('height');
    $targetMenu.parent().css('min-height', height);
    if ($(window).scrollTop() > 400) {
      $targetMenu.parent().addClass($parentClass);

      if (st > lastScrollTop) {
        $targetMenu.removeClass($toggleClass);
      } else {
        $targetMenu.addClass($toggleClass);
      };
    } else {
      $targetMenu.parent().css('min-height', '').removeClass($parentClass);
      $targetMenu.removeClass($toggleClass);
    };
    lastScrollTop = st;
  };
  $(window).on("scroll", function () {
    stickyMenu($('.sticky-active'), "active", "will-sticky");
    if ($(this).scrollTop() > 500) {
      $(scrollToTopBtn).addClass('show');
    } else {
      $(scrollToTopBtn).removeClass('show');
    }
  });

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 400) {
      $('.sticky-active').addClass('active');
    }
    else {
      $('.sticky-active').removeClass('active');
    }
  })

  /*---------- 05. Scroll To Top ----------*/
  $(scrollToTopBtn).each(function () {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, lastScrollTop / 3);
      return false;
    });
  })


  /*---------- 06. Set Background Image ----------*/
  if ($('[data-bg-src]').length > 0) {
    $('[data-bg-src]').each(function () {
      var src = $(this).attr('data-bg-src');
      $(this).css('background-image', 'url(' + src + ')');
      $(this).removeAttr('data-bg-src').addClass('background-image');
    });
  };

  /*----------- 07. Slider Activations ----------*/

  // Function For Custom Arrow Btn 
  $('[data-slick-next]').each(function () {
    $(this).on('click', function (e) {
      e.preventDefault()
      $($(this).data('slick-next')).slick('slickNext');
    })
  })

  $('[data-slick-prev]').each(function () {
    $(this).on('click', function (e) {
      e.preventDefault()
      $($(this).data('slick-prev')).slick('slickPrev');
    })
  })

  $("#testiSlide, #rideSlide").each(function () {
    $(this).slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '140px',
      appendDots: $(this).siblings('.slider-nav-wrap').find('.custom-dots'),
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            centerPadding: '240px',
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            centerPadding: '0px',
          }
        }
      ]
    });
  });

  /*----------- 08. Counter Up ----------*/
  $('.counter-number').counterUp({
    delay: 10,
    time: 1000
  });

  /*----------- 09. Slick Refresh ----------*/
  $(window).on("resize", function () {
    if ($('.slick-slider').length > 0) {
      $(".slick-slider").slick("refresh");
    };
  });

  /*----------- 10. Form Validation ----------*/
  (function ($) {
    "use strict";
  
    var form = '.ajax-contact';
    var invalidCls = 'is-invalid';
    var $email = '[name="email"]';
    var $validation = '[name="name"],[name="email"],[name="number"],[name="subject"],[name="message"]';// Must be use (,) without any space
    var formMessages = $('.form-messages');
    
    function sendContact() {
      var formData = $(form).serialize();
      var valid;
      valid = validateContact();
      if (valid) {
        jQuery.ajax({
          url: $(form).attr('action'),
          data: formData,
          type: "POST"
        })
        .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          formMessages.removeClass('error');
          formMessages.addClass('success');
          // Set the message text.
          formMessages.text(response);
          // Clear the form.
          $(form + ' input:not([type="submit"]),'+ form+' textarea').val('');
        })
        .fail(function (data){
          // Make sure that the formMessages div has the 'error' class.
          formMessages.removeClass('success');
          formMessages.addClass('error');
          // Set the message text.
          if (data.responseText !== '') {
            formMessages.html(data.responseText);
          } else {
            formMessages.html('Oops! An error occured and your message could not be sent.');
          }
        });
      };
    };
  
    function validateContact() {
      var valid = true;
      var formInput;
  
      function unvalid($validation) {
        $validation = $validation.split(',')
        for (var i = 0; i < $validation.length; i++) {
          formInput = form + ' ' + $validation[i];
          if (!$(formInput).val()) {
            $(formInput).addClass(invalidCls)
            valid = false;
          } else {
            $(formInput).removeClass(invalidCls)
            valid = true;
          };
        };
      };
      unvalid($validation);
      
      if (!$($email).val() || !$($email).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $($email).addClass(invalidCls)
        valid = false;
      } else {
        $($email).removeClass(invalidCls)
        valid = true;
      };
  
      
      return valid;
    };
  
    $(form).on('submit', function(element) {
      element.preventDefault();
      sendContact();
    });
  
  })(jQuery);

  /*----------- 11. Shape Mockup ----------*/
  $.fn.shapeMockup = function () {
    var $shape = $(this);
      $shape.each(function () {
          var $currentShape = $(this),
              shapeTop = $currentShape.data("top"),
              shapeRight = $currentShape.data("right"),
              shapeBottom = $currentShape.data("bottom"),
              shapeLeft = $currentShape.data("left");
          $currentShape
              .css({
                  top: shapeTop,
                  right: shapeRight,
                  bottom: shapeBottom,
                  left: shapeLeft,
              })
              .removeAttr("data-top")
              .removeAttr("data-right")
              .removeAttr("data-bottom")
              .removeAttr("data-left")
              .parent()
              .addClass("shape-mockup-wrap");
      });
  };

  if ($(".shape-mockup")) {
      $(".shape-mockup").shapeMockup();
  }

  /*----------- 12. Indicator ----------*/
    // Indicator
    $.fn.indicator = function () {
      var $menu = $(this),
          $linkBtn = $menu.find("a"),
          $btn = $menu.find("button");
      // Append indicator
      $menu.append('<span class="indicator"></span>');
      var $line = $menu.find(".indicator");
      // Check which type button is Available
      if ($linkBtn.length) {
          var $currentBtn = $linkBtn;
      } else if ($btn.length) {
          var $currentBtn = $btn;
      }
      // On Click Button Class Remove
      $currentBtn.on("click", function (e) {
          e.preventDefault();
          $(this).addClass("active");
          $(this).siblings(".active").removeClass("active");
          linePos();
      });
      // Indicator Position
      function linePos() {
          var $btnActive = $menu.find(".active"),
              $height = $btnActive.css("height"),
              $width = $btnActive.css("width"),
              $top = $btnActive.position().top + "px",
              $left = $btnActive.position().left + "px";
          $line.css({
              top: $top,
              left: $left,
              width: $width,
              height: $height,
          });
      }

      // if ($menu.hasClass('as-slider-tab')) {
      //   var linkslide = $menu.data('asnavfor');
      //   $(linkslide).on('afterChange', function (event, slick, currentSlide, nextSlide) {
      //     setTimeout(linePos, 10)
      //   });
      // }
      linePos();
  };

  // Call On Load
  if ($(".faq-tab").length) {
      $(".faq-tab").indicator();
  }
  // Call On Load
  if ($(".table-tab").length) {
      $(".table-tab").indicator();
  }

  /*----------- 13. WOW Animation ----------*/
  if ($(".wow").length) {
    new WOW().init();
  }

  /*----------- 00. Right Click Disable ----------*/
  // window.addEventListener('contextmenu', function (e) {
  //   // do something here... 
  //   e.preventDefault();
  // }, false);


  /*----------- 00. Inspect Element Disable ----------*/
  // document.onkeydown = function (e) {
  //   if (event.keyCode == 123) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
  //     return false;
  //   }
  // }
 
})(jQuery);