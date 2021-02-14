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
    slidesOffsetAfter: 260,
    spaceBetween: 60,
    // // レスポンシブブレーポイント（画面幅による設定）
    breakpoints: {
      // 画面幅が 640px 以上の場合（window width >= 640px）
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // 画面幅が 1070px 以上の場合（window width >= 1070px）
      890: {
        slidesPerView: 1.5,
        spaceBetween: 40,
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
// <!-- cursor  -->
  let
    cursor = $(".cursor"),
    cWidth = 8, //カーソルの大きさ
    delay = 10, //数字を大きくするとフォロワーがより遅れて来る
    mouseX = 0, //マウスのX座標
    mouseY = 0, //マウスのY座標
    posX = 0, //フォロワーのX座標
    posY = 0; //フォロワーのX座標

  //カーソルの遅延アニメーション
  //ほんの少ーーーしだけ遅延させる 0.001秒
  TweenMax.to({}, .001, {
    repeat: -1,
    onRepeat: function () {
      posX += (mouseX - posX) / delay;
      posY += (mouseY - posY) / delay;

      TweenMax.set(cursor, {
        css: {
          left: mouseX - (cWidth / 2),
          top: mouseY - (cWidth / 2)
        }
      });
    }
  });

  //マウス座標を取得
  $(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  $(".js-cursor").on({
    "mouseenter": function () {
      cursor.addClass("is-active");
    },
    "mouseleave": function () {
      cursor.removeClass("is-active");
    }
  });
});
