$(document).ready(function () {
    // code mirror
    CodeMirror.defineExtension("reindent", function () {
        var cmInstance = this;
        this.operation(function () {
            var lines = cmInstance.lineCount();
            for (var i = 0; i <= lines; i++) {
                cmInstance.indentLine(i);
            }
        });
    });

    $("[data-lang]").each(function () {
        var code = $.trim($(this).text());
        var lang = $(this).attr("data-lang");
        var lineNumbers = !$(this).hasClass('inline') && !$(this).hasClass('no-numbers');
        var $editor = $("<p></p>");
        $editor.addClass("code")
        $(this).after($editor);
        $(this).remove();
        var mode = {name: lang, alignCDATA: true};
        var myCodeMirror = CodeMirror($editor[0], {
            value: code,
            mode: mode,
            lineNumbers: lineNumbers,
            readOnly: true,
            matchBrackets: true,
            tabMode: "indent"
        }).reindent();
    });

    $(".sidebar-widget.categories > a").bind("click", function () {
        $(".sidebar-widget .sub-categories").slideUp();
        $(this).next(".sub-categories").slideDown();
    });
    $(".sidebar-widget .sub-categories > a").bind("click", function () {
        $(this).parents(".sub-categories").slideDown();
    });

    var name = window.location.hash;
    $(".sidebar-widget.categories a[href='" + name + "']").click();

    var $win = $(window);
    $(window).scroll(function () {
        if (!$(".home-banner").hasClass("light")) {
            if ($("body").hasClass("home")) {
                if ($(".topbar-outer").hasClass("dark")) {
                    if ($win.scrollTop() > 60) {
                        $(".topbar-outer").addClass("main-color-bg")
                    } else {
                        $(".topbar-outer").removeClass("main-color-bg")
                    }
                }
            }
        }
    });
    if ($(".home-banner").hasClass("light")) {
        if ($(".topbar-outer").hasClass("dark")) {
            $(".topbar-outer").addClass("main-color-bg")
        }
    }
    $(".mobilenav-click").click(function () {
        $(".mobilenav").slideToggle()
    });
    $(".accordion.closed .accordion-content").hide();
    $(".accordion .accordion-header").click(function () {
        if ($(this).parent().hasClass("open")) {
            $(this).next("div").slideUp("fast");
            $(this).parent().removeClass("open");
            $(this).parent().addClass("closed")
        } else {
            $(this).next("div").slideDown("fast");
            $(this).parent().removeClass("closed");
            $(this).parent().addClass("open")
        }
    });
    $("ul.tabs").each(function () {
        var $active, $content, $links = $(this).find("a");
        $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
        $active.addClass("active");
        $content = $($active.attr("href"));
        $links.not($active).each(function () {
            $($(this).attr("href")).hide()
        });
        $(this).on("click", "a", function (e) {
            $active.removeClass("active");
            $content.hide();
            $active = $(this);
            $content = $($(this).attr("href"));
            $active.addClass("active");
            $content.show();
            e.preventDefault()
        })
    });
    $(".alert span.close").click(function () {
        $(this).parent().fadeOut()
    });
    $(".content-width").animate({opacity: 1}, 300);
    if ("createTouch"in document) {
        try {
            var ignore = /:hover/;
            for (var i = 0; i < document.styleSheets.length; i++) {
                var sheet = document.styleSheets[i];
                for (var j = sheet.cssRules.length - 1; j >= 0; j--) {
                    var rule = sheet.cssRules[j];
                    if (rule.type === CSSRule.STYLE_RULE && ignore.test(rule.selectorText)) {
                        sheet.deleteRule(j)
                    }
                }
            }
        } catch (e) {
        }
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".top-of-page-link").fadeIn()
        } else {
            $(".top-of-page-link").fadeOut()
        }
    });
    $(".top-of-page-link").click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false
    });

    // Handle Newsletter Subscription
    $('#submit').click(function(){
        var email = $('#email').val();
        $.ajax({
            type: "POST",
            url: "/",
            data: { email: email}
        }).done(function( msg ) {
                $('#subscription-alert').text(msg).slideDown('slow');
            });
    });

});