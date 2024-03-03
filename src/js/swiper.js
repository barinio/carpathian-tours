let gallerySwiper = new Swiper('.gallery-swiper', {
  slidesPerView: getSlidesPerView(),
  direction: 'horizontal',
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let upcomingTours = new Swiper('.upcoming-tours-swiper', {
  slidesPerView: getSlidesPerView(),
  direction: 'horizontal',
  spaceBetween: getSpaceBetween(),

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let hoverlaTourSwiper = new Swiper('.hoverla-tour-swiper', {
  slidesPerView: 1,
  direction: 'horizontal',
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  on: {
    slideChange: function () {
      var paginationBullets = document.querySelectorAll(
        '.swiper-pagination-bullet'
      );

      paginationBullets.forEach(function (bullet, index) {
        if (index < hoverlaTourSwiper.activeIndex) {
          bullet.classList.add('hoverla-progress');
        } else {
          bullet.classList.remove('hoverla-progress');
        }
      });
    },
  },
  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // autoplay: {
  //   delay: 5000,
  // },
});

let bukovelTourSwiper = new Swiper('.bukovel-tour-swiper', {
  slidesPerView: 1,
  direction: 'horizontal',
  spaceBetween: 0,
  pagination: {
    el: '.bukovel-swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 4,
    bulletClass: 'bukovel-swiper-pagination-bullet',
  },
  on: {
    slideChange: function () {
      let paginationBukovelBullets = document.querySelectorAll(
        '.bukovel-swiper-pagination-bullet'
      );

      paginationBukovelBullets.forEach(function (bullet, index) {
        if (index < bukovelTourSwiper.activeIndex) {
          bullet.classList.add('bukovel-progress');
        } else {
          bullet.classList.remove('bukovel-progress');
        }
      });
    },
  },
  grabCursor: true,

  // autoplay: {
  //   delay: 5000,
  // },
});

let carpathiansTourSwiper = new Swiper('.carpathians-tour-swiper', {
  slidesPerView: 1,
  direction: 'horizontal',
  spaceBetween: 0,
  pagination: {
    el: '.carpathians-swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 9,
    bulletClass: 'carpathians-swiper-pagination-bullet',
  },
  on: {
    slideChange: function () {
      let paginationCarpathiansBullets = document.querySelectorAll(
        '.carpathians-swiper-pagination-bullet'
      );

      paginationCarpathiansBullets.forEach(function (bullet, index) {
        if (index < carpathiansTourSwiper.activeIndex) {
          bullet.classList.add('carpathians-progress');
        } else {
          bullet.classList.remove('carpathians-progress');
        }
      });
    },
  },
  grabCursor: true,

  // autoplay: {
  //   delay: 5000,
  // },
});

function getSlidesPerView() {
  if (window.innerWidth <= 767) {
    return 1;
  } else {
    return 2;
  }
}

function getSpaceBetween() {
  if (window.innerWidth <= 767) {
    return 15;
  } else {
    return 20;
  }
}

// let resizeTimeout;
// window.addEventListener('resize', function () {
//   clearTimeout(resizeTimeout);
//   resizeTimeout = setTimeout(reload, 1000);
// });
// function reload() {
//   location.reload();
// }
