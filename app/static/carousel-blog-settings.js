$(window).load(function () {
    function loadSlider() {
        if (!($(".content-width").css("width") == "960px" || $(".content-width").css("width") == "720px")) {
            var var_maxslides = 1
        } else {
            var var_maxslides = 3
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
        sliderSettings = {minSlides: 3, maxSlides: var_maxslides, moveSlides: 1, pager: false, responsive: false, useCSS: true, hideControlOnEnd: true, touchEnabled: true, infiniteLoop: true, adaptiveHeight: true, slideWidth: var_slidewidth, nextSelector: "#blog-nav .next", prevSelector: "#blog-nav .back"};
        blog_slider = $("#blog-carousel").bxSlider_content(sliderSettings)
    }

    loadSlider();
    $(window).resize(function () {
        blog_slider.destroySlider();
        loadSlider()
    })
});