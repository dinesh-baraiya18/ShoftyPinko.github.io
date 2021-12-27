
// preloader 
$(window).on('load', function(){ 
  $('#status').fadeOut(); 
  $('#preloader').delay(300).fadeOut('slow'); 
  $('body').delay(300).css({'overflow':'visible'});
})


// work-process-slider
var swiper = new Swiper(".work-process-slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    freeMode: false,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      437: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      660: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });


// testimonials 
var swiper = new Swiper(".testi-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1.2,
  loop:true,
  spaceBetween: 20,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },

  breakpoints: {
    437: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  }
  
});

// counter 
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 6000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});


// menu-icon 
$('#menu-icon').click(function () { 
  $(this).toggleClass('fa-times');
});

// goto top  
$(window).scroll(function () { 
     if($(this).scrollTop() > 500){
       $('#goUp').fadeIn();
     }else{
       $('#goUp').fadeOut();
     };
});

// click to close nav 
$('.navbar-nav .nav-link').click( function(){
    $('#navbarNav').removeClass('show');
    $('#menu-icon').removeClass('fa-times');
}); 

// aos
AOS.init({
  offset: 300,
  duration: 1000,
}); 