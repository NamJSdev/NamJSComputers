$('.slider__first').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.slide-item').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1025:{
            items:4
        }
    }
})
$('.client-slide').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.trademark-slide').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:3
        },
        1025:{
            items:6
        }
    }
})
// Back-to-top
$('.back-to-top').hide();
$('.back-to-top').click(function () {
    $("html, body").animate({scrollTop: 0}, 500);
 });
$(window).on('scroll',function(){
    if($(this).scrollTop() > 100){
        $('.back-to-top').fadeIn();
    }else{
        $('.back-to-top').fadeOut();
    };

});

// product Gallery
$('.gallery-parent').each(function () {
// We finding any "gallery-parent" and find child with class "gallery-top" and "gallery-thumbs" for multiple using plugin
let thumbs = $(this).children('.gallery-thumbs'),
    top = $(this).children('.gallery-top');

// activation carousel plugin
let galleryThumbs = new Swiper(thumbs, {
    spaceBetween: 10,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
    0: {
        slidesPerView: 3,
    },
    992: {
        slidesPerView: 4,
    },
    },
});
let galleryTop = new Swiper(top, {
    spaceBetween: 0,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    thumbs: {
    swiper: galleryThumbs,
    },
});

// change carousel item height
// gallery-top
let productCarouselTopWidth = top.outerWidth();
top.css('height', productCarouselTopWidth);

// gallery-thumbs
let productCarouselThumbsItemWith = thumbs.find('.swiper-slide').outerWidth();
thumbs.css('height', productCarouselThumbsItemWith);
});

// quantity
$('input.input-qty').each(function() {
    var $this = $(this),
      qty = $this.parent().find('.is-form'),
      min = Number($this.attr('min')),
      max = Number($this.attr('max'))
    if (min == 0) {
      var d = 0
    } else d = min
    $(qty).on('click', function() {
      if ($(this).hasClass('minus')) {
        if (d > min) d += -1
      } else if ($(this).hasClass('plus')) {
        var x = Number($this.val()) + 1
        if (x <= max) d += 1
      }
      $this.attr('value', d).val(d)
    })
})
//animation
AOS.init();
// Checkout validate
(function () {
    'use strict'
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
}())
// Accordion
$('.accordion__content').hide();
$(document).on('click','.accordion li',function(){
    $('.accordion__content').slideUp();
    if($(this).find('.fas').hasClass('fa-plus')){
        $('.accordion .fas').removeClass('fa-minus').addClass('fa-plus');
        $(this).find('.fas').removeClass('fa-plus').addClass('fa-minus');
        $(this).find('.accordion__content').slideDown();
    }
    else{
        $(this).find('.fas').removeClass('fa-minus').addClass('fa-plus');
    }
});
// filter product
setInterval(function() {
    filter();
},500);
function filter(){
    var laptop = $('.laptop');
    var desktop = $('.desktop');
    var pk = $('.pk');
    var conceptName = $('#aioConceptName').find(":selected").text();
    if(conceptName == 'All'){
        laptop.fadeIn();
        desktop.fadeIn();
        pk.fadeIn();
    }
    else if(conceptName == 'Laptop'){
        laptop.fadeIn();
        desktop.hide();
        pk.hide();
    }
    else if(conceptName == 'Màn hình'){
        laptop.hide();
        desktop.fadeIn();
        pk.hide();
    }
    else if(conceptName == 'Phụ kiện'){
        laptop.hide();
        desktop.hide();
        pk.fadeIn();
    }
};
// Menu phone 
$(document).on('click','.menu__phone',function(){
    if($(this).find('.fas').hasClass('fa-bars')){
        $(this).find('.fas').removeClass('fa-bars').addClass('fa-times')
        $('.nav__menu-phone').css({'transition':'left 0.5s'})
        $('.nav__menu-phone').css({'left':'0px'})
    }
    else{
        $(this).find('.fas').removeClass('fa-times').addClass('fa-bars')
        $('nav__menu-phone').css({'transition':'left 0.5s'})
        $('.nav__menu-phone').css({'left':'-3000px'})
    }
});