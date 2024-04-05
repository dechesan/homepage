window.onload = function() {
    var scrollIndicator = document.getElementById("scroll-indicator");

    window.addEventListener("scroll", function() {
        var currentScroll = window.scrollY || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
        // Scroll down
        scrollIndicator.style.opacity = "0";
        } else {
        // Scroll up
        scrollIndicator.style.opacity = "1";
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
};