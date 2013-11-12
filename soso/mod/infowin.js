'use strict';

function a(b) {
    n(this, s(b, ["min_width", 64, "window", x(["padding", [16, 10], "body", x(["image", A + "default/imgs/infowin.png", "origin", [0, 0], "size", [610, 440], "reserved_corner_width", 4]), "pin", x(["image", A + "default/imgs/infowin_pin.png", "origin", [0, 0], "size", [51, 44], "anchor", [0, 44], "height", 43, "lower_xs", [-3, 3], "upper_xs", [23, 53]]), "junc", x([]), "close", x(["image", A + "default/imgs/infowindow_close.png", "origin", [0, 0], "size", [13, 13], "anchor", [1, 0], "offset", [-17, 5]])]), "shadow", x(["tan_a", 1, "blur_radius", 8, "body", x(["image", A + "default/imgs/infowin_shadow.png", "origin", [-3, -3], "size", [936, 327], "reserved_corner_width", 4]), "pin", x(["image", A + "default/imgs/infowin_shadow_pin.png", "origin", [0, 0], "size", [87, 37], "anchor", [4, 34], "height", 29]), "junc", x([])])]))
}

function b(a) {
    C.call(this, a);
    this.bindTo("map", a);
    this.bindTo("panes", a);
    this.bindTo("projection", a);
    this.bindTo("minWidth", a);
    this.bindTo("maxWidth", a);
    this.bindTo("minHeight", a);
    this.bindTo("maxHeight", a);
    this.bindTo("zIndex", a);
    this.bindTo("noScroll", a);
    this.bindTo("disableAutoPan", a);
    this.bindTo("mutex", a);
    this.bindTo("content", a);
    this.bindTo("visible", a);
    this.bindTo("modelPosition", a, "position");
    this.bindTo("overlayRedraw", a, null, !0);
    this.bindTo("autoPan", a, null, !0);
    var c = a.get("skin");
    this._skin = c ? new E(c) : E.DEFAULT;
    this.bindTo("constructed", a)
}

function c(a, b, d, e) {
    b = a.ownerDocument.createElement(b);
    d && (b.style.cssText = d);
    e || a.appendChild(b);
    return b
}

function d(a, b, c, e) {
    I(a, b, c && new u(c[0], c[1]), e && new r(e[0], e[1]))
}
var n = Sa,
    s = Gb,
    x = Pf,
    A = bb;
a.DEFAULT = new a;
var C = ya,
    E = a,
    I = W,
    u = H,
    r = ea;
g(b, C);
b.prototype.constructed_changed = function() {
    this.get("constructed") ? this.get("viewConstructed") || this.construct() : this.get("viewConstructed") && this.destroy()
};
b.prototype.content_changed = function() {
    this.set("content_dirty", !0);
    this.redraw()
};
b.prototype.visible_changed = function() {
    this.set("visible_dirty", !0);
    this.redraw()
};
b.prototype.modelPosition_changed = function() {
    this.unbind("anchorMap");
    this.unbind("anchorHeight");
    this.unbind("anchorBounds");
    this.unbind("position");
    var a = this.get("modelPosition"),
        b = a instanceof l;
    b ? (this.bindTo("anchorMap", a, "map"), this.bindTo("anchorHeight", a, "height"), this.bindTo("anchorBounds", a, "anchorBounds"), this.bindTo("position", a)) : this.set("position", a);
    this.set("useAnchor", b)
};
b.prototype.computeAnchorOffset = function() {
    var a = 0,
        b = 0;
    if (this.get("useAnchor") && this.get("anchorMap") === this.get("map")) {
        var b = -((this.get("anchorHeight") || 0) + 2),
            c = this.get("anchorBounds");
        c && (a = (c.minX + c.maxX) / 2, b += c.minY)
    }
    return new u(a, b)
};
b.prototype.computeShadowOffset = function(a) {
    var b = -a.y,
        c = Math.atan(this._skin.shadow.tan_a),
        d = Math.cos(c) * b,
        b = Math.sin(c) * b;
    return new u(a.x + d, -b)
};
b.prototype.anchorMap_changed = b.prototype.anchorHeight_changed = b.prototype.anchorBounds_changed = b.prototype.position_changed = function() {
    this.set("pixelPosition_dirty", !0);
    this.redraw()
};
b.prototype.overlayRedraw_changed = function() {
    this.set("pixelPosition_dirty", !0);
    this.draw()
};
b.prototype.autoPan_changed = function() {
    this.set("autoPan_dirty", !0);
    this.redraw()
};
b.prototype.resize_changed = function() {
    this.set("size_dirty", !0);
    this.draw()
};
b.prototype.zIndex_changed = function() {
    this.set("zIndex_dirty", !0);
    this.redraw()
};
b.prototype.construct = function() {
    var a = {}, b = [];
    this._doms = a;
    this._domListeners = b;
    var g = this.get("panes").floatPane;
    a.windowElm = c(g, "div", "position:absolute;display:none;");
    a.frag0Elm = c(a.windowElm, "div", "position:absolute;overflow:hidden;");
    a.frag1Elm = c(a.windowElm, "div", "position:absolute;overflow:hidden;");
    a.frag2Elm = c(a.windowElm, "div", "position:absolute;overflow:hidden;");
    a.frag3Elm = c(a.windowElm, "div", "position:absolute;overflow:hidden;");
    a.juncElm = c(a.windowElm, "div", "position:absolute;overflow:hidden;");
    this.construct_window_pin();
    a.contentWrapperElm = c(a.windowElm, "div", "position:absolute;");
    a.contentElm = c(a.contentWrapperElm, "div", "margin:-1px;padding:1px;");
    a.closeElm = c(a.windowElm, "div", "position:absolute;overflow:hidden;cursor:pointer;");
    g = this._skin.window.close;
    d(a.closeElm, g.image, g.origin, g.size);
    la(a.closeElm, g.size[0], g.size[1]);
    g = this.get("panes").floatShadow;
    a.shadowElm = c(g, "div", "position:absolute;display:none;");
    a.shadowFrag0Elm = c(a.shadowElm, "div", "position:absolute;overflow:hidden;");
    a.shadowFrag1Elm = c(a.shadowElm, "div", "position:absolute;overflow:hidden;");
    a.shadowFrag2Elm = c(a.shadowElm, "div", "position:absolute;overflow:hidden;");
    a.shadowFrag3Elm = c(a.shadowElm, "div", "position:absolute;overflow:hidden;");
    this.construct_shadow_pin();
    b.push(e.bindDom(a.closeElm, "click", this._handleCloseClick, this));
    b.push(e.bindDom(a.windowElm, "mousedown", this._handleUnselectable, this));
    b.push(e.bindDom(a.windowElm, "dragstart", this._handleUnselectable, this));
    this.set("viewConstructed", !0);
    this.set("visible_dirty", !0);
    this.set("zIndex_dirty", !0);
    this.set("content_dirty", !0);
    this.getModel()._pendingAutoPan && this.set("autoPan_dirty", !0);
    this.redraw()
};
b.prototype.construct_window_pin = function() {
    for (var a = this._doms.windowElm, b = this._skin.window.pin, e = b.image, g = b.anchor, r = b.origin, u = b.height, l = b.lower_xs, v = b.upper_xs, b = (v[0] - l[0]) / u, v = (v[1] - l[1]) / u, n = 0, y = 0, s = 0; n < u;) {
        var n = n + 6,
            x = y,
            A = s,
            y = n * b,
            s = n * v,
            x = l[0] + Math.floor(Math.min(x, y)),
            A = l[1] + Math.ceil(Math.max(A, s)),
            A = c(a, "div", ["position:absolute;overflow:hidden;left:", x, "px;top:", -n, "px;width:", A - x, "px;height:6px;"].join(""));
        d(A, e, [r[0] + g[0] + x, r[1] + g[1] - n])
    }
};
b.prototype.construct_shadow_pin = function() {
    var a = this._doms,
        b = this._skin.shadow.pin,
        e = b.origin,
        g = b.size,
        r = b.anchor;
    a.shadowPinElm = c(a.shadowElm, "div", ["position:absolute;overflow:hidden;left:", -r[0], "px;top:", -r[1], "px;width:", g[0], "px;height:", g[1], "px;"].join(""));
    d(a.shadowPinElm, b.image, e)
};
b.prototype._handleCloseClick = function() {
    this.getModel().close();
    e.trigger(this.getModel(), "closeclick")
};
b.prototype._handleUnselectable = function(a) {
    a = a || window.event;
    kb(this._doms.contentWrapperElm, a.target || a.srcElement) || Ob(a)
};
b.prototype.destroy = function() {
    for (; this._domListeners.length;) e.removeListener(this._domListeners.pop());
    this._domListeners = null;
    Q(this._doms.windowElm);
    Q(this._doms.shadowElm);
    this._doms = null;
    this.set("viewConstructed", !1)
};
b.prototype.draw = function() {
    this.get("viewConstructed") && (this.get("visible_dirty") && (this.set("visible_dirty", !1), this.draw_visible()), this.get("position") && this.get("visible") && (this.get("zIndex_dirty") && (this.set("zIndex_dirty", !1), this.draw_zIndex()), this.get("content_dirty") && (this.set("content_dirty", !1), this.draw_content()), this.get("size_dirty") && (this.set("size_dirty", !1), this.draw_size()), this.get("pixelPosition_dirty") && (this.set("pixelPosition_dirty", !1), this.draw_pixelPosition()), this.get("autoPan_dirty") && (this.set("autoPan_dirty", !1), this.draw_autoPan())))
};
b.prototype.draw_visible = function() {
    var a = this.get("position") && this.get("visible");
    this._doms.windowElm.style.display = a ? "" : "none";
    this._doms.shadowElm.style.display = a ? "" : "none"
};
b.prototype.draw_zIndex = function() {
    var a = this.get("zIndex") | 0;
    this._doms.windowElm.style.zIndex = a;
    this._doms.shadowElm.style.zIndex = a
};
b.prototype.draw_content = function() {
    var a = this.get("content") || "";
    this._hasContent = !! a;
    "string" === typeof a ? this._doms.contentElm.innerHTML = a : (this._doms.contentElm.innerHTML = "", this._doms.contentElm.appendChild(a));
    this._hasContent && e.trigger(this.getModel(), "domready");
    this.set("size_dirty", !0)
};
b.prototype.computeClientSizeConstraint = function() {
    var a = this.get("map"),
        b = a.get("viewWidth") | 0,
        a = a.get("viewHeight") | 0,
        c = b - 2 * this._autoPanMargin,
        d = a - 2 * this._autoPanMargin,
        b = this.get("minWidth") | 0,
        a = this.get("minHeight") | 0,
        c = Math.max(Math.min(this.get("maxWidth") | 0, c), b),
        d = Math.max(Math.min(this.get("maxHeight") | 0, d), a),
        e = this._skin.window.padding;
    return new v(Math.max(0, b - 2 * e[0]), Math.max(0, a - 2 * e[0]), Math.max(0, c - 2 * e[0]), Math.max(0, d - 2 * e[1]))
};
b.prototype.draw_size = function() {
    this.draw_contentSize();
    this.draw_windowSize();
    this.draw_shadowSize()
};
b.prototype.draw_contentSize = function() {
    var a = Math.atan(this._skin.shadow.tan_a),
        b = this._doms.contentWrapperElm,
        c = this._doms.contentElm,
        d = this._skin.window.padding,
        e = this.get("noScroll"),
        g = this.computeClientSizeConstraint(),
        c = c.cloneNode(!0),
        r = c.ownerDocument,
        u = r.createElement("div");
    u.style.cssText = ["position:relative;width:", g.maxX, "px;height:", g.maxY].join("");
    r = r.createElement("table");
    r.border = 0;
    r.cellSpacing = 0;
    r.cellPadding = 0;
    var l = r.insertRow(-1).insertCell(-1);
    u.appendChild(r);
    this._doms.contentWrapperElm.appendChild(u);
    l.appendChild(c);
    var y = c = !1,
        n = r.offsetWidth,
        v = oc(n, g.minX, g.maxX);
    v !== n && (l.style.width = v, n > v && (e || (l.style.overflowX = "scroll"), c = !0));
    n = r.offsetHeight;
    a = oc(n, g.minY, Math.min(g.maxY, 2 * (v / Math.cos(a))));
    a !== n && (l.style.height = a, n > a && (e || (l.style.overflowY = "scroll"), y = !0), n = r.offsetWidth, v = Math.min(n, g.maxX), n > v && (c = !0));
    Q(u);
    b.style.width = v + "px";
    b.style.height = a + "px";
    b.style.overflowX = !e && c ? "scroll" : "hidden";
    b.style.overflowY = !e && y ? "scroll" : "hidden";
    b.style.zoom = 1;
    this._boxWidth = v + 2 * d[0];
    this._boxHeight = a + 2 * d[1]
};
b.prototype.draw_windowSize = function() {
    var a = this._skin.window,
        b = a.pin,
        c = b.upper_xs,
        e = (c[0] + c[1]) / 2,
        g = b.lower_xs,
        r = (g[0] + g[1]) / 2,
        g = a.padding,
        u = b.height,
        a = a.body,
        b = a.origin,
        l = a.size[0],
        n = a.size[1],
        y = this._boxWidth / 2,
        v = this._boxHeight / 2,
        c = a.reserved_corner_width + (c[1] - c[0]) / 2,
        c = oc(.618 * this._boxWidth | 0, c, this._boxWidth - c),
        e = e - r - c,
        r = -(this._boxHeight + u),
        u = e + this._boxWidth,
        c = r + this._boxHeight,
        s = Math.floor(y),
        x = Math.floor(v),
        y = Math.ceil(y),
        v = Math.ceil(v);
    d(this._doms.frag0Elm, a.image, b);
    la(this._doms.frag0Elm, s, x);
    Aa(this._doms.frag0Elm, e, r);
    d(this._doms.frag1Elm, a.image, [b[0] + l - y, b[1]]);
    la(this._doms.frag1Elm, y, x);
    Aa(this._doms.frag1Elm, u - y, r);
    d(this._doms.frag2Elm, a.image, [b[0], b[1] + n - v]);
    la(this._doms.frag2Elm, s, v);
    Aa(this._doms.frag2Elm, e, c - v);
    d(this._doms.frag3Elm, a.image, [b[0] + l - y, b[1] + n - v]);
    la(this._doms.frag3Elm, y, v);
    Aa(this._doms.frag3Elm, u - y, c - v);
    b = this._skin.window.close;
    a = b.offset;
    b = b.anchor;
    Aa(this._doms.closeElm, e + this._boxWidth * b[0] + a[0], r + this._boxHeight * b[1] + a[1]);
    Aa(this._doms.contentWrapperElm, e + g[0], r + g[1]);
    this._boxLeft = e;
    this._boxTop = r
};
b.prototype.draw_shadowSize = function() {
    var a = this._doms,
        b = this._boxLeft,
        c = this._boxTop,
        e = this._boxWidth,
        g = this._boxHeight,
        r = this._skin.shadow.tan_a,
        l = Math.atan(r),
        v = this._skin.shadow.body,
        n = v.image,
        y = this._skin.shadow.blur_radius,
        s = v.origin,
        x = v.size,
        v = x[1] - y,
        A = v - y,
        x = x[0] - y,
        P = y + A / r,
        A = x - A / r,
        S = Math.sin(l) * g,
        r = Math.cos(l) * g,
        r = new u(Math.ceil(r / 2), Math.ceil(S / 2)),
        jb = (r.x + e) / 2,
        e = Math.floor(jb),
        jb = Math.ceil(jb),
        S = S / 2,
        da = Math.floor(S),
        S = Math.ceil(S);
    la(a.shadowFrag0Elm, e + y, da + y);
    la(a.shadowFrag1Elm, jb + y, da + y);
    la(a.shadowFrag2Elm, e + y, S + y);
    la(a.shadowFrag3Elm, jb + y, S + y);
    d(a.shadowFrag0Elm, n, [s[0] + P - Math.ceil(r.x) - y, s[1] + y - y]);
    d(a.shadowFrag1Elm, n, [s[0] + x - jb, s[1] + y - y]);
    d(a.shadowFrag2Elm, n, [s[0] + y - y, s[1] + v - S]);
    d(a.shadowFrag3Elm, n, [s[0] + A - jb + Math.ceil(r.x), s[1] + v - S]);
    n = da + S;
    b = Math.round(b + (-c - g) * Math.cos(l));
    c = Math.round(-(-c - g) * Math.sin(l));
    g = b + r.x;
    l = c - n;
    Aa(a.shadowFrag0Elm, g - y, l - y);
    Aa(a.shadowFrag1Elm, g + e, l - y);
    Aa(a.shadowFrag2Elm, b - y, c - S);
    Aa(a.shadowFrag3Elm, b + e, c - S)
};
b.prototype.draw_pixelPosition = function() {
    var a = this.get("projection"),
        b = this.get("position"),
        a = a.fromLatLngToDivPixel(b),
        b = this.computeAnchorOffset(),
        c = this.computeShadowOffset(b);
    Aa(this._doms.windowElm, Math.round(a.x + b.x), Math.round(a.y + b.y));
    Aa(this._doms.shadowElm, Math.round(a.x + c.x), Math.round(a.y + c.y))
};
b.prototype._autoPanMargin = 10;
b.prototype.draw_autoPan = function() {
    var a = this._boxLeft,
        b = this._boxTop,
        a = new v(a, b, a + this._boxWidth, b + this._boxHeight),
        b = this.computeAnchorOffset(),
        a = a.clone();
    a.minX += b.x;
    a.minY += b.y;
    a.maxX += b.x;
    a.maxY += b.y;
    if (this.get("useAnchor")) {
        if (b = this.get("anchorBounds")) a.extend(b.getMin()), a.extend(b.getMax())
    } else a.extend(new u(0, 0));
    var c = this.get("projection").fromLatLngToContainerPixel(this.get("position")),
        b = this.get("map"),
        d = b.get("viewWidth") | 0,
        e = b.get("viewHeight") | 0;
    a.minX += c.x;
    a.minY += c.y;
    a.maxX += c.x;
    a.maxY += c.y;
    c = new v(this._autoPanMargin, this._autoPanMargin, d - this._autoPanMargin, e - this._autoPanMargin);
    e = d = 0;
    a.maxX > c.maxX && (d = c.maxX - a.maxX);
    a.maxY > c.maxY && (e = c.maxY - a.maxY);
    a.minX + d < c.minX && (d = c.minX - a.minX);
    a.minY + e < c.minY && (e = c.minY - a.minY);
    d = Math.round(d);
    e = Math.round(e);
    (d || e) && b.panBy(-d, -e);
    this.getModel()._pendingAutoPan = !1
};
N.$setExports(b)