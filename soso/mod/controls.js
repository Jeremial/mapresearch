'use strict';

function a(h, b, c, q) {
    var p = this;
    m.addListener(p, "value_changed", function() {
        p.set("active", p.get("value") == c)
    });
    m.addDomListener(h, b, function() {
        !1 != p.get("enable") && p.set("value", null != q && p.get("active") ? q : c)
    });
    m.addListener(p, "display_changed", function() {
        h.style.display = !1 != p.get("display") ? "" : "none"
    })
}

function b(a, h, c, q, p) {
    a = this.element = Bb("div", a);
    tb(a, p);
    p = a.style;
    p.direction = "ltr";
    p.textAlign = "left";
    p.fontSize = "11px";
    p.backgroundColor = "#FFFFFF";
    p.whiteSpace = "nowrap";
    p.cursor = "pointer";
    p = this.checkbox = Bb("input");
    p.type = "checkbox";
    p.style.verticalAlign = "middle";
    p.style.margin = "0 3px 0 0";
    p.style.cursor = "pointer";
    a.appendChild(p);
    p = Bb("label", a);
    od(p, h);
    p.style.verticalAlign = "middle";
    p.style.cursor = "pointer";
    ib.addDomListener(a, "mouseover", fb(this.draw, this, !0));
    ib.addDomListener(a, "mouseout", fb(this.draw, this, !1));
    h = new Kb(a, "click", c, q);
    h.bindTo("value", this);
    h.bindTo("display", this);
    h.bindTo("enabled", this);
    this.bindTo("active", h)
}

function c(a, h, b, q) {
    a = this.element = w("div", a);
    k(a, q);
    var p = a.style;
    p.direction = "ltr";
    p.overflow = "hidden";
    p.textAlign = "center";
    p.lineHeight = "20px";
    p.border = "1px solid #717B87";
    q.s0 || (p.borderLeft = "0px");
    wa(a, "0 2px 4px rgba(0,0,0,0.4)");
    $(h, a);
    h = new z(a, "click", b);
    h.bindTo("value", this);
    this.bindTo("active", h);
    h.bindTo("enable", this);
    parseInt(p.paddingLeft, 10);
    p.fontWeight = "bold";
    parseInt(p.paddingRight);
    p.fontWeight = "normal";
    var L = this;
    D.addDomListener(a, "mousedown", function(a) {
        !1 != L.get("enable") && D.trigger(L, "mousedown", a)
    })
}

function d(a, h) {
    for (var b = 0, c = 0, q = h.length; b < q; b++) {
        var p = h[b],
            k = b == q - 1,
            L = 0 == b,
            ba = Fd(null, a);
        Ee(ba, "float", "left");
        var ca = p.childNodes,
            f = new Fe(ba, p.label, p.onValue, {
                title: p.alt,
                padding: [1, 6],
                s0: L,
                sn: k
            });
        p.key && f.bindTo("value", this, p.key);
        p = new Rb(ba.offsetWidth, ba.offsetHeight);
        ca && (k = new va(this, ba, ca, {
            position: new U(L ? 0 : c, p.getHeight()),
            islast: k
        }), s(ba, f, k));
        c += p.getWidth()
    }
    a.style.cursor = "pointer"
}

function s(a, h, b) {
    ka.addDomListener(a, "mouseover", function() {
        h.get("active") && b.set("active", !0)
    });
    ka.addListener(h, "active_changed", function() {
        b.set("active", h.get("active"))
    })
}

function va(a, h, b, c) {
    c = c || {};
    this.container = h;
    var q = this.element = Fd("div", h);
    h = q.style;
    h.backgroundColor = "#FFFFFF";
    h.zIndex = -1;
    h.paddingTop = "2px";
    h.border = "1px solid #717b87";
    h.borderTop = "0";
    h.textAlign = "left";
    c.position ? n(q, c.position, c.islast) : h.position = "relative";
    h.display = "none";
    tc(b, function(h, b) {
        var c = new Lb(q, h.label, h.onValue, h.offValue, {
            padding: [1, 5, 3, 5],
            title: h.alt,
            disableTitle: h.disableValue
        });
        c.bindTo("value", a, h.key);
        c.bindTo("display", h);
        c.bindTo("enable", h)
    })
}

function n(a, h, b) {
    a = a.style;
    a.position = "absolute";
    a[b ? "right" : "left"] = (b ? 0 : h.getX()) + "px";
    a.top = h.getY() + "px"
}

function A(a, h) {
    this.mapTypes = a;
    h = h || [F.ROADMAP, F.HYBRID, F.SATELLITE];
    var b = -1 !== za(h, F.HYBRID) && -1 !== za(h, F.SATELLITE);
    this.groupInfo = {};
    var c = [],
        q = this;
    B(h, function(h) {
        if (F.HYBRID != h || !b) {
            var p = a.get(h);
            if (p) {
                var k = null;
                F.SATELLITE == h && b && (k = q.mapTypes.get("hybrid"), k = new Y("\u5730\u540d", k.alt, "labels", !0, !1, void 0), q.groupInfo.hybrid = {
                    key: "labels",
                    groupid: "satellite",
                    value: !0
                }, q.groupInfo.satellite = {
                    key: "labels",
                    value: !1
                }, k.set("enable", !0), q.hybrid = k, k = [k]);
                h = new Y(p.name, p.alt, "mapTypeId", h, null, null, k);
                c.push(h)
            }
        }
    });
    this.data = c
}

function Y(a, h, b, c, q, p, k) {
    this.label = a;
    this.alt = h;
    this.key = b;
    this.onValue = c;
    this.offValue = q;
    this.disableValue = p || null;
    this.childNodes = k
}

function Q(a, h, b, c) {
    this.layoutManager = a;
    this.defaultPosition = h;
    this.index = b;
    this.mapTypes = c;
    this.element = null
}

function x(a) {
    this.data = a;
    this.lock = !1
}

function u(a, h, b) {
    a.get(h) !== b && (a.lock = !0, a.set(h, b), a.lock = !1)
}

function r(a, h, b, c, q) {
    this.map = q;
    this.layoutManager = a;
    this.operateControl = {};
    this.element = void 0;
    this.visible = !1;
    this.position = h;
    this.changedKey = {}
}

function f(a, h, b, c, q) {
    this.layoutManager = a;
    this.operateControl = {};
    this.map = q;
    this.element = void 0;
    this.index = c;
    Jb.bind(this.operateControl, "operate", function(a, h) {
        if (q) switch (a) {
            case Ja.IN:
                q.zoomBy(1);
                break;
            case Ja.OUT:
                q.zoomBy(-1);
                break;
            case Ja.TIPS_CLICK:
                q.zoomTo(h);
                break;
            case Ja.DRAG_END:
                var b = q.get("minZoom"),
                    c = q.get("maxZoom"),
                    p = (1 - h) * (c - b) + b + 1,
                    p = 0 > q.get("zoom") - p ? Math.ceil(p) : Math.floor(p),
                    p = sc(p, b, c);
                q.set("zoom", p)
        }
    });
    this.visible = !1;
    this.position = h;
    this.style = b;
    this.changedKey = {}
}

function G(a, h, b, c) {
    this.layoutManager = a;
    this.operateControl = {};
    this.element = void 0;
    this.index = b;
    Ha.bind(this.operateControl, "operate", function(a) {
        if (c) {
            var h = Math.round(c.get("viewHeight") / 3),
                b = Math.round(c.get("viewWidth") / 3),
                q = null;
            switch (a) {
                case gc.PAN_UP:
                    q = [0, -h];
                    break;
                case gc.PAN_DOWN:
                    q = [0, h];
                    break;
                case gc.PAN_LEFT:
                    q = [-b, 0];
                    break;
                case gc.PAN_RIGHT:
                    q = [b, 0]
            }
            q && c.panBy(q[0], q[1])
        }
    });
    this.isVisible = !1;
    this.position = h
}

function t(a, h, b) {
    var c = xa(null, null, 1e6);
    c.style.cssText = "position:absolute;margin:0;padding:0 50px 0 2px;white-space:nowrap;text-align:right;background-image:-webkit-linear-gradient(right, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0.498039) 50px);direction:ltr;";
    Ua(c);
    var q = xa("span", c, null, "display:none;font-size:10px;font-family:Arial, sans-serif;line-height:16px;color:#222222;font-weight:normal;background-color:transparent;"),
        p = xa("a", c, null, "display:none;text-decoration:underline;cursor:pointer;font-size:10px;font-family:Arial, sans-serif;line-height:16px;color:#222222;font-weight:normal;background-color:transparent;");
    Qa(p, "\u5730\u56fe\u6570\u636e");
    var k = new ub(a);
    ta.addDomListener(p, "click", function() {
        k.isShow() ? k.hide() : k.show()
    });
    this.element = c;
    this.span = q;
    this.link = p;
    ta.addListener(c, "positionupdate", Sa(this.resize, this));
    a.addElement(c, h, !1, b);
    k.bindTo("size", this);
    k.bindTo("content", this);
    this.changeKeys = {};
    this.resize();
    this.updateData()
}

function ub(a) {
    var h = xa(null, null, 10000002, "position:absolute;background-color:#FFFFFF;border:1px solid #EEEEEE;font-family:Arial, sans-serif;color:#222222;-webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px;-moz-box-shadow:rgba(0, 0, 0, 0.2) 0px 4px 16px;");
    Ma(h, og, rc);
    var b = xa(null, h, null, "position:relative;margin:15px 20px;"),
        c = xa(null, b, null, "padding:0 0 10px;font-size:16px;");
    Qa(c, "\u5730\u56fe\u6570\u636e");
    b = xa(null, b, null, "font-size:13px;");
    c = xa(null, h, 100, "position:absolute;top:10px;right:10px;padding:0 10px;cursor:pointer;");
    c.innerHTML = "X";
    this.element = h;
    this.content = b;
    this._isShow = !1;
    this.layoutManager = a;
    var q = this;
    ta.addDomListener(c, "click", function() {
        q.hide()
    })
}

function cb(a, h, b) {
    var c = $a(null, null, 1e6);
    Ia(c, "position", "absolute");
    Ia(c, "margin", "2px 5px 2px 2px");
    a.addElement(c, h, !1, b);
    var q = this.link = document.createElement("a");
    q.title = Mi.Copyright.home;
    q.target = "_blank";
    this.updateLink();
    c.appendChild(q);
    7 == Ni && mb.addDomListener(q, "click", function() {
        window.open(q.href)
    });
    Ia(q, "position", "static");
    Ia(q, "overflow", "visible");
    Ia(q, "float", "none");
    Ia(q, "display", "inline");
    var p = $a(null, q, null);
    Ia(p, "cursor", "pointer");
    var k = Oi + "logo.png";
    gb(k, function(a, h) {
        a && h && (eb(p, k, null, new hb(a, h)), rb(p, a, h), mb.trigger(c, "resize"))
    })
}

function C(a, h) {
    var b = this.areas = {};
    q(ba, function(a, h) {
        b[a] = []
    })
}

function I(a) {
    for (var h = 0, b = 0, c = a.length; b < c; ++b) h = Math.max(a[b].height, h);
    for (var c = b = 0, q = a.length; 0 < q; --q) {
        var p = a[q - 1];
        if (h === p.height) {
            p.width > b && p.width > p.height ? b = p.height : c = p.width;
            break
        } else b = Math.max(p.height, b)
    }
    return new Xa(c, b)
}

function E(a, h, b, c) {
    var q = [],
        p = 0,
        k = 0;
    L(a, function(a) {
        var L = a.element,
            ba = Z(L),
            ca = Z(L, !0),
            f = lb(L),
            d = lb(L, !0),
            w = L.style,
            ba = ("left" === h ? p : p + (ba - ca)) + "px",
            d = ("top" === b ? 0 : f - d) + "px";
        if (w[h] != ba || w[b] != d) w[h] = ba, w[b] = d, Ya.trigger(L, "positionupdate");
        ca = p + ca;
        for (k = Math.max(k, f); p < ca; ++p) c[p] = k;
        p = ca;
        a.border || q.push(new Xa(p, f));
        L.style.visibility = ""
    });
    for (a = c.length; p < a; ++p) c[p] = k;
    return I(q)
}

function fa(a, h, b, c) {
    var q = 0,
        p = [];
    L(a, function(a) {
        var k = a.element,
            L = Z(k),
            ba = lb(k),
            ca = Z(k, !0),
            f = lb(k, !0);
        q = Math.max(c[L] || 0, q);
        var d = k.style,
            ca = ("left" === h ? 0 : L - ca) + "px",
            f = ("top" === b ? q : q + ba - f) + "px";
        if (d[h] != ca || d[b] != f) d[h] = ca, d[b] = f, Ya.trigger(k, "positionupdate");
        q += ba;
        a.border || p.push(new Xa(L, q));
        k.style.visibility = ""
    });
    return I(p)
}

function y(a, h, b) {
    var c = 0,
        q = 0;
    L(a, function(a) {
        var b = a.element,
            p = Z(b),
            k = lb(b),
            L = lb(b, !0),
            L = ("top" === h ? 0 : k - L) + "px";
        b.style[h] != L && (b.style[h] = L, Ya.trigger(b, "positionupdate"));
        c += p;
        a.border || (q = Math.max(k, q))
    });
    var p = (b - c) / 2;
    L(a, function(a) {
        a = a.element;
        a.style.left = p + "px";
        p += Z(a);
        a.style.visibility = ""
    });
    return q
}

function Cb(a, h, b, c) {
    var q = 0,
        p = 0;
    L(a, function(a) {
        var c = a.element,
            k = Z(c),
            L = lb(c),
            ba = Z(c, !0);
        "left" === h ? c.style.left = 0 : "right" === h ? c.style.right = k - ba + "px" : c.style.left = (b - ba) / 2 + "px";
        q += L;
        a.border || (p = Math.max(k, p))
    });
    var k = (c - q) / 2;
    L(a, function(a) {
        a = a.element;
        a.style.top = k + "px";
        k += lb(a);
        a.style.visibility = ""
    });
    return p
}

function Z(a, h) {
    if ("none" === db(a, "display")) return 0;
    var b = !h && parseInt(a.getAttribute("controlWidth"));
    if (!Sb(b) || isNaN(b)) b = a.offsetWidth;
    var c = parseInt(Md(a, "marginLeft")) || 0,
        q = parseInt(Md(a, "marginRight")) || 0;
    return b + c + q
}

function lb(a, h) {
    if ("none" === db(a, "display")) return 0;
    var b = !h && parseInt(a.getAttribute("controlHeight"));
    if (!Sb(b) || isNaN(b)) b = a.offsetHeight;
    var c = parseInt(Md(a, "marginTop")) || 0,
        q = parseInt(Md(a, "marginBottom")) || 0;
    return b + c + q
}

function P() {
    this.changedKeys = {};
    this.panDefaultEnable = this.zoomDefaultEnable = this.mapTypeDefaultEnable = !0
}

function S(a, h) {
    Pi(h, function(h, b) {
        function c(h) {
            if (h) {
                var q = h.index;
                Qi(q) || (q = 1e3);
                q = Math.max(q, -999);
                h.style.zIndex = Math.min(999999, h.style.zIndex || 0);
                a.addElement(h, b, !1, q)
            }
        }
        h && (h.forEach(c), Nd.addListener(h, "insert_at", function(a) {
            c(a)
        }), Nd.addListener(h, "remove_at", function(h) {
            a.removeElement(h)
        }))
    })
}
var jb = function(a, h) {
    var b = a.style;
    b.color = "#000000";
    b.fontFamily = "Arial,sans-serif";
    b.fontSize = "13px";
    b.backgroundColor = "#FFFFFF";
    e.addDomListener(a, "contextmenu", Ob);
    vb(a);
    h.title && a.setAttribute("title", h.title);
    var c = [];
    h.padding && K(h.padding, function(a) {
        c.push(a + "px")
    });
    b.padding = c.join(" ");
    h.width && (b.width = Math.round(h.width) + "px")
}, da = function(a, h) {
        R(a.innerText) ? a.innerText = h : a.textContent = h
    }, m = e;
g(a, l);
var tb = jb,
    Kb = a,
    Bb = J,
    od = da,
    fb = Ga,
    ib = e;
g(b, l);
var uc = b.prototype;
uc.active_changed = function() {
    this.checkbox.checked = !! this.get("active")
};
uc.enable_changed = function() {
    var a = this.get("enable");
    this.element.style.color = a ? "#000000" : "#B8B8B8";
    this.checkbox.disabled = !a;
    this.draw(!1)
};
uc.draw = function(a) {
    this.get("enable") || (a = !1);
    this.element.style.backgroundColor = a ? "#EBEBEB" : "#FFFFFF"
};
var Rb = ea,
    k = jb,
    z = a,
    w = J,
    D = e,
    $ = function(a, h, b) {
        a = (h ? 9 == h.nodeType ? h : h.ownerDocument || document : document).createTextNode(a);
        h && !b && h.appendChild(a);
        return a
    }, wa = function(a, h) {
        a.style.WebkitBoxShadow = h;
        a.style.boxShadow = h;
        a.style.MozBoxShadow = h
    };
g(c, l);
var Wa = c.prototype;
Wa.enable_changed = Wa.active_changed = Wa.draw = function() {
    var a = this.get("active"),
        h = this.element.style;
    !1 == this.get("enable") ? (h.color = "gray", a = !1) : h.color = a ? "#FFFFFF" : "#333333";
    h.fontWeight = a ? "bold" : "normal";
    h.backgroundColor = a ? "#269AEA" : "#FFFFFF"
};
var Ba = bb + "default/imgs/ctrls.png",
    sd = bb + "default/imgs/ctrls.png",
    td = [22, 22, 8, 8, 2, 16, 0, 26, 2, 36, 44, 44],
    Ca = [22, 22, 44, 8, 50, 16, 52, 26, 50, 36, 44, 44],
    Db = [22, 22, 8, 8, 16, 2, 26, 0, 36, 2, 44, 44],
    Va = [22, 22, 8, 44, 16, 50, 26, 52, 36, 50, 44, 44],
    U = H,
    Fd = J,
    ka = e,
    tc = K,
    Ee = V,
    Fe = c,
    Lb = b;
g(d, l);
g(va, l);
va.prototype.active_changed = function() {
    this.get("active") ? this.show() : this.hide()
};
va.prototype.show = function() {
    var a = this,
        h = this.element;
    if (!h.listeners) {
        var b = this.container,
            c = ka.addListener(b, "mouseout", function() {
                clearTimeout(h.timer);
                h.timer = window.setTimeout(function() {
                    a.set("active", !1)
                }, 1e3)
            }),
            q = ka.addListener(b, "mouseover", function() {
                h.timer && (clearTimeout(h.timer), h.timer = null)
            }),
            p = ka.addDomListener(document.body, "mouseup", function(h) {
                h = h || window.event;
                h = h.target || ka.srcElement;
                b === h || kb(b, h) || a.set("active", !1)
            });
        h.listeners = [c, q, p]
    }
    h.style.display = ""
};
va.prototype.hide = function() {
    var a = this.element,
        h = a.listeners;
    h && (tc(h, ka.removeListener), a.listeners = null);
    clearTimeout(a.timer);
    a.style.display = "none"
};
var F = Jc,
    za = ne,
    B = K;
g(A, l);
A.prototype.mapTypeId_changed = function() {
    var a = this.get("mapTypeId");
    this.hybrid && this.hybrid.set("display", a == F.SATELLITE)
};
g(Y, l);
var h = function(a) {
    var h = Math.pow(10, (Math.floor(a) + "").length - 1);
    a /= h;
    return h * (10 <= a ? 10 : 5 <= a ? 5 : 2 <= a ? 2 : 1)
}, p = function(a) {
        var h = J("div");
        "up" == a ? (h.style.cssText = "position:absolute;border:1px solid #ffffff;width:2px;height:6px;background:#000;font-size:0;line-height:0;border-bottom-width:0px;", h.style.top = "7px", h.style.height = "9px") : "down" == a && (h.style.cssText = "position:absolute;border:1px solid #ffffff;width:2px;height:6px;background:#000;font-size:0;line-height:0;border-top-width:0px;", h.style.top = "17px", h.style.height = "6px");
        h.style.left = 0;
        h.style.zIndex = 0;
        return h
    }, ca = function(a) {
        var h = J("div");
        "up" == a ? (h.style.cssText = "position:absolute;border:1px solid #ffffff;width:2px;height:6px;background:#000;font-size:0;line-height:0;border-bottom-width:0px;", h.style.top = "0px") : "down" == a && (h.style.cssText = "position:absolute;border:1px solid #ffffff;width:2px;height:6px;background:#000;font-size:0;line-height:0;border-top-width:0px;", h.style.top = "9px");
        h.style.left = "81px";
        h.style.zIndex = 2;
        return h
    }, Rc = function() {
        var a = J("div");
        a.style.cssText = "position:absolute;border:1px solid #ffffff;width:2px;height:6px;background:#000;font-size:0;line-height:0;z-index:1;border-left-width:0px;";
        a.style.left = "3px";
        a.style.width = "80px";
        a.style.height = "2px";
        a.style.top = "6px";
        return a
    }, ab = function(a) {
        var h = J("div");
        h.style.cssText = "position:relative; " + ("up" == a ? "top: 0px;" : "bottom:-16px;") + " font:11px arial,simsun;color:#000;text-align:left; left:5px;";
        return h
    }, Ri = function(a) {
        for (var b = [], c = ["up", "down"], q = 0; 2 > q; q++) {
            var k = c[q],
                L = J("div");
            L.style.cssText = "width:100px;position:absolute;";
            var ba = J("div");
            ba.style.cssText = "position:absolute;height:7px;width:84px;bottom:0px;";
            var f = p(k),
                d = ca(k),
                w = Rc(),
                z = ab(k);
            L.appendChild(f);
            ba.appendChild(d);
            ba.appendChild(w);
            L.appendChild(z);
            L.appendChild(ba);
            b[k + "_rr"] = d;
            b[k + "_rl"] = f;
            b[k + "_rm"] = w;
            b[k + "_ruler"] = ba;
            b[k + "_text"] = z;
            b[k + "_rl"] = f;
            a.appendChild(L)
        }
        var e = void 0;
        return {
            getMaxWidth: function() {
                return e
            },
            refresh: function(a) {
                var c, q, p = b.up_rr,
                    k = b.up_rm,
                    L = b.up_text,
                    ba = b.up_ruler,
                    ca = b.down_rr,
                    f = b.down_rm,
                    d = b.down_ruler,
                    w = b.down_text;
                q = h(a);
                var z = c = Math.round(125 * (q / a)) - 10;
                q = 1e3 > q ? q + " " + Pa.Scale.m : q / 1e3 + " " + Pa.Scale.km;
                da(L, q);
                L.style.width = "80px";
                k.style.width = c + "px";
                p.style.left = c + 0 + "px";
                c = 3.2808399 * a;
                5280 < c ? (c /= 5280, a = h(c), c = Math.round(125 * (a / c)) - 10, q = a + " " + Pa.Scale.mile) : (a = h(c), c = Math.round(125 * (a / c)) - 10, q = a + " " + Pa.Scale.feet);
                da(w, q);
                a = parseInt(k.style.width);
                p = c > a ? c : a;
                w.style.width = "80px";
                f.style.width = p + "px";
                ca.style.left = c + "px";
                f.style.visibility = c > a ? "" : "hidden";
                k.style.visibility = c > a ? "hidden" : "";
                d.style.zIndex = c > a ? 0 : 1;
                ba.style.zIndex = c > a ? 1 : 0;
                e = Math.max(z, p)
            }
        }
    }, Si = function(a, h, b, c) {
        var q = J("div");
        q.style.cssText = "position:absolute;";
        var p = Ri(q),
            k = function(a, b) {
                var c;
                (c = a && b ? Math.abs(156543.04 * Math.cos(a.getLat() * Math.PI / 180)) / Math.pow(2, b) : void 0) && (p.refresh(125 * c), h.style.width = p.getMaxWidth() + 10 + "px")
            };
        e.bind(a, "updateZoom", k);
        k(b, c);
        h.style.width = "100px";
        h.style.height = "35px";
        h.appendChild(q);
        return q
    }, hc = {
        IN: 1,
        OUT: 2,
        DRAG_END: 3,
        TIPS_CLICK: 4
    }, Sc = [88, 60, 26, 22],
    Ti = [119, 60, 26, 22],
    Ui = [150, 60, 26, 22],
    Tc = [88, 87, 26, 22],
    Vi = [119, 87, 26, 22],
    Wi = [150, 87, 26, 22],
    vc = [4, 122, 26, 26],
    Xi = [4, 148, 26, 26],
    Ra = [4, 174, 26, 26],
    Ka = [188, 70, 34, 6],
    Tb = [188, 76, 26, 6],
    ga = [188, 82, 34, 6],
    La = [188, 88, 34, 6],
    nd = [188, 93, 34, 6],
    T = [188, 100, 34, 6],
    X = {
        left: [228, 41, 25, 15],
        right: [258, 41, 25, 15]
    }, ra = function(a) {
        var h = J();
        la(h, a[2], a[3]);
        W(h, Ba, a);
        return h
    }, md = function(a, h, b, c) {
        var q = function(h) {
            return function() {
                W(a, b, c[h])
            }
        };
        e.bindDom(h, "mouseover", q(1), this);
        e.bindDom(h, "mouseout", q(0), this);
        e.bindDom(h, "mouseup", q(1), this);
        e.bindDom(h, "mousedown", q(2), this)
    }, Ed = function(a, h, b, c, q) {
        var p = function() {
            var h = J();
            h.style.cssText = "position:relative;margin:0 19px;cursor:pointer;overflow:hidden;";
            h.title = Pa.Navigation.zoomIn;
            var b = J();
            b.style.cssText = "position:relative;margin:0 19px;cursor:pointer;overflow:hidden;";
            b.title = Pa.Navigation.zoomOut;
            la(h, Sc[2], Sc[3]);
            la(b, Tc[2], Tc[3]);
            W(h, Ba, Sc);
            W(b, Ba, Tc);
            var c = [Tc, Vi, Wi];
            md(h, h, Ba, [Sc, Ti, Ui]);
            md(b, b, Ba, c);
            e.bindDom(h, "click", function() {
                e.trigger(a, "operate", hc.IN)
            });
            e.bindDom(b, "click", function() {
                e.trigger(a, "operate", hc.OUT)
            });
            return [h, b]
        }(),
            k = function(h) {
                h = cc(h);
                var b = Ib(ba);
                e.trigger(a, "operate", hc.DRAG_END, (h[1] - b[1]) / (b[3] - 9))
            }, L = J();
        L.style.cssText = "position:relative;cursor:pointer;margin:0 19px;";
        var ba = J();
        ba.style.cssText = "position:absolute;margin:0 0;cursor:pointer;";
        ba.title = Pa.Navigation.ruler;
        e.bindDom(ba, "click", k);
        L.appendChild(ba);
        var ca = J();
        ca.style.cssText = "position:absolute;margin:0 0;cursor:pointer;";
        ca.title = Pa.Navigation.ruler;
        e.bindDom(ca, "click", k);
        var f = J();
        L.appendChild(f);
        var d = function(a) {
            a = (a - 0) / 6;
            a = 0 < a ? Math.floor(a) : 0;
            for (var h = oa("div", ca, !0), b = 0, c = h.length; b < c; b++) b <= a + 1 ? h[b] && (h[b].style.visibility = "hidden") : h[b] && (h[b].style.visibility = "visible")
        };
        L.appendChild(ca);
        var w = 0,
            z = parseInt(L.style.height) - 12,
            D = void 0,
            m = b,
            ab = function() {
                var h = J();
                h.style.position = "absolute";
                h.style.margin = "0 0";
                h.title = Pa.Navigation.slide;
                h.style.zIndex = 2;
                la(h, vc[2], vc[3]);
                W(h, Ba, vc);
                Aa(h, 3, w);
                md(h, h, Ba, [vc, Xi, Ra]);
                qb(h, "grab");
                var b = 0,
                    c = new jc(h);
                c.addListener("mousedown", function(a) {
                    Ob(a)
                });
                c.addListener("dragstart", function() {
                    D = !0;
                    qb(h, "grabbing")
                });
                c.addListener("dragging", function(a) {
                    Ob(a);
                    qb(h, "grabbing");
                    a = cc(a);
                    var c = Ib(ba),
                        q = z,
                        p = a[1] - c[1] + w - 9;
                    0 > p && (p = 0);
                    p >= q - 6 && (p = q - 6);
                    h.style.top = p + "px";
                    d(p);
                    b = (a[1] - c[1]) / (c[3] - 9)
                });
                c.addListener("dragend", function(c) {
                    D = !1;
                    qb(h, "grab");
                    e.trigger(a, "operate", hc.DRAG_END, b)
                });
                return h
            }();
        L.appendChild(ab);
        var r = function(h, b) {
            var p = p || Pa.Navigation.zoomTips,
                k = 1 === h ? "left" : "right";
            if (f) {
                ac(f);
                for (var L in p)
                    if (L >= c && L <= q) {
                        var ba = X[k],
                            ca = J();
                        ca.style.cssText = "position:absolute;overflow:hidden;padding-left:" + ("left" == k ? "2px" : "9px") + ";";
                        la(ca, ba[2], ba[3]);
                        W(ca, Ba, ba);
                        var ba = 8 == qa ? "1px" : "",
                            d = J("span");
                        d.style.cssText = "position:absolute;color:#fff;_line-height:16px;*line-height:14px;font-family: Simsun;font-size: 12px;font-style: normal;font-variant: normal;font-weight: normal;top:" + ba;
                        da(d, p[L]);
                        ca.appendChild(d);
                        "right" === k ? ca.style.left = "25px" : ca.style.left = "-26px";
                        ca.style.bottom = 6 * (L - c) - 3 + "px";
                        f.appendChild(ca);
                        e.addDomListener(ca, "click", function(h) {
                            return function() {
                                e.trigger(a, "operate", hc.TIPS_CLICK, h)
                            }
                        }(L))
                    }
            }
        }, Rc = function() {
                var a = 0;
                m && z && (a = z - ((m - c) / (q - c) * (z - w) + 3));
                ab && !1 == !! D && (ab.style.top = Math.floor(a) + "px", d(a))
            }, P;
        b = function(a) {
            return function() {
                P && (window.clearTimeout(P), P = null);
                "none" === a ? P = setTimeout(function() {
                    f.style.display = a;
                    P = null
                }, 2e3) : f.style.display = a
            }
        };
        L && la(L, 0, (q - c) * Tb[3] + Ka[3] + ga[3] - 1);
        (function() {
            if (ca) {
                ac(ca);
                var a = document.createDocumentFragment(),
                    h = ra(La);
                a.appendChild(h);
                for (h = 0; h < q - c; h++) {
                    var b = ra(nd);
                    a.appendChild(b)
                }
                h = ra(T);
                a.appendChild(h);
                ca.appendChild(a)
            }
        })();
        ab && (w = 0, Aa(ab, 3, w), z = parseInt(L.style.height) - 12);
        (function() {
            if (ba) {
                ac(ba);
                var a = document.createDocumentFragment(),
                    h = ra(Ka);
                a.appendChild(h);
                for (h = 0; h < q - c; h++) {
                    var b = ra(Tb);
                    a.appendChild(b)
                }
                h = ra(ga);
                a.appendChild(h);
                ba.appendChild(a)
            }
        })();
        Rc();
        var g = b(""),
            Sb = b("none");
        e.bindDom(p[0], "mouseover", g);
        e.bindDom(p[0], "mouseout", Sb);
        e.bindDom(p[1], "mouseover", g);
        e.bindDom(p[1], "mouseout", Sb);
        e.bindDom(L, "mouseover", g);
        e.bindDom(L, "mouseout", Sb);
        e.bindDom(f, "mouseover", g);
        e.bindDom(f, "mouseout", Sb);
        e.bind(a, "updateHeat", function(a) {
            m = a;
            Rc();
            g();
            Sb()
        });
        e.bind(a, "updateStyle", function(a) {
            switch (a) {
                case Hb.SMALL:
                    L.style.display = "none";
                    break;
                case Hb.LARGE:
                    L.style.display = ""
            }
        });
        e.bind(a, "updateSize", function(a, b) {
            if (a && b) {
                L.style.display = "";
                h.style.visibility = "inherit";
                var c = Ib(a)[1],
                    q = Ib(h);
                L.style.display = b.height < q[3] + (q[1] - c) ? "none" : ""
            }
        });
        e.bind(a, "updateTips", function(a, b, c) {
            a = Ib(a)[0];
            var q = Ib(h);
            r(q[0] - a + q[3] > b.width ? 1 : 0, c)
        });
        h.appendChild(p[0]);
        h.appendChild(L);
        h.appendChild(p[1]);
        Sb()
    }, M = [230, 58, 64, 64],
    aa = [165, 124, 64, 64],
    Dd = [32, 124, 64, 64],
    Ki = [98, 124, 64, 64],
    ha = [230, 124, 64, 64],
    Ce = [164, 190, 64, 64],
    ma = [32, 190, 64, 64],
    De = [97, 190, 64, 64],
    Li = [230, 190, 64, 64],
    sa = function(a, h, b, c) {
        var q = function(h) {
            return function() {
                W(a, b, c[h])
            }
        };
        e.bindDom(h, "mouseover", q(1), this);
        e.bindDom(h, "mouseout", q(0), this);
        e.bindDom(h, "mouseup", q(1), this);
        e.bindDom(h, "mousedown", q(2), this)
    }, Da = function(a, h, b) {
        var c = J("area");
        c.href = "javascript:void(0)";
        a.appendChild(c);
        c.setAttribute("shape", "poly");
        c.setAttribute("coords", h.join(","));
        c.style.cursor = "pointer";
        b && (c.title = b);
        return c
    }, Fa = function(a, h, b) {
        var c = J("div");
        c.style.cssText = "position:absolute;overflow:hidden;z-index:1;opacity:0.01;filter:alpha(opacity=1);cursor:pointer";
        var q = J("img");
        c.appendChild(q);
        q.src = h;
        h = fc();
        var p = null;
        q.setAttribute("usemap", "#" + h);
        la(q, b[0], b[1]);
        la(c, b[0], b[1]);
        qa && 9 > qa ? (q.setAttribute("useMap", "#" + h), p = J('<map name="' + h + '"></map>')) : (p = J("map"), p.setAttribute("name", h));
        c.appendChild(p);
        a.appendChild(c);
        return p
    }, pa = function(a) {
        var h = J();
        h.style.cssText = "position:relative;margin-bottom:0px;";
        var b = J();
        b.style.cssText = "position:absolute;z-index:0;";
        h.appendChild(b);
        la(h, M[2], M[3]);
        la(b, M[2], M[3]);
        W(b, sd, M);
        for (var c = Fa(h, sd, [M[2], M[3]]), q = [
                [Db, Pa.Navigation.up, Ki, De],
                [Va, Pa.Navigation.down, aa, Ce],
                [td, Pa.Navigation.left, Dd, ma],
                [Ca, Pa.Navigation.right, ha, Li]
            ], p = 0; 4 > p; p++) {
            var k = Da(c, q[p][0], q[p][1]);
            sa(b, k, sd, [M, q[p][2], q[p][3]]);
            e.bindDom(k, "click", function(h) {
                return function() {
                    e.trigger(a, "operate", h)
                }
            }(p))
        }
        return h
    };
g(Q, ya);
var Ld = Q.prototype;
Ld.enable_changed = Ld.options_changed = function() {
    this.redraw()
};
Ld.draw = function() {
    this.clear();
    if (this.get("enable")) {
        var a = J(null, null, 0, "margin:5px;cursor:pointer;");
        a.className = "smnoprint";
        var h = this.get("options") || {}, b = this.dataMgr = new A(this.mapTypes, h.mapTypeIds),
            c = b.data;
        this.layoutManager.addElement(a, h.position || h.align || this.defaultPosition, !1, this.index);
        h = new d(a, c);
        b = new x(b.groupInfo);
        b.set("labels", !0);
        h.bindTo("mapTypeId", b, "internalMapTypeId");
        h.bindTo("labels", b);
        b.bindTo("mapTypeId", this);
        e.trigger(a, "resize");
        this.view = h;
        this.element = a;
        this.mc = b
    }
};
Ld.clear = function() {
    this.view && (this.view.unbindAll(), this.view = null);
    this.mc && (this.mc.unbindAll(), this.mc = null);
    this.dataMgr && (this.dataMgr.unbindAll(), this.dataMgr = null);
    this.element && (this.layoutManager.removeElement(this.element), me(this.element), this.element = null)
};
g(x, l);
x.prototype.changed = function(a) {
    if (!this.lock)
        if ("mapTypeId" == a) {
            a = this.get("mapTypeId");
            var h = this.data[a];
            h && h.groupid && (a = h.groupid);
            u(this, "internalMapTypeId", a);
            h && h.key && u(this, h.key, h.value)
        } else {
            var b = this.get("internalMapTypeId"),
                c = this;
            ia(this.data, function(a, h) {
                a.groupid == b && a.key && c.get(a.key) == a.value && (b = h)
            });
            u(this, "mapTypeId", b)
        }
};
g(r, ya);
var Be = r.prototype;
Be.changed = function(a) {
    switch (a) {
        case "visible":
        case "zoom":
            var h = this.get(a);
            void 0 !== h && h !== this[a] && (this.changedKey[a] = !0, this[a] = h, this.redraw())
    }
};
Be.scaleControlOptions_changed = function() {
    var a = this.get("scaleControlOptions") || {}, a = a.position || a.align;
    void 0 !== a && a !== this.position && (this.changedKey.position = !0, this.position = a, this.redraw())
};
Be.draw = function() {
    var a = this.changedKey;
    this.changedKey = {};
    var h = this.visible,
        b = this.position,
        c = this.zoom;
    if (this.element || !0 === h) {
        if (!this.element) {
            var q = this.operateControl,
                p = this.map.getCenter(),
                k = this.map.getZoom(),
                L = J();
            Si(q, L, p, k);
            this.element = L
        }
        if (a.visible || a.position)
            if (this.layoutManager.removeElement(this.element), !0 === h) this.layoutManager.addElement(this.element, b, !1, 0);
            else {
                this.changedKey = a;
                return
            }
        a.zoom && e.trigger(this.operateControl, "updateZoom", this.map.getCenter(), c);
        e.trigger(this.element, "resize")
    }
};
var Jb = e,
    Za = function(a, h, b, c) {
        var q = J();
        Ed(a, q, h, b, c);
        return q
    }, Ja = hc,
    sc = oc;
g(f, ya);
var Na = f.prototype;
Na.changed = function(a) {
    switch (a) {
        case "visible":
        case "range":
        case "zoom":
        case "size":
            var h = this.get(a);
            void 0 !== h && h !== this[a] && (this.changedKey[a] = !0, this[a] = h, this.redraw())
    }
};
Na.zoomControlOptions_changed = function() {
    var a = this.get("zoomControlOptions"),
        h = a ? a.position : void 0,
        b = a ? a.style : void 0,
        a = a ? a.zoomTips : void 0;
    void 0 !== h && h !== this.position && (this.changedKey.position = !0, this.position = h, this.redraw());
    void 0 !== b && b !== this.style && (this.changedKey.style = !0, this.style = b, this.redraw());
    void 0 !== a && (this.changedKey.zoomTips = !0, this.zoomTips = a, this.redraw())
};
Na.draw = function() {
    var a = this.changedKey;
    this.changedKey = {};
    var h = this.visible,
        b = this.position,
        c = this.style;
    if (this.element || !0 === h) {
        a.range && this.element && (this.layoutManager.removeElement(this.element), this.element = null);
        this.element || (this.init(), a = {
            visible: !0,
            position: !0,
            style: !0,
            size: !0
        });
        if (a.visible || a.position)
            if (this.layoutManager.removeElement(this.element), !0 === h) this.layoutManager.addElement(this.element, b, !1, this.index);
            else {
                this.changedKey = a;
                return
            }
        a.zoom && Jb.trigger(this.operateControl, "updateHeat", this.zoom);
        a.style && Jb.trigger(this.operateControl, "updateStyle", c);
        a.size && c === Hb.DEFAULT && Jb.trigger(this.operateControl, "updateSize", this.map.getContainer(), this.get("size"));
        (a.position || a.zoomTips) && Jb.trigger(this.operateControl, "updateTips", this.map.getContainer(), this.get("size"), this.zoomTips);
        Jb.trigger(this.element, "resize")
    }
};
Na.init = function() {
    var a = this.get("range"),
        h = a.min,
        a = a.max,
        b = this.get("zoom");
    this.element = Za(this.operateControl, b, h, a);
    var c = this;
    Jb.addListener(this.element, "positionupdate", function() {
        c.style === Hb.DEFAULT && Jb.trigger(c.operateControl, "updateSize", c.map.getContainer(), c.get("size"))
    })
};
var Ha = e,
    gc = {
        PAN_UP: 0,
        PAN_DOWN: 1,
        PAN_LEFT: 2,
        PAN_RIGHT: 3
    };
g(G, ya);
var Qc = G.prototype;
Qc.panControl_changed = function() {
    var a = this.get("panControl");
    void 0 !== a && a !== this.isVisible && (this.isVisible = a, this.redraw())
};
Qc.panControlOptions_changed = function() {
    var a = this.get("panControlOptions") || {}, a = a.position || a.align;
    void 0 !== a && a !== this.isVisible && (this.position = a, this.redraw())
};
Qc.draw = function() {
    var a = this.isVisible,
        h = this.position;
    if (this.element || !0 === a) {
        if (!this.element) {
            var b = this.operateControl,
                c = J(),
                b = pa(b);
            c.appendChild(b);
            this.element = c
        }
        this.layoutManager.removeElement(this.element);
        !0 === a && this.layoutManager.addElement(this.element, h, !1, this.index);
        Ha.trigger(this.element, "resize")
    }
};
var xa = J,
    Ua = vb,
    Qa = da,
    ta = e,
    Ma = la,
    Sa = Ga;
g(t, ya);
var Ea = t.prototype;
Ea.changed = function(a) {
    this.changeKeys[a] = !0;
    this.redraw()
};
Ea.draw = function() {
    var a = this.changeKeys;
    this.changeKeys = {};
    a.data && this.updateData();
    a.size && this.resize()
};
Ea.updateData = function() {
    var a = Pb.Copyright.prefix.join(" - ");
    Qa(this.span, a);
    this.set("content", a);
    ta.trigger(this.element, "resize")
};
Ea.resize = function() {
    var a = this.element,
        h = this.span,
        b = this.link,
        c = a.offsetWidth,
        q = a.offsetLeft,
        p = this.get("size");
    c && p && (b.style.display = "none", h.style.display = "", h.style.visibility = "hidden", q + a.offsetWidth > p.getWidth() ? (b.style.display = "", h.style.display = "none") : (b.style.display = "none", h.style.display = ""), h.style.visibility = "");
    ta.trigger(a, "resize")
};
var og = 300,
    rc = 180;
g(ub, l);
var Ta = ub.prototype;
Ta.content_changed = function() {
    var a = this.get("content");
    this.content.innerHTML = a || ""
};
Ta.size_changed = Ta.resize = function() {
    var a = this.get("size");
    if (a && this.isShow()) {
        var h = a.getWidth() - 10,
            a = a.getHeight() - 10,
            h = Math.min(og, h),
            a = Math.min(rc, a);
        Ma(this.element, h, a);
        ta.trigger(this.element, "resize")
    }
};
Ta.isShow = function() {
    return this._isShow
};
Ta.show = function() {
    this._isShow = !0;
    this.layoutManager.addElement(this.element, ob.CENTER, !1, 2e6);
    this.resize()
};
Ta.hide = function() {
    this._isShow = !1;
    this.layoutManager.removeElement(this.element)
};
var Mi = Pb,
    $a = J,
    Ia = V,
    eb = W,
    Oi = bb,
    gb = ja,
    hb = ea,
    mb = e,
    rb = la,
    Ni = qa;
g(cb, l);
var ua = cb.prototype;
ua.changed = ua.updateLink = function() {
    var a = this.link,
        h = this.get("center"),
        b = this.get("zoom");
    if (a) {
        var c = {};
        h && (c.center = h.toUrlValue());
        O(b) && (c.l = b);
        h = na(c);
        a.href = h ? "http://map.soso.com/?" + h : "http://map.soso.com/"
    }
};
var db = Qb,
    Xa = ea,
    Ya = e,
    q = ia,
    L = K,
    ba = ob,
    Sb = O,
    Md = Qb;
g(C, l);
var Hd = C.prototype;
Hd.container_changed = function() {
    var a = this.get("container");
    a && (q(this.areas, function(h) {
        L(h, function(h) {
            a.appendChild(h.element)
        })
    }), this.draw())
};
Hd.size_changed = function() {
    this.draw()
};
Hd.addElement = function(a, h, b, c) {
    if (h = this.areas[h]) {
        var q = h.length;
        c = Sb(c) ? c : q;
        for (var p = 0; p < q && c >= h[p].index;) p++;
        var k = this,
            q = Ya.addListener(a, "resize", function() {
                k.draw()
            });
        h.splice(p, 0, {
            element: a,
            border: b,
            index: c,
            listener: q
        });
        "absolute" !== a.style.position && (a.style.position = "absolute");
        a.style.visibility = "hidden";
        if (b = this.get("container")) b.appendChild(a), this.draw()
    }
};
Hd.removeElement = function(a) {
    a.parentNode && a.parentNode.removeChild(a);
    var h = this;
    q(h.areas, function(b) {
        for (var c = 0, q = b.length, p = 0; c < q; c++) b[c] && a === b[c].element && (Ya.removeListener(b[c].listener), b.splice(c--, 1), p++);
        p && (a.style.top = "auto", a.style.bottom = "auto", a.style.left = "auto", a.style.right = "auto");
        h.draw()
    })
};
Hd.draw = function() {
    var a = this.get("size") || new Xa(0, 0),
        h = a.getWidth(),
        a = a.getHeight(),
        b = this.areas,
        c = Array(h),
        q = E(b[1], "left", "top", c),
        p = fa(b[5], "left", "top", c),
        c = Array(h),
        k = E(b[10], "left", "bottom", c),
        L = fa(b[6], "left", "bottom", c),
        c = Array(h),
        ba = E(b[3], "right", "top", c),
        ca = fa(b[7], "right", "top", c),
        c = Array(h),
        f = E(b[12], "right", "bottom", c),
        c = fa(b[9], "right", "bottom", c),
        d = y(b[11], "bottom", h),
        w = y(b[2], "top", h),
        z = Cb(b[4], "left", h, a),
        e = Cb(b[8], "right", h, a);
    Cb(b[13], "center", h, a);
    b = Math.max(z, q.width, p.width, k.width, L.width) || 0;
    e = Math.max(e, ba.width, ca.width, f.width, c.width) || 0;
    q = Math.max(w, q.height, p.height, ba.height, ca.height) || 0;
    k = Math.max(d, k.height, L.height, f.height, c.height) || 0;
    this.set("bounds", new v(Math.min(b, h - e), Math.min(q, a - k), Math.max(b, h - e), Math.max(q, a - k)))
};
var Yi = xd,
    Nd = e,
    Pi = K,
    Qi = O,
    Nd = e;
g(P, ya);
var Ge = P.prototype;
Ge.changed = function(a) {
    this.changedKeys[a] = !0;
    this.redraw()
};
Ge.navigationControl_changed = function() {
    var a = this.get("navigationControl");
    Oa(a) && (this.set("modelPanControl", a), this.set("modelZoomControl", a))
};
Ge.draw = function() {
    var a = this.changedKeys;
    this.changedKeys = {};
    var h = a.disableDefaultUI;
    if (h || a.modelMapTypeControl) {
        var b = this.get("disableDefaultUI"),
            c = this.get("mapTypeControl"),
            q = this.get("modelMapTypeControl"),
            p = !1;
        Oa(q) ? p = q : this.mapTypeDefaultEnable && (p = !b);
        c != p && this.set("mapTypeControl", p)
    }
    if (h || a.modelPanControl) b = this.get("disableDefaultUI"), c = this.get("panControl"), q = this.get("modelPanControl"), p = !1, Oa(q) ? p = q : this.panDefaultEnable && (p = !b), c != p && this.set("panControl", p);
    if (h || a.modelZoomControl) a = this.get("disableDefaultUI"), h = this.get("zoomControl"), b = this.get("modelZoomControl"), c = !1, Oa(b) ? c = b : this.zoomDefaultEnable && (c = !a), h != c && this.set("zoomControl", c)
};
N.$setExports(function(a, h, b, c) {
    function q() {
        var h = a.get("navigationControlOptions");
        L ? L.setOptions(h) : L = new Yi(h);
        h ? L.setMap(a) : (L.setMap(null), L = null)
    }
    var p = new C;
    p.bindTo("container", h, "div");
    p.bindTo("size", b);
    S(p, a.controls);
    h = new P;
    h.bindTo("disableDefaultUI", a);
    h.bindTo("modelPanControl", a, "panControl");
    h.bindTo("modelMapTypeControl", a, "mapTypeControl");
    h.bindTo("modelZoomControl", a, "zoomControl");
    h.bindTo("navigationControl", a);
    var k = new cb(p, ob.BOTTOM_LEFT, 0);
    k.bindTo("center", a);
    k.bindTo("zoom", a);
    (new t(p, ob.BOTTOM_LEFT, 0)).bindTo("size", b);
    k = new G(p, ob.LEFT_TOP, .1, a);
    k.bindTo("panControl", h);
    k.bindTo("panControlOptions", a);
    k = new Q(p, ob.TOP_RIGHT, .2, a.mapTypes);
    k.bindTo("enable", h, "mapTypeControl");
    k.bindTo("options", a, "mapTypeControlOptions");
    k.bindTo("mapTypeId", a);
    k = new f(p, ob.LEFT_TOP, Hb.DEFAULT, .2, a);
    k.bindTo("visible", h, "zoomControl");
    k.bindTo("zoomControlOptions", a);
    k.bindTo("zoom", a);
    k.bindTo("range", c);
    k.bindTo("size", b);
    b = new r(p, ob.LEFT_BOTTOM, le.DEFAULT, 0, a);
    b.bindTo("visible", a, "scaleControl");
    b.bindTo("scaleControlOptions", a);
    b.bindTo("zoom", a);
    var L;
    Nd.addListener(a, "navigationcontroloptions_changed", q);
    q()
})