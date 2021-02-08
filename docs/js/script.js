// <!-- スムーススクロール -->
$(function () {
  $('a[href^="#"]').on('click', function () {
    let speed = 500;
    let href = $(this).attr('href');
    let target = $(href == '#' || href == '' ? 'html' : href);
    let position = target.offset().top - 100;
    $('html, body').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });

  // <!-- ハンバーガーメニュー -->
  let state = false;
  let scrollStops;
  $('.js-open').on('click', function () {
    $('.js-open').toggleClass('active');
    if (state == false) {
      scrollStops = $(window).scrollTop();
      $('body').addClass('fixed').css({ 'top': scrollStops });
      state = true;
    } else {
      $('body').removeClass('fixed').css({ 'top': 0 });
      window.scrollTo(0, scrollStops);
      state = false;
    }
  });
  // <!-- ハンバーガーメニューページ内リンク -->
  $('.js-link').on('click', function () {
    $('.js-open').removeClass('active');
    $('body').removeClass('fixed');
  });

  // <!-- サービスシステム開発モーダル -->
  let scrollPosition;
  $('.js-modalOpen').on('click', function () {
    const target = $(this).data('target');
    const modal = $('#' + target);
    scrollPosition = $(window).scrollTop();
    $(modal).addClass('show_modal');
    $('body').addClass('fixed').css({ 'top': -scrollPosition });
    return false;
  });
  $('.js-modalClose').on('click', function () {
    $('.js-modal').removeClass('show_modal');
    $('body').removeClass('fixed').css({ 'top': 0 });
    window.scrollTo(0, scrollPosition);
  });

  // <!-- Slider  -->
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 60,
    loop: true,
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
