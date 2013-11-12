'use strict';

function b(a) {
    a = Bb(a, fb); /*Bb == Gb */
    this.setValues(a);
    N.$require("layer", wb(this), 1)
}

function d() {
    this._hasBindDom = !1
}

function x(a) {
    if (this.get("isActive") && this.get("keyboardShortcuts")) {
        var b = this.get("worker"),
            c = [w[0], w[1]],
            d = !0;
        switch (a.keyCode || a.which || a.charCode) {
            case 33:
                b.panByFraction(0, -.5);
                break;
            case 34:
                b.panByFraction(0, .5);
                break;
            case 37:
                c[0] = -1;
                break;
            case 38:
                c[1] = -1;
                break;
            case 39:
                c[0] = 1;
                break;
            case 40:
                c[1] = 1;
                break;
            default:
                d = !1
        }
        d && k(a);
        if (c[0] !== w[0] || c[1] !== w[1]) this.upperMove(c), w = c
    }
}

function E(a) {
    if (this.get("keyboardShortcuts")) {
        var b = this.get("worker"),
            c = [w[0], w[1]],
            d = !0;
        switch (a.keyCode || a.which || a.charCode) {
            case 187:
            case 107:
            case 61:
                this.get("isActive") && b.zoomBy(1);
                break;
            case 189:
            case 109:
                this.get("isActive") && b.zoomBy(-1);
                break;
            case 38:
            case 40:
                c[1] = 0;
                break;
            case 37:
            case 39:
                c[0] = 0;
                break;
            default:
                d = !1
        }
        d && k(a);
        if (c[0] !== w[0] || c[1] !== w[1]) this.upperMove(c), w = c
    }
}

function C(a) {
    this.eventController = a;
    this.listeners = [];
    this.lastCenter = null
}

function B(a) {
    this.eventController = a
}

function M(a) {
    this.eventController = a
}

function R(a) {
    this.eventController = a;
    this.listeners = [];
    this.I = new Ba(0, 0);
    this.J = new Ba(0, 0);
    this.S = new Ba(0, 0);
    this.Ir = new sa(Hb);
    this.top = this.left = 0
}

function T(a, b) {
    var c = Math.sqrt(X(a.I));
    c > xb && aa(a.I, xb / c);
    a.Ir.reset(new Ba(0, 0), a.I);
    a.lastTime = b;
    a._dragThrowTimer = window.setInterval(function() {
        var b = Wa(),
            c = a.Ir;
        c.j = Math.max(c.j + (b - a.lastTime) / 1e3, 0);
        c.o = !0;
        a.lastTime = b;
        ra(c);
        a._onThrowMove(c.Nc.x, c.Nc.y);
        ra(c);
        X(c.C) < yb && ja(a)
    }, 16)
}

function ja(a) {
    a.left = 0;
    a.top = 0;
    a.I.x = 0;
    a.I.y = 0;
    a._dragThrowTimer && clearInterval(a._dragThrowTimer)
}

function ra(a) {
    if (a.o) {
        var b = Math.exp(-a.G * a.j),
            c = (1 - b) / a.G;
        a.C.x = a.D.x * b;
        a.C.y = a.D.y * b;
        a.Nc.x = a.D.x * c + a.H.x;
        a.Nc.y = a.D.y * c + a.H.y;
        a.o = !1
    }
}

function X(a) {
    return a.x * a.x + a.y * a.y
}

function aa(a, b) {
    a.x *= b;
    a.y *= b
}

function ia(a, b, c) {
    if (b) {
        var d = Wa();
        if (c) {
            c = d - a.lastTime;
            if (50 > c) return;
            c = 1e3 / c;
            a.I.x = parseInt((b.getX() - a.J.x) * c);
            a.I.y = parseInt((b.getY() - a.J.y) * c)
        }
        a.lastTime = d;
        a.J.x = b.getX();
        a.J.y = b.getY()
    }
}

function sa(a) {
    this.G = Math.max(null != a ? a : .75, .01);
    this.H = new Ba(0, 0);
    this.D = new Ba(0, 0);
    this.Nc = new Ba(0, 0);
    this.C = new Ba(0, 0);
    this.j = 0;
    this.o = !0
}

function pa(a) {
    this.localGuard = 0;
    this.array_to_be_checked = a
}

function ta(a) {
    U.call(this, a)
}

function Ia(a, b) {
    return a.replace(/\{(\w+)\}/g, function(a, c) {
        return b[c]
    })
}

function Ha(a, b, c) {
    var d = new $b;
    d.precision = c || .02;
    d.duration = a;
    d.transition = b;
    return d
}

function Ea() {
    function a() {
        Fb.trigger(b, "stopAnim")
    }
    var b = this;
    b.zoomFx = Ha(ca, Rc);
    b.panFx = Ha(ca, Rc, 1e-8);
    b.zoomFx.onStart = a;
    b.panFx.onStart = a
}

function Qa(a) {
    var b = Math.round(a.getLat() * p) / p;
    a = Math.round(a.getLng() * p) / p;
    return new ac(b, a)
}

function Ma(a, b, c) {
    var d = a.get("modelZoom"),
        e = a.get("viewZoom"),
        f = a.get("mapCanvasProjection");
    b = Ua(b, a.get("zoomRange"));
    var g;
    g = 1e-4 < e - b ? parseInt(b) : 1e-4 < b - e ? Math.ceil(b) : d || b;
    var h;
    c && (h = f.fromLatLngToContainerPixel(c));
    (!e || e !== b) && a.set("viewZoom", b);
    (!d || d !== g) && a.set("modelZoom", g);
    if (c && (c = f.fromLatLngToContainerPixel(c), h = c.minus(h), h.getX() || h.getY())) c = a.get("mapProjection"), d = a.get("latlngCenter"), d = c.fromLatLngToWorldPixel(d), h = c.fromWorldPixelToLatLng(d.plus(h)), a.set("latlngCenter", Qa(h))
}

function Ua(a, b) {
    b && (a = Dg(a, b.min, b.max));
    return Math.round(a / h) * h
}

function Pa() {
    this.prop_guard = new Lb(Yb)
}

function rc() {}

function La(a) {
    this.arrLayers = a
}

function ga() {}

function Ya(a, b) {
    return function() {
        a.isDrag = b;
        a.redraw()
    }
}

function W(a) {
    ec.addListener(a, "dragstart", Ya(this, !0));
    ec.addListener(a, "dragend", Ya(this, !1))
}

function Sa() {
    var a = this;
    wc.addDomListener(document, "mousedown", function(b) {
        a.update(b)
    })
}

function Xa() {}

function $a() {
    this._projection = null;
    this.prop_guard = new yc(Xb)
}

function eb() {}

function gb(a) {
    return a && a.width && a.height ? a : "number" === typeof a ? new Ub(a, a) : new Ub(ic, ic)
}

function va(a, b, c) {
    a = 1 << a;
    var d = new Ub(a, a);
    a = vc;
    var e = d.width;
    0 > b ? (b %= e, b = 0 !== b ? e + b : 0) : b = b >= e ? b % e : b;
    d = d.height;
    0 > c ? (c %= d, c = 0 !== c ? d + c : 0) : c = c >= d ? c % d : c;
    return new a(b, c)
}

function db() {
    this.prop_guard = new Ic(nc)
}

function A() {}

function Y(a, b, c, d) {
    d = a.get("mapProjection");
    c = c || a.get("projectionTopLeft");
    a = c.x + b.getX();
    b = c.y + b.getY();
    return d.fromWorldPixelToLatLng(new mc(a, b))
}

function hb(a, b, c) {
    b = a.get("mapProjection").fromLatLngToWorldPixel(b);
    c = c || a.get("projectionTopLeft");
    a = b.getX() - c.getX();
    b = b.getY() - c.getY();
    return new mc(a, b)
}

function kb(a) {
    var b = new Nc(a);
    b.bindTo("worker", this);
    b.bindTo("enable", this, "draggable");
    console.log(b);
    u(b, ["dragstart", "drag", "dragend"], this);
    cc.addListener(this, "stopAnim", function() {
        b.stopDragThrow()
    });
    var c = new Oc(a);
    c.bindTo("worker", this);
    c.bindTo("innerContainer", this);
    c.bindTo("mapCanvasProjection", this);
    c.bindTo("enable", this, "scrollwheel");
    c = new Pc(a);
    c.bindTo("worker", this);
    c.bindTo("innerContainer", this);
    c.bindTo("mapCanvasProjection", this);
    c.bindTo("disable", this, "disableDoubleClickZoom");
    c = new Vc(a);
    c.bindTo("worker", this);
    c.bindTo("innerContainer", this);
    c.bindTo("mapCanvasProjection", this);
    c.bindTo("disable", this, "disableTouchZoom");
    cc.addListener(a, "mousedown", Mc);
    c = new Wc;
    c.bindTo("worker", this);
    c.bindTo("isActive", this);
    c.bindTo("size", this);
    c.bindTo("keyboardShortcuts", this);
    u(a, Xc, this)
}

function u(a, b, c) {
    Lc(b, function(b) {
        cc.forward(a, b, c)
    })
}

function r() {
    this.prop_guard = new $c(bd)
}

function f(a) {
    return function() {
        a.updateBoundsTime && 200 < xc() - a.updateBoundsTime && !a.get("dragging") && (clearInterval(a.timer), a.timer = a.updateBoundsTime = null, Yc.trigger(a, "idle"))
    }
}

function G() {}

function t(a, b, c, d) {
    d ? Wb.addListener(a, b, function(a) {
        for (var b = [c, d], e = 0, q = arguments.length; e < q; e++) b.push(arguments[e]);
        Wb.trigger.apply(Wb, b)
    }) : Wb.forward(a, b, c)
}

function ub() {}

function cb() {
    this.prop_guard = new ed(Bc)
}

function nb(a) {
    this.layersArray = [null];
    var b = this;
    a.forEach(function(a) {
        b.addLayer(a)
    });
    Dc.addListener(a, "insert_at", function(a, c) {
        b.addLayer(a, !1, c)
    });
    Dc.addListener(a, "remove_at", function(a, c) {
        b.removeLayer(!1, c)
    })
}

function sb(a) {
    function b() {
        Cc.call(this, {
            baseLayer: a.isBaseLayer,
            name: a.name
        })
    }

    function c() {}
    c.prototype = Cc.prototype;
    b.prototype = new c;
    b.prototype.constructor = b;
    b.prototype.getTileUrl = a.getTileUrl;
    return new b
}

function ob() {}

function pb(a) {
    this.mapTypes = a
}

function y(a) {
    a = this.mapTypes.get(a) || null;
    a !== this.currentMapType && (this.set("mapType", a), this.set("maxZoom", a && a.maxZoom), this.set("minZoom", a && a.minZoom), this.currentMapType = a)
}

function Cb() {
    this.timer = null
}

function Z() {}

function lb() {
    this.t = this.top = this.left = this.height = this.width = 0
}

function P(a) {
    this.zIndex = a
}

function S() {}

function jb() {
    var a = this.get("container"),
        b = this.get("div");
    a ? b ? b.parentNode !== a && a.appendChild(b) : (b = jd("div", a), qd(b, "position", "relative"), qd(b, "width", "100%"), qd(b, "height", "100%"), qd(b, "overflow", "hidden"), qd(b, "overflow", "hidden"), b.style.webkitTransform = "translateZ(0)", Hc.addDomListener(b, "contextmenu", kd), this.set("div", b), this.updateBgColor()) : b && (Hc.removeListeners(b, "contextmenu"), b.parentNode.removeChild(b), this.set("div", null))
}

function da(a) {
    Kc.call(this, a);
    this.changeKeys = {}
}

function m(a) {
    this.model = a;
    this.layers = new ud /* ud == Vb, MVCArray*/
}

function tb(a, b) {
    vd("mousedown mouseup click dblclick rightclick mousemove mouseover mouseout mousewheel dragstart drag dragend".split(" "), function(c) {
        ua.addListener(b, c, function(b) {
            a.triggerMapsEvent(c, b)
        })
    })
}
var Kb = bg || ag || pe,
    Bb = Gb,
    wb = Ja,
    fb = ["tileUrlTemplate", "", "tileSubdomains", "", "tileSize", new ea(256, 256), "copyrights", null, "name", "", "alt", "", "baseLayer", !1, "scheme", "xyz", "isTansparentPng", !1, "minZoom", 0, "maxZoom", 31, "zIndex", 0, "visible", !0, "tileUrlFunc", null, "map", null, "retryCount", 0, "errorUrl", bb + "404.png", "useFlash", !1, "useWebGL", !1];
g(b, l);
Da(b.prototype, ["zIndex", O, "name", null, "map", s(Bd, n), "minZoom", null, "maxZoom", null, "visible", Oa]);
var ib = function(a, b) {
    var c = a % b;
    return 0 > c * b ? c + b : c
}, zb = new lc({
        tileSize: new ea(256, 256),
        getTileUrl: function(a, b) {
            var c = a.x,
                d = a.y,
                e = bb + "transparent.gif";
            b >= this.get("minZoom") && b <= this.get("maxZoom") && (e = "http://sv.map.soso.com/road/".replace(/(http[s]?:\/\/sv)\./g, function(a, b) {
                return b + (c + d) % 4 + "."
            }), d = Math.pow(2, b) - 1 - d, e = [e, b, "/", Math.floor(c / 16), "/", Math.floor(d / 16), "/", c, "_", d, ".png"].join(""));
            return e
        }
    }),
    Rb = new lc({
        tileSize: new ea(256, 256),
        getTileUrl: function(a, b) {
            var c = a.x,
                d = a.y;
            return "http://rtt.map.soso.com/live/" + b + "/" + Math.floor(c / 10) + "/" + Math.floor(d / 10) + "/" + c + "_" + d + ".png"
        }
    }),
    k = Ob;
g(d, l);
var z = d.prototype;
z.changed = function(a) {
    this.get("isActive") && this.get("size") && !this._hasBindDom && (e.bindDom(document, "keydown", x, this), e.bindDom(document, "keyup", E, this), this._hasBindDom = !0)
};
var w = [0, 0];
z.upperMove = function(a) {
    for (var b = this, c = b._upperMoveSpeed || a, d = this.get("worker"), e = 0; e < a.length; e++) {
        var f = a[e];
        0 === f && (c[e] = 0);
        0 >= c[e] / f && (c[e] = f)
    }
    b.upperMoveTimer || (b.upperMoveTimer = setInterval(function() {
        var c = b._upperMoveSpeed || a;
        if (0 === c[0] && 0 === c[1]) clearInterval(b.upperMoveTimer), delete b.upperMoveTimer;
        else {
            var e = 0 != c[0] ? Math.abs(c[0]) / c[0] : 0,
                f = 0 != c[1] ? Math.abs(c[1]) / c[1] : 0;
            c[0] += .5 * e;
            c[1] += .5 * f;
            200 < Math.abs(c[0]) && (c[0] = 200 * e);
            200 < Math.abs(c[1]) && (c[1] = 200 * f)
        }
        b._upperMoveSpeed = c;
        d.panByPixelOffset(c[0], c[1], !0)
    }, 30))
};
g(C, l);
var D = C.prototype;
D.worker_changed = D.disable_changed = function() {
    var a = !this.get("disable"),
        b = this.get("worker"),
        c = this.eventController,
        d = this.listeners;
    if (a && b) d.length || (d.push(e.addListener(c, "gesturestart", Ga(this._onGestureStart, this))), d.push(e.addListener(c, "gesturechange", Ga(this._onGestureChange, this))), d.push(e.addListener(c, "gestureend", Ga(this._onGestureEnd, this))));
    else if (this.listeners)
        for (; a = d.pop();) e.removeListener(a)
};
D._onGestureStart = function(a, b) {
    this.lastZoomFactor = 0
};
D._onGestureChange = function(a, b, c) {
    var d = Math.log(a.scale) / Math.log(2);
    a = d - this.lastZoomFactor;
    this.lastZoomFactor = d;
    var e = this.get("innerContainer"),
        d = this.get("mapCanvasProjection"),
        f = this.get("worker"),
        g = null;
    e && (e = Ib(e), b = new H(b.x - e[0], b.y - e[1]), g = d.fromContainerPixelToLatLng(b));
    f.panByPixelOffset(-c.getX(), -c.getY(), !0);
    f.zoomByDecimal(a, g, !0)
};
D._onGestureEnd = function(a, b) {};
g(B, l);
var $ = B.prototype;
$.worker_changed = $.disable_changed = function() {
    var a = !this.get("disable"),
        b = this.get("worker");
    a && b ? this.listener || (this.listener = e.addListener(this.eventController, "dblclick", Ga(this._onDblclick, this))) : this.listener && (e.removeListener(this.listener), this.listener = null)
};
$._onDblclick = function(a, b) {
    var c = this.get("innerContainer"),
        d = this.get("mapCanvasProjection"),
        e = this.get("worker"),
        f = null;
    c && (c = Ib(c), c = new H(b.x - c[0], b.y - c[1]), f = d.fromContainerPixelToLatLng(c));
    e.zoomBy(1, f)
};
g(M, l);
var wa = M.prototype;
wa.worker_changed = wa.enable_changed = function() {
    var a = this.get("enable"),
        b = this.get("worker");
    a && b ? this.listener || (this.listener = e.addListener(this.eventController, "mousewheel", Ga(this._onMouseWheel, this))) : this.listener && (e.removeListener(this.listener), this.listener = null)
};
wa._onMouseWheel = function(a, b) {
    Ob(a);
    var c = a.delta,
        d = this.get("worker"),
        e = this.get("innerContainer"),
        f = this.get("mapCanvasProjection"),
        g = null;
    e && (e = Ib(e), e = new H(b.x - e[0], b.y - e[1]), g = f.fromContainerPixelToLatLng(e));
    d.zoomBy(c, g)
};
var Wa = ld,
    Ba = H,
    Hb = Kb ? 5 : 8,
    xb = 1e4,
    yb = 100;
g(R, l);
var Db = R.prototype;
Db.worker_changed = Db.enable_changed = function() {
    var a = this.get("enable"),
        b = this.get("worker"),
        c = this.eventController,
        d = this.listeners;
    if (a && b) d.length || (d.push(e.addListener(c, "mousedown", Ga(this._onMouseDown, this))), d.push(e.addListener(c, "dragstart", Ga(this._onDragStart, this))), d.push(e.addListener(c, "dragging", Ga(this._onDrag, this))), d.push(e.addListener(c, "dragend", Ga(this._onDragEnd, this))));
    else if (d)
        for (; a = d.pop();) e.removeListener(a)
};
Db._onMouseDown = function() {
    ja(this)
};
Db._onDragStart = function(a, b) {
    this.S = b;
    ia(this, b, 0);
    e.trigger(this, "dragstart", a)
};
Db._onDrag = function(a, b, c) {
    ia(this, b, 1);
    this.get("worker").panByPixelOffset(-c.getX(), -c.getY(), !0);
    e.trigger(this, "drag", a)
};
Db._onDragEnd = function(a, b) {
    (0 !== b.getX() || 0 !== b.getY()) && ia(this, b, 2);
    e.trigger(this, "dragend", a);
    var c = Wa();
    1 <= b.distanceTo(this.S) && X(this.I) > yb && T(this, c)
};
Db._onThrowMove = function(a, b) {
    a = Math.round(a);
    b = Math.round(b);
    if (this.left != a || this.top != b) {
        var c = this.left - a,
            d = this.top - b;
        this.left = a;
        this.top = b;
        this.get("worker").panByPixelOffset(c, d, !0)
    }
};
Db.stopDragThrow = function() {
    ja(this)
};
sa.prototype.reset = function(a, b) {
    this.H.x = a.x;
    this.H.y = a.y;
    this.D.x = b.x;
    this.D.y = b.y;
    this.j = 0;
    this.o = !1
};
var Ab = pa.prototype;
Ab.getReady = function(a) {
    var b = bc(a.value) || null === a.value ? !0 : !1;
    if (b ^ !1 == (this.localGuard == (1 << this.array_to_be_checked.length) - 1 ? !0 : !1)) this.localGuard = this.process(a, b);
    return this.localGuard == (1 << this.array_to_be_checked.length) - 1 ? !0 : !1
};
Ab.process = function(a, b) {
    for (var c = -1, d = 0; d < this.array_to_be_checked.length; d++)
        if (a.key === this.array_to_be_checked[d]) {
            c = d;
            break
        } - 1 < c && (c = 1 << c, this.localGuard = b ? this.localGuard & c : this.localGuard | c);
    return this.localGuard
};
var U = b;
g(ta, U);
var Eb = ta.prototype;
Eb.getCopyright = function(a, b) {
    return this.get("copyrights").getCopyrightNotice(a, b)
};
Eb.getTileUrl = function(a, b, c) {
    c |= 0;
    if (c > this.get("retryCount")) return this.get("errorUrl");
    if (this.get("tileUrlFunc")) return this.get("tileUrlFunc")(a, b, c);
    var d = this.get("tileSubdomains");
    d && (d = d.split(/\s*,\s*/g));
    return Ia(this.get("tileUrlTemplate"), {
        s: !d ? "" : d[ib(a.x + a.y + c, d.length)],
        x: a.x,
        y: a.y,
        z: b
    })
};
var ka = ma[20],
    tc = 6 === qa || 7 === qa,
    Fb = e,
    $b = ha,
    Lb = pa,
    ac = I,
    dc = function(a, b, c, d) {
        return c * (1 - Math.pow(1 - a / d, 4)) + b
    }, Dg = oc,
    h = .02,
    p = 1e6,
    ca = 6 === qa ? 300 : 750,
    Rc = 6 === qa ? Za : dc;
g(Ea, l);
var ab = Ea.prototype;
ab.panToLatLngCenter = function(a, b) {
    this.stopMoveAnimation();
    b ? this.set("latlngCenter", a) : this.doMove(this.get("mapProjection").fromLatLngToPercentPoint(a))
};
ab.panByPixelOffset = function(a, b, c) {
    a = new H(a, b);
    var d = this.get("latlngCenter");
    b = this.get("mapProjection");
    d = b.fromLatLngToWorldPixel(d);
    a = b.fromWorldPixelToLatLng(d.plus(a));
    this.panToLatLngCenter(a, c)
};
ab.panByFraction = function(a, b, c) {
    var d = this.get("viewSize");
    a *= d.getWidth();
    b *= d.getHeight();
    this.panByPixelOffset(a, b, c)
};
ab.panToBounds = function(a) {
    this.panToLatLngCenter(a.getCenter())
};
ab.zoomTo = function(a, b, c) {
    c ? Ma(this, a, b) : this.doZoom(a, b)
};
ab.zoomBy = function(a, b, c) {
    a = Math.ceil((this.animTargetZoom || this.get("modelZoom")) + a);
    this.zoomTo(a, b, c)
};
ab.zoomByDecimal = function(a, b, c) {
    a = this.get("viewZoom") + a;
    this.zoomTo(a, b, c)
};
ab.stopMoveAnimation = function() {
    this.panFx.stop()
};
ab.stopZoomAnimation = function() {
    this.zoomFx.stop();
    this.animTargetZoom && Ma(this, this.animTargetZoom, this.animZoomCenter)
};
ab.doMove = function(a) {
    var b = this,
        c = b.get("latlngCenter"),
        d = b.get("mapProjection"),
        c = d.fromLatLngToPercentPoint(c),
        e = b.panFx;
    e.begins = [c.getX(), c.getY()];
    e.ends = [a.getX(), a.getY()];
    var f = null;
    e.onUpdate = function(a) {
        a = new H(a[0], a[1]);
        f = d.fromPercentPointToLatLng(a);
        b.set("latlngCenter", f)
    };
    e.start()
};
ab.doZoom = function(a, b) {
    var c = this;
    c.get("mapCanvasProjection");
    a = Ua(a, this.get("zoomRange"));
    c.animTargetZoom = a;
    var d = c.get("viewZoom"),
        e = c.zoomFx;
    e.stop();
    e.begins = [d];
    e.ends = [a];
    c.animTargetZoom = a;
    c.animZoomCenter = b;
    e.onUpdate = function(d) {
        Ma(c, d[0], b);
        d[0] === a && (c.animTargetZoom = null, c.animZoomCenter = null)
    };
    e.start()
};
ab.zoomRange_changed = function() {
    var a = this.animTargetZoom || this.get("modelZoom");
    this.zoomTo(a, null, !this.animTargetZoom)
};
var Yb = "mapProjection mapCanvasProjection viewSize zoomRange latlngCenter viewZoom modelZoom".split(" ");
g(Pa, l);
Pa.prototype.changed = function(a) {
    if ("worker" !== a) {
        a = this.prop_guard.getReady({
            key: a,
            value: this.get(a)
        });
        var b = this.get("worker");
        a ? b || (b = new Ea, b.bindsTo(Yb, this), Fb.forward(b, "stopAnim", this), this.set("worker", b)) : b && (this.set("worker", null), b.stopMoveAnimation(), b.stopZoomAnimation(), b.unbindAll(), Fb.clearListeners(b, "stopAnim"))
    }
};
g(rc, l);
var Mb = rc.prototype;
Mb.boundary_changed = function() {
    this.get("boundary") && this.fitBoundary()
};
Mb.boundary_check = function() {
    var a = this.get("boundary"),
        b = this.get("mapProjection"),
        c = this.get("viewSize"),
        d = b.fromLatLngToWorldPixel(this.get("center")),
        e = a.lat.minY,
        f = a.lng.minX,
        g = b.fromLatLngToWorldPixel(new I(a.lat.maxY, a.lng.maxX)),
        a = g.y + c.getHeight() / 2,
        g = g.x - c.getWidth() / 2,
        e = b.fromLatLngToWorldPixel(new I(e, f)),
        b = e.y - c.getHeight() / 2,
        c = e.x + c.getWidth() / 2,
        c = Math.round(c - d.x),
        g = Math.round(g - d.x),
        a = Math.round(a - d.y),
        d = Math.round(b - d.y);
    0 >= c * g && 0 >= a * d ? this._isInBoundary = !0 : (this._isInBoundary = !1, e = b = 0, 0 < c * g && (b = Math.abs(c) < Math.abs(g) ? c : g), 0 < a * d && (e = Math.abs(a) < Math.abs(d) ? a : d), this._callbackOffset = [b, e])
};
Mb.fitBoundary = function() {
    var a = this.get("worker");
    this.get("mapProjection") && (this.boundary_check(), !1 === this._isInBoundary && a.panByPixelOffset(this._callbackOffset[0], this._callbackOffset[1]))
};
var hc = "";
ka && (hc = "?version=" + ka);
var Sc = new lc({
    alt: Pb.MapType.HYBRID.alt,
    name: Pb.MapType.HYBRID.name,
    tileSize: new ea(256, 256),
    getTileUrl: function(a, b) {
        var c = a.x,
            d = a.y,
            d = Math.pow(2, b) - d - 1,
            e = ib(c + d, 4),
            c = ib(c, 1 << b);
        return "http://p" + e + ".map.soso.com/sateTranTiles/" + b + "/" + (c >> 4) + "/" + (d >> 4) + "/" + c + "_" + d + ".png" + hc
    }
}),
    qc = {
        traffic: Rb,
        panorama: zb
    };
g(La, l);
La.prototype.layers_changed = function() {
    var a = this.get("layers"),
        b = this.arrLayers,
        c = b.getArray(),
        d = null,
        e = {};
    b.forEach(function(a, b) {
        a.id && (a.isDelete = !0, e[a.id] = b)
    });
    K(a, function(a) {
        if (e[a]) c[e[a]].isDelete = !1;
        else if (d = qc[a]) d.id = a, b.push(d)
    });
    for (var a = 0, f; f = this.arrLayers.getAt(a);) f.isDelete ? b.remove(f) : a++, delete f.isDelete
};
g(ga, l);
ga.prototype.input_changed = function() {
    var a = this.get("input"),
        b = [];
    if (a)
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f;
            a: {
                f = b;
                for (var g = e, h = 0, k = f.length; h < k; ++h)
                    if (f[h] === g) {
                        f = !0;
                        break a
                    }
                f = !1
            }
            f || b.push(e)
        }
    this.set("output", b)
};
var ec = e;
g(W, ya);
var Tc = W.prototype;
Tc.changed = function() {
    this.redraw()
};
Tc.draw = function() {
    var a = this.get("div"),
        b = this.isDrag;
    if (a) {
        var c = this.get("cursor"),
            b = this.get("draggable") ? b ? this.get("draggingCursor") : this.get("draggableCursor") : c;
        qb(a, b, c)
    }
};
var wc = e;
g(Sa, l);
Sa.prototype.update = function(a) {
    var b = this.get("div"),
        c = !1;
    if (b && (a = a || window.event, (a.srcElement || a.target) === b)) c = !0;
    this.set("isActive", c)
};
g(Xa, l);
Xa.prototype.mapType_changed = function() {
    var a = this.get("mapType");
    this.set("tileSize", a ? a.tileSize : new ea(Kd, Kd))
};
var ic = Kd,
    vc = H,
    Ub = ea,
    yc = pa,
    Xb = ["projection", "zoom", "tileSize"];
g($a, l);
$a.prototype.changed = function(a) {
    if ("mapProjection" !== a) {
        var b = this,
            c = this.prop_guard.getReady({
                key: a,
                value: this.get(a)
            }),
            d = this._projection;
        c ? d ? d && (d[a] = this.get(a)) : (d = this._projection = new eb, K(Xb, function(a) {
            d[a] = b.get(a)
        }), this.set("mapProjection", d)) : (this.set("mapProjection", null), d && K(Xb, function(a) {
            d[a] = b.get(a)
        }))
    }
};
var Tb = eb.prototype;
Tb.get = function(a) {
    return this[a] || null
};
Tb.fromLatLngToTile = function(a, b, c) {
    c = c || this.get("tileSize");
    c = gb(c);
    a = this.get("projection").fromLatLngToPoint(a, b);
    return va(b, Math.floor(a.x / c.width), Math.floor(a.y / c.height))
};
Tb.fromTileToLatLng = function(a, b, c) {
    c = c || this.get("tileSize");
    c = gb(c);
    a = va(b, a.x, a.y);
    a = new vc(a.x * c.width, a.y * c.height);
    return this.get("projection").fromPointToLatLng(a, b, !1)
};
Tb.fromWorldPixelToLatLng = function(a) {
    return this.get("projection").fromPointToLatLng(a, this.get("zoom"), !1, this.get("tileSize"))
};
Tb.fromLatLngToWorldPixel = function(a) {
    a = this.get("projection").fromLatLngToPoint(a, this.get("zoom"), this.get("tileSize"));
    return new vc(Math.round(100 * a.x) / 100, Math.round(100 * a.y) / 100)
};
Tb.fromLatLngToPercentPoint = function(a) {
    return this.get("projection").fromLatLngToPoint(a, 1, 256).divide(512)
};
Tb.fromPercentPointToLatLng = function(a) {
    return this.get("projection").fromPointToLatLng(a.multiply(512), 1, !1, 256)
};
var mc = H,
    Ic = pa,
    nc = ["mapProjection", "projectionTopLeft"];
g(db, l);
db.prototype.changed = function(a) {
    "mapCanvasProjection" !== a && ((a = this.prop_guard.getReady({
        key: a,
        value: this.get(a)
    })) && !this.get("mapCanvasProjection") ? (a = new A, a.bindsTo(nc, this), a.bindTo("originTopLeft", this), this.set("mapCanvasProjection", a)) : a || this.set("mapCanvasProjection", null))
};
g(A, l);
var Nb = A.prototype;
Nb.fromContainerPixelToLatLng = function(a, b) {
    return Y(this, a, null, b)
};
Nb.fromLatLngToContainerPixel = function(a) {
    return hb(this, a)
};
Nb.fromDivPixelToLatLng = function(a) {
    var b = this.get("originTopLeft");
    return Y(this, a, b)
};
Nb.fromLatLngToDivPixel = function(a) {
    var b = this.get("originTopLeft");
    return hb(this, a, b)
};
var cc = e,
    Lc = K,
    Mc = Ob,
    Nc = R,
    Oc = M,
    Pc = B,
    Vc = C,
    Wc = d,
    Xc = "mousedown mouseup click dblclick rightclick mousemove mouseover mouseout mousewheel".split(" ");
g(kb, l);
var Yc = e,
    $c = pa,
    xc = ld,
    bd = ["viewSize", "projectionTopLeft", "mapProjection"];
g(r, l);
r.prototype.changed = function(a) {
    if ("bounds" !== a && this.prop_guard.getReady({
        key: a,
        value: this.get(a)
    })) {
        this.timer || (this.timer = setInterval(f(this), 200));
        this.updateBoundsTime = xc();
        var b = this.get("mapProjection"),
            c = this.get("viewSize"),
            d = this.get("projectionTopLeft");
        a = this.get("bounds");
        var e = new H(d.getX(), d.getY() + c.getHeight()),
            c = new H(d.getX() + c.getWidth(), d.getY()),
            e = b.fromWorldPixelToLatLng(e),
            b = b.fromWorldPixelToLatLng(c),
            d = new xa(e, b);
        d.equals(a) || this.set("bounds", d)
    }
};
var Wb = e,
    cd = "mousedown mouseup click dblclick rightclick dragstart dragging dragend".split(" "),
    dd = "mousemove mouseenter mouseleave mousewheel keyboard gesturestart gesturechange gestureend".split(" "),
    zc = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
g(G, l);
var Ac = G.prototype;
Ac.maskDiv_changed = function() {
    var a = this,
        b = a.get("maskDiv"),
        c = a.maskTracker;
    c && (c.clearListeners(), c = a.maskTracker = null);
    b && (c = a.maskTracker = new jc(b), K(cd, function(b) {
        t(c, b, a, zc[b])
    }))
};
Ac.innerContainer_changed = function() {
    var a = this,
        b = a.get("innerContainer"),
        c = a.innerContainerTracker;
    c && (c.clearListeners(), c = a.innerContainerTracker = null);
    b && (c = a.innerContainerTracker = new jc(b), K(dd, function(b) {
        t(c, b, a, zc[b])
    }))
};
g(ub, l);
ub.prototype.mapType_changed = function() {
    var a = this.get("mapType"),
        b = null,
        c = this.get("projection");
    a && (b = a.projection);
    b ? b !== c && this.set("projection", b) : c || this.set("projection", new Yd)
};
var ed = pa,
    Bc = "minZoom maxZoom viewWidth viewHeight panes projection zoom center backgroundColor".split(" ");
g(cb, l);
cb.prototype.changed = function(a) {
    if ("map" != a) {
        var b = this.get(a);
        if (!("undefined" == b || null == b)) {
            switch (a) {
                case "zoomRange":
                    this.set("minZoom", b.min);
                    this.set("maxZoom", b.max);
                    break;
                case "viewSize":
                    this.set("viewWidth", b.getWidth());
                    this.set("viewHeight", b.getHeight());
                    break;
                case "tilePane":
                    this.set("panes", {
                        tilePane: b
                    })
            }
            this.prop_guard.getReady({
                key: a,
                value: this.get(a)
            }, !0) ? this.mapInstance || (a = function() {}, g(a, l), this.mapInstance = new a, this.mapInstance.bindsTo(Bc, this), this.mapInstance.set("mapType", !0), this.set("map", this.mapInstance)) : this.set("map", null)
        }
    }
};
var Cc = ta,
    Dc = e;
g(nb, l);
var pd = nb.prototype;
pd.mapType_changed = function() {
    var a = this.get("mapType");
    a && (this.removeLayer(!0), this.addLayer(a, !0), this.updateOutput())
};
pd.map_changed = function() {
    var a = this.get("map");
    if (this.layersArray.length && a)
        for (var b = 0; b < this.layersArray.length; b++) this.layersArray[b] && this.layersArray[b].set("map", a)
};
pd.updateOutput = function() {
    this.set("layers", this.layersArray)
};
pd.addLayer = function(a, b, c) {
    b = !! b;
    a = sb({
        getTileUrl: a.getTileUrl,
        tileSize: a.tileSize,
        isBaseLayer: b,
        name: a.name
    });
    b ? this.layersArray[0] = a : this.layersArray.splice(void 0 != c ? c + 1 : this.layersArray.length + 1, 0, a);
    this.setMapToTileLayer(a)
};
pd.removeLayer = function(a, b) {
    var c;
    (c = a ? this.layersArray.splice(0, 1, null)[0] : this.layersArray.splice(b + 1, 1)[0]) && this.setMapToTileLayer(c, !0)
};
pd.setMapToTileLayer = function(a, b) {
    if (b) a.setMap(null);
    else {
        var c = this.get("map");
        c && a.setMap(c)
    }
};
var fd = function(a, b) {
    this.min = a;
    this.max = b
};
g(ob, l);
ob.prototype.changed = function(a) {
    if ("range" !== a) {
        var b = this.get("mapMinZoom"),
            c = this.get("mapMaxZoom");
        a = this.get("mapTypeMinZoom") || 0;
        var d = this.get("mapTypeMaxZoom") || 30,
            b = b || 0,
            c = c || 30;
        O(a) && (b = Math.max(b, a));
        O(d) && (c = Math.min(c, d));
        a = new fd(b, c);
        this.set("range", a)
    }
};
g(pb, l);
pb.prototype.mapTypeId_changed = function() {
    var a = this.get("mapTypeId");
    this.listener && (e.removeListener(this.listener), this.listener = null);
    a && (this.listener = e.addListener(this.mapTypes, a.toLowerCase() + "_changed", Ga(y, this, a)));
    y.call(this, a)
};
var Zb = "";
ka && (Zb = "?version=" + ka);
var gd = new lc({
    alt: Pb.MapType.ROADMAP.alt,
    name: Pb.MapType.ROADMAP.name,
    tileSize: new ea(256, 256),
    getTileUrl: function(a, b) {
        var c = a.x,
            d = a.y,
            d = Math.pow(2, b) - d - 1,
            e = ib(c + d, 4),
            c = ib(c, 1 << b);
        return "http://p" + e + ".map.soso.com/maptilesv2/" + b + "/" + (c >> 4) + "/" + (d >> 4) + "/" + c + "_" + d + ".png" + Zb
    }
}),
    hd = new lc({
        alt: Pb.MapType.SATELLITE.alt,
        name: Pb.MapType.SATELLITE.name,
        tileSize: new ea(256, 256),
        getTileUrl: function(a, b) {
            var c = a.x,
                d = a.y,
                d = Math.pow(2, b) - d - 1,
                e = ib(c + d, 4),
                c = ib(c, 1 << b);
            return "http://p" + e + ".map.soso.com/sateTiles/" + b + "/" + (c >> 4) + "/" + (d >> 4) + "/" + c + "_" + d + ".jpg" + Zb
        }
    }),
    id = new lc({
        alt: Pb.MapType.HYBRID.alt,
        name: Pb.MapType.HYBRID.name,
        tileSize: new ea(256, 256),
        getTileUrl: function(a, b) {
            var c = a.x,
                d = a.y,
                d = Math.pow(2, b) - d - 1,
                e = ib(c + d, 4),
                c = ib(c, 1 << b);
            return "http://p" + e + ".map.soso.com/sateTiles/" + b + "/" + (c >> 4) + "/" + (d >> 4) + "/" + c + "_" + d + ".jpg" + Zb
        }
    });
g(Cb, l);
var Ec = Cb.prototype;
Ec.container_changed = function() {
    clearInterval(this.timer);
    this.get("container") && (this.updateSize(), this.timer = setInterval(Ga(this.updateSize, this), 100))
};
Ec.updateSize = function() {
    var a = this.get("container"),
        b = this.get("size"),
        c = null;
    if (a) {
        var d = Qb(a, "width", !0) || "",
            e = Qb(a, "height", !0) || "",
            c = parseInt(Qb(a, "padding-left", !0)) || 0,
            f = parseInt(Qb(a, "padding-right", !0)) || 0,
            g = parseInt(Qb(a, "padding-top", !0)) || 0,
            h = parseInt(Qb(a, "padding-bottom", !0)) || 0,
            d = -1 === d.indexOf("%") ? parseInt(d) : 0,
            e = -1 === e.indexOf("%") ? parseInt(e) : 0;
        isNaN(d) && (d = 0);
        isNaN(e) && (e = 0);
        var k = a.clientWidth,
            a = a.clientHeight,
            d = isNaN(d) || !d ? k : k || d,
            e = isNaN(e) || !e ? a : a || e;
        0 < d && (d = d - c - f, e = e - g - h);
        c = new ea(d, e)
    }
    c || (c = new ea(0, 0));
    (!b || !b.equals(c)) && this.set("size", c)
};
var kc = "mapPane overlayLayer overlayShadow overlayImage floatShadow maskPane overlayMouseTarget floatPane".split(" ");
g(Z, l);
var Fc = Z.prototype;
Fc.container_changed = function() {
    var a = this.get("container"),
        b = this.get("panes"),
        c;
    a ? b ? K(kc, function(c) {
        b[c] && a.appendChild(b[c])
    }) : this.initPanes(a) : b && (K(kc, function(a) {
        if (c = b[a]) e.clearInstanceListeners(c), c.parentNode.removeChild(c), delete b[a]
    }), this.set("panes", null))
};
Fc.initPanes = function(a) {
    var b = {};
    K(kc, function(c, d) {
        var e = J("div", a);
        V(e, "position", "absolute");
        V(e, "left", "0px");
        V(e, "top", "0px");
        V(e, "margin", "0px");
        V(e, "padding", "0px");
        V(e, "zIndex", 100 + d);
        b[c] = e
    });
    V(b.floatPane, "cursor", "default");
    V(b.overlayMouseTarget, "cursor", "default");
    V(b.maskPane, "backgroundImage", "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAQAIBRAA7)");
    V(b.maskPane, "backgroundColor", "transparent");
    b.maskPane.className = "smnoprint";
    vb(b.overlayMouseTarget);
    vb(b.maskPane);
    this.set("panes", b)
};
g(lb, ya);
var Gd = lb.prototype;
Gd.panes_changed = function() {
    var a = this.get("panes");
    this.set("div", a ? a.maskPane : null);
    this.redraw()
};
Gd.viewSize_changed = function() {
    this.redraw()
};
Gd.offset_changed = function() {
    var a = !1;
    if (tc) {
        var b = +(new Date);
        if (a = 100 < b - this.t) this.t = b
    }
    this.redraw(a)
};
Gd.draw = function() {
    var a = this.get("div"),
        b = this.get("viewSize"),
        c = this.get("offset");
    if (a) {
        var d = b ? b.getWidth() : 0,
            b = b ? b.getHeight() : 0,
            e = 3 * d,
            f = 3 * b;
        if (e != this.width || f != this.height) la(a, e, f), this.width = e, this.height = f;
        var g = c ? c.getX() : 0,
            c = c ? c.getY() : 0,
            h = this.left + g,
            k = this.top + c,
            m = this.left,
            l = this.top,
            v = (e - d) / 4,
            n = (f - b) / 4;
        if (h > -v || h < d - e + v) this.left = (d - e) / 2 - g;
        if (k >= -n || k <= b - f + n) this.top = (b - f) / 2 - c;
        (m !== this.left || l !== this.top) && Aa(a, this.left, this.top)
    }
    this.updateBounds()
};
Gd.updateBounds = function() {
    var a = this.left,
        b = this.top,
        a = new v(a, b, a + this.width, b + this.height);
    a.equals(this.get("pixelBounds")) || this.set("pixelBounds", a)
};
g(P, l);
var Gc = P.prototype;
Gc.container_changed = function() {
    var a = this.get("container"),
        b = this.get("div");
    a ? b ? b.parentNode !== a && a.appendChild(b) : (b = J("div", a), V(b, "position", "absolute"), Aa(b, 0, 0), V(b, "zIndex", this.zIndex || 0), this.set("div", b), a = this.get("offset"), b && Aa(b, a ? a.getX() : 0, a ? a.getY() : 0)) : b && (b.parentNode.removeChild(b), this.set("div", null))
};
Gc.offset_changed = function() {
    var a = this.get("div");
    if (a) {
        var b = this.get("offset");
        a && Aa(a, b ? b.getX() : 0, b ? b.getY() : 0)
    }
};
var Hc = e,
    jd = J,
    qd = V,
    kd = Ob;
g(S, l);
var pc = S.prototype;
pc.container_changed = function() {
    var a = this;
    Cd(function() {
        jb.call(a)
    })
};
pc.backgroundColor_changed = function() {
    this.updateBgColor()
};
pc.updateBgColor = function() {
    var a = this.get("div"),
        b = this.get("backgroundColor");
    a && qd(a, "backgroundColor", b || "#e5e3df")
};
var Kc = ya,
    Uc = [2e3, 2e3];
g(da, Kc);
var rd = da.prototype;
rd.changed = function(a) {
    var b;
    a: {
        b = ["center", "zoom", "mapType", "mapProjection", "viewSize"];
        for (var c = 0; c < b.length; c++)
            if (void 0 == this.get(b[c])) {
                b = !1;
                break a
            }
        b = !0
    }
    b && "projectionTopLeft" != a && "originTopLeft" != a && "offset" != a && (b = this.get("zoom") !== parseInt(this.get("zoom")), (bc(this.get("projectionTopLeft")) || bc(this.get("originTopLeft")) || bc(this.get("offset")) || "zoom" == a || "viewSize" == a) && this.setDefaultTopLefts(), "center" == a && this.updateTopLefts(), b && "zoom" == a && this.resetOffset())
};
rd.updateOffset = function(a) {
    this.set("offset", a)
};
rd.resetOffset = function() {
    this.set("originTopLeft", this.get("projectionTopLeft"));
    (0 !== this.get("offset").x || 0 !== this.get("offset").y) && this.set("offset", new H(0, 0));
    this.getModel().notify("overlayRedraw")
};
rd.setDefaultTopLefts = function() {
    var a = this.get_projection_topLeft();
    this.set("projectionTopLeft", a);
    this.resetOffset()
};
rd.updateTopLefts = function() {
    var a = this.get_projection_topLeft();
    this.set("projectionTopLeft", a);
    var b, c = this.get("originTopLeft");
    b = c.getX() - a.getX();
    a = c.getY() - a.getY();
    b = new H(b, a);
    a = Math.abs(b.getX()) <= Uc[0] && Math.abs(b.getY()) <= Uc[1];
    c = this.get("zoom") !== parseInt(this.get("zoom"));
    a && !c ? (a = b.getX(), b = b.getY(), this.updateOffset(new H(Math.round(a), Math.round(b)))) : this.resetOffset()
};
rd.get_projection_topLeft = function() {
    var a = this.get("mapProjection"),
        b = this.get("center"),
        a = a.fromLatLngToWorldPixel(b);
    return new H(a.getX() - this.get("viewSize").getWidth() / 2, a.getY() - this.get("viewSize").getHeight() / 2)
};
try {
    document.execCommand("BackgroundImageCache", !1, !0)
} catch (Id) {}
var ud = Vb,
    vd = K,
    wd = O,
    xd = function(a) {
        a.set(Jc.ROADMAP, gd);
        a.set(Jc.SATELLITE, hd);
        a.set(Jc.HYBRID, id)
    }, yd = I,
    ua = e,
    Zc = m.prototype;
Zc.construct = function() {
    function a(b, c) {
        var d = s.get("worker");
        d ? b(d, c || !1) : ua.addListenerOnce(s, "worker_changed", function() {
            a(b, c || !0)
        })
    }
    var b = this,
        c = this.model,
        d = c.o(),
        e = new da(c),
        f = new S;
    f.set("container", c.getContainer());
    f.bindTo("backgroundColor", c);
    var g = new P(0);
    g.bindTo("container", f, "div");
    var h = new P(0);
    h.bindTo("container", g, "div");
    var k = new P(1);
    k.bindTo("container", g, "div");
    k.bindTo("offset", e);
    g = new Z;
    g.bindTo("container", k, "div");
    var m = new Cb;
    ua.addListener(m, "size_changed", function() {
        c.set("viewHeight", this.get("size").getHeight());
        c.set("viewWidth", this.get("size").getWidth());
        ua.trigger(c, "resize")
    });
    m.set("container", c.getContainer());
    k = new lb;
    k.bindTo("panes", g);
    k.bindTo("viewSize", m, "size");
    k.bindTo("offset", e);
    xd(c.mapTypes);
    var l = new pb(c.mapTypes);
    ua.addListener(l, "maptype_changed", function() {
        c.get("mapTypeId") === Jc.HYBRID ? b.layers.push(Sc) : b.layers.remove(Sc)
    });
    l.bindTo("mapTypeId", c);
    var v = new ob;
    v.bindTo("mapMaxZoom", c, "maxZoom");
    v.bindTo("mapMinZoom", c, "minZoom");
    v.bindTo("mapTypeMaxZoom", l, "maxZoom");
    v.bindTo("mapTypeMinZoom", l, "minZoom");
    var n = new ub;
    n.bindTo("mapType", l);
    var p = new Xa;
    p.bindTo("mapType", l);
    var t = new $a,
        u = new db,
        s = new Pa;
    s.bindTo("mapProjection", t);
    s.bindTo("mapCanvasProjection", u);
    s.bindTo("viewSize", m, "size");
    s.bindTo("zoomRange", v, "range");
    s.set("latlngCenter", c.get("center"));
    s.set("modelZoom", c.get("zoom"));
    s.set("viewZoom", c.get("zoom"));
    ua.addListener(c, "zoom_changed", function() {
        var a = parseInt(c.get("zoom"));
        if (s.get("modelZoom") !== a) {
            var b = s.get("worker");
            b ? b.zoomTo(a, null, !0) : (s.set("modelZoom", a), s.set("viewZoom", a))
        }
    });
    ua.addListener(c, "center_changed", function() {
        var a = c.get("center"),
            b = s.get("latlngCenter");
        if (!a || !a.equals(b))(b = s.get("worker")) ? b.panToLatLngCenter(a, !0) : s.set("latlngCenter", a)
    });
    ua.addListener(s, "modelzoom_changed", function() {
        var a = s.get("modelZoom");
        a !== c.get("zoom") && c.set("zoom", a)
    });
    ua.addListener(s, "latlngcenter_changed", function() {
        var a = s.get("latlngCenter");
        (!a || !a.equals(c.get("center"))) && c.set("center", a)
    });
    t.bindTo("projection", n);
    t.bindTo("tileSize", p);
    t.bindTo("zoom", s, "viewZoom");
    u.bindTo("mapProjection", t);
    u.bindTo("projectionTopLeft", e);
    u.bindTo("originTopLeft", e);
    p = new cb;
    p.bindTo("tilePane", h, "div");
    p.bindTo("projection", n);
    p.bindTo("viewSize", m, "size");
    p.bindTo("zoom", s, "viewZoom");
    p.bindTo("center", s, "latlngCenter");
    p.bindTo("backgroundColor", c);
    p.bindTo("zoomRange", v, "range");
    h = new nb(this.layers);
    h.bindTo("mapType", l);
    h.bindTo("map", p);
    p = new ga;
    p.bindTo("input", d, "layers");
    var w = new ga;
    w.bindTo("input", d, "tileUrlOpts");
    d = new La(this.layers);
    d.bindTo("layers", p, "output");
    d.bindTo("tileUrlOpts", w, "output");
    p = new G;
    p.bindTo("maskDiv", k, "div");
    p.bindTo("innerContainer", f, "div");
    d = new Sa;
    d.bindTo("div", k);
    p = new kb(p);
    p.bindTo("innerContainer", f, "div");
    p.bindTo("mapCanvasProjection", u);
    p.bindTo("draggable", c);
    p.bindTo("disableDoubleClickZoom", c);
    p.bindTo("scrollwheel", c);
    p.bindTo("size", m);
    p.bindTo("isActive", d);
    p.bindTo("keyboardShortcuts", c);
    p.bindTo("worker", s);
    ua.forward(s, "stopAnim", p);
    d = new W(p);
    d.bindTo("div", f);
    d.bindTo("draggable", c);
    d.bindTo("draggableCursor", c);
    d.bindTo("draggingCursor", c);
    d.set("cursor", "default");
    e.get("offset") || e.set("offset", new H(0, 0));
    e.bindTo("center", s, "latlngCenter");
    e.bindTo("zoom", s, "viewZoom");
    e.bindTo("viewSize", m, "size");
    e.bindTo("mapType", l);
    e.bindTo("mapProjection", t);
    tb(e, p);
    var x = new r;
    x.bindTo("viewSize", m, "size");
    x.bindTo("projectionTopLeft", e);
    x.bindTo("mapProjection", t);
    ua.addListener(p, "dragstart", function() {
        x.set("dragging", !0)
    });
    ua.addListener(p, "dragend", function() {
        x.set("dragging", !1)
    });
    c.bindTo("projection", n);
    c.bindTo("mapContainer", f, "div");
    c.bindTo("panes", g);
    c.bindTo("mapCanvasProjection", u);
    c.bindTo("layers", h);
    c.bindTo("bounds", x, null, !x.get("bounds"));
    c.bindTo("drawPixelBounds", k, "pixelBounds");
    ua.addListener(k, "pixelbounds_changed", function() {
        c.notify("overlayRedraw")
    });
    var y = new rc;
    y.bindTo("boundary", c);
    y.bindTo("center", c);
    y.bindTo("viewSize", m, "size");
    y.bindTo("mapProjection", t);
    y.bindTo("worker", s);
    ua.addListener(x, "idle", function() {
        c.get("boundary") && y.fitBoundary();
        ua.trigger(c, "idle")
    });
    ua.addListener(this, "zoom_to", function(b) {
        a(function(a, c) {
            a.zoomTo(parseInt(b), null, c)
        })
    });
    ua.addListener(this, "zoom_by", function(b) {
        a(function(a, c) {
            a.zoomBy(parseInt(b), null, c)
        })
    });
    ua.addListener(this, "pan_to", function(b) {
        a(function(a, c) {
            a.panToLatLngCenter(b, c)
        })
    });
    ua.addListener(this, "pan_by", function(b, c) {
        a(function(a, d) {
            a.panByPixelOffset(b, c, d)
        })
    });
    ua.addListener(this, "fit_bounds", function(a) {
        function b() {
            var e = m.get("size"),
                f = d;
            if (200 > e.width || 200 > e.height) f = 20;
            var g = Math.max(1, e.width - 2 * f),
                e = Math.max(1, e.height - 2 * f),
                h = a.getSouthWest(),
                f = a.getNorthEast(),
                k = n.get("projection"),
                l = h.getLng(),
                p = f.getLng();
            l > p && (h = new yd(h.getLat(), l - 360, !0));
            h = k.fromLatLngToPoint(h, 0);
            k = k.fromLatLngToPoint(f, 0);
            f = Math.max(h.x, k.x) - Math.min(h.x, k.x);
            k = Math.max(h.y, k.y) - Math.min(h.y, k.y);
            f > g || k > e ? g = 0 : (g = Math.log(g + 1e-12) / Math.LN2 - Math.log(f + 1e-12) / Math.LN2, e = Math.log(e + 1e-12) / Math.LN2 - Math.log(k + 1e-12) / Math.LN2, g = Math.floor(Math.min(g, e)));
            e = a.getCenter();
            wd(g) && (c.setCenter(e), c.setZoom(g))
        }
        var d = 40;
        x.get("bounds") ? b() : ua.addListenerOnce(x, "bounds_changed", b)
    });
    ua.addListener(this, "fly_to", function(b, d) {
        var f = this;
        a(function(a) {
            function g(a) {
                return (z * z - y * y + (a ? -1 : 1) * Math.pow(l, 4) * (A - E) * (A - E)) / (2 * (a ? z : y) * l * l * (A - E))
            }

            function h(a) {
                return a * a
            }

            function k(a) {
                return (Math.exp(a) + Math.exp(-a)) / 2
            }
            null == b && (b = c.getCenter());
            null == d && (d = c.getZoom());
            var l = 1.42,
                p = e.get("zoom"),
                v = t.get("mapProjection"),
                n = u.get("mapCanvasProjection"),
                q = m.get("size"),
                r = p - d,
                s = v.fromLatLngToPercentPoint(e.get("center")),
                w = v.fromLatLngToPercentPoint(b),
                x = new H(0, 0),
                q = new H(q.getWidth(), q.getHeight()),
                x = n.fromContainerPixelToLatLng(x),
                n = n.fromContainerPixelToLatLng(q),
                x = v.fromLatLngToPercentPoint(x),
                n = v.fromLatLngToPercentPoint(n),
                y = Math.max(Math.abs(n.x - x.x), Math.abs(n.y - x.y)),
                z = y * Math.pow(2, r),
                E = 0,
                A = Math.sqrt((w.x - s.x) * (w.x - s.x) + (w.y - s.y) * (w.y - s.y)),
                Q = Math.log(-g(0) + Math.sqrt(h(g(0)) + 1)),
                C = (Math.log(-g(1) + Math.sqrt(h(g(1)) + 1)) - Q) / l,
                L = function(a) {
                    return y * k(Q) / k(l * a + Q)
                }, D = function(a) {
                    return y / (l * l) * k(Q) * ((Math.exp(l * a + Q) - Math.exp(-(l * a + Q))) / 2 / k(l * a + Q)) - y / (l * l) * ((Math.exp(Q) - Math.exp(-Q)) / 2) + E
                };
            if (1e-6 > A) {
                if (1e-6 > Math.abs(y - z)) return;
                var G = 0 > r ? -1 : 1,
                    C = Math.abs(Math.log(z / y)) / l,
                    D = function(a) {
                        return E
                    }, L = function(a) {
                        return y * Math.exp(G * l * a)
                    }
            }
            var B = f._zoomFx;
            B && B.stop();
            B = new ha;
            f._zoomFx = B;
            B.duration = 1e3 * (C / .9);
            B.onEnterFrame = function(c) {
                if (c >= B.duration) a.panToLatLngCenter(b, !0), a.zoomTo(d, !0);
                else {
                    c = c / B.duration * C;
                    var e = D(c) / A,
                        e = isNaN(e) ? 1 : e,
                        e = new H(0 === e ? s.x : 1 === e ? w.x : s.x + (w.x - s.x) * e, 0 === e ? s.y : 1 === e ? w.y : s.y + (w.y - s.y) * e);
                    c = p + Math.log(y / L(c)) / Math.LN2;
                    a.panToLatLngCenter(v.fromPercentPointToLatLng(e), !0);
                    a.zoomTo(c, null, !0)
                }
            };
            B.onEnd = function() {
                a.zoomTo(d, null, !0)
            };
            B.start()
        })
    });
    N.$require("controls", function(a) {
        a(c, f, m, v)
    })
};
Zc.exec = function(a, b) {
    switch (a) {
        case "zoom_to":
        case "zoom_by":
        case "pan_by":
        case "pan_to":
        case "fit_bounds":
        case "fly_to":
            ua.trigger.apply(ua, [this, a].concat(b))
    }
};
try {
    document.execCommand("BackgroundImageCache", !1, !0)
} catch (Jd) {}
var ad = {};
N.$setExports(function(a) { /* a is map object */
    if (F(Na)(a)) { /* check if a is instace of Na */
        var b = fc(a),
            c = ad[b];
        c || (c = ad[b] = new m(a));
        return c
    }
})