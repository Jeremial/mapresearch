'use strict';

function a(c) {
    b.call(this, c);
    this.eventTracker = this.dom = null;
    this.listeners = [];
    this.changeKeys = {};
    this.bindTo("constructed", c)
}
var b = ya,
    c = {
        border: "1px solid #999999",
        fontSize: "12px",
        padding: "2px",
        backgroundColor: "#FFFFFF"
    }, d = "click dblclick mousedown mouseup mouseenter mouseleave rightclick".split(" ");
g(a, b);
var e = a.prototype;
e.constructed_changed = function() {
    this.get("constructed") ? this.construct() : this.destroy()
};
e.construct = function() {
    var a = this.getModel();
    this.bindTo("position", a);
    this.bindTo("content", a);
    this.bindTo("visible", a);
    this.bindTo("title", a);
    this.bindTo("zIndex", a);
    this.bindTo("offset", a);
    this.bindTo("style", a);
    this.bindTo("clickable", a);
    this.bindTo("map", a);
    this.bindTo("panes", a);
    this.bindTo("projection", a);
    this.bindTo("overlayRedraw", a)
};
e.destroy = function() {
    this.unbind("map");
    this.unbind("panes");
    this.unbind("projection");
    this.unbind("overlayRedraw");
    this.unbind("position");
    this.unbind("content");
    this.unbind("visible");
    this.unbind("title");
    this.unbind("zIndex");
    this.unbind("offset");
    this.unbind("style");
    this.unbind("clickable");
    this.clearDom()
};
e.changed = function(a) {
    this.changeKeys[a] = !0;
    this.get("constructed") && this.redraw()
};
e.isInsideDrawPixelBounds = function() {
    var a = !0,
        b = this.get("position"),
        c = this.get("drawPixelBounds"),
        d = this.get("projection");
    c && (a = d.fromLatLngToDivPixel(b), a = c.containsPoint(a));
    return a
};
e.draw = function() {
    this.get("map");
    var a = this.get("position"),
        b = this.get("visible"),
        c = this.changeKeys,
        d = this,
        e;
    if (this.get("constructed") && a && b) {
        this.dom || this.createDom();
        this.changeKeys = {};
        if (c.overlayRedraw || c.projection) c.position = !0;
        if (c.projection || c.position || c.offset) {
            var g = this.getPixelPosition();
            c.pixelPosition = !0
        }
        ia(c, function(a, b) {
            e = d.get(b);
            switch (b) {
                case "panes":
                case "clickable":
                    var c = d.get("panes"),
                        c = d.get("clickable") ? c.overlayMouseTarget : c.overlayImage;
                    d.set_container(c);
                    break;
                case "pixelPosition":
                    d.set_pixel(g);
                    break;
                case "content":
                    d.set_content(e);
                    break;
                case "zIndex":
                    d.set_zIndex(e);
                    break;
                case "style":
                    d.set_style(e);
                    break;
                case "title":
                    d.set_title(e)
            }
        })
    } else this.dom && this.clearDom()
};
e.getPixelPosition = function() {
    var a = this.get("projection"),
        b = this.get("position"),
        c = this.get("offset"),
        d = null;
    a && b && (d = a.fromLatLngToDivPixel(b), d.x = Math.round(d.getX()), d.y = Math.round(d.getY()), c && (d = d.plus(new H(c.getWidth(), c.getHeight()))));
    return d
};
e.set_pixel = function(a) {
    Aa(this.dom, a.getX(), a.getY())
};
e.set_container = function(a) {
    var b = this.dom;
    a ? a.appendChild(b) : b.parentNode && b.parentNode.removeChild(b)
};
e.set_content = function(a) {
    this.dom.innerHTML = a
};
e.set_zIndex = function(a) {
    V(this.dom, "zIndex", O(a) ? a : "")
};
e.set_style = function(a) {
    var b = this.dom;
    a = Sa(c, a);
    ia(a, function(a, c) {
        V(b, c, a)
    })
};
e.set_title = function(a) {
    this.dom.title = a || ""
};
e.createDom = function() {
    if (!this.dom) {
        this.dom = J("div", null, null, "position:absolute;white-space:nowrap");
        var a = new jc(this.dom),
            b = this.listeners,
            c = this;
        K(d, function(d) {
            b.push(a.addListener(d, c.createEventHandler(d)))
        });
        this.eventTracker = a;
        a.start()
    }
};
e.clearDom = function() {
    this.dom && (this.set_container(null), this.dom = null);
    this.eventTracker && (this.eventTracker.clearAllListener(), this.eventTracker.stop(), this.eventTracker = null);
    for (var a = this.listeners, b; b = a.shift();) b.remove()
};
e.createEventHandler = function(a) {
    "mouseenter" === a ? a = "mouseover" : "mouseleave" === a && (a = "mouseout");
    var b = this;
    return function() {
        b.triggerCustomEvent(a, b.get("position"))
    }
};
N.$setExports(a)