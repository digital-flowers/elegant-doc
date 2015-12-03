$(window).load(function () {
    function loadSlider() {
        if (!($(".content-width").css("width") == "960px" || $(".content-width").css("width") == "720px")) {
            var var_maxslides = 1
        } else {
            var var_maxslides = 4
        }
        if (!($(".content-width").css("width") == "960px" || $(".content-width").css("width") == "720px")) {
            var var_slidewidth = 0
        }
        if ($(".content-width").css("width") == "720px") {
            var var_slidewidth = 153
        }
        if ($(".content-width").css("width") == "960px") {
            var var_slidewidth = 207
        }
        sliderSettings = {minSlides: 4, maxSlides: var_maxslides, moveSlides: 1, pager: false, responsive: false, useCSS: true, hideControlOnEnd: true, touchEnabled: true, infiniteLoop: true, adaptiveHeight: true, slideWidth: var_slidewidth, nextSelector: "#portfolio-nav .next", prevSelector: "#portfolio-nav .back"};
        portfolio_slider = $("#portfolio-carousel").bxSlider_content(sliderSettings)
    }

    loadSlider();
    $(window).resize(function () {
        portfolio_slider.destroySlider();
        loadSlider()
    })
});