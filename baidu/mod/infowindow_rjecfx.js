t.extend(Jb.prototype, {
    initialize: function(a) {
        var b = this.map = a.map;
        this.Ka = a;
        this.ta();
        this.N();
        this.w.Ge ? this.Ge() : this.Eo();
        this.Jb() && (this.map.ra.pp.style.display = this.w.Fs ? "block" : "none");
        this.$b(this.w.title);
        this.Bc(this.content, i);
        this.w.tH && this.XI(i);
        this.Ac(n, i);
        if (b = b.ra) b.Ji = a instanceof S ? a : n
    },
    ta: function() {
        var a = this.map,
            b = a.ra,
            c = this.Jf;
        if (!b) {
            b = a.ra = {};
            a.ub = a.ra;
            var d = ['<div class="BMap_shadow" style="position: absolute;display:none" type="infowindow_shadow">'];
            d.push('<div><img onmousedown="return false" style="margin-left: -323px; margin-top: 0px;" src="' + c + 'iws3.png"/></div>');
            d.push('<div><img onmousedown="return false" style="margin-left: -393px; margin-top: 0px;" src="' + c + 'iws3.png"/></div>');
            d.push('<div><img onmousedown="return false" style="margin-left: -1033px; margin-top: 0px;" src="' + c + 'iws3.png"/></div>');
            d.push('<div><img onmousedown="return false" style="margin-top: -30px;" src="' + c + 'iws3.png"/></div>');
            d.push('<div><img onmousedown="return false" style="margin-left: -360px; margin-top: -30px;" src="' + c + 'iws3.png"/></div>');
            d.push('<div><img onmousedown="return false" style="margin-top: -30px;" src="' + c + 'iws3.png"/></div>');
            d.push('<div><img onmousedown="return false" style="margin-left: -14px; margin-top: -310px;" src="' + c + 'iws3.png"/></div>');
            d.push('<div><img onmousedown="return false" style="margin-left: -255px; margin-top: -310px;" src="' + c + 'iws3.png"/></div>');
            d.push('<div><img onmousedown="return false" style="margin-left: -440px; margin-top: -310px;" src="' + c + 'iws3.png"/></div>');
            d.push('<div><img onmousedown="return false" style="margin-left: -255px; margin-top: -310px;" src="' + c + 'iws3.png"/></div>');
            d.push('<div><img onmousedown="return false" style="margin-left: -754px; margin-top: -310px;" src="' + c + 'iws3.png"/></div>');
            d.push("</div>");
            d.push('<div class="BMap_pop" style="position:absolute;display:none;cursor:default">');
            d.push('<div><div style="background:#fff;border-top:1px solid #ababab;border-left:1px solid #ababab;width:30px;height:30px;"></div></div>');
            d.push('<div class="BMap_top"></div>');
            d.push('<div><div style="position:absolute;top:0;left:-6px;background:#fff;border-top:1px solid #ababab;border-right:1px solid #ababab;width:30px;height:30px;"></div></div>');
            d.push('<div class="BMap_center"></div>');
            d.push('<div><div style="position:absolute;top:-6px;left:0;background:#fff;border-bottom:1px solid #ababab;border-left:1px solid #ababab;width:30px;height:30px;"></div></div>');
            d.push('<div class="BMap_bottom"></div>');
            d.push('<div><div style="position:absolute;top:-6px;left:-6px;background:#fff;border-right:1px solid #ababab;border-bottom:1px solid #ababab;width:30px;height:30px;"></div></div>');
            d.push('<div><img style="border:none;margin:0px;padding:0px;margin-left:-186px;margin-top:-691px;max-width:none; width:690px;height:786px;" src="' + c + 'iw3.png"/></div>');
            d.push('<div style="overflow-y:hidde;overflow-x:hidde;width:auto;height:auto;position:absolute;left:16px; top:16px;z-index:10;"></div>');
            d.push("</div>");
            b.Db = bb(a.platform, d.join(""));
            b.lb = b.Db.previousSibling;
            b.Ni = b.Db.children;
            b.Fm = b.lb.getElementsByTagName("div");
            b.eg = b.Ni[8];
            b.ok = bb(b.Ni[8], '<div class="BMap_bubble_title" style="display:block;overflow:hidden;height:24px;line-height:24px;white-space:nowrap"></div>');
            b.he = bb(b.Ni[8], '<div class="BMap_bubble_content" style="display:block"></div>');
            b.zf = bb(b.Ni[8], '<div class="BMap_bubble_max_content" style="display:none;position:relative"></div>');
            a = 10;
            H() && (a = 15);
            b.so = bb(b.Db, '<img style="position:absolute;top:12px;width:' + a + "px;height:" + a + 'px;-moz-user-select:none;cursor:pointer;z-index:10000;" src="' + c + 'iw_close1d3.gif"/>');
            b.pp = bb(b.Db, '<img style="position:absolute;top:10px;width:9px;height:14px;-moz-user-select:none;cursor:pointer;z-index:10000;display:none;" src="' + c + 'phone.png"/>');
            b.hd = bb(b.Db, '<img style="position:absolute;top:12px;width:' + a + "px;height:" + a + 'px;-moz-user-select:none;cursor:pointer;z-index:10000;display:none" src="' + c + 'iw_plus1d3.gif"/>');
            this.nD(b)
        }
        b.L = b.Db.L = this.L
    },
    nD: function(a) {
        if (t.M.S && !(6 < t.M.S)) {
            for (var b = a.Db.getElementsByTagName("IMG"), c = 0; c < b.length; c++) 0 > b[c].src.indexOf(".png") || (b[c].style.cssText += ";FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + b[c].src + ",sizingMethod=crop)", b[c].src = this.Jf + "blank.gif");
            a = a.lb.getElementsByTagName("IMG");
            for (c = 0; c < a.length; c++) a[c].style.cssText += ";FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + a[c].src + ",sizingMethod=crop)", a[c].src = this.Jf + "blank.gif"
        }
    },
    N: function() {
        function a(a) {
            c.wc ? c.restore() : c.gp();
            ka(a)
        }

        function b(a) {
            c.dispatchEvent(new L("onclickclose"));
            c.Ka && c.Ka.Xb();
            ka(a)
        }
        var c = this,
            d = c.map,
            e = d.ra,
            f = e.so,
            g = e.Db;
        f.onclick = b;
        t.hc.Sd("touchstart touchmove touchend gesturestart gesturechange mousedown mouseout mouseover click mousewheel keydown selectstart".split(" "), function(a) {
            t.C(g, a, A)
        });
        t.C(g, "dblclick", ka);
        t.C(g, "contextmenu", ka);
        4 <= t.M.uf && t.C(g, "mouseup", function(a) {
            2 == a.button && ka(a)
        });
        window.addEventListener && g.addEventListener("DOMMouseScroll", ka, o);
        e.pp.onclick = function(a) {
            va(6E3, {
                operate: "phone_click"
            });
            d.pop || (d.pop = new be);
            d.Ua(d.pop);
            d.pop.rG(c);
            ka(a)
        };
        e.hd.onclick = a;
        H() && (t.C(f, "touchend", b), t.C(e.hd, "touchend", a));
        g = f = e = n
    },
    Fr: function(a, b) {
        var c = this.w,
            a = a || c.width,
            b = b || c.height;
        0 > b && (b = 0);
        var d = c.fa.width,
            e = c.fa.height,
            c = [25, -1, 25, -1, 25, -1, 25, 34],
            f = [25, -1, 25, -1, 25, -1, 25, 50];
        c[1] = a - c[0] - c[2];
        c[3] = t.M.S && "CSS1Compat" != document.compatMode ? a : a - 2;
        c[5] = a - c[4] - c[6];
        f[1] = f[0];
        f[3] = b - f[0] - f[4];
        f[5] = t.M.S && "CSS1Compat" != document.compatMode ? f[4] : f[4] - 1;
        var g = [0, c[0], a - c[2], 0, 0, c[4], a - c[6], Math.ceil((a - c[7]) / 2)],
            j = [0, 0, 0, f[0], b - c[4], b - c[4], b - c[4], b - c[4]];
        this.pv = d - Math.round((a - c[7]) / 2);
        this.qv = e - b - 24;
        var k = Math.floor((b + f[7]) / 2.03) + 30,
            l = [70, -1, 70, -1, -1, -1, 50, -1, 140, -1, 70],
            m = [30, 30, 30, 25, 25, 25, 60, 60, 60, 60, 60];
        l[7] = Math.round((a + 80 - (l[6] + l[8] + l[10]) - 50) / 2);
        l[9] = l[7] + 50;
        l[1] = l[6] + l[7] + l[8] + l[9] + l[10] - l[0] - l[2] - 29;
        l[5] = l[3] = k - m[0] - m[6] + 70;
        m[3] = m[4] = m[5] = k - m[0] - m[6];
        l[4] = l[0] + l[1] + l[2] + m[3] + 29 - l[5] - l[3];
        var p = [k - 60 - 1, k - 60 - 1 + l[0], k - 60 - 1 + l[0] + l[1], 29, 29 + l[3], 29 + l[3] + l[4], 0, l[6], l[6] + l[7], l[6] + l[7] + l[8], l[6] + l[7] + l[8] + l[9]],
            u = [0, 0, 0, m[0], m[0], m[0], m[0] + m[3], m[0] + m[3], m[0] + m[3], m[0] + m[3], m[0] + m[3]];
        this.rv = d - l[6] - l[7] - 70;
        this.sv = e - k + 30;
        d = 323 - k + 90;
        shadowRightImageLeft = 740 + d;
        if ((e = this.map.ra) && e.Ni)
            for (k = 0; 8 > k; k++) e.Ni[k].style.cssText = "overflow: hidden; z-index: 1; position: absolute; left:" + g[k] + "px; top:" + j[k] + "px; width:" + c[k] + "px; height:" + f[k] + "px";
        if (e && e.Fm) {
            for (k = 0; k < e.Fm.length; k++) e.Fm[k].style.cssText = "overflow: hidden; z-index: 1; position: absolute; left:" + p[k] + "px; top:" + u[k] + "px; width:" + l[k] + "px; height:" + m[k] + "px;";
            e.Fm[3].firstChild.style.marginLeft = "-" + d + "px";
            e.Fm[5].firstChild.style.marginLeft = "-" + shadowRightImageLeft + "px"
        }
        this.ga()
    },
    eJ: function(a) {
        a *= 1;
        if (!(!a && 0 != a || isNaN(a) || 0 > a))
            if (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.w.width = a, this.Jb() && this.za()) {
                var b = this;
                this.Ac(function() {
                    b.mh()
                })
            }
    },
    RI: function(a) {
        a *= 1;
        if (!(!a && 0 != a || isNaN(a) || 0 > a))
            if (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)), this.w.height = a, a = this.map, this.Jb() && this.za()) {
                0 != this.w.width && (a.ra.he.style.width = this.w.width + "px");
                var b = this;
                this.Ac(function() {
                    b.mh()
                })
            }
    },
    nA: function(a) {
        a *= 1;
        !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.w.maxWidth = a, this.wc && this.Ac())
    },
    $b: function(a) {
        this.w.title = a;
        if (this.Jb()) {
            var b = this.map.ra.ok;
            a ? (Da(a) ? b.innerHTML = a : (b.innerHTML = "", b.appendChild(a)), t.z.show(b)) : t.z.H(b);
            var c = this;
            this.Ac(function() {
                c.mh()
            })
        }
    },
    Bc: function(a, b) {
        this.content = a;
        if (this.Jb() && !this.wc) {
            var c = this.map,
                d = c.ra.he,
                c = c.ra.zf;
            Da(a) ? d.innerHTML = a : (d.innerHTML = "", d.appendChild(a));
            if (this.w.Hs) {
                var e = this.nt();
                d.appendChild(e)
            }
            0 != this.w.width && (d.style.width = this.w.width + "px");
            c.style.display = "none";
            d.style.display = "";
            if (!b) {
                var f = this;
                this.Ac(function() {
                    f.mh()
                })
            }
        }
    },
    ym: function(a) {
        a ? this.w.Rt = a : a = this.w.Rt;
        var b = this.map;
        this.Jb() && (b = b.ra, b.zf.innerHTML = a, this.wc && (b.he.style.display = "none", b.zf.style.display = ""))
    },
    Ac: function(a, b) {
        if (this.Jb() && (b || this.za())) {
            var c = this,
                d = c.map.ra,
                e = 0,
                a = a || q();
            "none" != d.ok.style.display && (e = 24);
            var f = 7,
                g = 20;
            H() && (f = 5, g = 20);
            if (this.wc) m = c.w.maxWidth, setTimeout(function() {
                var b = e + d.zf.scrollHeight,
                    b = b > c.map.height ? c.map.height - 60 : b;
                m = m < 220 ? 220 : m;
                m = m > 600 ? 600 : m;
                b = b < 55 ? 55 : b;
                b = b > 440 ? 440 : b;
                c.Fr(m + 32, b + 32);
                d.eg.style.width = m + "px";
                d.eg.style.height = b + "px";
                d.so.style.left = m + f + "px";
                if (c.w.Fs) {
                    d.hd.style.left = m - 2 * g + f + "px";
                    d.pp.style.left = m - g + f + "px"
                } else d.hd.style.left = m - g + f + "px";
                d.eg.style.overflow = "hidden";
                c.dispatchEvent(new L("onresize"));
                a()
            }, 1);
            else {
                var j = d.he.style,
                    k = d.ok.style,
                    l = d.eg.style;
                j.width = l.width = k.width = "auto";
                j.height = l.height = k.height = "auto";
                j.whiteSpace = "nowrap";
                "none" == d.Db.style.display && this.show();
                d.Db.style.visibility = "hidden";
                d.lb.style.visibility = "hidden";
                var m = d.eg.clientWidth || 0,
                    m = 0 == c.w.width ? m : c.w.width,
                    m = m > c.map.width ? c.map.width - 60 : m,
                    m = 220 > m ? 220 : m,
                    m = 600 < m ? 600 : m;
                l.width = m + "px";
                h = d.eg.scrollHeight || 0;
                h = 0 == c.w.height ? h : c.w.height;
                c.Fr(m + 32, h + 32);
                setTimeout(function() {
                    j.whiteSpace = "";
                    l.overflow = "hidden";
                    h = d.eg.scrollHeight || 0;
                    h = c.w.height == 0 ? h : c.w.height;
                    h = h > c.map.height - 92 ? c.map.height - 92 : h;
                    h = h < 55 ? 55 : h;
                    h = h > 440 ? 440 : h;
                    c.Fr(m + 32, h + 32);
                    d.Db.style.visibility = "";
                    d.lb.style.visibility = "";
                    l.height = h + "px";
                    d.so.style.left = m + f + "px";
                    if (c.w.Fs) {
                        d.hd.style.left = m - 2 * g + f + "px";
                        d.pp.style.left = m - g + f + "px"
                    } else d.hd.style.left = m - g + f + "px";
                    c.dispatchEvent(new L("onresize"));
                    a()
                }, 1)
            }
        }
    },
    ga: function() {
        if (this.Jb()) {
            var a = this.map.ra,
                b = this.Ka,
                c = this.map.Qe(b.ba()),
                d = b.Ey(),
                b = new O(c.x - d.anchor.width + d.infoWindowAnchor.width + b.Ke().width, c.y - d.anchor.height + d.infoWindowAnchor.height + b.Ke().height);
            this.pv != aa && (this.qv != aa && this.rv != aa && this.sv != aa) && (a.Db.style.left = this.pv + b.x + "px", a.Db.style.top = this.qv + b.y + "px", a.lb.style.left = this.rv + b.x + "px", a.lb.style.top = this.sv + b.y + "px")
        }
    },
    mh: function(a) {
        var b = this;
        setTimeout(function() {
            b.$I()
        }, a || 200)
    },
    $I: function() {
        if (this.Ka && this.Ka.ba() && this.w.Nl && this.Jb()) {
            var a = this.map,
                b = a.ra,
                c = b.Ni,
                d = b.Db;
            if (c && d) {
                var b = parseInt(c[3].style.width) + 2,
                    c = parseInt(c[1].style.height) + parseInt(c[3].style.height) + parseInt(c[7].style.height),
                    e = parseInt(d.style.left) + this.map.offsetX,
                    f = parseInt(d.style.top) + this.map.offsetY,
                    d = new O(e, f),
                    e = new O(b + e, c + f);
                0 != this.w.height && document.all && (a.D.Yo || (a.D.Yo = -1), f = -a.D.Yo, a.D.Yo = -a.D.Yo);
                var g = f = 0,
                    j = this.w.margin[0],
                    k = this.w.margin[1],
                    l = this.w.margin[2],
                    m = this.w.margin[3];
                d.x < m && (f = -d.x + m);
                d.y < j && (g = -d.y + j);
                e.x > a.width - k && (f = a.width - e.x - k);
                e.y > a.height - l && (g = a.height - e.y - l);
                this.iD();
                j = this.w.uo;
                d.x < j[0][0] && d.y < j[0][1] && (Math.abs(-d.x + j[0][0]) < Math.abs(-d.y + j[0][1]) ? f = -d.x + j[0][0] : a.height - j[0][1] - j[3][1] < c ? f = -d.x + j[0][0] : g = -d.y + j[0][1], a.width - j[0][0] - j[1][0] < b && d.y < j[1][1] && (g = -d.y + j[1][1]));
                e.x > a.width - j[1][0] && d.y < j[1][1] && (Math.abs(-e.x + a.width - j[1][0]) < Math.abs(-d.y + j[1][1]) && a.width - j[0][0] - j[1][0] >= b ? f = -e.x + a.width - j[1][0] : (g = -d.y + j[1][1], a.width - j[0][0] - j[1][0] < b && a.width - j[0][0] < b && (f = -d.x + j[0][0])));
                d.x < j[3][0] && e.y > a.height - j[3][1] && (Math.abs(-d.x + j[3][0]) < Math.abs(-e.y + a.height - j[3][1]) && (Math.abs(-d.x + j[3][0]) < Math.abs(g) && 0 != g || 0 == g) && a.width - j[3][0] >= b ? f = -d.x + j[3][0] : g = -e.y + a.height - j[3][1], a.height - j[0][1] - j[3][1] < c && d.x < j[0][0] && (f = -d.x + j[0][0]));
                e.x > a.width - j[2][0] && e.y > a.height - j[2][1] && (Math.abs(-e.x + a.width - j[2][0]) < Math.abs(-e.y + a.height - j[2][1]) && (Math.abs(-e.x + a.width - j[2][0]) < Math.abs(g) && 0 != g || 0 == g) && a.width - j[0][0] - j[1][0] >= b ? f = -e.x + a.width - j[2][0] : (g = a.height - j[1][1] - j[2][1] >= c ? -e.y + a.height - j[2][1] : -d.y + j[1][1], a.width - j[0][0] - j[2][0] < b && (f = -d.x + j[0][0])));
                (0 != f || 0 != g) && a.pe(f, g)
            }
        }
    },
    iD: function() {
        if (this.map) {
            this.w.uo = [
                [10, 10],
                [10, 10],
                [10, 10],
                [10, 10]
            ];
            for (var a = this.map.xa, b = 0, c = a.children.length; b < c; b++) {
                var d, e, f = !(!hb(a.children[b].tv) || !a.children[b].jr);
                if (a.children[b].bl && a.children[b].bl instanceof R && a.children[b].bl.Dx == i) d = a.children[b];
                else if (f) d = a.children[b];
                else continue;
                var g = d.offsetWidth,
                    j = d.offsetHeight,
                    k = d.bl;
                if (!k || f)
                    if (hb(d.tv) && d.jr && "none" != Aa(d).display && "hidden" != Aa(d).visibility) f = d.jr, d = d.tv;
                    else continue;
                    else {
                        if (k.ng() == o) continue;
                        f = k.Ke();
                        d = k.Qs()
                    }
                switch (d) {
                    case qb:
                        e = 0;
                        break;
                    case rb:
                        e = 1;
                        break;
                    case sb:
                        e = 3;
                        break;
                    case 3:
                        e = 2
                }
                g = g + f.width + 10;
                j = j + f.height + 10;
                f = this.w.uo[e];
                this.w.uo[e] = [g > f[0] ? g : f[0], j > f[1] ? j : f[1]]
            }
        }
    },
    Ge: function() {
        this.w.Ge = i;
        this.Jb() && (this.map.ra.hd.style.display = "block")
    },
    Eo: function() {
        this.w.Ge = o;
        this.Jb() && (this.map.ra.hd.style.display = "none")
    },
    show: function() {
        if (this.Jb()) {
            var a = this.map.ra;
            "none" == a.Db.style.display && (jb(this.content) && (a.he.appendChild(this.content), this.w.Hs && a.he.appendChild(this.nt())), jb(this.w.title) && a.ok.appendChild(this.w.title), t.z.show(a.Db), t.z.show(a.lb), a = new L("onopen"), a.point = a.O = this.ba(), this.dispatchEvent(a), this.Ac())
        }
    },
    H: function() {
        if (!this.Jb()) return o;
        var a = this.map.ra;
        if ("none" == a.Db.style.display) return o;
        jb(this.content) && (a.he.removeChild(this.content), this.w.Hs && a.he.removeChild(this.nt()));
        jb(this.w.title) && a.ok.removeChild(this.w.title);
        t.z.H(a.Db);
        t.z.H(a.lb);
        this.wc && (this.wc = o, a.zf.style.display = "none", a.he.style.display = "", a.hd.src = this.Jf + "iw_plus1d3.gif");
        a = new L("onclose");
        a.point = a.O = this.ba();
        this.dispatchEvent(a);
        this.map.D.gn ? (clearTimeout(this.map.D.gn), this.map.D.gn = n) : (this.map.removeEventListener("click", this.map.D.nq), this.map.D.mq = o);
        t.lang.Co(this.L);
        return i
    },
    gp: function() {
        if (this.map && (this.za() && this.w.Ge && !this.wc) && this.Jb()) {
            var a = this.map.ra.hd;
            this.wc = i;
            a.src = this.Jf + "iw_minus1d3.gif";
            this.ym();
            this.map.ra.zf.style.display = "block";
            this.Ac();
            this.dispatchEvent(new L("onmaximize"));
            this.mh()
        }
    },
    restore: function() {
        this.map && (this.za() && this.wc) && this.Jb() && (this.wc = o, this.map.ra.hd.src = this.Jf + "iw_plus1d3.gif", this.Bc(this.content, i), this.map.ra.zf.style.display = "none", this.Ac(), this.dispatchEvent(new L("onrestore")), this.mh())
    },
    rK: function() {
        if (this.Jb()) {
            this.wc = o;
            var a = this.map.ra;
            a.ok.innerHTML = "";
            a.he.innerHTML = "";
            a.zf.innerHTML = "";
            a.hd.src = this.Jf + "iw_plus1d3.gif"
        }
    },
    Sw: function() {
        var a = this.map;
        if (this.Jb()) {
            var a = a.ra,
                b = a.eg.style;
            a.mr = b.overflowX;
            a.nr = b.overflowY;
            b.overflowX = "hidden";
            b.overflowY = "hidden"
        }
    },
    Mw: function() {
        var a = this.map;
        if (this.Jb() && a.ra.mr && a.ra.nr) {
            var a = a.ra,
                b = a.eg.style;
            b.overflowX = a.mr;
            b.overflowY = a.nr;
            delete a.mr;
            delete a.nr
        }
    },
    za: function() {
        if (!this.map) return o;
        var a = this.map.D.Ja;
        return !a || !this.Jb() ? o : a && a.Ka === this.Ka && this.map.ra && "none" == this.map.ra.Db.style.display ? o : i
    },
    XI: function(a) {
        if (this.Jb()) {
            var b = this.map.ra;
            b.hd.style.display = "block";
            var c = b.hd; !! a != !! this.wc && (a ? (this.wc = i, c.src = this.Jf + "iw_minus1d3.gif", this.ym(), b.zf.style.display = "block") : (this.wc = o, c.src = this.Jf + "iw_plus1d3.gif", this.Bc(this.content, i), b.zf.style.display = "none"), this.Ac())
        }
    },
    Tb: function() {
        this.sb == i && this.Ka && this.Ka.Mb(this)
    },
    Jb: function() {
        return this.map && this.map.ra && this.map.ra.L == this.L
    },
    nt: function() {
        this.map.qu ? this.map.qu.reset(this) : this.map.qu = new ce(this);
        return this.map.qu.gd()
    }
});
Q.prototype.Mb = function(a) {
    var b = this.map;
    if (b && this.J && !(this.ng() == o || !a instanceof Jb)) {
        var c = b.D;
        c.Ja && (c.Ja.Ka && c.Ja.Ka.tC) && b.Xb();
        if (c.Ja === a && c.Ja.za() && c.Ja.Ka === this) a.mh();
        else {
            b.Xb();
            this.ub = a;
            c.Ja == n || c.Ja != a ? (b.ra && (b.ra.so.onclick = n, b.ra.hd.onclick = n), c.Ja = a, a.initialize(this)) : a.Ac(n, i);
            t.lang.ua.call(a, a.L);
            c.nq || (c.nq = function(a) {
                if (!a.Ka && b.D.Ja && b.D.Ja.w.Cs) {
                    b.Xb();
                    b.removeEventListener("click", arguments.callee);
                    c.mq = o
                }
            });
            c.mq || (c.gn = setTimeout(function() {
                b.addEventListener("click", c.nq);
                c.mq = i;
                c.gn = n
            }, 200));
            c.Ch && delete c.Ch;
            a.Ka = this;
            var d = b.ra;
            this.map.Le().Os.appendChild(d.Db);
            this.map.Le().uy.appendChild(d.lb);
            a.mh();
            this.dispatchEvent(new L("oninfowindowopen"))
        }
    }
};
Q.prototype.Xb = function() {
    if (this.map && this.map.ra && this.ub && this.ub.L == this.map.ra.L) try {
        this.ub.H() == i && (this.dispatchEvent(new L("oninfowindowclose")), this.map.D.Ja = this.ub = n)
    } catch (a) {}
};
W(Wc, {
    openInfoWindow: Wc.Mb,
    closeInfoWindow: Wc.Xb
});
W($c, {
    redraw: $c.Ac,
    setTitle: $c.$b,
    setPosition: $c.ga,
    setWidth: $c.eJ,
    setMaxWidth: $c.nA,
    setHeight: $c.RI,
    setContent: $c.Bc,
    setMaxContent: $c.ym,
    enableMaximize: $c.Ge,
    disableMaximize: $c.Eo,
    isOpen: $c.za,
    show: $c.show,
    hide: $c.H,
    maximize: $c.gp,
    restore: $c.restore
});

function be() {}
be.prototype = new Eb;
t.extend(be.prototype, {
    initialize: function(a) {
        this.A = a;
        this.xa = this.oG();
        this.A.Ba().appendChild(this.xa);
        this.xH();
        this.bind();
        this.RG();
        this.mo = 0;
        return this.xa
    },
    draw: q(),
    F: {
        KI: "http://api.map.baidu.com/ws/message?method=send",
        EE: "http://api.map.baidu.com/ws/message?method=activate",
        kF: "http://api.map.baidu.com/ws/message?method=ckActivate",
        fJ: "http://j.map.baidu.com/?"
    },
    oG: function() {
        var a = document.createElement("div"),
            b = this.A.Bb(),
            c = 0,
            d = 0;
        450 < b.width && (d = (b.width - 450) / 2);
        260 < b.height && (c = (b.height - 260) / 2);
        c = "position:absolute;background:#fff;width:480px;height:260px;top:" + c + "px;left:" + d + "px;ovflow:hidden;";
        H() && (c += "-webkit-transform:translate(-" + b.width / 4 + "px,0px) scale(0.6);");
        a.style.cssText = c;
        a.innerHTML = '<div style="height: 35px; background: #FCFCFC; position: relative; z-index: 20; font-size:12px; font-weight:bold; line-height:35px; padding-left:10px;"><span>\u53d1\u9001\u5230\u624b\u673a</span><span id="BMapLib_sms_tip" style="display:none;color: red; padding-left:20px;"></span></div><div id="BMapLib_sms_pnl_phone" style="display: block;position: relative; z-index: 10; padding: 10px 15px 10px 15px; border-top: solid 1px #F2F2F2; font-size:12px;"><div id="pnl_phone_left" style="display: block;float: left; width: 263px; height: 172px; overflow-x: hidden; overflow-y: auto;"><table border="0" style="border-spacing:0;border-collapse:collapse;border:none;display:table-cell;"><tr><td style="line-height:18px;height:18px;font-size:12px;margin:0;border:none;padding:0;background:none;display:table-cell;text-align:right; font-weight:normal;">\u53d1\u9001\u65b9\u624b\u673a\u53f7&nbsp;</td><td style="line-height:18px;height:18px;font-size:12px;margin:0;border:none;padding:0;background:none;display:table-cell;"><input type="text" bid="" id="BMapLib_phone_0" maxlength="11" style="ime-mode:disabled;width:90px;" /><span id="BMapLib_activateTip" style="padding-left:5px; color: red;"></span></td></tr><tr id="BMapLib_activateBox" style="display:none;"><td style="line-height:18px;height:18px;font-size:12px;margin:0;border:none;padding:0;background:none;display:table-cell;text-align:right; font-weight:normal;">\u6fc0\u6d3b\u7801&nbsp;</td><td style="line-height:18px;height:18px;font-size:12px;margin:0;border:none;padding:0;background:none;display:table-cell;"><input type="text" id="BMapLib_activate" style="ime-mode:disabled;width:35px;" maxlength="4"/><input type="button" value="\u83b7\u53d6" id="BMapLib_activate_btn" bid="activate" style="width:40px;"/><input type="button" value="59" id="BMapLib_time_surplus" disabled="disabled" style="width:105px;height:24px;display:none;"/></tr><tr><td style="line-height:18px;height:18px;font-size:12px;margin:0;border:none;padding:0;background:none;display:table-cell;vertical-align:top;padding-top:4px;text-align:right; font-weight:normal;">\u63a5\u6536\u65b9\u624b\u673a\u53f7&nbsp;</td><td style="line-height:18px;height:18px;font-size:12px;margin:0;border:none;padding:0;background:none;display:table-cell;"><div><input type="text" id="BMapLib_phone_1" style="ime-mode:disabled;width:90px;" maxlength="11"/><input type="checkbox" id="BMapLib_is_remember_phone"/>\u8bb0\u4f4f\u6b64\u53f7</div><div id="BMapLib_add_phone_con"></div><div><a href="javascript:void(0)" id="BMapLib_add_phone_btn" bid="addPhone">\u65b0\u589e</a></div></td></tr><tr><td style="line-height:18px;height:18px;font-size:12px;margin:0;border:none;padding:0;background:none;display:table-cell;"></td><td style="line-height:18px;height:18px;font-size:12px;margin:0;border:none;padding:0;background:none;display:table-cell;"><input type="button" style="margin:0;" value="\u514d\u8d39\u53d1\u9001\u5230\u624b\u673a" bid="sendToPhoneBtn"/></td></tr></table></div><div id="pnl_phone_right" style="display: block;background:#f6f6f6; padding:10px; height:152px; overflow-x:hidden; overflow-y:auto;"><div style="font-weight:bold; height:18px; line-height:18px; padding-bottom:5px;">\u77ed\u4fe1\u5185\u5bb9\uff1a</div><div id="BMapLib_msgContent" style="font-size:12px: line-height:16px; word-break:break-all; \u3000\u3000word-wrap:break-word;"></div></div><div style="clear:both;"></div><p id="BMapLib_sms_declare_phone" style="color: #707070;">\u6211\u4eec\u4fdd\u8bc1\u4e0d\u5411\u4efb\u4f55\u7b2c\u4e09\u65b9\u63d0\u4f9b\u8f93\u5165\u7684\u624b\u673a\u53f7\u7801</p></div><button style="padding:10px; background: url(http://api.map.baidu.com/images/iw_close1d3.gif) no-repeat center center transparent; border: 0 none; cursor: pointer; height: 13px; position: absolute; right: 8px; top: 8px; width: 14px; z-index: 50;" bid="close"></button><div id="BMapLib_success_tip" style="display:none;font-size: 12px; text-align: center; padding: 50px 0 20px 0 ; color: red;">\u60a8\u7684\u77ed\u4fe1\u5df2\u7ecf\u53d1\u9001\u5230\u60a8\u7684\u624b\u673a\uff0c\u8bf7\u6ce8\u610f\u67e5\u6536!</div>';
        return a
    },
    xH: function() {
        this.z = {
            rA: t.R("BMapLib_sms_tip"),
            ox: t.R("BMapLib_activate_btn"),
            si: t.R("BMapLib_phone_0"),
            Mu: t.R("BMapLib_phone_1"),
            ez: t.R("BMapLib_is_remember_phone"),
            kJ: t.R("BMapLib_sms_pnl_phone"),
            qJ: t.R("BMapLib_success_tip"),
            tx: t.R("BMapLib_add_phone_con"),
            vK: t.R("BMapLib_add_phone_btn"),
            Pr: t.R("BMapLib_activateBox"),
            ul: t.R("BMapLib_activateTip"),
            eo: t.R("BMapLib_activate"),
            DA: t.R("BMapLib_time_surplus")
        }
    },
    hJ: function() {
        this.z.DA.style.display = "";
        this.z.ox.style.display = "none";
        this.Vx(59)
    },
    Vx: function(a) {
        var b = this.z.DA;
        b.value = "\u91cd\u65b0\u83b7\u53d6(" + (10 > a ? "0" + a : a) + "\u79d2)";
        var c = this;
        this.Ju && clearTimeout(this.Ju);
        this.Ju = setTimeout(function() {
            c.Vx(--a)
        }, 1E3);
        0 == a && (clearTimeout(this.Ju), b.style.display = "none", this.z.ox.style.display = "")
    },
    Gm: function(a) {
        var b = a.error,
            c = {
                PHONE_NUM_INVALID: "\u624b\u673a\u53f7\u7801\u65e0\u6548",
                SMS_SEND_SUCCESS: "\u53d1\u9001\u5230\u624b\u673a\u6210\u529f",
                AK_INVALID: "\u4f60\u6240\u4f7f\u7528\u7684key\u65e0\u6548",
                INTERNAL_ERROR: "\u670d\u52a1\u5668\u9519\u8bef",
                OVER_MAX_ACTIVATE_TIME: "\u4eca\u5929\u5df2\u8d85\u8fc7\u53d1\u9001\u6fc0\u6d3b\u7801\u6700\u5927\u6b21\u6570",
                SMS_ACTIVATE_SUCCESS: "\u6fc0\u6d3b\u7801\u5df2\u53d1\u9001\u5230\u60a8\u7684\u624b\u673a\uff0c\u8bf7\u6ce8\u610f\u67e5\u6536\uff01",
                ACTIVATE_FAIL: "\u624b\u673a\u6fc0\u6d3b\u7801\u65e0\u6548",
                SMS_LACK: "\u4eca\u5929\u60a8\u8fd8\u80fd\u5f805\u4e2a\u624b\u673a\u53d1\u9001\u77ed\u4fe1",
                PARAM_INVALID: "\u8bf7\u586b\u5b8c\u6240\u6709\u9009\u9879",
                SEND_ACTIVATE_FAIL: "\u6fc0\u6d3b\u7801\u53d1\u9001\u5931\u8d25"
            }[b];
        "SMS_LACK" == b && (a = a.res_sms, c = "\u4eca\u5929\u60a8\u8fd8\u80fd\u5f80" + a + "\u4e2a\u624b\u673a\u53d1\u9001\u77ed\u4fe1", this.mo = a - 1);
        c && (this.z.rA.innerHTML = c, this.z.rA.style.display = "inline");
        "SMS_SEND_SUCCESS" == b && (this.rI(), this.JI())
    },
    bind: function() {
        var a = this;
        t.C(this.xa, "click", function(b) {
            b = b.target || b.srcElement;
            switch (b.getAttribute("bid")) {
                case "close":
                    a.oF();
                    break;
                case "sendToPhoneBtn":
                    a.HI();
                    break;
                case "activate":
                    a.DE();
                    break;
                case "addPhone":
                    a.GE();
                    break;
                case "deletePhone":
                    a.FF(b)
            }
        });
        t.C(this.xa, "keypress", function(a) {
            var a = a || window.event,
                a = a.which || a.keyCode,
                c = o;
            if (48 <= a && 57 >= a || 44 == a || 8 == a) c = i;
            return c
        });
        t.C(this.z.si, "blur", function() {
            t.hm(a.z.si.value) ? a.Kx() : (a.z.ul.innerHTML = "", a.z.Pr.style.display = "none")
        });
        t.C(this.z.eo, "blur", function() {
            t.yH(a.z.eo.value) && a.Kx()
        })
    },
    Kx: function() {
        var a = this;
        this.Pa(this.F.kF, {
            phone: this.z.si.value,
            activate: this.z.eo.value,
            cbName: "callback"
        }, function(b) {
            !b || b.isactivate == o ? (a.z.Pr.style.display = "table-row", a.z.ul.style.color = "red", a.z.ul.innerHTML = "\u672a\u6fc0\u6d3b") : (a.z.Pr.style.display = "none", a.z.ul.style.color = "green", a.z.ul.innerHTML = "\u5df2\u6fc0\u6d3b")
        })
    },
    DE: function() {
        var a = this,
            b = {
                phone: this.z.si.value,
                ak: la,
                cbName: "callback"
            };
        t.hm(b.phone) ? this.Pa(this.F.EE, b, function(b) {
            b && a.Gm(b);
            (b.error = "SMS_ACTIVATE_SUCCESS") && a.hJ()
        }) : this.Gm({
            error: "PHONE_NUM_INVALID"
        })
    },
    oF: function() {
        this.A.Qc(this)
    },
    $K: q(),
    HI: function() {
        var a = this;
        if (this.LJ()) {
            tophoneStr = t.R("BMapLib_phone_1").value;
            for (var b = this.z.tx.getElementsByTagName("input"), c = 0, d = b.length; c < d; c++)
                if (t.hm(b[c].value)) tophoneStr += "," + b[c].value;
                else {
                    this.Gm({
                        error: "PHONE_NUM_INVALID"
                    });
                    return
                }
            b = this.A.getKey();
            c = this.UH;
            this.Nt.w.message || (c = this.z.si.value + "\u5206\u4eab\u4e00\u4e2a\u4f4d\u7f6e\u7ed9\u60a8\uff0c" + c);
            c = encodeURIComponent(c);
            this.Pa(this.F.KI, {
                fromphone: this.z.si.value,
                tophone: tophoneStr,
                ak: b,
                activate: this.z.eo.value,
                content: c,
                cbName: "callback"
            }, function(b) {
                b && a.Gm(b)
            })
        }
    },
    LJ: function() {
        var a = i;
        if (!t.hm(this.z.si.value) || !t.hm(this.z.Mu.value)) a = o, this.Gm({
            error: "PHONE_NUM_INVALID"
        });
        return a
    },
    rG: function(a) {
        this.Nt = a;
        var a = this.Nt.ba(),
            b = this;
        (new Gc).Ro(a, function(a) {
                a && a.addressComponents && (a = a.addressComponents, b.ux = a.province + a.city + a.district + a.street + a.streetNumber, b.pG())
            })
    },
    pG: function() {
        var a = t.R("BMapLib_msgContent"),
            b = "",
            c = this.Nt,
            d = c.ba(),
            e = c.w.title,
            f = c.yy(),
            e = t.lang.me(e) ? e.replace(/<\/?[^>]*>/g, "") : e.innerHTML.replace(/<\/?[^>]*>/g, ""),
            e = e.replace(/\u8be6\u60c5&raquo;/g, ""),
            f = t.lang.me(f) ? f.replace(/<\/?[^>]*>/g, "") : f.innerHTML.replace(/<\/?[^>]*>/g, "");
        c.w.message ? b += c.w.message : (this.KJ && (b += this.KJ + "\u5206\u4eab\u4e00\u4e2a\u4f4d\u7f6e\u7ed9\u60a8\uff0c"), e && (b += "\u540d\u79f0\u4e3a\uff1a" + e + "\uff0c"), this.ux && (b += "\u5927\u81f4\u4f4d\u7f6e\u5728" + this.ux + "\uff0c"));
        var g = "http://api.map.baidu.com/marker?location=" + d.lat + "," + d.lng + "&title=" + encodeURIComponent(e) + "&content=" + encodeURIComponent(f) + "&output=html&operate=jsapi_message",
            j = this;
        this.Pa(this.F.fJ, {
            url: encodeURIComponent(g),
            t: (new Date).getTime(),
            cbName: "callback"
        }, function(c) {
            b = b + (" \u67e5\u770b\u5730\u56fe " + (c.url ? c.url : g));
            j.UH = b;
            a.innerHTML = b
        })
    },
    rI: function() {
        this.z.ez.checked ? t.cookie.set("BMapLib_phone", this.z.Mu.value, {
            path: "/",
            Ko: 2592E6
        }) : t.cookie.remove("BMapLib_phone", {
            path: "/"
        })
    },
    RG: function() {
        var a = t.cookie.get("BMapLib_phone");
        a && (this.z.Mu.value = a, this.z.ez.checked = i)
    },
    JI: function() {
        this.z.kJ.style.display = "none";
        this.z.qJ.style.display = "block";
        var a = this;
        setTimeout(function() {
            a.A.Qc(a)
        }, 1500)
    },
    GE: function() {
        if (!(4 <= this.mo)) {
            var a = document.createElement("div");
            a.innerHTML = '<input type="text" style="ime-mode:disabled;width:90px;" maxlength="11"/><a href="javascript:void(0);" style="margin-left:5px;" bid="deletePhone">\u5220\u9664</a>';
            this.z.tx.appendChild(a);
            this.mo++
        }
    },
    FF: function(a) {
        a.parentNode.parentNode.removeChild(a.parentNode);
        this.mo--
    },
    Pa: function(a, b, c) {
        var d = (1E5 * Math.random()).toFixed(0);
        window.BMap["BMap_cbk" + d] = function(a) {
            c && c(a);
            delete window.BMap["BMap_cbk" + d]
        };
        for (var e in b) "cbName" != e && (a += "&" + e + "=" + b[e]);
        a += "&" + b.cbName + "=BMap.BMap_cbk" + d;
        La(a)
    }
});

function ce(a) {
    this.sa(a)
}
t.lang.ia(ce, t.lang.ua, "SearchTool");
t.extend(ce.prototype, {
    F: {
        ca: C.ca + "iw_bg.png",
        Tr: C.ca + "blank.gif"
    },
    sa: function(a) {
        var b = this;
        this.dz = i;
        var c = a.map,
            d = this.z = J("div", {
                style: "font-size:12px;"
            }),
            e = this.Lz = J("span", {
                style: "float:left;text-align:center;height:18px;line-height:18px;padding:6px 0;border-left:1px solid #dadada;"
            }),
            f = this.GA = J("span", {
                style: "float:left;text-align:center;height:18px;line-height:18px;padding:6px 0;border-left:1px solid #dadada;"
            }),
            g = this.vy = J("span", {
                style: "float:left;text-align:center;height:18px;line-height:18px;padding:6px 0;border-left:1px solid #dadada;"
            });
        e.style.borderLeft = "";
        e.innerHTML = "<img src='" + this.F.Tr + "' style='border:none;vertical-align:-3px;margin-right:5px;_vertical-align:0;width:14px;height:14px;background:url(" + this.F.ca + ") no-repeat -30px -136px;'/>\u5728\u9644\u8fd1\u627e";
        f.innerHTML = "<img src='" + this.F.Tr + "' style='border:none;vertical-align:-3px;margin-right:5px;_vertical-align:0;width:10px;height:15px;background:url(" + this.F.ca + ") no-repeat -15px -136px;'/>\u5230\u8fd9\u91cc\u53bb";
        g.innerHTML = "<img src='" + this.F.Tr + "' style='border:none;vertical-align:-3px;margin-right:5px;_vertical-align:0;width:10px;height:15px;background:url(" + this.F.ca + ") no-repeat 0px -136px;'/>\u4ece\u8fd9\u91cc\u51fa\u53d1";
        t.C(e, "click", function() {
            b.Hp("near")
        });
        t.C(f, "click", function() {
            b.Hp("toHere")
        });
        t.C(g, "click", function() {
            b.Hp("fromHere")
        });
        var j = J("div", {
            style: "margin-top:5px;overflow:hidden;background:url(" + this.F.ca + ") repeat-x 0 0;*zoom:1;"
        });
        j.appendChild(e);
        j.appendChild(f);
        j.appendChild(g);
        e = this.GI = J("div", {
            style: "padding:10px 5px 0 5px;"
        });
        localSearchTxt = J("input", {
            style: "height:22px;line-height:22px;padding:0;margin:0;border:1px solid #A5ACB2;width:255px;",
            type: "text"
        });
        localSearchBtn = J("input", {
            style: "width:40px;height:24px;line-height:24px;margin:0 0 0 5px;vertical-align:bottom;width:50px;",
            type: "button",
            value: "\u641c\u7d22"
        });
        e.appendChild(localSearchTxt);
        e.appendChild(localSearchBtn);
        var k = c.Dc() ? "vector" : "tile";
        t.C(localSearchBtn, "click", function() {
            var a = "http://api.map.baidu.com/place/search?query=" + localSearchTxt.value + "&location=" + b.position.lat + "," + b.position.lng + "&radius=1000&output=html&src=jsapi&operate=searchtool&clicktype" + k + "&region=" + b.Hj();
            window.open(a, "_blank")
        });
        c = this.$H = J("div", {
            style: "padding:10px 5px 0 5px;"
        });
        t.z.H(c);
        navSearchLabel = this.aI = J("span", {
            style: "margin-right:5px;"
        });
        navSearchLabel.innerHTML = "\u8d77\u70b9";
        navSearchTxt = J("input", {
            style: "height:22px;line-height:22px;padding:0;margin:0;border:1px solid #A5ACB2;width:145px;",
            type: "text"
        });
        transitSearchBtn = J("input", {
            style: "width:40px;height:24px;line-height:24px;margin:0 0 0 5px;vertical-align:bottom;",
            type: "button",
            value: "\u516c\u4ea4"
        });
        drivingSearchBtn = J("input", {
            style: "width:40px;height:24px;line-height:24px;margin:0 0 0 5px;vertical-align:bottom;",
            type: "button",
            value: "\u9a7e\u8f66"
        });
        navBtn = J("input", {
            style: "width:40px;height:24px;line-height:24px;margin:0 0 0 5px;vertical-align:bottom;",
            type: "button",
            value: "\u5bfc\u822a"
        });
        c.appendChild(navSearchLabel);
        c.appendChild(navSearchTxt);
        c.appendChild(transitSearchBtn);
        c.appendChild(drivingSearchBtn);
        c.appendChild(navBtn);
        t.C(transitSearchBtn, "click", function() {
            b.HA("transit")
        });
        t.C(drivingSearchBtn, "click", function() {
            b.HA("driving")
        });
        t.C(navBtn, "click", function() {
            window.open("http://wuxian.baidu.com/map/navi.html", "_blank");
            va("navlink")
        });
        d.appendChild(j);
        d.appendChild(e);
        d.appendChild(c);
        this.reset(a)
    },
    reset: function(a) {
        this.map = a.map;
        this.ub = a;
        this.position = a.ba();
        this.Hp("near");
        this.ME()
    },
    ME: function() {
        var a = this;
        setTimeout(function() {
            var b = a.ub.w.width,
                c = Math.floor((b - 2) / 3);
            a.Lz.style.width = c + "px";
            a.GA.style.width = c + "px";
            a.vy.style.width = b - 2 - 2 * c + "px"
        }, 100)
    },
    Hj: function() {
        return this.map.Al
    },
    gd: s("z"),
    HA: function(a) {
        var b = this.position.lat + "," + this.position.lng,
            c = navSearchTxt.value,
            d = this.Hj(),
            e;
        if (e = this.ub.w.title) e = t.lang.me(e) ? e.replace(/<\/?[^>]*>/g, "") : e.innerHTML.replace(/<\/?[^>]*>/g, ""), e = e.replace(/\u8be6\u60c5&raquo;/g, ""), b = "name:" + e + "|latlng:" + b;
        this.dz ? (e = b, b = c) : e = c;
        c = this.map.Dc() ? "vector" : "tile";
        window.open("http://api.map.baidu.com/direction?origin=" + e + "&destination=" + b + "&mode=" + a + "&output=html&src=jsapi&operate=searchtool&clicktype" + c + "&region=" + d, "_blank")
    },
    Hp: function(a) {
        var b = this.Lz,
            c = this.GA,
            d = this.GI,
            e = this.aI,
            f = this.$H,
            g = this.vy;
        t.hc.Sd([b, c, g], function(a) {
            a.style.background = "";
            a.style.cursor = "pointer"
        });
        var j = "url(" + this.F.ca + ") repeat-x 0 -44px",
            k = n;
        switch (a) {
            case "near":
                k = b;
                t.z.show(d);
                t.z.H(f);
                break;
            case "toHere":
                k = c;
                t.z.H(d);
                t.z.show(f);
                e.innerHTML = "\u8d77\u70b9";
                this.Ix("destination");
                break;
            case "fromHere":
                k = g, t.z.H(d), t.z.show(f), e.innerHTML = "\u7ec8\u70b9", this.Ix("origin")
        }
        k.style.background = j
    },
    Ix: function(a) {
        this.dz = "origin" == a ? i : o
    }
});
