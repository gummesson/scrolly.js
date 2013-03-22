function scrolly(scrollSpeed) {

  "use strict";

  var pageBody, idTarget;

  if (typeof(scrollSpeed) === "undefined") {
    scrollSpeed = "slow";
  }

  pageBody = $("html, body");

  $(".scroll").click(function(){

    idTarget = $(this).attr("href");

    pageBody.animate({
      scrollTop: $(idTarget).offset().top
    }, scrollSpeed);

    return false;

  });

}
