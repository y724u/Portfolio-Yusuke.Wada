$(function () {

});

// <!-- Slider  -->
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2.5,
  spaceBetween: 60,

  // // レスポンシブブレーポイント（画面幅による設定）
  // breakpoints: {
  //   // 画面幅が 640px 以上の場合（window width >= 640px）
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 5
  //   },
  //   // 画面幅が 980px 以上の場合（window width >= 980px）
  //   980: {
  //     slidesPerView: 3,
  //     spaceBetween: 10
  //   }
  // },

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
