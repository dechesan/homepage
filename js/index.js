const scrollIndicator = document.getElementById("scroll-indicator");
const indicatorTop = scrollIndicator.offsetTop;

window.addEventListener("scroll", function() {
    scrollIndicator.style.animationPlayState

    let indicatorOpacity = 1 - (window.scrollY / indicatorTop) * 2;

    console.log(`Number: ${indicatorOpacity}\nString: ${indicatorOpacity.toString()}`);

    if (indicatorOpacity < 0) {
        scrollIndicator.style.opacity = "0";
    }
    else {
        scrollIndicator.style.opacity = indicatorOpacity.toString();
    }
    console.log(`Opacity: ${scrollIndicator.style.opacity}`);
});