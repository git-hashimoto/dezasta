// ヘッダー下スクロール非表示/上スクロール表示
const header = $('.header');
const headerHeight = header.outerHeight();
let beforeScrollTop = 0;
$(window).scroll(function () {
    const scrollTop = $(this).scrollTop();
    if((scrollTop > beforeScrollTop) && (scrollTop > headerHeight)) {
        header.addClass('js_hide');
    }
    else {
        header.removeClass('js_hide');
    }
    beforeScrollTop = scrollTop;
});

//ページ内リンクスムーススクロール
$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});

// トップに戻るボタン
$(window).on('scroll', function(){
  if ($(window).scrollTop() > 200) {
    $('.top-btn').fadeIn(500);
  } else {
    $('.top-btn').fadeOut(500);
  }
});
$('.top-btn').click(function () {
  $('body, html').animate({ scrollTop: 0 }, 700);
  return false;
});

