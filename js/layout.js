$('.slider-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  items: 1,
  center:true,
  autoHeight: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  navText: [
    "<i class='mdi mdi-chevron-left'></i>", 
    "<i class='mdi mdi-chevron-right'></i>"
  ],
  autoplaySpeed: 1000,
});

// XZOOM
$('.xzoom-carousel').owlCarousel({
  loop:false,
  autoplay: false,
  dots: false,
  margin:10,
  nav: true,
  items: 4,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
});

$(".xzoom, .xzoom-gallery").xzoom({tint: '#333', Xoffset: 15});
$('.main-image').bind('click', function () {
  var xzoom = $(this).data('xzoom');
  xzoom.closezoom();
  var gallery = xzoom.gallery().cgallery;
  var i, images = new Array();
  for (i in gallery) {
    images[i] = {
      src: gallery[i]
    };
  }
  $.magnificPopup.open({
    items: images,
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  event.preventDefault();
});

$('.news-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  dots: false,
  nav: false,
  items: 4,
  margin: 30,
  autoplaySpeed: 1000,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>", 
    "<i class='mdi mdi-chevron-right'></i>"
  ],
  responsive : {
    0 : {
      items: 1
    },
    576 : {
      items: 2, 
    },
    992 : {
      items: 3, 
    },
    1400 : {
      items: 4,
    }
  }
});

$('.service-carousel').owlCarousel({
  loop: true,
  autoplayTimeout: 3000,
  autoplay: false,
  dots: false,
  nav: false,
  items: 3,
  margin: 30,
  autoplaySpeed: 1000,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>", 
    "<i class='mdi mdi-chevron-right'></i>"
  ],
  responsive : {
    0 : {
      items: 1
    },
    576 : {
      items: 2, 
      autoplay: true,
    },
    992 : {
      items: 3, 
    },
    1400 : {
      items: 3,
    }
  }
});


// ANIMATION
wow = new WOW(
  {
  mobile: false,
  }
)
wow.init();



$(document).ready(() => {
  const ww = document.body.clientWidth;
  const url = window.location.href;


  // GO TOP
  let iScrollPos = 0; 
  $(window).scroll(function () {
    let iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos < iScrollPos) {
      $('.go-top')
        .fadeIn()
        .css('transform','scale(1)');

      $('.hotline-everywhere').removeClass('down');
    } else {
      $('.go-top')
        .fadeOut()
        .css('transform','scale(0)');
      $('.cart').removeClass('cart-out');
      $('.overlay').removeClass('overlay-in');
      $('.header-top').removeClass('down');
      $('.hotline-everywhere').addClass('down');
    }
    iScrollPos = iCurScrollPos;
  });

  $('.go-top').click(() => {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  if ( ww > 992) {
    $(window).scroll( function () {
      if ($(this).scrollTop() > $('article').position().top) {
        $('.menu').addClass('down animated slideInDown');
        $('.category').removeClass('show');
  
      } else {
        $('.menu').removeClass('down animated slideInDown');
        $('.category').addClass('show');
      }
    });
  } else {
    $('.category').removeClass('show');
  }

  $('.wow').attr('data-wow-duration', '.5s');

  $('.box-contact').hover(function() {
    $('.box-contact span').removeClass('active');
    $(this).find('span').toggleClass('active');
  });

  $('.contact').mouseleave(() => {
    $('.box-contact span').removeClass('active');
  });

  $('.cart-btn').click(() => {
    $('.overlay').addClass('overlay-in');
    $('.cart').toggleClass('cart-out');
  });

  $('.search-btn').click(() => {
    $('.header-top').toggleClass('down');
  });

  $('.toggleMenu').click(() => {
    $('.nav').addClass('out');
    $('.overlay-menu').addClass('overlay-in');
  });
  
  $('.overlay, .cart-close, .filter-close').click(function () {
    $('.overlay').removeClass('overlay-in');
    $('.cart').removeClass('cart-out');
    $('.left').removeClass('left-out');
  });

  $('.overlay-menu, .nav-close').click(function() {
    $('.overlay-menu').removeClass('overlay-in');
    $('.nav').removeClass('out');
  });

  //NAVTABS PRODUCT ACTIVE
  $('.navbar-nav .nav-item').on('click', function(){
    let itemParent = $(this)
      .parent()
      .parent()
      .parent()
        .find('.navbar-toggler');

    $('.navbar-nav .nav-item').removeClass('active')
    $(this).addClass('active')

    let text = $(this).text();
    $(itemParent).text(text);
    $('.navbar-collapse').removeClass('show');
  });

  // autocomplete search
  $( function() {
    let availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( ".search input" ).autocomplete({
      source: availableTags
    });
  });

  // NOTIFICATION ADD TO CART 
  $('.custom-cart').click(() => {
    Swal({
      title: 'Thông báo',
      type: 'success',
      html: 'Bạn đã thêm vào giỏ thành công',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<a href="gio-hang.html">Vào giỏ hàng</a>',
      cancelButtonText:
        'Tiếp tục mua sắm',
    })
  });

  $(".quantity button").on("click", function() {
    let $button = $(this);
    let oldValue = $button.parent().find("input").val();
  
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
  
    $button.parent().find("input").val(newVal);
  });

  $(".menu a").each( function () {
    if (url == (this.href)) {
      $(this).closest("a").addClass("active");
      $(this).parent().parent().parent().parent().addClass("active")
    }
  });

  $('.type-list').click(function() {
    $('.main-product').addClass('main-product-list');
    $(this).addClass('active');
    $('.type-grid').removeClass('active');
  });

  $('.type-grid').click(function() {
    $('.main-product').removeClass('main-product-list');
    $(this).addClass('active');
    $('.type-list').removeClass('active');
  });

  $('.filter-btn').click(() => {
    $('.left').addClass('left-out');
    $('.overlay').addClass('overlay-in');
  });
  
});
