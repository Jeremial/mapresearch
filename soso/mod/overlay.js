'use strict';

function a(b) {
    function d() {
        g.keysReady(l, function() {
            g.construct();
            g.keysUnReady(l, function() {
                g.destroy();
                d()
            })
        })
    }
    c.call(this, b);
    this.ready = this.constructed = !1;
    this.hash = e++;
    this.bindModelKeys = [];
    var g = this;
    this.bindTo("map", b);
    d()
}

function b(a) {
    a.unbindAll(l);
    d(l, function(b) {
        a.set(b, null)
    })
}
var c = ya,
    d = K,
    e = 0,
    l = ["panes", "mapCanvasProjection"];
g(a, c);
var n = a.prototype;
n.changed = function(a) {
    "map" !== a ? this.constructed && this.redraw("overlayRedraw" === a) : (this.constructed && b(this), (a = this.get("map")) && !this.constructed && this.bindsTo(l, a))
};
n.construct = function() {
    if (!this.constructed) {
        this.constructed = !0;
        var a = this.get("map");
        this.targetMap = a;
        var b = this.getModel();
        a.overlays.insert(b);
        this.modelBindTo("panes", this);
        this.modelBindTo("projection", this, "mapCanvasProjection");
        this.modelBindTo("overlayRedraw", a);
        this.modelBindTo("drawPixelBounds", a);
        b.set("constructed", !0);
        b.construct();
        this.bindTo("overlayRedraw", a)
    }
};
n.modelBindTo = function(a, b, c) {
    var d = this.getModel();
    d && (d.bindTo(a, b || this, c), this.bindModelKeys.push(a))
};
n.clearModelBindKeys = function() {
    var a = this.getModel(),
        b = null;
    if (a)
        for (; b = this.bindModelKeys.shift();) a.unbind(b), a.set(b, null)
};
n.destroy = function() {
    if (this.constructed) {
        this.constructed = !1;
        var a = this.targetMap;
        delete this.targetMap;
        var b = this.getModel();
        a.overlays.remove(b);
        this.unbind("overlayRedraw");
        b.set("constructed", !1);
        b.destroy();
        this.clearModelBindKeys()
    }
};
n.draw = function() {
    this.getModel().draw()
};
N.$setExports(a)