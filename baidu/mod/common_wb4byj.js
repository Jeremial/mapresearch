t.cookie = t.cookie || {};
t.cookie.nw = function(a) {
    return RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(a)
};
t.cookie.QG = function(a) {
    return t.cookie.nw(a) && (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] || n : n
};
t.cookie.get = function(a) {
    a = t.cookie.QG(a);
    return "string" == typeof a ? a = decodeURIComponent(a) : n
};
t.cookie.oA = function(a, b, c) {
    if (t.cookie.nw(a)) {
        var c = c || {}, d = c.Ko;
        "number" == typeof c.Ko && (d = new Date, d.setTime(d.getTime() + c.Ko));
        document.cookie = a + "=" + b + (c.path ? "; path=" + c.path : "") + (d ? "; expires=" + d.toGMTString() : "") + (c.domain ? "; domain=" + c.domain : "") + (c.PL ? "; secure" : "")
    }
};
t.cookie.set = function(a, b, c) {
    t.cookie.oA(a, encodeURIComponent(b), c)
};
t.cookie.remove = function(a, b) {
    b = b || {};
    b.Ko = new Date(0);
    t.cookie.oA(a, "", b)
};
t.hm = function(a) {
    return /\d{11}/.test(a)
};
t.yH = function(a) {
    return /\d{4}/.test(a)
};
