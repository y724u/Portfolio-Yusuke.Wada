// <!-- スムーススクロール -->
$(function () {
  $('a[href^="#"]').on('click', function () {
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top -100;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // <!-- Slider  -->
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
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
        spaceBetween: 40,
      },
      // 画面幅が 1290px 以上の場合（window width >= 1290px）
      1290: {
        slidesPerView: 2.5,
        spaceBetween: 45,
      },
      // 画面幅が 1290px 以上の場合（window width >= 1290px）
      1550: {
        slidesPerView: 3,
        spaceBetween: 45,
      }
    },
    // pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
