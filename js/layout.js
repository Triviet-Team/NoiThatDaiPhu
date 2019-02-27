$('.slider-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  items: 1,
  center:true,
  autoWidth: true,
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

$('.partner-carousel').owlCarousel({
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

// ANIMATION
wow = new WOW(
  {
  mobile: false,
  }
)
wow.init();



$(document).ready(() => {
  const ww = document.body.clientWidth;

  $('.slider .item').css('width', 'max-content');
  $('.wow').attr('data-wow-duration', '.5s');

  $('.menu-btn').click(() => {
    $('aside').toggleClass('aside-mini');
    $('main').toggleClass('main-mini');
    $('header').toggleClass('header-mini');

    $('.logo-large').toggleClass('logo-large-mini');
    $('.logo-mini').toggleClass('logo-mini-mini');
    $('.menu-title, .menu-down').toggleClass('mini');
    
    $('.menu-icon').toggleClass('menu-icon-mini');
    $('.nav-item .collapse').removeClass('show');
    $('.menu-down').addClass('mdi-chevron-down');

    $('.menu-down').removeClass('mdi-chevron-up');
    $('.overlay-menu').addClass('overlay-in');
    $('.product .tab-pane-product').toggleClass('out');

    $('.product-zone').toggleClass('out');
  });

  $('.menu .nav li').click(function() {
    $(this).find('.menu-down').toggleClass('mdi-chevron-down mdi-chevron-up')
  });

  if (ww > 1200) {
    $('aside').click(function() {
      $(this).removeClass('aside-mini');
      $('main').removeClass('main-mini');
      $('header').removeClass('header-mini');
  
      $('.logo-large').removeClass('logo-large-mini');
      $('.logo-mini').removeClass('logo-mini-mini');
      $('.menu-title, .menu-down').removeClass('mini');
  
      $('.menu-icon').removeClass('menu-icon-mini');
      $('.product .tab-pane-product').addClass('out');
      $('.product-zone').addClass('out');
    });

    let iScrollPos = 0; 
    $(window).scroll(function () {
      let iCurScrollPos = $(this).scrollTop();
      if (iCurScrollPos < iScrollPos) {

      } else {
        $('aside').addClass('aside-mini');
        $('main').addClass('main-mini');
        $('header').addClass('header-mini');

        $('.logo-large').addClass('logo-large-mini');
        $('.logo-mini').addClass('logo-mini-mini');
        $('.menu-title, .menu-down').addClass('mini');
        
        $('.menu-icon').addClass('menu-icon-mini');
        $('.nav-item .collapse').removeClass('show');
        $('.menu-down').addClass('mdi-chevron-down');

        $('.menu-down').removeClass('mdi-chevron-up');
        $('.product .tab-pane-product').removeClass('out');
        $('.product-zone').removeClass('out');
      }
      iScrollPos = iCurScrollPos;
    });
  }

  $('.cart-btn').click(() => {
    $('.overlay').addClass('overlay-in');
    $('.cart').toggleClass('cart-out');
  });
  
  $('.overlay, .cart-close, .filter-close').click(function () {
    $('.overlay').removeClass('overlay-in');
    $('.cart').removeClass('cart-out');
    $('.left').removeClass('left-out')
  });

  $('.overlay-menu, .menu-close').click(function() {
    $('.overlay-menu').removeClass('overlay-in');
    $('aside').removeClass('aside-mini')
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

  let url = window.location.href;
  $("aside a").each( function () {
    if (url == (this.href)) {
      $(this).closest("li").addClass("active");
      $(this).parent().parent().parent().parent().addClass("active")
    }
  });

  for (let i = 0; i < 8; i++) {
    $('.product .box-product')
      .eq(i)
        .attr('data-wow-delay', `.${i}s`)
        .attr('data-wow-duration', '.5s')
      .addClass('wow zoomIn');
  }

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
