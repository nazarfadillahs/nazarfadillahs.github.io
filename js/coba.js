$(window).ready(function () {
  $(this).scrollTop(0);
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  $(".hero .content").css({
    transform: "translate(0px, " + wScroll / 5 + "%)",
  });
});
