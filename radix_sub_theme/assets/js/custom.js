(function ($, Drupal, drupalSettings) {

  Drupal.behaviors.Test1 = {
    attach: function attach(context, settings) {
      //$("p").css("background-color", "red");

    }
  };

  Drupal.behaviors.Test2 = {
    attach: function attach(context, settings) {

      $(".test2").css("background-color", "green");
      console.log("Hello world!");

      //This is just a test to replace the text on the display
      //$( ".test123" ).replaceWith( "<h2>New heading</h2>" );

    }
  };

})(jQuery, Drupal, drupalSettings);

(function ($) {
  $(document).ready(function () {
    if ($('.visitors-module-landing-page').length > 0) {
      $('.pfpa-page-title:contains("Visitors")').text("Statistics");
    }
  });
})(jQuery);
