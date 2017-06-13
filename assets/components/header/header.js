var headerWrapper = document.getElementById("header");
if (headerWrapper) {
    var newHeaderHeight = (headerWrapper.clientHeight - 20) + "px";
    var defaultHeaderHeight = headerWrapper.clientHeight + "px";
    function resizeHeader () {
        var documentToTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (documentToTop > 50) {
            headerWrapper.style.height = newHeaderHeight;
        } else {
            headerWrapper.style.height = defaultHeaderHeight;
        }
    }
    window.addEventListener("scroll", resizeHeader);
}