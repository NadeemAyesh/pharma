/* global $, jQuery, console, alert, prompt */
/*

  Template Information:
  Website: Pharma Vesion;
  Company: none;
  Front-End Developer: Nadeem Ayesh;
  Back-End Developer: ;

  Date: 18, November, 2018;
  Time: 2:36 PM;

 Thank you.

*/
$(document).ready(function() {
  "use strict";
  // Public Elemnts
  new WOW().init();

  $("[placeholder]")
    .focus(function() {
      // Placeholder
      $(this).attr("data-place", $(this).attr("placeholder"));
      $(this).attr("placeholder", "");
    })
    .blur(function() {
      $(this).attr("placeholder", $(this).attr("data-place"));
    });

  // Scroll Custom
  new SimpleBar($(".side-menu-scroller")[0]);

  // Side menu js
  $("#sideToggler").click(function(e) {
    // e.preventDefaults();
    $(".side-menu")
      .css("left", 0)
      .css("opacity", 1);
    $(".side-overlay").fadeIn();
    $("#closeMenu, .side-overlay").click(function() {
      $(".side-menu")
        .css("left", "-400px")
        .css("opacity", 0);
      $(".side-overlay").fadeOut();
    });
  });

  // Project Slider with slick
  $(".projects-slider").slick({
    // dots: true,
    autoplay: true,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear"
  });

  //Side menu closer in width resize
  $(window).resize(function() {
    if ($(window).width() >= 1180) {
      $(".side-menu")
        .css("left", "-400px")
        .css("opacity", 0);
      $(".side-overlay").fadeOut();
    }
  });

  $('#myList a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  
});
