
(function() {
    var data = typeof exports !== "undefined" ? exports : {};
    data.tzToOffset = {
        ACDT: -630,
        ACST: -570,
        ACT: -480,
        ADT: +180,
        AEDT: -660,
        AEST: -600,
        AFT: -270,
        AKDT: +480,
        AKST: +540,
        AMST: -300,
        AMT: -240,
        ART: +180,
        AST: -240,
        AWDT: -540,
        AWST: -480,
        AZOST: +60,
        AZT: -240,
        BDT: -480,
        BIOT: -360,
        BIT: +720,
        BOT: +240,
        BRT: +180,
        BST: -60,
        BTT: -360,
        CAT: -120,
        CCT: -390,
        CDT: +300,
        CEDT: -120,
        CEST: -120,
        CET: -60,
        CHAST: -765,
        ChST: -600,
        CIST: +480,
        CKT: +600,
        CLST: +180,
        CLT: +240,
        COST: +240,
        COT: +300,
        CST: -480,
        CST: +360,
        CVT: +60,
        CXT: -420,
        DFT: -60,
        EAST: +360,
        EAT: -180,
        ECT: +240,
        ECT: +300,
        EDT: +240,
        EEDT: -180,
        EEST: -180,
        EET: -120,
        EST: +300,
        FJT: -720,
        FKST: +240,
        GALT: +360,
        GET: -240,
        GFT: +180,
        GILT: -720,
        GIT: +540,
        GMT: 0,
        GST: +120,
        GYT: +240,
        HADT: +540,
        HAST: +600,
        HKT: -480,
        HMT: -300,
        HST: +600,
        IRKT: -480,
        IRST: -210,
        IST: -120,
        IST: -330,
        IST: -60,
        JST: -540,
        KRAT: -420,
        KST: -540,
        LHST: -630,
        LINT: -840,
        MAGT: -660,
        MDT: +360,
        MIT: +570,
        MSD: -240,
        MSK: -180,
        MST: -390,
        MST: -480,
        MST: +420,
        MUT: -240,
        NDT: +150,
        NFT: -690,
        NPT: -345,
        NST: +210,
        NT: +210,
        NZST: -720,
        NZDT: -780,
        OMST: -360,
        PDT: +420,
        PETT: -720,
        PHOT: -780,
        PKT: -300,
        PST: -480,
        PST: +480,
        RET: -240,
        SAMT: -240,
        SAST: -120,
        SBT: -660,
        SCT: -240,
        SLT: -330,
        SST: -480,
        SST: +660,
        TAHT: +600,
        THA: -420,
        UTC: 0,
        UYST: +120,
        UYT: +180,
        VET: +270,
        VLAT: -600,
        WAT: -60,
        WEDT: -60,
        WEST: -60,
        YAKT: -540,
        YEKT: -300
    };
    data.offsetToTz = {
        720: ["BIT"],
        660: ["SST"],
        600: ["HST", "CKT", "HAST", "TAHT"],
        570: ["MIT"],
        540: ["AKST", "GIT", "HADT"],
        480: ["PST", "AKDT", "CIST"],
        420: ["MST", "PDT"],
        360: ["CST", "EAST", "GALT", "MDT"],
        300: ["EST", "CDT", "COT", "ECT"],
        270: ["VET"],
        240: ["ECT", "AST", "BOT", "CLT", "COST", "EDT", "FKST", "GYT"],
        210: ["NT", "NST"],
        180: ["BRT", "ADT", "ART", "CLST", "GFT", "UYT"],
        150: ["NDT"],
        120: ["GST", "UYST"],
        60: ["AZOST", "CVT"],
        0: ["UTC", "GMT"],
        "-60": ["CET", "BST", "DFT", "IST", "WAT", "WEDT", "WEST"],
        "-120": ["EET", "CAT", "CEDT", "CEST", "IST", "SAST"],
        "-180": ["MSK", "AST", "AST", "EAT", "EEDT", "EEST"],
        "-210": ["IRST"],
        "-240": ["AST", "AMT", "AZT", "GET", "MSD", "MUT", "RET", "SAMT", "SCT"],
        "-270": ["AFT"],
        "-300": ["AMST", "HMT", "PKT", "YEKT"],
        "-330": ["IST", "SLT"],
        "-345": ["NPT"],
        "-360": ["BIOT", "BST", "BTT", "OMST"],
        "-390": ["CCT", "MST"],
        "-420": ["CXT", "KRAT", "THA"],
        "-480": ["ACT", "AWST", "BDT", "CST", "HKT", "IRKT", "MST", "PST", "SST"],
        "-540": ["AWDT", "JST", "KST", "YAKT"],
        "-570": ["ACST"],
        "-600": ["AEST", "ChST", "VLAT"],
        "-630": ["ACDT", "LHST"],
        "-660": ["AEDT", "MAGT", "SBT"],
        "-690": ["NFT"],
        "-720": ["FJT", "GILT", "PETT", "NZST"],
        "-765": ["CHAST"],
        "-780": ["PHOT", "NZDT"],
        "-840": ["LINT"]
    };
    data.weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    data.weekdaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    data.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    data.monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    data.intervals = [
        function(n) {
            return n !== 1 ? "years" : "year"
        },
        function(n) {
            return n !== 1 ? "months" : "month"
        },
        function(n) {
            return n !== 1 ? "weeks" : "week"
        },
        function(n) {
            return n !== 1 ? "days" : "day"
        },
        function(n) {
            return n !== 1 ? "hours" : "hour"
        },
        function(n) {
            return n !== 1 ? "minutes" : "minute"
        },
        function(n) {
            return n !== 1 ? "seconds" : "second"
        }
    ];
    data.intervalFormats = {
        ago: "% ago",
        "in": "in %"
    };
    data.ordinals = function(number) {
        switch (number % 10) {
            case 1:
                return number % 100 !== 11 ? "st" : "th";
            case 2:
                return number % 100 !== 12 ? "nd" : "th";
            case 3:
                return number % 100 !== 13 ? "rd" : "th";
            default:
                return "th"
        }
    };

    function pad2(i) {
        return i < 10 ? "0" + i : i
    }

    function pad2sign(i) {
        var sgn = i < 0 ? "-" : "+";
        i = Math.abs(i);
        return sgn + (i < 10 ? "0" + i : i)
    }

    function pad3(i) {
        return i < 10 ? "00" + i : i < 100 ? "0" + i : i
    }

    function pad4sign(i) {
        var sgn = i < 0 ? "-" : "+";
        i = Math.abs(i);
        return sgn + (i < 10 ? "000" + i : i < 100 ? "00" + i : i < 1e3 ? "0" + i : i)
    }
    Date.prototype.interval = function(other) {
        var self = this,
            inverse = self > other;
        if (inverse) {
            self = other;
            other = this
        }
        var parts = [other.getUTCFullYear() - self.getUTCFullYear(), other.getUTCMonth() - self.getUTCMonth(), 0, other.getUTCDate() - self.getUTCDate(), other.getUTCHours() - self.getUTCHours(), other.getUTCMinutes() - self.getUTCMinutes(), other.getUTCSeconds() - self.getUTCSeconds()];
        if (parts[6] < 0) {
            parts[5]--;
            parts[6] += 60
        }
        if (parts[5] < 0) {
            parts[4]--;
            parts[5] += 60
        }
        if (parts[4] < 0) {
            parts[3]--;
            parts[4] += 24
        }
        if (parts[3] < 0) {
            parts[1]--;
            parts[3] += self.getUTCDaysOfMonth()
        }
        if (parts[1] < 0) {
            parts[0]--;
            parts[1] += 12
        }
        parts[2] = parts[3] / 7 | 0;
        parts[3] -= parts[2] * 7;
        var fragments = [];
        for (var i = 0; i < parts.length; i++) {
            if (parts[i]) {
                fragments.push(parts[i] + " " + data.intervals[i](parts[i]))
            }
        }
        return fragments
    };
    Date.prototype.format = function(format, tz) {
        var time = this.getTime();
        if (tz === undefined) {
            tz = this.getTimezone();
            tzName = this.getTimezoneName()
        } else {
            var tzData = parseTimezone(tz);
            tz = tzData[0];
            var tzName = tzData[1]
        }
        this.setTime(time - tz * 6e4);
        var result = "";
        for (var i = 0; i < format.length; i++) {
            switch (format.charAt(i)) {
                case "d":
                    result += pad2(this.getUTCDate());
                    break;
                case "D":
                    result += data.weekdaysShort[this.getUTCDay()];
                    break;
                case "j":
                    result += this.getUTCDate();
                    break;
                case "l":
                    result += data.weekdays[this.getUTCDay()];
                    break;
                case "N":
                    result += this.getUTCDay() || 7;
                    break;
                case "S":
                    result += data.ordinals(this.getUTCDate());
                    break;
                case "w":
                    result += this.getUTCDay();
                    break;
                case "z":
                    result += this.getUTCDayOfYear();
                    break;
                case "W":
                    result += pad2(this.getUTCISOWeek());
                    break;
                case "F":
                    result += data.months[this.getUTCMonth()];
                    break;
                case "m":
                    result += pad2(this.getUTCMonth() + 1);
                    break;
                case "M":
                    result += data.monthsShort[this.getUTCMonth()];
                    break;
                case "n":
                    result += this.getUTCMonth() + 1;
                    break;
                case "t":
                    result += this.getUTCDaysOfMonth();
                    break;
                case "L":
                    result += this.isLeapYear() ? 1 : 0;
                    break;
                case "o":
                    result += this.getUTCISOFullYear();
                    break;
                case "Y":
                    result += this.getUTCFullYear();
                    break;
                case "y":
                    result += pad2(this.getUTCFullYear() % 100);
                    break;
                case "a":
                    result += this.getUTCHours() >= 12 ? "pm" : "am";
                    break;
                case "A":
                    result += this.getUTCHours() >= 12 ? "PM" : "AM";
                    break;
                case "g":
                    result += this.getUTCHours() % 12 || 12;
                    break;
                case "G":
                    result += this.getUTCHours();
                    break;
                case "h":
                    result += pad2(this.getUTCHours() % 12 || 12);
                    break;
                case "H":
                    result += pad2(this.getUTCHours());
                    break;
                case "i":
                    result += pad2(this.getUTCMinutes());
                    break;
                case "s":
                    result += pad2(this.getUTCSeconds());
                    break;
                case "u":
                    result += pad3(this.getUTCMilliseconds());
                    break;
                case "O":
                    result += pad4sign((tz < 0 ? 1 : -1) * (Math.floor(Math.abs(tz) / 60) * 100 + Math.abs(tz) % 60));
                    break;
                case "P":
                    result += pad2sign((tz < 0 ? 1 : -1) * Math.floor(Math.abs(tz) / 60)) + ":" + pad2(Math.abs(tz) % 60);
                    break;
                case "T":
                    result += tzName;
                    break;
                case "Z":
                    result += -tz * 60;
                    break;
                case "c":
                    this.setTime(time);
                    result += this.format("Y-m-d\\TH:i:sP", tz);
                    break;
                case "r":
                    this.setTime(time);
                    result += this.format("D, d M y H:i:s O", tz);
                    break;
                case "U":
                    result += Math.floor(this.getTime() / 1e3);
                    break;
                case "\\":
                    if (format.charAt(++i) !== undefined) result += format.charAt(i);
                    break;
                default:
                    result += format.charAt(i);
                    break
            }
        }
        this.setTime(time);
        return result
    };

    function parseTimezone(tz) {
        if (typeof tz === "number") {
            return [tz, tz in data.offsetToTz ? data.offsetToTz[tz][0] : ""]
        }
        var number = parseInt(tz, 10);
        if (isNaN(number)) {
            return [data.tzToOffset[tz], tz]
        } else {
            tz = (number < 0 ? 1 : -1) * (Math.floor(Math.abs(number) / 100) * 60 + Math.abs(number) % 100);
            return [tz, tz in data.offsetToTz ? data.offsetToTz[tz][0] : ""]
        }
    }
    Date.prototype.isLeapYear = function() {
        var y = this.getUTCFullYear();
        return y % 400 === 0 || y % 4 === 0 && y % 100 !== 0
    };
    Date.prototype.getUTCISOWeek = function() {
        var d = new Date(this);
        d.setUTCDate(d.getUTCDate() - (d.getUTCDay() || 7) + 4);
        return Math.ceil((d.getTime() - Date.UTC(d.getUTCFullYear(), 0)) / 864e5 / 7)
    };
    Date.prototype.getUTCISOFullYear = function() {
        var d = new Date(this);
        d.setUTCDate(d.getUTCDate() - (d.getUTCDay() || 7) + 4);
        return d.getUTCFullYear()
    };
    Date.prototype.getUTCDaysOfMonth = function() {
        var d = new Date(this);
        d.setUTCDate(1);
        d.setUTCMonth(d.getUTCMonth() + 1);
        d.setUTCDate(0);
        return d.getUTCDate()
    };
    Date.prototype.getUTCDayOfYear = function() {
        return Math.floor((this.getTime() - Date.UTC(this.getUTCFullYear(), 0)) / 864e5)
    };
    Date.prototype.getTimezone = function() {
        if (!("_tz" in this)) {
            var matches = (new Date).toString().match(/([A-Z]{3,4}|NT|ChST)(?![-\+])/);
            if (matches && matches[1]) {
                this.setTimezone(matches[1])
            } else {
                this.setTimezone((new Date).getTimezoneOffset())
            }
        }
        return this._tz
    };
    Date.prototype.getTimezoneName = function() {
        this.getTimezone();
        return this._tzName
    };
    Date.prototype.setTimezone = function(val) {
        var tzData = parseTimezone(val);
        this._tz = tzData[0];
        this._tzName = tzData[1]
    }
})();

;
var Streets = Streets || {};

Streets.decode = function(id) {
    return _((id.split('+')[1] || '').split('_')).reduce(function(memo, part) {
        var key = part;
        var val = '0x1;0x1;0x1;0x1';
        if (part.indexOf('-') !== -1) {
            key = part.substr(0, part.indexOf('-'));
            val = part.substr(part.indexOf('-') + 1);
        }
        switch (key) {
            case 'bg':
                if (!(/^[0-f]{6}$/.test(val))) break;
                memo[key] = val;
                break;
            case 'scale':
                val = parseInt(val, 10);
                if (val !== 1 && val !== 2) break;
                memo[key] = val;
                break;
            case 'l10n':
                if (!/^(en|fr|de|es)$/.test(val)) break;
                memo[key] = val;
                break;
            case 'water':
            case 'streets':
            case 'landuse':
            case 'buildings':
                var tintstring = Streets.parseTintString(val);
                if (!tintstring.h) break;
                memo[key] = _(tintstring).defaults({
                    h: [0, 1],
                    s: [0, 1],
                    l: [0, 1],
                    a: [0, 1]
                });
                break;
        }
        return memo;
    }, {
        bg: '',
        l10n: '',
        scale: 1,
        landuse: {
            h: [0, 1],
            s: [0, 1],
            l: [0, 1],
            a: [0, 0]
        },
        water: {
            h: [0, 1],
            s: [0, 1],
            l: [0, 1],
            a: [0, 0]
        },
        buildings: {
            h: [0, 1],
            s: [0, 1],
            l: [0, 1],
            a: [0, 0]
        },
        streets: {
            h: [0, 1],
            s: [0, 1],
            l: [0, 1],
            a: [0, 0]
        }
    });
};

Streets.encode = function(params) {
    var spec = _(['bg', 'l10n', 'scale', 'water', 'streets', 'landuse', 'buildings']).reduce(function(memo, key) {
        if (!params[key]) return memo;
        var val = params[key];
        switch (key) {
            case 'bg':
                if (!(/^[0-f]{6}$/.test(val))) break;
                memo.push(key + '-' + val);
                break;
            case 'l10n':
                if (!/^(en|fr|de|es)$/.test(val)) break;
                memo.push(key + '-' + val);
                break;
            case 'scale':
                val = parseInt(val, 10);
                if (val !== 1 && val !== 2) break;
                memo.push(key + '-' + val);
                break;
            default:
                if (!val.h) break;
                memo.push(key + '-' + Streets.hsl2tint(val));
                break;
        }
        return memo;
    }, []).join('_');
    return spec;
};

// Convert an HSL object to a hex string.
Streets.hsl2rgba = function(hsl) {
    var rgb = (function hsl2rgb(h, s, l) {
        if (!s) return [l * 255, l * 255, l * 255];

        var m1, m2;
        var hueToRGB = function(m1, m2, h) {
            h = (h + 1) % 1;
            if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
            if (h * 2 < 1) return m2;
            if (h * 3 < 2) return m1 + (m2 - m1) * (0.66666 - h) * 6;
            return m1;
        };

        m2 = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
        m1 = l * 2 - m2;
        return [
            hueToRGB(m1, m2, h + 0.33333) * 255,
            hueToRGB(m1, m2, h) * 255,
            hueToRGB(m1, m2, h - 0.33333) * 255
        ];
    })(Streets.avg(hsl.h), Streets.avg(hsl.s), Streets.avg(hsl.l));

    var a = (hsl.a && hsl.a.length === 2) ? hsl.a[1] : ('a' in hsl) ? hsl.a : 1;
    return 'rgba(' + _(rgb).map(Math.floor).join(',') + ',' + a + ')';
};

// Convert an HSL object to a hex string.
Streets.hsl2hex = function(hsl) {
    var rgb = (function hsl2rgb(h, s, l) {
        if (!s) return [l * 255, l * 255, l * 255];

        var m1, m2;
        var hueToRGB = function(m1, m2, h) {
            h = (h + 1) % 1;
            if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
            if (h * 2 < 1) return m2;
            if (h * 3 < 2) return m1 + (m2 - m1) * (0.66666 - h) * 6;
            return m1;
        };

        m2 = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
        m1 = l * 2 - m2;
        return [
            hueToRGB(m1, m2, h + 0.33333) * 255,
            hueToRGB(m1, m2, h) * 255,
            hueToRGB(m1, m2, h - 0.33333) * 255
        ];
    })(Streets.avg(hsl.h), Streets.avg(hsl.s), Streets.avg(hsl.l));

    var z = (rgb[0] << 16 | rgb[1] << 8 | rgb[2]).toString(16);
    while (z.length < 6) z = '0' + z;
    return z;
};

// Convert an HSL object to a node-blend tintspec string.
Streets.hsl2tint = function(hsl) {
    return _('<%=h[0].toFixed(2)%>x<%=h[1].toFixed(2)%>;' +
        '<%=s[0].toFixed(2)%>x<%=s[1].toFixed(2)%>;' +
        '<%=l[0].toFixed(2)%>x<%=l[1].toFixed(2)%>;' +
        '<%=a[0].toFixed(2)%>x<%=a[1].toFixed(2)%>')
        .template(_(hsl).chain().reduce(function(memo, v, k) {
            if (v && k === 'a') {
                memo[k] = v.length === 1 ? [0, v[0]] : v;
            } else if (v) {
                memo[k] = v.length === 1 ? [v[0], v[0]] : v;
            }
            return memo;
        }, {}).defaults({
            h: [0, 1],
            s: [0, 1],
            l: [0, 1],
            a: [0, 1]
        }).value());
};

// Directly copied from node-blend.
Streets.rgb2hsl = function(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var delta = max - min;
    var gamma = max + min;
    var h = 0,
        s = 0,
        l = gamma / 2;

    if (delta) {
        s = l > 0.5 ? delta / (2 - gamma) : delta / gamma;
        if (max == r && max != g) h = (g - b) / delta + (g < b ? 6 : 0);
        if (max == g && max != b) h = (b - r) / delta + 2;
        if (max == b && max != r) h = (r - g) / delta + 4;
        h /= 6;
    }

    h = h > 1 ? 1 : h < 0 ? 0 : h;
    s = s > 1 ? 1 : s < 0 ? 0 : s;
    l = l > 1 ? 1 : l < 0 ? 0 : l;
    return [h, s, l];
};

Streets.parseTintString = function(str) {
    if (!str || !str.length) return {};

    var options = {};
    var hex = str.match(/^#?([0-9a-f]{6})$/i);
    if (hex) {
        var hsl = Streets.rgb2hsl(
            parseInt(hex[1].substring(0, 2), 16),
            parseInt(hex[1].substring(2, 4), 16),
            parseInt(hex[1].substring(4, 6), 16)
        );
        options.h = [hsl[0], hsl[0]];
        options.s = [hsl[1], hsl[1]];
        // Map midpoint grey to the color value, stretching values to
        // preserve white/black range. Will preserve good contrast and
        // midtone color at the cost of clipping extreme light/dark values.
        var l = hsl[2];
        var y0, y1;
        if (l > 0.5) {
            y0 = 0;
            y1 = l * 2;
        } else {
            y0 = l - (1 - l);
            y1 = 1;
        }
        options.l = [y0, y1];
    } else {
        var parts = str.split(';');
        var split_opt = function(opt) {
            if (opt.indexOf('x') > -1) {
                var pair = opt.split('x');
                return [parseFloat(pair[0]), parseFloat(pair[1])];
            } else {
                var value = parseFloat(opt);
                return [value, value];
            }
        };
        if (parts.length > 0) options.h = split_opt(parts[0]);
        if (parts.length > 1) options.s = split_opt(parts[1]);
        if (parts.length > 2) options.l = split_opt(parts[2]);
        if (parts.length > 3) options.a = split_opt(parts[3]);
    }

    return options;
};

// Wrapper around Streets.parseTintString.
Streets.tint2hsl = function(str) {
    if (!str) return false;

    // Convert a hex string into hsv.
    if (/^[0-9a-f]{6}$/i.test(str)) {
        var hsl = Streets.parseTintString(str);
        // The hex range stretch in parseTintString needs to be
        // undone for the purposes of setting a hex value.
        hsl.l = [Streets.avg(hsl.l), Streets.avg(hsl.l)];
        return hsl;
    }

    // No tint string.
    if (str.indexOf('+') < 0) return false;

    // Tint string.
    return Streets.parseTintString(str.split('+').pop());
};

Streets.avg = function(arr) {
    return typeof arr === 'number' ? arr : _(arr).reduce(function(sum, v) {
        sum += v;
        return sum;
    }, 0) / arr.length;
};

Streets.delta = function(arr) {
    return Math.abs(arr[1] - arr[0]) * 0.5
};

Streets.enabled = function(arr) {
    return !arr || (arr && arr[1] > 0) ? 1 : 0
};

Streets.inverted = function(arr) {
    return (arr[1] < arr[0]) ? 1 : 0
};

// Determine whether this configuration is a no-op
// (ie. all layers and background are transparent).
Streets.empty = function(id) {
    return _(Streets.decode(id)).all(function(v, k) {
        if (k === 'bg') return v === '';
        if (!v.h) return true;
        if (v.a[0] <= 0 && v.a[1] <= 0) return true;
        return false;
    });
};

Streets.styles = function(layers, skipalike) {
    function convert(layers) {
        return _(['base.mapbox-streets'].concat(layers)).reduce(function(memo, l) {
            if (!l) return memo;
            var p = l.split('+');
            if (p[0] === 'base.mapbox-streets') {
                var config = Streets.decode(l);
                memo.l10n = config.l10n;
                memo.scale = config.scale;
                memo.bg = Streets.style(config.bg && Streets.parseTintString(config.bg), 'bg');
                memo.streets = Streets.style(config.streets, 'streets');
                memo.landuse = Streets.style(config.landuse, 'landuse');
                memo.buildings = Streets.style(config.buildings, 'buildings');
                memo.water = Streets.style(config.water, 'water');
            } else {
                memo[p[0]] = Streets.style(p[1] && Streets.parseTintString(p[1]), p[0]);
            }
            return memo;
        }, {});
    }
    var styles = convert(layers);

    if (skipalike) return styles;

    _(Streets.recipes).each(function(op, id) {
        var hsl = op.control(styles);
        var type = Streets.type(styles);
        var palette = convert(Streets.styles2layers(op.hsl(hsl, type)));
        var alike = _(styles).chain().omit('l10n', 'scale').all(function(astyle, l) {
            if (!palette[l]) return false;
            var bstyle = palette[l];
            return _(astyle).all(function(a, key) {
                if (!(key in bstyle)) return false;
                var b = bstyle[key];
                return typeof a === 'number' ? Math.abs(a - b) <= 0.05 : a === b;
            });
        }).value();
        if (alike) {
            styles.whiz = _(hsl).clone();
            styles.whiz.palette = id;
        }
    });
    styles.whiz = styles.whiz || Streets.style(Streets.parseTintString('#73b6e6'));

    return styles;
};

// Returns a swatch object with the following properties:
// - data: true/false for should display data layers
// - icon: a base.css icon to display for the swatch
// - rgba: the rgba background color to display
Streets.swatch = function(layers) {
    var data = _(layers).any(function(l) {
        return l.indexOf('base.') === -1
    });
    var styles = Streets.styles(layers);
    var type = Streets.type(styles);
    var icon = ({
        streets: 'street',
        terrain: 'mt',
        satellite: 'satellite'
    })[type];
    var b = ({
        streets: 'water',
        terrain: 'water',
        satellite: 'streets'
    })[type];
    var a = ({
        streets: 'bg',
        terrain: 'base.live-land-tr',
        satellite: 'base.live-satellite'
    })[type];
    a = Streets.style2swatch(styles[a], a);
    b = Streets.style2swatch(styles[b], b);
    var classes = (a.l > 0.5 && a.s < 0.5) || a.a < 0.5 ? 'quiet' : 'dark';
    a = a.a > 0.1 ? Streets.hsl2rgba(a) : '#ddd';
    b = b.a > 0.1 ? Streets.hsl2rgba(b) : '#eee';
    return {
        type: type,
        icon: icon,
        a: a,
        b: b,
        data: data,
        classes: classes
    };
};

Streets.styles2layers = function(styles) {
    var c = function(v) {
        return Math.max(0, Math.min(1, v))
    };

    // Flag for determining whether all streets layers are turned off.
    var streets = _(styles).chain()
        .pick(['bg', 'streets', 'water', 'buildings', 'landuse'])
        .any(function(s) {
            return s.on;
        })
        .value();

    var hsla = _(styles).reduce(function(memo, s, id) {
        if (id === 'bg') {
            memo[id] = s.on ? Streets.style2hex(s) : '';
        } else if (typeof s === 'object' && 'h' in s) {
            memo[id] = {
                h: [c(s.h - s.hd), c(s.h + s.hd)],
                s: [c(s.s - s.sd), c(s.s + s.sd)],
                l: s.inv ? [c(s.l + s.ld), c(s.l - s.ld)] : [c(s.l - s.ld), c(s.l + s.ld)],
                a: [0, c(s.on ? s.a : 0)]
            };
        } else {
            memo[id] = s;
        }
        return memo;
    }, {});
    return _(hsla).chain().keys()
        .filter(function(id) {
            return id.indexOf('base.') !== -1
        })
        .sortBy(function(id) {
            if (id === 'base.live-satellite') return -3;
            if (id === 'base.live-land-tr') return -2;
            if (id === 'base.live-landuse-tr') return -1;
            return 0;
        })
        .map(function(id) {
            return hsla[id] ? id + '+' + Streets.hsl2tint(hsla[id]) : id
        })
        .value()
        .concat(streets ? ['base.mapbox-streets+' + Streets.encode(hsla)] : []);
};

Streets.style = function make(style, id) {
    style = (id === 'bg') ?
        (style || {
        h: [0, 1],
        s: [0, 1],
        l: [0, 1],
        a: [0, 0]
    }) :
        (style || {
        h: [0, 1],
        s: [0, 1],
        l: [0, 1],
        a: [0, 1]
    });
    style.on = style.on || (!style.a || (style.a && style.a[1] > 0));
    style.inv = style.inv || (style.l[0] > style.l[1]);
    style.hd = style.hd || Streets.delta(style.h);
    style.sd = style.sd || Streets.delta(style.s);
    style.ld = style.ld || (id === 'bg' ? 0 : Streets.delta(style.l));

    style.h = Streets.avg(style.h);
    style.s = Streets.avg(style.s);
    style.l = Streets.avg(style.l);
    style.a = !style.a ? 1 : style.a[1];
    return style;
};

Streets.type = function(styles) {
    return styles['base.live-satellite'] ? 'satellite' : styles['base.live-land-tr'] ? 'terrain' : 'streets';
};

// Swatch is a visualization of what a given layer/style will look like
// post-hsla adjustment. It is based on a hardcoded mapping of the perceived
// "main color" of a given layer as the origin color prior to adjustment.
Streets.style2swatch = function(s, id) {
    var origins = {
        bg: '#e8e0d8',
        streets: '#ffffff',
        landuse: '#c8df9f',
        buildings: '#d5ccc1',
        water: '#73b6e6',
        whiz: '#777777',
        'base.live-land-tr': '#c8df9f',
        'base.live-landuse-tr': '#e8e0d8',
        'base.live-satellite': '#626940',
    };

    if (!origins[id]) return {
        h: 0,
        s: 0,
        l: 0,
        a: 0
    };

    var orig = Streets.parseTintString(origins[id]);
    orig.h = Streets.avg(orig.h);
    orig.s = Streets.avg(orig.s);
    orig.l = Streets.avg(orig.l);
    orig.a = 1;
    var tinted = {};

    // Convert style to tintspec and ramp each hsla value.
    var c = function(v) {
        return Math.max(0, Math.min(1, v))
    };
    var tintspec = {
        h: [c(s.h - s.hd), c(s.h + s.hd)],
        s: [c(s.s - s.sd), c(s.s + s.sd)],
        l: s.inv ? [c(s.l + s.ld), c(s.l - s.ld)] : [c(s.l - s.ld), c(s.l + s.ld)],
        a: [0, c(s.on ? s.a : 0)]
    };
    var tinted = _(orig).reduce(function(memo, val, key) {
        memo[key] = tintspec[key][0] + (val * (tintspec[key][1] - tintspec[key][0]));
        return memo;
    }, {});
    return tinted;
};

Streets.style2rgba = function(style) {
    return Streets.hsl2rgba(style);
};

Streets.style2hex = function(style) {
    return Streets.hsl2hex(style);
};

Streets.style2hue = function(style) {
    return Streets.hsl2hex({
        h: style.h,
        s: 1,
        l: 0.5
    });
};

// Each recipe is an object with
// - name, UI name of the recipe
// - hsl, function that takes an hsl and generates a full styles hash (palette)
// - styles, function that takes a full styles hash and generates a full styles hash (palette)
Streets.recipes = {};
Streets.recipes.streets = (function() {
    var exports = {};
    exports.name = 'Streets';
    exports.swatches = [
        'f5c272',
        'd27591',
        '9c89cc',
        '548cba',
        '63b6e5',
        'b7ddf3'
    ];
    exports.hsl = function(hsl, type) {
        var presets = _({
            'f5c272': 'base.mapbox-streets+bg-c6916b_water-0.10x0.10;0.86x0.86;0.70x0.70;0.00x1.00_streets-0.11x0.11;0.68x0.84;0.01x0.83;0.00x1.00_landuse-0.15x0.35;0.10x0.52;0.28x0.60;0.00x1.00_buildings-0.05x0.05;0.28x0.78;0.07x0.69;0.00x1.00',
            'd27591': 'base.mapbox-streets+bg-975d6e_water-0.94x0.94;0.50x0.50;0.64x0.64;0.00x1.00_streets-0.91x0.91;0.12x0.46;0.78x0.34;0.00x1.00_landuse-0.43x0.63;0.90x0.98;0.04x0.36;0.00x0.44_buildings-0.08x0.08;0.74x1.00;0.38x0.64;0.00x0.37',
            '9c89cc': 'base.mapbox-streets+bg-574152_water-0.71x0.71;0.40x0.40;0.67x0.67;0.00x1.00_streets-0.03x0.03;0.17x0.83;0.86x0.14;0.00x1.00_landuse-0.62x0.82;0.03x0.41;0.05x0.31;0.00x1.00_buildings-0.09x0.09;0.13x1.00;0.41x0.41;0.00x1.00',
            '548cba': 'base.mapbox-streets+bg-bfd8d3_water-0.57x0.57;0.42x0.42;0.53x0.53;0.00x1.00_streets-0.51x0.51;0.18x0.32;0.40x0.92;0.00x1.00_landuse-0.36x0.56;0.05x0.63;0.22x0.92;0.00x1.00_buildings-0.27x0.27;0.00x0.56;0.29x1.00;0.00x1.00',
            '63b6e5': 'base.mapbox-streets+bg-e8e0d8_water-0.57x0.57;0.69x0.69;0.67x0.67;0.00x1.00_streets-0.00x1.00;0.00x1.00;0.00x1.00;0.00x1.00_landuse-0.15x0.35;0.00x1.00;0.00x1.00;0.00x1.00_buildings-0.09x0.09;0.00x0.76;0.00x1.00;0.00x1.00',
            'b7ddf3': 'base.mapbox-streets+bg-ffefd1_water-0.56x0.56;0.71x0.71;0.83x0.83;0.00x1.00_streets-0.00x0.91;0.00x1.00;0.25x1.00;0.00x1.00_landuse-0.12x0.32;0.25x0.93;0.31x0.97;0.00x1.00_buildings-0.11x0.11;0.42x0.92;0.33x0.99;0.00x1.00'
        }).reduce(function(memo, layer, key) {
            memo[key] = Streets.styles(layer.split(','), true);
            return memo;
        }, {});
        var satellite = _({
            'f5c272': 'base.live-satellite+0.00x0.68;0.00x0.44;0.44x1.00;0.00x1.00,base.mapbox-streets+water-0.10x0.10;0.86x0.86;0.70x0.70;0.00x1.00_streets-0.00x1.00;0.00x1.00;0.00x1.00;0.00x1.00',
            'd27591': 'base.live-satellite+0.00x0.46;0.00x0.66;0.09x0.88;0.00x1.00,base.mapbox-streets+water-0.94x0.94;0.50x0.50;0.64x0.64;0.00x1.00_streets-0.00x1.00;0.00x1.00;1.00x0.00;0.00x1.00',
            '9c89cc': 'base.live-satellite+0.35x1.00;0.00x0.37;0.00x0.79;0.00x1.00,base.mapbox-streets+water-0.71x0.71;0.40x0.40;0.67x0.67;0.00x1.00_streets-0.00x1.00;0.00x1.00;1.00x0.00;0.00x1.00',
            '548cba': 'base.live-satellite+0.00x1.00;0.00x1.00;0.00x1.00;0.00x1.00,base.mapbox-streets+water-0.57x0.57;0.42x0.42;0.53x0.53;0.00x1.00_streets-0.00x1.00;0.00x1.00;1.00x0.00;0.00x1.00',
            '63b6e5': 'base.live-satellite+0.00x0.97;0.00x0.72;0.24x1.00;0.00x1.00,base.mapbox-streets+water-0.57x0.57;0.69x0.69;0.67x0.67;0.00x1.00_streets-0.00x1.00;0.00x1.00;1.00x0.00;0.00x1.00',
            'b7ddf3': 'base.live-satellite+0.00x0.94;0.00x0.47;0.44x1.00;0.00x1.00,base.mapbox-streets+water-0.56x0.56;0.71x0.71;0.83x0.83;0.00x1.00_streets-0.00x1.00;0.00x1.00;0.00x1.00;0.00x1.00'
        }).reduce(function(memo, layer, key) {
            memo[key] = Streets.styles(layer.split(','), true);
            return memo;
        }, {});

        function hash(hsl) {
            if (typeof hsl === 'string') hsl = Streets.style(Streets.parseTintString(hsl));
            return (Math.floor(hsl.h * 10) * 1000) +
                (Math.floor(hsl.l * 10) * 100) +
                ((Math.floor(hsl.h * 100) % 10) * 10) +
                ((Math.floor(hsl.l * 100) % 10) * 1);
        }
        var input = hash(hsl);
        var preset = _(_(presets).keys()).reduce(function(memo, key) {
            if (!memo) return key;
            var a = Math.abs(hash(memo) - input);
            var b = Math.abs(hash(key) - input);
            return b < a ? key : memo;
        }, false);
        if (type === 'satellite') {
            var palette = satellite[preset];
            palette.swatch = preset;
            return palette;
        }
        // No-op.
        var palette;
        if (_(hsl).chain().omit('palette').isEqual(Streets.style()).value()) {
            palette = Streets.styles(['base.mapbox-streets+bg-e8e0d8_water_streets_landuse_buildings'], true);
            preset = '63b6e5';
        } else {
            palette = presets[preset];
        }
        palette['base.live-land-tr'] = _({
            ld: 0.2
        }).defaults(palette.bg);
        palette['base.live-landuse-tr'] = _({
            ld: 0.2
        }).defaults(palette.landuse);
        palette.swatch = preset;
        return palette;
    };
    exports.control = function(styles) {
        return styles.water
    };
    return exports;
})();
Streets.recipes.basic = (function() {
    var exports = {};
    exports.name = 'Basic';
    exports.hsl = function(hsl, type) {
        var palette = {
            water: {
                h: 0.23,
                s: 0.50,
                l: 0.75,
                a: 1,
                ld: 0.0,
                sd: 0.0,
                hd: 0,
                on: true,
                inv: false
            },
            landuse: {
                h: 0.57,
                s: 0.26,
                l: 0.68,
                a: 1,
                ld: 0.0,
                sd: 0.0,
                hd: 0,
                on: true,
                inv: false
            },
            buildings: {
                h: 0.08,
                s: 0.26,
                l: 0.80,
                a: 1,
                ld: 0.0,
                sd: 0.0,
                hd: 0,
                on: true,
                inv: false
            },
            streets: {
                h: 0.23,
                s: 0.00,
                l: 0.75,
                a: 1,
                ld: 0.5,
                sd: 0.0,
                hd: 0,
                on: true,
                inv: false
            },
            bg: {
                h: 0.08,
                s: 0.26,
                l: 0.88,
                a: 1,
                ld: 0.0,
                sd: 0.0,
                hd: 0,
                on: true,
                inv: false
            }
        };
        _(['landuse', 'buildings', 'bg']).each(function(k) {
            var hp = (palette[k].h - palette.water.h) * hsl.s;
            var lm = Math.min(0.75 + hsl.l, 1.10);
            var sm = Math.pow(1.00 - hsl.s, 2.00);
            palette[k].h = (hsl.h + hp) % 1;
            palette[k].l = Math.min(1, palette[k].l * lm);
            palette[k].s = Math.min(1, palette[k].s * sm);
        });
        if (type === 'satellite') {
            palette['base.live-satellite'] = {
                h: hsl.h,
                s: hsl.s,
                l: hsl.l,
                a: 1,
                hd: 0.1,
                sd: 0.2,
                ld: 0.2,
                on: true,
                inv: false
            };
            palette.streets.a = 0.8;
            palette.streets.inv = palette['base.live-satellite'].l < 0.75;
            return palette;
        }
        palette.streets.inv = palette.bg.l < 0.75;
        palette.water.h = hsl.h;
        palette.water.s = hsl.s;
        palette.water.l = hsl.l;
        palette['base.live-land-tr'] = _({
            ld: 0.2
        }).defaults(palette.bg);
        palette['base.live-landuse-tr'] = _({
            ld: 0.2
        }).defaults(palette.landuse);
        return palette;
    };
    exports.control = function(styles) {
        return styles.water
    };
    return exports;
})();
Streets.recipes.accent = (function() {
    var exports = {};
    exports.name = 'Accent';
    exports.hsl = function(hsl, type) {
        var palette = {
            water: {
                h: 0.57,
                s: 0.26,
                l: 0.68,
                a: 1,
                ld: 0.0,
                sd: 0.0,
                hd: 0,
                on: true,
                inv: false
            },
            landuse: {
                h: 0.23,
                s: 0.50,
                l: 0.75,
                a: 1,
                ld: 0.0,
                sd: 0.0,
                hd: 0,
                on: true,
                inv: false
            },
            buildings: {
                h: 0.08,
                s: 0.26,
                l: 0.80,
                a: 1,
                ld: 0.0,
                sd: 0.0,
                hd: 0,
                on: true,
                inv: false
            },
            streets: {
                h: 0.23,
                s: 0.00,
                l: 0.75,
                a: 1,
                ld: 0.5,
                sd: 0.0,
                hd: 0,
                on: true,
                inv: false
            },
            bg: {
                h: 0.08,
                s: 0.26,
                l: 0.88,
                a: 1,
                ld: 0.0,
                sd: 0.0,
                hd: 0,
                on: true,
                inv: false
            }
        };
        _(['water', 'buildings', 'bg']).each(function(k) {
            var hp = (palette[k].h - palette.landuse.h) * hsl.s;
            var lm = Math.min(0.75 + hsl.l, 1.10);
            var sm = Math.pow(1.00 - hsl.s, 2.00);
            palette[k].h = (hsl.h + hp) % 1;
            palette[k].l = Math.min(1, palette[k].l * lm);
            palette[k].s = Math.min(1, palette[k].s * sm);
        });
        if (type === 'satellite') {
            palette['base.live-satellite'] = _({
                hd: 0.1,
                sd: 0.2,
                ld: 0.2
            }).defaults(palette.water);
            palette.streets = {
                h: hsl.h,
                s: hsl.s,
                l: hsl.l,
                a: 0.8,
                ld: 0.3,
                sd: 0,
                hd: 0,
                on: true,
                inv: palette['base.live-satellite'].l < 0.75
            };
            return palette;
        }
        palette.streets.inv = palette.bg.l < 0.75;
        palette.landuse.h = hsl.h;
        palette.landuse.s = hsl.s;
        palette.landuse.l = hsl.l;
        palette['base.live-land-tr'] = _({
            ld: 0.2
        }).defaults(palette.bg);
        palette['base.live-landuse-tr'] = _({
            ld: 0.2
        }).defaults(palette.landuse);
        return palette;
    };
    exports.control = function(styles) {
        return styles.landuse
    };
    return exports;
})();
Streets.recipes.monochrome = (function() {
    var exports = {};
    exports.name = 'Monochrome';
    exports.hsl = function(hsl, type) {
        var keys = ['water', 'landuse', 'buildings', 'bg', 'streets'];
        var palette = {
            water: {
                h: -0.03,
                s: -0.10,
                l: -0.25,
                a: 1.0,
                ld: 0.0,
                sd: 0.0,
                hd: 0,
                on: true,
                inv: false
            },
            landuse: {
                h: -0.02,
                s: 0.00,
                l: -0.10,
                a: 1.0,
                ld: 0.2,
                sd: 0.0,
                hd: 0,
                on: true,
                inv: false
            },
            buildings: {
                h: -0.01,
                s: 0.00,
                l: -0.05,
                a: 1.0,
                ld: 0.2,
                sd: 0.0,
                hd: 0,
                on: true,
                inv: false
            },
            streets: {
                h: 0.00,
                s: -0.50,
                l: 0.10,
                a: 1.0,
                ld: 0.5,
                sd: 0.2,
                hd: 0,
                on: true,
                inv: false
            },
            bg: {
                h: 0.00,
                s: 0.00,
                l: 0.00,
                a: 1.0,
                ld: 0.0,
                sd: 0.0,
                hd: 0,
                on: true,
                inv: false
            }
        };
        _(keys).each(function(k, i) {
            _(['h', 's', 'l']).each(function(a) {
                palette[k][a] = palette[k][a] + hsl[a];
                palette[k][a] = Math.max(0, palette[k][a]);
                palette[k][a] = Math.min(1, palette[k][a]);
            });
        });
        palette.streets.inv = palette.bg.l < 0.75;
        palette['base.live-land-tr'] = _({
            ld: 0.2
        }).defaults(palette.bg);
        palette['base.live-landuse-tr'] = palette.landuse;
        palette['base.live-satellite'] = palette.landuse;
        return palette;
    };
    exports.control = function(styles) {
        return styles.bg
    };
    return exports;
})();



;
if (typeof App === 'undefined') var App = {};
var analytics = analytics || undefined;
if (App.user && analytics) {
    var u = App.user;
    // Record event in segment.io
    analytics.identify(u.id, {
        name: u.name || u.id,
        plan: u.plan.id.replace('2', '')
    });
}

var Views = {};

App.api = '';
App.user = App.user || null;
App.newmap = '?newmap=1';
App.tmpkey = (+new Date()).toString(26).substr(-8);
App.cache = {};
App.map = null;
App.templates = {};
App.colors = [
    'f1f075', 'eaf7ca', 'c5e96f', 'a3e46b', '7ec9b1', 'b7ddf3', '63b6e5', '3ca0d3',
    '1087bf', '548cba', '677da7', '9c89cc', 'c091e6', 'd27591', 'f86767', 'e7857f',
    'fa946e', 'f5c272', 'ede8e4', 'ffffff', 'cccccc', '6c6c6c', '1f1f1f', '000000'
];
_(App).extend(Backbone.Events);

// App storage init.
App._storage = (function() {
    var storage;
    try {
        storage = localStorage;
    } catch (err) {}
    storage = storage || (function() {
        var s = {};
        return {
            getItem: function(k) {
                return s[k];
            },
            setItem: function(k, v) {
                s[k] = v;
            },
            removeItem: function(k) {
                delete s[k];
            }
        };
    })();
    // Clear out localStorage properties that are not scoped to the
    // current or anon users. Skips `editor.help` which is not sensitive
    // information.
    for (var k in storage) {
        if (/getItem|setItem|removeItem/.test(k)) continue;
        if (k.indexOf('_anon.') === 0) continue;
        if (App.user && App.user.id && k.indexOf(App.user.id) === 0) continue;
        if ((/editor\.help$/).test(k)) continue;
        storage.removeItem(k);
    }
    return storage;
})();

// Wrapper around localStorage.
// Handles scoping of storage by active user id, error handling.
App.storage = function(k, v) {
    k = App.user && App.user.id ? App.user.id + '.' + k : '_anon.' + k;
    try {
        if (arguments.length === 1) {
            return App._storage.getItem(k);
        } else if (v === null) {
            return App._storage.removeItem(k);
        } else {
            return App._storage.setItem(k, v);
        }
    } catch (err) {
        // localstorage quota exceeded
        if (typeof console !== 'undefined') console.error(err);
    }
};

// Generate a volatile temporary mapid.
App.tmpmap = function() {
    return 'tmp.' + (+new Date()).toString(26).substr(-8);
};

// Set/get the current active ('editing') map.
// For any invalid combinations a stable tmpmap id is returned instead.
// This method turns volatile temporary map IDs into a single cacheable
// tmp.tmpmap ID. Note that this is replaced JIT by App.save.
App.editing = function(arg) {
    arg = arg || App.map || '';
    if (App.user && App.user.group === 'admin' && (/[a-z0-9-_]+\.[a-z0-9-_]+/i).test(arg)) {
        arg = arg;
    } else if (App.user && arg.indexOf(App.user.id) === 0 && (/[a-z0-9-_]+\.[a-z0-9-_]+/i).test(arg)) {
        arg = arg;
    } else {
        arg = 'tmp.tmpmap';
    }
    App.map = arg;
    App.storage('editor.map', arg);
    return App.map;
};

// For a given object type return its appropriate Backbone Model or Collection.
// Currently uses generic Backbone.Model and Backbone.Collection handlers, may
// become more sophisticated in the future.
App.objtype = function(url) {
    // Search
    if ((/^\/api\/User\/search\/[a-z0-9-_]+/i).test(url)) {
        return Backbone.Collection;
    }
    // Admin
    if ((/^\/api\/User\/(created|stats)\/[a-z0-9-_]+/i).test(url)) {
        return Backbone.Collection;
    }
    // Timeline
    if ((/^\/api\/Timeline/i).test(url)) {
        return Backbone.Collection;
    }
    // url matches pattern for models.
    if ((/^\/api\/(Map|Markers|User|Statement|Statistics|Subscription)\/[a-z0-9-_]+/i).test(url)) {
        return Backbone.Model;
    }
    // url matches pattern for collections.
    if ((/^\/api\/(Map|Statement)[^\/]/i).test(url)) {
        var C = Backbone.Collection.extend({});
        C.prototype.model = Backbone.Model.extend({});
        C.prototype.model.prototype.url = function() {
            return App.api + '/api/Map/' + this.id;
        };
        return C;
    }
    // Feed
    if ((/^\/api\/feed\/[a-z0-9-_]+/i).test(url)) {
        return Backbone.Collection;
    }
    if ((/^\/api\/(Plans)[^\/]*/i).test(url)) {
        var C = Backbone.Collection.extend({});
        C.prototype.model = Backbone.Model.extend({});
        C.prototype.model.prototype.isUpgrade = function(plan) {
            var price = (function() {
                if (plan) {
                    return plan.get ? plan.get('price') : plan.price;
                } else {
                    return App.user ? App.user.plan.price : 0;
                }
            })();
            if (this.get('price') > price) return true;
            else return false;
        };
        return C;
    }
    throw new Error('Could not determine objtype of url ' + url);
};

// Retrieve a model/collection for a given api URL endpoint.
// Implements a singleton/locking model to prevent multiple requests/model
// instances from being created for the same request on a given page.
App.fetch = function(url, refresh, callback) {
    if ('function' === typeof refresh) {
        callback = refresh;
        refresh = false;
    }
    // Workaround for relative URLs served by internal mapbox api.
    // @TODO fix in the API once frontend is deprecated.
    function absolute(tilejson) {
        _(['tiles', 'grids', 'embed', 'thumb', 'data', 'geocoder']).each(function(key) {
            if (!(key in tilejson)) return;
            tilejson[key] = _(tilejson[key]).isArray() ? _(tilejson[key]).map(fixurl) : fixurl(tilejson[key]);
        });
    }

    function fixurl(url) {
        if (url.indexOf('/v3') !== 0) return url;
        return App.api + url;
    }

    callback = callback || function() {};
    var cache = App.cache[url];
    if (cache && !refresh) {
        if (cache.synced) return callback(null, App.cache[url]);
        cache.once('sync', function(obj, res) {
            return callback(null, obj);
        });
        cache.once('error', function(obj, err) {
            return callback(err);
        });
    } else {
        App.cache[url] = new(App.objtype(url))();
        App.cache[url].url = App.api + url;
        (function fetch() {
            App.cache[url].fetch({
                success: function(obj, res) {
                    if (obj.models) {
                        obj.each(function(m) {
                            absolute(m.attributes);
                            // Each individual model in the collection can also
                            // be cached by reference.
                            m.synced = true;
                            App.cache[m.url().replace(App.api, '')] = m;
                        });
                    } else if (obj.attributes) {
                        absolute(obj.attributes);
                    }
                    obj.synced = true;
                    callback(null, obj);
                    App.trigger('fetch', obj);
                },
                error: function(model, err) {
                    if (err.status === 401 && !Views.modal.modals.auth) {
                        return Views.modal.show('auth', App.user ? {
                            username: App.user.id
                        } : {}, function() {
                            fetch();
                        });
                    }
                    delete App.cache[url];
                    callback(err);
                }
            });
        })();
    }
};

// Run fetch in parallel for an array of URLs.
App.fetchall = function(urls, callback) {
    var loaded = new Array(urls.length);
    var error;
    _(urls).each(function(url, idx) {
        App.fetch(url, function(err, obj) {
            error = error || err;
            loaded[idx] = err || obj;
            if (_(loaded).compact().length === urls.length) {
                callback(error, _(loaded).filter(function(obj) {
                    return (obj instanceof Backbone.Model) || (obj instanceof Backbone.Collection);
                }));
            }
        });
    });
};

// Wrapper around model.save().
// Handles temporary ID replacement and attempts an auth challenge on 40x
// responses before returning an error to the caller.
App.save = function(obj, callback) {
    if (!(obj instanceof Backbone.Model)) throw new Error('Object is not a model');

    // Replace tmp scoped IDs if authenticated user is present.
    // @TODO would be great if the API could handle this.
    if (obj.id && (/^tmp\./).test(obj.id) && App.user) {
        obj.set({
            id: App.user.id + '.' + App.tmpkey
        });
        obj.url = obj.url.replace(/tmp\.[a-z0-9-]+/i, obj.id);
    }

    obj.save({}, {
        success: function(obj, res) {
            callback(null, obj)
        },
        error: function(obj, err) {
            // The server is requesting reauthorization either because the user
            // isn't logged in or because the logged in user's session is too
            // old to complete the operation.
            if (err.status === 401 && !Views.modal.modals.auth) {
                return Views.modal.show('auth', App.user ? {
                    username: App.user.id
                } : {}, function() {
                    App.save(obj, callback);
                });
            }
            // User is not authed in. Request log in and retry.
            // TODO: API should be more explicit about sending 401 to request authorization.
            if (!App.user && [403, 404].indexOf(err.status) >= 0 && !Views.modal.modals.auth) {
                return Views.modal.show('auth', {
                    close: true
                }, function(err) {
                    if (err) return callback(err);
                    App.save(obj, callback);
                });
            }
            // User is logged in. Payment required.
            // @TODO currently the plan upgrade reason 'satellite' is hardcoded
            // here. Have the API return this in the future.
            if (App.user && [402].indexOf(err.status) >= 0) {
                return App.plan('basic2', 'satellite', function(err) {
                    if (err) return callback(err);
                    App.save(obj, callback);
                });
            }
            return callback(err);
        }
    });
};

// Wrapper around model.destroy().
// Clears singleton cache when a model is destroyed.
App.destroy = function(obj, callback) {
    if (!(obj instanceof Backbone.Model)) throw new Error('Object is not a model');
    obj.destroy({
        success: function(obj, res) {
            var url = typeof obj.url === 'function' ? obj.url() : obj.url;
            delete App.cache[url];
            return callback && callback();
        },
        error: function(obj, err) {
            return callback && callback(err)
        }
    });
};

// Make a generic POST request against the API.
App.post = function(href, data, callback) {
    $.ajax({
        url: App.api + href,
        type: 'POST',
        contentType: 'application/json',
        processData: false,
        data: JSON.stringify(data),
        dataType: 'json',
        success: function(resp) {
            callback(null, resp);
        },
        error: function(err) {
            callback(err);
        }
    });
};

// Return form values as a hash.
App.form = function(el) {
    return _($(el).serializeArray()).reduce(function(memo, obj) {
        memo[obj.name] = obj.value;
        return memo;
    }, {});
};

// Generic tabs event handler.
// Expects event to occur on a link with its hash referencing the tab element
// id to be made active. Either adds `active` class to target element or
// `activeN` class for targeted elements in a .sliding parent.
App.tabs = function(ev) {
    var el = $(ev.currentTarget);
    var to = $('#' + el.attr('href').split('#').pop());
    var parent = to.parent();

    // Set active class amongst any tab groupings.
    el.addClass('active').siblings().removeClass('active');

    // Target is part of directional panes.
    if (parent.is('.sliding')) {
        // Search for a .activeN class and nuke it.
        var current = parent.attr('class').match(/active[0-9]+/);
        if (current) parent.removeClass(current[0]);
        // Add the new appropriate active class.
        parent.addClass('active' + (parent.children().index(to) + 1));
        // Set active class amongst target siblings.
    } else {
        to.addClass('active').siblings().removeClass('active');
    }

    return false;
};

App.setUser = function(user) {
    App.user = user;
    $('#nav').empty().html(App.nav());
    $('#app-logo').empty().html(App.template('template-app-logo')());
};

// Retreive the lastest user from the server.
App.refreshUser = function(id, callback) {
    callback = callback || function() {};
    var model = new Backbone.Model();
    this.fetch('/api/User/' + id, true, function(err, model) {
        if (err) return Views.modal.show('err', err);

        analytics.identify(model.id, {
            name: model.get('name') || model.id,
            email: model.get('email'),
            plan: model.get('accountLevel').replace('2', '')
        });

        App.setUser(_(model.attributes).pick(
            'id',
            'plan',
            'name',
            'email',
            'state',
            'subscriptionID',
            'customerID',
            'avatar'
        ));
        callback();
    });
};

App.signin = function(ev, callback) {
    callback = callback || function() {};
    var options = App.form(ev.currentTarget);
    App.post('/api/login?_=' + (+new Date()), options, function(err, resp) {
        if (err) return callback(err);
        App.refreshUser(resp.id, function() {
            analytics.track('Logged In');
            callback();
        });
    });
    return false;
};

App.signout = function(callback) {
    callback = callback || function() {};
    App.post('/api/logout?_=' + new Date(), {}, callback);
    return false;
};

App.signup = function(ev, callback) {
    callback = callback || function() {};
    var model = new Backbone.Model(App.form(ev.currentTarget));
    model.url = App.api + '/api/User';
    App.save(model, function(err, model) {
        if (err) return callback(err);
        model.unset('password');
        analytics.identify(model.id, {
            firstName: model.get('firstname'),
            lastName: model.get('lastname')
        });
        App.refreshUser(model.id, function() {
            analytics.track('Created an Account');
            callback();
        });
    });
    return false;
};

App.reset = function(ev, callback) {
    callback = callback || function() {};
    var data = App.form(ev.currentTarget);
    App.post('/api/reset-password?_=' + (+new Date()), data, callback);
    return false;
};

App.plan = function(ev, reason, callback) {
    var id = typeof ev === 'string' ? ev : $(ev.currentTarget).attr('href').split('#').pop();
    var plans;
    var confirmed;
    var payment;
    var switched;
    var answer;
    (function load(err) {
        if (err) return callback(err);

        if (!plans) return App.fetch('/api/Plans', function(err, collection) {
            if (err) return load(err);
            plans = collection;
            return load();
        });

        var plan = plans.get(id);
        if (!plan) throw new Error('Invalid plan');

        if (!App.user) {
            Views.modal.show('auth', {
                close: true
            }, load);
            Views.modal.slide('active3');
            return false;
        }

        // no-op: user plan matches target plan.
        if (id === App.user.plan.id) return callback();

        if (!confirmed) return Views.modal.show('confirm', {
            html: App.template('template-plan-confirm')({
                plan: plan,
                reason: reason
            })
        }, function(err, survey) {
            if (err) return load(err);
            confirmed = true;
            answer = survey.answer;
            return load();
        });

        if (!payment && plan.get('price')) return Views.modal.show('payment', {
            close: true
        }, function(err, response) {
            if (err) return load(err);
            payment = response;
            return load();
        });

        if (!switched) {
            // Switching to free plan from a non-subscription state.
            if (!plan.get('price') && !App.user.subscriptionID) {
                switched = true;
                load();
                // Switching to free plan with subscription. Destroy current subscription.
            } else if (!plan.get('price')) {
                var model = new Backbone.Model({
                    id: App.user.subscriptionID
                });
                model.urlRoot = App.api + '/api/Subscription';
                App.destroy(model, function() {
                    switched = true;
                    load();
                    analytics.track('Canceled a Subscription', {
                        plan: plan.id.replace('2', ''),
                        reason: answer || 'None'
                    });
                });
                // Switching to a plan from a current subscription.
            } else {
                var model = new Backbone.Model(_({
                    id: App.user.subscriptionID,
                    user: App.user.id,
                    planID: plan.id,
                    backend: 'stripe'
                }).extend(payment));
                model.urlRoot = App.api + '/api/Subscription';
                App.save(model, function(err) {
                    if (err) {
                        payment = false;
                        Views.modal.show('err', err, load);
                    } else {
                        switched = true;
                        load();
                        analytics.track(plan.isUpgrade() ? 'Upgraded a Subscription' : 'Downgraded a Subscription', {
                            plan: plan.id.replace('2', '')
                        });
                    }
                });
            }
            return;
        }

        App.refreshUser(App.user.id, callback);
    })();
};

App.nav = function() {
    var user = App.user || {};
    var thumb = App.api + '/v3/' + App.map + '/thumb.png' + App.newmap;
    if (App.storage('editor.stash')) try {
        var stash = JSON.parse(App.storage('editor.stash'));
        if (stash && stash.model && stash.model.id === App.map && stash.model.thumb)
            thumb = stash.model.thumb;
    } catch (err) {}
    return App.template('nav-template')({
        thumb: thumb,
        user: user
    });
};

// Convenience function around jQuery + underscore templating to grab the
// specified template by ID.
App.template = function(id) {
    App.templates[id] = App.templates[id] || _($('#' + id).text()).template();
    return App.templates[id];
};

// Get the value of a given param from window.location.search.
App.param = function(arg, source) {
    source = source || window.location.search;
    var pattern = new RegExp(arg + '=([^&]*)', 'i');
    var matches = source.match(pattern);
    if (matches) return decodeURIComponent(matches[1].replace(/\+/g, ' '));
};

// Fetch upload params from API.
App.uploadparams = function(account, callback) {
    callback = callback || function() {};
    $.ajax({
        url: App.api + '/api/upload/' + account,
        type: 'GET',
        contentType: 'application/json',
        processData: false,
        dataType: 'json',
        success: function(resp) {
            callback(null, resp);
        },
        error: function(err) {
            callback(err);
        }
    });
    return false;
};

// Catch unsaved changes to current active project.
App.unsaved = function(ev) {
    if (!App.storage('editor.stash')) {
        if ($(ev.currentTarget).is('.createmap')) App.editing(App.tmpmap());
        return;
    }
    try {
        var stash = JSON.parse(App.storage('editor.stash'));
        var msg = 'The project you are editing (<strong>' +
            (_(stash.model.name).escape() || 'Untitled map') +
            '</strong>) has unsaved changes. Start editing a new project anyway?';
        return Views.modal.show('confirm', msg, function(err) {
            if (err) return;
            if ($(ev.currentTarget).is('.createmap')) {
                App.storage('editor.stash', null);
                App.editing(App.tmpmap());
            }
            window.location.href = $(ev.currentTarget).attr('href');
        }) || false;
    } catch (err) {}
};

// Determine whether two objects are equal disregarding the _rev key.
App.revless = function(obj) {
    return _(obj).reduce(function(m, v, k) {
        if (k !== '_rev') m[k] = v;
        return m;
    }, {});
};

// Global keydown event handler.
App.keydown = function(ev) {
    if (Views.modal.active) return Views.modal.keydown(ev);
    if (Views.editor) return Views.editor.keydown && Views.editor.keydown(ev);
};

// Global keyup event handler.
App.keyup = function(ev) {
    if (Views.modal.active) return Views.modal.keyup(ev);
    if (Views.editor) return Views.editor.keyup && Views.editor.keyup(ev);
};

App.canedit = (function() {
    return ('ontouchend' in document) ?
        (navigator.userAgent.match(/iPad/i) !== null) ? true : false :
        true;
})();

// Retrieve local center.
App.local = function(callback) {
    return callback(null, [116.38829803466797,39.92890167236328,9]); // beijing

    if (sessionStorage['app.local']) try {
        return callback(null, JSON.parse(sessionStorage['app.local']));
    } catch (err) {
        delete sessionStorage['app.local'];
        return App.local(callback);
    }
    $.ajax({
        url: App.api + '/api/Location',
        type: 'GET',
        contentType: 'application/json',
        processData: false,
        dataType: 'json',
        success: function(resp) {
            var local = [resp.lon, resp.lat, resp.zoom || 5];
            sessionStorage['app.local'] = JSON.stringify(local);
            callback(null, local);
        },
        error: function(err) {
            callback(err);
        }
    });
};

// App map, preset are determined at parse time.
(function() {
    App.editing(App.param('id') || App.storage('editor.map'));
    if (App.param('preset')) App.newmap += '&preset=' + App.param('preset');
    if (App.param('layers')) App.newmap += '&layers=' + App.param('layers');
})();

// AJAX defaults for CORS.
$.ajaxSetup({
    cache: false,
    xhrFields: {
        withCredentials: true
    }
});

$(function() {
    // Disallow animations on initial page render to prevent awkward
    // initial transition animations based on hash.
    setTimeout(function() {
        $('body').addClass('animate');
    }, 0);

    // Global event handlers.
    // Prompt user about unsaved changes if about to switch active map.
    $('body').on('click', '.activemap', App.unsaved);
    $('body').on('keydown', App.keydown);
    $('body').on('keyup', App.keyup);

    // Check for id param mismatch. If mismatched, alert the user.
    if (App.user && App.param('id') && App.param('id').split('.')[0] !== App.user.id) {
        $('body').append(App.template('template-alert')());
        $('body').on('click', '#alert', function() {
            var msg = _('You are viewing data for <code><%-a%></code> as the user <code><%-b%></code>.').template({
                a: App.param('id'),
                b: App.user.id
            });
            Views.modal.show('confirm', msg);
            return false;
        });
    }
});

;
(function() {

    if (!App) throw new Error('Global App object required');
    if (!Views) throw new Error('Global Views object required');

    var Nav = Backbone.View.extend({});

    Nav.prototype.events = (function() {
        var events = {};
        events['click a.droplink'] = 'dropdown';
        events['click a.signin'] = 'signin';
        events['click a.signup'] = 'signup';
        events['click #signout'] = 'signout';
        return events;
    })();

    Nav.prototype.dropdown = function(ev) {
        var link = $(ev.currentTarget);
        var drop = link.siblings('.dropdown');
        if (link.is('.active') || drop.is('.active')) {
            link.removeClass('active');
            drop.removeClass('active');
        } else {
            link.addClass('active');
            drop.addClass('active');
        }
        return false;
    };

    Nav.prototype.signin = function(ev) {
        Views.modal.show('auth', {
            close: true
        }, function(err) {
            if (err && err.code !== 'closed') Views.modal.show('err', err);
        });
        return false;
    };

    Nav.prototype.signup = function(ev) {
        Views.modal.show('auth', {
            close: true
        }, function(err) {
            if (err && err.code !== 'closed') Views.modal.show('err', err);
        });
        Views.modal.slide('active3');
        return false;
    };

    Nav.prototype.signout = function(ev) {
        return App.signout(function(err) {
            if (err) return Views.modal.show('err', err);
            window.location.reload();
        });
    };

    $(function() {
        Views.nav = Views.nav || new Nav({
            el: $('.masthead')
        })
    });

})();

;
(function() {

    if (!App) throw new Error('Global App object required');
    if (!Views) throw new Error('Global Views object required');

    var Modal = Backbone.View.extend({});

    Modal.prototype.active = false;

    Modal.prototype.modals = {};

    Modal.prototype.events = (function() {
        var events = {};
        events['submit #auth-signin'] = 'signin';
        events['submit #auth-signup'] = 'signup';
        events['submit #auth-reset'] = 'reset';
        events['submit #payment'] = 'payment';
        events['submit #modal-changepass'] = 'changePassword';
        events['submit #contact'] = 'contact';
        events['click a.slide'] = 'slide';
        events['click a.close'] = 'close';
        events['click #modal-confirm a.ok'] = 'ok';
        events['keyup input[name=number]'] = 'card';
        events['change .period-filter'] = 'periodfilter';
        return events;
    })();

    Modal.prototype.ok = function(ev) {
        var modals = this.modals;
        var parent = ev ?
            $(ev.currentTarget).parents('.modal-popup').get(0) :
            $('#modal-content > *').get(-1);
        var active = _(Object.keys(modals)).find(function(key) {
            return parent === modals[key].el.get(0);
        });
        if (active) this.done(active, null, App.form(this.$('form')));
        return false;
    };

    Modal.prototype.close = function(ev) {
        var modals = this.modals;
        var parent = ev ?
            $(ev.currentTarget).parents('.modal-popup').get(0) :
            $('#modal-content > *').get(-1);
        var active = _(Object.keys(modals)).find(function(key) {
            return parent === modals[key].el.get(0);
        });
        // If escape link is present (rather than just 'close'),
        // follow it to the referenced page.
        if ($('a.escape', parent).size() && active) {
            window.location = $('a.escape', parent).attr('href');
            return false;
        }
        var err = new Error('Closed');
        err.code = 'closed';
        if (active) this.done(active, err);
        return false;
    };

    Modal.prototype.signin = function(ev) {
        var modal = this.modals.auth;
        var view = this;

        if (!modal) return false;

        modal.el.addClass('loading');
        return App.signin(ev, function(err) {
            modal.el.removeClass('loading');

            if (err) {
                view.show('err', err);
            } else {
                view.done('auth');
            }
        });
    };

    Modal.prototype.signup = function(ev) {
        var modal = this.modals.auth;
        var view = this;

        if (!modal) return false;

        modal.el.addClass('loading');
        return App.signup(ev, function(err) {
            modal.el.removeClass('loading');
            if (err) {
                view.show('err', err);
            } else {
                view.done('auth');
            }
        });
    };

    Modal.prototype.reset = function(ev) {
        var modal = this.modals.auth;
        var view = this;

        if (!modal) return false;
        modal.el.addClass('loading');
        return App.reset(ev, function(err) {
            modal.el.removeClass('loading');
            if (err) {
                view.show('err', err);
            } else {
                Views.modal.show('confirm', 'Password instructions sent');
            }
        });
    };

    Modal.prototype.payment = function(ev) {
        var modal = this.modals.payment;
        var view = this;

        var options = _($(ev.currentTarget).serializeArray()).reduce(function(memo, obj) {
            memo[obj.name] = obj.value;
            return memo;
        }, {});

        var coupon = !! options.coupon.length;
        var card = _(options).chain().pick(['number', 'exp', 'cvc', 'address_zip']).any(function(val) {
            return !!val.length;
        }).value();

        var exp = options.exp.split('/');
        options.exp_year = exp.pop() || '';
        options.exp_month = exp.pop() || '';

        // Validation
        var err = (function() {
            if (card || !coupon) {
                if (!Stripe.card.validateCardNumber(options.number))
                    return new Error('Invalid card number');
                if (!Stripe.card.validateExpiry(options.exp_month, options.exp_year))
                    return new Error('Invalid expiration date');
                if (!Stripe.card.validateCVC(options.cvc))
                    return new Error('Invalid CVC');
                if (!options.address_zip)
                    return new Error('Invalid postal code');
            } else if (!options.coupon.length) {
                return new Error('Invalid coupon code');
            }
        }());
        if (err) {
            view.show('err', err);
            return false;
        }

        if (card) {
            modal.el.addClass('loading');
            Stripe.card.createToken(_(options).omit('coupon'), function(status, response) {
                modal.el.removeClass('loading');
                if (status != 200) return view.show('err', response.error);
                var attr = {
                    token: response.id
                };
                if (coupon) attr.coupon = options.coupon;
                view.done('payment', null, attr);
            });
        } else {
            view.done('payment', null, {
                coupon: options.coupon
            });
        }
        return false;
    };

    Modal.prototype.card = function(ev) {
        var target = $(ev.currentTarget);
        var type = Stripe.card.cardType(target.val()).toLowerCase().replace(' ', '-');
        if (type != 'unknown') {
            $('.credit-cards span').addClass('disabled');
            $('.credit-cards span.' + type).removeClass('disabled');
        } else {
            $('.credit-cards span').removeClass('disabled');
        }
    };

    Modal.prototype.changePassword = function(ev) {
        ev.preventDefault();

        var modal = this.modals.changePassword;
        var view = this;
        var model = Views.account.model;

        if (!modal) return false;

        var attrs = App.form(ev.currentTarget);
        if (!attrs.password)
            return view.show('err', new Error('New password is required'));
        if (attrs.password !== attrs.passwordConfirm)
            return view.show('err', new Error('Password confirmation does not match password'));

        model.set(attrs);
        modal.el.addClass('loading');
        return App.save(model, function(err) {
            modal.el.removeClass('loading');
            if (err) {
                view.show('err', err);
            } else {
                view.done('changePassword');
                view.show('confirm', 'Password changed successfully');
            }

            _.each(attrs, function(value, key) {
                model.unset(key);
            });
        });
    };

    Modal.prototype.contact = function(ev) {
        var view = this;
        var model = Views.billing.model;
        if (!model) return false;

        var attrs = _($(ev.currentTarget).serializeArray()).reduce(function(memo, obj) {
            memo[obj.name] = obj.value;
            return memo;
        }, {});

        model.set(attrs);
        App.save(model, function(err) {
            Views.billing.$el.removeClass('loading');
            if (err) {
                Views.modal.show('err', err);
            } else {
                view.done('contact');
            }
        });
        return false;
    };

    Modal.prototype.slide = function(ev) {
        /* @TODO will prob apply to more than auth modal */
        var modal = this.modals.auth;
        var current = $('.sliding', modal.el).attr('class').match(/active[0-9]+/);
        if (current) $('.sliding', modal.el).removeClass(current[0]);
        var idx = typeof ev === 'string' ? ev : $(ev.currentTarget).attr('href').split('#').pop();
        $('.sliding', modal.el).addClass(idx);
        return false;
    };

    Modal.prototype.show = function(id, options, callback) {
        // Handle 2-arg calls.
        if ('function' === typeof options) {
            callback = options;
            options = {};
        } else if ('undefined' === typeof options) {
            options = {};
        }
        // Cast string to object to make room for other keys (e.g. callback).
        if ('string' === typeof options) {
            options = {
                text: options,
                toString: function() {
                    return this.text
                }
            };
        }
        options.callback = !! callback;
        callback = callback || function() {};

        if (this.modals[id]) return callback(new Error('Modal ' + id + ' already active'));

        var modal = {
            el: $(App.template('template-modal-' + id)(options)),
            callback: callback
        };
        this.$el.append(modal.el).parent().addClass('active');
        this.modals[id] = modal;
        this.active = true;
    };

    Modal.prototype.done = function(id) {
        if (!this.modals[id]) throw new Error('Cannot hide inactive modal.');

        var modal = this.modals[id];
        modal.el.remove();
        modal.callback.apply(this, Array.prototype.slice.call(arguments, 1));
        delete this.modals[id];

        if (!Object.keys(this.modals).length) {
            this.$el.parent().removeClass('active');
            this.active = false;
        }
    };

    // Called from global App keydown.
    Modal.prototype.keydown = function(ev) {
        var key = ev.which;
        switch (key) {
            case 13: // enter
                if (this.$('a.ok').size()) return this.ok();
                break;
            case 27: // esc
                if (this.$('a.close').size()) return this.close();
                break;
        }
    };

    // Called from global App keyup.
    Modal.prototype.keyup = function(ev) {};

    // TODO This is duplicated from _includes/app/view.list.js
    Modal.prototype.periodfilter = function(ev) {
        var $stats = $(ev.target).parents('.graph-statistics');
        var id = $(ev.target).data('id');
        var from = Date.parse($('#from').val());
        var to = Date.parse($('#to').val());

        if (isNaN(from) || isNaN(to)) {
            Views.modal.show('err', {
                responseText: 'Enter a valid date'
            });
        } else {
            to = Math.floor(to / 864e5);
            from = Math.floor(from / 864e5);

            $('.period-filter', $stats).removeClass('active');

            App.fetch('/api/Statistics/' + id + '?period[]=' + from + '&period[]=' + to, function(err, model) {
                if (err) Views.modal.show('err', err);
                $stats.removeClass('loading');
                $stats.html(App.template('template-bargraph')(_({
                    id: id
                }).defaults(model.attributes)));
            });
        }

        return false;
    };

    $(function() {
        Views.modal = Views.modal || new Modal({
            el: $('#modal-content')
        });
    });

})();

; // Shared view for handling events on list items.
// - expands/collapses list items.
// - handles i/o and rendering of details for various list item types.
(function() {

    if (!App) throw new Error('Global App object required');
    if (!Views) throw new Error('Global Views object required');

    var View = Backbone.View.extend({});

    View.prototype.events = (function() {
        var events = {};
        events['click .list-heading:not(.blog):not(.alert)'] = 'details';
        events['click .list-project'] = 'project';
        events['click .list-data'] = 'data';
        events['click .list-user'] = 'user';
        events['click .modal-share .tabs a'] = 'tabs';
        events['click .details .share'] = 'share';
        events['click #share-simple a'] = 'sharemethod';
        events['click #share-simple .popup'] = 'sharepopup';
        events['click #share .readonly'] = 'shareselect';
        events['click .trigger-preview'] = 'datapreview';
        events['click .del-project'] = 'projectdel';
        events['click .del-data'] = 'projectdel';
        events['click .tabs .project-stats'] = 'projectstats';
        events['click .tabs .data-details'] = 'datadetails';
        events['click .tabs .project-details'] = 'projectdetails';
        events['click .tabs .user-details'] = 'userdetails';
        events['click .tabs .user-projects'] = 'userprojects';
        events['click .tabs .user-stats'] = 'userstats';
        events['click .bargraph .bar'] = 'bargraph';
        events['click .bargraph .unselect'] = 'bargraphunselect';
        events['click .readonly'] = 'inputselect';
        events['click .user-project-stats'] = 'userprojectstats';
        events['change .period-filter'] = 'periodfilter';
        return events;
    })();

    View.prototype.tabs = App.tabs;

    View.prototype.details = function(ev) {
        var link = $(ev.currentTarget);
        var target = link.parents('li');
        if (target.is('.active')) {
            this.$('li.active').removeClass('active');
        } else {
            this.$('li.active').removeClass('active');
            target.addClass('active');
        }
        return false;
    };

    View.prototype.project = function(ev) {
        var details = $(ev.currentTarget).siblings('.details');
        var $listing = $(ev.currentTarget).parents('li');
        var id = $listing.data('id');

        // Load the model.
        App.fetch('/api/Map/' + id + (App.map === id ? '?newmap' : ''), function(err, model) {
            if (err) return Views.modal.show('err', err);
            model.active = App.map === id;
            // Load each resource.
            var urls = _(model.get('layers')).map(function(id) {
                return '/api/Map/' + id.split('+')[0];
            });
            urls.unshift('/api/Markers/' + id);
            App.fetchall(urls, function(err, loaded) {
                model.resources = loaded;
                details.html(App.template('template-project-details')(model));
            });
        });
        return false;
    };

    View.prototype.user = function(ev) {
        var details = $(ev.currentTarget).siblings('.details');
        var $listing = $(ev.currentTarget).parents('li');
        var id = $listing.data('id');

        $listing.addClass('loading');
        App.fetch('/api/User/' + id + '?storage=1&usage=1', function(err, model) {
            $listing.removeClass('loading');
            if (err) return Views.modal.show('err', err);
            details.html(App.template('user-details-template')(model));
        });

        return false;
    };

    View.prototype.data = function(ev) {
        var details = $(ev.currentTarget).siblings('.details');
        var id = $(ev.currentTarget).parents('li').data('id');
        App.fetch('/api/Map/' + id, function(err, model) {
            if (err) return Views.modal.show('err', err);
            details.html(App.template('template-data-details')(model));
        });
        return false;
    };

    View.prototype.datapreview = function(ev) {
        var li = $(ev.currentTarget).parents('li');
        $('.sliding', li).removeClass('active1').addClass('active2');
        $('.details-footer a', li).removeClass('active');
        $(ev.currentTarget).addClass('active');

        // Show the map
        var $map = $('div.preview-map', li);
        if (!$map.is('.leaflet-container')) App.fetch('/api/Map/' + li.data('id'), function(err, model) {
            if (err) return Views.modal.show('err', err);
            L.mapbox.map($map.attr('id'), model.toJSON());
        });
        return false;
    };

    View.prototype.datadetails = function(ev) {
        var li = $(ev.currentTarget).parents('li');
        $('.sliding', li).removeClass('active2').addClass('active1');
        $('.details-footer a', li).removeClass('active');
        $(ev.currentTarget).addClass('active');
        return false;
    };

    View.prototype.projectdel = function(ev) {
        var li = $(ev.currentTarget).parents('li');
        var id = li.data('id');

        App.fetch('/api/Map/' + id, function(err, model) {
            if (err) return Views.modal.show('err', err);
            var msg = 'Are you sure you want to delete ' + (model.escape('name') || 'Untitled project') + ' (' + model.id + ')?';
            Views.modal.show('confirm', msg, function(err) {
                if (err) return;
                App.destroy(model);
                li.addClass('deleted');

                // Destroy associated markers doc if it exists.
                App.fetch('/api/Markers/' + id, function(err, markers) {
                    if (err) return;
                    App.destroy(markers);
                });
            });
        });
        return false;
    };

    View.prototype.projectdetails = function(ev) {
        var li = $(ev.currentTarget).parents('li');

        $('.details-footer a', li).removeClass('active');
        $(ev.currentTarget).addClass('active');

        $('.sliding', li)
            .removeClass('active2')
            .addClass('active1');

        return false;
    };

    View.prototype.projectstats = function(ev) {
        var id = $(ev.currentTarget).parents('li').data('id');
        var li = $(ev.currentTarget).parents('li');

        $('.details-footer a', li).removeClass('active');
        $(ev.currentTarget).addClass('active');

        $('.sliding', li)
            .removeClass('active1')
            .addClass('active2');

        li.addClass('loading');

        App.fetch('/api/Map/' + id, function(err, model) {
            if (err) return Views.modal.show('err', err);
            App.fetch('/api/Statistics/' + id, function(err, stats) {
                if (err) return Views.modal.show('err', err);

                var data = stats.toJSON();
                data.label = model.get('name') || model.id;
                data.mapid = model.id;
                li.removeClass('loading');
                $('div.stats', li).html(App.template('template-project-stats')(data));
            });
        });

        return false;
    };

    View.prototype.userprojectstats = function(ev) {
        var id = $(ev.currentTarget).data('id');
        var name = $(ev.currentTarget).data('name');

        App.fetch('/api/Statistics/' + id, function(err, stats) {
            if (err) return Views.modal.show('err', err);
            stats.label = name;
            stats.id = id;
            Views.modal.show('stats', stats);
        });

        return false;
    };

    View.prototype.share = function(ev) {
        var id = $(ev.currentTarget).parents('li').data('id');
        // Load the model.
        App.fetch('/api/Map/' + id + (App.map === id ? '?newmap' : ''), function(err, model) {
            if (err) return Views.modal.show('err', err);
            Views.modal.show('share', model.attributes);
        });
        analytics.track('Pressed Publish Button');
        return false;
    };

    View.prototype.sharemethod = function(ev) {
        analytics.track('Shared a Map', {
            method: $(ev.currentTarget).data('type')
        });
    };

    View.prototype.shareselect = function(ev) {
        analytics.track('Shared a Map', {
            method: $(ev.currentTarget).data('type')
        });
    };

    View.prototype.sharepopup = function(ev) {
        window.open(
            $(ev.currentTarget).attr('href'),
            'sharebox',
            'menubar=no,scrollbars=no,top=20,left=20,resizable=no,width=550,height=300'
        );
        return false;
    };

    View.prototype.userdetails = function(ev) {
        var $li = $(ev.currentTarget).parents('li');
        $('.details-footer a', $li).removeClass('active');
        $(ev.currentTarget).addClass('active');
        $('.sliding', $li)
            .removeClass('active1 active2 active3')
            .addClass('active1');
        return false;
    };

    View.prototype.userprojects = function(ev) {
        var $li = $(ev.currentTarget).parents('li');
        var $projects = $('#user-projects');
        var id = $li.data('id');

        $('.details-footer a', $li).removeClass('active');
        $(ev.currentTarget).addClass('active');
        $('.sliding', $li)
            .removeClass('active1 active2 active3')
            .addClass('active2');

        $li.addClass('loading');
        App.fetch('/api/Map?list=1&private=1&account=' + id, function(err, model) {
            if (err) Views.modal.show('err', err);
            $li.removeClass('loading');
            $projects.html(App.template('user-projects-template')(model));
        });
        return false;
    };

    View.prototype.userstats = function(ev) {
        var $li = $(ev.currentTarget).parents('li');
        var $stats = $('#user-stats');
        var id = $li.data('id');

        $('.details-footer a', $li).removeClass('active');
        $(ev.currentTarget).addClass('active');
        $('.sliding', $li)
            .removeClass('active1 active2 active3')
            .addClass('active3');

        $li.addClass('loading');
        App.fetch('/api/Statistics/' + id, function(err, model) {
            if (err) Views.modal.show('err', err);
            $li.removeClass('loading');
            model.name = id;
            $stats.html(App.template('user-stats-template')(model));
        });
        return false;
    };

    View.prototype.bargraph = function(ev) {
        $(ev.currentTarget).addClass('active').siblings('.active').removeClass('active');
        return false;
    };

    View.prototype.bargraphunselect = function(ev) {
        $('.bargraph .bar').removeClass('active');
        return false;
    };

    View.prototype.inputselect = function(ev) {
        $(ev.currentTarget).select();
    };

    View.prototype.periodfilter = function(ev) {
        var $stats = $(ev.target).parents('.graph-statistics');
        var id = $(ev.target).data('id');
        var from = Date.parse($('#from').val());
        var to = Date.parse($('#to').val());

        if (isNaN(from) || isNaN(to)) {
            Views.modal.show('err', {
                responseText: 'Enter a valid date'
            });
        } else {
            to = Math.floor(to / 864e5);
            from = Math.floor(from / 864e5);

            $('.period-filter', $stats).removeClass('active');

            App.fetch('/api/Statistics/' + id + '?period[]=' + from + '&period[]=' + to, function(err, model) {
                if (err) Views.modal.show('err', err);
                $stats.removeClass('loading');
                $stats.html(App.template('template-bargraph')(_({
                    id: id
                }).defaults(model.attributes)));
            });
        }

        return false;
    };

    function load() {
        if (Views.list) return;
        var opts = {
            el: $('body')
        };
        Views.list = new View(opts);
    }

    $(load);

})();


// Generic linker for doc headings.
// @TODO this only really works for maruku-using subsites and should
// eventually be phased out.
$(function() {
    $('.doc h1[id], .doc h2[id], .doc h3[id], .doc h4[id]')
        .attr('title', 'Link to this section')
        .click(function(ev) {
            window.location.hash = $(ev.currentTarget).attr('id');
        });

    // Hiring smart people
    if (typeof console !== 'undefined' && typeof console.log === 'function') {
        console.log('\r\n%c                     *      .--.\r\n%c                           \/ \/  `\r\n%c          +               | |\r\n%c                 \'         \\ \\__,\r\n%c             *          +   \'--\'  *\r\n%c                 +   \/\\\r\n%c    +              .\'  \'.   *\r\n%c           *      \/======\\      +\r\n%c                 ;:.  _   ;\r\n%c                 |:. (_)  |\r\n%c                 |:.  _   |\r\n%c       +         |:. (_)  |          *\r\n%c                 ;:.      ;\r\n%c               .\' \\:.    \/ `.\r\n%c              \/ .-\'\':._.\'`-. \\\r\n%c              |\/    \/||\\    \\|\r\n%c            _..--\"\"\"````\"\"\"--.._\r\n%c      _.-\'``                    ``\'-._\r\n%c    -\'         %cHello, explorer%c        \'-\r\n%c' +
            '\n       Curious? http://mapbox.com/jobs',
            'color:#D0E3F1', 'color:#D0E3F1', 'color:#C0DAEC', 'color:#C0DAEC', 'color:#B0D1E8', 'color:#B0D1E8', 'color:#A1C7E3', 'color:#A1C7E3', 'color:#91BEDE', 'color:#91BEDE', 'color:#81B5D9', 'color:#81B5D9', 'color:#72ABD5', 'color:#72ABD5', 'color:#62A2D0', 'color:#62A2D0', 'color:#5299CB', 'color:#5299CB', 'color:#4390C7', 'color:#4390C7', 'color:#4390C7', 'color: #000000');
    }
});