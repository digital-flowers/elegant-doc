var config = require("elegant-config");

// server
config.SERVER.PORT = 80;

// database config
config.MYSQL.HOST =
config.MYSQL.USER =
config.MYSQL.DATABASE =
config.MYSQL.PASSWORD =

// compressing
config.STATIC.COMPRESS_RESOURCES = true;
config.STATIC.COMPRESS_HTML = true;
config.STATIC.COMPRESS_HTML_EXCEPTION = ["about.html", "start.html", "doc.html"];
config.STATIC.DEFAULT_MEMORY_CACHE = true;
config.STATIC.COMPACT_RESOURCES = true;
config.STATIC.CACHE_RESOURCES = true;
config.STATIC.CASH_HTML = true;