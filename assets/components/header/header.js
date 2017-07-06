// var headerWrapper = document.getElementById("header");
// if (headerWrapper) {
//     var newHeaderHeight = (headerWrapper.clientHeight - 20) + "px";
//     var defaultHeaderHeight = headerWrapper.clientHeight + "px";
//     function resizeHeader () {
//         var documentToTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
//         if (documentToTop > 50) {
//             headerWrapper.style.height = newHeaderHeight;
//         } else {
//             headerWrapper.style.height = defaultHeaderHeight;
//         }
//     }
//     window.addEventListener("scroll", resizeHeader);
// }

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header-mobile').outerHeight();

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
    return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down
    $('.header-mobile').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if(st + $(window).height() < $(document).height()) {
      $('.header-mobile').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}