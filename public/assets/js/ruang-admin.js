/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
!function($) {
  "use strict";

  // Sidebar Toggle
  $("#sidebarToggle, #sidebarToggleTop").on("click", function(e) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
          $(".sidebar .collapse").collapse("hide");
      }
  });

  // Window Resize
  $(window).resize(function() {
      if ($(window).width() < 768) {
          $(".sidebar .collapse").collapse("hide");
      }
  });

  // Fixed Nav Mousewheel Scroll
  $("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function(e) {
      if ($(window).width() > 768) {
          var e0 = e.originalEvent;
          var delta = e0.wheelDelta || -e0.detail;
          this.scrollTop += (delta < 0 ? 1 : -1) * 30;
          e.preventDefault();
      }
  });

  // Scroll-to-top button fade in/out
  $(document).on("scroll", function() {
      if ($(this).scrollTop() > 100) {
          $(".scroll-to-top").fadeIn();
      } else {
          $(".scroll-to-top").fadeOut();
      }
  });

  // Smooth scrolling using jQuery easing
  $(document).on("click", "a.scroll-to-top", function(e) {
      e.preventDefault();
      var $anchor = $(this);
      var target = $($anchor.attr("href"));
      if (target.length) {
          $("html, body").stop().animate({
              scrollTop: target.offset().top
          }, 1000, "easeInOutExpo");
      }
  });

  // Modal Triggers
  $(document).ready(function() {
      $("#myBtn, #modalLong, #modalScroll, #modalCenter").click(function() {
          $(".modal").modal("show");
      });
  });

  // Popover initialization
  $(function() {
      $('[data-toggle="popover"]').popover();
  });

  // Popover dismiss
  $(".popover-dismiss").popover({
      trigger: "focus"
  });

  // Version display
  var version = document.getElementById("version-ruangadmin");
  if (version) {
      version.innerHTML = "Version 1.1";
  }

}(jQuery);
