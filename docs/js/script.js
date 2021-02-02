$(function () {

});

// <!-- Slider  -->
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  // centeredSlides: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 60,

  // // レスポンシブブレーポイント（画面幅による設定）
  breakpoints: {
    // 画面幅が 640px 以上の場合（window width >= 640px）
    640: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // 画面幅が 1070px 以上の場合（window width >= 1070px）
    1070: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    // 画面幅が 1290px 以上の場合（window width >= 1290px）
    1290: {
      slidesPerView: 2.5,
      spaceBetween: 60,
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
