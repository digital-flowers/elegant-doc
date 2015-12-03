$(window).load(function () {
    function loadSlider() {
        if (!($(".content-width").css("width") == "960px" || $(".content-width").css("width") == "720px")) {
            var var_minslides = 1;
            var var_maxslides = 1
        } else {
            var var_minslides = 5;
            var var_maxslides = 5
        }
        if (!($(".content-width").css("width") == "960px" || $(".content-width").css("width") == "720px")) {
            var var_slidewidth = 0
        }
        if ($(".content-width").css("width") == "720px") {
            var var_slidewidth = 144
        }
        if ($(".content-width").css("width") == "960px") {
            var var_slidewidth = 192
        }
        sliderSettings = {minSlides: var_minslides, maxSlides: var_maxslides, moveSlides: 1, pager: false, responsive: false, useCSS: true, hideControlOnEnd: true, touchEnabled: true, infiniteLoop: true, auto: true, adaptiveHeight: true, slideWidth: var_slidewidth, nextSelector: "#clients-next", prevSelector: "#clients-back"};
        clients_slider = $("#clients-carousel").bxSlider_content(sliderSettings)
    }

    loadSlider();
    $(window).resize(function () {
        clients_slider.destroySlider();
        loadSlider()
    })
});