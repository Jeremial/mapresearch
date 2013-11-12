(function() {
    "use strict";

    function pg(a, b) {
        Ma[1] = a[0];
        Ma[2] = a[1].replace(/\./g, "/") + "/";
        if (USE_LOCAL) {
            Ma[3] = "/theme/";
        }else{
            Ma[3] = a[0] + Ma[2] + "theme/";
        }
        Ma[0] = a[1];
        Ma[16] = a[2];
        a[3] && (Ma[11] = new Date(a[3]));
        Ma[10] = a[4];
        Ma[19] = a[5] || "";
        Ma[20] = a[6];
        Ma[21] = b || ""
    }

    function qg(a) { /* 组合URI */
        if(USE_LOCAL){
            for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c]);
            if (tg) {
                a = [];
                for (c = Math.ceil(b.length / He); c--;) a.push('/modules.js?mod=' + b.splice(0, He).join(","));
                return a
            }
        }else{
            for (var b = [], c = 0, d = a.length; c < d; c++) b.push(rg + sg + a[c] + ".js");
            if (tg) {
                a = [];
                for (c = Math.ceil(b.length / He); c--;) a.push(ug + b.splice(0, He).join(","));
                return a
            }
        }
        c = 0;
        for (d = b.length; c < d; c++) b[c] = vg + b[c];
        return b
    }

    function wg(a, b) {
        if (a) return function() {
            --a || b()
        };
        b()
    }

    function Ie(a) {
        if (!Uc[a]) { /* 看是否已经加载过了 */
            Uc[a] = !0; /* 设置标志 */
            for (var b = Eb[a], c = b.length; c--;) Ie(b[c]);
            Id.push(a); /* 设置请求队列 */
            ud || (ud = setTimeout(xg, 0))
        }
    }

    function yg(a) { /* add script tag */
        var b = document.createElement("script");
        b.setAttribute("type", "text/javascript");
        b.setAttribute("src", a);
        b.setAttribute("charset", "utf-8");
        document.getElementsByTagName("head")[0].appendChild(b)
    }

    function xg() {
        ud = 0;
        var a = Id;
        Id = [];
        a.sort(function(a, b) {
            return a <= b
        });
        for (var a = qg(a), b = a.length; b--;) yg(a[b])
    }

    function Je(a /* target */, b/* target key */) {
        var c;
        vd ? c = Ke(a).__events_ : (a.__events_ || (a.__events_ = {}), c = a.__events_);
        c[b] || (c[b] = {});
        return c[b]
    }

    function Ke(a) {
        var b;
        a && a.__oid_ && (b = B.eventObjects[a.__oid_]);
        !b && a && (a.__oid_ = ++zg, b = {
            __events_: {}
        }, B.eventObjects[a.__oid_] = b);
        return b
    }

    function Vc(a, b) { /* a is object, b is type */
        var c, d = {};
        if (vd) {
            if (c = Ke(a)) d = c.__events_
        } else d = a.__events_ || {};
        if (b)
            c = d[b] || {};
        else
            for (b in c = {}, d) Ag(c, d[b]); /* Ag == Sa, 迭代函数的操作 */
        return c
    }

    function Bg(a) {
        return function() {
            var b = a.handler;
            return a.bindHandler = function(c) {
                if ((c = c || window.event) && !c.target) try {
                    c.target = c.srcElement
                } catch (d) {}
                var M = b.apply(a.instance, [c]);
                return c && "click" == c.type && (c = c.srcElement) && "A" == c.tagName && "javascript:void(0)" == c.href ? !1 : M
            }
        }()
    }

    function Cg(a) { /* cancel buble */
        a.returnValue = !0
    }

    function Le(a, b, c) {
        return function() {
            for (var d = [b, a], M = arguments.length, e = 0; e < M; ++e) d.push(arguments[e]);
            B.trigger.apply(this, d);
            c && Cg.apply(null, arguments)
        }
    }

    function Eg(a, b) {
        return function() {
            var c = Array.prototype.slice.call(arguments, 0);
            c.push(this);
            b.apply(a, c)
        }
    }

    function wc(a /* target */, b/* property */, c/* callback */, d) { /* custome event */
        this.instance = a;
        this.eventName = b;
        this.handler = c;
        this.bindHandler = null;
        this.browser = d;
        this.id = ++Fg;
        Je(a, b)[this.id] = this;
        vd && (B.listeners[this.id] = this)
    }

    function Gg() {
        for (var a = 0; a < Wc.length; a++)
            if (Wc[a] === this) {
                Wc.splice(a, 1);
                break
            }
    }

    function wd() {
        clearTimeout(Xc);
        for (Xc = null; Yc[0];) {
            for (var a = [], b = void 0, c = void 0; b = Yc[0];)
                if (c = b.length, 0 + c + "1" <= Me) a.push(b), Yc.shift();
                else break;
            a[0] && (a = Ne + a.join("&"), Hg(a))
        }
    }

    function Oe(a, b) {
        for (var c = {}, d = 0, M = a.length; d < M; d += 2) {
            var e = a[d + 1];
            Ig(e) && b ? c[a[d]] = Oe(e, b) : c[a[d]] = e
        }
        return c
    }

    function ea(a, b, c, d) { /* Size */
        this.width = a;
        this.height = b
    }

    function Pe(a) { /* ScaleControl */
        this.opts = a = Jg(a, ["style", Kg.DEFAULT, "index", 0]);
        a.map && (this.map = a.map, this.setOptions(a), Lg("c"))
    }

    function xd(a) { /* NavigationControl */
        this.opts = a = Mg(a, ["style", yd.DEFAULT, "index", 0, "margin", new Ng(1, 2), "zoomTips", {
            17: "\u8857",
            11: "\u5e02",
            8: "\u7701",
            4: "\u56fd"
        }]);
        a.map && (this.map = a.map, this.setOptions(a), Og("b"))
    }

    function pb(a, b, c /* type */, d /* target */, M) { /* event */
        this.latLng = a;
        this.pixel = b;
        this.type = c;
        this.target = d;
        this.__event__ = M
    }

    function ic(a) { /* get accessors */
        return a.__o_accessors_ || (a.__o_accessors_ = {})
    }

    function Ub(a, b) { /* a is object, b is seted key, 触发相应的事件 */
        var c = Zc(b); /* 获取key变化后的 处理函数的名字 {b}_changed */
        a[c] ? a[c]() : a.changed(b);
        var c = Zc(b.toLowerCase()),
            d = new Pg(void 0/* lnglat */, void 0/* pixel */, c /* type */, a /* target */, void 0 /*event*/); /* Pg == pb, custom event constructor */
        Jd.trigger(a /* target */, c /* event name */, d /* event obj */) /* Jd == e == B, event handle object */
    }

    function Qg(a, b, c, d, M) { /* binding item */
        ic(a)[b] = {
            target: c,
            targetKey: d
        };
        M || Ub(a, b)
    }

    function $c(a) { /* get bindings */
        a.__o_bindings_ || (a.__o_bindings_ = {});
        return a.__o_bindings_
    }

    function Zc(a) { /* 获取key变化后的 处理函数的名字 */
        return Qe[a] || (Qe[a] = a + "_changed")
    }

    function l() {} /* MVCObject */

    function Re(a) { /* MapTypeControl */
        var b = a.map;
        if (b) {
            var c = {};
            Rg(Sg, function(b) {
                c[b] = a[b]
            });
            b.setOptions({
                mapTypeControl: !0,
                mapTypeControlOptions: c
            })
        }
        Tg("a")
    }

    function Ug(a) { /* return get functions */
        return function() {
            return this.get(a)
        }
    }

    function Vg(a, b) { /* set something */
        return b ? function(c) {
            b(c) || Wg(a, c); /* Wg throw new error */
            this.set(a, c)
        } : function(b) {
            this.set(a, b)
        }
    }

    function I(a, b, c) { /* LatLng constructor */
        a = Number(a);
        b = Number(b);
        c || (a = Xg(a, -Se, Se), b = Yg(b, -180, 180));
        this.lat = a;
        this.lng = b
    }

    function Te(a, b) {
        -180 == a && 180 != b && (a = 180); - 180 == b && 180 != a && (b = 180);
        this.minX = a;
        this.maxX = b
    }

    function Ue(a, b) {
        this.minY = a;
        this.maxY = b
    }

    function xa(a, b) { /* LatLngBounds */
        a && !b && (b = a);
        if (a) {
            var c = Ve(a.getLat(), -90, 90),
                d = Ve(b.getLat(), -90, 90);
            this.lat = new ad(c, d);
            c = a.getLng();
            d = b.getLng();
            360 <= d - c ? this.lng = new xc(-180, 180) : (c = We(c, -180, 180), d = We(d, -180, 180), this.lng = new xc(c, d))
        } else this.lat = new ad(1, -1), this.lng = new xc(180, -180)
    }

    function bd() {} /* MapTypeRegistry */

    function Zg(a) { /* get toString*/
        if ("object" != typeof a || !a) return "" + a;
        a.__sm_id || (a.__sm_id = ++$g);
        return "" + a.__sm_id
    }

    function Xe(a) { /* overlays constructor */
        this.hash = a || Zg;
        this.items = {};
        this.length = 0
    }

    function Vb(a) { /* MVCArray */
        this.elems = a || [];
        this.set("length", this.elems.length)
    }

    function Na(a, b) { /* Map */
        this._container = a = "object" == typeof a ? a : document.getElementById(a);
        var c = this,
            d = c.controls = [];
        Od(ah, function(a) { /* Od == ia, */
            /* ah == ob, ControlPosition */
            d[a] = new bh /* bh == Vb, MVCArray */
        });
        c.overlays = new ch; /* ch == Xe */
        c.mapTypes = new dh; /* dh == bd, MapTypeRegistry*/
        c.V = new Ye; /* Ye == l, MVCObject */
        b && (b.noClear || eh(a)); /* eh == ac, 初始化container */
        fh(this, b); /* merge options */
        N.$require("map", function(a) {
            a(c).construct(b)
        })
    }

    function fh(a, b) { /* merge options */
        var c = {};
        Od(gh, function(a, b) { /* set default options */
            c[b] = a
        });
        b && Od(b, function(a, b) { /* merge custom options */
            c[b] = a
        });
        a.setValues(c) /* setValues is method of MVCObject instance*/
    }

    function vb(a) {
        return function() {
            var b = this,
                c = [].slice.call(arguments);
            N.$require("map", function(d) {
                d(b).exec(a, c)
            })
        }
    }

    function Wb(a) { /* animation constructor */
        a = a || {};
        a.delay = a.delay || 0;
        a.duration = a.duration || 0;
        this.setValues(a);
        this.status = -1
    }

    function jc(a) {
        var b = this;
        hh ? N.$require("e1", function(c) {
            new c(b, a)
        }) : document.body.addEventListener ? N.$require("e2", function(c) {
            new c(b, a)
        }) : N.$require("e3", function(c) {
            new c(b, a)
        });
        this.start()
    }

    function H(a, b) { /* Point */
        this.x = a;
        this.y = b
    }

    function wb() {
        this.views = [];
        this.count = 0;
        this.renderNum = 15;
        this.anim = new ih({
            duration: 500
        });
        this.isRun = !1
    }

    function ya(a, b) {
        this._model = a;
        this._renderTimer = b || 0;
        a && (this._fdrawListener = qb.addListener(this, "forceredraw", this.forcedraw, this), this.forwardEvents(["forceredraw"]))
    }

    function Ze(a, b, c, d) {
        var M = new $e,
            e = !1,
            g = {};
        yc(b, function(a) {
            g[a] = 1
        });
        var v = function(a, b) {
            return d ? d(a, b) : function() {
                var b = !0;
                yc(a, function(a) {
                    if (!a) return b = !1
                });
                return b
            }()
        };
        M.changed = function(d) {
            if (!(e || d && !g[d])) {
                var l = [];
                yc(b, function(b) {
                    l.push(a.get(b))
                });
                v(l, b) && (e = !0, M.unbindAll(b), c())
            }
        };
        M.bindsTo(b, a)
    }

    function cd(a) { /* Control */
        this.a = {};
        this.setOptions(a);
        jh("d")
    }

    function af(a) {
        if (a)
            for (var b = a.childNodes, c = 0, d = b.length; c < d; c++) a.removeChild(b[c])
    }

    function gb(a, b, c, d) { /* Color */
        this.red = a;
        this.green = b;
        this.blue = c;
        this.alpha = 0 <= parseInt(d) ? d : 1
    }

    function dd(a) {
        this.setValues(a)
    }

    function db(a) { /* Overlay */
        bf.call(this, a) /* bf == dd, */
    }

    function kh(a) {
        var b = null;
        lh(a) ? b = a : mh(a) && (b = new zc, nh(a, function(a) {
            b.push(a)
        }));
        return b
    }

    function hb(a) {
        a = oh(a, ["fillColor", new Ac(255, 255, 255, .5), "strokeColor", new Ac(23, 145, 252, .8), "strokeWeight", 8, "strokeDashStyle", "solid", "zIndex", 0, "cursor", "pointer", "clickable", !0, "simplify", !0, "visible", !0]);
        this.set("path", new zc);
        this.setValues(a);
        N.$require("poly", ph(this), 0)
    }

    function qh(a) {
        var b = (new Date).getTime();
        if (a) {
            var c = window[b] = new Image;
            c.onload = c.onerror = function() {
                window[b] = null
            };
            c.src = rh + "?" + a;
            c = null
        }
    }

    function Pd(a, b) {
        var c = [],
            d;
        for (d in b) c.push(d.replace("|", "").replace("&", "") + ":" + b[d]);
        return "add=" + a + "|" + c.join(",") + "|1"
    }

    function Xb(a) {
        var b = {
            pano: null,
            position: new sh(0, 0),
            pov: {
                heading: 0,
                pitch: 0
            },
            zoom: 1,
            planeInfo: null,
            scrollwheel: !0,
            disableLogo: !1,
            visible: !0
        };
        this._overlay = [];
        a = th(a, b);
        this.setValues(a);
        var c = this;
        ed.addListener(this, "loaded", function() {
            Qd = !0;
            for (var a = 0; a < c._overlay.length; a++) ed.trigger(this, "addlabel", c._overlay[a]);
            c._overlay = void 0
        });
        N.$require("pano", uh(this), 0)
    }

    function Rd(a, b) { /* Panorama */
        b = b || {};
        b.container = "object" == typeof a ? a : document.getElementById(a);
        cf.call(this, b);
        vh("prm")
    }

    function wh() {
        var a = function() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        };
        return a() + a() + a() + a() + a() + a() + a() + a()
    }

    function Sd(a) {
        var b = {
            id: wh(),
            panorama: null,
            content: "",
            position: new df(0, 0),
            altitude: 5,
            visible: !0
        };
        a = xh(a, b);
        this.setValues(a);
        N.$require("pano", yh(this), 1)
    }

    function ef() {
        "complete" == Xa.readyState && (Xa.detachEvent("onreadystatechange", ef), ha.fireReady())
    }

    function ff() {
        Xa.removeEventListener("DOMContentLoaded", ff, !1);
        ha.fireReady()
    }

    function zh(a, b) {
        var c = document.getElementsByTagName("head")[0],
            d = '<script src="' + a + '" ' + Td + '="this.ownerDocument.z = 1"></script>',
            M = Ud.createElement("iframe");
        M.style.display = "none";
        c.appendChild(M);
        var e = M.contentDocument;
        M.onload = function() {
            1 != e.z && b && b();
            M.onload = null;
            c.removeChild(this)
        };
        try {
            e.write(d), e.close()
        } catch (g) {}
        c = null
    }

    function Ah(a, b, c, d, e) {
        var g = Ud.createElement("script");
        Bc.push({
            name: a,
            sender: g
        });
        g.setAttribute("type", "text/javascript");
        g.setAttribute("charset", e || "gbk");
        g.async = !0;
        var l = null,
            v = !1;
        g[Td] = function() {
            Bh.test(this.readyState) && (Cc(a), l ? c && c(l) : v || d && d())
        };
        Vd[a] = function(a) {
            l = a
        };
        g.onerror = function() {
            v = !0;
            d && d();
            Cc(a)
        };
        e = ["output=jsonp", "fr=mapapi", "cb=" + gf + "." + a];
        e = b + (-1 === b.indexOf("?") ? "?" : "&") + e.join("&");
        g.src = e;
        Ch && zh(b, function() {
            g.onerror()
        });
        b = document.getElementsByTagName("head")[0];
        b.insertBefore(g, b.firstChild);
        b = null
    }

    function Cc(a) {
        if (a) {
            for (var b = 0, c = Bc.length, d = null; b < c; b++)
                if (Bc[b].name === a) {
                    d = Bc.splice(b, 1)[0];
                    break
                }
            d && (b = d.sender, b.clearAttributes && b.clearAttributes(), b[Td] = b.onerror = null, b.parentNode && b.parentNode.removeChild(b));
            Vd[a] && delete Vd[a]
        }
    }

    function Ya(a) {
        a = Dh(a || {}, {
            complete: null,
            error: null,
            map: null,
            panel: null
        });
        this.setOptions(a)
    }

    function Wd(a) {
        a = Eh(a, ["map", null, "center", null, "radius", 0, "bounds", null, "fillColor", new Dc(255, 255, 255, .5), "strokeColor", new Dc(23, 145, 252, .8), "strokeWeight", 4, "strokeDashStyle", "solid", "zIndex", 0, "cursor", "pointer", "clickable", !0, "simplify", !0, "visible", !0]);
        this.setValues(a);
        N.$require("poly", Fh(this), 1)
    }

    function hf(a) {
        a.filled = !0;
        jf.call(this, a)
    }

    function kf(a) {
        a.filled = !1;
        lf.call(this, a)
    }

    function Xd(a) {
        a = Gh(a, ["icon", null, "shadow", null, "shape", null, "decoration", null, "cursor", "pointer", "title", "", "animation", null, "clickable", !0, "draggable", !1, "visible", !0, "flat", !1, "zIndex", 0, "useDefaults", !0, "height", 0, "map", null, "position", null]);
        this.setValues(a);
        N.$require("marker", Hh(this))
    }

    function Yd() {}

    function mf(a) {
        return a && a.width && a.height ? a : "number" === typeof a ? new nf(a, a) : new nf(of, of)
    }

    function Zd(a) {
        return pf[a] || (pf[a] = Math.pow(2, a))
    }

    function qf(a) { /* PanoramaLabel */
        a = a || {};
        rf.call(this, a);
        Ih("prm")
    }

    function fd(a) {} /*PanoramaLayer*/

    function Yb() { /*PanoramaService*/
        this._svBoundsUrl = Jh;
        this._svXfUrl = Kh;
        this._svBoundsList = null;
        this._svBoundsListRequested = this._svBoundsListError = !1;
        this._pendingCheckBounds = [];
        Lh("prs")
    }

    function Zb(a) { /* DrivingService */
        a = Mh(a, {
            complete: null,
            error: null,
            location: "\u5168\u56fd",
            policy: Nh.REAL_TRAFFIC
        });
        this.setOptions(a);
        N.$require("sv7", Oh(this));
        Ph("drs")
    }

    function gd(a) { /*TransferService*/
        a = Qh(a, {
            complete: null,
            error: null,
            location: "\u5168\u56fd",
            policy: Rh.LEAST_TIME
        });
        this.setOptions(a);
        N.$require("sv6", Sh(this));
        Th("tfs")
    }

    function hd(a) { /*LineService*/
        a = Uh(a, {
            complete: null,
            error: null
        });
        this.setOptions(a);
        N.$require("sv5", Vh(this));
        Wh("sts")
    }

    function id(a) { /* StationService */
        a = Xh(a, {
            complete: null,
            error: null
        });
        this.setOptions(a);
        N.$require("sv4", Yh(this));
        Zh("sts")
    }

    function $d(a) { /* CityService */
        $h("cts");
        var b = this;
        ai.addListenerOnce(this, "dosend_changed", function() {
            N.$require("sv3", bi(b))
        });
        sf.call(b, a)
    }

    function ae(a) { /* Geocoder */
        ci("gcr");
        var b = this;
        di.addListenerOnce(this, "dosend_changed", function() {
            N.$require("sv2", ei(b))
        });
        tf.call(b, a)
    }

    function Ec(a) { /* SearchService*/
        a = fi(a || {}, {
            location: null,
            pageIndex: 0,
            pageCapacity: 10
        });
        gi("srs");
        var b = this;
        hi.addListenerOnce(this, "dosend_changed", function() {
            N.$require("sv1", ii(b))
        });
        uf.call(this, a)
    }

    function kc(a) {} /* TrafficLayer */

    function be(a) { /* GroundOverlay */
        a = ji(a, ["map", null, "imageUrl", null, "bounds", null, "visible", !0, "clickable", !0, "zIndex", 0, "opacity", 1, "cursor", "pointer"]);
        this.setValues(a);
        N.$require("poly", ki(this), 2);
        li("grd")
    }

    function ce(a) { /* Label */
        a = mi(a, ["map", null, "position", null, "content", null, "visible", !0, "title", null, "zIndex", null, "offset", null, "style", null, "clickable", !0]);
        this.setValues(a);
        N.$require("label", ni(this));
        oi("lbl")
    }

    function Fb(a) { /* InfoWindow */
        a = pi(a, ["visible", !1, "content", "", "maxWidth", 760, "maxHeight", 840, "minWidth", 80, "minHeight", 30, "zIndex", 0, "noScroll", !1, "disableAutoPan", !1, "position", null]);
        this.setValues(a);
        vf.call(this, a);
        N.$require("infowin", qi(this));
        ri("ifw")
    }

    function de(a) { /* Circle */
        wf.call(this, a || {});
        si("crc")
    }

    function xf(a) { /* Polygon */
        yf.call(this, a || {});
        ti("plg")
    }

    function zf(a) { /* Polyline */
        Af.call(this, a || {});
        ui("pll")
    }

    function $b(a) { /* Marker */
        Bf.call(this, a);
        vi("mkr")
    }

    function lc(a) { /* ImageMapType */
        a = wi(a || {}, {
            alt: "",
            name: "",
            maxZoom: null,
            minZoom: null,
            projection: new xi,
            radius: 0,
            tileSize: null,
            opacity: 1
        });
        this.setValues(a);
        this.getTileUrl = a.getTileUrl
    }
    var Ma = ["v2", "", "../src/", "../src/theme/", 1, 18, 39.9165275426627, 116.39712896958922, 256, 6378136.49, !1, new Date, !1, !1, "http://sv.map.soso.com/xf", "http://sv.map.soso.com/web_cfg", null, "http://api.map.qq.com/", "http://ping.map.soso.com/stat", "", "", 0],
        Cf = window.soso && soso.maps && soso.maps.__load;
    Cf && Cf(pg);
    var ma = Ma,
        Df = ma[0],
        rg = ma[2],
        Ef = ma[1],
        tg = ma[10],
        Eb = {
            main: [],
            common: ["main"],
            util: ["common"],
            controls: ["util"],
            poly: ["util"],
            label: ["util", "common"],
            pano: ["util", "common"],
            marker: ["util"],
            infowin: ["util"],
            svcs: ["util", "common"],
            sv1: ["svcs"],
            sr1: ["svcs"],
            sv2: ["svcs"],
            sv3: ["svcs"],
            sv4: ["svcs"],
            sv5: ["svcs"],
            sv6: ["svcs"],
            sv7: ["svcs"],
            sr3: ["svcs"],
            sr2: ["svcs"],
            autocomplete: ["svcs"],
            e1: ["common", "main"],
            e2: ["common"],
            e3: ["common"],
            map: ["common"],
            layer: ["map"],
            overlay: ["common", "main"],
            place: ["main"],
            geometry: ["main"],
            convertor: ["main"]
        }, sg = "mods/",
        ug = Ef + "c/=/",
        vg = Ef,
        He = 5,
        Ff = {}, Mb = {}, ee = {}, mb;
    for (mb in Eb)
        if (Eb.hasOwnProperty(mb)) {
            var Fc = Eb[mb];
            Fc[0] && (Ff[Fc[0]] = !0);
            ee[mb] = [];
            Mb[mb] = Mb[mb] || [];
            for (var Gf = Fc.length; Gf--;) {
                var fe = Fc[Gf];
                Mb[fe] ? Mb[fe].push(mb) : Mb[fe] = [mb]
            }
        }
    var nb = {}, Gc = {}, Hf, ge = {};
    window.__cjsload = function(a, b) {
        if (!nb.hasOwnProperty(a)) {
            var c = Eb[a], /* 依赖模块 */
                d = Mb[a],
                e = wg(c.length, function() {
                    var c = b;
                    Hf = a;
                    Ff[a] && (c += ";(0,function(){return eval(arguments[0])})");
                    c = Gc[Eb[a][0]](c);
                    Gc[a] || (Gc[a] = c);
                    nb.hasOwnProperty(a) || (nb[a] = void 0);
                    for (var c = ee[a], e = 0, g = c.length; e < g; e++) c[e](nb[a]); /* invoke callback for the module */
                    for (c = d.length; c--;)
                        if (e = d[c], ge[e]) ge[e]()
                });
            ge[a] = e;
            for (var g = c.length; g--;) nb.hasOwnProperty(c[g]) && e()
        }
    };
    var Uc = {}, Id = [],
        ud, N = { /* module loader */
            $require: function(a, b, c) {
                nb.hasOwnProperty(a) ?
                (a = nb[a], b(void 0 === c ? a : a[c]))
                :
                (
                    Ie(a), ee[a].push(
                        void 0 === c ?
                            b
                            :
                            function(a) {
                                b(a[c])
                            }
                    )
                )
            },
            $initMain: function(a, b) {
                Gc[a] = b;
                Uc[a] = !0;
                nb[a] = void 0
            },
            $setExports: function(a) {
                nb[Hf] = a
            }
        };
    N.$initMain("main", function() {
        return eval(arguments[0])
    });
    var bb = ma[3],
        sb = navigator.userAgent,
        zd = /chrome\/(\d+\.\d+)/i.test(sb) ? +RegExp.$1 : 0, /* isChrome */
        he = function(a, b) {
            b = b || document.createElement("div");
            a = "on" + a;
            var c = a in b;
            b.setAttribute && !c && (b.setAttribute(a, "return;"), c = "function" === typeof b[a]);
            return c
        }, yi = ma[19],
        qa = /msie (\d+\.\d+)/i.test(sb) ? document.documentMode || +RegExp.$1 : 0,
        mc = function(a) {
            return !(!a || !(a.nodeName && 1 == a.nodeType))
        }, ie = function(a) {
            return mc(a) || a == window || a == document
        }, Ad = Object.prototype.hasOwnProperty,
        If = function(a) {
            for (var b in a)
                if (Ad.call(a, b)) return !1;
            return !0
        }, Hc = function(a, b, c) {
            var d = [],
                e = a.length;
            c = c || e;
            for (b = b || 0; b < c; b++) d.push(a[b]);
            return d
        }, Sa = function(a, b, c) {
            for (var d in b)
                if (b.hasOwnProperty(d) && (c || !a.hasOwnProperty(d))) a[d] = b[d];
            return a
        }, Ga = function(a, b) {
            if (2 < arguments.length) {
                var c = Hc(arguments, 2);
                return function() {
                    return a.apply(b || this, 0 < arguments.length ? c.concat(Hc(arguments)) : c)
                }
            }
            return function() {
                return a.apply(b || this, arguments)
            }
        }, ia = function(a, b) {
            for (var c in a)
                if (Ad.call(a, c) && !1 === b(a[c], c)) return !1
        }, Ag = Sa,
        vd = qa,
        B = {
            listeners: {},
            eventObjects: {}
        }, zg = 0;
    B.addListener = function(a, b, c, d) {
        return ie(a) ? /* check a if is DOM */
            B.addDomListener(a, b, c, d)
            :
            new wc(a, b, c, 0)
    };
    B.exist = function(a, b) {
        var c = Vc(a, b);
        return c && !If(c) /* c exist, and is not empty object, If is check hasOwnProperty */
    };
    B.removeListener = function(a) {
        a.remove()
    };
    B.clearListeners = function(a, b) {
        ia(Vc(a, b), function(a, b) {
            a && a.remove()
        })
    };
    B.clearInstanceListeners = function(a) {
        ia(Vc(a), function(a, c) {
            a && a.remove()
        })
    };
    B.trigger = function(a, b) { /* a is object, b is type*/
        if (B.exist(a, b)) {
            var c = Hc(arguments, 2), /* slice 方法包装 */
                d = Vc(a, b); /* 获取事件处理函数数组 */
            ia(d, function(a) { /* 迭代数组, 触发函数 */
                a && a.handler.apply(a.instance, c)
            })
        } else if (ie(a) && he(b, a))
            if (a.fireEvent) try {
                a.fireEvent("on" + b)
            } catch (e) {
            }
        else a.dispatchEvent && (d = document.createEvent("Events"), d.initEvent(b, !0, !0), a.dispatchEvent(d))
    };
    B.addDomListener = function(a, b, c, d) {
        var e = 0;
        a.addEventListener ? (e = d ? 4 : 1, a.addEventListener(b, c, d), c = new wc(a, b, c, e)) : a.attachEvent ? (c = new wc(a, b, c, d ? 3 : 2), a.attachEvent("on" + b, Bg(c)), d && a.setCapture && a.setCapture()) : (a["on" + b] = c, c = new wc(a, b, c, 5));
        return c
    };
    B.addDomListenerOnce = function(a, b, c, d) {
        var e = B.addDomListener(a, b, function() {
            e.remove();
            return c.apply(this, arguments)
        }, d);
        return e
    };
    B.bindDom = function(a, b, c, d) {
        c = Eg(d, c);
        return B.addDomListener(a, b, c)
    };
    B.bind = function(a, b, c, d, e) {
        return e ? B.addListenerOnce(a, b, Ga(c, d)) : B.addListener(a, b, Ga(c, d))
    };
    B.addListenerOnce = function(a, b, c) {
        var d = B.addListener(a, b, function() {
            d.remove();
            return c.apply(this, arguments)
        });
        return d
    };
    B.forward = function(a, b, c) {
        return B.addListener(a, b, Le(b, c))
    };
    B.forwardDom = function(a, b, c, d) {
        return B.addDomListener(a, b, Le(b, c, !d))
    };
    B.unload = function() {
        var a = B.listeners;
        ia(a, function(a) {
            a && a.remove()
        });
        B.listeners = {};
        (a = window.CollectGarbage) && a()
    };
    var Fg = 0;
    wc.prototype.remove = function() {
        if (this.instance) {
            switch (this.browser) {
                case 1:
                    this.instance.removeEventListener(this.eventName, this.handler, !1);
                    break;
                case 4:
                    this.instance.removeEventListener(this.eventName, this.handler, !0);
                    break;
                case 2:
                    this.instance.detachEvent("on" + this.eventName, this.bindHandler);
                    break;
                case 3:
                    this.instance.detachEvent("on" + this.eventName, this.bindHandler);
                    this.instance.releaseCapture && this.instance.releaseCapture();
                    break;
                case 5:
                    this.instance["on" + this.eventName] = null
            }
            delete Je(this.instance, this.eventName)[this.id];
            this.bindHandler = this.handler = this.instance = null;
            delete B.listeners[this.id]
        }
    };
    var e = B, /* event */
        Wc = [],
        Jf = function(a) {
            var b = new Image;
            b.onload = b.onerror = b.onabort = Gg;
            Wc.push(b);
            b.src = a
        }, Kf = ma[18],
        Hg = Jf,
        Ne = Kf + "?",
        Me = 1024 - Ne.length,
        Yc = [],
        je = 0,
        Xc = null;
    e.addDomListener(window, "beforeunload", function() {
        wd()
    });
    var Lf = function(a, b, c) {
        a && (a = "add=" + [a, b.join("|"), c || 1].join("|"), Yc.push(a), je += a.length + 1, je > Me ? wd() : Xc || (Xc = setTimeout(wd, 5e3)))
    }, Mf = ma[21],
        Nf = {}, jd = function(a) {
            Nf[a] || (Nf[a] = 1, Lf(500047, [a, location.hostname], 1))
        }, n = function(a) {
            return null === a
        }, Of = window.soso || (window.soso = {}),
        ke = Of.maps || (Of.maps = {}),
        Ic = function(a, b) {
            if (null === b) null === ke[a] || delete ke[a];
            else return ke[a] = b, ["soso", "maps", a]
        }, le = { /* ScaleControlStyle */
            DEFAULT: 0
        }, ob = { /* ControlPosition */
            TOP_LEFT: 1,
            TOP_CENTER: 2,
            TOP: 2,
            TOP_RIGHT: 3,
            LEFT_CENTER: 4,
            LEFT_TOP: 5,
            LEFT: 5,
            LEFT_BOTTOM: 6,
            RIGHT_TOP: 7,
            RIGHT: 7,
            RIGHT_CENTER: 8,
            RIGHT_BOTTOM: 9,
            BOTTOM_LEFT: 10,
            BOTTOM_CENTER: 11,
            BOTTOM: 11,
            BOTTOM_RIGHT: 12,
            CENTER: 13
        }, Ha = function(a) {
            return "[object Array]" == Object.prototype.toString.call(a)
        }, Ig = Ha,
        Pf = Oe,
        Gb = function(a, b, c) {
            b = Pf(b, !c);
            return Sa(b, a, !0)
        }, nc = ea.prototype;
    nc.getWidth = function() {
        return this.width
    };
    nc.getHeight = function() {
        return this.height
    };
    nc.toString = function() {
        return this.width + ", " + this.height
    };
    nc.equals = function(a) {
        return !a ? !1 : a.width == this.width && a.height == this.height
    };
    nc.clone = function() {
        return new ea(this.width, this.height)
    };
    var Jg = Gb,
        Kg = le,
        Lg = jd,
        Qf = Pe.prototype;
    Qf.setMap = function(a) {
        this.map && (this.map.setOptions({
            scaleControl: !1
        }), this.map = void 0);
        a && (this.map = a, this.setOptions(a.get("scaleControlOptions")))
    };
    Qf.setOptions = function(a) {
        a = a || {};
        this.map.setOptions({
            scaleControl: !0,
            scaleControlOptions: {
                position: a.align || a.position
            }
        })
    };
    var Hb = { /* ZoomControlStyle */
        DEFAULT: 0,
        LARGE: 1,
        SMALL: 2
    }, Rf = { /* NavigationControlStyle */
            DEFAULT: 0,
            SMALL: 1,
            ZOOM_PAN: 2
        }, Ng = ea,
        Mg = Gb,
        yd = Rf,
        Og = jd,
        Sf = xd.prototype;
    Sf.setMap = function(a) {
        this.map && (this.map.setOptions({
            zoomControl: !1,
            panControl: !1
        }), this.map = void 0);
        a && (this.map = a, this.setOptions(this.opts))
    };
    Sf.setOptions = function(a) {
        a = a || {};
        switch (a.style) {
            case yd.SMALL:
                this.map.setOptions({
                    zoomControl: !0,
                    zoomControlOptions: {
                        position: a.position || a.align,
                        style: Hb.SMALL,
                        zoomTips: a.zoomTips
                    },
                    panControl: !1
                });
                break;
            case yd.ZOOM_PAN:
                this.map.setOptions({
                    zoomControl: !0,
                    zoomControlOptions: {
                        style: Hb.SMALL,
                        position: a.position || a.align,
                        zoomTips: a.zoomTips
                    },
                    panControl: !0,
                    panControlOptions: {
                        position: a.position || a.align
                    }
                });
                break;
            default:
                this.map.setOptions({
                    zoomControl: !0,
                    zoomControlOptions: {
                        style: Hb.DEFAULT,
                        position: a.position || a.align,
                        zoomTips: a.zoomTips
                    },
                    panControl: !0,
                    panControlOptions: {
                        position: a.position || a.align
                    }
                })
        }
    };
    var K = function(a, b) {
        for (var c = 0, d = a.length; c < d; ++c)
            if (!1 === b(a[c], c)) return !1
    }, g = function(a, b) { /* inhert function, set a.prototype inhert from b.prototype */
            function c() {}
            c.prototype = b.prototype;
            a.prototype = new c
        }, Bd = function(a) {
            return "[object Object]" === Object.prototype.toString.apply(a)
        }, Tf = {}, Nb = function(a) { /* toCamelcase */
            return Tf[a] || (Tf[a] = a.substr(0, 1).toUpperCase() + a.substr(1))
        }, Uf = function(a) {
            if (Object.keys) return Object.keys(a);
            var b = [];
            ia(a, function(a, d) {
                b.push(d)
            });
            return b
        }, Ob = function(a) {
            a = a || window.event;
            a.returnValue = !1;
            a.preventDefault && a.preventDefault()
        };
    pb.prototype.stop = function() {
        if (this.__event__) {
            var a = this.__event__;
            Ob(a);
            a = a || window.event;
            a.cancelBubble = !0;
            a.stopPropagation && a.stopPropagation()
        }
    };
    var Jd = e,
        Pg = pb,
        Vf = {}, kd = {}, Qe = {}, Za = l.prototype; /* MVCObject.prototype */
    Za.get = function(a) {
        var b = ic(this)[a];
        if (b) {
            a = b.targetKey;
            var b = b.target,
                c = Vf[a] || (Vf[a] = "get" + Nb(a));
            return b[c] ? b[c]() : b.get(a) /* 查看是否有get方法可以调用. */
        }
        return this[a]
    };
    Za.set = function(a, b) {
        var c = ic(this);
        if (c.hasOwnProperty(a)) {
            var d = c[a],
                c = d.targetKey,
                d = d.target,
                e = kd[c] || (kd[c] = "set" + Nb(c));
            d[e] ? d[e](b) : d.set(c, b)
        } else this[a] = b, Ub(this, a) /* 到达绑定链的顶级, 设置属性, 同时调用 {property}_changed 函数*/
    };
    Za.notify = function(a) {
        var b = ic(this);
        b.hasOwnProperty(a) ? (a = b[a], a.target.notify(a.targetKey)) : Ub(this, a)
    };
    Za.setValues = function(a) {
        for (var b in a) {
            var c = a[b], /* value */
                d = kd[b] || (kd[b] = "set" + Nb(b)); /* Nb is used to camelcase */
            this[d] ?
                this[d](c) /* has a method */
                :
                this.set(b, c) /* have no method */
        }
    };
    Za.setOptions = Za.setValues;
    Za.changed = function(a) {
        return function() {}
    };
    Za.bindTo = function(a /* key */, b/* target */, c/* target key*/, d/* notify */) {
        c = c || a;
        var e = this;
        e.unbind(a, !0);
        $c(e)[a] = Jd.addListener(b, Zc(c.toLowerCase()), function() {
            Ub(e, a)
        });
        Qg(e, a, b, c, d)
    };
    Za.bindsTo = function(a, b, c, d) {
        a = Ha(a) ? a : Uf(a);
        c = c || [];
        for (var e = 0, g = a.length; e < g; e++) this.bindTo(a[e], b, c[e] || null, d)
    };
    Za.unbind = function(a, b) {
        var c = $c(this)[a];
        c && (delete $c(this)[a], Jd.removeListener(c), c = b && this.get(a), delete ic(this)[a], b ? this[a] = c : Ub(this, a))
    };
    Za.unbindAll = function(a) {
        a || (a = [], ia($c(this), function(b, c) {
            a.push(c)
        }));
        K(a, Ga(this.unbind, this))
    };
    var Rg = K,
        Tg = jd,
        Sg = ["position", "style", "mapTypeIds", "align"];
    g(Re, l);
    var s = function() {
        var a = arguments,
            b = a.length;
        return function() {
            for (var c = 0; c < b; ++c)
                if (a[c].apply(this, arguments)) return !0;
            return !1
        }
    }, Oa = function(a) { /* isBoolean */
            return "boolean" === typeof a
        }, O = function(a) { /* isNumber */
            return "[object Number]" == Object.prototype.toString.call(a) && isFinite(a)
        }, F = function(a) {
            return function(b) {
                return b instanceof a
            }
        }, R = function(a) { /* isString */
            return "[object String]" == Object.prototype.toString.call(a)
        }, rb = function(a, b) {
            throw Error("Invalid value or type for property <" + (a + ("> \uff1a" + b)))
        }, Wg = rb,
        Da = function(a, b) {
            for (var c = 0, d = b && b.length; c < d; c += 2) {
                var e = b[c],
                    g = b[c + 1];
                a["get" + Nb(e)] = Ug(e); /*sign functions, Ug is to reduce function */
                g && (a["set" + Nb(e)] = Vg(e, g))
            }
        }, zi = function(a, b) {
            for (var c = [a]; c.length;) {
                var d = c.shift();
                b(d);
                for (d = d.firstChild; d; d = d.nextSibling) 1 == d.nodeType && c.push(d)
            }
        }, me = function(a) {
            zi(a, function(a) {
                e.clearInstanceListeners(a)
            })
        }, ac = function(a, b) { /* 初始化dom作用 */
            for (var c; c = a.firstChild;)!b && 3 !== c.nodeType && me(c), a.removeChild(c)
        }, bc = function(a) {
            return "undefined" === typeof a
        }, Jc = { /* MapTypeId */
            ROADMAP: "roadmap",
            HYBRID: "hybrid",
            SATELLITE: "satellite"
        }, Ai = ma[4],
        Bi = ma[5],
        Wf = [ma[6], ma[7]],
        xb = ma[9],
        aa = function(a) {
            return a * (Math.PI / 180)
        }, oc = function(a, b, c) {
            null != b && (a = Math.max(a, b));
            null != c && (a = Math.min(a, c));
            return a
        }, pc = function(a, b, c) {
            if (a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY) return b;
            if (a >= b && a <= c) return a;
            c -= b;
            return (a % c + c - b) % c + b
        }, Yg = pc,
        Xg = oc,
        Xf = function(a, b) {
            var c = Math.pow(10, b);
            return Math.round(a * c) / c
        }, Se = 85.051128,
        yb = I.prototype;
    yb.toString = function() {
        return this.lat + ", " + this.lng
    };
    yb.equals = function(a) {
        return !a ? !1 : 1e-9 >= Math.abs(this.lat - a.lat) && 1e-9 >= Math.abs(this.lng - a.lng)
    };
    yb.getLat = function() {
        return this.lat
    };
    yb.getLng = function() {
        return this.lng
    };
    yb.toUrlValue = function(a) {
        a = a || 6;
        return Xf(this.lng, a) + "," + Xf(this.lat, a)
    };
    yb.clone = function() {
        return new I(this.lat, this.lng, !0)
    };
    yb.distanceTo = function(a) {
        var b = aa(this.getLat()) - aa(a.getLat()),
            c = aa(this.getLng()) - aa(a.getLng()),
            b = Math.sin(b / 2) * Math.sin(b / 2) + Math.cos(aa(a.getLat())) * Math.cos(aa(this.getLat())) * Math.sin(c / 2) * Math.sin(c / 2),
            b = 2 * Math.atan2(Math.sqrt(b), Math.sqrt(1 - b));
        return xb * b
    };
    var $a = Te.prototype;
    $a.isEmpty = function() {
        return 360 == this.minX - this.maxX
    };
    $a.intersects = function(a) {
        var b = this.minX,
            c = this.maxX;
        return this.isEmpty() || a.isEmpty() ? !1 : b > c ? a.minX > a.maxX || a.minX <= c || a.maxX >= b : a.minX > a.maxX ? a.minX <= c || a.maxX >= b : a.minX <= c && a.maxX >= b
    };
    $a.contains = function(a) {
        -180 == a && (a = 180);
        var b = this.minX,
            c = this.maxX;
        return this.minX > this.maxX ? (a >= b || a <= c) && !this.isEmpty() : a >= b && a <= c
    };
    $a.extend = function(a) {
        this.contains(a) || (this.isEmpty() ? this.minX = this.maxX = a : this.distance(a, this.minX) < this.distance(this.maxX, a) ? this.minX = a : this.maxX = a)
    };
    $a.equals = function(a) {
        return this.isEmpty() ? a.isEmpty() : 1e-9 >= Math.abs(a.minX - this.minX) % 360 + Math.abs(a.maxX - this.maxX) % 360
    };
    $a.center = function() {
        var a = (this.minX + this.maxX) / 2;
        this.minX > this.maxX && (a = pc(a, -180, 180));
        return a
    };
    $a.distance = function(a, b) {
        var c = b - a;
        return 0 <= c ? c : b + 180 - (a - 180)
    };
    var qc = Ue.prototype;
    qc.isEmpty = function() {
        return this.minY > this.maxY
    };
    qc.intersects = function(a) {
        var b = this.minY,
            c = this.maxY;
        return b <= a.minY ? a.minY <= c && a.minY <= a.maxY : b <= a.maxY && b <= c
    };
    qc.contains = function(a) {
        return a >= this.minY && a <= this.maxY
    };
    qc.extend = function(a) {
        this.isEmpty() ? this.maxY = this.minY = a : a < this.minY ? this.minY = a : a > this.maxY && (this.maxY = a)
    };
    qc.equals = function(a) {
        return this.isEmpty() ? a.isEmpty() : 1e-9 >= Math.abs(a.minY - this.minY) + Math.abs(this.maxY - a.maxY)
    };
    qc.center = function() {
        return (this.maxY + this.minY) / 2
    };
    var We = pc,
        Ve = oc,
        ad = Ue,
        xc = Te,
        Ea = xa.prototype;
    Ea.isEmpty = function() {
        return this.lat.isEmpty() || this.lng.isEmpty()
    };
    Ea.getSouthWest = function() {
        return new I(this.lat.minY, this.lng.minX, !0)
    };
    Ea.getNorthEast = function() {
        return new I(this.lat.maxY, this.lng.maxX, !0)
    };
    Ea.getCenter = function() {
        return new I(this.lat.center(), this.lng.center())
    };
    Ea.intersects = function(a) {
        return this.lat.intersects(a.lat) && this.lng.intersects(a.lng)
    };
    Ea.contains = function(a) {
        var b = this.getSouthWest,
            c = this.getNorthEast,
            d;
        return a instanceof xa ? (d = a.getSouthWest(), a = a.getNorthEast(), d.lat >= b.lat && a.lat <= c.lat && d.lng >= b.lng && a.lng <= c.lng) : this.lat.contains(a.getLat()) && this.lng.contains(a.getLng())
    };
    Ea.extend = function(a) {
        if (this.isEmpty()) {
            var b = a.getLat();
            a = a.getLng();
            this.lat = new ad(b, b);
            this.lng = new xc(a, a)
        } else this.lat.extend(a.getLat()), this.lng.extend(a.getLng());
        return this
    };
    Ea.union = function(a) {
        if (!a.isEmpty()) return this.extend(a.getNorthEast()), this.extend(a.getSouthWest()), this
    };
    Ea.equals = function(a) {
        return !a ? !1 : this.lat.equals(a.lat) && this.lng.equals(a.lng)
    };
    Ea.clone = function() {
        return new xa(this.getSouthWest(), this.getNorthEast())
    };
    Ea.toString = function() {
        return this.getSouthWest() + ", " + this.getNorthEast()
    };
    Ea.toUrlValue = function() {
        return this.getSouthWest().toUrlValue() + ", " + this.getNorthEast().toUrlValue()
    };
    g(bd, l);
    bd.prototype.set = function(a, b) {
        if (null != b && (!b || !b.tileSize || !b.tileSize.width || !b.tileSize.height)) throw Error("\u5b9e\u73b0 soso.maps.MapType \u6240\u9700\u7684\u503c");
        return l.prototype.set.apply(this, arguments)
    };
    var $g = 0,
        Kc = Xe.prototype;
    Kc.insert = function(a) {
        var b = this.items,
            c = this.hash(a);
        b[c] || (++this.length, b[c] = a, e.trigger(this, "insert", a))
    };
    Kc.remove = function(a) {
        var b = this.items,
            c = this.hash(a);
        b[c] && (--this.length, delete b[c], e.trigger(this, "remove", a))
    };
    Kc.contains = function(a) {
        return !!this.items[this.hash(a)]
    };
    Kc.forEach = function(a) {
        var b = this.items,
            c;
        for (c in b) b.hasOwnProperty(c) && a.call(this, b[c])
    };
    g(Vb, l);
    var Ta = Vb.prototype;
    Ta.getAt = function(a) {
        return this.elems[a]
    };
    Ta.forEach = function(a) {
        for (var b = 0, c = this.get("length"); b < c && !1 !== a(this.elems[b], b); ++b);
    };
    Ta.setAt = function(a, b) {
        var c = this.elems.splice(a, 1, b);
        e.trigger(this, "remove_at", c, a);
        e.trigger(this, "insert_at", b, a)
    };
    Ta.insertAt = function(a, b) {
        this.elems.splice(a, 0, b);
        this.set("length", this.elems.length);
        e.trigger(this, "insert_at", b, a)
    };
    Ta.removeAt = function(a) {
        var b = this.get("length");
        if (b > a) {
            var c = this.elems[a];
            this.elems.splice(a, 1);
            this.set("length", b - 1);
            e.trigger(this, "remove_at", c, a);
            return c
        }
    };
    Ta.push = function(a) {
        this.insertAt(this.elems.length, a);
        return this.elems.length
    };
    Ta.pop = function() {
        return this.removeAt(this.elems.length - 1)
    };
    Ta.exists = function(a) {
        if (a)
            for (var b = 0; b < this.elems.length; b++)
                if (a == this.elems[b]) return !0;
        return !1
    };
    Ta.remove = function(a) {
        for (var b = 0; b < this.elems.length; b++)
            if (a == this.elems[b]) return this.removeAt(b)
    };
    Ta.clear = function() {
        for (var a = this.elems.length; a--;) this.removeAt(0)
    };
    Ta.getArray = function() {
        return this.elems
    };
    Da(Ta, ["length", 0]);
    var Ye = l,
        bh = Vb,
        ch = Xe,
        Od = ia,
        dh = bd,
        eh = ac,
        ah = ob;
    g(Na, Ye);
    var Ia = Na.prototype;
    Da(Na.prototype, ["projection", null, "bounds", null, "status", null, "boundary", s(F(xa), n), "center", F(I), "zoom", O, "mapTypeId", R]);
    Ia.o = function() {
        return this.V
    };
    Ia.getContainer = function() {
        return this._container
    };
    Ia.setZoom = function(a, b) {
        var c = a;
        !1 == !! b && (c = Math.round(c));
        O(c) || rb("zoom", c);
        var d = this.get("minZoom"),
            e = this.get("maxZoom"),
            c = oc(c, d, e);
        this.set("zoom", c)
    };
    Ia.panBy = vb("pan_by");
    Ia.panTo = vb("pan_to");
    Ia.flyTo = vb("fly_to");
    Ia.zoomBy = vb("zoom_by");
    Ia.zoomTo = vb("zoom_to");
    Ia.fitBounds = vb("fit_bounds");
    var gh = { /* default options */
        center: new I(Wf[0], Wf[1]),
        zoom: 9,
        mapTypeId: Jc.ROADMAP,
        maxZoom: Bi,
        minZoom: Ai,
        backgroundColor: "#e5e3df",
        draggableCursor: "grab",
        draggingCursor: "grabbing",
        draggable: !0,
        scrollwheel: !0,
        keyboardShortcuts: !0,
        disableTouchZoom: !1,
        disableDoubleClickZoom: !1,
        disableDefaultUI: !1,
        animation: !0,
        autoPan: !1,
        viewWidth: 0,
        viewHeight: 0,
        boundary: null
    }, Ci = /-./g,
        Di = function(a) {
            return a.charAt(1).toUpperCase()
        }, Yf = function(a, b) {
            b = b || {};
            return function(c) {
                return Ad.call(b, c) ? b[c] : b[c] = a(c)
            }
        }, Zf = {};
    Zf["float"] = qa ? "styleFloat" : "cssFloat";
    var $f = Yf(function(a) {
        return a.replace(Ci, Di)
    }, Zf),
        V = function(a, b, c) {
            a.style[$f(b)] = c
        }, J = function(a, b, c, d, e) {
            a = document.createElement(a || "div");
            d && (a.style.cssText = d);
            void 0 != c && V(a, "z-index", c);
            b && !e && b.appendChild(a);
            return a
        }, ld = function() {
            return +(new Date)
        }, ne = function(a, b, c) {
            var d = a.length;
            c = c || 0;
            for (0 > c && (c += d); c < d; c++)
                if (a[c] === b) return c;
            return -1
        }, oe = {
            anims: [],
            timer: null,
            add: function(a) {
                a._startTime = +(new Date); - 1 === ne(this.anims, a) && this.anims.push(a);
                null === this.timer && (this.timer = setInterval(this.nextFrame, 16))
            },
            remove: function(a) {
                var b = this.anims;
                K(this.anims, function(c, d) {
                    if (a === c) return delete a._startTime, b.splice(d, 1), !1
                });
                0 === b.length && (clearInterval(this.timer), this.timer = null)
            },
            nextFrame: function() {
                var a = +(new Date),
                    b = [],
                    c = null;
                K(oe.anims.concat(), function(d) {
                    if (d._startTime) {
                        b.push(d);
                        c = +(new Date);
                        var e = a - d._startTime,
                            g = !1;
                        e >= d.duration && (e = d.duration, g = !0);
                        d.set("current", e);
                        d.onEnterFrame(e);
                        g ? d.stop() : d.status || (d.status = 1);
                        d._frameDuration = +(new Date) - c
                    }
                });
                var d = +(new Date) - a;
                K(b, function(a) {
                    a._startTime && (a.onExitFrame(a._frameDuration, d), delete a._frameDuration)
                })
            }
        };
    g(Wb, l);
    var zb = Wb.prototype;
    zb.start = function() {
        function a() {
            b.onStart();
            b.status = 0;
            oe.add(b);
            delete b._delayTimer
        }
        this.stop(!0);
        var b = this;
        this.delay ? b._delayTimer = setTimeout(a, b.delay) : a()
    };
    zb.stop = function(a) {
        this._delayTimer && (clearTimeout(this._delayTimer), delete this._delayTimer);
        oe.remove(this);
        this.status = -1;
        if (!a) this.onEnd()
    };
    zb.getStatus = function() {
        return this.status
    };
    zb.onStart = function() {};
    zb.onEnterFrame = function() {};
    zb.onExitFrame = function() {};
    zb.onEnd = function() {};
    var cc = function(a) {
        if (qa) a = [a.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft), a.clientY + (document.documentElement.scrollTop || document.body.scrollTop)];
        else if (a.touches) {
            var b = null;
            0 < a.targetTouches.length ? b = a.targetTouches[0] : 0 < a.changedTouches.length && (b = a.changedTouches[0]);
            a = [b.pageX, b.pageY]
        } else a = [a.pageX, a.pageY];
        return a
    }, pe = /android\s(\d+\.\d)/i.test(sb) ? +RegExp.$1 : 0,
        ag = /iPhone\sOS\s(\d[_\d]*)/i.test(sb) ? +parseFloat(RegExp.$1.replace(/_/g, ".")) : 0,
        bg = /iPad.*OS\s(\d[_\d]*)/i.test(sb) ? +parseFloat(RegExp.$1.replace(/_/g, ".")) : 0,
        cg = "ontouchstart" in window || bg || ag || pe,
        qe = /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(sb) && !/chrome/i.test(sb) ? +(RegExp.$1 || RegExp.$2) : 0,
        dg = /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(sb) ? +(RegExp.$6 || RegExp.$2) : 0,
        Ib = function(a) {
            if (null === a.parentNode || "none" == a.style.display) return [0, 0, 0, 0];
            var b = null,
                c = 0,
                d = 0,
                e = a.offsetWidth,
                g = a.offsetHeight;
            if (a.getBoundingClientRect && !cg) b = a.getBoundingClientRect(), a = Math.max(document.documentElement.scrollTop, document.body.scrollTop), c = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), c = b.left + c, d = b.top + a;
            else {
                if (document.getBoxObjectFor) b = document.getBoxObjectFor(a), c = a.style.borderLeftWidth ? parseInt(a.style.borderLeftWidth) : 0, d = a.style.borderTopWidth ? parseInt(a.style.borderTopWidth) : 0, c = b.x - c, d = b.y - d;
                else {
                    c = a.offsetLeft;
                    d = a.offsetTop;
                    b = a.offsetParent;
                    if (b != a)
                        for (; b;) c += b.offsetLeft, d += b.offsetTop, b = b.offsetParent;
                    if (dg || qe && "absolute" == a.style.position) c -= document.body.offsetLeft, d -= document.body.offsetTop
                }
                for (b = a.parentNode ? a.parentNode : null; b && "BODY" != b.tagName && "HTML" != b.tagName;) c -= b.scrollLeft, d -= b.scrollTop, b = b.parentNode ? b.parentNode : null
            }
            return [c, d, e, g]
        }, hh = cg;
    g(jc, l);
    var Lc = jc.prototype;
    Lc.start = function() {
        this.set("tracking", !0)
    };
    Lc.stop = function() {
        this.set("tracking", !1)
    };
    Lc.addListener = function(a, b) {
        return e.addListener(this, a, b)
    };
    Lc.removeListener = function(a) {
        return e.removeListener(a)
    };
    Lc.clearAllListener = function() {
        e.clearInstanceListeners(this)
    };
    var eb = H.prototype;
    eb.getX = function() {
        return this.x
    };
    eb.getY = function() {
        return this.y
    };
    eb.toString = function() {
        return this.x + ", " + this.y
    };
    eb.equals = function(a) {
        return !a ? !1 : a.x == this.x && a.y == this.y
    };
    eb.distanceTo = function(a) {
        return Math.sqrt(Math.pow(this.x - a.x, 2) + Math.pow(this.y - a.y, 2))
    };
    eb.minus = function(a) {
        return new H(this.x - a.x, this.y - a.y)
    };
    eb.plus = function(a) {
        return new H(this.x + a.x, this.y + a.y)
    };
    eb.divide = function(a) {
        return new H(this.x / a, this.y / a)
    };
    eb.multiply = function(a) {
        return new H(this.x * a, this.y * a)
    };
    eb.clone = function() {
        return new H(this.x, this.y)
    };
    var $e = l,
        qb = e,
        yc = K,
        ih = Wb; /* ih == Wb, animation constructor */
    wb.prototype.add = function(a) {
        a.mvcRN || (a.mvcRN = ++this.count, this.views.push(a), !this.isRun && 0 < this.count && this.start())
    };
    wb.prototype.renderOne = function(a) {
        delete a.mvcRN;
        a.draw()
    };
    wb.prototype.renderViews = function() {
        for (var a = null, b = this.views; a = b.shift();) a.mvcRN && this.renderOne(a);
        this.count = 0
    };
    wb.prototype.start = function() {
        this.isRun = !0;
        var a = this,
            b = this.anim,
            c = this.views;
        b.onEnterFrame = function() {
            c[0] ? a.renderViews() : a.stop()
        };
        b.onEnd = function() {
            a.isRun && b.start()
        };
        b.delay = 10;
        b.start()
    };
    wb.prototype.stop = function() {
        this.isRun = !1;
        var a = this.anim;
        delete a.onEnd;
        a.stop()
    };
    var eg = new wb;
    g(ya, $e);
    var Ua = ya.prototype;
    Ua.redraw = function(a) {
        a ? this.forcedraw() : eg.add(this)
    };
    Ua.forcedraw = function() {
        eg.renderOne(this)
    };
    Ua.draw = function() {};
    Ua.dispose = function() {
        qb.removeListener(this._fdrawListener)
    };
    Ua.triggerEvents = function(a, b, c) {
        var d = this._model;
        if (d) {
            if (ie(b))
                for (var e = new jc(b), g = this, l = 0, v = a.length; l < v; l++) e.addListener(a[l], function(a, b) {
                    return function(c) {
                        var d = g.getMouseContainerPixel(c),
                            e = g.getMouseEventLatLng(c, d);
                        c = new pb(e, d, b, a, c);
                        qb.trigger(a, b, c)
                    }
                }(d, a[l]));
            if (null == b || b == d) {
                b = new pb;
                e = 0;
                for (l = c.length; e < l; e += 2) b[c[e]] = c[e + 1];
                b.target = d;
                b.type = a;
                qb.trigger(d, a, b)
            }
        }
    };
    Ua.triggerMapsEvent = function(a, b) {
        var c = null,
            d = null,
            e = this._model;
        e && (b && (c = this.getMouseContainerPixel(b), d = this.getMouseEventLatLng(b, c)), c = new pb(d, c, a, e, b), qb.trigger(e, a, c))
    };
    Ua.triggerCustomEvent = function(a, b, c) {
        var d = null,
            e = this._model;
        if (e) {
            if (b) {
                var g = e.get("map") || e;
                g && (g = g.get("mapCanvasProjection")) && (d = g.fromLatLngToContainerPixel(b))
            }
            var l = new pb(b, d, a, e);
            c && ia(c, function(a, b) {
                l[b] = a
            });
            qb.trigger(e, a, l)
        }
    };
    Ua.forwardEvents = function(a) {
        var b = this._model;
        if (b) {
            b._eventTaget || (b._eventTaget = {});
            for (var c = 0, d = a.length; c < d; c++) qb.forward(b._eventTaget, a[c], this)
        }
    };
    Ua.getMouseEventLatLng = function(a, b) {
        var c = this._model;
        if (c && (c = c.get("map") || c)) return b = b || this.getMouseContainerPixel(a), (c = c.get("mapCanvasProjection")) && c.fromContainerPixelToLatLng(b, null, !0)
    };
    Ua.getMouseEventPoint = function(a) {
        var b = this._model;
        if (b && (b = b.get("map") || b)) return a = this.getMouseContainerPixel(a), b.get("mapCanvasProjection").fromContainerPixelToPoint(a)
    };
    Ua.getMouseContainerPixel = function(a) {
        var b = this._model;
        if (b) return b = b.get("map") || b, b = b.get("mapContainer") || b.getContainer(), b = Ib(b), a = cc(a), new H(a[0] - b[0], a[1] - b[1])
    };
    Ua.getModel = function() {
        return this._model
    };
    Ua.keysReady = function(a, b, c) {
        Ze(this, a, b, function(a, b) {
            var e = !0;
            yc(a, function(a, d) {
                if (!(c && Oa(c(a, b[d])) ? 0 : null !== a && !bc(a))) return e = !1
            });
            return e
        })
    };
    Ua.keysUnReady = function(a, b, c) {
        Ze(this, a, b, function(a, b) {
            var e = !1;
            yc(a, function(a, d) {
                var g;
                if (c && Oa(g = c(a, b[d])) ? g : null === a || bc(a)) return e = !0, !1
            });
            return e
        })
    };
    var jh = jd;
    g(cd, ya);
    var fg = cd.prototype;
    fg.changed = function(a) {
        this.a[a] = !0;
        this.redraw()
    };
    fg.draw = function() {
        var a = this.get("map"),
            b = this.get("content"),
            c = this.get("visible"),
            d = this.a,
            g = this.l;
        this.a = {};
        if (!a || !b || !1 === c) a = this.e, g && a && g.remove(a), af(this.e);
        else {
            var l = this.get("align") || ob.TOP_CENTER;
            (c = this.e) || (c = this.e = J("div"));
            if (d.map || d.align) {
                var s = this.e;
                g && s && g.remove(s);
                g = this.l = a.controls[l];
                g.push(c)
            }
            d.content && (af(c), R(b) ? c.innerHTML = b : c.appendChild(b));
            d.margin && (a = this.get("margin") || new ea(0, 0), c.style.margin = [a.getWidth() + "px", a.getHeight() + "px", a.getWidth() + "px", a.getHeight() + "px"].join(" "));
            c && e.trigger(c, "resize")
        }
    };
    Da(cd.prototype, ["map", s(F(Na), n), "content", s(R, mc), "align", O, "margin", F(ea), "zIndex", O, "visible", Oa]);
    var Ab = ma[17],
        Pa = {
            Copyright: {
                prefix: ["\u00a9" + ma[11].getFullYear() + " Tencent", "GS(2012)6001\u53f7"],
                dataPrefix: "Data\u00a9",
                home: "\u5230SOSO\u5730\u56fe\u67e5\u770b\u6b64\u533a\u57df"
            },
            MapType: {
                ROADMAP: {
                    name: "\u5730\u56fe",
                    alt: "\u663e\u793a\u8857\u9053\u5730\u56fe"
                },
                SATELLITE: {
                    name: "\u536b\u661f",
                    alt: "\u663e\u793a\u536b\u661f\u5730\u56fe"
                },
                HYBRID: {
                    name: "\u6df7\u5408",
                    alt: "\u663e\u793a\u5e26\u6709\u8857\u9053\u540d\u79f0\u7684\u56fe\u50cf"
                },
                TRAFFIC: {
                    name: "\u8def\u51b5",
                    alt: "\u663e\u793a\u5b9e\u65f6\u8def\u51b5"
                }
            },
            Navigation: {
                zoomIn: "\u653e\u5927",
                zoomOut: "\u7f29\u5c0f",
                left: "\u5411\u5de6\u5e73\u79fb",
                right: "\u5411\u53f3\u5e73\u79fb",
                up: "\u5411\u4e0a\u5e73\u79fb",
                down: "\u5411\u4e0b\u5e73\u79fb",
                ruler: "\u5355\u51fb\u7f29\u653e",
                slide: "\u62d6\u52a8\u7f29\u653e",
                zoomTips: {
                    17: "\u8857",
                    11: "\u5e02",
                    8: "\u7701",
                    4: "\u56fd"
                }
            },
            Scale: {
                m: "\u7c73",
                km: "\u516c\u91cc",
                mile: "\u82f1\u91cc",
                feet: "\u82f1\u5c3a"
            },
            Time: {
                msec: "\u6beb\u79d2",
                sec: "\u79d2",
                min: "\u5206\u949f",
                hour: "\u5c0f\u65f6"
            },
            Transfer: ["\u4e58\u5750", "\u7ecf\u8fc7", "\u7ad9", "\u5230\u8fbe", "\u7ec8\u70b9"],
            Direction: "\u4e1c \u4e1c\u5317 \u5317 \u897f\u5317 \u897f \u897f\u5357 \u5357 \u4e1c\u5357".split(" ")
        }, Pb = function() {
            var a = navigator.systemLanguage || navigator.language,
                a = a.toLowerCase().split("-")[0];
            switch (a) {
                case "zh":
                    return Pa;
                default:
                    return Pa
            }
        }();
    gb.fromHex = function(a, b) {
        "#" === a.substring(0, 1) && (a = a.substr(1));
        var c = 3 === a.length ? 1 : 2,
            d = a.substr(0, c),
            e = a.substr(c, c),
            g = a.substr(2 * c, c);
        1 === c && (d += d, e += e, g += g);
        d = parseInt(d, 16);
        e = parseInt(e, 16);
        g = parseInt(g, 16);
        return new gb(d, e, g, b || 1)
    };
    var Mc = gb.prototype; /* Mc = Color.prototype */
    Mc.toRGB = function() {
        return "rgb(" + [this.red, this.green, this.blue].join() + ")"
    };
    Mc.toRGBA = function() {
        return "rgba(" + [this.red, this.green, this.blue, this.alpha].join() + ")"
    };
    Mc.toHex = function() {
        return "#" + (16777216 + (this.red << 16) + (this.green << 8) + this.blue).toString(16).slice(1).toUpperCase()
    };
    Mc.toInt = function() {
        return this.red << 16 | this.green << 8 | this.blue
    };
    Mc.toString = function() {
        return this.toRGBA()
    };
    var re = new Function,
        Ja = function(a) {
            return function(b) {
                new b(a)
            }
        };
    g(dd, l);
    dd.prototype.map_changed = function() {
        this.map_changed = re;
        N.$require("overlay", Ja(this))
    };
    Da(dd.prototype, ["map", s(F(Na), n), "panes", null, "projection", null]);
    var bf = dd;
    g(db, bf);
    var se = db.prototype;
    se.construct = function() {};
    se.draw = function() {};
    se.destroy = function() {};
    var ph = Ja,
        zc = Vb,
        oh = Gb,
        nh = K,
        mh = Ha,
        lh = F(zc),
        Ac = gb;
    g(hb, db);
    hb.prototype.getPath = function() {
        return this.get("path")
    };
    hb.prototype.setPath = function(a) {
        this.set("path", kh(a) || new zc)
    };
    hb.prototype.getBounds = function() {
        var a = this.getPath(),
            b = null;
        if (a && a.getLength()) {
            var c = [],
                d = [];
            a.forEach(function(a) {
                c.push(a.getLng());
                d.push(a.getLat())
            });
            var e = Math.min.apply(Math, c),
                g = Math.min.apply(Math, d),
                a = Math.max.apply(Math, c),
                b = Math.max.apply(Math, d),
                e = new I(g, e),
                a = new I(b, a),
                b = new xa(e, a)
        }
        return b
    };
    Da(hb.prototype, ["map", s(F(Na), n), "visible", Oa, "simplify", Oa, "clickable", Oa, "cursor", R, "zIndex", O, "strokeDashStyle", s(R, n), "strokeColor", s(F(Ac), R, n), "strokeWeight", s(O), "fillColor", s(F(Ac), R, n)]);
    var rh = Kf,
        gg = { /* ALIGN */
            TOP_LEFT: 5,
            TOP: 2,
            TOP_RIGHT: 3,
            LEFT: 4,
            CENTER: 13,
            RIGHT: 8,
            BOTTOM_LEFT: 10,
            BOTTOM: 11,
            BOTTOM_RIGHT: 12,
            isTop: function(a) {
                return 3 > a
            },
            isMiddle: function(a) {
                return 2 < a && 6 > a
            },
            isBottom: function(a) {
                return 5 < a
            },
            isLeft: function(a) {
                return 0 == a % 3
            },
            isCenter: function(a) {
                return 1 == a % 3
            },
            isRight: function(a) {
                return 2 == a % 3
            }
        }, Kd = ma[8],
        hg = function(a, b) {
            var c = "";
            switch (a) {
                case "120022":
                    c = Pd(a, b);
                    break;
                case "120023":
                    c = Pd("120022", b) + "&" + Pd(a, {})
            }
            qh(c)
        }, kb = {};
    e.addDomListener(window, "beforeunload", function() {
        hg("120023", kb);
        kb = {}
    });
    setInterval(function() {
        If(kb) || (hg("120022", kb), kb = {})
    }, 1e4);
    var Fa = function(a) {
        kb[a] = kb[a] ? parseInt(kb[a]) + 1 : 1
    }, uh = Ja,
        th = Sa,
        sh = I,
        ed = e,
        Qd = !1;
    g(Xb, l);
    Xb.prototype._addLabel = function(a) {
        Qd ? ed.trigger(this, "addlabel", a) : this._overlay.push(a)
    };
    Xb.prototype._removeLabel = function(a) {
        if (Qd) ed.trigger(this, "removelabel", a);
        else
            for (var b = 0; b < this._overlay.length; b++)
                if (this._overlay.id == a.id) {
                    this._overlay.splice(b, 1);
                    break
                }
    };
    Da(Xb.prototype, ["position", null, "planeInfo", null, "pano", s(R, n), "pov", Bd, "zoom",
        function(a) {
            return !O(a) || 1 > a || 4 < a ? !1 : !0
        }, "visible", Oa
    ]);
    var cf = Xb,
        vh = Fa;
    g(Rd, cf);
    var yh = Ja,
        xh = Sa,
        df = I;
    g(Sd, l);
    Da(Sd.prototype, ["position", F(df), "panorama", s(F(Rd), n), "content", R, "altitude", O, "visible", Oa]);
    var Ei = function(a) {
        return 111319.49077777778 * a
    }, ig = function(a) {
            a = Math.log(Math.tan(.008726646259971648 * (90 + a))) / .017453292519943295;
            return 111319.49077777778 * a
        }, Nc = function(a) {
            return 114.59155902616465 * Math.atan(Math.exp(.017453292519943295 * (a / 111319.49077777778))) - 90
        }, Fi = ma[15],
        Gi = ma[14],
        ha = [],
        Xa = document;
    ha.isReady = !1;
    ha._used = !1;
    ha.ready = function(a) {
        ha.initReady();
        ha.isReady ? a() : ha.push(a)
    };
    ha.initReady = function() {
        if (!ha._used) {
            ha._used = !0;
            if ("complete" === Xa.readyState || "interactive" === Xa.readyState) return ha.fireReady();
            if (0 < qa && 9 > qa) {
                Xa.attachEvent("onreadystatechange", ef);
                var a = function() {
                    if (!ha.isReady) {
                        var b = new Image;
                        try {
                            b.doScroll()
                        } catch (c) {
                            setTimeout(a, 64);
                            return
                        }
                        ha.fireReady()
                    }
                };
                a()
            } else Xa.addEventListener("DOMContentLoaded", ff, !1)
        }
    };
    ha.fireReady = function() {
        if (!ha.isReady) {
            if (!Xa.body) return setTimeout(ha.fireReady, 16);
            ha.isReady = !0;
            if (ha.length)
                for (var a = 0, b; b = ha[a]; a++) b()
        }
    };
    var Cd = ha.ready,
        Ud = window.document,
        Bh = /loaded|complete|undefined/i,
        Td = Ud.dispatchEvent ? "onload" : "onreadystatechange",
        Ch = 0 < dg,
        gf = "SOSOMapLoader",
        Vd = window[gf] = {}, Bc = [],
        Hi = 0,
        pa = {
            send: function(a, b, c, d) {
                a || (a = "cb" + (new Date).getTime().toString(36) + (Hi++).toString(36));
                Cd(function() {
                    Cc(a);
                    Ah(a, b, c, d)
                });
                return a
            },
            cancel: Cc
        }, T = function(a) {
            return "[object Function]" == Object.prototype.toString.call(a)
        }, Qa = {
            POI: "poi",
            SYN: "syn",
            RN: "rn",
            BUSLS: "busls",
            BUS: "bus",
            DT: "dt",
            DTS: "dts",
            GEOC: "geoc",
            RGEOC: "rgeoc",
            GC: "gc",
            CC: "cc",
            NAV: "nav",
            WALK: "walk",
            POS: "pos",
            SG: "sg"
        }, Dh = Sa;
    g(Ya, l);
    var te = Ya.prototype;
    te.send = function() {
        this.set("doSend", !0)
    };
    te.cancel = function() {
        this.set("doSend", !1)
    };
    te.clear = function() {
        this.set("doClear", !0)
    };
    Da(Ya.prototype, ["complete", s(T, n), "error", s(T, n), "map", s(F(Na), n), "panel", s(mc, R, n)]);
    var Eh = Gb,
        Dc = gb,
        Fh = Ja;
    g(Wd, db);
    Da(Wd.prototype, ["map", s(F(Na), n), "visible", Oa, "center", s(F(I), n), "radius", s(O, n), "cursor", s(R, n), "zIndex", s(O, n), "fillColor", s(F(Dc), R, n), "strokeColor", s(F(Dc), R, n), "strokeWeight", O, "strokeDashStyle", s(R, n)]);
    var jf = hb;
    g(hf, jf);
    var lf = hb;
    g(kf, lf);
    var ue = function(a, b) { /* MarkerShape */
        this.coords = a;
        this.type = b
    }, dc = function(a, b, c, d, e, g) { /* MarkerImage */
            this.url = a;
            this.size = b || e;
            this.origin = c;
            this.anchor = d;
            this.scaledSize = e;
            this.shadowAngle = g || 0
        }, Hh = Ja,
        Gh = Gb;
    g(Xd, db);
    Da(Xd.prototype, ["position", s(F(I), n), "title", s(O, R, n), "icon", s(F(dc), R, n), "shadow", s(F(dc), n), "shape", s(F(ue), n), "decoration", s(F(function(a, b, c) {
        this.content = a;
        this.align = b || gg.CENTER;
        this.offset = c || new ea(0, 0)
    }), n), "cursor", s(R, n), "clickable", Oa, "animation", s(O, R, n), "draggable", Oa, "visible", Oa, "flat", Oa, "zIndex", O, "height", O, "map", s(F(Na), n)]);
    var nf = ea,
        of = Kd,
        jg = Yd.prototype,
        ec = Math.PI,
        Oc = ec * xb,
        kg = 2 * Oc;
    jg.fromPointToLatLng = function(a, b, c, d) {
        d = mf(d);
        var e = Zd(b),
            g;
        g = kg / d.width / e;
        b = kg / d.height / e;
        if (!c) {
            var l = e * d.width,
                v = a.x,
                s;
            0 > v ? (s = v % l, v = 0 !== s ? l + s : 0) : v = v >= l ? v % l : v;
            d = e * d.height;
            a = a.y;
            var n;
            0 > a ? (n = a % d, a = 0 !== n ? d + n : 0) : a = a >= d ? a % d : a;
            a = new H(v, a)
        }
        d = a.x * g - Oc;
        b = Oc - a.y * b;
        a = 180 * (d / Oc);
        d = 180 * (b / Oc);
        d = 180 / ec * (2 * Math.atan(Math.exp(d * ec / 180)) - ec / 2);
        return new I(d, a, c)
    };
    jg.fromLatLngToPoint = function(a, b, c) {
        c = mf(c);
        var d = Math.sin(a.lat * ec / 180);
        a = (a.lng + 180) / 360 * c.width * Zd(b);
        b = (.5 - Math.log((1 + d) / (1 - d)) / (4 * ec)) * c.height * Zd(b);
        return new H(a, b)
    };
    var pf = [],
        rf = Sd,
        Ih = Fa;
    g(qf, rf);
    g(fd, l);
    fd.prototype.map_changed = function() {
        var a = this;
        N.$require("layer", function(b) {
            b.load(1, a)
        }, 0)
    };
    Da(fd.prototype, ["map", s(F(Na), n)]);
    var Kh = Gi,
        Jh = Fi,
        Lh = Fa;
    Yb.prototype.checkBounds = function(a, b) {
        if (this._svBoundsList) b(this._checkBounds(a));
        else if (this._svBoundsListError) b(!1);
        else if (this._pendingCheckBounds.push({
            bounds: a,
            callback: b
        }), !this._svBoundsList && !this._svBoundsListRequested) {
            var c = this;
            pa.send(null, this._svBoundsUrl, function(a) {
                c._loadSvBoundsList(a)
            }, function(a) {
                c._svBoundsListError = !0
            });
            this._svBoundsListRequested = !0
        }
    };
    Yb.prototype.getPano = function(a, b, c) {
        a = this._svXfUrl + "?x=" + 111319.49077777778 * a.lng + "&y=" + ig(a.lat) + "&r=" + (b || 500);
        pa.send("", a, function(a) {
            if (a.detail.svid) {
                var b = a.detail.road_name || "";
                "NA" === b && (b = "");
                c({
                    svid: a.detail.svid,
                    latlng: new I(Nc(a.detail.y), a.detail.x / 111319.49077777778),
                    description: b
                })
            } else c(null)
        })
    };
    Yb.prototype._loadSvBoundsList = function(a) {
        a = a.detail.boundsList;
        this._svBoundsList = [];
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            this._svBoundsList[b] = new xa(new I(c[0], c[1]), new I(c[2], c[3]))
        }
        this._onSvBoundsReady()
    };
    Yb.prototype._onSvBoundsReady = function() {
        for (var a = this._pendingCheckBounds, b = 0; b < a.length; b++) {
            var c = a[b];
            c.callback(this._checkBounds(c.bounds))
        }
        this._pendingCheckBounds = []
    };
    Yb.prototype._checkBounds = function(a) {
        for (var b = this._svBoundsList, c = 0; c < b.length; c++)
            if (b[c].intersects(a)) return !0;
        return !1
    };
    var ve = { /*PoiType*/
        NORMAL: 0,
        BUS_STATION: 1,
        SUBWAY_STATION: 2,
        BUS_LINE: 3,
        DISTRICT: 4
    }, we = { /* TransferActionType */
            BUS: "BUS",
            SUBWAY: "SUBWAY",
            WALK: "WALK"
        }, xe = { /* TransferPolicy */
            LEAST_TIME: 0,
            LEAST_TRANSFER: 1,
            LEAST_WALKING: 2,
            MOST_ONE: 3,
            NO_SUBWAY: 4
        }, ye = { /* DrivingPolicy */
            LEAST_TIME: 0,
            AVOID_HIGHWAYS: 1,
            LEAST_DISTANCE: 2,
            REAL_TRAFFIC: 3,
            PREDICT_TRAFFIC: 4
        }, Mh = Sa,
        Oh = Ja,
        Ph = Fa,
        Nh = ye;
    g(Zb, Ya);
    var lg = Zb.prototype;
    lg.search = function(a, b) {
        var c = s(R, F(I), Bd);
        c(a) && c(b) ? (this.set("start", a), this.set("end", b), this.send()) : c(a) ? rb("end", b) : rb("start", a)
    };
    Da(Zb.prototype, ["complete", s(T, n), "error", s(T, n), "location", R, "policy", O]);
    lg.setPolicy = function(a, b) {
        this.set("policy", a);
        this.set("time", b)
    };
    var Qh = Sa,
        Sh = Ja,
        Th = Fa,
        Rh = xe;
    g(gd, Ya);
    gd.prototype.search = function(a, b) {
        var c = s(R, F(I), Bd);
        c(a) && c(b) ? (this.set("start", a), this.set("end", b), this.send()) : c(a) ? rb("end", b) : rb("start", a)
    };
    Da(gd.prototype, ["complete", s(T, n), "error", s(T, n), "location", R, "policy", O]);
    var Uh = Sa,
        Vh = Ja,
        Wh = Fa;
    g(hd, Ya);
    hd.prototype.searchById = function(a) {
        this.set("info", a);
        this.send()
    };
    Da(hd.prototype, ["complete", s(T, n), "error", s(T, n)]);
    var Xh = Sa,
        Yh = Ja,
        Zh = Fa;
    g(id, Ya);
    id.prototype.searchById = function(a) {
        this.set("info", a);
        this.send()
    };
    Da(id.prototype, ["complete", s(T, n), "error", s(T, n)]);
    var bi = Ja,
        sf = Ya,
        $h = Fa,
        ai = e;
    g($d, sf);
    var Pc = $d.prototype;
    Pc.searchLocalCity = function() {
        this.set("mode", 0);
        this.set("info", null);
        this.send()
    };
    Pc.searchCityByName = function(a) {
        this.set("mode", 1);
        this.set("info", a);
        this.send()
    };
    Pc.searchCityByLatLng = function(a) {
        this.set("mode", 2);
        this.set("info", a);
        this.send()
    };
    Pc.searchCityByIP = function(a) {
        this.set("mode", 3);
        this.set("info", a);
        this.send()
    };
    Pc.searchCityByAreaCode = function(a) {
        this.set("mode", 4);
        this.set("info", a);
        this.send()
    };
    var ei = Ja,
        tf = Ya,
        ci = Fa,
        di = e;
    g(ae, tf);
    var mg = ae.prototype;
    mg.getAddress = function(a) {
        this.set("qt", Qa.RGEOC);
        this.set("info", a);
        this.send()
    };
    mg.getLocation = function(a) {
        this.set("qt", Qa.GEOC);
        this.set("info", a);
        this.send()
    };
    var uf = Ya,
        hi = e,
        ii = Ja,
        gi = Fa,
        fi = Sa;
    g(Ec, uf);
    var ze = Ec.prototype;
    ze.search = function(a) {
        this.set("keyword", a);
        a = Qa.POI;
        2 === this.get("mode") && (a = Qa.BUSLS);
        this.set("qt", a);
        this.send()
    };
    ze.searchInBounds = function(a, b) {
        this.set("qt", Qa.SYN);
        this.set("keyword", a);
        this.set("region", b);
        this.send()
    };
    ze.searchNearBy = function(a, b, c) {
        this.set("qt", Qa.RN);
        this.set("keyword", a);
        this.set("region", [b, c]);
        this.send()
    };
    Da(Ec.prototype, ["complete", s(T, n), "error", s(T, n), "pageIndex", O, "pageCapacity", O, "location", s(R, n)]);
    var X = { /* ServiceErrorType */
        ERROR: "ERROR",
        NO_RESULTS: "NO_RESULTS",
        INVALID_REQUEST: "INVALID_REQUEST",
        UNKNOWN_ERROR: "UNKNOWN_ERROR"
    }, ta = { /* ServiceResultType */
            POI_LIST: "POI_LIST",
            CITY_LIST: "CITY_LIST",
            AREA_INFO: "AREA_INFO",
            GEO_INFO: "GEO_INFO",
            STATION_INFO: "STATION_INFO",
            LINE_INFO: "LINE_INFO",
            TRANSFER_INFO: "TRANSFER_INFO",
            DRIVING_INFO: "DRIVING_INFO",
            MULTI_DESTINATION: "MULTI_DESTINATION",
            AUTOCOMPLETE_PREDICTION: "AUTOCOMPLETE_PREDICTION"
        };
    g(kc, l);
    kc.prototype.map_changed = function() {
        var a = this;
        N.$require("layer", function(b) {
            b.load(0, a)
        }, 0)
    };
    Da(kc.prototype, ["map", s(F(Na), n)]);
    var ji = Gb,
        ki = Ja,
        li = Fa;
    g(be, db);
    Da(be.prototype, ["map", s(F(Na), n), "imageUrl", s(R, n), "bounds", s(F(xa), n), "visible", Oa, "clickable", Oa, "cursor", R, "zIndex", s(O, n), "opacity", s(O, n)]);
    var mi = Gb,
        ni = Ja,
        oi = Fa;
    g(ce, db);
    Da(ce.prototype, ["map", s(F(Na), n), "position", s(F(I), n), "content", s(R, n), "title", s(R, n), "visible", Oa, "zIndex", s(O, n), "offset", s(F(ea), n), "style", s(Bd, R, n), "clickable", Oa]);
    var pi = Gb,
        qi = Ja,
        vf = db,
        ri = Fa;
    g(Fb, vf);
    Da(Fb.prototype, ["map", s(n, F(Na)), "position", s(n, F(I), F(l)), "content", s(R, mc, n), "zIndex", O]);
    Fb.prototype.open = function() {
        this.set("visible", !0);
        this.get("disableAutoPan") || this.notify("autoPan")
    };
    Fb.prototype.close = function() {
        this.set("visible", !1)
    };
    Fb.prototype.notifyResize = function() {
        this.notify("resize")
    };
    var wf = Wd,
        si = Fa;
    g(de, wf);
    de.prototype.getBounds = function() {
        var a = this.get("center"),
            b = this.get("radius"),
            c = null;
        if (a)
            if (0 >= b) c = new xa(a.clone(), a.clone());
            else var d = a.getLat(),
        e = b / 6378137, g = 180 * e / Math.PI, b = d + g, c = d - g, d = Math.cos(d * Math.PI / 180), g = 360 * Math.asin(e / 2 / d) / Math.PI, d = a.getLng() + g, a = a.getLng() - g, c = new xa(new I(c, a), new I(b, d));
        return c
    };
    var yf = hf,
        ti = Fa;
    g(xf, yf);
    var Af = kf,
        ui = Fa;
    g(zf, Af);
    var Ae = { /* MarkerAnimation */
        BOUNCE: 1,
        DROP: 2,
        UP: 3,
        DOWN: 4
    }, Bf = Xd,
        vi = Fa;
    g($b, Bf);
    var wi = Sa,
        xi = Yd;
    g(lc, l);
    var ng = ma[16],
        x = {};
    x.event = e;
    x.MVCObject = l;
    x.MVCArray = Vb;
    x.LatLng = I;
    x.LatLngBounds = xa;
    x.Size = ea;
    x.Point = H;
    x.Color = gb;
    x.Map = Na;
    x.MapTypeId = Jc;
    x.MapTypeRegistry = bd;
    x.ImageMapType = lc;
    x.Overlay = db;
    x.Marker = $b;
    x.MarkerImage = dc;
    x.MarkerShape = ue;
    x.MarkerAnimation = Ae;
    x.Polyline = zf;
    x.Polygon = xf;
    x.Circle = de;
    x.InfoWindow = Fb;
    x.Label = ce;
    x.GroundOverlay = be;
    x.ControlPosition = ob;
    x.Control = cd;
    x.ALIGN = gg;
    x.MapTypeControl = Re;
    x.NavigationControl = xd;
    x.NavigationControlStyle = Rf;
    x.ZoomControlStyle = Hb;
    x.ScaleControl = Pe;
    x.ScaleControlStyle = le;
    x.TrafficLayer = kc;
    x.ServiceResultType = ta;
    x.ServiceErrorType = X;
    x.SearchService = Ec;
    x.Geocoder = ae;
    x.CityService = $d;
    x.StationService = id;
    x.LineService = hd;
    x.TransferService = gd;
    x.DrivingService = Zb;
    x.DrivingPolicy = ye;
    x.TransferPolicy = xe;
    x.TransferActionType = we;
    x.PoiType = ve;
    x.Panorama = Rd;
    x.PanoramaService = Yb;
    x.PanoramaLayer = fd;
    x.PanoramaLabel = qf;
    var Ii = function() {
        if (Df) {
            var a = "http://ping.map.soso.com/call?from=webapi&version=" + Df + "&tmp=" + (new Date).getTime().toString(36);
            Jf(a)
        }
    };
    ia(x, function(a, b) {
        Ic(b, a)
    });
    var Ji = new Date;
    Cd(function() {
        Ii();
        Mf && Lf(500051, [location.hostname, Ji - Mf], 1);
        ng && eval('"use strict";window.' + ng + "()");
        setTimeout(function() {
            if (window.console) {
                var a = console;
                a && (zd && a.log("%c           ", "background:url('" + bb + "logo.png') no-repeat"), a.log("\u6253\u5f00\u63a7\u5236\u53f0\uff0c\u662f\u53d1\u73b0bug\u4e86\u5417\uff1f\u8bf7\u544a\u8bc9\u6211\u4eec:http://bbs.map.soso.com/forum-2-1.html"))
            }
        }, 3e3)
    });
})();