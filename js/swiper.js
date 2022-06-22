var timelineSwiper = new Swiper('.timeline .swiper-container', {
  direction: 'vertical',
  loop: false,
  speed: 1600,
  pagination: '.swiper-pagination',
  paginationBulletRender: function (swiper, index, className) {
    var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
    return '<span class="' + className + '">' + year + '</span>';
  },
  paginationClickable: true,
  navigation: {
      nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      direction: 'horizontal',
    }
  }
});

// Only Middle Slide with this code

// var swiper = new Swiper('.swiper-container', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   slidesPerView: 3,
//   spaceBetween: 5,
//   loop: true,
//   centeredSlides: true,
// });

// Clicker not working
// paginationClickable: true,
// nextButton: '.swiper-button-next',
// prevButton: '.swiper-button-prev',
// breakpoints: {
//   768: {
//     direction: 'horizontal',
//   }