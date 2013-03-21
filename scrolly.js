function scrolly($speed) {

  if (typeof $speed === "undefined") {
    var $speed = "slow";
  }

  var $page = $("html, body");

  $(".scroll").click(function(){

    var target = $(this).attr("href");

    $page.animate({
      scrollTop: $(target).offset().top
    }, $speed);

    return false;
  });

}
