var de = 256,
    ee = 32;

function fe() {
    this.B = n
}
var ge;
B.ld(function(a) {
    if (!a.F.$o) {
        var b = new fe;
        bb(a.xa, b.ta(a.F.jb));
        b.B = a.xa.lastChild;
        a.D.SJ = b
    }
});
fe.prototype.ta = function(a) {
    a = ['<div id=zoomer style="position:absolute;z-index:0;top:0px;left:0px;overflow:hidden;visibility:hidden;cursor:' + a + '">'];
    a.push('<div class="BMap_zoomer" style="top:0;left:0;"></div>');
    a.push('<div class="BMap_zoomer" style="top:0;right:0;"></div>');
    a.push('<div class="BMap_zoomer" style="bottom:0;left:0;"></div>');
    a.push('<div class="BMap_zoomer" style="bottom:0;right:0;"></div>');
    a.push("</div>");
    return a.join("")
};
fe.prototype.action = function(a, b) {
    if (!ge) {
        var c = this.B;
        if (c) {
            var d = 4 / 3,
                e = Math.ceil((b ? 60 : 120) / 2),
                f = Math.max(15, e / d),
                g = c.style;
            g.width = 2 * e + "px";
            g.height = 2 * f + "px";
            g.visibility = "visible";
            c = c.children;
            b ? (c[0].style.backgroundPosition = "0 0", c[1].style.backgroundPosition = "-7px 0", c[2].style.backgroundPosition = "0 -7px", c[3].style.backgroundPosition = "-7px -7px") : (c[0].style.backgroundPosition = "-7px -7px", c[1].style.backgroundPosition = "0 -7px", c[2].style.backgroundPosition = "-7px 0", c[3].style.backgroundPosition = "0 0");
            var c = n,
                j = a.x - e,
                k = a.y - f;
            if (!isNaN(j) && !isNaN(k)) {
                g.left = j + "px";
                g.top = k + "px";
                var l = Math.ceil((b ? 120 : 60) / 2),
                    m = Math.max(15, l / d),
                    l = l - e,
                    m = Math.ceil(m - f),
                    p = this.B.style;
                ge && ge.end();
                ge = new Va({
                    fd: 20,
                    duration: 240,
                    Wd: Wa.As,
                    Pg: 100,
                    ta: function(a) {
                        if (!(a < 0.1)) {
                            var b = Math.ceil(l * a),
                                a = Math.ceil(m * a);
                            p.width = (e + b) * 2 + "px";
                            p.height = (f + a) * 2 + "px";
                            p.left = j - b + "px";
                            p.top = k - a + "px"
                        }
                    },
                    finish: function() {
                        ge = o;
                        setTimeout(function() {
                            g.visibility = "hidden"
                        }, 300)
                    }
                })
            }
        }
    }
};
B.ld(function(a) {
    function b(a, b) {
        var c = a.srcElement || a.target,
            d = a.offsetX || a.layerX || 0,
            f = a.offsetY || a.layerY || 0,
            p = n,
            u = n;
        1 != c.nodeType && (c = c.parentNode);
        for (; c && c != e.xa;) {
            c.L && (t.lang.Mc(c.L) instanceof Q && (p = t.lang.Mc(c.L)), t.lang.Mc(c.L) instanceof Jb && (u = t.lang.Mc(c.L)));
            if (!(0 == c.clientWidth && 0 == c.clientHeight && c.offsetParent && "TD" == c.offsetParent.nodeName) && "http://www.w3.org/2000/svg" != c.namespaceURI) d += c.offsetLeft || 0, f += c.offsetTop || 0;
            else if ("http://www.w3.org/2000/svg" == c.namespaceURI && B.Vm) {
                var v = B.Vm.Tl(e).qd;
                if (-1 < navigator.userAgent.indexOf("Opera") && "svg" != c.tagName) {
                    if (c = t.lang.Mc(c.L)) c = c.ig(), d += e.kb(c.le()).x, f += e.kb(c.ke()).y;
                    break
                }
                if (v && (!t.M.S || 9 <= t.M.S && "svg" == c.nodeName.toLowerCase())) d += parseFloat(v.style.left) + e.offsetX, f += parseFloat(v.style.top) + e.offsetY;
                if (9 <= t.M.S && "svg" != c.nodeName.toLowerCase()) {
                    d += e.offsetX;
                    f += e.offsetY;
                    break
                }
                if (!t.M.S) break
            }
            c = c.offsetParent
        }
        b.offsetX = d;
        b.offsetY = f;
        b.pixel = b.Oa = new O(d, f);
        b.point = b.O = e.Sa(b.Oa);
        b.overlay = b.Ka = p;
        b.ub = u;
        return b
    }

    function c(a) {
        var c = e.D,
            d = !c.ip && !c.jp;
        if (c.xp) clearTimeout(c.xp), c.xp = n, d && (e.dispatchEvent(b(a, z(new L("onrightclick"), a))), e.ya |= de, e.dispatchEvent(b(a, z(new L("onrightdblclick"), a))), e.ya ^= de);
        else {
            d && e.dispatchEvent(b(a, z(new L("onrightclick"), a)));
            var f = b(a, z(new L("onrightclickex"), a));
            c.xp = setTimeout(function() {
                c.xp = n;
                d && e.dispatchEvent(f)
            }, e.F.ds)
        }
    }

    function d(a) {
        if (e.F.Ql) {
            var c = e.D;
            c.Yb && c.Yb.stop();
            e.ya |= ee;
            a = window.event || a;
            e.Zb = e.la;
            c = new L("onmousewheel");
            c.pk = 0 <= a.wheelDelta || 0 > a.detail;
            var d = new Date;
            c.pk == i && e.la == e.ha().xi() || (c.pk == o && e.la == e.ha().Jj() || 220 > d - f) || (f = d, b(a, z(c, a)), e.dispatchEvent(c));
            e.ya ^= ee;
            db(a)
        }
    }
    var e = a;
    a.xa.AL = da(o);
    t.C(e.platform, "mousemove", function(a) {
        0 == e.ya && e.dispatchEvent(b(a, z(new L("onmousemove"), a)))
    });
    t.C(e.platform, "mousedown", function(a) {
        if (e.F.Gs) {
            a = window.event || a;
            t.M.S || db(a);
            var c = e.D;
            c.Cb = i;
            var d = a.srcElement || a.target;
            c.Yb && c.Yb.stop();
            c.Lm = a.clientX || a.pageX || 0;
            for (c.Mm = a.clientY || a.pageY || 0; d && d != e.xa;) {
                if (t.z.zt(d, "BMap_Marker")) {
                    c.Cb = o;
                    var f = t.lang.Mc(d.L);
                    if (f instanceof S && f.w.rd == i || f.w.Ab == i) return
                }
                d = d.parentNode
            }
            t.M.S && e.Bd.setCapture && e.Bd.setCapture();
            e.dispatchEvent(b(a, z(new L("onmousedown"), a)));
            e.F.Ab && (!(e.ya & 8) && 2 != a.button) && (c.Xj = c.Lm, c.fh = c.Mm, c.rp = e.offsetX, c.k = e.offsetY, e.ya |= 8, e.platform.style.cursor = 0 == e.D.sd.length ? e.F.kc : "pointer")
        }
    });
    t.C(document, "mousemove", function(a) {
        a = window.event || a;
        t.M.S || db(a);
        var c = e.D,
            d = a.clientX || a.pageX || 0,
            f = a.clientY || a.pageY || 0;
        if (c.Lm || c.Mm) c.ip = d - c.Lm, c.jp = f - c.Mm;
        var m = Ea(),
            p = 40 < m - c.rz;
        if (!(18 > m - c.km) && (p && (c.rz = m), c.km = m, e.ya & 8 && e.F.Ab)) {
            var u = e.platform.style;
            u.cursor.replace(/"|\s/g, "") != e.F.kc && (u.cursor = e.F.kc);
            c.Dg || (e.dispatchEvent(b(a, z(new L("ondragstart"), a))), e.dispatchEvent(new L("onmovestart")), c.ss = new O(d, f), c.ts = m);
            0 == c.Xj && (0 == c.fh && e.D.qL) && (c.Xj = d, c.fh = f, c.rp = e.offsetX, c.k = e.offsetY);
            if (0 != d - c.Xj || 0 != f - c.fh) e.D.Dg = i, e.dispatchEvent(b(a, z(new L("ondragging"), a))), e.bd(c.rp + d - c.Xj, c.k + f - c.fh, n, p)
        }
    });
    t.C(document, "mouseup", function(a) {
        t.M.S && e.Bd.releaseCapture && e.Bd.releaseCapture();
        var c = e.D;
        c.GL && e.NK(i);
        var a = window.event || a,
            d = a.clientX || a.pageX,
            f = a.clientY || a.pageY;
        if (e.ya & 8 && e.F.Ab) {
            e.ya ^= 8;
            e.platform.style.cursor = 0 == c.sd.length ? e.F.jb : "pointer";
            if (e.D.Dg) {
                var m = b(a, z(new L("ondragend"), a));
                e.dispatchEvent(m);
                he(e, new O(d, f))
            }
            c.Dg = o
        }
        c.Cb = o;
        2 == a.button && (c.Lm = n, c.Mm = n, c.ip = 0, c.jp = 0)
    });
    4 <= t.M.uf ? (t.C(e.xa, "mouseup", function(a) {
        2 == a.button && c(a)
    }), t.C(e.xa, "contextmenu", function(a) {
        ka(a)
    })) : t.C(e.xa, "contextmenu", function(a) {
        c(a);
        ka(a)
    });
    var f = new Date;
    t.C(e.xa, "mousewheel", d);
    window.addEventListener && e.xa.addEventListener("DOMMouseScroll", d, o);
    t.C(e.platform, "click", function(a) {
        var c = new L("onclick"),
            d = new L("onclickex"),
            f = e.D;
        b(a, z(c, a));
        b(a, z(d, a));
        if (!e.ya) {
            var m = !f.ip && !f.jp;
            m && e.dispatchEvent(c);
            if (!f.Jk) f.Jk = setTimeout(function() {
                f.Jk = n;
                m && e.dispatchEvent(d)
            }, e.F.ds)
        }
        f.Lm = n;
        f.Mm = n;
        f.ip = 0;
        f.jp = 0
    });
    t.C(e.platform, "dblclick", function(a) {
        if (!e.ya) {
            e.ya = e.ya | de;
            t.M.S && e.dispatchEvent(b(a, z(new L("onclick"), a)));
            var c = e.D;
            if (c.Jk) {
                clearTimeout(c.Jk);
                c.Jk = n
            }
            e.dispatchEvent(b(a, z(new L("ondblclick"), a)));
            e.ya = e.ya ^ de
        }
    });
    t.C(document, "mousedown", function(b) {
        var b = window.event || b,
            b = b.srcElement || b.target,
            c = e.D;
        c.Xr = c.Xr ? t.z.contains(a.xa, b) : t.z.contains(a.platform, b)
    })
});

function he(a, b) {
    if (a.F.Ho) {
        var c = a.D,
            d = Ea();
        if (100 < d - c.km) a.dispatchEvent(new L("onmoveend")), c.Dg = o;
        else {
            var e = c.ss,
                f = [0 < b.x - e.x ? 1 : -1, 0 < b.y - e.y ? 1 : -1],
                d = fb(e, b) / ((d - c.ts) / 1E3) / 2,
                g = d / 1.8,
                j = 0.4 * g * d / 1E3,
                k = Math.abs(e.x - b.x),
                l = 0,
                m = 0;
            0 == Math.abs(e.y - b.y) ? l = k : (e = Math.abs(e.x - b.x) / Math.abs(e.y - b.y), m = Math.round(Math.sqrt(j * j / (1 + e * e))), l = Math.round(e * m)); - 1 == f[0] && (l = -l); - 1 == f[1] && (m = -m);
            c.Yb && c.Yb.stop();
            var p = d / 1E3,
                u = a.offsetX,
                v = a.offsetY,
                w = o;
            c.Yb = new Va({
                duration: g,
                fd: 30,
                Wd: function(a) {
                    a = a * p / 1.8;
                    return p * a - 0.9 * a * a
                },
                ta: function(b) {
                    b = b * 3.6 / (p * p);
                    w = !w;
                    a.bd(u + Math.round(b * l), v + Math.round(b * m), n, w)
                },
                finish: function() {
                    c.Yb = n;
                    a.bd(u + Math.round(l), v + Math.round(m));
                    a.dispatchEvent(new L("onmoveend"))
                },
                Yt: function(b) {
                    c.Yb = n;
                    b = b * 3.6 / (p * p);
                    a.bd(u + Math.round(b * l), v + Math.round(b * m));
                    setTimeout(function() {
                        a.dispatchEvent(new L("onmoveend"))
                    }, 1)
                }
            })
        }
    } else a.dispatchEvent(new L("onmoveend"))
};
B.ld(function(a) {
    t.C(document, "keydown", function(b) {
        a.D.Hf == i && (a.D.Hf = o);
        if (a.F.Io && a.D.Xr) switch (b = window.event || b, b.keyCode || b.which) {
            case 43:
            case 189:
            case 109:
                a.D.Cb = i;
                a.dispatchEvent(new L("onminuspress"));
                break;
            case 43:
            case 61:
            case 187:
            case 107:
                a.D.Cb = i;
                a.dispatchEvent(new L("onpluspress"));
                break;
            case 33:
                a.D.Cb = o;
                a.D.Hf = i;
                a.pe(0, Math.round(0.8 * a.height));
                ka(b);
                break;
            case 34:
                a.D.Cb = o;
                a.D.Hf = i;
                a.pe(0, -Math.round(0.8 * a.height));
                ka(b);
                break;
            case 35:
                a.D.Cb = o;
                a.D.Hf = i;
                a.pe(-Math.round(0.8 * a.width), 0);
                ka(b);
                break;
            case 36:
                a.D.Cb = o;
                a.D.Hf = i;
                a.pe(Math.round(0.8 * a.width), 0);
                ka(b);
                break;
            case 37:
                a.D.Cb = i;
                a.D.hb |= 1;
                a.Ea();
                ka(b);
                break;
            case 38:
                a.D.Cb = i;
                a.D.hb |= 2;
                a.Ea();
                ka(b);
                break;
            case 39:
                a.D.Cb = i;
                a.D.hb |= 4;
                a.Ea();
                ka(b);
                break;
            case 40:
                a.D.Cb = i, a.D.hb |= 8, a.Ea(), ka(b)
        }
    });
    t.C(document, "keyup", function(b) {
        if (a.F.Io) switch (b = window.event || b, b.keyCode || b.which) {
            case 37:
                a.D.hb &= -2;
                0 != a.D.hb && a.Ea();
                break;
            case 38:
                a.D.hb &= -3;
                0 != a.D.hb && a.Ea();
                break;
            case 39:
                a.D.hb &= -5;
                0 != a.D.hb && a.Ea();
                break;
            case 40:
                a.D.hb &= -9, 0 != a.D.hb && a.Ea()
        }
        a.D.Cb = o
    });
    qa.prototype.Ea = function() {
        if (!this.Ea.lp || !(this.Ea.Zq == this.D.hb && this.D.Hf == i)) {
            var a = this,
                c = a.D.hb;
            a.Ea.Zq = c;
            a.Ea.Ft = 30;
            a.Ea.duration = 999;
            a.Ea.ud = a.Ea.vd = 0;
            c & 1 && (a.Ea.ud = 1);
            c & 2 && (a.Ea.vd = 1);
            c & 4 && (a.Ea.ud = -1);
            c & 8 && (a.Ea.vd = -1);
            c & 1 && c & 4 && (a.Ea.ud = 0);
            c & 2 && c & 8 && (a.Ea.vd = 0);
            if (!a.Ea.lp) {
                a.Ea.lp = i;
                a.Ea.time = Ea();
                a.Ea.XE = a.Ea.time;
                a.dispatchEvent(new L("onmovestart"));
                var d = new Va({
                    fd: a.Ea.Ft,
                    duration: a.Ea.duration,
                    Wd: Wa.uz,
                    ta: function() {
                        var c = a.Ea,
                            f = a.D.hb;
                        if (a.Ea.Zq != f) {
                            a.Ea.Zq = f;
                            if (f & 1) c.ud = 1;
                            if (f & 2) c.vd = 1;
                            if (f & 4) c.ud = -1;
                            if (f & 8) c.vd = -1;
                            if (f & 1 && f & 4) c.ud = 0;
                            if (f & 2 && f & 8) c.vd = 0
                        }
                        if (a.D.Hf == i) {
                            c.ud = 0;
                            c.vd = 0
                        }
                        var f = Ea(),
                            g = Math.pow((f - c.XE) / c.duration, 2);
                        if (!a.D.hb) {
                            c.lp = o;
                            d.Fu = i;
                            a.Ea.time = Ea();
                            setTimeout(function() {
                                a.dispatchEvent(new L("onmoveend"))
                            }, 40)
                        }
                        var j = f - c.time,
                            k = c.ud * j * g >= 0 ? Math.ceil(c.ud * j * g) : Math.floor(c.ud * j * g),
                            g = c.vd * j * g >= 0 ? Math.ceil(c.vd * j * g) : Math.floor(c.vd * j * g);
                        if (k != 0 && g != 0) {
                            k = Math.round(k * 0.7);
                            g = Math.round(g * 0.7)
                        }
                        c.time = f;
                        a.bd(a.offsetX + k, a.offsetY + g)
                    },
                    finish: function() {
                        a.Ea.time = Ea();
                        setTimeout(function() {
                            a.wv()
                        }, a.Ea.Ft)
                    }
                })
            }
        }
    };
    qa.prototype.wv = function() {
        var a = this,
            c = a.Ea;
        a.D.Hf && (c.ud = 0, c.vd = 0);
        if (a.D.hb) {
            var d = Ea(),
                e = d - c.time,
                f = Math.ceil(c.ud * e),
                e = Math.ceil(c.vd * e);
            c.time = d;
            a.bd(a.offsetX + f, a.offsetY + e);
            setTimeout(function() {
                a.wv()
            }, c.Ft)
        } else c.lp = o, a.dispatchEvent(new L("onmoveend"))
    }
});
