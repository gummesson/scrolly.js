(function(){

  "use strict";

  // Scrolly
  //
  //  Enables smooth scrolling between an anchor wit the given attribute/class
  //  and the targeted href.
  //
  var Scrolly = {

    config: {

      pageBody: $("html, body"), // The HTML body
      scrollHook: $(".scroll"),  // The anchor's class/attribute
      scrollSpeed: "slow"        // The speed of the scrolling animation

    },

    init: function(config) {

      if (config && typeof(config) === "object") {
        $.extend(this.config, config);
      }

      var pageBody    = this.config.pageBody,
          scrollHook  = this.config.scrollHook,
          scrollSpeed = this.config.scrollSpeed;

      this.animate(pageBody, scrollHook, scrollSpeed);

    },

    animate: function(pageBody, scrollHook, scrollSpeed) {
          
      scrollHook.click(function(){

        var idTarget = $(this).attr("href");

        pageBody.animate({
          scrollTop: $(idTarget).offset().top
        }, scrollSpeed);

        return false;

      });

    }

  };

  $(document).ready(function() {
    Scrolly.init();
  });

})();
