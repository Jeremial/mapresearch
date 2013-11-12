'use strict';

function b(a, c) {
    this._flashTileCanvas = a;
    this._loaderName = c;
    this._pendingMap = {};
    var d = this;
    x.addListener(a, "pushImages", function(a) {
        d._handlePushImages(a)
    })
}

function d(a) {
    this._tileContext = a
}

function f(a, b) {
    B.call(this, b);
    this._flashId = "_ssflc" + ++F;
    var c = {}, d = this;
    c.ready = function() {
        d._flashReady = !0;
        d._laterSend();
        return !0
    };
    c.pushImages = function(a) {
        a = a.split("\u7779\u78ff");
        G.trigger(d, "pushImages", a)
    };
    window[this._flashId] = c;
    this._toLoads = {};
    this._drops = [];
    this._pending = [];
    this.render(a)
}

function h(a) {
    for (var b = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], c = null, d = 0; d < b.length; ++d) {
        try {
            c = a.getContext(b[d])
        } catch (e) {}
        if (c) break
    }
    return c
}

function k(a, b) {
    this.tileCoord = a;
    this.url = b
}

function m(a, b, c) {
    this.z = a;
    this.x = b;
    this.y = c
}

function p(a, b) {
    J.call(this, b);
    this.render(a)
}

function n(a, b) {
    P.call(this, b);
    var c = b.getBackgroundColor();
    if (c) {
        var d = document.createElement("canvas");
        d.width = 1;
        d.height = 1;
        d = d.getContext("2d");
        d.fillStyle = c;
        d.rect(0, 0, 1, 1);
        d.fill();
        c = d.getImageData(0, 0, 1, 1);
        this._bgColor = [c.data[0] / 256, c.data[1] / 256, c.data[2] / 256, c.data[3] / 256]
    }
    this.render(a)
}

function s(a, b) {
    V.call(this, b);
    this.render(a)
}

function r(a) {
    this._tileLayer = a;
    var b = a.get("tileSize");
    this._tileWidth = b.width;
    this._tileHeight = b.height;
    this._ready = !1;
    this._rev = 0;
    this.bindTo("map", a);
    this.bindTo("visible", a)
}

function t(a) {
    Z.call(this, a);
    this._priList = ["webgl", "canvas", "flash", "cssdom"];
    ca ? this._priList = ["cssdom"] : Va ? this._priList = ["webgl", "canvas", "cssdom"] : aa ? this._priList = ["canvas", "flash", "cssdom"] : ea && (this._priList = ["webgl", "cssdom"]);
    this._useWebGL = !! a.get("useWebGL");
    this._useFlash = !! a.get("useFlash");
    this.bindsTo(["map", "baseLayer", "raster", "zIndex"], a);
    this._tileContext = new X(a);
    this._tileCache = new Y(!0, Ka || ca ? 50 : 200);
    var b = this;
    (Ka || ca) && da.addDomListener(window, "unload", function() {
        b._tileCache.clear();
        b = null
    });
    this._tileCache.ondrop = $(this._onDropTile, this);
    this._constructed = !1;
    this._rev = 1;
    this._blend = !0;
    this._blendTime = 1e3;
    this.get("baseLayer") ? this.get("raster") ? (this._alwaysBlend = !0, this._onlyFindDrawns = !1, this._findDownLevels = this._findUpLevels = !0, this._preloadUpLevel = this._loadUpLevels = 2) : (this._onlyFindDrawns = this._alwaysBlend = !1, this._findDownLevels = this._findUpLevels = !0, this._loadUpLevels = 0) : (this._blend = this._alwaysBlend = !1, this._onlyFindDrawns = !0, this._findDownLevels = this._findUpLevels = !1, this._preloadUpLevel = this._loadUpLevels = 0);
    this.bindTo("display", this._tileContext)
}

function u(a, b, c, d) {
    var e = ga(d),
        f = ia[e],
        e = ia[e] = d.getMap(),
        g;
    e !== f && (f && (f = f.o(), g = f.get("layers") || [], ha(g, a, 1), f.set("layers", g), b && (g = f.get("tileUrlOpts") || [], ha(g, b, 1), f.set("tileUrlOpts", g))), d && e && (f = e.o(), g = f.get("layers") || [], g.push(a), f.set("layers", g), b && (g = f.get("tileUrlOpts") || [], g.push(b), f.set("tileUrlOpts", g)), ka(c)))
}

function w() {}
var x = e;
b.prototype.loadImage = function(a, b) {
    (this._pendingMap[a] || (this._pendingMap[a] = [])).push(b);
    this._flashTileCanvas.loaderLoadImage(this._loaderName, a)
};
b.prototype.clearQueue = function(a) {
    this._flashTileCanvas.clearLoaderQueue(this._loaderName, a);
    this._pendingMap = {}
};
b.prototype._handlePushImages = function(a) {
    for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (Ad.call(this._pendingMap, c)) {
            var d = this._pendingMap[c],
                e = {};
            e.src = c;
            for (b = 0; b < d.length; b++) d[b](e);
            delete this._pendingMap[c]
        }
    }
};
b.prototype.destroy = function() {
    this.clearQueue(!0);
    this._flashTileCanvas.destroyLoader(this._loaderName)
};
var y = function(a) {
    var b;
    return function() {
        a && (b = a(), a = null);
        return b
    }
}, z = " -webkit- ms- -ms- -moz- -o-".split(" "),
    E = Yf(function(a, b) {
        for (var c = c || document.documentElement, c = c.style, d = 0; d < z.length; d++) {
            var e = z[d] + a;
            if ($f(e) in c) return "ms-" === z[d] ? "-ms-" + a : e
        }
        return null
    }),
    A = "undefined" !== typeof Float32Array ? Float32Array : function() {
        function a(b) {
            this.length = b.length || b;
            for (var c = 0; c < this.length; c++) this[c] = b[c] || 0
        }
        a.BYTES_PER_ELEMENT = 4;
        a.prototype.BYTES_PER_ELEMENT = 4;
        a.prototype.set = function(a, b) {
            b = b || 0;
            for (var c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
        };
        a.prototype.toString = Array.prototype.join;
        return a
    }();
d.prototype.getTileContext = function() {
    return this._tileContext
};
d.prototype.render = function(a) {};
d.prototype.blankFrame = function() {};
d.prototype.beginFrame = function() {};
d.prototype.endFrame = function() {};
d.prototype.createLoader = function(a) {
    return new c(a)
};
d.prototype.bufferTile = function(a) {
    return !0
};
d.prototype.unbufferTile = function(a) {
    return !0
};
d.prototype.drawTile = function(a, b) {};
d.prototype.getTileSize = function(a) {
    return this._tileContext.getTileSizeOfLevel(a.tileCoord.z)
};
d.prototype.getTileLeftTop = function(a) {
    return this._tileContext.getTileLeftTop(a)
};
d.prototype.notUseSubpixels = function() {
    return this._tileContext.notUseSubpixels()
};
d.prototype.destroy = function() {};
var C = ma[13],
    D = ma[12],
    G = e,
    B = d,
    F = -1;
g(f, B);
f.prototype.getFlashId = function() {
    return this._flashId
};
f.prototype.render = function(a) {
    var b = a.ownerDocument.createElement("div");
    b.style.cssText = "position:absolute;left:0;top:0;";
    b.innerHTML = Ra({
        id: this._flashId,
        movie: bb + "c.swf",
        wmode: "transparent",
        allowscriptaccess: "always",
        flashvars: "id=" + this._flashId
    });
    a.appendChild(b);
    this._canvasElm = b
};
f.prototype.unbufferTile = function(a) {
    this._drops.push(a.image.src);
    this._laterSend()
};
f.prototype.createLoader = function(a) {
    var c = "loader" + ++F;
    this._toLoads[c] = [];
    var d = this._pending;
    d.push(1);
    d.push(c);
    d.push(a);
    this._laterSend();
    return new b(this, c)
};
f.prototype.loaderLoadImage = function(a, b) {
    this._toLoads[a].push(b);
    this._laterSend()
};
f.prototype.clearLoaderQueue = function(a, b) {
    this._toLoads[a] = [];
    var c = this._pending;
    c.push(2);
    c.push(a);
    c.push( !! b);
    this._laterSend()
};
f.prototype.blankFrame = function(a) {
    this._canvasElm.style.display = "none"
};
f.prototype.drawTile = function(a, b) {
    var c = this.getTileLeftTop(a),
        d = this.getTileSize(a),
        e = this._pending;
    e.push(6);
    e.push(b);
    e.push(5);
    e.push(5);
    e.push(a.image.src);
    e.push(c.x);
    e.push(c.y);
    this.notUseSubpixels() ? (e.push(d.x), e.push(d.y)) : (e.push(d.x + .5), e.push(d.y + .5))
};
f.prototype.beginFrame = function(a) {
    var b = fa(this._flashId);
    if (b) {
        if (a.x !== this._viewWidth || a.y !== this._viewHeight) this._viewWidth = a.x, this._viewHeight = a.y, b.width = this._viewWidth, b.height = this._viewHeight;
        a = this._pending;
        a.push(7);
        a.push(0);
        a.push(0);
        a.push(this._viewWidth);
        a.push(this._viewHeight)
    }
};
f.prototype.endFrame = function() {
    this._send()
};
f.prototype._send = function() {
    var a = this._pending;
    if (this._drops.length) {
        a.push(4);
        a.push(this._drops.length);
        for (var b = 0; b < this._drops.length; b++) a.push(this._drops[b]);
        this._drops = []
    }
    for (var c = Uf(this._toLoads), b = 0; b < c.length; b++) {
        var d = c[b],
            e = this._toLoads[d];
        if (e.length) {
            a.push(3);
            a.push(d);
            a.push(e.length);
            for (var f = 0; f < e.length; f++) a.push(e[f]);
            this._toLoads[d] = []
        }
    }
    if (a.length && this._flashReady) {
        try {
            fa(this._flashId).CallFunction('<invoke name="postMessage" returntype="javascript"><arguments><string>' + a.join("\u7779\u78ff") + "</string></arguments></invoke>")
        } catch (g) {}
        this._pending = []
    }
};
f.prototype._laterSend = function() {
    var a = this;
    this._laterTimer || (this._laterTimer = setTimeout(function() {
        a._laterTimer = null;
        a._send()
    }, 0))
};
f.prototype.destroyLoader = function(a) {
    delete this._toLoads[a]
};
f.prototype.destroy = function() {
    this._send();
    Ca(this._flashId);
    clearTimeout(this._laterTimer);
    this._canvasElm.innerHTML = "";
    this._canvasElm = null
};
var M = y(function() {
    var a = document.createElement("canvas");
    a.width = 16;
    a.height = 16;
    return !(!a || !a.getContext)
}),
    I = y(function() {
        var a = !0;
        try {
            var b = document.createElement("canvas");
            b.addEventListener && b.addEventListener("webglcontextcreationerror", function(b) {
                a = !1
            }, !1);
            h(b) || (a = !1)
        } catch (c) {} finally {}
        return a
    });
k.prototype.failedCount = 0;
k.prototype.getKey = function() {
    return this._key || (this._key = this.tileCoord.buildKey())
};
m.prototype.buildKey = function() {
    return this.z + "/" + this.x + "_" + this.y
};
m.prototype.clone = function() {
    return new m(this.z, this.x, this.y)
};
var J = d;
g(p, J);
p.prototype.render = function(a) {
    var b = a.ownerDocument.createElement("div");
    a.appendChild(b);
    this._canvasElm = b
};
p.prototype.blankFrame = function(a) {
    this._canvasElm.style.display = "none"
};
p.prototype.beginFrame = function(a) {
    this._canvasElm.style.display = "";
    this._canvasElm.innerHTML = ""
};
var K = ["position:absolute;max-width:none;max-height:none;"],
    O = E("transform");
p.prototype.drawTile = function(a, b) {
    var c = this.getTileLeftTop(a),
        d = this.getTileSize(a),
        e = a.image,
        f = K.concat(),
        g = d.x !== (d.x | 0) || d.y !== (d.y | 0) ? 1 : 0;
    Kb && O ? (f.push(E("transform-origin")), f.push(":0 0;"), f.push(O), f.push(":"), rb && f.push("translate3d(0,0,0)"), f.push("matrix("), f.push((d.x + g) / 256), f.push(",0,0,"), f.push((d.y + g) / 256), f.push(","), f.push(c.x), f.push(","), f.push(c.y), f.push(");")) : (f.push("left:"), f.push(c.x), f.push("px;top:"), f.push(c.y), f.push("px;width:"), f.push(d.x + g), f.push("px;height:"), f.push(d.y + g), f.push("px;"));
    1 > b && ((c = E("opacity")) ? (f.push(c), f.push(":"), f.push(b), f.push(";")) : 8 <= document.documentMode ? (f.push('-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(opacity='), f.push(Math.ceil(100 * b)), f.push(')";')) : (f.push("filter:alpha(opacity="), f.push(Math.ceil(100 * b)), f.push(");")));
    e.style.cssText = f.join("");
    this._canvasElm.appendChild(e)
};
p.prototype.destroy = function() {
    this._canvasElm.innerHTML = "";
    Q(this._canvasElm);
    this._canvasCtx = this._canvasElm = null
};
var P = d,
    R = function() {
        var a = new A(9);
        a[0] = 1;
        a[1] = 0;
        a[2] = 0;
        a[3] = 0;
        a[4] = 1;
        a[5] = 0;
        a[6] = 0;
        a[7] = 0;
        a[8] = 1;
        return a
    }, S = function(a, b, c) {
        c || (c = a);
        var d = a[0],
            e = a[1],
            f = a[2],
            g = a[3],
            h = a[4],
            k = a[5],
            m = a[6],
            l = a[7];
        a = a[8];
        var p = b[0],
            n = b[1],
            v = b[2],
            r = b[3],
            s = b[4],
            t = b[5],
            q = b[6],
            u = b[7];
        b = b[8];
        c[0] = p * d + n * g + v * m;
        c[1] = p * e + n * h + v * l;
        c[2] = p * f + n * k + v * a;
        c[3] = r * d + s * g + t * m;
        c[4] = r * e + s * h + t * l;
        c[5] = r * f + s * k + t * a;
        c[6] = q * d + u * g + b * m;
        c[7] = q * e + u * h + b * l;
        c[8] = q * f + u * k + b * a;
        return c
    }, ja = function(a, b) {
        var c = new A(9);
        c[0] = 1;
        c[1] = 0;
        c[2] = 0;
        c[3] = 0;
        c[4] = 1;
        c[5] = 0;
        c[6] = a;
        c[7] = b;
        c[8] = 1;
        return c
    }, T = function(a, b, c) {
        var d = new A(9);
        d[0] = a;
        d[1] = 0;
        d[2] = 0;
        d[3] = 0;
        d[4] = b;
        d[5] = 0;
        d[6] = 0;
        d[7] = 0;
        d[8] = c;
        return d
    };
g(n, P);
var U = {
    alpha: !1,
    preserveDrawingBuffer: !1,
    antialias: !0,
    stencil: !1,
    depth: !1
};
n.prototype.createLoader = function(a) {
    return new c(a, 16e3, !0)
};
n.prototype.clearColor = function() {
    this._bgColor ? this._gl.clearColor(this._bgColor[0], this._bgColor[1], this._bgColor[2], this._bgColor[3]) : this._gl.clearColor(.95703125, .95703125, .95703125, 1);
    this._gl.clear(this._gl.COLOR_BUFFER_BIT)
};
n.prototype.render = function(a) {
    var b = a.ownerDocument.createElement("canvas");
    a.appendChild(b);
    this._canvasElm = b;
    this._gl = b.getContext("webgl", U) || b.getContext("experimental-webgl", U);
    var c = this;
    this._canvasElm.addEventListener("webglcontextlost", function(a) {
        if (c.onlost) c.onlost()
    }, !1);
    this.initGL()
};
n.prototype.initGL = function() {
    var a = this._gl,
        b = a.createShader(a.VERTEX_SHADER);
    a.shaderSource(b, "precision mediump float;attribute vec4 aVertexPosition;uniform mat3 uMatrix;varying vec2 vTextureCoord;void main(void){vTextureCoord = aVertexPosition.zw;gl_Position = vec4(uMatrix * vec3(aVertexPosition.xy, 1), 1);}");
    a.compileShader(b);
    var c = a.createShader(a.FRAGMENT_SHADER);
    a.shaderSource(c, "precision mediump float;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform float uAlpha;void main(void){gl_FragColor = vec4(vec3(texture2D(uSampler, vTextureCoord)), uAlpha);}");
    a.compileShader(c);
    var d = a.createProgram();
    a.attachShader(d, b);
    a.attachShader(d, c);
    a.linkProgram(d);
    a.useProgram(d);
    a.disable(a.DEPTH_TEST);
    a.disable(a.SCISSOR_TEST);
    a.disable(a.CULL_FACE);
    a.enable(a.BLEND);
    a.blendFunc(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
    this.clearColor();
    b = a.getAttribLocation(d, "aVertexPosition");
    a.enableVertexAttribArray(b);
    this._aVertexPosition = b;
    b = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, b);
    a.bufferData(a.ARRAY_BUFFER, new A([0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]), a.STATIC_DRAW);
    a.bindBuffer(a.ARRAY_BUFFER, null);
    this._aVertexPosition_buffer = b;
    this._uSampler = a.getUniformLocation(d, "uSampler");
    this._uMatrix = a.getUniformLocation(d, "uMatrix");
    this._uAlpha = a.getUniformLocation(d, "uAlpha");
    a = R();
    S(a, ja(-1, 1));
    this._matrix = a
};
n.prototype.blankFrame = function(a) {
    this._canvasElm.style.display = "none"
};
n.prototype.beginFrame = function(a) {
    this._canvasElm.width = a.x;
    this._canvasElm.height = a.y;
    this._canvasElm.style.cssText = "position:absolute;margin-left:-" + Math.round(a.x / 2) + "px;margin-top:-" + Math.round(a.y / 2) + "px;";
    this._gl.viewport(0, 0, a.x, a.y);
    this.clearColor();
    var b = R();
    S(b, ja(-1, 1));
    S(b, T(2 / a.x, -2 / a.y, 1));
    this._matrix = b;
    this._beginTime = +(new Date)
};
n.prototype.bufferTile = function(a) {
    var b = this._gl,
        c = a._glTexture;
    c || (c = b.createTexture(), b.bindTexture(b.TEXTURE_2D, c), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a.image), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR), b.bindTexture(b.TEXTURE_2D, null), a._glTexture = c);
    return !0
};
n.prototype.unbufferTile = function(a) {
    var b = this._gl,
        c = a._glTexture;
    c && (b.deleteTexture(c), a._glTexture = null);
    return !0
};
n.prototype.drawTile = function(a, b) {
    var c = a._glTexture,
        d = this.getTileLeftTop(a),
        e = this.getTileSize(a),
        f = d.x,
        d = d.y,
        g = e.x,
        h = e.y,
        e = this._gl;
    e.bindTexture(e.TEXTURE_2D, c);
    e.uniform1i(this._uSampler, 0);
    e.activeTexture(e.TEXTURE0);
    e.bindBuffer(e.ARRAY_BUFFER, this._aVertexPosition_buffer);
    e.vertexAttribPointer(this._aVertexPosition, 4, e.FLOAT, !1, 0, 0);
    c = S(S(this._matrix, ja(f, d), new A(9)), T(g, h, 1));
    e.uniformMatrix3fv(this._uMatrix, !1, c);
    e.uniform1f(this._uAlpha, b);
    e.drawArrays(e.TRIANGLE_FAN, 0, 4);
    e.bindTexture(e.TEXTURE_2D, null);
    e.bindBuffer(e.ARRAY_BUFFER, null)
};
n.prototype.destroy = function() {
    this._canvasElm && (Q(this._canvasElm), this._gl = this._canvasElm = null)
};
var V = d,
    ra = zd ? 0 : .999999999;
g(s, V);
s.prototype.render = function(a) {
    var b = a.ownerDocument.createElement("canvas");
    a.appendChild(b);
    this._canvasElm = b;
    this._canvasCtx = b.getContext("2d")
};
s.prototype.blankFrame = function(a) {
    this._canvasElm.style.display = "none"
};
s.prototype.beginFrame = function(a) {
    this._canvasElm.style.display = "";
    this._canvasCtx.clearRect(0, 0, this._canvasElm.width, this._canvasElm.height);
    this._canvasElm.width = a.x;
    this._canvasElm.height = a.y
};
s.prototype.drawTile = function(a, b) {
    if (a.image && a.image.width) {
        var c = this.getTileLeftTop(a),
            d = this.getTileSize(a);
        this._canvasCtx.globalAlpha = null != b ? b : 1;
        var e = d.x !== (d.x | 0) || d.y !== (d.y | 0) ? ra : 0;
        this._canvasCtx.drawImage(a.image, c.x, c.y, d.x + e, d.y + e)
    }
};
s.prototype.destroy = function() {
    Q(this._canvasElm);
    this._canvasCtx = this._canvasElm = null
};
g(r, l);
var W = "mapType projection viewWidth viewHeight zoom center backgroundColor".split(" ");
r.prototype.changed = function(a) {
    if ("map" === a) {
        this._ready = !1;
        this.unbindAll(W);
        this.set("display", 0);
        var b = this.get("map");
        b && this.bindsTo(W, b)
    }
    this.get("mapType") && (this._ready = !0);
    "display" !== a && this._ready && this.get("visible") && this.set("display", ++this._rev)
};
r.prototype.getBackgroundColor = function() {
    return this.get("backgroundColor")
};
r.prototype.update = function() {
    if (!this._ready) return !1;
    var a = this._tileLayer,
        b = this.get("projection"),
        c = this.get("viewWidth"),
        d = this.get("viewHeight"),
        e = this.get("zoom");
    this._viewSize = new H(c, d);
    this._level = e;
    var f = a.get("map");
    this._minLevel = Math.max(f.get("minZoom"), a.get("minZoom"));
    this._maxLevel = Math.min(f.get("maxZoom"), a.get("maxZoom"));
    this._optimalLevel = Math.round(e);
    b = b.fromLatLngToPoint(this.get("center"), e);
    this._leftTopPixel = new H(b.x - c / 2, b.y - d / 2);
    this._optimalLevel === this._level && (this._leftTopPixel = new H(Math.round(this._leftTopPixel.x), Math.round(this._leftTopPixel.y)));
    this._scheme = a = a.get("scheme");
    "xyz" === a ? this._tileOrigin = new H(0, 0) : "tms" === a && (this._tileOrigin = new H(0, 256 << e));
    this._tileOriginPixel = this._tileOrigin;
    return !0
};
r.prototype.getViewSize = function() {
    return this._viewSize
};
r.prototype.computeTileGrid = function(a) {
    var b = this._viewSize,
        c = this._leftTopPixel,
        d = this._tileOriginPixel,
        e = this.getTileSizeOfLevel(a);
    a = Math.floor((c.x - d.x) / e.x);
    var f = Math.floor((c.y - d.y) / e.y),
        g = Math.ceil((c.x + b.x - d.x) / e.x),
        b = Math.ceil((c.y + b.y - d.y) / e.y);
    return new v(a, f, g, b)
};
r.prototype.getZoomLevel = function() {
    return this._level
};
r.prototype.getOptimalLevel = function() {
    return this._optimalLevel
};
r.prototype.getMinLevel = function() {
    return this._minLevel
};
r.prototype.getMaxLevel = function() {
    return this._maxLevel
};
r.prototype.computeScale = function(a, b) {
    return Math.pow(2, a - b)
};
r.prototype.getTileSizeOfLevel = function(a) {
    a = this.computeScale(this._level, a);
    return new H(this._tileWidth * a, this._tileHeight * a)
};
r.prototype.getTileLeftTop = function(a) {
    a = this.getTileWorldLeftTop(a);
    var b = this.getViewWorldLeftTop();
    return new H(a.x - b.x, a.y - b.y)
};
r.prototype.getViewWorldLeftTop = function() {
    return this._leftTopPixel
};
r.prototype.notUseSubpixels = function() {
    return this._optimalLevel === this._level
};
r.prototype.getTileWorldLeftTop = function(a) {
    a = a.tileCoord;
    var b = this.getTileSizeOfLevel(a.z),
        c = this._tileOriginPixel;
    return new H(a.x * b.x + c.x, a.y * b.y + c.y)
};
r.prototype.sortTiles = function(a, b) {
    var c = this.getTileSizeOfLevel(b),
        d = new H(this._viewSize.x / 2 - c.x / 2, this._viewSize.y / 2 - c.y / 2),
        e = this;
    a.sort(function(a, b) {
        var c = e.getTileLeftTop(a),
            f = e.getTileLeftTop(b);
        return (c.x - d.x) * (c.x - d.x) + (c.y - d.y) * (c.y - d.y) - ((f.x - d.x) * (f.x - d.x) + (f.y - d.y) * (f.y - d.y))
    });
    return a
};
r.prototype.buildTileUrl = function(a, b) {
    return this._tileLayer.getTileUrl(a, a.z, b)
};
var X = r,
    Y = a,
    Z = ya,
    $ = Ga,
    Va = zd,
    aa = qa,
    ca = Kb,
    da = e,
    Ka = tc,
    ea = mb;
g(t, Z);
t.prototype.changed = function(a) {
    "display" === a ? this.get("display") ? (this._constructed || this.construct(), this.redraw(10 < this.get("display"))) : this._constructed && this.destroy() : "zIndex" === a && this._div && (this._div.style.zIndex = this._getZIndex())
};
t.prototype._createTileCanvas = function(a, b) {
    switch (a) {
        case "flash":
            if (D && this._useFlash && oa() && 0 <= na(oa(), "10.0.0")) return new f(b, this._tileContext);
            break;
        case "webgl":
            if (C && this._useWebGL && I() && this.get("baseLayer")) return new n(b, this._tileContext);
            break;
        case "canvas":
            if (M()) return new s(b, this._tileContext);
            break;
        default:
            return new p(b, this._tileContext)
    }
    return null
};
t.prototype.createTileCanvas = function(a) {
    if (this.get("baseLayer"))
        for (var b = 0; b < this._priList.length; b++) {
            var c = this._createTileCanvas(this._priList[b], a);
            if (c) return c
        }
    return new p(a, this._tileContext)
};
t.prototype.construct = function() {
    var a = this.get("map").get("panes").tilePane,
        b = a.ownerDocument.createElement("div");
    b.style.cssText = "position:absolute;left:0;top:0;";
    b.style.zIndex = this._getZIndex();
    a.appendChild(b);
    this._tileCanvas = this.createTileCanvas(b);
    var c = this;
    this._tileCanvas.onlost = function() {
        c._lastLostTime = +(new Date);
        c.destroy();
        setTimeout(function() {
            c.construct();
            c.redraw()
        })
    };
    this._div = b;
    this._loader = this._tileCanvas.createLoader(4);
    this._preloader = this._tileCanvas.createLoader(2);
    this._constructed = !0
};
t.prototype._getZIndex = function() {
    return this.get("baseLayer") ? 0 : Math.max(this.get("zIndex") | 0, 0) + 1
};
t.prototype.destroy = function() {
    this._loader.destroy();
    this._preloader.destroy();
    this._preloader = this._loader = null;
    this._tileCache.clear();
    this._tileCanvas.destroy();
    Q(this._div);
    this._div = null;
    this._constructed = !1
};
t.prototype._onDropTile = function(a) {
    this._tileCanvas && this._tileCanvas.unbufferTile(a);
    a.image = null
};
t.prototype.draw = function() {
    var a = this._tileContext;
    if (!1 !== a.update()) {
        var b = this._tileCanvas;
        this._loader.clearQueue(!1);
        this._preloader.clearQueue(!1);
        if (!this.get("baseLayer") && a.getZoomLevel() !== a.getOptimalLevel()) b.blankFrame();
        else if (a.getZoomLevel() < a.getMinLevel() || a.getZoomLevel() > a.getMaxLevel()) b.blankFrame();
        else {
            var c = !1,
                d = a.getOptimalLevel(),
                e = a.computeTileGrid(d);
            if (e.isEmpty()) b.blankFrame();
            else {
                b.beginFrame(a.getViewSize());
                for (var f = this._tileCache, g = [], h = [], l = new m(0, 0, 0), p = [], n = [], v = [], n = this._drawnTiles || [], r = {}, s = {}, t = n.length; t--;) {
                    var q = n[t];
                    if (!(1 > q._alpha))
                        if (l.z = q.tileCoord.z, l.x = q.tileCoord.x, l.y = q.tileCoord.y, l.z === d) r[l.buildKey()] |= 16;
                        else
                    if (l.z < d) {
                        if (r[l.buildKey()] |= 64, this._findUpLevels) {
                            var u = d - l.z,
                                w = Math.max(e.minX, l.x << u),
                                x = Math.min(e.maxX, (l.x + 1 << u) - 1),
                                y = Math.max(e.minY, l.y << u),
                                u = Math.min(e.maxY, (l.y + 1 << u) - 1);
                            l.z = d;
                            for (var z = w; z <= x; z++) {
                                l.x = z;
                                for (var E = y; E <= u; E++) {
                                    l.y = E;
                                    var A = l.buildKey();
                                    r[A] |= 32;
                                    s[A] = s[A] ? Math.max(q.tileCoord.z, s[A]) : q.tileCoord.z
                                }
                            }
                        }
                    } else if (this._findDownLevels)
                        for (A = 1; l.z >= d;) {
                            r[l.buildKey()] |= A;
                            w = l.x >> 1;
                            y = l.y >> 1;
                            x = w << 1;
                            u = y << 1;
                            q = 0;
                            for (z = 2; z--;) {
                                l.x = x + z;
                                for (E = 2; E--;) l.y = u + E, r[l.buildKey()] & 5 && q++
                            }--l.z;
                            l.x = w;
                            l.y = y;
                            A = 4 === q ? 4 : 2
                        }
                }
                n = [];
                l.z = d;
                x = +(new Date);
                for (z = e.minX; z <= e.maxX; z++) {
                    l.x = z;
                    for (E = e.minY; E <= e.maxY; E++) {
                        l.y = E;
                        q = this.getTile(l);
                        A = l.buildKey();
                        w = !1;
                        if (q.image)
                            if (n.push(q), A = r[A], A & 36) {
                                if (q._rev !== this._rev || 1 > q._alpha) w = !0
                            } else q._noAlpha = !0;
                            else w = !0, q.loaded || p.push(q);
                        w && v.push(q)
                    }
                }
                g.push(n);
                h.push(p);
                if (this._findDownLevels) {
                    v = v.slice(0);
                    p = [];
                    for (t = v.length; t--;) q = v[t], r[q.getKey()] & 4 || p.push(q);
                    q = a.getMaxLevel();
                    for (u = d + 1; v.length && u <= q; u++) {
                        var n = [],
                            Q = v,
                            v = [];
                        l.z = u;
                        for (t = Q.length; t--;)
                            if (z = Q[t], A = r[z.getKey()], A & 7) {
                                w = z.tileCoord.x << 1;
                                y = z.tileCoord.y << 1;
                                for (z = 2; z--;) {
                                    l.x = w + z;
                                    for (E = 2; E--;) {
                                        l.y = y + E;
                                        var A = l.buildKey(),
                                            C = f.peek(A);
                                        r[A] & 5 && C && C.image ? (C._noAlpha = !0, n.push(C)) : v.push(new k(l.clone(), ""))
                                    }
                                }
                            }
                        g.push(n)
                    }
                    v = p
                }
                if (this._findUpLevels) {
                    f = a.getMinLevel();
                    z = Math.max(f, d - this._loadUpLevels);
                    for (u = d - 1; v.length && u >= f; u--) {
                        E = u >= z;
                        p = [];
                        n = [];
                        y = {};
                        Q = v;
                        v = [];
                        for (t = Q.length; t--;) q = Q[t], l.z = u, l.x = q.tileCoord.x >> 1, l.y = q.tileCoord.y >> 1, q = this.getTile(l, !E), y[q.getKey()] || (y[q.getKey()] = 1, w = !1, q.image && (!this._onlyFindDrawns || r[q.getKey()] & 64) ? (l.x = Math.min(e.maxX, Math.max(e.minX, l.x << d - u)), l.y = Math.min(e.maxY, Math.max(e.minY, l.y << d - u)), l.z = d, A = l.buildKey(), "number" === typeof s[A] && q.tileCoord.z > s[A] ? w = !0 : q._noAlpha = !0, n.push(q)) : (w = !0, E && !q.loaded && p.push(q)), w && v.push(q));
                        n.length && g.push(n);
                        E && p.length && h.push(p)
                    }
                }
                d = [];
                e = this._rev;
                this._rev++;
                for (t = g.length; t--;)
                    if (n = g[t], n.length) {
                        u = n[0].tileCoord.z;
                        for (l = n.length; l--;) {
                            q = n[l];
                            v = q.tileCoord;
                            r = 1;
                            if (!q._drawInTime || this._alwaysBlend && q._rev !== e) q._drawInTime = x;
                            q._rev = this._rev;
                            this._blend && !q._noAlpha ? (v = Math.max(0, Math.abs(v.z - a.getZoomLevel()) - 1), v = 1 / Math.pow(1.32, v), r = Math.min(1, (x - q._drawInTime) / (this._blendTime * v)), 1 !== r && (c = !0)) : q._noAlpha = !1;
                            q._alpha = r;
                            0 !== r && q.image && (b.bufferTile(q), b.drawTile(q, r));
                            d.push(q)
                        }
                    }
                this._drawnTiles = d;
                for (t = h.length; t--;)
                    if (p = h[t], p.length) {
                        a.sortTiles(p, p[0].tileCoord.z);
                        for (g = 0; g < p.length; g++) this.loadTile(p[g], this._loader)
                    }
                b.endFrame();
                if (c) {
                    var D = this;
                    setTimeout(function() {
                        D.redraw()
                    })
                }
            }
        }
    }
};
t.prototype.getTile = function(a, b) {
    var c = a.buildKey();
    return (!b ? this._tileCache.get(c) : this._tileCache.peek(c)) || new k(a.clone(), this._tileContext.buildTileUrl(a))
};
t.prototype.loadTile = function(a, b) {
    var c = this;
    b = b || this._loader;
    b.loadImage(a.url, function(b) {
        a.image = b;
        c._tileCache.set(a.getKey(), a);
        c.redraw()
    })
};
var y = g,
    ga = fc,
    ha = Ta,
    ka = Fa,
    ia = {}, la = [Ga(u, null, "traffic", null, "Lt"), Ga(u, null, "panorama", null, "Lp")];
y(w, l);
w.prototype.load = function(a, b) {
    var c = la[a];
    c && c(b)
};
y = new w;
N.$setExports([y, t])