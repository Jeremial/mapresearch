'use strict';

function a(b) {
    var c = null;
    ra(md, function(a) {
        if (a.url === b) return c = a, !1
    });
    return c
}

function b() {
    var a = "shape image rect oval fill stroke imagedata group textbox".split(" ");
    if (!document.namespaces.v) {
        document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
        var c = document.createStyleSheet();
        ma(a, function(a) {
            c.addRule("v\\:" + a, "behavior:url(#default#VML);");
            document.createElement("v:" + a)
        })
    }
}

function d(a) {
    var c = ga[a];
    if (!c) {
        c = document.createDocumentFragment();
        if (a === La.VMLIMAGE) {
            Jb || (b(), Jb = !0);
            var e = document.createElement("v:image");
            e.style.cssText = "position:absolute;left:0;top:0;-moz-user-select:none;-khtml-user-select:none;";
            e.galleryImg = !1;
            e.className = "csssprite";
            e.setAttribute(sc, La.VMLIMAGE);
            c.appendChild(e)
        } else if (e = document.createElement("img"), e.style.cssText = "position:absolute;left:0;top:0;-moz-user-select:none;-khtml-user-select:none;border:none;max-width:none;", e.galleryImg = !1, c.appendChild(e), a === La.ALPHA) {
            var g = document.createElement("div");
            g.style.cssText = "position:absolute;left:0;top:0;font-size:0;";
            c.appendChild(g);
            e.className = "smnoscreen";
            g.className = "smnoprint";
            e.setAttribute(sc, La.ALPHA);
            g.setAttribute(sc, La.ALPHA)
        } else a === La.IMAGE && (e.className = "csssprite", e.setAttribute(sc, La.IMAGE));
        ga[a] = c
    }
    if (c) return c.cloneNode(!0)
}

function x(a, b, c, d, e, g, l, A) {
    var Y = arguments;
    0 < b.toUpperCase().indexOf(".PNG") && gc ? Ce ? B.apply(null, Y) : Ka.apply(null, Y) : Va.apply(null, Y)
}

function C(a, b) {
    var c;
    ma(a.childNodes, function(d) {
        (c = d.getAttribute(sc)) && c != b && a.removeChild(d)
    })
}

function E(a, b, c, d) {
    var e = null;
    ma(a.childNodes, function(a) {
        if ((!d || "tag" === a.nodeName) && (!c || a.className === c) && a.getAttribute(sc) == b) return e = a, !1
    });
    return e
}

function B(a, b, c, e, g, va, l) {
    C(a, La.VMLIMAGE);
    var A = E(a, La.VMLIMAGE);
    if (!A) {
        var Y = d(La.VMLIMAGE),
            A = Y.childNodes[0];
        Ed(a, Y)
    }
    sa(A, g, va);
    nd(A, c, e);
    Qc(A, l);
    A.src = b
}

function Va(a, b, c, e, g, va, l) {
    C(a, La.IMAGE);
    var A = E(a, La.IMAGE, "csssprite");
    if (!A) {
        var Y = d(La.IMAGE),
            A = Y.childNodes[0];
        Ed(a, Y)
    }
    sa(A, g, va);
    nd(A, c, e);
    Qc(A, l);
    A.src = b;
    De(A)
}

function Ka(a, b, c, e, g, va, l, A) {
    C(a, La.ALPHA);
    var Y = E(a, La.ALPHA, "smnoscreen", "img"),
        v = E(a, La.ALPHA, "smnoprint", "div");
    if (!Y || !v) {
        Y && a.removeChild(Y);
        v && a.removeChild(v);
        var s = d(La.ALPHA),
            Y = s.childNodes[0],
            v = s.childNodes[1];
        Ed(a, s)
    }
    sa(v, g, va);
    nd(v, c, e);
    v.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + b + "', sizingMethod='scale')";
    sa(Y, g, va);
    nd(Y, c, e);
    Qc(Y, l);
    Y.src = b;
    Y.style.display = A ? "none" : ""
}
var na = function(a) {
    var b = [];
    ia(a, function(a, c) {
        b.push(c + "=" + encodeURIComponent(a))
    });
    return b.join("&")
}, oa = function(a, b, c) {
        var d = [];
        if (c) {
            for (b = b.firstChild; b;) b.tagName.toLowerCase() === a && d.push(b), b = b.nextSibling;
            return d
        }
        b = (b || document).getElementsByTagName(a);
        c = -1;
        var e, g = 0,
            l = b.length;
        if (qa && "*" === a)
            for (; g < l; ++g) 1 === (e = b[g]).nodeType && (d[++c] = e);
        else
            for (; g < l; ++g) d[g] = b[g];
        return d
    }, Dd = function(a, b) {
        var c = a.style;
        0 <= parseFloat(b) && 1 > parseFloat(b) ? (c.filter = "alpha(opacity=" + 100 * b + ")", c.opacity = b) : 1 == parseFloat(b) && (c.filter = "", c.opacity = "")
    }, ra = K,
    md = [],
    M = {}, ja = function(b, c) {
        var d;
        if (d = a(b)) return c(d.width, d.height, b, d.image), d.image;
        if (d = M[b]) d.cbs.push(c);
        else {
            var g = M[b] = {
                url: b,
                cbs: [c]
            }, l = new Image;
            d = function() {
                e.removeListener(va);
                e.removeListener(v);
                md.push({
                    url: b,
                    width: l.width,
                    height: l.height
                });
                ra(g.cbs, function(a) {
                    a(l.width, l.height, b)
                });
                l = null
            };
            var va = e.addDomListener(l, "load", d),
                v = e.addDomListener(l, "error", d);
            l.src = b
        }
    }, ma = K,
    sa = Aa,
    nd = la,
    Qc = Dd,
    De = vb,
    Ed = function(a, b, c) {
        c = c || 0;
        a.childNodes.length > c ? a.insertBefore(b, a.childNodes[c]) : a.appendChild(b)
    }, sc = "dn",
    gc = 5 <= qa && 7 > qa;
gc && Cd(function() {
    try {
        document.body.filters && (gc = !0)
    } catch (a) {}
});
var Ce = 6 <= qa && 9 > qa;
gc && zb("@media screen{.smnoscreen {display:none}} @media print{.smnoprint{display:none}}");
var La = {
    ALPHA: 1,
    IMAGE: 2,
    VMLIMAGE: 3
}, ga = {}, Jb = !1,
    W = function(a, b, c, d, e, g, l) {
        var A = Qb(a, "position");
        "relative" !== A && "absolute" !== A && (a.style.position = "relative");
        if (b) {
            var v = d ? d.getWidth() : 0,
                s = d ? d.getHeight() : 0,
                n = c ? c.length ? -c[0] : -c.getX() : 0,
                u = c ? c.length ? -c[1] : -c.getY() : 0;
            a.style.overflow = "hidden";
            !d || g ? ja(b, function(c, f) {
                x(a, b, v || c, s || f, n, u, e, l)
            }) : x(a, b, v, s, n, u, e, l)
        }
    };