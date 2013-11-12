'use strict';

function a(b) {
    this.viewModel = b;
    this.eventTracker = this.target = null;
    this.draggable = !1;
    this.arrCommonEvts = [];
    this.arrDragEvts = []
}

function b(a) {
    this.markerEvent = a;
    this.constructed = !1;
    var c = this;
    ub(cb, function(a, b) {
        a && (c[b] = null)
    });
    this.changeKeys = {}
}

function c() {
    this.constructed = !1;
    var a = this;
    I(F, function(b, c) {
        b && (a[c] = null)
    });
    this.changeKeys = {}
}

function d(a) {
    this.viewModel = a;
    this.changeKeys = {};
    this.ready = !1;
    this.markerEvent = new Cb(a);
    this.iconRender = new Ca;
    this.shadowRender = new Ca;
    this.crossRender = new Ca;
    this.targetRender = new y(this.markerEvent)
}

function e() {
    tb || (tb = new A)
}

function n(a, b, c) {
    c ? s(c, function(c) {
        c.anchor || (c.anchor = new m(c.size.getWidth() / 2, c.size.getHeight()));
        a.set(b, c)
    }) : a.set(b, null)
}

function s(a, b) {
    !a || a.size ? b(a) : (S(a) && (a = new Z(a)), a.url && jb(a.url, function(c, d) {
        a.size = c && d ? new P(c, d) : new P(24, 24);
        b(a)
    }))
}

function A() {
    this.icon = new Z(da + "default/imgs/marker.png", new P(22, 34), new m(0, 0), new m(11, 34));
    this.shadow = new Z(da + "default/imgs/marker.png", new P(50, 39), new m(23, 0), new m(18, 34), null, 45);
    this.shape = new lb([7, 0, 13, 0, 17, 1, 22, 7, 22, 8, 22, 14, 21, 16, 20, 18, 18, 19, 15, 22, 13, 25, 12, 26, 12, 28, 11, 31, 11, 33, 10, 33, 10, 29, 9, 28, 9, 26, 8, 25, 0, 15, 0, 7], "poly");
    this.cross = new Z(da + "default/imgs/target.png", new P(16, 16), new m(0, 0), new m(8, 8))
}

function x() {
    this.status = 0;
    this.nextAnimation = this.currentAction = null
}

function C() {
    function a() {
        var c = b.nextAnimation;
        b.currentAction = null;
        b.nextAnimation = null;
        c ? C.call(b) : b.get("animation") && b.set("animation", null)
    }
    var b = this,
        c = b.get("animation");
    2 === b.status ? this.nextAnimation = c : (c = fb[c]) ? (1 === b.status && this.stop(!0), this.start(c, a)) : this.stop(!1)
}

function E(a, b) {
    this.key = a;
    this.list = b
}

function u(a, b) {
    this.target = a;
    this.anim = b;
    this.duration = b.options.duration || 0;
    this.times = b.options.times || 1;
    this.lastTime = !1;
    this.arrActions = [];
    this.arrRunningFx = []
}

function r(a, b) {
    return function(c) {
        a.set(b, c[0])
    }
}

function f(a) {
    ib.call(this, a);
    this.style = new Rb;
    this.animation = new uc;
    this.isDragging = !1;
    this.changeKeys = {};
    this.bindTo("constructed", a)
}
var G = "click dblclick mousedown mouseup mouseenter mouseleave rightclick".split(" ");
g(a, l);
var t = a.prototype;
t.setTarget = function(a) {
    this.eventTracker && (this.eventTracker.stop(), this.eventTracker.clearAllListener());
    a ? (this.target = a, this.eventTracker = new jc(a), this.eventTracker.start()) : this.eventTracker = this.target = null;
    this.initEvents();
    this.initDragEvents()
};
t.setDraggable = function(a) {
    this.draggable = !! a;
    this.initDragEvents()
};
t.initDragEvents = function() {
    var a = this,
        b = this.arrDragEvts;
    this.removeEvents(b);
    var c = a.eventTracker;
    c && this.draggable && (K(["dragstart", "dragend", "dragging"], function(d) {
        b.push(c.addListener(d, a.createEventHandler(d)))
    }), b.push(c.addListener("mousedown", function(a) {
        Ob(a)
    })))
};
t.initEvents = function() {
    var a = this,
        b = this.arrCommonEvts;
    this.removeEvents(b);
    var c = a.eventTracker;
    c && K(G, function(d) {
        b.push(c.addListener(d, a.createEventHandler(d)))
    })
};
t.removeEvents = function(a) {
    for (var b = null; b = a.shift();) b.remove()
};
t.createEventHandler = function(a) {
    "mouseenter" === a ? a = "mouseover" : "mouseleave" === a && (a = "mouseout");
    var b = this.viewModel;
    return function(c, d, f, e) {
        b.doEvent(a, arguments)
    }
};
var ub = ia,
    cb = {
        container: 1,
        position: 1,
        image: 1,
        cursor: 1,
        title: 1,
        shape: 1,
        zIndex: 1,
        height: 1
    }, t = b.prototype;
t.isConstructed = function() {
    return this.constructed
};
t.construct = function() {
    if (!this.isConstructed()) {
        this.constructed = !0;
        var a = this.changeKeys;
        ub(cb, function(b, c) {
            b && (a[c] = !0)
        });
        this.draw()
    }
};
t.destroy = function() {
    this.isConstructed() && (this.constructed = !1, this.clearDom())
};
t.set = function(a, b) {
    this.changeKeys[a] = !0;
    cb[a] && (this[a] = b);
    this.renderTimer || (this.renderTimer = setTimeout(Ga(this.draw, this), 100))
};
t.updateDom = function() {
    var a = this.shape,
        b = document.createElement("div");
    b.style.cssText = "position:absolute;left:0;top:0;width:0;height:0;overflow:hidden;";
    b.className = "smnoprint";
    Dd(b, .01);
    var c = "",
        d = "",
        f = null;
    a && (f = "smimap" + fa++, c = 'usemap="#' + f + '"', d = '<map id="' + f + '" name="' + f + '"><area tabindex="-1" href="javascript:void(0)" /></map>');
    b.innerHTML = ['<img src="" ondragstart="return false;"', c, ' style="position:absolute;left:0px;top:0px;width:0px;height:0px;border:0 none;padding:0px;margin:0px;" />', d].join("");
    a = this.container;
    this.dom ? a.replaceChild(b, this.dom) : a.appendChild(b);
    this.dom = b;
    b = oa("area", b)[0] || b;
    this.markerEvent.setTarget(b)
};
t.clearDom = function() {
    this.dom && (this.markerEvent.setTarget(null), Q(this.dom), this.dom = null)
};
t.draw = function() {
    clearTimeout(this.renderTimer);
    this.renderTimer = null;
    if (this.constructed)
        if (!this.container || !this.position || !this.image) this.clearDom();
        else {
            var a = this,
                b = a.changeKeys;
            a.changeKeys = {};
            if (b.shape || !this.dom) this.updateDom(), K(["cursor", "title", "image", "shape", "zIndex"], function(a) {
                b[a] = !0
            });
            if (b.image || b.height) b.position = !0;
            ub(b, function(b, c) {
                switch (c) {
                    case "container":
                        a.draw_container(a.dom);
                        break;
                    case "position":
                        a.draw_position(a.dom);
                        break;
                    case "image":
                        a.draw_image(a.dom);
                        break;
                    case "shape":
                        a.draw_shape(a.dom);
                        break;
                    case "cursor":
                        a.draw_cursor(a.dom);
                        break;
                    case "title":
                        a.draw_title(a.dom);
                        break;
                    case "zIndex":
                        a.draw_zIndex(a.dom)
                }
            })
        }
};
t.draw_container = function(a) {
    var b = this.container;
    b ? a.parentNode !== b && b.appendChild(a) : a.parentNode && a.parentNode.removeChild(a)
};
t.draw_position = function(a) {
    var b = this.position,
        c;
    c = this.image;
    var d = 0,
        f = 0;
    c.anchor ? (d = c.anchor.x, f = c.anchor.y) : (d = c.size.getWidth() / 2, f = c.size.getHeight());
    c = new H(d, f);
    Aa(a, b.x - c.x, b.y - c.y - (this.height || 0));
    this.renderSize(a)
};
t.draw_image = function(a) {
    this.renderSize(a);
    if (a = oa("img", a, !0)[0]) {
        var b = this.image,
            c = b.size,
            d = c.getWidth(),
            c = c.getHeight();
        a.src = b.url;
        la(a, d, c)
    }
};
t.renderSize = function(a) {
    var b = this.height,
        c = this.image.size,
        d = c.getWidth(),
        c = c.getHeight();
    0 > b && (c = Math.max(c + b, 0));
    la(a, d, c)
};
t.draw_shape = function(a) {
    var b = this.shape;
    if (a = oa("area", a)[0]) {
        var c = b.type,
            b = b.coords.join(",");
        a.setAttribute("shape", c);
        a.setAttribute("coords", b)
    }
};
t.draw_cursor = function(a) {
    var b = this.cursor || "pointer";
    (oa("area", a)[0] || a).style.cursor = b
};
t.draw_title = function(a) {
    var b = this.title;
    a = oa("area", a)[0] || a;
    null === b || bc(b) ? a.removeAttribute("title") : a.title = b
};
t.draw_zIndex = function(a) {
    var b = this.zIndex;
    a.style.zIndex = O(b) ? b : 0
};
var fa = 0,
    I = ia,
    F = {
        container: 1,
        position: 1,
        image: 1,
        decoration: 1,
        zIndex: 1,
        height: 1
    }, t = c.prototype;
t.createDom = function() {
    var a = document.createElement("div");
    a.style.cssText = "position:absolute;left:0;top:0;width:0;height:0;border:0 none;overflow:hidden;";
    return a
};
t.clearDom = function() {
    this.dom && (Q(this.dom), this.dom = null)
};
t.isConstructed = function() {
    return this.constructed
};
t.construct = function() {
    this.isConstructed() || (this.constructed = !0, this.changeAll(), this.draw())
};
t.changeAll = function() {
    var a = this.changeKeys;
    I(F, function(b, c) {
        b && (a[c] = !0)
    })
};
t.destroy = function() {
    this.isConstructed() && (this.constructed = !1, this.clearDom())
};
t.set = function(a, b) {
    this.changeKeys[a] = !0;
    F[a] && (this[a] = b);
    this.renderTimer || (this.renderTimer = setTimeout(Ga(this.draw, this), 100))
};
t.draw = function() {
    clearTimeout(this.renderTimer);
    this.renderTimer = null;
    if (this.constructed)
        if (!this.container || !this.position || !this.image) this.clearDom();
        else {
            this.dom || (this.dom = this.createDom(), this.changeAll());
            var a = this.changeKeys;
            this.changeKeys = {};
            if (a.image || a.height) a.position = !0;
            var b = this,
                c = this.dom;
            a.image && (ac(c, !0), a.decoration = !0, delete a.height);
            I(a, function(a, k) {
                switch (k) {
                    case "container":
                        b.drawContainer(c);
                        break;
                    case "position":
                        b.drawPosition(c);
                        break;
                    case "height":
                    case "image":
                        b.drawImage(c);
                        break;
                    case "decoration":
                        b.drawDecoration(c);
                        break;
                    case "zIndex":
                        b.drawZIndex(c)
                }
            })
        }
};
t.drawContainer = function(a) {
    var b = this.container;
    b ? a.parentNode !== b && b.appendChild(a) : a.parentNode && a.parentNode.removeChild(a)
};
t.drawPosition = function(a) {
    var b = this.position,
        c = this.image,
        d, f = d = 0;
    c.anchor ? (d = c.anchor.x, f = c.anchor.y) : (d = c.size.getWidth() / 2, f = c.size.getHeight());
    d = new H(d, f);
    var f = c.shadowAngle || 0,
        e = this.height || 0,
        m = f % 360,
        c = m ? parseInt(Math.cos(aa(f)) * e) : 0,
        f = parseInt((m ? Math.sin(aa(f)) : 1) * e);
    Aa(a, b.x - d.x + c, b.y - d.y - f)
};
t.drawImage = function(a) {
    var b = this.image;
    this.renderSize(a);
    W(a, b.url, b.origin, b.scaledSize)
};
t.renderSize = function(a) {
    var b = this.image,
        c = b.anchor,
        d = this.height,
        f = parseInt(Math.cos(aa(b.shadowAngle || 0)) * d),
        e = b.size,
        b = e.getWidth(),
        e = e.getHeight();
    0 > d && (e = Math.max(c.y + f, 0));
    la(a, b, e)
};
t.drawZIndex = function(a) {
    var b = this.zIndex;
    a.style.zIndex = O(b) ? b : 0
};
t.drawDecoration = function(a) {
    var b = this.decoration,
        c = this.decorationDom;
    if (b) {
        var d = b.content;
        c ? ac(c, !0) : (c = this.decorationDom = document.createElement("div"), c.style.cssText = "position:absolute;left:0;top:0;");
        mc(d) ? c.appendChild(d) : c.innerHTML = d;
        a.appendChild(c);
        var f = b.align,
            e = b.offset;
        if (c) {
            var b = c.style,
                d = e.getWidth(),
                e = e.getHeight(),
                m = f % 3,
                f = Math.floor(f / 3),
                g = Math.floor(c.offsetWidth / 2),
                c = Math.floor(c.offsetHeight / 2);
            1 === m ? (b.left = a ? a.offsetWidth / 2 + "px" : "50%", b.marginLeft = d - g + "px") : b.marginLeft = 0;
            1 === f ? (b.top = a ? Math.round(a.offsetHeight / 2) + "px" : "50%", b.marginTop = e - c + "px") : b.marginTop = 0;
            2 === m && (b.right = d + "px", b.left = "");
            0 === m && (b.left = d + "px", b.right = "");
            0 === f && (b.top = e + "px", b.bottom = "");
            2 === f && (b.bottom = e + "px", b.top = "")
        }
    } else c && (ac(c, !0), Q(c))
};
var Ca = c,
    y = b,
    Cb = a;
g(d, ya);
t = d.prototype;
t.construct = function() {
    this.ready = !0;
    this.iconRender.construct();
    this.shadowRender.construct();
    this.targetRender.construct();
    var a = this.viewModel;
    this.bindTo("icon", a);
    this.bindTo("shadow", a);
    this.bindTo("shape", a);
    this.bindTo("cross", a);
    this.bindTo("title", a);
    this.bindTo("cursor", a);
    this.bindTo("draggable", a);
    this.bindTo("clickable", a);
    this.bindTo("visible", a);
    this.bindTo("flat", a);
    this.bindTo("zIndex", a);
    this.bindTo("animation", a);
    this.bindTo("raiseOnDrag", a);
    this.bindTo("decoration", a);
    this.bindTo("overlayRedraw", a);
    this.bindTo("position", a);
    this.bindTo("panes", a);
    this.bindTo("projection", a);
    this.bindTo("map", a);
    this.bindTo("height", a)
};
t.destroy = function() {
    this.ready = !1;
    this.iconRender.destroy();
    this.shadowRender.destroy();
    this.targetRender.destroy();
    this.crossRender.destroy();
    this.unbind("icon");
    this.unbind("shadow");
    this.unbind("shape");
    this.unbind("cross");
    this.unbind("overlayRedraw");
    this.unbind("position");
    this.unbind("panes");
    this.unbind("projection");
    this.unbind("map");
    this.unbind("height")
};
t.getPixelPosition = function() {
    var a = this.get("projection"),
        b = this.get("position"),
        c = null;
    a && b && (c = a.fromLatLngToDivPixel(b), c.x = Math.round(c.x), c.y = Math.round(c.y));
    return c
};
t.changed = function(a) {
    this.changeKeys[a] = !0;
    this.ready && this.redraw("overlayRedraw" === a || "projection" === a)
};
t.flat_changed = function() {
    this.get("flat") ? this.shadowRender.destroy() : this.ready && this.shadowRender.construct()
};
t.draw = function() {
    if (this.ready) {
        var a = this,
            b = this.changeKeys;
        this.changeKeys = {};
        if (b.overlayRedraw || b.projection) b.position = !0;
        var c = {};
        ia(b, function(b, d) {
            c[d] = a.get(d)
        });
        if (b.projection || b.position) c.pixelPosition = this.getPixelPosition();
        this.drawIcon(c);
        this.drawShadow(c);
        this.drawCross(c);
        this.drawTarget(c);
        this.iconRender.draw();
        this.shadowRender.draw();
        this.crossRender.draw();
        this.targetRender.draw()
    }
};
t.drawIcon = function(a) {
    var b = this.iconRender;
    ia(a, function(a, c) {
        switch (c) {
            case "panes":
                b.set("container", a ? a.overlayImage : null);
                break;
            case "icon":
                b.set("image", a);
                break;
            case "pixelPosition":
                b.set("position", a);
                break;
            case "decoration":
                b.set("decoration", a);
                break;
            case "height":
            case "zIndex":
                b.set(c, a)
        }
    });
    return b
};
t.drawShadow = function(a) {
    var b = this.shadowRender;
    ia(a, function(a, c) {
        switch (c) {
            case "panes":
                b.set("container", a ? a.overlayShadow : null);
                break;
            case "shadow":
                b.set("image", a);
                break;
            case "pixelPosition":
                b.set("position", a);
                break;
            case "height":
            case "zIndex":
                b.set(c, a)
        }
    });
    return b
};
t.drawTarget = function(a) {
    var b = this.targetRender;
    ia(a, function(a, c) {
        switch (c) {
            case "panes":
                b.set("container", a ? a.overlayMouseTarget : null);
                break;
            case "icon":
                b.set("image", a);
                break;
            case "pixelPosition":
                b.set("position", a);
                break;
            case "height":
                b.set("height", a);
                break;
            case "cursor":
            case "shape":
            case "title":
            case "zIndex":
                b.set(c, a)
        }
    });
    return b
};
t.drawCross = function(a) {
    var b = this.get("height"),
        c = this.crossRender;
    0 < b ? c.isConstructed() || c.construct() : c.destroy();
    ia(a, function(a, b) {
        switch (b) {
            case "panes":
                c.set("container", a ? a.overlayShadow : null);
                break;
            case "cross":
                c.set("image", a);
                break;
            case "pixelPosition":
                c.set("position", a)
        }
    });
    return c
};
t.draggable_changed = function() {
    this.markerEvent.setDraggable(this.get("draggable"));
    this.changeDisableTarget()
};
t.clickable_changed = function() {
    this.changeDisableTarget()
};
t.changeDisableTarget = function() {
    var a = this.get("draggable"),
        b = this.get("clickable"),
        c = this.targetRender;
    !a && !b ? c.destroy() : this.ready && c.construct()
};
var Z = dc,
    lb = ue,
    P = ea,
    S = R,
    jb = ja,
    da = bb,
    m = H,
    tb = null;
g(e, ya);
t = e.prototype;
t.model_changed = function() {
    var a = this.get("model");
    a ? (this.bindTo("modelIcon", a, "icon"), this.bindTo("modelShadow", a, "shadow"), this.bindTo("modelShape", a, "shape"), this.bindTo("modelCross", a, "cross"), this.bindTo("useDefaults", a)) : (this.unbind("modelIcon"), this.unbind("modelShadow"), this.unbind("modelShape"), this.unbind("useDefaults"))
};
t.changed = function(a) {
    ("modelIcon" === a || "modelShadow" === a || "modelShape" === a || "modelCross" === a || "useDefaults" === a) && this.redraw()
};
t.draw = function() {
    var a = this.get("modelIcon"),
        b = this.get("modelShadow"),
        c = this.get("modelShape"),
        d = this.get("modelCross"),
        f = this.get("useDefaults");
    !a && f && (a = tb.icon, b = tb.shadow, c = tb.shape);
    d || (d = tb.cross);
    n(this, "icon", a);
    n(this, "shadow", b);
    this.get("shape") !== c && this.set("shape", c);
    this.get("cross") !== d && this.set("cross", d)
};
var t = g,
    Kb = K,
    Bb = function(a, b, c, d) {
        return c * (a /= d) * a + b
    }, od = function(a, b, c, d) {
        return (a /= d) < 1 / 2.75 ? 7.5625 * c * a * a + b : a < 2 / 2.75 ? c * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + b : a < 2.5 / 2.75 ? c * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + b
    }, fb = {};
fb[1] = {
    options: {
        duration: 700,
        times: "infinite",
        disableCross: !0
    },
    actions: [new E("height", [{
        time: 0,
        value: 0,
        transition: Za
    }, {
        time: .5,
        value: 20,
        transition: Bb
    }, {
        time: 1,
        value: 0,
        transition: Za
    }])]
};
fb[2] = {
    options: {
        duration: 500,
        times: 1,
        disableCross: !0
    },
    actions: [new E("height", [{
        time: 0,
        value: 500,
        transition: Bb
    }, {
        time: .5,
        value: 0,
        transition: Za
    }, {
        time: .75,
        value: 20,
        transition: Bb
    }, {
        time: 1,
        value: 0,
        transition: Za
    }])]
};
fb[3] = {
    options: {
        duration: 200,
        times: 1
    },
    actions: [new E("height", [{
        time: 0,
        value: 0,
        transition: Bb
    }, {
        time: 1,
        value: 20,
        transition: Za
    }])]
};
fb[4] = {
    options: {
        duration: 500,
        times: 1
    },
    actions: [new E("height", [{
        time: 0,
        value: 20,
        transition: od
    }, {
        time: 1,
        value: 0,
        transition: od
    }])]
};
t(x, ya);
t = x.prototype;
t.animation_changed = C;
t.stop = function(a) {
    var b = this.currentAction;
    b && (a ? (this.status = 0, b.stop()) : (this.status = 2, b.lastTime = !0))
};
t.start = function(a, b) {
    var c = this,
        d = c.currentAction = new u(c, a),
        f = this.get("disableCross");
    c.set("disableCross", !! a.options.disableCross);
    d.onEnd = function() {
        c.status = 0;
        c.set("disableCross", f);
        b()
    };
    c.status = 1;
    d.start()
};
u.prototype.initActionList = function() {
    var a = this,
        b = [];
    Kb(this.anim.actions, function(c) {
        var d = c.list,
            f = [];
        Kb(d, function(b, e) {
            var m = d[e + 1];
            if (!m) return !1;
            var g = new ha;
            g.transition = b.transition;
            var P = b.time,
                t = m.time;
            0 === e && 0 < P && (g.delay = P * a.duration);
            g.duration = (t - P) * a.duration;
            g.begins = [b.value];
            g.ends = [m.value];
            g.onUpdate = r(a.target, c.key);
            f.push(g)
        });
        b.push(f)
    });
    this.arrActions = b
};
u.prototype.run = function() {
    function a() {
        m--;
        if (!m)
            if (!c.lastTime && ("infinite" === f || e < f)) b();
            else c.onEnd()
    }

    function b() {
        m = d.length;
        e++;
        Kb(d, function(b) {
            c.runOneAction(b, a)
        })
    }
    var c = this,
        d = c.arrActions,
        f = c.times,
        e = 0,
        m = 0;
    c.onStart();
    b()
};
u.prototype.runOneAction = function(a, b) {
    function c(f) {
        var e = a[f];
        e ? d.runOneFx(e, function() {
            c(f + 1)
        }) : b()
    }
    var d = this;
    c(0)
};
u.prototype.runOneFx = function(a, b) {
    var c = this;
    a.onStart = function() {
        c.arrRunningFx.push(a)
    };
    a.onEnd = function() {
        var d = ne(c.arrRunningFx, a);
        0 <= d && c.arrRunningFx.splice(d, 1);
        b()
    };
    a.start()
};
u.prototype.start = function() {
    this.stop();
    this.initActionList();
    this.lastTime = !1;
    this.run()
};
u.prototype.stop = function() {
    for (var a = this.arrRunningFx, b = null; b = a.shift();) b.onEnd = re, b.stop()
};
u.prototype.onStart = function() {};
u.prototype.onEnd = function() {};
var ib = ya,
    uc = x,
    Rb = e;
g(f, ib);
t = f.prototype;
t.constructed_changed = function() {
    this.get("constructed") ? this.construct() : this.destroy()
};
t.construct = function() {
    var a = this.getModel();
    this.style.set("model", a);
    this.bindTo("title", a);
    this.bindTo("cursor", a);
    this.bindTo("draggable", a);
    this.bindTo("clickable", a);
    this.bindTo("visible", a);
    this.bindTo("flat", a);
    this.bindTo("zIndex", a);
    this.bindTo("animation", a);
    this.bindTo("raiseOnDrag", a);
    this.bindTo("decoration", a);
    this.bindTo("overlayRedraw", a);
    this.bindTo("drawPixelBounds", a);
    this.bindTo("position", a);
    this.bindTo("panes", a);
    this.bindTo("projection", a);
    this.bindTo("map", a);
    this.bindTo("height", a);
    a = this.style;
    this.bindTo("icon", a);
    this.bindTo("shadow", a);
    this.bindTo("shape", a);
    this.bindTo("cross", a);
    a = this.animation;
    a.bindTo("height", this);
    a.bindTo("animation", this);
    a.bindTo("disableCross", this)
};
t.destroy = function() {
    this.style.set("model", null);
    this.unbind("title");
    this.unbind("cursor");
    this.unbind("draggable");
    this.unbind("clickable");
    this.unbind("visible");
    this.unbind("flat");
    this.unbind("zIndex");
    this.unbind("animation");
    this.unbind("raiseOnDrag");
    this.unbind("decoration");
    this.unbind("overlayRedraw");
    this.unbind("drawPixelBounds");
    this.unbind("position");
    this.unbind("panes");
    this.unbind("projection");
    this.unbind("map");
    this.unbind("height");
    this.set("position", null);
    this.set("panes", null);
    this.set("projection", null);
    this.set("map", null);
    this.set("height", null);
    this.unbind("icon");
    this.unbind("shadow");
    this.unbind("shape");
    this.unbind("cross");
    this.set("icon", null);
    this.set("shadow", null);
    this.set("shape", null);
    this.set("cross", null);
    this.unbind("height");
    this.unbind("animation");
    this.unbind("disableCross");
    this.set("height", null)
};
t.changed = function(a) {
    this.changeKeys[a] = !0;
    this.get("constructed") && this.redraw()
};
t.icon_changed = function() {
    var a = this.get("icon");
    this.getModel().set("anchorBounds", a ? new v(-a.anchor.getX(), -a.anchor.getY(), a.size.getWidth() - a.anchor.getX(), a.size.getHeight() - a.anchor.getY()) : null);
    this.redraw()
};
t.draw = function() {
    this.get("map");
    var a = this.get("position"),
        b = this.get("icon"),
        c = this.get("visible");
    this.get("constructed") && a && b && c && (this.isInsideDrawPixelBounds(a) || this.isDragging) ? this.view || (this.view = new d(this), this.view.construct()) : this.view && (this.view.destroy(), this.view = null)
};
t.isInsideDrawPixelBounds = function() {
    var a = !0,
        b = this.get("position"),
        c = this.get("drawPixelBounds"),
        d = this.get("projection");
    c && (a = d.fromLatLngToDivPixel(b), a = c.containsPoint(a));
    return a
};
t.doEvent = function(a, b) {
    switch (a) {
        case "dragstart":
            this.doDragStart.apply(this, b);
            break;
        case "dragend":
            this.doDragEnd.apply(this, b);
            break;
        case "dragging":
            this.doDragging.apply(this, b);
            break;
        default:
            this.triggerMouseEvent(a)
    }
};
t.doDragStart = function(a, b) {
    var c = this.get("map").get("mapCanvasProjection"),
        d = this.get("position"),
        d = c.fromLatLngToContainerPixel(d),
        c = this.getMouseContainerPixel(a),
        d = c.minus(d);
    this.dragPixel = c.minus(d);
    this.isDragging = !0;
    this.set("animation", Ae.UP);
    this.triggerMouseEvent("dragstart")
};
t.doDragEnd = function() {
    delete this.dragPixel;
    this.isDragging = !1;
    this.set("animation", Ae.DOWN);
    this.triggerMouseEvent("dragend")
};
t.doDragging = function(a, b, c) {
    a = this.get("map").get("mapCanvasProjection");
    this.dragPixel = this.dragPixel.plus(c);
    c = a.fromContainerPixelToLatLng(this.dragPixel);
    this.set("position", c);
    this.triggerMouseEvent("dragging")
};
t.triggerMouseEvent = function(a, b) {
    var c = this.get("position");
    this.triggerCustomEvent(a, c, b)
};
N.$setExports(f)