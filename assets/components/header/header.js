// function resizeHeader () {
//     var documentToTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
//     var header = document.getElementById("header");
//     var headerHeight = header.getBoundingClientRect().height;
//     var defaultHeight = header.getBoundingClientRect().height;
//     if (documentToTop > 50) {
//         console.log(headerHeight - 20);
//         console.log(header.style.height);
//     } else {
//         console.log(defaultHeight);
//     }
// }
// window.addEventListener("scroll", resizeHeader);