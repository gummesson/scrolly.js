function scrolly(scrollSpeed) {

  "use strict";

  if (typeof(scrollSpeed) === "undefined") {
    scrollSpeed = "slow";
  }

  var pageBody = $("html, body");

  $(".scroll").click(function(){

    var idTarget = $(this).attr("href");

    pageBody.animate({
      scrollTop: $(idTarget).offset().top
    }, scrollSpeed);

    return false;

  });

}
