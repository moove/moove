/**
 * @file
 * Script.js.
 */

jQuery(function ($) {
    'use strict';
    $(document).ready(function () {
        // Toggle menubar when click on button & menubar content.
        $('#toggle, #menubar .blockcontent .content a').click(function () {
                $('#menubar').toggleClass('on');
                $('#toggle').toggleClass('on');
                $('#menubar .block-menu ul .leaf').toggleClass(
                    'on');
                $('#transform').toggleClass('on');
              });
        // If sidebar on, toggle menubar when click content site.
        $('#transform').click(function () {
            if ($('#menubar').hasClass('on')) {
              $('#menubar').toggleClass('on');
              $('#toggle').toggleClass('on');
              $('#menubar .block-menu ul .leaf').toggleClass(
                    'on');
              $('#transform').toggleClass('on');
            }
          });
        // Code for smoothscroll anchor in same page.
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') ===
                this.pathname.replace(/^\//, '') &&
                location.hostname === this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $(
                    '[name=' + this.hash.slice(1) +
                    ']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset()
                          .top
                }, 1000);
                return false;
              }
            }
          });
      });
    // Toggle menubar when click "esc" key.
    $(document).keyup(function (e) {
        var key = e.which;
        if (key === 27) {
          $('#menubar').toggleClass('on');
          $('#toggle').toggleClass('on');
          $('#menubar .block-menu ul .leaf').toggleClass('on');
          $('#transform').toggleClass('on');
        }
      });
    // Toggle class for top navbar background onscroll.
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 120) {
          $("#navbar").addClass('scroll');
        }
        else {
          $("#navbar").removeClass('scroll');
        }
      });
  });
