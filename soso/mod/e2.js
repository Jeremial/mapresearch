'use strict';

function a(b) {
    b = g(b);
    return new l(b[0], b[1])
}
var b = e,
    c = kb,
    d = Xa,
    g = cc,
    l = H,
    n = ld,
    v = null,
    s = 0,
    x = !1,
    Q = !1;
(function() {
    b.addDomListener(window, "mousedown", function() {
        x = !0
    });
    b.addDomListener(window, "mouseup", function() {
        x = !1
    })
})();
N.$setExports(function(e, g) {
    function l(a, c, e, g) {
        e.listener && E(a, c, e);
        e.listener = "mousewheel" === c ? d(a, e) : b.addDomListener(a, c, e, g)
    }

    function E(a, c, d) {
        d.listener && (b.removeListener(d.listener), delete d.listener)
    }

    function C() {
        Ra && (E(window, "mouseup", I, !0), E(window, "mousemove", F, !0), Ra = !1)
    }

    function fa(c) {
        var d = a(c);
        if (2 == c.button) A = d;
        else {
            oa = !0;
            ra = b.exist(e, "dragstart") || b.exist(e, "dragging") || b.exist(e, "dragend");
            Y = ja = d;
            n();
            M("mousedown", c);
            if (ra && (!v || v === W)) v = W, T = 0, Ra || (l(window, "mouseup", I, !0), l(window, "mousemove", F, !0), Ra = !0);
            Q = !1
        }
    }

    function B(a) {
        2 !== a.button && (2 !== T && (T = -1), oa = !1, M("mouseup", a))
    }

    function I(a) {
        1 == T && (T = 2, M("dragend", a));
        v = null;
        C()
    }

    function H(c) {
        var d = a(c);
        ja && 2 > d.distanceTo(ja) || (ja = d, b.exist(e, "mousemove") && M("mousemove", c))
    }

    function F(b) {
        var c = a(b),
            d = !1;
        0 === T && 0 < c.distanceTo(Y) && (T = 1, d = Q = !0, M("dragstart", b));
        1 === T && (d = c.minus(d ? Y : ja), b.delta = d, M("dragging", b, d));
        ja = c
    }

    function N(a) {
        M("mouseover", a, oa, x);
        var b = a.target,
            d = a.relatedTarget;
        if (!V && (W === b || c(W, b)) && !(W === d || c(W, d))) V = !0, M("mouseenter", a, oa, x)
    }

    function J(a) {
        M("mouseout", a, oa, x);
        var b = a.target,
            d = a.relatedTarget;
        if (V && (W === b || c(W, b)) && !(W === d || c(W, d))) V = !1, M("mouseleave", a, oa, x)
    }

    function K(b) {
        if (!Q) {
            var c = n();
            300 < c - aa && (X = 0, aa = c, u = a(b));
            X++;
            oa = !1;
            1 < X && 2 > u.distanceTo(a(b)) ? (M("dblclick", b), X = 0) : M("click", b)
        }
    }

    function Ca(a) {
        M("mousewheel", a)
    }

    function O(c) {
        var d = a(c);
        b.exist(e, "rightclick") && A && 2 >= d.distanceTo(A) && (c.preventDefault(), M("rightclick", c))
    }

    function M(c, d) {
        for (var g = [e, c, d, a(d)], l = 2, n = null; n = arguments[l++];) g.push(n);
        b.trigger.apply(b, g)
    }

    function na() {
        e.get("tracking") ? R || (l(W, "mouseover", N), l(W, "mouseout", J), l(W, "mousedown", fa), l(W, "mouseup", B), l(W, "mousemove", H), l(W, "click", K), l(W, "mousewheel", Ca), l(W, "contextmenu", O), R = !0) : R && (E(W, "mouseover", N), E(W, "mouseout", J), E(W, "mousedown", fa), E(W, "mouseup", B), E(W, "mousemove", H), E(W, "click", K), E(W, "mousewheel", Ca), E(W, "contextmenu", O), C(), R = !1)
    }
    s++;
    var W = g,
        R = !1,
        Ra = !1,
        oa = !1,
        V = !1,
        ra = !1,
        T = -1,
        ja = null,
        A = null,
        Y = null,
        aa = 0,
        X = 0,
        u = null;
    b.addListener(e, "tracking_changed", na);
    na()
})