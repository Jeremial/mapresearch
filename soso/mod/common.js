'use strict';

function a(a, b) {
    this._asCache = !! a;
    this._reinit();
    null != b && this.setMaxCount(b)
}

function b(a, b) { /* tile node */
    this._key = a;
    this._value = b
}

function c(a, b, c) {
    this.timeout = b || 15e3;
    this.queue = new Ma;
    this.pending = new Ma;
    this.concurrent = a;
    this.cors = c;
    this._domain = document.domain
}

function d(a, b, c) {
    return function() {
        return b.call(this, a, c)
    }
}

function x(a, b) { /* image loader ? */
    if (!a.cancelled) {
        a.endTime = Ea();
        a.loaded = b;
        clearTimeout(a.timer);
        var c = a.loader;
        c.pending.remove(a.url) && c._laterCheck();
        c = a.image;
        if (!a.cancelled && (b || a.force)) a.callback(!b ? null : c, a);
        c.onload = null;
        c.onerror = null;
        c.onabort = null;
        a.image = null
    }
}

function B(a, b, c) {
    this.url = a;
    this.callback = b;
    this.force = c
}

function ha(a) {
    this.guid = nb++;
    a = a || {};
    a.begins = a.begins || [];
    a.ends = a.ends || [];
    a.transition = a.transition || db;
    a.precision = a.precision || 1e-4; /* 0.01% */
    eb.call(this, a) /* eb == Wb, animation constructor */
}

function v(a, b, c, d) { /* bound ? */
    this.minX = a;
    this.minY = b;
    this.maxX = c;
    this.maxY = d
}
var Q = function(a, b) { /* delete element */
    if (b) {
        var c = document.createElement("div");
        c.appendChild(a);
        c.innerHTML = ""
    } else a.parentNode && a.parentNode.removeChild(a), me(a) /* me is used to remove listeners */
}, Ca = function(a) { /* remove object */
        if (a && qa) {
            a.style.display = "none";
            for (var b in a) "function" === typeof a[b] && (a[b] = null);
            window.CollectGarbage && setTimeout(window.CollectGarbage, 0)
        }
        Q(a, !0)
    }, fa = function(a) { /* $(#id) */
        return document.getElementById(a)
    }, E, oa = function() {
        if (null == E) {
            var a = navigator;
            if (a.plugins && a.mimeTypes.length)(a = a.plugins["Shockwave Flash"]) && a.description && (E = a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0");
            else if (qa) try {
                var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                b && (E = b.GetVariable("$version").replace(/WIN/g, "").replace(/,/g, "."))
            } catch (c) {}
        }
        return E
    }, na = function(a, b) {
        a = a.split(".");
        b = b.split(".");
        for (var c = Math.max(a.length, b.length), d = 0; d < c; d++) {
            var e = a[d],
                g = b[d];
            if (!e || !g) return !e && !g ? 0 : e ? 1 : -1;
            e = Number(e);
            g = Number(g);
            if (e < g) return -1;
            if (e > g) return 1
        }
        return 0
    }, ja = qa ? ' classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"' : ' type="application/x-shockwave-flash"',
    ra = ["id", "width", "height", "align", "data"],
    C = "wmode movie flashvars scale quality play loop menu salign bgcolor base allowscriptaccess allownetworking allowfullscreen seamlesstabbing devicefont swliveconnect".split(" "),
    Ra = function(a) {
        var b, c;
        b = a.minVer;
        c = a.maxVer;
        if (b || c) {
            var d = oa();
            if (!d || b && 0 > na(d, b) || c && 0 < na(d, c)) return a.altHtml || ""
        }
        d = ["<object", ja];
        a.data = a.movie;
        for (b = 0; b < ra.length; b++) c = ra[b], a.hasOwnProperty(c) && d.push(" ", c, '="', a[c], '"');
        d.push(">");
        for (b = 0; b < C.length; b++) c = C[b], a.hasOwnProperty(c) && d.push('<param name="', c, '" value="', a[c], '"/>');
        d.push("</object>");
        return d.join("")
    }, rc = /:\/\/([^\/]*)/,
    Ua = 0,
    fc = function(a) {
        a = a || {};
        return a["\u7779\u7805"] || (a["\u7779\u7805"] = "" + ++Ua)
    };
a.prototype._asCache = !1; /* linked list */
a.prototype._count = 0;
a.prototype._maxCount = Infinity;
a.prototype.ondrop = null;
a.prototype._reinit = function() {
    this._map = {};
    this._head = new b(null, null);
    this._head._prev = this._head._next = this._head
};
a.prototype._removeNode = function(a) {
    this._dropNode(a);
    delete this._map[a._key];
    a._remove();
    this._count--
};
a.prototype._insert = function(a) {
    var b = this._head;
    this._asCache ? (a._next = b._next, a._prev = b, b._next = a, a._next._prev = a) : (a._prev = b._prev, a._next = b, b._prev = a, a._prev._next = a);
    this._truncate()
};
a.prototype._truncate = function() { /* 截断链表 */
    for (var a = this._count; a >= this._maxCount; a--) this._removeNode(this._asCache ? this._head._prev : this._head._next)
};
a.prototype._dropNode = function(a) {
    if (this.ondrop) this.ondrop(a._value, a.key, this)
};
a.prototype._findAndUseNode = function(a) {
    return this.exists(a) ? (a = this._map[a], this._asCache && a !== this._head._next && (a._remove(), this._insert(a)), a) : null
};
a.prototype._popNode = function(a) {
    var b = a._value;
    a !== this._head && this._removeNode(a);
    return b
};
a.prototype.isFull = function() {
    return this._count >= this._maxCount
};
a.prototype.isEmpty = function() {
    return 0 === this._count
};
a.prototype.forEach = function(a, b) {
    for (var c = this._head._next; c !== this._head; c = c._next) a.call(b, c._value, c._key, this)
};
a.prototype.getCount = function() {
    return this._count
};
a.prototype.getMaxCount = function() {
    return this._maxCount
};
a.prototype.setMaxCount = function(a) {
    this._maxCount = a;
    this._truncate()
};
a.prototype.getFirst = function() {
    return this._head._next._value
};
a.prototype.getLast = function() {
    return this._head._prev._value
};
a.prototype.shift = function() {
    return this._popNode(this._head._next)
};
a.prototype.pop = function() {
    return this._popNode(this._head._prev)
};
a.prototype.exists = function(a) {
    return Ad.call(this._map, a)
};
a.prototype.get = function(a, b) {
    var c = this._findAndUseNode(a);
    return c ? c._value : b
};
a.prototype.set = function(a, c) {
    var d = this._findAndUseNode(a);
    d ? d._value = c : (d = new b(a, c), this._map[a] = d, this._insert(d), this._count++)
};
a.prototype.peek = function(a, b) {
    return this.exists(a) ? this._map[a]._value : b
};
a.prototype.remove = function(a) {
    return this.exists(a) ? (this._removeNode(this._map[a]), !0) : !1
};
a.prototype.clear = function() {
    this.ondrop && this.forEach(this.ondrop);
    this._reinit();
    this._count = 0
};
b.prototype._prev = null;
b.prototype._next = null;
b.prototype._remove = function() {
    this._prev._next = this._next;
    this._next._prev = this._prev
};
var Ma = a,
    Ea = ld;
c.prototype._blankUrl = bb + "404.png";
c.prototype._check = function(a) {
    for (a && this.pending.getCount() >= this.concurrent && (a = this.pending.getLast(), a.cancelled && (this.pending.remove(a.url), this._abort(a))); this.queue.getCount() && !(this.pending.getCount() >= this.concurrent);) this._doIt(this.queue.shift())
};
c.prototype._laterCheck = function() {
    if (!this._checkRequested) {
        this._checkRequested = !0;
        var a = this;
        setTimeout(function() {
            a._checkRequested = !1;
            a._check()
        }, 0)
    }
};
c.prototype._doIt = function(a) {
    var b = document.createElement("img");
    a.crossOrigin && (b.crossOrigin = "anonymous");
    a.image = b;
    a.loader = this;
    a.startTime = Ea();
    b.src = a.url;
    a.requested = !0;
    b.complete ? x(a, !0) : (this.pending.set(a.url, a), b.onload = d(a, x, !0), b.onerror = d(a, x, !1), b.onabort = d(a, x, !1), a.timer = setTimeout(d(a, x, !1), this.timeout))
};
c.prototype._abort = function(a) {
    if (a.requested) {
        var b = a.image;
        x(a, !1);
        b.crossOrigin = null;
        b.src = this._blankUrl;
        a.cancelled = !0;
        a.aborted = !0
    }
};
c.prototype.loadImage = function(a, b, c) {
    var d = this.pending.get(a);
    if (d && d.cancelled) d.cancelled = !1, d.callback = b, d.force = c;
    else {
        d = new B(a, b, c);
        if (b = this.cors) a = rc.exec(a), b = (a && a[1]) !== this._domain;
        b && (d.crossOrigin = !0);
        this.queue.set(fc(d), d);
        this._check(!0)
    }
    return d
};
c.prototype.cancelLoadImage = function(a) {
    a.cancelled || (a.cancelled = !0, this.queue.remove(fc(a)))
};
c.prototype.clearQueue = function(a) {
    this.queue.forEach(function(a) {
        a.cancelled = !0
    });
    this.queue.clear();
    if (a)
        for (; a = this.pending.pop();) this._abort(a);
    else this.pending.forEach(function(a) {
        a.cancelled = !0
    })
};
c.prototype.destroy = function() {
    this.clearQueue(!0)
};
B.prototype.requested = !1;
B.prototype.cancelled = !1;
var Ta = function(a, b, c, d) {
    for (var e = d = 0, g = a.length; e < g && !(b === a[e] && (a.splice(e--, 1), d++), d == c); ++e);
    return d
}, Za = function(a, b, c, d) {
        return -c * (a /= d) * (a - 2) + b
    }, eb = Wb,
    db = function(a, b, c, d) {
        return c * a / d + b
    }, nb = 0;
g(ha, eb);
var sa = ha.prototype;
sa.onEnterFrame = function(a) {
    var b = this.begins,
        c = this.ends,
        d = this.helper,
        e = this.transition,
        g = this.duration,
        l = 1 / this.precision,
        v = [],
        s = [];
    a < g ? K(b, function(b, za) {
        v.push(Math.round((Ha(e) ? e[za] : e)(a, b, d && d[za] ? d[za](c[za], !0) : c[za] - b, g) * l) / l)
    }) : v = c.concat();
    var n = this._lastValues || b;
    K(v, function(a, b) {
        s.push(a - n[b]);
        v.toString() != c.toString() && (v[b] = d && d[b] ? d[b](a, !1) : a)
    });
    this._lastValues = v.concat();
    this.onUpdate(v, s)
};
sa.onStart = function() {};
sa.onUpdate = function() {};
sa.onEnd = function() {};
var Ia = null,
    Xa = function(a, b) {
        Ia || (Ia = he("mousewheel") ? "mousewheel" : "DOMMouseScroll");
        return e.addDomListener(a, Ia, function(c) {
            var d = 0;
            c.wheelDelta ? (d = c.wheelDelta / 120, window.opera && 10 > window.opera.version() && (d = -d)) : c.detail && (d = -c.detail / 3);
            c.delta = Math.round(d);
            b.call(a, c)
        })
    }, mb = /firefox\/(\d+\.\d+)/i.test(sb) ? +RegExp.$1 : 0,
    kb = function(a, b) {
        return !a || !b ? !1 : a.contains ? a !== b && a.contains(b) : !! (a.compareDocumentPosition(b) & 16)
    }, qb = function(a, b, c) {
        "grab" == b && (b = bb + "grab.cur", b = mb ? "-moz-grab" : "url(" + b + ")" + (zd || qe ? " 10 10" : "") + ", " + c);
        "grabbing" == b && (b = bb + "grabbing.cur", b = mb ? "-moz-grabbing" : "url(" + b + ")" + (zd || qe ? " 10 10" : "") + ", " + c);
        b = b || "";
        c = c || "auto";
        var d = b.toLowerCase();
        0 < d.indexOf(".cur") && 0 > d.indexOf("url") && (b = "url(" + b + ")," + c);
        "hand" == d && !qa && (b = "pointer");
        a.style.cursor = b
    }, hb = function(a) {
        if ("number" == typeof a) return a + "px";
        if ("string" == typeof a) return a = a.replace(RegExp("\\s", "g"), ""), /^\d+(px|%)+$/i.exec(a) || "auto" === a ? a : /^\d+$/.exec(a) ? a + "px" : "0px"
    }, rb = /webkit/i.test(sb) && "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix,
    xb = "translate" + (rb ? "3d(" : "("),
    yb = rb ? ",0)" : ")",
    $a = null,
    zb = function(a) {
        var b = document,
            c = b.createElement("style");
        c.setAttribute("type", "text/css");
        c.styleSheet ? c.styleSheet.cssText = a : (a = b.createTextNode(a), c.appendChild(a));
        a = b.getElementsByTagName("head");
        a.length ? a[0].appendChild(c) : b.documentElement.appendChild(c)
    }, Eb = function() {
        R($a) || (K(["transformProperty", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], function(a) {
            if (a in document.documentElement.style) return $a = a, !1
        }), $a || ($a = ""));
        return $a
    }, sa = function(a, b, c) {
        null != b && (a.style.left = hb(b));
        null != c && (a.style.top = hb(c))
    }, Aa = rb ? function(a, b, c) {
        a.style[Eb()] = xb + b + "px," + c + "px" + yb;
        pe && (a.style["-webkit-perspective"] = "1000", a.style["-webkit-backface-visibility"] = "hidden")
    } : sa;
zb("@media screen{.smnoscreen {display:none}} @media print{.smnoprint{display:none}}");
var Qb = function(a, b, c) {
    if (document.defaultView && c) {
        b = b.replace(/[A-Z]/g, function(a) {
            return "-" + a.toLowerCase()
        });
        try {
            return document.defaultView.getComputedStyle(a, null).getPropertyValue(b)
        } catch (d) {
            return ""
        }
    }
    b = b.replace(/-(\D)/g, function(a, b) {
        return b.toUpperCase()
    });
    "float" == b && (b = qa ? "styleFloat" : "cssFloat");
    return a.currentStyle && c ? a.currentStyle[b] : a.style ? a.style[b] : void 0
}, sa = v.prototype;
sa.isEmpty = function() {
    return !(this.minX <= this.maxX && this.minY <= this.maxY)
};
sa.getCenter = function() {
    return new H((this.minX + this.maxX) / 2, (this.minY + this.maxY) / 2)
};
sa.extend = function(a) {
    a && (this.minX = Math.min(this.minX, a.x), this.maxX = Math.max(this.maxX, a.x), this.minY = Math.min(this.minY, a.y), this.maxY = Math.max(this.maxY, a.y))
};
sa.equals = function(a) {
    return !a ? !1 : this.minX == a.minX && this.minY == a.minY && this.maxX == a.maxX && this.maxY == a.maxY
};
sa.containsBounds = function(a) {
    return a.minX > this.minX && a.maxX < this.maxX && a.minY > this.minY && a.maxY < this.maxY
};
sa.containsPoint = function(a) {
    return a.x >= this.minX && a.x <= this.maxX && a.y >= this.minY && a.y <= this.maxY
};
sa.intersects = function(a) {
    if (!this.isEmpty() && !a.isEmpty() && !(a.maxX < this.minX || a.minX > this.maxX || a.maxY < this.minY || a.minY > this.maxY)) {
        var b = Math.max(this.minX, a.minX),
            c = Math.min(this.maxX, a.maxX),
            d = Math.max(this.minY, a.minY);
        a = Math.min(this.maxY, a.maxY);
        return new v(b, d, c, a)
    }
};
sa.getMin = function() {
    return new H(this.minX, this.minY)
};
sa.getMax = function() {
    return new H(this.maxX, this.maxY)
};
sa.clone = function() {
    return new v(this.minX, this.minY, this.maxX, this.maxY)
};
sa.toString = function() {
    return this.minX + "," + this.minY + "," + this.maxX + "," + this.maxY
};
var pb = function() {
    return !1
}, vb = function(a) {
        qa || window.opera ? (a.unselectable = "on", a.attachEvent("selectstart", pb), a.attachEvent("dragstart", pb)) : (a.style.MozUserSelect = "none", a.style.WebkitUserSelect = "none", a.addEventListener("ondragstart", pb, !0))
    }, la = function(a, b, c) {
        null != b && (a.style.width = hb(b));
        null != c && (a.style.height = hb(c))
    }, wb = null;
Cd(function() {
    wb || (wb = document.createElement("div"), wb.style.cssText = "position:absolute;width:0px;height:0px;display:none;")
});