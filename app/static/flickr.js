$(window).load(function () {
    var $username = "71865026@N00";
    var $amount = "8";
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=" + $username + "&lang=en-us&format=json&jsoncallback=?", function (data) {
        $.each(data.items, function (i, item) {
            if (i <= $amount - 1) {
                $("<img/>").attr("src", item.media.m).appendTo(".footer-flickr-container").wrap("<div class='flickr_badge_image'><a href='" + item.link + "' target='_blank' class='image-link mini'></a></div>")
            }
        })
    })
});