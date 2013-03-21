function scrolly(speed) {

  var speed, page, target;

  if (typeof(speed) === "undefined") {
    speed = "slow";
  }

  page = $("html, body");

  $(".scroll").click(function(){

    target = $(this).attr("href");

    page.animate({
      scrollTop: $(target).offset().top
    }, speed);

    return false;

  });

}
