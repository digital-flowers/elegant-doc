// Load script element as a child of the body
function loadJS(src, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                if (callback) {
                    callback();
                }
            }
        };
    } else {  //Others
        script.onload = function () {
            if (callback) {
                callback();
            }
        };
    }
    script.src = src;
    document.body.appendChild(script);
}
// Load style element as a child of the body
function loadCSS(href,callback) {
    var element = document.createElement("link");
    element.rel = "stylesheet";
    if (element.readyState) {  //IE
        element.onreadystatechange = function () {
            if (element.readyState == "loaded" || script.readyState == "complete") {
                element.onreadystatechange = null;
                if (callback) {
                    callback();
                }
            }
        };
    } else {  //Others
        element.onload = function () {
            if (callback) {
                callback();
            }
        };
    }
    element.href = href;
    document.body.appendChild(element);
}
// Load All Resources
function loadResources() {
    // css
    loadCSS("/resources/code-mirror.css");
    loadCSS("/resources/all.css");

    // js
    loadJS("/resources/code-mirror.js", function () {
        loadJS("/resources/common.js");
    });
}

// Check for browser support of event handling capability
if (window.addEventListener) {
    window.addEventListener("load", loadResources, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", loadResources);
} else {
    window.onload = loadResources
}


// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-48068207-1', 'getelegant.com');
ga('send', 'pageview');