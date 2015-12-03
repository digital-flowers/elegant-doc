$(window).load(function () {
    function loadSlider() {
        if (!($(".content-width").css("width") == "960px" || $(".content-width").css("width") == "720px")) {
            var var_maxslides = 1
        } else {
            var var_maxslides = 1
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
        sliderSettings = {minSlides: 1, maxSlides: var_maxslides, moveSlides: 1, pager: false, responsive: false, useCSS: true, hideControlOnEnd: true, touchEnabled: true, infiniteLoop: true, adaptiveHeight: true, slideWidth: var_slidewidth, nextSelector: "#testimonials-nav .next", prevSelector: "#testimonials-nav .back"};
        testimonials_slider = $("#testimonials-carousel").bxSlider_content(sliderSettings)
    }

    loadSlider();
    $(window).resize(function () {
        testimonials_slider.destroySlider();
        loadSlider()
    })
});