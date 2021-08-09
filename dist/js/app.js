function _toConsumableArray(t) {
    return _arrayWithoutHoles(t) || _iterableToArray(t) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
}

function _iterableToArray(t) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
}

function _arrayWithoutHoles(t) {
    if (Array.isArray(t)) {
        for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
        return i
    }
}

function _extends() {
    return (_extends = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
        }
        return t
    }).apply(this, arguments)
}

function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}! function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";
    var i = [],
        n = t.document,
        r = Object.getPrototypeOf,
        s = i.slice,
        o = i.concat,
        a = i.push,
        l = i.indexOf,
        u = {},
        c = u.toString,
        h = u.hasOwnProperty,
        f = h.toString,
        d = f.call(Object),
        p = {},
        m = function(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        g = function(t) {
            return null != t && t === t.window
        },
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(t, e, i) {
        var r, s, o = (i = i || n).createElement("script");
        if (o.text = t, e)
            for (r in v)(s = e[r] || e.getAttribute && e.getAttribute(r)) && o.setAttribute(r, s);
        i.head.appendChild(o).parentNode.removeChild(o)
    }

    function _(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? u[c.call(t)] || "object" : typeof t
    }
    var b = function(t, e) {
            return new b.fn.init(t, e)
        },
        x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function w(t) {
        var e = !!t && "length" in t && t.length,
            i = _(t);
        return !m(t) && !g(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    b.fn = b.prototype = {
        jquery: "3.4.1",
        constructor: b,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(t) {
            return null == t ? s.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = b.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function(t) {
            return b.each(this, t)
        },
        map: function(t) {
            return this.pushStack(b.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: i.sort,
        splice: i.splice
    }, b.extend = b.fn.extend = function() {
        var t, e, i, n, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || m(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = t[e], "__proto__" !== e && o !== n && (u && n && (b.isPlainObject(n) || (r = Array.isArray(n))) ? (i = o[e], s = r && !Array.isArray(i) ? [] : r || b.isPlainObject(i) ? i : {}, r = !1, o[e] = b.extend(u, s, n)) : void 0 !== n && (o[e] = n));
        return o
    }, b.extend({
        expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isPlainObject: function(t) {
            var e, i;
            return !(!t || "[object Object]" !== c.call(t)) && (!(e = r(t)) || "function" == typeof(i = h.call(e, "constructor") && e.constructor) && f.call(i) === d)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        globalEval: function(t, e) {
            y(t, {
                nonce: e && e.nonce
            })
        },
        each: function(t, e) {
            var i, n = 0;
            if (w(t))
                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(x, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (w(Object(t)) ? b.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)), i
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : l.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
            return t.length = r, t
        },
        grep: function(t, e, i) {
            for (var n = [], r = 0, s = t.length, o = !i; r < s; r++) !e(t[r], r) !== o && n.push(t[r]);
            return n
        },
        map: function(t, e, i) {
            var n, r, s = 0,
                a = [];
            if (w(t))
                for (n = t.length; s < n; s++) null != (r = e(t[s], s, i)) && a.push(r);
            else
                for (s in t) null != (r = e(t[s], s, i)) && a.push(r);
            return o.apply([], a)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (b.fn[Symbol.iterator] = i[Symbol.iterator]), b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        u["[object " + e + "]"] = e.toLowerCase()
    });
    var T = function(t) {
        var e, i, n, r, s, o, a, l, u, c, h, f, d, p, m, g, v, y, _, b = "sizzle" + 1 * new Date,
            x = t.document,
            w = 0,
            T = 0,
            S = lt(),
            C = lt(),
            k = lt(),
            E = lt(),
            P = function(t, e) {
                return t === e && (h = !0), 0
            },
            A = {}.hasOwnProperty,
            D = [],
            O = D.pop,
            M = D.push,
            L = D.push,
            I = D.slice,
            j = function(t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e) return i;
                return -1
            },
            z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            N = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            F = "\\[" + N + "*(" + R + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + N + "*\\]",
            q = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
            B = new RegExp(N + "+", "g"),
            H = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
            $ = new RegExp("^" + N + "*," + N + "*"),
            W = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
            X = new RegExp(N + "|>"),
            U = new RegExp(q),
            Y = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + z + ")$", "i"),
                needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tt = /[+~]/,
            et = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
            it = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            rt = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            st = function() {
                f()
            },
            ot = bt(function(t) {
                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(D = I.call(x.childNodes), x.childNodes), D[x.childNodes.length].nodeType
        } catch (t) {
            L = {
                apply: D.length ? function(t, e) {
                    M.apply(t, I.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }

        function at(t, e, n, r) {
            var s, a, u, c, h, p, v, y = e && e.ownerDocument,
                w = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return n;
            if (!r && ((e ? e.ownerDocument || e : x) !== d && f(e), e = e || d, m)) {
                if (11 !== w && (h = K.exec(t)))
                    if (s = h[1]) {
                        if (9 === w) {
                            if (!(u = e.getElementById(s))) return n;
                            if (u.id === s) return n.push(u), n
                        } else if (y && (u = y.getElementById(s)) && _(e, u) && u.id === s) return n.push(u), n
                    } else {
                        if (h[2]) return L.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = h[3]) && i.getElementsByClassName && e.getElementsByClassName) return L.apply(n, e.getElementsByClassName(s)), n
                    }
                if (i.qsa && !E[t + " "] && (!g || !g.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
                    if (v = t, y = e, 1 === w && X.test(t)) {
                        for ((c = e.getAttribute("id")) ? c = c.replace(nt, rt) : e.setAttribute("id", c = b), a = (p = o(t)).length; a--;) p[a] = "#" + c + " " + _t(p[a]);
                        v = p.join(","), y = tt.test(t) && vt(e.parentNode) || e
                    }
                    try {
                        return L.apply(n, y.querySelectorAll(v)), n
                    } catch (e) {
                        E(t, !0)
                    } finally {
                        c === b && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(H, "$1"), e, n, r)
        }

        function lt() {
            var t = [];
            return function e(i, r) {
                return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = r
            }
        }

        function ut(t) {
            return t[b] = !0, t
        }

        function ct(t) {
            var e = d.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ht(t, e) {
            for (var i = t.split("|"), r = i.length; r--;) n.attrHandle[i[r]] = e
        }

        function ft(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function dt(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function pt(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function mt(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function gt(t) {
            return ut(function(e) {
                return e = +e, ut(function(i, n) {
                    for (var r, s = t([], i.length, e), o = s.length; o--;) i[r = s[o]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function vt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in i = at.support = {}, s = at.isXML = function(t) {
                var e = t.namespaceURI,
                    i = (t.ownerDocument || t).documentElement;
                return !G.test(e || i && i.nodeName || "HTML")
            }, f = at.setDocument = function(t) {
                var e, r, o = t ? t.ownerDocument || t : x;
                return o !== d && 9 === o.nodeType && o.documentElement ? (p = (d = o).documentElement, m = !s(d), x !== d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", st, !1) : r.attachEvent && r.attachEvent("onunload", st)), i.attributes = ct(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), i.getElementsByTagName = ct(function(t) {
                    return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length
                }), i.getElementsByClassName = J.test(d.getElementsByClassName), i.getById = ct(function(t) {
                    return p.appendChild(t).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                }), i.getById ? (n.filter.ID = function(t) {
                    var e = t.replace(et, it);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }, n.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }) : (n.filter.ID = function(t) {
                    var e = t.replace(et, it);
                    return function(t) {
                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }, n.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var i, n, r, s = e.getElementById(t);
                        if (s) {
                            if ((i = s.getAttributeNode("id")) && i.value === t) return [s];
                            for (r = e.getElementsByName(t), n = 0; s = r[n++];)
                                if ((i = s.getAttributeNode("id")) && i.value === t) return [s]
                        }
                        return []
                    }
                }), n.find.TAG = i.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        r = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, n.find.CLASS = i.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
                }, v = [], g = [], (i.qsa = J.test(d.querySelectorAll)) && (ct(function(t) {
                    p.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + N + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + N + "*(?:value|" + z + ")"), t.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
                }), ct(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = d.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + N + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                })), (i.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ct(function(t) {
                    i.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", q)
                }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = J.test(p.compareDocumentPosition), _ = e || J.test(p.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, P = e ? function(t, e) {
                    if (t === e) return h = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === d || t.ownerDocument === x && _(x, t) ? -1 : e === d || e.ownerDocument === x && _(x, e) ? 1 : c ? j(c, t) - j(c, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return h = !0, 0;
                    var i, n = 0,
                        r = t.parentNode,
                        s = e.parentNode,
                        o = [t],
                        a = [e];
                    if (!r || !s) return t === d ? -1 : e === d ? 1 : r ? -1 : s ? 1 : c ? j(c, t) - j(c, e) : 0;
                    if (r === s) return ft(t, e);
                    for (i = t; i = i.parentNode;) o.unshift(i);
                    for (i = e; i = i.parentNode;) a.unshift(i);
                    for (; o[n] === a[n];) n++;
                    return n ? ft(o[n], a[n]) : o[n] === x ? -1 : a[n] === x ? 1 : 0
                }, d) : d
            }, at.matches = function(t, e) {
                return at(t, null, null, e)
            }, at.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== d && f(t), i.matchesSelector && m && !E[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
                    var n = y.call(t, e);
                    if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (t) {
                    E(e, !0)
                }
                return at(e, d, null, [t]).length > 0
            }, at.contains = function(t, e) {
                return (t.ownerDocument || t) !== d && f(t), _(t, e)
            }, at.attr = function(t, e) {
                (t.ownerDocument || t) !== d && f(t);
                var r = n.attrHandle[e.toLowerCase()],
                    s = r && A.call(n.attrHandle, e.toLowerCase()) ? r(t, e, !m) : void 0;
                return void 0 !== s ? s : i.attributes || !m ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
            }, at.escape = function(t) {
                return (t + "").replace(nt, rt)
            }, at.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, at.uniqueSort = function(t) {
                var e, n = [],
                    r = 0,
                    s = 0;
                if (h = !i.detectDuplicates, c = !i.sortStable && t.slice(0), t.sort(P), h) {
                    for (; e = t[s++];) e === t[s] && (r = n.push(s));
                    for (; r--;) t.splice(n[r], 1)
                }
                return c = null, t
            }, r = at.getText = function(t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
                    } else if (3 === s || 4 === s) return t.nodeValue
                } else
                    for (; e = t[n++];) i += r(e);
                return i
            }, (n = at.selectors = {
                cacheLength: 50,
                createPseudo: ut,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(et, it), t[3] = (t[3] || t[4] || t[5] || "").replace(et, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && U.test(i) && (e = o(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(et, it).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = S[t + " "];
                        return e || (e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) && S(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, i) {
                        return function(n) {
                            var r = at.attr(n, t);
                            return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && r.indexOf(i) > -1 : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? (" " + r.replace(B, " ") + " ").indexOf(i) > -1 : "|=" === e && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, i, n, r) {
                        var s = "nth" !== t.slice(0, 3),
                            o = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var u, c, h, f, d, p, m = s !== o ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                _ = !1;
                            if (g) {
                                if (s) {
                                    for (; m;) {
                                        for (f = e; f = f[m];)
                                            if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        p = m = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [o ? g.firstChild : g.lastChild], o && y) {
                                    for (_ = (d = (u = (c = (h = (f = g)[b] || (f[b] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] || [])[0] === w && u[1]) && u[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (_ = d = 0) || p.pop();)
                                        if (1 === f.nodeType && ++_ && f === e) {
                                            c[t] = [w, d, _];
                                            break
                                        }
                                } else if (y && (_ = d = (u = (c = (h = (f = e)[b] || (f[b] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] || [])[0] === w && u[1]), !1 === _)
                                    for (;
                                        (f = ++d && f && f[m] || (_ = d = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++_ || (y && ((c = (h = f[b] || (f[b] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] = [w, _]), f !== e)););
                                return (_ -= r) === n || _ % n == 0 && _ / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var i, r = n.pseudos[t] || n.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                        return r[b] ? r(e) : r.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? ut(function(t, i) {
                            for (var n, s = r(t, e), o = s.length; o--;) t[n = j(t, s[o])] = !(i[n] = s[o])
                        }) : function(t) {
                            return r(t, 0, i)
                        }) : r
                    }
                },
                pseudos: {
                    not: ut(function(t) {
                        var e = [],
                            i = [],
                            n = a(t.replace(H, "$1"));
                        return n[b] ? ut(function(t, e, i, r) {
                            for (var s, o = n(t, null, r, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                        }) : function(t, r, s) {
                            return e[0] = t, n(e, null, s, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: ut(function(t) {
                        return function(e) {
                            return at(t, e).length > 0
                        }
                    }),
                    contains: ut(function(t) {
                        return t = t.replace(et, it),
                            function(e) {
                                return (e.textContent || r(e)).indexOf(t) > -1
                            }
                    }),
                    lang: ut(function(t) {
                        return Y.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, it).toLowerCase(),
                            function(e) {
                                var i;
                                do {
                                    if (i = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === p
                    },
                    focus: function(t) {
                        return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: mt(!1),
                    disabled: mt(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !n.pseudos.empty(t)
                    },
                    header: function(t) {
                        return Z.test(t.nodeName)
                    },
                    input: function(t) {
                        return Q.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: gt(function() {
                        return [0]
                    }),
                    last: gt(function(t, e) {
                        return [e - 1]
                    }),
                    eq: gt(function(t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even: gt(function(t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t
                    }),
                    odd: gt(function(t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t
                    }),
                    lt: gt(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i > e ? e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: gt(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }).pseudos.nth = n.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) n.pseudos[e] = dt(e);
        for (e in {
                submit: !0,
                reset: !0
            }) n.pseudos[e] = pt(e);

        function yt() {}

        function _t(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function bt(t, e, i) {
            var n = e.dir,
                r = e.next,
                s = r || n,
                o = i && "parentNode" === s,
                a = T++;
            return e.first ? function(e, i, r) {
                for (; e = e[n];)
                    if (1 === e.nodeType || o) return t(e, i, r);
                return !1
            } : function(e, i, l) {
                var u, c, h, f = [w, a];
                if (l) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || o) && t(e, i, l)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || o)
                            if (c = (h = e[b] || (e[b] = {}))[e.uniqueID] || (h[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[n] || e;
                            else {
                                if ((u = c[s]) && u[0] === w && u[1] === a) return f[2] = u[2];
                                if (c[s] = f, f[2] = t(e, i, l)) return !0
                            } return !1
            }
        }

        function xt(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var r = t.length; r--;)
                    if (!t[r](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function wt(t, e, i, n, r) {
            for (var s, o = [], a = 0, l = t.length, u = null != e; a < l; a++)(s = t[a]) && (i && !i(s, n, r) || (o.push(s), u && e.push(a)));
            return o
        }

        function Tt(t, e, i, n, r, s) {
            return n && !n[b] && (n = Tt(n)), r && !r[b] && (r = Tt(r, s)), ut(function(s, o, a, l) {
                var u, c, h, f = [],
                    d = [],
                    p = o.length,
                    m = s || function(t, e, i) {
                        for (var n = 0, r = e.length; n < r; n++) at(t, e[n], i);
                        return i
                    }(e || "*", a.nodeType ? [a] : a, []),
                    g = !t || !s && e ? m : wt(m, f, t, a, l),
                    v = i ? r || (s ? t : p || n) ? [] : o : g;
                if (i && i(g, v, a, l), n)
                    for (u = wt(v, d), n(u, [], a, l), c = u.length; c--;)(h = u[c]) && (v[d[c]] = !(g[d[c]] = h));
                if (s) {
                    if (r || t) {
                        if (r) {
                            for (u = [], c = v.length; c--;)(h = v[c]) && u.push(g[c] = h);
                            r(null, v = [], u, l)
                        }
                        for (c = v.length; c--;)(h = v[c]) && (u = r ? j(s, h) : f[c]) > -1 && (s[u] = !(o[u] = h))
                    }
                } else v = wt(v === o ? v.splice(p, v.length) : v), r ? r(null, o, v, l) : L.apply(o, v)
            })
        }

        function St(t) {
            for (var e, i, r, s = t.length, o = n.relative[t[0].type], a = o || n.relative[" "], l = o ? 1 : 0, c = bt(function(t) {
                    return t === e
                }, a, !0), h = bt(function(t) {
                    return j(e, t) > -1
                }, a, !0), f = [function(t, i, n) {
                    var r = !o && (n || i !== u) || ((e = i).nodeType ? c(t, i, n) : h(t, i, n));
                    return e = null, r
                }]; l < s; l++)
                if (i = n.relative[t[l].type]) f = [bt(xt(f), i)];
                else {
                    if ((i = n.filter[t[l].type].apply(null, t[l].matches))[b]) {
                        for (r = ++l; r < s && !n.relative[t[r].type]; r++);
                        return Tt(l > 1 && xt(f), l > 1 && _t(t.slice(0, l - 1).concat({
                            value: " " === t[l - 2].type ? "*" : ""
                        })).replace(H, "$1"), i, l < r && St(t.slice(l, r)), r < s && St(t = t.slice(r)), r < s && _t(t))
                    }
                    f.push(i)
                }
            return xt(f)
        }
        return yt.prototype = n.filters = n.pseudos, n.setFilters = new yt, o = at.tokenize = function(t, e) {
            var i, r, s, o, a, l, u, c = C[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (a = t, l = [], u = n.preFilter; a;) {
                for (o in i && !(r = $.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = W.exec(a)) && (i = r.shift(), s.push({
                        value: i,
                        type: r[0].replace(H, " ")
                    }), a = a.slice(i.length)), n.filter) !(r = V[o].exec(a)) || u[o] && !(r = u[o](r)) || (i = r.shift(), s.push({
                    value: i,
                    type: o,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return e ? a.length : a ? at.error(t) : C(t, l).slice(0)
        }, a = at.compile = function(t, e) {
            var i, r = [],
                s = [],
                a = k[t + " "];
            if (!a) {
                for (e || (e = o(t)), i = e.length; i--;)(a = St(e[i]))[b] ? r.push(a) : s.push(a);
                (a = k(t, function(t, e) {
                    var i = e.length > 0,
                        r = t.length > 0,
                        s = function(s, o, a, l, c) {
                            var h, p, g, v = 0,
                                y = "0",
                                _ = s && [],
                                b = [],
                                x = u,
                                T = s || r && n.find.TAG("*", c),
                                S = w += null == x ? 1 : Math.random() || .1,
                                C = T.length;
                            for (c && (u = o === d || o || c); y !== C && null != (h = T[y]); y++) {
                                if (r && h) {
                                    for (p = 0, o || h.ownerDocument === d || (f(h), a = !m); g = t[p++];)
                                        if (g(h, o || d, a)) {
                                            l.push(h);
                                            break
                                        }
                                    c && (w = S)
                                }
                                i && ((h = !g && h) && v--, s && _.push(h))
                            }
                            if (v += y, i && y !== v) {
                                for (p = 0; g = e[p++];) g(_, b, o, a);
                                if (s) {
                                    if (v > 0)
                                        for (; y--;) _[y] || b[y] || (b[y] = O.call(l));
                                    b = wt(b)
                                }
                                L.apply(l, b), c && !s && b.length > 0 && v + e.length > 1 && at.uniqueSort(l)
                            }
                            return c && (w = S, u = x), _
                        };
                    return i ? ut(s) : s
                }(s, r))).selector = t
            }
            return a
        }, l = at.select = function(t, e, i, r) {
            var s, l, u, c, h, f = "function" == typeof t && t,
                d = !r && o(t = f.selector || t);
            if (i = i || [], 1 === d.length) {
                if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && m && n.relative[l[1].type]) {
                    if (!(e = (n.find.ID(u.matches[0].replace(et, it), e) || [])[0])) return i;
                    f && (e = e.parentNode), t = t.slice(l.shift().value.length)
                }
                for (s = V.needsContext.test(t) ? 0 : l.length; s-- && (u = l[s], !n.relative[c = u.type]);)
                    if ((h = n.find[c]) && (r = h(u.matches[0].replace(et, it), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                        if (l.splice(s, 1), !(t = r.length && _t(l))) return L.apply(i, r), i;
                        break
                    }
            }
            return (f || a(t, d))(r, e, !m, i, !e || tt.test(t) && vt(e.parentNode) || e), i
        }, i.sortStable = b.split("").sort(P).join("") === b, i.detectDuplicates = !!h, f(), i.sortDetached = ct(function(t) {
            return 1 & t.compareDocumentPosition(d.createElement("fieldset"))
        }), ct(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || ht("type|href|height|width", function(t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), i.attributes && ct(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || ht("value", function(t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), ct(function(t) {
            return null == t.getAttribute("disabled")
        }) || ht(z, function(t, e, i) {
            var n;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), at
    }(t);
    b.find = T, b.expr = T.selectors, b.expr[":"] = b.expr.pseudos, b.uniqueSort = b.unique = T.uniqueSort, b.text = T.getText, b.isXMLDoc = T.isXML, b.contains = T.contains, b.escapeSelector = T.escape;
    var S = function(t, e, i) {
            for (var n = [], r = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && b(t).is(i)) break;
                    n.push(t)
                }
            return n
        },
        C = function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        k = b.expr.match.needsContext;

    function E(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function A(t, e, i) {
        return m(e) ? b.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        }) : e.nodeType ? b.grep(t, function(t) {
            return t === e !== i
        }) : "string" != typeof e ? b.grep(t, function(t) {
            return l.call(e, t) > -1 !== i
        }) : b.filter(e, t, i)
    }
    b.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? b.find.matchesSelector(n, t) ? [n] : [] : b.find.matches(t, b.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, b.fn.extend({
        find: function(t) {
            var e, i, n = this.length,
                r = this;
            if ("string" != typeof t) return this.pushStack(b(t).filter(function() {
                for (e = 0; e < n; e++)
                    if (b.contains(r[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) b.find(t, r[e], i);
            return n > 1 ? b.uniqueSort(i) : i
        },
        filter: function(t) {
            return this.pushStack(A(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(A(this, t || [], !0))
        },
        is: function(t) {
            return !!A(this, "string" == typeof t && k.test(t) ? b(t) : t || [], !1).length
        }
    });
    var D, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (b.fn.init = function(t, e, i) {
        var r, s;
        if (!t) return this;
        if (i = i || D, "string" == typeof t) {
            if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : O.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (r[1]) {
                if (e = e instanceof b ? e[0] : e, b.merge(this, b.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : n, !0)), P.test(r[1]) && b.isPlainObject(e))
                    for (r in e) m(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this
            }
            return (s = n.getElementById(r[2])) && (this[0] = s, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : m(t) ? void 0 !== i.ready ? i.ready(t) : t(b) : b.makeArray(t, this)
    }).prototype = b.fn, D = b(n);
    var M = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function I(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    b.fn.extend({
        has: function(t) {
            var e = b(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; t < i; t++)
                    if (b.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            var i, n = 0,
                r = this.length,
                s = [],
                o = "string" != typeof t && b(t);
            if (!k.test(t))
                for (; n < r; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && b.find.matchesSelector(i, t))) {
                            s.push(i);
                            break
                        }
            return this.pushStack(s.length > 1 ? b.uniqueSort(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? l.call(b(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(b.uniqueSort(b.merge(this.get(), b(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), b.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return S(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return S(t, "parentNode", i)
        },
        next: function(t) {
            return I(t, "nextSibling")
        },
        prev: function(t) {
            return I(t, "previousSibling")
        },
        nextAll: function(t) {
            return S(t, "nextSibling")
        },
        prevAll: function(t) {
            return S(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return S(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return S(t, "previousSibling", i)
        },
        siblings: function(t) {
            return C((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return C(t.firstChild)
        },
        contents: function(t) {
            return void 0 !== t.contentDocument ? t.contentDocument : (E(t, "template") && (t = t.content || t), b.merge([], t.childNodes))
        }
    }, function(t, e) {
        b.fn[t] = function(i, n) {
            var r = b.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = b.filter(n, r)), this.length > 1 && (L[t] || b.uniqueSort(r), M.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var j = /[^\x20\t\r\n\f]+/g;

    function z(t) {
        return t
    }

    function N(t) {
        throw t
    }

    function R(t, e, i, n) {
        var r;
        try {
            t && m(r = t.promise) ? r.call(t).done(e).fail(i) : t && m(r = t.then) ? r.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }
    b.Callbacks = function(t) {
        t = "string" == typeof t ? function(t) {
            var e = {};
            return b.each(t.match(j) || [], function(t, i) {
                e[i] = !0
            }), e
        }(t) : b.extend({}, t);
        var e, i, n, r, s = [],
            o = [],
            a = -1,
            l = function() {
                for (r = r || t.once, n = e = !0; o.length; a = -1)
                    for (i = o.shift(); ++a < s.length;) !1 === s[a].apply(i[0], i[1]) && t.stopOnFalse && (a = s.length, i = !1);
                t.memory || (i = !1), e = !1, r && (s = i ? [] : "")
            },
            u = {
                add: function() {
                    return s && (i && !e && (a = s.length - 1, o.push(i)), function e(i) {
                        b.each(i, function(i, n) {
                            m(n) ? t.unique && u.has(n) || s.push(n) : n && n.length && "string" !== _(n) && e(n)
                        })
                    }(arguments), i && !e && l()), this
                },
                remove: function() {
                    return b.each(arguments, function(t, e) {
                        for (var i;
                            (i = b.inArray(e, s, i)) > -1;) s.splice(i, 1), i <= a && a--
                    }), this
                },
                has: function(t) {
                    return t ? b.inArray(t, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return r = o = [], s = i = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return r = o = [], i || e || (s = i = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, i) {
                    return r || (i = [t, (i = i || []).slice ? i.slice() : i], o.push(i), e || l()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return u
    }, b.extend({
        Deferred: function(e) {
            var i = [
                    ["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
                    ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(t) {
                        return r.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return b.Deferred(function(e) {
                            b.each(i, function(i, n) {
                                var r = m(t[n[4]]) && t[n[4]];
                                s[n[1]](function() {
                                    var t = r && r.apply(this, arguments);
                                    t && m(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function(e, n, r) {
                        var s = 0;

                        function o(e, i, n, r) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    u = function() {
                                        var t, u;
                                        if (!(e < s)) {
                                            if ((t = n.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            u = t && ("object" == typeof t || "function" == typeof t) && t.then, m(u) ? r ? u.call(t, o(s, i, z, r), o(s, i, N, r)) : (s++, u.call(t, o(s, i, z, r), o(s, i, N, r), o(s, i, z, i.notifyWith))) : (n !== z && (a = void 0, l = [t]), (r || i.resolveWith)(a, l))
                                        }
                                    },
                                    c = r ? u : function() {
                                        try {
                                            u()
                                        } catch (t) {
                                            b.Deferred.exceptionHook && b.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= s && (n !== N && (a = void 0, l = [t]), i.rejectWith(a, l))
                                        }
                                    };
                                e ? c() : (b.Deferred.getStackHook && (c.stackTrace = b.Deferred.getStackHook()), t.setTimeout(c))
                            }
                        }
                        return b.Deferred(function(t) {
                            i[0][3].add(o(0, t, m(r) ? r : z, t.notifyWith)), i[1][3].add(o(0, t, m(e) ? e : z)), i[2][3].add(o(0, t, m(n) ? n : N))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? b.extend(t, r) : r
                    }
                },
                s = {};
            return b.each(i, function(t, e) {
                var o = e[2],
                    a = e[5];
                r[e[1]] = o.add, a && o.add(function() {
                    n = a
                }, i[3 - t][2].disable, i[3 - t][3].disable, i[0][2].lock, i[0][3].lock), o.add(e[3].fire), s[e[0]] = function() {
                    return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[e[0] + "With"] = o.fireWith
            }), r.promise(s), e && e.call(s, s), s
        },
        when: function(t) {
            var e = arguments.length,
                i = e,
                n = Array(i),
                r = s.call(arguments),
                o = b.Deferred(),
                a = function(t) {
                    return function(i) {
                        n[t] = this, r[t] = arguments.length > 1 ? s.call(arguments) : i, --e || o.resolveWith(n, r)
                    }
                };
            if (e <= 1 && (R(t, o.done(a(i)).resolve, o.reject, !e), "pending" === o.state() || m(r[i] && r[i].then))) return o.then();
            for (; i--;) R(r[i], a(i), o.reject);
            return o.promise()
        }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    b.Deferred.exceptionHook = function(e, i) {
        t.console && t.console.warn && e && F.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }, b.readyException = function(e) {
        t.setTimeout(function() {
            throw e
        })
    };
    var q = b.Deferred();

    function B() {
        n.removeEventListener("DOMContentLoaded", B), t.removeEventListener("load", B), b.ready()
    }
    b.fn.ready = function(t) {
        return q.then(t).catch(function(t) {
            b.readyException(t)
        }), this
    }, b.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --b.readyWait : b.isReady) || (b.isReady = !0, !0 !== t && --b.readyWait > 0 || q.resolveWith(n, [b]))
        }
    }), b.ready.then = q.then, "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? t.setTimeout(b.ready) : (n.addEventListener("DOMContentLoaded", B), t.addEventListener("load", B));
    var H = function(t, e, i, n, r, s, o) {
            var a = 0,
                l = t.length,
                u = null == i;
            if ("object" === _(i))
                for (a in r = !0, i) H(t, e, a, i[a], !0, s, o);
            else if (void 0 !== n && (r = !0, m(n) || (o = !0), u && (o ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
                    return u.call(b(t), i)
                })), e))
                for (; a < l; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
            return r ? t : u ? e.call(t) : l ? e(t[0], i) : s
        },
        $ = /^-ms-/,
        W = /-([a-z])/g;

    function X(t, e) {
        return e.toUpperCase()
    }

    function U(t) {
        return t.replace($, "ms-").replace(W, X)
    }
    var Y = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function V() {
        this.expando = b.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, Y(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, i) {
            var n, r = this.cache(t);
            if ("string" == typeof e) r[U(e)] = i;
            else
                for (n in e) r[U(n)] = e[n];
            return r
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][U(e)]
        },
        access: function(t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    i = (e = Array.isArray(e) ? e.map(U) : (e = U(e)) in n ? [e] : e.match(j) || []).length;
                    for (; i--;) delete n[e[i]]
                }(void 0 === e || b.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !b.isEmptyObject(e)
        }
    };
    var G = new V,
        Q = new V,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function K(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(J, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                try {
                    i = function(t) {
                        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Z.test(t) ? JSON.parse(t) : t)
                    }(i)
                } catch (t) {}
                Q.set(t, e, i)
            } else i = void 0;
        return i
    }
    b.extend({
        hasData: function(t) {
            return Q.hasData(t) || G.hasData(t)
        },
        data: function(t, e, i) {
            return Q.access(t, e, i)
        },
        removeData: function(t, e) {
            Q.remove(t, e)
        },
        _data: function(t, e, i) {
            return G.access(t, e, i)
        },
        _removeData: function(t, e) {
            G.remove(t, e)
        }
    }), b.fn.extend({
        data: function(t, e) {
            var i, n, r, s = this[0],
                o = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = Q.get(s), 1 === s.nodeType && !G.get(s, "hasDataAttrs"))) {
                    for (i = o.length; i--;) o[i] && 0 === (n = o[i].name).indexOf("data-") && (n = U(n.slice(5)), K(s, n, r[n]));
                    G.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                Q.set(this, t)
            }) : H(this, function(e) {
                var i;
                if (s && void 0 === e) return void 0 !== (i = Q.get(s, t)) ? i : void 0 !== (i = K(s, t)) ? i : void 0;
                this.each(function() {
                    Q.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                Q.remove(this, t)
            })
        }
    }), b.extend({
        queue: function(t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = G.get(t, e), i && (!n || Array.isArray(i) ? n = G.access(t, e, b.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = b.queue(t, e),
                n = i.length,
                r = i.shift(),
                s = b._queueHooks(t, e);
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, function() {
                b.dequeue(t, e)
            }, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return G.get(t, i) || G.access(t, i, {
                empty: b.Callbacks("once memory").add(function() {
                    G.remove(t, [e + "queue", i])
                })
            })
        }
    }), b.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? b.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = b.queue(this, t, e);
                b._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && b.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                b.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                r = b.Deferred(),
                s = this,
                o = this.length,
                a = function() {
                    --n || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(i = G.get(s[o], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        it = ["Top", "Right", "Bottom", "Left"],
        nt = n.documentElement,
        rt = function(t) {
            return b.contains(t.ownerDocument, t)
        },
        st = {
            composed: !0
        };
    nt.getRootNode && (rt = function(t) {
        return b.contains(t.ownerDocument, t) || t.getRootNode(st) === t.ownerDocument
    });
    var ot = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && rt(t) && "none" === b.css(t, "display")
        },
        at = function(t, e, i, n) {
            var r, s, o = {};
            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            for (s in r = i.apply(t, n || []), e) t.style[s] = o[s];
            return r
        };

    function lt(t, e, i, n) {
        var r, s, o = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return b.css(t, e, "")
            },
            l = a(),
            u = i && i[3] || (b.cssNumber[e] ? "" : "px"),
            c = t.nodeType && (b.cssNumber[e] || "px" !== u && +l) && et.exec(b.css(t, e));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; o--;) b.style(t, e, c + u), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (o = 0), c /= s;
            c *= 2, b.style(t, e, c + u), i = i || []
        }
        return i && (c = +c || +l || 0, r = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = c, n.end = r)), r
    }
    var ut = {};

    function ct(t) {
        var e, i = t.ownerDocument,
            n = t.nodeName,
            r = ut[n];
        return r || (e = i.body.appendChild(i.createElement(n)), r = b.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), ut[n] = r, r)
    }

    function ht(t, e) {
        for (var i, n, r = [], s = 0, o = t.length; s < o; s++)(n = t[s]).style && (i = n.style.display, e ? ("none" === i && (r[s] = G.get(n, "display") || null, r[s] || (n.style.display = "")), "" === n.style.display && ot(n) && (r[s] = ct(n))) : "none" !== i && (r[s] = "none", G.set(n, "display", i)));
        for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
        return t
    }
    b.fn.extend({
        show: function() {
            return ht(this, !0)
        },
        hide: function() {
            return ht(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                ot(this) ? b(this).show() : b(this).hide()
            })
        }
    });
    var ft = /^(?:checkbox|radio)$/i,
        dt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pt = /^$|^module$|\/(?:java|ecma)script/i,
        mt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function gt(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && E(t, e) ? b.merge([t], i) : i
    }

    function vt(t, e) {
        for (var i = 0, n = t.length; i < n; i++) G.set(t[i], "globalEval", !e || G.get(e[i], "globalEval"))
    }
    mt.optgroup = mt.option, mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead, mt.th = mt.td;
    var yt, _t, bt = /<|&#?\w+;/;

    function xt(t, e, i, n, r) {
        for (var s, o, a, l, u, c, h = e.createDocumentFragment(), f = [], d = 0, p = t.length; d < p; d++)
            if ((s = t[d]) || 0 === s)
                if ("object" === _(s)) b.merge(f, s.nodeType ? [s] : s);
                else if (bt.test(s)) {
            for (o = o || h.appendChild(e.createElement("div")), a = (dt.exec(s) || ["", ""])[1].toLowerCase(), l = mt[a] || mt._default, o.innerHTML = l[1] + b.htmlPrefilter(s) + l[2], c = l[0]; c--;) o = o.lastChild;
            b.merge(f, o.childNodes), (o = h.firstChild).textContent = ""
        } else f.push(e.createTextNode(s));
        for (h.textContent = "", d = 0; s = f[d++];)
            if (n && b.inArray(s, n) > -1) r && r.push(s);
            else if (u = rt(s), o = gt(h.appendChild(s), "script"), u && vt(o), i)
            for (c = 0; s = o[c++];) pt.test(s.type || "") && i.push(s);
        return h
    }
    yt = n.createDocumentFragment().appendChild(n.createElement("div")), (_t = n.createElement("input")).setAttribute("type", "radio"), _t.setAttribute("checked", "checked"), _t.setAttribute("name", "t"), yt.appendChild(_t), p.checkClone = yt.cloneNode(!0).cloneNode(!0).lastChild.checked, yt.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!yt.cloneNode(!0).lastChild.defaultValue;
    var wt = /^key/,
        Tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        St = /^([^.]*)(?:\.(.+)|)/;

    function Ct() {
        return !0
    }

    function kt() {
        return !1
    }

    function Et(t, e) {
        return t === function() {
            try {
                return n.activeElement
            } catch (t) {}
        }() == ("focus" === e)
    }

    function Pt(t, e, i, n, r, s) {
        var o, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), e) Pt(t, a, i, n, e[a], s);
            return t
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = kt;
        else if (!r) return t;
        return 1 === s && (o = r, (r = function(t) {
            return b().off(t), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = b.guid++)), t.each(function() {
            b.event.add(this, e, r, n, i)
        })
    }

    function At(t, e, i) {
        i ? (G.set(t, e, !1), b.event.add(t, e, {
            namespace: !1,
            handler: function(t) {
                var n, r, o = G.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                    if (o.length)(b.event.special[e] || {}).delegateType && t.stopPropagation();
                    else if (o = s.call(arguments), G.set(this, e, o), n = i(this, e), this[e](), o !== (r = G.get(this, e)) || n ? G.set(this, e, !1) : r = {}, o !== r) return t.stopImmediatePropagation(), t.preventDefault(), r.value
                } else o.length && (G.set(this, e, {
                    value: b.event.trigger(b.extend(o[0], b.Event.prototype), o.slice(1), this)
                }), t.stopImmediatePropagation())
            }
        })) : void 0 === G.get(t, e) && b.event.add(t, e, Ct)
    }
    b.event = {
        global: {},
        add: function(t, e, i, n, r) {
            var s, o, a, l, u, c, h, f, d, p, m, g = G.get(t);
            if (g)
                for (i.handler && (i = (s = i).handler, r = s.selector), r && b.find.matchesSelector(nt, r), i.guid || (i.guid = b.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(e) {
                        return void 0 !== b && b.event.triggered !== e.type ? b.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(j) || [""]).length; u--;) d = m = (a = St.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), d && (h = b.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, h = b.event.special[d] || {}, c = b.extend({
                    type: d,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && b.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, s), (f = l[d]) || ((f = l[d] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, n, p, o) || t.addEventListener && t.addEventListener(d, o)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), b.event.global[d] = !0)
        },
        remove: function(t, e, i, n, r) {
            var s, o, a, l, u, c, h, f, d, p, m, g = G.hasData(t) && G.get(t);
            if (g && (l = g.events)) {
                for (u = (e = (e || "").match(j) || [""]).length; u--;)
                    if (d = m = (a = St.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), d) {
                        for (h = b.event.special[d] || {}, f = l[d = (n ? h.delegateType : h.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = f.length; s--;) c = f[s], !r && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (f.splice(s, 1), c.selector && f.delegateCount--, h.remove && h.remove.call(t, c));
                        o && !f.length && (h.teardown && !1 !== h.teardown.call(t, p, g.handle) || b.removeEvent(t, d, g.handle), delete l[d])
                    } else
                        for (d in l) b.event.remove(t, d + e[u], i, n, !0);
                b.isEmptyObject(l) && G.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, i, n, r, s, o, a = b.event.fix(t),
                l = new Array(arguments.length),
                u = (G.get(this, "events") || {})[a.type] || [],
                c = b.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (o = b.event.handlers.call(this, a, u), e = 0;
                    (r = o[e++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, i = 0;
                        (s = r.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== s.namespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (n = ((b.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(t, e) {
            var i, n, r, s, o, a = [],
                l = e.delegateCount,
                u = t.target;
            if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                        for (s = [], o = {}, i = 0; i < l; i++) void 0 === o[r = (n = e[i]).selector + " "] && (o[r] = n.needsContext ? b(r, this).index(u) > -1 : b.find(r, this, null, [u]).length), o[r] && s.push(n);
                        s.length && a.push({
                            elem: u,
                            handlers: s
                        })
                    }
            return u = this, l < e.length && a.push({
                elem: u,
                handlers: e.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(b.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[b.expando] ? t : new b.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(t) {
                    var e = this || t;
                    return ft.test(e.type) && e.click && E(e, "input") && At(e, "click", Ct), !1
                },
                trigger: function(t) {
                    var e = this || t;
                    return ft.test(e.type) && e.click && E(e, "input") && At(e, "click"), !0
                },
                _default: function(t) {
                    var e = t.target;
                    return ft.test(e.type) && e.click && E(e, "input") && G.get(e, "click") || E(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, b.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, b.Event = function(t, e) {
        if (!(this instanceof b.Event)) return new b.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Ct : kt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && b.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[b.expando] = !0
    }, b.Event.prototype = {
        constructor: b.Event,
        isDefaultPrevented: kt,
        isPropagationStopped: kt,
        isImmediatePropagationStopped: kt,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = Ct, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = Ct, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = Ct, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, b.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && wt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Tt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, b.event.addProp), b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        b.event.special[t] = {
            setup: function() {
                return At(this, t, Et), !1
            },
            trigger: function() {
                return At(this, t), !0
            },
            delegateType: e
        }
    }), b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        b.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = t.relatedTarget,
                    r = t.handleObj;
                return n && (n === this || b.contains(this, n)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), b.fn.extend({
        on: function(t, e, i, n) {
            return Pt(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return Pt(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, b(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = kt), this.each(function() {
                b.event.remove(this, t, i, e)
            })
        }
    });
    var Dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ot = /<script|<style|<link/i,
        Mt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function It(t, e) {
        return E(t, "table") && E(11 !== e.nodeType ? e : e.firstChild, "tr") && b(t).children("tbody")[0] || t
    }

    function jt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function zt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function Nt(t, e) {
        var i, n, r, s, o, a, l, u;
        if (1 === e.nodeType) {
            if (G.hasData(t) && (s = G.access(t), o = G.set(e, s), u = s.events))
                for (r in delete o.handle, o.events = {}, u)
                    for (i = 0, n = u[r].length; i < n; i++) b.event.add(e, r, u[r][i]);
            Q.hasData(t) && (a = Q.access(t), l = b.extend({}, a), Q.set(e, l))
        }
    }

    function Rt(t, e, i, n) {
        e = o.apply([], e);
        var r, s, a, l, u, c, h = 0,
            f = t.length,
            d = f - 1,
            g = e[0],
            v = m(g);
        if (v || f > 1 && "string" == typeof g && !p.checkClone && Mt.test(g)) return t.each(function(r) {
            var s = t.eq(r);
            v && (e[0] = g.call(this, r, s.html())), Rt(s, e, i, n)
        });
        if (f && (s = (r = xt(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === r.childNodes.length && (r = s), s || n)) {
            for (l = (a = b.map(gt(r, "script"), jt)).length; h < f; h++) u = r, h !== d && (u = b.clone(u, !0, !0), l && b.merge(a, gt(u, "script"))), i.call(t[h], u, h);
            if (l)
                for (c = a[a.length - 1].ownerDocument, b.map(a, zt), h = 0; h < l; h++) u = a[h], pt.test(u.type || "") && !G.access(u, "globalEval") && b.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? b._evalUrl && !u.noModule && b._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }) : y(u.textContent.replace(Lt, ""), u, c))
        }
        return t
    }

    function Ft(t, e, i) {
        for (var n, r = e ? b.filter(e, t) : t, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || b.cleanData(gt(n)), n.parentNode && (i && rt(n) && vt(gt(n, "script")), n.parentNode.removeChild(n));
        return t
    }
    b.extend({
        htmlPrefilter: function(t) {
            return t.replace(Dt, "<$1></$2>")
        },
        clone: function(t, e, i) {
            var n, r, s, o, a, l, u, c = t.cloneNode(!0),
                h = rt(t);
            if (!(p.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || b.isXMLDoc(t)))
                for (o = gt(c), n = 0, r = (s = gt(t)).length; n < r; n++) a = s[n], l = o[n], u = void 0, "input" === (u = l.nodeName.toLowerCase()) && ft.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (e)
                if (i)
                    for (s = s || gt(t), o = o || gt(c), n = 0, r = s.length; n < r; n++) Nt(s[n], o[n]);
                else Nt(t, c);
            return (o = gt(c, "script")).length > 0 && vt(o, !h && gt(t, "script")), c
        },
        cleanData: function(t) {
            for (var e, i, n, r = b.event.special, s = 0; void 0 !== (i = t[s]); s++)
                if (Y(i)) {
                    if (e = i[G.expando]) {
                        if (e.events)
                            for (n in e.events) r[n] ? b.event.remove(i, n) : b.removeEvent(i, n, e.handle);
                        i[G.expando] = void 0
                    }
                    i[Q.expando] && (i[Q.expando] = void 0)
                }
        }
    }), b.fn.extend({
        detach: function(t) {
            return Ft(this, t, !0)
        },
        remove: function(t) {
            return Ft(this, t)
        },
        text: function(t) {
            return H(this, function(t) {
                return void 0 === t ? b.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return Rt(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || It(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return Rt(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = It(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return Rt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return Rt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (b.cleanData(gt(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return b.clone(this, t, e)
            })
        },
        html: function(t) {
            return H(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Ot.test(t) && !mt[(dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = b.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (b.cleanData(gt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return Rt(this, arguments, function(e) {
                var i = this.parentNode;
                b.inArray(this, t) < 0 && (b.cleanData(gt(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        b.fn[t] = function(t) {
            for (var i, n = [], r = b(t), s = r.length - 1, o = 0; o <= s; o++) i = o === s ? this : this.clone(!0), b(r[o])[e](i), a.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var qt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
        Bt = function(e) {
            var i = e.ownerDocument.defaultView;
            return i && i.opener || (i = t), i.getComputedStyle(e)
        },
        Ht = new RegExp(it.join("|"), "i");

    function $t(t, e, i) {
        var n, r, s, o, a = t.style;
        return (i = i || Bt(t)) && ("" !== (o = i.getPropertyValue(e) || i[e]) || rt(t) || (o = b.style(t, e)), !p.pixelBoxStyles() && qt.test(o) && Ht.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function Wt(t, e) {
        return {
            get: function() {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", nt.appendChild(u).appendChild(c);
                var e = t.getComputedStyle(c);
                r = "1%" !== e.top, l = 12 === i(e.marginLeft), c.style.right = "60%", a = 36 === i(e.right), s = 36 === i(e.width), c.style.position = "absolute", o = 12 === i(c.offsetWidth / 3), nt.removeChild(u), c = null
            }
        }

        function i(t) {
            return Math.round(parseFloat(t))
        }
        var r, s, o, a, l, u = n.createElement("div"),
            c = n.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, b.extend(p, {
            boxSizingReliable: function() {
                return e(), s
            },
            pixelBoxStyles: function() {
                return e(), a
            },
            pixelPosition: function() {
                return e(), r
            },
            reliableMarginLeft: function() {
                return e(), l
            },
            scrollboxSize: function() {
                return e(), o
            }
        }))
    }();
    var Xt = ["Webkit", "Moz", "ms"],
        Ut = n.createElement("div").style,
        Yt = {};

    function Vt(t) {
        var e = b.cssProps[t] || Yt[t];
        return e || (t in Ut ? t : Yt[t] = function(t) {
            for (var e = t[0].toUpperCase() + t.slice(1), i = Xt.length; i--;)
                if ((t = Xt[i] + e) in Ut) return t
        }(t) || t)
    }
    var Gt = /^(none|table(?!-c[ea]).+)/,
        Qt = /^--/,
        Zt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Jt = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Kt(t, e, i) {
        var n = et.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function te(t, e, i, n, r, s) {
        var o = "width" === e ? 1 : 0,
            a = 0,
            l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === i && (l += b.css(t, i + it[o], !0, r)), n ? ("content" === i && (l -= b.css(t, "padding" + it[o], !0, r)), "margin" !== i && (l -= b.css(t, "border" + it[o] + "Width", !0, r))) : (l += b.css(t, "padding" + it[o], !0, r), "padding" !== i ? l += b.css(t, "border" + it[o] + "Width", !0, r) : a += b.css(t, "border" + it[o] + "Width", !0, r));
        return !n && s >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - .5)) || 0), l
    }

    function ee(t, e, i) {
        var n = Bt(t),
            r = (!p.boxSizingReliable() || i) && "border-box" === b.css(t, "boxSizing", !1, n),
            s = r,
            o = $t(t, e, n),
            a = "offset" + e[0].toUpperCase() + e.slice(1);
        if (qt.test(o)) {
            if (!i) return o;
            o = "auto"
        }
        return (!p.boxSizingReliable() && r || "auto" === o || !parseFloat(o) && "inline" === b.css(t, "display", !1, n)) && t.getClientRects().length && (r = "border-box" === b.css(t, "boxSizing", !1, n), (s = a in t) && (o = t[a])), (o = parseFloat(o) || 0) + te(t, e, i || (r ? "border" : "content"), s, n, o) + "px"
    }

    function ie(t, e, i, n, r) {
        return new ie.prototype.init(t, e, i, n, r)
    }
    b.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = $t(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = U(e),
                    l = Qt.test(e),
                    u = t.style;
                if (l || (e = Vt(a)), o = b.cssHooks[e] || b.cssHooks[a], void 0 === i) return o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : u[e];
                "string" === (s = typeof i) && (r = et.exec(i)) && r[1] && (i = lt(t, e, r), s = "number"), null != i && i == i && ("number" !== s || l || (i += r && r[3] || (b.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (u[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (l ? u.setProperty(e, i) : u[e] = i))
            }
        },
        css: function(t, e, i, n) {
            var r, s, o, a = U(e);
            return Qt.test(e) || (e = Vt(a)), (o = b.cssHooks[e] || b.cssHooks[a]) && "get" in o && (r = o.get(t, !0, i)), void 0 === r && (r = $t(t, e, n)), "normal" === r && e in Jt && (r = Jt[e]), "" === i || i ? (s = parseFloat(r), !0 === i || isFinite(s) ? s || 0 : r) : r
        }
    }), b.each(["height", "width"], function(t, e) {
        b.cssHooks[e] = {
            get: function(t, i, n) {
                if (i) return !Gt.test(b.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ee(t, e, n) : at(t, Zt, function() {
                    return ee(t, e, n)
                })
            },
            set: function(t, i, n) {
                var r, s = Bt(t),
                    o = !p.scrollboxSize() && "absolute" === s.position,
                    a = (o || n) && "border-box" === b.css(t, "boxSizing", !1, s),
                    l = n ? te(t, e, n, a, s) : 0;
                return a && o && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(s[e]) - te(t, e, "border", !1, s) - .5)), l && (r = et.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i, i = b.css(t, e)), Kt(0, i, l)
            }
        }
    }), b.cssHooks.marginLeft = Wt(p.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat($t(t, "marginLeft")) || t.getBoundingClientRect().left - at(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px"
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        b.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[t + it[n] + e] = s[n] || s[n - 2] || s[0];
                return r
            }
        }, "margin" !== t && (b.cssHooks[t + e].set = Kt)
    }), b.fn.extend({
        css: function(t, e) {
            return H(this, function(t, e, i) {
                var n, r, s = {},
                    o = 0;
                if (Array.isArray(e)) {
                    for (n = Bt(t), r = e.length; o < r; o++) s[e[o]] = b.css(t, e[o], !1, n);
                    return s
                }
                return void 0 !== i ? b.style(t, e, i) : b.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), b.Tween = ie, ie.prototype = {
        constructor: ie,
        init: function(t, e, i, n, r, s) {
            this.elem = t, this.prop = i, this.easing = r || b.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (b.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = ie.propHooks[this.prop];
            return t && t.get ? t.get(this) : ie.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = ie.propHooks[this.prop];
            return this.options.duration ? this.pos = e = b.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : ie.propHooks._default.set(this), this
        }
    }, ie.prototype.init.prototype = ie.prototype, ie.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = b.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                b.fx.step[t.prop] ? b.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !b.cssHooks[t.prop] && null == t.elem.style[Vt(t.prop)] ? t.elem[t.prop] = t.now : b.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, ie.propHooks.scrollTop = ie.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, b.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, b.fx = ie.prototype.init, b.fx.step = {};
    var ne, re, se = /^(?:toggle|show|hide)$/,
        oe = /queueHooks$/;

    function ae() {
        re && (!1 === n.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ae) : t.setTimeout(ae, b.fx.interval), b.fx.tick())
    }

    function le() {
        return t.setTimeout(function() {
            ne = void 0
        }), ne = Date.now()
    }

    function ue(t, e) {
        var i, n = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; n < 4; n += 2 - e) r["margin" + (i = it[n])] = r["padding" + i] = t;
        return e && (r.opacity = r.width = t), r
    }

    function ce(t, e, i) {
        for (var n, r = (he.tweeners[e] || []).concat(he.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if (n = r[s].call(i, e, t)) return n
    }

    function he(t, e, i) {
        var n, r, s = 0,
            o = he.prefilters.length,
            a = b.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = ne || le(), i = Math.max(0, u.startTime + u.duration - e), n = 1 - (i / u.duration || 0), s = 0, o = u.tweens.length; s < o; s++) u.tweens[s].run(n);
                return a.notifyWith(t, [u, n, i]), n < 1 && o ? i : (o || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: b.extend({}, e),
                opts: b.extend(!0, {
                    specialEasing: {},
                    easing: b.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: ne || le(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = b.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i < n; i++) u.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (! function(t, e) {
                var i, n, r, s, o;
                for (i in t)
                    if (r = e[n = U(i)], s = t[i], Array.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (o = b.cssHooks[n]) && "expand" in o)
                        for (i in s = o.expand(s), delete t[n], s) i in t || (t[i] = s[i], e[i] = r);
                    else e[n] = r
            }(c, u.opts.specialEasing); s < o; s++)
            if (n = he.prefilters[s].call(u, t, c, u.opts)) return m(n.stop) && (b._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
        return b.map(c, ce, u), m(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), b.fx.timer(b.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    b.Animation = b.extend(he, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return lt(i.elem, t, et.exec(e), i), i
                }]
            },
            tweener: function(t, e) {
                m(t) ? (e = t, t = ["*"]) : t = t.match(j);
                for (var i, n = 0, r = t.length; n < r; n++) i = t[n], he.tweeners[i] = he.tweeners[i] || [], he.tweeners[i].unshift(e)
            },
            prefilters: [function(t, e, i) {
                var n, r, s, o, a, l, u, c, h = "width" in e || "height" in e,
                    f = this,
                    d = {},
                    p = t.style,
                    m = t.nodeType && ot(t),
                    g = G.get(t, "fxshow");
                for (n in i.queue || (null == (o = b._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function() {
                        o.unqueued || a()
                    }), o.unqueued++, f.always(function() {
                        f.always(function() {
                            o.unqueued--, b.queue(t, "fx").length || o.empty.fire()
                        })
                    })), e)
                    if (r = e[n], se.test(r)) {
                        if (delete e[n], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                            if ("show" !== r || !g || void 0 === g[n]) continue;
                            m = !0
                        }
                        d[n] = g && g[n] || b.style(t, n)
                    }
                if ((l = !b.isEmptyObject(e)) || !b.isEmptyObject(d))
                    for (n in h && 1 === t.nodeType && (i.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = g && g.display) && (u = G.get(t, "display")), "none" === (c = b.css(t, "display")) && (u ? c = u : (ht([t], !0), u = t.style.display || u, c = b.css(t, "display"), ht([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === b.css(t, "float") && (l || (f.done(function() {
                            p.display = u
                        }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), i.overflow && (p.overflow = "hidden", f.always(function() {
                            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
                        })), l = !1, d) l || (g ? "hidden" in g && (m = g.hidden) : g = G.access(t, "fxshow", {
                        display: u
                    }), s && (g.hidden = !m), m && ht([t], !0), f.done(function() {
                        for (n in m || ht([t]), G.remove(t, "fxshow"), d) b.style(t, n, d[n])
                    })), l = ce(m ? g[n] : 0, n, f), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(t, e) {
                e ? he.prefilters.unshift(t) : he.prefilters.push(t)
            }
        }), b.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? b.extend({}, t) : {
                complete: i || !i && e || m(t) && t,
                duration: t,
                easing: i && e || e && !m(e) && e
            };
            return b.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in b.fx.speeds ? n.duration = b.fx.speeds[n.duration] : n.duration = b.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                m(n.old) && n.old.call(this), n.queue && b.dequeue(this, n.queue)
            }, n
        }, b.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(ot).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var r = b.isEmptyObject(t),
                    s = b.speed(e, i, n),
                    o = function() {
                        var e = he(this, b.extend({}, t), s);
                        (r || G.get(this, "finish")) && e.stop(!0)
                    };
                return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        s = b.timers,
                        o = G.get(this);
                    if (r) o[r] && o[r].stop && n(o[r]);
                    else
                        for (r in o) o[r] && o[r].stop && oe.test(r) && n(o[r]);
                    for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));
                    !e && i || b.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each(function() {
                    var e, i = G.get(this),
                        n = i[t + "queue"],
                        r = i[t + "queueHooks"],
                        s = b.timers,
                        o = n ? n.length : 0;
                    for (i.finish = !0, b.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), b.each(["toggle", "show", "hide"], function(t, e) {
            var i = b.fn[e];
            b.fn[e] = function(t, n, r) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(ue(e, !0), t, n, r)
            }
        }), b.each({
            slideDown: ue("show"),
            slideUp: ue("hide"),
            slideToggle: ue("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            b.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), b.timers = [], b.fx.tick = function() {
            var t, e = 0,
                i = b.timers;
            for (ne = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || b.fx.stop(), ne = void 0
        }, b.fx.timer = function(t) {
            b.timers.push(t), b.fx.start()
        }, b.fx.interval = 13, b.fx.start = function() {
            re || (re = !0, ae())
        }, b.fx.stop = function() {
            re = null
        }, b.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, b.fn.delay = function(e, i) {
            return e = b.fx && b.fx.speeds[e] || e, i = i || "fx", this.queue(i, function(i, n) {
                var r = t.setTimeout(i, e);
                n.stop = function() {
                    t.clearTimeout(r)
                }
            })
        },
        function() {
            var t = n.createElement("input"),
                e = n.createElement("select").appendChild(n.createElement("option"));
            t.type = "checkbox", p.checkOn = "" !== t.value, p.optSelected = e.selected, (t = n.createElement("input")).value = "t", t.type = "radio", p.radioValue = "t" === t.value
        }();
    var fe, de = b.expr.attrHandle;
    b.fn.extend({
        attr: function(t, e) {
            return H(this, b.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                b.removeAttr(this, t)
            })
        }
    }), b.extend({
        attr: function(t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? b.prop(t, e, i) : (1 === s && b.isXMLDoc(t) || (r = b.attrHooks[e.toLowerCase()] || (b.expr.match.bool.test(e) ? fe : void 0)), void 0 !== i ? null === i ? void b.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = b.find.attr(t, e)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!p.radioValue && "radio" === e && E(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n = 0,
                r = e && e.match(j);
            if (r && 1 === t.nodeType)
                for (; i = r[n++];) t.removeAttribute(i)
        }
    }), fe = {
        set: function(t, e, i) {
            return !1 === e ? b.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, b.each(b.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = de[e] || b.find.attr;
        de[e] = function(t, e, n) {
            var r, s, o = e.toLowerCase();
            return n || (s = de[o], de[o] = r, r = null != i(t, e, n) ? o : null, de[o] = s), r
        }
    });
    var pe = /^(?:input|select|textarea|button)$/i,
        me = /^(?:a|area)$/i;

    function ge(t) {
        return (t.match(j) || []).join(" ")
    }

    function ve(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function ye(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(j) || []
    }
    b.fn.extend({
        prop: function(t, e) {
            return H(this, b.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[b.propFix[t] || t]
            })
        }
    }), b.extend({
        prop: function(t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && b.isXMLDoc(t) || (e = b.propFix[e] || e, r = b.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = b.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : pe.test(t.nodeName) || me.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (b.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        b.propFix[this.toLowerCase()] = this
    }), b.fn.extend({
        addClass: function(t) {
            var e, i, n, r, s, o, a, l = 0;
            if (m(t)) return this.each(function(e) {
                b(this).addClass(t.call(this, e, ve(this)))
            });
            if ((e = ye(t)).length)
                for (; i = this[l++];)
                    if (r = ve(i), n = 1 === i.nodeType && " " + ge(r) + " ") {
                        for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        r !== (a = ge(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, r, s, o, a, l = 0;
            if (m(t)) return this.each(function(e) {
                b(this).removeClass(t.call(this, e, ve(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = ye(t)).length)
                for (; i = this[l++];)
                    if (r = ve(i), n = 1 === i.nodeType && " " + ge(r) + " ") {
                        for (o = 0; s = e[o++];)
                            for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                        r !== (a = ge(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t,
                n = "string" === i || Array.isArray(t);
            return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : m(t) ? this.each(function(i) {
                b(this).toggleClass(t.call(this, i, ve(this), e), e)
            }) : this.each(function() {
                var e, r, s, o;
                if (n)
                    for (r = 0, s = b(this), o = ye(t); e = o[r++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else void 0 !== t && "boolean" !== i || ((e = ve(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : G.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + ge(ve(i)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var _e = /\r/g;
    b.fn.extend({
        val: function(t) {
            var e, i, n, r = this[0];
            return arguments.length ? (n = m(t), this.each(function(i) {
                var r;
                1 === this.nodeType && (null == (r = n ? t.call(this, i, b(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = b.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), (e = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = b.valHooks[r.type] || b.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : "string" == typeof(i = r.value) ? i.replace(_e, "") : null == i ? "" : i : void 0
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = b.find.attr(t, "value");
                    return null != e ? e : ge(b.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, i, n, r = t.options,
                        s = t.selectedIndex,
                        o = "select-one" === t.type,
                        a = o ? null : [],
                        l = o ? s + 1 : r.length;
                    for (n = s < 0 ? l : o ? s : 0; n < l; n++)
                        if (((i = r[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !E(i.parentNode, "optgroup"))) {
                            if (e = b(i).val(), o) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var i, n, r = t.options, s = b.makeArray(e), o = r.length; o--;)((n = r[o]).selected = b.inArray(b.valHooks.option.get(n), s) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e)) return t.checked = b.inArray(b(t).val(), e) > -1
            }
        }, p.checkOn || (b.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), p.focusin = "onfocusin" in t;
    var be = /^(?:focusinfocus|focusoutblur)$/,
        xe = function(t) {
            t.stopPropagation()
        };
    b.extend(b.event, {
        trigger: function(e, i, r, s) {
            var o, a, l, u, c, f, d, p, v = [r || n],
                y = h.call(e, "type") ? e.type : e,
                _ = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = p = l = r = r || n, 3 !== r.nodeType && 8 !== r.nodeType && !be.test(y + b.event.triggered) && (y.indexOf(".") > -1 && (_ = y.split("."), y = _.shift(), _.sort()), c = y.indexOf(":") < 0 && "on" + y, (e = e[b.expando] ? e : new b.Event(y, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = _.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), i = null == i ? [e] : b.makeArray(i, [e]), d = b.event.special[y] || {}, s || !d.trigger || !1 !== d.trigger.apply(r, i))) {
                if (!s && !d.noBubble && !g(r)) {
                    for (u = d.delegateType || y, be.test(u + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
                    l === (r.ownerDocument || n) && v.push(l.defaultView || l.parentWindow || t)
                }
                for (o = 0;
                    (a = v[o++]) && !e.isPropagationStopped();) p = a, e.type = o > 1 ? u : d.bindType || y, (f = (G.get(a, "events") || {})[e.type] && G.get(a, "handle")) && f.apply(a, i), (f = c && a[c]) && f.apply && Y(a) && (e.result = f.apply(a, i), !1 === e.result && e.preventDefault());
                return e.type = y, s || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), i) || !Y(r) || c && m(r[y]) && !g(r) && ((l = r[c]) && (r[c] = null), b.event.triggered = y, e.isPropagationStopped() && p.addEventListener(y, xe), r[y](), e.isPropagationStopped() && p.removeEventListener(y, xe), b.event.triggered = void 0, l && (r[c] = l)), e.result
            }
        },
        simulate: function(t, e, i) {
            var n = b.extend(new b.Event, i, {
                type: t,
                isSimulated: !0
            });
            b.event.trigger(n, null, e)
        }
    }), b.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                b.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            if (i) return b.event.trigger(t, e, i, !0)
        }
    }), p.focusin || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            b.event.simulate(e, t.target, b.event.fix(t))
        };
        b.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    r = G.access(n, e);
                r || n.addEventListener(t, i, !0), G.access(n, e, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    r = G.access(n, e) - 1;
                r ? G.access(n, e, r) : (n.removeEventListener(t, i, !0), G.remove(n, e))
            }
        }
    });
    var we = t.location,
        Te = Date.now(),
        Se = /\?/;
    b.parseXML = function(e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + e), i
    };
    var Ce = /\[\]$/,
        ke = /\r?\n/g,
        Ee = /^(?:submit|button|image|reset|file)$/i,
        Pe = /^(?:input|select|textarea|keygen)/i;

    function Ae(t, e, i, n) {
        var r;
        if (Array.isArray(e)) b.each(e, function(e, r) {
            i || Ce.test(t) ? n(t, r) : Ae(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n)
        });
        else if (i || "object" !== _(e)) n(t, e);
        else
            for (r in e) Ae(t + "[" + r + "]", e[r], i, n)
    }
    b.param = function(t, e) {
        var i, n = [],
            r = function(t, e) {
                var i = m(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (null == t) return "";
        if (Array.isArray(t) || t.jquery && !b.isPlainObject(t)) b.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (i in t) Ae(i, t[i], e, r);
        return n.join("&")
    }, b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = b.prop(this, "elements");
                return t ? b.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !b(this).is(":disabled") && Pe.test(this.nodeName) && !Ee.test(t) && (this.checked || !ft.test(t))
            }).map(function(t, e) {
                var i = b(this).val();
                return null == i ? null : Array.isArray(i) ? b.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ke, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(ke, "\r\n")
                }
            }).get()
        }
    });
    var De = /%20/g,
        Oe = /#.*$/,
        Me = /([?&])_=[^&]*/,
        Le = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ie = /^(?:GET|HEAD)$/,
        je = /^\/\//,
        ze = {},
        Ne = {},
        Re = "*/".concat("*"),
        Fe = n.createElement("a");

    function qe(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, r = 0,
                s = e.toLowerCase().match(j) || [];
            if (m(i))
                for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function Be(t, e, i, n) {
        var r = {},
            s = t === Ne;

        function o(a) {
            var l;
            return r[a] = !0, b.each(t[a] || [], function(t, a) {
                var u = a(e, i, n);
                return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
            }), l
        }
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function He(t, e) {
        var i, n, r = b.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && b.extend(!0, t, n), t
    }
    Fe.href = we.href, b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: we.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(we.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Re,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? He(He(t, b.ajaxSettings), e) : He(b.ajaxSettings, t)
        },
        ajaxPrefilter: qe(ze),
        ajaxTransport: qe(Ne),
        ajax: function(e, i) {
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var r, s, o, a, l, u, c, h, f, d, p = b.ajaxSetup({}, i),
                m = p.context || p,
                g = p.context && (m.nodeType || m.jquery) ? b(m) : b.event,
                v = b.Deferred(),
                y = b.Callbacks("once memory"),
                _ = p.statusCode || {},
                x = {},
                w = {},
                T = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (c) {
                            if (!a)
                                for (a = {}; e = Le.exec(o);) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = a[t.toLowerCase() + " "]
                        }
                        return null == e ? null : e.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return c ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, x[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == c && (p.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (c) S.always(t[S.status]);
                            else
                                for (e in t) _[e] = [_[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || T;
                        return r && r.abort(e), C(0, e), this
                    }
                };
            if (v.promise(S), p.url = ((e || p.url || we.href) + "").replace(je, we.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""], null == p.crossDomain) {
                u = n.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Fe.protocol + "//" + Fe.host != u.protocol + "//" + u.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), Be(ze, p, i, S), c) return S;
            for (f in (h = b.event && p.global) && 0 == b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ie.test(p.type), s = p.url.replace(Oe, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(De, "+")) : (d = p.url.slice(s.length), p.data && (p.processData || "string" == typeof p.data) && (s += (Se.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (s = s.replace(Me, "$1"), d = (Se.test(s) ? "&" : "?") + "_=" + Te++ + d), p.url = s + d), p.ifModified && (b.lastModified[s] && S.setRequestHeader("If-Modified-Since", b.lastModified[s]), b.etag[s] && S.setRequestHeader("If-None-Match", b.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || i.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Re + "; q=0.01" : "") : p.accepts["*"]), p.headers) S.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(m, S, p) || c)) return S.abort();
            if (T = "abort", y.add(p.complete), S.done(p.success), S.fail(p.error), r = Be(Ne, p, i, S)) {
                if (S.readyState = 1, h && g.trigger("ajaxSend", [S, p]), c) return S;
                p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                    S.abort("timeout")
                }, p.timeout));
                try {
                    c = !1, r.send(x, C)
                } catch (t) {
                    if (c) throw t;
                    C(-1, t)
                }
            } else C(-1, "No Transport");

            function C(e, i, n, a) {
                var u, f, d, x, w, T = i;
                c || (c = !0, l && t.clearTimeout(l), r = void 0, o = a || "", S.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, n && (x = function(t, e, i) {
                    for (var n, r, s, o, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                        for (r in a)
                            if (a[r] && a[r].test(n)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in i) s = l[0];
                    else {
                        for (r in i) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            o || (o = r)
                        }
                        s = s || o
                    }
                    if (s) return s !== l[0] && l.unshift(s), i[s]
                }(p, S, n)), x = function(t, e, i, n) {
                    var r, s, o, a, l, u = {},
                        c = t.dataTypes.slice();
                    if (c[1])
                        for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
                    for (s = c.shift(); s;)
                        if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                        if (!(o = u[l + " " + s] || u["* " + s]))
                            for (r in u)
                                if ((a = r.split(" "))[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === o ? o = u[r] : !0 !== u[r] && (s = a[0], c.unshift(a[1]));
                                    break
                                }
                        if (!0 !== o)
                            if (o && t.throws) e = o(e);
                            else try {
                                e = o(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: o ? t : "No conversion from " + l + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(p, x, S, u), u ? (p.ifModified && ((w = S.getResponseHeader("Last-Modified")) && (b.lastModified[s] = w), (w = S.getResponseHeader("etag")) && (b.etag[s] = w)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, f = x.data, u = !(d = x.error))) : (d = T, !e && T || (T = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (i || T) + "", u ? v.resolveWith(m, [f, T, S]) : v.rejectWith(m, [S, T, d]), S.statusCode(_), _ = void 0, h && g.trigger(u ? "ajaxSuccess" : "ajaxError", [S, p, u ? f : d]), y.fireWith(m, [S, T]), h && (g.trigger("ajaxComplete", [S, p]), --b.active || b.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(t, e, i) {
            return b.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return b.get(t, void 0, e, "script")
        }
    }), b.each(["get", "post"], function(t, e) {
        b[e] = function(t, i, n, r) {
            return m(i) && (r = r || n, n = i, i = void 0), b.ajax(b.extend({
                url: t,
                type: e,
                dataType: r,
                data: i,
                success: n
            }, b.isPlainObject(t) && t))
        }
    }), b._evalUrl = function(t, e) {
        return b.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(t) {
                b.globalEval(t, e)
            }
        })
    }, b.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (m(t) && (t = t.call(this[0])), e = b(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function(t) {
            return m(t) ? this.each(function(e) {
                b(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = b(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = m(t);
            return this.each(function(i) {
                b(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                b(this).replaceWith(this.childNodes)
            }), this
        }
    }), b.expr.pseudos.hidden = function(t) {
        return !b.expr.pseudos.visible(t)
    }, b.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, b.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var $e = {
            0: 200,
            1223: 204
        },
        We = b.ajaxSettings.xhr();
    p.cors = !!We && "withCredentials" in We, p.ajax = We = !!We, b.ajaxTransport(function(e) {
        var i, n;
        if (p.cors || We && !e.crossDomain) return {
            send: function(r, s) {
                var o, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) a[o] = e.xhrFields[o];
                for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(o, r[o]);
                i = function(t) {
                    return function() {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s($e[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = a.ontimeout = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (i) throw t
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), b.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }), b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return b.globalEval(t), t
            }
        }
    }), b.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), b.ajaxTransport("script", function(t) {
        var e, i;
        if (t.crossDomain || t.scriptAttrs) return {
            send: function(r, s) {
                e = b("<script>").attr(t.scriptAttrs || {}).prop({
                    charset: t.scriptCharset,
                    src: t.url
                }).on("load error", i = function(t) {
                    e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
                }), n.head.appendChild(e[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Xe, Ue = [],
        Ye = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ue.pop() || b.expando + "_" + Te++;
            return this[t] = !0, t
        }
    }), b.ajaxPrefilter("json jsonp", function(e, i, n) {
        var r, s, o, a = !1 !== e.jsonp && (Ye.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ye.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ye, "$1" + r) : !1 !== e.jsonp && (e.url += (Se.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || b.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", s = t[r], t[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === s ? b(t).removeProp(r) : t[r] = s, e[r] && (e.jsonpCallback = i.jsonpCallback, Ue.push(r)), o && m(s) && s(o[0]), o = s = void 0
        }), "script"
    }), p.createHTMLDocument = ((Xe = n.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xe.childNodes.length), b.parseHTML = function(t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (p.createHTMLDocument ? ((r = (e = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href, e.head.appendChild(r)) : e = n), o = !i && [], (s = P.exec(t)) ? [e.createElement(s[1])] : (s = xt([t], e, o), o && o.length && b(o).remove(), b.merge([], s.childNodes)));
        var r, s, o
    }, b.fn.load = function(t, e, i) {
        var n, r, s, o = this,
            a = t.indexOf(" ");
        return a > -1 && (n = ge(t.slice(a)), t = t.slice(0, a)), m(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && b.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, o.html(n ? b("<div>").append(b.parseHTML(t)).find(n) : t)
        }).always(i && function(t, e) {
            o.each(function() {
                i.apply(this, s || [t.responseText, e, t])
            })
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        b.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), b.expr.pseudos.animated = function(t) {
        return b.grep(b.timers, function(e) {
            return t === e.elem
        }).length
    }, b.offset = {
        setOffset: function(t, e, i) {
            var n, r, s, o, a, l, u = b.css(t, "position"),
                c = b(t),
                h = {};
            "static" === u && (t.style.position = "relative"), a = c.offset(), s = b.css(t, "top"), l = b.css(t, "left"), ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1 ? (o = (n = c.position()).top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), m(e) && (e = e.call(t, i, b.extend({}, a))), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : c.css(h)
        }
    }, b.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                b.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: e.top + i.pageYOffset,
                left: e.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === b.css(n, "position")) e = n.getBoundingClientRect();
                else {
                    for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === b.css(t, "position");) t = t.parentNode;
                    t && t !== n && 1 === t.nodeType && ((r = b(t).offset()).top += b.css(t, "borderTopWidth", !0), r.left += b.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - r.top - b.css(n, "marginTop", !0),
                    left: e.left - r.left - b.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === b.css(t, "position");) t = t.offsetParent;
                return t || nt
            })
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = "pageYOffset" === e;
        b.fn[t] = function(n) {
            return H(this, function(t, n, r) {
                var s;
                if (g(t) ? s = t : 9 === t.nodeType && (s = t.defaultView), void 0 === r) return s ? s[e] : t[n];
                s ? s.scrollTo(i ? s.pageXOffset : r, i ? r : s.pageYOffset) : t[n] = r
            }, t, n, arguments.length)
        }
    }), b.each(["top", "left"], function(t, e) {
        b.cssHooks[e] = Wt(p.pixelPosition, function(t, i) {
            if (i) return i = $t(t, e), qt.test(i) ? b(t).position()[e] + "px" : i
        })
    }), b.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        b.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            b.fn[n] = function(r, s) {
                var o = arguments.length && (i || "boolean" != typeof r),
                    a = i || (!0 === r || !0 === s ? "margin" : "border");
                return H(this, function(e, i, r) {
                    var s;
                    return g(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === r ? b.css(e, i, a) : b.style(e, i, r, a)
                }, e, o ? r : void 0, o)
            }
        })
    }), b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        b.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), b.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), b.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), b.proxy = function(t, e) {
        var i, n, r;
        if ("string" == typeof e && (i = t[e], e = t, t = i), m(t)) return n = s.call(arguments, 2), (r = function() {
            return t.apply(e || this, n.concat(s.call(arguments)))
        }).guid = t.guid = t.guid || b.guid++, r
    }, b.holdReady = function(t) {
        t ? b.readyWait++ : b.ready(!0)
    }, b.isArray = Array.isArray, b.parseJSON = JSON.parse, b.nodeName = E, b.isFunction = m, b.isWindow = g, b.camelCase = U, b.type = _, b.now = Date.now, b.isNumeric = function(t) {
        var e = b.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return b
    });
    var Ve = t.jQuery,
        Ge = t.$;
    return b.noConflict = function(e) {
        return t.$ === b && (t.$ = Ge), e && t.jQuery === b && (t.jQuery = Ve), b
    }, e || (t.jQuery = t.$ = b), b
}),
function(t) {
    "use strict";
    t.loadCSS || (t.loadCSS = function() {});
    var e = loadCSS.relpreload = {};
    if (e.support = function() {
            var e;
            try {
                e = t.document.createElement("link").relList.supports("preload")
            } catch (t) {
                e = !1
            }
            return function() {
                return e
            }
        }(), e.bindMediaToggle = function(t) {
            var e = t.media || "all";

            function i() {
                t.addEventListener ? t.removeEventListener("load", i) : t.attachEvent && t.detachEvent("onload", i), t.setAttribute("onload", null), t.media = e
            }
            t.addEventListener ? t.addEventListener("load", i) : t.attachEvent && t.attachEvent("onload", i), setTimeout(function() {
                t.rel = "stylesheet", t.media = "only x"
            }), setTimeout(i, 3e3)
        }, e.poly = function() {
            if (!e.support())
                for (var i = t.document.getElementsByTagName("link"), n = 0; n < i.length; n++) {
                    var r = i[n];
                    "preload" !== r.rel || "style" !== r.getAttribute("as") || r.getAttribute("data-loadcss") || (r.setAttribute("data-loadcss", !0), e.bindMediaToggle(r))
                }
        }, !e.support()) {
        e.poly();
        var i = t.setInterval(e.poly, 500);
        t.addEventListener ? t.addEventListener("load", function() {
            e.poly(), t.clearInterval(i)
        }) : t.attachEvent && t.attachEvent("onload", function() {
            e.poly(), t.clearInterval(i)
        })
    }
    "undefined" != typeof exports ? exports.loadCSS = loadCSS : t.loadCSS = loadCSS
}("undefined" != typeof global ? global : this),
function() {
    var t, e, i, n, r, s, o, a, l, u, c, h, f, d, p, m, g, v, y, _, b, x, w, T, S, C, k, E, P, A, D, O, M, L, I, j, z, N, R, F, q, B, H, $, W, X, U, Y, V = [].slice,
        G = {}.hasOwnProperty,
        Q = function(t, e) {
            for (var i in e) G.call(e, i) && (t[i] = e[i]);

            function n() {
                this.constructor = t
            }
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        },
        Z = [].indexOf || function(t) {
            for (var e = 0, i = this.length; e < i; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    for (b = {
            catchupTime: 100,
            initialRate: .03,
            minTime: 250,
            ghostTime: 100,
            maxProgressPerFrame: 20,
            easeFactor: 1.25,
            startOnPageLoad: !0,
            restartOnPushState: !0,
            restartOnRequestAfter: 500,
            target: "body",
            elements: {
                checkInterval: 100,
                selectors: ["body"]
            },
            eventLag: {
                minSamples: 10,
                sampleCount: 3,
                lagThreshold: 3
            },
            ajax: {
                trackMethods: ["GET"],
                trackWebSockets: !0,
                ignoreURLs: []
            }
        }, P = function() {
            var t;
            return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
        }, D = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, _ = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == D && (D = function(t) {
            return setTimeout(t, 50)
        }, _ = function(t) {
            return clearTimeout(t)
        }), M = function(t) {
            var e, i;
            return e = P(), (i = function() {
                var n;
                return (n = P() - e) >= 33 ? (e = P(), t(n, function() {
                    return D(i)
                })) : setTimeout(i, 33 - n)
            })()
        }, O = function() {
            var t, e, i;
            return i = arguments[0], e = arguments[1], t = 3 <= arguments.length ? V.call(arguments, 2) : [], "function" == typeof i[e] ? i[e].apply(i, t) : i[e]
        }, x = function() {
            var t, e, i, n, r, s, o;
            for (e = arguments[0], s = 0, o = (n = 2 <= arguments.length ? V.call(arguments, 1) : []).length; s < o; s++)
                if (i = n[s])
                    for (t in i) G.call(i, t) && (r = i[t], null != e[t] && "object" == typeof e[t] && null != r && "object" == typeof r ? x(e[t], r) : e[t] = r);
            return e
        }, g = function(t) {
            var e, i, n, r, s;
            for (i = e = 0, r = 0, s = t.length; r < s; r++) n = t[r], i += Math.abs(n), e++;
            return i / e
        }, T = function(t, e) {
            var i, n, r;
            if (null == t && (t = "options"), null == e && (e = !0), r = document.querySelector("[data-pace-" + t + "]")) {
                if (i = r.getAttribute("data-pace-" + t), !e) return i;
                try {
                    return JSON.parse(i)
                } catch (t) {
                    return n = t, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", n) : void 0
                }
            }
        }, o = function() {
            function t() {}
            return t.prototype.on = function(t, e, i, n) {
                var r;
                return null == n && (n = !1), null == this.bindings && (this.bindings = {}), null == (r = this.bindings)[t] && (r[t] = []), this.bindings[t].push({
                    handler: e,
                    ctx: i,
                    once: n
                })
            }, t.prototype.once = function(t, e, i) {
                return this.on(t, e, i, !0)
            }, t.prototype.off = function(t, e) {
                var i, n, r;
                if (null != (null != (n = this.bindings) ? n[t] : void 0)) {
                    if (null == e) return delete this.bindings[t];
                    for (i = 0, r = []; i < this.bindings[t].length;) this.bindings[t][i].handler === e ? r.push(this.bindings[t].splice(i, 1)) : r.push(i++);
                    return r
                }
            }, t.prototype.trigger = function() {
                var t, e, i, n, r, s, o, a, l;
                if (i = arguments[0], t = 2 <= arguments.length ? V.call(arguments, 1) : [], null != (o = this.bindings) ? o[i] : void 0) {
                    for (r = 0, l = []; r < this.bindings[i].length;) n = (a = this.bindings[i][r]).handler, e = a.ctx, s = a.once, n.apply(null != e ? e : this, t), s ? l.push(this.bindings[i].splice(r, 1)) : l.push(r++);
                    return l
                }
            }, t
        }(), u = window.Pace || {}, window.Pace = u, x(u, o.prototype), A = u.options = x({}, b, window.paceOptions, T()), H = 0, W = (U = ["ajax", "document", "eventLag", "elements"]).length; H < W; H++) !0 === A[z = U[H]] && (A[z] = b[z]);
    l = function(t) {
        function e() {
            return e.__super__.constructor.apply(this, arguments)
        }
        return Q(e, t), e
    }(Error), e = function() {
        function t() {
            this.progress = 0
        }
        return t.prototype.getElement = function() {
            var t;
            if (null == this.el) {
                if (!(t = document.querySelector(A.target))) throw new l;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el)
            }
            return this.el
        }, t.prototype.finish = function() {
            var t;
            return (t = this.getElement()).className = t.className.replace("pace-active", ""), t.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
        }, t.prototype.update = function(t) {
            return this.progress = t, this.render()
        }, t.prototype.destroy = function() {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (t) {
                l = t
            }
            return this.el = void 0
        }, t.prototype.render = function() {
            var t, e, i, n, r, s, o;
            if (null == document.querySelector(A.target)) return !1;
            for (t = this.getElement(), n = "translate3d(" + this.progress + "%, 0, 0)", r = 0, s = (o = ["webkitTransform", "msTransform", "transform"]).length; r < s; r++) e = o[r], t.children[0].style[e] = n;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), this.progress >= 100 ? i = "99" : (i = this.progress < 10 ? "0" : "", i += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + i)), this.lastRenderedProgress = this.progress
        }, t.prototype.done = function() {
            return this.progress >= 100
        }, t
    }(), a = function() {
        function t() {
            this.bindings = {}
        }
        return t.prototype.trigger = function(t, e) {
            var i, n, r, s, o;
            if (null != this.bindings[t]) {
                for (o = [], n = 0, r = (s = this.bindings[t]).length; n < r; n++) i = s[n], o.push(i.call(this, e));
                return o
            }
        }, t.prototype.on = function(t, e) {
            var i;
            return null == (i = this.bindings)[t] && (i[t] = []), this.bindings[t].push(e)
        }, t
    }(), B = window.XMLHttpRequest, q = window.XDomainRequest, F = window.WebSocket, w = function(t, e) {
        var i, n;
        for (i in n = [], e.prototype) try {
            null == t[i] && "function" != typeof e[i] ? "function" == typeof Object.defineProperty ? n.push(Object.defineProperty(t, i, {
                get: function() {
                    return e.prototype[i]
                },
                configurable: !0,
                enumerable: !0
            })) : n.push(t[i] = e.prototype[i]) : n.push(void 0)
        } catch (t) {
            t
        }
        return n
    }, k = [], u.ignore = function() {
        var t, e, i;
        return e = arguments[0], t = 2 <= arguments.length ? V.call(arguments, 1) : [], k.unshift("ignore"), i = e.apply(null, t), k.shift(), i
    }, u.track = function() {
        var t, e, i;
        return e = arguments[0], t = 2 <= arguments.length ? V.call(arguments, 1) : [], k.unshift("track"), i = e.apply(null, t), k.shift(), i
    }, j = function(t) {
        var e;
        if (null == t && (t = "GET"), "track" === k[0]) return "force";
        if (!k.length && A.ajax) {
            if ("socket" === t && A.ajax.trackWebSockets) return !0;
            if (e = t.toUpperCase(), Z.call(A.ajax.trackMethods, e) >= 0) return !0
        }
        return !1
    }, c = function(t) {
        function e() {
            var t, i = this;
            e.__super__.constructor.apply(this, arguments), t = function(t) {
                var e;
                return e = t.open, t.open = function(n, r, s) {
                    return j(n) && i.trigger("request", {
                        type: n,
                        url: r,
                        request: t
                    }), e.apply(t, arguments)
                }
            }, window.XMLHttpRequest = function(e) {
                var i;
                return i = new B(e), t(i), i
            };
            try {
                w(window.XMLHttpRequest, B)
            } catch (t) {}
            if (null != q) {
                window.XDomainRequest = function() {
                    var e;
                    return e = new q, t(e), e
                };
                try {
                    w(window.XDomainRequest, q)
                } catch (t) {}
            }
            if (null != F && A.ajax.trackWebSockets) {
                window.WebSocket = function(t, e) {
                    var n;
                    return n = null != e ? new F(t, e) : new F(t), j("socket") && i.trigger("request", {
                        type: "socket",
                        url: t,
                        protocols: e,
                        request: n
                    }), n
                };
                try {
                    w(window.WebSocket, F)
                } catch (t) {}
            }
        }
        return Q(e, a), e
    }(), $ = null, I = function(t) {
        var e, i, n, r;
        for (i = 0, n = (r = A.ajax.ignoreURLs).length; i < n; i++)
            if ("string" == typeof(e = r[i])) {
                if (-1 !== t.indexOf(e)) return !0
            } else if (e.test(t)) return !0;
        return !1
    }, (S = function() {
        return null == $ && ($ = new c), $
    })().on("request", function(e) {
        var i, n, r, s, o;
        if (s = e.type, r = e.request, o = e.url, !I(o)) return u.running || !1 === A.restartOnRequestAfter && "force" !== j(s) ? void 0 : (n = arguments, "boolean" == typeof(i = A.restartOnRequestAfter || 0) && (i = 0), setTimeout(function() {
            var e, i, o, a, l;
            if ("socket" === s ? r.readyState < 2 : 0 < (o = r.readyState) && o < 4) {
                for (u.restart(), l = [], e = 0, i = (a = u.sources).length; e < i; e++) {
                    if ((z = a[e]) instanceof t) {
                        z.watch.apply(z, n);
                        break
                    }
                    l.push(void 0)
                }
                return l
            }
        }, i))
    }), t = function() {
        function t() {
            var t = this;
            this.elements = [], S().on("request", function() {
                return t.watch.apply(t, arguments)
            })
        }
        return t.prototype.watch = function(t) {
            var e, i, n, r;
            if (n = t.type, e = t.request, r = t.url, !I(r)) return i = "socket" === n ? new d(e) : new p(e), this.elements.push(i)
        }, t
    }(), p = function() {
        return function(t) {
            var e, i, n, r, s, o = this;
            if (this.progress = 0, null != window.ProgressEvent)
                for (t.addEventListener("progress", function(t) {
                        return t.lengthComputable ? o.progress = 100 * t.loaded / t.total : o.progress = o.progress + (100 - o.progress) / 2
                    }, !1), i = 0, n = (s = ["load", "abort", "timeout", "error"]).length; i < n; i++) e = s[i], t.addEventListener(e, function() {
                    return o.progress = 100
                }, !1);
            else r = t.onreadystatechange, t.onreadystatechange = function() {
                var e;
                return 0 === (e = t.readyState) || 4 === e ? o.progress = 100 : 3 === t.readyState && (o.progress = 50), "function" == typeof r ? r.apply(null, arguments) : void 0
            }
        }
    }(), d = function() {
        return function(t) {
            var e, i, n, r, s = this;
            for (this.progress = 0, i = 0, n = (r = ["error", "open"]).length; i < n; i++) e = r[i], t.addEventListener(e, function() {
                return s.progress = 100
            }, !1)
        }
    }(), n = function() {
        return function(t) {
            var e, i, n, s;
            for (null == t && (t = {}), this.elements = [], null == t.selectors && (t.selectors = []), i = 0, n = (s = t.selectors).length; i < n; i++) e = s[i], this.elements.push(new r(e))
        }
    }(), r = function() {
        function t(t) {
            this.selector = t, this.progress = 0, this.check()
        }
        return t.prototype.check = function() {
            var t = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                return t.check()
            }, A.elements.checkInterval)
        }, t.prototype.done = function() {
            return this.progress = 100
        }, t
    }(), i = function() {
        function t() {
            var t, e, i = this;
            this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function() {
                return null != i.states[document.readyState] && (i.progress = i.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0
            }
        }
        return t.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        }, t
    }(), s = function() {
        return function() {
            var t, e, i, n, r, s = this;
            this.progress = 0, t = 0, r = [], n = 0, i = P(), e = setInterval(function() {
                var o;
                return o = P() - i - 50, i = P(), r.push(o), r.length > A.eventLag.sampleCount && r.shift(), t = g(r), ++n >= A.eventLag.minSamples && t < A.eventLag.lagThreshold ? (s.progress = 100, clearInterval(e)) : s.progress = 3 / (t + 3) * 100
            }, 50)
        }
    }(), f = function() {
        function t(t) {
            this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = A.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = O(this.source, "progress"))
        }
        return t.prototype.tick = function(t, e) {
            var i;
            return null == e && (e = O(this.source, "progress")), e >= 100 && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / A.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), i = 1 - Math.pow(this.progress / 100, A.easeFactor), this.progress += i * this.rate * t, this.progress = Math.min(this.lastProgress + A.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, t
    }(), N = null, L = null, v = null, R = null, m = null, y = null, u.running = !1, C = function() {
        if (A.restartOnPushState) return u.restart()
    }, null != window.history.pushState && (X = window.history.pushState, window.history.pushState = function() {
        return C(), X.apply(window.history, arguments)
    }), null != window.history.replaceState && (Y = window.history.replaceState, window.history.replaceState = function() {
        return C(), Y.apply(window.history, arguments)
    }), h = {
        ajax: t,
        elements: n,
        document: i,
        eventLag: s
    }, (E = function() {
        var t, i, n, r, s, o, a, l;
        for (u.sources = N = [], i = 0, r = (o = ["ajax", "elements", "document", "eventLag"]).length; i < r; i++) !1 !== A[t = o[i]] && N.push(new h[t](A[t]));
        for (n = 0, s = (l = null != (a = A.extraSources) ? a : []).length; n < s; n++) z = l[n], N.push(new z(A));
        return u.bar = v = new e, L = [], R = new f
    })(), u.stop = function() {
        return u.trigger("stop"), u.running = !1, v.destroy(), y = !0, null != m && ("function" == typeof _ && _(m), m = null), E()
    }, u.restart = function() {
        return u.trigger("restart"), u.stop(), u.start()
    }, u.go = function() {
        var t;
        return u.running = !0, v.render(), t = P(), y = !1, m = M(function(e, i) {
            var n, r, s, o, a, l, c, h, d, p, m, g, _, b, x;
            for (100 - v.progress, r = p = 0, s = !0, l = m = 0, _ = N.length; m < _; l = ++m)
                for (z = N[l], d = null != L[l] ? L[l] : L[l] = [], c = g = 0, b = (a = null != (x = z.elements) ? x : [z]).length; g < b; c = ++g) o = a[c], s &= (h = null != d[c] ? d[c] : d[c] = new f(o)).done, h.done || (r++, p += h.tick(e));
            return n = p / r, v.update(R.tick(e, n)), v.done() || s || y ? (v.update(100), u.trigger("done"), setTimeout(function() {
                return v.finish(), u.running = !1, u.trigger("hide")
            }, Math.max(A.ghostTime, Math.max(A.minTime - (P() - t), 0)))) : i()
        })
    }, u.start = function(t) {
        x(A, t), u.running = !0;
        try {
            v.render()
        } catch (t) {
            l = t
        }
        return document.querySelector(".pace") ? (u.trigger("start"), u.go()) : setTimeout(u.start, 50)
    }, "function" == typeof define && define.amd ? define(["pace"], function() {
        return u
    }) : "object" == typeof exports ? module.exports = u : A.startOnPageLoad && u.start()
}.call(this), (() => {
        const lax = (() => {
            const lax = {
                elements: []
            };
            let lastY = 0,
                currentBreakpoint = "default";
            const breakpointsSeparator = "_",
                transformFns = {
                    "data-lax-opacity": (t, e) => {
                        t.opacity = e
                    },
                    "data-lax-translate": (t, e) => {
                        t.transform += ` translate(${e}px, ${e}px)`
                    },
                    "data-lax-translate-x": (t, e) => {
                        t.transform += ` translateX(${e}px)`
                    },
                    "data-lax-translate-y": (t, e) => {
                        t.transform += ` translateY(${e}px)`
                    },
                    "data-lax-scale": (t, e) => {
                        t.transform += ` scale(${e})`
                    },
                    "data-lax-scale-x": (t, e) => {
                        t.transform += ` scaleX(${e})`
                    },
                    "data-lax-scale-y": (t, e) => {
                        t.transform += ` scaleY(${e})`
                    },
                    "data-lax-skew": (t, e) => {
                        t.transform += ` skew(${e}deg, ${e}deg)`
                    },
                    "data-lax-skew-x": (t, e) => {
                        t.transform += ` skewX(${e}deg)`
                    },
                    "data-lax-skew-y": (t, e) => {
                        t.transform += ` skewY(${e}deg)`
                    },
                    "data-lax-rotate": (t, e) => {
                        t.transform += ` rotate(${e}deg)`
                    },
                    "data-lax-rotate-x": (t, e) => {
                        t.transform += ` rotateX(${e}deg)`
                    },
                    "data-lax-rotate-y": (t, e) => {
                        t.transform += ` rotateY(${e}deg)`
                    },
                    "data-lax-brightness": (t, e) => {
                        t.filter += ` brightness(${e}%)`
                    },
                    "data-lax-contrast": (t, e) => {
                        t.filter += ` contrast(${e}%)`
                    },
                    "data-lax-hue-rotate": (t, e) => {
                        t.filter += ` hue-rotate(${e}deg)`
                    },
                    "data-lax-blur": (t, e) => {
                        t.filter += ` blur(${e}px)`
                    },
                    "data-lax-invert": (t, e) => {
                        t.filter += `  invert(${e}%)`
                    },
                    "data-lax-saturate": (t, e) => {
                        t.filter += `  saturate(${e}%)`
                    },
                    "data-lax-grayscale": (t, e) => {
                        t.filter += `  grayscale(${e}%)`
                    },
                    "data-lax-bg-pos": (t, e) => {
                        t.backgroundPosition = `${e}px ${e}px`
                    },
                    "data-lax-bg-pos-x": (t, e) => {
                        t.backgroundPositionX = `${e}px`
                    },
                    "data-lax-bg-pos-y": (t, e) => {
                        t.backgroundPositionY = `${e}px`
                    }
                };
            let crazy = "";
            for (let t = 0; t < 20; t++) crazy += " " + 5 * t + " " + 47 * t % 360 + ", ";

            function intrp(t, e) {
                let i = 0;
                for (; t[i][0] <= e && void 0 !== t[i + 1];) i += 1;
                const n = t[i][0],
                    r = void 0 === t[i - 1] ? n : t[i - 1][0],
                    s = t[i][1],
                    o = void 0 === t[i - 1] ? s : t[i - 1][1];
                return Math.min(Math.max((e - r) / (n - r), 0), 1) * (s - o) + o
            }

            function fnOrVal(s) {
                return "(" === s[0] ? eval(s) : parseFloat(s)
            }
            return lax.presets = {
                linger: t => ({
                    "data-lax-translate-y": "(vh*0.7) 0, 0 200, -500 0"
                }),
                lazy: (t = 100) => ({
                    "data-lax-translate-y": `(vh) 0, (-elh) ${t}`
                }),
                eager: (t = 100) => ({
                    "data-lax-translate-y": `(vh) 0, (-elh) -${t}`
                }),
                slalom: (t = 50) => ({
                    "data-lax-translate-x": `vh ${t}, (vh*0.8) ${-t}, (vh*0.6) ${t}, (vh*0.4) ${-t}, (vh*0.2) ${t}, (vh*0) ${-t}, (-elh) ${t}`
                }),
                crazy: t => ({
                    "data-lax-hue-rotate": `${crazy} | loop=20`
                }),
                spin: (t = 360) => ({
                    "data-lax-rotate": `(vh) 0, (-elh) ${t}`
                }),
                spinRev: (t = 360) => ({
                    "data-lax-rotate": `(vh) 0, (-elh) ${-t}`
                }),
                spinIn: (t = 360) => ({
                    "data-lax-rotate": `vh ${t}, (vh*0.5) 0`
                }),
                spinOut: (t = 360) => ({
                    "data-lax-rotate": `(vh*0.5) 0, -elh ${t}`
                }),
                blurInOut: (t = 40) => ({
                    "data-lax-blur": `(vh) ${t}, (vh*0.8) 0, (vh*0.2) 0, 0 ${t}`
                }),
                blurIn: (t = 40) => ({
                    "data-lax-blur": `(vh) ${t}, (vh*0.7) 0`
                }),
                blurOut: (t = 40) => ({
                    "data-lax-blur": `(vh*0.3) 0, 0 ${t}`
                }),
                fadeInOut: () => ({
                    "data-lax-opacity": "(vh) 0, (vh*0.8) 1, (vh*0.2) 1, 0 0"
                }),
                fadeIn: () => ({
                    "data-lax-opacity": "(vh) 0, (vh*0.7) 1"
                }),
                fadeOut: () => ({
                    "data-lax-opacity": "(vh*0.3) 1, 0 0"
                }),
                driftLeft: (t = 100) => ({
                    "data-lax-translate-x": `vh ${t}, -elh ${-t}`
                }),
                driftRight: (t = 100) => ({
                    "data-lax-translate-x": `vh ${-t}, -elh ${t}`
                }),
                leftToRight: (t = 1) => ({
                    "data-lax-translate-x": `vh 0, -elh (vw*${t})`
                }),
                rightToLeft: (t = 1) => ({
                    "data-lax-translate-x": `vh 0, -elh (vw*${-t})`
                }),
                zoomInOut: (t = .2) => ({
                    "data-lax-scale": `(vh) ${t}, (vh*0.8) 1, (vh*0.2) 1, -elh ${t}`
                }),
                zoomIn: (t = .2) => ({
                    "data-lax-scale": `(vh) ${t}, (vh*0.7) 1`
                }),
                zoomOut: (t = .2) => ({
                    "data-lax-scale": `(vh*0.3) 1, -elh ${t}`
                }),
                speedy: (t = 30) => ({
                    "data-lax-skew-x": `(vh) ${t}, -elh ${-t}`
                }),
                swing: (t = 30) => ({
                    "data-lax-skew-y": `(vh) ${t}, -elh ${-t}`
                })
            }, lax.addPreset = ((t, e) => {
                lax.presets[t] = e
            }), lax.setup = ((t = {}) => {
                lax.breakpoints = t.breakpoints || {}, lax.selector = t.selector || ".lax", lax.populateElements()
            }), lax.removeElement = (t => {
                const e = lax.elements.findIndex(e => e.el = t);
                e > -1 && lax.elements.splice(e, 1)
            }), lax.createLaxObject = (t => {
                return {
                    el: t,
                    originalStyle: {
                        transform: t.style.transform,
                        filter: t.style.filter
                    },
                    transforms: {}
                }
            }), lax.calcTransforms = (t => {
                const {
                    el: e
                } = t, i = [];
                for (let t = 0; t < e.attributes.length; t++) {
                    const n = e.attributes[t];
                    n.name.indexOf("data-lax-preset") > -1 && i.push(n)
                }
                for (let t = 0; t < i.length; t++) {
                    const n = i[t],
                        r = n.name.split(breakpointsSeparator),
                        s = r[1] ? `${breakpointsSeparator}${r[1]}` : "";
                    n.value.split(" ").forEach(t => {
                        const i = t.split("-"),
                            n = lax.presets[i[0]];
                        if (n) {
                            const t = n(i[1]);
                            for (let i in t) e.setAttribute(`${i}${s}`, t[i])
                        } else console.log(`lax error: preset ${i[0]} is not defined`)
                    });
                    const o = e.getAttribute("data-lax-anchor");
                    o && "" !== o || e.setAttribute("data-lax-anchor", "self"), e.attributes.removeNamedItem(n.name)
                }
                if (!(e.attributes["data-lax-use-gpu"] && "false" === e.attributes["data-lax-use-gpu"].value) && (e.style["backface-visibility"] = "hidden", e.style["-webkit-backface-visibility"] = "hidden"), e.attributes["data-lax-use-gpu"] && e.attributes.removeNamedItem("data-lax-use-gpu"), t.optimise = !1, e.attributes["data-lax-optimize"] && "true" === e.attributes["data-lax-optimize"].value) {
                    t.optimise = !0;
                    const i = e.getBoundingClientRect();
                    e.setAttribute("data-lax-opacity", `${-i.height-1} 0, ${-i.height} 1, ${window.innerHeight} 1, ${window.innerHeight+1} 0`), e.attributes.removeNamedItem("data-lax-optimize")
                }
                for (let i = 0; i < e.attributes.length; i++) {
                    const n = e.attributes[i];
                    if (n.name.indexOf("data-lax") < 0) continue;
                    const r = n.name.split(breakpointsSeparator),
                        s = r[0].split("-"),
                        o = r[1] || "default";
                    if ("lax" === s[1])
                        if ("data-lax-anchor" === n.name) {
                            t["data-lax-anchor"] = "self" === n.value ? e : document.querySelector(n.value);
                            const i = t["data-lax-anchor"].getBoundingClientRect();
                            t.anchorTop = Math.floor(i.top) + window.scrollY
                        } else {
                            const i = n.value.replace(/vw/g, window.innerWidth).replace(/vh/g, window.innerHeight).replace(/elh/g, e.clientHeight).replace(/elw/g, e.clientWidth).replace(/\s+/g, " "),
                                [s, a] = i.split("|"),
                                l = {};
                            a && a.split(" ").forEach(t => {
                                const [e, i] = t.split("=");
                                l[e] = e && fnOrVal(i)
                            });
                            const u = r[0],
                                c = s.split(",").map(t => t.trim().split(" ").map(fnOrVal)).sort((t, e) => t[0] - e[0]);
                            t.transforms[u] || (t.transforms[u] = {}), t.transforms[u][o] = {
                                valueMap: c,
                                options: l
                            }
                        }
                }
                const n = e.attributes["data-lax-sprite-data"] && e.attributes["data-lax-sprite-data"].value;
                if (n) {
                    t.spriteData = n.split(",").map(t => parseInt(t)), e.style.height = t.spriteData[1] + "px", e.style.width = t.spriteData[0] + "px";
                    const i = e.attributes["data-lax-sprite-image"] && e.attributes["data-lax-sprite-image"].value;
                    i && (e.style.backgroundImage = `url(${i})`)
                }
                return t
            }), lax.addElement = (t => {
                const e = lax.calcTransforms(lax.createLaxObject(t));
                lax.elements.push(e), lax.updateElement(e)
            }), lax.populateElements = (() => {
                lax.elements = [], document.querySelectorAll(lax.selector).forEach(lax.addElement), currentBreakpoint = lax.getCurrentBreakPoint()
            }), lax.updateElements = (() => {
                lax.elements.forEach(t => {
                    lax.calcTransforms(t), lax.updateElement(t)
                }), currentBreakpoint = lax.getCurrentBreakPoint()
            }), lax.getCurrentBreakPoint = (() => {
                let t = "default";
                const e = window.innerWidth;
                for (let i in lax.breakpoints) {
                    if (!(parseFloat(lax.breakpoints[i]) <= e)) break;
                    t = i
                }
                return t
            }), lax.updateElement = (t => {
                const {
                    originalStyle: e,
                    anchorTop: i,
                    transforms: n,
                    spriteData: r,
                    el: s
                } = t;
                let o = i ? i - lastY : lastY;
                const a = {
                    transform: e.transform,
                    filter: e.filter
                };
                for (let t in n) {
                    const e = n[t][currentBreakpoint] || n[t].default;
                    if (!e) continue;
                    let i = o;
                    e.options.offset && (i += e.options.offset), e.options.speed && (i *= e.options.speed), e.options.loop && (i %= e.options.loop);
                    const r = transformFns[t],
                        s = intrp(e.valueMap, i);
                    r && r(a, s)
                }
                if (r) {
                    const [t, e, i, n, s] = r, o = Math.floor(lastY / s) % i, l = o % n, u = Math.floor(o / n);
                    a.backgroundPosition = `-${l*t}px -${u*e}px`
                }
                if (0 === a.opacity) s.style.opacity = 0;
                else
                    for (let t in a) s.style[t] = a[t]
            }), lax.update = (t => {
                lastY !== t && (lastY = t, lax.elements.forEach(lax.updateElement))
            }), lax
        })();
        "undefined" != typeof module && void 0 !== module.exports ? module.exports = lax : window.lax = lax
    })(),
    function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AOS = e() : t.AOS = e()
    }(this, function() {
        return function(t) {
            function e(n) {
                if (i[n]) return i[n].exports;
                var r = i[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
            }
            var i = {};
            return e.m = t, e.c = i, e.p = "dist/", e(0)
        }([function(t, e, i) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var r = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                    }
                    return t
                },
                s = (n(i(1)), i(6)),
                o = n(s),
                a = n(i(7)),
                l = n(i(8)),
                u = n(i(9)),
                c = n(i(10)),
                h = n(i(11)),
                f = n(i(14)),
                d = [],
                p = !1,
                m = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                },
                g = function() {
                    if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (p = !0), p) return d = (0, h.default)(d, m), (0, c.default)(d, m.once), d
                },
                v = function() {
                    d = (0, f.default)(), g()
                };
            t.exports = {
                init: function(t) {
                    m = r(m, t), d = (0, f.default)();
                    var e = document.all && !window.atob;
                    return function(t) {
                        return !0 === t || "mobile" === t && u.default.mobile() || "phone" === t && u.default.phone() || "tablet" === t && u.default.tablet() || "function" == typeof t && !0 === t()
                    }(m.disable) || e ? void d.forEach(function(t, e) {
                        t.node.removeAttribute("data-aos"), t.node.removeAttribute("data-aos-easing"), t.node.removeAttribute("data-aos-duration"), t.node.removeAttribute("data-aos-delay")
                    }) : (m.disableMutationObserver || l.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), m.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", m.easing), document.querySelector("body").setAttribute("data-aos-duration", m.duration), document.querySelector("body").setAttribute("data-aos-delay", m.delay), "DOMContentLoaded" === m.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? g(!0) : "load" === m.startEvent ? window.addEventListener(m.startEvent, function() {
                        g(!0)
                    }) : document.addEventListener(m.startEvent, function() {
                        g(!0)
                    }), window.addEventListener("resize", (0, a.default)(g, m.debounceDelay, !0)), window.addEventListener("orientationchange", (0, a.default)(g, m.debounceDelay, !0)), window.addEventListener("scroll", (0, o.default)(function() {
                        (0, c.default)(d, m.once)
                    }, m.throttleDelay)), m.disableMutationObserver || l.default.ready("[data-aos]", v), d)
                },
                refresh: g,
                refreshHard: v
            }
        }, function(t, e) {}, , , , , function(t, e) {
            (function(e) {
                "use strict";

                function i(t, e, i) {
                    function r(e) {
                        var i = h,
                            n = f;
                        return h = f = void 0, v = e, p = t.apply(n, i)
                    }

                    function o(t) {
                        var i = t - g;
                        return void 0 === g || i >= e || i < 0 || w && t - v >= d
                    }

                    function l() {
                        var t = x();
                        return o(t) ? u(t) : void(m = setTimeout(l, function(t) {
                            var i = e - (t - g);
                            return w ? b(i, d - (t - v)) : i
                        }(t)))
                    }

                    function u(t) {
                        return m = void 0, T && h ? r(t) : (h = f = void 0, p)
                    }

                    function c() {
                        var t = x(),
                            i = o(t);
                        if (h = arguments, f = this, g = t, i) {
                            if (void 0 === m) return function(t) {
                                return v = t, m = setTimeout(l, e), y ? r(t) : p
                            }(g);
                            if (w) return m = setTimeout(l, e), r(g)
                        }
                        return void 0 === m && (m = setTimeout(l, e)), p
                    }
                    var h, f, d, p, m, g, v = 0,
                        y = !1,
                        w = !1,
                        T = !0;
                    if ("function" != typeof t) throw new TypeError(a);
                    return e = s(e) || 0, n(i) && (y = !!i.leading, d = (w = "maxWait" in i) ? _(s(i.maxWait) || 0, e) : d, T = "trailing" in i ? !!i.trailing : T), c.cancel = function() {
                        void 0 !== m && clearTimeout(m), v = 0, h = g = f = m = void 0
                    }, c.flush = function() {
                        return void 0 === m ? p : u(x())
                    }, c
                }

                function n(t) {
                    var e = void 0 === t ? "undefined" : o(t);
                    return !!t && ("object" == e || "function" == e)
                }

                function r(t) {
                    return "symbol" == (void 0 === t ? "undefined" : o(t)) || function(t) {
                        return !!t && "object" == (void 0 === t ? "undefined" : o(t))
                    }(t) && y.call(t) == u
                }

                function s(t) {
                    if ("number" == typeof t) return t;
                    if (r(t)) return l;
                    if (n(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = n(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(c, "");
                    var i = f.test(t);
                    return i || d.test(t) ? p(t.slice(2), i ? 2 : 8) : h.test(t) ? l : +t
                }
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    a = "Expected a function",
                    l = NaN,
                    u = "[object Symbol]",
                    c = /^\s+|\s+$/g,
                    h = /^[-+]0x[0-9a-f]+$/i,
                    f = /^0b[01]+$/i,
                    d = /^0o[0-7]+$/i,
                    p = parseInt,
                    m = "object" == (void 0 === e ? "undefined" : o(e)) && e && e.Object === Object && e,
                    g = "object" == ("undefined" == typeof self ? "undefined" : o(self)) && self && self.Object === Object && self,
                    v = m || g || Function("return this")(),
                    y = Object.prototype.toString,
                    _ = Math.max,
                    b = Math.min,
                    x = function() {
                        return v.Date.now()
                    };
                t.exports = function(t, e, r) {
                    var s = !0,
                        o = !0;
                    if ("function" != typeof t) throw new TypeError(a);
                    return n(r) && (s = "leading" in r ? !!r.leading : s, o = "trailing" in r ? !!r.trailing : o), i(t, e, {
                        leading: s,
                        maxWait: e,
                        trailing: o
                    })
                }
            }).call(e, function() {
                return this
            }())
        }, function(t, e) {
            (function(e) {
                "use strict";

                function i(t) {
                    var e = void 0 === t ? "undefined" : s(t);
                    return !!t && ("object" == e || "function" == e)
                }

                function n(t) {
                    return "symbol" == (void 0 === t ? "undefined" : s(t)) || function(t) {
                        return !!t && "object" == (void 0 === t ? "undefined" : s(t))
                    }(t) && v.call(t) == l
                }

                function r(t) {
                    if ("number" == typeof t) return t;
                    if (n(t)) return a;
                    if (i(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = i(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(u, "");
                    var r = h.test(t);
                    return r || f.test(t) ? d(t.slice(2), r ? 2 : 8) : c.test(t) ? a : +t
                }
                var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    o = "Expected a function",
                    a = NaN,
                    l = "[object Symbol]",
                    u = /^\s+|\s+$/g,
                    c = /^[-+]0x[0-9a-f]+$/i,
                    h = /^0b[01]+$/i,
                    f = /^0o[0-7]+$/i,
                    d = parseInt,
                    p = "object" == (void 0 === e ? "undefined" : s(e)) && e && e.Object === Object && e,
                    m = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
                    g = p || m || Function("return this")(),
                    v = Object.prototype.toString,
                    y = Math.max,
                    _ = Math.min,
                    b = function() {
                        return g.Date.now()
                    };
                t.exports = function(t, e, n) {
                    function s(e) {
                        var i = h,
                            n = f;
                        return h = f = void 0, v = e, p = t.apply(n, i)
                    }

                    function a(t) {
                        var i = t - g;
                        return void 0 === g || i >= e || i < 0 || w && t - v >= d
                    }

                    function l() {
                        var t = b();
                        return a(t) ? u(t) : void(m = setTimeout(l, function(t) {
                            var i = e - (t - g);
                            return w ? _(i, d - (t - v)) : i
                        }(t)))
                    }

                    function u(t) {
                        return m = void 0, T && h ? s(t) : (h = f = void 0, p)
                    }

                    function c() {
                        var t = b(),
                            i = a(t);
                        if (h = arguments, f = this, g = t, i) {
                            if (void 0 === m) return function(t) {
                                return v = t, m = setTimeout(l, e), x ? s(t) : p
                            }(g);
                            if (w) return m = setTimeout(l, e), s(g)
                        }
                        return void 0 === m && (m = setTimeout(l, e)), p
                    }
                    var h, f, d, p, m, g, v = 0,
                        x = !1,
                        w = !1,
                        T = !0;
                    if ("function" != typeof t) throw new TypeError(o);
                    return e = r(e) || 0, i(n) && (x = !!n.leading, d = (w = "maxWait" in n) ? y(r(n.maxWait) || 0, e) : d, T = "trailing" in n ? !!n.trailing : T), c.cancel = function() {
                        void 0 !== m && clearTimeout(m), v = 0, h = g = f = m = void 0
                    }, c.flush = function() {
                        return void 0 === m ? p : u(b())
                    }, c
                }
            }).call(e, function() {
                return this
            }())
        }, function(t, e) {
            "use strict";

            function i() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }

            function n(t) {
                t && t.forEach(function(t) {
                    var e = Array.prototype.slice.call(t.addedNodes),
                        i = Array.prototype.slice.call(t.removedNodes);
                    if (function t(e) {
                            var i = void 0,
                                n = void 0;
                            for (i = 0; i < e.length; i += 1) {
                                if ((n = e[i]).dataset && n.dataset.aos) return !0;
                                if (n.children && t(n.children)) return !0
                            }
                            return !1
                        }(e.concat(i))) return r()
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {};
            e.default = {
                isSupported: function() {
                    return !!i()
                },
                ready: function(t, e) {
                    var s = window.document,
                        o = new(i())(n);
                    r = e, o.observe(s.documentElement, {
                        childList: !0,
                        subtree: !0,
                        removedNodes: !0
                    })
                }
            }
        }, function(t, e) {
            "use strict";

            function i() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                l = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return n(t, [{
                        key: "phone",
                        value: function() {
                            var t = i();
                            return !(!r.test(t) && !s.test(t.substr(0, 4)))
                        }
                    }, {
                        key: "mobile",
                        value: function() {
                            var t = i();
                            return !(!o.test(t) && !a.test(t.substr(0, 4)))
                        }
                    }, {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone()
                        }
                    }]), t
                }();
            e.default = new l
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function(t, e) {
                var i = window.pageYOffset,
                    n = window.innerHeight;
                t.forEach(function(t, r) {
                    ! function(t, e, i) {
                        var n = t.node.getAttribute("data-aos-once");
                        e > t.position ? t.node.classList.add("aos-animate") : void 0 !== n && ("false" === n || !i && "true" !== n) && t.node.classList.remove("aos-animate")
                    }(t, n + i, e)
                })
            }
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(12));
            e.default = function(t, e) {
                return t.forEach(function(t, i) {
                    t.node.classList.add("aos-init"), t.position = (0, n.default)(t.node, e.offset)
                }), t
            }
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(13));
            e.default = function(t, e) {
                var i = 0,
                    r = 0,
                    s = window.innerHeight,
                    o = {
                        offset: t.getAttribute("data-aos-offset"),
                        anchor: t.getAttribute("data-aos-anchor"),
                        anchorPlacement: t.getAttribute("data-aos-anchor-placement")
                    };
                switch (o.offset && !isNaN(o.offset) && (r = parseInt(o.offset)), o.anchor && document.querySelectorAll(o.anchor) && (t = document.querySelectorAll(o.anchor)[0]), i = (0, n.default)(t).top, o.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        i += t.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        i += t.offsetHeight;
                        break;
                    case "top-center":
                        i += s / 2;
                        break;
                    case "bottom-center":
                        i += s / 2 + t.offsetHeight;
                        break;
                    case "center-center":
                        i += s / 2 + t.offsetHeight / 2;
                        break;
                    case "top-top":
                        i += s;
                        break;
                    case "bottom-top":
                        i += t.offsetHeight + s;
                        break;
                    case "center-top":
                        i += t.offsetHeight / 2 + s
                }
                return o.anchorPlacement || o.offset || isNaN(e) || (r = e), i + r
            }
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function(t) {
                for (var e = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0), i += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0), t = t.offsetParent;
                return {
                    top: i,
                    left: e
                }
            }
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function(t) {
                return t = t || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(t, function(t) {
                    return {
                        node: t
                    }
                })
            }
        }])
    }),
    function(t, e) {
        "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.LazyLoad = e()
    }(this, function() {
        "use strict";
        var t = "undefined" != typeof window,
            e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
            i = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            r = {
                elements_selector: "img",
                container: e || t ? document : null,
                threshold: 300,
                thresholds: null,
                data_src: "src",
                data_srcset: "srcset",
                data_sizes: "sizes",
                data_bg: "bg",
                class_loading: "loading",
                class_loaded: "loaded",
                class_error: "error",
                load_delay: 0,
                auto_unobserve: !0,
                callback_enter: null,
                callback_exit: null,
                callback_reveal: null,
                callback_loaded: null,
                callback_error: null,
                callback_finish: null,
                use_native: !1
            },
            s = function(t, e) {
                var i, n = new t(e);
                try {
                    i = new CustomEvent("LazyLoad::Initialized", {
                        detail: {
                            instance: n
                        }
                    })
                } catch (t) {
                    (i = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
                        instance: n
                    })
                }
                window.dispatchEvent(i)
            };
        var o = function(t, e) {
                return t.getAttribute("data-" + e)
            },
            a = function(t, e, i) {
                var n = "data-" + e;
                null !== i ? t.setAttribute(n, i) : t.removeAttribute(n)
            },
            l = function(t) {
                return "true" === o(t, "was-processed")
            },
            u = function(t, e) {
                return a(t, "ll-timeout", e)
            },
            c = function(t) {
                return o(t, "ll-timeout")
            },
            h = function(t, e, i, n) {
                t && (void 0 === n ? void 0 === i ? t(e) : t(e, i) : t(e, i, n))
            },
            f = function(t, e) {
                t._loadingCount += e, 0 === t._elements.length && 0 === t._loadingCount && h(t._settings.callback_finish, t)
            },
            d = function(t) {
                for (var e, i = [], n = 0; e = t.children[n]; n += 1) "SOURCE" === e.tagName && i.push(e);
                return i
            },
            p = function(t, e, i) {
                i && t.setAttribute(e, i)
            },
            m = function(t, e) {
                p(t, "sizes", o(t, e.data_sizes)), p(t, "srcset", o(t, e.data_srcset)), p(t, "src", o(t, e.data_src))
            },
            g = {
                IMG: function(t, e) {
                    var i = t.parentNode;
                    i && "PICTURE" === i.tagName && d(i).forEach(function(t) {
                        m(t, e)
                    });
                    m(t, e)
                },
                IFRAME: function(t, e) {
                    p(t, "src", o(t, e.data_src))
                },
                VIDEO: function(t, e) {
                    d(t).forEach(function(t) {
                        p(t, "src", o(t, e.data_src))
                    }), p(t, "src", o(t, e.data_src)), t.load()
                }
            },
            v = function(t, e) {
                var i, n, r = e._settings,
                    s = t.tagName,
                    a = g[s];
                if (a) return a(t, r), f(e, 1), void(e._elements = (i = e._elements, n = t, i.filter(function(t) {
                    return t !== n
                })));
                ! function(t, e) {
                    var i = o(t, e.data_src),
                        n = o(t, e.data_bg);
                    i && (t.style.backgroundImage = 'url("'.concat(i, '")')), n && (t.style.backgroundImage = n)
                }(t, r)
            },
            y = function(t, e) {
                n ? t.classList.add(e) : t.className += (t.className ? " " : "") + e
            },
            _ = function(t, e) {
                n ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
            },
            b = function(t, e, i) {
                t.addEventListener(e, i)
            },
            x = function(t, e, i) {
                t.removeEventListener(e, i)
            },
            w = function(t, e, i) {
                x(t, "load", e), x(t, "loadeddata", e), x(t, "error", i)
            },
            T = function(t, e, i) {
                var n = i._settings,
                    r = e ? n.class_loaded : n.class_error,
                    s = e ? n.callback_loaded : n.callback_error,
                    o = t.target;
                _(o, n.class_loading), y(o, r), h(s, o, i), f(i, -1)
            },
            S = function(t, e) {
                var i = function i(r) {
                        T(r, !0, e), w(t, i, n)
                    },
                    n = function n(r) {
                        T(r, !1, e), w(t, i, n)
                    };
                ! function(t, e, i) {
                    b(t, "load", e), b(t, "loadeddata", e), b(t, "error", i)
                }(t, i, n)
            },
            C = ["IMG", "IFRAME", "VIDEO"],
            k = function(t, e) {
                var i = e._observer;
                A(t, e), i && e._settings.auto_unobserve && i.unobserve(t)
            },
            E = function(t) {
                var e = c(t);
                e && (clearTimeout(e), u(t, null))
            },
            P = function(t, e) {
                var i = e._settings.load_delay,
                    n = c(t);
                n || (n = setTimeout(function() {
                    k(t, e), E(t)
                }, i), u(t, n))
            },
            A = function(t, e, i) {
                var n = e._settings;
                !i && l(t) || (C.indexOf(t.tagName) > -1 && (S(t, e), y(t, n.class_loading)), v(t, e), function(t) {
                    a(t, "was-processed", "true")
                }(t), h(n.callback_reveal, t, e), h(n.callback_set, t, e))
            },
            D = function(t) {
                return !!i && (t._observer = new IntersectionObserver(function(e) {
                    e.forEach(function(e) {
                        return function(t) {
                            return t.isIntersecting || t.intersectionRatio > 0
                        }(e) ? function(t, e, i) {
                            var n = i._settings;
                            h(n.callback_enter, t, e, i), n.load_delay ? P(t, i) : k(t, i)
                        }(e.target, e, t) : function(t, e, i) {
                            var n = i._settings;
                            h(n.callback_exit, t, e, i), n.load_delay && E(t)
                        }(e.target, e, t)
                    })
                }, {
                    root: (e = t._settings).container === document ? null : e.container,
                    rootMargin: e.thresholds || e.threshold + "px"
                }), !0);
                var e
            },
            O = ["IMG", "IFRAME"],
            M = function(t, e) {
                return function(t) {
                    return t.filter(function(t) {
                        return !l(t)
                    })
                }((i = t || function(t) {
                    return t.container.querySelectorAll(t.elements_selector)
                }(e), Array.prototype.slice.call(i)));
                var i
            },
            L = function(t) {
                var e = t._settings;
                _toConsumableArray(e.container.querySelectorAll("." + e.class_error)).forEach(function(t) {
                    _(t, e.class_error),
                        function(t) {
                            a(t, "was-processed", null)
                        }(t)
                }), t.update()
            },
            I = function(e, i) {
                var n;
                this._settings = function(t) {
                    return _extends({}, r, t)
                }(e), this._loadingCount = 0, D(this), this.update(i), n = this, t && window.addEventListener("online", function(t) {
                    L(n)
                })
            };
        return I.prototype = {
            update: function(t) {
                var i, n = this,
                    r = this._settings;
                (this._elements = M(t, r), !e && this._observer) ? (function(t) {
                    return t.use_native && "loading" in HTMLImageElement.prototype
                }(r) && ((i = this)._elements.forEach(function(t) {
                    -1 !== O.indexOf(t.tagName) && (t.setAttribute("loading", "lazy"), A(t, i))
                }), this._elements = M(t, r)), this._elements.forEach(function(t) {
                    n._observer.observe(t)
                })) : this.loadAll()
            },
            destroy: function() {
                var t = this;
                this._observer && (this._elements.forEach(function(e) {
                    t._observer.unobserve(e)
                }), this._observer = null), this._elements = null, this._settings = null
            },
            load: function(t, e) {
                A(t, this, e)
            },
            loadAll: function() {
                var t = this;
                this._elements.forEach(function(e) {
                    k(e, t)
                })
            }
        }, t && function(t, e) {
            if (e)
                if (e.length)
                    for (var i, n = 0; i = e[n]; n += 1) s(t, i);
                else s(t, e)
        }(I, window.lazyLoadOptions), I
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function(t, e) {
        "use strict";
        var i = Array.prototype.slice,
            n = t.console,
            r = void 0 === n ? function() {} : function(t) {
                n.error(t)
            };

        function s(n, s, a) {
            (a = a || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function(t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[n] = function(t) {
                var e;
                return "string" == typeof t ? function(t, e, i) {
                    var s, o = "$()." + n + '("' + e + '")';
                    return t.each(function(t, l) {
                        var u = a.data(l, n);
                        if (u) {
                            var c = u[e];
                            if (c && "_" != e.charAt(0)) {
                                var h = c.apply(u, i);
                                s = void 0 === s ? h : s
                            } else r(o + " is not a valid method")
                        } else r(n + " not initialized. Cannot call methods, i.e. " + o)
                    }), void 0 !== s ? s : t
                }(this, t, i.call(arguments, 1)) : (e = t, this.each(function(t, i) {
                    var r = a.data(i, n);
                    r ? (r.option(e), r._init()) : (r = new s(i, e), a.data(i, n, r))
                }), this)
            }, o(a))
        }

        function o(t) {
            !t || t && t.bridget || (t.bridget = s)
        }
        return o(e || t.jQuery), s
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                i = i.slice(0), e = e || [];
                for (var n = this._onceEvents && this._onceEvents[t], r = 0; r < i.length; r++) {
                    var s = i[r];
                    n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e)
                }
                return this
            }
        }, e.allOff = function() {
            delete this._events, delete this._onceEvents
        }, t
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }
        var e = "undefined" == typeof console ? function() {} : function(t) {
                console.error(t)
            },
            i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            n = i.length;

        function r(t) {
            var i = getComputedStyle(t);
            return i || e("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), i
        }
        var s, o = !1;

        function a(e) {
            if (function() {
                    if (!o) {
                        o = !0;
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                        var i = document.body || document.documentElement;
                        i.appendChild(e);
                        var n = r(e);
                        s = 200 == Math.round(t(n.width)), a.isBoxSizeOuter = s, i.removeChild(e)
                    }
                }(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var l = r(e);
                if ("none" == l.display) return function() {
                    for (var t = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, e = 0; e < n; e++) t[i[e]] = 0;
                    return t
                }();
                var u = {};
                u.width = e.offsetWidth, u.height = e.offsetHeight;
                for (var c = u.isBorderBox = "border-box" == l.boxSizing, h = 0; h < n; h++) {
                    var f = i[h],
                        d = l[f],
                        p = parseFloat(d);
                    u[f] = isNaN(p) ? 0 : p
                }
                var m = u.paddingLeft + u.paddingRight,
                    g = u.paddingTop + u.paddingBottom,
                    v = u.marginLeft + u.marginRight,
                    y = u.marginTop + u.marginBottom,
                    _ = u.borderLeftWidth + u.borderRightWidth,
                    b = u.borderTopWidth + u.borderBottomWidth,
                    x = c && s,
                    w = t(l.width);
                !1 !== w && (u.width = w + (x ? 0 : m + _));
                var T = t(l.height);
                return !1 !== T && (u.height = T + (x ? 0 : g + b)), u.innerWidth = u.width - (m + _), u.innerHeight = u.height - (g + b), u.outerWidth = u.width + v, u.outerHeight = u.height + y, u
            }
        }
        return a
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var t = function() {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i] + "MatchesSelector";
                if (t[n]) return n
            }
        }();
        return function(e, i) {
            return e[t](i)
        }
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function(t, e) {
        var i = {
                extend: function(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                },
                modulo: function(t, e) {
                    return (t % e + e) % e
                }
            },
            n = Array.prototype.slice;
        i.makeArray = function(t) {
            return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
        }, i.removeFrom = function(t, e) {
            var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
        }, i.getParent = function(t, i) {
            for (; t.parentNode && t != document.body;)
                if (t = t.parentNode, e(t, i)) return t
        }, i.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, i.filterFindElements = function(t, n) {
            t = i.makeArray(t);
            var r = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement)
                    if (n) {
                        e(t, n) && r.push(t);
                        for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) r.push(i[s])
                    } else r.push(t)
            }), r
        }, i.debounceMethod = function(t, e, i) {
            i = i || 100;
            var n = t.prototype[e],
                r = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[r];
                clearTimeout(t);
                var e = arguments,
                    s = this;
                this[r] = setTimeout(function() {
                    n.apply(s, e), delete s[r]
                }, i)
            }
        }, i.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }, i.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var r = t.console;
        return i.htmlInit = function(e, n) {
            i.docReady(function() {
                var s = i.toDashed(n),
                    o = "data-" + s,
                    a = document.querySelectorAll("[" + o + "]"),
                    l = document.querySelectorAll(".js-" + s),
                    u = i.makeArray(a).concat(i.makeArray(l)),
                    c = o + "-options",
                    h = t.jQuery;
                u.forEach(function(t) {
                    var i, s = t.getAttribute(o) || t.getAttribute(c);
                    try {
                        i = s && JSON.parse(s)
                    } catch (e) {
                        return void(r && r.error("Error parsing " + o + " on " + t.className + ": " + e))
                    }
                    var a = new e(t, i);
                    h && h.data(t, n, a)
                })
            })
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(t, t.getSize))
    }(window, function(t, e) {
        function i(t, e) {
            this.element = t, this.parent = e, this.create()
        }
        var n = i.prototype;
        return n.create = function() {
            this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0
        }, n.destroy = function() {
            this.unselect(), this.element.style.position = "";
            var t = this.parent.originSide;
            this.element.style[t] = ""
        }, n.getSize = function() {
            this.size = e(this.element)
        }, n.setPosition = function(t) {
            this.x = t, this.updateTarget(), this.renderPosition(t)
        }, n.updateTarget = n.setDefaultTarget = function() {
            var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
            this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
        }, n.renderPosition = function(t) {
            var e = this.parent.originSide;
            this.element.style[e] = this.parent.getPositionValue(t)
        }, n.select = function() {
            this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
        }, n.unselect = function() {
            this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
        }, n.wrapShift = function(t) {
            this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
        }, n.remove = function() {
            this.element.parentNode.removeChild(this.element)
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e())
    }(window, function() {
        "use strict";

        function t(t) {
            this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
        }
        var e = t.prototype;
        return e.addCell = function(t) {
            if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
                this.x = t.x;
                var e = this.isOriginLeft ? "marginLeft" : "marginRight";
                this.firstMargin = t.size[e]
            }
        }, e.updateTarget = function() {
            var t = this.isOriginLeft ? "marginRight" : "marginLeft",
                e = this.getLastCell(),
                i = e ? e.size[t] : 0,
                n = this.outerWidth - (this.firstMargin + i);
            this.target = this.x + this.firstMargin + n * this.parent.cellAlign
        }, e.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }, e.select = function() {
            this.cells.forEach(function(t) {
                t.select()
            })
        }, e.unselect = function() {
            this.cells.forEach(function(t) {
                t.unselect()
            })
        }, e.getCellElements = function() {
            return this.cells.map(function(t) {
                return t.element
            })
        }, t
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(t, t.fizzyUIUtils))
    }(window, function(t, e) {
        var i = {
            startAnimation: function() {
                this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
            },
            animate: function() {
                this.applyDragForce(), this.applySelectedAttraction();
                var t = this.x;
                if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                    var e = this;
                    requestAnimationFrame(function() {
                        e.animate()
                    })
                }
            },
            positionSlider: function() {
                var t = this.x;
                this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
            },
            setTranslateX: function(t, e) {
                t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
                var i = this.getPositionValue(t);
                this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")"
            },
            dispatchScrollEvent: function() {
                var t = this.slides[0];
                if (t) {
                    var e = -this.x - t.target,
                        i = e / this.slidesWidth;
                    this.dispatchEvent("scroll", null, [i, e])
                }
            },
            positionSliderAtSelected: function() {
                this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
            },
            getPositionValue: function(t) {
                return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
            },
            settle: function(t) {
                this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
            },
            shiftWrapCells: function(t) {
                var e = this.cursorPosition + t;
                this._shiftCells(this.beforeShiftCells, e, -1);
                var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
                this._shiftCells(this.afterShiftCells, i, 1)
            },
            _shiftCells: function(t, e, i) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n],
                        s = e > 0 ? i : 0;
                    r.wrapShift(s), e -= r.size.outerWidth
                }
            },
            _unshiftCells: function(t) {
                if (t && t.length)
                    for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
            },
            integratePhysics: function() {
                this.x += this.velocity, this.velocity *= this.getFrictionFactor()
            },
            applyForce: function(t) {
                this.velocity += t
            },
            getFrictionFactor: function() {
                return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
            },
            getRestingPosition: function() {
                return this.x + this.velocity / (1 - this.getFrictionFactor())
            },
            applyDragForce: function() {
                if (this.isDraggable && this.isPointerDown) {
                    var t = this.dragX - this.x - this.velocity;
                    this.applyForce(t)
                }
            },
            applySelectedAttraction: function() {
                if (!(this.isDraggable && this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                    var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                    this.applyForce(t)
                }
            }
        };
        return i
    }),
    function(t, e) {
        if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(i, n, r, s, o, a) {
            return e(t, i, n, r, s, o, a)
        });
        else if ("object" == typeof module && module.exports) module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
        else {
            var i = t.Flickity;
            t.Flickity = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype)
        }
    }(window, function(t, e, i, n, r, s, o) {
        var a = t.jQuery,
            l = t.getComputedStyle,
            u = t.console;

        function c(t, e) {
            for (t = n.makeArray(t); t.length;) e.appendChild(t.shift())
        }
        var h = 0,
            f = {};

        function d(t, e) {
            var i = n.getQueryElement(t);
            if (i) {
                if (this.element = i, this.element.flickityGUID) {
                    var r = f[this.element.flickityGUID];
                    return r.option(e), r
                }
                a && (this.$element = a(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e), this._create()
            } else u && u.error("Bad element for Flickity: " + (i || t))
        }
        d.defaults = {
            accessibility: !0,
            cellAlign: "center",
            freeScrollFriction: .075,
            friction: .28,
            namespaceJQueryEvents: !0,
            percentPosition: !0,
            resize: !0,
            selectedAttraction: .025,
            setGallerySize: !0
        }, d.createMethods = [];
        var p = d.prototype;
        n.extend(p, e.prototype), p._create = function() {
            var e = this.guid = ++h;
            for (var i in this.element.flickityGUID = e, f[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this), this.options.on) {
                var n = this.options.on[i];
                this.on(i, n)
            }
            d.createMethods.forEach(function(t) {
                this[t]()
            }, this), this.options.watchCSS ? this.watchCSS() : this.activate()
        }, p.option = function(t) {
            n.extend(this.options, t)
        }, p.activate = function() {
            this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), c(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
        }, p._createSlider = function() {
            var t = document.createElement("div");
            t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
        }, p._filterFindCellElements = function(t) {
            return n.filterFindElements(t, this.options.cellSelector)
        }, p.reloadCells = function() {
            this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
        }, p._makeCells = function(t) {
            return this._filterFindCellElements(t).map(function(t) {
                return new r(t, this)
            }, this)
        }, p.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }, p.getLastSlide = function() {
            return this.slides[this.slides.length - 1]
        }, p.positionCells = function() {
            this._sizeCells(this.cells), this._positionCells(0)
        }, p._positionCells = function(t) {
            t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
            var e = 0;
            if (t > 0) {
                var i = this.cells[t - 1];
                e = i.x + i.size.outerWidth
            }
            for (var n = this.cells.length, r = t; r < n; r++) {
                var s = this.cells[r];
                s.setPosition(e), e += s.size.outerWidth, this.maxCellHeight = Math.max(s.size.outerHeight, this.maxCellHeight)
            }
            this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
        }, p._sizeCells = function(t) {
            t.forEach(function(t) {
                t.getSize()
            })
        }, p.updateSlides = function() {
            if (this.slides = [], this.cells.length) {
                var t = new s(this);
                this.slides.push(t);
                var e = "left" == this.originSide ? "marginRight" : "marginLeft",
                    i = this._getCanCellFit();
                this.cells.forEach(function(n, r) {
                    if (t.cells.length) {
                        var o = t.outerWidth - t.firstMargin + (n.size.outerWidth - n.size[e]);
                        i.call(this, r, o) ? t.addCell(n) : (t.updateTarget(), t = new s(this), this.slides.push(t), t.addCell(n))
                    } else t.addCell(n)
                }, this), t.updateTarget(), this.updateSelectedSlide()
            }
        }, p._getCanCellFit = function() {
            var t = this.options.groupCells;
            if (!t) return function() {
                return !1
            };
            if ("number" == typeof t) {
                var e = parseInt(t, 10);
                return function(t) {
                    return t % e != 0
                }
            }
            var i = "string" == typeof t && t.match(/^(\d+)%$/),
                n = i ? parseInt(i[1], 10) / 100 : 1;
            return function(t, e) {
                return e <= (this.size.innerWidth + 1) * n
            }
        }, p._init = p.reposition = function() {
            this.positionCells(), this.positionSliderAtSelected()
        }, p.getSize = function() {
            this.size = i(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
        };
        var m = {
            center: {
                left: .5,
                right: .5
            },
            left: {
                left: 0,
                right: 1
            },
            right: {
                right: 0,
                left: 1
            }
        };
        return p.setCellAlign = function() {
            var t = m[this.options.cellAlign];
            this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
        }, p.setGallerySize = function() {
            if (this.options.setGallerySize) {
                var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                this.viewport.style.height = t + "px"
            }
        }, p._getWrapShiftCells = function() {
            if (this.options.wrapAround) {
                this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                var t = this.cursorPosition,
                    e = this.cells.length - 1;
                this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
            }
        }, p._getGapCells = function(t, e, i) {
            for (var n = []; t > 0;) {
                var r = this.cells[e];
                if (!r) break;
                n.push(r), e += i, t -= r.size.outerWidth
            }
            return n
        }, p._containSlides = function() {
            if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                var t = this.options.rightToLeft,
                    e = t ? "marginRight" : "marginLeft",
                    i = t ? "marginLeft" : "marginRight",
                    n = this.slideableWidth - this.getLastCell().size[i],
                    r = n < this.size.innerWidth,
                    s = this.cursorPosition + this.cells[0].size[e],
                    o = n - this.size.innerWidth * (1 - this.cellAlign);
                this.slides.forEach(function(t) {
                    r ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, s), t.target = Math.min(t.target, o))
                }, this)
            }
        }, p.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), a && this.$element) {
                var r = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
                if (e) {
                    var s = a.Event(e);
                    s.type = t, r = s
                }
                this.$element.trigger(r, i)
            }
        }, p.select = function(t, e, i) {
            if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)), this.slides[t])) {
                var r = this.selectedIndex;
                this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != r && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect")
            }
        }, p._wrapSelect = function(t) {
            var e = this.slides.length;
            if (!(this.options.wrapAround && e > 1)) return t;
            var i = n.modulo(t, e),
                r = Math.abs(i - this.selectedIndex),
                s = Math.abs(i + e - this.selectedIndex),
                o = Math.abs(i - e - this.selectedIndex);
            !this.isDragSelect && s < r ? t += e : !this.isDragSelect && o < r && (t -= e), t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
        }, p.previous = function(t, e) {
            this.select(this.selectedIndex - 1, t, e)
        }, p.next = function(t, e) {
            this.select(this.selectedIndex + 1, t, e)
        }, p.updateSelectedSlide = function() {
            var t = this.slides[this.selectedIndex];
            t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
        }, p.unselectSelectedSlide = function() {
            this.selectedSlide && this.selectedSlide.unselect()
        }, p.selectInitialIndex = function() {
            var t = this.options.initialIndex;
            if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
            else {
                if (t && "string" == typeof t)
                    if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
                var e = 0;
                t && this.slides[t] && (e = t), this.select(e, !1, !0)
            }
        }, p.selectCell = function(t, e, i) {
            var n = this.queryCell(t);
            if (n) {
                var r = this.getCellSlideIndex(n);
                this.select(r, e, i)
            }
        }, p.getCellSlideIndex = function(t) {
            for (var e = 0; e < this.slides.length; e++) {
                if (-1 != this.slides[e].cells.indexOf(t)) return e
            }
        }, p.getCell = function(t) {
            for (var e = 0; e < this.cells.length; e++) {
                var i = this.cells[e];
                if (i.element == t) return i
            }
        }, p.getCells = function(t) {
            t = n.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var i = this.getCell(t);
                i && e.push(i)
            }, this), e
        }, p.getCellElements = function() {
            return this.cells.map(function(t) {
                return t.element
            })
        }, p.getParentCell = function(t) {
            var e = this.getCell(t);
            return e || (t = n.getParent(t, ".flickity-slider > *"), this.getCell(t))
        }, p.getAdjacentCellElements = function(t, e) {
            if (!t) return this.selectedSlide.getCellElements();
            e = void 0 === e ? this.selectedIndex : e;
            var i = this.slides.length;
            if (1 + 2 * t >= i) return this.getCellElements();
            for (var r = [], s = e - t; s <= e + t; s++) {
                var o = this.options.wrapAround ? n.modulo(s, i) : s,
                    a = this.slides[o];
                a && (r = r.concat(a.getCellElements()))
            }
            return r
        }, p.queryCell = function(t) {
            if ("number" == typeof t) return this.cells[t];
            if ("string" == typeof t) {
                if (t.match(/^[#\.]?[\d\/]/)) return;
                t = this.element.querySelector(t)
            }
            return this.getCell(t)
        }, p.uiChange = function() {
            this.emitEvent("uiChange")
        }, p.childUIPointerDown = function(t) {
            "touchstart" != t.type && t.preventDefault(), this.focus()
        }, p.onresize = function() {
            this.watchCSS(), this.resize()
        }, n.debounceMethod(d, "onresize", 150), p.resize = function() {
            if (this.isActive) {
                this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                var t = this.selectedElements && this.selectedElements[0];
                this.selectCell(t, !1, !0)
            }
        }, p.watchCSS = function() {
            this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
        }, p.onkeydown = function(t) {
            var e = document.activeElement && document.activeElement != this.element;
            if (this.options.accessibility && !e) {
                var i = d.keyboardHandlers[t.keyCode];
                i && i.call(this)
            }
        }, d.keyboardHandlers = {
            37: function() {
                var t = this.options.rightToLeft ? "next" : "previous";
                this.uiChange(), this[t]()
            },
            39: function() {
                var t = this.options.rightToLeft ? "previous" : "next";
                this.uiChange(), this[t]()
            }
        }, p.focus = function() {
            var e = t.pageYOffset;
            this.element.focus({
                preventScroll: !0
            }), t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
        }, p.deactivate = function() {
            this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function(t) {
                t.destroy()
            }), this.element.removeChild(this.viewport), c(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
        }, p.destroy = function() {
            this.deactivate(), t.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), a && this.$element && a.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete f[this.guid]
        }, n.extend(p, o), d.data = function(t) {
            var e = (t = n.getQueryElement(t)) && t.flickityGUID;
            return e && f[e]
        }, n.htmlInit(d, "flickity"), a && a.bridget && a.bridget("flickity", d), d.setJQuery = function(t) {
            a = t
        }, d.Cell = r, d.Slide = s, d
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.Unipointer = e(t, t.EvEmitter)
    }(window, function(t, e) {
        function i() {}
        var n = i.prototype = Object.create(e.prototype);
        n.bindStartEvent = function(t) {
            this._bindStartEvent(t, !0)
        }, n.unbindStartEvent = function(t) {
            this._bindStartEvent(t, !1)
        }, n._bindStartEvent = function(e, i) {
            var n = (i = void 0 === i || i) ? "addEventListener" : "removeEventListener",
                r = "mousedown";
            t.PointerEvent ? r = "pointerdown" : "ontouchstart" in t && (r = "touchstart"), e[n](r, this)
        }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.getTouch = function(t) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e];
                if (i.identifier == this.pointerIdentifier) return i
            }
        }, n.onmousedown = function(t) {
            var e = t.button;
            e && 0 !== e && 1 !== e || this._pointerDown(t, t)
        }, n.ontouchstart = function(t) {
            this._pointerDown(t, t.changedTouches[0])
        }, n.onpointerdown = function(t) {
            this._pointerDown(t, t)
        }, n._pointerDown = function(t, e) {
            t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
        }, n.pointerDown = function(t, e) {
            this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
        };
        var r = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel"],
            pointerdown: ["pointermove", "pointerup", "pointercancel"]
        };
        return n._bindPostStartEvents = function(e) {
            if (e) {
                var i = r[e.type];
                i.forEach(function(e) {
                    t.addEventListener(e, this)
                }, this), this._boundPointerEvents = i
            }
        }, n._unbindPostStartEvents = function() {
            this._boundPointerEvents && (this._boundPointerEvents.forEach(function(e) {
                t.removeEventListener(e, this)
            }, this), delete this._boundPointerEvents)
        }, n.onmousemove = function(t) {
            this._pointerMove(t, t)
        }, n.onpointermove = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
        }, n.ontouchmove = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerMove(t, e)
        }, n._pointerMove = function(t, e) {
            this.pointerMove(t, e)
        }, n.pointerMove = function(t, e) {
            this.emitEvent("pointerMove", [t, e])
        }, n.onmouseup = function(t) {
            this._pointerUp(t, t)
        }, n.onpointerup = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
        }, n.ontouchend = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerUp(t, e)
        }, n._pointerUp = function(t, e) {
            this._pointerDone(), this.pointerUp(t, e)
        }, n.pointerUp = function(t, e) {
            this.emitEvent("pointerUp", [t, e])
        }, n._pointerDone = function() {
            this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
        }, n._pointerReset = function() {
            this.isPointerDown = !1, delete this.pointerIdentifier
        }, n.pointerDone = function() {}, n.onpointercancel = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
        }, n.ontouchcancel = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerCancel(t, e)
        }, n._pointerCancel = function(t, e) {
            this._pointerDone(), this.pointerCancel(t, e)
        }, n.pointerCancel = function(t, e) {
            this.emitEvent("pointerCancel", [t, e])
        }, i.getPointerPoint = function(t) {
            return {
                x: t.pageX,
                y: t.pageY
            }
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.Unidragger = e(t, t.Unipointer)
    }(window, function(t, e) {
        function i() {}
        var n = i.prototype = Object.create(e.prototype);
        n.bindHandles = function() {
            this._bindHandles(!0)
        }, n.unbindHandles = function() {
            this._bindHandles(!1)
        }, n._bindHandles = function(e) {
            for (var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", n = e ? this._touchActionValue : "", r = 0; r < this.handles.length; r++) {
                var s = this.handles[r];
                this._bindStartEvent(s, e), s[i]("click", this), t.PointerEvent && (s.style.touchAction = n)
            }
        }, n._touchActionValue = "none", n.pointerDown = function(t, e) {
            this.okayPointerDown(t) && (this.pointerDownPointer = e, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
        };
        var r = {
                TEXTAREA: !0,
                INPUT: !0,
                SELECT: !0,
                OPTION: !0
            },
            s = {
                radio: !0,
                checkbox: !0,
                button: !0,
                submit: !0,
                image: !0,
                file: !0
            };
        return n.okayPointerDown = function(t) {
            var e = r[t.target.nodeName],
                i = s[t.target.type],
                n = !e || i;
            return n || this._pointerReset(), n
        }, n.pointerDownBlur = function() {
            var t = document.activeElement;
            t && t.blur && t != document.body && t.blur()
        }, n.pointerMove = function(t, e) {
            var i = this._dragPointerMove(t, e);
            this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
        }, n._dragPointerMove = function(t, e) {
            var i = {
                x: e.pageX - this.pointerDownPointer.pageX,
                y: e.pageY - this.pointerDownPointer.pageY
            };
            return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
        }, n.hasDragStarted = function(t) {
            return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
        }, n.pointerUp = function(t, e) {
            this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
        }, n._dragPointerUp = function(t, e) {
            this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
        }, n._dragStart = function(t, e) {
            this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
        }, n.dragStart = function(t, e) {
            this.emitEvent("dragStart", [t, e])
        }, n._dragMove = function(t, e, i) {
            this.isDragging && this.dragMove(t, e, i)
        }, n.dragMove = function(t, e, i) {
            t.preventDefault(), this.emitEvent("dragMove", [t, e, i])
        }, n._dragEnd = function(t, e) {
            this.isDragging = !1, setTimeout(function() {
                delete this.isPreventingClicks
            }.bind(this)), this.dragEnd(t, e)
        }, n.dragEnd = function(t, e) {
            this.emitEvent("dragEnd", [t, e])
        }, n.onclick = function(t) {
            this.isPreventingClicks && t.preventDefault()
        }, n._staticClick = function(t, e) {
            this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
                delete this.isIgnoringMouseUp
            }.bind(this), 400)))
        }, n.staticClick = function(t, e) {
            this.emitEvent("staticClick", [t, e])
        }, i.getPointerPoint = e.getPointerPoint, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(i, n, r) {
            return e(t, i, n, r)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils)
    }(window, function(t, e, i, n) {
        n.extend(e.defaults, {
            draggable: ">1",
            dragThreshold: 3
        }), e.createMethods.push("_createDrag");
        var r = e.prototype;
        n.extend(r, i.prototype), r._touchActionValue = "pan-y";
        var s = "createTouch" in document,
            o = !1;
        r._createDrag = function() {
            this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), s && !o && (t.addEventListener("touchmove", function() {}), o = !0)
        }, r.onActivateDrag = function() {
            this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
        }, r.onDeactivateDrag = function() {
            this.unbindHandles(), this.element.classList.remove("is-draggable")
        }, r.updateDraggable = function() {
            ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
        }, r.bindDrag = function() {
            this.options.draggable = !0, this.updateDraggable()
        }, r.unbindDrag = function() {
            this.options.draggable = !1, this.updateDraggable()
        }, r._uiChangeDrag = function() {
            delete this.isFreeScrolling
        }, r.pointerDown = function(e, i) {
            this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), t.addEventListener("scroll", this), this._pointerDownDefault(e, i)) : this._pointerDownDefault(e, i)
        }, r._pointerDownDefault = function(t, e) {
            this.pointerDownPointer = {
                pageX: e.pageX,
                pageY: e.pageY
            }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
        };
        var a = {
            INPUT: !0,
            TEXTAREA: !0,
            SELECT: !0
        };

        function l() {
            return {
                x: t.pageXOffset,
                y: t.pageYOffset
            }
        }
        return r.pointerDownFocus = function(t) {
            a[t.target.nodeName] || this.focus()
        }, r._pointerDownPreventDefault = function(t) {
            var e = "touchstart" == t.type,
                i = "touch" == t.pointerType,
                n = a[t.target.nodeName];
            e || i || n || t.preventDefault()
        }, r.hasDragStarted = function(t) {
            return Math.abs(t.x) > this.options.dragThreshold
        }, r.pointerUp = function(t, e) {
            delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
        }, r.pointerDone = function() {
            t.removeEventListener("scroll", this), delete this.pointerDownScroll
        }, r.dragStart = function(e, i) {
            this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [i]))
        }, r.pointerMove = function(t, e) {
            var i = this._dragPointerMove(t, e);
            this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i)
        }, r.dragMove = function(t, e, i) {
            if (this.isDraggable) {
                t.preventDefault(), this.previousDragX = this.dragX;
                var n = this.options.rightToLeft ? -1 : 1;
                this.options.wrapAround && (i.x = i.x % this.slideableWidth);
                var r = this.dragStartPosition + i.x * n;
                if (!this.options.wrapAround && this.slides.length) {
                    var s = Math.max(-this.slides[0].target, this.dragStartPosition);
                    r = r > s ? .5 * (r + s) : r;
                    var o = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                    r = r < o ? .5 * (r + o) : r
                }
                this.dragX = r, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
            }
        }, r.dragEnd = function(t, e) {
            if (this.isDraggable) {
                this.options.freeScroll && (this.isFreeScrolling = !0);
                var i = this.dragEndRestingSelect();
                if (this.options.freeScroll && !this.options.wrapAround) {
                    var n = this.getRestingPosition();
                    this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
                } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
                delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
            }
        }, r.dragEndRestingSelect = function() {
            var t = this.getRestingPosition(),
                e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
                i = this._getClosestResting(t, e, 1),
                n = this._getClosestResting(t, e, -1);
            return i.distance < n.distance ? i.index : n.index
        }, r._getClosestResting = function(t, e, i) {
            for (var n = this.selectedIndex, r = 1 / 0, s = this.options.contain && !this.options.wrapAround ? function(t, e) {
                    return t <= e
                } : function(t, e) {
                    return t < e
                }; s(e, r) && (n += i, r = e, null !== (e = this.getSlideDistance(-t, n)));) e = Math.abs(e);
            return {
                distance: r,
                index: n - i
            }
        }, r.getSlideDistance = function(t, e) {
            var i = this.slides.length,
                r = this.options.wrapAround && i > 1,
                s = r ? n.modulo(e, i) : e,
                o = this.slides[s];
            if (!o) return null;
            var a = r ? this.slideableWidth * Math.floor(e / i) : 0;
            return t - (o.target + a)
        }, r.dragEndBoostSelect = function() {
            if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
            var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
                e = this.previousDragX - this.dragX;
            return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
        }, r.staticClick = function(t, e) {
            var i = this.getParentCell(t.target),
                n = i && i.element,
                r = i && this.cells.indexOf(i);
            this.dispatchEvent("staticClick", t, [e, n, r])
        }, r.onscroll = function() {
            var t = l(),
                e = this.pointerDownScroll.x - t.x,
                i = this.pointerDownScroll.y - t.y;
            (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function(i, n, r) {
            return e(t, i, n, r)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.Unipointer, t.fizzyUIUtils)
    }(window, function(t, e, i, n) {
        "use strict";
        var r = "http://www.w3.org/2000/svg";

        function s(t, e) {
            this.direction = t, this.parent = e, this._create()
        }
        s.prototype = Object.create(i.prototype), s.prototype._create = function() {
            this.isEnabled = !0, this.isPrevious = -1 == this.direction;
            var t = this.parent.options.rightToLeft ? 1 : -1;
            this.isLeft = this.direction == t;
            var e = this.element = document.createElement("button");
            e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
            var i = this.createSVG();
            e.appendChild(i), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
        }, s.prototype.activate = function() {
            this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
        }, s.prototype.deactivate = function() {
            this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
        }, s.prototype.createSVG = function() {
            var t = document.createElementNS(r, "svg");
            t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
            var e = document.createElementNS(r, "path"),
                i = function(t) {
                    if ("string" == typeof t) return t;
                    return "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
                }(this.parent.options.arrowShape);
            return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
        }, s.prototype.handleEvent = n.handleEvent, s.prototype.onclick = function() {
            if (this.isEnabled) {
                this.parent.uiChange();
                var t = this.isPrevious ? "previous" : "next";
                this.parent[t]()
            }
        }, s.prototype.enable = function() {
            this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
        }, s.prototype.disable = function() {
            this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
        }, s.prototype.update = function() {
            var t = this.parent.slides;
            if (this.parent.options.wrapAround && t.length > 1) this.enable();
            else {
                var e = t.length ? t.length - 1 : 0,
                    i = this.isPrevious ? 0 : e;
                this[this.parent.selectedIndex == i ? "disable" : "enable"]()
            }
        }, s.prototype.destroy = function() {
            this.deactivate(), this.allOff()
        }, n.extend(e.defaults, {
            prevNextButtons: !0,
            arrowShape: {
                x0: 10,
                x1: 60,
                y1: 50,
                x2: 70,
                y2: 40,
                x3: 30
            }
        }), e.createMethods.push("_createPrevNextButtons");
        var o = e.prototype;
        return o._createPrevNextButtons = function() {
            this.options.prevNextButtons && (this.prevButton = new s(-1, this), this.nextButton = new s(1, this), this.on("activate", this.activatePrevNextButtons))
        }, o.activatePrevNextButtons = function() {
            this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
        }, o.deactivatePrevNextButtons = function() {
            this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
        }, e.PrevNextButton = s, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function(i, n, r) {
            return e(t, i, n, r)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.Unipointer, t.fizzyUIUtils)
    }(window, function(t, e, i, n) {
        function r(t) {
            this.parent = t, this._create()
        }
        r.prototype = Object.create(i.prototype), r.prototype._create = function() {
            this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
        }, r.prototype.activate = function() {
            this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
        }, r.prototype.deactivate = function() {
            this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
        }, r.prototype.setDots = function() {
            var t = this.parent.slides.length - this.dots.length;
            t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
        }, r.prototype.addDots = function(t) {
            for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, r = n + t, s = n; s < r; s++) {
                var o = document.createElement("li");
                o.className = "dot", o.setAttribute("aria-label", "Page dot " + (s + 1)), e.appendChild(o), i.push(o)
            }
            this.holder.appendChild(e), this.dots = this.dots.concat(i)
        }, r.prototype.removeDots = function(t) {
            this.dots.splice(this.dots.length - t, t).forEach(function(t) {
                this.holder.removeChild(t)
            }, this)
        }, r.prototype.updateSelected = function() {
            this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
        }, r.prototype.onTap = r.prototype.onClick = function(t) {
            var e = t.target;
            if ("LI" == e.nodeName) {
                this.parent.uiChange();
                var i = this.dots.indexOf(e);
                this.parent.select(i)
            }
        }, r.prototype.destroy = function() {
            this.deactivate(), this.allOff()
        }, e.PageDots = r, n.extend(e.defaults, {
            pageDots: !0
        }), e.createMethods.push("_createPageDots");
        var s = e.prototype;
        return s._createPageDots = function() {
            this.options.pageDots && (this.pageDots = new r(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
        }, s.activatePageDots = function() {
            this.pageDots.activate()
        }, s.updateSelectedPageDots = function() {
            this.pageDots.updateSelected()
        }, s.updatePageDots = function() {
            this.pageDots.setDots()
        }, s.deactivatePageDots = function() {
            this.pageDots.deactivate()
        }, e.PageDots = r, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function(t, i, n) {
            return e(t, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
    }(window, function(t, e, i) {
        function n(t) {
            this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
        }
        n.prototype = Object.create(t.prototype), n.prototype.play = function() {
            "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
        }, n.prototype.tick = function() {
            if ("playing" == this.state) {
                var t = this.parent.options.autoPlay;
                t = "number" == typeof t ? t : 3e3;
                var e = this;
                this.clear(), this.timeout = setTimeout(function() {
                    e.parent.next(!0), e.tick()
                }, t)
            }
        }, n.prototype.stop = function() {
            this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
        }, n.prototype.clear = function() {
            clearTimeout(this.timeout)
        }, n.prototype.pause = function() {
            "playing" == this.state && (this.state = "paused", this.clear())
        }, n.prototype.unpause = function() {
            "paused" == this.state && this.play()
        }, n.prototype.visibilityChange = function() {
            this[document.hidden ? "pause" : "unpause"]()
        }, n.prototype.visibilityPlay = function() {
            this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
        }, e.extend(i.defaults, {
            pauseAutoPlayOnHover: !0
        }), i.createMethods.push("_createPlayer");
        var r = i.prototype;
        return r._createPlayer = function() {
            this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
        }, r.activatePlayer = function() {
            this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
        }, r.playPlayer = function() {
            this.player.play()
        }, r.stopPlayer = function() {
            this.player.stop()
        }, r.pausePlayer = function() {
            this.player.pause()
        }, r.unpausePlayer = function() {
            this.player.unpause()
        }, r.deactivatePlayer = function() {
            this.player.stop(), this.element.removeEventListener("mouseenter", this)
        }, r.onmouseenter = function() {
            this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
        }, r.onmouseleave = function() {
            this.player.unpause(), this.element.removeEventListener("mouseleave", this)
        }, i.Player = n, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
    }(window, function(t, e, i) {
        var n = e.prototype;
        return n.insert = function(t, e) {
            var i = this._makeCells(t);
            if (i && i.length) {
                var n = this.cells.length;
                e = void 0 === e ? n : e;
                var r = function(t) {
                        var e = document.createDocumentFragment();
                        return t.forEach(function(t) {
                            e.appendChild(t.element)
                        }), e
                    }(i),
                    s = e == n;
                if (s) this.slider.appendChild(r);
                else {
                    var o = this.cells[e].element;
                    this.slider.insertBefore(r, o)
                }
                if (0 === e) this.cells = i.concat(this.cells);
                else if (s) this.cells = this.cells.concat(i);
                else {
                    var a = this.cells.splice(e, n - e);
                    this.cells = this.cells.concat(i).concat(a)
                }
                this._sizeCells(i), this.cellChange(e, !0)
            }
        }, n.append = function(t) {
            this.insert(t, this.cells.length)
        }, n.prepend = function(t) {
            this.insert(t, 0)
        }, n.remove = function(t) {
            var e = this.getCells(t);
            if (e && e.length) {
                var n = this.cells.length - 1;
                e.forEach(function(t) {
                    t.remove();
                    var e = this.cells.indexOf(t);
                    n = Math.min(e, n), i.removeFrom(this.cells, t)
                }, this), this.cellChange(n, !0)
            }
        }, n.cellSizeChange = function(t) {
            var e = this.getCell(t);
            if (e) {
                e.getSize();
                var i = this.cells.indexOf(e);
                this.cellChange(i)
            }
        }, n.cellChange = function(t, e) {
            var i = this.selectedElement;
            this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
            var n = this.getCell(i);
            n && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
    }(window, function(t, e, i) {
        "use strict";
        e.createMethods.push("_createLazyload");
        var n = e.prototype;

        function r(t, e) {
            this.img = t, this.flickity = e, this.load()
        }
        return n._createLazyload = function() {
            this.on("select", this.lazyLoad)
        }, n.lazyLoad = function() {
            var t = this.options.lazyLoad;
            if (t) {
                var e = "number" == typeof t ? t : 0,
                    n = this.getAdjacentCellElements(e),
                    s = [];
                n.forEach(function(t) {
                    var e = function(t) {
                        if ("IMG" == t.nodeName) {
                            var e = t.getAttribute("data-flickity-lazyload"),
                                n = t.getAttribute("data-flickity-lazyload-src"),
                                r = t.getAttribute("data-flickity-lazyload-srcset");
                            if (e || n || r) return [t]
                        }
                        var s = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                        return i.makeArray(s)
                    }(t);
                    s = s.concat(e)
                }), s.forEach(function(t) {
                    new r(t, this)
                }, this)
            }
        }, r.prototype.handleEvent = i.handleEvent, r.prototype.load = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this);
            var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
                e = this.img.getAttribute("data-flickity-lazyload-srcset");
            this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
        }, r.prototype.onload = function(t) {
            this.complete(t, "flickity-lazyloaded")
        }, r.prototype.onerror = function(t) {
            this.complete(t, "flickity-lazyerror")
        }, r.prototype.complete = function(t, e) {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            var i = this.flickity.getParentCell(this.img),
                n = i && i.element;
            this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n)
        }, e.LazyLoader = r, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
    }(window, function(t) {
        return t
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
    }(window, function(t, e) {
        t.createMethods.push("_createAsNavFor");
        var i = t.prototype;
        return i._createAsNavFor = function() {
            this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
            var t = this.options.asNavFor;
            if (t) {
                var e = this;
                setTimeout(function() {
                    e.setNavCompanion(t)
                })
            }
        }, i.setNavCompanion = function(i) {
            i = e.getQueryElement(i);
            var n = t.data(i);
            if (n && n != this) {
                this.navCompanion = n;
                var r = this;
                this.onNavCompanionSelect = function() {
                    r.navCompanionSelect()
                }, n.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0)
            }
        }, i.navCompanionSelect = function(t) {
            var e = this.navCompanion && this.navCompanion.selectedCells;
            if (e) {
                var i, n, r, s = e[0],
                    o = this.navCompanion.cells.indexOf(s),
                    a = o + e.length - 1,
                    l = Math.floor((i = o, n = a, r = this.navCompanion.cellAlign, (n - i) * r + i));
                if (this.selectCell(l, !1, t), this.removeNavSelectedElements(), !(l >= this.cells.length)) {
                    var u = this.cells.slice(o, a + 1);
                    this.navSelectedElements = u.map(function(t) {
                        return t.element
                    }), this.changeNavSelectedClass("add")
                }
            }
        }, i.changeNavSelectedClass = function(t) {
            this.navSelectedElements.forEach(function(e) {
                e.classList[t]("is-nav-selected")
            })
        }, i.activateAsNavFor = function() {
            this.navCompanionSelect(!0)
        }, i.removeNavSelectedElements = function() {
            this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
        }, i.onNavStaticClick = function(t, e, i, n) {
            "number" == typeof n && this.navCompanion.selectCell(n)
        }, i.deactivateAsNavFor = function() {
            this.removeNavSelectedElements()
        }, i.destroyAsNavFor = function() {
            this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }("undefined" != typeof window ? window : this, function(t, e) {
        var i = t.jQuery,
            n = t.console;

        function r(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }
        var s = Array.prototype.slice;

        function o(t, e, a) {
            if (!(this instanceof o)) return new o(t, e, a);
            var l, u = t;
            ("string" == typeof t && (u = document.querySelectorAll(t)), u) ? (this.elements = (l = u, Array.isArray(l) ? l : "object" == typeof l && "number" == typeof l.length ? s.call(l) : [l]), this.options = r({}, this.options), "function" == typeof e ? a = e : r(this.options, e), a && this.on("always", a), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (u || t))
        }
        o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, o.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && a[e]) {
                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var r = i[n];
                    this.addImage(r)
                }
                if ("string" == typeof this.options.background) {
                    var s = t.querySelectorAll(this.options.background);
                    for (n = 0; n < s.length; n++) {
                        var o = s[n];
                        this.addElementBackgroundImages(o)
                    }
                }
            }
        };
        var a = {
            1: !0,
            9: !0,
            11: !0
        };

        function l(t) {
            this.img = t
        }

        function u(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        return o.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                    var r = n && n[2];
                    r && this.addBackground(r, t), n = i.exec(e.backgroundImage)
                }
        }, o.prototype.addImage = function(t) {
            var e = new l(t);
            this.images.push(e)
        }, o.prototype.addBackground = function(t, e) {
            var i = new u(t, e);
            this.images.push(i)
        }, o.prototype.check = function() {
            var t = this;

            function e(e, i, n) {
                setTimeout(function() {
                    t.progress(e, i, n)
                })
            }
            this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function(t) {
                t.once("progress", e), t.check()
            }) : this.complete()
        }, o.prototype.progress = function(t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && n && n.log("progress: " + i, t, e)
        }, o.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, l.prototype = Object.create(e.prototype), l.prototype.check = function() {
            this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
        }, l.prototype.getIsImageComplete = function() {
            return this.img.complete && this.img.naturalWidth
        }, l.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, l.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, l.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, l.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, u.prototype = Object.create(l.prototype), u.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, u.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, u.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, o.makeJQueryPlugin = function(e) {
            (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function(t, e) {
                return new o(this, t, e).jqDeferred.promise(i(this))
            })
        }, o.makeJQueryPlugin(), o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded)
    }(window, function(t, e, i) {
        "use strict";
        e.createMethods.push("_createImagesLoaded");
        var n = e.prototype;
        return n._createImagesLoaded = function() {
            this.on("activate", this.imagesLoaded)
        }, n.imagesLoaded = function() {
            if (this.options.imagesLoaded) {
                var t = this;
                i(this.slider).on("progress", function(e, i) {
                    var n = t.getParentCell(i.img);
                    t.cellSizeChange(n && n.element), t.options.freeScroll || t.positionSliderAtSelected()
                })
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : e(t.Flickity, t.fizzyUIUtils)
    }(this, function(t, e) {
        var i = t.Slide,
            n = i.prototype.updateTarget;
        i.prototype.updateTarget = function() {
            if (n.apply(this, arguments), this.parent.options.fade) {
                var t = this.target - this.x,
                    e = this.cells[0].x;
                this.cells.forEach(function(i) {
                    var n = i.x - e - t;
                    i.renderPosition(n)
                })
            }
        }, i.prototype.setOpacity = function(t) {
            this.cells.forEach(function(e) {
                e.element.style.opacity = t
            })
        };
        var r = t.prototype;
        t.createMethods.push("_createFade"), r._createFade = function() {
            this.fadeIndex = this.selectedIndex, this.prevSelectedIndex = this.selectedIndex, this.on("select", this.onSelectFade), this.on("dragEnd", this.onDragEndFade), this.on("settle", this.onSettleFade), this.on("activate", this.onActivateFade), this.on("deactivate", this.onDeactivateFade)
        };
        var s = r.updateSlides;
        r.updateSlides = function() {
            s.apply(this, arguments), this.options.fade && this.slides.forEach(function(t, e) {
                var i = e == this.selectedIndex ? 1 : 0;
                t.setOpacity(i)
            }, this)
        }, r.onSelectFade = function() {
            this.fadeIndex = Math.min(this.prevSelectedIndex, this.slides.length - 1), this.prevSelectedIndex = this.selectedIndex
        }, r.onSettleFade = function() {
            (delete this.didDragEnd, this.options.fade) && (this.selectedSlide.setOpacity(1), this.slides[this.fadeIndex] && this.fadeIndex != this.selectedIndex && this.slides[this.fadeIndex].setOpacity(0))
        }, r.onDragEndFade = function() {
            this.didDragEnd = !0
        }, r.onActivateFade = function() {
            this.options.fade && this.element.classList.add("is-fade")
        }, r.onDeactivateFade = function() {
            this.options.fade && (this.element.classList.remove("is-fade"), this.slides.forEach(function(t) {
                t.setOpacity("")
            }))
        };
        var o = r.positionSlider;
        r.positionSlider = function() {
            this.options.fade ? (this.fadeSlides(), this.dispatchScrollEvent()) : o.apply(this, arguments)
        };
        var a = r.positionSliderAtSelected;
        r.positionSliderAtSelected = function() {
            this.options.fade && this.setTranslateX(0), a.apply(this, arguments)
        }, r.fadeSlides = function() {
            if (!(this.slides.length < 2)) {
                var t = this.getFadeIndexes(),
                    e = this.slides[t.a],
                    i = this.slides[t.b],
                    n = this.wrapDifference(e.target, i.target),
                    r = this.wrapDifference(e.target, -this.x);
                r /= n, e.setOpacity(1 - r), i.setOpacity(r);
                var s = t.a;
                this.isDragging && (s = r > .5 ? t.a : t.b), null != this.fadeHideIndex && this.fadeHideIndex != s && this.fadeHideIndex != t.a && this.fadeHideIndex != t.b && this.slides[this.fadeHideIndex].setOpacity(0), this.fadeHideIndex = s
            }
        }, r.getFadeIndexes = function() {
            return this.isDragging || this.didDragEnd ? this.options.wrapAround ? this.getFadeDragWrapIndexes() : this.getFadeDragLimitIndexes() : {
                a: this.fadeIndex,
                b: this.selectedIndex
            }
        }, r.getFadeDragWrapIndexes = function() {
            var t = this.slides.map(function(t, e) {
                    return this.getSlideDistance(-this.x, e)
                }, this),
                i = t.map(function(t) {
                    return Math.abs(t)
                }),
                n = Math.min.apply(Math, i),
                r = i.indexOf(n),
                s = t[r],
                o = this.slides.length,
                a = s >= 0 ? 1 : -1;
            return {
                a: r,
                b: e.modulo(r + a, o)
            }
        }, r.getFadeDragLimitIndexes = function() {
            for (var t = 0, e = 0; e < this.slides.length - 1; e++) {
                var i = this.slides[e];
                if (-this.x < i.target) break;
                t = e
            }
            return {
                a: t,
                b: t + 1
            }
        }, r.wrapDifference = function(t, e) {
            var i = e - t;
            if (!this.options.wrapAround) return i;
            var n = i + this.slideableWidth,
                r = i - this.slideableWidth;
            return Math.abs(n) < Math.abs(i) && (i = n), Math.abs(r) < Math.abs(i) && (i = r), i
        };
        var l = r._getWrapShiftCells;
        r._getWrapShiftCells = function() {
            this.options.fade || l.apply(this, arguments)
        };
        var u = r.shiftWrapCells;
        return r.shiftWrapCells = function() {
            this.options.fade || u.apply(this, arguments)
        }, t
    });
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var t, e, i, n, r, s, o, a, l, u, c, h, f, d, p, m;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, i) {
                        var n, r, s = t.cycle;
                        for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                        delete t.cycle
                    },
                    s = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
                    },
                    o = 1e-10,
                    a = i._internals,
                    l = a.isSelector,
                    u = a.isArray,
                    c = s.prototype = i.to({}, .1, {}),
                    h = [];
                s.version = "1.20.2", c.constructor = s, c.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, c.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
                }, c.updateTo = function(t, e) {
                    var n, r = this.ratio,
                        s = this.vars.immediateRender || t.immediateRender;
                    for (n in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[n] = t[n];
                    if (this._initted || s)
                        if (e) this._initted = !1, s && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var o = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || s)
                        for (var a, l = 1 / (1 - r), u = this._firstPT; u;) a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next;
                    return this
                }, c.render = function(t, e, n) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var r, s, l, u, c, h, f, d, p, m = this._dirty ? this.totalDuration() : this._totalDuration,
                        g = this._time,
                        v = this._totalTime,
                        y = this._cycle,
                        _ = this._duration,
                        b = this._rawPrevTime;
                    if (t >= m - 1e-7 && t >= 0 ? (this._totalTime = m, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, s = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === _ && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 > b || 0 >= t && t >= -1e-7 || b === o && "isPause" !== this.data) && b !== t && (n = !0, b > o && (s = "onReverseComplete")), this._rawPrevTime = d = !e || t || b === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== v || 0 === _ && b > 0) && (s = "onReverseComplete", r = this._reversed), 0 > t && (this._active = !1, 0 === _ && (this._initted || !this.vars.lazy || n) && (b >= 0 && (n = !0), this._rawPrevTime = d = !e || t || b === t ? t : o)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (u = _ + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && t >= v && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 != (1 & this._cycle) && (this._time = _ - this._time, (p = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== p || this._initted ? this._yoyoEase = p = !0 === p ? this._ease : p instanceof Ease ? p : Ease.map[p] : (p = this.vars.ease, this._yoyoEase = p = p ? p instanceof Ease ? p : "function" == typeof p ? new Ease(p, this.vars.easeParams) : Ease.map[p] || i.defaultEase : i.defaultEase)), this.ratio = p ? 1 - p.getRatio((_ - this._time) / _) : 0)), this._time > _ ? this._time = _ : this._time < 0 && (this._time = 0)), this._easeType && !p ? (c = this._time / _, (1 === (h = this._easeType) || 3 === h && c >= .5) && (c = 1 - c), 3 === h && (c *= 2), 1 === (f = this._easePower) ? c *= c : 2 === f ? c *= c * c : 3 === f ? c *= c * c * c : 4 === f && (c *= c * c * c * c), 1 === h ? this.ratio = 1 - c : 2 === h ? this.ratio = c : this._time / _ < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : p || (this.ratio = this._ease.getRatio(this._time / _))), g !== this._time || n || y !== this._cycle) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = g, this._totalTime = v, this._rawPrevTime = b, this._cycle = y, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                            !this._time || r || p ? r && this._ease._calcEnd && !p && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / _)
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== g && t >= 0 && (this._active = !0), 0 === v && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === _) && (e || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                        this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, n), e || (this._totalTime !== v || s) && this._callback("onUpdate")), this._cycle !== y && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === _ && this._rawPrevTime === o && d !== o && (this._rawPrevTime = 0))
                    } else v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, s.to = function(t, e, i) {
                    return new s(t, e, i)
                }, s.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
                }, s.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
                }, s.staggerTo = s.allTo = function(t, e, o, a, c, f, d) {
                    a = a || 0;
                    var p, m, g, v, y = 0,
                        _ = [],
                        b = function() {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(d || o.callbackScope || this, f || h)
                        },
                        x = o.cycle,
                        w = o.startAt && o.startAt.cycle;
                    for (u(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > a && ((t = n(t)).reverse(), a *= -1), p = t.length - 1, g = 0; p >= g; g++) {
                        for (v in m = {}, o) m[v] = o[v];
                        if (x && (r(m, t, g), null != m.duration && (e = m.duration, delete m.duration)), w) {
                            for (v in w = m.startAt = {}, o.startAt) w[v] = o.startAt[v];
                            r(m.startAt, t, g)
                        }
                        m.delay = y + (m.delay || 0), g === p && c && (m.onComplete = b), _[g] = new s(t[g], e, m), y += a
                    }
                    return _
                }, s.staggerFrom = s.allFrom = function(t, e, i, n, r, o, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, o, a)
                }, s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, o, a, l)
                }, s.delayedCall = function(t, e, i, n, r) {
                    return new s(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, s.set = function(t, e) {
                    return new s(t, 0, e)
                }, s.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var f = function(t, e) {
                        for (var n = [], r = 0, s = t._first; s;) s instanceof i ? n[r++] = s : (e && (n[r++] = s), r = (n = n.concat(f(s, e))).length), s = s._next;
                        return n
                    },
                    d = s.getAllTweens = function(e) {
                        return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
                    };
                s.killAll = function(t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var s, o, a, l = d(0 != r),
                        u = l.length,
                        c = i && n && r;
                    for (a = 0; u > a; a++) o = l[a], (c || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                }, s.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, o, c, h, f, d = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), u(t))
                            for (h = t.length; --h > -1;) s.killChildTweensOf(t[h], e);
                        else {
                            for (c in r = [], d)
                                for (o = d[c].target.parentNode; o;) o === t && (r = r.concat(d[c].tweens)), o = o.parentNode;
                            for (f = r.length, h = 0; f > h; h++) e && r[h].totalTime(r[h].totalDuration()), r[h]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(t, i, n, r) {
                    i = !1 !== i, n = !1 !== n;
                    for (var s, o, a = d(r = !1 !== r), l = i && n && r, u = a.length; --u > -1;) o = a[u], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
                };
                return s.pauseAll = function(t, e, i) {
                    p(!0, t, e, i)
                }, s.resumeAll = function(t, e, i) {
                    p(!1, t, e, i)
                }, s.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || o, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, c.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, c.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, c.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, s
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    s = i._internals,
                    o = n._internals = {},
                    a = s.isSelector,
                    l = s.isArray,
                    u = s.lazyTweens,
                    c = s.lazyRender,
                    h = _gsScope._gsDefine.globals,
                    f = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    d = function(t, e, i) {
                        var n, r, s = t.cycle;
                        for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                        delete t.cycle
                    },
                    p = o.pauseCallback = function() {},
                    m = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    g = n.prototype = new e;
                return n.version = "1.20.2", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(t, e, n, r) {
                    var s = n.repeat && h.TweenMax || i;
                    return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
                }, g.from = function(t, e, n, r) {
                    return this.add((n.repeat && h.TweenMax || i).from(t, e, n), r)
                }, g.fromTo = function(t, e, n, r, s) {
                    var o = r.repeat && h.TweenMax || i;
                    return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
                }, g.staggerTo = function(t, e, r, s, o, l, u, c) {
                    var h, p, g = new n({
                            onComplete: l,
                            onCompleteParams: u,
                            callbackScope: c,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        v = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), a(t = t || []) && (t = m(t)), 0 > (s = s || 0) && ((t = m(t)).reverse(), s *= -1), p = 0; p < t.length; p++)(h = f(r)).startAt && (h.startAt = f(h.startAt), h.startAt.cycle && d(h.startAt, t, p)), v && (d(h, t, p), null != h.duration && (e = h.duration, delete h.duration)), g.to(t[p], e, h, p * s);
                    return this.add(g, o)
                }, g.staggerFrom = function(t, e, i, n, r, s, o, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
                }, g.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
                }, g.call = function(t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, g.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, s, o = new n(t),
                        a = o._timeline;
                    for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) s = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
                    return a.add(o, 0), o
                }, g.add = function(r, s, o, a) {
                    var u, c, h, f, d, p;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (o = o || "normal", a = a || 0, u = s, c = r.length, h = 0; c > h; h++) l(f = r[h]) && (f = new n({
                                tweens: f
                            })), this.add(f, u), "string" != typeof f && "function" != typeof f && ("sequence" === o ? u = f._startTime + f.totalDuration() / f._timeScale : "start" === o && (f._startTime -= f.delay())), u += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, s);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, s), r._time && r.render((this.rawTime() - r._startTime) * r._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = (d = this).rawTime() > r._startTime; d._timeline;) p && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
                    return this
                }, g.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var n = e.length; --n > -1;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, g._remove = function(t, i) {
                    return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, g.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, g.insert = g.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, g.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, g.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, g.addPause = function(t, e, n, r) {
                    var s = i.delayedCall(0, p, n, r || this);
                    return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
                }, g.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, g.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, g._parseTimeOrLabel = function(e, i, n, r) {
                    var s, o;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
                    if (s = this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - s : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = s);
                    else {
                        if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = s + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : s
                    }
                    return Number(e) + i
                }, g.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                }, g.stop = function() {
                    return this.paused(!0)
                }, g.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, g.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, g.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, o, a, l, h, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        m = this._startTime,
                        g = this._timeScale,
                        v = this._paused;
                    if (t >= d - 1e-7 && t >= 0) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = d + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= p)
                                for (n = this._first; n && n._startTime <= t && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !h;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev;
                            h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== p && this._first || i || l || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (f = this._time) >= p)
                            for (n = this._first; n && (o = n._next, f === this._time && (!this._paused || v));)(n._active || n._startTime <= f && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                        else
                            for (n = this._last; n && (o = n._prev, f === this._time && (!this._paused || v));) {
                                if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                                    if (h === n) {
                                        for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                        h = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = o
                            }
                        this._onUpdate && (e || (u.length && c(), this._callback("onUpdate"))), a && (this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (s && (u.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                    }
                }, g._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, g.getChildren = function(t, e, n, r) {
                    r = r || -9999999999;
                    for (var s = [], o = this._first, a = 0; o;) o._startTime < r || (o instanceof i ? !1 !== e && (s[a++] = o) : (!1 !== n && (s[a++] = o), !1 !== t && (a = (s = s.concat(o.getChildren(!0, e, n))).length))), o = o._next;
                    return s
                }, g.getTweensOf = function(t, e) {
                    var n, r, s = this._gc,
                        o = [],
                        a = 0;
                    for (s && this._enabled(!0, !0), r = (n = i.getTweensOf(t)).length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
                    return s && this._enabled(!1, !0), o
                }, g.recent = function() {
                    return this._recent
                }, g._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, g.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in s) s[n] >= i && (s[n] += t);
                    return this._uncache(!0)
                }, g._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                    return r
                }, g.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, g.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, g._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, g.totalTime = function(e, i, n) {
                    this._forcingPlayhead = !0;
                    var r = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, g.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, g.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), (i = r._startTime + r._totalDuration / r._timeScale) > n && (n = i), r = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, g.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, g.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, g.rawTime = function(t) {
                    return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                    },
                    r = 1e-10,
                    s = e._internals,
                    o = s.lazyTweens,
                    a = s.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    u = new i(null, null, 1, 0),
                    c = n.prototype = new t;
                return c.constructor = n, c.kill()._gc = !1, n.version = "1.20.2", c.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, c.addCallback = function(t, i, n, r) {
                    return this.add(e.delayedCall(0, t, n, r), i)
                }, c.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, c.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, c.tweenTo = function(t, i) {
                    i = i || {};
                    var n, r, s, o = {
                            ease: u,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        },
                        a = i.repeat && l.TweenMax || e;
                    for (r in i) o[r] = i[r];
                    return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new a(this, n, o), o.onStart = function() {
                        s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || s, i.onStartParams || [])
                    }, s
                }, c.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = !1 !== i.immediateRender;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, c.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, l, u, c, h, f, d, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._duration,
                        g = this._time,
                        v = this._totalTime,
                        y = this._startTime,
                        _ = this._timeScale,
                        b = this._rawPrevTime,
                        x = this._paused,
                        w = this._cycle;
                    if (t >= p - 1e-7 && t >= 0) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, u = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > b || b === r) && b !== t && this._first && (c = !0, b > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === m && b !== r && (b > 0 || 0 > t && b >= 0) && !this._locked) && (u = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = s = !0, u = "onReverseComplete") : b >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (c = !0)
                        }
                    else if (0 === m && 0 > b && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (h = m + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && t >= v && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if ((t = this._time) >= g || this._repeat && w !== this._cycle)
                            for (n = this._first; n && n._startTime <= t && !f;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (f = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !f;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (f = n), n = n._prev;
                        f && f._startTime < m && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== w && !this._locked) {
                        var T = this._yoyo && 0 != (1 & w),
                            S = T === (this._yoyo && 0 != (1 & this._cycle)),
                            C = this._totalTime,
                            k = this._cycle,
                            E = this._rawPrevTime,
                            P = this._time;
                        if (this._totalTime = w * m, this._cycle < w ? T = !T : this._totalTime += m, this._time = g, this._rawPrevTime = 0 === m ? b - 1e-4 : b, this._cycle = w, this._locked = !0, g = T ? 0 : m, this.render(g, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = k, this._locked = !1, this._callback("onRepeat")), g !== this._time) return;
                        if (S && (this._cycle = w, this._locked = !0, g = T ? m + 1e-4 : -1e-4, this.render(g, !0, !1)), this._locked = !1, this._paused && !x) return;
                        this._time = P, this._totalTime = C, this._cycle = k, this._rawPrevTime = E
                    }
                    if (this._time !== g && this._first || i || c || f) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== v && t > 0 && (this._active = !0), 0 === v && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (d = this._time) >= g)
                            for (n = this._first; n && (l = n._next, d === this._time && (!this._paused || x));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (f === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                        else
                            for (n = this._last; n && (l = n._prev, d === this._time && (!this._paused || x));) {
                                if (n._active || n._startTime <= g && !n._paused && !n._gc) {
                                    if (f === n) {
                                        for (f = n._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i), f = f._prev;
                                        f = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = l
                            }
                        this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), u && (this._locked || this._gc || (y === this._startTime || _ !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (s && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this._callback(u)))
                    } else v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, c.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, s = [],
                        o = this.getChildren(t, e, i),
                        a = 0,
                        l = o.length;
                    for (n = 0; l > n; n++)(r = o[n]).isActive() && (s[a++] = r);
                    return s
                }, c.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, c.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, c.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, c.invalidate = function() {
                    return this._locked = !1, t.prototype.invalidate.call(this)
                }, c.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                }, c.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                }, c.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, c.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0), t = 180 / Math.PI, e = [], i = [], n = [], r = {}, s = _gsScope._gsDefine.globals, o = function(t, e, i, n) {
                i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
            }, a = function(t, e, i, n) {
                var r = {
                        a: t
                    },
                    s = {},
                    o = {},
                    a = {
                        c: n
                    },
                    l = (t + e) / 2,
                    u = (e + i) / 2,
                    c = (i + n) / 2,
                    h = (l + u) / 2,
                    f = (u + c) / 2,
                    d = (f - h) / 8;
                return r.b = l + (t - l) / 4, s.b = h + d, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (h + f) / 2, o.b = f - d, a.b = c + (n - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
            }, l = function(t, r, s, o, l) {
                var u, c, h, f, d, p, m, g, v, y, _, b, x, w = t.length - 1,
                    T = 0,
                    S = t[0].a;
                for (u = 0; w > u; u++) c = (d = t[T]).a, h = d.d, f = t[T + 1].d, l ? (_ = e[u], x = ((b = i[u]) + _) * r * .25 / (o ? .5 : n[u] || .5), g = h - ((p = h - (h - c) * (o ? .5 * r : 0 !== _ ? x / _ : 0)) + (((m = h + (f - h) * (o ? .5 * r : 0 !== b ? x / b : 0)) - p) * (3 * _ / (_ + b) + .5) / 4 || 0))) : g = h - ((p = h - (h - c) * r * .5) + (m = h + (f - h) * r * .5)) / 2, p += g, m += g, d.c = v = p, d.b = 0 !== u ? S : S = d.a + .6 * (d.c - d.a), d.da = h - c, d.ca = v - c, d.ba = S - c, s ? (y = a(c, S, v, h), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, S = m;
                (d = t[T]).b = S, d.c = S + .4 * (d.d - S), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = S - d.a, s && (y = a(d.a, S, d.c, d.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
            }, u = function(t, n, r, s) {
                var a, l, u, c, h, f, d = [];
                if (s)
                    for (l = (t = [s].concat(t)).length; --l > -1;) "string" == typeof(f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = s[n] + Number(f.charAt(0) + f.substr(2)));
                if (0 > (a = t.length - 2)) return d[0] = new o(t[0][n], 0, 0, t[0][n]), d;
                for (l = 0; a > l; l++) u = t[l][n], c = t[l + 1][n], d[l] = new o(u, 0, 0, c), r && (h = t[l + 2][n], e[l] = (e[l] || 0) + (c - u) * (c - u), i[l] = (i[l] || 0) + (h - c) * (h - c));
                return d[l] = new o(t[l][n], 0, 0, t[l + 1][n]), d
            }, c = function(t, s, o, a, c, h) {
                var f, d, p, m, g, v, y, _, b = {},
                    x = [],
                    w = h || t[0];
                for (d in c = "string" == typeof c ? "," + c + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == s && (s = 1), t[0]) x.push(d);
                if (t.length > 1) {
                    for (_ = t[t.length - 1], y = !0, f = x.length; --f > -1;)
                        if (d = x[f], Math.abs(w[d] - _[d]) > .05) {
                            y = !1;
                            break
                        }
                    y && (t = t.concat(), h && t.unshift(h), t.push(t[1]), h = t[t.length - 3])
                }
                for (e.length = i.length = n.length = 0, f = x.length; --f > -1;) d = x[f], r[d] = -1 !== c.indexOf("," + d + ","), b[d] = u(t, d, r[d], h);
                for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                if (!a) {
                    for (f = x.length; --f > -1;)
                        if (r[d])
                            for (v = (p = b[x[f]]).length - 1, m = 0; v > m; m++) g = p[m + 1].da / i[m] + p[m].da / e[m] || 0, n[m] = (n[m] || 0) + g * g;
                    for (f = n.length; --f > -1;) n[f] = Math.sqrt(n[f])
                }
                for (f = x.length, m = o ? 4 : 1; --f > -1;) p = b[d = x[f]], l(p, s, o, a, r[d]), y && (p.splice(0, m), p.splice(p.length - m, m));
                return b
            }, h = function(t, e, i) {
                var n, r, s, a, l, u, c, h, f, d, p, m = {},
                    g = "cubic" === (e = e || "soft") ? 3 : 2,
                    v = "soft" === e,
                    y = [];
                if (v && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
                for (f in t[0]) y.push(f);
                for (u = y.length; --u > -1;) {
                    for (m[f = y[u]] = l = [], d = 0, h = t.length, c = 0; h > c; c++) n = null == i ? t[c][f] : "string" == typeof(p = t[c][f]) && "=" === p.charAt(1) ? i[f] + Number(p.charAt(0) + p.substr(2)) : Number(p), v && c > 1 && h - 1 > c && (l[d++] = (n + l[d - 2]) / 2), l[d++] = n;
                    for (h = d - g + 1, d = 0, c = 0; h > c; c += g) n = l[c], r = l[c + 1], s = l[c + 2], a = 2 === g ? 0 : l[c + 3], l[d++] = p = 3 === g ? new o(n, r, s, a) : new o(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                    l.length = d
                }
                return m
            }, f = function(t, e, i) {
                for (var n, r, s, o, a, l, u, c, h, f, d, p = 1 / i, m = t.length; --m > -1;)
                    for (s = (f = t[m]).a, o = f.d - s, a = f.c - s, l = f.b - s, n = r = 0, c = 1; i >= c; c++) n = r - (r = ((u = p * c) * u * o + 3 * (h = 1 - u) * (u * a + h * l)) * u), e[d = m * i + c - 1] = (e[d] || 0) + n * n
            }, d = function(t, e) {
                var i, n, r, s, o = [],
                    a = [],
                    l = 0,
                    u = 0,
                    c = (e = e >> 0 || 6) - 1,
                    h = [],
                    d = [];
                for (i in t) f(t[i], o, e);
                for (r = o.length, n = 0; r > n; n++) l += Math.sqrt(o[n]), d[s = n % e] = l, s === c && (u += l, h[s = n / e >> 0] = d, a[s] = u, l = 0, d = []);
                return {
                    length: u,
                    lengths: a,
                    segments: h
                }
            }, p = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.8",
                API: 2,
                global: !0,
                init: function(t, e, i) {
                    this._target = t, e instanceof Array && (e = {
                        values: e
                    }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                    var n, r, s, o, a, l = e.values || [],
                        u = {},
                        f = l[0],
                        p = e.autoRotate || i.vars.orientToBezier;
                    for (n in this._autoRotate = p ? p instanceof Array ? p : [
                            ["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]
                        ] : null, f) this._props.push(n);
                    for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u);
                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : h(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                        var m = d(this._beziers, this._timeRes);
                        this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (p = this._autoRotate)
                        for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1;) {
                            for (o = 0; 3 > o; o++) n = p[s][o], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                            n = p[s][2], this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                        }
                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                },
                set: function(e) {
                    var i, n, r, s, o, a, l, u, c, h, f = this._segCount,
                        d = this._func,
                        p = this._target,
                        m = e !== this._startRatio;
                    if (this._timeRes) {
                        if (c = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
                            for (u = f - 1; u > r && (this._l2 = c[++r]) <= e;);
                            this._l1 = c[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                        } else if (e < this._l1 && r > 0) {
                            for (; r > 0 && (this._l1 = c[--r]) >= e;);
                            0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                        }
                        if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < h.length - 1) {
                            for (u = h.length - 1; u > r && (this._s2 = h[++r]) <= e;);
                            this._s1 = h[r - 1], this._si = r
                        } else if (e < this._s1 && r > 0) {
                            for (; r > 0 && (this._s1 = h[--r]) >= e;);
                            0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                        }
                        a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else a = (e - (i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0) * (1 / f)) * f;
                    for (n = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], l = (a * a * (o = this._beziers[s][i]).da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._mod[s] && (l = this._mod[s](l, p)), d[s] ? p[s](l) : p[s] = l;
                    if (this._autoRotate) {
                        var g, v, y, _, b, x, w, T = this._autoRotate;
                        for (r = T.length; --r > -1;) s = T[r][2], x = T[r][3] || 0, w = !0 === T[r][4] ? 1 : t, o = this._beziers[T[r][0]], g = this._beziers[T[r][1]], o && g && (o = o[i], g = g[i], v = o.a + (o.b - o.a) * a, v += ((_ = o.b + (o.c - o.b) * a) - v) * a, _ += (o.c + (o.d - o.c) * a - _) * a, y = g.a + (g.b - g.a) * a, y += ((b = g.b + (g.c - g.b) * a) - y) * a, b += (g.c + (g.d - g.c) * a - b) * a, l = m ? Math.atan2(b - y, _ - v) * w + x : this._initialRotations[r], this._mod[s] && (l = this._mod[s](l, p)), d[s] ? p[s](l) : p[s] = l)
                    }
                }
            }), m = p.prototype, p.bezierThrough = c, p.cubicToQuadratic = a, p._autoCSS = !0, p.quadraticToCubic = function(t, e, i) {
                return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
            }, p._cssRegister = function() {
                var t = s.CSSPlugin;
                if (t) {
                    var e = t._internals,
                        i = e._parseToProxy,
                        n = e._setPluginRatio,
                        r = e.CSSPropTween;
                    e._registerComplexSpecialProp("bezier", {
                        parser: function(t, e, s, o, a, l) {
                            e instanceof Array && (e = {
                                values: e
                            }), l = new p;
                            var u, c, h, f = e.values,
                                d = f.length - 1,
                                m = [],
                                g = {};
                            if (0 > d) return a;
                            for (u = 0; d >= u; u++) h = i(t, f[u], o, a, l, d !== u), m[u] = h.end;
                            for (c in e) g[c] = e[c];
                            return g.values = m, (a = new r(t, "bezier", 0, 0, h.pt, 2)).data = h, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (u = !0 === g.autoRotate ? 0 : Number(g.autoRotate), g.autoRotate = null != h.end.left ? [
                                ["left", "top", "rotation", u, !1]
                            ] : null != h.end.x && [
                                ["x", "y", "rotation", u, !1]
                            ]), g.autoRotate && (o._transform || o._enableTransforms(!1), h.autoRotate = o._target._gsTransform, h.proxy.rotation = h.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(h.proxy, g, o._tween), a
                        }
                    })
                }
            }, m._mod = function(t) {
                for (var e, i = this._overwriteProps, n = i.length; --n > -1;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
            }, m._kill = function(t) {
                var e, i, n = this._props;
                for (e in this._beziers)
                    if (e in t)
                        for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                if (n = this._autoRotate)
                    for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
                return this._super._kill.call(this, t)
            }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, r, s, o = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    u = o.prototype = new t("css");
                u.constructor = o, o.version = "1.20.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, u = "px", o.suffixMap = {
                    top: u,
                    right: u,
                    bottom: u,
                    left: u,
                    width: u,
                    height: u,
                    fontSize: u,
                    padding: u,
                    margin: u,
                    perspective: u,
                    lineHeight: ""
                };
                var c, h, f, d, p, m, g, v, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    T = /opacity *= *([^)]*)/i,
                    S = /opacity:([^;]*)/i,
                    C = /alpha\(opacity *=.+?\)/i,
                    k = /^(rgb|hsl)/,
                    E = /([A-Z])/g,
                    P = /-([a-z])/gi,
                    A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    D = function(t, e) {
                        return e.toUpperCase()
                    },
                    O = /(?:Left|Right|Width)/i,
                    M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    I = /,(?=[^\)]*(?:\(|$))/gi,
                    j = /[\s,\(]/i,
                    z = Math.PI / 180,
                    N = 180 / Math.PI,
                    R = {},
                    F = {
                        style: {}
                    },
                    q = _gsScope.document || {
                        createElement: function() {
                            return F
                        }
                    },
                    B = function(t, e) {
                        return q.createElementNS ? q.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : q.createElement(t)
                    },
                    H = B("div"),
                    $ = B("img"),
                    W = o._internals = {
                        _specialProps: l
                    },
                    X = (_gsScope.navigator || {}).userAgent || "",
                    U = function() {
                        var t = X.indexOf("Android"),
                            e = B("a");
                        return f = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === t || parseFloat(X.substr(t + 8, 2)) > 3), p = f && parseFloat(X.substr(X.indexOf("Version/") + 8, 2)) < 6, d = -1 !== X.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    Y = function(t) {
                        return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    V = function(t) {
                        _gsScope.console && console.log(t)
                    },
                    G = "",
                    Q = "",
                    Z = function(t, e) {
                        var i, n, r = (e = e || H).style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (G = "-" + (Q = 3 === n ? "ms" : i[n]).toLowerCase() + "-", Q + t) : null
                    },
                    J = q.defaultView ? q.defaultView.getComputedStyle : function() {},
                    K = o.getStyle = function(t, e, i, n, r) {
                        var s;
                        return U || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || J(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(E, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : Y(t)
                    },
                    tt = W.convertToPixels = function(t, i, n, r, s) {
                        if ("px" === r || !r && "lineHeight" !== i) return n;
                        if ("auto" === r || !n) return 0;
                        var a, l, u, c = O.test(i),
                            h = t,
                            f = H.style,
                            d = 0 > n,
                            p = 1 === n;
                        if (d && (n = -n), p && (n *= 100), "lineHeight" !== i || r)
                            if ("%" === r && -1 !== i.indexOf("border")) a = n / 100 * (c ? t.clientWidth : t.clientHeight);
                            else {
                                if (f.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;", "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                                else {
                                    if (h = t.parentNode || q.body, -1 !== K(h, "display").indexOf("flex") && (f.position = "absolute"), l = h._gsCache, u = e.ticker.frame, l && c && l.time === u) return l.width * n / 100;
                                    f[c ? "width" : "height"] = n + r
                                }
                                h.appendChild(H), a = parseFloat(H[c ? "offsetWidth" : "offsetHeight"]), h.removeChild(H), c && "%" === r && !1 !== o.cacheWidths && ((l = h._gsCache = h._gsCache || {}).time = u, l.width = a / n * 100), 0 !== a || s || (a = tt(t, i, n, r, !0))
                            }
                        else l = J(t).lineHeight, t.style.lineHeight = n, a = parseFloat(J(t).lineHeight), t.style.lineHeight = l;
                        return p && (a /= 100), d ? -a : a
                    },
                    et = W.calculateOffset = function(t, e, i) {
                        if ("absolute" !== K(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = K(t, "margin" + n, i);
                        return t["offset" + n] - (tt(t, e, parseFloat(r), r.replace(w, "")) || 0)
                    },
                    it = function(t, e) {
                        var i, n, r, s = {};
                        if (e = e || J(t, null))
                            if (i = e.length)
                                for (; --i > -1;)(-1 === (r = e[i]).indexOf("-transform") || At === r) && (s[r.replace(P, D)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Pt === i) && (s[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(P, D)] = e[i]);
                        return U || (s.opacity = Y(t)), n = Ht(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Ot && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                    },
                    nt = function(t, e, i, n, r) {
                        var s, o, a, l = {},
                            u = t.style;
                        for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(x, "") ? s : 0 : et(t, o), void 0 !== u[o] && (a = new yt(u, o, u[o], a)));
                        if (n)
                            for (o in n) "className" !== o && (l[o] = n[o]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    rt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    st = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ot = function(t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (i || J(t))[e] || 0;
                        if (t.getCTM && Ft(t)) return t.getBBox()[e] || 0;
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = rt[e],
                            s = r.length;
                        for (i = i || J(t, null); --s > -1;) n -= parseFloat(K(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(K(t, "border" + r[s] + "Width", i, !0)) || 0;
                        return n
                    },
                    at = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i, n = t.split(" "),
                            r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                            s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                        if (n.length > 3 && !e) {
                            for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(at(n[i]));
                            return t.join(",")
                        }
                        return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + s + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(x, "")), e.oy = parseFloat(s.replace(x, "")), e.v = t), e || t
                    },
                    lt = function(t, e) {
                        return "function" == typeof t && (t = t(v, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    },
                    ut = function(t, e) {
                        return "function" == typeof t && (t = t(v, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    },
                    ct = function(t, e, i, n) {
                        var r, s, o, a, l;
                        return "function" == typeof t && (t = t(v, g)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), o = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : N) - (l ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && ((o %= r) !== o % 180 && (o = 0 > o ? o + r : o - r)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), 1e-6 > a && a > -1e-6 && (a = 0), a
                    },
                    ht = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ft = function(t, e, i) {
                        return 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    dt = o.parseColor = function(t, e) {
                        var i, n, r, s, o, a, l, u, c, h, f;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ht[t]) i = ht[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = f = t.match(y), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(_)
                                    } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (r = .5 >= l ? l * (a + 1) : l + a - l * a), i.length > 3 && (i[3] = Number(t[3])), i[0] = ft(o + 1 / 3, n, r), i[1] = ft(o, n, r), i[2] = ft(o - 1 / 3, n, r);
                                else i = t.match(y) || ht.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = ht.black;
                        return e && !f && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, l = ((u = Math.max(n, r, s)) + (c = Math.min(n, r, s))) / 2, u === c ? o = a = 0 : (h = u - c, a = l > .5 ? h / (2 - u - c) : h / (u + c), o = u === n ? (r - s) / h + (s > r ? 6 : 0) : u === r ? (s - n) / h + 2 : (n - r) / h + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    pt = function(t, e) {
                        var i, n, r, s = t.match(mt) || [],
                            o = 0,
                            a = "";
                        if (!s.length) return t;
                        for (i = 0; i < s.length; i++) n = s[i], o += (r = t.substr(o, t.indexOf(n, o) - o)).length + n.length, 3 === (n = dt(n, e)).length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return a + t.substr(o)
                    },
                    mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (u in ht) mt += "|" + u + "\\b";
                mt = new RegExp(mt + ")", "gi"), o.colorStringFilter = function(t) {
                    var e, i = t[0] + " " + t[1];
                    mt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = pt(t[0], e), t[1] = pt(t[1], e)), mt.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
                var gt = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, s = e ? (t.match(mt) || [""])[0] : "",
                            o = t.split(s).join("").match(b) || [],
                            a = t.substr(0, t.indexOf(o[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            u = -1 !== t.indexOf(" ") ? " " : ",",
                            c = o.length,
                            h = c > 0 ? o[0].replace(y, "") : "";
                        return c ? r = e ? function(t) {
                            var e, f, d, p;
                            if ("number" == typeof t) t += h;
                            else if (n && I.test(t)) {
                                for (p = t.replace(I, "|").split("|"), d = 0; d < p.length; d++) p[d] = r(p[d]);
                                return p.join(",")
                            }
                            if (e = (t.match(mt) || [s])[0], d = (f = t.split(e).join("").match(b) || []).length, c > d--)
                                for (; ++d < c;) f[d] = i ? f[(d - 1) / 2 | 0] : o[d];
                            return a + f.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, s, f;
                            if ("number" == typeof t) t += h;
                            else if (n && I.test(t)) {
                                for (s = t.replace(I, "|").split("|"), f = 0; f < s.length; f++) s[f] = r(s[f]);
                                return s.join(",")
                            }
                            if (f = (e = t.match(b) || []).length, c > f--)
                                for (; ++f < c;) e[f] = i ? e[(f - 1) / 2 | 0] : o[f];
                            return a + e.join(u) + l
                        } : function(t) {
                            return t
                        }
                    },
                    vt = function(t) {
                        return t = t.split(","),
                            function(e, i, n, r, s, o, a) {
                                var l, u = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                                return r.parse(e, a, s, o)
                            }
                    },
                    yt = (W._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT; l;) e = a[l.v], l.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                        if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                            for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                                if ((i = l.t).type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i[s] = r
                                    }
                                } else i[s] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function(t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    _t = (W._parseToProxy = function(t, e, i, n, r, s) {
                        var o, a, l, u, c, h = n,
                            f = {},
                            d = {},
                            p = i._transform,
                            m = R;
                        for (i._transform = null, R = e, n = c = i.parse(t, e, n, r), R = m, s && (i._transform = p, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                            if (n.type <= 1 && (d[a = n.p] = n.s + n.c, f[a] = n.s, s || (u = new yt(n, "s", a, u, n.r), n.c = 0), 1 === n.type))
                                for (o = n.l; --o > 0;) l = "xn" + o, d[a = n.p + "_" + l] = n.data[l], f[a] = n[l], s || (u = new yt(n, l, a, u, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: f,
                            end: d,
                            firstMPT: u,
                            pt: c
                        }
                    }, W.CSSPropTween = function(t, e, n, r, o, a, l, u, c, h, f) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof _t || s.push(this.n), this.r = u, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === f ? n + r : f, o && (this._next = o, o._prev = this)
                    }),
                    bt = function(t, e, i, n, r, s) {
                        var o = new _t(t, e, i, n - i, r, -1, s);
                        return o.b = i, o.e = o.xs0 = n, o
                    },
                    xt = o.parseComplex = function(t, e, i, n, r, s, a, l, u, h) {
                        i = i || s || "", "function" == typeof n && (n = n(v, g)), a = new _t(t, e, 0, 0, a, h ? 2 : 1, null, !1, l, i, n), n += "", r && mt.test(n + i) && (n = [i, n], o.colorStringFilter(n), i = n[0], n = n[1]);
                        var f, d, p, m, b, x, w, T, S, C, k, E, P, A = i.split(", ").join(",").split(" "),
                            D = n.split(", ").join(",").split(" "),
                            O = A.length,
                            M = !1 !== c;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (A = A.join(" ").replace(I, ", ").split(" "), D = D.join(" ").replace(I, ", ").split(" "), O = A.length), O !== D.length && (O = (A = (s || "").split(" ")).length), a.plugin = u, a.setRatio = h, mt.lastIndex = 0, f = 0; O > f; f++)
                            if (m = A[f], b = D[f], (T = parseFloat(m)) || 0 === T) a.appendXtra("", T, lt(b, T), b.replace(_, ""), M && -1 !== b.indexOf("px"), !0);
                            else if (r && mt.test(m)) E = ")" + ((E = b.indexOf(")") + 1) ? b.substr(E) : ""), P = -1 !== b.indexOf("hsl") && U, C = b, m = dt(m, P), b = dt(b, P), (S = m.length + b.length > 6) && !U && 0 === b[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(D[f]).join("transparent")) : (U || (S = !1), P ? a.appendXtra(C.substr(0, C.indexOf("hsl")) + (S ? "hsla(" : "hsl("), m[0], lt(b[0], m[0]), ",", !1, !0).appendXtra("", m[1], lt(b[1], m[1]), "%,", !1).appendXtra("", m[2], lt(b[2], m[2]), S ? "%," : "%" + E, !1) : a.appendXtra(C.substr(0, C.indexOf("rgb")) + (S ? "rgba(" : "rgb("), m[0], b[0] - m[0], ",", !0, !0).appendXtra("", m[1], b[1] - m[1], ",", !0).appendXtra("", m[2], b[2] - m[2], S ? "," : E, !0), S && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (b.length < 4 ? 1 : b[3]) - m, E, !1))), mt.lastIndex = 0;
                        else if (x = m.match(y)) {
                            if (!(w = b.match(_)) || w.length !== x.length) return a;
                            for (p = 0, d = 0; d < x.length; d++) k = x[d], C = m.indexOf(k, p), a.appendXtra(m.substr(p, C - p), Number(k), lt(w[d], k), "", M && "px" === m.substr(C + k.length, 2), 0 === d), p = C + k.length;
                            a["xs" + a.l] += m.substr(p)
                        } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + b : b;
                        if (-1 !== n.indexOf("=") && a.data) {
                            for (E = a.xs0 + a.data.s, f = 1; f < a.l; f++) E += a["xs" + f] + a.data["xn" + f];
                            a.e = E + a["xs" + f]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    wt = 9;
                for ((u = _t.prototype).l = u.pr = 0; --wt > 0;) u["xn" + wt] = 0, u["xs" + wt] = "";
                u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, i, n, r, s) {
                    var o = this,
                        a = o.l;
                    return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new _t(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                        s: e + i
                    }, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
                };
                var Tt = function(t, e) {
                        e = e || {}, this.p = e.prefix && Z(t) || t, l[t] = l[this.p] = this, this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    St = W._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r = t.split(","),
                            s = e.defaultValue;
                        for (i = i || [s], n = 0; n < r.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, new Tt(r[n], e)
                    },
                    Ct = W._registerPluginProp = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            St(t, {
                                parser: function(t, i, n, r, s, o, u) {
                                    var c = a.com.greensock.plugins[e];
                                    return c ? (c._cssRegister(), l[n].parse(t, i, n, r, s, o, u)) : (V("Error: " + e + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                (u = Tt.prototype).parseComplex = function(t, e, i, n, r, s) {
                    var o, a, l, u, c, h, f = this.keyword;
                    if (this.multi && (I.test(i) || I.test(e) ? (a = e.replace(I, "|").split("|"), l = i.replace(I, "|").split("|")) : f && (a = [e], l = [i])), l) {
                        for (u = l.length > a.length ? l.length : a.length, o = 0; u > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, f && ((c = e.indexOf(f)) !== (h = i.indexOf(f)) && (-1 === h ? a[o] = a[o].split(f).join("") : -1 === c && (a[o] += " " + f)));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return xt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                }, u.parse = function(t, e, i, n, s, o, a) {
                    return this.parseComplex(t.style, this.format(K(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
                }, o.registerSpecialProp = function(t, e, i) {
                    St(t, {
                        parser: function(t, n, r, s, o, a, l) {
                            var u = new _t(t, r, 0, 0, o, 2, r, !1, i);
                            return u.plugin = a, u.setRatio = e(t, n, s._tween, r), u
                        },
                        priority: i
                    })
                }, o.useSVGTransformAttr = !0;
                var kt, Et = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Pt = Z("transform"),
                    At = G + "transform",
                    Dt = Z("transformOrigin"),
                    Ot = null !== Z("perspective"),
                    Mt = W.Transform = function() {
                        this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(!1 === o.defaultForce3D || !Ot) && (o.defaultForce3D || "auto")
                    },
                    Lt = _gsScope.SVGElement,
                    It = function(t, e, i) {
                        var n, r = q.createElementNS("http://www.w3.org/2000/svg", t),
                            s = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r
                    },
                    jt = q.documentElement || {},
                    zt = function() {
                        var t, e, i, n = m || /Android/i.test(X) && !_gsScope.chrome;
                        return q.createElementNS && !n && (t = It("svg", jt), i = (e = It("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        })).getBoundingClientRect().width, e.style[Dt] = "50% 50%", e.style[Pt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(d && Ot), jt.removeChild(t)), n
                    }(),
                    Nt = function(t, e, i, n, r, s) {
                        var a, l, u, c, h, f, d, p, m, g, v, y, _, b, x = t._gsTransform,
                            w = Bt(t, !0);
                        x && (_ = x.xOrigin, b = x.yOrigin), (!n || (a = n.split(" ")).length < 2) && (0 === (d = t.getBBox()).x && 0 === d.y && d.width + d.height === 0 && (d = {
                            x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                            y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), a = [(-1 !== (e = at(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), i.xOrigin = c = parseFloat(a[0]), i.yOrigin = h = parseFloat(a[1]), n && w !== qt && (f = w[0], d = w[1], p = w[2], m = w[3], g = w[4], v = w[5], (y = f * m - d * p) && (l = c * (m / y) + h * (-p / y) + (p * v - m * g) / y, u = c * (-d / y) + h * (f / y) - (f * v - d * g) / y, c = i.xOrigin = a[0] = l, h = i.yOrigin = a[1] = u)), x && (s && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), r || !1 !== r && !1 !== o.defaultSmoothOrigin ? (l = c - _, u = h - b, x.xOffset += l * w[0] + u * w[2] - l, x.yOffset += l * w[1] + u * w[3] - u) : x.xOffset = x.yOffset = 0), s || t.setAttribute("data-svg-origin", a.join(" "))
                    },
                    Rt = function(t) {
                        var e, i = B("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            n = this.parentNode,
                            r = this.nextSibling,
                            s = this.style.cssText;
                        if (jt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                            e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Rt
                        } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                        return r ? n.insertBefore(this, r) : n.appendChild(this), jt.removeChild(i), this.style.cssText = s, e
                    },
                    Ft = function(t) {
                        return !(!(Lt && t.getCTM && function(t) {
                            try {
                                return t.getBBox()
                            } catch (e) {
                                return Rt.call(t, !0)
                            }
                        }(t)) || t.parentNode && !t.ownerSVGElement)
                    },
                    qt = [1, 0, 0, 1, 0, 0],
                    Bt = function(t, e) {
                        var i, n, r, s, o, a, l = t._gsTransform || new Mt,
                            u = t.style;
                        if (Pt ? n = K(t, At, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(M)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Pt || !(a = "none" === J(t).display) && t.parentNode || (a && (s = u.display, u.display = "block"), t.parentNode || (o = 1, jt.appendChild(t)), i = !(n = K(t, At, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? u.display = s : a && Ut(u, "display"), o && jt.removeChild(t)), (l.svg || t.getCTM && Ft(t)) && (i && -1 !== (u[Pt] + "").indexOf("matrix") && (n = u[Pt], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return qt;
                        for (r = (n || "").match(y) || [], wt = r.length; --wt > -1;) s = Number(r[wt]), r[wt] = (o = s - (s |= 0)) ? (1e5 * o + (0 > o ? -.5 : .5) | 0) / 1e5 + s : s;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    Ht = W.getTransform = function(t, i, n, r) {
                        if (t._gsTransform && n && !r) return t._gsTransform;
                        var s, a, l, u, c, h, f = n && t._gsTransform || new Mt,
                            d = f.scaleX < 0,
                            p = 2e-5,
                            m = 1e5,
                            g = Ot && (parseFloat(K(t, Dt, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin) || 0,
                            v = parseFloat(o.defaultTransformPerspective) || 0;
                        if (f.svg = !(!t.getCTM || !Ft(t)), f.svg && (Nt(t, K(t, Dt, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), kt = o.useSVGTransformAttr || zt), (s = Bt(t)) !== qt) {
                            if (16 === s.length) {
                                var y, _, b, x, w, T = s[0],
                                    S = s[1],
                                    C = s[2],
                                    k = s[3],
                                    E = s[4],
                                    P = s[5],
                                    A = s[6],
                                    D = s[7],
                                    O = s[8],
                                    M = s[9],
                                    L = s[10],
                                    I = s[12],
                                    j = s[13],
                                    z = s[14],
                                    R = s[11],
                                    F = Math.atan2(A, L);
                                f.zOrigin && (I = O * (z = -f.zOrigin) - s[12], j = M * z - s[13], z = L * z + f.zOrigin - s[14]), f.rotationX = F * N, F && (y = E * (x = Math.cos(-F)) + O * (w = Math.sin(-F)), _ = P * x + M * w, b = A * x + L * w, O = E * -w + O * x, M = P * -w + M * x, L = A * -w + L * x, R = D * -w + R * x, E = y, P = _, A = b), F = Math.atan2(-C, L), f.rotationY = F * N, F && (_ = S * (x = Math.cos(-F)) - M * (w = Math.sin(-F)), b = C * x - L * w, M = S * w + M * x, L = C * w + L * x, R = k * w + R * x, T = y = T * x - O * w, S = _, C = b), F = Math.atan2(S, T), f.rotation = F * N, F && (y = T * (x = Math.cos(F)) + S * (w = Math.sin(F)), _ = E * x + P * w, b = O * x + M * w, S = S * x - T * w, P = P * x - E * w, M = M * x - O * w, T = y, E = _, O = b), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), F = Math.atan2(E, P), f.scaleX = (Math.sqrt(T * T + S * S + C * C) * m + .5 | 0) / m, f.scaleY = (Math.sqrt(P * P + A * A) * m + .5 | 0) / m, f.scaleZ = (Math.sqrt(O * O + M * M + L * L) * m + .5 | 0) / m, T /= f.scaleX, E /= f.scaleY, S /= f.scaleX, P /= f.scaleY, Math.abs(F) > p ? (f.skewX = F * N, E = 0, "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(F))) : f.skewX = 0, f.perspective = R ? 1 / (0 > R ? -R : R) : 0, f.x = I, f.y = j, f.z = z, f.svg && (f.x -= f.xOrigin - (f.xOrigin * T - f.yOrigin * E), f.y -= f.yOrigin - (f.yOrigin * S - f.xOrigin * P))
                            } else if (!Ot || r || !s.length || f.x !== s[4] || f.y !== s[5] || !f.rotationX && !f.rotationY) {
                                var q = s.length >= 6,
                                    B = q ? s[0] : 1,
                                    H = s[1] || 0,
                                    $ = s[2] || 0,
                                    W = q ? s[3] : 1;
                                f.x = s[4] || 0, f.y = s[5] || 0, l = Math.sqrt(B * B + H * H), u = Math.sqrt(W * W + $ * $), c = B || H ? Math.atan2(H, B) * N : f.rotation || 0, h = $ || W ? Math.atan2($, W) * N + c : f.skewX || 0, f.scaleX = l, f.scaleY = u, f.rotation = c, f.skewX = h, Ot && (f.rotationX = f.rotationY = f.z = 0, f.perspective = v, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * B + f.yOrigin * $), f.y -= f.yOrigin - (f.xOrigin * H + f.yOrigin * W))
                            }
                            for (a in Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (d ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180)), f.zOrigin = g, f) f[a] < p && f[a] > -p && (f[a] = 0)
                        }
                        return n && (t._gsTransform = f, f.svg && (kt && t.style[Pt] ? e.delayedCall(.001, function() {
                            Ut(t.style, Pt)
                        }) : !kt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), f
                    },
                    $t = function(t) {
                        var e, i, n = this.data,
                            r = -n.rotation * z,
                            s = r + n.skewX * z,
                            o = 1e5,
                            a = (Math.cos(r) * n.scaleX * o | 0) / o,
                            l = (Math.sin(r) * n.scaleX * o | 0) / o,
                            u = (Math.sin(s) * -n.scaleY * o | 0) / o,
                            c = (Math.cos(s) * n.scaleY * o | 0) / o,
                            h = this.t.style,
                            f = this.t.currentStyle;
                        if (f) {
                            i = l, l = -u, u = -i, e = f.filter, h.filter = "";
                            var d, p, g = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                y = "absolute" !== f.position,
                                _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                                b = n.x + g * n.xPercent / 100,
                                x = n.y + v * n.yPercent / 100;
                            if (null != n.ox && (b += (d = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2) - (d * a + (p = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2) * l), x += p - (d * u + p * c)), y ? _ += ", Dx=" + ((d = g / 2) - (d * a + (p = v / 2) * l) + b) + ", Dy=" + (p - (d * u + p * c) + x) + ")" : _ += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = e.replace(L, _) : h.filter = _ + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === c && (y && -1 === _.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")), !y) {
                                var S, C, k, E = 8 > m ? 1 : -1;
                                for (d = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + b), n.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > u ? -u : u) * g)) / 2 + x), wt = 0; 4 > wt; wt++) k = (i = -1 !== (S = f[C = st[wt]]).indexOf("px") ? parseFloat(S) : tt(this.t, C, parseFloat(S), S.replace(w, "")) || 0) !== n[C] ? 2 > wt ? -n.ieOffsetX : -n.ieOffsetY : 2 > wt ? d - n.ieOffsetX : p - n.ieOffsetY, h[C] = (n[C] = Math.round(i - k * (0 === wt || 2 === wt ? 1 : E))) + "px"
                            }
                        }
                    },
                    Wt = W.set3DTransformRatio = W.setTransformRatio = function(t) {
                        var e, i, n, r, s, o, a, l, u, c, h, f, p, m, g, v, y, _, b, x, w, T, S, C = this.data,
                            k = this.t.style,
                            E = C.rotation,
                            P = C.rotationX,
                            A = C.rotationY,
                            D = C.scaleX,
                            O = C.scaleY,
                            M = C.scaleZ,
                            L = C.x,
                            I = C.y,
                            j = C.z,
                            N = C.svg,
                            R = C.perspective,
                            F = C.force3D,
                            q = C.skewY,
                            B = C.skewX;
                        if (q && (B += q, E += q), !((1 !== t && 0 !== t || "auto" !== F || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && F || j || R || A || P || 1 !== M) || kt && N || !Ot) E || B || N ? (E *= z, T = B * z, S = 1e5, i = Math.cos(E) * D, s = Math.sin(E) * D, n = Math.sin(E - T) * -O, o = Math.cos(E - T) * O, T && "simple" === C.skewType && (e = Math.tan(T - q * z), n *= e = Math.sqrt(1 + e * e), o *= e, q && (e = Math.tan(q * z), i *= e = Math.sqrt(1 + e * e), s *= e)), N && (L += C.xOrigin - (C.xOrigin * i + C.yOrigin * n) + C.xOffset, I += C.yOrigin - (C.xOrigin * s + C.yOrigin * o) + C.yOffset, kt && (C.xPercent || C.yPercent) && (g = this.t.getBBox(), L += .01 * C.xPercent * g.width, I += .01 * C.yPercent * g.height), (g = 1e-6) > L && L > -g && (L = 0), g > I && I > -g && (I = 0)), b = (i * S | 0) / S + "," + (s * S | 0) / S + "," + (n * S | 0) / S + "," + (o * S | 0) / S + "," + L + "," + I + ")", N && kt ? this.t.setAttribute("transform", "matrix(" + b) : k[Pt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + b) : k[Pt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + D + ",0,0," + O + "," + L + "," + I + ")";
                        else {
                            if (d && ((g = 1e-4) > D && D > -g && (D = M = 2e-5), g > O && O > -g && (O = M = 2e-5), !R || C.z || C.rotationX || C.rotationY || (R = 0)), E || B) E *= z, v = i = Math.cos(E), y = s = Math.sin(E), B && (E -= B * z, v = Math.cos(E), y = Math.sin(E), "simple" === C.skewType && (e = Math.tan((B - q) * z), v *= e = Math.sqrt(1 + e * e), y *= e, C.skewY && (e = Math.tan(q * z), i *= e = Math.sqrt(1 + e * e), s *= e))), n = -y, o = v;
                            else {
                                if (!(A || P || 1 !== M || R || N)) return void(k[Pt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + L + "px," + I + "px," + j + "px)" + (1 !== D || 1 !== O ? " scale(" + D + "," + O + ")" : ""));
                                i = o = 1, n = s = 0
                            }
                            c = 1, r = a = l = u = h = f = 0, p = R ? -1 / R : 0, m = C.zOrigin, g = 1e-6, x = ",", w = "0", (E = A * z) && (v = Math.cos(E), l = -(y = Math.sin(E)), h = p * -y, r = i * y, a = s * y, c = v, p *= v, i *= v, s *= v), (E = P * z) && (e = n * (v = Math.cos(E)) + r * (y = Math.sin(E)), _ = o * v + a * y, u = c * y, f = p * y, r = n * -y + r * v, a = o * -y + a * v, c *= v, p *= v, n = e, o = _), 1 !== M && (r *= M, a *= M, c *= M, p *= M), 1 !== O && (n *= O, o *= O, u *= O, f *= O), 1 !== D && (i *= D, s *= D, l *= D, h *= D), (m || N) && (m && (L += r * -m, I += a * -m, j += c * -m + m), N && (L += C.xOrigin - (C.xOrigin * i + C.yOrigin * n) + C.xOffset, I += C.yOrigin - (C.xOrigin * s + C.yOrigin * o) + C.yOffset), g > L && L > -g && (L = w), g > I && I > -g && (I = w), g > j && j > -g && (j = 0)), b = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(", b += (g > i && i > -g ? w : i) + x + (g > s && s > -g ? w : s) + x + (g > l && l > -g ? w : l), b += x + (g > h && h > -g ? w : h) + x + (g > n && n > -g ? w : n) + x + (g > o && o > -g ? w : o), P || A || 1 !== M ? (b += x + (g > u && u > -g ? w : u) + x + (g > f && f > -g ? w : f) + x + (g > r && r > -g ? w : r), b += x + (g > a && a > -g ? w : a) + x + (g > c && c > -g ? w : c) + x + (g > p && p > -g ? w : p) + x) : b += ",0,0,0,0,1,0,", b += L + x + I + x + j + x + (R ? 1 + -j / R : 1) + ")", k[Pt] = b
                        }
                    };
                (u = Mt.prototype).x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, s, a, l) {
                        if (n._lastParsedTransform === l) return s;
                        n._lastParsedTransform = l;
                        var u, c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                        "function" == typeof l[i] && (u = l[i], l[i] = e), c && (l.scale = c(v, t));
                        var h, f, d, p, m, y, _, b, x, w = t._gsTransform,
                            T = t.style,
                            S = Et.length,
                            C = l,
                            k = {},
                            E = "transformOrigin",
                            P = Ht(t, r, !0, C.parseTransform),
                            A = C.transform && ("function" == typeof C.transform ? C.transform(v, g) : C.transform);
                        if (P.skewType = C.skewType || P.skewType || o.defaultSkewType, n._transform = P, A && "string" == typeof A && Pt)(f = H.style)[Pt] = A, f.display = "block", f.position = "absolute", q.body.appendChild(H), h = Ht(H, null, !1), "simple" === P.skewType && (h.scaleY *= Math.cos(h.skewX * z)), P.svg && (y = P.xOrigin, _ = P.yOrigin, h.x -= P.xOffset, h.y -= P.yOffset, (C.transformOrigin || C.svgOrigin) && (A = {}, Nt(t, at(C.transformOrigin), A, C.svgOrigin, C.smoothOrigin, !0), y = A.xOrigin, _ = A.yOrigin, h.x -= A.xOffset - P.xOffset, h.y -= A.yOffset - P.yOffset), (y || _) && (b = Bt(H, !0), h.x -= y - (y * b[0] + _ * b[2]), h.y -= _ - (y * b[1] + _ * b[3]))), q.body.removeChild(H), h.perspective || (h.perspective = P.perspective), null != C.xPercent && (h.xPercent = ut(C.xPercent, P.xPercent)), null != C.yPercent && (h.yPercent = ut(C.yPercent, P.yPercent));
                        else if ("object" == typeof C) {
                            if (h = {
                                    scaleX: ut(null != C.scaleX ? C.scaleX : C.scale, P.scaleX),
                                    scaleY: ut(null != C.scaleY ? C.scaleY : C.scale, P.scaleY),
                                    scaleZ: ut(C.scaleZ, P.scaleZ),
                                    x: ut(C.x, P.x),
                                    y: ut(C.y, P.y),
                                    z: ut(C.z, P.z),
                                    xPercent: ut(C.xPercent, P.xPercent),
                                    yPercent: ut(C.yPercent, P.yPercent),
                                    perspective: ut(C.transformPerspective, P.perspective)
                                }, null != (m = C.directionalRotation))
                                if ("object" == typeof m)
                                    for (f in m) C[f] = m[f];
                                else C.rotation = m;
                            "string" == typeof C.x && -1 !== C.x.indexOf("%") && (h.x = 0, h.xPercent = ut(C.x, P.xPercent)), "string" == typeof C.y && -1 !== C.y.indexOf("%") && (h.y = 0, h.yPercent = ut(C.y, P.yPercent)), h.rotation = ct("rotation" in C ? C.rotation : "shortRotation" in C ? C.shortRotation + "_short" : "rotationZ" in C ? C.rotationZ : P.rotation, P.rotation, "rotation", k), Ot && (h.rotationX = ct("rotationX" in C ? C.rotationX : "shortRotationX" in C ? C.shortRotationX + "_short" : P.rotationX || 0, P.rotationX, "rotationX", k), h.rotationY = ct("rotationY" in C ? C.rotationY : "shortRotationY" in C ? C.shortRotationY + "_short" : P.rotationY || 0, P.rotationY, "rotationY", k)), h.skewX = ct(C.skewX, P.skewX), h.skewY = ct(C.skewY, P.skewY)
                        }
                        for (Ot && null != C.force3D && (P.force3D = C.force3D, p = !0), (d = P.force3D || P.z || P.rotationX || P.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == C.scale || (h.scaleZ = 1); --S > -1;)((A = h[x = Et[S]] - P[x]) > 1e-6 || -1e-6 > A || null != C[x] || null != R[x]) && (p = !0, s = new _t(P, x, P[x], A, s), x in k && (s.e = k[x]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                        return A = C.transformOrigin, P.svg && (A || C.svgOrigin) && (y = P.xOffset, _ = P.yOffset, Nt(t, at(A), h, C.svgOrigin, C.smoothOrigin), s = bt(P, "xOrigin", (w ? P : h).xOrigin, h.xOrigin, s, E), s = bt(P, "yOrigin", (w ? P : h).yOrigin, h.yOrigin, s, E), (y !== P.xOffset || _ !== P.yOffset) && (s = bt(P, "xOffset", w ? y : P.xOffset, P.xOffset, s, E), s = bt(P, "yOffset", w ? _ : P.yOffset, P.yOffset, s, E)), A = "0px 0px"), (A || Ot && d && P.zOrigin) && (Pt ? (p = !0, x = Dt, A = (A || K(t, x, r, !1, "50% 50%")) + "", (s = new _t(T, x, 0, 0, s, -1, E)).b = T[x], s.plugin = a, Ot ? (f = P.zOrigin, A = A.split(" "), P.zOrigin = (A.length > 2 && (0 === f || "0px" !== A[2]) ? parseFloat(A[2]) : f) || 0, s.xs0 = s.e = A[0] + " " + (A[1] || "50%") + " 0px", (s = new _t(P, "zOrigin", 0, 0, s, -1, s.n)).b = f, s.xs0 = s.e = P.zOrigin) : s.xs0 = s.e = A) : at(A + "", P)), p && (n._transformType = P.svg && kt || !d && 3 !== this._transformType ? 2 : 3), u && (l[i] = u), c && (l.scale = c), s
                    },
                    prefix: !0
                }), St("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), St("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, s, o, a) {
                        e = this.format(e);
                        var l, u, c, h, f, d, p, m, g, v, y, _, b, x, w, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            C = t.style;
                        for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < S.length; u++) this.p.indexOf("border") && (S[u] = Z(S[u])), -1 !== (f = h = K(t, S[u], r, !1, "0px")).indexOf(" ") && (h = f.split(" "), f = h[0], h = h[1]), d = c = l[u], p = parseFloat(f), _ = f.substr((p + "").length), (b = "=" === d.charAt(1)) ? (m = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), m *= parseFloat(d), y = d.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(d), y = d.substr((m + "").length)), "" === y && (y = n[i] || _), y !== _ && (x = tt(t, "borderLeft", p, _), w = tt(t, "borderTop", p, _), "%" === y ? (f = x / g * 100 + "%", h = w / v * 100 + "%") : "em" === y ? (f = x / (T = tt(t, "borderLeft", 1, "em")) + "em", h = w / T + "em") : (f = x + "px", h = w + "px"), b && (d = parseFloat(f) + m + y, c = parseFloat(h) + m + y)), o = xt(C, S[u], f + " " + h, d + " " + c, !1, "0px", o);
                        return o
                    },
                    prefix: !0,
                    formatter: gt("0px 0px 0px 0px", !1, !0)
                }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, s, o) {
                        return xt(t.style, i, this.format(K(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", s)
                    },
                    prefix: !0,
                    formatter: gt("0px 0px", !1, !0)
                }), St("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, s, o) {
                        var a, l, u, c, h, f, d = "background-position",
                            p = r || J(t, null),
                            g = this.format((p ? m ? p.getPropertyValue(d + "-x") + " " + p.getPropertyValue(d + "-y") : p.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && ((f = K(t, "backgroundImage").replace(A, "")) && "none" !== f)) {
                            for (a = g.split(" "), l = v.split(" "), $.setAttribute("src", f), u = 2; --u > -1;)(c = -1 !== (g = a[u]).indexOf("%")) !== (-1 !== l[u].indexOf("%")) && (h = 0 === u ? t.offsetWidth - $.width : t.offsetHeight - $.height, a[u] = c ? parseFloat(g) / 100 * h + "px" : parseFloat(g) / h * 100 + "%");
                            g = a.join(" ")
                        }
                        return this.parseComplex(t.style, g, v, s, o)
                    },
                    formatter: at
                }), St("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(t) {
                        return at(-1 === (t += "").indexOf(" ") ? t + " " + t : t)
                    }
                }), St("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), St("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), St("transformStyle", {
                    prefix: !0
                }), St("backfaceVisibility", {
                    prefix: !0
                }), St("userSelect", {
                    prefix: !0
                }), St("margin", {
                    parser: vt("marginTop,marginRight,marginBottom,marginLeft")
                }), St("padding", {
                    parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), St("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, s, o) {
                        var a, l, u;
                        return 9 > m ? (l = t.currentStyle, u = 8 > m ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(K(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
                    }
                }), St("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), St("autoRound,strictUnits", {
                    parser: function(t, e, i, n, r) {
                        return r
                    }
                }), St("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, s, o) {
                        var a = K(t, "borderTopWidth", r, !1, "0px"),
                            l = this.format(e).split(" "),
                            u = l[0].replace(w, "");
                        return "px" !== u && (a = parseFloat(a) / tt(t, "borderTopWidth", 1, u) + u), this.parseComplex(t.style, this.format(a + " " + K(t, "borderTopStyle", r, !1, "solid") + " " + K(t, "borderTopColor", r, !1, "#000")), l.join(" "), s, o)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0]
                    }
                }), St("borderWidth", {
                    parser: vt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), St("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, r, s) {
                        var o = t.style,
                            a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                        return new _t(o, a, 0, 0, r, -1, i, !1, 0, o[a], e)
                    }
                });
                var Xt = function(t) {
                    var e, i = this.t,
                        n = i.filter || K(this.data, "filter") || "",
                        r = this.s + this.c * t | 0;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !K(this.data, "filter")) : (i.filter = n.replace(C, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(T, "opacity=" + r))
                };
                St("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, s, o) {
                        var a = parseFloat(K(t, "opacity", r, !1, "1")),
                            l = t.style,
                            u = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === K(t, "visibility", r) && 0 !== e && (a = 0), U ? s = new _t(l, "opacity", a, e - a, s) : ((s = new _t(l, "opacity", 100 * a, 100 * (e - a), s)).xn1 = u ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = Xt), u && ((s = new _t(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                    }
                });
                var Ut = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(E, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Yt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ut(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                St("className", {
                    parser: function(t, e, n, s, o, a, l) {
                        var u, c, h, f, d, p = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if ((o = s._classNamePT = new _t(t, n, 0, 0, o, 2)).setRatio = Yt, o.pr = -11, i = !0, o.b = p, c = it(t, r), h = t._gsClassPT) {
                            for (f = {}, d = h.data; d;) f[d.p] = 1, d = d._next;
                            h.setRatio(1)
                        }
                        return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), u = nt(t, c, it(t), l, f), t.setAttribute("class", p), o.data = u.firstMPT, t.style.cssText = m, o.xfirst = s.parse(t, u.difs, o, a)
                    }
                });
                var Vt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, s, o = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) o.cssText = "", r = !0;
                        else
                            for (n = (e = this.e.split(" ").join("").split(",")).length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Dt : l[i].p), Ut(o, i);
                        r && (Ut(o, Pt), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (St("clearProps", {
                        parser: function(t, e, n, r, s) {
                            return (s = new _t(t, n, 0, 0, s, 2)).setRatio = Vt, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
                        }
                    }), u = "bezier,throwProps,physicsProps,physics2D".split(","), wt = u.length; wt--;) Ct(u[wt]);
                (u = o.prototype)._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(t, e, a, u) {
                    if (!t.nodeType) return !1;
                    this._target = g = t, this._tween = a, this._vars = e, v = u, c = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, r = J(t, ""), s = this._overwriteProps;
                    var d, m, y, _, b, x, w, T, C, k = t.style;
                    if (h && "" === k.zIndex && (("auto" === (d = K(t, "zIndex", r)) || "" === d) && this._addLazySet(k, "zIndex", 0)), "string" == typeof e && (_ = k.cssText, d = it(t, r), k.cssText = _ + ";" + e, d = nt(t, d, it(t)).difs, !U && S.test(e) && (d.opacity = parseFloat(RegExp.$1)), e = d, k.cssText = _), e.className ? this._firstPT = m = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = m = this.parse(t, e, null), this._transformType) {
                        for (C = 3 === this._transformType, Pt ? f && (h = !0, "" === k.zIndex && (("auto" === (w = K(t, "zIndex", r)) || "" === w) && this._addLazySet(k, "zIndex", 0)), p && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (C ? "visible" : "hidden"))) : k.zoom = 1, y = m; y && y._next;) y = y._next;
                        T = new _t(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, y), T.setRatio = Pt ? Wt : $t, T.data = this._transform || Ht(t, r, !0), T.tween = a, T.pr = -1, s.pop()
                    }
                    if (i) {
                        for (; m;) {
                            for (x = m._next, y = _; y && y.pr > m.pr;) y = y._next;
                            (m._prev = y ? y._prev : b) ? m._prev._next = m: _ = m, (m._next = y) ? y._prev = m : b = m, m = x
                        }
                        this._firstPT = _
                    }
                    return !0
                }, u.parse = function(t, e, i, s) {
                    var o, a, u, h, f, d, p, m, y, _, b = t.style;
                    for (o in e) {
                        if ("function" == typeof(d = e[o]) && (d = d(v, g)), a = l[o]) i = a.parse(t, d, o, this, i, s, e);
                        else {
                            if ("--" === o.substr(0, 2)) {
                                this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", J(t).getPropertyValue(o) + "", d + "", o, !1, o);
                                continue
                            }
                            f = K(t, o, r) + "", y = "string" == typeof d, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || y && k.test(d) ? (y || (d = ((d = dt(d)).length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), i = xt(b, o, f, d, !0, "transparent", i, 0, s)) : y && j.test(d) ? i = xt(b, o, f, d, !0, null, i, 0, s) : (p = (u = parseFloat(f)) || 0 === u ? f.substr((u + "").length) : "", ("" === f || "auto" === f) && ("width" === o || "height" === o ? (u = ot(t, o, r), p = "px") : "left" === o || "top" === o ? (u = et(t, o, r), p = "px") : (u = "opacity" !== o ? 0 : 1, p = "")), (_ = y && "=" === d.charAt(1)) ? (h = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), h *= parseFloat(d), m = d.replace(w, "")) : (h = parseFloat(d), m = y ? d.replace(w, "") : ""), "" === m && (m = o in n ? n[o] : p), d = h || 0 === h ? (_ ? h + u : h) + m : e[o], p !== m && ("" !== m || "lineHeight" === o) && (h || 0 === h) && u && (u = tt(t, o, u, p), "%" === m ? (u /= tt(t, o, 100, "%") / 100, !0 !== e.strictUnits && (f = u + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? u /= tt(t, o, 1, m) : "px" !== m && (h = tt(t, o, h, m), m = "px"), _ && (h || 0 === h) && (d = h + u + m)), _ && (h += u), !u && 0 !== u || !h && 0 !== h ? void 0 !== b[o] && (d || d + "" != "NaN" && null != d) ? (i = new _t(b, o, h || u || 0, 0, i, -1, o, !1, 0, f, d)).xs0 = "none" !== d || "display" !== o && -1 === o.indexOf("Style") ? d : f : V("invalid " + o + " tween value: " + e[o]) : (i = new _t(b, o, u, h - u, i, 0, o, !1 !== c && ("px" === m || "zIndex" === o), 0, f, d)).xs0 = m)
                        }
                        s && i && !i.plugin && (i.plugin = s)
                    }
                    return i
                }, u.setRatio = function(t) {
                    var e, i, n, r = this._firstPT;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, u._enableTransforms = function(t) {
                    this._transform = this._transform || Ht(this._target, r, !0), this._transformType = this._transform.svg && kt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Gt = function(t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                u._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new _t(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Gt, n.data = this
                }, u._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, u._mod = function(t) {
                    for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                }, u._kill = function(e) {
                    var i, n, r, s = e;
                    if (e.autoAlpha || e.alpha) {
                        for (n in s = {}, e) s[n] = e[n];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    for (e.className && (i = this._classNamePT) && ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
                    return t.prototype._kill.call(this, s)
                };
                var Qt = function(t, e, i) {
                    var n, r, s, o;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Qt(t[r], e, i);
                    else
                        for (r = (n = t.childNodes).length; --r > -1;) o = (s = n[r]).type, s.style && (e.push(it(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Qt(s, e, i)
                };
                return o.cascadeTo = function(t, i, n) {
                    var r, s, o, a, l = e.to(t, i, n),
                        u = [l],
                        c = [],
                        h = [],
                        f = [],
                        d = e._internals.reservedProps;
                    for (t = l._targets || l.target, Qt(t, c, f), l.render(i, !0, !0), Qt(t, h), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)
                        if ((s = nt(f[r], c[r], h[r])).firstMPT) {
                            for (o in s = s.difs, n) d[o] && (s[o] = n[o]);
                            for (o in a = {}, s) a[o] = c[r][o];
                            u.push(e.fromTo(f[r], i, a, s))
                        }
                    return u
                }, t.activate([o]), o
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.6.0",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function(t) {
                        for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                    },
                    i = t.prototype;
                i._onInitAllProps = function() {
                    for (var t, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), o = s.length, a = {}, l = r._propLookup.roundProps; --o > -1;) a[s[o]] = Math.round;
                    for (o = s.length; --o > -1;)
                        for (t = s[o], i = r._firstPT; i;) n = i._next, i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = l)), i = n;
                    return !1
                }, i._add = function(t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.1",
                init: function(t, e, i, n) {
                    var r, s;
                    if ("function" != typeof t.setAttribute) return !1;
                    for (r in e) "function" == typeof(s = e[r]) && (s = s(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
                    return !0
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(t, e, i, n) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var r, s, o, a, l, u, c = !0 === e.useRadians ? 2 * Math.PI : 360;
                    for (r in e) "useRadians" !== r && ("function" == typeof(a = e[r]) && (a = a(n, t)), s = (u = (a + "").split("_"))[0], o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), l = (a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - o, u.length && (-1 !== (s = u.join("_")).indexOf("short") && ((l %= c) !== l % (c / 2) && (l = 0 > l ? l + c : l - c)), -1 !== s.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== s.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > 1e-6 || -1e-6 > l) && (this._addTween(t, r, o, o + l, r), this._overwriteProps.push(r)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                    s = r.com.greensock,
                    o = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = s._class,
                    u = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    c = t.register || function() {},
                    h = function(t, e, i, n, r) {
                        var s = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return c(s, t), s
                    },
                    f = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    d = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    p = h("Back", d("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), d("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), d("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                    }, !0),
                    g = m.prototype = new t;
                return g.constructor = m, g.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, (g = (e = l("easing.SteppedEase", function(t, e) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
                }, !0)).prototype = new t).constructor = e, g.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
                }, g.config = e.config = function(t, i) {
                    return new e(t, i)
                }, i = l("easing.RoughEase", function(e) {
                    for (var i, n, r, s, o, a, l = (e = e || {}).taper || "none", u = [], c = 0, h = 0 | (e.points || 20), d = h, p = !1 !== e.randomize, m = !0 === e.clamp, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;) i = p ? Math.random() : 1 / h * d, n = g ? g.getRatio(i) : i, "none" === l ? r = v : "out" === l ? r = (s = 1 - i) * s * v : "in" === l ? r = i * i * v : .5 > i ? r = (s = 2 * i) * s * .5 * v : r = (s = 2 * (1 - i)) * s * .5 * v, p ? n += Math.random() * r - .5 * r : d % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), u[c++] = {
                        x: i,
                        y: n
                    };
                    for (u.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new f(1, 1, null), d = h; --d > -1;) o = u[d], a = new f(o.x, o.y, a);
                    this._prev = new f(0, 0, 0 !== a.t ? a : a.next)
                }, !0), (g = i.prototype = new t).constructor = i, g.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function(t) {
                    return new i(t)
                }, i.ease = new i, h("Bounce", u("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), u("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), u("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = 1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1) ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), h("Circ", u("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), u("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), u("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), h("Elastic", (n = function(e, i, n) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                        }, !0),
                        s = r.prototype = new t;
                    return s.constructor = r, s.getRatio = i, s.config = function(t, e) {
                        return new r(t, e)
                    }, r
                })("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                }, .3), n("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), h("Expo", u("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), u("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), u("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), h("Sine", u("SineOut", function(t) {
                    return Math.sin(t * a)
                }), u("SineIn", function(t) {
                    return 1 - Math.cos(t * a)
                }), u("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = {},
            n = t.document,
            r = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!r.TweenLite) {
            var s, o, a, l, u, c = function(t) {
                    var e, i = t.split("."),
                        n = r;
                    for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                    return n
                },
                h = c("com.greensock"),
                f = 1e-10,
                d = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                p = function() {},
                m = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                g = {},
                v = function(n, s, o, a) {
                    this.sc = g[n] ? g[n].sc : [], g[n] = this, this.gsClass = null, this.func = o;
                    var l = [];
                    this.check = function(u) {
                        for (var h, f, d, p, m = s.length, y = m; --m > -1;)(h = g[s[m]] || new v(s[m], [])).gsClass ? (l[m] = h.gsClass, y--) : u && h.sc.push(this);
                        if (0 === y && o) {
                            if (d = (f = ("com.greensock." + n).split(".")).pop(), p = c(f.join("."))[d] = this.gsClass = o.apply(o, l), a)
                                if (r[d] = i[d] = p, "undefined" != typeof module && module.exports)
                                    if (n === e)
                                        for (m in module.exports = i[e] = p, i) p[m] = i[m];
                                    else i[e] && (i[e][d] = p);
                            else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                return p
                            });
                            for (m = 0; m < this.sc.length; m++) this.sc[m].check()
                        }
                    }, this.check(!0)
                },
                y = t._gsDefine = function(t, e, i, n) {
                    return new v(t, e, i, n)
                },
                _ = h._class = function(t, e, i) {
                    return e = e || function() {}, y(t, [], function() {
                        return e
                    }, i), e
                };
            y.globals = r;
            var b = [0, 0, 1, 1],
                x = _("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? b.concat(e) : b
                }, !0),
                w = x.map = {},
                T = x.register = function(t, e, i, n) {
                    for (var r, s, o, a, l = e.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                        for (s = l[u], r = n ? _("easing." + s, null, !0) : h.easing[s] || {}, o = c.length; --o > -1;) a = c[o], w[s + "." + a] = w[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for ((a = x.prototype)._calcEnd = !1, a.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, o = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --o > -1;) a = s[o] + ",Power" + o, T(new x(null, null, 1, o), a, "easeOut", !0), T(new x(null, null, 2, o), a, "easeIn" + (0 === o ? ",easeNone" : "")), T(new x(null, null, 3, o), a, "easeInOut");
            w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
            var S = _("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            (a = S.prototype).addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var s, o, a = this._listeners[t],
                    c = 0;
                for (this !== l || u || l.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;)(s = a[o]).c === e && s.s === i ? a.splice(o, 1) : 0 === c && s.pr < r && (c = o + 1);
                a.splice(c, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                })
            }, a.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, a.dispatchEvent = function(t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for ((e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)(n = r[e]) && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var C = t.requestAnimationFrame,
                k = t.cancelAnimationFrame,
                E = Date.now || function() {
                    return (new Date).getTime()
                },
                P = E();
            for (o = (s = ["ms", "moz", "webkit", "o"]).length; --o > -1 && !C;) C = t[s[o] + "RequestAnimationFrame"], k = t[s[o] + "CancelAnimationFrame"] || t[s[o] + "CancelRequestAnimationFrame"];
            _("Ticker", function(t, e) {
                var i, r, s, o, a, c = this,
                    h = E(),
                    d = !(!1 === e || !C) && "auto",
                    m = 500,
                    g = 33,
                    v = function(t) {
                        var e, n, l = E() - P;
                        l > m && (h += l - g), P += l, c.time = (P - h) / 1e3, e = c.time - a, (!i || e > 0 || !0 === t) && (c.frame++, a += e + (e >= o ? .004 : o - e), n = !0), !0 !== t && (s = r(v)), n && c.dispatchEvent("tick")
                    };
                S.call(c), c.time = c.frame = 0, c.tick = function() {
                    v(!0)
                }, c.lagSmoothing = function(t, e) {
                    m = t || 1 / f, g = Math.min(e, m, 0)
                }, c.sleep = function() {
                    null != s && (d && k ? k(s) : clearTimeout(s), r = p, s = null, c === l && (u = !1))
                }, c.wake = function(t) {
                    null !== s ? c.sleep() : t ? h += -P + (P = E()) : c.frame > 10 && (P = E() - m + 5), r = 0 === i ? p : d && C ? C : function(t) {
                        return setTimeout(t, 1e3 * (a - c.time) + 1 | 0)
                    }, c === l && (u = !0), v(2)
                }, c.fps = function(t) {
                    return arguments.length ? (o = 1 / ((i = t) || 60), a = this.time + o, void c.wake()) : i
                }, c.useRAF = function(t) {
                    return arguments.length ? (c.sleep(), d = t, void c.fps(i)) : d
                }, c.fps(t), setTimeout(function() {
                    "auto" === d && c.frame < 5 && "hidden" !== n.visibilityState && c.useRAF(!1)
                }, 1500)
            }), (a = h.Ticker.prototype = new h.events.EventDispatcher).constructor = h.Ticker;
            var A = _("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, V) {
                    u || l.wake();
                    var i = this.vars.useFrames ? Y : V;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            l = A.ticker = new h.Ticker, (a = A.prototype)._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
            var D = function() {
                u && E() - P > 2e3 && "hidden" !== n.visibilityState && l.wake();
                var t = setTimeout(D, 2e3);
                t.unref && t.unref()
            };
            D(), a.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, a.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, a.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, a.seek = function(t, e) {
                return this.totalTime(Number(t), !1 !== e)
            }, a.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }, a.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, a.render = function(t, e, i) {}, a.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, a.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
            }, a._enabled = function(t, e) {
                return u || l.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, a._kill = function(t, e) {
                return this._enabled(!1, !1)
            }, a.kill = function(t, e) {
                return this._kill(t, e), this
            }, a._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, a._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, a._callback = function(t) {
                var e = this.vars,
                    i = e[t],
                    n = e[t + "Params"],
                    r = e[t + "Scope"] || e.callbackScope || this;
                switch (n ? n.length : 0) {
                    case 0:
                        i.call(r);
                        break;
                    case 1:
                        i.call(r, n[0]);
                        break;
                    case 2:
                        i.call(r, n[0], n[1]);
                        break;
                    default:
                        i.apply(r, n)
                }
            }, a.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, a.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, a.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, a.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, a.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, a.totalTime = function(t, e, i) {
                if (u || l.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (I.length && Q(), this.render(t, e, !1), I.length && Q())
                }
                return this
            }, a.progress = a.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, a.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, a.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, a.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || f, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, a.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, a.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (u || t || l.wake(), i = (e = n.rawTime()) - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var O = _("core.SimpleTimeline", function(t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (a = O.prototype = new A).constructor = O, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function(t, e, i, n) {
                var r, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (s = t._startTime; r && r._startTime > s;) r = r._prev;
                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
            }, a._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, a.render = function(t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, a.rawTime = function() {
                return u || l.wake(), this._totalTime
            };
            var M = _("TweenLite", function(e, i, n) {
                    if (A.call(this, i, n), this.render = M.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : M.selector(e) || e;
                    var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? U[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : U[l], (a || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
                        for (this._targets = o = d(e), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++)(s = o[r]) ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(d(s))) : (this._siblings[r] = Z(s, this, !1), 1 === l && this._siblings[r].length > 1 && K(s, this, null, 1, this._siblings[r])) : "string" == typeof(s = o[r--] = M.selector(s)) && o.splice(r + 1, 1) : o.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = Z(e, this, !1), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -f, this.render(Math.min(0, -this._delay)))
                }, !0),
                L = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                };
            (a = M.prototype = new A).constructor = M, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, M.version = "1.20.2", M.defaultEase = a._ease = new x(null, null, 1, 1), M.defaultOverwrite = "auto", M.ticker = l, M.autoSleep = 120, M.lagSmoothing = function(t, e) {
                l.lagSmoothing(t, e)
            }, M.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (M.selector = i, i(e)) : void 0 === n ? e : n.querySelectorAll ? n.querySelectorAll(e) : n.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var I = [],
                j = {},
                z = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                N = /[\+-]=-?[\.\d]/,
                R = function(t) {
                    for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : 1e-6 > e && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                F = function(t, e, i, n) {
                    var r, s, o, a, l, u, c, h = [],
                        f = 0,
                        d = "",
                        p = 0;
                    for (h.start = t, h.end = e, t = h[0] = t + "", e = h[1] = e + "", i && (i(h), t = h[0], e = h[1]), h.length = 0, r = t.match(z) || [], s = e.match(z) || [], n && (n._next = null, n.blob = 1, h._firstPT = h._applyPT = n), l = s.length, a = 0; l > a; a++) c = s[a], d += (u = e.substr(f, e.indexOf(c, f) - f)) || !a ? u : ",", f += u.length, p ? p = (p + 1) % 5 : "rgba(" === u.substr(-5) && (p = 1), c === r[a] || r.length <= a ? d += c : (d && (h.push(d), d = ""), o = parseFloat(r[a]), h.push(o), h._firstPT = {
                        _next: h._firstPT,
                        t: h,
                        p: h.length - 1,
                        s: o,
                        c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                        f: 0,
                        m: p && 4 > p ? Math.round : 0
                    }), f += c.length;
                    return (d += e.substr(f)) && h.push(d), h.setRatio = R, N.test(e) && (h.end = 0), h
                },
                q = function(t, e, i, n, r, s, o, a, l) {
                    "function" == typeof n && (n = n(l || 0, t));
                    var u = typeof t[e],
                        c = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        h = "get" !== i ? i : c ? o ? t[c](o) : t[c]() : t[e],
                        f = "string" == typeof n && "=" === n.charAt(1),
                        d = {
                            t: t,
                            p: e,
                            s: h,
                            f: "function" === u,
                            pg: 0,
                            n: r || e,
                            m: s ? "function" == typeof s ? s : Math.round : 0,
                            pr: 0,
                            c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - h || 0
                        };
                    return ("number" != typeof h || "number" != typeof n && !f) && (o || isNaN(h) || !f && isNaN(n) || "boolean" == typeof h || "boolean" == typeof n ? (d.fp = o, d = {
                        t: F(h, f ? parseFloat(d.s) + d.c : n, a || M.defaultStringFilter, d),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0,
                        m: 0
                    }) : (d.s = parseFloat(h), f || (d.c = parseFloat(n) - d.s || 0))), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d) : void 0
                },
                B = M._internals = {
                    isArray: m,
                    isSelector: L,
                    lazyTweens: I,
                    blobDif: F
                },
                H = M._plugins = {},
                $ = B.tweenLookup = {},
                W = 0,
                X = B.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1
                },
                U = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                Y = A._rootFramesTimeline = new O,
                V = A._rootTimeline = new O,
                G = 30,
                Q = B.lazyRender = function() {
                    var t, e = I.length;
                    for (j = {}; --e > -1;)(t = I[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    I.length = 0
                };
            V._startTime = l.time, Y._startTime = l.frame, V._active = Y._active = !0, setTimeout(Q, 1), A._updateRoot = M.render = function() {
                var t, e, i;
                if (I.length && Q(), V.render((l.time - V._startTime) * V._timeScale, !1, !1), Y.render((l.frame - Y._startTime) * Y._timeScale, !1, !1), I.length && Q(), l.frame >= G) {
                    for (i in G = l.frame + (parseInt(M.autoSleep, 10) || 120), $) {
                        for (t = (e = $[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete $[i]
                    }
                    if ((!(i = V._first) || i._paused) && M.autoSleep && !Y._first && 1 === l._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || l.sleep()
                    }
                }
            }, l.addEventListener("tick", A._updateRoot);
            var Z = function(t, e, i) {
                    var n, r, s = t._gsTweenID;
                    if ($[s || (t._gsTweenID = s = "t" + W++)] || ($[s] = {
                            target: t,
                            tweens: []
                        }), e && ((n = $[s].tweens)[r = n.length] = e, i))
                        for (; --r > -1;) n[r] === e && n.splice(r, 1);
                    return $[s].tweens
                },
                J = function(t, e, i, n) {
                    var r, s, o = t.vars.onOverwrite;
                    return o && (r = o(t, e, i, n)), (o = M.onOverwrite) && (s = o(t, e, i, n)), !1 !== r && !1 !== s
                },
                K = function(t, e, i, n, r) {
                    var s, o, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, s = 0; l > s; s++)
                            if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === n) break;
                        return o
                    }
                    var u, c = e._startTime + f,
                        h = [],
                        d = 0,
                        p = 0 === e._duration;
                    for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || tt(e, 0, p), 0 === tt(a, u, p) && (h[d++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((p || !a._initted) && c - a._startTime <= 2e-10 || (h[d++] = a)));
                    for (s = d; --s > -1;)
                        if (a = h[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !J(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        }
                    return o
                },
                tt = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                        if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return (s /= r) > e ? s - e : i && s === e || !t._initted && 2 * f > s - e ? f : (s += t.totalDuration() / t._timeScale / r) > e + f ? 0 : s - e - f
                };
            a._init = function() {
                var t, e, i, n, r, s, o = this.vars,
                    a = this._overwrittenProps,
                    l = this._duration,
                    u = !!o.immediateRender,
                    c = o.ease;
                if (o.startAt) {
                    for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}, o.startAt) r[n] = o.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = u && !1 !== o.lazy, r.startAt = r.delay = null, r.onUpdate = o.onUpdate, r.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = M.to(this.target, 0, r), u)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== l) return
                } else if (o.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        for (n in 0 !== this._time && (u = !1), i = {}, o) X[n] && "autoCSS" !== n || (i[n] = o[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = u && !1 !== o.lazy, i.immediateRender = u, this._startAt = M.to(this.target, 0, i), u) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = c = c ? c instanceof x ? c : "function" == typeof c ? new x(c, o.easeParams) : w[c] || M.defaultEase : M.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (s = this._targets.length, t = 0; s > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                if (e && M._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, a._initProps = function(e, i, n, r, s) {
                var o, a, l, u, c, h;
                if (null == e) return !1;
                for (o in j[e._gsTweenID] && Q(), this.vars.css || e.style && e !== t && e.nodeType && H.css && !1 !== this.vars.autoCSS && function(t, e) {
                        var i, n = {};
                        for (i in t) X[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!H[i] || H[i] && H[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                        t.css = n
                    }(this.vars, e), this.vars)
                    if (h = this.vars[o], X[o]) h && (h instanceof Array || h.push && m(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[o] = h = this._swapSelfInParams(h, this));
                    else if (H[o] && (u = new H[o])._onInitTween(e, this.vars[o], this, s)) {
                    for (this._firstPT = c = {
                            _next: this._firstPT,
                            t: u,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: o,
                            pg: 1,
                            pr: u._priority,
                            m: 0
                        }, a = u._overwriteProps.length; --a > -1;) i[u._overwriteProps[a]] = this._firstPT;
                    (u._priority || u._onInitAllProps) && (l = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                } else i[o] = q.call(this, e, o, "get", h, o, 0, null, this.vars.stringFilter, s);
                return r && this._kill(r, e) ? this._initProps(e, i, n, r, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && K(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (j[e._gsTweenID] = !0), l)
            }, a.render = function(t, e, i) {
                var n, r, s, o, a = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > u || 0 >= t && t >= -1e-7 || u === f && "isPause" !== this.data) && u !== t && (i = !0, u > f && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : f);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== f || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || u === t ? t : f)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var c = t / l,
                        h = this._easeType,
                        d = this._easePower;
                    (1 === h || 3 === h && c >= .5) && (c = 1 - c), 3 === h && (c *= 2), 1 === d ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), this.ratio = 1 === h ? 1 - c : 2 === h ? c : .5 > t / l ? c / 2 : 1 - c / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, I.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === f && o !== f && (this._rawPrevTime = 0))
                }
            }, a._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
                var n, r, s, o, a, l, u, c, h, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((m(e) || L(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (u = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (M.onOverwrite || this.vars.onOverwrite)) {
                            for (s in u) a[s] && (h || (h = []), h.push(s));
                            if ((h || !t) && !J(this, i, e, h)) return !1
                        }
                        for (s in u)(o = a[s]) && (f && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, a.invalidate = function() {
                return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -f, this.render(Math.min(0, -this._delay))), this
            }, a._enabled = function(t, e) {
                if (u || l.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = Z(n[i], this, !0);
                    else this._siblings = Z(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, M.to = function(t, e, i) {
                return new M(t, e, i)
            }, M.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new M(t, e, i)
            }, M.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new M(t, e, n)
            }, M.delayedCall = function(t, e, i, n, r) {
                return new M(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, M.set = function(t, e) {
                return new M(t, 0, e)
            }, M.getTweensOf = function(t, e) {
                if (null == t) return [];
                var i, n, r, s;
                if (t = "string" != typeof t ? t : M.selector(t) || t, (m(t) || L(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(M.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                } else if (t._gsTweenID)
                    for (i = (n = Z(t).concat()).length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n || []
            }, M.killTweensOf = M.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = M.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
            };
            var et = _("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = et.prototype
            }, !0);
            if (a = et.prototype, et.version = "1.19.0", et.API = 2, a._firstPT = null, a._addTween = q, a.setRatio = R, a._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, a._mod = a._roundProps = function(t) {
                    for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                }, M._onPluginEvent = function(t, e) {
                    var i, n, r, s, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
                        }
                        a = e._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, et.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === et.API && (H[(new t[e])._propName] = t[e]);
                    return !0
                }, y.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        r = t.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        o = _("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            et.call(this, i, n), this._overwriteProps = r || []
                        }, !0 === t.global),
                        a = o.prototype = new et(i);
                    for (e in a.constructor = o, o.API = t.API, s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                    return o.version = t.version, et.activate([o]), o
                }, s = t._gsQueue) {
                for (o = 0; o < s.length; o++) s[o]();
                for (a in g) g[a].func || t.console.log("GSAP encountered missing dependency: " + a)
            }
            u = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function(t) {
        var e, i, n = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            s = Array.prototype.slice;
        if (t.event.fixHooks)
            for (var o = n.length; o;) t.event.fixHooks[n[--o]] = t.event.mouseHooks;
        var a = t.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var e = r.length; e;) this.addEventListener(r[--e], l, !1);
                else this.onmousewheel = l;
                t.data(this, "mousewheel-line-height", a.getLineHeight(this)), t.data(this, "mousewheel-page-height", a.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var e = r.length; e;) this.removeEventListener(r[--e], l, !1);
                else this.onmousewheel = null;
                t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(e) {
                var i = t(e),
                    n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
            },
            getPageHeight: function(e) {
                return t(e).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };

        function l(n) {
            var r, o = n || window.event,
                l = s.call(arguments, 1),
                h = 0,
                f = 0,
                d = 0,
                p = 0,
                m = 0;
            if ((n = t.event.fix(o)).type = "mousewheel", "detail" in o && (d = -1 * o.detail), "wheelDelta" in o && (d = o.wheelDelta), "wheelDeltaY" in o && (d = o.wheelDeltaY), "wheelDeltaX" in o && (f = -1 * o.wheelDeltaX), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (f = -1 * d, d = 0), h = 0 === d ? f : d, "deltaY" in o && (h = d = -1 * o.deltaY), "deltaX" in o && (f = o.deltaX, 0 === d && (h = -1 * f)), 0 !== d || 0 !== f) {
                if (1 === o.deltaMode) {
                    var g = t.data(this, "mousewheel-line-height");
                    h *= g, d *= g, f *= g
                } else if (2 === o.deltaMode) {
                    var v = t.data(this, "mousewheel-page-height");
                    h *= v, d *= v, f *= v
                }
                if (r = Math.max(Math.abs(d), Math.abs(f)), (!i || r < i) && (i = r, c(o, r) && (i /= 40)), c(o, r) && (h /= 40, f /= 40, d /= 40), h = Math[h >= 1 ? "floor" : "ceil"](h / i), f = Math[f >= 1 ? "floor" : "ceil"](f / i), d = Math[d >= 1 ? "floor" : "ceil"](d / i), a.settings.normalizeOffset && this.getBoundingClientRect) {
                    var y = this.getBoundingClientRect();
                    p = n.clientX - y.left, m = n.clientY - y.top
                }
                return n.deltaX = f, n.deltaY = d, n.deltaFactor = i, n.offsetX = p, n.offsetY = m, n.deltaMode = 0, l.unshift(n, h, f, d), e && clearTimeout(e), e = setTimeout(u, 200), (t.event.dispatch || t.event.handle).apply(this, l)
            }
        }

        function u() {
            i = null
        }

        function c(t, e) {
            return a.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
        }
        t.fn.extend({
            mousewheel: function(t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function(t) {
                return this.unbind("mousewheel", t)
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(window.jQuery || window.Zepto)
    }(function(t) {
        var e, i, n, r, s, o, a = function() {},
            l = !!window.jQuery,
            u = t(window),
            c = function(t, i) {
                e.ev.on("mfp" + t + ".mfp", i)
            },
            h = function(e, i, n, r) {
                var s = document.createElement("div");
                return s.className = "mfp-" + e, n && (s.innerHTML = n), r ? i && i.appendChild(s) : (s = t(s), i && s.appendTo(i)), s
            },
            f = function(i, n) {
                e.ev.triggerHandler("mfp" + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
            },
            d = function(i) {
                return i === o && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), o = i), e.currTemplate.closeBtn
            },
            p = function() {
                t.magnificPopup.instance || ((e = new a).init(), t.magnificPopup.instance = e)
            };
        a.prototype = {
            constructor: a,
            init: function() {
                var i = navigator.appVersion;
                e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = function() {
                    var t = document.createElement("p").style,
                        e = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== t.transition) return !0;
                    for (; e.length;)
                        if (e.pop() + "Transition" in t) return !0;
                    return !1
                }(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document), e.popupsCache = {}
            },
            open: function(i) {
                var r;
                if (!1 === i.isObj) {
                    e.items = i.items.toArray(), e.index = 0;
                    var o, a = i.items;
                    for (r = 0; r < a.length; r++)
                        if ((o = a[r]).parsed && (o = o.el[0]), o === i.el[0]) {
                            e.index = r;
                            break
                        }
                } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
                if (!e.isOpen) {
                    e.types = [], s = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = n, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = h("bg").on("click.mfp", function() {
                        e.close()
                    }), e.wrap = h("wrap").attr("tabindex", -1).on("click.mfp", function(t) {
                        e._checkIfClose(t.target) && e.close()
                    }), e.container = h("container", e.wrap)), e.contentContainer = h("content"), e.st.preloader && (e.preloader = h("preloader", e.container, e.st.tLoading));
                    var l = t.magnificPopup.modules;
                    for (r = 0; r < l.length; r++) {
                        var p = l[r];
                        p = p.charAt(0).toUpperCase() + p.slice(1), e["init" + p].call(e)
                    }
                    f("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (c("MarkupParse", function(t, e, i, n) {
                        i.close_replaceWith = d(n.type)
                    }), s += " mfp-close-btn-in") : e.wrap.append(d())), e.st.alignTop && (s += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                        overflow: e.st.overflowY,
                        overflowX: "hidden",
                        overflowY: e.st.overflowY
                    }) : e.wrap.css({
                        top: u.scrollTop(),
                        position: "absolute"
                    }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                        height: n.height(),
                        position: "absolute"
                    }), e.st.enableEscapeKey && n.on("keyup.mfp", function(t) {
                        27 === t.keyCode && e.close()
                    }), u.on("resize.mfp", function() {
                        e.updateSize()
                    }), e.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && e.wrap.addClass(s);
                    var m = e.wH = u.height(),
                        g = {};
                    if (e.fixedContentPos && e._hasScrollBar(m)) {
                        var v = e._getScrollbarSize();
                        v && (g.marginRight = v)
                    }
                    e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : g.overflow = "hidden");
                    var y = e.st.mainClass;
                    return e.isIE7 && (y += " mfp-ie7"), y && e._addClassToMFP(y), e.updateItemHTML(), f("BuildControls"), t("html").css(g), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() {
                        e.content ? (e._addClassToMFP("mfp-ready"), e._setFocus()) : e.bgOverlay.addClass("mfp-ready"), n.on("focusin.mfp", e._onFocusIn)
                    }, 16), e.isOpen = !0, e.updateSize(m), f("Open"), i
                }
                e.updateItemHTML()
            },
            close: function() {
                e.isOpen && (f("BeforeClose"), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP("mfp-removing"), setTimeout(function() {
                    e._close()
                }, e.st.removalDelay)) : e._close())
            },
            _close: function() {
                f("Close");
                var i = "mfp-removing mfp-ready ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                    var r = {
                        marginRight: ""
                    };
                    e.isIE7 ? t("body, html").css("overflow", "") : r.overflow = "", t("html").css(r)
                }
                n.off("keyup.mfp focusin.mfp"), e.ev.off(".mfp"), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, f("AfterClose")
            },
            updateSize: function(t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        n = window.innerHeight * i;
                    e.wrap.css("height", n), e.wH = n
                } else e.wH = t || u.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), f("Resize")
            },
            updateItemHTML: function() {
                var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
                var n = i.type;
                if (f("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
                    var s = !!e.st[n] && e.st[n].markup;
                    f("FirstMarkupParse", s), e.currTemplate[n] = !s || t(s)
                }
                r && r !== i.type && e.container.removeClass("mfp-" + r + "-holder");
                var o = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
                e.appendContent(o, n), i.preloaded = !0, f("Change", i), r = i.type, e.container.prepend(e.contentContainer), f("AfterChange")
            },
            appendContent: function(t, i) {
                e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(d()) : e.content = t : e.content = "", f("BeforeAppend"), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
            },
            parseEl: function(i) {
                var n, r = e.items[i];
                if (r.tagName ? r = {
                        el: t(r)
                    } : (n = r.type, r = {
                        data: r,
                        src: r.src
                    }), r.el) {
                    for (var s = e.types, o = 0; o < s.length; o++)
                        if (r.el.hasClass("mfp-" + s[o])) {
                            n = s[o];
                            break
                        }
                    r.src = r.el.attr("data-mfp-src"), r.src || (r.src = r.el.attr("href"))
                }
                return r.type = n || e.st.type || "inline", r.index = i, r.parsed = !0, e.items[i] = r, f("ElementParse", r), e.items[i]
            },
            addGroup: function(t, i) {
                var n = function(n) {
                    n.mfpEl = this, e._openClick(n, t, i)
                };
                i || (i = {});
                var r = "click.magnificPopup";
                i.mainEl = t, i.items ? (i.isObj = !0, t.off(r).on(r, n)) : (i.isObj = !1, i.delegate ? t.off(r).on(r, i.delegate, n) : (i.items = t, t.off(r).on(r, n)))
            },
            _openClick: function(i, n, r) {
                if ((void 0 !== r.midClick ? r.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                    var s = void 0 !== r.disableOn ? r.disableOn : t.magnificPopup.defaults.disableOn;
                    if (s)
                        if (t.isFunction(s)) {
                            if (!s.call(e)) return !0
                        } else if (u.width() < s) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), r.el = t(i.mfpEl), r.delegate && (r.items = n.find(r.delegate)), e.open(r)
                }
            },
            updateStatus: function(t, n) {
                if (e.preloader) {
                    i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
                    var r = {
                        status: t,
                        text: n
                    };
                    f("UpdateStatus", r), t = r.status, n = r.text, e.preloader.html(n), e.preloader.find("a").on("click", function(t) {
                        t.stopImmediatePropagation()
                    }), e.container.addClass("mfp-s-" + t), i = t
                }
            },
            _checkIfClose: function(i) {
                if (!t(i).hasClass("mfp-prevent-close")) {
                    var n = e.st.closeOnContentClick,
                        r = e.st.closeOnBgClick;
                    if (n && r) return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) {
                        if (n) return !0
                    } else if (r && t.contains(document, i)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t)
            },
            _removeClassFromMFP: function(t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
            },
            _hasScrollBar: function(t) {
                return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || u.height())
            },
            _setFocus: function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            },
            _onFocusIn: function(i) {
                if (i.target !== e.wrap[0] && !t.contains(e.wrap[0], i.target)) return e._setFocus(), !1
            },
            _parseMarkup: function(e, i, n) {
                var r;
                n.data && (i = t.extend(n.data, i)), f("MarkupParse", [e, i, n]), t.each(i, function(i, n) {
                    if (void 0 === n || !1 === n) return !0;
                    if ((r = i.split("_")).length > 1) {
                        var s = e.find(".mfp-" + r[0]);
                        if (s.length > 0) {
                            var o = r[1];
                            "replaceWith" === o ? s[0] !== n[0] && s.replaceWith(n) : "img" === o ? s.is("img") ? s.attr("src", n) : s.replaceWith(t("<img>").attr("src", n).attr("class", s.attr("class"))) : s.attr(r[1], n)
                        }
                    } else e.find(".mfp-" + i).html(n)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        }, t.magnificPopup = {
            instance: null,
            proto: a.prototype,
            modules: [],
            open: function(e, i) {
                return p(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = i || 0, this.instance.open(e)
            },
            close: function() {
                return t.magnificPopup.instance && t.magnificPopup.instance.close()
            },
            registerModule: function(e, i) {
                i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, t.fn.magnificPopup = function(i) {
            p();
            var n = t(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var r, s = l ? n.data("magnificPopup") : n[0].magnificPopup,
                        o = parseInt(arguments[1], 10) || 0;
                    s.items ? r = s.items[o] : (r = n, s.delegate && (r = r.find(s.delegate)), r = r.eq(o)), e._openClick({
                        mfpEl: r
                    }, n, s)
                } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
            else i = t.extend(!0, {}, i), l ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
            return n
        };
        var m, g, v, y = function() {
            v && (g.after(v.addClass(m)).detach(), v = null)
        };
        t.magnificPopup.registerModule("inline", {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    e.types.push("inline"), c("Close.inline", function() {
                        y()
                    })
                },
                getInline: function(i, n) {
                    if (y(), i.src) {
                        var r = e.st.inline,
                            s = t(i.src);
                        if (s.length) {
                            var o = s[0].parentNode;
                            o && o.tagName && (g || (m = r.hiddenClass, g = h(m), m = "mfp-" + m), v = s.after(g).detach().removeClass(m)), e.updateStatus("ready")
                        } else e.updateStatus("error", r.tNotFound), s = t("<div>");
                        return i.inlineElement = s, s
                    }
                    return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n
                }
            }
        });
        var _, b = function() {
                _ && t(document.body).removeClass(_)
            },
            x = function() {
                b(), e.req && e.req.abort()
            };
        t.magnificPopup.registerModule("ajax", {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    e.types.push("ajax"), _ = e.st.ajax.cursor, c("Close.ajax", x), c("BeforeChange.ajax", x)
                },
                getAjax: function(i) {
                    _ && t(document.body).addClass(_), e.updateStatus("loading");
                    var n = t.extend({
                        url: i.src,
                        success: function(n, r, s) {
                            var o = {
                                data: n,
                                xhr: s
                            };
                            f("ParseAjax", o), e.appendContent(t(o.data), "ajax"), i.finished = !0, b(), e._setFocus(), setTimeout(function() {
                                e.wrap.addClass("mfp-ready")
                            }, 16), e.updateStatus("ready"), f("AjaxContentAdded")
                        },
                        error: function() {
                            b(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                        }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(n), ""
                }
            }
        });
        var w, T = function(i) {
            if (i.data && void 0 !== i.data.title) return i.data.title;
            var n = e.st.image.titleSrc;
            if (n) {
                if (t.isFunction(n)) return n.call(e, i);
                if (i.el) return i.el.attr(n) || ""
            }
            return ""
        };
        t.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var i = e.st.image,
                        n = ".image";
                    e.types.push("image"), c("Open" + n, function() {
                        "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
                    }), c("Close" + n, function() {
                        i.cursor && t(document.body).removeClass(i.cursor), u.off("resize.mfp")
                    }), c("Resize" + n, e.resizeImage), e.isLowIE && c("AfterChange", e.resizeImage)
                },
                resizeImage: function() {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                    }
                },
                _onImageHasSize: function(t) {
                    t.img && (t.hasSize = !0, w && clearInterval(w), t.isCheckingImgSize = !1, f("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
                },
                findImageSize: function(t) {
                    var i = 0,
                        n = t.img[0],
                        r = function(s) {
                            w && clearInterval(w), w = setInterval(function() {
                                n.naturalWidth > 0 ? e._onImageHasSize(t) : (i > 200 && clearInterval(w), 3 === ++i ? r(10) : 40 === i ? r(50) : 100 === i && r(500))
                            }, s)
                        };
                    r(1)
                },
                getImage: function(i, n) {
                    var r = 0,
                        s = function() {
                            i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, f("ImageLoadComplete")) : ++r < 200 ? setTimeout(s, 100) : o())
                        },
                        o = function() {
                            i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                        },
                        a = e.st.image,
                        l = n.find(".mfp-img");
                    if (l.length) {
                        var u = document.createElement("img");
                        u.className = "mfp-img", i.el && i.el.find("img").length && (u.alt = i.el.find("img").attr("alt")), i.img = t(u).on("load.mfploader", s).on("error.mfploader", o), u.src = i.src, l.is("img") && (i.img = i.img.clone()), (u = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : u.width || (i.hasSize = !1)
                    }
                    return e._parseMarkup(n, {
                        title: T(i),
                        img_replaceWith: i.img
                    }, i), e.resizeImage(), i.hasSize ? (w && clearInterval(w), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
                }
            }
        });
        var S;
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(t) {
                    return t.is("img") ? t : t.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var t, i = e.st.zoom,
                        n = ".zoom";
                    if (i.enabled && e.supportsTransition) {
                        var r, s, o = i.duration,
                            a = function(t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    n = "all " + i.duration / 1e3 + "s " + i.easing,
                                    r = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    s = "transition";
                                return r["-webkit-" + s] = r["-moz-" + s] = r["-o-" + s] = r[s] = n, e.css(r), e
                            },
                            l = function() {
                                e.content.css("visibility", "visible")
                            };
                        c("BuildControls" + n, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(r), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void l();
                                (s = a(t)).css(e._getOffset()), e.wrap.append(s), r = setTimeout(function() {
                                    s.css(e._getOffset(!0)), r = setTimeout(function() {
                                        l(), setTimeout(function() {
                                            s.remove(), t = s = null, f("ZoomAnimationEnded")
                                        }, 16)
                                    }, o)
                                }, 16)
                            }
                        }), c("BeforeClose" + n, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(r), e.st.removalDelay = o, !t) {
                                    if (!(t = e._getItemToZoom())) return;
                                    s = a(t)
                                }
                                s.css(e._getOffset(!0)), e.wrap.append(s), e.content.css("visibility", "hidden"), setTimeout(function() {
                                    s.css(e._getOffset())
                                }, 16)
                            }
                        }), c("Close" + n, function() {
                            e._allowZoom() && (l(), s && s.remove(), t = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === e.currItem.type
                },
                _getItemToZoom: function() {
                    return !!e.currItem.hasSize && e.currItem.img
                },
                _getOffset: function(i) {
                    var n, r = (n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
                        s = parseInt(n.css("padding-top"), 10),
                        o = parseInt(n.css("padding-bottom"), 10);
                    r.top -= t(window).scrollTop() - s;
                    var a = {
                        width: n.width(),
                        height: (l ? n.innerHeight() : n[0].offsetHeight) - o - s
                    };
                    return void 0 === S && (S = void 0 !== document.createElement("p").style.MozTransform), S ? a["-moz-transform"] = a.transform = "translate(" + r.left + "px," + r.top + "px)" : (a.left = r.left, a.top = r.top), a
                }
            }
        });
        var C = function(t) {
            if (e.currTemplate.iframe) {
                var i = e.currTemplate.iframe.find("iframe");
                i.length && (t || (i[0].src = "//about:blank"), e.isIE8 && i.css("display", t ? "block" : "none"))
            }
        };
        t.magnificPopup.registerModule("iframe", {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    e.types.push("iframe"), c("BeforeChange", function(t, e, i) {
                        e !== i && ("iframe" === e ? C() : "iframe" === i && C(!0))
                    }), c("Close.iframe", function() {
                        C()
                    })
                },
                getIframe: function(i, n) {
                    var r = i.src,
                        s = e.st.iframe;
                    t.each(s.patterns, function() {
                        if (r.indexOf(this.index) > -1) return this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), r = this.src.replace("%id%", r), !1
                    });
                    var o = {};
                    return s.srcAction && (o[s.srcAction] = r), e._parseMarkup(n, o, i), e.updateStatus("ready"), n
                }
            }
        });
        var k = function(t) {
                var i = e.items.length;
                return t > i - 1 ? t - i : t < 0 ? i + t : t
            },
            E = function(t, e, i) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
            };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var i = e.st.gallery,
                        r = ".mfp-gallery";
                    if (e.direction = !0, !i || !i.enabled) return !1;
                    s += " mfp-gallery", c("Open" + r, function() {
                        i.navigateByImgClick && e.wrap.on("click" + r, ".mfp-img", function() {
                            if (e.items.length > 1) return e.next(), !1
                        }), n.on("keydown" + r, function(t) {
                            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                        })
                    }), c("UpdateStatus" + r, function(t, i) {
                        i.text && (i.text = E(i.text, e.currItem.index, e.items.length))
                    }), c("MarkupParse" + r, function(t, n, r, s) {
                        var o = e.items.length;
                        r.counter = o > 1 ? E(i.tCounter, s.index, o) : ""
                    }), c("BuildControls" + r, function() {
                        if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                            var n = i.arrowMarkup,
                                r = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
                                s = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");
                            r.click(function() {
                                e.prev()
                            }), s.click(function() {
                                e.next()
                            }), e.container.append(r.add(s))
                        }
                    }), c("Change" + r, function() {
                        e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
                            e.preloadNearbyImages(), e._preloadTimeout = null
                        }, 16)
                    }), c("Close" + r, function() {
                        n.off(r), e.wrap.off("click" + r), e.arrowRight = e.arrowLeft = null
                    })
                },
                next: function() {
                    e.direction = !0, e.index = k(e.index + 1), e.updateItemHTML()
                },
                prev: function() {
                    e.direction = !1, e.index = k(e.index - 1), e.updateItemHTML()
                },
                goTo: function(t) {
                    e.direction = t >= e.index, e.index = t, e.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var t, i = e.st.gallery.preload,
                        n = Math.min(i[0], e.items.length),
                        r = Math.min(i[1], e.items.length);
                    for (t = 1; t <= (e.direction ? r : n); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? n : r); t++) e._preloadItem(e.index - t)
                },
                _preloadItem: function(i) {
                    if (i = k(i), !e.items[i].preloaded) {
                        var n = e.items[i];
                        n.parsed || (n = e.parseEl(i)), f("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                            n.hasSize = !0
                        }).on("error.mfploader", function() {
                            n.hasSize = !0, n.loadError = !0, f("LazyLoadError", n)
                        }).attr("src", n.src)), n.preloaded = !0
                    }
                }
            }
        });
        t.magnificPopup.registerModule("retina", {
            options: {
                replaceSrc: function(t) {
                    return t.src.replace(/\.\w+$/, function(t) {
                        return "@2x" + t
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina,
                            i = t.ratio;
                        (i = isNaN(i) ? i() : i) > 1 && (c("ImageHasSize.retina", function(t, e) {
                            e.img.css({
                                "max-width": e.img[0].naturalWidth / i,
                                width: "100%"
                            })
                        }), c("ElementParse.retina", function(e, n) {
                            n.src = t.replaceSrc(n, i)
                        }))
                    }
                }
            }
        }), p()
    }),
    function(t, e, i) {
        var n = [],
            r = {
                _version: "3.7.1",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(t, e) {
                    var i = this;
                    setTimeout(function() {
                        e(i[t])
                    }, 0)
                },
                addTest: function(t, e, i) {
                    n.push({
                        name: t,
                        fn: e,
                        options: i
                    })
                },
                addAsyncTest: function(t) {
                    n.push({
                        name: null,
                        fn: t
                    })
                }
            },
            s = function() {};
        s.prototype = r, s = new s;
        var o = [];

        function a(t, e) {
            return typeof t === e
        }
        var l, u, c = e.documentElement,
            h = "svg" === c.nodeName.toLowerCase();

        function f(t) {
            var e = c.className,
                i = s._config.classPrefix || "";
            if (h && (e = e.baseVal), s._config.enableJSClass) {
                var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
                e = e.replace(n, "$1" + i + "js$2")
            }
            s._config.enableClasses && (t.length > 0 && (e += " " + i + t.join(" " + i)), h ? c.className.baseVal = e : c.className = e)
        }

        function d(t, e) {
            if ("object" == typeof t)
                for (var i in t) l(t, i) && d(i, t[i]);
            else {
                var n = (t = t.toLowerCase()).split("."),
                    r = s[n[0]];
                if (2 === n.length && (r = r[n[1]]), void 0 !== r) return s;
                e = "function" == typeof e ? e() : e, 1 === n.length ? s[n[0]] = e : (!s[n[0]] || s[n[0]] instanceof Boolean || (s[n[0]] = new Boolean(s[n[0]])), s[n[0]][n[1]] = e), f([(e && !1 !== e ? "" : "no-") + n.join("-")]), s._trigger(t, e)
            }
            return s
        }

        function p() {
            return "function" != typeof e.createElement ? e.createElement(arguments[0]) : h ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
        }
        l = a(u = {}.hasOwnProperty, "undefined") || a(u.call, "undefined") ? function(t, e) {
            return e in t && a(t.constructor.prototype[e], "undefined")
        } : function(t, e) {
            return u.call(t, e)
        }, r._l = {}, r.on = function(t, e) {
            this._l[t] || (this._l[t] = []), this._l[t].push(e), s.hasOwnProperty(t) && setTimeout(function() {
                s._trigger(t, s[t])
            }, 0)
        }, r._trigger = function(t, e) {
            if (this._l[t]) {
                var i = this._l[t];
                setTimeout(function() {
                    var t;
                    for (t = 0; t < i.length; t++)(0, i[t])(e)
                }, 0), delete this._l[t]
            }
        }, s._q.push(function() {
            r.addTest = d
        }), h || function(t, e) {
            var i, n, r = t.html5 || {},
                s = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                a = "_html5shiv",
                l = 0,
                u = {};

            function c(t, e) {
                var i = t.createElement("p"),
                    n = t.getElementsByTagName("head")[0] || t.documentElement;
                return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
            }

            function h() {
                var t = m.elements;
                return "string" == typeof t ? t.split(" ") : t
            }

            function f(t) {
                var e = u[t[a]];
                return e || (e = {}, l++, t[a] = l, u[l] = e), e
            }

            function d(t, i, r) {
                return i || (i = e), n ? i.createElement(t) : (r || (r = f(i)), !(a = r.cache[t] ? r.cache[t].cloneNode() : o.test(t) ? (r.cache[t] = r.createElem(t)).cloneNode() : r.createElem(t)).canHaveChildren || s.test(t) || a.tagUrn ? a : r.frag.appendChild(a));
                var a
            }

            function p(t) {
                t || (t = e);
                var r = f(t);
                return !m.shivCSS || i || r.hasCSS || (r.hasCSS = !!c(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), n || function(t, e) {
                    e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(i) {
                        return m.shivMethods ? d(i, t, e) : e.createElem(i)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + h().join().replace(/[\w\-:]+/g, function(t) {
                        return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(m, e.frag)
                }(t, r), t
            }! function() {
                try {
                    var t = e.createElement("a");
                    t.innerHTML = "<xyz></xyz>", i = "hidden" in t, n = 1 == t.childNodes.length || function() {
                        e.createElement("a");
                        var t = e.createDocumentFragment();
                        return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                    }()
                } catch (t) {
                    i = !0, n = !0
                }
            }();
            var m = {
                elements: r.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
                version: "3.7.3",
                shivCSS: !1 !== r.shivCSS,
                supportsUnknownElements: n,
                shivMethods: !1 !== r.shivMethods,
                type: "default",
                shivDocument: p,
                createElement: d,
                createDocumentFragment: function(t, i) {
                    if (t || (t = e), n) return t.createDocumentFragment();
                    for (var r = (i = i || f(t)).frag.cloneNode(), s = 0, o = h(), a = o.length; s < a; s++) r.createElement(o[s]);
                    return r
                },
                addElements: function(t, e) {
                    var i = m.elements;
                    "string" != typeof i && (i = i.join(" ")), "string" != typeof t && (t = t.join(" ")), m.elements = i + " " + t, p(e)
                }
            };
            t.html5 = m, p(e);
            var g, v = /^$|\b(?:all|print)\b/,
                y = "html5shiv",
                _ = !(n || (g = e.documentElement, void 0 === e.namespaces || void 0 === e.parentWindow || void 0 === g.applyElement || void 0 === g.removeNode || void 0 === t.attachEvent));

            function b(t) {
                for (var e, i = t.attributes, n = i.length, r = t.ownerDocument.createElement(y + ":" + t.nodeName); n--;)(e = i[n]).specified && r.setAttribute(e.nodeName, e.nodeValue);
                return r.style.cssText = t.style.cssText, r
            }

            function x(t) {
                var e, i, n = f(t),
                    r = t.namespaces,
                    s = t.parentWindow;
                if (!_ || t.printShived) return t;

                function o() {
                    clearTimeout(n._removeSheetTimer), e && e.removeNode(!0), e = null
                }
                return void 0 === r[y] && r.add(y), s.attachEvent("onbeforeprint", function() {
                    o();
                    for (var n, r, s, a = t.styleSheets, l = [], u = a.length, f = Array(u); u--;) f[u] = a[u];
                    for (; s = f.pop();)
                        if (!s.disabled && v.test(s.media)) {
                            try {
                                r = (n = s.imports).length
                            } catch (t) {
                                r = 0
                            }
                            for (u = 0; u < r; u++) f.push(n[u]);
                            try {
                                l.push(s.cssText)
                            } catch (t) {}
                        }
                    l = function(t) {
                        for (var e, i = t.split("{"), n = i.length, r = RegExp("(^|[\\s,>+~])(" + h().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), s = "$1" + y + "\\:$2"; n--;)(e = i[n] = i[n].split("}"))[e.length - 1] = e[e.length - 1].replace(r, s), i[n] = e.join("}");
                        return i.join("{")
                    }(l.reverse().join("")), i = function(t) {
                        for (var e, i = t.getElementsByTagName("*"), n = i.length, r = RegExp("^(?:" + h().join("|") + ")$", "i"), s = []; n--;) e = i[n], r.test(e.nodeName) && s.push(e.applyElement(b(e)));
                        return s
                    }(t), e = c(t, l)
                }), s.attachEvent("onafterprint", function() {
                    ! function(t) {
                        for (var e = t.length; e--;) t[e].removeNode()
                    }(i), clearTimeout(n._removeSheetTimer), n._removeSheetTimer = setTimeout(o, 500)
                }), t.printShived = !0, t
            }
            m.type += " print", m.shivPrint = x, x(e), "object" == typeof module && module.exports && (module.exports = m)
        }(void 0 !== t ? t : this, e);
        var m = {
            elem: p("modernizr")
        };
        s._q.push(function() {
            delete m.elem
        });
        var g = {
            style: m.elem.style
        };

        function v(t, i, n, r) {
            var s, o, a, l, u = "modernizr",
                f = p("div"),
                d = function() {
                    var t = e.body;
                    return t || ((t = p(h ? "svg" : "body")).fake = !0), t
                }();
            if (parseInt(n, 10))
                for (; n--;)(a = p("div")).id = r ? r[n] : u + (n + 1), f.appendChild(a);
            return (s = p("style")).type = "text/css", s.id = "s" + u, (d.fake ? d : f).appendChild(s), d.appendChild(f), s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(e.createTextNode(t)), f.id = u, d.fake && (d.style.background = "", d.style.overflow = "hidden", l = c.style.overflow, c.style.overflow = "hidden", c.appendChild(d)), o = i(f, t), d.fake ? (d.parentNode.removeChild(d), c.style.overflow = l, c.offsetHeight) : f.parentNode.removeChild(f), !!o
        }

        function y(t) {
            return t.replace(/([A-Z])/g, function(t, e) {
                return "-" + e.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }

        function _(e, n) {
            var r = e.length;
            if ("CSS" in t && "supports" in t.CSS) {
                for (; r--;)
                    if (t.CSS.supports(y(e[r]), n)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in t) {
                for (var s = []; r--;) s.push("(" + y(e[r]) + ":" + n + ")");
                return v("@supports (" + (s = s.join(" or ")) + ") { #modernizr { position: absolute; } }", function(e) {
                    return "absolute" === function(e, i, n) {
                        var r;
                        if ("getComputedStyle" in t) {
                            r = getComputedStyle.call(t, e, i);
                            var s = t.console;
                            null !== r ? n && (r = r.getPropertyValue(n)) : s && s[s.error ? "error" : "log"].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                        } else r = !i && e.currentStyle && e.currentStyle[n];
                        return r
                    }(e, null, "position")
                })
            }
            return i
        }
        s._q.unshift(function() {
            delete g.style
        });
        r.testProp = function(t, e, n) {
            return function(t, e, n, r) {
                if (r = !a(r, "undefined") && r, !a(n, "undefined")) {
                    var s = _(t, n);
                    if (!a(s, "undefined")) return s
                }
                for (var o, l, u, c, h, f = ["modernizr", "tspan", "samp"]; !g.style && f.length;) o = !0, g.modElem = p(f.shift()), g.style = g.modElem.style;

                function d() {
                    o && (delete g.style, delete g.modElem)
                }
                for (u = t.length, l = 0; l < u; l++)
                    if (c = t[l], h = g.style[c], ~("" + c).indexOf("-") && (c = c.replace(/([a-z])-([a-z])/g, function(t, e, i) {
                            return e + i.toUpperCase()
                        }).replace(/^-/, "")), g.style[c] !== i) {
                        if (r || a(n, "undefined")) return d(), "pfx" !== e || c;
                        try {
                            g.style[c] = n
                        } catch (t) {}
                        if (g.style[c] !== h) return d(), "pfx" !== e || c
                    }
                return d(), !1
            }([t], i, e, n)
        };
        var b = "CSS" in t && "supports" in t.CSS,
            x = "supportsCSS" in t;
        s.addTest("supports", b || x),
            function() {
                var t, e, i, r, l, u;
                for (var c in n)
                    if (n.hasOwnProperty(c)) {
                        if (t = [], (e = n[c]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                            for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
                        for (r = a(e.fn, "function") ? e.fn() : e.fn, l = 0; l < t.length; l++) 1 === (u = t[l].split(".")).length ? s[u[0]] = r : (!s[u[0]] || s[u[0]] instanceof Boolean || (s[u[0]] = new Boolean(s[u[0]])), s[u[0]][u[1]] = r), o.push((r ? "" : "no-") + u.join("-"))
                    }
            }(), f(o), delete r.addTest, delete r.addAsyncTest;
        for (var w = 0; w < s._q.length; w++) s._q[w]();
        t.Modernizr = s
    }(window, document);
var carousel = {
        init: function() {
            $(".js-slideshow").each(function() {
                var t, e = $(this).data("slideshow-type");
                "imagesCarousel" == e ? t = {
                    cellAlign: "center",
                    contain: !0,
                    wrapAround: !0,
                    autoPlay: !1,
                    prevNextButtons: !1,
                    pageDots: !1,
                    draggable: !1,
                    imagesLoaded: !0,
                    selectedAttraction: .01,
                    friction: .15
                } : "imageSlideshow" == e && (t = {
                    cellAlign: "left",
                    contain: !1,
                    wrapAround: !0,
                    autoPlay: !1,
                    prevNextButtons: !0,
                    pageDots: !1,
                    draggable: !1,
                    fade: !0,
                    imagesLoaded: !0
                });
                var i = $(this).flickity(t);
                "imagesCarousel" == e && i.on("change.flickity", function(t, e) {
                    var i = "0" + (e + 1);
                    $(".js-slideshow__pagination").addClass(state.loading).delay(500).queue(function(t) {
                        $(".js-slideshow__pagination").removeClass(state.loading).html(i), t()
                    })
                }), "imageSlideshow" == e && $(".js-slideshow__reset").click(function(t) {
                    i.flickity("select", 0), t.preventDefault()
                }), "imagesCarousel" == e && ($(".js-slideshow__prev").on("click", function() {
                    i.flickity("previous")
                }), $(".js-slideshow__next").on("click", function() {
                    i.flickity("next")
                }))
            })
        }
    },
    component = {
        var: {
            object: ".js-component"
        },
        scroll: function() {},
        resize: function() {},
        init: function() {}
    },
    cursor = {
        init: function() {
            var t = document.querySelector(".js-cursor"),
                e = (document.querySelector(".js-cursor__main"), document.querySelector(".js-cursor__circle--large")),
                i = document.querySelector(".js-cursor__circle--left"),
                n = document.querySelector(".js-cursor__circle--right"),
                r = document.querySelectorAll(".js-hoverables"),
                s = document.querySelectorAll(".js-slideshow");
            document.body.addEventListener("mousemove", function(e) {
                TweenMax.to(t, .2, {
                    x: e.x - 45,
                    y: e.y - 45
                })
            });
            for (let t = 0; t < s.length; t++) s[t].addEventListener("mouseenter", o), s[t].addEventListener("mouseleave", a);
            for (let t = 0; t < r.length; t++) r[t].addEventListener("mouseenter", l), r[t].addEventListener("mouseleave", u);

            function o() {
                TweenMax.to(i, .4, {
                    x: 0,
                    opacity: 1,
                    ease: Back.easeOut
                }), TweenMax.to(n, .4, {
                    x: 0,
                    opacity: 1,
                    ease: Back.easeOut
                }), TweenMax.to(e, .4, {
                    scale: .4
                })
            }

            function a() {
                TweenMax.to(i, .4, {
                    x: 5,
                    opacity: 0,
                    ease: Back.easeOut
                }), TweenMax.to(n, .4, {
                    x: -5,
                    opacity: 0,
                    ease: Back.easeOut
                }), TweenMax.to(e, .4, {
                    scale: .4
                })
            }

            function l() {
                TweenMax.to(i, .4, {
                    x: 5,
                    opacity: 0,
                    ease: Back.easeOut
                }), TweenMax.to(n, .4, {
                    x: -5,
                    opacity: 0,
                    ease: Back.easeOut
                }), TweenMax.to(e, .4, {
                    scale: 1
                })
            }

            function u() {
                TweenMax.to(e, .4, {
                    scale: .4
                })
            }
            TweenMax.to(i, 0, {
                x: 5,
                opacity: 0,
                ease: Back.easeOut
            }), TweenMax.to(n, 0, {
                x: -5,
                opacity: 0,
                ease: Back.easeOut
            })
        }
    },
    imageMovement = {
        animate: function(t) {
            $(".js-image-movement").each(function(e) {
                var i = $(this).data("amount");
                TweenMax.to(this, 2, {
                    x: t.x * i,
                    y: t.y * i
                }).delay(i)
            })
        },
        init: function() {
            document.body.addEventListener("mousemove", imageMovement.animate)
        }
    },
    lazy = {
        init: function() {
            new LazyLoad({
                elements_selector: ".js-lazy-load"
            })
        }
    },
    lightbox = {
        init: function() {
            $(".js-lightbox__action").click(function(t) {
                var e = $(this).data("id");
                $(".js-lightbox[data-id=" + e + "]").addClass(state.active), t.preventDefault()
            }), $(".js-lightbox__close").click(function(t) {
                $(".js-lightbox").removeClass(state.active), t.preventDefault()
            }), $(".js-lightbox__gallery").each(function() {
                const t = $(this).data("lightbox-gallery");
                $('[data-lightbox-gallery="' + t + '"]').magnificPopup({
                    delegate: ".js-lightbox__image",
                    type: "image",
                    mainClass: "mfp-fade",
                    removalDelay: 300,
                    preloader: !1,
                    gallery: {
                        enabled: !0,
                        preload: [1, 3],
                        navigateByImgClick: !0,
                        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir% mfp-prevent-close"><i class="fas fa-chevron-%dir% mfp-prevent-close"></i></button>'
                    }
                })
            }), $(".js-lightbox__image").click(function(t) {
                t.preventDefault()
            }), $(".js-lightbox__trigger").click(function(t) {
                const e = $(this).data("lightbox-gallery-id");
                $('.js-lightbox__gallery[data-lightbox-gallery="' + e + '"]').find(".js-lightbox__image").eq(0).trigger("click"), t.preventDefault()
            })
        }
    },
    menu = {
        init: function() {
            $(".js-menu__action").click(function(t) {
                $(".js-menu, .js-menu__action, .js-site__header, .js-site__content").toggleClass(state.active), t.preventDefault()
            }), $('a[href]:not([href$="\\#"]):not(.js-menu__action):not(.js-site__credit):not(.js-lightbox__action):not(.js-lightbox__close):not(.js-lightbox__trigger):not(.js-lightbox__image)').click(function(t) {
                var e = $(this).attr("href");
                $("body").removeClass("pace-done").addClass("pace-exit"), setTimeout(function() {
                    window.location = e
                }, 500), t.preventDefault()
            })
        }
    },
    parallax = {
        init: function() {
            lax.setup(), document.addEventListener("scroll", function(t) {
                lax.update(window.scrollY)
            }, !1)
        }
    },
    reveal = {
        init: function() {
            Pace.on("done", function() {
                AOS.init({
                    offset: 100,
                    once: !0,
                    mirror: !0
                }), $(".js-intro").removeClass(state.active).delay(2500).queue(function() {
                    $(".js-slideshow").addClass(state.active)
                })
            })
        }
    };
const state = {
    hidden: "-hidden",
    visible: "-visible",
    selected: "-selected",
    active: "-active",
    removed: "-removed",
    processing: "-processing",
    loading: "-loading"
};
$(window).ready(function() {
    carousel.init(), lazy.init(), parallax.init(), reveal.init(), imageMovement.init(), menu.init(), lightbox.init()
}), $(window).resize(function() {}), $(window).scroll(function() {});
//# sourceMappingURL=app.js.map