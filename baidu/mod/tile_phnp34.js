function yd() {
    this.yl = this.ek = this.Vj = this.Kk = n;
    this.Kt = o;
    this.pf = n
}
t.lang.ia(yd, Eb, "MobileInfoWindow");
t.extend(yd.prototype, {
    initialize: function(a) {
        this.A = a;
        this.pf = document.createElement("div");
        this.pf.className = "iw";
        this.pf.style.cssText = "position:absolute; line-height:28px; text-align:center; border:0px;";
        var b = this.Kk = document.createElement("div");
        this.pf.appendChild(b);
        this.Vj = document.createElement("div");
        this.Vj.className = "iw_l";
        b.appendChild(this.Vj);
        this.ek = document.createElement("div");
        this.ek.className = "iw_r";
        b.appendChild(this.ek);
        this.Jg = document.createElement("a");
        this.Jg.setAttribute("target", "_blank");
        this.Jg.className = "iw_s iw_s0 iw_c";
        this.Jg.innerHTML = "<div class='iw_bg iw_cc'></div>";
        b.appendChild(this.Jg);
        a.Le().Os.appendChild(this.pf);
        this.bind();
        this.yl = this.Jg.getElementsByTagName("DIV")[0];
        this.Vj.style.display = "block";
        this.ek.style.display = "block";
        return this.pf
    },
    bind: function() {
        var a = this;
        t.C(a.Vj, "click", function(b) {
            a.bI();
            b.preventDefault();
            b.stopPropagation()
        });
        t.C(a.ek, "click", function(b) {
            a.QH();
            b.preventDefault();
            b.stopPropagation()
        });
        t.C(a.Jg, "click", function(a) {
            a.stopPropagation()
        });
        t.Sd("touchstart touchmove touchend gesturestart gesturechange mousedown mouseout mouseover click mousewheel keydown selectstart".split(" "), function(b) {
            t.C(a.Jg, b, A);
            t.C(a.Vj, b, A);
            t.C(a.ek, b, A)
        })
    },
    Sw: q(),
    Mw: q(),
    ba: function() {
        return new F(this.sw.lng, this.sw.lat)
    },
    ga: q(),
    za: s("Kt"),
    H: function() {
        t.z.H(this.J);
        this.pf.style.display = "none";
        this.Kt = o
    },
    show: function(a) {
        a && (this.O = a);
        t.z.show(this.J);
        this.pf.style.display = "block";
        this.Kt = i;
        this.A.D.Ja = this
    },
    UI: function() {
        var a = this.A,
            b = this.jf,
            c = this.Kk.offsetWidth,
            d = this.Kk.offsetHeight,
            e = a.Bb(),
            c = c / 2 + 16,
            d = d / 2 + 78;
        if (this.jf) {
            var f = new O(0, 0);
            b.x < c ? f.x = c - b.x : e.width - b.x - 8 < c && (f.x = e.width - b.x - 8 - c);
            b.y < d ? f.y = d - b.y : 60 > e.height - b.y && (f.y = e.height - b.y - 60);
            0 == f.x && 0 == f.y || a.pe(f.x, f.y)
        }
    },
    switchTo: function(a) {
        this.jf = a.point;
        this.el = a.name;
        this.Hg = a.uid;
        this.jr = a.fa;
        this.CD = parseInt(this.A.platform.style.left);
        this.DD = parseInt(this.A.platform.style.top);
        this.sw = this.A.Sa(this.jf);
        this.show();
        this.wI();
        this.kA()
    },
    ML: function() {
        this.Kk.className = "iw_rt";
        this.show();
        this.kA()
    },
    wI: function() {
        this.Jg.setAttribute("href", "http://api.map.baidu.com/place/detail?uid=" + this.Hg + "&output=html&source=jsapi&operate=mapclick&clicktype=vector");
        this.Kk.className = "iw_rt";
        this.yl.innerHTML = "<div class='iw_poir'><div class='crl_ar' style='white-space:nowrap;text-overflow:ellipsis;overflow:hidden;'>" + this.el + "</div></div>";
        this.draw()
    },
    kA: function() {
        var a = this;
        a.Ct || (a.Ct = setTimeout(function() {
            a.UI();
            clearTimeout(a.Ct);
            a.Ct = n
        }, 100))
    },
    hM: function() {
        var a = $("popList");
        43 < this.yl.textContent.length && (58 <= this.yl.textContent.length ? a.Ya("zoom2") : a.Ya("zoom1"))
    },
    FK: function() {
        this.yl.innerHTML = ""
    },
    draw: function() {
        if (this.jf) {
            var a = this.jf,
                b = a.y;
            this.pf.style.left = a.x - 98 - this.CD + "px";
            this.pf.style.top = b - 62 - this.DD + "px"
        }
    },
    pL: function() {
        za() && (location.href = "http://map.baidu.com/detail?qt=ninf&wd=&detail=scope&uid=" + this.Hg);
        H() && (location.href = "http://map.baidu.com/mobile/#place/detail/qt=inf&c=131&uid=" + this.Hg)
    },
    bI: function() {
        this.A.Sa(this.jf);
        var a = this.A.U(),
            a = Math.pow(2, 18 - a),
            b = this.A.Bb(),
            c = this.A.Lb,
            a = "http://map.baidu.com/mobile/?third_party=uri_api#index/searchnearby/foo=bar/" + this.NH({
                nb_x: c.lng + a * (this.jf.x - b.width / 2),
                nb_y: c.lat - a * (this.jf.y - b.height / 2),
                center_name: this.el,
                from: "searchnearby"
            });
        window.open(a, "_blank")
    },
    QH: function() {
        var a = this.A.Al,
            a = "http://api.map.baidu.com/direction?origin=\u6211\u7684\u4f4d\u7f6e&destination=" + this.el + "&mode=navigation&output=html&src=jsapi" + (this.A.Dc() ? "&operate=vectorclick" : "&operate=mapclick") + "&region=" + a;
        va("navlinkmobile");
        window.open(a, "_blank")
    },
    NH: function(a) {
        if (!a) return "";
        var b = [],
            c;
        for (c in a) b.push(c + "=" + encodeURIComponent(a[c]));
        return b.join("&")
    }
});

function zd(a) {
    this.m = t.object.extend(a || {}, {
        ue: i
    });
    T.call(this, this.m);
    this.Re = {};
    this.loaded = o;
    this.Wz = n;
    this.Cx = o;
    this.Ax = {
        road: "rd",
        water: "wt",
        building: "bd",
        land: "ld",
        government: "gv",
        point: "pts"
    };
    this.du = {
        market: "mt",
        food: "fd",
        communications: "cm",
        hotel: "ht",
        attractions: "at",
        recreation: "rc"
    }
}
zd.prototype = new T;
zd.prototype.sa = function(a) {
    if (!this.loaded) {
        this.loaded = i;
        var b = this;
        b.map = a;
        b.qb = b.map.qb;
        b.map = a;
        b.ms = o;
        b.CF = n;
        b.Ic = "df";
        b.m.poiElements && b.m.poiElements.name && (b.Ic = b.du[b.m.poiElements.name]);
        b.Og = b.m.style || "normal";
        b.Zu = 200;
        b.Lp = n;
        b.Mg = 0;
        b.Vc = this.qb.Lk(0);
        b.Rb = this.qb.Lk(10);
        b.qb.fe.appendChild(this.Vc);
        b.qb.fe.appendChild(this.Rb);
        b.qb.Vc = b.Vc;
        b.qb.Rb = this.Rb;
        b.Wc = new window.lB;
        b.xo = "";
        b.m.features && (b.xo = b.sG(b.m.features));
        b.Wc.Ng = b.Og;
        b.YE();
        b.Og && "normal" !== b.Og ? b.jA(b.Og, function() {
            b.map.addEventListener("click", function(a) {
                b.Mg++;
                if (b.Mg === 1) b.Lp = setTimeout(function() {
                    b.OA(a);
                    b.Mg = 0
                }, b.Zu);
                else {
                    clearTimeout(b.Lp);
                    b.Mg = 0;
                    return o
                }
            });
            b.oi()
        }) : (b.oi(), b.map.addEventListener("click", function(a) {
            b.Mg++;
            if (b.Mg === 1) b.Lp = setTimeout(function() {
                b.OA(a);
                b.Mg = 0
            }, b.Zu);
            else {
                clearTimeout(b.Lp);
                b.Mg = 0;
                return o
            }
        }));
        b.map.F.Jo && (H() && b.nj == aa) && (b.nj = new yd, b.map.Ua(b.nj))
    }
};
t.extend(zd.prototype, {
    YE: function() {
        var a = this;
        setTimeout(function() {
            a.map.addEventListener("poilayervisiblechange", function(b) {
                a.fF(b)
            });
            a.map.addEventListener("moveend", function() {
                a.oi()
            });
            a.map.addEventListener("zoomend", function() {
                function b() {
                    var c = a.map.U();
                    (!a.ms || c < a.map.F.Pu) && a.map.Xb();
                    a.map.removeEventListener("vectorloaded", b);
                    a.map.removeEventListener("tilesloaded", b)
                }
                a.wp();
                a.ms = o;
                a.oi(i);
                a.map.addEventListener("vectorloaded", b);
                a.map.addEventListener("tilesloaded", b)
            });
            a.map.addEventListener("onresize", function() {
                a.oi()
            });
            za() && a.map.addEventListener("onmoving", function() {
                a.oi()
            });
            a.map.addEventListener("setcustomstyles", function(b) {
                a.rF(b.target)
            });
            a.map.addEventListener("mousemove", function(b) {
                a.map.Dc() && a.JF(b)
            })
        }, 1)
    },
    sG: function(a) {
        for (var b = "", c = 0, d = a.length; c < d; c++) b = b + this.Ax[a[c]] + ",";
        b && (this.Wc.cg = b);
        return b
    },
    jA: function(a, b) {
        var c = this;
        B[a] = function(d) {
            c.Wc.ag = d.result;
            b(a)
        };
        La("http://or.map.bdimg.com:8080/gvd/?qt=style&styles=" + a + "&fn=BMap." + a, i)
    },
    MI: function(a) {
        if (this.map.Dc()) {
            for (var b = "", c = 0, d = a.length; c < d; c++) b = b + (this.Ax[a[c]] || "") + ",";
            b == this.xo && "" == !b || ("" == b && (b = "no"), this.xo = b, this.Wc.cg = b, this.Wc.vs({
                bg: this.Mo(this.Vc),
                poi: this.Mo(this.Rb)
            }, this.qb, this.Ic))
        }
    },
    bJ: function(a) {
        if (a.name && this.du[a.name]) {
            var b = this.du[a.name];
            if (a.styles.visibility == i && this.Ic !== b && -1 < this.xo.indexOf("pts")) {
                this.Ic = b;
                if (this.Rb)
                    for (var c = [], d = [], a = this.Rb.childNodes, b = 0, e = a.length; b < e; b++) {
                        var f = a[b].id.split("_");
                        c.push([f[1], f[2]]);
                        d.push(a[b])
                    }
                this.Wc.xs(c, d, this.Ic, this.qb, n)
            }
        }
    },
    iA: function(a) {
        var b = this;
        b.Og != a && b.jA(a, function(a) {
            b.Og = a;
            b.wp();
            b.Wc.Ng = b.Og;
            var a = b.Wc.Ns,
                d;
            for (d in a) delete a[d];
            "df" !== b.Ic && b.Qy();
            b.pI()
        })
    },
    oI: function(a) {
        var b = this,
            c = [],
            d = [],
            e = a.clickFea;
        b.CF = e;
        if (a.type) {
            var f = t.R(e.tileId),
                g = e.tileId;
            if (b.Ic == a.type) {
                var j = Math.pow(2, 18 - b.map.la);
                b.QJ();
                b.Re[g] = {
                    canvas: f,
                    fea: e.fea
                };
                b.ty(e, j);
                var c = this.Re,
                    k;
                for (k in c) d = t.R(k).getContext("2d"), b.Wc.mi(d, c[k].fea, j, i);
                return
            }
            b.wp();
            b.Ic = a.type;
            b.Re[g] = {
                canvas: f,
                fea: e.fea
            };
            b.ty(e, j)
        } else {
            b.Nu();
            if ("df" == b.Ic) return;
            b.wp();
            b.Ic = "df"
        } if (b.Rb) {
            j = b.Rb.childNodes;
            k = 0;
            for (a = j.length; k < a; k++) f = j[k].id.split("_"), c.push([f[f.length - 3], f[f.length - 2]]), d.push(j[k])
        }
        b.Cx || (b.map.addEventListener("onclickicondrawed", function(a) {
            var c = a.tarPoi.id;
            b.ms = i;
            b.Re && b.Re[c] && (b.Re[c].fea = a.tarPoi.fea)
        }), b.Cx = i);
        "df" == b.Ic ? b.Nu() : b.Qy();
        b.Wc.xs(c, d, b.Ic, b.qb, e)
    },
    QJ: function() {
        var a = this.Re,
            b = Math.pow(2, 18 - this.map.la),
            c;
        for (c in a) this.Wc.mi(a[c].canvas.getContext("2d"), a[c].fea, b, o);
        for (var d in a) delete a[d]
    },
    wp: function() {
        var a = this.Re;
        try {
            for (var b in a) delete a[b]
        } catch (c) {}
    },
    ty: function(a) {
        var b = a.tileId.split("_"),
            c = b.length,
            d = parseInt(b[c - 3]),
            e = parseInt(b[c - 2]),
            c = parseInt(b[c - 1]),
            f = d - 1,
            g = d + 1,
            j = e - 1,
            k = e + 1,
            l = this.map.L.replace(/^TANGRAM_/, ""),
            b = t.R(l + "_poi_" + f + "_" + e + "_" + c),
            e = t.R(l + "_poi_" + g + "_" + e + "_" + c),
            m = t.R(l + "_poi_" + d + "_" + j + "_" + c),
            d = t.R(l + "_poi_" + d + "_" + k + "_" + c),
            p = t.R(l + "_poi_" + f + "_" + j + "_" + c),
            f = t.R(l + "_poi_" + f + "_" + k + "_" + c),
            j = t.R(l + "_poi_" + g + "_" + j + "_" + c),
            c = t.R(l + "_poi_" + g + "_" + k + "_" + c);
        b && this.Kg(b, a.fea);
        e && this.Kg(e, a.fea);
        m && this.Kg(m, a.fea);
        d && this.Kg(d, a.fea);
        p && this.Kg(p, a.fea);
        f && this.Kg(f, a.fea);
        j && this.Kg(j, a.fea);
        c && this.Kg(c, a.fea)
    },
    Kg: function(a, b) {
        var c = this.FB(a.mf, b[5].u);
        c && (this.Re[a.id] = {
            canvas: a,
            fea: c
        })
    },
    FB: function(a, b) {
        try {
            if (a.length)
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    if (e[5] && e[5].u && e[5].u == b) return e
                }
        } catch (f) {}
    },
    fF: function(a) {
        a.visible == o ? (this.qb.fe.removeChild(this.Rb), this.Ic = "") : (this.qb.fe.appendChild(this.Rb), a = this.qb.Oj(this.Rb), this.Wc.xs(a.VL, a.UL, this.Ic, this.qb))
    },
    oi: function(a) {
        this.map.U();
        if (this.map.Dc()) {
            this.Vc.style.display = "block";
            this.Rb.style.display = "block";
            this.IJ(this.Vc, this.Rb);
            this.qb.Yx = {};
            var b = this.qb.Oj(this.Vc, "bg");
            poiVectorObj = this.qb.Oj(this.Rb, "poi");
            for (var c in this.Re) t.R(c) || delete this.Re[c];
            this.Wc.vs({
                bg: b,
                poi: poiVectorObj,
                isZoomMap: a ? i : o
            }, this.qb, this.Ic)
        } else {
            a = this.Vc;
            b = this.Rb;
            a.style.display = "none";
            b.style.display = "none";
            c = a.childNodes.length;
            for (c -= 1; 0 <= c; c--) {
                var d = a.childNodes[c];
                a.removeChild(d)
            }
            c = b.childNodes.length;
            for (c -= 1; 0 <= c; c--) d = b.childNodes[c], b.removeChild(d)
        }
    },
    Mo: function(a) {
        if (a) {
            for (var b = [], a = a.childNodes, c = 0, d = a.length; c < d; c++) {
                var e = a[c].id.split("_");
                b.push([e[e.length - 3], e[e.length - 2], a[c]])
            }
            return b
        }
    },
    pI: function() {
        this.map.Dc() && this.Wc.vs({
            bg: this.Mo(this.Vc),
            poi: this.Mo(this.Rb)
        }, this.qb, this.Ic)
    },
    IJ: function(a, b) {
        var c = o;
        if (a)
            for (var d = a.childNodes, e = 0, f = d.length; e < f; e++)
                if (d[e].xe == i) {
                    c = i;
                    break
                }
        if (!c) {
            c = b.childNodes;
            d = 0;
            for (f = c.length; d < f; d++) c[d].xe = o
        }
    },
    OA: function(a) {
        this.map.F.Jo && (a = this.ay(a), this.oI(a), this.Mb(a))
    },
    Mb: function(a) {
        a ? (za() && this.cC(a), H() && this.nj && this.nj.switchTo(a)) : H() && this.nj && this.nj.H()
    },
    JF: function(a) {
        this.map.F.Jo && (this.ay(a) ? (this.map.platform.style.cursor = "pointer", this.map.D.kz = i) : (this.map.D.kz = o, this.map.platform.style.cursor != this.map.F.jb && 0 == this.map.D.sd.length && (this.map.platform.style.cursor = this.map.F.jb)))
    },
    cC: function(a) {
        var b = a.uid;
        if (b) {
            var c = this;
            lc.Pa(function(d) {
                c.EB(b, d, a)
            }, {
                qt: "inf",
                uid: b,
                operate: "mapclick",
                clicktype: "vector"
            })
        }
    },
    EB: function(a, b, c) {
        if (b && b.content) {
            b = b.content;
            c = this.map.Sa(c.point);
            if (!d) var d = {};
            d.isFromMPC = i;
            var e = b.addr;
            if (1 == b.poiType || 3 == b.poiType) e = N.unique(e.split(";")).join("; ");
            var f = b.tel;
            f && (f = f.replace(/,/g, ", "));
            this.Fq(b.cla);
            d = J("div", {
                style: "font-size:12px;padding:5px 0;overflow:hidden;*zoom:1;"
            });
            if (e) {
                var g = J("p", {
                    style: "padding:0;margin:0;line-height:18px;font-size:12px;color:#4d4d4d;"
                });
                g.innerHTML = "\u5730\u5740\uff1a" + e;
                d.appendChild(g)
            }
            f && (e = J("p", {
                style: "padding:0;margin:0;line-height:18px;font-size:12px;color:#4d4d4d;"
            }), e.innerHTML = "\u7535\u8bdd\uff1a" + f, d.appendChild(e));
            b.tag && (f = J("p", {
                style: "padding:0;margin:0;line-height:18px;font-size:12px;color:#4d4d4d;color:#7f7f7f;"
            }), f.innerHTML = "\u6807\u7b7e\uff1a" + b.tag, d.appendChild(f));
            a = "http://api.map.baidu.com/place/detail?uid=" + a + "&output=html&source=jsapi&operate=mapclick&clicktype=vector";
            b = "<div style='height:26px;'><a href='" + a + "' target='_blank' style='font-size:14px;color:#4d4d4d;font-weight:bold;text-decoration:none;' onmouseover='this.style.textDecoration=\"underline\";this.style.color=\"#3d6dcc\"' onmouseout ='this.style.textDecoration=\"none\";this.style.color=\"#4d4d4d\"'>" + b.name + "</a>";
            this.map.Mb(new Jb(d, {
                width: 322,
                enableSearchTool: i,
                title: b + ("<a href='" + a + "' target='_blank' style='font-size:12px;color:#3d6dcc;margin-left:5px;text-decoration:none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout ='this.style.textDecoration=\"none\"'>\u8be6\u60c5&raquo;</a>") + "</div>"
            }), c)
        }
    },
    Fq: function(a) {
        for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c][1]), c < d - 1 && b.push(", ");
        return b.join("")
    },
    ay: function(a) {
        var b = this.Rb.getElementsByTagName("canvas"),
            c = a.offsetX,
            d = a.offsetY,
            e = aa,
            f = aa;
        this.map.Bb();
        for (var f = this.map.ha().m.Hb, g = 0, j = b.length; g < j; g++) {
            var k = this.Ke(b[g]);
            if (c > k.left && c <= k.left + f && d > k.top && d <= k.top + f) {
                e = b[g];
                break
            }
        }
        if (e == aa || e.mf == aa) return o;
        f = e.mf;
        b = 0;
        for (j = f.length; b < j; b++) {
            var c = f[b],
                d = c[0],
                g = c[1],
                l = window.ag[c[3]],
                m = l[0],
                l = this.Wc.Gy(l, window.ag[c[4]])[1],
                p = c[5] || {};
            if (2 != m && (3 != m && 4 != m && 0 < l.length && p.u) && (iconX = g[0] + k.left, iconY = g[1] + k.top, a.offsetX >= iconX - 15 && a.offsetX <= iconX + 15 && a.offsetY >= iconY - 15 && a.offsetY <= iconY + 15)) return {
                type: c[5].c || "",
                name: d,
                uid: p.u || "",
                point: {
                    x: iconX,
                    y: iconY
                },
                clickFea: {
                    tileId: e.id,
                    tile: e,
                    fea: c
                }
            }
        }
        return o
    },
    jz: function() {
        return /M040/i.test(navigator.userAgent)
    },
    Ke: function(a) {
        for (var b = a.offsetLeft, c = a.offsetTop, a = a.offsetParent; a && a != this.map.Ba();) b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
        return {
            top: c,
            left: b
        }
    },
    rF: function(a) {
        var a = this.Wz = a,
            b;
        for (b in a) switch (b) {
            case "style":
                this.iA(a[b]);
                break;
            case "features":
                this.MI(a[b]);
                break;
            case "poiElements":
                this.bJ(a[b])
        }
    },
    Qy: function() {
        this.Nu();
        "dark" == this.Og ? t.z.Ya(this.Vc, "light_gray_background") : t.z.Ya(this.Vc, "gray_background")
    },
    Nu: function() {
        t.z.Ob(this.Vc, "gray_background");
        t.z.Ob(this.Vc, "light_gray_background")
    }
});
window.ag = {
    1: [3, -1497178369, [2, -1497178369, 1, 0, 0, [], 0, 0]],
    10: [2, -1280068609, 1, 2, 2, [4, 3], 1, 0],
    100: [2, -237677057, 8, 2, 2, [], 0, 0],
    1E3: [2, -843149313, 8, 0, 2, [], 1, 0],
    1001: [2, -843149313, 12, 0, 2, [], 1, 0],
    1002: [2, -237677057, 3, 0, 2, [], 1, 0],
    1003: [2, -237677057, 3, 0, 2, [], 1, 0],
    1004: [2, -237677057, 3, 0, 2, [], 1, 0],
    1005: [2, -237677057, 3, 0, 2, [], 1, 0],
    1006: [2, -237677057, 3, 0, 2, [], 1, 0],
    1007: [2, -237677057, 4, 0, 2, [], 1, 0],
    1008: [2, -237677057, 8, 0, 2, [], 1, 0],
    1009: [2, -237677057, 10, 0, 2, [], 1, 0],
    101: [2, -237677057, 10, 2, 2, [], 0, 0],
    1010: [2, -237677057, 12, 0, 2, [], 1, 0],
    1011: [2, -237677057, 14, 0, 2, [], 1, 0],
    1012: [2, -559393793, 3, 0, 2, [], 1, 0],
    1013: [2, -559393793, 3, 0, 2, [], 1, 0],
    1014: [2, -559393793, 3, 0, 2, [], 1, 0],
    1015: [2, -559393793, 4, 0, 2, [], 1, 0],
    1016: [2, -559393793, 4, 0, 2, [], 1, 0],
    1017: [2, -559393793, 5, 0, 2, [], 1, 0],
    1018: [2, -559393793, 10, 0, 2, [], 1, 0],
    1019: [2, -559393793, 12, 0, 2, [], 1, 0],
    102: [2, -559393793, 3, 0, 2, [], 0, 0],
    1020: [2, -559393793, 14, 0, 2, [], 1, 0],
    1021: [2, -559393793, 16, 0, 2, [], 1, 0],
    1022: [2, -303174145, 1, 0, 2, [], 1, 0],
    1023: [2, -454761217, 3, 0, 2, [], 1, 0],
    1024: [2, -454761217, 4, 0, 2, [], 1, 0],
    1025: [2, -758265345, 5, 0, 2, [], 1, 0],
    1026: [2, -758265345, 7, 0, 2, [], 1, 0],
    1027: [2, -758265345, 9, 0, 2, [], 1, 0],
    1028: [2, -455423489, 3, 0, 2, [], 1, 0],
    1029: [2, -455423489, 3, 0, 2, [], 1, 0],
    103: [2, -559393793, 3, 0, 2, [], 0, 0],
    1030: [2, -455423489, 3, 0, 2, [], 1, 0],
    1031: [2, -455423489, 3, 0, 2, [], 1, 0],
    1032: [2, -843149313, 3, 0, 2, [], 1, 0],
    1033: [2, -843149313, 4, 0, 2, [], 1, 0],
    1034: [2, -843149313, 5, 0, 2, [], 1, 0],
    1035: [2, -843149313, 7, 0, 2, [], 1, 0],
    1036: [2, -843149313, 9, 0, 2, [], 1, 0],
    1037: [2, -455423489, 3, 0, 2, [], 1, 0],
    1038: [2, -455423489, 3, 0, 2, [], 1, 0],
    1039: [2, -455423489, 3, 0, 2, [], 1, 0],
    104: [2, -559393793, 3, 0, 2, [], 0, 0],
    1040: [2, -455423489, 3, 0, 2, [], 1, 0],
    1041: [2, -843149313, 3, 0, 2, [], 1, 0],
    1042: [2, -843149313, 5, 0, 2, [], 1, 0],
    1043: [2, -843149313, 6, 0, 2, [], 1, 0],
    1044: [2, -843149313, 8, 0, 2, [], 1, 0],
    1045: [2, -843149313, 10, 0, 2, [], 1, 0],
    1046: [2, -237677057, 3, 0, 2, [], 1, 0],
    1047: [2, -237677057, 3, 0, 2, [], 1, 0],
    1048: [2, -237677057, 3, 0, 2, [], 1, 0],
    1049: [2, -237677057, 3, 0, 2, [], 1, 0],
    105: [2, -559393793, 3, 0, 2, [], 0, 0],
    1050: [2, -237677057, 4, 0, 2, [], 1, 0],
    1051: [2, -237677057, 5, 0, 2, [], 1, 0],
    1052: [2, -237677057, 6, 0, 2, [], 1, 0],
    1053: [2, -237677057, 8, 0, 2, [], 1, 0],
    1054: [2, -237677057, 10, 0, 2, [], 1, 0],
    1055: [2, -593543425, 3, 0, 2, [], 1, 0],
    1056: [2, -593543425, 3, 0, 2, [], 1, 0],
    1057: [2, -593543425, 3, 0, 2, [], 1, 0],
    1058: [2, -593543425, 3, 0, 2, [], 1, 0],
    1059: [2, -593543425, 4, 0, 2, [], 1, 0],
    106: [2, -559393793, 4, 2, 2, [], 0, 0],
    1060: [2, -593543425, 5, 0, 2, [], 1, 0],
    1061: [2, -593543425, 6, 0, 2, [], 1, 0],
    1062: [2, -593543425, 8, 0, 2, [], 1, 0],
    1063: [2, -593543425, 10, 0, 2, [], 1, 0],
    1064: [2, -559393793, 3, 0, 2, [], 1, 0],
    1065: [2, -559393793, 3, 0, 2, [], 1, 0],
    1066: [2, -559393793, 3, 0, 2, [], 1, 0],
    1067: [2, -559393793, 3, 0, 2, [], 1, 0],
    1068: [2, -559393793, 4, 0, 2, [], 1, 0],
    1069: [2, -559393793, 5, 0, 2, [], 1, 0],
    107: [2, -559393793, 6, 2, 2, [], 0, 0],
    1070: [2, -559393793, 6, 0, 2, [], 1, 0],
    1071: [2, -559393793, 8, 0, 2, [], 1, 0],
    1072: [2, -559393793, 10, 0, 2, [], 1, 0],
    1073: [2, 1553057279, 1, 0, 2, [10, 11], 1, 0],
    1074: [2, -303174145, 1, 0, 2, [], 1, 0],
    1075: [2, -454761217, 3, 0, 2, [], 1, 0],
    1076: [2, -454761217, 4, 0, 2, [], 1, 0],
    1077: [2, -758265345, 5, 0, 2, [], 1, 0],
    1078: [2, -758265345, 7, 0, 2, [], 1, 0],
    1079: [2, -758265345, 9, 0, 2, [], 1, 0],
    108: [2, -559393793, 10, 2, 2, [], 0, 0],
    1080: [2, -455423489, 3, 0, 2, [], 1, 0],
    1081: [2, -455423489, 3, 0, 2, [], 1, 0],
    1082: [2, -455423489, 3, 0, 2, [], 1, 0],
    1083: [2, -455423489, 3, 0, 2, [], 1, 0],
    1084: [2, -843149313, 3, 0, 2, [], 1, 0],
    1085: [2, -843149313, 5, 0, 2, [], 1, 0],
    1086: [2, -843149313, 6, 0, 2, [], 1, 0],
    1087: [2, -843149313, 8, 0, 2, [], 1, 0],
    1088: [2, -843149313, 10, 0, 2, [], 1, 0],
    1089: [2, -455423489, 3, 0, 2, [], 1, 0],
    109: [2, -593543425, 3, 0, 2, [], 0, 0],
    1090: [2, -455423489, 3, 0, 2, [], 1, 0],
    1091: [2, -455423489, 3, 0, 2, [], 1, 0],
    1092: [2, -455423489, 3, 0, 2, [], 1, 0],
    1093: [2, -843149313, 3, 0, 2, [], 1, 0],
    1094: [2, -843149313, 5, 0, 2, [], 1, 0],
    1095: [2, -843149313, 6, 0, 2, [], 1, 0],
    1096: [2, -843149313, 8, 0, 2, [], 1, 0],
    1097: [2, -843149313, 10, 0, 2, [], 1, 0],
    1098: [2, -237677057, 3, 0, 2, [], 1, 0],
    1099: [2, -237677057, 3, 0, 2, [], 1, 0],
    11: [2, -1067009, 4, 2, 2, [], 0, 0],
    110: [2, -593543425, 3, 0, 2, [], 0, 0],
    1100: [2, -237677057, 3, 0, 2, [], 1, 0],
    1101: [2, -237677057, 3, 0, 2, [], 1, 0],
    1102: [2, -237677057, 3, 0, 2, [], 1, 0],
    1103: [2, -237677057, 4, 0, 2, [], 1, 0],
    1104: [2, -237677057, 5, 0, 2, [], 1, 0],
    1105: [2, -237677057, 6, 0, 2, [], 1, 0],
    1106: [2, -237677057, 7, 0, 2, [], 1, 0],
    1107: [2, -237677057, 8, 0, 2, [], 1, 0],
    1108: [2, -559393793, 3, 0, 2, [], 1, 0],
    1109: [2, -559393793, 3, 0, 2, [], 1, 0],
    111: [2, -593543425, 3, 0, 2, [], 0, 0],
    1110: [2, -559393793, 3, 0, 2, [], 1, 0],
    1111: [2, -559393793, 3, 0, 2, [], 1, 0],
    1112: [2, -559393793, 4, 0, 2, [], 1, 0],
    1113: [2, -559393793, 6, 0, 2, [], 1, 0],
    1114: [2, -559393793, 7, 0, 2, [], 1, 0],
    1115: [2, -559393793, 8, 0, 2, [], 1, 0],
    1116: [2, -559393793, 9, 0, 2, [], 1, 0],
    1117: [1, "biaopai_guodao", [5, "Tahoma", 9, -1, 16, -1]],
    1118: [1, "biaopai_guodao", [5, "Tahoma", 9, -1, 16, -1]],
    1119: [1, "biaopai_guodao", [5, "Tahoma", 9, -1, 16, -1]],
    112: [2, -593543425, 3, 0, 2, [], 0, 0],
    1120: [1, "biaopai_guodao", [5, "Tahoma", 9, -1, 16, -1]],
    1121: [1, "biaopai_guodao", [5, "Tahoma", 9, -1, 16, -1]],
    1122: [1, "biaopai_shengdao", [5, "Tahoma", 9, -1, 16, -1]],
    1123: [1, "biaopai_shengdao", [5, "Tahoma", 9, -1, 16, -1]],
    1124: [1, "biaopai_shengdao", [5, "Tahoma", 9, -1, 16, -1]],
    1125: [1, "biaopai_shengdao", [5, "Tahoma", 9, -1, 16, -1]],
    1126: [1, "biaopai_shengdao", [5, "Tahoma", 9, -1, 16, -1]],
    1127: [1, "biaopai_xiandao", [5, "Tahoma", 9, 1835888127, 16, -1]],
    1128: [1, "biaopai_xiandao", [5, "Tahoma", 9, 1835888127, 16, -1]],
    1129: [1, "biaopai_xiandao", [5, "Tahoma", 9, 1835888127, 16, -1]],
    113: [2, -593543425, 4, 2, 2, [], 0, 0],
    1130: [1, "biaopai_xiandao", [5, "Tahoma", 9, 1835888127, 16, -1]],
    1131: [1, "biaopai_gaosu1", [5, "Tahoma", 9, -1, 48, -1]],
    1132: [1, "biaopai_gaosu1", [5, "Tahoma", 9, -1, 48, -1]],
    1133: [1, "biaopai_gaosu1", [5, "Tahoma", 9, -1, 48, -1]],
    1134: [1, "biaopai_gaosu1", [5, "Tahoma", 9, -1, 48, -1]],
    1135: [1, "biaopai_gaosu1", [5, "Tahoma", 9, -1, 48, -1]],
    1136: [1, "biaopai_gaosu1", [5, "Tahoma", 9, -1, 48, -1]],
    1137: [1, "biaopai_gaosu2", [5, "Tahoma", 9, -1, 48, -1]],
    1138: [1, "biaopai_gaosu2", [5, "Tahoma", 9, -1, 48, -1]],
    1139: [1, "biaopai_gaosu2", [5, "Tahoma", 9, -1, 48, -1]],
    114: [2, -593543425, 6, 2, 2, [], 0, 0],
    1140: [1, "biaopai_gaosu2", [5, "Tahoma", 9, -1, 48, -1]],
    1141: [1, "biaopai_gaosu2", [5, "Tahoma", 9, -1, 48, -1]],
    1142: [1, "biaopai_gaosu2", [5, "Tahoma", 9, -1, 48, -1]],
    1143: [5, "1", 10, 255, 16, -1],
    1144: [5, "1", 11, 255, 16, -1],
    1145: [5, "1", 11, 255, 16, -1],
    1146: [5, "1", 11, 255, 16, -1],
    1147: [5, "1", 12, 255, 16, -1],
    1148: [5, "1", 12, -1806167297, 16, -16928257],
    1149: [5, "1", 13, -1806167297, 16, -16928257],
    115: [2, -593543425, 10, 2, 2, [], 0, 0],
    1150: [5, "1", 13, -1806167297, 16, -16928257],
    1151: [5, "1", 13, -1806167297, 16, -16928257],
    1152: [5, "1", 14, -1806167297, 16, -16928257],
    1153: [5, "1", 12, -1806167297, 16, -16928257],
    1154: [5, "1", 13, -1806167297, 16, -16928257],
    1155: [5, "1", 13, -1806167297, 16, -16928257],
    1156: [5, "1", 13, -1806167297, 16, -16928257],
    1157: [5, "1", 14, -1806167297, 16, -16928257],
    1158: [5, "1", 11, -1789324545, 16, -559873],
    1159: [5, "1", 12, -1789324545, 16, -559873],
    116: [2, -559393793, 3, 0, 2, [], 0, 0],
    1160: [5, "1", 13, -1789324545, 16, -559873],
    1161: [5, "1", 13, -1789324545, 16, -559873],
    1162: [5, "1", 13, -1789324545, 16, -559873],
    1163: [5, "1", 14, -1789324545, 16, -559873],
    1164: [5, "1", 11, -1687872257, 16, -2201857],
    1165: [5, "1", 12, -1687872257, 16, -2201857],
    1166: [5, "1", 13, -1687872257, 16, -2201857],
    1167: [5, "1", 13, -1687872257, 16, -2201857],
    1168: [5, "1", 13, -1687872257, 16, -2201857],
    1169: [5, "1", 14, -1687872257, 16, -2201857],
    117: [2, -559393793, 3, 0, 2, [], 0, 0],
    1170: [5, "1", 12, 2117931775, 16, -20748801],
    1171: [5, "1", 12, 2117931775, 16, -20748801],
    1172: [5, "1", 14, 2117931775, 16, -20748801],
    1173: [5, "1", 14, 2117931775, 16, -20748801],
    1174: [5, "1", 14, 2117931775, 16, -20748801],
    1175: [5, "1", 15, 2117931775, 16, -20748801],
    1176: [5, "1", 11, -1687872257, 16, -2201857],
    1177: [5, "1", 11, -1687872257, 16, -2201857],
    1178: [5, "1", 13, -1687872257, 16, -2201857],
    1179: [5, "1", 13, -1687872257, 16, -2201857],
    118: [2, -559393793, 3, 0, 2, [], 0, 0],
    1180: [5, "1", 13, -1687872257, 16, -2201857],
    1181: [5, "1", 14, -1687872257, 16, -2201857],
    1182: [5, "1", 10, 255, 16, -1],
    1183: [5, "1", 11, 255, 16, -1],
    1184: [5, "1", 11, 255, 16, -1],
    1185: [5, "1", 12, 255, 16, -1],
    1186: [5, "1", 12, -1806167297, 16, -16928257],
    1187: [5, "1", 13, -1806167297, 16, -16928257],
    1188: [5, "1", 13, -1806167297, 16, -16928257],
    1189: [5, "1", 13, -1806167297, 16, -16928257],
    119: [2, -559393793, 3, 0, 2, [], 0, 0],
    1190: [5, "1", 14, -1806167297, 16, -16928257],
    1191: [5, "1", 12, -1806167297, 16, -16928257],
    1192: [5, "1", 13, -1806167297, 16, -16928257],
    1193: [5, "1", 13, -1806167297, 16, -16928257],
    1194: [5, "1", 13, -1806167297, 16, -16928257],
    1195: [5, "1", 14, -1806167297, 16, -16928257],
    1196: [5, "1", 11, -1789324545, 16, -559873],
    1197: [5, "1", 12, -1789324545, 16, -559873],
    1198: [5, "1", 13, -1789324545, 16, -559873],
    1199: [5, "1", 13, -1789324545, 16, -559873],
    12: [2, -1067009, 4, 2, 2, [], 0, 0],
    120: [2, -559393793, 4, 2, 2, [], 0, 0],
    1200: [5, "1", 13, -1789324545, 16, -559873],
    1201: [5, "1", 14, -1789324545, 16, -559873],
    1202: [5, "1", 12, -1687872257, 16, -2201857],
    1203: [5, "1", 13, -1687872257, 16, -2201857],
    1204: [5, "1", 13, -1687872257, 16, -2201857],
    1205: [5, "1", 13, -1687872257, 16, -2201857],
    1206: [5, "1", 14, -1687872257, 16, -2201857],
    1207: [5, "1", 11, 255551231, 16, -1],
    1208: [5, "1", 11, 255551231, 16, -1],
    1209: [5, "1", 11, 255551231, 16, -1],
    121: [2, -559393793, 6, 2, 2, [], 0, 0],
    1210: [5, "1", 11, 255, 16, -1],
    1211: [5, "1", 11, 255, 16, -1],
    1212: [5, "1", 12, 255, 16, -1],
    1213: [5, "1", 13, -1806167297, 16, -16928257],
    1214: [5, "1", 14, -1806167297, 16, -16928257],
    1215: [5, "1", 13, -1806167297, 16, -16928257],
    1216: [5, "1", 14, -1806167297, 16, -16928257],
    1217: [5, "1", 13, -1789324545, 16, -559873],
    1218: [5, "1", 14, -1789324545, 16, -559873],
    1219: [5, "1", 13, -1687872257, 16, -2201857],
    122: [2, -559393793, 10, 2, 2, [], 0, 0],
    1220: [5, "1", 14, -1687872257, 16, -2201857],
    1221: [5, "1", 11, 255, 16, -1],
    1222: [5, "1", 12, 255, 16, -1],
    1223: [5, "1", 13, -1806167297, 16, -16928257],
    1224: [5, "1", 13, -1806167297, 16, -16928257],
    1225: [5, "1", 14, -1806167297, 16, -16928257],
    1226: [5, "1", 13, -1806167297, 16, -16928257],
    1227: [5, "1", 13, -1806167297, 16, -16928257],
    1228: [5, "1", 14, -1806167297, 16, -16928257],
    1229: [5, "1", 13, -1789324545, 16, -559873],
    123: [2, -303174145, 1, 2, 2, [], 0, 0],
    1230: [5, "1", 13, -1789324545, 16, -559873],
    1231: [5, "1", 14, -1789324545, 16, -559873],
    1232: [5, "1", 13, -1687872257, 16, -2201857],
    1233: [5, "1", 13, -1687872257, 16, -2201857],
    1234: [5, "1", 14, -1687872257, 16, -2201857],
    1235: [5, "1", 12, 1613110527, 16, -224504833],
    1236: [5, "1", 12, 1613110527, 16, -224504833],
    1237: [5, "1", 14, 1613110527, 16, -224504833],
    1238: [5, "1", 12, -1856301825, 16, -3905793],
    1239: [5, "1", 12, -1856301825, 16, -3905793],
    124: [2, -454761217, 3, 2, 2, [], 0, 0],
    1240: [5, "1", 14, -1856301825, 16, -3905793],
    1241: [5, "1", 11, 255, 16, -1],
    1242: [5, "1", 12, 255, 16, -1],
    1243: [5, "1", 13, -1806167297, 16, -16928257],
    1244: [5, "1", 14, -1806167297, 16, -16928257],
    1245: [5, "1", 13, -1806167297, 16, -16928257],
    1246: [5, "1", 14, -1806167297, 16, -16928257],
    1247: [5, "1", 13, -1789324545, 16, -559873],
    1248: [5, "1", 14, -1789324545, 16, -559873],
    1249: [5, "1", 13, -1687872257, 16, -2201857],
    125: [2, -454761217, 3, 2, 2, [], 0, 0],
    1250: [5, "1", 14, -1687872257, 16, -2201857],
    1251: [2, 89, 1.5, 0, 0, [], 0, 1],
    1252: [2, -1802201857, 2, 2, 2, [], 0, 0],
    1253: [2, -1802201857, 3, 2, 2, [], 0, 0],
    1254: [2, -1802201857, 5, 2, 2, [], 0, 0],
    1255: [2, -1, 1.5, 0, 2, [10, 11], 1, 0],
    1256: [2, -1, 2.5, 0, 2, [15, 16], 1, 0],
    1257: [2, -1, 4.5, 0, 2, [25, 26], 1, 0],
    1258: [2, -129, 3, 2, 2, [9, 2], 1, 0],
    1259: [2, -129, 3, 2, 2, [9, 2], 1, 0],
    126: [2, -758265345, 4, 2, 2, [1, 6], 1, 0],
    1260: [2, -129, 3, 2, 2, [9, 2], 1, 0],
    1261: [2, -2038003969, 1, 2, 2, [7, 4], 1, 0],
    1262: [2, 1852731135, 1, 2, 2, [7, 4], 1, 0],
    1263: [2, 1852731135, 1, 2, 2, [7, 4], 1, 0],
    1264: [2, -1, 4, 2, 2, [], 1, 0],
    1265: [2, -1, 4, 2, 2, [], 1, 0],
    1266: [2, -1, 4, 2, 2, [], 1, 0],
    1267: [2, -1, 4, 2, 2, [], 1, 0],
    1268: [2, -1, 5, 2, 2, [], 1, 0],
    1269: [2, -1, 6, 2, 2, [], 1, 0],
    127: [2, -758265345, 5, 2, 2, [1, 6], 1, 0],
    1270: [2, -1, 9, 2, 2, [], 1, 0],
    1271: [2, -1, 4, 2, 2, [], 1, 0],
    1272: [2, -1, 4, 2, 2, [], 1, 0],
    1273: [2, -1, 4, 2, 2, [], 1, 0],
    1274: [2, -1, 4, 2, 2, [], 1, 0],
    1275: [2, -1, 4, 2, 2, [], 1, 0],
    1276: [2, -1, 6, 2, 2, [], 1, 0],
    1277: [2, -1, 9, 2, 2, [], 1, 0],
    1278: [2, -1, 4, 2, 2, [], 1, 0],
    1279: [2, -1, 4, 2, 2, [], 1, 0],
    128: [2, -758265345, 7, 2, 2, [1, 10], 1, 0],
    1280: [2, -1, 4, 2, 2, [], 1, 0],
    1281: [2, -1, 4, 2, 2, [], 1, 0],
    1282: [2, -1, 4, 2, 2, [], 1, 0],
    1283: [2, -1, 6, 2, 2, [], 1, 0],
    1284: [2, -1, 9, 2, 2, [], 1, 0],
    1285: [2, -1, 4, 2, 2, [], 1, 0],
    1286: [2, -1, 4, 2, 2, [], 1, 0],
    1287: [2, -1, 4, 2, 2, [], 1, 0],
    1288: [2, -1, 4, 2, 2, [], 1, 0],
    1289: [2, -1, 4, 2, 2, [], 1, 0],
    129: [2, -758265345, 7, 2, 2, [1, 6], 1, 0],
    1290: [2, -1, 6, 2, 2, [], 1, 0],
    1291: [2, -1, 9, 2, 2, [], 1, 0],
    1292: [2, -1, 4, 2, 2, [], 1, 0],
    1293: [2, -1, 4, 2, 2, [], 1, 0],
    1294: [2, -1, 4, 2, 2, [], 1, 0],
    1295: [2, -1, 4, 2, 2, [], 1, 0],
    1296: [2, -1, 4, 2, 2, [], 1, 0],
    1297: [2, -1, 6, 2, 2, [], 1, 0],
    1298: [2, -1, 9, 2, 2, [], 1, 0],
    1299: [2, -1, 4, 2, 2, [], 1, 0],
    13: [2, -1297845761, 2, 2, 2, [], 0, 0],
    130: [2, -303174145, 1, 2, 2, [], 0, 0],
    1300: [2, -1, 4, 2, 2, [], 1, 0],
    1301: [2, -1, 4, 2, 2, [], 1, 0],
    1302: [2, -1, 4, 2, 2, [], 1, 0],
    1303: [2, -1, 4, 2, 2, [], 1, 0],
    1304: [2, -1, 6, 2, 2, [], 1, 0],
    1305: [2, -1, 9, 2, 2, [], 1, 0],
    1306: [2, -1, 4, 2, 2, [], 1, 0],
    1307: [2, -1, 4, 2, 2, [], 1, 0],
    1308: [2, -1, 4, 2, 2, [], 1, 0],
    1309: [2, -1, 4, 2, 2, [], 1, 0],
    131: [2, -454761217, 4, 2, 2, [], 0, 0],
    1310: [2, -1, 4, 2, 2, [], 1, 0],
    1311: [2, -1, 6, 2, 2, [], 1, 0],
    1312: [2, -1, 9, 2, 2, [], 1, 0],
    1313: [2, -1, 4, 2, 2, [], 1, 0],
    1314: [2, -1, 4, 2, 2, [], 1, 0],
    1315: [2, -1, 4, 2, 2, [], 1, 0],
    1316: [2, -1, 4, 2, 2, [], 1, 0],
    1317: [2, -1, 4, 2, 2, [], 1, 0],
    1318: [2, -1, 6, 2, 2, [], 1, 0],
    1319: [2, -1, 9, 2, 2, [], 1, 0],
    132: [2, -454761217, 5, 2, 2, [], 0, 0],
    1320: [2, -1, 4, 2, 2, [], 1, 0],
    1321: [2, -1, 4, 2, 2, [], 1, 0],
    1322: [2, -1, 4, 2, 2, [], 1, 0],
    1323: [2, -1, 4, 2, 2, [], 1, 0],
    1324: [2, -1, 4, 2, 2, [], 1, 0],
    1325: [2, -1, 6, 2, 2, [], 1, 0],
    1326: [2, -1, 9, 2, 2, [], 1, 0],
    1327: [2, -1, 4, 2, 2, [], 1, 0],
    1328: [2, -1, 4, 2, 2, [], 1, 0],
    1329: [2, -1, 4, 2, 2, [], 1, 0],
    133: [2, -758265345, 6, 2, 2, [], 0, 0],
    1330: [2, -1, 4, 2, 2, [], 1, 0],
    1331: [2, -1, 4, 2, 2, [], 1, 0],
    1332: [2, -1, 6, 2, 2, [], 1, 0],
    1333: [2, -1, 9, 2, 2, [], 1, 0],
    1334: [2, -1, 4, 2, 2, [], 1, 0],
    1335: [2, -1, 4, 2, 2, [], 1, 0],
    1336: [2, -1, 4, 2, 2, [], 1, 0],
    1337: [2, -1, 4, 2, 2, [], 1, 0],
    1338: [2, -1, 4, 2, 2, [], 1, 0],
    1339: [2, -1, 6, 2, 2, [], 1, 0],
    134: [2, -758265345, 8, 2, 2, [], 0, 0],
    1340: [2, -1, 9, 2, 2, [], 1, 0],
    1341: [2, -1, 4, 2, 2, [], 1, 0],
    1342: [2, -1, 4, 2, 2, [], 1, 0],
    1343: [2, -1, 4, 2, 2, [], 1, 0],
    1344: [2, -1, 4, 2, 2, [], 1, 0],
    1345: [2, -1, 4, 2, 2, [], 1, 0],
    1346: [2, -1, 6, 2, 2, [], 1, 0],
    1347: [2, -1, 9, 2, 2, [], 1, 0],
    1348: [2, -1, 4, 2, 2, [], 1, 0],
    1349: [2, -1, 4, 2, 2, [], 1, 0],
    135: [2, -758265345, 10, 2, 2, [], 0, 0],
    1350: [2, -1, 4, 2, 2, [], 1, 0],
    1351: [2, -1, 4, 2, 2, [], 1, 0],
    1352: [2, -1, 4, 2, 2, [], 1, 0],
    1353: [2, -1, 6, 2, 2, [], 1, 0],
    1354: [2, -1, 9, 2, 2, [], 1, 0],
    1355: [2, -1, 4, 2, 2, [], 1, 0],
    1356: [2, -1, 4, 2, 2, [], 1, 0],
    1357: [2, -1, 4, 2, 2, [], 1, 0],
    1358: [2, -1, 4, 2, 2, [], 1, 0],
    1359: [2, -1, 4, 2, 2, [], 1, 0],
    136: [2, -758265345, 10, 2, 2, [], 0, 0],
    1360: [2, -1, 6, 2, 2, [], 1, 0],
    1361: [2, -1, 9, 2, 2, [], 1, 0],
    1362: [2, -1, 4, 2, 2, [], 1, 0],
    1363: [2, -1, 4, 2, 2, [], 1, 0],
    1364: [2, -1, 4, 2, 2, [], 1, 0],
    1365: [2, -1, 4, 2, 2, [], 1, 0],
    1366: [2, -1, 4, 2, 2, [], 1, 0],
    1367: [2, -1, 6, 2, 2, [], 1, 0],
    1368: [2, -1, 9, 2, 2, [], 1, 0],
    1369: [2, -1, 4, 2, 2, [], 1, 0],
    137: [2, -455423489, 3, 2, 2, [], 0, 0],
    1370: [2, -1, 4, 2, 2, [], 1, 0],
    1371: [2, -1, 4, 2, 2, [], 1, 0],
    1372: [2, -1, 4, 2, 2, [], 1, 0],
    1373: [2, -1, 4, 2, 2, [], 1, 0],
    1374: [2, -1, 6, 2, 2, [], 1, 0],
    1375: [2, -1, 9, 2, 2, [], 1, 0],
    1376: [2, -481736193, 2, 2, 2, [], 1, 0],
    1377: [2, -481736193, 2, 2, 2, [], 1, 0],
    1378: [2, -481736193, 2, 2, 2, [], 1, 0],
    1379: [2, -481736193, 2, 2, 2, [], 1, 0],
    138: [2, -455423489, 3, 2, 2, [], 0, 0],
    1380: [2, -481736193, 2, 2, 2, [], 1, 0],
    1381: [2, -481736193, 4, 2, 2, [], 1, 0],
    1382: [2, -481736193, 7, 2, 2, [], 1, 0],
    1383: [2, 1232784639, 2, 2, 2, [], 1, 0],
    1384: [2, 1232784639, 2, 2, 2, [], 1, 0],
    1385: [2, 1232784639, 2, 2, 2, [], 1, 0],
    1386: [2, 1232784639, 2, 2, 2, [], 1, 0],
    1387: [2, 1232784639, 2, 2, 2, [], 1, 0],
    1388: [2, 1232784639, 4, 2, 2, [], 1, 0],
    1389: [2, 1232784639, 7, 2, 2, [], 1, 0],
    139: [2, -455423489, 4, 2, 2, [], 0, 0],
    1390: [2, 1304012031, 2, 2, 2, [], 1, 0],
    1391: [2, 1304012031, 2, 2, 2, [], 1, 0],
    1392: [2, 1304012031, 2, 2, 2, [], 1, 0],
    1393: [2, 1304012031, 2, 2, 2, [], 1, 0],
    1394: [2, 1304012031, 2, 2, 2, [], 1, 0],
    1395: [2, 1304012031, 4, 2, 2, [], 1, 0],
    1396: [2, 1304012031, 7, 2, 2, [], 1, 0],
    1397: [2, -864374273, 2, 2, 2, [], 1, 0],
    1398: [2, -864374273, 2, 2, 2, [], 1, 0],
    1399: [2, -864374273, 2, 2, 2, [], 1, 0],
    14: [2, -1297845761, 2, 2, 2, [8, 8], 1, 0],
    140: [2, -455423489, 4, 2, 2, [], 0, 0],
    1400: [2, -864374273, 2, 2, 2, [], 1, 0],
    1401: [2, -864374273, 2, 2, 2, [], 1, 0],
    1402: [2, -864374273, 4, 2, 2, [], 1, 0],
    1403: [2, -864374273, 7, 2, 2, [], 1, 0],
    1404: [2, -1332988673, 2, 2, 2, [], 1, 0],
    1405: [2, -1332988673, 2, 2, 2, [], 1, 0],
    1406: [2, -1332988673, 2, 2, 2, [], 1, 0],
    1407: [2, -1332988673, 2, 2, 2, [], 1, 0],
    1408: [2, -1332988673, 2, 2, 2, [], 1, 0],
    1409: [2, -1332988673, 4, 2, 2, [], 1, 0],
    141: [2, -843149313, 6, 2, 2, [], 0, 0],
    1410: [2, -1332988673, 7, 2, 2, [], 1, 0],
    1411: [2, 882914559, 2, 2, 2, [], 1, 0],
    1412: [2, 882914559, 2, 2, 2, [], 1, 0],
    1413: [2, 882914559, 2, 2, 2, [], 1, 0],
    1414: [2, 882914559, 2, 2, 2, [], 1, 0],
    1415: [2, 882914559, 2, 2, 2, [], 1, 0],
    1416: [2, 882914559, 4, 2, 2, [], 1, 0],
    1417: [2, 882914559, 7, 2, 2, [], 1, 0],
    1418: [2, 1806911487, 2, 2, 2, [], 1, 0],
    1419: [2, 1806911487, 2, 2, 2, [], 1, 0],
    142: [2, -843149313, 6, 2, 2, [], 0, 0],
    1420: [2, 1806911487, 2, 2, 2, [], 1, 0],
    1421: [2, 1806911487, 2, 2, 2, [], 1, 0],
    1422: [2, 1806911487, 2, 2, 2, [], 1, 0],
    1423: [2, 1806911487, 4, 2, 2, [], 1, 0],
    1424: [2, 1806911487, 7, 2, 2, [], 1, 0],
    1425: [2, 27450111, 2, 2, 2, [], 1, 0],
    1426: [2, 27450111, 2, 2, 2, [], 1, 0],
    1427: [2, 27450111, 2, 2, 2, [], 1, 0],
    1428: [2, 27450111, 2, 2, 2, [], 1, 0],
    1429: [2, 27450111, 2, 2, 2, [], 1, 0],
    143: [2, -843149313, 8, 2, 2, [], 0, 0],
    1430: [2, 27450111, 4, 2, 2, [], 1, 0],
    1431: [2, 27450111, 7, 2, 2, [], 1, 0],
    1432: [2, -105309697, 2, 2, 2, [], 1, 0],
    1433: [2, -105309697, 2, 2, 2, [], 1, 0],
    1434: [2, -105309697, 2, 2, 2, [], 1, 0],
    1435: [2, -105309697, 2, 2, 2, [], 1, 0],
    1436: [2, -105309697, 2, 2, 2, [], 1, 0],
    1437: [2, -105309697, 4, 2, 2, [], 1, 0],
    1438: [2, -105309697, 7, 2, 2, [], 1, 0],
    1439: [2, -1721303041, 2, 2, 2, [], 1, 0],
    144: [2, -843149313, 10, 2, 2, [], 0, 0],
    1440: [2, -1721303041, 2, 2, 2, [], 1, 0],
    1441: [2, -1721303041, 2, 2, 2, [], 1, 0],
    1442: [2, -1721303041, 2, 2, 2, [], 1, 0],
    1443: [2, -1721303041, 2, 2, 2, [], 1, 0],
    1444: [2, -1721303041, 4, 2, 2, [], 1, 0],
    1445: [2, -1721303041, 7, 2, 2, [], 1, 0],
    1446: [2, 2119794687, 2, 2, 2, [], 1, 0],
    1447: [2, 2119794687, 2, 2, 2, [], 1, 0],
    1448: [2, 2119794687, 2, 2, 2, [], 1, 0],
    1449: [2, 2119794687, 2, 2, 2, [], 1, 0],
    145: [2, -843149313, 14, 2, 2, [], 0, 0],
    1450: [2, 2119794687, 2, 2, 2, [], 1, 0],
    1451: [2, 2119794687, 4, 2, 2, [], 1, 0],
    1452: [2, 2119794687, 7, 2, 2, [], 1, 0],
    1453: [2, -701218305, 2, 2, 2, [], 1, 0],
    1454: [2, -701218305, 2, 2, 2, [], 1, 0],
    1455: [2, -701218305, 2, 2, 2, [], 1, 0],
    1456: [2, -701218305, 2, 2, 2, [], 1, 0],
    1457: [2, -701218305, 2, 2, 2, [], 1, 0],
    1458: [2, -701218305, 4, 2, 2, [], 1, 0],
    1459: [2, -701218305, 7, 2, 2, [], 1, 0],
    146: [2, -455423489, 3, 2, 2, [], 0, 0],
    1460: [2, -4508673, 2, 2, 2, [], 1, 0],
    1461: [2, -4508673, 2, 2, 2, [], 1, 0],
    1462: [2, -4508673, 2, 2, 2, [], 1, 0],
    1463: [2, -4508673, 2, 2, 2, [], 1, 0],
    1464: [2, -4508673, 2, 2, 2, [], 1, 0],
    1465: [2, -4508673, 4, 2, 2, [], 1, 0],
    1466: [2, -4508673, 7, 2, 2, [], 1, 0],
    1467: [2, -1287151105, 2, 2, 2, [], 1, 0],
    1468: [2, -1287151105, 2, 2, 2, [], 1, 0],
    1469: [2, -1287151105, 2, 2, 2, [], 1, 0],
    147: [2, -455423489, 3, 2, 2, [], 0, 0],
    1470: [2, -1287151105, 2, 2, 2, [], 1, 0],
    1471: [2, -1287151105, 2, 2, 2, [], 1, 0],
    1472: [2, -1287151105, 4, 2, 2, [], 1, 0],
    1473: [2, -1287151105, 7, 2, 2, [], 1, 0],
    1474: [2, 1304012031, 2, 2, 2, [], 1, 0],
    1475: [2, 1304012031, 2, 2, 2, [], 1, 0],
    1476: [2, 1304012031, 2, 2, 2, [], 1, 0],
    1477: [2, 1304012031, 2, 2, 2, [], 1, 0],
    1478: [2, 1304012031, 2, 2, 2, [], 1, 0],
    1479: [2, 1304012031, 4, 2, 2, [], 1, 0],
    148: [2, -455423489, 4, 2, 2, [], 0, 0],
    1480: [2, 1304012031, 7, 2, 2, [], 1, 0],
    1481: [2, -1721025025, 2, 2, 2, [], 1, 0],
    1482: [2, -1721025025, 2, 2, 2, [], 1, 0],
    1483: [2, -1721025025, 2, 2, 2, [], 1, 0],
    1484: [2, -1721025025, 2, 2, 2, [], 1, 0],
    1485: [2, -1721025025, 2, 2, 2, [], 1, 0],
    1486: [2, -1721025025, 4, 2, 2, [], 1, 0],
    1487: [2, -1721025025, 7, 2, 2, [], 1, 0],
    1488: [2, -1, 4, 2, 2, [], 1, 0],
    1489: [2, -1, 4, 2, 2, [], 1, 0],
    149: [2, -455423489, 4, 2, 2, [], 0, 0],
    1490: [2, -1, 4, 2, 2, [], 1, 0],
    1491: [2, -1, 4, 2, 2, [], 1, 0],
    1492: [2, -1, 4, 2, 2, [], 1, 0],
    1493: [2, -1, 5, 2, 2, [], 1, 0],
    1494: [2, -1, 7, 2, 2, [], 1, 0],
    1495: [2, -1, 4, 2, 2, [], 1, 0],
    1496: [2, -1, 4, 2, 2, [], 1, 0],
    1497: [2, -1, 4, 2, 2, [], 1, 0],
    1498: [2, -1, 4, 2, 2, [], 1, 0],
    1499: [2, -1, 4, 2, 2, [], 1, 0],
    15: [2, -1297845761, 2, 2, 2, [], 0, 0],
    150: [2, -843149313, 4, 2, 2, [], 0, 0],
    1500: [2, -1, 5, 2, 2, [], 1, 0],
    1501: [2, -1, 7, 2, 2, [], 1, 0],
    1502: [2, -1, 4, 2, 2, [], 1, 0],
    1503: [2, -1, 4, 2, 2, [], 1, 0],
    1504: [2, -1, 4, 2, 2, [], 1, 0],
    1505: [2, -1, 4, 2, 2, [], 1, 0],
    1506: [2, -1, 4, 2, 2, [], 1, 0],
    1507: [2, -1, 5, 2, 2, [], 1, 0],
    1508: [2, -1, 7, 2, 2, [], 1, 0],
    1509: [2, -1, 4, 2, 2, [], 1, 0],
    151: [2, -843149313, 6, 2, 2, [], 0, 0],
    1510: [2, -1, 4, 2, 2, [], 1, 0],
    1511: [2, -1, 4, 2, 2, [], 1, 0],
    1512: [2, -1, 4, 2, 2, [], 1, 0],
    1513: [2, -1, 4, 2, 2, [], 1, 0],
    1514: [2, -1, 5, 2, 2, [], 1, 0],
    1515: [2, -1, 7, 2, 2, [], 1, 0],
    1516: [2, -1, 4, 2, 2, [], 1, 0],
    1517: [2, -1, 4, 2, 2, [], 1, 0],
    1518: [2, -1, 4, 2, 2, [], 1, 0],
    1519: [2, -1, 4, 2, 2, [], 1, 0],
    152: [2, -843149313, 8, 2, 2, [], 0, 0],
    1520: [2, -1, 4, 2, 2, [], 1, 0],
    1521: [2, -1, 5, 2, 2, [], 1, 0],
    1522: [2, -1, 7, 2, 2, [], 1, 0],
    1523: [2, -1, 4, 2, 2, [], 1, 0],
    1524: [2, -1, 4, 2, 2, [], 1, 0],
    1525: [2, -1, 4, 2, 2, [], 1, 0],
    1526: [2, -1, 4, 2, 2, [], 1, 0],
    1527: [2, -1, 4, 2, 2, [], 1, 0],
    1528: [2, -1, 5, 2, 2, [], 1, 0],
    1529: [2, -1, 7, 2, 2, [], 1, 0],
    153: [2, -843149313, 10, 2, 2, [], 0, 0],
    1530: [2, -1, 4, 2, 2, [], 1, 0],
    1531: [2, -1, 4, 2, 2, [], 1, 0],
    1532: [2, -1, 4, 2, 2, [], 1, 0],
    1533: [2, -1, 4, 2, 2, [], 1, 0],
    1534: [2, -1, 4, 2, 2, [], 1, 0],
    1535: [2, -1, 5, 2, 2, [], 1, 0],
    1536: [2, -1, 7, 2, 2, [], 1, 0],
    1537: [2, -1, 4, 2, 2, [], 1, 0],
    1538: [2, -1, 4, 2, 2, [], 1, 0],
    1539: [2, -1, 4, 2, 2, [], 1, 0],
    154: [2, -843149313, 14, 2, 2, [], 0, 0],
    1540: [2, -1, 4, 2, 2, [], 1, 0],
    1541: [2, -1, 4, 2, 2, [], 1, 0],
    1542: [2, -1, 5, 2, 2, [], 1, 0],
    1543: [2, -1, 7, 2, 2, [], 1, 0],
    1544: [2, -1, 4, 2, 2, [], 1, 0],
    1545: [2, -1, 4, 2, 2, [], 1, 0],
    1546: [2, -1, 4, 2, 2, [], 1, 0],
    1547: [2, -1, 4, 2, 2, [], 1, 0],
    1548: [2, -1, 4, 2, 2, [], 1, 0],
    1549: [2, -1, 5, 2, 2, [], 1, 0],
    155: [2, -237677057, 3, 0, 2, [], 0, 0],
    1550: [2, -1, 7, 2, 2, [], 1, 0],
    1551: [2, -1, 4, 2, 2, [], 1, 0],
    1552: [2, -1, 4, 2, 2, [], 1, 0],
    1553: [2, -1, 4, 2, 2, [], 1, 0],
    1554: [2, -1, 4, 2, 2, [], 1, 0],
    1555: [2, -1, 4, 2, 2, [], 1, 0],
    1556: [2, -1, 5, 2, 2, [], 1, 0],
    1557: [2, -1, 7, 2, 2, [], 1, 0],
    1558: [2, -1, 4, 2, 2, [], 1, 0],
    1559: [2, -1, 4, 2, 2, [], 1, 0],
    156: [2, -237677057, 3, 0, 2, [], 0, 0],
    1560: [2, -1, 4, 2, 2, [], 1, 0],
    1561: [2, -1, 4, 2, 2, [], 1, 0],
    1562: [2, -1, 4, 2, 2, [], 1, 0],
    1563: [2, -1, 5, 2, 2, [], 1, 0],
    1564: [2, -1, 7, 2, 2, [], 1, 0],
    1565: [2, -1, 4, 2, 2, [], 1, 0],
    1566: [2, -1, 4, 2, 2, [], 1, 0],
    1567: [2, -1, 4, 2, 2, [], 1, 0],
    1568: [2, -1, 4, 2, 2, [], 1, 0],
    1569: [2, -1, 4, 2, 2, [], 1, 0],
    157: [2, -237677057, 5, 0, 2, [], 0, 0],
    1570: [2, -1, 5, 2, 2, [], 1, 0],
    1571: [2, -1, 7, 2, 2, [], 1, 0],
    1572: [2, -1, 4, 2, 2, [], 1, 0],
    1573: [2, -1, 4, 2, 2, [], 1, 0],
    1574: [2, -1, 4, 2, 2, [], 1, 0],
    1575: [2, -1, 4, 2, 2, [], 1, 0],
    1576: [2, -1, 4, 2, 2, [], 1, 0],
    1577: [2, -1, 5, 2, 2, [], 1, 0],
    1578: [2, -1, 7, 2, 2, [], 1, 0],
    1579: [2, -1, 4, 2, 2, [], 1, 0],
    158: [2, -237677057, 6, 0, 2, [], 0, 0],
    1580: [2, -1, 4, 2, 2, [], 1, 0],
    1581: [2, -1, 4, 2, 2, [], 1, 0],
    1582: [2, -1, 4, 2, 2, [], 1, 0],
    1583: [2, -1, 4, 2, 2, [], 1, 0],
    1584: [2, -1, 5, 2, 2, [], 1, 0],
    1585: [2, -1, 7, 2, 2, [], 1, 0],
    1586: [2, -701218305, 2, 2, 2, [], 1, 0],
    1587: [2, -701218305, 2, 2, 2, [], 1, 0],
    1588: [2, -701218305, 2, 2, 2, [], 1, 0],
    1589: [2, -701218305, 2, 2, 2, [], 1, 0],
    159: [2, -237677057, 8, 0, 2, [], 0, 0],
    1590: [2, -701218305, 2, 2, 2, [], 1, 0],
    1591: [2, -701218305, 3, 2, 2, [], 1, 0],
    1592: [2, -701218305, 5, 2, 2, [], 1, 0],
    1593: [2, 751052799, 2, 2, 2, [], 1, 0],
    1594: [2, 751052799, 2, 2, 2, [], 1, 0],
    1595: [2, 751052799, 2, 2, 2, [], 1, 0],
    1596: [2, 751052799, 2, 2, 2, [], 1, 0],
    1597: [2, 751052799, 2, 2, 2, [], 1, 0],
    1598: [2, 751052799, 3, 2, 2, [], 1, 0],
    1599: [2, 751052799, 5, 2, 2, [], 1, 0],
    16: [2, -858993409, 1, 2, 2, [6, 3], 1, 0],
    160: [2, -237677057, 10, 0, 2, [], 0, 0],
    1600: [2, -105309697, 2, 2, 2, [], 1, 0],
    1601: [2, -105309697, 2, 2, 2, [], 1, 0],
    1602: [2, -105309697, 2, 2, 2, [], 1, 0],
    1603: [2, -105309697, 2, 2, 2, [], 1, 0],
    1604: [2, -105309697, 2, 2, 2, [], 1, 0],
    1605: [2, -105309697, 3, 2, 2, [], 1, 0],
    1606: [2, -105309697, 5, 2, 2, [], 1, 0],
    1607: [2, 2118632191, 2, 2, 2, [], 1, 0],
    1608: [2, 2118632191, 2, 2, 2, [], 1, 0],
    1609: [2, 2118632191, 2, 2, 2, [], 1, 0],
    161: [2, -237677057, 12, 0, 2, [], 0, 0],
    1610: [2, 2118632191, 2, 2, 2, [], 1, 0],
    1611: [2, 2118632191, 2, 2, 2, [], 1, 0],
    1612: [2, 2118632191, 3, 2, 2, [], 1, 0],
    1613: [2, 2118632191, 5, 2, 2, [], 1, 0],
    1614: [2, -536826881, 2, 2, 2, [], 1, 0],
    1615: [2, -536826881, 2, 2, 2, [], 1, 0],
    1616: [2, -536826881, 2, 2, 2, [], 1, 0],
    1617: [2, -536826881, 2, 2, 2, [], 1, 0],
    1618: [2, -536826881, 2, 2, 2, [], 1, 0],
    1619: [2, -536826881, 3, 2, 2, [], 1, 0],
    162: [2, -237677057, 16, 0, 2, [], 0, 0],
    1620: [2, -536826881, 5, 2, 2, [], 1, 0],
    1621: [2, -13408513, 2, 2, 2, [], 1, 0],
    1622: [2, -13408513, 2, 2, 2, [], 1, 0],
    1623: [2, -13408513, 2, 2, 2, [], 1, 0],
    1624: [2, -13408513, 2, 2, 2, [], 1, 0],
    1625: [2, -13408513, 2, 2, 2, [], 1, 0],
    1626: [2, -13408513, 3, 2, 2, [], 1, 0],
    1627: [2, -13408513, 5, 2, 2, [], 1, 0],
    1628: [2, -8453889, 2, 2, 2, [], 1, 0],
    1629: [2, -8453889, 2, 2, 2, [], 1, 0],
    163: [2, -237677057, 16, 0, 2, [], 0, 0],
    1630: [2, -8453889, 2, 2, 2, [], 1, 0],
    1631: [2, -8453889, 2, 2, 2, [], 1, 0],
    1632: [2, -8453889, 2, 2, 2, [], 1, 0],
    1633: [2, -8453889, 3, 2, 2, [], 1, 0],
    1634: [2, -8453889, 5, 2, 2, [], 1, 0],
    1635: [2, 6737151, 2, 2, 2, [], 1, 0],
    1636: [2, 6737151, 2, 2, 2, [], 1, 0],
    1637: [2, 6737151, 2, 2, 2, [], 1, 0],
    1638: [2, 6737151, 2, 2, 2, [], 1, 0],
    1639: [2, 6737151, 2, 2, 2, [], 1, 0],
    164: [2, -559393793, 3, 0, 2, [], 0, 0],
    1640: [2, 6737151, 3, 2, 2, [], 1, 0],
    1641: [2, 6737151, 5, 2, 2, [], 1, 0],
    1642: [2, -2118007041, 2, 2, 2, [], 1, 0],
    1643: [2, -2118007041, 2, 2, 2, [], 1, 0],
    1644: [2, -2118007041, 2, 2, 2, [], 1, 0],
    1645: [2, -2118007041, 2, 2, 2, [], 1, 0],
    1646: [2, -2118007041, 3, 2, 2, [], 1, 0],
    1647: [2, -2118007041, 2, 2, 2, [], 1, 0],
    1648: [2, -2118007041, 5, 2, 2, [], 1, 0],
    1649: [2, -944778241, 2, 2, 2, [], 1, 0],
    165: [2, -559393793, 3, 0, 2, [], 0, 0],
    1650: [2, -2118007041, 2, 2, 2, [], 1, 0],
    1651: [2, -2118007041, 2, 2, 2, [], 1, 0],
    1652: [2, -2118007041, 2, 2, 2, [], 1, 0],
    1653: [2, -2118007041, 2, 2, 2, [], 1, 0],
    1654: [2, -944778241, 3, 2, 2, [], 1, 0],
    1655: [2, -944778241, 5, 2, 2, [], 1, 0],
    1656: [2, -1725026561, 2, 2, 2, [], 1, 0],
    1657: [2, -1725026561, 2, 2, 2, [], 1, 0],
    1658: [2, -1725026561, 2, 2, 2, [], 1, 0],
    1659: [2, -1725026561, 2, 2, 2, [], 1, 0],
    166: [2, -559393793, 4, 0, 2, [], 0, 0],
    1660: [2, -1725026561, 2, 2, 2, [], 1, 0],
    1661: [2, -1725026561, 3, 2, 2, [], 1, 0],
    1662: [2, -1725026561, 5, 2, 2, [], 1, 0],
    1663: [2, -493832449, 2, 2, 2, [], 1, 0],
    1664: [2, -493832449, 2, 2, 2, [], 1, 0],
    1665: [2, -493832449, 2, 2, 2, [], 1, 0],
    1666: [2, -493832449, 2, 2, 2, [], 1, 0],
    1667: [2, -493832449, 2, 2, 2, [], 1, 0],
    1668: [2, -493832449, 3, 2, 2, [], 1, 0],
    1669: [2, -493832449, 5, 2, 2, [], 1, 0],
    167: [2, -559393793, 5, 0, 2, [], 0, 0],
    1670: [2, 2119794687, 2, 2, 2, [], 1, 0],
    1671: [2, 2119794687, 2, 2, 2, [], 1, 0],
    1672: [2, 2119794687, 2, 2, 2, [], 1, 0],
    1673: [2, 2119794687, 2, 2, 2, [], 1, 0],
    1674: [2, 2119794687, 2, 2, 2, [], 1, 0],
    1675: [2, 2119794687, 3, 2, 2, [], 1, 0],
    1676: [2, 2119794687, 5, 2, 2, [], 1, 0],
    1677: [2, -519764481, 2, 2, 2, [], 1, 0],
    1678: [2, -519764481, 2, 2, 2, [], 1, 0],
    1679: [2, -519764481, 2, 2, 2, [], 1, 0],
    168: [2, -559393793, 6, 0, 2, [], 0, 0],
    1680: [2, -519764481, 2, 2, 2, [], 1, 0],
    1681: [2, -519764481, 2, 2, 2, [], 1, 0],
    1682: [2, -519764481, 3, 2, 2, [], 1, 0],
    1683: [2, -519764481, 5, 2, 2, [], 1, 0],
    1684: [2, -1, 4, 2, 2, [], 1, 0],
    1685: [2, -1, 4, 2, 2, [], 1, 0],
    1686: [2, -1, 4, 2, 2, [], 1, 0],
    1687: [2, -1, 4, 2, 2, [], 1, 0],
    1688: [2, -1, 4, 2, 2, [], 1, 0],
    1689: [2, -1, 5, 2, 2, [], 1, 0],
    169: [2, -559393793, 10, 0, 2, [], 0, 0],
    1690: [2, -1, 7, 2, 2, [], 1, 0],
    1691: [2, -1, 4, 2, 2, [], 1, 0],
    1692: [2, -1, 4, 2, 2, [], 1, 0],
    1693: [2, -1, 4, 2, 2, [], 1, 0],
    1694: [2, -1, 4, 2, 2, [], 1, 0],
    1695: [2, -1, 4, 2, 2, [], 1, 0],
    1696: [2, -1, 5, 2, 2, [], 1, 0],
    1697: [2, -1, 7, 2, 2, [], 1, 0],
    1698: [2, -1, 4, 2, 2, [], 1, 0],
    1699: [2, -1, 4, 2, 2, [], 1, 0],
    17: [2, 1936946175, 1, 2, 2, [6, 3], 1, 0],
    170: [2, -559393793, 12, 0, 2, [], 0, 0],
    1700: [2, -1, 4, 2, 2, [], 1, 0],
    1701: [2, -1, 4, 2, 2, [], 1, 0],
    1702: [2, -1, 4, 2, 2, [], 1, 0],
    1703: [2, -1, 5, 2, 2, [], 1, 0],
    1704: [2, -1, 7, 2, 2, [], 1, 0],
    1705: [2, -1, 4, 2, 2, [], 1, 0],
    1706: [2, -1, 4, 2, 2, [], 1, 0],
    1707: [2, -1, 4, 2, 2, [], 1, 0],
    1708: [2, -1, 4, 2, 2, [], 1, 0],
    1709: [2, -1, 4, 2, 2, [], 1, 0],
    171: [2, -559393793, 14, 0, 2, [], 0, 0],
    1710: [2, -1, 5, 2, 2, [], 1, 0],
    1711: [2, -1, 7, 2, 2, [], 1, 0],
    1712: [2, -1, 4, 2, 2, [], 1, 0],
    1713: [2, -1, 4, 2, 2, [], 1, 0],
    1714: [2, -1, 4, 2, 2, [], 1, 0],
    1715: [2, -1, 4, 2, 2, [], 1, 0],
    1716: [2, -1, 4, 2, 2, [], 1, 0],
    1717: [2, -1, 5, 2, 2, [], 1, 0],
    1718: [2, -1, 7, 2, 2, [], 1, 0],
    1719: [2, -1, 4, 2, 2, [], 1, 0],
    172: [2, -559393793, 18, 0, 2, [], 0, 0],
    1720: [2, -1, 4, 2, 2, [], 1, 0],
    1721: [2, -1, 4, 2, 2, [], 1, 0],
    1722: [2, -1, 4, 2, 2, [], 1, 0],
    1723: [2, -1, 4, 2, 2, [], 1, 0],
    1724: [2, -1, 5, 2, 2, [], 1, 0],
    1725: [2, -1, 7, 2, 2, [], 1, 0],
    1726: [2, -1, 4, 2, 2, [], 1, 0],
    1727: [2, -1, 4, 2, 2, [], 1, 0],
    1728: [2, -1, 4, 2, 2, [], 1, 0],
    1729: [2, -1, 4, 2, 2, [], 1, 0],
    173: [2, -559393793, 18, 0, 2, [], 0, 0],
    1730: [2, -1, 4, 2, 2, [], 1, 0],
    1731: [2, -1, 5, 2, 2, [], 1, 0],
    1732: [2, -1, 7, 2, 2, [], 1, 0],
    1733: [2, -1, 4, 2, 2, [], 1, 0],
    1734: [2, -1, 4, 2, 2, [], 1, 0],
    1735: [2, -1, 4, 2, 2, [], 1, 0],
    1736: [2, -1, 4, 2, 2, [], 1, 0],
    1737: [2, -1, 4, 2, 2, [], 1, 0],
    1738: [2, -1, 5, 2, 2, [], 1, 0],
    1739: [2, -1, 7, 2, 2, [], 1, 0],
    174: [2, -559393793, 4, 0, 2, [], 0, 0],
    1740: [2, -1, 4, 2, 2, [], 1, 0],
    1741: [2, -1, 4, 2, 2, [], 1, 0],
    1742: [2, -1, 4, 2, 2, [], 1, 0],
    1743: [2, -1, 4, 2, 2, [], 1, 0],
    1744: [2, -1, 4, 2, 2, [], 1, 0],
    1745: [2, -1, 5, 2, 2, [], 1, 0],
    1746: [2, -1, 7, 2, 2, [], 1, 0],
    1747: [2, -105309697, 2, 2, 2, [], 1, 0],
    1748: [2, -105309697, 2, 2, 2, [], 1, 0],
    1749: [2, -105309697, 2, 2, 2, [], 1, 0],
    175: [2, -559393793, 4, 0, 2, [], 0, 0],
    1750: [2, -105309697, 2, 2, 2, [], 1, 0],
    1751: [2, -105309697, 2, 2, 2, [], 1, 0],
    1752: [2, -105309697, 3, 2, 2, [], 1, 0],
    1753: [2, -105309697, 5, 2, 2, [], 1, 0],
    1754: [2, 1232784639, 2, 2, 2, [], 1, 0],
    1755: [2, 1232784639, 2, 2, 2, [], 1, 0],
    1756: [2, 1232784639, 2, 2, 2, [], 1, 0],
    1757: [2, 1232784639, 2, 2, 2, [], 1, 0],
    1758: [2, 1232784639, 2, 2, 2, [], 1, 0],
    1759: [2, 1232784639, 3, 2, 2, [], 1, 0],
    176: [2, -559393793, 6, 0, 2, [], 0, 0],
    1760: [2, 1232784639, 5, 2, 2, [], 1, 0],
    1761: [2, -312199681, 2, 2, 2, [], 1, 0],
    1762: [2, -312199681, 2, 2, 2, [], 1, 0],
    1763: [2, -312199681, 2, 2, 2, [], 1, 0],
    1764: [2, -312199681, 2, 2, 2, [], 1, 0],
    1765: [2, -312199681, 2, 2, 2, [], 1, 0],
    1766: [2, -312199681, 3, 2, 2, [], 1, 0],
    1767: [2, -312199681, 5, 2, 2, [], 1, 0],
    1768: [2, -312199681, 2, 2, 2, [], 1, 0],
    1769: [2, -312199681, 2, 2, 2, [], 1, 0],
    177: [2, -559393793, 7, 0, 2, [], 0, 0],
    1770: [2, -312199681, 2, 2, 2, [], 1, 0],
    1771: [2, -312199681, 2, 2, 2, [], 1, 0],
    1772: [2, -312199681, 2, 2, 2, [], 1, 0],
    1773: [2, -312199681, 3, 2, 2, [], 1, 0],
    1774: [2, -312199681, 5, 2, 2, [], 1, 0],
    1775: [2, 10027263, 2, 2, 2, [], 1, 0],
    1776: [2, 10027263, 2, 2, 2, [], 1, 0],
    1777: [2, 10027263, 2, 2, 2, [], 1, 0],
    1778: [2, 10027263, 2, 2, 2, [], 1, 0],
    1779: [2, 10027263, 2, 2, 2, [], 1, 0],
    178: [2, -559393793, 8, 0, 2, [], 0, 0],
    1780: [2, 10027263, 3, 2, 2, [], 1, 0],
    1781: [2, 10027263, 5, 2, 2, [], 1, 0],
    1782: [2, -872362753, 2, 2, 2, [], 1, 0],
    1783: [2, -872362753, 2, 2, 2, [], 1, 0],
    1784: [2, -872362753, 2, 2, 2, [], 1, 0],
    1785: [2, -872362753, 2, 2, 2, [], 1, 0],
    1786: [2, -872362753, 2, 2, 2, [], 1, 0],
    1787: [2, -872362753, 3, 2, 2, [], 1, 0],
    1788: [2, -872362753, 5, 2, 2, [], 1, 0],
    1789: [2, 10004223, 2, 2, 2, [], 1, 0],
    179: [2, -559393793, 10, 0, 2, [], 0, 0],
    1790: [2, 10004223, 2, 2, 2, [], 1, 0],
    1791: [2, 10004223, 2, 2, 2, [], 1, 0],
    1792: [2, 10004223, 2, 2, 2, [], 1, 0],
    1793: [2, 10004223, 2, 2, 2, [], 1, 0],
    1794: [2, 10004223, 3, 2, 2, [], 1, 0],
    1795: [2, 10004223, 5, 2, 2, [], 1, 0],
    1796: [2, -1261683201, 2, 2, 2, [], 1, 0],
    1797: [2, -1261683201, 2, 2, 2, [], 1, 0],
    1798: [2, -1261683201, 2, 2, 2, [], 1, 0],
    1799: [2, -1261683201, 2, 2, 2, [], 1, 0],
    18: [2, 1936946175, 1, 2, 2, [6, 3], 1, 0],
    180: [2, -559393793, 15, 0, 2, [], 0, 0],
    1800: [2, -1261683201, 2, 2, 2, [], 1, 0],
    1801: [2, -1261683201, 3, 2, 2, [], 1, 0],
    1802: [2, -1261683201, 5, 2, 2, [], 1, 0],
    1803: [2, 1283424255, 2, 2, 2, [], 1, 0],
    1804: [2, 1283424255, 2, 2, 2, [], 1, 0],
    1805: [2, 1283424255, 2, 2, 2, [], 1, 0],
    1806: [2, 1283424255, 2, 2, 2, [], 1, 0],
    1807: [2, 1283424255, 2, 2, 2, [], 1, 0],
    1808: [2, 1283424255, 3, 2, 2, [], 1, 0],
    1809: [2, 1283424255, 5, 2, 2, [], 1, 0],
    181: [2, -559393793, 17, 0, 2, [], 0, 0],
    1810: [2, -1, 4, 2, 2, [], 1, 0],
    1811: [2, -1, 4, 2, 2, [], 1, 0],
    1812: [2, -1, 4, 2, 2, [], 1, 0],
    1813: [2, -1, 4, 2, 2, [], 1, 0],
    1814: [2, -1, 4, 2, 2, [], 1, 0],
    1815: [2, -1, 5, 2, 2, [], 1, 0],
    1816: [2, -1, 7, 2, 2, [], 1, 0],
    1817: [2, -1, 4, 2, 2, [], 1, 0],
    1818: [2, -1, 4, 2, 2, [], 1, 0],
    1819: [2, -1, 4, 2, 2, [], 1, 0],
    182: [2, -559393793, 19, 0, 2, [], 0, 0],
    1820: [2, -1, 4, 2, 2, [], 1, 0],
    1821: [2, -1, 4, 2, 2, [], 1, 0],
    1822: [2, -1, 5, 2, 2, [], 1, 0],
    1823: [2, -1, 7, 2, 2, [], 1, 0],
    1824: [2, -1, 4, 2, 2, [], 1, 0],
    1825: [2, -1, 4, 2, 2, [], 1, 0],
    1826: [2, -1, 4, 2, 2, [], 1, 0],
    1827: [2, -1, 4, 2, 2, [], 1, 0],
    1828: [2, -1, 4, 2, 2, [], 1, 0],
    1829: [2, -1, 5, 2, 2, [], 1, 0],
    183: [2, -559393793, 19, 0, 2, [], 0, 0],
    1830: [2, -1, 7, 2, 2, [], 1, 0],
    1831: [2, -1, 4, 2, 2, [], 1, 0],
    1832: [2, -1, 4, 2, 2, [], 1, 0],
    1833: [2, -1, 4, 2, 2, [], 1, 0],
    1834: [2, -1, 4, 2, 2, [], 1, 0],
    1835: [2, -1, 4, 2, 2, [], 1, 0],
    1836: [2, -1, 5, 2, 2, [], 1, 0],
    1837: [2, -1, 7, 2, 2, [], 1, 0],
    1838: [2, -1, 4, 2, 2, [], 1, 0],
    1839: [2, -1, 4, 2, 2, [], 1, 0],
    184: [2, -593543425, 4, 0, 2, [], 0, 0],
    1840: [2, -1, 4, 2, 2, [], 1, 0],
    1841: [2, -1, 4, 2, 2, [], 1, 0],
    1842: [2, -1, 4, 2, 2, [], 1, 0],
    1843: [2, -1, 5, 2, 2, [], 1, 0],
    1844: [2, -1, 7, 2, 2, [], 1, 0],
    1845: [2, 751052799, 2, 2, 2, [], 1, 0],
    1846: [2, 751052799, 2, 2, 2, [], 1, 0],
    1847: [2, 751052799, 2, 2, 2, [], 1, 0],
    1848: [2, 751052799, 2, 2, 2, [], 1, 0],
    1849: [2, 751052799, 2, 2, 2, [], 1, 0],
    185: [2, -593543425, 4, 0, 2, [], 0, 0],
    1850: [2, 751052799, 3, 2, 2, [], 1, 0],
    1851: [2, 751052799, 5, 2, 2, [], 1, 0],
    1852: [2, -4508673, 2, 2, 2, [], 1, 0],
    1853: [2, -4508673, 2, 2, 2, [], 1, 0],
    1854: [2, -4508673, 2, 2, 2, [], 1, 0],
    1855: [2, -4508673, 2, 2, 2, [], 1, 0],
    1856: [2, -4508673, 2, 2, 2, [], 1, 0],
    1857: [2, -4508673, 3, 2, 2, [], 1, 0],
    1858: [2, -4508673, 5, 2, 2, [], 1, 0],
    1859: [2, 1030606079, 2, 2, 2, [], 1, 0],
    186: [2, -593543425, 5, 0, 2, [], 0, 0],
    1860: [2, 1030606079, 2, 2, 2, [], 1, 0],
    1861: [2, 1030606079, 2, 2, 2, [], 1, 0],
    1862: [2, 1030606079, 2, 2, 2, [], 1, 0],
    1863: [2, 1030606079, 2, 2, 2, [], 1, 0],
    1864: [2, 1030606079, 3, 2, 2, [], 1, 0],
    1865: [2, 1030606079, 5, 2, 2, [], 1, 0],
    1866: [2, -701218305, 2, 2, 2, [], 1, 0],
    1867: [2, -701218305, 2, 2, 2, [], 1, 0],
    1868: [2, -701218305, 2, 2, 2, [], 1, 0],
    1869: [2, -701218305, 2, 2, 2, [], 1, 0],
    187: [2, -593543425, 6, 0, 2, [], 0, 0],
    1870: [2, -701218305, 2, 2, 2, [], 1, 0],
    1871: [2, -701218305, 3, 2, 2, [], 1, 0],
    1872: [2, -701218305, 5, 2, 2, [], 1, 0],
    1873: [2, 1816959487, 2, 2, 2, [], 1, 0],
    1874: [2, 1816959487, 2, 2, 2, [], 1, 0],
    1875: [2, 1816959487, 2, 2, 2, [], 1, 0],
    1876: [2, 1816959487, 2, 2, 2, [], 1, 0],
    1877: [2, 1816959487, 2, 2, 2, [], 1, 0],
    1878: [2, 1816959487, 3, 2, 2, [], 1, 0],
    1879: [2, 1816959487, 5, 2, 2, [], 1, 0],
    188: [2, -593543425, 7, 0, 2, [], 0, 0],
    1880: [2, -1, 4, 2, 2, [], 1, 0],
    1881: [2, -1, 4, 2, 2, [], 1, 0],
    1882: [2, -1, 4, 2, 2, [], 1, 0],
    1883: [2, -1, 4, 2, 2, [], 1, 0],
    1884: [2, -1, 4, 2, 2, [], 1, 0],
    1885: [2, -1, 5, 2, 2, [], 1, 0],
    1886: [2, -1, 7, 2, 2, [], 1, 0],
    1887: [2, -1, 4, 2, 2, [], 1, 0],
    1888: [2, -1, 4, 2, 2, [], 1, 0],
    1889: [2, -1, 4, 2, 2, [], 1, 0],
    189: [2, -593543425, 9, 0, 2, [], 0, 0],
    1890: [2, -1, 4, 2, 2, [], 1, 0],
    1891: [2, -1, 4, 2, 2, [], 1, 0],
    1892: [2, -1, 5, 2, 2, [], 1, 0],
    1893: [2, -1, 7, 2, 2, [], 1, 0],
    1894: [2, -1, 4, 2, 2, [], 1, 0],
    1895: [2, -1, 4, 2, 2, [], 1, 0],
    1896: [2, -1, 4, 2, 2, [], 1, 0],
    1897: [2, -1, 4, 2, 2, [], 1, 0],
    1898: [2, -1, 4, 2, 2, [], 1, 0],
    1899: [2, -1, 5, 2, 2, [], 1, 0],
    19: [2, -858993409, 1, 2, 2, [6, 3], 1, 0],
    190: [2, -593543425, 14, 0, 2, [], 0, 0],
    1900: [2, -1, 7, 2, 2, [], 1, 0],
    1901: [2, -1, 4, 2, 2, [], 1, 0],
    1902: [2, -1, 4, 2, 2, [], 1, 0],
    1903: [2, -1, 4, 2, 2, [], 1, 0],
    1904: [2, -1, 4, 2, 2, [], 1, 0],
    1905: [2, -1, 4, 2, 2, [], 1, 0],
    1906: [2, -1, 5, 2, 2, [], 1, 0],
    1907: [2, -1, 7, 2, 2, [], 1, 0],
    1908: [2, 751052799, 2, 2, 2, [], 1, 0],
    1909: [2, 751052799, 2, 2, 2, [], 1, 0],
    191: [2, -593543425, 16, 0, 2, [], 0, 0],
    1910: [2, 751052799, 2, 2, 2, [], 1, 0],
    1911: [2, 751052799, 2, 2, 2, [], 1, 0],
    1912: [2, 751052799, 2, 2, 2, [], 1, 0],
    1913: [2, 751052799, 3, 2, 2, [], 1, 0],
    1914: [2, 751052799, 5, 2, 2, [], 1, 0],
    1915: [2, 1232784639, 2, 2, 2, [], 1, 0],
    1916: [2, 1232784639, 2, 2, 2, [], 1, 0],
    1917: [2, 1232784639, 2, 2, 2, [], 1, 0],
    1918: [2, 1232784639, 2, 2, 2, [], 1, 0],
    1919: [2, 1232784639, 2, 2, 2, [], 1, 0],
    192: [2, -593543425, 20, 0, 2, [], 0, 0],
    1920: [2, 1232784639, 3, 2, 2, [], 1, 0],
    1921: [2, 1232784639, 5, 2, 2, [], 1, 0],
    1922: [2, -701152513, 2, 2, 2, [], 1, 0],
    1923: [2, -701152513, 2, 2, 2, [], 1, 0],
    1924: [2, -701152513, 2, 2, 2, [], 1, 0],
    1925: [2, -701152513, 2, 2, 2, [], 1, 0],
    1926: [2, -701152513, 2, 2, 2, [], 1, 0],
    1927: [2, -701152513, 3, 2, 2, [], 1, 0],
    1928: [2, -701152513, 5, 2, 2, [], 1, 0],
    1929: [2, -261847809, 2, 2, 2, [], 1, 0],
    193: [2, -593543425, 20, 0, 2, [], 0, 0],
    1930: [2, -261847809, 2, 2, 2, [], 1, 0],
    1931: [2, -261847809, 2, 2, 2, [], 1, 0],
    1932: [2, -261847809, 2, 2, 2, [], 1, 0],
    1933: [2, -261847809, 2, 2, 2, [], 1, 0],
    1934: [2, -261847809, 3, 2, 2, [], 1, 0],
    1935: [2, -261847809, 5, 2, 2, [], 1, 0],
    1936: [2, -1, 4, 2, 2, [], 1, 0],
    1937: [2, -1, 4, 2, 2, [], 1, 0],
    1938: [2, -1, 4, 2, 2, [], 1, 0],
    1939: [2, -1, 4, 2, 2, [], 1, 0],
    194: [2, -559393793, 3, 0, 2, [], 0, 0],
    1940: [2, -1, 4, 2, 2, [], 1, 0],
    1941: [2, -1, 5, 2, 2, [], 1, 0],
    1942: [2, -1, 7, 2, 2, [], 1, 0],
    1943: [2, -867020033, 2, 2, 2, [], 1, 0],
    1944: [2, -867020033, 2, 2, 2, [], 1, 0],
    1945: [2, -867020033, 2, 2, 2, [], 1, 0],
    1946: [2, -867020033, 2, 2, 2, [], 1, 0],
    1947: [2, -867020033, 2, 2, 2, [], 1, 0],
    1948: [2, -867020033, 3, 2, 2, [], 1, 0],
    1949: [2, -867020033, 5, 2, 2, [], 1, 0],
    195: [2, -559393793, 4, 0, 2, [], 0, 0],
    1950: [2, -748541441, 2, 2, 2, [], 1, 0],
    1951: [2, -748541441, 2, 2, 2, [], 1, 0],
    1952: [2, -748541441, 2, 2, 2, [], 1, 0],
    1953: [2, -748541441, 2, 2, 2, [], 1, 0],
    1954: [2, -748541441, 2, 2, 2, [], 1, 0],
    1955: [2, -748541441, 3, 2, 2, [], 1, 0],
    1956: [2, -748541441, 5, 2, 2, [], 1, 0],
    1957: [2, -1, 4, 2, 2, [], 1, 0],
    1958: [2, -1, 4, 2, 2, [], 1, 0],
    1959: [2, -1, 4, 2, 2, [], 1, 0],
    196: [2, -559393793, 4, 0, 2, [], 0, 0],
    1960: [2, -1, 4, 2, 2, [], 1, 0],
    1961: [2, -1, 4, 2, 2, [], 1, 0],
    1962: [2, -1, 5, 2, 2, [], 1, 0],
    1963: [2, -1, 7, 2, 2, [], 1, 0],
    1964: [2, -1, 4, 2, 2, [], 1, 0],
    1965: [2, -1, 4, 2, 2, [], 1, 0],
    1966: [2, -1, 4, 2, 2, [], 1, 0],
    1967: [2, -1, 4, 2, 2, [], 1, 0],
    1968: [2, -1, 4, 2, 2, [], 1, 0],
    1969: [2, -1, 5, 2, 2, [], 1, 0],
    197: [2, -559393793, 5, 0, 2, [], 0, 0],
    1970: [2, -1, 7, 2, 2, [], 1, 0],
    1971: [2, -1, 4, 2, 2, [], 1, 0],
    1972: [2, -1, 4, 2, 2, [], 1, 0],
    1973: [2, -1, 4, 2, 2, [], 1, 0],
    1974: [2, -1, 4, 2, 2, [], 1, 0],
    1975: [2, -1, 4, 2, 2, [], 1, 0],
    1976: [2, -1, 5, 2, 2, [], 1, 0],
    1977: [2, -1, 7, 2, 2, [], 1, 0],
    1978: [2, -1, 4, 2, 2, [], 1, 0],
    1979: [2, -1, 4, 2, 2, [], 1, 0],
    198: [2, -559393793, 6, 0, 2, [], 0, 0],
    1980: [2, -1, 4, 2, 2, [], 1, 0],
    1981: [2, -1, 4, 2, 2, [], 1, 0],
    1982: [2, -1, 4, 2, 2, [], 1, 0],
    1983: [2, -1, 5, 2, 2, [], 1, 0],
    1984: [2, -1, 7, 2, 2, [], 1, 0],
    1985: [2, -1, 4, 2, 2, [], 1, 0],
    1986: [2, -1, 4, 2, 2, [], 1, 0],
    1987: [2, -1, 4, 2, 2, [], 1, 0],
    1988: [2, -1, 4, 2, 2, [], 1, 0],
    1989: [2, -1, 4, 2, 2, [], 1, 0],
    199: [2, -559393793, 8, 0, 2, [], 0, 0],
    1990: [2, -1, 5, 2, 2, [], 1, 0],
    1991: [2, -1, 7, 2, 2, [], 1, 0],
    1992: [2, -701218305, 2, 2, 2, [], 1, 0],
    1993: [2, -701218305, 2, 2, 2, [], 1, 0],
    1994: [2, -701218305, 2, 2, 2, [], 1, 0],
    1995: [2, -701218305, 2, 2, 2, [], 1, 0],
    1996: [2, -701218305, 2, 2, 2, [], 1, 0],
    1997: [2, -701218305, 3, 2, 2, [], 1, 0],
    1998: [2, -701218305, 5, 2, 2, [], 1, 0],
    1999: [2, -372571905, 2, 2, 2, [], 1, 0],
    2: [3, -168562433, []],
    20: [2, 1936946175, 1, 2, 2, [6, 3], 1, 0],
    200: [2, -559393793, 12, 0, 2, [], 0, 0],
    2E3: [2, -372571905, 2, 2, 2, [], 1, 0],
    2001: [2, -372571905, 2, 2, 2, [], 1, 0],
    2002: [2, -372571905, 2, 2, 2, [], 1, 0],
    2003: [2, -372571905, 2, 2, 2, [], 1, 0],
    2004: [2, -372571905, 3, 2, 2, [], 1, 0],
    2005: [2, -372571905, 5, 2, 2, [], 1, 0],
    2006: [2, 92056319, 2, 2, 2, [], 1, 0],
    2007: [2, 92056319, 2, 2, 2, [], 1, 0],
    2008: [2, 92056319, 2, 2, 2, [], 1, 0],
    2009: [2, 92056319, 2, 2, 2, [], 1, 0],
    201: [2, -559393793, 16, 0, 2, [], 0, 0],
    2010: [2, 92056319, 2, 2, 2, [], 1, 0],
    2011: [2, 92056319, 3, 2, 2, [], 1, 0],
    2012: [2, 92056319, 5, 2, 2, [], 1, 0],
    2013: [2, 119573247, 2, 2, 2, [], 1, 0],
    2014: [2, 119573247, 2, 2, 2, [], 1, 0],
    2015: [2, 119573247, 2, 2, 2, [], 1, 0],
    2016: [2, 119573247, 2, 2, 2, [], 1, 0],
    2017: [2, 119573247, 2, 2, 2, [], 1, 0],
    2018: [2, 119573247, 3, 2, 2, [], 1, 0],
    2019: [2, 119573247, 5, 2, 2, [], 1, 0],
    202: [2, -559393793, 18, 0, 2, [], 0, 0],
    2020: [2, -1, 4, 2, 2, [], 1, 0],
    2021: [2, -1, 4, 2, 2, [], 1, 0],
    2022: [2, -1, 4, 2, 2, [], 1, 0],
    2023: [2, -1, 4, 2, 2, [], 1, 0],
    2024: [2, -1, 4, 2, 2, [], 1, 0],
    2025: [2, -1, 5, 2, 2, [], 1, 0],
    2026: [2, -1, 7, 2, 2, [], 1, 0],
    2027: [2, -1, 4, 2, 2, [], 1, 0],
    2028: [2, -1, 4, 2, 2, [], 1, 0],
    2029: [2, -1, 4, 2, 2, [], 1, 0],
    203: [2, -559393793, 18, 0, 2, [], 0, 0],
    2030: [2, -1, 4, 2, 2, [], 1, 0],
    2031: [2, -1, 4, 2, 2, [], 1, 0],
    2032: [2, -1, 5, 2, 2, [], 1, 0],
    2033: [2, -1, 7, 2, 2, [], 1, 0],
    2034: [2, 6737151, 2, 2, 2, [], 1, 0],
    2035: [2, 6737151, 2, 2, 2, [], 1, 0],
    2036: [2, 6737151, 2, 2, 2, [], 1, 0],
    2037: [2, 6737151, 2, 2, 2, [], 1, 0],
    2038: [2, 6737151, 2, 2, 2, [], 1, 0],
    2039: [2, 6737151, 3, 2, 2, [], 1, 0],
    204: [2, -303174145, 1, 2, 2, [], 0, 0],
    2040: [2, 6737151, 5, 2, 2, [], 1, 0],
    2041: [2, -308492289, 2, 2, 2, [], 1, 0],
    2042: [2, -308492289, 2, 2, 2, [], 1, 0],
    2043: [2, -308492289, 2, 2, 2, [], 1, 0],
    2044: [2, -308492289, 2, 2, 2, [], 1, 0],
    2045: [2, -308492289, 2, 2, 2, [], 1, 0],
    2046: [2, -308492289, 3, 2, 2, [], 1, 0],
    2047: [2, -308492289, 5, 2, 2, [], 1, 0],
    2048: [2, -1, 4, 2, 2, [], 1, 0],
    2049: [2, -1, 4, 2, 2, [], 1, 0],
    205: [2, -454761217, 3, 2, 2, [], 0, 0],
    2050: [2, -1, 4, 2, 2, [], 1, 0],
    2051: [2, -1, 4, 2, 2, [], 1, 0],
    2052: [2, -1, 4, 2, 2, [], 1, 0],
    2053: [2, -1, 5, 2, 2, [], 1, 0],
    2054: [2, -1, 7, 2, 2, [], 1, 0],
    2055: [2, -1, 4, 2, 2, [], 1, 0],
    2056: [2, -1, 4, 2, 2, [], 1, 0],
    2057: [2, -1, 4, 2, 2, [], 1, 0],
    2058: [2, -1, 4, 2, 2, [], 1, 0],
    2059: [2, -1, 4, 2, 2, [], 1, 0],
    206: [2, -454761217, 3, 2, 2, [], 0, 0],
    2060: [2, -1, 5, 2, 2, [], 1, 0],
    2061: [2, -1, 7, 2, 2, [], 1, 0],
    2062: [2, -1, 4, 2, 2, [], 1, 0],
    2063: [2, -1, 4, 2, 2, [], 1, 0],
    2064: [2, -1, 4, 2, 2, [], 1, 0],
    2065: [2, -1, 4, 2, 2, [], 1, 0],
    2066: [2, -1, 4, 2, 2, [], 1, 0],
    2067: [2, -1, 5, 2, 2, [], 1, 0],
    2068: [2, -1, 7, 2, 2, [], 1, 0],
    2069: [2, 1555621375, 2, 2, 2, [], 1, 0],
    207: [2, -758265345, 4, 2, 2, [1, 6], 1, 0],
    2070: [2, 1555621375, 2, 2, 2, [], 1, 0],
    2071: [2, 1555621375, 2, 2, 2, [], 1, 0],
    2072: [2, 1555621375, 2, 2, 2, [], 1, 0],
    2073: [2, 1555621375, 2, 2, 2, [], 1, 0],
    2074: [2, 1555621375, 3, 2, 2, [], 1, 0],
    2075: [2, 1555621375, 5, 2, 2, [], 1, 0],
    2076: [2, 1555621375, 2, 2, 2, [], 1, 0],
    2077: [2, 1555621375, 2, 2, 2, [], 1, 0],
    2078: [2, 1555621375, 2, 2, 2, [], 1, 0],
    2079: [2, 1555621375, 2, 2, 2, [], 1, 0],
    208: [2, -758265345, 5, 2, 2, [1, 6], 1, 0],
    2080: [2, 1555621375, 2, 2, 2, [], 1, 0],
    2081: [2, 1555621375, 3, 2, 2, [], 1, 0],
    2082: [2, 1555621375, 5, 2, 2, [], 1, 0],
    2083: [2, -701152513, 2, 2, 2, [], 1, 0],
    2084: [2, -701152513, 2, 2, 2, [], 1, 0],
    2085: [2, -701152513, 2, 2, 2, [], 1, 0],
    2086: [2, -701152513, 2, 2, 2, [], 1, 0],
    2087: [2, -701152513, 2, 2, 2, [], 1, 0],
    2088: [2, -701152513, 3, 2, 2, [], 1, 0],
    2089: [2, -701152513, 5, 2, 2, [], 1, 0],
    209: [2, -758265345, 7, 2, 2, [1, 6], 1, 0],
    2090: [2, -1, 4, 2, 2, [], 1, 0],
    2091: [2, -1, 4, 2, 2, [], 1, 0],
    2092: [2, -1, 4, 2, 2, [], 1, 0],
    2093: [2, -1, 4, 2, 2, [], 1, 0],
    2094: [2, -1, 4, 2, 2, [], 1, 0],
    2095: [2, -1, 5, 2, 2, [], 1, 0],
    2096: [2, -1, 7, 2, 2, [], 1, 0],
    2097: [2, -1, 4, 2, 2, [], 1, 0],
    2098: [2, -1, 4, 2, 2, [], 1, 0],
    2099: [2, -1, 4, 2, 2, [], 1, 0],
    21: [2, 1936946175, 1, 2, 2, [6, 3], 1, 0],
    210: [2, -758265345, 7, 2, 2, [1, 10], 1, 0],
    2100: [2, -1, 4, 2, 2, [], 1, 0],
    2101: [2, -1, 4, 2, 2, [], 1, 0],
    2102: [2, -1, 5, 2, 2, [], 1, 0],
    2103: [2, -1, 7, 2, 2, [], 1, 0],
    2104: [2, 6737151, 2, 2, 2, [], 1, 0],
    2105: [2, 6737151, 2, 2, 2, [], 1, 0],
    2106: [2, 6737151, 2, 2, 2, [], 1, 0],
    2107: [2, 6737151, 2, 2, 2, [], 1, 0],
    2108: [2, 6737151, 2, 2, 2, [], 1, 0],
    2109: [2, 6737151, 3, 2, 2, [], 1, 0],
    211: [2, -303174145, 1, 2, 2, [], 0, 0],
    2110: [2, 6737151, 5, 2, 2, [], 1, 0],
    2111: [2, 6737151, 2, 2, 2, [], 1, 0],
    2112: [2, 6737151, 2, 2, 2, [], 1, 0],
    2113: [2, 6737151, 2, 2, 2, [], 1, 0],
    2114: [2, 6737151, 2, 2, 2, [], 1, 0],
    2115: [2, 6737151, 2, 2, 2, [], 1, 0],
    2116: [2, 6737151, 3, 2, 2, [], 1, 0],
    2117: [2, 6737151, 5, 2, 2, [], 1, 0],
    2118: [2, -1, 4, 2, 2, [], 1, 0],
    2119: [2, -1, 4, 2, 2, [], 1, 0],
    212: [2, -454761217, 4, 2, 2, [], 0, 0],
    2120: [2, -1, 4, 2, 2, [], 1, 0],
    2121: [2, -1, 4, 2, 2, [], 1, 0],
    2122: [2, -1, 4, 2, 2, [], 1, 0],
    2123: [2, -1, 5, 2, 2, [], 1, 0],
    2124: [2, -1, 7, 2, 2, [], 1, 0],
    2125: [2, 8912127, 2, 2, 2, [], 1, 0],
    2126: [2, 8912127, 2, 2, 2, [], 1, 0],
    2127: [2, 8912127, 2, 2, 2, [], 1, 0],
    2128: [2, 8912127, 2, 2, 2, [], 1, 0],
    2129: [2, 8912127, 2, 2, 2, [], 1, 0],
    213: [2, -454761217, 5, 2, 2, [], 0, 0],
    2130: [2, 8912127, 3, 2, 2, [], 1, 0],
    2131: [2, 8912127, 5, 2, 2, [], 1, 0],
    2132: [2, -328597249, 2, 2, 2, [], 1, 0],
    2133: [2, -328597249, 2, 2, 2, [], 1, 0],
    2134: [2, -328597249, 2, 2, 2, [], 1, 0],
    2135: [2, -328597249, 2, 2, 2, [], 1, 0],
    2136: [2, -328597249, 2, 2, 2, [], 1, 0],
    2137: [2, -328597249, 3, 2, 2, [], 1, 0],
    2138: [2, -328597249, 5, 2, 2, [], 1, 0],
    2139: [2, -1, 4, 2, 2, [], 1, 0],
    214: [2, -758265345, 6, 2, 2, [], 0, 0],
    2140: [2, -1, 4, 2, 2, [], 1, 0],
    2141: [2, -1, 4, 2, 2, [], 1, 0],
    2142: [2, -1, 4, 2, 2, [], 1, 0],
    2143: [2, -1, 4, 2, 2, [], 1, 0],
    2144: [2, -1, 5, 2, 2, [], 1, 0],
    2145: [2, -1, 7, 2, 2, [], 1, 0],
    2146: [2, -1, 4, 2, 2, [], 1, 0],
    2147: [2, -1, 4, 2, 2, [], 1, 0],
    2148: [2, -1, 4, 2, 2, [], 1, 0],
    2149: [2, -1, 4, 2, 2, [], 1, 0],
    215: [2, -758265345, 8, 2, 2, [], 0, 0],
    2150: [2, -1, 4, 2, 2, [], 1, 0],
    2151: [2, -1, 5, 2, 2, [], 1, 0],
    2152: [2, -1, 7, 2, 2, [], 1, 0],
    2153: [2, -1261683201, 2, 2, 2, [], 1, 0],
    2154: [2, -1261683201, 2, 2, 2, [], 1, 0],
    2155: [2, -1261683201, 2, 2, 2, [], 1, 0],
    2156: [2, -1261683201, 2, 2, 2, [], 1, 0],
    2157: [2, -1261683201, 2, 2, 2, [], 1, 0],
    2158: [2, -1261683201, 3, 2, 2, [], 1, 0],
    2159: [2, -1261683201, 5, 2, 2, [], 1, 0],
    216: [2, -758265345, 10, 2, 2, [], 0, 0],
    2160: [2, -1, 4, 2, 2, [], 1, 0],
    2161: [2, -1, 4, 2, 2, [], 1, 0],
    2162: [2, -1, 4, 2, 2, [], 1, 0],
    2163: [2, -1, 4, 2, 2, [], 1, 0],
    2164: [2, -1, 4, 2, 2, [], 1, 0],
    2165: [2, -1, 5, 2, 2, [], 1, 0],
    2166: [2, -1, 7, 2, 2, [], 1, 0],
    2167: [2, -1, 4, 2, 2, [], 1, 0],
    2168: [2, -1, 4, 2, 2, [], 1, 0],
    2169: [2, -1, 4, 2, 2, [], 1, 0],
    217: [2, -758265345, 10, 2, 2, [], 0, 0],
    2170: [2, -1, 4, 2, 2, [], 1, 0],
    2171: [2, -1, 4, 2, 2, [], 1, 0],
    2172: [2, -1, 5, 2, 2, [], 1, 0],
    2173: [2, -1, 7, 2, 2, [], 1, 0],
    2174: [2, -481736193, 2, 2, 2, [], 1, 0],
    2175: [2, -481736193, 2, 2, 2, [], 1, 0],
    2176: [2, -481736193, 2, 2, 2, [], 1, 0],
    2177: [2, -481736193, 2, 2, 2, [], 1, 0],
    2178: [2, -481736193, 2, 2, 2, [], 1, 0],
    2179: [2, -481736193, 3, 2, 2, [], 1, 0],
    218: [2, -455423489, 3, 2, 2, [], 0, 0],
    2180: [2, -481736193, 5, 2, 2, [], 1, 0],
    2181: [2, -4508673, 2, 2, 2, [], 1, 0],
    2182: [2, -4508673, 2, 2, 2, [], 1, 0],
    2183: [2, -4508673, 2, 2, 2, [], 1, 0],
    2184: [2, -4508673, 2, 2, 2, [], 1, 0],
    2185: [2, -4508673, 2, 2, 2, [], 1, 0],
    2186: [2, -4508673, 3, 2, 2, [], 1, 0],
    2187: [2, -4508673, 5, 2, 2, [], 1, 0],
    2188: [2, -1, 4, 2, 2, [], 1, 0],
    2189: [2, -1, 4, 2, 2, [], 1, 0],
    219: [2, -455423489, 3, 2, 2, [], 0, 0],
    2190: [2, -1, 4, 2, 2, [], 1, 0],
    2191: [2, -1, 4, 2, 2, [], 1, 0],
    2192: [2, -1, 4, 2, 2, [], 1, 0],
    2193: [2, -1, 5, 2, 2, [], 1, 0],
    2194: [2, -1, 7, 2, 2, [], 1, 0],
    2195: [2, -701218305, 2, 2, 2, [], 1, 0],
    2196: [2, -701218305, 2, 2, 2, [], 1, 0],
    2197: [2, -701218305, 2, 2, 2, [], 1, 0],
    2198: [2, -701218305, 2, 2, 2, [], 1, 0],
    2199: [2, -701218305, 2, 2, 2, [], 1, 0],
    22: [2, -858993409, 1, 2, 2, [6, 3], 1, 0],
    220: [2, -455423489, 4, 2, 2, [], 0, 0],
    2200: [2, -701218305, 3, 2, 2, [], 1, 0],
    2201: [2, -701218305, 5, 2, 2, [], 1, 0],
    2202: [2, -1, 4, 2, 2, [], 1, 0],
    2203: [2, -1, 4, 2, 2, [], 1, 0],
    2204: [2, -1, 4, 2, 2, [], 1, 0],
    2205: [2, -1, 4, 2, 2, [], 1, 0],
    2206: [2, -1, 4, 2, 2, [], 1, 0],
    2207: [2, -1, 5, 2, 2, [], 1, 0],
    2208: [2, -1, 7, 2, 2, [], 1, 0],
    2209: [2, 1806911487, 2, 2, 2, [], 1, 0],
    221: [2, -455423489, 6, 2, 2, [], 0, 0],
    2210: [2, 1806911487, 2, 2, 2, [], 1, 0],
    2211: [2, 1806911487, 2, 2, 2, [], 1, 0],
    2212: [2, 1806911487, 2, 2, 2, [], 1, 0],
    2213: [2, 1806911487, 2, 2, 2, [], 1, 0],
    2214: [2, 1806911487, 3, 2, 2, [], 1, 0],
    2215: [2, 1806911487, 5, 2, 2, [], 1, 0],
    2216: [2, -1, 4, 2, 2, [], 1, 0],
    2217: [2, -1, 4, 2, 2, [], 1, 0],
    2218: [2, -1, 4, 2, 2, [], 1, 0],
    2219: [2, -1, 4, 2, 2, [], 1, 0],
    222: [2, -843149313, 6, 2, 2, [], 0, 0],
    2220: [2, -1, 4, 2, 2, [], 1, 0],
    2221: [2, -1, 5, 2, 2, [], 1, 0],
    2222: [2, -1, 7, 2, 2, [], 1, 0],
    2223: [2, -1, 4, 2, 2, [], 1, 0],
    2224: [2, -1, 4, 2, 2, [], 1, 0],
    2225: [2, -1, 4, 2, 2, [], 1, 0],
    2226: [2, -1, 4, 2, 2, [], 1, 0],
    2227: [2, -1, 4, 2, 2, [], 1, 0],
    2228: [2, -1, 5, 2, 2, [], 1, 0],
    2229: [2, -1, 7, 2, 2, [], 1, 0],
    223: [2, -843149313, 6, 2, 2, [], 0, 0],
    2230: [2, -1, 4, 2, 2, [], 1, 0],
    2231: [2, -1, 4, 2, 2, [], 1, 0],
    2232: [2, -1, 4, 2, 2, [], 1, 0],
    2233: [2, -1, 4, 2, 2, [], 1, 0],
    2234: [2, -1, 4, 2, 2, [], 1, 0],
    2235: [2, -1, 5, 2, 2, [], 1, 0],
    2236: [2, -1, 7, 2, 2, [], 1, 0],
    2237: [2, -1, 4, 2, 2, [], 1, 0],
    2238: [2, -1, 4, 2, 2, [], 1, 0],
    2239: [2, -1, 4, 2, 2, [], 1, 0],
    224: [2, -843149313, 8, 2, 2, [], 0, 0],
    2240: [2, -1, 4, 2, 2, [], 1, 0],
    2241: [2, -1, 4, 2, 2, [], 1, 0],
    2242: [2, -1, 5, 2, 2, [], 1, 0],
    2243: [2, -1, 7, 2, 2, [], 1, 0],
    2244: [2, -1, 4, 2, 2, [], 1, 0],
    2245: [2, -1, 4, 2, 2, [], 1, 0],
    2246: [2, -1, 4, 2, 2, [], 1, 0],
    2247: [2, -1, 4, 2, 2, [], 1, 0],
    2248: [2, -1, 4, 2, 2, [], 1, 0],
    2249: [2, -1, 5, 2, 2, [], 1, 0],
    225: [2, -843149313, 10, 2, 2, [], 0, 0],
    2250: [2, -1, 7, 2, 2, [], 1, 0],
    2251: [2, -1, 4, 2, 2, [], 1, 0],
    2252: [2, -1, 4, 2, 2, [], 1, 0],
    2253: [2, -1, 4, 2, 2, [], 1, 0],
    2254: [2, -1, 4, 2, 2, [], 1, 0],
    2255: [2, -1, 4, 2, 2, [], 1, 0],
    2256: [2, -1, 5, 2, 2, [], 1, 0],
    2257: [2, -1, 7, 2, 2, [], 1, 0],
    2258: [2, -1, 4, 2, 2, [], 1, 0],
    2259: [2, -1, 4, 2, 2, [], 1, 0],
    226: [2, -843149313, 14, 2, 2, [], 0, 0],
    2260: [2, -1, 4, 2, 2, [], 1, 0],
    2261: [2, -1, 4, 2, 2, [], 1, 0],
    2262: [2, -1, 4, 2, 2, [], 1, 0],
    2263: [2, -1, 5, 2, 2, [], 1, 0],
    2264: [2, -1, 7, 2, 2, [], 1, 0],
    2265: [2, -1, 4, 2, 2, [], 1, 0],
    2266: [2, -1, 4, 2, 2, [], 1, 0],
    2267: [2, -1, 4, 2, 2, [], 1, 0],
    2268: [2, -1, 4, 2, 2, [], 1, 0],
    2269: [2, -1, 4, 2, 2, [], 1, 0],
    227: [2, -455423489, 3, 2, 2, [], 0, 0],
    2270: [2, -1, 5, 2, 2, [], 1, 0],
    2271: [2, -1, 7, 2, 2, [], 1, 0],
    2272: [2, -1, 4, 2, 2, [], 1, 0],
    2273: [2, -1, 4, 2, 2, [], 1, 0],
    2274: [2, -1, 4, 2, 2, [], 1, 0],
    2275: [2, -1, 4, 2, 2, [], 1, 0],
    2276: [2, -1, 4, 2, 2, [], 1, 0],
    2277: [2, -1, 5, 2, 2, [], 1, 0],
    2278: [2, -1, 7, 2, 2, [], 1, 0],
    2279: [2, -1, 4, 2, 2, [], 1, 0],
    228: [2, -455423489, 3, 2, 2, [], 0, 0],
    2280: [2, -1, 4, 2, 2, [], 1, 0],
    2281: [2, -1, 4, 2, 2, [], 1, 0],
    2282: [2, -1, 4, 2, 2, [], 1, 0],
    2283: [2, -1, 4, 2, 2, [], 1, 0],
    2284: [2, -1, 5, 2, 2, [], 1, 0],
    2285: [2, -1, 7, 2, 2, [], 1, 0],
    2286: [2, -813057025, 2, 2, 2, [], 1, 0],
    2287: [2, -813057025, 2, 2, 2, [], 1, 0],
    2288: [2, -813057025, 2, 2, 2, [], 1, 0],
    2289: [2, -813057025, 2, 2, 2, [], 1, 0],
    229: [2, -455423489, 4, 2, 2, [], 0, 0],
    2290: [2, -813057025, 2, 2, 2, [], 1, 0],
    2291: [2, -813057025, 3, 2, 2, [], 1, 0],
    2292: [2, -813057025, 5, 2, 2, [], 1, 0],
    2293: [2, -375840513, 2, 2, 2, [], 1, 0],
    2294: [2, -375840513, 2, 2, 2, [], 1, 0],
    2295: [2, -375840513, 2, 2, 2, [], 1, 0],
    2296: [2, -375840513, 2, 2, 2, [], 1, 0],
    2297: [2, -375840513, 2, 2, 2, [], 1, 0],
    2298: [2, -375840513, 3, 2, 2, [], 1, 0],
    2299: [2, -375840513, 5, 2, 2, [], 1, 0],
    23: [2, 1936946175, 1, 2, 2, [6, 3], 1, 0],
    230: [2, -455423489, 4, 2, 2, [], 0, 0],
    2300: [2, 1385155839, 2, 2, 2, [], 1, 0],
    2301: [2, 1385155839, 2, 2, 2, [], 1, 0],
    2302: [2, 1385155839, 2, 2, 2, [], 1, 0],
    2303: [2, 1385155839, 2, 2, 2, [], 1, 0],
    2304: [2, 1385155839, 2, 2, 2, [], 1, 0],
    2305: [2, 1385155839, 3, 2, 2, [], 1, 0],
    2306: [2, 1385155839, 5, 2, 2, [], 1, 0],
    2307: [2, 731590655, 2, 2, 2, [], 1, 0],
    2308: [2, 731590655, 2, 2, 2, [], 1, 0],
    2309: [2, 731590655, 2, 2, 2, [], 1, 0],
    231: [2, -843149313, 4, 2, 2, [], 0, 0],
    2310: [2, 731590655, 2, 2, 2, [], 1, 0],
    2311: [2, 731590655, 2, 2, 2, [], 1, 0],
    2312: [2, 731590655, 3, 2, 2, [], 1, 0],
    2313: [2, 731590655, 5, 2, 2, [], 1, 0],
    2314: [2, 8421631, 2, 2, 2, [], 1, 0],
    2315: [2, 8421631, 2, 2, 2, [], 1, 0],
    2316: [2, 8421631, 2, 2, 2, [], 1, 0],
    2317: [2, 8421631, 2, 2, 2, [], 1, 0],
    2318: [2, 8421631, 2, 2, 2, [], 1, 0],
    2319: [2, 8421631, 3, 2, 2, [], 1, 0],
    232: [2, -843149313, 6, 2, 2, [], 0, 0],
    2320: [2, 8421631, 5, 2, 2, [], 1, 0],
    2321: [2, -633391617, 2, 2, 2, [], 1, 0],
    2322: [2, -633391617, 2, 2, 2, [], 1, 0],
    2323: [2, -633391617, 2, 2, 2, [], 1, 0],
    2324: [2, -633391617, 2, 2, 2, [], 1, 0],
    2325: [2, -633391617, 2, 2, 2, [], 1, 0],
    2326: [2, -633391617, 3, 2, 2, [], 1, 0],
    2327: [2, -633391617, 5, 2, 2, [], 1, 0],
    2328: [2, -1638519809, 2, 2, 2, [], 1, 0],
    2329: [2, -1638519809, 2, 2, 2, [], 1, 0],
    233: [2, -843149313, 8, 2, 2, [], 0, 0],
    2330: [2, -1638519809, 2, 2, 2, [], 1, 0],
    2331: [2, -1638519809, 2, 2, 2, [], 1, 0],
    2332: [2, -1638519809, 2, 2, 2, [], 1, 0],
    2333: [2, -1638519809, 3, 2, 2, [], 1, 0],
    2334: [2, -1638519809, 5, 2, 2, [], 1, 0],
    2335: [2, -1725003777, 2, 2, 2, [], 1, 0],
    2336: [2, -1725003777, 2, 2, 2, [], 1, 0],
    2337: [2, -1725003777, 2, 2, 2, [], 1, 0],
    2338: [2, -1725003777, 2, 2, 2, [], 1, 0],
    2339: [2, -1725003777, 2, 2, 2, [], 1, 0],
    234: [2, -843149313, 10, 2, 2, [], 0, 0],
    2340: [2, -1725003777, 3, 2, 2, [], 1, 0],
    2341: [2, -1725003777, 5, 2, 2, [], 1, 0],
    2342: [2, 2025713407, 2, 2, 2, [], 1, 0],
    2343: [2, 2025713407, 2, 2, 2, [], 1, 0],
    2344: [2, 2025713407, 2, 2, 2, [], 1, 0],
    2345: [2, 2025713407, 2, 2, 2, [], 1, 0],
    2346: [2, 2025713407, 2, 2, 2, [], 1, 0],
    2347: [2, 2025713407, 3, 2, 2, [], 1, 0],
    2348: [2, 2025713407, 5, 2, 2, [], 1, 0],
    2349: [2, -1854622465, 2, 2, 2, [], 1, 0],
    235: [2, -843149313, 14, 2, 2, [], 0, 0],
    2350: [2, -1854622465, 2, 2, 2, [], 1, 0],
    2351: [2, -1854622465, 2, 2, 2, [], 1, 0],
    2352: [2, -1854622465, 2, 2, 2, [], 1, 0],
    2353: [2, -1854622465, 2, 2, 2, [], 1, 0],
    2354: [2, -1854622465, 3, 2, 2, [], 1, 0],
    2355: [2, -1854622465, 5, 2, 2, [], 1, 0],
    2356: [2, -1, 4, 2, 2, [], 1, 0],
    2357: [2, -1, 4, 2, 2, [], 1, 0],
    2358: [2, -1, 4, 2, 2, [], 1, 0],
    2359: [2, -1, 4, 2, 2, [], 1, 0],
    236: [2, -237677057, 3, 0, 2, [], 0, 0],
    2360: [2, -1, 4, 2, 2, [], 1, 0],
    2361: [2, -1, 5, 2, 2, [], 1, 0],
    2362: [2, -1, 7, 2, 2, [], 1, 0],
    2363: [2, 1806911487, 2, 2, 2, [], 1, 0],
    2364: [2, 1806911487, 2, 2, 2, [], 1, 0],
    2365: [2, 1806911487, 2, 2, 2, [], 1, 0],
    2366: [2, 1806911487, 2, 2, 2, [], 1, 0],
    2367: [2, 1806911487, 2, 2, 2, [], 1, 0],
    2368: [2, 1806911487, 3, 2, 2, [], 1, 0],
    2369: [2, 1806911487, 5, 2, 2, [], 1, 0],
    237: [2, -237677057, 4, 0, 2, [], 0, 0],
    2370: [2, -1, 4, 2, 2, [], 1, 0],
    2371: [2, -1, 4, 2, 2, [], 1, 0],
    2372: [2, -1, 4, 2, 2, [], 1, 0],
    2373: [2, -1, 4, 2, 2, [], 1, 0],
    2374: [2, -1, 4, 2, 2, [], 1, 0],
    2375: [2, -1, 5, 2, 2, [], 1, 0],
    2376: [2, -1, 7, 2, 2, [], 1, 0],
    2377: [2, -813057025, 2, 2, 2, [], 1, 0],
    2378: [2, -813057025, 2, 2, 2, [], 1, 0],
    2379: [2, -813057025, 2, 2, 2, [], 1, 0],
    238: [2, -237677057, 4, 0, 2, [], 0, 0],
    2380: [2, -813057025, 2, 2, 2, [], 1, 0],
    2381: [2, -813057025, 2, 2, 2, [], 1, 0],
    2382: [2, -813057025, 3, 2, 2, [], 1, 0],
    2383: [2, -813057025, 5, 2, 2, [], 1, 0],
    2384: [5, "1", 11, 1212696831, 16, -1],
    2385: [5, "1", 11, 1212696831, 16, -1],
    2386: [5, "1", 12, 1212696831, 16, -1],
    2387: [5, "1", 14, 1212696831, 16, -1],
    2388: [5, "1", 11, -535291649, 16, -1],
    2389: [5, "1", 11, -535291649, 16, -1],
    239: [2, -237677057, 6, 0, 2, [], 0, 0],
    2390: [5, "1", 12, -535291649, 16, -1],
    2391: [5, "1", 14, -535291649, 16, -1],
    2392: [5, "1", 11, 4039679, 16, -1],
    2393: [5, "1", 11, 4039679, 16, -1],
    2394: [5, "1", 12, 4039679, 16, -1],
    2395: [5, "1", 14, 4039679, 16, -1],
    2396: [5, "1", 11, 10124543, 16, -1],
    2397: [5, "1", 11, 10124543, 16, -1],
    2398: [5, "1", 12, 10124543, 16, -1],
    2399: [5, "1", 14, 10124543, 16, -1],
    24: [2, 1936946175, 1, 2, 2, [6, 3], 1, 0],
    240: [2, -237677057, 6, 0, 2, [], 0, 0],
    2400: [5, "1", 11, -838812673, 16, -1],
    2401: [5, "1", 11, -838812673, 16, -1],
    2402: [5, "1", 12, -838812673, 16, -1],
    2403: [5, "1", 14, -838812673, 16, -1],
    2404: [5, "1", 11, -1720245249, 16, -1],
    2405: [5, "1", 11, -1720245249, 16, -1],
    2406: [5, "1", 12, -1720245249, 16, -1],
    2407: [5, "1", 14, -1720245249, 16, -1],
    2408: [5, "1", 11, 561521151, 16, -1],
    2409: [5, "1", 11, 561521151, 16, -1],
    241: [2, -237677057, 8, 0, 2, [], 0, 0],
    2410: [5, "1", 12, 561521151, 16, -1],
    2411: [5, "1", 14, 561521151, 16, -1],
    2412: [5, "1", 11, 1300247551, 16, -1],
    2413: [5, "1", 11, 1300247551, 16, -1],
    2414: [5, "1", 12, 1300247551, 16, -1],
    2415: [5, "1", 14, 1300247551, 16, -1],
    2416: [5, "1", 11, 7906815, 16, -1],
    2417: [5, "1", 11, 7906815, 16, -1],
    2418: [5, "1", 12, 7906815, 16, -1],
    2419: [5, "1", 14, 7906815, 16, -1],
    242: [2, -237677057, 12, 0, 2, [], 0, 0],
    2420: [5, "1", 11, -1286012673, 16, -1],
    2421: [5, "1", 11, -1286012673, 16, -1],
    2422: [5, "1", 12, -1286012673, 16, -1],
    2423: [5, "1", 14, -1286012673, 16, -1],
    2424: [5, "1", 11, 855677439, 16, -1],
    2425: [5, "1", 11, 855677439, 16, -1],
    2426: [5, "1", 12, 855677439, 16, -1],
    2427: [5, "1", 14, 855677439, 16, -1],
    2428: [5, "1", 11, 1647338495, 16, -1],
    2429: [5, "1", 11, 1647338495, 16, -1],
    243: [2, -237677057, 14, 0, 2, [], 0, 0],
    2430: [5, "1", 12, 1647338495, 16, -1],
    2431: [5, "1", 14, 1647338495, 16, -1],
    2432: [5, "1", 11, -535291649, 16, -1],
    2433: [5, "1", 11, -535291649, 16, -1],
    2434: [5, "1", 12, -535291649, 16, -1],
    2435: [5, "1", 14, -535291649, 16, -1],
    2436: [5, "1", 11, -862574081, 16, -1],
    2437: [5, "1", 11, -862574081, 16, -1],
    2438: [5, "1", 12, -862574081, 16, -1],
    2439: [5, "1", 14, -862574081, 16, -1],
    244: [2, -237677057, 18, 0, 2, [], 0, 0],
    2440: [5, "1", 11, -2144111617, 16, -1],
    2441: [5, "1", 11, -2144111617, 16, -1],
    2442: [5, "1", 12, -2144111617, 16, -1],
    2443: [5, "1", 14, -2144111617, 16, -1],
    2444: [5, "1", 11, 10124543, 16, -1],
    2445: [5, "1", 11, 10124543, 16, -1],
    2446: [5, "1", 12, 10124543, 16, -1],
    2447: [5, "1", 14, 10124543, 16, -1],
    2448: [5, "1", 11, 1715939839, 16, -1],
    2449: [5, "1", 11, 1715939839, 16, -1],
    245: [2, -237677057, 18, 0, 2, [], 0, 0],
    2450: [5, "1", 12, 1715939839, 16, -1],
    2451: [5, "1", 14, 1715939839, 16, -1],
    2452: [5, "1", 11, -436207361, 16, -1],
    2453: [5, "1", 11, -436207361, 16, -1],
    2454: [5, "1", 12, -436207361, 16, -1],
    2455: [5, "1", 14, -436207361, 16, -1],
    2456: [5, "1", 11, 26673407, 16, -1],
    2457: [5, "1", 11, 26673407, 16, -1],
    2458: [5, "1", 12, 26673407, 16, -1],
    2459: [5, "1", 14, 26673407, 16, -1],
    246: [2, -559393793, 3, 0, 2, [], 0, 0],
    2460: [5, "1", 11, -1048379137, 16, -1],
    2461: [5, "1", 11, -1048379137, 16, -1],
    2462: [5, "1", 12, -1048379137, 16, -1],
    2463: [5, "1", 14, -1048379137, 16, -1],
    2464: [5, "1", 11, -1048379137, 16, -1],
    2465: [5, "1", 11, -1048379137, 16, -1],
    2466: [5, "1", 12, -1048379137, 16, -1],
    2467: [5, "1", 14, -1048379137, 16, -1],
    2468: [5, "1", 11, 1593890303, 16, -1],
    2469: [5, "1", 11, 1593890303, 16, -1],
    247: [2, -559393793, 3, 0, 2, [], 0, 0],
    2470: [5, "1", 12, 1593890303, 16, -1],
    2471: [5, "1", 14, 1593890303, 16, -1],
    2472: [5, "1", 11, -1543471617, 16, -1],
    2473: [5, "1", 11, -1543471617, 16, -1],
    2474: [5, "1", 12, -1543471617, 16, -1],
    2475: [5, "1", 14, -1543471617, 16, -1],
    2476: [5, "1", 11, -553614337, 16, -1],
    2477: [5, "1", 11, -553614337, 16, -1],
    2478: [5, "1", 12, -553614337, 16, -1],
    2479: [5, "1", 14, -553614337, 16, -1],
    248: [2, -559393793, 4, 0, 2, [], 0, 0],
    2480: [5, "1", 11, -865730305, 16, -1],
    2481: [5, "1", 11, -865730305, 16, -1],
    2482: [5, "1", 12, -865730305, 16, -1],
    2483: [5, "1", 14, -865730305, 16, -1],
    2484: [5, "1", 11, 5614335, 16, -1],
    2485: [5, "1", 11, 5614335, 16, -1],
    2486: [5, "1", 12, 5614335, 16, -1],
    2487: [5, "1", 14, 5614335, 16, -1],
    2488: [5, "1", 11, 8687615, 16, -1],
    2489: [5, "1", 11, 8687615, 16, -1],
    249: [2, -559393793, 5, 0, 2, [], 0, 0],
    2490: [5, "1", 12, 8687615, 16, -1],
    2491: [5, "1", 14, 8687615, 16, -1],
    2492: [5, "1", 11, 1850573055, 16, -1],
    2493: [5, "1", 11, 1850573055, 16, -1],
    2494: [5, "1", 12, 1850573055, 16, -1],
    2495: [5, "1", 14, 1850573055, 16, -1],
    2496: [5, "1", 11, 1711276287, 16, -1],
    2497: [5, "1", 11, 1711276287, 16, -1],
    2498: [5, "1", 12, 1711276287, 16, -1],
    2499: [5, "1", 14, 1711276287, 16, -1],
    25: [1, "3-4_china_capital", []],
    250: [2, -559393793, 6, 0, 2, [], 0, 0],
    2500: [5, "1", 11, -1185051905, 16, -1],
    2501: [5, "1", 11, -1185051905, 16, -1],
    2502: [5, "1", 12, -1185051905, 16, -1],
    2503: [5, "1", 14, -1185051905, 16, -1],
    2504: [5, "1", 11, 1934783743, 16, -1],
    2505: [5, "1", 11, 1934783743, 16, -1],
    2506: [5, "1", 12, 1934783743, 16, -1],
    2507: [5, "1", 14, 1934783743, 16, -1],
    2508: [5, "1", 11, -519764481, 16, -1],
    2509: [5, "1", 11, -519764481, 16, -1],
    251: [2, -559393793, 8, 0, 2, [], 0, 0],
    2510: [5, "1", 12, -519764481, 16, -1],
    2511: [5, "1", 14, -519764481, 16, -1],
    2512: [5, "1", 11, -1048379137, 16, -1],
    2513: [5, "1", 11, -1048379137, 16, -1],
    2514: [5, "1", 12, -1048379137, 16, -1],
    2515: [5, "1", 14, -1048379137, 16, -1],
    2516: [5, "1", 11, 1232784639, 16, -1],
    2517: [5, "1", 11, 1232784639, 16, -1],
    2518: [5, "1", 12, 1232784639, 16, -1],
    2519: [5, "1", 14, 1232784639, 16, -1],
    252: [2, -559393793, 12, 0, 2, [], 0, 0],
    2520: [5, "1", 11, -482737921, 16, -1],
    2521: [5, "1", 11, -482737921, 16, -1],
    2522: [5, "1", 12, -482737921, 16, -1],
    2523: [5, "1", 14, -482737921, 16, -1],
    2524: [5, "1", 11, -482737921, 16, -1],
    2525: [5, "1", 11, -482737921, 16, -1],
    2526: [5, "1", 12, -482737921, 16, -1],
    2527: [5, "1", 14, -482737921, 16, -1],
    2528: [5, "1", 11, 26673407, 16, -1],
    2529: [5, "1", 11, 26673407, 16, -1],
    253: [2, -559393793, 14, 0, 2, [], 0, 0],
    2530: [5, "1", 12, 26673407, 16, -1],
    2531: [5, "1", 14, 26673407, 16, -1],
    2532: [5, "1", 11, -1728013825, 16, -1],
    2533: [5, "1", 11, -1728013825, 16, -1],
    2534: [5, "1", 12, -1728013825, 16, -1],
    2535: [5, "1", 14, -1728013825, 16, -1],
    2536: [5, "1", 11, 10004223, 16, -1],
    2537: [5, "1", 11, 10004223, 16, -1],
    2538: [5, "1", 12, 10004223, 16, -1],
    2539: [5, "1", 14, 10004223, 16, -1],
    254: [2, -559393793, 18, 0, 2, [], 0, 0],
    2540: [5, "1", 11, 1937781759, 16, -1],
    2541: [5, "1", 11, 1937781759, 16, -1],
    2542: [5, "1", 12, 1937781759, 16, -1],
    2543: [5, "1", 14, 1937781759, 16, -1],
    2544: [5, "1", 11, 776752383, 16, -1],
    2545: [5, "1", 11, 776752383, 16, -1],
    2546: [5, "1", 12, 776752383, 16, -1],
    2547: [5, "1", 14, 776752383, 16, -1],
    2548: [5, "1", 11, 1937781759, 16, -1],
    2549: [5, "1", 11, 1937781759, 16, -1],
    255: [2, -559393793, 18, 0, 2, [], 0, 0],
    2550: [5, "1", 12, 1937781759, 16, -1],
    2551: [5, "1", 14, 1937781759, 16, -1],
    2552: [5, "1", 11, 26673407, 16, -1],
    2553: [5, "1", 11, 26673407, 16, -1],
    2554: [5, "1", 12, 26673407, 16, -1],
    2555: [5, "1", 14, 26673407, 16, -1],
    2556: [5, "1", 11, -862574081, 16, -1],
    2557: [5, "1", 11, -862574081, 16, -1],
    2558: [5, "1", 12, -862574081, 16, -1],
    2559: [5, "1", 14, -862574081, 16, -1],
    256: [2, -303174145, 1, 2, 2, [], 0, 0],
    2560: [5, "1", 11, 524786175, 16, -1],
    2561: [5, "1", 11, 524786175, 16, -1],
    2562: [5, "1", 12, 524786175, 16, -1],
    2563: [5, "1", 14, 524786175, 16, -1],
    2564: [5, "1", 11, -436207361, 16, -1],
    2565: [5, "1", 11, -436207361, 16, -1],
    2566: [5, "1", 12, -436207361, 16, -1],
    2567: [5, "1", 14, -436207361, 16, -1],
    2568: [5, "1", 11, 1816959487, 16, -1],
    2569: [5, "1", 11, 1816959487, 16, -1],
    257: [2, -454761217, 3, 2, 2, [], 0, 0],
    2570: [5, "1", 12, 1816959487, 16, -1],
    2571: [5, "1", 14, 1816959487, 16, -1],
    2572: [5, "1", 11, 26673407, 16, -1],
    2573: [5, "1", 11, 26673407, 16, -1],
    2574: [5, "1", 12, 26673407, 16, -1],
    2575: [5, "1", 14, 26673407, 16, -1],
    2576: [5, "1", 11, 912241407, 16, -1],
    2577: [5, "1", 11, 912241407, 16, -1],
    2578: [5, "1", 12, 912241407, 16, -1],
    2579: [5, "1", 14, 912241407, 16, -1],
    258: [2, -454761217, 3, 2, 2, [], 0, 0],
    2580: [5, "1", 11, -871099137, 16, -1],
    2581: [5, "1", 11, -871099137, 16, -1],
    2582: [5, "1", 12, -871099137, 16, -1],
    2583: [5, "1", 14, -871099137, 16, -1],
    2584: [5, "1", 11, -261847809, 16, -1],
    2585: [5, "1", 11, -261847809, 16, -1],
    2586: [5, "1", 12, -261847809, 16, -1],
    2587: [5, "1", 14, -261847809, 16, -1],
    2588: [5, "1", 11, -1725026561, 16, -1],
    2589: [5, "1", 11, -1725026561, 16, -1],
    259: [2, -758265345, 6, 2, 2, [], 0, 0],
    2590: [5, "1", 12, -1725026561, 16, -1],
    2591: [5, "1", 14, -1725026561, 16, -1],
    2592: [5, "1", 11, -1405023233, 16, -1],
    2593: [5, "1", 11, -1405023233, 16, -1],
    2594: [5, "1", 12, -1405023233, 16, -1],
    2595: [5, "1", 14, -1405023233, 16, -1],
    2596: [5, "1", 11, -436207361, 16, -1],
    2597: [5, "1", 11, -436207361, 16, -1],
    2598: [5, "1", 12, -436207361, 16, -1],
    2599: [5, "1", 14, -436207361, 16, -1],
    26: [1, "5-9_china_capital", []],
    260: [2, -758265345, 8, 2, 2, [], 0, 0],
    2600: [5, "1", 11, -540933889, 16, -1],
    2601: [5, "1", 11, -540933889, 16, -1],
    2602: [5, "1", 12, -540933889, 16, -1],
    2603: [5, "1", 14, -540933889, 16, -1],
    2604: [5, "1", 11, 92056319, 16, -1],
    2605: [5, "1", 11, 92056319, 16, -1],
    2606: [5, "1", 12, 92056319, 16, -1],
    2607: [5, "1", 14, 92056319, 16, -1],
    2608: [5, "1", 11, 119573247, 16, -1],
    2609: [5, "1", 11, 119573247, 16, -1],
    261: [2, -758265345, 12, 2, 2, [], 0, 0],
    2610: [5, "1", 12, 119573247, 16, -1],
    2611: [5, "1", 14, 119573247, 16, -1],
    2612: [5, "1", 11, 5614335, 16, -1],
    2613: [5, "1", 11, 5614335, 16, -1],
    2614: [5, "1", 12, 5614335, 16, -1],
    2615: [5, "1", 14, 5614335, 16, -1],
    2616: [5, "1", 11, -813979393, 16, -1],
    2617: [5, "1", 11, -813979393, 16, -1],
    2618: [5, "1", 12, -813979393, 16, -1],
    2619: [5, "1", 14, -813979393, 16, -1],
    262: [2, -758265345, 12, 2, 2, [], 0, 0],
    2620: [5, "1", 11, 10085887, 16, -1],
    2621: [5, "1", 11, 10085887, 16, -1],
    2622: [5, "1", 12, 10085887, 16, -1],
    2623: [5, "1", 14, 10085887, 16, -1],
    2624: [5, "1", 11, 10085887, 16, -1],
    2625: [5, "1", 11, 10085887, 16, -1],
    2626: [5, "1", 12, 10085887, 16, -1],
    2627: [5, "1", 14, 10085887, 16, -1],
    2628: [5, "1", 11, -1725026561, 16, -1],
    2629: [5, "1", 11, -1725026561, 16, -1],
    263: [2, -455423489, 3, 2, 2, [], 0, 0],
    2630: [5, "1", 12, -1725026561, 16, -1],
    2631: [5, "1", 14, -1725026561, 16, -1],
    2632: [5, "1", 11, 5614335, 16, -1],
    2633: [5, "1", 11, 5614335, 16, -1],
    2634: [5, "1", 12, 5614335, 16, -1],
    2635: [5, "1", 14, 5614335, 16, -1],
    2636: [5, "1", 11, 5614335, 16, -1],
    2637: [5, "1", 11, 5614335, 16, -1],
    2638: [5, "1", 12, 5614335, 16, -1],
    2639: [5, "1", 14, 5614335, 16, -1],
    264: [2, -455423489, 3, 2, 2, [], 0, 0],
    2640: [5, "1", 11, 8912127, 16, -1],
    2641: [5, "1", 11, 8912127, 16, -1],
    2642: [5, "1", 12, 8912127, 16, -1],
    2643: [5, "1", 14, 8912127, 16, -1],
    2644: [5, "1", 11, -328597249, 16, -1],
    2645: [5, "1", 11, -328597249, 16, -1],
    2646: [5, "1", 12, -328597249, 16, -1],
    2647: [5, "1", 14, -328597249, 16, -1],
    2648: [5, "1", 11, -535291649, 16, -1],
    2649: [5, "1", 11, -535291649, 16, -1],
    265: [2, -455423489, 4, 2, 2, [], 0, 0],
    2650: [5, "1", 12, -535291649, 16, -1],
    2651: [5, "1", 14, -535291649, 16, -1],
    2652: [5, "1", 11, -862574081, 16, -1],
    2653: [5, "1", 11, -862574081, 16, -1],
    2654: [5, "1", 12, -862574081, 16, -1],
    2655: [5, "1", 14, -862574081, 16, -1],
    2656: [5, "1", 11, -436207361, 16, -1],
    2657: [5, "1", 11, -436207361, 16, -1],
    2658: [5, "1", 12, -436207361, 16, -1],
    2659: [5, "1", 14, -436207361, 16, -1],
    266: [2, -455423489, 4, 2, 2, [], 0, 0],
    2660: [5, "1", 11, 1300247551, 16, -1],
    2661: [5, "1", 11, 1300247551, 16, -1],
    2662: [5, "1", 12, 1300247551, 16, -1],
    2663: [5, "1", 14, 1300247551, 16, -1],
    2664: [5, "1", 11, -2144114945, 16, -1],
    2665: [5, "1", 11, -2144114945, 16, -1],
    2666: [5, "1", 12, -2144114945, 16, -1],
    2667: [5, "1", 14, -2144114945, 16, -1],
    2668: [5, "1", 11, -1723392001, 16, -1],
    2669: [5, "1", 11, -1723392001, 16, -1],
    267: [2, -843149313, 4, 2, 2, [], 0, 0],
    2670: [5, "1", 12, -1723392001, 16, -1],
    2671: [5, "1", 14, -1723392001, 16, -1],
    2672: [5, "1", 11, 308458495, 16, -1],
    2673: [5, "1", 11, 308458495, 16, -1],
    2674: [5, "1", 12, 308458495, 16, -1],
    2675: [5, "1", 14, 308458495, 16, -1],
    2676: [5, "1", 11, 5832959, 16, -1],
    2677: [5, "1", 11, 5832959, 16, -1],
    2678: [5, "1", 12, 5832959, 16, -1],
    2679: [5, "1", 14, 5832959, 16, -1],
    268: [2, -843149313, 4, 2, 2, [], 0, 0],
    2680: [5, "1", 11, 8490239, 16, -1],
    2681: [5, "1", 11, 8490239, 16, -1],
    2682: [5, "1", 12, 8490239, 16, -1],
    2683: [5, "1", 14, 8490239, 16, -1],
    2684: [5, "1", 11, -1188947457, 16, -1],
    2685: [5, "1", 11, -1188947457, 16, -1],
    2686: [5, "1", 12, -1188947457, 16, -1],
    2687: [5, "1", 14, -1188947457, 16, -1],
    2688: [5, "1", 11, -2144665345, 16, -1],
    2689: [5, "1", 11, -2144665345, 16, -1],
    269: [2, -843149313, 7, 2, 2, [], 0, 0],
    2690: [5, "1", 12, -2144665345, 16, -1],
    2691: [5, "1", 14, -2144665345, 16, -1],
    2692: [5, "1", 11, -2145751297, 16, -1],
    2693: [5, "1", 11, -2145751297, 16, -1],
    2694: [5, "1", 12, -2145751297, 16, -1],
    2695: [5, "1", 14, -2145751297, 16, -1],
    2696: [5, "1", 11, 679987967, 16, -1],
    2697: [5, "1", 11, 679987967, 16, -1],
    2698: [5, "1", 12, 679987967, 16, -1],
    2699: [5, "1", 14, 679987967, 16, -1],
    27: [5, "1", 20, -788528897, 16, -1],
    270: [2, -843149313, 10, 2, 2, [], 0, 0],
    2700: [5, "1", 11, 2101851135, 16, -1],
    2701: [5, "1", 11, 2101851135, 16, -1],
    2702: [5, "1", 12, 2101851135, 16, -1],
    2703: [5, "1", 14, 2101851135, 16, -1],
    2704: [5, "1", 11, 1300247551, 16, -1],
    2705: [5, "1", 11, 1300247551, 16, -1],
    2706: [5, "1", 12, 1300247551, 16, -1],
    2707: [5, "1", 14, 1300247551, 16, -1],
    2708: [5, "1", 11, -2144114945, 16, -1],
    2709: [5, "1", 11, -2144114945, 16, -1],
    271: [2, -843149313, 12, 2, 2, [], 0, 0],
    2710: [5, "1", 12, -2144114945, 16, -1],
    2711: [5, "1", 14, -2144114945, 16, -1],
    2712: [1, "ditie_beijing_00", []],
    2713: [1, "ditie_beijing_00", []],
    2714: [1, "ditie_zaijian_00", []],
    2715: [1, "ditie_zaijian_00", []],
    2716: [1, "ditie_zaijian_00", []],
    2717: [1, "ditie_beijing_00", []],
    2718: [1, "ditie_beijing_00", []],
    2719: [1, "ditie_zaijian_00", []],
    272: [2, -455423489, 3, 2, 2, [], 0, 0],
    2720: [1, "ditie_zaijian_00", []],
    2721: [1, "ditie_zaijian_00", []],
    2722: [1, "ditie_beijing_00", []],
    2723: [1, "ditie_beijing_01", []],
    2724: [1, "ditie_beijing_0", []],
    2725: [1, "ditie_beijing_1", []],
    2726: [1, "ditie_beijing_2", []],
    2727: [1, "ditie_beijing_00", []],
    2728: [1, "trans_beijing_01", []],
    2729: [1, "trans_beijing_0", []],
    273: [2, -455423489, 3, 2, 2, [], 0, 0],
    2730: [1, "trans_beijing_1", []],
    2731: [1, "trans_beijing_2", []],
    2732: [1, "ditie_beijing_00", []],
    2733: [1, "ditie_shanghai_01", []],
    2734: [1, "ditie_shanghai_0", []],
    2735: [1, "ditie_shanghai_1", []],
    2736: [1, "ditie_shanghai_2", []],
    2737: [1, "ditie_beijing_00", []],
    2738: [1, "trans_shanghai_01", []],
    2739: [1, "trans_shanghai_0", []],
    274: [2, -455423489, 4, 2, 2, [], 0, 0],
    2740: [1, "trans_shanghai_1", []],
    2741: [1, "trans_shanghai_2", []],
    2742: [1, "ditie_beijing_00", []],
    2743: [1, "ditie_guangzhou_01", []],
    2744: [1, "ditie_guangzhou_0", []],
    2745: [1, "ditie_guangzhou_1", []],
    2746: [1, "ditie_guangzhou_2", []],
    2747: [1, "ditie_beijing_00", []],
    2748: [1, "trans_guangzhou_01", []],
    2749: [1, "trans_guangzhou_0", []],
    275: [2, -455423489, 4, 2, 2, [], 0, 0],
    2750: [1, "trans_guangzhou_1", []],
    2751: [1, "trans_guangzhou_2", []],
    2752: [1, "ditie_beijing_00", []],
    2753: [1, "ditie_shenzhen_g", []],
    2754: [1, "ditie_shenzhen_g0", []],
    2755: [1, "ditie_shenzhen_g1", []],
    2756: [1, "ditie_shenzhen_g2", []],
    2757: [1, "ditie_beijing_00", []],
    2758: [1, "ditie_shenzhen_01", []],
    2759: [1, "ditie_shenzhen_0", []],
    276: [2, -843149313, 4, 2, 2, [], 0, 0],
    2760: [1, "ditie_shenzhen_1", []],
    2761: [1, "ditie_shenzhen_2", []],
    2762: [1, "ditie_beijing_00", []],
    2763: [1, "trans_shenzhen_01", []],
    2764: [1, "trans_shenzhen_0", []],
    2765: [1, "trans_shenzhen_1", []],
    2766: [1, "trans_shenzhen_2", []],
    2767: [1, "ditie_beijing_00", []],
    2768: [1, "ditie_guangzhou_01", []],
    2769: [1, "ditie_guangzhou_0", []],
    277: [2, -843149313, 5, 2, 2, [], 0, 0],
    2770: [1, "ditie_guangzhou_1", []],
    2771: [1, "ditie_guangzhou_2", []],
    2772: [1, "ditie_beijing_00", []],
    2773: [1, "ditie_chongqing_01", []],
    2774: [1, "ditie_chongqing_0", []],
    2775: [1, "ditie_chongqing_1", []],
    2776: [1, "ditie_chongqing_2", []],
    2777: [1, "ditie_beijing_00", []],
    2778: [1, "trans_chongqing_01", []],
    2779: [1, "trans_chongqing_0", []],
    278: [2, -843149313, 6, 2, 2, [], 0, 0],
    2780: [1, "trans_chongqing_1", []],
    2781: [1, "trans_chongqing_2", []],
    2782: [1, "ditie_beijing_00", []],
    2783: [1, "ditie_xian_01", []],
    2784: [1, "ditie_xian_0", []],
    2785: [1, "ditie_xian_1", []],
    2786: [1, "ditie_xian_2", []],
    2787: [1, "ditie_beijing_00", []],
    2788: [1, "ditie_tianjin_01", []],
    2789: [1, "ditie_tianjin_0", []],
    279: [2, -843149313, 8, 2, 2, [], 0, 0],
    2790: [1, "ditie_tianjin_1", []],
    2791: [1, "ditie_tianjin_2", []],
    2792: [1, "ditie_beijing_00", []],
    2793: [1, "trans_tianjin_01", []],
    2794: [1, "trans_tianjin_0", []],
    2795: [1, "trans_tianjin_1", []],
    2796: [1, "trans_tianjin_2", []],
    2797: [1, "ditie_beijing_00", []],
    2798: [1, "ditie_wuhan_01", []],
    2799: [1, "ditie_wuhan_0", []],
    28: [5, "1", 20, 912759295, 18, -1],
    280: [2, -843149313, 12, 2, 2, [], 0, 0],
    2800: [1, "ditie_wuhan_1", []],
    2801: [1, "ditie_wuhan_2", []],
    2802: [1, "ditie_beijing_00", []],
    2803: [1, "trans_wuhan_01", []],
    2804: [1, "trans_wuhan_0", []],
    2805: [1, "trans_wuhan_1", []],
    2806: [1, "trans_wuhan_2", []],
    2807: [1, "ditie_beijing_00", []],
    2808: [1, "ditie_nanjing_01", []],
    2809: [1, "ditie_nanjing_0", []],
    281: [2, -237677057, 3, 0, 2, [], 0, 0],
    2810: [1, "ditie_nanjing_1", []],
    2811: [1, "ditie_nanjing_2", []],
    2812: [1, "ditie_beijing_00", []],
    2813: [1, "trans_nanjing_01", []],
    2814: [1, "trans_nanjing_0", []],
    2815: [1, "trans_nanjing_1", []],
    2816: [1, "trans_nanjing_2", []],
    2817: [1, "ditie_beijing_00", []],
    2818: [1, "ditie_dalian_01", []],
    2819: [1, "ditie_dalian_0", []],
    282: [2, -237677057, 3, 0, 2, [], 0, 0],
    2820: [1, "ditie_dalian_1", []],
    2821: [1, "ditie_dalian_2", []],
    2822: [1, "ditie_beijing_00", []],
    2823: [1, "trans_dalian_01", []],
    2824: [1, "trans_dalian_0", []],
    2825: [1, "trans_dalian_1", []],
    2826: [1, "trans_dalian_2", []],
    2827: [1, "ditie_beijing_00", []],
    2828: [1, "ditie_chengdu_01", []],
    2829: [1, "ditie_chengdu_0", []],
    283: [2, -237677057, 3, 0, 2, [], 0, 0],
    2830: [1, "ditie_chengdu_1", []],
    2831: [1, "ditie_chengdu_2", []],
    2832: [1, "ditie_beijing_00", []],
    2833: [1, "trans_chengdu_01", []],
    2834: [1, "trans_chengdu_0", []],
    2835: [1, "trans_chengdu_1", []],
    2836: [1, "trans_chengdu_2", []],
    2837: [1, "ditie_beijing_00", []],
    2838: [1, "ditie_shenyang_01", []],
    2839: [1, "ditie_shenyang_0", []],
    284: [2, -237677057, 3, 0, 2, [], 0, 0],
    2840: [1, "ditie_shenyang_1", []],
    2841: [1, "ditie_shenyang_2", []],
    2842: [1, "ditie_beijing_00", []],
    2843: [1, "trans_shenyang_01", []],
    2844: [1, "trans_shenyang_0", []],
    2845: [1, "trans_shenyang_1", []],
    2846: [1, "trans_shenyang_2", []],
    2847: [1, "ditie_beijing_00", []],
    2848: [1, "ditie_changchun_01", []],
    2849: [1, "ditie_changchun_0", []],
    285: [2, -237677057, 4, 2, 2, [], 0, 0],
    2850: [1, "ditie_changchun_1", []],
    2851: [1, "ditie_changchun_2", []],
    2852: [1, "ditie_beijing_00", []],
    2853: [1, "trans_changchun_01", []],
    2854: [1, "trans_changchun_0", []],
    2855: [1, "trans_changchun_1", []],
    2856: [1, "trans_changchun_2", []],
    2857: [1, "ditie_beijing_00", []],
    2858: [1, "ditie_xianggang_01", []],
    2859: [1, "ditie_xianggang_0", []],
    286: [2, -237677057, 8, 2, 2, [], 0, 0],
    2860: [1, "ditie_xianggang_1", []],
    2861: [1, "ditie_xianggang_2", []],
    2862: [1, "ditie_beijing_00", []],
    2863: [1, "trans_xianggang_01", []],
    2864: [1, "trans_xianggang_0", []],
    2865: [1, "trans_xianggang_1", []],
    2866: [1, "trans_xianggang_2", []],
    2867: [1, "ditie_beijing_00", []],
    2868: [1, "ditie_suzhou_01", []],
    2869: [1, "ditie_suzhou_0", []],
    287: [2, -237677057, 10, 2, 2, [], 0, 0],
    2870: [1, "ditie_suzhou_1", []],
    2871: [1, "ditie_suzhou_2", []],
    2872: [1, "ditie_beijing_00", []],
    2873: [1, "ditie_kunming_01", []],
    2874: [1, "ditie_kunming_0", []],
    2875: [1, "ditie_kunming_1", []],
    2876: [1, "ditie_kunming_2", []],
    2877: [1, "ditie_beijing_00", []],
    2878: [1, "ditie_hangzhou_01", []],
    2879: [1, "ditie_hangzhou_0", []],
    288: [2, -237677057, 12, 2, 2, [], 0, 0],
    2880: [1, "ditie_hangzhou_1", []],
    2881: [1, "ditie_hangzhou_2", []],
    2882: [1, "ditie_beijing_00", []],
    2883: [1, "trans_shanghai_01", []],
    2884: [1, "trans_shanghai_0", []],
    2885: [1, "trans_shanghai_1", []],
    2886: [1, "trans_shanghai_2", []],
    2887: [1, "s_b_a", []],
    2888: [1, "s_b_a", []],
    2889: [1, "s_b_a1", []],
    289: [2, -237677057, 14, 2, 2, [], 0, 0],
    2890: [1, "s_b_a1", []],
    2891: [1, "s_b_a2", []],
    2892: [1, "s_b_a2", []],
    2893: [1, "s_b_a3", []],
    2894: [1, "s_b_a3", []],
    2895: [1, "s_b_b", []],
    2896: [1, "s_b_b", []],
    2897: [1, "s_b_b1", []],
    2898: [1, "s_b_b1", []],
    2899: [1, "s_b_b2", []],
    29: [5, "1", 20, 858993663, 16, -1],
    290: [2, -559393793, 3, 0, 2, [], 0, 0],
    2900: [1, "s_b_b2", []],
    2901: [1, "s_b_b3", []],
    2902: [1, "s_b_b3", []],
    2903: [1, "s_b_b4", []],
    2904: [1, "s_b_b4", []],
    2905: [1, "s_b_c", []],
    2906: [1, "s_b_c", []],
    2907: [1, "s_b_c1", []],
    2908: [1, "s_b_c1", []],
    2909: [1, "s_b_c2", []],
    291: [2, -559393793, 3, 0, 2, [], 0, 0],
    2910: [1, "s_b_c2", []],
    2911: [1, "s_b_c3", []],
    2912: [1, "s_b_c3", []],
    2913: [1, "s_b_d", []],
    2914: [1, "s_b_d", []],
    2915: [1, "s_b_d1", []],
    2916: [1, "s_b_d1", []],
    2917: [1, "s_b_d2", []],
    2918: [1, "s_b_d2", []],
    2919: [1, "s_b_d3", []],
    292: [2, -559393793, 3, 0, 2, [], 0, 0],
    2920: [1, "s_b_d3", []],
    2921: [1, "s_b_e", []],
    2922: [1, "s_b_e", []],
    2923: [1, "s_b_e1", []],
    2924: [1, "s_b_e1", []],
    2925: [1, "s_b_e2", []],
    2926: [1, "s_b_e2", []],
    2927: [1, "s_b_f", []],
    2928: [1, "s_b_f", []],
    2929: [1, "s_b_f1", []],
    293: [2, -559393793, 4, 0, 2, [], 0, 0],
    2930: [1, "s_b_f1", []],
    2931: [1, "s_b_f2", []],
    2932: [1, "s_b_f2", []],
    2933: [1, "s_b_g", []],
    2934: [1, "s_b_g", []],
    2935: [1, "s_b_g1", []],
    2936: [1, "s_b_g1", []],
    2937: [1, "s_b_g2", []],
    2938: [1, "s_b_g2", []],
    2939: [1, "s_b_h", []],
    294: [2, -559393793, 4, 0, 2, [], 0, 0],
    2940: [1, "s_b_h", []],
    2941: [1, "s_b_i", []],
    2942: [1, "s_b_i", []],
    2943: [1, "s_b_j", []],
    2944: [1, "s_b_j", []],
    2945: [1, "s_b_j1", []],
    2946: [1, "s_b_j1", []],
    2947: [1, "s_b_j2", []],
    2948: [1, "s_b_j2", []],
    2949: [1, "s_b_chu", []],
    295: [2, -559393793, 5, 2, 2, [], 0, 0],
    2950: [1, "s_b_chu", []],
    2951: [1, "s_b_k", []],
    2952: [1, "s_b_k", []],
    2953: [1, "s_r_1q", []],
    2954: [1, "s_r_1q", []],
    2955: [1, "s_r_1aq", []],
    2956: [1, "s_r_1aq", []],
    2957: [1, "s_r_1bq", []],
    2958: [1, "s_r_1bq", []],
    2959: [1, "s_r_2q", []],
    296: [2, -559393793, 10, 2, 2, [], 0, 0],
    2960: [1, "s_r_2q", []],
    2961: [1, "s_r_2aq", []],
    2962: [1, "s_r_2aq", []],
    2963: [1, "s_r_2bq", []],
    2964: [1, "s_r_2bq", []],
    2965: [1, "s_r_3q", []],
    2966: [1, "s_r_3q", []],
    2967: [1, "s_r_3aq", []],
    2968: [1, "s_r_3aq", []],
    2969: [1, "s_r_4q", []],
    297: [2, -559393793, 12, 2, 2, [], 0, 0],
    2970: [1, "s_r_4q", []],
    2971: [1, "s_r_4aq", []],
    2972: [1, "s_r_4aq", []],
    2973: [1, "s_r_4bq", []],
    2974: [1, "s_r_4bq", []],
    2975: [1, "s_r_5q", []],
    2976: [1, "s_r_5q", []],
    2977: [1, "s_r_5aq", []],
    2978: [1, "s_r_5aq", []],
    2979: [1, "s_r_5bq", []],
    298: [2, -559393793, 14, 2, 2, [], 0, 0],
    2980: [1, "s_r_5bq", []],
    2981: [1, "s_r_6q", []],
    2982: [1, "s_r_6q", []],
    2983: [1, "s_r_7q", []],
    2984: [1, "s_r_7q", []],
    2985: [1, "s_r_1", []],
    2986: [1, "s_r_1", []],
    2987: [1, "s_r_1a", []],
    2988: [1, "s_r_1a", []],
    2989: [1, "s_r_1b", []],
    299: [2, -559393793, 16, 2, 2, [], 0, 0],
    2990: [1, "s_r_1b", []],
    2991: [1, "s_r_1c", []],
    2992: [1, "s_r_1c", []],
    2993: [1, "s_r_2", []],
    2994: [1, "s_r_2", []],
    2995: [1, "s_r_2a", []],
    2996: [1, "s_r_2a", []],
    2997: [1, "s_r_2b", []],
    2998: [1, "s_r_2b", []],
    2999: [1, "s_r_2c", []],
    3: [3, -168562433, []],
    30: [5, "1", 13, 858993663, 16, -1],
    300: [2, -559393793, 16, 2, 2, [], 0, 0],
    3E3: [1, "s_r_2c", []],
    3001: [1, "s_r_3", []],
    3002: [1, "s_r_3", []],
    3003: [1, "3A", []],
    3004: [1, "3A", []],
    3005: [1, "3B", []],
    3006: [1, "3B", []],
    3007: [1, "s_r_4", []],
    3008: [1, "s_r_4", []],
    3009: [1, "s_r_4a", []],
    301: [2, -303174145, 1, 2, 2, [], 0, 0],
    3010: [1, "s_r_4a", []],
    3011: [1, "s_r_4b", []],
    3012: [1, "s_r_4b", []],
    3013: [1, "s_r_5", []],
    3014: [1, "s_r_5", []],
    3015: [1, "s_r_6", []],
    3016: [1, "s_r_6", []],
    3017: [1, "s_r_7", []],
    3018: [1, "s_r_7", []],
    3019: [1, "s_r_8", []],
    302: [2, -454761217, 3, 2, 2, [], 0, 0],
    3020: [1, "s_r_8", []],
    3021: [1, "s_r_9", []],
    3022: [1, "s_r_9", []],
    3023: [1, "s_r_10", []],
    3024: [1, "s_r_10", []],
    3025: [1, "s_r_11", []],
    3026: [1, "s_r_11", []],
    3027: [1, "s_r_12", []],
    3028: [1, "s_r_12", []],
    3029: [1, "s_r_13", []],
    303: [2, -454761217, 4, 2, 2, [], 0, 0],
    3030: [1, "s_r_13", []],
    3031: [1, "s_r_14", []],
    3032: [1, "s_r_14", []],
    3033: [1, "s_r_15", []],
    3034: [1, "s_r_15", []],
    3035: [1, "s_r_16", []],
    3036: [1, "s_r_16", []],
    3037: [1, "s_r_17", []],
    3038: [1, "s_r_17", []],
    3039: [1, "s_r_18", []],
    304: [2, -758265345, 5, 2, 2, [], 0, 0],
    3040: [1, "s_r_18", []],
    3041: [1, "s_r_19", []],
    3042: [1, "s_r_19", []],
    3043: [1, "s_r_20", []],
    3044: [1, "s_r_20", []],
    3045: [1, "s_r_a", []],
    3046: [1, "s_r_a", []],
    3047: [1, "s_r_a1", []],
    3048: [1, "s_r_a1", []],
    3049: [1, "s_r_a2", []],
    305: [2, -758265345, 7, 2, 2, [], 0, 0],
    3050: [1, "s_r_a2", []],
    3051: [1, "s_r_a3", []],
    3052: [1, "s_r_a3", []],
    3053: [1, "s_r_a4", []],
    3054: [1, "s_r_a4", []],
    3055: [1, "s_r_a5", []],
    3056: [1, "s_r_a5", []],
    3057: [1, "s_r_b", []],
    3058: [1, "s_r_b", []],
    3059: [1, "s_r_b1", []],
    306: [2, -758265345, 9, 2, 2, [], 0, 0],
    3060: [1, "s_r_b1", []],
    3061: [1, "s_r_b2", []],
    3062: [1, "s_r_b2", []],
    3063: [1, "s_r_b3", []],
    3064: [1, "s_r_b3", []],
    3065: [1, "s_r_b4", []],
    3066: [1, "s_r_b4", []],
    3067: [1, "s_r_b5", []],
    3068: [1, "s_r_b5", []],
    3069: [1, "s_r_b6", []],
    307: [2, -455423489, 3, 2, 2, [], 0, 0],
    3070: [1, "s_r_b6", []],
    3071: [1, "s_r_c", []],
    3072: [1, "s_r_c", []],
    3073: [1, "s_r_c1", []],
    3074: [1, "s_r_c1", []],
    3075: [1, "s_r_c2", []],
    3076: [1, "s_r_c2", []],
    3077: [1, "s_r_c3", []],
    3078: [1, "s_r_c3", []],
    3079: [1, "s_r_c4", []],
    308: [2, -455423489, 3, 2, 2, [], 0, 0],
    3080: [1, "s_r_c4", []],
    3081: [1, "s_r_c5", []],
    3082: [1, "s_r_c5", []],
    3083: [1, "s_r_d", []],
    3084: [1, "s_r_d", []],
    3085: [1, "s_r_d1", []],
    3086: [1, "s_r_d1", []],
    3087: [1, "s_r_d2", []],
    3088: [1, "s_r_d2", []],
    3089: [1, "s_r_d3", []],
    309: [2, -455423489, 3, 2, 2, [], 0, 0],
    3090: [1, "s_r_d3", []],
    3091: [1, "s_r_d4", []],
    3092: [1, "s_r_d4", []],
    3093: [1, "s_r_d5", []],
    3094: [1, "s_r_d5", []],
    3095: [1, "s_r_d6", []],
    3096: [1, "s_r_d6", []],
    3097: [1, "s_r_e", []],
    3098: [1, "s_r_e", []],
    3099: [1, "s_r_e1", []],
    31: [2, -859992065, 3, 2, 2, [], 0, 0],
    310: [2, -843149313, 3, 2, 2, [], 0, 0],
    3100: [1, "s_r_e1", []],
    3101: [1, "s_r_e2", []],
    3102: [1, "s_r_e2", []],
    3103: [1, "s_r_e3", []],
    3104: [1, "s_r_e3", []],
    3105: [1, "s_r_e4", []],
    3106: [1, "s_r_e4", []],
    3107: [1, "s_r_f", []],
    3108: [1, "s_r_f", []],
    3109: [1, "s_r_f1", []],
    311: [2, -843149313, 4, 2, 2, [], 0, 0],
    3110: [1, "s_r_f1", []],
    3111: [1, "s_r_f2", []],
    3112: [1, "s_r_f2", []],
    3113: [1, "s_r_g", []],
    3114: [1, "s_r_g", []],
    3115: [1, "s_r_g1", []],
    3116: [1, "s_r_g1", []],
    3117: [1, "s_r_g2", []],
    3118: [1, "s_r_g2", []],
    3119: [1, "s_r_h", []],
    312: [2, -843149313, 5, 2, 2, [], 0, 0],
    3120: [1, "s_r_h", []],
    3121: [1, "s_r_h1", []],
    3122: [1, "s_r_h1", []],
    3123: [1, "s_r_i", []],
    3124: [1, "s_r_i", []],
    3125: [1, "s_r_j", []],
    3126: [1, "s_r_j", []],
    3127: [1, "s_r_j1", []],
    3128: [1, "s_r_j1", []],
    3129: [1, "s_r_j2", []],
    313: [2, -843149313, 7, 2, 2, [], 0, 0],
    3130: [1, "s_r_j2", []],
    3131: [1, "s_r_j3", []],
    3132: [1, "s_r_j3", []],
    3133: [1, "s_r_j4", []],
    3134: [1, "s_r_j4", []],
    3135: [1, "s_r_j5", []],
    3136: [1, "s_r_j5", []],
    3137: [1, "s_r_j6", []],
    3138: [1, "s_r_j6", []],
    3139: [1, "s_r_k", []],
    314: [2, -843149313, 9, 2, 2, [], 0, 0],
    3140: [1, "s_r_k", []],
    3141: [1, "s_r_l1", []],
    3142: [1, "s_r_l1", []],
    3143: [1, "s_r_l3", []],
    3144: [1, "s_r_l3", []],
    3145: [1, "s_r_l4", []],
    3146: [1, "s_r_l4", []],
    3147: [1, "s_r_l5", []],
    3148: [1, "s_r_l5", []],
    3149: [1, "s_r_l6", []],
    315: [2, -455423489, 3, 2, 2, [], 0, 0],
    3150: [1, "s_r_l6", []],
    3151: [1, "s_r_n1", []],
    3152: [1, "s_r_n1", []],
    3153: [1, "s_r_n3", []],
    3154: [1, "s_r_n3", []],
    3155: [1, "s_r_n4", []],
    3156: [1, "s_r_n4", []],
    3157: [1, "s_r_n5", []],
    3158: [1, "s_r_n5", []],
    3159: [1, "s_r_p1", []],
    316: [2, -455423489, 3, 2, 2, [], 0, 0],
    3160: [1, "s_r_p1", []],
    3161: [1, "s_r_p2", []],
    3162: [1, "s_r_p2", []],
    3163: [1, "s_r_p3", []],
    3164: [1, "s_r_p3", []],
    3165: [1, "s_r_chu", []],
    3166: [1, "s_r_chu", []],
    3167: [1, "s_g_a", []],
    3168: [1, "s_g_a", []],
    3169: [1, "s_g_b", []],
    317: [2, -455423489, 3, 2, 2, [], 0, 0],
    3170: [1, "s_g_b", []],
    3171: [3, -858993409, [2, -858993409, 1, 0, 0, [], 0, 0]],
    3172: [3, -1411931905, [2, -1411931905, 1, 0, 0, [], 0, 0]],
    3173: [3, -1411931905, [2, -1411931905, 1, 0, 0, [], 0, 0]],
    3174: [3, -1411931905, [2, -1411931905, 1, 0, 0, [], 0, 0]],
    3175: [3, -1411931905, [2, -1411931905, 1, 0, 0, [], 0, 0]],
    3176: [3, -1411931905, [2, -1411931905, 1, 0, 0, [], 0, 0]],
    3177: [3, -1411931905, [2, -1411931905, 1, 0, 0, [], 0, 0]],
    3178: [3, -1411931905, [2, -1411931905, 1, 0, 0, [], 0, 0]],
    3179: [3, -1411931905, [2, -1411931905, 1, 0, 0, [], 0, 0]],
    318: [2, -843149313, 3, 2, 2, [], 0, 0],
    3180: [3, -1411931905, [2, -1411931905, 1, 0, 0, [], 0, 0]],
    3181: [3, -168562433, []],
    3182: [3, -269554945, [2, -269554945, 1, 0, 0, [], 0, 0]],
    3183: [3, -1716005889, [2, -1716005889, 1, 0, 0, [], 0, 0]],
    3184: [3, -1716005889, [2, -1716005889, 1, 0, 0, [], 0, 0]],
    3185: [3, -1716005889, [2, -1716005889, 1, 0, 0, [], 0, 0]],
    3186: [3, -1717987034, []],
    3187: [4, -572662273, -101190401, 0.2, [2, -808464385, 1, 0, 1, [], 0, 0], 0, 8],
    3188: [4, -572662273, -101190401, 0.4, [2, -808464385, 1, 0, 1, [], 0, 0], 0, 8],
    3189: [3, -1717987034, []],
    319: [2, -843149313, 5, 2, 2, [], 0, 0],
    3190: [4, -572662273, -101190401, 0.2, [2, -808464385, 1, 0, 1, [], 0, 0], 0, 8],
    3191: [4, -572662273, -101190401, 0.4, [2, -808464385, 1, 0, 1, [], 0, 0], 0, 8],
    3192: [3, -286467073, []],
    3193: [3, -438120449, []],
    3194: [3, -253630977, []],
    3195: [3, -403968257, []],
    3196: [3, -438120449, []],
    3197: [3, -438120449, []],
    3198: [3, -807805697, []],
    3199: [3, -993078785, []],
    32: [2, -643879937, 3, 2, 2, [], 0, 0],
    320: [2, -843149313, 6, 2, 2, [], 0, 0],
    3200: [3, -1295989505, []],
    3201: [3, -1194931457, []],
    3202: [1, "shoudu", []],
    3203: [1, "feijichang", []],
    3204: [1, "feijichang_T", []],
    3205: [1, "atm", []],
    3206: [1, "atm", []],
    3207: [1, "yinghang", []],
    3208: [1, "yinghang", []],
    3209: [1, "yinghang", []],
    321: [2, -843149313, 8, 2, 2, [], 0, 0],
    3210: [1, "zhongguoyinhang", []],
    3211: [1, "zhongguoyinhang", []],
    3212: [1, "zhongguoyinhang", []],
    3213: [1, "zhongguoyinhang", []],
    3214: [1, "gongshangyinhang", []],
    3215: [1, "gongshangyinhang", []],
    3216: [1, "gongshangyinhang", []],
    3217: [1, "gongshangyinhang", []],
    3218: [1, "jiansheyinhang", []],
    3219: [1, "jiansheyinhang", []],
    322: [2, -843149313, 10, 2, 2, [], 0, 0],
    3220: [1, "jiansheyinhang", []],
    3221: [1, "jiansheyinhang", []],
    3222: [1, "nongyeyinhang", []],
    3223: [1, "nongyeyinhang", []],
    3224: [1, "nongyeyinhang", []],
    3225: [1, "nongyeyinhang", []],
    3226: [1, "zhaoshangyinhang", []],
    3227: [1, "zhaoshangyinhang", []],
    3228: [1, "zhaoshangyinhang", []],
    3229: [1, "zhaoshangyinhang", []],
    323: [2, -237677057, 3, 0, 2, [], 0, 0],
    3230: [1, "jiaotonyinhang", []],
    3231: [1, "jiaotonyinhang", []],
    3232: [1, "jiaotonyinhang", []],
    3233: [1, "jiaotonyinhang", []],
    3234: [1, "zhongxinyinhang", []],
    3235: [1, "zhongxinyinhang", []],
    3236: [1, "zhongxinyinhang", []],
    3237: [1, "zhongxinyinhang", []],
    3238: [1, "minshengyinhang", []],
    3239: [1, "minshengyinhang", []],
    324: [2, -237677057, 3, 0, 2, [], 0, 0],
    3240: [1, "minshengyinhang", []],
    3241: [1, "minshengyinhang", []],
    3242: [1, "guangdayinhang", []],
    3243: [1, "guangdayinhang", []],
    3244: [1, "guangdayinhang", []],
    3245: [1, "guangdayinhang", []],
    3246: [1, "huaxiayinhang", []],
    3247: [1, "huaxiayinhang", []],
    3248: [1, "huaxiayinhang", []],
    3249: [1, "huaxiayinhang", []],
    325: [2, -237677057, 3, 0, 2, [], 0, 0],
    3250: [1, "shangyeyinhang", []],
    3251: [1, "shangyeyinhang", []],
    3252: [1, "shangyeyinhang", []],
    3253: [1, "shangyeyinhang", []],
    3254: [1, "youzhengchuxuyinhang", []],
    3255: [1, "youzhengchuxuyinhang", []],
    3256: [1, "youzhengchuxuyinhang", []],
    3257: [1, "youzhengchuxuyinhang", []],
    3258: [1, "jiuba", []],
    3259: [1, "jiuba", []],
    326: [2, -237677057, 4, 2, 2, [], 0, 0],
    3260: [1, "jiuba", []],
    3261: [1, "jiuba", []],
    3262: [1, "meirongmeifa", []],
    3263: [1, "meirongmeifa", []],
    3264: [1, "meirongmeifa", []],
    3265: [1, "tushuyinxiang", []],
    3266: [1, "tushuyinxiang", []],
    3267: [1, "tushuyinxiang", []],
    3268: [1, "tushuyinxiang", []],
    3269: [1, "shangwudasha", []],
    327: [2, -237677057, 5, 2, 2, [], 0, 0],
    3270: [1, "shangwudasha", []],
    3271: [1, "shangwudasha", []],
    3272: [1, "shangwudasha", []],
    3273: [1, "shangwudasha", []],
    3274: [1, "shangwudasha", []],
    3275: [1, "shangwudasha_T", []],
    3276: [1, "shangwudasha_T", []],
    3277: [1, "shangwudasha_T", []],
    3278: [1, "shangwudasha_T", []],
    3279: [1, "shangwudasha_T", []],
    328: [2, -237677057, 6, 2, 2, [], 0, 0],
    3280: [1, "shangwudasha_T", []],
    3281: [1, "tingchecang", []],
    3282: [1, "tingchecang", []],
    3283: [1, "qiche", []],
    3284: [1, "qiche", []],
    3285: [1, "qiche", []],
    3286: [1, "jiaotang", []],
    3287: [1, "jiaotang", []],
    3288: [1, "jiaotang", []],
    3289: [1, "jiaotang", []],
    329: [2, -237677057, 8, 2, 2, [], 0, 0],
    3290: [1, "jiaotang", []],
    3291: [1, "jiaotang", []],
    3292: [1, "dianyingyuan", []],
    3293: [1, "dianyingyuan", []],
    3294: [1, "dianyingyuan", []],
    3295: [1, "dianyingyuan", []],
    3296: [1, "yinyueting", []],
    3297: [1, "yinyueting", []],
    3298: [1, "yinyueting", []],
    3299: [1, "yinyueting", []],
    33: [2, -661320961, 3, 2, 2, [], 0, 0],
    330: [2, -237677057, 10, 2, 2, [], 0, 0],
    3300: [1, "gewuting", []],
    3301: [1, "gewuting", []],
    3302: [1, "gewuting", []],
    3303: [1, "chazhuo", []],
    3304: [1, "chazhuo", []],
    3305: [1, "chazhuo", []],
    3306: [1, "chazhuo", []],
    3307: [1, "gaosurukou", []],
    3308: [1, "gaosuchukou", []],
    3309: [1, "jiayouzhan", []],
    331: [2, -593543425, 3, 0, 2, [], 0, 0],
    3310: [1, "jiayouzhan", []],
    3311: [1, "jiayouzhan", []],
    3312: [1, "zhongyangjigou", []],
    3313: [1, "zhongyangjigou", []],
    3314: [1, "zhongyangjigou", []],
    3315: [1, "zhongyangjigou", []],
    3316: [1, "zhongyangjigou", []],
    3317: [1, "zhongyangjigou", []],
    3318: [1, "zhongyangjigou_T", []],
    3319: [1, "zhongyangjigou_T", []],
    332: [2, -593543425, 3, 0, 2, [], 0, 0],
    3320: [1, "zhongyangjigou_T", []],
    3321: [1, "zhongyangjigou_T", []],
    3322: [1, "zhongyangjigou_T", []],
    3323: [1, "zhongyangjigou_T", []],
    3324: [1, "gaodengjiaoyu", []],
    3325: [1, "gaodengjiaoyu", []],
    3326: [1, "gaodengjiaoyu", []],
    3327: [1, "gaodengjiaoyu", []],
    3328: [1, "gaodengjiaoyu", []],
    3329: [1, "gaodengjiaoyu", []],
    333: [2, -593543425, 3, 0, 2, [], 0, 0],
    3330: [1, "gaodengjiaoyu_T", []],
    3331: [1, "gaodengjiaoyu_T", []],
    3332: [1, "gaodengjiaoyu_T", []],
    3333: [1, "gaodengjiaoyu_T", []],
    3334: [1, "gaodengjiaoyu_T", []],
    3335: [1, "gaodengjiaoyu_T", []],
    3336: [1, "hill", []],
    3337: [1, "hill", []],
    3338: [1, "hill", []],
    3339: [1, "hill", []],
    334: [2, -593543425, 4, 0, 2, [], 0, 0],
    3340: [1, "hill", []],
    3341: [1, "hill", []],
    3342: [1, "zhongheyiyuan_1", []],
    3343: [1, "zhongheyiyuan_1", []],
    3344: [1, "zhongheyiyuan_1", []],
    3345: [1, "zhongheyiyuan_1", []],
    3346: [1, "zhongheyiyuan_1", []],
    3347: [1, "zhongheyiyuan_1", []],
    3348: [1, "zhongheyiyuan_1_T", []],
    3349: [1, "zhongheyiyuan_1_T", []],
    335: [2, -593543425, 5, 0, 2, [], 0, 0],
    3350: [1, "zhongheyiyuan_1_T", []],
    3351: [1, "zhongheyiyuan_1_T", []],
    3352: [1, "zhongheyiyuan_1_T", []],
    3353: [1, "zhongheyiyuan_1_T", []],
    3354: [1, "binguan", []],
    3355: [1, "binguan", []],
    3356: [1, "binguan", []],
    3357: [1, "binguan", []],
    3358: [1, "binguan", []],
    3359: [1, "binguan", []],
    336: [2, -593543425, 6, 0, 2, [], 0, 0],
    3360: [1, "fangwuzhongjie", []],
    3361: [1, "fangwuzhongjie", []],
    3362: [1, "fangwuzhongjie", []],
    3363: [1, "keyangjigou", []],
    3364: [1, "keyangjigou", []],
    3365: [1, "keyangjigou", []],
    3366: [1, "keyangjigou", []],
    3367: [1, "keyangjigou", []],
    3368: [1, "keyangjigou", []],
    3369: [1, "qita", []],
    337: [2, -593543425, 8, 0, 2, [], 0, 0],
    3370: [1, "qita", []],
    3371: [1, "qita", []],
    3372: [1, "qita", []],
    3373: [1, "qita", []],
    3374: [1, "qita", []],
    3375: [1, "xiyidian", []],
    3376: [1, "xiyidian", []],
    3377: [1, "xiyidian", []],
    3378: [1, "xiyidian", []],
    3379: [1, "changtuqichezhan", []],
    338: [2, -593543425, 10, 0, 2, [], 0, 0],
    3380: [1, "changtuqichezhan", []],
    3381: [1, "changtuqichezhan", []],
    3382: [1, "changtuqichezhan", []],
    3383: [1, "changtuqichezhan", []],
    3384: [1, "changtuqichezhan", []],
    3385: [1, "changtuqichezhan_T", []],
    3386: [1, "changtuqichezhan_T", []],
    3387: [1, "changtuqichezhan_T", []],
    3388: [1, "changtuqichezhan_T", []],
    3389: [1, "changtuqichezhan_T", []],
    339: [2, -559393793, 3, 0, 2, [], 0, 0],
    3390: [1, "changtuqichezhan_T", []],
    3391: [1, "bowuguan", []],
    3392: [1, "bowuguan", []],
    3393: [1, "bowuguan", []],
    3394: [1, "bowuguan", []],
    3395: [1, "bowuguan", []],
    3396: [1, "bowuguan", []],
    3397: [1, "bowuguan_T", []],
    3398: [1, "bowuguan_T", []],
    3399: [1, "bowuguan_T", []],
    34: [2, -661320961, 3, 2, 2, [], 0, 0],
    340: [2, -559393793, 3, 0, 2, [], 0, 0],
    3400: [1, "bowuguan_T", []],
    3401: [1, "bowuguan_T", []],
    3402: [1, "bowuguan_T", []],
    3403: [1, "qita", []],
    3404: [1, "qita", []],
    3405: [1, "qita", []],
    3406: [1, "qita", []],
    3407: [1, "qita", []],
    3408: [1, "qita", []],
    3409: [1, "qita_T", []],
    341: [2, -559393793, 3, 0, 2, [], 0, 0],
    3410: [1, "qita_T", []],
    3411: [1, "qita_T", []],
    3412: [1, "qita_T", []],
    3413: [1, "qita_T", []],
    3414: [1, "qita_T", []],
    3415: [1, "gongyuan", []],
    3416: [1, "gongyuan", []],
    3417: [1, "gongyuan", []],
    3418: [1, "gongyuan", []],
    3419: [1, "gongyuan", []],
    342: [2, -559393793, 4, 0, 2, [], 0, 0],
    3420: [1, "gongyuan", []],
    3421: [1, "gongyuan_T", []],
    3422: [1, "gongyuan_T", []],
    3423: [1, "gongyuan_T", []],
    3424: [1, "gongyuan_T", []],
    3425: [1, "gongyuan_T", []],
    3426: [1, "gongyuan_T", []],
    3427: [1, "chongwudian", []],
    3428: [1, "chongwudian", []],
    3429: [1, "chongwudian", []],
    343: [2, -559393793, 5, 0, 2, [], 0, 0],
    3430: [1, "chongwudian", []],
    3431: [1, "yaodian_yaofang", []],
    3432: [1, "yaodian_yaofang", []],
    3433: [1, "yaodian_yaofang", []],
    3434: [1, "yaodian_yaofang", []],
    3435: [1, "sheyingshexiang", []],
    3436: [1, "sheyingshexiang", []],
    3437: [1, "sheyingshexiang", []],
    3438: [1, "sheyingshexiang", []],
    3439: [1, "gangkou_matou", []],
    344: [2, -559393793, 6, 0, 2, [], 0, 0],
    3440: [1, "gangkou_matou", []],
    3441: [1, "gangkou_matou", []],
    3442: [1, "gangkou_matou", []],
    3443: [1, "gangkou_matou", []],
    3444: [1, "gangkou_matou", []],
    3445: [1, "youzheng", []],
    3446: [1, "youzheng", []],
    3447: [1, "youzheng", []],
    3448: [1, "youzheng", []],
    3449: [1, "youzheng", []],
    345: [2, -559393793, 8, 0, 2, [], 0, 0],
    3450: [1, "zhongxiaoxue", []],
    3451: [1, "zhongxiaoxue", []],
    3452: [1, "zhongxiaoxue", []],
    3453: [1, "zhongxiaoxue", []],
    3454: [1, "zhongxiaoxue", []],
    3455: [1, "zhongxiaoxue", []],
    3456: [1, "zhongxiaoxue_T", []],
    3457: [1, "zhongxiaoxue_T", []],
    3458: [1, "zhongxiaoxue_T", []],
    3459: [1, "zhongxiaoxue_T", []],
    346: [2, -559393793, 10, 0, 2, [], 0, 0],
    3460: [1, "zhongxiaoxue_T", []],
    3461: [1, "zhongxiaoxue_T", []],
    3462: [1, "xinwenchuban", []],
    3463: [1, "xinwenchuban", []],
    3464: [1, "xinwenchuban", []],
    3465: [1, "xinwenchuban", []],
    3466: [1, "guji", []],
    3467: [1, "guji", []],
    3468: [1, "guji", []],
    3469: [1, "guji", []],
    347: [2, 1553057279, 1, 2, 2, [10, 11], 1, 0],
    3470: [1, "guji", []],
    3471: [1, "guji", []],
    3472: [1, "xiaoxue_loupan", []],
    3473: [1, "xiaoxue_loupan", []],
    3474: [1, "xiaoxue_loupan", []],
    3475: [1, "xiaoxue_loupan", []],
    3476: [1, "xiaoxue_loupan", []],
    3477: [1, "xiaoxue_loupan_T", []],
    3478: [1, "xiaoxue_loupan_T", []],
    3479: [1, "xiaoxue_loupan_T", []],
    348: [2, 1553057279, 1, 2, 2, [10, 11], 1, 0],
    3480: [1, "xiaoxue_loupan_T", []],
    3481: [1, "xiaoxue_loupan_T", []],
    3482: [1, "dujiachun", []],
    3483: [1, "dujiachun", []],
    3484: [1, "dujiachun", []],
    3485: [1, "dujiachun", []],
    3486: [1, "dujiachun", []],
    3487: [1, "dujiachun", []],
    3488: [1, "dujiachun_T", []],
    3489: [1, "dujiachun_T", []],
    349: [2, -303174145, 1, 2, 2, [], 0, 0],
    3490: [1, "dujiachun_T", []],
    3491: [1, "dujiachun_T", []],
    3492: [1, "dujiachun_T", []],
    3493: [1, "dujiachun_T", []],
    3494: [1, "zhongcan_b", []],
    3495: [1, "zhongcan_b", []],
    3496: [1, "zhongcan_b", []],
    3497: [1, "zhongcan_b", []],
    3498: [1, "fengjing", []],
    3499: [1, "fengjing", []],
    35: [2, -320235009, 1, 2, 2, [], 0, 0],
    350: [2, -454761217, 3, 2, 2, [], 0, 0],
    3500: [1, "fengjing", []],
    3501: [1, "fengjing", []],
    3502: [1, "fengjing", []],
    3503: [1, "fengjing", []],
    3504: [1, "fengjing_T", []],
    3505: [1, "fengjing_T", []],
    3506: [1, "fengjing_T", []],
    3507: [1, "fengjing_T", []],
    3508: [1, "fengjing_T", []],
    3509: [1, "fengjing_T", []],
    351: [2, -454761217, 4, 2, 2, [], 0, 0],
    3510: [1, "tianam", []],
    3511: [1, "tianam", []],
    3512: [1, "tianam", []],
    3513: [1, "tianam", []],
    3514: [1, "gouwuzhongxin", []],
    3515: [1, "gouwuzhongxin", []],
    3516: [1, "gouwuzhongxin", []],
    3517: [1, "gouwuzhongxin", []],
    3518: [1, "gouwuzhongxin", []],
    3519: [1, "gouwuzhongxin_T", []],
    352: [2, -758265345, 5, 2, 2, [], 0, 0],
    3520: [1, "gouwuzhongxin_T", []],
    3521: [1, "gouwuzhongxin_T", []],
    3522: [1, "gouwuzhongxin_T", []],
    3523: [1, "gouwuzhongxin_T", []],
    3524: [1, "tiyuyongpin", []],
    3525: [1, "tiyuyongpin", []],
    3526: [1, "tiyuyongpin", []],
    3527: [1, "tiyuyongpin", []],
    3528: [1, "tiyu", []],
    3529: [1, "tiyu", []],
    353: [2, -758265345, 7, 2, 2, [], 0, 0],
    3530: [1, "tiyu", []],
    3531: [1, "tiyu", []],
    3532: [1, "tiyu", []],
    3533: [1, "tiyu", []],
    3534: [1, "chaoshi", []],
    3535: [1, "chaoshi", []],
    3536: [1, "chaoshi", []],
    3537: [1, "chaoshi", []],
    3538: [1, "chaoshi", []],
    3539: [1, "dianxingongsi", []],
    354: [2, -758265345, 9, 2, 2, [], 0, 0],
    3540: [1, "dianxingongsi", []],
    3541: [1, "dianxingongsi", []],
    3542: [1, "dianxingongsi", []],
    3543: [1, "dianxinyingyeting", []],
    3544: [1, "dianxinyingyeting", []],
    3545: [1, "dianxinyingyeting", []],
    3546: [1, "dianxinyingyeting", []],
    3547: [1, "dianxinyingyeting", []],
    3548: [1, "shoupiaochu", []],
    3549: [1, "shoupiaochu", []],
    355: [2, -455423489, 3, 2, 2, [], 0, 0],
    3550: [1, "shoupiaochu", []],
    3551: [1, "shoufeizhan", []],
    3552: [1, "lingmu", []],
    3553: [1, "lingmu", []],
    3554: [1, "lingmu", []],
    3555: [1, "lingmu", []],
    3556: [1, "lingmu", []],
    3557: [1, "lingmu", []],
    3558: [1, "honglvdeng", []],
    3559: [1, "huochezhan", []],
    356: [2, -455423489, 3, 2, 2, [], 0, 0],
    3560: [1, "huochezhan", []],
    3561: [1, "huochezhan", []],
    3562: [1, "huochezhan", []],
    3563: [1, "huochezhan", []],
    3564: [1, "huochezhan", []],
    3565: [1, "huochezhan_T", []],
    3566: [1, "huochezhan_T", []],
    3567: [1, "huochezhan_T", []],
    3568: [1, "huochezhan_T", []],
    3569: [1, "huochezhan_T", []],
    357: [2, -455423489, 3, 2, 2, [], 0, 0],
    3570: [1, "huochezhan_T", []],
    3571: [1, "dianshita", []],
    3572: [1, "dianshita", []],
    3573: [1, "dianshita", []],
    3574: [1, "dianshita", []],
    3575: [1, "dianshita", []],
    3576: [1, "dianshita", []],
    3577: [1, "dianshita_T", []],
    3578: [1, "dianshita_T", []],
    3579: [1, "dianshita_T", []],
    358: [2, -455423489, 3, 2, 2, [], 0, 0],
    3580: [1, "dianshita_T", []],
    3581: [1, "dianshita_T", []],
    3582: [1, "dianshita_T", []],
    3583: [1, "zhongbiaoyanjing", []],
    3584: [1, "zhongbiaoyanjing", []],
    3585: [1, "zhongbiaoyanjing", []],
    3586: [1, "zhongbiaoyanjing", []],
    3587: [1, "gongce", []],
    3588: [1, "gongce", []],
    3589: [1, "dongwuyuan", []],
    359: [2, -843149313, 3, 2, 2, [], 0, 0],
    3590: [1, "dongwuyuan", []],
    3591: [1, "dongwuyuan", []],
    3592: [1, "dongwuyuan", []],
    3593: [1, "dongwuyuan", []],
    3594: [1, "dongwuyuan", []],
    3595: [1, "dongwuyuan_T", []],
    3596: [1, "dongwuyuan_T", []],
    3597: [1, "dongwuyuan_T", []],
    3598: [1, "dongwuyuan_T", []],
    3599: [1, "dongwuyuan_T", []],
    36: [2, -320235009, 1, 2, 2, [], 0, 0],
    360: [2, -843149313, 5, 2, 2, [], 0, 0],
    3600: [1, "dongwuyuan_T", []],
    3601: [1, "busstop_2", []],
    3602: [1, "busstop_3", []],
    3603: [1, "ditie_beijing_00", []],
    3604: [1, "ditie_beijing_0", []],
    3605: [1, "ditie_beijing_1", []],
    3606: [1, "ditie_beijing_2", []],
    3607: [1, "s_b_a", []],
    3608: [1, "s_b_a", []],
    3609: [1, "jdn_qita", []],
    361: [2, -843149313, 6, 2, 2, [], 0, 0],
    3610: [1, "jdn_qita", []],
    3611: [5, "msyhbd", 13, 1683106815, 16, -118099713],
    3612: [5, "msyhbd", 14, 1683106815, 16, -118099713],
    3613: [5, "msyhbd", 16, 1683106815, 16, -118099713],
    3614: [5, "msyhbd", 18, 1683106815, 16, -118099713],
    3615: [5, "msyhbd", 13, -1872556801, 16, -151588865],
    3616: [5, "msyhbd", 14, -1872556801, 16, -151588865],
    3617: [5, "msyhbd", 16, -1872556801, 16, -151588865],
    3618: [5, "msyhbd", 18, -1872556801, 16, -151588865],
    3619: [5, "msyhbd", 13, -1840225537, 16, -101386753],
    362: [2, -843149313, 10, 2, 2, [], 0, 0],
    3620: [5, "msyhbd", 14, -1840225537, 16, -101386753],
    3621: [5, "msyhbd", 16, -1840225537, 16, -101386753],
    3622: [5, "msyhbd", 18, -1840225537, 16, -101386753],
    3623: [5, "msyhbd", 13, 1113419263, 16, -302910465],
    3624: [5, "msyhbd", 14, 1113419263, 16, -302910465],
    3625: [5, "msyhbd", 16, 1113419263, 16, -302910465],
    3626: [5, "msyhbd", 18, 1113419263, 16, -302910465],
    3627: [5, "msyhbd", 13, -2124274945, 16, -1],
    3628: [5, "msyhbd", 14, -2124274945, 16, -1],
    3629: [5, "msyhbd", 16, -2124274945, 16, -1],
    363: [2, -843149313, 10, 2, 2, [], 0, 0],
    3630: [5, "msyhbd", 18, -2124274945, 16, -1],
    3631: [5, "1", 12, 858993663, 16, -1],
    3632: [5, "1", 12, -1, 4, -2122329601],
    3633: [5, "1", 14, -1, 4, -2122329601],
    3634: [5, "1", 12, 858993663, 16, -1],
    3635: [5, "1", 12, -1, 4, 1301863935],
    3636: [5, "1", 13, -1, 4, 1301863935],
    3637: [5, "1", 11, 858993663, 16, -1],
    3638: [5, "1", 11, 858993663, 16, -1],
    3639: [5, "1", 12, 255, 16, -1],
    364: [2, -455423489, 3, 2, 2, [], 0, 0],
    3640: [5, "1", 11, 1717960959, 16, -1],
    3641: [5, "1", 11, 1717960959, 16, -1],
    3642: [5, "1", 12, 1717960959, 16, -1],
    3643: [5, "1", 11, 1414088447, 16, -168562433],
    3644: [5, "1", 11, 757408511, 16, -168562433],
    3645: [5, "1", 12, 757408511, 16, -168562433],
    3646: [5, "1", 12, 757408511, 16, -168562433],
    3647: [5, "1", 13, 757408511, 16, -168562433],
    3648: [5, "1", 13, 757408511, 16, -168562433],
    3649: [5, "1", 14, 757408511, 16, -168562433],
    365: [2, -455423489, 3, 2, 2, [], 0, 0],
    3650: [5, "1", 12, 757408511, 16, -168562433],
    3651: [5, "1", 12, 757408511, 16, -168562433],
    3652: [5, "1", 13, 757408511, 16, -168562433],
    3653: [5, "1", 13, 757408511, 16, -168562433],
    3654: [5, "1", 13, 757408511, 16, -168562433],
    3655: [5, "1", 14, 757408511, 16, -168562433],
    3656: [5, "1", 12, 757408511, 16, -168562433],
    3657: [5, "1", 12, 757408511, 16, -168562433],
    3658: [5, "1", 13, 757408511, 16, -168562433],
    3659: [5, "1", 13, 757408511, 16, -168562433],
    366: [2, -455423489, 3, 2, 2, [], 0, 0],
    3660: [5, "1", 13, 757408511, 16, -168562433],
    3661: [5, "1", 14, 757408511, 16, -168562433],
    3662: [5, "1", 12, 757408511, 16, -168562433],
    3663: [5, "1", 12, 757408511, 16, -168562433],
    3664: [5, "1", 13, 757408511, 16, -168562433],
    3665: [5, "1", 13, 757408511, 16, -168562433],
    3666: [5, "1", 13, 757408511, 16, -168562433],
    3667: [5, "1", 14, 757408511, 16, -168562433],
    3668: [5, "1", 12, 757408511, 16, -168562433],
    3669: [5, "1", 13, 757408511, 16, -168562433],
    367: [2, -455423489, 3, 2, 2, [], 0, 0],
    3670: [5, "1", 13, 757408511, 16, -168562433],
    3671: [5, "1", 13, 757408511, 16, -168562433],
    3672: [5, "1", 14, 757408511, 16, -168562433],
    3673: [5, "1", 12, 757408511, 16, -168562433],
    3674: [5, "1", 12, 757408511, 16, -168562433],
    3675: [5, "1", 13, 757408511, 16, -168562433],
    3676: [5, "1", 13, 757408511, 16, -168562433],
    3677: [5, "1", 13, 757408511, 16, -168562433],
    3678: [5, "1", 14, 757408511, 16, -168562433],
    3679: [5, "1", 12, 757408511, 16, -168562433],
    368: [2, -843149313, 3, 2, 2, [], 0, 0],
    3680: [5, "1", 12, 757408511, 16, -168562433],
    3681: [5, "1", 12, 757408511, 16, -168562433],
    3682: [5, "1", 13, 757408511, 16, -168562433],
    3683: [5, "1", 13, 757408511, 16, -168562433],
    3684: [5, "1", 13, 757408511, 16, -168562433],
    3685: [5, "1", 14, 757408511, 16, -168562433],
    3686: [5, "1", 12, 757408511, 16, -168562433],
    3687: [5, "1", 13, 757408511, 16, -168562433],
    3688: [5, "1", 13, 757408511, 16, -168562433],
    3689: [5, "1", 13, 757408511, 16, -168562433],
    369: [2, -843149313, 6, 2, 2, [], 0, 0],
    3690: [5, "1", 14, 757408511, 16, -168562433],
    3691: [5, "1", 12, 757408511, 16, -168562433],
    3692: [5, "1", 12, 757408511, 16, -168562433],
    3693: [5, "1", 13, 757408511, 16, -168562433],
    3694: [5, "1", 13, 757408511, 16, -168562433],
    3695: [5, "1", 13, 757408511, 16, -168562433],
    3696: [5, "1", 14, 757408511, 16, -168562433],
    3697: [5, "1", 12, 757408511, 16, -168562433],
    3698: [5, "1", 12, 757408511, 16, -168562433],
    3699: [5, "1", 13, 757408511, 16, -168562433],
    37: [2, -22785, 1, 2, 2, [], 0, 0],
    370: [2, -843149313, 8, 2, 2, [], 0, 0],
    3700: [5, "1", 13, 757408511, 16, -168562433],
    3701: [5, "1", 13, 757408511, 16, -168562433],
    3702: [5, "1", 14, 757408511, 16, -168562433],
    3703: [5, "1", 12, 757408511, 16, -168562433],
    3704: [5, "1", 12, 757408511, 16, -168562433],
    3705: [5, "1", 13, 757408511, 16, -168562433],
    3706: [5, "1", 13, 757408511, 16, -168562433],
    3707: [5, "1", 13, 757408511, 16, -168562433],
    3708: [5, "1", 14, 757408511, 16, -168562433],
    3709: [5, "1", 12, 1164654847, 16, -84215041],
    371: [2, -843149313, 10, 2, 2, [], 0, 0],
    3710: [5, "1", 12, 1164654847, 16, -84215041],
    3711: [5, "1", 12, 1164654847, 16, -84215041],
    3712: [5, "1", 13, 1164654847, 16, -84215041],
    3713: [5, "1", 13, 1164654847, 16, -84215041],
    3714: [5, "1", 13, 1164654847, 16, -84215041],
    3715: [5, "1", 14, 1164654847, 16, -84215041],
    3716: [5, "1", 12, 757408511, 16, -168562433],
    3717: [5, "1", 12, 757408511, 16, -168562433],
    3718: [5, "1", 13, 757408511, 16, -168562433],
    3719: [5, "1", 13, 757408511, 16, -168562433],
    372: [2, -237677057, 3, 0, 2, [], 0, 0],
    3720: [5, "1", 13, 757408511, 16, -168562433],
    3721: [5, "1", 14, 757408511, 16, -168562433],
    3722: [5, "1", 12, 757408511, 16, -168562433],
    3723: [5, "1", 12, 757408511, 16, -168562433],
    3724: [5, "1", 13, 757408511, 16, -168562433],
    3725: [5, "1", 13, 757408511, 16, -168562433],
    3726: [5, "1", 13, 757408511, 16, -168562433],
    3727: [5, "1", 14, 757408511, 16, -168562433],
    3728: [5, "1", 12, 757408511, 16, -168562433],
    3729: [5, "1", 12, 757408511, 16, -168562433],
    373: [2, -237677057, 3, 0, 2, [], 0, 0],
    3730: [5, "1", 13, 757408511, 16, -168562433],
    3731: [5, "1", 13, 757408511, 16, -168562433],
    3732: [5, "1", 13, 757408511, 16, -168562433],
    3733: [5, "1", 14, 757408511, 16, -168562433],
    3734: [5, "1", 12, 757408511, 16, -168562433],
    3735: [5, "1", 12, 757408511, 16, -168562433],
    3736: [5, "1", 13, 757408511, 16, -168562433],
    3737: [5, "1", 13, 757408511, 16, -168562433],
    3738: [5, "1", 13, 757408511, 16, -168562433],
    3739: [5, "1", 14, 757408511, 16, -168562433],
    374: [2, -237677057, 3, 0, 2, [], 0, 0],
    3740: [5, "1", 12, 757408511, 16, -168562433],
    3741: [5, "1", 12, 757408511, 16, -168562433],
    3742: [5, "1", 13, 757408511, 16, -168562433],
    3743: [5, "1", 13, 757408511, 16, -168562433],
    3744: [5, "1", 13, 757408511, 16, -168562433],
    3745: [5, "1", 14, 757408511, 16, -168562433],
    3746: [5, "1", 11, 1414088447, 16, -168562433],
    3747: [5, "1", 11, 1414088447, 16, -168562433],
    3748: [5, "1", 11, 1414088447, 16, -168562433],
    3749: [5, "1", 11, 1414088447, 16, -168562433],
    375: [2, -237677057, 3, 0, 2, [], 0, 0],
    3750: [5, "1", 11, 1414088447, 16, -168562433],
    3751: [5, "1", 11, 1414088447, 16, -168562433],
    3752: [5, "1", 11, 1414088447, 16, -168562433],
    3753: [5, "1", 11, 1414088447, 16, -168562433],
    3754: [5, "1", 11, 1414088447, 16, -168562433],
    3755: [5, "1", 11, 1414088447, 16, -168562433],
    3756: [5, "1", 11, 1414088447, 16, -168562433],
    3757: [5, "1", 11, 1414088447, 16, -168562433],
    3758: [5, "1", 11, 1414088447, 16, -168562433],
    3759: [5, "1", 11, 1414088447, 16, -168562433],
    376: [2, -237677057, 3, 0, 2, [], 0, 0],
    3760: [5, "1", 11, 1414088447, 16, -168562433],
    3761: [5, "1", 11, 1414088447, 16, -168562433],
    3762: [5, "1", 11, 1414088447, 16, -168562433],
    3763: [5, "1", 11, 1414088447, 16, -168562433],
    3764: [5, "1", 11, 1414088447, 16, -168562433],
    3765: [5, "1", 11, 1414088447, 16, -168562433],
    3766: [5, "1", 11, 1414088447, 16, -168562433],
    3767: [5, "1", 14, 255, 16, -1],
    3768: [5, "1", 15, 255, 16, -1],
    3769: [5, "1", 11, 1414088447, 16, -168562433],
    377: [2, -237677057, 4, 2, 2, [], 0, 0],
    3770: [5, "1", 11, 1414088447, 16, -168562433],
    3771: [5, "1", 11, 1414088447, 16, -168562433],
    3772: [5, "1", 11, 1414088447, 16, -168562433],
    3773: [5, "1", 11, 1414088447, 16, -168562433],
    3774: [5, "1", 11, 1414088447, 16, -168562433],
    3775: [5, "1", 11, 1414088447, 16, -168562433],
    3776: [5, "1", 11, 1414088447, 16, -168562433],
    3777: [5, "1", 11, 1414088447, 16, -168562433],
    3778: [5, "1", 11, 1414088447, 16, -168562433],
    3779: [5, "1", 11, 1414088447, 16, -168562433],
    378: [2, -237677057, 6, 2, 2, [], 0, 0],
    3780: [5, "1", 11, 1414088447, 16, -168562433],
    3781: [5, "1", 11, 1414088447, 16, -168562433],
    3782: [5, "1", 1, 1414088447, 16, -168562433],
    3783: [5, "1", 11, 1414088447, 16, -168562433],
    3784: [5, "1", 11, 1414088447, 16, -168562433],
    3785: [5, "1", 11, 1414088447, 16, -168562433],
    3786: [5, "1", 11, 1414088447, 16, -168562433],
    3787: [5, "1", 11, 1414088447, 16, -168562433],
    3788: [5, "1", 11, 1414088447, 16, -168562433],
    3789: [5, "1", 11, 1414088447, 16, -168562433],
    379: [2, -237677057, 8, 2, 2, [], 0, 0],
    3790: [5, "1", 11, 1414088447, 16, -168562433],
    3791: [5, "1", 11, 1414088447, 16, -168562433],
    3792: [5, "1", 11, 1414088447, 16, -168562433],
    3793: [5, "1", 11, 1414088447, 16, -168562433],
    3794: [5, "1", 11, 1414088447, 16, -168562433],
    3795: [5, "1", 11, 1414088447, 16, -168562433],
    3796: [5, "1", 11, 1414088447, 16, -168562433],
    3797: [5, "1", 11, 1414088447, 16, -168562433],
    3798: [5, "1", 11, 1414088447, 16, -168562433],
    3799: [5, "1", 11, 1414088447, 16, -168562433],
    38: [2, -2329857, 1, 2, 2, [], 0, 0],
    380: [2, -559393793, 3, 0, 2, [], 0, 0],
    3800: [5, "1", 11, 1414088447, 16, -168562433],
    3801: [5, "1", 11, 1414088447, 16, -168562433],
    3802: [5, "1", 11, 1414088447, 16, -168562433],
    3803: [5, "1", 11, 1414088447, 16, -168562433],
    3804: [5, "1", 11, 1414088447, 16, -168562433],
    3805: [5, "1", 11, 1414088447, 16, -168562433],
    3806: [5, "1", 11, 1414088447, 16, -168562433],
    3807: [5, "1", 11, 1414088447, 16, -168562433],
    3808: [5, "1", 11, 1414088447, 16, -168562433],
    3809: [5, "1", 11, 1414088447, 16, -168562433],
    381: [2, -559393793, 3, 0, 2, [], 0, 0],
    3810: [5, "1", 11, 1414088447, 16, -168562433],
    3811: [5, "1", 11, 1414088447, 16, -168562433],
    3812: [5, "1", 11, 1414088447, 16, -168562433],
    3813: [5, "1", 11, 1414088447, 16, -168562433],
    3814: [5, "1", 11, 1414088447, 16, -168562433],
    3815: [5, "1", 11, 1414088447, 16, -168562433],
    3816: [5, "1", 11, 1414088447, 16, -168562433],
    3817: [5, "1", 11, 1414088447, 16, -168562433],
    3818: [5, "1", 11, 1414088447, 16, -168562433],
    3819: [5, "1", 11, 1414088447, 16, -168562433],
    382: [2, -559393793, 3, 0, 2, [], 0, 0],
    3820: [5, "1", 11, 1414088447, 16, -168562433],
    3821: [5, "1", 11, 1414088447, 16, -168562433],
    3822: [5, "1", 11, 1414088447, 16, -168562433],
    3823: [5, "1", 11, 1414088447, 16, -168562433],
    3824: [5, "1", 11, 1414088447, 16, -168562433],
    3825: [5, "1", 11, 1414088447, 16, -168562433],
    3826: [5, "1", 11, 1414088447, 16, -168562433],
    3827: [5, "1", 11, 1414088447, 16, -168562433],
    3828: [5, "1", 11, 1414088447, 16, -168562433],
    3829: [5, "1", 11, 1414088447, 16, -168562433],
    383: [2, -559393793, 3, 0, 2, [], 0, 0],
    3830: [5, "1", 11, 1414088447, 16, -168562433],
    3831: [5, "1", 11, 1414088447, 16, -168562433],
    3832: [5, "1", 11, 1414088447, 16, -168562433],
    3833: [5, "1", 11, 1414088447, 16, -168562433],
    3834: [5, "1", 11, 1414088447, 16, -168562433],
    3835: [5, "1", 11, 1414088447, 16, -168562433],
    3836: [5, "1", 11, 1414088447, 16, -168562433],
    3837: [5, "1", 11, 1414088447, 16, -168562433],
    3838: [5, "1", 11, 1414088447, 16, -168562433],
    3839: [5, "1", 11, 1414088447, 16, -168562433],
    384: [2, -559393793, 4, 2, 2, [], 0, 0],
    3840: [5, "1", 11, 1414088447, 16, -168562433],
    3841: [5, "1", 11, 1414088447, 16, -168562433],
    3842: [5, "1", 11, 1414088447, 16, -168562433],
    3843: [5, "1", 11, 1414088447, 16, -168562433],
    3844: [5, "1", 11, 1414088447, 16, -168562433],
    3845: [5, "1", 11, 1414088447, 16, -168562433],
    3846: [5, "1", 11, 1414088447, 16, -168562433],
    3847: [5, "1", 11, 1414088447, 16, -168562433],
    3848: [5, "1", 11, 1414088447, 16, -168562433],
    3849: [5, "1", 11, 1414088447, 16, -168562433],
    385: [2, -559393793, 6, 2, 2, [], 0, 0],
    3850: [5, "1", 11, 1414088447, 16, -168562433],
    3851: [5, "1", 11, 1414088447, 16, -168562433],
    3852: [5, "1", 11, 1414088447, 16, -168562433],
    3853: [5, "1", 11, 1414088447, 16, -168562433],
    3854: [5, "1", 11, 1414088447, 16, -168562433],
    3855: [5, "1", 11, 1414088447, 16, -168562433],
    3856: [5, "1", 11, 1414088447, 16, -168562433],
    3857: [5, "1", 11, 1414088447, 16, -168562433],
    3858: [5, "1", 11, 1414088447, 16, -168562433],
    3859: [5, "1", 11, 1414088447, 16, -168562433],
    386: [2, -559393793, 7, 2, 2, [], 0, 0],
    3860: [5, "1", 11, 1414088447, 16, -168562433],
    3861: [5, "1", 11, 1414088447, 16, -168562433],
    3862: [5, "1", 11, 1414088447, 16, -168562433],
    3863: [5, "1", 11, 1414088447, 16, -168562433],
    3864: [5, "1", 11, 1414088447, 16, -168562433],
    3865: [5, "1", 11, 1414088447, 16, -168562433],
    3866: [5, "1", 11, 1414088447, 16, -168562433],
    3867: [5, "1", 11, 1414088447, 16, -168562433],
    3868: [5, "1", 11, 1414088447, 16, -168562433],
    3869: [5, "1", 11, 1414088447, 16, -168562433],
    387: [2, -559393793, 9, 2, 2, [], 0, 0],
    3870: [5, "1", 11, 1414088447, 16, -168562433],
    3871: [5, "1", 11, 1414088447, 16, -168562433],
    3872: [5, "1", 11, 1414088447, 16, -168562433],
    3873: [5, "1", 11, 1414088447, 16, -168562433],
    3874: [5, "1", 11, 1414088447, 16, -168562433],
    3875: [5, "1", 11, 1815085311, 16, -665089],
    3876: [5, "1", 12, 1815085311, 16, -665089],
    3877: [5, "1", 13, 1815085311, 16, -665089],
    3878: [5, "1", 14, 1815085311, 16, -665089],
    3879: [5, "1", 15, 1815085311, 16, -665089],
    388: [2, -559393793, 9, 2, 2, [], 0, 0],
    3880: [5, "1", 16, 1815085311, 16, -665089],
    3881: [5, "1", 18, 1815085311, 16, -665089],
    3882: [5, "1", 11, 1164654847, 16, -84215041],
    3883: [5, "1", 11, 1164654847, 16, -84215041],
    3884: [5, "1", 11, 1164654847, 16, -84215041],
    3885: [5, "1", 11, 1164654847, 16, -84215041],
    3886: [5, "1", 11, 1164654847, 16, -84215041],
    3887: [5, "1", 11, 1164654847, 16, -84215041],
    3888: [5, "1", 11, 1414088447, 16, -168562433],
    3889: [5, "1", 11, 1414088447, 16, -168562433],
    389: [2, -101058049, 1, 2, 2, [], 0, 0],
    3890: [5, "1", 11, 1414088447, 16, -168562433],
    3891: [5, "1", 11, 1414088447, 16, -168562433],
    3892: [5, "1", 11, 1414088447, 16, -168562433],
    3893: [5, "1", 11, 1414088447, 16, -168562433],
    3894: [5, "1", 11, 1414088447, 16, -168562433],
    3895: [5, "1", 11, 1414088447, 16, -168562433],
    3896: [5, "1", 11, 1414088447, 16, -168562433],
    3897: [5, "1", 11, 1414088447, 16, -168562433],
    3898: [5, "1", 11, 1414088447, 16, -168562433],
    3899: [5, "1", 11, 1414088447, 16, -168562433],
    39: [2, -3261953, 1, 2, 2, [], 0, 0],
    390: [2, -101058049, 1, 2, 2, [], 0, 0],
    3900: [5, "1", 11, 1414088447, 16, -168562433],
    3901: [5, "1", 11, 1414088447, 16, -168562433],
    3902: [5, "1", 11, 1414088447, 16, -168562433],
    3903: [5, "1", 11, 1414088447, 16, -168562433],
    3904: [5, "1", 11, 1414088447, 16, -168562433],
    3905: [5, "1", 11, 1414088447, 16, -168562433],
    3906: [5, "1", 11, 1414088447, 16, -168562433],
    3907: [5, "1", 11, 1414088447, 16, -168562433],
    3908: [5, "1", 11, 1414088447, 16, -168562433],
    3909: [5, "1", 11, 1414088447, 16, -168562433],
    391: [2, -101058049, 2, 2, 2, [], 0, 0],
    3910: [5, "1", 11, 1414088447, 16, -168562433],
    3911: [5, "1", 11, 1414088447, 16, -168562433],
    3912: [5, "1", 11, 1414088447, 16, -168562433],
    3913: [5, "1", 11, 1414088447, 16, -168562433],
    3914: [5, "1", 11, 1414088447, 16, -168562433],
    3915: [5, "1", 11, 1414088447, 16, -168562433],
    3916: [5, "1", 11, 1414088447, 16, -168562433],
    3917: [5, "1", 11, 1414088447, 16, -168562433],
    3918: [5, "1", 11, 1414088447, 16, -168562433],
    3919: [5, "1", 11, 1414088447, 16, -168562433],
    392: [2, -101058049, 4, 2, 2, [], 0, 0],
    3920: [5, "1", 11, 1414088447, 16, -168562433],
    3921: [5, "1", 11, 1414088447, 16, -168562433],
    3922: [5, "1", 11, 1414088447, 16, -168562433],
    3923: [5, "1", 11, 1414088447, 16, -168562433],
    3924: [5, "1", 11, 1414088447, 16, -168562433],
    3925: [5, "1", 11, 1414088447, 16, -168562433],
    3926: [5, "1", 11, 1414088447, 16, -168562433],
    3927: [5, "1", 11, 1414088447, 16, -168562433],
    3928: [5, "1", 11, 1414088447, 16, -168562433],
    3929: [5, "1", 11, 1414088447, 16, -168562433],
    393: [2, -101058049, 6, 2, 2, [], 0, 0],
    3930: [5, "1", 11, 1414088447, 16, -168562433],
    3931: [5, "1", 11, 1414088447, 16, -168562433],
    3932: [5, "1", 11, 1414088447, 16, -168562433],
    3933: [5, "1", 11, 1414088447, 16, -168562433],
    3934: [5, "1", 11, 1414088447, 16, -168562433],
    3935: [5, "1", 11, 1414088447, 16, -168562433],
    3936: [5, "1", 11, 1414088447, 16, -168562433],
    3937: [5, "1", 11, 1414088447, 16, -168562433],
    3938: [5, "1", 11, 1414088447, 16, -168562433],
    3939: [5, "1", 11, 1414088447, 16, -168562433],
    394: [2, -16928257, 1, 2, 2, [], 0, 0],
    3940: [5, "1", 11, 1414088447, 16, -168562433],
    3941: [5, "1", 11, 1414088447, 16, -168562433],
    3942: [5, "1", 11, 1414088447, 16, -168562433],
    3943: [5, "1", 11, 1414088447, 16, -168562433],
    3944: [5, "1", 11, 1414088447, 16, -168562433],
    3945: [5, "1", 11, 1414088447, 16, -168562433],
    3946: [5, "1", 11, 1414088447, 16, -168562433],
    3947: [5, "1", 11, 1414088447, 16, -168562433],
    3948: [5, "1", 11, 1414088447, 16, -168562433],
    3949: [5, "1", 11, 1414088447, 16, -168562433],
    395: [2, -16928257, 1, 2, 2, [], 0, 0],
    3950: [5, "1", 11, 1414088447, 16, -168562433],
    3951: [5, "1", 11, 1414088447, 16, -168562433],
    3952: [5, "1", 11, 1414088447, 16, -168562433],
    3953: [5, "1", 11, 1414088447, 16, -168562433],
    3954: [5, "1", 11, 1414088447, 16, -168562433],
    3955: [5, "1", 11, 1414088447, 16, -168562433],
    3956: [5, "1", 11, 1414088447, 16, -168562433],
    3957: [5, "1", 11, 1414088447, 16, -168562433],
    3958: [5, "1", 11, 1414088447, 16, -168562433],
    3959: [5, "1", 11, 1414088447, 16, -168562433],
    396: [2, -16928257, 1, 2, 2, [], 0, 0],
    3960: [5, "1", 11, 1414088447, 16, -168562433],
    3961: [5, "1", 11, 1414088447, 16, -168562433],
    3962: [5, "1", 11, 1414088447, 16, -168562433],
    3963: [5, "1", 11, 1414088447, 16, -168562433],
    3964: [5, "1", 11, 1414088447, 16, -168562433],
    3965: [5, "1", 11, 1414088447, 16, -168562433],
    3966: [5, "1", 11, 1414088447, 16, -168562433],
    3967: [5, "1", 11, 1414088447, 16, -168562433],
    3968: [5, "1", 11, 1414088447, 16, -168562433],
    3969: [5, "1", 11, 1414088447, 16, -168562433],
    397: [2, -16928257, 1, 2, 2, [], 0, 0],
    3970: [5, "1", 11, 1414088447, 16, -168562433],
    3971: [5, "1", 11, 1414088447, 16, -168562433],
    3972: [5, "1", 11, 1414088447, 16, -168562433],
    3973: [5, "1", 11, 1414088447, 16, -168562433],
    3974: [5, "1", 11, 1414088447, 16, -168562433],
    3975: [5, "1", 11, 1414088447, 16, -168562433],
    3976: [5, "1", 11, 1414088447, 16, -168562433],
    3977: [5, "1", 11, 1414088447, 16, -168562433],
    3978: [5, "1", 11, 1414088447, 16, -168562433],
    3979: [5, "1", 11, 1414088447, 16, -168562433],
    398: [2, -16928257, 1, 2, 2, [], 0, 0],
    3980: [5, "1", 11, 1414088447, 16, -168562433],
    3981: [5, "1", 11, 1414088447, 16, -168562433],
    3982: [5, "1", 11, 1414088447, 16, -168562433],
    3983: [5, "1", 11, 1414088447, 16, -168562433],
    3984: [5, "1", 11, 1414088447, 16, -168562433],
    3985: [5, "1", 11, 1414088447, 16, -168562433],
    3986: [5, "1", 11, 1414088447, 16, -168562433],
    3987: [5, "1", 11, 1414088447, 16, -168562433],
    3988: [5, "1", 11, 1414088447, 16, -168562433],
    3989: [5, "1", 11, 1414088447, 16, -168562433],
    399: [2, -16928257, 3, 2, 2, [], 0, 0],
    3990: [5, "1", 11, 1414088447, 16, -168562433],
    3991: [5, "1", 11, 1414088447, 16, -168562433],
    3992: [5, "1", 11, 1414088447, 16, -168562433],
    3993: [5, "1", 11, 1414088447, 16, -168562433],
    3994: [5, "1", 11, 1414088447, 16, -168562433],
    3995: [5, "1", 11, 1414088447, 16, -168562433],
    3996: [5, "1", 11, 1414088447, 16, -168562433],
    3997: [5, "1", 11, 1414088447, 16, -168562433],
    3998: [5, "1", 11, 1414088447, 16, -168562433],
    3999: [5, "1", 11, 1414088447, 16, -168562433],
    4: [3, -1497178369, [2, -1497178369, 1, 0, 0, [], 0, 0]],
    40: [2, -3977985, 1, 2, 2, [], 0, 0],
    400: [2, -16928257, 5, 2, 2, [], 0, 0],
    4E3: [5, "1", 11, 777089791, 18, -1716005889],
    4001: [5, "1", 12, 777089791, 18, -1716005889],
    4002: [5, "1", 14, 777089791, 18, -1716005889],
    4003: [5, "1", 16, 777089791, 18, -1716005889],
    4004: [5, "1", 18, 777089791, 18, -1716005889],
    4005: [5, "1", 20, 777089791, 18, -1716005889],
    4006: [5, "1", 22, 777089791, 18, -1716005889],
    4007: [5, "1", 11, 1414088447, 16, -168562433],
    4008: [5, "1", 11, 1414088447, 16, -168562433],
    4009: [5, "1", 11, 1414088447, 16, -168562433],
    401: [2, -16928257, 7, 2, 2, [], 0, 0],
    4010: [5, "1", 11, 1414088447, 16, -168562433],
    4011: [5, "1", 11, 1414088447, 16, -168562433],
    4012: [5, "1", 11, 1414088447, 16, -168562433],
    4013: [5, "1", 13, 35600895, 16, -1],
    4014: [5, "1", 15, 35600895, 16, -1],
    4015: [5, "1", 17, 35600895, 16, -1],
    4016: [5, "1", 13, 994267903, 16, -1],
    4017: [5, "1", 15, 994267903, 16, -1],
    4018: [5, "1", 17, 994267903, 16, -1],
    4019: [5, "1", 11, 1414088447, 16, -168562433],
    402: [2, -16928257, 1, 2, 2, [], 0, 0],
    4020: [5, "1", 11, 1414088447, 16, -168562433],
    4021: [2, -1, 4, 2, 2, [], 1, 0],
    4022: [2, -1, 5, 2, 2, [], 1, 0],
    4023: [2, -1, 7, 2, 2, [], 1, 0],
    4024: [2, -1, 6, 2, 2, [], 1, 0],
    4025: [2, -261847809, 2, 2, 2, [], 1, 0],
    4026: [2, -261847809, 3, 2, 2, [], 1, 0],
    4027: [2, -261847809, 5, 2, 2, [], 1, 0],
    4028: [2, -261847809, 4, 2, 2, [], 1, 0],
    4029: [5, "1", 11, -261847809, 16, -1],
    403: [2, -16928257, 1, 2, 2, [], 0, 0],
    4030: [5, "1", 11, -261847809, 16, -1],
    4031: [5, "1", 12, -261847809, 16, -1],
    4032: [5, "1", 14, -261847809, 16, -1],
    4033: [2, -593543425, 3, 2, 2, [], 0, 0],
    4034: [2, -593543425, 3, 2, 2, [], 0, 0],
    4035: [2, -593543425, 4, 2, 2, [], 0, 0],
    4036: [2, -593543425, 9, 2, 2, [], 0, 0],
    4037: [2, -593543425, 12, 2, 2, [], 0, 0],
    4038: [2, -593543425, 14, 2, 2, [], 0, 0],
    4039: [2, -593543425, 16, 2, 2, [], 0, 0],
    404: [2, -16928257, 1, 2, 2, [], 0, 0],
    4040: [2, -745436929, 2, 2, 2, [], 1, 0],
    4041: [2, -745436929, 2, 2, 2, [], 1, 0],
    4042: [2, -745436929, 2, 2, 2, [], 1, 0],
    4043: [2, -745436929, 2, 2, 2, [], 1, 0],
    4044: [2, -745436929, 2, 2, 2, [], 1, 0],
    4045: [2, -745436929, 3, 2, 2, [], 1, 0],
    4046: [2, -745436929, 5, 2, 2, [], 1, 0],
    4047: [2, -1, 4, 2, 2, [], 1, 0],
    4048: [2, -1, 4, 2, 2, [], 1, 0],
    4049: [2, -1, 4, 2, 2, [], 1, 0],
    405: [2, -16928257, 1, 2, 2, [], 0, 0],
    4050: [2, -1, 4, 2, 2, [], 1, 0],
    4051: [2, -1, 4, 2, 2, [], 1, 0],
    4052: [2, -1, 5, 2, 2, [], 1, 0],
    4053: [2, -1, 7, 2, 2, [], 1, 0],
    4054: [5, "1", 11, -1032492033, 16, -1],
    4055: [5, "1", 11, -1032492033, 16, -1],
    4056: [5, "1", 12, -1032492033, 16, -1],
    4057: [5, "1", 14, -1032492033, 16, -1],
    4058: [2, -843149313, 8, 2, 2, [], 0, 0],
    4059: [2, -16928257, 6, 2, 2, [], 0, 0],
    406: [2, -16928257, 1, 2, 2, [], 0, 0],
    4060: [2, -16928257, 8, 2, 2, [], 0, 0],
    4061: [3, -1717987034, []],
    4062: [4, -572662273, -101190401, 0.2, [2, -808464385, 1, 0, 1, [], 0, 0], 0, 8],
    4063: [4, -572662273, -101190401, 0.4, [2, -808464385, 1, 0, 1, [], 0, 0], 0, 8],
    4064: [5, "1", 14, 912759295, 18, -1],
    4065: [2, -1, 4, 2, 2, [], 1, 0],
    4066: [2, -1, 4, 2, 2, [], 1, 0],
    4067: [2, -1, 4, 2, 2, [], 1, 0],
    4068: [2, -1, 4, 2, 2, [], 1, 0],
    4069: [2, -1, 4, 2, 2, [], 1, 0],
    407: [2, -16928257, 3, 2, 2, [], 0, 0],
    4070: [2, -1, 5, 2, 2, [], 1, 0],
    4071: [2, -1, 7, 2, 2, [], 1, 0],
    4072: [2, -617141249, 2, 2, 2, [], 1, 0],
    4073: [2, -617141249, 2, 2, 2, [], 1, 0],
    4074: [2, -617141249, 2, 2, 2, [], 1, 0],
    4075: [2, -617141249, 2, 2, 2, [], 1, 0],
    4076: [2, -617141249, 2, 2, 2, [], 1, 0],
    4077: [2, -617141249, 3, 2, 2, [], 1, 0],
    4078: [2, -617141249, 5, 2, 2, [], 1, 0],
    4079: [5, "1", 11, -853074945, 16, -1],
    408: [2, -16928257, 5, 2, 2, [], 0, 0],
    4080: [5, "1", 11, -853074945, 16, -1],
    4081: [5, "1", 12, -853074945, 16, -1],
    4082: [5, "1", 14, -853074945, 16, -1],
    4083: [2, -559393793, 6, 2, 2, [], 0, 0],
    4084: [2, -237677057, 6, 2, 2, [], 0, 0],
    4085: [2, -237677057, 6, 2, 2, [], 0, 0],
    4086: [2, -2201857, 5, 2, 2, [], 0, 0],
    4087: [2, -559393793, 7, 2, 2, [], 0, 0],
    4088: [2, -559873, 4, 2, 2, [], 0, 0],
    4089: [2, -559873, 4, 2, 2, [], 0, 0],
    409: [2, -16928257, 7, 2, 2, [], 0, 0],
    4090: [2, -2201857, 10, 2, 2, [], 0, 0],
    4091: [2, -559393793, 6, 2, 2, [], 0, 0],
    4092: [2, -843149313, 3, 2, 2, [], 0, 0],
    4093: [2, -843149313, 3, 2, 2, [], 0, 0],
    4094: [2, -237677057, 3, 2, 2, [], 0, 0],
    4095: [2, -559393793, 4, 2, 2, [], 0, 0],
    4096: [2, -2201857, 2, 2, 2, [], 0, 0],
    4097: [2, -559873, 1, 2, 2, [], 0, 0],
    4098: [2, -16928257, 1, 2, 2, [], 0, 0],
    4099: [2, -16928257, 1, 2, 2, [], 0, 0],
    41: [2, -3977985, 1, 2, 2, [], 0, 0],
    410: [2, -559873, 1, 2, 2, [], 0, 0],
    4100: [2, -2201857, 2, 2, 2, [], 0, 0],
    4101: [2, -559873, 2, 2, 2, [], 0, 0],
    4102: [2, -843149313, 3, 2, 2, [], 0, 0],
    4103: [2, -237677057, 4, 2, 2, [], 0, 0],
    4104: [2, -2201857, 4, 2, 2, [], 0, 0],
    4105: [2, -2201857, 4, 2, 2, [], 0, 0],
    4106: [2, -559393793, 6, 0, 2, [], 0, 0],
    4107: [2, -559393793, 6, 0, 2, [], 0, 0],
    4108: [2, -2201857, 4, 2, 2, [], 0, 0],
    4109: [2, -559393793, 4, 2, 2, [], 0, 0],
    411: [2, -559873, 1, 2, 2, [], 0, 0],
    4110: [2, -2201857, 2, 2, 2, [], 0, 0],
    4111: [2, -2201857, 2, 2, 2, [], 0, 0],
    4112: [2, -559393793, 6, 0, 2, [], 0, 0],
    4113: [2, -20748801, 5, 2, 2, [], 0, 0],
    4114: [2, -593543425, 7, 0, 2, [], 0, 0],
    4115: [2, -20748801, 2, 2, 2, [], 0, 0],
    4116: [2, -593543425, 4, 2, 2, [], 0, 0],
    4117: [2, -593543425, 6, 2, 2, [], 0, 0],
    4118: [2, -20748801, 2, 2, 2, [], 0, 0],
    4119: [5, "1", 12, -1687872257, 16, -2201857],
    412: [2, -559873, 1, 2, 2, [], 0, 0],
    4120: [5, "1", 13, 2117931775, 16, -20748801],
    4121: [5, "msyhbd", 13, 1432248831, 16, -639243777],
    4122: [5, "msyhbd", 14, 1432248831, 16, -639243777],
    4123: [5, "msyhbd", 16, 1432248831, 16, -639243777],
    4124: [5, "msyhbd", 18, 1432248831, 16, -639243777],
    4125: [3, -572662273, [2, -572662273, 1, 0, 0, [], 0, 0]],
    4127: [3, -286398977, [2, -286398977, 1, 0, 0, [], 0, 0]],
    4128: [3, -481736193, [2, -481736193, 1, 0, 0, [], 0, 0]],
    4129: [3, 1232784639, [2, 1232784639, 1, 0, 0, [], 0, 0]],
    413: [2, -559873, 1, 2, 2, [], 0, 0],
    4130: [3, 1304012031, [2, 1304012031, 1, 0, 0, [], 0, 0]],
    4131: [3, -864374273, [2, -864374273, 1, 0, 0, [], 0, 0]],
    4132: [3, -1332988673, [2, -1332988673, 1, 0, 0, [], 0, 0]],
    4133: [3, 882914559, [2, 882914559, 1, 0, 0, [], 0, 0]],
    4134: [3, 1806911487, [2, 1806911487, 1, 0, 0, [], 0, 0]],
    4135: [3, 27450111, [2, 27450111, 1, 0, 0, [], 0, 0]],
    4136: [3, -105309697, [2, -105309697, 1, 0, 0, [], 0, 0]],
    4137: [3, -745436929, [2, -745436929, 1, 0, 0, [], 0, 0]],
    4138: [3, -1721303041, [2, -1721303041, 1, 0, 0, [], 0, 0]],
    4139: [3, 2119794687, [2, 2119794687, 1, 0, 0, [], 0, 0]],
    414: [2, -559873, 1, 2, 2, [], 0, 0],
    4140: [3, -701218305, [2, -701218305, 1, 0, 0, [], 0, 0]],
    4141: [3, -4508673, [2, -4508673, 1, 0, 0, [], 0, 0]],
    4142: [3, -1287151105, [2, -1287151105, 1, 0, 0, [], 0, 0]],
    4143: [3, 1304012031, [2, 1304012031, 1, 0, 0, [], 0, 0]],
    4144: [3, -1721025025, [2, -1721025025, 1, 0, 0, [], 0, 0]],
    4145: [3, -701218305, [2, -701218305, 1, 0, 0, [], 0, 0]],
    4146: [3, 751052799, [2, 751052799, 1, 0, 0, [], 0, 0]],
    4147: [3, -105309697, [2, -105309697, 1, 0, 0, [], 0, 0]],
    4148: [3, 2118632191, [2, 2118632191, 1, 0, 0, [], 0, 0]],
    4149: [3, -536826881, [2, -536826881, 1, 0, 0, [], 0, 0]],
    415: [2, -559873, 1, 2, 2, [], 0, 0],
    4150: [3, -13408513, [2, -13408513, 1, 0, 0, [], 0, 0]],
    4151: [3, -8453889, [2, -8453889, 1, 0, 0, [], 0, 0]],
    4152: [3, 6737151, [2, 6737151, 1, 0, 0, [], 0, 0]],
    4153: [3, -2118007041, [2, -2118007041, 1, 0, 0, [], 0, 0]],
    4154: [3, -944778241, [2, -944778241, 1, 0, 0, [], 0, 0]],
    4155: [3, -1725026561, [2, -1725026561, 1, 0, 0, [], 0, 0]],
    4156: [3, -493832449, [2, -493832449, 1, 0, 0, [], 0, 0]],
    4157: [3, 2119794687, [2, 2119794687, 1, 0, 0, [], 0, 0]],
    4158: [3, -519764481, [2, -519764481, 1, 0, 0, [], 0, 0]],
    4159: [3, -105309697, [2, -105309697, 1, 0, 0, [], 0, 0]],
    416: [2, -559873, 4, 2, 2, [], 0, 0],
    4160: [3, 1232784639, [2, 1232784639, 1, 0, 0, [], 0, 0]],
    4161: [3, -312199681, [2, -312199681, 1, 0, 0, [], 0, 0]],
    4162: [3, -312199681, [2, -312199681, 1, 0, 0, [], 0, 0]],
    4163: [3, 10027263, [2, 10027263, 1, 0, 0, [], 0, 0]],
    4164: [3, -872362753, [2, -872362753, 1, 0, 0, [], 0, 0]],
    4165: [3, 10004223, [2, 10004223, 1, 0, 0, [], 0, 0]],
    4166: [3, -1261683201, [2, -1261683201, 1, 0, 0, [], 0, 0]],
    4167: [3, 1283424255, [2, 1283424255, 1, 0, 0, [], 0, 0]],
    4168: [3, 751052799, [2, 751052799, 1, 0, 0, [], 0, 0]],
    4169: [3, -4508673, [2, -4508673, 1, 0, 0, [], 0, 0]],
    417: [2, -559873, 6, 2, 2, [], 0, 0],
    4170: [3, 1030606079, [2, 1030606079, 1, 0, 0, [], 0, 0]],
    4171: [3, -701218305, [2, -701218305, 1, 0, 0, [], 0, 0]],
    4172: [3, 1816959487, [2, 1816959487, 1, 0, 0, [], 0, 0]],
    4173: [3, 751052799, [2, 751052799, 1, 0, 0, [], 0, 0]],
    4174: [3, -701152513, [2, -701152513, 1, 0, 0, [], 0, 0]],
    4175: [3, 1232784639, [2, 1232784639, 1, 0, 0, [], 0, 0]],
    4176: [3, -261847809, [2, -261847809, 1, 0, 0, [], 0, 0]],
    4177: [3, -701218305, [2, -701218305, 1, 0, 0, [], 0, 0]],
    4178: [3, -372571905, [2, -372571905, 1, 0, 0, [], 0, 0]],
    4179: [3, 92056319, [2, 92056319, 1, 0, 0, [], 0, 0]],
    418: [2, -559873, 8, 2, 2, [], 0, 0],
    4180: [3, 119573247, [2, 119573247, 1, 0, 0, [], 0, 0]],
    4181: [3, 6737151, [2, 6737151, 1, 0, 0, [], 0, 0]],
    4182: [3, -308492289, [2, -308492289, 1, 0, 0, [], 0, 0]],
    4183: [3, 1555621375, [2, 1555621375, 1, 0, 0, [], 0, 0]],
    4184: [3, 1555621375, [2, 1555621375, 1, 0, 0, [], 0, 0]],
    4185: [3, -701152513, [2, -701152513, 1, 0, 0, [], 0, 0]],
    4186: [3, 8912127, [2, 8912127, 1, 0, 0, [], 0, 0]],
    4187: [3, -328597249, [2, -328597249, 1, 0, 0, [], 0, 0]],
    4188: [3, 6737151, [2, 6737151, 1, 0, 0, [], 0, 0]],
    4189: [3, 6737151, [2, 6737151, 1, 0, 0, [], 0, 0]],
    419: [2, -3905793, 1, 2, 2, [], 0, 0],
    4190: [3, -481736193, [2, -481736193, 1, 0, 0, [], 0, 0]],
    4191: [3, -4508673, [2, -4508673, 1, 0, 0, [], 0, 0]],
    4192: [3, -701218305, [2, -701218305, 1, 0, 0, [], 0, 0]],
    4193: [3, 1806911487, [2, 1806911487, 1, 0, 0, [], 0, 0]],
    4194: [3, -1261683201, [2, -1261683201, 1, 0, 0, [], 0, 0]],
    4195: [3, -867020033, [2, -867020033, 1, 0, 0, [], 0, 0]],
    4196: [3, -748541441, [2, -748541441, 1, 0, 0, [], 0, 0]],
    4197: [3, -813057025, [2, -813057025, 1, 0, 0, [], 0, 0]],
    4198: [3, -375840513, [2, -375840513, 1, 0, 0, [], 0, 0]],
    4199: [3, 1385155839, [2, 1385155839, 1, 0, 0, [], 0, 0]],
    42: [2, -3977985, 1, 2, 2, [], 0, 0],
    420: [2, -2201857, 1, 2, 2, [], 0, 0],
    4200: [3, 731590655, [2, 731590655, 1, 0, 0, [], 0, 0]],
    4201: [3, 8421631, [2, 8421631, 1, 0, 0, [], 0, 0]],
    4202: [3, -633391617, [2, -633391617, 1, 0, 0, [], 0, 0]],
    4203: [3, -1638519809, [2, -1638519809, 1, 0, 0, [], 0, 0]],
    4204: [3, -1725003777, [2, -1725003777, 1, 0, 0, [], 0, 0]],
    4205: [3, 2025713407, [2, 2025713407, 1, 0, 0, [], 0, 0]],
    4206: [3, -1854622465, [2, -1854622465, 1, 0, 0, [], 0, 0]],
    4207: [3, 1806911487, [2, 1806911487, 1, 0, 0, [], 0, 0]],
    4208: [3, -813057025, [2, -813057025, 1, 0, 0, [], 0, 0]],
    4209: [3, -617141249, [2, -617141249, 1, 0, 0, [], 0, 0]],
    421: [2, -2201857, 1, 2, 2, [], 0, 0],
    4210: [5, "1", 11, -1583242753, 16, -101058049],
    4211: [5, "1", 11, -1583242753, 16, -101058049],
    4212: [5, "1", 11, -1583242753, 16, -101058049],
    4213: [5, "1", 11, -1583242753, 16, -101058049],
    4214: [5, "1", 11, -1583242753, 16, -101058049],
    4215: [5, "1", 11, -1583242753, 16, -101058049],
    4216: [2, -454761217, 3, 2, 2, [], 0, 0],
    4217: [2, -758265345, 4, 2, 2, [1, 6], 1, 0],
    4218: [2, -758265345, 5, 2, 2, [1, 6], 1, 0],
    4219: [2, -758265345, 7, 2, 2, [1, 10], 1, 0],
    422: [2, -2201857, 1, 2, 2, [], 0, 0],
    4220: [2, -758265345, 7, 2, 2, [1, 6], 1, 0],
    4221: [2, -101058049, 1, 2, 2, [], 0, 0],
    4222: [2, -101058049, 2, 2, 2, [], 0, 0],
    4223: [2, -101058049, 3, 2, 2, [], 0, 0],
    4224: [2, -101058049, 5, 2, 2, [], 0, 0],
    4225: [2, -101058049, 5, 2, 2, [], 0, 0],
    4226: [2, -454761217, 4, 0, 2, [], 1, 0],
    4227: [2, -758265345, 5, 0, 2, [1, 6], 1, 0],
    4228: [2, -758265345, 6, 0, 2, [1, 6], 1, 0],
    4229: [2, -758265345, 7, 0, 2, [1, 10], 1, 0],
    423: [2, -2201857, 1, 2, 2, [], 0, 0],
    4230: [1, "zhongcan_a", []],
    4231: [1, "zhongcan_a", []],
    4232: [1, "zhongcan_a", []],
    4233: [1, "zhongcan_a", []],
    4234: [1, "xican_a", []],
    4235: [1, "xican_a", []],
    4236: [1, "xican_a", []],
    4237: [1, "xican_a", []],
    4238: [1, "honglvdeng_T", []],
    4239: [1, "zhongheyiyuan_b", []],
    424: [2, -2201857, 2, 2, 2, [], 0, 0],
    4240: [1, "zhongheyiyuan_b", []],
    4241: [1, "zhongheyiyuan_b", []],
    4242: [1, "zhongheyiyuan_b", []],
    4243: [1, "zhongheyiyuan_b", []],
    4244: [1, "zhongheyiyuan_b", []],
    4245: [2, -1094795521, 6, 0, 2, [], 0, 0],
    4246: [2, -1094795521, 8, 0, 2, [], 0, 0],
    4247: [2, -1094795521, 10, 0, 2, [], 0, 0],
    4248: [2, -1, 4, 0, 2, [2, 1], 1, 0],
    4249: [2, -1, 6, 0, 2, [3, 1], 1, 0],
    425: [2, -2201857, 4, 2, 2, [], 0, 0],
    4250: [2, -1, 8, 0, 2, [4, 2], 1, 0],
    4251: [2, -1465341697, 6, 1, 2, [], 0, 0],
    4252: [2, -1465341697, 8, 1, 2, [], 0, 0],
    4253: [2, -1465341697, 10, 1, 2, [], 0, 0],
    4254: [2, -1, 4, 1, 2, [], 0, 0],
    4255: [2, -1, 6, 1, 2, [], 0, 0],
    4256: [2, -1, 8, 1, 2, [], 0, 0],
    4257: [2, -1094795521, 6, 0, 2, [], 0, 0],
    4258: [2, -1094795521, 8, 0, 2, [], 0, 0],
    4259: [2, -1094795521, 10, 0, 2, [], 0, 0],
    426: [2, -2201857, 6, 2, 2, [], 0, 0],
    4260: [2, -437918209, 4, 0, 2, [2, 1], 1, 0],
    4261: [2, -437918209, 6, 0, 2, [3, 1], 1, 0],
    4262: [2, -437918209, 8, 0, 2, [4, 2], 1, 0],
    4263: [2, -1465341697, 6, 1, 2, [], 0, 0],
    4264: [2, -1465341697, 8, 1, 2, [], 0, 0],
    4265: [2, -1465341697, 10, 1, 2, [], 0, 0],
    4266: [2, -437918209, 4, 1, 2, [], 0, 0],
    4267: [2, -437918209, 6, 1, 2, [], 0, 0],
    4268: [2, -437918209, 8, 1, 2, [], 0, 0],
    4269: [1, "s_r_h2", []],
    427: [2, -2201857, 8, 2, 2, [], 0, 0],
    4270: [1, "s_r_h2", []],
    4271: [2, -1, 4, 2, 2, [], 1, 0],
    4272: [2, -1, 4, 2, 2, [], 1, 0],
    4273: [2, -1, 4, 2, 2, [], 1, 0],
    4274: [2, -1, 4, 2, 2, [], 1, 0],
    4275: [2, -1, 4, 2, 2, [], 1, 0],
    4276: [2, -1, 5, 2, 2, [], 1, 0],
    4277: [2, -1, 7, 2, 2, [], 1, 0],
    4278: [2, 7403007, 2, 2, 2, [], 1, 0],
    4279: [2, 7403007, 2, 2, 2, [], 1, 0],
    428: [2, -20748801, 1, 2, 2, [], 0, 0],
    4280: [2, 7403007, 2, 2, 2, [], 1, 0],
    4281: [2, 7403007, 2, 2, 2, [], 1, 0],
    4282: [2, 7403007, 2, 2, 2, [], 1, 0],
    4283: [2, 7403007, 3, 2, 2, [], 1, 0],
    4284: [2, 7403007, 5, 2, 2, [], 1, 0],
    4285: [5, "1", 11, 6675967, 16, -1],
    4286: [5, "1", 11, 6675967, 16, -1],
    4287: [5, "1", 12, 6675967, 16, -1],
    4288: [5, "1", 14, 6675967, 16, -1],
    4289: [1, "ditie_beijing_00", []],
    429: [2, -20748801, 1, 2, 2, [], 0, 0],
    4290: [1, "trans_shanghai_01", []],
    4291: [1, "trans_shanghai_0", []],
    4292: [1, "trans_shanghai_1", []],
    4293: [1, "trans_shanghai_2", []],
    4294: [2, -1, 4, 2, 2, [], 1, 0],
    4295: [2, -1, 4, 2, 2, [], 1, 0],
    4296: [2, -1, 4, 2, 2, [], 1, 0],
    4297: [2, -1, 4, 2, 2, [], 1, 0],
    4298: [2, -1, 4, 2, 2, [], 1, 0],
    4299: [2, -1, 5, 2, 2, [], 1, 0],
    43: [2, -3977985, 1, 2, 2, [], 0, 0],
    430: [2, -20748801, 1, 2, 2, [], 0, 0],
    4300: [2, -1, 7, 2, 2, [], 1, 0],
    4301: [2, -436202753, 2, 2, 2, [], 1, 0],
    4302: [2, -436202753, 2, 2, 2, [], 1, 0],
    4303: [2, -436202753, 2, 2, 2, [], 1, 0],
    4304: [2, -436202753, 2, 2, 2, [], 1, 0],
    4305: [2, -436202753, 2, 2, 2, [], 1, 0],
    4306: [2, -436202753, 3, 2, 2, [], 1, 0],
    4307: [2, -436202753, 5, 2, 2, [], 1, 0],
    4308: [5, "1", 11, -436202753, 16, -1],
    4309: [5, "1", 11, -436202753, 16, -1],
    431: [2, -20748801, 1, 2, 2, [], 0, 0],
    4310: [5, "1", 12, -436202753, 16, -1],
    4311: [5, "1", 14, -436202753, 16, -1],
    4312: [1, "ditie_beijing_00", []],
    4313: [1, "ditie_haerbin_01", []],
    4314: [1, "ditie_haerbin_0", []],
    4315: [1, "ditie_haerbin_1", []],
    4316: [1, "ditie_haerbin_2", []],
    4317: [1, "10a", []],
    4318: [1, "10a", []],
    4319: [1, "10b", []],
    432: [2, -20748801, 1, 2, 2, [], 0, 0],
    4320: [1, "10b", []],
    4321: [1, "29a", []],
    4322: [1, "29a", []],
    4323: [1, "29b", []],
    4324: [1, "29b", []],
    4325: [1, "31", []],
    4326: [1, "31", []],
    4327: [1, "6a", []],
    4328: [1, "6a", []],
    4329: [1, "e5", []],
    433: [2, -20748801, 2, 2, 2, [], 0, 0],
    4330: [1, "e5", []],
    4331: [1, "i1", []],
    4332: [1, "i1", []],
    4333: [1, "l", []],
    4334: [1, "l", []],
    4335: [1, "n3", []],
    4336: [1, "n3", []],
    4337: [3, 7403007, [2, 7403007, 1, 0, 0, [], 0, 0]],
    4338: [3, -436202753, [2, -436202753, 1, 0, 0, [], 0, 0]],
    434: [2, -20748801, 4, 2, 2, [], 0, 0],
    435: [2, -20748801, 6, 2, 2, [], 0, 0],
    436: [2, -20748801, 8, 2, 2, [], 0, 0],
    437: [2, -2201857, 1, 2, 2, [], 0, 0],
    438: [2, -2201857, 1, 2, 2, [], 0, 0],
    439: [2, -2201857, 1, 2, 2, [], 0, 0],
    44: [2, -3977985, 1, 2, 2, [], 0, 0],
    440: [2, -2201857, 1, 2, 2, [], 0, 0],
    441: [2, -2201857, 1, 2, 2, [], 0, 0],
    442: [2, -2201857, 2, 2, 2, [], 0, 0],
    443: [2, -2201857, 4, 2, 2, [], 0, 0],
    444: [2, -2201857, 6, 2, 2, [], 0, 0],
    445: [2, -2201857, 8, 2, 2, [], 0, 0],
    446: [2, -101058049, 1, 2, 2, [], 0, 0],
    447: [2, -101058049, 1, 2, 2, [], 0, 0],
    448: [2, -101058049, 2, 2, 2, [], 0, 0],
    449: [2, -101058049, 3, 2, 2, [], 0, 0],
    45: [2, -3977985, 1, 2, 2, [], 0, 0],
    450: [2, -101058049, 5, 2, 2, [], 0, 0],
    451: [2, -101058049, 5, 2, 2, [], 0, 0],
    452: [2, -101058049, 2, 2, 2, [], 0, 0],
    453: [2, -101058049, 3, 2, 2, [], 0, 0],
    454: [2, -101058049, 4, 2, 2, [], 0, 0],
    455: [2, -101058049, 6, 2, 2, [], 0, 0],
    456: [2, -101058049, 8, 2, 2, [], 0, 0],
    457: [2, -101058049, 8, 2, 2, [], 0, 0],
    458: [2, -101058049, 2, 2, 2, [], 0, 0],
    459: [2, -101058049, 3, 2, 2, [], 0, 0],
    46: [2, -3912449, 1, 2, 2, [], 0, 0],
    460: [2, -101058049, 4, 2, 2, [], 0, 0],
    461: [2, -101058049, 6, 2, 2, [], 0, 0],
    462: [2, -101058049, 8, 2, 2, [], 0, 0],
    463: [2, -16928257, 1, 2, 2, [], 0, 0],
    464: [2, -16928257, 1, 2, 2, [], 0, 0],
    465: [2, -16928257, 2, 2, 2, [], 0, 0],
    466: [2, -16928257, 2, 2, 2, [], 0, 0],
    467: [2, -16928257, 4, 2, 2, [], 0, 0],
    468: [2, -16928257, 4, 2, 2, [], 0, 0],
    469: [2, -16928257, 6, 2, 2, [], 0, 0],
    47: [1, "biaopai_guodao_0", [5, "Tahoma", 9, -1, 16, -1]],
    470: [2, -16928257, 8, 2, 2, [], 0, 0],
    471: [2, -16928257, 12, 2, 2, [], 0, 0],
    472: [2, -16928257, 1, 2, 2, [], 0, 0],
    473: [2, -16928257, 1, 2, 2, [], 0, 0],
    474: [2, -16928257, 2, 2, 2, [], 0, 0],
    475: [2, -16928257, 2, 2, 2, [], 0, 0],
    476: [2, -16928257, 2, 2, 2, [], 0, 0],
    477: [2, -16928257, 4, 2, 2, [], 0, 0],
    478: [2, -16928257, 6, 2, 2, [], 0, 0],
    479: [2, -16928257, 8, 2, 2, [], 0, 0],
    48: [1, "biaopai_gaosu1", [5, "Tahoma", 9, -1, 48, -1]],
    480: [2, -16928257, 12, 2, 2, [], 0, 0],
    481: [2, -559873, 1, 2, 2, [], 0, 0],
    482: [2, -559873, 1, 2, 2, [], 0, 0],
    483: [2, -559873, 2, 2, 2, [], 0, 0],
    484: [2, -559873, 3, 2, 2, [], 0, 0],
    485: [2, -559873, 4, 2, 2, [], 0, 0],
    486: [2, -559873, 6, 2, 2, [], 0, 0],
    487: [2, -559873, 8, 2, 2, [], 0, 0],
    488: [2, -559873, 10, 2, 2, [], 0, 0],
    489: [2, -559873, 14, 2, 2, [], 0, 0],
    49: [1, "biaopai_gaosu2", [5, "Tahoma", 9, -1, 48, -1]],
    490: [2, -2201857, 1, 2, 2, [], 0, 0],
    491: [2, -2201857, 1, 2, 2, [], 0, 0],
    492: [2, -2201857, 2, 2, 2, [], 0, 0],
    493: [2, -2201857, 3, 2, 2, [], 0, 0],
    494: [2, -2201857, 4, 2, 2, [], 0, 0],
    495: [2, -2201857, 8, 2, 2, [], 0, 0],
    496: [2, -2201857, 10, 2, 2, [], 0, 0],
    497: [2, -2201857, 16, 2, 2, [], 0, 0],
    498: [2, -2201857, 16, 2, 2, [], 0, 0],
    499: [2, -2201857, 2, 2, 2, [], 0, 0],
    5: [2, -1497178369, 1, 2, 2, [], 0, 0],
    50: [2, -1802201857, 2, 2, 2, [], 0, 0],
    500: [2, -2201857, 2, 2, 2, [], 0, 0],
    501: [2, -2201857, 4, 2, 2, [], 0, 0],
    502: [2, -2201857, 5, 2, 2, [], 0, 0],
    503: [2, -2201857, 6, 2, 2, [], 0, 0],
    504: [2, -2201857, 8, 2, 2, [], 0, 0],
    505: [2, -2201857, 13, 2, 2, [], 0, 0],
    506: [2, -2201857, 15, 2, 2, [], 0, 0],
    507: [2, -2201857, 17, 2, 2, [], 0, 0],
    508: [2, -2201857, 17, 2, 2, [], 0, 0],
    509: [2, -20748801, 2, 2, 2, [], 0, 0],
    51: [2, -1, 1.5, 0, 2, [10, 11], 1, 0],
    510: [2, -20748801, 2, 2, 2, [], 0, 0],
    511: [2, -20748801, 3, 2, 2, [], 0, 0],
    512: [2, -20748801, 4, 2, 2, [], 0, 0],
    513: [2, -20748801, 5, 2, 2, [], 0, 0],
    514: [2, -20748801, 7, 2, 2, [], 0, 0],
    515: [2, -20748801, 12, 2, 2, [], 0, 0],
    516: [2, -20748801, 14, 2, 2, [], 0, 0],
    517: [2, -20748801, 18, 2, 2, [], 0, 0],
    518: [2, -20748801, 18, 2, 2, [], 0, 0],
    519: [2, -2201857, 1, 2, 2, [], 0, 0],
    52: [1, "shoudu", []],
    520: [2, -2201857, 2, 2, 2, [], 0, 0],
    521: [2, -2201857, 2, 2, 2, [], 0, 0],
    522: [2, -2201857, 3, 2, 2, [], 0, 0],
    523: [2, -2201857, 4, 2, 2, [], 0, 0],
    524: [2, -2201857, 6, 2, 2, [], 0, 0],
    525: [2, -2201857, 10, 2, 2, [], 0, 0],
    526: [2, -2201857, 14, 2, 2, [], 0, 0],
    527: [2, -2201857, 16, 2, 2, [], 0, 0],
    528: [2, -2201857, 16, 2, 2, [], 0, 0],
    529: [2, -101058049, 1, 2, 2, [], 0, 0],
    53: [1, "shenghui_0", []],
    530: [2, -101058049, 1, 2, 2, [], 0, 0],
    531: [2, -101058049, 2, 2, 2, [], 0, 0],
    532: [2, -101058049, 3, 2, 2, [], 0, 0],
    533: [2, -101058049, 5, 2, 2, [], 0, 0],
    534: [2, -101058049, 5, 2, 2, [], 0, 0],
    535: [2, -101058049, 2, 2, 2, [], 0, 0],
    536: [2, -101058049, 3, 2, 2, [], 0, 0],
    537: [2, -101058049, 4, 2, 2, [], 0, 0],
    538: [2, -101058049, 6, 2, 2, [], 0, 0],
    539: [2, -101058049, 8, 2, 2, [], 0, 0],
    54: [1, "shenghui_1", []],
    540: [2, -101058049, 8, 2, 2, [], 0, 0],
    541: [2, -16928257, 1, 2, 2, [], 0, 0],
    542: [2, -16928257, 1, 2, 2, [], 0, 0],
    543: [2, -16928257, 2, 2, 2, [], 0, 0],
    544: [2, -16928257, 4, 2, 2, [], 0, 0],
    545: [2, -16928257, 4, 2, 2, [], 0, 0],
    546: [2, -16928257, 4, 2, 2, [], 0, 0],
    547: [2, -16928257, 6, 2, 2, [], 0, 0],
    548: [2, -16928257, 8, 2, 2, [], 0, 0],
    549: [2, -16928257, 12, 2, 2, [], 0, 0],
    55: [1, "dijishi_0", []],
    550: [2, -16928257, 1, 2, 2, [], 0, 0],
    551: [2, -16928257, 1, 2, 2, [], 0, 0],
    552: [2, -16928257, 2, 2, 2, [], 0, 0],
    553: [2, -16928257, 2, 2, 2, [], 0, 0],
    554: [2, -16928257, 4, 2, 2, [], 0, 0],
    555: [2, -16928257, 4, 2, 2, [], 0, 0],
    556: [2, -16928257, 6, 2, 2, [], 0, 0],
    557: [2, -16928257, 8, 2, 2, [], 0, 0],
    558: [2, -16928257, 12, 2, 2, [], 0, 0],
    559: [2, -559873, 1, 2, 2, [], 0, 0],
    56: [5, "1", 11, 1280068863, 16, -1],
    560: [2, -559873, 1, 2, 2, [], 0, 0],
    561: [2, -559873, 2, 2, 2, [], 0, 0],
    562: [2, -559873, 4, 2, 2, [], 0, 0],
    563: [2, -559873, 4, 2, 2, [], 0, 0],
    564: [2, -559873, 6, 2, 2, [], 0, 0],
    565: [2, -559873, 10, 2, 2, [], 0, 0],
    566: [2, -559873, 12, 2, 2, [], 0, 0],
    567: [2, -559873, 16, 2, 2, [], 0, 0],
    568: [2, -559873, 16, 2, 2, [], 0, 0],
    569: [2, -2201857, 1, 2, 2, [], 0, 0],
    57: [5, "1", 11, 255, 16, -1],
    570: [2, -2201857, 1, 2, 2, [], 0, 0],
    571: [2, -2201857, 2, 2, 2, [], 0, 0],
    572: [2, -2201857, 3, 2, 2, [], 0, 0],
    573: [2, -2201857, 4, 2, 2, [], 0, 0],
    574: [2, -2201857, 6, 2, 2, [], 0, 0],
    575: [2, -2201857, 10, 2, 2, [], 0, 0],
    576: [2, -2201857, 12, 2, 2, [], 0, 0],
    577: [2, -2201857, 16, 2, 2, [], 0, 0],
    578: [2, -2201857, 16, 2, 2, [], 0, 0],
    579: [2, -2201857, 1, 2, 2, [], 0, 0],
    58: [5, "1", 12, 255, 16, -1],
    580: [2, -2201857, 1, 2, 2, [], 0, 0],
    581: [2, -2201857, 3, 2, 2, [], 0, 0],
    582: [2, -2201857, 5, 2, 2, [], 0, 0],
    583: [2, -2201857, 5, 2, 2, [], 0, 0],
    584: [2, -2201857, 6, 2, 2, [], 0, 0],
    585: [2, -2201857, 7, 2, 2, [], 0, 0],
    586: [2, -2201857, 12, 2, 2, [], 0, 0],
    587: [2, -2201857, 14, 2, 2, [], 0, 0],
    588: [2, -2201857, 16, 2, 2, [], 0, 0],
    589: [2, -2201857, 1, 2, 2, [], 0, 0],
    59: [5, "1", 13, 255, 16, -1],
    590: [2, -2201857, 1, 2, 2, [], 0, 0],
    591: [2, -2201857, 3, 2, 2, [], 0, 0],
    592: [2, -2201857, 5, 2, 2, [], 0, 0],
    593: [2, -2201857, 5, 2, 2, [], 0, 0],
    594: [2, -2201857, 6, 2, 2, [], 0, 0],
    595: [2, -2201857, 7, 2, 2, [], 0, 0],
    596: [2, -2201857, 12, 2, 2, [], 0, 0],
    597: [2, -2201857, 14, 2, 2, [], 0, 0],
    598: [2, -2201857, 16, 2, 2, [], 0, 0],
    599: [2, -101058049, 1, 2, 2, [], 0, 0],
    6: [2, -1497178369, 2, 2, 2, [], 0, 0],
    60: [5, "1", 14, 255, 16, -1],
    600: [2, -101058049, 1, 2, 2, [], 0, 0],
    601: [2, -101058049, 4, 2, 2, [], 0, 0],
    602: [2, -101058049, 6, 2, 2, [], 0, 0],
    603: [2, -101058049, 10, 2, 2, [], 0, 0],
    604: [2, -101058049, 10, 2, 2, [], 0, 0],
    605: [2, -16928257, 1, 2, 2, [], 0, 0],
    606: [2, -16928257, 1, 2, 2, [], 0, 0],
    607: [2, -16928257, 2, 2, 2, [], 0, 0],
    608: [2, -16928257, 2, 2, 2, [], 0, 0],
    609: [2, -16928257, 2, 2, 2, [], 0, 0],
    61: [5, "1", 11, 255, 16, -1],
    610: [2, -16928257, 2, 2, 2, [], 0, 0],
    611: [2, -16928257, 5, 2, 2, [], 0, 0],
    612: [2, -16928257, 8, 2, 2, [], 0, 0],
    613: [2, -16928257, 10, 2, 2, [], 0, 0],
    614: [2, -16928257, 1, 2, 2, [], 0, 0],
    615: [2, -16928257, 1, 2, 2, [], 0, 0],
    616: [2, -16928257, 2, 2, 2, [], 0, 0],
    617: [2, -16928257, 2, 2, 2, [], 0, 0],
    618: [2, -16928257, 2, 2, 2, [], 0, 0],
    619: [2, -16928257, 3, 2, 2, [], 0, 0],
    62: [5, "1", 12, 255, 16, -1],
    620: [2, -16928257, 4, 2, 2, [], 0, 0],
    621: [2, -16928257, 6, 2, 2, [], 0, 0],
    622: [2, -16928257, 10, 2, 2, [], 0, 0],
    623: [2, -559873, 1, 2, 2, [], 0, 0],
    624: [2, -559873, 1, 2, 2, [], 0, 0],
    625: [2, -559873, 1, 2, 2, [], 0, 0],
    626: [2, -559873, 1, 2, 2, [], 0, 0],
    627: [2, -559873, 2, 2, 2, [], 0, 0],
    628: [2, -559873, 6, 2, 2, [], 0, 0],
    629: [2, -559873, 8, 2, 2, [], 0, 0],
    63: [5, "1", 13, 255, 16, -1],
    630: [2, -559873, 10, 2, 2, [], 0, 0],
    631: [2, -559873, 12, 2, 2, [], 0, 0],
    632: [2, -2201857, 1, 2, 2, [], 0, 0],
    633: [2, -2201857, 1, 2, 2, [], 0, 0],
    634: [2, -2201857, 1, 2, 2, [], 0, 0],
    635: [2, -2201857, 2, 2, 2, [], 0, 0],
    636: [2, -2201857, 2, 2, 2, [], 0, 0],
    637: [2, -2201857, 3, 2, 2, [], 0, 0],
    638: [2, -2201857, 8, 2, 2, [], 0, 0],
    639: [2, -2201857, 10, 2, 2, [], 0, 0],
    64: [5, "1", 14, 255, 16, -1],
    640: [2, -2201857, 12, 2, 2, [], 0, 0],
    641: [2, -2201857, 14, 2, 2, [], 0, 0],
    642: [2, -2201857, 14, 2, 2, [], 0, 0],
    643: [2, -101058049, 1, 2, 2, [], 0, 0],
    644: [2, -101058049, 2, 2, 2, [], 0, 0],
    645: [2, -101058049, 3, 2, 2, [], 0, 0],
    646: [2, -101058049, 5, 2, 2, [], 0, 0],
    647: [2, -101058049, 7, 2, 2, [], 0, 0],
    648: [2, -16928257, 1, 2, 2, [], 0, 0],
    649: [2, -16928257, 1, 2, 2, [], 0, 0],
    65: [5, "1", 15, 235802367, 16, -1],
    650: [2, -16928257, 1, 2, 2, [], 0, 0],
    651: [2, -16928257, 2, 2, 2, [], 0, 0],
    652: [2, -16928257, 3, 2, 2, [], 0, 0],
    653: [2, -16928257, 5, 2, 2, [], 0, 0],
    654: [2, -16928257, 7, 2, 2, [], 0, 0],
    655: [2, -16928257, 1, 2, 2, [], 0, 0],
    656: [2, -16928257, 1, 2, 2, [], 0, 0],
    657: [2, -16928257, 1, 2, 2, [], 0, 0],
    658: [2, -16928257, 3, 2, 2, [], 0, 0],
    659: [2, -16928257, 4, 2, 2, [], 0, 0],
    66: [5, "1", 15, 235802367, 16, -1],
    660: [2, -16928257, 6, 2, 2, [], 0, 0],
    661: [2, -16928257, 8, 2, 2, [], 0, 0],
    662: [2, -559873, 1, 2, 2, [], 0, 0],
    663: [2, -559873, 1, 2, 2, [], 0, 0],
    664: [2, -559873, 1, 2, 2, [], 0, 0],
    665: [2, -559873, 2, 2, 2, [], 0, 0],
    666: [2, -559873, 3, 2, 2, [], 0, 0],
    667: [2, -559873, 4, 2, 2, [], 0, 0],
    668: [2, -559873, 6, 2, 2, [], 0, 0],
    669: [2, -559873, 8, 2, 2, [], 0, 0],
    67: [5, "1", 11, 1280068863, 16, -1],
    670: [2, -2201857, 1, 2, 2, [], 0, 0],
    671: [2, -2201857, 1, 2, 2, [], 0, 0],
    672: [2, -2201857, 2, 2, 2, [], 0, 0],
    673: [2, -2201857, 4, 2, 2, [], 0, 0],
    674: [2, -2201857, 6, 2, 2, [], 0, 0],
    675: [2, -2201857, 8, 2, 2, [], 0, 0],
    676: [2, -20748801, 1, 2, 2, [], 0, 0],
    677: [2, -20748801, 1, 2, 2, [], 0, 0],
    678: [2, -20748801, 1, 2, 2, [], 0, 0],
    679: [2, -20748801, 2, 2, 2, [], 0, 0],
    68: [5, "1", 11, 858993663, 16, -1],
    680: [2, -20748801, 4, 2, 2, [], 0, 0],
    681: [2, -20748801, 6, 2, 2, [], 0, 0],
    682: [2, -20748801, 8, 2, 2, [], 0, 0],
    683: [2, -2201857, 1, 2, 2, [], 0, 0],
    684: [2, -2201857, 1, 2, 2, [], 0, 0],
    685: [2, -2201857, 1, 2, 2, [], 0, 0],
    686: [2, -2201857, 2, 2, 2, [], 0, 0],
    687: [2, -2201857, 4, 2, 2, [], 0, 0],
    688: [2, -2201857, 6, 2, 2, [], 0, 0],
    689: [2, -2201857, 8, 2, 2, [], 0, 0],
    69: [5, "1", 12, 858993663, 16, -1],
    690: [2, -101058049, 1, 2, 2, [], 0, 0],
    691: [2, -101058049, 2, 2, 2, [], 0, 0],
    692: [2, -101058049, 3, 2, 2, [], 0, 0],
    693: [2, -101058049, 5, 2, 2, [], 0, 0],
    694: [2, -101058049, 7, 2, 2, [], 0, 0],
    695: [2, -16928257, 1, 2, 2, [], 0, 0],
    696: [2, -16928257, 1, 2, 2, [], 0, 0],
    697: [2, -16928257, 1, 2, 2, [], 0, 0],
    698: [2, -16928257, 1, 2, 2, [], 0, 0],
    699: [2, -16928257, 3, 2, 2, [], 0, 0],
    7: [2, -1280068609, 1, 2, 2, [], 0, 0],
    70: [5, "1", 13, 255, 16, -1],
    700: [2, -16928257, 4, 2, 2, [], 0, 0],
    701: [2, -16928257, 8, 2, 2, [], 0, 0],
    702: [2, -16928257, 1, 2, 2, [], 0, 0],
    703: [2, -16928257, 1, 2, 2, [], 0, 0],
    704: [2, -16928257, 1, 2, 2, [], 0, 0],
    705: [2, -16928257, 1, 2, 2, [], 0, 0],
    706: [2, -16928257, 3, 2, 2, [], 0, 0],
    707: [2, -16928257, 4, 2, 2, [], 0, 0],
    708: [2, -16928257, 6, 2, 2, [], 0, 0],
    709: [2, -16928257, 8, 2, 2, [], 0, 0],
    71: [2, -303174145, 1, 2, 2, [], 0, 0],
    710: [2, -16928257, 8, 2, 2, [], 0, 0],
    711: [2, -559873, 1, 2, 2, [], 0, 0],
    712: [2, -559873, 1, 2, 2, [], 0, 0],
    713: [2, -559873, 1, 2, 2, [], 0, 0],
    714: [2, -559873, 1, 2, 2, [], 0, 0],
    715: [2, -559873, 2, 2, 2, [], 0, 0],
    716: [2, -559873, 4, 2, 2, [], 0, 0],
    717: [2, -559873, 6, 2, 2, [], 0, 0],
    718: [2, -2201857, 1, 2, 2, [], 0, 0],
    719: [2, -2201857, 1, 2, 2, [], 0, 0],
    72: [2, -454761217, 3, 2, 2, [], 0, 0],
    720: [2, -2201857, 1, 2, 2, [], 0, 0],
    721: [2, -2201857, 1, 2, 2, [], 0, 0],
    722: [2, -2201857, 2, 2, 2, [], 0, 0],
    723: [2, -2201857, 4, 2, 2, [], 0, 0],
    724: [2, -2201857, 5, 2, 2, [], 0, 0],
    725: [2, -2201857, 7, 2, 2, [], 0, 0],
    726: [2, -2201857, 7, 2, 2, [], 0, 0],
    727: [2, -303174145, 1, 0, 2, [], 1, 0],
    728: [2, -454761217, 3, 0, 2, [], 1, 0],
    729: [2, -454761217, 3, 0, 2, [], 1, 0],
    73: [2, -454761217, 3, 2, 2, [], 0, 0],
    730: [2, -758265345, 4, 0, 2, [], 1, 0],
    731: [2, -758265345, 6, 0, 2, [], 1, 0],
    732: [2, -758265345, 8, 0, 2, [], 1, 0],
    733: [2, -455423489, 3, 0, 2, [], 1, 0],
    734: [2, -455423489, 3, 0, 2, [], 1, 0],
    735: [2, -455423489, 3, 0, 2, [], 1, 0],
    736: [2, -455423489, 3, 0, 2, [], 1, 0],
    737: [2, -843149313, 3, 0, 2, [], 1, 0],
    738: [2, -843149313, 4, 0, 2, [], 1, 0],
    739: [2, -843149313, 5, 0, 2, [], 1, 0],
    74: [2, -758265345, 4, 2, 2, [], 0, 0],
    740: [2, -843149313, 7, 0, 2, [], 1, 0],
    741: [2, -843149313, 9, 0, 2, [], 1, 0],
    742: [2, -455423489, 3, 0, 2, [], 1, 0],
    743: [2, -455423489, 3, 0, 2, [], 1, 0],
    744: [2, -455423489, 3, 0, 2, [], 1, 0],
    745: [2, -455423489, 3, 0, 2, [], 1, 0],
    746: [2, -843149313, 3, 0, 2, [], 1, 0],
    747: [2, -843149313, 4, 0, 2, [], 1, 0],
    748: [2, -843149313, 5, 0, 2, [], 1, 0],
    749: [2, -843149313, 7, 0, 2, [], 1, 0],
    75: [2, -758265345, 6, 2, 2, [], 0, 0],
    750: [2, -843149313, 9, 0, 2, [], 1, 0],
    751: [2, -237677057, 3, 0, 2, [], 1, 0],
    752: [2, -237677057, 3, 0, 2, [], 1, 0],
    753: [2, -237677057, 3, 0, 2, [], 1, 0],
    754: [2, -237677057, 3, 0, 2, [], 1, 0],
    755: [2, -237677057, 3, 0, 2, [], 1, 0],
    756: [2, -237677057, 3, 0, 2, [], 1, 0],
    757: [2, -237677057, 5, 0, 2, [], 1, 0],
    758: [2, -237677057, 6, 0, 2, [], 1, 0],
    759: [2, -237677057, 8, 0, 2, [], 1, 0],
    76: [2, -758265345, 8, 2, 2, [], 0, 0],
    760: [2, -237677057, 10, 0, 2, [], 1, 0],
    761: [2, -559393793, 3, 0, 2, [], 1, 0],
    762: [2, -559393793, 3, 0, 2, [], 1, 0],
    763: [2, -559393793, 3, 0, 2, [], 1, 0],
    764: [2, -559393793, 3, 0, 2, [], 1, 0],
    765: [2, -559393793, 4, 0, 2, [], 1, 0],
    766: [2, -559393793, 5, 0, 2, [], 1, 0],
    767: [2, -559393793, 6, 0, 2, [], 1, 0],
    768: [2, -559393793, 8, 0, 2, [], 1, 0],
    769: [2, -559393793, 10, 0, 2, [], 1, 0],
    77: [2, -455423489, 3, 2, 2, [], 0, 0],
    770: [2, -593543425, 3, 0, 2, [], 1, 0],
    771: [2, -593543425, 3, 0, 2, [], 1, 0],
    772: [2, -593543425, 3, 0, 2, [], 1, 0],
    773: [2, -593543425, 3, 0, 2, [], 1, 0],
    774: [2, -593543425, 4, 0, 2, [], 1, 0],
    775: [2, -593543425, 5, 0, 2, [], 1, 0],
    776: [2, -593543425, 6, 0, 2, [], 1, 0],
    777: [2, -593543425, 8, 0, 2, [], 1, 0],
    778: [2, -593543425, 10, 0, 2, [], 1, 0],
    779: [2, -559393793, 3, 0, 2, [], 1, 0],
    78: [2, -455423489, 3, 2, 2, [], 0, 0],
    780: [2, -559393793, 3, 0, 2, [], 1, 0],
    781: [2, -559393793, 3, 0, 2, [], 1, 0],
    782: [2, -559393793, 3, 0, 2, [], 1, 0],
    783: [2, -559393793, 4, 0, 2, [], 1, 0],
    784: [2, -559393793, 5, 0, 2, [], 1, 0],
    785: [2, -559393793, 6, 0, 2, [], 1, 0],
    786: [2, -559393793, 8, 0, 2, [], 1, 0],
    787: [2, -559393793, 10, 0, 2, [], 1, 0],
    788: [2, -303174145, 1, 0, 2, [], 1, 0],
    789: [2, -454761217, 1, 0, 2, [], 1, 0],
    79: [2, -455423489, 3, 2, 2, [], 0, 0],
    790: [2, -454761217, 3, 0, 2, [], 1, 0],
    791: [2, -758265345, 4, 0, 2, [1, 6], 1, 0],
    792: [2, -758265345, 5, 0, 2, [1, 6], 1, 0],
    793: [2, -758265345, 7, 0, 2, [1, 10], 1, 0],
    794: [2, -303174145, 1, 0, 2, [], 1, 0],
    795: [2, -454761217, 4, 0, 2, [], 1, 0],
    796: [2, -454761217, 5, 0, 2, [], 1, 0],
    797: [2, -758265345, 6, 0, 2, [], 1, 0],
    798: [2, -758265345, 8, 0, 2, [], 1, 0],
    799: [2, -758265345, 10, 0, 2, [], 1, 0],
    8: [2, -1280068609, 1, 2, 2, [], 0, 0],
    80: [2, -455423489, 3, 2, 2, [], 0, 0],
    800: [2, -455423489, 3, 0, 2, [], 1, 0],
    801: [2, -455423489, 3, 0, 2, [], 1, 0],
    802: [2, -455423489, 4, 0, 2, [], 1, 0],
    803: [2, -455423489, 4, 0, 2, [], 1, 0],
    804: [2, -843149313, 6, 0, 2, [], 1, 0],
    805: [2, -843149313, 6, 0, 2, [], 1, 0],
    806: [2, -843149313, 8, 0, 2, [], 1, 0],
    807: [2, -843149313, 10, 0, 2, [], 1, 0],
    808: [2, -843149313, 14, 0, 2, [], 1, 0],
    809: [2, -455423489, 3, 0, 2, [], 1, 0],
    81: [2, -843149313, 3, 2, 2, [], 0, 0],
    810: [2, -455423489, 3, 0, 2, [], 1, 0],
    811: [2, -455423489, 4, 0, 2, [], 1, 0],
    812: [2, -455423489, 4, 0, 2, [], 1, 0],
    813: [2, -843149313, 4, 0, 2, [], 1, 0],
    814: [2, -843149313, 6, 0, 2, [], 1, 0],
    815: [2, -843149313, 8, 0, 2, [], 1, 0],
    816: [2, -843149313, 10, 0, 2, [], 1, 0],
    817: [2, -843149313, 14, 0, 2, [], 1, 0],
    818: [2, -237677057, 3, 0, 2, [], 1, 0],
    819: [2, -237677057, 3, 0, 2, [], 1, 0],
    82: [2, -843149313, 5, 2, 2, [], 0, 0],
    820: [2, -237677057, 3, 0, 2, [], 1, 0],
    821: [2, -237677057, 4, 0, 2, [], 1, 0],
    822: [2, -237677057, 5, 0, 2, [], 1, 0],
    823: [2, -237677057, 6, 0, 2, [], 1, 0],
    824: [2, -237677057, 8, 0, 2, [], 1, 0],
    825: [2, -237677057, 10, 0, 2, [], 1, 0],
    826: [2, -237677057, 12, 0, 2, [], 1, 0],
    827: [2, -237677057, 16, 0, 2, [], 1, 0],
    828: [2, -559393793, 3, 0, 2, [], 1, 0],
    829: [2, -559393793, 3, 0, 2, [], 1, 0],
    83: [2, -843149313, 7, 2, 2, [], 0, 0],
    830: [2, -559393793, 4, 0, 2, [], 1, 0],
    831: [2, -559393793, 5, 0, 2, [], 1, 0],
    832: [2, -559393793, 6, 0, 2, [], 1, 0],
    833: [2, -559393793, 8, 0, 2, [], 1, 0],
    834: [2, -559393793, 10, 0, 2, [], 1, 0],
    835: [2, -559393793, 12, 0, 2, [], 1, 0],
    836: [2, -559393793, 14, 0, 2, [], 1, 0],
    837: [2, -559393793, 18, 0, 2, [], 1, 0],
    838: [2, -559393793, 1, 0, 2, [], 1, 0],
    839: [2, -559393793, 4, 0, 2, [], 1, 0],
    84: [2, -843149313, 9, 2, 2, [], 0, 0],
    840: [2, -559393793, 5, 0, 2, [], 1, 0],
    841: [2, -559393793, 6, 0, 2, [], 1, 0],
    842: [2, -559393793, 8, 0, 2, [], 1, 0],
    843: [2, -559393793, 10, 0, 2, [], 1, 0],
    844: [2, -237677057, 1, 0, 2, [], 1, 0],
    845: [2, -237677057, 4, 0, 2, [], 1, 0],
    846: [2, -237677057, 5, 0, 2, [], 1, 0],
    847: [2, -237677057, 6, 0, 2, [], 1, 0],
    848: [2, -237677057, 8, 0, 2, [], 1, 0],
    849: [2, -237677057, 10, 0, 2, [], 1, 0],
    85: [2, -455423489, 3, 2, 2, [], 0, 0],
    850: [2, -455423489, 1, 0, 2, [], 1, 0],
    851: [2, -843149313, 4, 0, 2, [], 1, 0],
    852: [2, -843149313, 5, 0, 2, [], 1, 0],
    853: [2, -843149313, 6, 0, 2, [], 1, 0],
    854: [2, -843149313, 8, 0, 2, [], 1, 0],
    855: [2, -843149313, 10, 0, 2, [], 1, 0],
    856: [2, -455423489, 1, 0, 2, [], 1, 0],
    857: [2, -843149313, 4, 0, 2, [], 1, 0],
    858: [2, -843149313, 5, 0, 2, [], 1, 0],
    859: [2, -843149313, 6, 0, 2, [], 1, 0],
    86: [2, -455423489, 3, 2, 2, [], 0, 0],
    860: [2, -843149313, 8, 0, 2, [], 1, 0],
    861: [2, -843149313, 10, 0, 2, [], 1, 0],
    862: [2, -303174145, 1, 0, 2, [], 1, 0],
    863: [2, -454761217, 4, 0, 2, [], 1, 0],
    864: [2, -454761217, 5, 0, 2, [], 1, 0],
    865: [2, -758265345, 6, 0, 2, [], 1, 0],
    866: [2, -758265345, 8, 0, 2, [], 1, 0],
    867: [2, -758265345, 10, 0, 2, [], 1, 0],
    868: [2, -559393793, 1, 0, 2, [], 1, 0],
    869: [2, -559393793, 4, 0, 2, [], 1, 0],
    87: [2, -455423489, 3, 2, 2, [], 0, 0],
    870: [2, -559393793, 5, 0, 2, [], 1, 0],
    871: [2, -559393793, 6, 0, 2, [], 1, 0],
    872: [2, -559393793, 8, 0, 2, [], 1, 0],
    873: [2, -559393793, 10, 0, 2, [], 1, 0],
    874: [2, -237677057, 1, 0, 2, [], 1, 0],
    875: [2, -237677057, 4, 0, 2, [], 1, 0],
    876: [2, -237677057, 5, 0, 2, [], 1, 0],
    877: [2, -237677057, 6, 0, 2, [], 1, 0],
    878: [2, -237677057, 8, 0, 2, [], 1, 0],
    879: [2, -237677057, 10, 0, 2, [], 1, 0],
    88: [2, -455423489, 3, 2, 2, [], 0, 0],
    880: [2, -455423489, 1, 0, 2, [], 1, 0],
    881: [2, -843149313, 4, 0, 2, [], 1, 0],
    882: [2, -843149313, 5, 0, 2, [], 1, 0],
    883: [2, -843149313, 6, 0, 2, [], 1, 0],
    884: [2, -843149313, 8, 0, 2, [], 1, 0],
    885: [2, -843149313, 10, 0, 2, [], 1, 0],
    886: [2, -455423489, 1, 0, 2, [], 1, 0],
    887: [2, -843149313, 4, 0, 2, [], 1, 0],
    888: [2, -843149313, 5, 0, 2, [], 1, 0],
    889: [2, -843149313, 6, 0, 2, [], 1, 0],
    89: [2, -843149313, 3, 2, 2, [], 0, 0],
    890: [2, -843149313, 8, 0, 2, [], 1, 0],
    891: [2, -843149313, 10, 0, 2, [], 1, 0],
    892: [2, -303174145, 1, 0, 2, [], 1, 0],
    893: [2, -454761217, 4, 0, 2, [], 1, 0],
    894: [2, -454761217, 5, 0, 2, [], 1, 0],
    895: [2, -758265345, 6, 0, 2, [], 1, 0],
    896: [2, -758265345, 8, 0, 2, [], 1, 0],
    897: [2, -758265345, 10, 0, 2, [], 1, 0],
    898: [2, -559393793, 4, 0, 2, [], 1, 0],
    899: [2, -559393793, 4, 0, 2, [], 1, 0],
    9: [2, -1280068609, 1, 2, 2, [4, 3], 1, 0],
    90: [2, -843149313, 5, 2, 2, [], 0, 0],
    900: [2, -559393793, 6, 0, 2, [], 1, 0],
    901: [2, -559393793, 7, 0, 2, [], 1, 0],
    902: [2, -559393793, 8, 0, 2, [], 1, 0],
    903: [2, -559393793, 9, 0, 2, [], 1, 0],
    904: [2, -559393793, 10, 0, 2, [], 1, 0],
    905: [2, -559393793, 15, 0, 2, [], 1, 0],
    906: [2, -559393793, 17, 0, 2, [], 1, 0],
    907: [2, -559393793, 19, 0, 2, [], 1, 0],
    908: [2, -593543425, 4, 0, 2, [], 1, 0],
    909: [2, -593543425, 4, 0, 2, [], 1, 0],
    91: [2, -843149313, 7, 2, 2, [], 0, 0],
    910: [2, -593543425, 5, 0, 2, [], 1, 0],
    911: [2, -593543425, 6, 0, 2, [], 1, 0],
    912: [2, -593543425, 7, 0, 2, [], 1, 0],
    913: [2, -593543425, 8, 0, 2, [], 1, 0],
    914: [2, -593543425, 9, 0, 2, [], 1, 0],
    915: [2, -593543425, 14, 0, 2, [], 1, 0],
    916: [2, -593543425, 16, 0, 2, [], 1, 0],
    917: [2, -593543425, 20, 0, 2, [], 1, 0],
    918: [2, -559393793, 3, 0, 2, [], 1, 0],
    919: [2, -559393793, 4, 0, 2, [], 1, 0],
    92: [2, -843149313, 9, 2, 2, [], 0, 0],
    920: [2, -559393793, 4, 0, 2, [], 1, 0],
    921: [2, -559393793, 5, 0, 2, [], 1, 0],
    922: [2, -559393793, 6, 0, 2, [], 1, 0],
    923: [2, -559393793, 7, 0, 2, [], 1, 0],
    924: [2, -559393793, 8, 0, 2, [], 1, 0],
    925: [2, -559393793, 12, 0, 2, [], 1, 0],
    926: [2, -559393793, 16, 0, 2, [], 1, 0],
    927: [2, -559393793, 18, 0, 2, [], 1, 0],
    928: [2, -303174145, 1, 0, 2, [], 1, 0],
    929: [2, -454761217, 1, 0, 2, [], 1, 0],
    93: [2, -237677057, 3, 0, 2, [], 0, 0],
    930: [2, -454761217, 4, 0, 2, [], 1, 0],
    931: [2, -758265345, 5, 0, 2, [1, 6], 1, 0],
    932: [2, -758265345, 6, 0, 2, [1, 6], 1, 0],
    933: [2, -758265345, 7, 0, 2, [1, 10], 1, 0],
    934: [2, -303174145, 1, 0, 2, [], 1, 0],
    935: [2, -454761217, 4, 0, 2, [], 1, 0],
    936: [2, -454761217, 5, 0, 2, [], 1, 0],
    937: [2, -758265345, 6, 0, 2, [], 1, 0],
    938: [2, -758265345, 8, 0, 2, [], 1, 0],
    939: [2, -758265345, 10, 0, 2, [], 1, 0],
    94: [2, -237677057, 3, 0, 2, [], 0, 0],
    940: [2, -455423489, 3, 0, 2, [], 1, 0],
    941: [2, -455423489, 3, 0, 2, [], 1, 0],
    942: [2, -455423489, 4, 0, 2, [], 1, 0],
    943: [2, -455423489, 6, 0, 2, [], 1, 0],
    944: [2, -843149313, 6, 0, 2, [], 1, 0],
    945: [2, -843149313, 6, 0, 2, [], 1, 0],
    946: [2, -843149313, 8, 0, 2, [], 1, 0],
    947: [2, -843149313, 10, 0, 2, [], 1, 0],
    948: [2, -843149313, 14, 0, 2, [], 1, 0],
    949: [2, -455423489, 3, 0, 2, [], 1, 0],
    95: [2, -237677057, 3, 0, 2, [], 0, 0],
    950: [2, -455423489, 3, 0, 2, [], 1, 0],
    951: [2, -455423489, 4, 0, 2, [], 1, 0],
    952: [2, -455423489, 4, 0, 2, [], 1, 0],
    953: [2, -843149313, 4, 0, 2, [], 1, 0],
    954: [2, -843149313, 6, 0, 2, [], 1, 0],
    955: [2, -843149313, 8, 0, 2, [], 1, 0],
    956: [2, -843149313, 10, 0, 2, [], 1, 0],
    957: [2, -843149313, 14, 0, 2, [], 1, 0],
    958: [2, -237677057, 3, 0, 2, [], 1, 0],
    959: [2, -237677057, 3, 0, 2, [], 1, 0],
    96: [2, -237677057, 3, 0, 2, [], 0, 0],
    960: [2, -237677057, 4, 0, 2, [], 1, 0],
    961: [2, -237677057, 4, 0, 2, [], 1, 0],
    962: [2, -237677057, 6, 0, 2, [], 1, 0],
    963: [2, -237677057, 6, 0, 2, [], 1, 0],
    964: [2, -237677057, 8, 0, 2, [], 1, 0],
    965: [2, -237677057, 12, 0, 2, [], 1, 0],
    966: [2, -237677057, 14, 0, 2, [], 1, 0],
    967: [2, -237677057, 18, 0, 2, [], 1, 0],
    968: [2, -559393793, 3, 0, 2, [], 1, 0],
    969: [2, -559393793, 3, 0, 2, [], 1, 0],
    97: [2, -237677057, 3, 0, 2, [], 0, 0],
    970: [2, -559393793, 4, 0, 2, [], 1, 0],
    971: [2, -559393793, 5, 0, 2, [], 1, 0],
    972: [2, -559393793, 6, 0, 2, [], 1, 0],
    973: [2, -559393793, 7, 0, 2, [], 1, 0],
    974: [2, -559393793, 8, 0, 2, [], 1, 0],
    975: [2, -559393793, 12, 0, 2, [], 1, 0],
    976: [2, -559393793, 14, 0, 2, [], 1, 0],
    977: [2, -559393793, 18, 0, 2, [], 1, 0],
    978: [2, -303174145, 1, 0, 2, [], 1, 0],
    979: [2, -454761217, 3, 0, 2, [], 1, 0],
    98: [2, -237677057, 3, 2, 2, [], 0, 0],
    980: [2, -454761217, 3, 0, 2, [], 1, 0],
    981: [2, -758265345, 6, 0, 2, [], 1, 0],
    982: [2, -758265345, 8, 0, 2, [], 1, 0],
    983: [2, -758265345, 12, 0, 2, [], 1, 0],
    984: [2, -455423489, 3, 0, 2, [], 1, 0],
    985: [2, -455423489, 3, 0, 2, [], 1, 0],
    986: [2, -455423489, 4, 0, 2, [], 1, 0],
    987: [2, -455423489, 4, 0, 2, [], 1, 0],
    988: [2, -843149313, 4, 0, 2, [], 1, 0],
    989: [2, -843149313, 4, 0, 2, [], 1, 0],
    99: [2, -237677057, 6, 2, 2, [], 0, 0],
    990: [2, -843149313, 7, 0, 2, [], 1, 0],
    991: [2, -843149313, 10, 0, 2, [], 1, 0],
    992: [2, -843149313, 12, 0, 2, [], 1, 0],
    993: [2, -455423489, 3, 0, 2, [], 1, 0],
    994: [2, -455423489, 3, 0, 2, [], 1, 0],
    995: [2, -455423489, 4, 0, 2, [], 1, 0],
    996: [2, -455423489, 4, 0, 2, [], 1, 0],
    997: [2, -843149313, 4, 0, 2, [], 1, 0],
    998: [2, -843149313, 5, 0, 2, [], 1, 0],
    999: [2, -843149313, 6, 0, 2, [], 1, 0]
};
var Ad;
window.ZJ = Ad = {
    jG: function(a, b, c, d, e, f) {
        var g = f && f.Ca ? f.Ca : 5,
            f = f && f.fillStyle ? f.fillStyle : "#817FD1",
            b = b - 2,
            c = c - 3,
            d = d + 4,
            e = e + 4;
        a.save();
        a.fillStyle = f;
        a.beginPath();
        a.moveTo(b + g, c);
        a.lineTo(b + d - g, c);
        a.arc(b + d - g, c + g, g, 3 * Math.PI / 2, 2 * Math.PI, o);
        a.lineTo(b + d, c + e - g);
        a.arc(b + d - g, c + e - g, g, 0, Math.PI / 2, o);
        a.lineTo(b + g, c + e);
        a.arc(b + g, c + e - g, g, Math.PI / 2, Math.PI, o);
        a.lineTo(b, c + g);
        a.arc(b + g, c + g, g, Math.PI, 3 * Math.PI / 2, o);
        a.fill();
        a.restore()
    },
    cG: function(a, b, c, d, e, f, g, j, k) {
        var l = b.length;
        if (6 > l) return -1;
        d = ["left", "right", "top", "bottom"][d];
        e = e * Math.PI / 180;
        a.strokeStyle = f;
        a.lineWidth = k;
        for (var m = 0; m < l - 2; m += 2) this.Kv(a, [b[m], b[m + 1]], [b[m + 2], b[m + 3]], c, d, e, g, k);
        this.Kv(a, [b[l - 2], b[l - 1]], [b[0], b[1]], c, d, e, g, k);
        this.mC(a, l, d, c, e, b, f, k);
        a.fillStyle = j;
        a.stroke();
        a.fill()
    },
    Kv: function(a, b, c, d, e, f, g, j) {
        a.beginPath();
        a.strokeStyle = g;
        a.moveTo(b[0], b[1]);
        a.lineTo(c[0], c[1]);
        var k = 0,
            l = 0,
            m = 0,
            p = 0;
        switch (e) {
            case "left":
                k = c[0] - d * Math.sin(f);
                l = c[1] - d * Math.cos(f);
                m = b[0] - d * Math.sin(f);
                p = b[1] - d * Math.cos(f);
                break;
            case "right":
                k = c[0] + d * Math.sin(f);
                l = c[1] - d * Math.cos(f);
                m = b[0] + d * Math.sin(f);
                p = b[1] - d * Math.cos(f);
                break;
            case "top":
                k = c[0];
                l = c[1] - d;
                m = b[0];
                p = b[1] - d;
                break;
            default:
                k = c[0], l = c[1] + d, m = b[0], p = b[1] + d
        }
        a.lineTo(k, l);
        a.lineTo(m, p);
        a.closePath();
        0 != j && a.stroke();
        a.fillStyle = g;
        a.fill()
    },
    mC: function(a, b, c, d, e, f, g, j) {
        var k = 0,
            l = 0;
        switch (c) {
            case "left":
                k = 0 - d * Math.sin(e);
                l = d * Math.cos(e);
                break;
            case "right":
                k = d * Math.sin(e);
                l = d * Math.cos(e);
                break;
            case "top":
                l = d;
                break;
            default:
                l = 0 - d
        }
        a.beginPath();
        a.strokeStyle = g;
        a.lineWidth = j;
        a.moveTo(f[0] + k, f[1] - l);
        for (c = 2; c < b; c += 2) a.lineTo(f[c] + k, f[c + 1] - l);
        a.closePath()
    },
    Vr: function(a, b, c) {
        var c = 3.5 * Math.pow(c, 0.8),
            d = b[1] - a[1],
            e = b[0] - a[0],
            f = 1.8 * Math.sqrt(e * e + d * d),
            a = b[0] + e / f * c,
            f = b[1] + d / f * c,
            d = Math.atan2(d, e) + Math.PI,
            e = [-1, -1],
            g = [-1, -1];
        e[0] = a + c * Math.cos(d - 0.6);
        e[1] = f + c * Math.sin(d - 0.6);
        g[0] = a + c * Math.cos(d + 0.6);
        g[1] = f + c * Math.sin(d + 0.6);
        return [e, g, b]
    },
    VF: function(a, b, c) {
        var d = b.length;
        if (2 < d) {
            var e = 0,
                f = 0;
            a.beginPath();
            a.moveTo(b[0], b[1]);
            switch (d) {
                case 4:
                    c = this.Vr([b[0], b[1]], [b[2], b[3]], c);
                    e = b[2];
                    f = b[3];
                    a.lineTo(e, f);
                    break;
                case 6:
                    var c = this.Vr([b[2], b[3]], [b[4], b[5]], c),
                        d = (b[0] + b[2]) / 2,
                        g = (b[1] + b[3]) / 2,
                        j = (b[2] + b[4]) / 2,
                        k = (b[3] + b[5]) / 2,
                        e = b[4],
                        f = b[5];
                    a.bezierCurveTo(d, g, j, k, e, f);
                    break;
                default:
                    c = this.Vr([b[2], b[3]], [b[d - 2], b[d - 1]], c), e = b[d - 2], f = b[d - 1], a.bezierCurveTo(b[2], b[3], b[4], b[5], e, f)
            }
            a.stroke();
            b = c[0];
            d = c[1];
            c = c[2];
            a.beginPath();
            a.moveTo(e, f);
            a.lineTo(b[0], b[1]);
            a.lineTo(d[0], d[1]);
            a.lineTo(c[0], c[1]);
            a.closePath();
            a.fill()
        }
    },
    YF: function(a, b, c, d, e, f, g, j, k) {
        for (var l = b.length, f = 0 == parseInt(g / c) % 2 ? f : f == j ? k : j, g = (c - g % c) % c, m = 0, p = 0; p < l - 2; p += 2) var u = b[p],
        v = b[p + 1], w = b[p + 2], y = b[p + 3], m = m + Math.sqrt((w - u) * (w - u) + (y - v) * (y - v));
        if (!(m < g)) {
            a.beginPath();
            a.lineWidth = d;
            a.strokeStyle = j;
            a.lineJoin = "round";
            a.moveTo(b[0], b[1]);
            for (d = 2; d < l; d += 2) a.lineTo(b[d], b[d + 1]);
            a.stroke();
            for (var m = [], E = [], d = 0; d < l - 2; d += 2) {
                var u = b[d],
                    v = b[d + 1],
                    w = b[d + 2],
                    y = b[d + 3],
                    x = Math.sqrt((w - u) * (w - u) + (y - v) * (y - v));
                if (g <= x) {
                    var I = f == j ? k : j,
                        D = 0 == g ? f : I,
                        M = parseInt((x - g) / c),
                        I = (x - c * M - g).toFixed(1),
                        ca = c * (w - u) / x,
                        ua = c * (y - v) / x,
                        vb = D == k ? 0 : 1,
                        ib = u + g * (w - u) / x,
                        x = v + g * (y - v) / x;
                    a.lineJoin = "round";
                    a.lineWidth = e;
                    if (0 != g && f == k) {
                        a.beginPath();
                        a.strokeStyle = f;
                        if (0 == m.length) a.moveTo(u, v);
                        else {
                            a.moveTo(m[0], E[0]);
                            for (p = 0; p < m.length; p++) a.lineTo(m[1], E[1]);
                            a.lineTo(u, v)
                        }
                        a.lineTo(ib, x);
                        a.stroke()
                    }
                    for (u = p = 0; u < M; u++) u % 2 == vb && (a.beginPath(), a.strokeStyle = k, g = ib + ca * u, v = x + ua * u, a.moveTo(g, v), a.lineTo(g + ca, v + ua), a.stroke());
                    v = 0 == M % 2 && D == k || 0 != M % 2 && D == j;
                    g = c - I;
                    m[p] = ib + ca * u;
                    E[p] = x + ua * u;
                    f = v ? k : j
                } else g -= x, m[++p] = w, E[++p] = y;
                d == l - 2 && 0 != I && (a.beginPath(), a.strokeStyle = f, a.moveTo(m, E), a.lineTo(w, y), a.stroke())
            }
        }
    },
    Wg: function(a) {
        a >>>= 0;
        return "rgba(" + (a >> 24 & 255) + "," + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) / 256 + ")"
    },
    DG: function(a) {
        return a & 2 ? "italic" : ""
    },
    CH: function(a) {
        return !!(a & 16)
    },
    AH: function(a) {
        return !!(a & 4)
    },
    ct: function(a) {
        return ["butt", "square", "round"][a]
    },
    dt: function(a) {
        return ["miter", "bevel", "round"][a]
    }
};
window.lB = VDL = function() {
    this.bh = o;
    this.Vy = ["http://or.map.bdimg.com:8080/"];
    this.MJ = ["http://or.map.bdimg.com:8080/gvd/?", "http://or0.map.bdimg.com:8080/gvd/?", "http://or1.map.bdimg.com:8080/gvd/?", "http://or2.map.bdimg.com:8080/gvd/?", "http://or3.map.bdimg.com:8080/gvd/?"];
    this.qb = n;
    this.Jl = {};
    this.map = n;
    this.Fd = this.Ml = 0;
    this.Ng = this.cg = n;
    this.ag = window.ag;
    this.qf = {
        dark: {
            backColor: "#2D2D2D",
            textColor: "#bfbfbf",
            iconUrl: "vector/dicons"
        },
        normal: {
            backColor: "#F3F1EC",
            textColor: "#c61b1b",
            iconUrl: "vector/nicons"
        },
        light: {
            backColor: "#EBF8FC",
            textColor: "#017fb4",
            iconUrl: "vector/licons"
        }
    };
    this.Ns = {};
    this.Gt = i;
    this.fi = n;
    this.xl = /.*GT-I9300.*Version\/\d+.*Safari\/\d+\.\d+$/ig.test(navigator.userAgent) || /baiduboxapp/ig.test(navigator.userAgent)
};
VDL.prototype = {
    vs: function(a, b, c) {
        this.Du = (new Date).getTime();
        var d = a.bg,
            e = a.poi;
        this.Gu = d.length;
        this.Ml = 0;
        this.Fd = d.length;
        this.lF();
        this.bh || (this.bh = i, this.map = b.map, this.qb = b, this.kd = this.map.F.devicePixelRatio, 0 < this.Fd && (this.Hb = parseInt(d[0][2].style.width)));
        this.map.Bb();
        this.Eu = 0;
        this.fu = c;
        b = this.map.la;
        this.kh = Math.pow(2, 18 - b);
        this.uh ? this.uh.length = 0 : this.uh = [];
        this.map.dispatchEvent(new L("onvectorbegin"));
        if (this.Gu <= e.length) var f = 0,
        g = this.Fd;
        else f = 0, g = e.length;
        for (; f < g; f++) d[f][2].xe = o, e[f][2].xe = o, d[f][2].Ak = (new Date).getTime(), e[f][2].Ak = (new Date).getTime(), this.au(d[f][0], d[f][1], d[f][2], b, e[f][2] || n, c, a.isZoomMap)
    },
    lF: function() {
        for (var a in this.Jl) delete this.Jl[a]
    },
    xs: function(a, b, c, d, e) {
        this.uh ? this.uh.length = 0 : this.uh = [];
        this.Du = (new Date).getTime();
        var d = this.map.la,
            f = this.map.Ga(),
            f = new F(f.lng, f.lat);
        this.fu = c;
        this.fi = e;
        for (var e = 0, g = a.length; e < g; e++) {
            b[e].Ak = (new Date).getTime();
            var j = a[e][0],
                k = a[e][1],
                l = "_" + parseInt(j + "" + k + "" + d).toString(36);
            "df" == c && this.Jl[l] ? (j = this.Jl[l], b[e].mf = j, this.Tg(b[e]), this.Fo(j, b[e], d, n, f, d)) : this.au(j, k, b[e], d, n, c)
        }
    },
    aG: function(a, b) {
        this.Du = (new Date).getTime();
        this.Ml = this.Eu = 0;
        this.Fd = a.length;
        this.bh || (this.bh = i, this.qb = b, this.map = b.map, this.kd = this.map.F.devicePixelRatio, 0 < this.Fd && (this.Hb = parseInt(a[0][2].style.width)));
        var c = this.map.la;
        this.kh = Math.pow(2, 18 - c);
        this.map.Bb();
        for (var d = 0, e = this.Fd; d < e; d++) {
            var f = a[d][2],
                g = a[d][0],
                j = a[d][1];
            f.Ak = (new Date).getTime();
            f.xe = o;
            this.au(g, j, f, c)
        }
    },
    au: function(a, b, c, d, e, f) {
        var g = this,
            j = g.MJ,
            k = (a + b) % j.length,
            l = "x=" + a + "&y=" + b + "&z=" + d,
            m = g.map.L.replace(/^TANGRAM_/, "") + parseInt(a + "" + b + "" + d).toString(36),
            b = "undefined" != typeof TVC ? TVC.PE.cM : {}, a = b.version ? b.version : "001",
            b = b.Ou ? b.Ou : "20130501",
            p = "";
        if (c && e)
            if (g.cg)
                if ("no" == g.cg) {
                    p = "&layers=&features=" + g.cg;
                    c.mf = n;
                    e.mf = n;
                    if (this.xl) {
                        var f = c.getContext("2d"),
                            u = e.getContext("2d");
                        f.canvas.width = f.canvas.width;
                        u.canvas.width = u.canvas.width;
                        u = f = n
                    } else g.Tg(c), g.Tg(e);
                    g.Fd = 0
                } else
        if (-1 < g.cg.indexOf("pts"))
            if ("pts," == g.cg) c.mf = n, this.xl ? (p = c.getContext("2d"), p.canvas.width = p.canvas.width, p = n) : g.Tg(c), p = "&layers=" + f;
            else {
                g.Fd < 2 * g.Gu && (g.Fd *= 2);
                for (var u = g.cg.split(","), v = "", p = 0, w = u.length; p < w; p++) "pts" != u[p] && "" != u[p] && (v = u[p] + "," + v);
                p = "&layers=bg," + f + "&features=" + v;
                v = u = n
            } else e.mf = n, this.xl ? (p = e.getContext("2d"), p.canvas.width = p.canvas.width, p = n) : g.Tg(e), p = "&layers=bg&features=" + g.cg;
            else p = "&layers=bg," + f;
            else p = "&layers=" + f;
        var j = j[k] + "qt=lgvd&" + l + "&styles=pl" + p + "&f=mwebapp&v=" + a + "&udt=" + b + "&fn=BMap." + m,
            k = g.map.Ga(),
            y = new F(k.lng, k.lat),
            E = g.map.U();
        B[m] = function(a) {
            var b = a.content;
            if (b) {
                c.$m = (new Date).getTime();
                e && (e.$m = (new Date).getTime());
                var f = g.map,
                    a = f.Ga(),
                    f = f.U();
                if (!a.pb(y) || f != E) {
                    delete B[m];
                    return
                }
                var a = {}, j;
                for (j in b) "df" == j && (g.Jl[m] = b[j]), a[j] = b[j];
                for (var k in a) {
                    j = a;
                    for (var b = k, f = a[k], l = 0, p = f.length; l < p; l++)
                        for (var u = f[l][1], v = 0, w = 0, nc = 0, tf = u.length / 2; nc < tf; nc++) v += u[2 * nc] / 10, w += u[2 * nc + 1] / 10, u[2 * nc] = v, u[2 * nc + 1] = w;
                    j[b] = f;
                    "bg" == k ? c.zk = (new Date).getTime() : e ? e.zk = (new Date).getTime() : c.zk = (new Date).getTime()
                }
                for (var Rb in a) "bg" == Rb ? (c.mf = a[Rb], c && g.Tg(c), g.Fo(a[Rb], c, d, n, y, E)) : e !== n ? (e.mf = a[Rb], g.Tg(e), g.Fo(a[Rb], e, d, n, y, E)) : (c.mf = a[Rb], c && g.Tg(c), g.Fo(a[Rb], c, d, n, y, E))
            }
            delete B[m]
        };
        La(j)
    },
    Tg: function(a) {
        var a = a.getContext("2d"),
            b = this.Hb * this.kd;
        this.xl || (a.save(), a.clearRect(0, 0, b, b), a.restore())
    },
    WF: function(a, b, c) {
        a.fillStyle = c;
        a.fillRect(0, 0, b, b)
    },
    Fo: function(a, b, c, d, e, f) {
        b.RE = (new Date).getTime();
        var g = b.getContext("2d"),
            d = 0;
        this.xl ? (g.canvas.width = g.canvas.width, g.scale(this.kd, this.kd)) : 1 < this.kd && !b.nl && (g.scale(this.kd, this.kd), b.nl = i);
        g.textBaseline = "bottom"; - 1 < b.id.indexOf("bg") && (this.qf[this.Ng] && this.qf[this.Ng].backColor) && this.WF(g, this.Hb, this.qf[this.Ng].backColor);
        for (var j = this.Gt, k = a.length, l = 0, m = this.ag; l < k; l++) {
            var p = a[l],
                u = m[p[3]],
                v = m[p[4]];
            p.Ud = u;
            p.Ve = v;
            if (3 == u[0]) d++, this.mi(g, p, n);
            else break
        }
        b.QE = (new Date).getTime();
        p = this.map.Ga();
        c = this.map.U();
        if (p.pb(e) && c == f) {
            b.BI = (new Date).getTime();
            for (var w = []; l < k; l++) {
                var p = a[l],
                    u = m[p[3]],
                    v = m[p[4]];
                p.Ud = u;
                p.Ve = v;
                if (2 == u[0]) d++, w.push(p);
                else break
            }
            this.vI(g, w, c, this.kh);
            b.AI = (new Date).getTime();
            p = this.map.Ga();
            c = this.map.U();
            if (p.pb(e) && c == f) {
                for (b.fI = (new Date).getTime(); l < k; l++) p = a[l], u = m[p[3]], v = m[p[4]], p.Ud = u, p.Ve = v, p[5] && p[5].u && this.fi && p[5].c == this.fi.fea[5].c ? ("df" !== this.fi.fea[5].c ? this.mi(g, p, this.kh, i) : p[5].u == this.fi.fea[5].u ? this.mi(g, p, this.kh, i) : this.mi(g, p, this.kh, o), p[5].u == this.fi.fea[5].u && (c = new L("onclickicondrawed"), c.tarPoi = {
                    id: b.id,
                    fea: p,
                    equal: this.qF(p[1], this.fi.fea[1])
                }, this.map.dispatchEvent(c))) : this.mi(g, p, this.kh, o), d++;
                b.xe = i;
                this.tI();
                a = (new Date).getTime();
                b.eI = a;
                b.kv = a;
                a = b.$m - b.Ak;
                c = b.zk - b.$m;
                __drawTime = b.kv - b.zk;
                this.uh.push({
                    id: b.id,
                    downLoadTime: a,
                    parseDataTime: c,
                    restRate: d + "/" + l,
                    areaTime: b.QE - b.RE,
                    roadTime: b.AI - b.BI,
                    otherTime: b.eI - b.fI,
                    timeline: {
                        start: b.Ak,
                        downLoadComplete: b.$m,
                        parseComplete: b.zk,
                        drawComplete: b.kv
                    }
                });
                this.Eu++;
                1 == this.Eu && this.map.dispatchEvent(new L("onfirstvectorloaded"));
                this.Fd == this.Ml && (j && (this.Gt = o), b = (new Date).getTime() - this.Du, c = new L("onvectorloaded"), c.Gu = this.Fd, c.WL = b, c.SL = this.uh, this.map.dispatchEvent(c))
            }
        }
    },
    tI: function() {
        this.Ml++;
        2 >= this.Fd - this.Ml && this.map.dispatchEvent(new L("onallvectorloaded"))
    },
    qF: function(a, b) {
        var c = o;
        if (a.length && b.length && a.length == b.length) {
            for (var d = 0, e = a.length; d < e && a[d] === b[d]; d++);
            d == e && (c = i)
        }
        return c
    },
    mi: function(a, b, c, d) {
        switch (b.Ud[0]) {
            case 3:
                this.bG(a, b);
                break;
            case 2:
                this.ni(a, b[1], b.Ud, b.Ve, b[2], c);
                break;
            case 4:
                this.UF(a, b);
                break;
            default:
                this.$F(a, b, d)
        }
    },
    bG: function(a, b) {
        var c = b.Ud,
            d = c[2],
            e = b[1];
        a.fillStyle = Ad.Wg(c[1]);
        a.beginPath();
        a.moveTo(e[0], e[1]);
        for (var c = 2, f = e.length; c < f; c += 2) a.lineTo(e[c], e[c + 1]);
        a.closePath();
        a.fill();
        0 < d.length && (a.strokeStyle = a.fillStyle, a.lineWidth = 3, a.stroke())
    },
    ni: function(a, b, c, d, e, f) {
        if (c) {
            var g = Ad.Wg,
                j = Ad.ct,
                k = Ad.dt;
            if (this.bz(c, d)) firstColor = backColor = (g = d && d[5] && 0 < d[5].length ? i : o) ? Ad.Wg(c[1]) : "rgba(0, 0, 0, 0)", backLineWidth = c[2], foreLineWidth = g ? d[2] : c[2], intervalLen = g ? d[5][0] : c[5][0], intervalColor = Ad.Wg(g ? d[1] : c[1]), c = Math.round(e / f), Ad.YF(a, b, intervalLen, backLineWidth, foreLineWidth, firstColor, c, backColor, intervalColor);
            else if (1 == c[7]) a.strokeStyle = g(c[1]), a.fillStyle = a.strokeStyle, a.lineWidth = c[2], a.lineCap = j(c[3]), a.lineJoin = k(c[4]), Ad.VF(a, b, a.lineWidth);
            else {
                a.beginPath();
                a.moveTo(b[0], b[1]);
                e = 2;
                for (f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
                a.strokeStyle = g(c[1]);
                a.lineCap = j(c[3]);
                a.lineJoin = k(c[4]);
                a.lineWidth = c[2];
                a.stroke();
                d && (a.strokeStyle = g(d[1]), a.lineWidth = d[2], a.lineCap = j(d[3]), a.lineJoin = k(d[4]), a.stroke())
            }
        }
    },
    UF: function(a, b) {
        var c = b[1],
            d = b.Ud,
            e = Ad.Wg,
            f = e(d[1]),
            g = e(d[2]),
            j = b[2] * d[3],
            k = d[4],
            e = e(k[1]);
        Ad.cG(a, c, j, d[5], d[6], e, f, g, k[2])
    },
    $F: function(a, b, c) {
        a.save();
        var d = b[1],
            e = b[0],
            f = b[2],
            b = this.Gy(b.Ud, b.Ve),
            g = b[1],
            j = 0,
            k = -1 < g.indexOf("biaopai");
        g.indexOf("ditie");
        if (0 < g.length) {
            var l = "undefined" != typeof TVC ? TVC.PE.dM : {}, l = this.Vy[g.length % this.Vy.length] + this.qf[this.Ng].iconUrl + "/" + g + ".png?v=" + (l.version ? l.version : "001") + "&udt=" + (l.Ou ? l.Ou : "20130501"),
                m = new Image,
                p = d[0],
                u = d[1];
            2 < d.length && (j += 2);
            var v = this;
            if (k)(function(a, b, c, d, e, f, g, j, k, l, p) {
                m.onload = function() {
                    c.drawImage(this, a - this.width / 2, b - this.height / 2, this.width, this.height);
                    v.ky(c, d, e, f, g, j, k, l, p);
                    m.onload = n;
                    delete m.onload;
                    m = n
                }
            })(p, u, a, d, b, f, e, g, j, k, c), m.src = l;
            else {
                var w = v.Ns[g];
                w ? a.drawImage(w, p - w.width / 2, u - w.height / 2) : (function(b, c, d) {
                    m.onload = function() {
                        a.drawImage(this, b - this.width / 2, c - this.height / 2);
                        d && (v.Ns[g] = m);
                        m.onload = n;
                        delete m.onload;
                        m = n
                    }
                }(p, u, v.Gt), m.src = l)
            }
        }!k && 0 < b[2].length && this.ky(a, d, b, f, e, g, j, k, c);
        a.restore()
    },
    ky: function(a, b, c, d, e, f, g, j, k) {
        var l = Ad.Wg,
            m = c[2];
        if (e && 0 < m.length) {
            var p = [],
                c = m[2],
                u = m[3],
                v = m[4],
                m = m[5];
            p.push(Ad.DG(v));
            p.push(c + "px");
            j || p.push('Helvetica Neue",Arial,"Hiragino Sans GB",\u9ed1\u4f53,sans-serif');
            a.font = p.join(" ");
            a.fillStyle = k ? this.Ng ? this.qf[this.Ng].textColor : "#c61b1b" : l(u);
            if (k = Ad.CH(v)) a.strokeStyle = l(m), a.lineWidth = j ? 0.5 : 2;
            for (var f = -1 < f.indexOf("biaopai_xiandao"), p = e.split("\\"), u = 0, w = p.length, y = b.length; u < w && g < y; u++) {
                var E = b[g],
                    x = b[g + 1],
                    e = p[u],
                    e = a.measureText(e).width,
                    I = c,
                    g = g + 2;
                10 < d && 350 > d && this.GJ(a, E, x, d);
                var D = 1;
                Ad.AH(v) && (Ad.jG(a, E - e / 2, x - I / 2, e, I, {
                    fillStyle: l(m)
                }), D = 0);
                f ? (a.save(), a.scale(0.9, 0.9), k && a.strokeText(p[u], (E - e / 2 + 1) / 0.9, (x + I / 2 + 1) / 0.9), a.fillText(p[u], (E - e / 2 + 1) / 0.9, (x + I / 2 + 1) / 0.9), a.restore()) : (D = j ? 2 : D, k && a.strokeText(p[u], E - e / 2, x + I / 2 + D), a.fillText(p[u], E - e / 2, x + I / 2 + D))
            }
        }
    },
    Gy: function(a, b) {
        var c = [1, "", []];
        a && (5 == a[0] ? c[2] = a : c = a);
        b && (5 == b[0] ? c[2] = b : c[1] = b[1]);
        return c
    },
    GJ: function(a, b, c, d) {
        d = d / 180 * Math.PI;
        cv = Math.cos(d);
        sv = Math.sin(d);
        yy = xx = cv;
        xy = sv;
        yx = -sv;
        x0 = b - b * cv - c * sv;
        y0 = c + b * sv - c * cv;
        a.transform(xx, yx, xy, yy, x0, y0)
    },
    vI: function(a, b, c, d) {
        if (16 >= c)
            for (var c = 0, e = b.length; c < e;) {
                for (var f = b[c], g = this.Jy(f.Ud, f.Ve), f = c + 1; f < e; f++) {
                    var j = b[f];
                    if (g != this.Jy(j.Ud, j.Ve)) break
                }
                for (var k = c; k < f; k++) {
                    var l = b[k],
                        m = l[1],
                        g = l.Ud,
                        j = l.Ve;
                    this.bz(g, j) ? l.zH = i : this.ni(a, m, g, o)
                }
                for (k = c; k < f; k++) l = b[k], l.zH ? this.ni(a, l[1], l.Ud, l.Ve, l[2], d) : this.ni(a, l[1], l.Ve, o);
                c = f
            } else {
                c = 0;
                for (e = b.length; c < e; c++) f = b[c], g = f.Ud, j = f.Ve, k = g[6] & 1 ? i : o, j && !k && (k = j[6] & 1 ? i : o), k ? f.MH = i : this.ni(a, f[1], g, o);
                c = 0;
                for (e = b.length; c < e; c++) f = b[c], g = f.Ud, j = f.Ve, f.MH ? this.ni(a, f[1], g, j, f[2], d) : this.ni(a, f[1], j, o)
            }
    },
    Jy: function(a, b) {
        if (!b) return 0;
        var c = a[6],
            d = b[6];
        if (1 == c || 1 == d) return 1;
        switch (c) {
            case 2:
                return 2 == d ? 1 : 0;
            case 4:
            case 6:
            case 8:
            case 10:
                return 4 <= d && 10 >= d ? 1 : 0;
            default:
                return 0
        }
    },
    bz: function(a, b) {
        return a && 0 < a[5].length || b && 0 < b[5].length ? i : o
    }
};
t.extend(Sb.prototype, {
    uB: function() {
        this.aq(this.map);
        this.kw(i);
        this.cp(0)
    },
    cp: function(a) {
        this.loaded || (this.Zo(), this.aq(map), this.kw(i), this.loaded = i);
        this.Pe();
        0 !== a && this.QA.oi()
    },
    sa: function() {
        var a = this,
            b = a.map;
        b.addEventListener("loadcode", function() {
            a.cp()
        });
        b.addEventListener("addtilelayer", function(b) {
            a.of(b)
        });
        b.addEventListener("removetilelayer", function(b) {
            a.Ff(b)
        });
        b.addEventListener("setmaptype", function(b) {
            a.pg(b)
        });
        b.addEventListener("zoomstartcode", function(b) {
            a.ge(b)
        });
        a.aq(b)
    },
    aq: function(a) {
        var b = this;
        a.addEventListener("mousewheel", function(a) {
            b.WH(a)
        });
        a.addEventListener("dblclick", function(a) {
            b.$x(a)
        });
        a.addEventListener("rightdblclick", function(a) {
            b.$x(a)
        });
        a.addEventListener("minuspress", function(a) {
            b.oz(a)
        });
        a.addEventListener("pluspress", function(a) {
            b.oz(a)
        });
        a.addEventListener("moving", function() {
            b.map.Dc() || b.Pe()
        });
        a.addEventListener("resize", function() {
            b.map.Dc() || b.Pe()
        });
        b.map.addEventListener("setcustomstyles", function() {
            b.xr()
        });
        a.addEventListener("onallvectorloaded", function() {
            a.Dc() && (b.xr(), b.fe.style.visibility = "")
        })
    },
    kw: function() {
        this.QA = new zd(this.map.F.lc);
        this.map.of(this.QA)
    },
    JK: function() {
        var a = this.map;
        a.U();
        if (a.Dc()) this.PA.style.display = "block", a.QK && this.Wc.aG(this.Oj(this.PA, "base"), this);
        else {
            a = this.PA;
            a.style.display = "none";
            for (var b = a.childNodes.length - 1; 0 <= b; b--) a.removeChild(a.childNodes[b])
        }
    },
    of: function(a) {
        var b = this,
            c = a.target;
        c.ue && this.map.of(c.ue);
        if (c.Uj) {
            for (a = 0; a < b.ve.length; a++)
                if (b.ve[a] == c) return;
            G.load("vector", function() {
                c.sa(b.map, b.fe);
                b.ve.push(c)
            }, i)
        } else {
            for (a = 0; a < b.Vd.length; a++)
                if (b.Vd[a] == c) return;
            b.Vd.push(c);
            c.sa(this.map, this.gl);
            b.map.loaded && b.Pe()
        }
    },
    Ff: function(a) {
        a = a.target;
        a.ue && this.map.Ff(a.ue);
        if (a.Uj) {
            for (var b = 0, c = this.ve.length; b < c; b++) a == this.ve[b] && this.ve.splice(b, 1);
            a.remove()
        } else {
            var c = this.ne,
                d = this.dg;
            for (b in d) {
                var e = b.split("-")[1];
                e == a.L && delete d[b]
            }
            for (b in c) e = b.split("-")[1], e == a.L && delete c[b];
            b = 0;
            for (c = this.Vd.length; b < c; b++) a == this.Vd[b] && this.Vd.splice(b, 1);
            a.remove();
            this.Pe()
        }
    },
    WH: function(a) {
        var b = this.map;
        if (b.F.Ql) {
            var c = b.jj(b.la + (a.pk == i ? 1 : -1));
            c.Ms || (b.dispatchEvent(new L("onzoomstart")), b.Zb = b.la, b.la = c.zoom, a = a.Oa, c = this.cw(a), zoomUnits = b.ha().Gb(b.U()), b.Lb = new F(c.lng + (b.width / 2 - a.x) * zoomUnits, c.lat - (b.height / 2 - a.y) * zoomUnits), b.De = b.Pc.eh(b.Lb, b.zb), this.zoom(a))
        }
    },
    $x: function(a) {
        var b = this.map;
        if (b.F.Ds) {
            var c = a.Oa,
                d = 1,
                e = c,
                f = new K(0, 0);
            "onrightdblclick" == a.type && (d = -1, e = new O(b.width / 2, b.height / 2));
            a = b.jj(b.la + d);
            a.Ms ? 1 == d && (c = b.Sa(c), b.qe(c)) : (b.dispatchEvent(new L("onzoomstart")), b.Zb = b.la, b.la = a.zoom, 1 == d && (b.Lb = this.cw(c), b.De = b.Pc.eh(b.Lb, b.zb), d = 0.5 * (b.ha().Gb(b.Zb) / b.ha().Gb(a.zoom)), f.width = c.x - Math.round(b.width / 2) * d, f.height = c.y - Math.round(b.height / 2) * d), this.zoom(e, f));
            H() && (b = b.Je()) && b.H()
        }
    },
    oz: function(a) {
        var b = this.map;
        if (b.F.Ol) {
            if (!this.nf) {
                var c = b.jj(b.la + ("onpluspress" == a.type ? 1 : -1));
                c.Ms || (b.dispatchEvent(new L("onzoomstart")), a = new O(b.width / 2, b.height / 2), b.Zb = b.la, b.la = c.zoom, b.Je() && (a = b.kb(b.Je().ba(), b.Zb), c = b.Sa(a, b.Zb), b.Ig(b.width / 2 - a.x, b.height / 2 - a.y, c, i)), this.zoom(a))
            }
        } else "onpluspress" == a.type ? b.Qu() : b.Ru()
    },
    cw: function(a) {
        var b = this.map,
            c = b.Lb,
            d = b.ha().Gb(b.Zb);
        return new F(c.lng + d * (a.x - b.width / 2), c.lat - d * (a.y - b.height / 2))
    },
    zoom: function(a, b) {
        var c = this,
            d = c.map,
            e = d.la,
            f = d.F.Pu,
            g = e > f ? i : o;
        if (e < d.Zb && (e == f || e == f - 1)) g = i;
        var j = b ? b.width : 0,
            k = b ? b.height : 0,
            d = this.map,
            e = d.F,
            c = this,
            f = a.x - parseInt(g ? c.Vc.style.left : c.cb.style.left) - d.offsetX,
            l = a.y - parseInt(g ? c.Vc.style.top : c.cb.style.top) - d.offsetY;
        d.Dd && t.z.H(d.Dd);
        c.gl.style.visibility = "hidden";
        c.fe && (c.fe.style.visibility = "hidden");
        this.nE(g);
        c.In.style.visibility = "hidden";
        var m = [],
            g = d.la - d.Zb;
        c.Ok ? 0 < d.la - d.Zb ? c.Ok++ : c.Ok-- : c.Ok = g;
        this.nf && 0 == this.nf.zp && (this.nf.stop(), this.nf = n, g = c.Ok);
        if ((!b || 0 == b.width && 0 == b.height) && e.Ol) d.D.SJ.action(a, 0 < g ? i : o);
        var g = Math.pow(2, g),
            p = this.cc,
            u = p.style;
        u.visibility = "";
        for (var v = p.children.length - 1; - 1 < v; v--) {
            var w = {}, y = p.children[v].style;
            w.top = parseInt(y.top) || 0;
            w.left = parseInt(y.left) || 0;
            w.width = parseInt(y.width);
            w.height = parseInt(y.height);
            w.dG = w.width * g - w.width;
            w.KF = w.height * g - w.height;
            w.ud = (w.left - f) * g - (w.left - f);
            w.vd = (w.top - l) * g - (w.top - l);
            m[v] = w;
            y.display = "block"
        }
        p.uD = parseInt(p.style.left);
        p.zD = parseInt(p.style.top);
        this.nf && (this.nf.stop(), this.nf = n);
        this.nf = new Va({
            fd: 20,
            duration: e.Ol ? e.TJ : 1,
            Wd: Wa.As,
            ta: function(a) {
                if (!(a < 0.1)) {
                    for (var b = m.length - 1; b > -1; b--) {
                        var c = m[b];
                        if (p.children[b]) {
                            var d = p.children[b].style;
                            d.top = Math.round(c.top + c.vd * a) + "px";
                            d.left = Math.round(c.left + c.ud * a) + "px";
                            d.width = Math.ceil(c.width + c.dG * a) + "px";
                            d.height = Math.ceil(c.height + c.KF * a) + "px"
                        }
                    }
                    if (j || k) {
                        u.left = p.uD - j * a + "px";
                        u.top = p.zD - k * a + "px"
                    }
                }
            },
            finish: function() {
                c.Pe();
                d.Dd && (t.M.S && t.M.S < 8 || document.compatMode == "BackCompat" ? t.z.show(d.Dd) : setTimeout(function() {
                    t.z.show(d.Dd)
                }, 100));
                c.gl.style.visibility = "";
                c.In.style.visibility = "";
                delete c.Ok;
                d.dispatchEvent(new L("onzoomend"));
                p = n;
                c.nf = n
            }
        })
    },
    pg: function() {
        var a = this,
            b = a.map;
        b.addEventListener("tilesloaded", function() {
            setTimeout(function() {
                a.xr()
            }, 200);
            b.removeEventListener("tilesloaded", arguments.callee)
        });
        for (var c in this.ne) this.Xo(this.ne[c]);
        for (c in this.dg) this.Xo(this.dg[c]);
        c = this.Wj;
        for (var d = 0, e = c.length; d < e; d++) c[d].remove();
        delete this.cb;
        this.Wj = [];
        this.dg = this.ne = {};
        this.Zo();
        this.Pe()
    },
    nE: function(a) {
        var b = this.map,
            a = a || o;
        if (this.cc) this.cc.parentNode && !this.nf && (this.cc.parentNode.removeChild(this.cc), this.cc = n, this.cc = a ? this.Rb.cloneNode(i) : this.cb.cloneNode(i));
        else if (a) {
            this.cc = this.Rb.cloneNode();
            for (var a = this.Rb.childNodes, c = this.Vc.childNodes, d = 0, e = a.length; d < e; d++) {
                var f = a[d].cloneNode(i);
                f.style.display = "none";
                var g = f.getContext("2d");
                g.drawImage(c[d], 0, 0);
                g.drawImage(a[d], 0, 0);
                this.cc.appendChild(f)
            }
        } else this.cc = this.cb.cloneNode(i);
        a = this.cc;
        c = a.style;
        c.display = "";
        c.zIndex -= 100;
        b.platform.insertBefore(a, b.platform.firstChild)
    },
    xr: function() {
        this.cc && (Yb(this.cc), this.cc.parentNode && (this.cc.parentNode.removeChild(this.cc), this.cc.innerHTML = "", this.cc = n))
    }
});
