// ! function (e, t) {
//   "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
//     if (!e.document) throw new Error("jQuery requires a window with a document");
//     return t(e)
//   } : t(e)
// }("undefined" != typeof window ? window : this, function (e, t) {
//   function n(e) {
//     var t = "length" in e && e.length,
//       n = K.type(e);
//     return "function" !== n && !K.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
//   }

//   function i(e, t, n) {
//     if (K.isFunction(t)) return K.grep(e, function (e, i) {
//       return !!t.call(e, i, e) !== n
//     });
//     if (t.nodeType) return K.grep(e, function (e) {
//       return e === t !== n
//     });
//     if ("string" == typeof t) {
//       if (oe.test(t)) return K.filter(t, e, n);
//       t = K.filter(t, e)
//     }
//     return K.grep(e, function (e) {
//       return q.call(t, e) >= 0 !== n
//     })
//   }

//   function r(e, t) {
//     for (;
//       (e = e[t]) && 1 !== e.nodeType;);
//     return e
//   }

//   function o(e) {
//     var t = de[e] = {};
//     return K.each(e.match(ce) || [], function (e, n) {
//       t[n] = !0
//     }), t
//   }

//   function s() {
//     X.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), K.ready()
//   }

//   function a() {
//     Object.defineProperty(this.cache = {}, 0, {
//       get: function () {
//         return {}
//       }
//     }), this.expando = K.expando + a.uid++
//   }

//   function l(e, t, n) {
//     var i;
//     if (void 0 === n && 1 === e.nodeType)
//       if (i = "data-" + t.replace(ve, "-$1").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
//         try {
//           n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ge.test(n) ? K.parseJSON(n) : n)
//         } catch (e) { }
//         me.set(e, t, n)
//       } else n = void 0;
//     return n
//   }

//   function u() {
//     return !0
//   }

//   function c() {
//     return !1
//   }

//   function d() {
//     try {
//       return X.activeElement
//     } catch (e) { }
//   }

//   function f(e, t) {
//     return K.nodeName(e, "table") && K.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
//   }

//   function h(e) {
//     return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
//   }

//   function p(e) {
//     var t = De.exec(e.type);
//     return t ? e.type = t[1] : e.removeAttribute("type"), e
//   }

//   function m(e, t) {
//     for (var n = 0, i = e.length; n < i; n++) pe.set(e[n], "globalEval", !t || pe.get(t[n], "globalEval"))
//   }

//   function g(e, t) {
//     var n, i, r, o, s, a, l, u;
//     if (1 === t.nodeType) {
//       if (pe.hasData(e) && (o = pe.access(e), s = pe.set(t, o), u = o.events)) {
//         delete s.handle, s.events = {};
//         for (r in u)
//           for (n = 0, i = u[r].length; n < i; n++) K.event.add(t, r, u[r][n])
//       }
//       me.hasData(e) && (a = me.access(e), l = K.extend({}, a), me.set(t, l))
//     }
//   }

//   function v(e, t) {
//     var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
//     return void 0 === t || t && K.nodeName(e, t) ? K.merge([e], n) : n
//   }

//   function y(e, t) {
//     var n = t.nodeName.toLowerCase();
//     "input" === n && we.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
//   }

//   function b(t, n) {
//     var i, r = K(n.createElement(t)).appendTo(n.body),
//       o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : K.css(r[0], "display");
//     return r.detach(), o
//   }

//   function $(e) {
//     var t = X,
//       n = Fe[e];
//     return n || ("none" !== (n = b(e, t)) && n || ((t = (Ne = (Ne || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = b(e, t), Ne.detach()), Fe[e] = n), n
//   }

//   function w(e, t, n) {
//     var i, r, o, s, a = e.style;
//     return (n = n || ze(e)) && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || K.contains(e.ownerDocument, e) || (s = K.style(e, t)), Re.test(s) && Ie.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
//   }

//   function x(e, t) {
//     return {
//       get: function () {
//         if (!e()) return (this.get = t).apply(this, arguments);
//         delete this.get
//       }
//     }
//   }

//   function S(e, t) {
//     if (t in e) return t;
//     for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = qe.length; r--;)
//       if ((t = qe[r] + n) in e) return t;
//     return i
//   }

//   function C(e, t, n) {
//     var i = He.exec(t);
//     return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
//   }

//   function k(e, t, n, i, r) {
//     for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += K.css(e, n + be[o], !0, r)), i ? ("content" === n && (s -= K.css(e, "padding" + be[o], !0, r)), "margin" !== n && (s -= K.css(e, "border" + be[o] + "Width", !0, r))) : (s += K.css(e, "padding" + be[o], !0, r), "padding" !== n && (s += K.css(e, "border" + be[o] + "Width", !0, r)));
//     return s
//   }

//   function T(e, t, n) {
//     var i = !0,
//       r = "width" === t ? e.offsetWidth : e.offsetHeight,
//       o = ze(e),
//       s = "border-box" === K.css(e, "boxSizing", !1, o);
//     if (r <= 0 || null == r) {
//       if (((r = w(e, t, o)) < 0 || null == r) && (r = e.style[t]), Re.test(r)) return r;
//       i = s && (Z.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
//     }
//     return r + k(e, t, n || (s ? "border" : "content"), i, o) + "px"
//   }

//   function E(e, t) {
//     for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++)(i = e[s]).style && (o[s] = pe.get(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && $e(i) && (o[s] = pe.access(i, "olddisplay", $(i.nodeName)))) : (r = $e(i), "none" === n && r || pe.set(i, "olddisplay", r ? n : K.css(i, "display"))));
//     for (s = 0; s < a; s++)(i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
//     return e
//   }

//   function j(e, t, n, i, r) {
//     return new j.prototype.init(e, t, n, i, r)
//   }

//   function M() {
//     return setTimeout(function () {
//       We = void 0
//     }), We = K.now()
//   }

//   function _(e, t) {
//     var n, i = 0,
//       r = {
//         height: e
//       };
//     for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = be[i])] = r["padding" + n] = e;
//     return t && (r.opacity = r.width = e), r
//   }

//   function A(e, t, n) {
//     for (var i, r = (Je[t] || []).concat(Je["*"]), o = 0, s = r.length; o < s; o++)
//       if (i = r[o].call(n, t, e)) return i
//   }

//   function D(e, t) {
//     var n, i, r, o, s;
//     for (n in e)
//       if (i = K.camelCase(n), r = t[i], o = e[n], K.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = K.cssHooks[i]) && "expand" in s) {
//         o = s.expand(o), delete e[i];
//         for (n in o) n in e || (e[n] = o[n], t[n] = r)
//       } else t[i] = r
//   }

//   function O(e, t, n) {
//     var i, r, o = 0,
//       s = Ke.length,
//       a = K.Deferred().always(function () {
//         delete l.elem
//       }),
//       l = function () {
//         if (r) return !1;
//         for (var t = We || M(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
//         return a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (a.resolveWith(e, [u]), !1)
//       },
//       u = a.promise({
//         elem: e,
//         props: K.extend({}, t),
//         opts: K.extend(!0, {
//           specialEasing: {}
//         }, n),
//         originalProperties: t,
//         originalOptions: n,
//         startTime: We || M(),
//         duration: n.duration,
//         tweens: [],
//         createTween: function (t, n) {
//           var i = K.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
//           return u.tweens.push(i), i
//         },
//         stop: function (t) {
//           var n = 0,
//             i = t ? u.tweens.length : 0;
//           if (r) return this;
//           for (r = !0; n < i; n++) u.tweens[n].run(1);
//           return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
//         }
//       }),
//       c = u.props;
//     for (D(c, u.opts.specialEasing); o < s; o++)
//       if (i = Ke[o].call(u, e, c, u.opts)) return i;
//     return K.map(c, A, u), K.isFunction(u.opts.start) && u.opts.start.call(e, u), K.fx.timer(K.extend(l, {
//       elem: e,
//       anim: u,
//       queue: u.opts.queue
//     })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
//   }

//   function P(e) {
//     return function (t, n) {
//       "string" != typeof t && (n = t, t = "*");
//       var i, r = 0,
//         o = t.toLowerCase().match(ce) || [];
//       if (K.isFunction(n))
//         for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
//     }
//   }

//   function N(e, t, n, i) {
//     function r(a) {
//       var l;
//       return o[a] = !0, K.each(e[a] || [], function (e, a) {
//         var u = a(t, n, i);
//         return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
//       }), l
//     }
//     var o = {},
//       s = e === pt;
//     return r(t.dataTypes[0]) || !o["*"] && r("*")
//   }

//   function F(e, t) {
//     var n, i, r = K.ajaxSettings.flatOptions || {};
//     for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
//     return i && K.extend(!0, e, i), e
//   }

//   function I(e, t, n) {
//     for (var i, r, o, s, a = e.contents, l = e.dataTypes;
//       "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
//     if (i)
//       for (r in a)
//         if (a[r] && a[r].test(i)) {
//           l.unshift(r);
//           break
//         }
//     if (l[0] in n) o = l[0];
//     else {
//       for (r in n) {
//         if (!l[0] || e.converters[r + " " + l[0]]) {
//           o = r;
//           break
//         }
//         s || (s = r)
//       }
//       o = o || s
//     }
//     if (o) return o !== l[0] && l.unshift(o), n[o]
//   }

//   function R(e, t, n, i) {
//     var r, o, s, a, l, u = {},
//       c = e.dataTypes.slice();
//     if (c[1])
//       for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
//     for (o = c.shift(); o;)
//       if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
//         if ("*" === o) o = l;
//         else if ("*" !== l && l !== o) {
//           if (!(s = u[l + " " + o] || u["* " + o]))
//             for (r in u)
//               if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
//                 !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
//                 break
//               }
//           if (!0 !== s)
//             if (s && e.throws) t = s(t);
//             else try {
//               t = s(t)
//             } catch (e) {
//               return {
//                 state: "parsererror",
//                 error: s ? e : "No conversion from " + l + " to " + o
//               }
//             }
//         }
//     return {
//       state: "success",
//       data: t
//     }
//   }

//   function z(e, t, n, i) {
//     var r;
//     if (K.isArray(t)) K.each(t, function (t, r) {
//       n || bt.test(e) ? i(e, r) : z(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
//     });
//     else if (n || "object" !== K.type(t)) i(e, t);
//     else
//       for (r in t) z(e + "[" + r + "]", t[r], n, i)
//   }

//   function L(e) {
//     return K.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
//   }
//   var H = [],
//     V = H.slice,
//     U = H.concat,
//     B = H.push,
//     q = H.indexOf,
//     W = {},
//     Y = W.toString,
//     G = W.hasOwnProperty,
//     Z = {},
//     X = e.document,
//     K = function (e, t) {
//       return new K.fn.init(e, t)
//     },
//     J = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
//     Q = /^-ms-/,
//     ee = /-([\da-z])/gi,
//     te = function (e, t) {
//       return t.toUpperCase()
//     };
//   K.fn = K.prototype = {
//     jquery: "2.1.4",
//     constructor: K,
//     selector: "",
//     length: 0,
//     toArray: function () {
//       return V.call(this)
//     },
//     get: function (e) {
//       return null != e ? e < 0 ? this[e + this.length] : this[e] : V.call(this)
//     },
//     pushStack: function (e) {
//       var t = K.merge(this.constructor(), e);
//       return t.prevObject = this, t.context = this.context, t
//     },
//     each: function (e, t) {
//       return K.each(this, e, t)
//     },
//     map: function (e) {
//       return this.pushStack(K.map(this, function (t, n) {
//         return e.call(t, n, t)
//       }))
//     },
//     slice: function () {
//       return this.pushStack(V.apply(this, arguments))
//     },
//     first: function () {
//       return this.eq(0)
//     },
//     last: function () {
//       return this.eq(-1)
//     },
//     eq: function (e) {
//       var t = this.length,
//         n = +e + (e < 0 ? t : 0);
//       return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
//     },
//     end: function () {
//       return this.prevObject || this.constructor(null)
//     },
//     push: B,
//     sort: H.sort,
//     splice: H.splice
//   }, K.extend = K.fn.extend = function () {
//     var e, t, n, i, r, o, s = arguments[0] || {},
//       a = 1,
//       l = arguments.length,
//       u = !1;
//     for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || K.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
//       if (null != (e = arguments[a]))
//         for (t in e) n = s[t], s !== (i = e[t]) && (u && i && (K.isPlainObject(i) || (r = K.isArray(i))) ? (r ? (r = !1, o = n && K.isArray(n) ? n : []) : o = n && K.isPlainObject(n) ? n : {}, s[t] = K.extend(u, o, i)) : void 0 !== i && (s[t] = i));
//     return s
//   }, K.extend({
//     expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""),
//     isReady: !0,
//     error: function (e) {
//       throw new Error(e)
//     },
//     noop: function () { },
//     isFunction: function (e) {
//       return "function" === K.type(e)
//     },
//     isArray: Array.isArray,
//     isWindow: function (e) {
//       return null != e && e === e.window
//     },
//     isNumeric: function (e) {
//       return !K.isArray(e) && e - parseFloat(e) + 1 >= 0
//     },
//     isPlainObject: function (e) {
//       return "object" === K.type(e) && !e.nodeType && !K.isWindow(e) && !(e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf"))
//     },
//     isEmptyObject: function (e) {
//       var t;
//       for (t in e) return !1;
//       return !0
//     },
//     type: function (e) {
//       return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? W[Y.call(e)] || "object" : typeof e
//     },
//     globalEval: function (e) {
//       var t, n = eval;
//       (e = K.trim(e)) && (1 === e.indexOf("use strict") ? ((t = X.createElement("script")).text = e, X.head.appendChild(t).parentNode.removeChild(t)) : n(e))
//     },
//     camelCase: function (e) {
//       return e.replace(Q, "ms-").replace(ee, te)
//     },
//     nodeName: function (e, t) {
//       return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
//     },
//     each: function (e, t, i) {
//       var r = 0,
//         o = e.length,
//         s = n(e);
//       if (i) {
//         if (s)
//           for (; r < o && !1 !== t.apply(e[r], i); r++);
//         else
//           for (r in e)
//             if (!1 === t.apply(e[r], i)) break
//       } else if (s)
//         for (; r < o && !1 !== t.call(e[r], r, e[r]); r++);
//       else
//         for (r in e)
//           if (!1 === t.call(e[r], r, e[r])) break;
//       return e
//     },
//     trim: function (e) {
//       return null == e ? "" : (e + "").replace(J, "")
//     },
//     makeArray: function (e, t) {
//       var i = t || [];
//       return null != e && (n(Object(e)) ? K.merge(i, "string" == typeof e ? [e] : e) : B.call(i, e)), i
//     },
//     inArray: function (e, t, n) {
//       return null == t ? -1 : q.call(t, e, n)
//     },
//     merge: function (e, t) {
//       for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
//       return e.length = r, e
//     },
//     grep: function (e, t, n) {
//       for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
//       return i
//     },
//     map: function (e, t, i) {
//       var r, o = 0,
//         s = e.length,
//         a = [];
//       if (n(e))
//         for (; o < s; o++) null != (r = t(e[o], o, i)) && a.push(r);
//       else
//         for (o in e) null != (r = t(e[o], o, i)) && a.push(r);
//       return U.apply([], a)
//     },
//     guid: 1,
//     proxy: function (e, t) {
//       var n, i, r;
//       if ("string" == typeof t && (n = e[t], t = e, e = n), K.isFunction(e)) return i = V.call(arguments, 2), r = function () {
//         return e.apply(t || this, i.concat(V.call(arguments)))
//       }, r.guid = e.guid = e.guid || K.guid++ , r
//     },
//     now: Date.now,
//     support: Z
//   }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
//     W["[object " + t + "]"] = t.toLowerCase()
//   });
//   var ne = function (e) {
//     function t(e, t, n, i) {
//       var r, o, s, a, u, d, f, h, p, m;
//       if ((t ? t.ownerDocument || t : R) !== _ && M(t), t = t || _, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
//       if (!i && D) {
//         if (11 !== a && (r = ge.exec(e)))
//           if (s = r[1]) {
//             if (9 === a) {
//               if (!(o = t.getElementById(s)) || !o.parentNode) return n;
//               if (o.id === s) return n.push(o), n
//             } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && F(t, o) && o.id === s) return n.push(o), n
//           } else {
//             if (r[2]) return X.apply(n, t.getElementsByTagName(e)), n;
//             if ((s = r[3]) && b.getElementsByClassName) return X.apply(n, t.getElementsByClassName(s)), n
//           }
//         if (b.qsa && (!O || !O.test(e))) {
//           if (h = f = I, p = t, m = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
//             for (d = S(e), (f = t.getAttribute("id")) ? h = f.replace(ye, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = d.length; u--;) d[u] = h + c(d[u]);
//             p = ve.test(e) && l(t.parentNode) || t, m = d.join(",")
//           }
//           if (m) try {
//             return X.apply(n, p.querySelectorAll(m)), n
//           } catch (e) { } finally {
//               f || t.removeAttribute("id")
//             }
//         }
//       }
//       return k(e.replace(se, "$1"), t, n, i)
//     }

//     function n() {
//       function e(n, i) {
//         return t.push(n + " ") > $.cacheLength && delete e[t.shift()], e[n + " "] = i
//       }
//       var t = [];
//       return e
//     }

//     function i(e) {
//       return e[I] = !0, e
//     }

//     function r(e) {
//       var t = _.createElement("div");
//       try {
//         return !!e(t)
//       } catch (e) {
//         return !1
//       } finally {
//         t.parentNode && t.parentNode.removeChild(t), t = null
//       }
//     }

//     function o(e, t) {
//       for (var n = e.split("|"), i = e.length; i--;) $.attrHandle[n[i]] = t
//     }

//     function s(e, t) {
//       var n = t && e,
//         i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || q) - (~e.sourceIndex || q);
//       if (i) return i;
//       if (n)
//         for (; n = n.nextSibling;)
//           if (n === t) return -1;
//       return e ? 1 : -1
//     }

//     function a(e) {
//       return i(function (t) {
//         return t = +t, i(function (n, i) {
//           for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
//         })
//       })
//     }

//     function l(e) {
//       return e && void 0 !== e.getElementsByTagName && e
//     }

//     function u() { }

//     function c(e) {
//       for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
//       return i
//     }

//     function d(e, t, n) {
//       var i = t.dir,
//         r = n && "parentNode" === i,
//         o = L++;
//       return t.first ? function (t, n, o) {
//         for (; t = t[i];)
//           if (1 === t.nodeType || r) return e(t, n, o)
//       } : function (t, n, s) {
//         var a, l, u = [z, o];
//         if (s) {
//           for (; t = t[i];)
//             if ((1 === t.nodeType || r) && e(t, n, s)) return !0
//         } else
//           for (; t = t[i];)
//             if (1 === t.nodeType || r) {
//               if (l = t[I] || (t[I] = {}), (a = l[i]) && a[0] === z && a[1] === o) return u[2] = a[2];
//               if (l[i] = u, u[2] = e(t, n, s)) return !0
//             }
//       }
//     }

//     function f(e) {
//       return e.length > 1 ? function (t, n, i) {
//         for (var r = e.length; r--;)
//           if (!e[r](t, n, i)) return !1;
//         return !0
//       } : e[0]
//     }

//     function h(e, n, i) {
//       for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
//       return i
//     }

//     function p(e, t, n, i, r) {
//       for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
//       return s
//     }

//     function m(e, t, n, r, o, s) {
//       return r && !r[I] && (r = m(r)), o && !o[I] && (o = m(o, s)), i(function (i, s, a, l) {
//         var u, c, d, f = [],
//           m = [],
//           g = s.length,
//           v = i || h(t || "*", a.nodeType ? [a] : a, []),
//           y = !e || !i && t ? v : p(v, f, e, a, l),
//           b = n ? o || (i ? e : g || r) ? [] : s : y;
//         if (n && n(y, b, a, l), r)
//           for (u = p(b, m), r(u, [], a, l), c = u.length; c--;)(d = u[c]) && (b[m[c]] = !(y[m[c]] = d));
//         if (i) {
//           if (o || e) {
//             if (o) {
//               for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
//               o(null, b = [], u, l)
//             }
//             for (c = b.length; c--;)(d = b[c]) && (u = o ? J(i, d) : f[c]) > -1 && (i[u] = !(s[u] = d))
//           }
//         } else b = p(b === s ? b.splice(g, b.length) : b), o ? o(null, s, b, l) : X.apply(s, b)
//       })
//     }

//     function g(e) {
//       for (var t, n, i, r = e.length, o = $.relative[e[0].type], s = o || $.relative[" "], a = o ? 1 : 0, l = d(function (e) {
//         return e === t
//       }, s, !0), u = d(function (e) {
//         return J(t, e) > -1
//       }, s, !0), h = [function (e, n, i) {
//         var r = !o && (i || n !== T) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
//         return t = null, r
//       }]; a < r; a++)
//         if (n = $.relative[e[a].type]) h = [d(f(h), n)];
//         else {
//           if ((n = $.filter[e[a].type].apply(null, e[a].matches))[I]) {
//             for (i = ++a; i < r && !$.relative[e[i].type]; i++);
//             return m(a > 1 && f(h), a > 1 && c(e.slice(0, a - 1).concat({
//               value: " " === e[a - 2].type ? "*" : ""
//             })).replace(se, "$1"), n, a < i && g(e.slice(a, i)), i < r && g(e = e.slice(i)), i < r && c(e))
//           }
//           h.push(n)
//         }
//       return f(h)
//     }

//     function v(e, n) {
//       var r = n.length > 0,
//         o = e.length > 0,
//         s = function (i, s, a, l, u) {
//           var c, d, f, h = 0,
//             m = "0",
//             g = i && [],
//             v = [],
//             y = T,
//             b = i || o && $.find.TAG("*", u),
//             w = z += null == y ? 1 : Math.random() || .1,
//             x = b.length;
//           for (u && (T = s !== _ && s); m !== x && null != (c = b[m]); m++) {
//             if (o && c) {
//               for (d = 0; f = e[d++];)
//                 if (f(c, s, a)) {
//                   l.push(c);
//                   break
//                 }
//               u && (z = w)
//             }
//             r && ((c = !f && c) && h-- , i && g.push(c))
//           }
//           if (h += m, r && m !== h) {
//             for (d = 0; f = n[d++];) f(g, v, s, a);
//             if (i) {
//               if (h > 0)
//                 for (; m--;) g[m] || v[m] || (v[m] = G.call(l));
//               v = p(v)
//             }
//             X.apply(l, v), u && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
//           }
//           return u && (z = w, T = y), g
//         };
//       return r ? i(s) : s
//     }
//     var y, b, $, w, x, S, C, k, T, E, j, M, _, A, D, O, P, N, F, I = "sizzle" + 1 * new Date,
//       R = e.document,
//       z = 0,
//       L = 0,
//       H = n(),
//       V = n(),
//       U = n(),
//       B = function (e, t) {
//         return e === t && (j = !0), 0
//       },
//       q = 1 << 31,
//       W = {}.hasOwnProperty,
//       Y = [],
//       G = Y.pop,
//       Z = Y.push,
//       X = Y.push,
//       K = Y.slice,
//       J = function (e, t) {
//         for (var n = 0, i = e.length; n < i; n++)
//           if (e[n] === t) return n;
//         return -1
//       },
//       Q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
//       ee = "[\\x20\\t\\r\\n\\f]",
//       te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
//       ne = te.replace("w", "w#"),
//       ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ee + "*\\]",
//       re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
//       oe = new RegExp(ee + "+", "g"),
//       se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
//       ae = new RegExp("^" + ee + "*," + ee + "*"),
//       le = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
//       ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
//       ce = new RegExp(re),
//       de = new RegExp("^" + ne + "$"),
//       fe = {
//         ID: new RegExp("^#(" + te + ")"),
//         CLASS: new RegExp("^\\.(" + te + ")"),
//         TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
//         ATTR: new RegExp("^" + ie),
//         PSEUDO: new RegExp("^" + re),
//         CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
//         bool: new RegExp("^(?:" + Q + ")$", "i"),
//         needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
//       },
//       he = /^(?:input|select|textarea|button)$/i,
//       pe = /^h\d$/i,
//       me = /^[^{]+\{\s*\[native \w/,
//       ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
//       ve = /[+~]/,
//       ye = /'|\\/g,
//       be = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
//       $e = function (e, t, n) {
//         var i = "0x" + t - 65536;
//         return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
//       },
//       we = function () {
//         M()
//       };
//     try {
//       X.apply(Y = K.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType
//     } catch (e) {
//       X = {
//         apply: Y.length ? function (e, t) {
//           Z.apply(e, K.call(t))
//         } : function (e, t) {
//           for (var n = e.length, i = 0; e[n++] = t[i++];);
//           e.length = n - 1
//         }
//       }
//     }
//     b = t.support = {}, x = t.isXML = function (e) {
//       var t = e && (e.ownerDocument || e).documentElement;
//       return !!t && "HTML" !== t.nodeName
//     }, M = t.setDocument = function (e) {
//       var t, n, i = e ? e.ownerDocument || e : R;
//       return i !== _ && 9 === i.nodeType && i.documentElement ? (_ = i, A = i.documentElement, (n = i.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), D = !x(i), b.attributes = r(function (e) {
//         return e.className = "i", !e.getAttribute("className")
//       }), b.getElementsByTagName = r(function (e) {
//         return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
//       }), b.getElementsByClassName = me.test(i.getElementsByClassName), b.getById = r(function (e) {
//         return A.appendChild(e).id = I, !i.getElementsByName || !i.getElementsByName(I).length
//       }), b.getById ? ($.find.ID = function (e, t) {
//         if (void 0 !== t.getElementById && D) {
//           var n = t.getElementById(e);
//           return n && n.parentNode ? [n] : []
//         }
//       }, $.filter.ID = function (e) {
//         var t = e.replace(be, $e);
//         return function (e) {
//           return e.getAttribute("id") === t
//         }
//       }) : (delete $.find.ID, $.filter.ID = function (e) {
//         var t = e.replace(be, $e);
//         return function (e) {
//           var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
//           return n && n.value === t
//         }
//       }), $.find.TAG = b.getElementsByTagName ? function (e, t) {
//         return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
//       } : function (e, t) {
//         var n, i = [],
//           r = 0,
//           o = t.getElementsByTagName(e);
//         if ("*" === e) {
//           for (; n = o[r++];) 1 === n.nodeType && i.push(n);
//           return i
//         }
//         return o
//       }, $.find.CLASS = b.getElementsByClassName && function (e, t) {
//         if (D) return t.getElementsByClassName(e)
//       }, P = [], O = [], (b.qsa = me.test(i.querySelectorAll)) && (r(function (e) {
//         A.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ee + "*(?:value|" + Q + ")"), e.querySelectorAll("[id~=" + I + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || O.push(".#.+[+~]")
//       }), r(function (e) {
//         var t = i.createElement("input");
//         t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
//       })), (b.matchesSelector = me.test(N = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && r(function (e) {
//         b.disconnectedMatch = N.call(e, "div"), N.call(e, "[s!='']:x"), P.push("!=", re)
//       }), O = O.length && new RegExp(O.join("|")), P = P.length && new RegExp(P.join("|")), t = me.test(A.compareDocumentPosition), F = t || me.test(A.contains) ? function (e, t) {
//         var n = 9 === e.nodeType ? e.documentElement : e,
//           i = t && t.parentNode;
//         return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
//       } : function (e, t) {
//         if (t)
//           for (; t = t.parentNode;)
//             if (t === e) return !0;
//         return !1
//       }, B = t ? function (e, t) {
//         if (e === t) return j = !0, 0;
//         var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
//         return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === R && F(R, e) ? -1 : t === i || t.ownerDocument === R && F(R, t) ? 1 : E ? J(E, e) - J(E, t) : 0 : 4 & n ? -1 : 1)
//       } : function (e, t) {
//         if (e === t) return j = !0, 0;
//         var n, r = 0,
//           o = e.parentNode,
//           a = t.parentNode,
//           l = [e],
//           u = [t];
//         if (!o || !a) return e === i ? -1 : t === i ? 1 : o ? -1 : a ? 1 : E ? J(E, e) - J(E, t) : 0;
//         if (o === a) return s(e, t);
//         for (n = e; n = n.parentNode;) l.unshift(n);
//         for (n = t; n = n.parentNode;) u.unshift(n);
//         for (; l[r] === u[r];) r++;
//         return r ? s(l[r], u[r]) : l[r] === R ? -1 : u[r] === R ? 1 : 0
//       }, i) : _
//     }, t.matches = function (e, n) {
//       return t(e, null, null, n)
//     }, t.matchesSelector = function (e, n) {
//       if ((e.ownerDocument || e) !== _ && M(e), n = n.replace(ue, "='$1']"), b.matchesSelector && D && (!P || !P.test(n)) && (!O || !O.test(n))) try {
//         var i = N.call(e, n);
//         if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
//       } catch (e) { }
//       return t(n, _, null, [e]).length > 0
//     }, t.contains = function (e, t) {
//       return (e.ownerDocument || e) !== _ && M(e), F(e, t)
//     }, t.attr = function (e, t) {
//       (e.ownerDocument || e) !== _ && M(e);
//       var n = $.attrHandle[t.toLowerCase()],
//         i = n && W.call($.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
//       return void 0 !== i ? i : b.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
//     }, t.error = function (e) {
//       throw new Error("Syntax error, unrecognized expression: " + e)
//     }, t.uniqueSort = function (e) {
//       var t, n = [],
//         i = 0,
//         r = 0;
//       if (j = !b.detectDuplicates, E = !b.sortStable && e.slice(0), e.sort(B), j) {
//         for (; t = e[r++];) t === e[r] && (i = n.push(r));
//         for (; i--;) e.splice(n[i], 1)
//       }
//       return E = null, e
//     }, w = t.getText = function (e) {
//       var t, n = "",
//         i = 0,
//         r = e.nodeType;
//       if (r) {
//         if (1 === r || 9 === r || 11 === r) {
//           if ("string" == typeof e.textContent) return e.textContent;
//           for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
//         } else if (3 === r || 4 === r) return e.nodeValue
//       } else
//         for (; t = e[i++];) n += w(t);
//       return n
//     }, ($ = t.selectors = {
//       cacheLength: 50,
//       createPseudo: i,
//       match: fe,
//       attrHandle: {},
//       find: {},
//       relative: {
//         ">": {
//           dir: "parentNode",
//           first: !0
//         },
//         " ": {
//           dir: "parentNode"
//         },
//         "+": {
//           dir: "previousSibling",
//           first: !0
//         },
//         "~": {
//           dir: "previousSibling"
//         }
//       },
//       preFilter: {
//         ATTR: function (e) {
//           return e[1] = e[1].replace(be, $e), e[3] = (e[3] || e[4] || e[5] || "").replace(be, $e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
//         },
//         CHILD: function (e) {
//           return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
//         },
//         PSEUDO: function (e) {
//           var t, n = !e[6] && e[2];
//           return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
//         }
//       },
//       filter: {
//         TAG: function (e) {
//           var t = e.replace(be, $e).toLowerCase();
//           return "*" === e ? function () {
//             return !0
//           } : function (e) {
//             return e.nodeName && e.nodeName.toLowerCase() === t
//           }
//         },
//         CLASS: function (e) {
//           var t = H[e + " "];
//           return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && H(e, function (e) {
//             return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
//           })
//         },
//         ATTR: function (e, n, i) {
//           return function (r) {
//             var o = t.attr(r, e);
//             return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
//           }
//         },
//         CHILD: function (e, t, n, i, r) {
//           var o = "nth" !== e.slice(0, 3),
//             s = "last" !== e.slice(-4),
//             a = "of-type" === t;
//           return 1 === i && 0 === r ? function (e) {
//             return !!e.parentNode
//           } : function (t, n, l) {
//             var u, c, d, f, h, p, m = o !== s ? "nextSibling" : "previousSibling",
//               g = t.parentNode,
//               v = a && t.nodeName.toLowerCase(),
//               y = !l && !a;
//             if (g) {
//               if (o) {
//                 for (; m;) {
//                   for (d = t; d = d[m];)
//                     if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
//                   p = m = "only" === e && !p && "nextSibling"
//                 }
//                 return !0
//               }
//               if (p = [s ? g.firstChild : g.lastChild], s && y) {
//                 for (h = (u = (c = g[I] || (g[I] = {}))[e] || [])[0] === z && u[1], f = u[0] === z && u[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (f = h = 0) || p.pop();)
//                   if (1 === d.nodeType && ++f && d === t) {
//                     c[e] = [z, h, f];
//                     break
//                   }
//               } else if (y && (u = (t[I] || (t[I] = {}))[e]) && u[0] === z) f = u[1];
//               else
//                 for (;
//                   (d = ++h && d && d[m] || (f = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[I] || (d[I] = {}))[e] = [z, f]), d !== t)););
//               return (f -= r) === i || f % i == 0 && f / i >= 0
//             }
//           }
//         },
//         PSEUDO: function (e, n) {
//           var r, o = $.pseudos[e] || $.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
//           return o[I] ? o(n) : o.length > 1 ? (r = [e, e, "", n], $.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
//             for (var i, r = o(e, n), s = r.length; s--;) e[i = J(e, r[s])] = !(t[i] = r[s])
//           }) : function (e) {
//             return o(e, 0, r)
//           }) : o
//         }
//       },
//       pseudos: {
//         not: i(function (e) {
//           var t = [],
//             n = [],
//             r = C(e.replace(se, "$1"));
//           return r[I] ? i(function (e, t, n, i) {
//             for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
//           }) : function (e, i, o) {
//             return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
//           }
//         }),
//         has: i(function (e) {
//           return function (n) {
//             return t(e, n).length > 0
//           }
//         }),
//         contains: i(function (e) {
//           return e = e.replace(be, $e),
//             function (t) {
//               return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
//             }
//         }),
//         lang: i(function (e) {
//           return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, $e).toLowerCase(),
//             function (t) {
//               var n;
//               do {
//                 if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
//               } while ((t = t.parentNode) && 1 === t.nodeType);
//               return !1
//             }
//         }),
//         target: function (t) {
//           var n = e.location && e.location.hash;
//           return n && n.slice(1) === t.id
//         },
//         root: function (e) {
//           return e === A
//         },
//         focus: function (e) {
//           return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
//         },
//         enabled: function (e) {
//           return !1 === e.disabled
//         },
//         disabled: function (e) {
//           return !0 === e.disabled
//         },
//         checked: function (e) {
//           var t = e.nodeName.toLowerCase();
//           return "input" === t && !!e.checked || "option" === t && !!e.selected
//         },
//         selected: function (e) {
//           return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
//         },
//         empty: function (e) {
//           for (e = e.firstChild; e; e = e.nextSibling)
//             if (e.nodeType < 6) return !1;
//           return !0
//         },
//         parent: function (e) {
//           return !$.pseudos.empty(e)
//         },
//         header: function (e) {
//           return pe.test(e.nodeName)
//         },
//         input: function (e) {
//           return he.test(e.nodeName)
//         },
//         button: function (e) {
//           var t = e.nodeName.toLowerCase();
//           return "input" === t && "button" === e.type || "button" === t
//         },
//         text: function (e) {
//           var t;
//           return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
//         },
//         first: a(function () {
//           return [0]
//         }),
//         last: a(function (e, t) {
//           return [t - 1]
//         }),
//         eq: a(function (e, t, n) {
//           return [n < 0 ? n + t : n]
//         }),
//         even: a(function (e, t) {
//           for (var n = 0; n < t; n += 2) e.push(n);
//           return e
//         }),
//         odd: a(function (e, t) {
//           for (var n = 1; n < t; n += 2) e.push(n);
//           return e
//         }),
//         lt: a(function (e, t, n) {
//           for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
//           return e
//         }),
//         gt: a(function (e, t, n) {
//           for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
//           return e
//         })
//       }
//     }).pseudos.nth = $.pseudos.eq;
//     for (y in {
//       radio: !0,
//       checkbox: !0,
//       file: !0,
//       password: !0,
//       image: !0
//     }) $.pseudos[y] = function (e) {
//       return function (t) {
//         return "input" === t.nodeName.toLowerCase() && t.type === e
//       }
//     }(y);
//     for (y in {
//       submit: !0,
//       reset: !0
//     }) $.pseudos[y] = function (e) {
//       return function (t) {
//         var n = t.nodeName.toLowerCase();
//         return ("input" === n || "button" === n) && t.type === e
//       }
//     }(y);
//     return u.prototype = $.filters = $.pseudos, $.setFilters = new u, S = t.tokenize = function (e, n) {
//       var i, r, o, s, a, l, u, c = V[e + " "];
//       if (c) return n ? 0 : c.slice(0);
//       for (a = e, l = [], u = $.preFilter; a;) {
//         i && !(r = ae.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = le.exec(a)) && (i = r.shift(), o.push({
//           value: i,
//           type: r[0].replace(se, " ")
//         }), a = a.slice(i.length));
//         for (s in $.filter) !(r = fe[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
//           value: i,
//           type: s,
//           matches: r
//         }), a = a.slice(i.length));
//         if (!i) break
//       }
//       return n ? a.length : a ? t.error(e) : V(e, l).slice(0)
//     }, C = t.compile = function (e, t) {
//       var n, i = [],
//         r = [],
//         o = U[e + " "];
//       if (!o) {
//         for (t || (t = S(e)), n = t.length; n--;)(o = g(t[n]))[I] ? i.push(o) : r.push(o);
//         (o = U(e, v(r, i))).selector = e
//       }
//       return o
//     }, k = t.select = function (e, t, n, i) {
//       var r, o, s, a, u, d = "function" == typeof e && e,
//         f = !i && S(e = d.selector || e);
//       if (n = n || [], 1 === f.length) {
//         if ((o = f[0] = f[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && b.getById && 9 === t.nodeType && D && $.relative[o[1].type]) {
//           if (!(t = ($.find.ID(s.matches[0].replace(be, $e), t) || [])[0])) return n;
//           d && (t = t.parentNode), e = e.slice(o.shift().value.length)
//         }
//         for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !$.relative[a = s.type]);)
//           if ((u = $.find[a]) && (i = u(s.matches[0].replace(be, $e), ve.test(o[0].type) && l(t.parentNode) || t))) {
//             if (o.splice(r, 1), !(e = i.length && c(o))) return X.apply(n, i), n;
//             break
//           }
//       }
//       return (d || C(e, f))(i, t, !D, n, ve.test(e) && l(t.parentNode) || t), n
//     }, b.sortStable = I.split("").sort(B).join("") === I, b.detectDuplicates = !!j, M(), b.sortDetached = r(function (e) {
//       return 1 & e.compareDocumentPosition(_.createElement("div"))
//     }), r(function (e) {
//       return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
//     }) || o("type|href|height|width", function (e, t, n) {
//       if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
//     }), b.attributes && r(function (e) {
//       return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
//     }) || o("value", function (e, t, n) {
//       if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
//     }), r(function (e) {
//       return null == e.getAttribute("disabled")
//     }) || o(Q, function (e, t, n) {
//       var i;
//       if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
//     }), t
//   }(e);
//   K.find = ne, K.expr = ne.selectors, K.expr[":"] = K.expr.pseudos, K.unique = ne.uniqueSort, K.text = ne.getText, K.isXMLDoc = ne.isXML, K.contains = ne.contains;
//   var ie = K.expr.match.needsContext,
//     re = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
//     oe = /^.[^:#\[\.,]*$/;
//   K.filter = function (e, t, n) {
//     var i = t[0];
//     return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? K.find.matchesSelector(i, e) ? [i] : [] : K.find.matches(e, K.grep(t, function (e) {
//       return 1 === e.nodeType
//     }))
//   }, K.fn.extend({
//     find: function (e) {
//       var t, n = this.length,
//         i = [],
//         r = this;
//       if ("string" != typeof e) return this.pushStack(K(e).filter(function () {
//         for (t = 0; t < n; t++)
//           if (K.contains(r[t], this)) return !0
//       }));
//       for (t = 0; t < n; t++) K.find(e, r[t], i);
//       return i = this.pushStack(n > 1 ? K.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
//     },
//     filter: function (e) {
//       return this.pushStack(i(this, e || [], !1))
//     },
//     not: function (e) {
//       return this.pushStack(i(this, e || [], !0))
//     },
//     is: function (e) {
//       return !!i(this, "string" == typeof e && ie.test(e) ? K(e) : e || [], !1).length
//     }
//   });
//   var se, ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
//   (K.fn.init = function (e, t) {
//     var n, i;
//     if (!e) return this;
//     if ("string" == typeof e) {
//       if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ae.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || se).find(e) : this.constructor(t).find(e);
//       if (n[1]) {
//         if (t = t instanceof K ? t[0] : t, K.merge(this, K.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : X, !0)), re.test(n[1]) && K.isPlainObject(t))
//           for (n in t) K.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
//         return this
//       }
//       return (i = X.getElementById(n[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = X, this.selector = e, this
//     }
//     return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : K.isFunction(e) ? void 0 !== se.ready ? se.ready(e) : e(K) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), K.makeArray(e, this))
//   }).prototype = K.fn, se = K(X);
//   var le = /^(?:parents|prev(?:Until|All))/,
//     ue = {
//       children: !0,
//       contents: !0,
//       next: !0,
//       prev: !0
//     };
//   K.extend({
//     dir: function (e, t, n) {
//       for (var i = [], r = void 0 !== n;
//         (e = e[t]) && 9 !== e.nodeType;)
//         if (1 === e.nodeType) {
//           if (r && K(e).is(n)) break;
//           i.push(e)
//         }
//       return i
//     },
//     sibling: function (e, t) {
//       for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
//       return n
//     }
//   }), K.fn.extend({
//     has: function (e) {
//       var t = K(e, this),
//         n = t.length;
//       return this.filter(function () {
//         for (var e = 0; e < n; e++)
//           if (K.contains(this, t[e])) return !0
//       })
//     },
//     closest: function (e, t) {
//       for (var n, i = 0, r = this.length, o = [], s = ie.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; i < r; i++)
//         for (n = this[i]; n && n !== t; n = n.parentNode)
//           if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && K.find.matchesSelector(n, e))) {
//             o.push(n);
//             break
//           }
//       return this.pushStack(o.length > 1 ? K.unique(o) : o)
//     },
//     index: function (e) {
//       return e ? "string" == typeof e ? q.call(K(e), this[0]) : q.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
//     },
//     add: function (e, t) {
//       return this.pushStack(K.unique(K.merge(this.get(), K(e, t))))
//     },
//     addBack: function (e) {
//       return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
//     }
//   }), K.each({
//     parent: function (e) {
//       var t = e.parentNode;
//       return t && 11 !== t.nodeType ? t : null
//     },
//     parents: function (e) {
//       return K.dir(e, "parentNode")
//     },
//     parentsUntil: function (e, t, n) {
//       return K.dir(e, "parentNode", n)
//     },
//     next: function (e) {
//       return r(e, "nextSibling")
//     },
//     prev: function (e) {
//       return r(e, "previousSibling")
//     },
//     nextAll: function (e) {
//       return K.dir(e, "nextSibling")
//     },
//     prevAll: function (e) {
//       return K.dir(e, "previousSibling")
//     },
//     nextUntil: function (e, t, n) {
//       return K.dir(e, "nextSibling", n)
//     },
//     prevUntil: function (e, t, n) {
//       return K.dir(e, "previousSibling", n)
//     },
//     siblings: function (e) {
//       return K.sibling((e.parentNode || {}).firstChild, e)
//     },
//     children: function (e) {
//       return K.sibling(e.firstChild)
//     },
//     contents: function (e) {
//       return e.contentDocument || K.merge([], e.childNodes)
//     }
//   }, function (e, t) {
//     K.fn[e] = function (n, i) {
//       var r = K.map(this, t, n);
//       return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = K.filter(i, r)), this.length > 1 && (ue[e] || K.unique(r), le.test(e) && r.reverse()), this.pushStack(r)
//     }
//   });
//   var ce = /\S+/g,
//     de = {};
//   K.Callbacks = function (e) {
//     var t, n, i, r, s, a, l = [],
//       u = !(e = "string" == typeof e ? de[e] || o(e) : K.extend({}, e)).once && [],
//       c = function (o) {
//         for (t = e.memory && o, n = !0, a = r || 0, r = 0, s = l.length, i = !0; l && a < s; a++)
//           if (!1 === l[a].apply(o[0], o[1]) && e.stopOnFalse) {
//             t = !1;
//             break
//           }
//         i = !1, l && (u ? u.length && c(u.shift()) : t ? l = [] : d.disable())
//       },
//       d = {
//         add: function () {
//           if (l) {
//             var n = l.length;
//             ! function t(n) {
//               K.each(n, function (n, i) {
//                 var r = K.type(i);
//                 "function" === r ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" !== r && t(i)
//               })
//             }(arguments), i ? s = l.length : t && (r = n, c(t))
//           }
//           return this
//         },
//         remove: function () {
//           return l && K.each(arguments, function (e, t) {
//             for (var n;
//               (n = K.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (n <= s && s-- , n <= a && a--)
//           }), this
//         },
//         has: function (e) {
//           return e ? K.inArray(e, l) > -1 : !(!l || !l.length)
//         },
//         empty: function () {
//           return l = [], s = 0, this
//         },
//         disable: function () {
//           return l = u = t = void 0, this
//         },
//         disabled: function () {
//           return !l
//         },
//         lock: function () {
//           return u = void 0, t || d.disable(), this
//         },
//         locked: function () {
//           return !u
//         },
//         fireWith: function (e, t) {
//           return !l || n && !u || (t = [e, (t = t || []).slice ? t.slice() : t], i ? u.push(t) : c(t)), this
//         },
//         fire: function () {
//           return d.fireWith(this, arguments), this
//         },
//         fired: function () {
//           return !!n
//         }
//       };
//     return d
//   }, K.extend({
//     Deferred: function (e) {
//       var t = [
//         ["resolve", "done", K.Callbacks("once memory"), "resolved"],
//         ["reject", "fail", K.Callbacks("once memory"), "rejected"],
//         ["notify", "progress", K.Callbacks("memory")]
//       ],
//         n = "pending",
//         i = {
//           state: function () {
//             return n
//           },
//           always: function () {
//             return r.done(arguments).fail(arguments), this
//           },
//           then: function () {
//             var e = arguments;
//             return K.Deferred(function (n) {
//               K.each(t, function (t, o) {
//                 var s = K.isFunction(e[t]) && e[t];
//                 r[o[1]](function () {
//                   var e = s && s.apply(this, arguments);
//                   e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
//                 })
//               }), e = null
//             }).promise()
//           },
//           promise: function (e) {
//             return null != e ? K.extend(e, i) : i
//           }
//         },
//         r = {};
//       return i.pipe = i.then, K.each(t, function (e, o) {
//         var s = o[2],
//           a = o[3];
//         i[o[1]] = s.add, a && s.add(function () {
//           n = a
//         }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
//           return r[o[0] + "With"](this === r ? i : this, arguments), this
//         }, r[o[0] + "With"] = s.fireWith
//       }), i.promise(r), e && e.call(r, r), r
//     },
//     when: function (e) {
//       var t, n, i, r = 0,
//         o = V.call(arguments),
//         s = o.length,
//         a = 1 !== s || e && K.isFunction(e.promise) ? s : 0,
//         l = 1 === a ? e : K.Deferred(),
//         u = function (e, n, i) {
//           return function (r) {
//             n[e] = this, i[e] = arguments.length > 1 ? V.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
//           }
//         };
//       if (s > 1)
//         for (t = new Array(s), n = new Array(s), i = new Array(s); r < s; r++) o[r] && K.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --a;
//       return a || l.resolveWith(i, o), l.promise()
//     }
//   });
//   var fe;
//   K.fn.ready = function (e) {
//     return K.ready.promise().done(e), this
//   }, K.extend({
//     isReady: !1,
//     readyWait: 1,
//     holdReady: function (e) {
//       e ? K.readyWait++ : K.ready(!0)
//     },
//     ready: function (e) {
//       (!0 === e ? --K.readyWait : K.isReady) || (K.isReady = !0, !0 !== e && --K.readyWait > 0 || (fe.resolveWith(X, [K]), K.fn.triggerHandler && (K(X).triggerHandler("ready"), K(X).off("ready"))))
//     }
//   }), K.ready.promise = function (t) {
//     return fe || (fe = K.Deferred(), "complete" === X.readyState ? setTimeout(K.ready) : (X.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), fe.promise(t)
//   }, K.ready.promise();
//   var he = K.access = function (e, t, n, i, r, o, s) {
//     var a = 0,
//       l = e.length,
//       u = null == n;
//     if ("object" === K.type(n)) {
//       r = !0;
//       for (a in n) K.access(e, t, a, n[a], !0, o, s)
//     } else if (void 0 !== i && (r = !0, K.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
//       return u.call(K(e), n)
//     })), t))
//       for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
//     return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
//   };
//   K.acceptData = function (e) {
//     return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
//   }, a.uid = 1, a.accepts = K.acceptData, a.prototype = {
//     key: function (e) {
//       if (!a.accepts(e)) return 0;
//       var t = {},
//         n = e[this.expando];
//       if (!n) {
//         n = a.uid++;
//         try {
//           t[this.expando] = {
//             value: n
//           }, Object.defineProperties(e, t)
//         } catch (i) {
//           t[this.expando] = n, K.extend(e, t)
//         }
//       }
//       return this.cache[n] || (this.cache[n] = {}), n
//     },
//     set: function (e, t, n) {
//       var i, r = this.key(e),
//         o = this.cache[r];
//       if ("string" == typeof t) o[t] = n;
//       else if (K.isEmptyObject(o)) K.extend(this.cache[r], t);
//       else
//         for (i in t) o[i] = t[i];
//       return o
//     },
//     get: function (e, t) {
//       var n = this.cache[this.key(e)];
//       return void 0 === t ? n : n[t]
//     },
//     access: function (e, t, n) {
//       var i;
//       return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, K.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
//     },
//     remove: function (e, t) {
//       var n, i, r, o = this.key(e),
//         s = this.cache[o];
//       if (void 0 === t) this.cache[o] = {};
//       else {
//         K.isArray(t) ? i = t.concat(t.map(K.camelCase)) : (r = K.camelCase(t), i = t in s ? [t, r] : (i = r) in s ? [i] : i.match(ce) || []), n = i.length;
//         for (; n--;) delete s[i[n]]
//       }
//     },
//     hasData: function (e) {
//       return !K.isEmptyObject(this.cache[e[this.expando]] || {})
//     },
//     discard: function (e) {
//       e[this.expando] && delete this.cache[e[this.expando]]
//     }
//   };
//   var pe = new a,
//     me = new a,
//     ge = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
//     ve = /([A-Z])/g;
//   K.extend({
//     hasData: function (e) {
//       return me.hasData(e) || pe.hasData(e)
//     },
//     data: function (e, t, n) {
//       return me.access(e, t, n)
//     },
//     removeData: function (e, t) {
//       me.remove(e, t)
//     },
//     _data: function (e, t, n) {
//       return pe.access(e, t, n)
//     },
//     _removeData: function (e, t) {
//       pe.remove(e, t)
//     }
//   }), K.fn.extend({
//     data: function (e, t) {
//       var n, i, r, o = this[0],
//         s = o && o.attributes;
//       if (void 0 === e) {
//         if (this.length && (r = me.get(o), 1 === o.nodeType && !pe.get(o, "hasDataAttrs"))) {
//           for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = K.camelCase(i.slice(5)), l(o, i, r[i]));
//           pe.set(o, "hasDataAttrs", !0)
//         }
//         return r
//       }
//       return "object" == typeof e ? this.each(function () {
//         me.set(this, e)
//       }) : he(this, function (t) {
//         var n, i = K.camelCase(e);
//         if (o && void 0 === t) {
//           if (void 0 !== (n = me.get(o, e))) return n;
//           if (void 0 !== (n = me.get(o, i))) return n;
//           if (void 0 !== (n = l(o, i, void 0))) return n
//         } else this.each(function () {
//           var n = me.get(this, i);
//           me.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && me.set(this, e, t)
//         })
//       }, null, t, arguments.length > 1, null, !0)
//     },
//     removeData: function (e) {
//       return this.each(function () {
//         me.remove(this, e)
//       })
//     }
//   }), K.extend({
//     queue: function (e, t, n) {
//       var i;
//       if (e) return t = (t || "fx") + "queue", i = pe.get(e, t), n && (!i || K.isArray(n) ? i = pe.access(e, t, K.makeArray(n)) : i.push(n)), i || []
//     },
//     dequeue: function (e, t) {
//       t = t || "fx";
//       var n = K.queue(e, t),
//         i = n.length,
//         r = n.shift(),
//         o = K._queueHooks(e, t);
//       "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
//         K.dequeue(e, t)
//       }, o)), !i && o && o.empty.fire()
//     },
//     _queueHooks: function (e, t) {
//       var n = t + "queueHooks";
//       return pe.get(e, n) || pe.access(e, n, {
//         empty: K.Callbacks("once memory").add(function () {
//           pe.remove(e, [t + "queue", n])
//         })
//       })
//     }
//   }), K.fn.extend({
//     queue: function (e, t) {
//       var n = 2;
//       return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? K.queue(this[0], e) : void 0 === t ? this : this.each(function () {
//         var n = K.queue(this, e, t);
//         K._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && K.dequeue(this, e)
//       })
//     },
//     dequeue: function (e) {
//       return this.each(function () {
//         K.dequeue(this, e)
//       })
//     },
//     clearQueue: function (e) {
//       return this.queue(e || "fx", [])
//     },
//     promise: function (e, t) {
//       var n, i = 1,
//         r = K.Deferred(),
//         o = this,
//         s = this.length,
//         a = function () {
//           --i || r.resolveWith(o, [o])
//         };
//       for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = pe.get(o[s], e + "queueHooks")) && n.empty && (i++ , n.empty.add(a));
//       return a(), r.promise(t)
//     }
//   });
//   var ye = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
//     be = ["Top", "Right", "Bottom", "Left"],
//     $e = function (e, t) {
//       return e = t || e, "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
//     },
//     we = /^(?:checkbox|radio)$/i;
//   ! function () {
//     var e = X.createDocumentFragment().appendChild(X.createElement("div")),
//       t = X.createElement("input");
//     t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), Z.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Z.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
//   }();
//   Z.focusinBubbles = "onfocusin" in e;
//   var xe = /^key/,
//     Se = /^(?:mouse|pointer|contextmenu)|click/,
//     Ce = /^(?:focusinfocus|focusoutblur)$/,
//     ke = /^([^.]*)(?:\.(.+)|)$/;
//   K.event = {
//     global: {},
//     add: function (e, t, n, i, r) {
//       var o, s, a, l, u, c, d, f, h, p, m, g = pe.get(e);
//       if (g)
//         for (n.handler && (n = (o = n).handler, r = o.selector), n.guid || (n.guid = K.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
//           return void 0 !== K && K.event.triggered !== t.type ? K.event.dispatch.apply(e, arguments) : void 0
//         }), u = (t = (t || "").match(ce) || [""]).length; u--;) h = m = (a = ke.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), h && (d = K.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = K.event.special[h] || {}, c = K.extend({
//           type: h,
//           origType: m,
//           data: i,
//           handler: n,
//           guid: n.guid,
//           selector: r,
//           needsContext: r && K.expr.match.needsContext.test(r),
//           namespace: p.join(".")
//         }, o), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s, !1)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), K.event.global[h] = !0)
//     },
//     remove: function (e, t, n, i, r) {
//       var o, s, a, l, u, c, d, f, h, p, m, g = pe.hasData(e) && pe.get(e);
//       if (g && (l = g.events)) {
//         for (u = (t = (t || "").match(ce) || [""]).length; u--;)
//           if (a = ke.exec(t[u]) || [], h = m = a[1], p = (a[2] || "").split(".").sort(), h) {
//             for (d = K.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) c = f[o], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount-- , d.remove && d.remove.call(e, c));
//             s && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || K.removeEvent(e, h, g.handle), delete l[h])
//           } else
//             for (h in l) K.event.remove(e, h + t[u], n, i, !0);
//         K.isEmptyObject(l) && (delete g.handle, pe.remove(e, "events"))
//       }
//     },
//     trigger: function (t, n, i, r) {
//       var o, s, a, l, u, c, d, f = [i || X],
//         h = G.call(t, "type") ? t.type : t,
//         p = G.call(t, "namespace") ? t.namespace.split(".") : [];
//       if (s = a = i = i || X, 3 !== i.nodeType && 8 !== i.nodeType && !Ce.test(h + K.event.triggered) && (h.indexOf(".") >= 0 && (h = (p = h.split(".")).shift(), p.sort()), u = h.indexOf(":") < 0 && "on" + h, t = t[K.expando] ? t : new K.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : K.makeArray(n, [t]), d = K.event.special[h] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
//         if (!r && !d.noBubble && !K.isWindow(i)) {
//           for (l = d.delegateType || h, Ce.test(l + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
//           a === (i.ownerDocument || X) && f.push(a.defaultView || a.parentWindow || e)
//         }
//         for (o = 0;
//           (s = f[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || h, (c = (pe.get(s, "events") || {})[t.type] && pe.get(s, "handle")) && c.apply(s, n), (c = u && s[u]) && c.apply && K.acceptData(s) && (t.result = c.apply(s, n), !1 === t.result && t.preventDefault());
//         return t.type = h, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !K.acceptData(i) || u && K.isFunction(i[h]) && !K.isWindow(i) && ((a = i[u]) && (i[u] = null), K.event.triggered = h, i[h](), K.event.triggered = void 0, a && (i[u] = a)), t.result
//       }
//     },
//     dispatch: function (e) {
//       e = K.event.fix(e);
//       var t, n, i, r, o, s = [],
//         a = V.call(arguments),
//         l = (pe.get(this, "events") || {})[e.type] || [],
//         u = K.event.special[e.type] || {};
//       if (a[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
//         for (s = K.event.handlers.call(this, e, l), t = 0;
//           (r = s[t++]) && !e.isPropagationStopped();)
//           for (e.currentTarget = r.elem, n = 0;
//             (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (i = ((K.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
//         return u.postDispatch && u.postDispatch.call(this, e), e.result
//       }
//     },
//     handlers: function (e, t) {
//       var n, i, r, o, s = [],
//         a = t.delegateCount,
//         l = e.target;
//       if (a && l.nodeType && (!e.button || "click" !== e.type))
//         for (; l !== this; l = l.parentNode || this)
//           if (!0 !== l.disabled || "click" !== e.type) {
//             for (i = [], n = 0; n < a; n++) void 0 === i[r = (o = t[n]).selector + " "] && (i[r] = o.needsContext ? K(r, this).index(l) >= 0 : K.find(r, this, null, [l]).length), i[r] && i.push(o);
//             i.length && s.push({
//               elem: l,
//               handlers: i
//             })
//           }
//       return a < t.length && s.push({
//         elem: this,
//         handlers: t.slice(a)
//       }), s
//     },
//     props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
//     fixHooks: {},
//     keyHooks: {
//       props: "char charCode key keyCode".split(" "),
//       filter: function (e, t) {
//         return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
//       }
//     },
//     mouseHooks: {
//       props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
//       filter: function (e, t) {
//         var n, i, r, o = t.button;
//         return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || X).documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
//       }
//     },
//     fix: function (e) {
//       if (e[K.expando]) return e;
//       var t, n, i, r = e.type,
//         o = e,
//         s = this.fixHooks[r];
//       for (s || (this.fixHooks[r] = s = Se.test(r) ? this.mouseHooks : xe.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new K.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
//       return e.target || (e.target = X), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
//     },
//     special: {
//       load: {
//         noBubble: !0
//       },
//       focus: {
//         trigger: function () {
//           if (this !== d() && this.focus) return this.focus(), !1
//         },
//         delegateType: "focusin"
//       },
//       blur: {
//         trigger: function () {
//           if (this === d() && this.blur) return this.blur(), !1
//         },
//         delegateType: "focusout"
//       },
//       click: {
//         trigger: function () {
//           if ("checkbox" === this.type && this.click && K.nodeName(this, "input")) return this.click(), !1
//         },
//         _default: function (e) {
//           return K.nodeName(e.target, "a")
//         }
//       },
//       beforeunload: {
//         postDispatch: function (e) {
//           void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
//         }
//       }
//     },
//     simulate: function (e, t, n, i) {
//       var r = K.extend(new K.Event, n, {
//         type: e,
//         isSimulated: !0,
//         originalEvent: {}
//       });
//       i ? K.event.trigger(r, null, t) : K.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
//     }
//   }, K.removeEvent = function (e, t, n) {
//     e.removeEventListener && e.removeEventListener(t, n, !1)
//   }, K.Event = function (e, t) {
//     if (!(this instanceof K.Event)) return new K.Event(e, t);
//     e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? u : c) : this.type = e, t && K.extend(this, t), this.timeStamp = e && e.timeStamp || K.now(), this[K.expando] = !0
//   }, K.Event.prototype = {
//     isDefaultPrevented: c,
//     isPropagationStopped: c,
//     isImmediatePropagationStopped: c,
//     preventDefault: function () {
//       var e = this.originalEvent;
//       this.isDefaultPrevented = u, e && e.preventDefault && e.preventDefault()
//     },
//     stopPropagation: function () {
//       var e = this.originalEvent;
//       this.isPropagationStopped = u, e && e.stopPropagation && e.stopPropagation()
//     },
//     stopImmediatePropagation: function () {
//       var e = this.originalEvent;
//       this.isImmediatePropagationStopped = u, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
//     }
//   }, K.each({
//     mouseenter: "mouseover",
//     mouseleave: "mouseout",
//     pointerenter: "pointerover",
//     pointerleave: "pointerout"
//   }, function (e, t) {
//     K.event.special[e] = {
//       delegateType: t,
//       bindType: t,
//       handle: function (e) {
//         var n, i = this,
//           r = e.relatedTarget,
//           o = e.handleObj;
//         return r && (r === i || K.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
//       }
//     }
//   }), Z.focusinBubbles || K.each({
//     focus: "focusin",
//     blur: "focusout"
//   }, function (e, t) {
//     var n = function (e) {
//       K.event.simulate(t, e.target, K.event.fix(e), !0)
//     };
//     K.event.special[t] = {
//       setup: function () {
//         var i = this.ownerDocument || this,
//           r = pe.access(i, t);
//         r || i.addEventListener(e, n, !0), pe.access(i, t, (r || 0) + 1)
//       },
//       teardown: function () {
//         var i = this.ownerDocument || this,
//           r = pe.access(i, t) - 1;
//         r ? pe.access(i, t, r) : (i.removeEventListener(e, n, !0), pe.remove(i, t))
//       }
//     }
//   }), K.fn.extend({
//     on: function (e, t, n, i, r) {
//       var o, s;
//       if ("object" == typeof e) {
//         "string" != typeof t && (n = n || t, t = void 0);
//         for (s in e) this.on(s, t, n, e[s], r);
//         return this
//       }
//       if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = c;
//       else if (!i) return this;
//       return 1 === r && (o = i, (i = function (e) {
//         return K().off(e), o.apply(this, arguments)
//       }).guid = o.guid || (o.guid = K.guid++)), this.each(function () {
//         K.event.add(this, e, i, n, t)
//       })
//     },
//     one: function (e, t, n, i) {
//       return this.on(e, t, n, i, 1)
//     },
//     off: function (e, t, n) {
//       var i, r;
//       if (e && e.preventDefault && e.handleObj) return i = e.handleObj, K(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
//       if ("object" == typeof e) {
//         for (r in e) this.off(r, t, e[r]);
//         return this
//       }
//       return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = c), this.each(function () {
//         K.event.remove(this, e, n, t)
//       })
//     },
//     trigger: function (e, t) {
//       return this.each(function () {
//         K.event.trigger(e, t, this)
//       })
//     },
//     triggerHandler: function (e, t) {
//       var n = this[0];
//       if (n) return K.event.trigger(e, t, n, !0)
//     }
//   });
//   var Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
//     Ee = /<([\w:]+)/,
//     je = /<|&#?\w+;/,
//     Me = /<(?:script|style|link)/i,
//     _e = /checked\s*(?:[^=]|=\s*.checked.)/i,
//     Ae = /^$|\/(?:java|ecma)script/i,
//     De = /^true\/(.*)/,
//     Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
//     Pe = {
//       option: [1, "<select multiple='multiple'>", "</select>"],
//       thead: [1, "<table>", "</table>"],
//       col: [2, "<table><colgroup>", "</colgroup></table>"],
//       tr: [2, "<table><tbody>", "</tbody></table>"],
//       td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
//       _default: [0, "", ""]
//     };
//   Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td, K.extend({
//     clone: function (e, t, n) {
//       var i, r, o, s, a = e.cloneNode(!0),
//         l = K.contains(e.ownerDocument, e);
//       if (!(Z.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e)))
//         for (s = v(a), i = 0, r = (o = v(e)).length; i < r; i++) y(o[i], s[i]);
//       if (t)
//         if (n)
//           for (o = o || v(e), s = s || v(a), i = 0, r = o.length; i < r; i++) g(o[i], s[i]);
//         else g(e, a);
//       return (s = v(a, "script")).length > 0 && m(s, !l && v(e, "script")), a
//     },
//     buildFragment: function (e, t, n, i) {
//       for (var r, o, s, a, l, u, c = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++)
//         if ((r = e[f]) || 0 === r)
//           if ("object" === K.type(r)) K.merge(d, r.nodeType ? [r] : r);
//           else if (je.test(r)) {
//             for (o = o || c.appendChild(t.createElement("div")), s = (Ee.exec(r) || ["", ""])[1].toLowerCase(), a = Pe[s] || Pe._default, o.innerHTML = a[1] + r.replace(Te, "<$1></$2>") + a[2], u = a[0]; u--;) o = o.lastChild;
//             K.merge(d, o.childNodes), (o = c.firstChild).textContent = ""
//           } else d.push(t.createTextNode(r));
//       for (c.textContent = "", f = 0; r = d[f++];)
//         if ((!i || -1 === K.inArray(r, i)) && (l = K.contains(r.ownerDocument, r), o = v(c.appendChild(r), "script"), l && m(o), n))
//           for (u = 0; r = o[u++];) Ae.test(r.type || "") && n.push(r);
//       return c
//     },
//     cleanData: function (e) {
//       for (var t, n, i, r, o = K.event.special, s = 0; void 0 !== (n = e[s]); s++) {
//         if (K.acceptData(n) && (r = n[pe.expando]) && (t = pe.cache[r])) {
//           if (t.events)
//             for (i in t.events) o[i] ? K.event.remove(n, i) : K.removeEvent(n, i, t.handle);
//           pe.cache[r] && delete pe.cache[r]
//         }
//         delete me.cache[n[me.expando]]
//       }
//     }
//   }), K.fn.extend({
//     text: function (e) {
//       return he(this, function (e) {
//         return void 0 === e ? K.text(this) : this.empty().each(function () {
//           1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
//         })
//       }, null, e, arguments.length)
//     },
//     append: function () {
//       return this.domManip(arguments, function (e) {
//         1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || f(this, e).appendChild(e)
//       })
//     },
//     prepend: function () {
//       return this.domManip(arguments, function (e) {
//         if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
//           var t = f(this, e);
//           t.insertBefore(e, t.firstChild)
//         }
//       })
//     },
//     before: function () {
//       return this.domManip(arguments, function (e) {
//         this.parentNode && this.parentNode.insertBefore(e, this)
//       })
//     },
//     after: function () {
//       return this.domManip(arguments, function (e) {
//         this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
//       })
//     },
//     remove: function (e, t) {
//       for (var n, i = e ? K.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || K.cleanData(v(n)), n.parentNode && (t && K.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
//       return this
//     },
//     empty: function () {
//       for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (K.cleanData(v(e, !1)), e.textContent = "");
//       return this
//     },
//     clone: function (e, t) {
//       return e = null != e && e, t = null == t ? e : t, this.map(function () {
//         return K.clone(this, e, t)
//       })
//     },
//     html: function (e) {
//       return he(this, function (e) {
//         var t = this[0] || {},
//           n = 0,
//           i = this.length;
//         if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
//         if ("string" == typeof e && !Me.test(e) && !Pe[(Ee.exec(e) || ["", ""])[1].toLowerCase()]) {
//           e = e.replace(Te, "<$1></$2>");
//           try {
//             for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (K.cleanData(v(t, !1)), t.innerHTML = e);
//             t = 0
//           } catch (e) { }
//         }
//         t && this.empty().append(e)
//       }, null, e, arguments.length)
//     },
//     replaceWith: function () {
//       var e = arguments[0];
//       return this.domManip(arguments, function (t) {
//         e = this.parentNode, K.cleanData(v(this)), e && e.replaceChild(t, this)
//       }), e && (e.length || e.nodeType) ? this : this.remove()
//     },
//     detach: function (e) {
//       return this.remove(e, !0)
//     },
//     domManip: function (e, t) {
//       e = U.apply([], e);
//       var n, i, r, o, s, a, l = 0,
//         u = this.length,
//         c = this,
//         d = u - 1,
//         f = e[0],
//         m = K.isFunction(f);
//       if (m || u > 1 && "string" == typeof f && !Z.checkClone && _e.test(f)) return this.each(function (n) {
//         var i = c.eq(n);
//         m && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
//       });
//       if (u && (n = K.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
//         for (o = (r = K.map(v(n, "script"), h)).length; l < u; l++) s = n, l !== d && (s = K.clone(s, !0, !0), o && K.merge(r, v(s, "script"))), t.call(this[l], s, l);
//         if (o)
//           for (a = r[r.length - 1].ownerDocument, K.map(r, p), l = 0; l < o; l++) s = r[l], Ae.test(s.type || "") && !pe.access(s, "globalEval") && K.contains(a, s) && (s.src ? K._evalUrl && K._evalUrl(s.src) : K.globalEval(s.textContent.replace(Oe, "")))
//       }
//       return this
//     }
//   }), K.each({
//     appendTo: "append",
//     prependTo: "prepend",
//     insertBefore: "before",
//     insertAfter: "after",
//     replaceAll: "replaceWith"
//   }, function (e, t) {
//     K.fn[e] = function (e) {
//       for (var n, i = [], r = K(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), K(r[s])[t](n), B.apply(i, n.get());
//       return this.pushStack(i)
//     }
//   });
//   var Ne, Fe = {},
//     Ie = /^margin/,
//     Re = new RegExp("^(" + ye + ")(?!px)[a-z%]+$", "i"),
//     ze = function (t) {
//       return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
//     };
//   ! function () {
//     function t() {
//       s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(o);
//       var t = e.getComputedStyle(s, null);
//       n = "1%" !== t.top, i = "4px" === t.width, r.removeChild(o)
//     }
//     var n, i, r = X.documentElement,
//       o = X.createElement("div"),
//       s = X.createElement("div");
//     s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && K.extend(Z, {
//       pixelPosition: function () {
//         return t(), n
//       },
//       boxSizingReliable: function () {
//         return null == i && t(), i
//       },
//       reliableMarginRight: function () {
//         var t, n = s.appendChild(X.createElement("div"));
//         return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", r.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), r.removeChild(o), s.removeChild(n), t
//       }
//     }))
//   }(), K.swap = function (e, t, n, i) {
//     var r, o, s = {};
//     for (o in t) s[o] = e.style[o], e.style[o] = t[o];
//     r = n.apply(e, i || []);
//     for (o in t) e.style[o] = s[o];
//     return r
//   };
//   var Le = /^(none|table(?!-c[ea]).+)/,
//     He = new RegExp("^(" + ye + ")(.*)$", "i"),
//     Ve = new RegExp("^([+-])=(" + ye + ")", "i"),
//     Ue = {
//       position: "absolute",
//       visibility: "hidden",
//       display: "block"
//     },
//     Be = {
//       letterSpacing: "0",
//       fontWeight: "400"
//     },
//     qe = ["Webkit", "O", "Moz", "ms"];
//   K.extend({
//     cssHooks: {
//       opacity: {
//         get: function (e, t) {
//           if (t) {
//             var n = w(e, "opacity");
//             return "" === n ? "1" : n
//           }
//         }
//       }
//     },
//     cssNumber: {
//       columnCount: !0,
//       fillOpacity: !0,
//       flexGrow: !0,
//       flexShrink: !0,
//       fontWeight: !0,
//       lineHeight: !0,
//       opacity: !0,
//       order: !0,
//       orphans: !0,
//       widows: !0,
//       zIndex: !0,
//       zoom: !0
//     },
//     cssProps: {
//       float: "cssFloat"
//     },
//     style: function (e, t, n, i) {
//       if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
//         var r, o, s, a = K.camelCase(t),
//           l = e.style;
//         if (t = K.cssProps[a] || (K.cssProps[a] = S(l, a)), s = K.cssHooks[t] || K.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t];
//         "string" == (o = typeof n) && (r = Ve.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(K.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || K.cssNumber[a] || (n += "px"), Z.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))
//       }
//     },
//     css: function (e, t, n, i) {
//       var r, o, s, a = K.camelCase(t);
//       return t = K.cssProps[a] || (K.cssProps[a] = S(e.style, a)), (s = K.cssHooks[t] || K.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = w(e, t, i)), "normal" === r && t in Be && (r = Be[t]), "" === n || n ? (o = parseFloat(r), !0 === n || K.isNumeric(o) ? o || 0 : r) : r
//     }
//   }), K.each(["height", "width"], function (e, t) {
//     K.cssHooks[t] = {
//       get: function (e, n, i) {
//         if (n) return Le.test(K.css(e, "display")) && 0 === e.offsetWidth ? K.swap(e, Ue, function () {
//           return T(e, t, i)
//         }) : T(e, t, i)
//       },
//       set: function (e, n, i) {
//         var r = i && ze(e);
//         return C(0, n, i ? k(e, t, i, "border-box" === K.css(e, "boxSizing", !1, r), r) : 0)
//       }
//     }
//   }), K.cssHooks.marginRight = x(Z.reliableMarginRight, function (e, t) {
//     if (t) return K.swap(e, {
//       display: "inline-block"
//     }, w, [e, "marginRight"])
//   }), K.each({
//     margin: "",
//     padding: "",
//     border: "Width"
//   }, function (e, t) {
//     K.cssHooks[e + t] = {
//       expand: function (n) {
//         for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + be[i] + t] = o[i] || o[i - 2] || o[0];
//         return r
//       }
//     }, Ie.test(e) || (K.cssHooks[e + t].set = C)
//   }), K.fn.extend({
//     css: function (e, t) {
//       return he(this, function (e, t, n) {
//         var i, r, o = {},
//           s = 0;
//         if (K.isArray(t)) {
//           for (i = ze(e), r = t.length; s < r; s++) o[t[s]] = K.css(e, t[s], !1, i);
//           return o
//         }
//         return void 0 !== n ? K.style(e, t, n) : K.css(e, t)
//       }, e, t, arguments.length > 1)
//     },
//     show: function () {
//       return E(this, !0)
//     },
//     hide: function () {
//       return E(this)
//     },
//     toggle: function (e) {
//       return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
//         $e(this) ? K(this).show() : K(this).hide()
//       })
//     }
//   }), K.Tween = j, j.prototype = {
//     constructor: j,
//     init: function (e, t, n, i, r, o) {
//       this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (K.cssNumber[n] ? "" : "px")
//     },
//     cur: function () {
//       var e = j.propHooks[this.prop];
//       return e && e.get ? e.get(this) : j.propHooks._default.get(this)
//     },
//     run: function (e) {
//       var t, n = j.propHooks[this.prop];
//       return this.options.duration ? this.pos = t = K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
//     }
//   }, j.prototype.init.prototype = j.prototype, j.propHooks = {
//     _default: {
//       get: function (e) {
//         var t;
//         return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
//       },
//       set: function (e) {
//         K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
//       }
//     }
//   }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
//     set: function (e) {
//       e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
//     }
//   }, K.easing = {
//     linear: function (e) {
//       return e
//     },
//     swing: function (e) {
//       return .5 - Math.cos(e * Math.PI) / 2
//     }
//   }, K.fx = j.prototype.init, K.fx.step = {};
//   var We, Ye, Ge = /^(?:toggle|show|hide)$/,
//     Ze = new RegExp("^(?:([+-])=|)(" + ye + ")([a-z%]*)$", "i"),
//     Xe = /queueHooks$/,
//     Ke = [function (e, t, n) {
//       var i, r, o, s, a, l, u, c = this,
//         d = {},
//         f = e.style,
//         h = e.nodeType && $e(e),
//         p = pe.get(e, "fxshow");
//       n.queue || (null == (a = K._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
//         a.unqueued || l()
//       }), a.unqueued++ , c.always(function () {
//         c.always(function () {
//           a.unqueued-- , K.queue(e, "fx").length || a.empty.fire()
//         })
//       })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (u = K.css(e, "display")) ? pe.get(e, "olddisplay") || $(e.nodeName) : u) && "none" === K.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", c.always(function () {
//         f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
//       }));
//       for (i in t)
//         if (r = t[i], Ge.exec(r)) {
//           if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
//             if ("show" !== r || !p || void 0 === p[i]) continue;
//             h = !0
//           }
//           d[i] = p && p[i] || K.style(e, i)
//         } else u = void 0;
//       if (K.isEmptyObject(d)) "inline" === ("none" === u ? $(e.nodeName) : u) && (f.display = u);
//       else {
//         p ? "hidden" in p && (h = p.hidden) : p = pe.access(e, "fxshow", {}), o && (p.hidden = !h), h ? K(e).show() : c.done(function () {
//           K(e).hide()
//         }), c.done(function () {
//           var t;
//           pe.remove(e, "fxshow");
//           for (t in d) K.style(e, t, d[t])
//         });
//         for (i in d) s = A(h ? p[i] : 0, i, c), i in p || (p[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
//       }
//     }],
//     Je = {
//       "*": [function (e, t) {
//         var n = this.createTween(e, t),
//           i = n.cur(),
//           r = Ze.exec(t),
//           o = r && r[3] || (K.cssNumber[e] ? "" : "px"),
//           s = (K.cssNumber[e] || "px" !== o && +i) && Ze.exec(K.css(n.elem, e)),
//           a = 1,
//           l = 20;
//         if (s && s[3] !== o) {
//           o = o || s[3], r = r || [], s = +i || 1;
//           do {
//             s /= a = a || ".5", K.style(n.elem, e, s + o)
//           } while (a !== (a = n.cur() / i) && 1 !== a && --l)
//         }
//         return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
//       }]
//     };
//   K.Animation = K.extend(O, {
//     tweener: function (e, t) {
//       K.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
//       for (var n, i = 0, r = e.length; i < r; i++) n = e[i], Je[n] = Je[n] || [], Je[n].unshift(t)
//     },
//     prefilter: function (e, t) {
//       t ? Ke.unshift(e) : Ke.push(e)
//     }
//   }), K.speed = function (e, t, n) {
//     var i = e && "object" == typeof e ? K.extend({}, e) : {
//       complete: n || !n && t || K.isFunction(e) && e,
//       duration: e,
//       easing: n && t || t && !K.isFunction(t) && t
//     };
//     return i.duration = K.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in K.fx.speeds ? K.fx.speeds[i.duration] : K.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
//       K.isFunction(i.old) && i.old.call(this), i.queue && K.dequeue(this, i.queue)
//     }, i
//   }, K.fn.extend({
//     fadeTo: function (e, t, n, i) {
//       return this.filter($e).css("opacity", 0).show().end().animate({
//         opacity: t
//       }, e, n, i)
//     },
//     animate: function (e, t, n, i) {
//       var r = K.isEmptyObject(e),
//         o = K.speed(t, n, i),
//         s = function () {
//           var t = O(this, K.extend({}, e), o);
//           (r || pe.get(this, "finish")) && t.stop(!0)
//         };
//       return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
//     },
//     stop: function (e, t, n) {
//       var i = function (e) {
//         var t = e.stop;
//         delete e.stop, t(n)
//       };
//       return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
//         var t = !0,
//           r = null != e && e + "queueHooks",
//           o = K.timers,
//           s = pe.get(this);
//         if (r) s[r] && s[r].stop && i(s[r]);
//         else
//           for (r in s) s[r] && s[r].stop && Xe.test(r) && i(s[r]);
//         for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
//         !t && n || K.dequeue(this, e)
//       })
//     },
//     finish: function (e) {
//       return !1 !== e && (e = e || "fx"), this.each(function () {
//         var t, n = pe.get(this),
//           i = n[e + "queue"],
//           r = n[e + "queueHooks"],
//           o = K.timers,
//           s = i ? i.length : 0;
//         for (n.finish = !0, K.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
//         for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
//         delete n.finish
//       })
//     }
//   }), K.each(["toggle", "show", "hide"], function (e, t) {
//     var n = K.fn[t];
//     K.fn[t] = function (e, i, r) {
//       return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, i, r)
//     }
//   }), K.each({
//     slideDown: _("show"),
//     slideUp: _("hide"),
//     slideToggle: _("toggle"),
//     fadeIn: {
//       opacity: "show"
//     },
//     fadeOut: {
//       opacity: "hide"
//     },
//     fadeToggle: {
//       opacity: "toggle"
//     }
//   }, function (e, t) {
//     K.fn[e] = function (e, n, i) {
//       return this.animate(t, e, n, i)
//     }
//   }), K.timers = [], K.fx.tick = function () {
//     var e, t = 0,
//       n = K.timers;
//     for (We = K.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
//     n.length || K.fx.stop(), We = void 0
//   }, K.fx.timer = function (e) {
//     K.timers.push(e), e() ? K.fx.start() : K.timers.pop()
//   }, K.fx.interval = 13, K.fx.start = function () {
//     Ye || (Ye = setInterval(K.fx.tick, K.fx.interval))
//   }, K.fx.stop = function () {
//     clearInterval(Ye), Ye = null
//   }, K.fx.speeds = {
//     slow: 600,
//     fast: 200,
//     _default: 400
//   }, K.fn.delay = function (e, t) {
//     return e = K.fx ? K.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
//       var i = setTimeout(t, e);
//       n.stop = function () {
//         clearTimeout(i)
//       }
//     })
//   },
//     function () {
//       var e = X.createElement("input"),
//         t = X.createElement("select"),
//         n = t.appendChild(X.createElement("option"));
//       e.type = "checkbox", Z.checkOn = "" !== e.value, Z.optSelected = n.selected, t.disabled = !0, Z.optDisabled = !n.disabled, (e = X.createElement("input")).value = "t", e.type = "radio", Z.radioValue = "t" === e.value
//     }();
//   var Qe, et = K.expr.attrHandle;
//   K.fn.extend({
//     attr: function (e, t) {
//       return he(this, K.attr, e, t, arguments.length > 1)
//     },
//     removeAttr: function (e) {
//       return this.each(function () {
//         K.removeAttr(this, e)
//       })
//     }
//   }), K.extend({
//     attr: function (e, t, n) {
//       var i, r, o = e.nodeType;
//       if (e && 3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? K.prop(e, t, n) : (1 === o && K.isXMLDoc(e) || (t = t.toLowerCase(), i = K.attrHooks[t] || (K.expr.match.bool.test(t) ? Qe : void 0)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = K.find.attr(e, t)) ? void 0 : r : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void K.removeAttr(e, t))
//     },
//     removeAttr: function (e, t) {
//       var n, i, r = 0,
//         o = t && t.match(ce);
//       if (o && 1 === e.nodeType)
//         for (; n = o[r++];) i = K.propFix[n] || n, K.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
//     },
//     attrHooks: {
//       type: {
//         set: function (e, t) {
//           if (!Z.radioValue && "radio" === t && K.nodeName(e, "input")) {
//             var n = e.value;
//             return e.setAttribute("type", t), n && (e.value = n), t
//           }
//         }
//       }
//     }
//   }), Qe = {
//     set: function (e, t, n) {
//       return !1 === t ? K.removeAttr(e, n) : e.setAttribute(n, n), n
//     }
//   }, K.each(K.expr.match.bool.source.match(/\w+/g), function (e, t) {
//     var n = et[t] || K.find.attr;
//     et[t] = function (e, t, i) {
//       var r, o;
//       return i || (o = et[t], et[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, et[t] = o), r
//     }
//   });
//   var tt = /^(?:input|select|textarea|button)$/i;
//   K.fn.extend({
//     prop: function (e, t) {
//       return he(this, K.prop, e, t, arguments.length > 1)
//     },
//     removeProp: function (e) {
//       return this.each(function () {
//         delete this[K.propFix[e] || e]
//       })
//     }
//   }), K.extend({
//     propFix: {
//       for: "htmlFor",
//       class: "className"
//     },
//     prop: function (e, t, n) {
//       var i, r, o = e.nodeType;
//       if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !K.isXMLDoc(e)) && (t = K.propFix[t] || t, r = K.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
//     },
//     propHooks: {
//       tabIndex: {
//         get: function (e) {
//           return e.hasAttribute("tabindex") || tt.test(e.nodeName) || e.href ? e.tabIndex : -1
//         }
//       }
//     }
//   }), Z.optSelected || (K.propHooks.selected = {
//     get: function (e) {
//       var t = e.parentNode;
//       return t && t.parentNode && t.parentNode.selectedIndex, null
//     }
//   }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
//     K.propFix[this.toLowerCase()] = this
//   });
//   var nt = /[\t\r\n\f]/g;
//   K.fn.extend({
//     addClass: function (e) {
//       var t, n, i, r, o, s, a = "string" == typeof e && e,
//         l = 0,
//         u = this.length;
//       if (K.isFunction(e)) return this.each(function (t) {
//         K(this).addClass(e.call(this, t, this.className))
//       });
//       if (a)
//         for (t = (e || "").match(ce) || []; l < u; l++)
//           if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(nt, " ") : " ")) {
//             for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
//             s = K.trim(i), n.className !== s && (n.className = s)
//           }
//       return this
//     },
//     removeClass: function (e) {
//       var t, n, i, r, o, s, a = 0 === arguments.length || "string" == typeof e && e,
//         l = 0,
//         u = this.length;
//       if (K.isFunction(e)) return this.each(function (t) {
//         K(this).removeClass(e.call(this, t, this.className))
//       });
//       if (a)
//         for (t = (e || "").match(ce) || []; l < u; l++)
//           if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(nt, " ") : "")) {
//             for (o = 0; r = t[o++];)
//               for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
//             s = e ? K.trim(i) : "", n.className !== s && (n.className = s)
//           }
//       return this
//     },
//     toggleClass: function (e, t) {
//       var n = typeof e;
//       return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : K.isFunction(e) ? this.each(function (n) {
//         K(this).toggleClass(e.call(this, n, this.className, t), t)
//       }) : this.each(function () {
//         if ("string" === n)
//           for (var t, i = 0, r = K(this), o = e.match(ce) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
//         else "undefined" !== n && "boolean" !== n || (this.className && pe.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : pe.get(this, "__className__") || "")
//       })
//     },
//     hasClass: function (e) {
//       for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
//         if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(nt, " ").indexOf(t) >= 0) return !0;
//       return !1
//     }
//   });
//   var it = /\r/g;
//   K.fn.extend({
//     val: function (e) {
//       var t, n, i, r = this[0]; {
//         if (arguments.length) return i = K.isFunction(e), this.each(function (n) {
//           var r;
//           1 === this.nodeType && (null == (r = i ? e.call(this, n, K(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : K.isArray(r) && (r = K.map(r, function (e) {
//             return null == e ? "" : e + ""
//           })), (t = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
//         });
//         if (r) return (t = K.valHooks[r.type] || K.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(it, "") : null == n ? "" : n
//       }
//     }
//   }), K.extend({
//     valHooks: {
//       option: {
//         get: function (e) {
//           var t = K.find.attr(e, "value");
//           return null != t ? t : K.trim(K.text(e))
//         }
//       },
//       select: {
//         get: function (e) {
//           for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
//             if (((n = i[l]).selected || l === r) && (Z.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !K.nodeName(n.parentNode, "optgroup"))) {
//               if (t = K(n).val(), o) return t;
//               s.push(t)
//             }
//           return s
//         },
//         set: function (e, t) {
//           for (var n, i, r = e.options, o = K.makeArray(t), s = r.length; s--;)((i = r[s]).selected = K.inArray(i.value, o) >= 0) && (n = !0);
//           return n || (e.selectedIndex = -1), o
//         }
//       }
//     }
//   }), K.each(["radio", "checkbox"], function () {
//     K.valHooks[this] = {
//       set: function (e, t) {
//         if (K.isArray(t)) return e.checked = K.inArray(K(e).val(), t) >= 0
//       }
//     }, Z.checkOn || (K.valHooks[this].get = function (e) {
//       return null === e.getAttribute("value") ? "on" : e.value
//     })
//   }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
//     K.fn[t] = function (e, n) {
//       return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
//     }
//   }), K.fn.extend({
//     hover: function (e, t) {
//       return this.mouseenter(e).mouseleave(t || e)
//     },
//     bind: function (e, t, n) {
//       return this.on(e, null, t, n)
//     },
//     unbind: function (e, t) {
//       return this.off(e, null, t)
//     },
//     delegate: function (e, t, n, i) {
//       return this.on(t, e, n, i)
//     },
//     undelegate: function (e, t, n) {
//       return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
//     }
//   });
//   var rt = K.now(),
//     ot = /\?/;
//   K.parseJSON = function (e) {
//     return JSON.parse(e + "")
//   }, K.parseXML = function (e) {
//     var t, n;
//     if (!e || "string" != typeof e) return null;
//     try {
//       n = new DOMParser, t = n.parseFromString(e, "text/xml")
//     } catch (e) {
//       t = void 0
//     }
//     return t && !t.getElementsByTagName("parsererror").length || K.error("Invalid XML: " + e), t
//   };
//   var st = /#.*$/,
//     at = /([?&])_=[^&]*/,
//     lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
//     ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
//     ct = /^(?:GET|HEAD)$/,
//     dt = /^\/\//,
//     ft = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
//     ht = {},
//     pt = {},
//     mt = "*/".concat("*"),
//     gt = e.location.href,
//     vt = ft.exec(gt.toLowerCase()) || [];
//   K.extend({
//     active: 0,
//     lastModified: {},
//     etag: {},
//     ajaxSettings: {
//       url: gt,
//       type: "GET",
//       isLocal: ut.test(vt[1]),
//       global: !0,
//       processData: !0,
//       async: !0,
//       contentType: "application/x-www-form-urlencoded; charset=UTF-8",
//       accepts: {
//         "*": mt,
//         text: "text/plain",
//         html: "text/html",
//         xml: "application/xml, text/xml",
//         json: "application/json, text/javascript"
//       },
//       contents: {
//         xml: /xml/,
//         html: /html/,
//         json: /json/
//       },
//       responseFields: {
//         xml: "responseXML",
//         text: "responseText",
//         json: "responseJSON"
//       },
//       converters: {
//         "* text": String,
//         "text html": !0,
//         "text json": K.parseJSON,
//         "text xml": K.parseXML
//       },
//       flatOptions: {
//         url: !0,
//         context: !0
//       }
//     },
//     ajaxSetup: function (e, t) {
//       return t ? F(F(e, K.ajaxSettings), t) : F(K.ajaxSettings, e)
//     },
//     ajaxPrefilter: P(ht),
//     ajaxTransport: P(pt),
//     ajax: function (e, t) {
//       function n(e, t, n, s) {
//         var l, c, v, y, $, x = t;
//         2 !== b && (b = 2, a && clearTimeout(a), i = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, n && (y = I(d, w, n)), y = R(d, y, w, l), l ? (d.ifModified && (($ = w.getResponseHeader("Last-Modified")) && (K.lastModified[r] = $), ($ = w.getResponseHeader("etag")) && (K.etag[r] = $)), 204 === e || "HEAD" === d.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = y.state, c = y.data, l = !(v = y.error))) : (v = x, !e && x || (x = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || x) + "", l ? p.resolveWith(f, [c, x, w]) : p.rejectWith(f, [w, x, v]), w.statusCode(g), g = void 0, u && h.trigger(l ? "ajaxSuccess" : "ajaxError", [w, d, l ? c : v]), m.fireWith(f, [w, x]), u && (h.trigger("ajaxComplete", [w, d]), --K.active || K.event.trigger("ajaxStop")))
//       }
//       "object" == typeof e && (t = e, e = void 0), t = t || {};
//       var i, r, o, s, a, l, u, c, d = K.ajaxSetup({}, t),
//         f = d.context || d,
//         h = d.context && (f.nodeType || f.jquery) ? K(f) : K.event,
//         p = K.Deferred(),
//         m = K.Callbacks("once memory"),
//         g = d.statusCode || {},
//         v = {},
//         y = {},
//         b = 0,
//         $ = "canceled",
//         w = {
//           readyState: 0,
//           getResponseHeader: function (e) {
//             var t;
//             if (2 === b) {
//               if (!s)
//                 for (s = {}; t = lt.exec(o);) s[t[1].toLowerCase()] = t[2];
//               t = s[e.toLowerCase()]
//             }
//             return null == t ? null : t
//           },
//           getAllResponseHeaders: function () {
//             return 2 === b ? o : null
//           },
//           setRequestHeader: function (e, t) {
//             var n = e.toLowerCase();
//             return b || (e = y[n] = y[n] || e, v[e] = t), this
//           },
//           overrideMimeType: function (e) {
//             return b || (d.mimeType = e), this
//           },
//           statusCode: function (e) {
//             var t;
//             if (e)
//               if (b < 2)
//                 for (t in e) g[t] = [g[t], e[t]];
//               else w.always(e[w.status]);
//             return this
//           },
//           abort: function (e) {
//             var t = e || $;
//             return i && i.abort(t), n(0, t), this
//           }
//         };
//       if (p.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || gt) + "").replace(st, "").replace(dt, vt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = K.trim(d.dataType || "*").toLowerCase().match(ce) || [""], null == d.crossDomain && (l = ft.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === vt[1] && l[2] === vt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (vt[3] || ("http:" === vt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = K.param(d.data, d.traditional)), N(ht, d, t, w), 2 === b) return w;
//       (u = K.event && d.global) && 0 == K.active++ && K.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !ct.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (ot.test(r) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = at.test(r) ? r.replace(at, "$1_=" + rt++) : r + (ot.test(r) ? "&" : "?") + "_=" + rt++)), d.ifModified && (K.lastModified[r] && w.setRequestHeader("If-Modified-Since", K.lastModified[r]), K.etag[r] && w.setRequestHeader("If-None-Match", K.etag[r])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + mt + "; q=0.01" : "") : d.accepts["*"]);
//       for (c in d.headers) w.setRequestHeader(c, d.headers[c]);
//       if (d.beforeSend && (!1 === d.beforeSend.call(f, w, d) || 2 === b)) return w.abort();
//       $ = "abort";
//       for (c in {
//         success: 1,
//         error: 1,
//         complete: 1
//       }) w[c](d[c]);
//       if (i = N(pt, d, t, w)) {
//         w.readyState = 1, u && h.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (a = setTimeout(function () {
//           w.abort("timeout")
//         }, d.timeout));
//         try {
//           b = 1, i.send(v, n)
//         } catch (e) {
//           if (!(b < 2)) throw e;
//           n(-1, e)
//         }
//       } else n(-1, "No Transport");
//       return w
//     },
//     getJSON: function (e, t, n) {
//       return K.get(e, t, n, "json")
//     },
//     getScript: function (e, t) {
//       return K.get(e, void 0, t, "script")
//     }
//   }), K.each(["get", "post"], function (e, t) {
//     K[t] = function (e, n, i, r) {
//       return K.isFunction(n) && (r = r || i, i = n, n = void 0), K.ajax({
//         url: e,
//         type: t,
//         dataType: r,
//         data: n,
//         success: i
//       })
//     }
//   }), K._evalUrl = function (e) {
//     return K.ajax({
//       url: e,
//       type: "GET",
//       dataType: "script",
//       async: !1,
//       global: !1,
//       throws: !0
//     })
//   }, K.fn.extend({
//     wrapAll: function (e) {
//       var t;
//       return K.isFunction(e) ? this.each(function (t) {
//         K(this).wrapAll(e.call(this, t))
//       }) : (this[0] && (t = K(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
//         for (var e = this; e.firstElementChild;) e = e.firstElementChild;
//         return e
//       }).append(this)), this)
//     },
//     wrapInner: function (e) {
//       return K.isFunction(e) ? this.each(function (t) {
//         K(this).wrapInner(e.call(this, t))
//       }) : this.each(function () {
//         var t = K(this),
//           n = t.contents();
//         n.length ? n.wrapAll(e) : t.append(e)
//       })
//     },
//     wrap: function (e) {
//       var t = K.isFunction(e);
//       return this.each(function (n) {
//         K(this).wrapAll(t ? e.call(this, n) : e)
//       })
//     },
//     unwrap: function () {
//       return this.parent().each(function () {
//         K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
//       }).end()
//     }
//   }), K.expr.filters.hidden = function (e) {
//     return e.offsetWidth <= 0 && e.offsetHeight <= 0
//   }, K.expr.filters.visible = function (e) {
//     return !K.expr.filters.hidden(e)
//   };
//   var yt = /%20/g,
//     bt = /\[\]$/,
//     $t = /\r?\n/g,
//     wt = /^(?:submit|button|image|reset|file)$/i,
//     xt = /^(?:input|select|textarea|keygen)/i;
//   K.param = function (e, t) {
//     var n, i = [],
//       r = function (e, t) {
//         t = K.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
//       };
//     if (void 0 === t && (t = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(e) || e.jquery && !K.isPlainObject(e)) K.each(e, function () {
//       r(this.name, this.value)
//     });
//     else
//       for (n in e) z(n, e[n], t, r);
//     return i.join("&").replace(yt, "+")
//   }, K.fn.extend({
//     serialize: function () {
//       return K.param(this.serializeArray())
//     },
//     serializeArray: function () {
//       return this.map(function () {
//         var e = K.prop(this, "elements");
//         return e ? K.makeArray(e) : this
//       }).filter(function () {
//         var e = this.type;
//         return this.name && !K(this).is(":disabled") && xt.test(this.nodeName) && !wt.test(e) && (this.checked || !we.test(e))
//       }).map(function (e, t) {
//         var n = K(this).val();
//         return null == n ? null : K.isArray(n) ? K.map(n, function (e) {
//           return {
//             name: t.name,
//             value: e.replace($t, "\r\n")
//           }
//         }) : {
//             name: t.name,
//             value: n.replace($t, "\r\n")
//           }
//       }).get()
//     }
//   }), K.ajaxSettings.xhr = function () {
//     try {
//       return new XMLHttpRequest
//     } catch (e) { }
//   };
//   var St = 0,
//     Ct = {},
//     kt = {
//       0: 200,
//       1223: 204
//     },
//     Tt = K.ajaxSettings.xhr();
//   e.attachEvent && e.attachEvent("onunload", function () {
//     for (var e in Ct) Ct[e]()
//   }), Z.cors = !!Tt && "withCredentials" in Tt, Z.ajax = Tt = !!Tt, K.ajaxTransport(function (e) {
//     var t;
//     if (Z.cors || Tt && !e.crossDomain) return {
//       send: function (n, i) {
//         var r, o = e.xhr(),
//           s = ++St;
//         if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
//           for (r in e.xhrFields) o[r] = e.xhrFields[r];
//         e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
//         for (r in n) o.setRequestHeader(r, n[r]);
//         t = function (e) {
//           return function () {
//             t && (delete Ct[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? i(o.status, o.statusText) : i(kt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
//               text: o.responseText
//             } : void 0, o.getAllResponseHeaders()))
//           }
//         }, o.onload = t(), o.onerror = t("error"), t = Ct[s] = t("abort");
//         try {
//           o.send(e.hasContent && e.data || null)
//         } catch (e) {
//           if (t) throw e
//         }
//       },
//       abort: function () {
//         t && t()
//       }
//     }
//   }), K.ajaxSetup({
//     accepts: {
//       script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
//     },
//     contents: {
//       script: /(?:java|ecma)script/
//     },
//     converters: {
//       "text script": function (e) {
//         return K.globalEval(e), e
//       }
//     }
//   }), K.ajaxPrefilter("script", function (e) {
//     void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
//   }), K.ajaxTransport("script", function (e) {
//     if (e.crossDomain) {
//       var t, n;
//       return {
//         send: function (i, r) {
//           t = K("<script>").prop({
//             async: !0,
//             charset: e.scriptCharset,
//             src: e.url
//           }).on("load error", n = function (e) {
//             t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
//           }), X.head.appendChild(t[0])
//         },
//         abort: function () {
//           n && n()
//         }
//       }
//     }
//   });
//   var Et = [],
//     jt = /(=)\?(?=&|$)|\?\?/;
//   K.ajaxSetup({
//     jsonp: "callback",
//     jsonpCallback: function () {
//       var e = Et.pop() || K.expando + "_" + rt++;
//       return this[e] = !0, e
//     }
//   }), K.ajaxPrefilter("json jsonp", function (t, n, i) {
//     var r, o, s, a = !1 !== t.jsonp && (jt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(t.data) && "data");
//     if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = K.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(jt, "$1" + r) : !1 !== t.jsonp && (t.url += (ot.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
//       return s || K.error(r + " was not called"), s[0]
//     }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
//       s = arguments
//     }, i.always(function () {
//       e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Et.push(r)), s && K.isFunction(o) && o(s[0]), s = o = void 0
//     }), "script"
//   }), K.parseHTML = function (e, t, n) {
//     if (!e || "string" != typeof e) return null;
//     "boolean" == typeof t && (n = t, t = !1), t = t || X;
//     var i = re.exec(e),
//       r = !n && [];
//     return i ? [t.createElement(i[1])] : (i = K.buildFragment([e], t, r), r && r.length && K(r).remove(), K.merge([], i.childNodes))
//   };
//   var Mt = K.fn.load;
//   K.fn.load = function (e, t, n) {
//     if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
//     var i, r, o, s = this,
//       a = e.indexOf(" ");
//     return a >= 0 && (i = K.trim(e.slice(a)), e = e.slice(0, a)), K.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && K.ajax({
//       url: e,
//       type: r,
//       dataType: "html",
//       data: t
//     }).done(function (e) {
//       o = arguments, s.html(i ? K("<div>").append(K.parseHTML(e)).find(i) : e)
//     }).complete(n && function (e, t) {
//       s.each(n, o || [e.responseText, t, e])
//     }), this
//   }, K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
//     K.fn[t] = function (e) {
//       return this.on(t, e)
//     }
//   }), K.expr.filters.animated = function (e) {
//     return K.grep(K.timers, function (t) {
//       return e === t.elem
//     }).length
//   };
//   var _t = e.document.documentElement;
//   K.offset = {
//     setOffset: function (e, t, n) {
//       var i, r, o, s, a, l, u = K.css(e, "position"),
//         c = K(e),
//         d = {};
//       "static" === u && (e.style.position = "relative"), a = c.offset(), o = K.css(e, "top"), l = K.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), K.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : c.css(d)
//     }
//   }, K.fn.extend({
//     offset: function (e) {
//       if (arguments.length) return void 0 === e ? this : this.each(function (t) {
//         K.offset.setOffset(this, e, t)
//       });
//       var t, n, i = this[0],
//         r = {
//           top: 0,
//           left: 0
//         },
//         o = i && i.ownerDocument;
//       if (o) return t = o.documentElement, K.contains(t, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = L(o), {
//         top: r.top + n.pageYOffset - t.clientTop,
//         left: r.left + n.pageXOffset - t.clientLeft
//       }) : r
//     },
//     position: function () {
//       if (this[0]) {
//         var e, t, n = this[0],
//           i = {
//             top: 0,
//             left: 0
//           };
//         return "fixed" === K.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), K.nodeName(e[0], "html") || (i = e.offset()), i.top += K.css(e[0], "borderTopWidth", !0), i.left += K.css(e[0], "borderLeftWidth", !0)), {
//           top: t.top - i.top - K.css(n, "marginTop", !0),
//           left: t.left - i.left - K.css(n, "marginLeft", !0)
//         }
//       }
//     },
//     offsetParent: function () {
//       return this.map(function () {
//         for (var e = this.offsetParent || _t; e && !K.nodeName(e, "html") && "static" === K.css(e, "position");) e = e.offsetParent;
//         return e || _t
//       })
//     }
//   }), K.each({
//     scrollLeft: "pageXOffset",
//     scrollTop: "pageYOffset"
//   }, function (t, n) {
//     var i = "pageYOffset" === n;
//     K.fn[t] = function (r) {
//       return he(this, function (t, r, o) {
//         var s = L(t);
//         if (void 0 === o) return s ? s[n] : t[r];
//         s ? s.scrollTo(i ? e.pageXOffset : o, i ? o : e.pageYOffset) : t[r] = o
//       }, t, r, arguments.length, null)
//     }
//   }), K.each(["top", "left"], function (e, t) {
//     K.cssHooks[t] = x(Z.pixelPosition, function (e, n) {
//       if (n) return n = w(e, t), Re.test(n) ? K(e).position()[t] + "px" : n
//     })
//   }), K.each({
//     Height: "height",
//     Width: "width"
//   }, function (e, t) {
//     K.each({
//       padding: "inner" + e,
//       content: t,
//       "": "outer" + e
//     }, function (n, i) {
//       K.fn[i] = function (i, r) {
//         var o = arguments.length && (n || "boolean" != typeof i),
//           s = n || (!0 === i || !0 === r ? "margin" : "border");
//         return he(this, function (t, n, i) {
//           var r;
//           return K.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? K.css(t, n, s) : K.style(t, n, i, s)
//         }, t, o ? i : void 0, o, null)
//       }
//     })
//   }), K.fn.size = function () {
//     return this.length
//   }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
//     return K
//   });
//   var At = e.jQuery,
//     Dt = e.$;
//   return K.noConflict = function (t) {
//     return e.$ === K && (e.$ = Dt), t && e.jQuery === K && (e.jQuery = At), K
//   }, void 0 === t && (e.jQuery = e.$ = K), K
// }),
//   function () {
//     var e, t, n, i, r, o = function (e, t) {
//       return function () {
//         return e.apply(t, arguments)
//       }
//     },
//       s = [].indexOf || function (e) {
//         for (var t = 0, n = this.length; n > t; t++)
//           if (t in this && this[t] === e) return t;
//         return -1
//       };
//     t = function () {
//       function e() { }
//       return e.prototype.extend = function (e, t) {
//         var n, i;
//         for (n in t) i = t[n], null == e[n] && (e[n] = i);
//         return e
//       }, e.prototype.isMobile = function (e) {
//         return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
//       }, e.prototype.createEvent = function (e, t, n, i) {
//         var r;
//         return null == t && (t = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (r = document.createEvent("CustomEvent")).initCustomEvent(e, t, n, i) : null != document.createEventObject ? (r = document.createEventObject(), r.eventType = e) : r.eventName = e, r
//       }, e.prototype.emitEvent = function (e, t) {
//         return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
//       }, e.prototype.addEvent = function (e, t, n) {
//         return null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
//       }, e.prototype.removeEvent = function (e, t, n) {
//         return null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t]
//       }, e.prototype.innerHeight = function () {
//         return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
//       }, e
//     }(), n = this.WeakMap || this.MozWeakMap || (n = function () {
//       function e() {
//         this.keys = [], this.values = []
//       }
//       return e.prototype.get = function (e) {
//         var t, n, i, r;
//         for (t = n = 0, i = (r = this.keys).length; i > n; t = ++n)
//           if (r[t] === e) return this.values[t]
//       }, e.prototype.set = function (e, t) {
//         var n, i, r, o;
//         for (n = i = 0, r = (o = this.keys).length; r > i; n = ++i)
//           if (o[n] === e) return void (this.values[n] = t);
//         return this.keys.push(e), this.values.push(t)
//       }, e
//     }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function () {
//       function e() {
//         "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
//       }
//       return e.notSupported = !0, e.prototype.observe = function () { }, e
//     }()), i = this.getComputedStyle || function (e) {
//       return this.getPropertyValue = function (t) {
//         var n;
//         return "float" === t && (t = "styleFloat"), r.test(t) && t.replace(r, function (e, t) {
//           return t.toUpperCase()
//         }), (null != (n = e.currentStyle) ? n[t] : void 0) || null
//       }, this
//     }, r = /(\-([a-z]){1})/g, this.WOW = function () {
//       function r(e) {
//         null == e && (e = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
//       }
//       return r.prototype.defaults = {
//         boxClass: "wow",
//         animateClass: "animated",
//         offset: 0,
//         mobile: !0,
//         live: !0,
//         callback: null
//       }, r.prototype.init = function () {
//         var e;
//         return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
//       }, r.prototype.start = function () {
//         var t, n, i, r;
//         if (this.stopped = !1, this.boxes = function () {
//           var e, n, i, r;
//           for (r = [], e = 0, n = (i = this.element.querySelectorAll("." + this.config.boxClass)).length; n > e; e++) t = i[e], r.push(t);
//           return r
//         }.call(this), this.all = function () {
//           var e, n, i, r;
//           for (r = [], e = 0, n = (i = this.boxes).length; n > e; e++) t = i[e], r.push(t);
//           return r
//         }.call(this), this.boxes.length)
//           if (this.disabled()) this.resetStyle();
//           else
//             for (r = this.boxes, n = 0, i = r.length; i > n; n++) t = r[n], this.applyStyle(t, !0);
//         return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new e(function (e) {
//           return function (t) {
//             var n, i, r, o, s;
//             for (s = [], n = 0, i = t.length; i > n; n++) o = t[n], s.push(function () {
//               var e, t, n, i;
//               for (i = [], e = 0, t = (n = o.addedNodes || []).length; t > e; e++) r = n[e], i.push(this.doSync(r));
//               return i
//             }.call(e));
//             return s
//           }
//         }(this)).observe(document.body, {
//           childList: !0,
//           subtree: !0
//         }) : void 0
//       }, r.prototype.stop = function () {
//         return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
//       }, r.prototype.sync = function () {
//         return e.notSupported ? this.doSync(this.element) : void 0
//       }, r.prototype.doSync = function (e) {
//         var t, n, i, r, o;
//         if (null == e && (e = this.element), 1 === e.nodeType) {
//           for (o = [], n = 0, i = (r = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass)).length; i > n; n++) t = r[n], s.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), o.push(this.scrolled = !0)) : o.push(void 0);
//           return o
//         }
//       }, r.prototype.show = function (e) {
//         return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e
//       }, r.prototype.applyStyle = function (e, t) {
//         var n, i, r;
//         return i = e.getAttribute("data-wow-duration"), n = e.getAttribute("data-wow-delay"), r = e.getAttribute("data-wow-iteration"), this.animate(function (o) {
//           return function () {
//             return o.customStyle(e, t, i, n, r)
//           }
//         }(this))
//       }, r.prototype.animate = "requestAnimationFrame" in window ? function (e) {
//         return window.requestAnimationFrame(e)
//       } : function (e) {
//         return e()
//       }, r.prototype.resetStyle = function () {
//         var e, t, n, i, r;
//         for (r = [], t = 0, n = (i = this.boxes).length; n > t; t++) e = i[t], r.push(e.style.visibility = "visible");
//         return r
//       }, r.prototype.resetAnimation = function (e) {
//         var t;
//         return e.type.toLowerCase().indexOf("animationend") >= 0 ? (t = e.target || e.srcElement, t.className = t.className.replace(this.config.animateClass, "").trim()) : void 0
//       }, r.prototype.customStyle = function (e, t, n, i, r) {
//         return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, {
//           animationDuration: n
//         }), i && this.vendorSet(e.style, {
//           animationDelay: i
//         }), r && this.vendorSet(e.style, {
//           animationIterationCount: r
//         }), this.vendorSet(e.style, {
//           animationName: t ? "none" : this.cachedAnimationName(e)
//         }), e
//       }, r.prototype.vendors = ["moz", "webkit"], r.prototype.vendorSet = function (e, t) {
//         var n, i, r, o;
//         i = [];
//         for (n in t) r = t[n], e["" + n] = r, i.push(function () {
//           var t, i, s, a;
//           for (a = [], t = 0, i = (s = this.vendors).length; i > t; t++) o = s[t], a.push(e["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = r);
//           return a
//         }.call(this));
//         return i
//       }, r.prototype.vendorCSS = function (e, t) {
//         var n, r, o, s, a, l;
//         for (s = (a = i(e)).getPropertyCSSValue(t), n = 0, r = (o = this.vendors).length; r > n; n++) l = o[n], s = s || a.getPropertyCSSValue("-" + l + "-" + t);
//         return s
//       }, r.prototype.animationName = function (e) {
//         var t;
//         try {
//           t = this.vendorCSS(e, "animation-name").cssText
//         } catch (n) {
//           t = i(e).getPropertyValue("animation-name")
//         }
//         return "none" === t ? "" : t
//       }, r.prototype.cacheAnimationName = function (e) {
//         return this.animationNameCache.set(e, this.animationName(e))
//       }, r.prototype.cachedAnimationName = function (e) {
//         return this.animationNameCache.get(e)
//       }, r.prototype.scrollHandler = function () {
//         return this.scrolled = !0
//       }, r.prototype.scrollCallback = function () {
//         var e;
//         return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
//           var t, n, i, r;
//           for (r = [], t = 0, n = (i = this.boxes).length; n > t; t++)(e = i[t]) && (this.isVisible(e) ? this.show(e) : r.push(e));
//           return r
//         }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
//       }, r.prototype.offsetTop = function (e) {
//         for (var t; void 0 === e.offsetTop;) e = e.parentNode;
//         for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
//         return t
//       }, r.prototype.isVisible = function (e) {
//         var t, n, i, r, o;
//         return n = e.getAttribute("data-wow-offset") || this.config.offset, o = window.pageYOffset, r = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(e), t = i + e.clientHeight, r >= i && t >= o
//       }, r.prototype.util = function () {
//         return null != this._util ? this._util : this._util = new t
//       }, r.prototype.disabled = function () {
//         return !this.config.mobile && this.util().isMobile(navigator.userAgent)
//       }, r
//     }()
//   }.call(this),
//   function (e) {
//     "use strict";

//     function t(e, t) {
//       return t = t || Error,
//         function () {
//           var n, i, r = arguments,
//             o = r[0],
//             s = "[" + (e ? e + ":" : "") + o + "] ";
//           for (s += r[1].replace(/\{\d+\}/g, function (e) {
//             var t = +e.slice(1, -1) + 2;
//             return t < r.length ? ve(r[t]) : e
//           }), s += "\nhttp://errors.angularjs.org/1.5.8/" + (e ? e + "/" : "") + o, i = 2, n = "?"; i < r.length; i++ , n = "&") s += n + "p" + (i - 2) + "=" + encodeURIComponent(ve(r[i]));
//           return new t(s)
//         }
//     }

//     function n(e) {
//       if (null == e || T(e)) return !1;
//       if (_i(e) || w(e) || bi && e instanceof bi) return !0;
//       var t = "length" in Object(e) && e.length;
//       return x(t) && (t >= 0 && (t - 1 in e || e instanceof Array) || "function" == typeof e.item)
//     }

//     function i(e, t, r) {
//       var o, s;
//       if (e)
//         if (C(e))
//           for (o in e) "prototype" == o || "length" == o || "name" == o || e.hasOwnProperty && !e.hasOwnProperty(o) || t.call(r, e[o], o, e);
//         else if (_i(e) || n(e)) {
//           var a = "object" != typeof e;
//           for (o = 0, s = e.length; o < s; o++)(a || o in e) && t.call(r, e[o], o, e)
//         } else if (e.forEach && e.forEach !== i) e.forEach(t, r, e);
//         else if ($(e))
//           for (o in e) t.call(r, e[o], o, e);
//         else if ("function" == typeof e.hasOwnProperty)
//           for (o in e) e.hasOwnProperty(o) && t.call(r, e[o], o, e);
//         else
//           for (o in e) mi.call(e, o) && t.call(r, e[o], o, e);
//       return e
//     }

//     function r(e, t, n) {
//       for (var i = Object.keys(e).sort(), r = 0; r < i.length; r++) t.call(n, e[i[r]], i[r]);
//       return i
//     }

//     function o(e) {
//       return function (t, n) {
//         e(n, t)
//       }
//     }

//     function s() {
//       return ++Mi
//     }

//     function a(e, t) {
//       t ? e.$$hashKey = t : delete e.$$hashKey
//     }

//     function l(e, t, n) {
//       for (var i = e.$$hashKey, r = 0, o = t.length; r < o; ++r) {
//         var s = t[r];
//         if (b(s) || C(s))
//           for (var u = Object.keys(s), c = 0, d = u.length; c < d; c++) {
//             var f = u[c],
//               h = s[f];
//             n && b(h) ? S(h) ? e[f] = new Date(h.valueOf()) : k(h) ? e[f] = new RegExp(h) : h.nodeName ? e[f] = h.cloneNode(!0) : N(h) ? e[f] = h.clone() : (b(e[f]) || (e[f] = _i(h) ? [] : {}), l(e[f], [h], !0)) : e[f] = h
//           }
//       }
//       return a(e, i), e
//     }

//     function u(e) {
//       return l(e, xi.call(arguments, 1), !1)
//     }

//     function c(e) {
//       return l(e, xi.call(arguments, 1), !0)
//     }

//     function d(e) {
//       return parseInt(e, 10)
//     }

//     function f(e, t) {
//       return u(Object.create(e), t)
//     }

//     function h() { }

//     function p(e) {
//       return e
//     }

//     function m(e) {
//       return function () {
//         return e
//       }
//     }

//     function g(e) {
//       return C(e.toString) && e.toString !== ki
//     }

//     function v(e) {
//       return void 0 === e
//     }

//     function y(e) {
//       return void 0 !== e
//     }

//     function b(e) {
//       return null !== e && "object" == typeof e
//     }

//     function $(e) {
//       return null !== e && "object" == typeof e && !Ti(e)
//     }

//     function w(e) {
//       return "string" == typeof e
//     }

//     function x(e) {
//       return "number" == typeof e
//     }

//     function S(e) {
//       return "[object Date]" === ki.call(e)
//     }

//     function C(e) {
//       return "function" == typeof e
//     }

//     function k(e) {
//       return "[object RegExp]" === ki.call(e)
//     }

//     function T(e) {
//       return e && e.window === e
//     }

//     function E(e) {
//       return e && e.$evalAsync && e.$watch
//     }

//     function j(e) {
//       return "[object File]" === ki.call(e)
//     }

//     function M(e) {
//       return "[object FormData]" === ki.call(e)
//     }

//     function _(e) {
//       return "[object Blob]" === ki.call(e)
//     }

//     function A(e) {
//       return "boolean" == typeof e
//     }

//     function D(e) {
//       return e && C(e.then)
//     }

//     function O(e) {
//       return e && x(e.length) && Ai.test(ki.call(e))
//     }

//     function P(e) {
//       return "[object ArrayBuffer]" === ki.call(e)
//     }

//     function N(e) {
//       return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
//     }

//     function F(e) {
//       var t, n = {},
//         i = e.split(",");
//       for (t = 0; t < i.length; t++) n[i[t]] = !0;
//       return n
//     }

//     function I(e) {
//       return gi(e.nodeName || e[0] && e[0].nodeName)
//     }

//     function R(e, t) {
//       var n = e.indexOf(t);
//       return n >= 0 && e.splice(n, 1), n
//     }

//     function z(e, t) {
//       function n(e, t) {
//         var n, i = t.$$hashKey;
//         if (_i(e))
//           for (var o = 0, s = e.length; o < s; o++) t.push(r(e[o]));
//         else if ($(e))
//           for (n in e) t[n] = r(e[n]);
//         else if (e && "function" == typeof e.hasOwnProperty)
//           for (n in e) e.hasOwnProperty(n) && (t[n] = r(e[n]));
//         else
//           for (n in e) mi.call(e, n) && (t[n] = r(e[n]));
//         return a(t, i), t
//       }

//       function r(e) {
//         if (!b(e)) return e;
//         var t = s.indexOf(e);
//         if (-1 !== t) return l[t];
//         if (T(e) || E(e)) throw Ei("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
//         var i = !1,
//           r = o(e);
//         return void 0 === r && (r = _i(e) ? [] : Object.create(Ti(e)), i = !0), s.push(e), l.push(r), i ? n(e, r) : r
//       }

//       function o(e) {
//         switch (ki.call(e)) {
//           case "[object Int8Array]":
//           case "[object Int16Array]":
//           case "[object Int32Array]":
//           case "[object Float32Array]":
//           case "[object Float64Array]":
//           case "[object Uint8Array]":
//           case "[object Uint8ClampedArray]":
//           case "[object Uint16Array]":
//           case "[object Uint32Array]":
//             return new e.constructor(r(e.buffer), e.byteOffset, e.length);
//           case "[object ArrayBuffer]":
//             if (!e.slice) {
//               var t = new ArrayBuffer(e.byteLength);
//               return new Uint8Array(t).set(new Uint8Array(e)), t
//             }
//             return e.slice(0);
//           case "[object Boolean]":
//           case "[object Number]":
//           case "[object String]":
//           case "[object Date]":
//             return new e.constructor(e.valueOf());
//           case "[object RegExp]":
//             var n = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]);
//             return n.lastIndex = e.lastIndex, n;
//           case "[object Blob]":
//             return new e.constructor([e], {
//               type: e.type
//             })
//         }
//         if (C(e.cloneNode)) return e.cloneNode(!0)
//       }
//       var s = [],
//         l = [];
//       if (t) {
//         if (O(t) || P(t)) throw Ei("cpta", "Can't copy! TypedArray destination cannot be mutated.");
//         if (e === t) throw Ei("cpi", "Can't copy! Source and destination are identical.");
//         return _i(t) ? t.length = 0 : i(t, function (e, n) {
//           "$$hashKey" !== n && delete t[n]
//         }), s.push(e), l.push(t), n(e, t)
//       }
//       return r(e)
//     }

//     function L(e, t) {
//       if (e === t) return !0;
//       if (null === e || null === t) return !1;
//       if (e !== e && t !== t) return !0;
//       var n, i, r, o = typeof e;
//       if (o == typeof t && "object" == o) {
//         if (!_i(e)) {
//           if (S(e)) return !!S(t) && L(e.getTime(), t.getTime());
//           if (k(e)) return !!k(t) && e.toString() == t.toString();
//           if (E(e) || E(t) || T(e) || T(t) || _i(t) || S(t) || k(t)) return !1;
//           r = he();
//           for (i in e)
//             if ("$" !== i.charAt(0) && !C(e[i])) {
//               if (!L(e[i], t[i])) return !1;
//               r[i] = !0
//             }
//           for (i in t)
//             if (!(i in r) && "$" !== i.charAt(0) && y(t[i]) && !C(t[i])) return !1;
//           return !0
//         }
//         if (!_i(t)) return !1;
//         if ((n = e.length) == t.length) {
//           for (i = 0; i < n; i++)
//             if (!L(e[i], t[i])) return !1;
//           return !0
//         }
//       }
//       return !1
//     }

//     function H(e, t, n) {
//       return e.concat(xi.call(t, n))
//     }

//     function V(e, t) {
//       return xi.call(e, t || 0)
//     }

//     function U(e, t) {
//       var n = arguments.length > 2 ? V(arguments, 2) : [];
//       return !C(t) || t instanceof RegExp ? t : n.length ? function () {
//         return arguments.length ? t.apply(e, H(n, arguments, 0)) : t.apply(e, n)
//       } : function () {
//         return arguments.length ? t.apply(e, arguments) : t.call(e)
//       }
//     }

//     function B(t, n) {
//       var i = n;
//       return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? i = void 0 : T(n) ? i = "$WINDOW" : n && e.document === n ? i = "$DOCUMENT" : E(n) && (i = "$SCOPE"), i
//     }

//     function q(e, t) {
//       if (!v(e)) return x(t) || (t = t ? 2 : null), JSON.stringify(e, B, t)
//     }

//     function W(e) {
//       return w(e) ? JSON.parse(e) : e
//     }

//     function Y(e, t) {
//       e = e.replace(Fi, "");
//       var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
//       return isNaN(n) ? t : n
//     }

//     function G(e, t) {
//       return (e = new Date(e.getTime())).setMinutes(e.getMinutes() + t), e
//     }

//     function Z(e, t, n) {
//       n = n ? -1 : 1;
//       var i = e.getTimezoneOffset();
//       return G(e, n * (Y(t, i) - i))
//     }

//     function X(e) {
//       e = bi(e).clone();
//       try {
//         e.empty()
//       } catch (e) { }
//       var t = bi("<div>").append(e).html();
//       try {
//         return e[0].nodeType === Hi ? gi(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (e, t) {
//           return "<" + gi(t)
//         })
//       } catch (e) {
//         return gi(t)
//       }
//     }

//     function K(e) {
//       try {
//         return decodeURIComponent(e)
//       } catch (e) { }
//     }

//     function J(e) {
//       var t = {};
//       return i((e || "").split("&"), function (e) {
//         var n, i, r;
//         e && (i = e = e.replace(/\+/g, "%20"), -1 !== (n = e.indexOf("=")) && (i = e.substring(0, n), r = e.substring(n + 1)), y(i = K(i)) && (r = !y(r) || K(r), mi.call(t, i) ? _i(t[i]) ? t[i].push(r) : t[i] = [t[i], r] : t[i] = r))
//       }), t
//     }

//     function Q(e) {
//       var t = [];
//       return i(e, function (e, n) {
//         _i(e) ? i(e, function (e) {
//           t.push(te(n, !0) + (!0 === e ? "" : "=" + te(e, !0)))
//         }) : t.push(te(n, !0) + (!0 === e ? "" : "=" + te(e, !0)))
//       }), t.length ? t.join("&") : ""
//     }

//     function ee(e) {
//       return te(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
//     }

//     function te(e, t) {
//       return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
//     }

//     function ne(e, t) {
//       var n, i, r = Ii.length;
//       for (i = 0; i < r; ++i)
//         if (n = Ii[i] + t, w(n = e.getAttribute(n))) return n;
//       return null
//     }

//     function ie(e, t) {
//       var n, r, o = {};
//       i(Ii, function (t) {
//         var i = t + "app";
//         !n && e.hasAttribute && e.hasAttribute(i) && (n = e, r = e.getAttribute(i))
//       }), i(Ii, function (t) {
//         var i, o = t + "app";
//         !n && (i = e.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(o))
//       }), n && (o.strictDi = null !== ne(n, "strict-di"), t(n, r ? [r] : [], o))
//     }

//     function re(t, n, r) {
//       b(r) || (r = {}), r = u({
//         strictDi: !1
//       }, r);
//       var o = function () {
//         if ((t = bi(t)).injector()) {
//           var i = t[0] === e.document ? "document" : X(t);
//           throw Ei("btstrpd", "App already bootstrapped with this element '{0}'", i.replace(/</, "&lt;").replace(/>/, "&gt;"))
//         } (n = n || []).unshift(["$provide", function (e) {
//           e.value("$rootElement", t)
//         }]), r.debugInfoEnabled && n.push(["$compileProvider", function (e) {
//           e.debugInfoEnabled(!0)
//         }]), n.unshift("ng");
//         var o = Je(n, r.strictDi);
//         return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (e, t, n, i) {
//           e.$apply(function () {
//             t.data("$injector", i), n(t)(e)
//           })
//         }]), o
//       },
//         s = /^NG_ENABLE_DEBUG_INFO!/,
//         a = /^NG_DEFER_BOOTSTRAP!/;
//       if (e && s.test(e.name) && (r.debugInfoEnabled = !0, e.name = e.name.replace(s, "")), e && !a.test(e.name)) return o();
//       e.name = e.name.replace(a, ""), ji.resumeBootstrap = function (e) {
//         return i(e, function (e) {
//           n.push(e)
//         }), o()
//       }, C(ji.resumeDeferredBootstrap) && ji.resumeDeferredBootstrap()
//     }

//     function oe() {
//       e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
//     }

//     function se(e) {
//       var t = ji.element(e).injector();
//       if (!t) throw Ei("test", "no injector found for element argument to getTestability");
//       return t.get("$$testability")
//     }

//     function ae(e, t) {
//       return t = t || "_", e.replace(Ri, function (e, n) {
//         return (n ? t : "") + e.toLowerCase()
//       })
//     }

//     function le(e, t, n) {
//       if (!e) throw Ei("areq", "Argument '{0}' is {1}", t || "?", n || "required");
//       return e
//     }

//     function ue(e, t, n) {
//       return n && _i(e) && (e = e[e.length - 1]), le(C(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
//     }

//     function ce(e, t) {
//       if ("hasOwnProperty" === e) throw Ei("badname", "hasOwnProperty is not a valid {0} name", t)
//     }

//     function de(e, t, n) {
//       if (!t) return e;
//       for (var i, r = t.split("."), o = e, s = r.length, a = 0; a < s; a++) i = r[a], e && (e = (o = e)[i]);
//       return !n && C(e) ? U(o, e) : e
//     }

//     function fe(e) {
//       for (var t, n = e[0], i = e[e.length - 1], r = 1; n !== i && (n = n.nextSibling); r++)(t || e[r] !== n) && (t || (t = bi(xi.call(e, 0, r))), t.push(n));
//       return t || e
//     }

//     function he() {
//       return Object.create(null)
//     }

//     function pe(e) {
//       function n(e, t, n) {
//         return e[t] || (e[t] = n())
//       }
//       var i = t("$injector"),
//         r = t("ng"),
//         o = n(e, "angular", Object);
//       return o.$$minErr = o.$$minErr || t, n(o, "module", function () {
//         var e = {};
//         return function (t, o, s) {
//           return function (e, t) {
//             if ("hasOwnProperty" === e) throw r("badname", "hasOwnProperty is not a valid {0} name", t)
//           }(t, "module"), o && e.hasOwnProperty(t) && (e[t] = null), n(e, t, function () {
//             function e(e, t, n, i) {
//               return i || (i = r),
//                 function () {
//                   return i[n || "push"]([e, t, arguments]), c
//                 }
//             }

//             function n(e, n) {
//               return function (i, o) {
//                 return o && C(o) && (o.$$moduleName = t), r.push([e, n, arguments]), c
//               }
//             }
//             if (!o) throw i("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", t);
//             var r = [],
//               a = [],
//               l = [],
//               u = e("$injector", "invoke", "push", a),
//               c = {
//                 _invokeQueue: r,
//                 _configBlocks: a,
//                 _runBlocks: l,
//                 requires: o,
//                 name: t,
//                 provider: n("$provide", "provider"),
//                 factory: n("$provide", "factory"),
//                 service: n("$provide", "service"),
//                 value: e("$provide", "value"),
//                 constant: e("$provide", "constant", "unshift"),
//                 decorator: n("$provide", "decorator"),
//                 animation: n("$animateProvider", "register"),
//                 filter: n("$filterProvider", "register"),
//                 controller: n("$controllerProvider", "register"),
//                 directive: n("$compileProvider", "directive"),
//                 component: n("$compileProvider", "component"),
//                 config: u,
//                 run: function (e) {
//                   return l.push(e), this
//                 }
//               };
//             return s && u(s), c
//           })
//         }
//       })
//     }

//     function me(e, t) {
//       if (_i(e)) {
//         t = t || [];
//         for (var n = 0, i = e.length; n < i; n++) t[n] = e[n]
//       } else if (b(e)) {
//         t = t || {};
//         for (var r in e) "$" === r.charAt(0) && "$" === r.charAt(1) || (t[r] = e[r])
//       }
//       return t || e
//     }

//     function ge(e) {
//       var t = [];
//       return JSON.stringify(e, function (e, n) {
//         if (n = B(e, n), b(n)) {
//           if (t.indexOf(n) >= 0) return "...";
//           t.push(n)
//         }
//         return n
//       })
//     }

//     function ve(e) {
//       return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : v(e) ? "undefined" : "string" != typeof e ? ge(e) : e
//     }

//     function ye() {
//       return ++Yi
//     }

//     function be(e) {
//       return e.replace(Xi, function (e, t, n, i) {
//         return i ? n.toUpperCase() : n
//       }).replace(Ki, "Moz$1")
//     }

//     function $e(e) {
//       return !tr.test(e)
//     }

//     function we(e) {
//       var t = e.nodeType;
//       return t === Li || !t || t === Ui
//     }

//     function xe(e, t) {
//       var n, r, o, s, a = t.createDocumentFragment(),
//         l = [];
//       if ($e(e)) l.push(t.createTextNode(e));
//       else {
//         for (n = a.appendChild(t.createElement("div")), r = (nr.exec(e) || ["", ""])[1].toLowerCase(), o = rr[r] || rr._default, n.innerHTML = o[1] + e.replace(ir, "<$1></$2>") + o[2], s = o[0]; s--;) n = n.lastChild;
//         l = H(l, n.childNodes), (n = a.firstChild).textContent = ""
//       }
//       return a.textContent = "", a.innerHTML = "", i(l, function (e) {
//         a.appendChild(e)
//       }), a
//     }

//     function Se(t, n) {
//       n = n || e.document;
//       var i;
//       return (i = er.exec(t)) ? [n.createElement(i[1])] : (i = xe(t, n)) ? i.childNodes : []
//     }

//     function Ce(e, t) {
//       var n = e.parentNode;
//       n && n.replaceChild(t, e), t.appendChild(e)
//     }

//     function ke(e) {
//       if (e instanceof ke) return e;
//       var t;
//       if (w(e) && (e = Di(e), t = !0), !(this instanceof ke)) {
//         if (t && "<" != e.charAt(0)) throw Qi("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
//         return new ke(e)
//       }
//       t ? Ne(this, Se(e)) : Ne(this, e)
//     }

//     function Te(e) {
//       return e.cloneNode(!0)
//     }

//     function Ee(e, t) {
//       if (t || Me(e), e.querySelectorAll)
//         for (var n = e.querySelectorAll("*"), i = 0, r = n.length; i < r; i++) Me(n[i])
//     }

//     function je(e, t, n, r) {
//       if (y(r)) throw Qi("offargs", "jqLite#off() does not support the `selector` argument");
//       var o = _e(e),
//         s = o && o.events,
//         a = o && o.handle;
//       if (a)
//         if (t) {
//           var l = function (t) {
//             var i = s[t];
//             y(n) && R(i || [], n), y(n) && i && i.length > 0 || (Zi(e, t, a), delete s[t])
//           };
//           i(t.split(" "), function (e) {
//             l(e), Ji[e] && l(Ji[e])
//           })
//         } else
//           for (t in s) "$destroy" !== t && Zi(e, t, a), delete s[t]
//     }

//     function Me(e, t) {
//       var n = e.ng339,
//         i = n && Wi[n];
//       if (i) {
//         if (t) return void delete i.data[t];
//         i.handle && (i.events.$destroy && i.handle({}, "$destroy"), je(e)), delete Wi[n], e.ng339 = void 0
//       }
//     }

//     function _e(e, t) {
//       var n = e.ng339,
//         i = n && Wi[n];
//       return t && !i && (e.ng339 = n = ye(), i = Wi[n] = {
//         events: {},
//         data: {},
//         handle: void 0
//       }), i
//     }

//     function Ae(e, t, n) {
//       if (we(e)) {
//         var i = y(n),
//           r = !i && t && !b(t),
//           o = !t,
//           s = _e(e, !r),
//           a = s && s.data;
//         if (i) a[t] = n;
//         else {
//           if (o) return a;
//           if (r) return a && a[t];
//           u(a, t)
//         }
//       }
//     }

//     function De(e, t) {
//       return !!e.getAttribute && (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1
//     }

//     function Oe(e, t) {
//       t && e.setAttribute && i(t.split(" "), function (t) {
//         e.setAttribute("class", Di((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Di(t) + " ", " ")))
//       })
//     }

//     function Pe(e, t) {
//       if (t && e.setAttribute) {
//         var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
//         i(t.split(" "), function (e) {
//           e = Di(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
//         }), e.setAttribute("class", Di(n))
//       }
//     }

//     function Ne(e, t) {
//       if (t)
//         if (t.nodeType) e[e.length++] = t;
//         else {
//           var n = t.length;
//           if ("number" == typeof n && t.window !== t) {
//             if (n)
//               for (var i = 0; i < n; i++) e[e.length++] = t[i]
//           } else e[e.length++] = t
//         }
//     }

//     function Fe(e, t) {
//       return Ie(e, "$" + (t || "ngController") + "Controller")
//     }

//     function Ie(e, t, n) {
//       e.nodeType == Ui && (e = e.documentElement);
//       for (var i = _i(t) ? t : [t]; e;) {
//         for (var r = 0, o = i.length; r < o; r++)
//           if (y(n = bi.data(e, i[r]))) return n;
//         e = e.parentNode || e.nodeType === Bi && e.host
//       }
//     }

//     function Re(e) {
//       for (Ee(e, !0); e.firstChild;) e.removeChild(e.firstChild)
//     }

//     function ze(e, t) {
//       t || Ee(e);
//       var n = e.parentNode;
//       n && n.removeChild(e)
//     }

//     function Le(t, n) {
//       "complete" === (n = n || e).document.readyState ? n.setTimeout(t) : bi(n).on("load", t)
//     }

//     function He(e, t) {
//       var n = ar[t.toLowerCase()];
//       return n && lr[I(e)] && n
//     }

//     function Ve(e) {
//       return ur[e]
//     }

//     function Ue(e, t) {
//       var n = function (n, i) {
//         n.isDefaultPrevented = function () {
//           return n.defaultPrevented
//         };
//         var r = t[i || n.type],
//           o = r ? r.length : 0;
//         if (o) {
//           if (v(n.immediatePropagationStopped)) {
//             var s = n.stopImmediatePropagation;
//             n.stopImmediatePropagation = function () {
//               n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), s && s.call(n)
//             }
//           }
//           n.isImmediatePropagationStopped = function () {
//             return !0 === n.immediatePropagationStopped
//           };
//           var a = r.specialHandlerWrapper || Be;
//           o > 1 && (r = me(r));
//           for (var l = 0; l < o; l++) n.isImmediatePropagationStopped() || a(e, n, r[l])
//         }
//       };
//       return n.elem = e, n
//     }

//     function Be(e, t, n) {
//       n.call(e, t)
//     }

//     function qe(e, t, n) {
//       var i = t.relatedTarget;
//       i && (i === e || or.call(e, i)) || n.call(e, t)
//     }

//     function We() {
//       this.$get = function () {
//         return u(ke, {
//           hasClass: function (e, t) {
//             return e.attr && (e = e[0]), De(e, t)
//           },
//           addClass: function (e, t) {
//             return e.attr && (e = e[0]), Pe(e, t)
//           },
//           removeClass: function (e, t) {
//             return e.attr && (e = e[0]), Oe(e, t)
//           }
//         })
//       }
//     }

//     function Ye(e, t) {
//       var n = e && e.$$hashKey;
//       if (n) return "function" == typeof n && (n = e.$$hashKey()), n;
//       var i = typeof e;
//       return n = "function" == i || "object" == i && null !== e ? e.$$hashKey = i + ":" + (t || s)() : i + ":" + e
//     }

//     function Ge(e, t) {
//       if (t) {
//         var n = 0;
//         this.nextUid = function () {
//           return ++n
//         }
//       }
//       i(e, this.put, this)
//     }

//     function Ze(e) {
//       return Function.prototype.toString.call(e) + " "
//     }

//     function Xe(e) {
//       var t = Ze(e).replace(mr, "");
//       return t.match(dr) || t.match(fr)
//     }

//     function Ke(e) {
//       var t = Xe(e);
//       return t ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
//     }

//     function Je(e, t) {
//       function n(e) {
//         return function (t, n) {
//           if (!b(t)) return e(t, n);
//           i(t, o(e))
//         }
//       }

//       function r(e, t) {
//         if (ce(e, "service"), (C(t) || _i(t)) && (t = g.instantiate(t)), !t.$get) throw gr("pget", "Provider '{0}' must define $get factory method.", e);
//         return p[e + d] = t
//       }

//       function s(e, t) {
//         return function () {
//           var n = x.invoke(t, this);
//           if (v(n)) throw gr("undef", "Provider '{0}' must return a value from $get factory method.", e);
//           return n
//         }
//       }

//       function a(e, t, n) {
//         return r(e, {
//           $get: !1 !== n ? s(e, t) : t
//         })
//       }

//       function l(e) {
//         le(v(e) || _i(e), "modulesToLoad", "not an array");
//         var t, n = [];
//         return i(e, function (e) {
//           function i(e) {
//             var t, n;
//             for (t = 0, n = e.length; t < n; t++) {
//               var i = e[t],
//                 r = g.get(i[0]);
//               r[i[1]].apply(r, i[2])
//             }
//           }
//           if (!h.get(e)) {
//             h.put(e, !0);
//             try {
//               w(e) ? (t = wi(e), n = n.concat(l(t.requires)).concat(t._runBlocks), i(t._invokeQueue), i(t._configBlocks)) : C(e) ? n.push(g.invoke(e)) : _i(e) ? n.push(g.invoke(e)) : ue(e, "module")
//             } catch (t) {
//               throw _i(e) && (e = e[e.length - 1]), t.message && t.stack && -1 == t.stack.indexOf(t.message) && (t = t.message + "\n" + t.stack), gr("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, t.stack || t.message || t)
//             }
//           }
//         }), n
//       }

//       function u(e, n) {
//         function i(t, i) {
//           if (e.hasOwnProperty(t)) {
//             if (e[t] === c) throw gr("cdep", "Circular dependency found: {0}", t + " <- " + f.join(" <- "));
//             return e[t]
//           }
//           try {
//             return f.unshift(t), e[t] = c, e[t] = n(t, i)
//           } catch (n) {
//             throw e[t] === c && delete e[t], n
//           } finally {
//             f.shift()
//           }
//         }

//         function r(e, n, r) {
//           for (var o = [], s = Je.$$annotate(e, t, r), a = 0, l = s.length; a < l; a++) {
//             var u = s[a];
//             if ("string" != typeof u) throw gr("itkn", "Incorrect injection token! Expected service name as string, got {0}", u);
//             o.push(n && n.hasOwnProperty(u) ? n[u] : i(u, r))
//           }
//           return o
//         }

//         function o(e) {
//           return !(yi <= 11) && ("function" == typeof e && /^(?:class\b|constructor\()/.test(Ze(e)))
//         }
//         return {
//           invoke: function (e, t, n, i) {
//             "string" == typeof n && (i = n, n = null);
//             var s = r(e, n, i);
//             return _i(e) && (e = e[e.length - 1]), o(e) ? (s.unshift(null), new (Function.prototype.bind.apply(e, s))) : e.apply(t, s)
//           },
//           instantiate: function (e, t, n) {
//             var i = _i(e) ? e[e.length - 1] : e,
//               o = r(e, t, n);
//             return o.unshift(null), new (Function.prototype.bind.apply(i, o))
//           },
//           get: i,
//           annotate: Je.$$annotate,
//           has: function (t) {
//             return p.hasOwnProperty(t + d) || e.hasOwnProperty(t)
//           }
//         }
//       }
//       t = !0 === t;
//       var c = {},
//         d = "Provider",
//         f = [],
//         h = new Ge([], !0),
//         p = {
//           $provide: {
//             provider: n(r),
//             factory: n(a),
//             service: n(function (e, t) {
//               return a(e, ["$injector", function (e) {
//                 return e.instantiate(t)
//               }])
//             }),
//             value: n(function (e, t) {
//               return a(e, m(t), !1)
//             }),
//             constant: n(function (e, t) {
//               ce(e, "constant"), p[e] = t, y[e] = t
//             }),
//             decorator: function (e, t) {
//               var n = g.get(e + d),
//                 i = n.$get;
//               n.$get = function () {
//                 var e = x.invoke(i, n);
//                 return x.invoke(t, null, {
//                   $delegate: e
//                 })
//               }
//             }
//           }
//         },
//         g = p.$injector = u(p, function (e, t) {
//           throw ji.isString(t) && f.push(t), gr("unpr", "Unknown provider: {0}", f.join(" <- "))
//         }),
//         y = {},
//         $ = u(y, function (e, t) {
//           var n = g.get(e + d, t);
//           return x.invoke(n.$get, n, void 0, e)
//         }),
//         x = $;
//       p["$injector" + d] = {
//         $get: m($)
//       };
//       var S = l(e);
//       return x = $.get("$injector"), x.strictDi = t, i(S, function (e) {
//         e && x.invoke(e)
//       }), x
//     }

//     function Qe() {
//       var e = !0;
//       this.disableAutoScrolling = function () {
//         e = !1
//       }, this.$get = ["$window", "$location", "$rootScope", function (t, n, i) {
//         function r(e) {
//           var t = null;
//           return Array.prototype.some.call(e, function (e) {
//             if ("a" === I(e)) return t = e, !0
//           }), t
//         }

//         function o() {
//           var e = a.yOffset;
//           if (C(e)) e = e();
//           else if (N(e)) {
//             var n = e[0];
//             e = "fixed" !== t.getComputedStyle(n).position ? 0 : n.getBoundingClientRect().bottom
//           } else x(e) || (e = 0);
//           return e
//         }

//         function s(e) {
//           if (e) {
//             e.scrollIntoView();
//             var n = o();
//             if (n) {
//               var i = e.getBoundingClientRect().top;
//               t.scrollBy(0, i - n)
//             }
//           } else t.scrollTo(0, 0)
//         }

//         function a(e) {
//           var t;
//           (e = w(e) ? e : n.hash()) ? (t = l.getElementById(e)) ? s(t) : (t = r(l.getElementsByName(e))) ? s(t) : "top" === e && s(null) : s(null)
//         }
//         var l = t.document;
//         return e && i.$watch(function () {
//           return n.hash()
//         }, function (e, t) {
//           e === t && "" === e || Le(function () {
//             i.$evalAsync(a)
//           })
//         }), a
//       }]
//     }

//     function et(e, t) {
//       return e || t ? e ? t ? (_i(e) && (e = e.join(" ")), _i(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
//     }

//     function tt(e) {
//       for (var t = 0; t < e.length; t++) {
//         var n = e[t];
//         if (n.nodeType === yr) return n
//       }
//     }

//     function nt(e) {
//       w(e) && (e = e.split(" "));
//       var t = he();
//       return i(e, function (e) {
//         e.length && (t[e] = !0)
//       }), t
//     }

//     function it(e) {
//       return b(e) ? e : {}
//     }

//     function rt(e, t, n, r) {
//       function o(e) {
//         try {
//           e.apply(null, V(arguments, 1))
//         } finally {
//           if (0 == --y)
//             for (; b.length;) try {
//               b.pop()()
//             } catch (e) {
//               n.error(e)
//             }
//         }
//       }

//       function s(e) {
//         var t = e.indexOf("#");
//         return -1 === t ? "" : e.substr(t)
//       }

//       function a() {
//         C = null, l(), u()
//       }

//       function l() {
//         $ = k(), L($ = v($) ? null : $, j) && ($ = j), j = $
//       }

//       function u() {
//         x === c.url() && w === $ || (x = c.url(), w = $, i(T, function (e) {
//           e(c.url(), $)
//         }))
//       }
//       var c = this,
//         d = e.location,
//         f = e.history,
//         p = e.setTimeout,
//         m = e.clearTimeout,
//         g = {};
//       c.isMock = !1;
//       var y = 0,
//         b = [];
//       c.$$completeOutstandingRequest = o, c.$$incOutstandingRequestCount = function () {
//         y++
//       }, c.notifyWhenNoOutstandingRequests = function (e) {
//         0 === y ? e() : b.push(e)
//       };
//       var $, w, x = d.href,
//         S = t.find("base"),
//         C = null,
//         k = r.history ? function () {
//           try {
//             return f.state
//           } catch (e) { }
//         } : h;
//       l(), w = $, c.url = function (t, n, i) {
//         if (v(i) && (i = null), d !== e.location && (d = e.location), f !== e.history && (f = e.history), t) {
//           var o = w === i;
//           if (x === t && (!r.history || o)) return c;
//           var a = x && It(x) === It(t);
//           return x = t, w = i, !r.history || a && o ? (a || (C = t), n ? d.replace(t) : a ? d.hash = s(t) : d.href = t, d.href !== t && (C = t)) : (f[n ? "replaceState" : "pushState"](i, "", t), l(), w = $), C && (C = t), c
//         }
//         return C || d.href.replace(/%27/g, "'")
//       }, c.state = function () {
//         return $
//       };
//       var T = [],
//         E = !1,
//         j = null;
//       c.onUrlChange = function (t) {
//         return E || (r.history && bi(e).on("popstate", a), bi(e).on("hashchange", a), E = !0), T.push(t), t
//       }, c.$$applicationDestroyed = function () {
//         bi(e).off("hashchange popstate", a)
//       }, c.$$checkUrlChange = u, c.baseHref = function () {
//         var e = S.attr("href");
//         return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
//       }, c.defer = function (e, t) {
//         var n;
//         return y++ , n = p(function () {
//           delete g[n], o(e)
//         }, t || 0), g[n] = !0, n
//       }, c.defer.cancel = function (e) {
//         return !!g[e] && (delete g[e], m(e), o(h), !0)
//       }
//     }

//     function ot() {
//       this.$get = ["$window", "$log", "$sniffer", "$document", function (e, t, n, i) {
//         return new rt(e, i, t, n)
//       }]
//     }

//     function st() {
//       this.$get = function () {
//         function e(e, i) {
//           function r(e) {
//             e != f && (h ? h == e && (h = e.n) : h = e, o(e.n, e.p), o(e, f), (f = e).n = null)
//           }

//           function o(e, t) {
//             e != t && (e && (e.p = t), t && (t.n = e))
//           }
//           if (e in n) throw t("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
//           var s = 0,
//             a = u({}, i, {
//               id: e
//             }),
//             l = he(),
//             c = i && i.capacity || Number.MAX_VALUE,
//             d = he(),
//             f = null,
//             h = null;
//           return n[e] = {
//             put: function (e, t) {
//               if (!v(t)) return c < Number.MAX_VALUE && r(d[e] || (d[e] = {
//                 key: e
//               })), e in l || s++ , l[e] = t, s > c && this.remove(h.key), t
//             },
//             get: function (e) {
//               if (c < Number.MAX_VALUE) {
//                 var t = d[e];
//                 if (!t) return;
//                 r(t)
//               }
//               return l[e]
//             },
//             remove: function (e) {
//               if (c < Number.MAX_VALUE) {
//                 var t = d[e];
//                 if (!t) return;
//                 t == f && (f = t.p), t == h && (h = t.n), o(t.n, t.p), delete d[e]
//               }
//               e in l && (delete l[e], s--)
//             },
//             removeAll: function () {
//               l = he(), s = 0, d = he(), f = h = null
//             },
//             destroy: function () {
//               l = null, a = null, d = null, delete n[e]
//             },
//             info: function () {
//               return u({}, a, {
//                 size: s
//               })
//             }
//           }
//         }
//         var n = {};
//         return e.info = function () {
//           var e = {};
//           return i(n, function (t, n) {
//             e[n] = t.info()
//           }), e
//         }, e.get = function (e) {
//           return n[e]
//         }, e
//       }
//     }

//     function at() {
//       this.$get = ["$cacheFactory", function (e) {
//         return e("templates")
//       }]
//     }

//     function lt(t, n) {
//       function r(e, t, n) {
//         var r = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
//           o = he();
//         return i(e, function (e, i) {
//           if (e in T) o[i] = T[e];
//           else {
//             var s = e.match(r);
//             if (!s) throw kr("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, i, e, n ? "controller bindings definition" : "isolate scope definition");
//             o[i] = {
//               mode: s[1][0],
//               collection: "*" === s[2],
//               optional: "?" === s[3],
//               attrName: s[4] || i
//             }, s[4] && (T[e] = o[i])
//           }
//         }), o
//       }

//       function s(e, t) {
//         var n = {
//           isolateScope: null,
//           bindToController: null
//         };
//         if (b(e.scope) && (!0 === e.bindToController ? (n.bindToController = r(e.scope, t, !0), n.isolateScope = {}) : n.isolateScope = r(e.scope, t, !1)), b(e.bindToController) && (n.bindToController = r(e.bindToController, t, !0)), b(n.bindToController)) {
//           var i = e.controller,
//             o = e.controllerAs;
//           if (!i) throw kr("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
//           if (!ht(i, o)) throw kr("noident", "Cannot bind to controller without identifier for directive '{0}'.", t)
//         }
//         return n
//       }

//       function a(e) {
//         var t = e.charAt(0);
//         if (!t || t !== gi(t)) throw kr("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", e);
//         if (e !== e.trim()) throw kr("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
//       }

//       function l(e) {
//         var t = e.require || e.controller && e.name;
//         return !_i(t) && b(t) && i(t, function (e, n) {
//           var i = e.match(S);
//           e.substring(i[0].length) || (t[n] = i[0] + n)
//         }), t
//       }
//       var c = {},
//         d = "Directive",
//         g = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
//         $ = /(([\w\-]+)(?:\:([^;]+))?;?)/,
//         x = F("ngSrc,ngSrcset,src,srcset"),
//         S = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
//         k = /^(on[a-z]+|formaction)$/,
//         T = he();
//       this.directive = function e(n, r) {
//         return ce(n, "directive"), w(n) ? (a(n), le(r, "directiveFactory"), c.hasOwnProperty(n) || (c[n] = [], t.factory(n + d, ["$injector", "$exceptionHandler", function (e, t) {
//           var r = [];
//           return i(c[n], function (i, o) {
//             try {
//               var s = e.invoke(i);
//               C(s) ? s = {
//                 compile: m(s)
//               } : !s.compile && s.link && (s.compile = m(s.link)), s.priority = s.priority || 0, s.index = o, s.name = s.name || n, s.require = l(s), s.restrict = s.restrict || "EA", s.$$moduleName = i.$$moduleName, r.push(s)
//             } catch (e) {
//               t(e)
//             }
//           }), r
//         }])), c[n].push(r)) : i(n, o(e)), this
//       }, this.component = function (e, t) {
//         function n(e) {
//           function n(t) {
//             return C(t) || _i(t) ? function (n, i) {
//               return e.invoke(t, this, {
//                 $element: n,
//                 $attrs: i
//               })
//             } : t
//           }
//           var o = t.template || t.templateUrl ? t.template : "",
//             s = {
//               controller: r,
//               controllerAs: ht(t.controller) || t.controllerAs || "$ctrl",
//               template: n(o),
//               templateUrl: n(t.templateUrl),
//               transclude: t.transclude,
//               scope: {},
//               bindToController: t.bindings || {},
//               restrict: "E",
//               require: t.require
//             };
//           return i(t, function (e, t) {
//             "$" === t.charAt(0) && (s[t] = e)
//           }), s
//         }
//         var r = t.controller || function () { };
//         return i(t, function (e, t) {
//           "$" === t.charAt(0) && (n[t] = e, C(r) && (r[t] = e))
//         }), n.$inject = ["$injector"], this.directive(e, n)
//       }, this.aHrefSanitizationWhitelist = function (e) {
//         return y(e) ? (n.aHrefSanitizationWhitelist(e), this) : n.aHrefSanitizationWhitelist()
//       }, this.imgSrcSanitizationWhitelist = function (e) {
//         return y(e) ? (n.imgSrcSanitizationWhitelist(e), this) : n.imgSrcSanitizationWhitelist()
//       };
//       var j = !0;
//       this.debugInfoEnabled = function (e) {
//         return y(e) ? (j = e, this) : j
//       };
//       var M = 10;
//       this.onChangesTtl = function (e) {
//         return arguments.length ? (M = e, this) : M
//       }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (t, n, r, o, a, l, m, T, _, D) {
//         function O() {
//           try {
//             if (!--Se) throw be = void 0, kr("infchng", "{0} $onChanges() iterations reached. Aborting!\n", M);
//             m.$apply(function () {
//               for (var e = [], t = 0, n = be.length; t < n; ++t) try {
//                 be[t]()
//               } catch (t) {
//                 e.push(t)
//               }
//               if (be = void 0, e.length) throw e
//             })
//           } finally {
//             Se++
//           }
//         }

//         function P(e, t) {
//           if (t) {
//             var n, i, r, o = Object.keys(t);
//             for (n = 0, i = o.length; n < i; n++) this[r = o[n]] = t[r]
//           } else this.$attr = {};
//           this.$$element = e
//         }

//         function N(e, t, n) {
//           xe.innerHTML = "<span " + t + ">";
//           var i = xe.firstChild.attributes,
//             r = i[0];
//           i.removeNamedItem(r.name), r.value = n, e.attributes.setNamedItem(r)
//         }

//         function F(e, t) {
//           try {
//             e.addClass(t)
//           } catch (e) { }
//         }

//         function z(t, n, i, r, o) {
//           t instanceof bi || (t = bi(t));
//           for (var s = /\S+/, a = 0, l = t.length; a < l; a++) {
//             var u = t[a];
//             u.nodeType === Hi && u.nodeValue.match(s) && Ce(u, t[a] = e.document.createElement("span"))
//           }
//           var c = B(t, n, t, i, r, o);
//           z.$$addScopeClass(t);
//           var d = null;
//           return function (e, n, i) {
//             le(e, "scope"), o && o.needsNewScope && (e = e.$parent.$new());
//             var r = (i = i || {}).parentBoundTranscludeFn,
//               s = i.transcludeControllers,
//               a = i.futureParentElement;
//             r && r.$$boundTransclude && (r = r.$$boundTransclude), d || (d = H(a));
//             var l;
//             if (l = "html" !== d ? bi(de(d, bi("<div>").append(t).html())) : n ? sr.clone.call(t) : t, s)
//               for (var u in s) l.data("$" + u + "Controller", s[u].instance);
//             return z.$$addScopeInfo(l, e), n && n(l, e), c && c(e, l, l, r), l
//           }
//         }

//         function H(e) {
//           var t = e && e[0];
//           return t && "foreignobject" !== I(t) && ki.call(t).match(/SVG/) ? "svg" : "html"
//         }

//         function B(e, t, n, i, r, o) {
//           for (var s, a, l, u, c, d, f, h = [], p = 0; p < e.length; p++) s = new P, (l = (a = W(e[p], [], s, 0 === p ? i : void 0, r)).length ? J(a, e[p], s, t, n, null, [], [], o) : null) && l.scope && z.$$addScopeClass(s.$$element), c = l && l.terminal || !(u = e[p].childNodes) || !u.length ? null : B(u, l ? (l.transcludeOnThisElement || !l.templateOnThisElement) && l.transclude : t), (l || c) && (h.push(p, l, c), d = !0, f = f || l), o = null;
//           return d ? function (e, n, i, r) {
//             var o, s, a, l, u, c, d, p;
//             if (f) {
//               var m = n.length;
//               for (p = new Array(m), u = 0; u < h.length; u += 3) p[d = h[u]] = n[d]
//             } else p = n;
//             for (u = 0, c = h.length; u < c;) a = p[h[u++]], o = h[u++], s = h[u++], o ? (o.scope ? (l = e.$new(), z.$$addScopeInfo(bi(a), l)) : l = e, o(s, l, a, i, o.transcludeOnThisElement ? q(e, o.transclude, r) : !o.templateOnThisElement && r ? r : !r && t ? q(e, t) : null)) : s && s(e, a.childNodes, void 0, r)
//           } : null
//         }

//         function q(e, t, n) {
//           function i(i, r, o, s, a) {
//             return i || ((i = e.$new(!1, a)).$$transcluded = !0), t(i, r, {
//               parentBoundTranscludeFn: n,
//               transcludeControllers: o,
//               futureParentElement: s
//             })
//           }
//           var r = i.$$slots = he();
//           for (var o in t.$$slots) t.$$slots[o] ? r[o] = q(e, t.$$slots[o], n) : r[o] = null;
//           return i
//         }

//         function W(e, t, n, i, r) {
//           var o, s, a = e.nodeType,
//             l = n.$attr;
//           switch (a) {
//             case Li:
//               ne(t, ct(I(e)), "E", i, r);
//               for (var u, c, d, f, h, p, m = e.attributes, g = 0, v = m && m.length; g < v; g++) {
//                 var y = !1,
//                   x = !1;
//                 c = (u = m[g]).name, h = Di(u.value), f = ct(c), (p = Me.test(f)) && (c = c.replace(Er, "").substr(8).replace(/_(.)/g, function (e, t) {
//                   return t.toUpperCase()
//                 }));
//                 var S = f.match(_e);
//                 S && ie(S[1]) && (y = c, x = c.substr(0, c.length - 5) + "end", c = c.substr(0, c.length - 6)), l[d = ct(c.toLowerCase())] = c, !p && n.hasOwnProperty(d) || (n[d] = h, He(e, d) && (n[d] = !0)), pe(e, t, h, d, p), ne(t, d, "A", i, r, y, x)
//               }
//               if (s = e.className, b(s) && (s = s.animVal), w(s) && "" !== s)
//                 for (; o = $.exec(s);) ne(t, d = ct(o[2]), "C", i, r) && (n[d] = Di(o[3])), s = s.substr(o.index + o[0].length);
//               break;
//             case Hi:
//               if (11 === yi)
//                 for (; e.parentNode && e.nextSibling && e.nextSibling.nodeType === Hi;) e.nodeValue = e.nodeValue + e.nextSibling.nodeValue, e.parentNode.removeChild(e.nextSibling);
//               ce(t, e.nodeValue);
//               break;
//             case Vi:
//               Y(e, t, n, i, r)
//           }
//           return t.sort(se), t
//         }

//         function Y(e, t, n, i, r) {
//           try {
//             var o = g.exec(e.nodeValue);
//             if (o) {
//               var s = ct(o[1]);
//               ne(t, s, "M", i, r) && (n[s] = Di(o[2]))
//             }
//           } catch (e) { }
//         }

//         function G(e, t, n) {
//           var i = [],
//             r = 0;
//           if (t && e.hasAttribute && e.hasAttribute(t))
//             do {
//               if (!e) throw kr("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
//               e.nodeType == Li && (e.hasAttribute(t) && r++ , e.hasAttribute(n) && r--), i.push(e), e = e.nextSibling
//             } while (r > 0);
//           else i.push(e);
//           return bi(i)
//         }

//         function Z(e, t, n) {
//           return function (i, r, o, s, a) {
//             return r = G(r[0], t, n), e(i, r, o, s, a)
//           }
//         }

//         function K(e, t, n, i, r, o) {
//           var s;
//           return e ? z(t, n, i, r, o) : function () {
//             return s || (s = z(t, n, i, r, o), t = n = o = null), s.apply(this, arguments)
//           }
//         }

//         function J(e, t, n, o, s, a, l, c, d) {
//           function f(e, t, n, i) {
//             e && (n && (e = Z(e, n, i)), e.require = p.require, e.directiveName = m, (k === p || p.$$isolateScope) && (e = ge(e, {
//               isolateScope: !0
//             })), l.push(e)), t && (n && (t = Z(t, n, i)), t.require = p.require, t.directiveName = m, (k === p || p.$$isolateScope) && (t = ge(t, {
//               isolateScope: !0
//             })), c.push(t))
//           }

//           function h(e, o, s, a, d) {
//             var f, h, p, m, g, y, $, w, j, M;
//             t === s ? (j = n, w = n.$$element) : j = new P(w = bi(s), n), g = o, k ? m = o.$new(!0) : x && (g = o.$parent), d && (($ = function (e, t, n, i) {
//               var r;
//               if (E(e) || (i = n, n = t, t = e, e = void 0), A && (r = y), n || (n = A ? w.parent() : w), !i) return d(e, t, r, n, I);
//               var o = d.$$slots[i];
//               if (o) return o(e, t, r, n, I);
//               if (v(o)) throw kr("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', i, X(w))
//             }).$$boundTransclude = d, $.isSlotFilled = function (e) {
//               return !!d.$$slots[e]
//             }), S && (y = ee(w, j, $, S, m, o, k)), k && (z.$$addScopeInfo(w, m, !0, !(T && (T === k || T === k.$$originalDirective))), z.$$addScopeClass(w, !0), m.$$isolateBindings = k.$$isolateBindings, (M = ye(o, j, m, m.$$isolateBindings, k)).removeWatches && m.$on("$destroy", M.removeWatches));
//             for (var _ in y) {
//               var D = S[_],
//                 O = y[_],
//                 N = D.$$bindings.bindToController;
//               O.identifier && N ? O.bindingInfo = ye(g, j, O.instance, N, D) : O.bindingInfo = {};
//               var F = O();
//               F !== O.instance && (O.instance = F, w.data("$" + D.name + "Controller", F), O.bindingInfo.removeWatches && O.bindingInfo.removeWatches(), O.bindingInfo = ye(g, j, O.instance, N, D))
//             }
//             for (i(S, function (e, t) {
//               var n = e.require;
//               e.bindToController && !_i(n) && b(n) && u(y[t].instance, Q(t, n, w, y))
//             }), i(y, function (e) {
//               var t = e.instance;
//               if (C(t.$onChanges)) try {
//                 t.$onChanges(e.bindingInfo.initialChanges)
//               } catch (e) {
//                 r(e)
//               }
//               if (C(t.$onInit)) try {
//                 t.$onInit()
//               } catch (e) {
//                 r(e)
//               }
//               C(t.$doCheck) && (g.$watch(function () {
//                 t.$doCheck()
//               }), t.$doCheck()), C(t.$onDestroy) && g.$on("$destroy", function () {
//                 t.$onDestroy()
//               })
//             }), f = 0, h = l.length; f < h; f++) ve(p = l[f], p.isolateScope ? m : o, w, j, p.require && Q(p.directiveName, p.require, w, y), $);
//             var I = o;
//             for (k && (k.template || null === k.templateUrl) && (I = m), e && e(I, s.childNodes, void 0, d), f = c.length - 1; f >= 0; f--) ve(p = c[f], p.isolateScope ? m : o, w, j, p.require && Q(p.directiveName, p.require, w, y), $);
//             i(y, function (e) {
//               var t = e.instance;
//               C(t.$postLink) && t.$postLink()
//             })
//           }
//           d = d || {};
//           for (var p, m, g, y, $, w = -Number.MAX_VALUE, x = d.newScopeDirective, S = d.controllerDirectives, k = d.newIsolateScopeDirective, T = d.templateDirective, j = d.nonTlbTranscludeDirective, M = !1, _ = !1, A = d.hasElementTranscludeDirective, D = n.$$element = bi(t), O = a, N = o, F = !1, R = !1, L = 0, H = e.length; L < H; L++) {
//             var B = (p = e[L]).$$start,
//               q = p.$$end;
//             if (B && (D = G(t, B, q)), g = void 0, w > p.priority) break;
//             if (($ = p.scope) && (p.templateUrl || (b($) ? (ue("new/isolated scope", k || x, p, D), k = p) : ue("new/isolated scope", k, p, D)), x = x || p), m = p.name, !F && (p.replace && (p.templateUrl || p.template) || p.transclude && !p.$$tlb)) {
//               for (var Y, J = L + 1; Y = e[J++];)
//                 if (Y.transclude && !Y.$$tlb || Y.replace && (Y.templateUrl || Y.template)) {
//                   R = !0;
//                   break
//                 }
//               F = !0
//             }
//             if (!p.templateUrl && p.controller && ($ = p.controller, S = S || he(), ue("'" + m + "' controller", S[m], p, D), S[m] = p), $ = p.transclude)
//               if (M = !0, p.$$tlb || (ue("transclusion", j, p, D), j = p), "element" == $) A = !0, w = p.priority, g = D, D = n.$$element = bi(z.$$createComment(m, n[m])), t = D[0], me(s, V(g), t), g[0].$$parentNode = g[0].parentNode, N = K(R, g, o, w, O && O.name, {
//                 nonTlbTranscludeDirective: j
//               });
//               else {
//                 var ne = he();
//                 if (g = bi(Te(t)).contents(), b($)) {
//                   g = [];
//                   var ie = he(),
//                     se = he();
//                   i($, function (e, t) {
//                     var n = "?" === e.charAt(0);
//                     e = n ? e.substring(1) : e, ie[e] = t, ne[t] = null, se[t] = n
//                   }), i(D.contents(), function (e) {
//                     var t = ie[ct(I(e))];
//                     t ? (se[t] = !0, ne[t] = ne[t] || [], ne[t].push(e)) : g.push(e)
//                   }), i(se, function (e, t) {
//                     if (!e) throw kr("reqslot", "Required transclusion slot `{0}` was not filled.", t)
//                   });
//                   for (var ae in ne) ne[ae] && (ne[ae] = K(R, ne[ae], o))
//                 }
//                 D.empty(), (N = K(R, g, o, void 0, void 0, {
//                   needsNewScope: p.$$isolateScope || p.$$newScope
//                 })).$$slots = ne
//               }
//             if (p.template)
//               if (_ = !0, ue("template", T, p, D), T = p, $ = C(p.template) ? p.template(D, n) : p.template, $ = je($), p.replace) {
//                 if (O = p, g = $e($) ? [] : ft(de(p.templateNamespace, Di($))), t = g[0], 1 != g.length || t.nodeType !== Li) throw kr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", m, "");
//                 me(s, D, t);
//                 var le = {
//                   $attr: {}
//                 },
//                   ce = W(t, [], le),
//                   fe = e.splice(L + 1, e.length - (L + 1));
//                 (k || x) && te(ce, k, x), e = e.concat(ce).concat(fe), re(n, le), H = e.length
//               } else D.html($);
//             if (p.templateUrl) _ = !0, ue("template", T, p, D), T = p, p.replace && (O = p), h = oe(e.splice(L, e.length - L), D, n, s, M && N, l, c, {
//               controllerDirectives: S,
//               newScopeDirective: x !== p && x,
//               newIsolateScopeDirective: k,
//               templateDirective: T,
//               nonTlbTranscludeDirective: j
//             }), H = e.length;
//             else if (p.compile) try {
//               y = p.compile(D, n, N);
//               var pe = p.$$originalDirective || p;
//               C(y) ? f(null, U(pe, y), B, q) : y && f(U(pe, y.pre), U(pe, y.post), B, q)
//             } catch (e) {
//               r(e, X(D))
//             }
//             p.terminal && (h.terminal = !0, w = Math.max(w, p.priority))
//           }
//           return h.scope = x && !0 === x.scope, h.transcludeOnThisElement = M, h.templateOnThisElement = _, h.transclude = N, d.hasElementTranscludeDirective = A, h
//         }

//         function Q(e, t, n, r) {
//           var o;
//           if (w(t)) {
//             var s = t.match(S),
//               a = t.substring(s[0].length),
//               l = s[1] || s[3],
//               u = "?" === s[2];
//             if ("^^" === l ? n = n.parent() : (o = r && r[a], o = o && o.instance), !o) {
//               var c = "$" + a + "Controller";
//               o = l ? n.inheritedData(c) : n.data(c)
//             }
//             if (!o && !u) throw kr("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, e)
//           } else if (_i(t)) {
//             o = [];
//             for (var d = 0, f = t.length; d < f; d++) o[d] = Q(e, t[d], n, r)
//           } else b(t) && (o = {}, i(t, function (t, i) {
//             o[i] = Q(e, t, n, r)
//           }));
//           return o || null
//         }

//         function ee(e, t, n, i, r, o, s) {
//           var a = he();
//           for (var u in i) {
//             var c = i[u],
//               d = {
//                 $scope: c === s || c.$$isolateScope ? r : o,
//                 $element: e,
//                 $attrs: t,
//                 $transclude: n
//               },
//               f = c.controller;
//             "@" == f && (f = t[c.name]);
//             var h = l(f, d, !0, c.controllerAs);
//             a[c.name] = h, e.data("$" + c.name + "Controller", h.instance)
//           }
//           return a
//         }

//         function te(e, t, n) {
//           for (var i = 0, r = e.length; i < r; i++) e[i] = f(e[i], {
//             $$isolateScope: t,
//             $$newScope: n
//           })
//         }

//         function ne(e, n, i, o, a, l, u) {
//           if (n === a) return null;
//           var h = null;
//           if (c.hasOwnProperty(n))
//             for (var p, m = t.get(n + d), g = 0, y = m.length; g < y; g++) try {
//               if (p = m[g], (v(o) || o > p.priority) && -1 != p.restrict.indexOf(i)) {
//                 if (l && (p = f(p, {
//                   $$start: l,
//                   $$end: u
//                 })), !p.$$bindings) {
//                   var $ = p.$$bindings = s(p, p.name);
//                   b($.isolateScope) && (p.$$isolateBindings = $.isolateScope)
//                 }
//                 e.push(p), h = p
//               }
//             } catch (e) {
//               r(e)
//             }
//           return h
//         }

//         function ie(e) {
//           if (c.hasOwnProperty(e))
//             for (var n = t.get(e + d), i = 0, r = n.length; i < r; i++)
//               if (n[i].multiElement) return !0;
//           return !1
//         }

//         function re(e, t) {
//           var n = t.$attr,
//             r = e.$attr;
//           e.$$element;
//           i(e, function (i, r) {
//             "$" != r.charAt(0) && (t[r] && t[r] !== i && (i += ("style" === r ? ";" : " ") + t[r]), e.$set(r, i, !0, n[r]))
//           }), i(t, function (t, i) {
//             e.hasOwnProperty(i) || "$" === i.charAt(0) || (e[i] = t, "class" !== i && "style" !== i && (r[i] = n[i]))
//           })
//         }

//         function oe(e, t, n, r, s, a, l, u) {
//           var c, d, h = [],
//             p = t[0],
//             m = e.shift(),
//             g = f(m, {
//               templateUrl: null,
//               transclude: null,
//               replace: null,
//               $$originalDirective: m
//             }),
//             v = C(m.templateUrl) ? m.templateUrl(t, n) : m.templateUrl,
//             y = m.templateNamespace;
//           return t.empty(), o(v).then(function (o) {
//             var f, $, w, x;
//             if (o = je(o), m.replace) {
//               if (w = $e(o) ? [] : ft(de(y, Di(o))), f = w[0], 1 != w.length || f.nodeType !== Li) throw kr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", m.name, v);
//               $ = {
//                 $attr: {}
//               }, me(r, t, f);
//               var S = W(f, [], $);
//               b(m.scope) && te(S, !0), e = S.concat(e), re(n, $)
//             } else f = p, t.html(o);
//             for (e.unshift(g), c = J(e, f, n, s, t, m, a, l, u), i(r, function (e, n) {
//               e == f && (r[n] = t[0])
//             }), d = B(t[0].childNodes, s); h.length;) {
//               var C = h.shift(),
//                 k = h.shift(),
//                 T = h.shift(),
//                 E = h.shift(),
//                 j = t[0];
//               if (!C.$$destroyed) {
//                 if (k !== p) {
//                   var M = k.className;
//                   u.hasElementTranscludeDirective && m.replace || (j = Te(f)), me(T, bi(k), j), F(bi(j), M)
//                 }
//                 x = c.transcludeOnThisElement ? q(C, c.transclude, E) : E, c(d, C, j, r, x)
//               }
//             }
//             h = null
//           }),
//             function (e, t, n, i, r) {
//               var o = r;
//               t.$$destroyed || (h ? h.push(t, n, i, o) : (c.transcludeOnThisElement && (o = q(t, c.transclude, r)), c(d, t, n, i, o)))
//             }
//         }

//         function se(e, t) {
//           var n = t.priority - e.priority;
//           return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
//         }

//         function ue(e, t, n, i) {
//           function r(e) {
//             return e ? " (module: " + e + ")" : ""
//           }
//           if (t) throw kr("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", t.name, r(t.$$moduleName), n.name, r(n.$$moduleName), e, X(i))
//         }

//         function ce(e, t) {
//           var i = n(t, !0);
//           i && e.push({
//             priority: 0,
//             compile: function (e) {
//               var t = e.parent(),
//                 n = !!t.length;
//               return n && z.$$addBindingClass(t),
//                 function (e, t) {
//                   var r = t.parent();
//                   n || z.$$addBindingClass(r), z.$$addBindingInfo(r, i.expressions), e.$watch(i, function (e) {
//                     t[0].nodeValue = e
//                   })
//                 }
//             }
//           })
//         }

//         function de(t, n) {
//           switch (t = gi(t || "html")) {
//             case "svg":
//             case "math":
//               var i = e.document.createElement("div");
//               return i.innerHTML = "<" + t + ">" + n + "</" + t + ">", i.childNodes[0].childNodes;
//             default:
//               return n
//           }
//         }

//         function fe(e, t) {
//           if ("srcdoc" == t) return T.HTML;
//           var n = I(e);
//           return "xlinkHref" == t || "form" == n && "action" == t || "img" != n && ("src" == t || "ngSrc" == t) ? T.RESOURCE_URL : void 0
//         }

//         function pe(e, t, i, r, o) {
//           var s = fe(e, r);
//           o = x[r] || o;
//           var a = n(i, !0, s, o);
//           if (a) {
//             if ("multiple" === r && "select" === I(e)) throw kr("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", X(e));
//             t.push({
//               priority: 100,
//               compile: function () {
//                 return {
//                   pre: function (e, t, l) {
//                     var u = l.$$observers || (l.$$observers = he());
//                     if (k.test(r)) throw kr("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
//                     var c = l[r];
//                     c !== i && (a = c && n(c, !0, s, o), i = c), a && (l[r] = a(e), (u[r] || (u[r] = [])).$$inter = !0, (l.$$observers && l.$$observers[r].$$scope || e).$watch(a, function (e, t) {
//                       "class" === r && e != t ? l.$updateClass(e, t) : l.$set(r, e)
//                     }))
//                   }
//                 }
//               }
//             })
//           }
//         }

//         function me(t, n, i) {
//           var r, o, s = n[0],
//             a = n.length,
//             l = s.parentNode;
//           if (t)
//             for (r = 0, o = t.length; r < o; r++)
//               if (t[r] == s) {
//                 t[r++] = i;
//                 for (var u = r, c = u + a - 1, d = t.length; u < d; u++ , c++) c < d ? t[u] = t[c] : delete t[u];
//                 t.length -= a - 1, t.context === s && (t.context = i);
//                 break
//               }
//           l && l.replaceChild(i, s);
//           var f = e.document.createDocumentFragment();
//           for (r = 0; r < a; r++) f.appendChild(n[r]);
//           for (bi.hasData(s) && (bi.data(i, bi.data(s)), bi(s).off("$destroy")), bi.cleanData(f.querySelectorAll("*")), r = 1; r < a; r++) delete n[r];
//           n[0] = i, n.length = 1
//         }

//         function ge(e, t) {
//           return u(function () {
//             return e.apply(null, arguments)
//           }, e, t)
//         }

//         function ve(e, t, n, i, o, s) {
//           try {
//             e(t, n, i, o, s)
//           } catch (e) {
//             r(e, X(n))
//           }
//         }

//         function ye(e, t, r, o, s) {
//           function l(t, n, i) {
//             C(r.$onChanges) && n !== i && (be || (e.$$postDigest(O), be = []), c || (c = {}, be.push(u)), c[t] && (i = c[t].previousValue), c[t] = new ut(i, n))
//           }

//           function u() {
//             r.$onChanges(c), c = void 0
//           }
//           var c, d = [],
//             f = {};
//           return i(o, function (i, o) {
//             var u, c, p, m, g, v = i.attrName,
//               y = i.optional;
//             switch (i.mode) {
//               case "@":
//                 y || mi.call(t, v) || (r[o] = t[v] = void 0), t.$observe(v, function (e) {
//                   if (w(e) || A(e)) {
//                     var t = r[o];
//                     l(o, e, t), r[o] = e
//                   }
//                 }), t.$$observers[v].$$scope = e, w(u = t[v]) ? r[o] = n(u)(e) : A(u) && (r[o] = u), f[o] = new ut(Tr, r[o]);
//                 break;
//               case "=":
//                 if (!mi.call(t, v)) {
//                   if (y) break;
//                   t[v] = void 0
//                 }
//                 if (y && !t[v]) break;
//                 c = a(t[v]), m = c.literal ? L : function (e, t) {
//                   return e === t || e !== e && t !== t
//                 }, p = c.assign || function () {
//                   throw u = r[o] = c(e), kr("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", t[v], v, s.name)
//                 }, u = r[o] = c(e);
//                 var b = function (t) {
//                   return m(t, r[o]) || (m(t, u) ? p(e, t = r[o]) : r[o] = t), u = t
//                 };
//                 b.$stateful = !0, g = i.collection ? e.$watchCollection(t[v], b) : e.$watch(a(t[v], b), null, c.literal), d.push(g);
//                 break;
//               case "<":
//                 if (!mi.call(t, v)) {
//                   if (y) break;
//                   t[v] = void 0
//                 }
//                 if (y && !t[v]) break;
//                 c = a(t[v]);
//                 var $ = r[o] = c(e);
//                 f[o] = new ut(Tr, r[o]), g = e.$watch(c, function (e, t) {
//                   if (t === e) {
//                     if (t === $) return;
//                     t = $
//                   }
//                   l(o, e, t), r[o] = e
//                 }, c.literal), d.push(g);
//                 break;
//               case "&":
//                 if ((c = t.hasOwnProperty(v) ? a(t[v]) : h) === h && y) break;
//                 r[o] = function (t) {
//                   return c(e, t)
//                 }
//             }
//           }), {
//               initialChanges: f,
//               removeWatches: d.length && function () {
//                 for (var e = 0, t = d.length; e < t; ++e) d[e]()
//               }
//             }
//         }
//         var be, we = /^\w/,
//           xe = e.document.createElement("div"),
//           Se = M;
//         P.prototype = {
//           $normalize: ct,
//           $addClass: function (e) {
//             e && e.length > 0 && _.addClass(this.$$element, e)
//           },
//           $removeClass: function (e) {
//             e && e.length > 0 && _.removeClass(this.$$element, e)
//           },
//           $updateClass: function (e, t) {
//             var n = dt(e, t);
//             n && n.length && _.addClass(this.$$element, n);
//             var i = dt(t, e);
//             i && i.length && _.removeClass(this.$$element, i)
//           },
//           $set: function (e, t, n, o) {
//             var s, a = He(this.$$element[0], e),
//               l = Ve(e),
//               u = e;
//             if (a ? (this.$$element.prop(e, t), o = a) : l && (this[l] = t, u = l), this[e] = t, o ? this.$attr[e] = o : (o = this.$attr[e]) || (this.$attr[e] = o = ae(e, "-")), "a" === (s = I(this.$$element)) && ("href" === e || "xlinkHref" === e) || "img" === s && "src" === e) this[e] = t = D(t, "src" === e);
//             else if ("img" === s && "srcset" === e && y(t)) {
//               for (var c = "", d = Di(t), f = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, h = /\s/.test(d) ? f : /(,)/, p = d.split(h), m = Math.floor(p.length / 2), g = 0; g < m; g++) {
//                 var b = 2 * g;
//                 c += D(Di(p[b]), !0), c += " " + Di(p[b + 1])
//               }
//               var $ = Di(p[2 * g]).split(/\s/);
//               c += D(Di($[0]), !0), 2 === $.length && (c += " " + Di($[1])), this[e] = t = c
//             } !1 !== n && (null === t || v(t) ? this.$$element.removeAttr(o) : we.test(o) ? this.$$element.attr(o, t) : N(this.$$element[0], o, t));
//             var w = this.$$observers;
//             w && i(w[u], function (e) {
//               try {
//                 e(t)
//               } catch (e) {
//                 r(e)
//               }
//             })
//           },
//           $observe: function (e, t) {
//             var n = this,
//               i = n.$$observers || (n.$$observers = he()),
//               r = i[e] || (i[e] = []);
//             return r.push(t), m.$evalAsync(function () {
//               r.$$inter || !n.hasOwnProperty(e) || v(n[e]) || t(n[e])
//             }),
//               function () {
//                 R(r, t)
//               }
//           }
//         };
//         var ke = n.startSymbol(),
//           Ee = n.endSymbol(),
//           je = "{{" == ke && "}}" == Ee ? p : function (e) {
//             return e.replace(/\{\{/g, ke).replace(/}}/g, Ee)
//           },
//           Me = /^ngAttr[A-Z]/,
//           _e = /^(.+)Start$/;
//         return z.$$addBindingInfo = j ? function (e, t) {
//           var n = e.data("$binding") || [];
//           _i(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
//         } : h, z.$$addBindingClass = j ? function (e) {
//           F(e, "ng-binding")
//         } : h, z.$$addScopeInfo = j ? function (e, t, n, i) {
//           var r = n ? i ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
//           e.data(r, t)
//         } : h, z.$$addScopeClass = j ? function (e, t) {
//           F(e, t ? "ng-isolate-scope" : "ng-scope")
//         } : h, z.$$createComment = function (t, n) {
//           var i = "";
//           return j && (i = " " + (t || "") + ": ", n && (i += n + " ")), e.document.createComment(i)
//         }, z
//       }]
//     }

//     function ut(e, t) {
//       this.previousValue = e, this.currentValue = t
//     }

//     function ct(e) {
//       return be(e.replace(Er, ""))
//     }

//     function dt(e, t) {
//       var n = "",
//         i = e.split(/\s+/),
//         r = t.split(/\s+/);
//       e: for (var o = 0; o < i.length; o++) {
//         for (var s = i[o], a = 0; a < r.length; a++)
//           if (s == r[a]) continue e;
//         n += (n.length > 0 ? " " : "") + s
//       }
//       return n
//     }

//     function ft(e) {
//       var t = (e = bi(e)).length;
//       if (t <= 1) return e;
//       for (; t--;) e[t].nodeType === Vi && Si.call(e, t, 1);
//       return e
//     }

//     function ht(e, t) {
//       if (t && w(t)) return t;
//       if (w(e)) {
//         var n = Mr.exec(e);
//         if (n) return n[3]
//       }
//     }

//     function pt() {
//       var e = {},
//         n = !1;
//       this.has = function (t) {
//         return e.hasOwnProperty(t)
//       }, this.register = function (t, n) {
//         ce(t, "controller"), b(t) ? u(e, t) : e[t] = n
//       }, this.allowGlobals = function () {
//         n = !0
//       }, this.$get = ["$injector", "$window", function (i, r) {
//         function o(e, n, i, r) {
//           if (!e || !b(e.$scope)) throw t("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", r, n);
//           e.$scope[n] = i
//         }
//         return function (t, s, a, l) {
//           var c, d, f, h;
//           if (a = !0 === a, l && w(l) && (h = l), w(t)) {
//             if (!(d = t.match(Mr))) throw jr("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", t);
//             f = d[1], h = h || d[3], ue(t = e.hasOwnProperty(f) ? e[f] : de(s.$scope, f, !0) || (n ? de(r, f, !0) : void 0), f, !0)
//           }
//           if (a) {
//             var p = (_i(t) ? t[t.length - 1] : t).prototype;
//             c = Object.create(p || null), h && o(s, h, c, f || t.name);
//             return u(function () {
//               var e = i.invoke(t, c, s, f);
//               return e !== c && (b(e) || C(e)) && (c = e, h && o(s, h, c, f || t.name)), c
//             }, {
//                 instance: c,
//                 identifier: h
//               })
//           }
//           return c = i.instantiate(t, s, f), h && o(s, h, c, f || t.name), c
//         }
//       }]
//     }

//     function mt() {
//       this.$get = ["$window", function (e) {
//         return bi(e.document)
//       }]
//     }

//     function gt() {
//       this.$get = ["$log", function (e) {
//         return function (t, n) {
//           e.error.apply(e, arguments)
//         }
//       }]
//     }

//     function vt(e) {
//       return b(e) ? S(e) ? e.toISOString() : q(e) : e
//     }

//     function yt() {
//       this.$get = function () {
//         return function (e) {
//           if (!e) return "";
//           var t = [];
//           return r(e, function (e, n) {
//             null === e || v(e) || (_i(e) ? i(e, function (e) {
//               t.push(te(n) + "=" + te(vt(e)))
//             }) : t.push(te(n) + "=" + te(vt(e))))
//           }), t.join("&")
//         }
//       }
//     }

//     function bt() {
//       this.$get = function () {
//         return function (e) {
//           function t(e, o, s) {
//             null === e || v(e) || (_i(e) ? i(e, function (e, n) {
//               t(e, o + "[" + (b(e) ? n : "") + "]")
//             }) : b(e) && !S(e) ? r(e, function (e, n) {
//               t(e, o + (s ? "" : "[") + n + (s ? "" : "]"))
//             }) : n.push(te(o) + "=" + te(vt(e))))
//           }
//           if (!e) return "";
//           var n = [];
//           return t(e, "", !0), n.join("&")
//         }
//       }
//     }

//     function $t(e, t) {
//       if (w(e)) {
//         var n = e.replace(Nr, "").trim();
//         if (n) {
//           var i = t("Content-Type");
//           (i && 0 === i.indexOf(Ar) || wt(n)) && (e = W(n))
//         }
//       }
//       return e
//     }

//     function wt(e) {
//       var t = e.match(Or);
//       return t && Pr[t[0]].test(e)
//     }

//     function xt(e) {
//       function t(e, t) {
//         e && (r[e] = r[e] ? r[e] + ", " + t : t)
//       }
//       var n, r = he();
//       return w(e) ? i(e.split("\n"), function (e) {
//         n = e.indexOf(":"), t(gi(Di(e.substr(0, n))), Di(e.substr(n + 1)))
//       }) : b(e) && i(e, function (e, n) {
//         t(gi(n), Di(e))
//       }), r
//     }

//     function St(e) {
//       var t;
//       return function (n) {
//         if (t || (t = xt(e)), n) {
//           var i = t[gi(n)];
//           return void 0 === i && (i = null), i
//         }
//         return t
//       }
//     }

//     function Ct(e, t, n, r) {
//       return C(r) ? r(e, t, n) : (i(r, function (i) {
//         e = i(e, t, n)
//       }), e)
//     }

//     function kt(e) {
//       return 200 <= e && e < 300
//     }

//     function Tt() {
//       var e = this.defaults = {
//         transformResponse: [$t],
//         transformRequest: [function (e) {
//           return !b(e) || j(e) || _(e) || M(e) ? e : q(e)
//         }],
//         headers: {
//           common: {
//             Accept: "application/json, text/plain, */*"
//           },
//           post: me(Dr),
//           put: me(Dr),
//           patch: me(Dr)
//         },
//         xsrfCookieName: "XSRF-TOKEN",
//         xsrfHeaderName: "X-XSRF-TOKEN",
//         paramSerializer: "$httpParamSerializer"
//       },
//         n = !1;
//       this.useApplyAsync = function (e) {
//         return y(e) ? (n = !!e, this) : n
//       };
//       var r = !0;
//       this.useLegacyPromiseExtensions = function (e) {
//         return y(e) ? (r = !!e, this) : r
//       };
//       var o = this.interceptors = [];
//       this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (s, a, l, c, d, f) {
//         function h(n) {
//           function o(e, t) {
//             for (var n = 0, i = t.length; n < i;) {
//               var r = t[n++],
//                 o = t[n++];
//               e = e.then(r, o)
//             }
//             return t.length = 0, e
//           }

//           function s(e, t) {
//             var n, r = {};
//             return i(e, function (e, i) {
//               C(e) ? null != (n = e(t)) && (r[i] = n) : r[i] = e
//             }), r
//           }

//           function a(e) {
//             var t = u({}, e);
//             return t.data = Ct(e.data, e.headers, e.status, l.transformResponse), kt(e.status) ? t : d.reject(t)
//           }
//           if (!b(n)) throw t("$http")("badreq", "Http request configuration must be an object.  Received: {0}", n);
//           if (!w(n.url)) throw t("$http")("badreq", "Http request configuration url must be a string.  Received: {0}", n.url);
//           var l = u({
//             method: "get",
//             transformRequest: e.transformRequest,
//             transformResponse: e.transformResponse,
//             paramSerializer: e.paramSerializer
//           }, n);
//           l.headers = function (t) {
//             var n, i, r, o = e.headers,
//               a = u({}, t.headers);
//             o = u({}, o.common, o[gi(t.method)]);
//             e: for (n in o) {
//               i = gi(n);
//               for (r in a)
//                 if (gi(r) === i) continue e;
//               a[n] = o[n]
//             }
//             return s(a, me(t))
//           }(n), l.method = vi(l.method), l.paramSerializer = w(l.paramSerializer) ? f.get(l.paramSerializer) : l.paramSerializer;
//           var c = [],
//             h = [],
//             m = d.when(l);
//           return i($, function (e) {
//             (e.request || e.requestError) && c.unshift(e.request, e.requestError), (e.response || e.responseError) && h.push(e.response, e.responseError)
//           }), m = o(m, c), m = m.then(function (t) {
//             var n = t.headers,
//               r = Ct(t.data, St(n), void 0, t.transformRequest);
//             return v(r) && i(n, function (e, t) {
//               "content-type" === gi(t) && delete n[t]
//             }), v(t.withCredentials) && !v(e.withCredentials) && (t.withCredentials = e.withCredentials), p(t, r).then(a, a)
//           }), m = o(m, h), r ? (m.success = function (e) {
//             return ue(e, "fn"), m.then(function (t) {
//               e(t.data, t.status, t.headers, l)
//             }), m
//           }, m.error = function (e) {
//             return ue(e, "fn"), m.then(null, function (t) {
//               e(t.data, t.status, t.headers, l)
//             }), m
//           }) : (m.success = Ir("success"), m.error = Ir("error")), m
//         }

//         function p(t, r) {
//           function o(e) {
//             if (e) {
//               var t = {};
//               return i(e, function (e, i) {
//                 t[i] = function (t) {
//                   function i() {
//                     e(t)
//                   }
//                   n ? c.$applyAsync(i) : c.$$phase ? i() : c.$apply(i)
//                 }
//               }), t
//             }
//           }

//           function l(e, n, i, r) {
//             (kt(n = n >= -1 ? n : 0) ? w.resolve : w.reject)({
//               data: e,
//               status: n,
//               headers: St(i),
//               config: t,
//               statusText: r
//             })
//           }

//           function u(e) {
//             l(e.data, e.status, me(e.headers()), e.statusText)
//           }

//           function f() {
//             var e = h.pendingRequests.indexOf(t); - 1 !== e && h.pendingRequests.splice(e, 1)
//           }
//           var p, $, w = d.defer(),
//             x = w.promise,
//             S = t.headers,
//             C = m(t.url, t.paramSerializer(t.params));
//           if (h.pendingRequests.push(t), x.then(f, f), !t.cache && !e.cache || !1 === t.cache || "GET" !== t.method && "JSONP" !== t.method || (p = b(t.cache) ? t.cache : b(e.cache) ? e.cache : g), p && (y($ = p.get(C)) ? D($) ? $.then(u, u) : _i($) ? l($[1], $[0], me($[2]), $[3]) : l($, 200, {}, "OK") : p.put(C, x)), v($)) {
//             var k = Mn(t.url) ? a()[t.xsrfCookieName || e.xsrfCookieName] : void 0;
//             k && (S[t.xsrfHeaderName || e.xsrfHeaderName] = k), s(t.method, C, r, function (e, t, i, r) {
//               function o() {
//                 l(t, e, i, r)
//               }
//               p && (kt(e) ? p.put(C, [e, t, xt(i), r]) : p.remove(C)), n ? c.$applyAsync(o) : (o(), c.$$phase || c.$apply())
//             }, S, t.timeout, t.withCredentials, t.responseType, o(t.eventHandlers), o(t.uploadEventHandlers))
//           }
//           return x
//         }

//         function m(e, t) {
//           return t.length > 0 && (e += (-1 == e.indexOf("?") ? "?" : "&") + t), e
//         }
//         var g = l("$http");
//         e.paramSerializer = w(e.paramSerializer) ? f.get(e.paramSerializer) : e.paramSerializer;
//         var $ = [];
//         return i(o, function (e) {
//           $.unshift(w(e) ? f.get(e) : f.invoke(e))
//         }), h.pendingRequests = [],
//           function (e) {
//             i(arguments, function (e) {
//               h[e] = function (t, n) {
//                 return h(u({}, n || {}, {
//                   method: e,
//                   url: t
//                 }))
//               }
//             })
//           }("get", "delete", "head", "jsonp"),
//           function (e) {
//             i(arguments, function (e) {
//               h[e] = function (t, n, i) {
//                 return h(u({}, i || {}, {
//                   method: e,
//                   url: t,
//                   data: n
//                 }))
//               }
//             })
//           }("post", "put", "patch"), h.defaults = e, h
//       }]
//     }

//     function Et() {
//       this.$get = function () {
//         return function () {
//           return new e.XMLHttpRequest
//         }
//       }
//     }

//     function jt() {
//       this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (e, t, n, i) {
//         return Mt(e, i, e.defer, t, n[0])
//       }]
//     }

//     function Mt(e, t, n, r, o) {
//       function s(e, t, n) {
//         e = e.replace("JSON_CALLBACK", t);
//         var i = o.createElement("script"),
//           s = null;
//         return i.type = "text/javascript", i.src = e, i.async = !0, s = function (e) {
//           Zi(i, "load", s), Zi(i, "error", s), o.body.removeChild(i), i = null;
//           var a = -1,
//             l = "unknown";
//           e && ("load" !== e.type || r.wasCalled(t) || (e = {
//             type: "error"
//           }), l = e.type, a = "error" === e.type ? 404 : 200), n && n(a, l)
//         }, Gi(i, "load", s), Gi(i, "error", s), o.body.appendChild(i), s
//       }
//       return function (o, a, l, u, c, d, f, p, m, g) {
//         function b() {
//           x && x(), S && S.abort()
//         }

//         function $(t, i, r, o, s) {
//           y(k) && n.cancel(k), x = S = null, t(i, r, o, s), e.$$completeOutstandingRequest(h)
//         }
//         if (e.$$incOutstandingRequestCount(), a = a || e.url(), "jsonp" === gi(o)) var w = r.createCallback(a),
//           x = s(a, w, function (e, t) {
//             var n = 200 === e && r.getResponse(w);
//             $(u, e, n, "", t), r.removeCallback(w)
//           });
//         else {
//           var S = t(o, a);
//           S.open(o, a, !0), i(c, function (e, t) {
//             y(e) && S.setRequestHeader(t, e)
//           }), S.onload = function () {
//             var e = S.statusText || "",
//               t = "response" in S ? S.response : S.responseText,
//               n = 1223 === S.status ? 204 : S.status;
//             0 === n && (n = t ? 200 : "file" == jn(a).protocol ? 404 : 0), $(u, n, t, S.getAllResponseHeaders(), e)
//           };
//           var C = function () {
//             $(u, -1, null, null, "")
//           };
//           if (S.onerror = C, S.onabort = C, i(m, function (e, t) {
//             S.addEventListener(t, e)
//           }), i(g, function (e, t) {
//             S.upload.addEventListener(t, e)
//           }), f && (S.withCredentials = !0), p) try {
//             S.responseType = p
//           } catch (e) {
//             if ("json" !== p) throw e
//           }
//           S.send(v(l) ? null : l)
//         }
//         if (d > 0) var k = n(b, d);
//         else D(d) && d.then(b)
//       }
//     }

//     function _t() {
//       var e = "{{",
//         t = "}}";
//       this.startSymbol = function (t) {
//         return t ? (e = t, this) : e
//       }, this.endSymbol = function (e) {
//         return e ? (t = e, this) : t
//       }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, i, r) {
//         function o(e) {
//           return "\\\\\\" + e
//         }

//         function s(n) {
//           return n.replace(h, e).replace(p, t)
//         }

//         function a(e) {
//           if (null == e) return "";
//           switch (typeof e) {
//             case "string":
//               break;
//             case "number":
//               e = "" + e;
//               break;
//             default:
//               e = q(e)
//           }
//           return e
//         }

//         function l(e, t, n, i) {
//           var r;
//           return r = e.$watch(function (e) {
//             return r(), i(e)
//           }, t, n)
//         }

//         function c(o, c, h, p) {
//           if (!o.length || -1 === o.indexOf(e)) {
//             var g;
//             return c || ((g = m(s(o))).exp = o, g.expressions = [], g.$$watchDelegate = l), g
//           }
//           p = !!p;
//           for (var b, $, w, x = 0, S = [], k = [], T = o.length, E = [], j = []; x < T;) {
//             if (-1 == (b = o.indexOf(e, x)) || -1 == ($ = o.indexOf(t, b + d))) {
//               x !== T && E.push(s(o.substring(x)));
//               break
//             }
//             x !== b && E.push(s(o.substring(x, b))), w = o.substring(b + d, $), S.push(w), k.push(n(w, function (e) {
//               try {
//                 return e = _(e), p && !y(e) ? e : a(e)
//               } catch (e) {
//                 i(Rr.interr(o, e))
//               }
//             })), x = $ + f, j.push(E.length), E.push("")
//           }
//           if (h && E.length > 1 && Rr.throwNoconcat(o), !c || S.length) {
//             var M = function (e) {
//               for (var t = 0, n = S.length; t < n; t++) {
//                 if (p && v(e[t])) return;
//                 E[j[t]] = e[t]
//               }
//               return E.join("")
//             },
//               _ = function (e) {
//                 return h ? r.getTrusted(h, e) : r.valueOf(e)
//               };
//             return u(function (e) {
//               var t = 0,
//                 n = S.length,
//                 r = new Array(n);
//               try {
//                 for (; t < n; t++) r[t] = k[t](e);
//                 return M(r)
//               } catch (e) {
//                 i(Rr.interr(o, e))
//               }
//             }, {
//                 exp: o,
//                 expressions: S,
//                 $$watchDelegate: function (e, t) {
//                   var n;
//                   return e.$watchGroup(k, function (i, r) {
//                     var o = M(i);
//                     C(t) && t.call(this, o, i !== r ? n : o, e), n = o
//                   })
//                 }
//               })
//           }
//         }
//         var d = e.length,
//           f = t.length,
//           h = new RegExp(e.replace(/./g, o), "g"),
//           p = new RegExp(t.replace(/./g, o), "g");
//         return c.startSymbol = function () {
//           return e
//         }, c.endSymbol = function () {
//           return t
//         }, c
//       }]
//     }

//     function At() {
//       this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (e, t, n, i, r) {
//         function o(o, a, l, u) {
//           function c() {
//             d ? o.apply(null, f) : o(m)
//           }
//           var d = arguments.length > 4,
//             f = d ? V(arguments, 4) : [],
//             h = t.setInterval,
//             p = t.clearInterval,
//             m = 0,
//             g = y(u) && !u,
//             v = (g ? i : n).defer(),
//             b = v.promise;
//           return l = y(l) ? l : 0, b.$$intervalId = h(function () {
//             g ? r.defer(c) : e.$evalAsync(c), v.notify(m++), l > 0 && m >= l && (v.resolve(m), p(b.$$intervalId), delete s[b.$$intervalId]), g || e.$apply()
//           }, a), s[b.$$intervalId] = v, b
//         }
//         var s = {};
//         return o.cancel = function (e) {
//           return !!(e && e.$$intervalId in s) && (s[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete s[e.$$intervalId], !0)
//         }, o
//       }]
//     }

//     function Dt(e) {
//       for (var t = e.split("/"), n = t.length; n--;) t[n] = ee(t[n]);
//       return t.join("/")
//     }

//     function Ot(e, t) {
//       var n = jn(e);
//       t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = d(n.port) || Hr[n.protocol] || null
//     }

//     function Pt(e, t) {
//       var n = "/" !== e.charAt(0);
//       n && (e = "/" + e);
//       var i = jn(e);
//       t.$$path = decodeURIComponent(n && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname), t.$$search = J(i.search), t.$$hash = decodeURIComponent(i.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
//     }

//     function Nt(e, t) {
//       return 0 === e.lastIndexOf(t, 0)
//     }

//     function Ft(e, t) {
//       if (Nt(t, e)) return t.substr(e.length)
//     }

//     function It(e) {
//       var t = e.indexOf("#");
//       return -1 == t ? e : e.substr(0, t)
//     }

//     function Rt(e) {
//       return e.replace(/(#.+)|#$/, "$1")
//     }

//     function zt(e) {
//       return e.substr(0, It(e).lastIndexOf("/") + 1)
//     }

//     function Lt(e) {
//       return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
//     }

//     function Ht(e, t, n) {
//       this.$$html5 = !0, n = n || "", Ot(e, this), this.$$parse = function (e) {
//         var n = Ft(t, e);
//         if (!w(n)) throw Vr("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, t);
//         Pt(n, this), this.$$path || (this.$$path = "/"), this.$$compose()
//       }, this.$$compose = function () {
//         var e = Q(this.$$search),
//           n = this.$$hash ? "#" + ee(this.$$hash) : "";
//         this.$$url = Dt(this.$$path) + (e ? "?" + e : "") + n, this.$$absUrl = t + this.$$url.substr(1)
//       }, this.$$parseLinkUrl = function (i, r) {
//         if (r && "#" === r[0]) return this.hash(r.slice(1)), !0;
//         var o, s, a;
//         return y(o = Ft(e, i)) ? (s = o, a = y(o = Ft(n, o)) ? t + (Ft("/", o) || o) : e + s) : y(o = Ft(t, i)) ? a = t + o : t == i + "/" && (a = t), a && this.$$parse(a), !!a
//       }
//     }

//     function Vt(e, t, n) {
//       Ot(e, this), this.$$parse = function (i) {
//         var r, o = Ft(e, i) || Ft(t, i);
//         v(o) || "#" !== o.charAt(0) ? this.$$html5 ? r = o : (r = "", v(o) && (e = i, this.replace())) : v(r = Ft(n, o)) && (r = o), Pt(r, this), this.$$path = function (e, t, n) {
//           var i, r = /^\/[A-Z]:(\/.*)/;
//           return Nt(t, n) && (t = t.replace(n, "")), r.exec(t) ? e : (i = r.exec(e)) ? i[1] : e
//         }(this.$$path, r, e), this.$$compose()
//       }, this.$$compose = function () {
//         var t = Q(this.$$search),
//           i = this.$$hash ? "#" + ee(this.$$hash) : "";
//         this.$$url = Dt(this.$$path) + (t ? "?" + t : "") + i, this.$$absUrl = e + (this.$$url ? n + this.$$url : "")
//       }, this.$$parseLinkUrl = function (t, n) {
//         return It(e) == It(t) && (this.$$parse(t), !0)
//       }
//     }

//     function Ut(e, t, n) {
//       this.$$html5 = !0, Vt.apply(this, arguments), this.$$parseLinkUrl = function (i, r) {
//         if (r && "#" === r[0]) return this.hash(r.slice(1)), !0;
//         var o, s;
//         return e == It(i) ? o = i : (s = Ft(t, i)) ? o = e + n + s : t === i + "/" && (o = t), o && this.$$parse(o), !!o
//       }, this.$$compose = function () {
//         var t = Q(this.$$search),
//           i = this.$$hash ? "#" + ee(this.$$hash) : "";
//         this.$$url = Dt(this.$$path) + (t ? "?" + t : "") + i, this.$$absUrl = e + n + this.$$url
//       }
//     }

//     function Bt(e) {
//       return function () {
//         return this[e]
//       }
//     }

//     function qt(e, t) {
//       return function (n) {
//         return v(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
//       }
//     }

//     function Wt() {
//       var e = "",
//         t = {
//           enabled: !1,
//           requireBase: !0,
//           rewriteLinks: !0
//         };
//       this.hashPrefix = function (t) {
//         return y(t) ? (e = t, this) : e
//       }, this.html5Mode = function (e) {
//         return A(e) ? (t.enabled = e, this) : b(e) ? (A(e.enabled) && (t.enabled = e.enabled), A(e.requireBase) && (t.requireBase = e.requireBase), A(e.rewriteLinks) && (t.rewriteLinks = e.rewriteLinks), this) : t
//       }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (n, i, r, o, s) {
//         function a(e, t, n) {
//           var r = u.url(),
//             o = u.$$state;
//           try {
//             i.url(e, t, n), u.$$state = i.state()
//           } catch (e) {
//             throw u.url(r), u.$$state = o, e
//           }
//         }

//         function l(e, t) {
//           n.$broadcast("$locationChangeSuccess", u.absUrl(), e, u.$$state, t)
//         }
//         var u, c, d, f = i.baseHref(),
//           h = i.url();
//         if (t.enabled) {
//           if (!f && t.requireBase) throw Vr("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
//           d = Lt(h) + (f || "/"), c = r.history ? Ht : Ut
//         } else d = It(h), c = Vt;
//         var p = zt(d);
//         (u = new c(d, p, "#" + e)).$$parseLinkUrl(h, h), u.$$state = i.state();
//         var m = /^\s*(javascript|mailto):/i;
//         o.on("click", function (e) {
//           if (t.rewriteLinks && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 != e.which && 2 != e.button) {
//             for (var r = bi(e.target);
//               "a" !== I(r[0]);)
//               if (r[0] === o[0] || !(r = r.parent())[0]) return;
//             var a = r.prop("href"),
//               l = r.attr("href") || r.attr("xlink:href");
//             b(a) && "[object SVGAnimatedString]" === a.toString() && (a = jn(a.animVal).href), m.test(a) || !a || r.attr("target") || e.isDefaultPrevented() || u.$$parseLinkUrl(a, l) && (e.preventDefault(), u.absUrl() != i.url() && (n.$apply(), s.angular["ff-684208-preventDefault"] = !0))
//           }
//         }), Rt(u.absUrl()) != Rt(h) && i.url(u.absUrl(), !0);
//         var g = !0;
//         return i.onUrlChange(function (e, t) {
//           v(Ft(p, e)) ? s.location.href = e : (n.$evalAsync(function () {
//             var i, r = u.absUrl(),
//               o = u.$$state;
//             e = Rt(e), u.$$parse(e), u.$$state = t, i = n.$broadcast("$locationChangeStart", e, r, t, o).defaultPrevented, u.absUrl() === e && (i ? (u.$$parse(r), u.$$state = o, a(r, !1, o)) : (g = !1, l(r, o)))
//           }), n.$$phase || n.$digest())
//         }), n.$watch(function () {
//           var e = Rt(i.url()),
//             t = Rt(u.absUrl()),
//             o = i.state(),
//             s = u.$$replace,
//             c = e !== t || u.$$html5 && r.history && o !== u.$$state;
//           (g || c) && (g = !1, n.$evalAsync(function () {
//             var t = u.absUrl(),
//               i = n.$broadcast("$locationChangeStart", t, e, u.$$state, o).defaultPrevented;
//             u.absUrl() === t && (i ? (u.$$parse(e), u.$$state = o) : (c && a(t, s, o === u.$$state ? null : u.$$state), l(e, o)))
//           })), u.$$replace = !1
//         }), u
//       }]
//     }

//     function Yt() {
//       var e = !0,
//         t = this;
//       this.debugEnabled = function (t) {
//         return y(t) ? (e = t, this) : e
//       }, this.$get = ["$window", function (n) {
//         function r(e) {
//           return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
//         }

//         function o(e) {
//           var t = n.console || {},
//             o = t[e] || t.log || h,
//             s = !1;
//           try {
//             s = !!o.apply
//           } catch (e) { }
//           return s ? function () {
//             var e = [];
//             return i(arguments, function (t) {
//               e.push(r(t))
//             }), o.apply(t, e)
//           } : function (e, t) {
//             o(e, null == t ? "" : t)
//           }
//         }
//         return {
//           log: o("log"),
//           info: o("info"),
//           warn: o("warn"),
//           error: o("error"),
//           debug: function () {
//             var n = o("debug");
//             return function () {
//               e && n.apply(t, arguments)
//             }
//           }()
//         }
//       }]
//     }

//     function Gt(e, t) {
//       if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw Br("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
//       return e
//     }

//     function Zt(e) {
//       return e + ""
//     }

//     function Xt(e, t) {
//       if (e) {
//         if (e.constructor === e) throw Br("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
//         if (e.window === e) throw Br("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
//         if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw Br("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
//         if (e === Object) throw Br("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
//       }
//       return e
//     }

//     function Kt(e, t) {
//       if (e) {
//         if (e.constructor === e) throw Br("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
//         if (e === qr || e === Wr || e === Yr) throw Br("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
//       }
//     }

//     function Jt(e, t) {
//       if (e && (e === (0).constructor || e === (!1).constructor || e === "".constructor || e === {}.constructor || e === [].constructor || e === Function.constructor)) throw Br("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", t)
//     }

//     function Qt(e, t) {
//       return void 0 !== e ? e : t
//     }

//     function en(e, t) {
//       return void 0 === e ? t : void 0 === t ? e : e + t
//     }

//     function tn(e, t) {
//       return !e(t).$stateful
//     }

//     function nn(e, t) {
//       var n, r;
//       switch (e.type) {
//         case Kr.Program:
//           n = !0, i(e.body, function (e) {
//             nn(e.expression, t), n = n && e.expression.constant
//           }), e.constant = n;
//           break;
//         case Kr.Literal:
//           e.constant = !0, e.toWatch = [];
//           break;
//         case Kr.UnaryExpression:
//           nn(e.argument, t), e.constant = e.argument.constant, e.toWatch = e.argument.toWatch;
//           break;
//         case Kr.BinaryExpression:
//           nn(e.left, t), nn(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.left.toWatch.concat(e.right.toWatch);
//           break;
//         case Kr.LogicalExpression:
//           nn(e.left, t), nn(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.constant ? [] : [e];
//           break;
//         case Kr.ConditionalExpression:
//           nn(e.test, t), nn(e.alternate, t), nn(e.consequent, t), e.constant = e.test.constant && e.alternate.constant && e.consequent.constant, e.toWatch = e.constant ? [] : [e];
//           break;
//         case Kr.Identifier:
//           e.constant = !1, e.toWatch = [e];
//           break;
//         case Kr.MemberExpression:
//           nn(e.object, t), e.computed && nn(e.property, t), e.constant = e.object.constant && (!e.computed || e.property.constant), e.toWatch = [e];
//           break;
//         case Kr.CallExpression:
//           n = !!e.filter && tn(t, e.callee.name), r = [], i(e.arguments, function (e) {
//             nn(e, t), n = n && e.constant, e.constant || r.push.apply(r, e.toWatch)
//           }), e.constant = n, e.toWatch = e.filter && tn(t, e.callee.name) ? r : [e];
//           break;
//         case Kr.AssignmentExpression:
//           nn(e.left, t), nn(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = [e];
//           break;
//         case Kr.ArrayExpression:
//           n = !0, r = [], i(e.elements, function (e) {
//             nn(e, t), n = n && e.constant, e.constant || r.push.apply(r, e.toWatch)
//           }), e.constant = n, e.toWatch = r;
//           break;
//         case Kr.ObjectExpression:
//           n = !0, r = [], i(e.properties, function (e) {
//             nn(e.value, t), n = n && e.value.constant && !e.computed, e.value.constant || r.push.apply(r, e.value.toWatch)
//           }), e.constant = n, e.toWatch = r;
//           break;
//         case Kr.ThisExpression:
//         case Kr.LocalsExpression:
//           e.constant = !1, e.toWatch = []
//       }
//     }

//     function rn(e) {
//       if (1 == e.length) {
//         var t = e[0].expression,
//           n = t.toWatch;
//         return 1 !== n.length ? n : n[0] !== t ? n : void 0
//       }
//     }

//     function on(e) {
//       return e.type === Kr.Identifier || e.type === Kr.MemberExpression
//     }

//     function sn(e) {
//       if (1 === e.body.length && on(e.body[0].expression)) return {
//         type: Kr.AssignmentExpression,
//         left: e.body[0].expression,
//         right: {
//           type: Kr.NGValueParameter
//         },
//         operator: "="
//       }
//     }

//     function an(e) {
//       return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === Kr.Literal || e.body[0].expression.type === Kr.ArrayExpression || e.body[0].expression.type === Kr.ObjectExpression)
//     }

//     function ln(e) {
//       return e.constant
//     }

//     function un(e, t) {
//       this.astBuilder = e, this.$filter = t
//     }

//     function cn(e, t) {
//       this.astBuilder = e, this.$filter = t
//     }

//     function dn(e) {
//       return "constructor" == e
//     }

//     function fn(e) {
//       return C(e.valueOf) ? e.valueOf() : Qr.call(e)
//     }

//     function hn() {
//       var e, t, n = he(),
//         r = he(),
//         o = {
//           true: !0,
//           false: !1,
//           null: null,
//           undefined: void 0
//         };
//       this.addLiteral = function (e, t) {
//         o[e] = t
//       }, this.setIdentifierFns = function (n, i) {
//         return e = n, t = i, this
//       }, this.$get = ["$filter", function (s) {
//         function a(e, t, i) {
//           var o, a, u;
//           switch (i = i || $, typeof e) {
//             case "string":
//               u = e = e.trim();
//               var g = i ? r : n;
//               if (!(o = g[u])) {
//                 ":" === e.charAt(0) && ":" === e.charAt(1) && (a = !0, e = e.substring(2));
//                 var y = i ? b : v,
//                   w = new Xr(y);
//                 (o = new Jr(w, s, y).parse(e)).constant ? o.$$watchDelegate = p : a ? o.$$watchDelegate = o.literal ? f : d : o.inputs && (o.$$watchDelegate = c), i && (o = l(o)), g[u] = o
//               }
//               return m(o, t);
//             case "function":
//               return m(e, t);
//             default:
//               return m(h, t)
//           }
//         }

//         function l(e) {
//           function t(t, n, i, r) {
//             var o = $;
//             $ = !0;
//             try {
//               return e(t, n, i, r)
//             } finally {
//               $ = o
//             }
//           }
//           if (!e) return e;
//           t.$$watchDelegate = e.$$watchDelegate, t.assign = l(e.assign), t.constant = e.constant, t.literal = e.literal;
//           for (var n = 0; e.inputs && n < e.inputs.length; ++n) e.inputs[n] = l(e.inputs[n]);
//           return t.inputs = e.inputs, t
//         }

//         function u(e, t) {
//           return null == e || null == t ? e === t : ("object" != typeof e || "object" != typeof (e = fn(e))) && (e === t || e !== e && t !== t)
//         }

//         function c(e, t, n, i, r) {
//           var o, s = i.inputs;
//           if (1 === s.length) {
//             var a = u;
//             return s = s[0], e.$watch(function (e) {
//               var t = s(e);
//               return u(t, a) || (o = i(e, void 0, void 0, [t]), a = t && fn(t)), o
//             }, t, n, r)
//           }
//           for (var l = [], c = [], d = 0, f = s.length; d < f; d++) l[d] = u, c[d] = null;
//           return e.$watch(function (e) {
//             for (var t = !1, n = 0, r = s.length; n < r; n++) {
//               var a = s[n](e);
//               (t || (t = !u(a, l[n]))) && (c[n] = a, l[n] = a && fn(a))
//             }
//             return t && (o = i(e, void 0, void 0, c)), o
//           }, t, n, r)
//         }

//         function d(e, t, n, i) {
//           var r, o;
//           return r = e.$watch(function (e) {
//             return i(e)
//           }, function (e, n, i) {
//             o = e, C(t) && t.apply(this, arguments), y(e) && i.$$postDigest(function () {
//               y(o) && r()
//             })
//           }, n)
//         }

//         function f(e, t, n, r) {
//           function o(e) {
//             var t = !0;
//             return i(e, function (e) {
//               y(e) || (t = !1)
//             }), t
//           }
//           var s, a;
//           return s = e.$watch(function (e) {
//             return r(e)
//           }, function (e, n, i) {
//             a = e, C(t) && t.call(this, e, n, i), o(e) && i.$$postDigest(function () {
//               o(a) && s()
//             })
//           }, n)
//         }

//         function p(e, t, n, i) {
//           var r;
//           return r = e.$watch(function (e) {
//             return r(), i(e)
//           }, t, n)
//         }

//         function m(e, t) {
//           if (!t) return e;
//           var n = e.$$watchDelegate,
//             i = !1,
//             r = n !== f && n !== d ? function (n, r, o, s) {
//               var a = i && s ? s[0] : e(n, r, o, s);
//               return t(a, n, r)
//             } : function (n, i, r, o) {
//               var s = e(n, i, r, o),
//                 a = t(s, n, i);
//               return y(s) ? a : s
//             };
//           return e.$$watchDelegate && e.$$watchDelegate !== c ? r.$$watchDelegate = e.$$watchDelegate : t.$stateful || (r.$$watchDelegate = c, i = !e.inputs, r.inputs = e.inputs ? e.inputs : [e]), r
//         }
//         var g = Pi().noUnsafeEval,
//           v = {
//             csp: g,
//             expensiveChecks: !1,
//             literals: z(o),
//             isIdentifierStart: C(e) && e,
//             isIdentifierContinue: C(t) && t
//           },
//           b = {
//             csp: g,
//             expensiveChecks: !0,
//             literals: z(o),
//             isIdentifierStart: C(e) && e,
//             isIdentifierContinue: C(t) && t
//           },
//           $ = !1;
//         return a.$$runningExpensiveChecks = function () {
//           return $
//         }, a
//       }]
//     }

//     function pn() {
//       this.$get = ["$rootScope", "$exceptionHandler", function (e, t) {
//         return gn(function (t) {
//           e.$evalAsync(t)
//         }, t)
//       }]
//     }

//     function mn() {
//       this.$get = ["$browser", "$exceptionHandler", function (e, t) {
//         return gn(function (t) {
//           e.defer(t)
//         }, t)
//       }]
//     }

//     function gn(e, n) {
//       function r() {
//         this.$$state = {
//           status: 0
//         }
//       }

//       function o(e, t) {
//         return function (n) {
//           t.call(e, n)
//         }
//       }

//       function s(e) {
//         var t, i, r;
//         r = e.pending, e.processScheduled = !1, e.pending = void 0;
//         for (var o = 0, s = r.length; o < s; ++o) {
//           i = r[o][0], t = r[o][e.status];
//           try {
//             C(t) ? i.resolve(t(e.value)) : 1 === e.status ? i.resolve(e.value) : i.reject(e.value)
//           } catch (e) {
//             i.reject(e), n(e)
//           }
//         }
//       }

//       function a(t) {
//         !t.processScheduled && t.pending && (t.processScheduled = !0, e(function () {
//           s(t)
//         }))
//       }

//       function l() {
//         this.promise = new r
//       }
//       var c = t("$q", TypeError),
//         d = function () {
//           var e = new l;
//           return e.resolve = o(e, e.resolve), e.reject = o(e, e.reject), e.notify = o(e, e.notify), e
//         };
//       u(r.prototype, {
//         then: function (e, t, n) {
//           if (v(e) && v(t) && v(n)) return this;
//           var i = new l;
//           return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([i, e, t, n]), this.$$state.status > 0 && a(this.$$state), i.promise
//         },
//         catch: function (e) {
//           return this.then(null, e)
//         },
//         finally: function (e, t) {
//           return this.then(function (t) {
//             return h(t, !0, e)
//           }, function (t) {
//             return h(t, !1, e)
//           }, t)
//         }
//       }), u(l.prototype, {
//         resolve: function (e) {
//           this.promise.$$state.status || (e === this.promise ? this.$$reject(c("qcycle", "Expected promise to be resolved with value other than itself '{0}'", e)) : this.$$resolve(e))
//         },
//         $$resolve: function (e) {
//           function t(e) {
//             s || (s = !0, r.$$reject(e))
//           }
//           var i, r = this,
//             s = !1;
//           try {
//             (b(e) || C(e)) && (i = e && e.then), C(i) ? (this.promise.$$state.status = -1, i.call(e, function (e) {
//               s || (s = !0, r.$$resolve(e))
//             }, t, o(this, this.notify))) : (this.promise.$$state.value = e, this.promise.$$state.status = 1, a(this.promise.$$state))
//           } catch (e) {
//             t(e), n(e)
//           }
//         },
//         reject: function (e) {
//           this.promise.$$state.status || this.$$reject(e)
//         },
//         $$reject: function (e) {
//           this.promise.$$state.value = e, this.promise.$$state.status = 2, a(this.promise.$$state)
//         },
//         notify: function (t) {
//           var i = this.promise.$$state.pending;
//           this.promise.$$state.status <= 0 && i && i.length && e(function () {
//             for (var e, r, o = 0, s = i.length; o < s; o++) {
//               r = i[o][0], e = i[o][3];
//               try {
//                 r.notify(C(e) ? e(t) : t)
//               } catch (e) {
//                 n(e)
//               }
//             }
//           })
//         }
//       });
//       var f = function (e, t) {
//         var n = new l;
//         return t ? n.resolve(e) : n.reject(e), n.promise
//       },
//         h = function (e, t, n) {
//           var i = null;
//           try {
//             C(n) && (i = n())
//           } catch (e) {
//             return f(e, !1)
//           }
//           return D(i) ? i.then(function () {
//             return f(e, t)
//           }, function (e) {
//             return f(e, !1)
//           }) : f(e, t)
//         },
//         p = function (e, t, n, i) {
//           var r = new l;
//           return r.resolve(e), r.promise.then(t, n, i)
//         },
//         m = p,
//         g = function (e) {
//           if (!C(e)) throw c("norslvr", "Expected resolverFn, got '{0}'", e);
//           var t = new l;
//           return e(function (e) {
//             t.resolve(e)
//           }, function (e) {
//             t.reject(e)
//           }), t.promise
//         };
//       return g.prototype = r.prototype, g.defer = d, g.reject = function (e) {
//         var t = new l;
//         return t.reject(e), t.promise
//       }, g.when = p, g.resolve = m, g.all = function (e) {
//         var t = new l,
//           n = 0,
//           r = _i(e) ? [] : {};
//         return i(e, function (e, i) {
//           n++ , p(e).then(function (e) {
//             r.hasOwnProperty(i) || (r[i] = e, --n || t.resolve(r))
//           }, function (e) {
//             r.hasOwnProperty(i) || t.reject(e)
//           })
//         }), 0 === n && t.resolve(r), t.promise
//       }, g.race = function (e) {
//         var t = d();
//         return i(e, function (e) {
//           p(e).then(t.resolve, t.reject)
//         }), t.promise
//       }, g
//     }

//     function vn() {
//       this.$get = ["$window", "$timeout", function (e, t) {
//         var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
//           i = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
//           r = !!n,
//           o = r ? function (e) {
//             var t = n(e);
//             return function () {
//               i(t)
//             }
//           } : function (e) {
//             var n = t(e, 16.66, !1);
//             return function () {
//               t.cancel(n)
//             }
//           };
//         return o.supported = r, o
//       }]
//     }

//     function yn() {
//       function e(e) {
//         function t() {
//           this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = s(), this.$$ChildScope = null
//         }
//         return t.prototype = e, t
//       }
//       var r = 10,
//         o = t("$rootScope"),
//         a = null,
//         l = null;
//       this.digestTtl = function (e) {
//         return arguments.length && (r = e), r
//       }, this.$get = ["$exceptionHandler", "$parse", "$browser", function (t, u, c) {
//         function d(e) {
//           e.currentScope.$$destroyed = !0
//         }

//         function f(e) {
//           9 === yi && (e.$$childHead && f(e.$$childHead), e.$$nextSibling && f(e.$$nextSibling)), e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null
//         }

//         function p() {
//           this.$id = s(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
//         }

//         function m(e) {
//           if (k.$$phase) throw o("inprog", "{0} already in progress", k.$$phase);
//           k.$$phase = e
//         }

//         function g() {
//           k.$$phase = null
//         }

//         function y(e, t) {
//           do {
//             e.$$watchersCount += t
//           } while (e = e.$parent)
//         }

//         function $(e, t, n) {
//           do {
//             e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]
//           } while (e = e.$parent)
//         }

//         function w() { }

//         function x() {
//           for (; j.length;) try {
//             j.shift()()
//           } catch (e) {
//             t(e)
//           }
//           l = null
//         }

//         function S() {
//           null === l && (l = c.defer(function () {
//             k.$apply(x)
//           }))
//         }
//         p.prototype = {
//           constructor: p,
//           $new: function (t, n) {
//             var i;
//             return n = n || this, t ? (i = new p).$root = this.$root : (this.$$ChildScope || (this.$$ChildScope = e(this)), i = new this.$$ChildScope), i.$parent = n, i.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = i, n.$$childTail = i) : n.$$childHead = n.$$childTail = i, (t || n != this) && i.$on("$destroy", d), i
//           },
//           $watch: function (e, t, n, i) {
//             var r = u(e);
//             if (r.$$watchDelegate) return r.$$watchDelegate(this, t, n, r, e);
//             var o = this,
//               s = o.$$watchers,
//               l = {
//                 fn: t,
//                 last: w,
//                 get: r,
//                 exp: i || e,
//                 eq: !!n
//               };
//             return a = null, C(t) || (l.fn = h), s || (s = o.$$watchers = []), s.unshift(l), y(this, 1),
//               function () {
//                 R(s, l) >= 0 && y(o, -1), a = null
//               }
//           },
//           $watchGroup: function (e, t) {
//             function n() {
//               l = !1, u ? (u = !1, t(o, o, a)) : t(o, r, a)
//             }
//             var r = new Array(e.length),
//               o = new Array(e.length),
//               s = [],
//               a = this,
//               l = !1,
//               u = !0;
//             if (!e.length) {
//               var c = !0;
//               return a.$evalAsync(function () {
//                 c && t(o, o, a)
//               }),
//                 function () {
//                   c = !1
//                 }
//             }
//             return 1 === e.length ? this.$watch(e[0], function (e, n, i) {
//               o[0] = e, r[0] = n, t(o, e === n ? o : r, i)
//             }) : (i(e, function (e, t) {
//               var i = a.$watch(e, function (e, i) {
//                 o[t] = e, r[t] = i, l || (l = !0, a.$evalAsync(n))
//               });
//               s.push(i)
//             }), function () {
//               for (; s.length;) s.shift()()
//             })
//           },
//           $watchCollection: function (e, t) {
//             function i(e) {
//               var t, i, s, a;
//               if (!v(r = e)) {
//                 if (b(r))
//                   if (n(r)) {
//                     o !== f && (m = (o = f).length = 0, c++), t = r.length, m !== t && (c++ , o.length = m = t);
//                     for (var l = 0; l < t; l++) a = o[l], s = r[l], a !== a && s !== s || a === s || (c++ , o[l] = s)
//                   } else {
//                     o !== h && (o = h = {}, m = 0, c++), t = 0;
//                     for (i in r) mi.call(r, i) && (t++ , s = r[i], a = o[i], i in o ? a !== a && s !== s || a === s || (c++ , o[i] = s) : (m++ , o[i] = s, c++));
//                     if (m > t) {
//                       c++;
//                       for (i in o) mi.call(r, i) || (m-- , delete o[i])
//                     }
//                   }
//                 else o !== r && (o = r, c++);
//                 return c
//               }
//             }
//             i.$stateful = !0;
//             var r, o, s, a = this,
//               l = t.length > 1,
//               c = 0,
//               d = u(e, i),
//               f = [],
//               h = {},
//               p = !0,
//               m = 0;
//             return this.$watch(d, function () {
//               if (p ? (p = !1, t(r, r, a)) : t(r, s, a), l)
//                 if (b(r))
//                   if (n(r)) {
//                     s = new Array(r.length);
//                     for (var e = 0; e < r.length; e++) s[e] = r[e]
//                   } else {
//                     s = {};
//                     for (var i in r) mi.call(r, i) && (s[i] = r[i])
//                   }
//                 else s = r
//             })
//           },
//           $digest: function () {
//             var e, n, i, s, u, d, f, h, p, v, y, b = r,
//               $ = this,
//               S = [];
//             m("$digest"), c.$$checkUrlChange(), this === k && null !== l && (c.defer.cancel(l), x()), a = null;
//             do {
//               f = !1, p = $;
//               for (var j = 0; j < T.length; j++) {
//                 try {
//                   (y = T[j]).scope.$eval(y.expression, y.locals)
//                 } catch (e) {
//                   t(e)
//                 }
//                 a = null
//               }
//               T.length = 0;
//               e: do {
//                 if (u = p.$$watchers)
//                   for (d = u.length; d--;) try {
//                     if (e = u[d])
//                       if (s = e.get, (n = s(p)) === (i = e.last) || (e.eq ? L(n, i) : "number" == typeof n && "number" == typeof i && isNaN(n) && isNaN(i))) {
//                         if (e === a) {
//                           f = !1;
//                           break e
//                         }
//                       } else f = !0, a = e, e.last = e.eq ? z(n, null) : n, (0, e.fn)(n, i === w ? n : i, p), b < 5 && (S[v = 4 - b] || (S[v] = []), S[v].push({
//                         msg: C(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
//                         newVal: n,
//                         oldVal: i
//                       }))
//                   } catch (e) {
//                     t(e)
//                   }
//                 if (!(h = p.$$watchersCount && p.$$childHead || p !== $ && p.$$nextSibling))
//                   for (; p !== $ && !(h = p.$$nextSibling);) p = p.$parent
//               } while (p = h);
//               if ((f || T.length) && !b--) throw g(), o("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", r, S)
//             } while (f || T.length);
//             for (g(); M < E.length;) try {
//               E[M++]()
//             } catch (e) {
//               t(e)
//             }
//             E.length = M = 0
//           },
//           $destroy: function () {
//             if (!this.$$destroyed) {
//               var e = this.$parent;
//               this.$broadcast("$destroy"), this.$$destroyed = !0, this === k && c.$$applicationDestroyed(), y(this, -this.$$watchersCount);
//               for (var t in this.$$listenerCount) $(this, this.$$listenerCount[t], t);
//               e && e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e && e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = h, this.$on = this.$watch = this.$watchGroup = function () {
//                 return h
//               }, this.$$listeners = {}, this.$$nextSibling = null, f(this)
//             }
//           },
//           $eval: function (e, t) {
//             return u(e)(this, t)
//           },
//           $evalAsync: function (e, t) {
//             k.$$phase || T.length || c.defer(function () {
//               T.length && k.$digest()
//             }), T.push({
//               scope: this,
//               expression: u(e),
//               locals: t
//             })
//           },
//           $$postDigest: function (e) {
//             E.push(e)
//           },
//           $apply: function (e) {
//             try {
//               m("$apply");
//               try {
//                 return this.$eval(e)
//               } finally {
//                 g()
//               }
//             } catch (e) {
//               t(e)
//             } finally {
//               try {
//                 k.$digest()
//               } catch (e) {
//                 throw t(e), e
//               }
//             }
//           },
//           $applyAsync: function (e) {
//             var t = this;
//             e && j.push(function () {
//               t.$eval(e)
//             }), e = u(e), S()
//           },
//           $on: function (e, t) {
//             var n = this.$$listeners[e];
//             n || (this.$$listeners[e] = n = []), n.push(t);
//             var i = this;
//             do {
//               i.$$listenerCount[e] || (i.$$listenerCount[e] = 0), i.$$listenerCount[e]++
//             } while (i = i.$parent);
//             var r = this;
//             return function () {
//               var i = n.indexOf(t); - 1 !== i && (n[i] = null, $(r, 1, e))
//             }
//           },
//           $emit: function (e, n) {
//             var i, r, o, s = [],
//               a = this,
//               l = !1,
//               u = {
//                 name: e,
//                 targetScope: a,
//                 stopPropagation: function () {
//                   l = !0
//                 },
//                 preventDefault: function () {
//                   u.defaultPrevented = !0
//                 },
//                 defaultPrevented: !1
//               },
//               c = H([u], arguments, 1);
//             do {
//               for (i = a.$$listeners[e] || s, u.currentScope = a, r = 0, o = i.length; r < o; r++)
//                 if (i[r]) try {
//                   i[r].apply(null, c)
//                 } catch (e) {
//                   t(e)
//                 } else i.splice(r, 1), r-- , o--;
//               if (l) return u.currentScope = null, u;
//               a = a.$parent
//             } while (a);
//             return u.currentScope = null, u
//           },
//           $broadcast: function (e, n) {
//             var i = this,
//               r = i,
//               o = i,
//               s = {
//                 name: e,
//                 targetScope: i,
//                 preventDefault: function () {
//                   s.defaultPrevented = !0
//                 },
//                 defaultPrevented: !1
//               };
//             if (!i.$$listenerCount[e]) return s;
//             for (var a, l, u, c = H([s], arguments, 1); r = o;) {
//               for (s.currentScope = r, l = 0, u = (a = r.$$listeners[e] || []).length; l < u; l++)
//                 if (a[l]) try {
//                   a[l].apply(null, c)
//                 } catch (e) {
//                   t(e)
//                 } else a.splice(l, 1), l-- , u--;
//               if (!(o = r.$$listenerCount[e] && r.$$childHead || r !== i && r.$$nextSibling))
//                 for (; r !== i && !(o = r.$$nextSibling);) r = r.$parent
//             }
//             return s.currentScope = null, s
//           }
//         };
//         var k = new p,
//           T = k.$$asyncQueue = [],
//           E = k.$$postDigestQueue = [],
//           j = k.$$applyAsyncQueue = [],
//           M = 0;
//         return k
//       }]
//     }

//     function bn() {
//       var e = /^\s*(https?|ftp|mailto|tel|file):/,
//         t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
//       this.aHrefSanitizationWhitelist = function (t) {
//         return y(t) ? (e = t, this) : e
//       }, this.imgSrcSanitizationWhitelist = function (e) {
//         return y(e) ? (t = e, this) : t
//       }, this.$get = function () {
//         return function (n, i) {
//           var r, o = i ? t : e;
//           return "" === (r = jn(n).href) || r.match(o) ? n : "unsafe:" + r
//         }
//       }
//     }

//     function $n(e) {
//       if ("self" === e) return e;
//       if (w(e)) {
//         if (e.indexOf("***") > -1) throw eo("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
//         return e = Oi(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
//       }
//       if (k(e)) return new RegExp("^" + e.source + "$");
//       throw eo("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
//     }

//     function wn(e) {
//       var t = [];
//       return y(e) && i(e, function (e) {
//         t.push($n(e))
//       }), t
//     }

//     function xn() {
//       this.SCE_CONTEXTS = to;
//       var e = ["self"],
//         t = [];
//       this.resourceUrlWhitelist = function (t) {
//         return arguments.length && (e = wn(t)), e
//       }, this.resourceUrlBlacklist = function (e) {
//         return arguments.length && (t = wn(e)), t
//       }, this.$get = ["$injector", function (n) {
//         function i(e, t) {
//           return "self" === e ? Mn(t) : !!e.exec(t.href)
//         }

//         function r(n) {
//           var r, o, s = jn(n.toString()),
//             a = !1;
//           for (r = 0, o = e.length; r < o; r++)
//             if (i(e[r], s)) {
//               a = !0;
//               break
//             }
//           if (a)
//             for (r = 0, o = t.length; r < o; r++)
//               if (i(t[r], s)) {
//                 a = !1;
//                 break
//               }
//           return a
//         }

//         function o(e) {
//           var t = function (e) {
//             this.$$unwrapTrustedValue = function () {
//               return e
//             }
//           };
//           return e && (t.prototype = new e), t.prototype.valueOf = function () {
//             return this.$$unwrapTrustedValue()
//           }, t.prototype.toString = function () {
//             return this.$$unwrapTrustedValue().toString()
//           }, t
//         }
//         var s = function (e) {
//           throw eo("unsafe", "Attempting to use an unsafe value in a safe context.")
//         };
//         n.has("$sanitize") && (s = n.get("$sanitize"));
//         var a = o(),
//           l = {};
//         return l[to.HTML] = o(a), l[to.CSS] = o(a), l[to.URL] = o(a), l[to.JS] = o(a), l[to.RESOURCE_URL] = o(l[to.URL]), {
//           trustAs: function (e, t) {
//             var n = l.hasOwnProperty(e) ? l[e] : null;
//             if (!n) throw eo("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
//             if (null === t || v(t) || "" === t) return t;
//             if ("string" != typeof t) throw eo("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
//             return new n(t)
//           },
//           getTrusted: function (e, t) {
//             if (null === t || v(t) || "" === t) return t;
//             var n = l.hasOwnProperty(e) ? l[e] : null;
//             if (n && t instanceof n) return t.$$unwrapTrustedValue();
//             if (e === to.RESOURCE_URL) {
//               if (r(t)) return t;
//               throw eo("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
//             }
//             if (e === to.HTML) return s(t);
//             throw eo("unsafe", "Attempting to use an unsafe value in a safe context.")
//           },
//           valueOf: function (e) {
//             return e instanceof a ? e.$$unwrapTrustedValue() : e
//           }
//         }
//       }]
//     }

//     function Sn() {
//       var e = !0;
//       this.enabled = function (t) {
//         return arguments.length && (e = !!t), e
//       }, this.$get = ["$parse", "$sceDelegate", function (t, n) {
//         if (e && yi < 8) throw eo("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
//         var r = me(to);
//         r.isEnabled = function () {
//           return e
//         }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, e || (r.trustAs = r.getTrusted = function (e, t) {
//           return t
//         }, r.valueOf = p), r.parseAs = function (e, n) {
//           var i = t(n);
//           return i.literal && i.constant ? i : t(n, function (t) {
//             return r.getTrusted(e, t)
//           })
//         };
//         var o = r.parseAs,
//           s = r.getTrusted,
//           a = r.trustAs;
//         return i(to, function (e, t) {
//           var n = gi(t);
//           r[be("parse_as_" + n)] = function (t) {
//             return o(e, t)
//           }, r[be("get_trusted_" + n)] = function (t) {
//             return s(e, t)
//           }, r[be("trust_as_" + n)] = function (t) {
//             return a(e, t)
//           }
//         }), r
//       }]
//     }

//     function Cn() {
//       this.$get = ["$window", "$document", function (e, t) {
//         var n, i, r = {},
//           o = !(e.chrome && e.chrome.app && e.chrome.app.runtime) && e.history && e.history.pushState,
//           s = d((/android (\d+)/.exec(gi((e.navigator || {}).userAgent)) || [])[1]),
//           a = /Boxee/i.test((e.navigator || {}).userAgent),
//           l = t[0] || {},
//           u = /^(Moz|webkit|ms)(?=[A-Z])/,
//           c = l.body && l.body.style,
//           f = !1,
//           h = !1;
//         if (c) {
//           for (var p in c)
//             if (i = u.exec(p)) {
//               n = (n = i[0])[0].toUpperCase() + n.substr(1);
//               break
//             }
//           n || (n = "WebkitOpacity" in c && "webkit"), f = !!("transition" in c || n + "Transition" in c), h = !!("animation" in c || n + "Animation" in c), !s || f && h || (f = w(c.webkitTransition), h = w(c.webkitAnimation))
//         }
//         return {
//           history: !(!o || s < 4 || a),
//           hasEvent: function (e) {
//             if ("input" === e && yi <= 11) return !1;
//             if (v(r[e])) {
//               var t = l.createElement("div");
//               r[e] = "on" + e in t
//             }
//             return r[e]
//           },
//           csp: Pi(),
//           vendorPrefix: n,
//           transitions: f,
//           animations: h,
//           android: s
//         }
//       }]
//     }

//     function kn() {
//       var e;
//       this.httpOptions = function (t) {
//         return t ? (e = t, this) : e
//       }, this.$get = ["$templateCache", "$http", "$q", "$sce", function (t, n, i, r) {
//         function o(s, a) {
//           o.totalPendingRequests++ , w(s) && !v(t.get(s)) || (s = r.getTrustedResourceUrl(s));
//           var l = n.defaults && n.defaults.transformResponse;
//           return _i(l) ? l = l.filter(function (e) {
//             return e !== $t
//           }) : l === $t && (l = null), n.get(s, u({
//             cache: t,
//             transformResponse: l
//           }, e)).finally(function () {
//             o.totalPendingRequests--
//           }).then(function (e) {
//             return t.put(s, e.data), e.data
//           }, function (e) {
//             if (!a) throw no("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", s, e.status, e.statusText);
//             return i.reject(e)
//           })
//         }
//         return o.totalPendingRequests = 0, o
//       }]
//     }

//     function Tn() {
//       this.$get = ["$rootScope", "$browser", "$location", function (e, t, n) {
//         var r = {};
//         return r.findBindings = function (e, t, n) {
//           var r = [];
//           return i(e.getElementsByClassName("ng-binding"), function (e) {
//             var o = ji.element(e).data("$binding");
//             o && i(o, function (i) {
//               n ? new RegExp("(^|\\s)" + Oi(t) + "(\\s|\\||$)").test(i) && r.push(e) : -1 != i.indexOf(t) && r.push(e)
//             })
//           }), r
//         }, r.findModels = function (e, t, n) {
//           for (var i = ["ng-", "data-ng-", "ng\\:"], r = 0; r < i.length; ++r) {
//             var o = n ? "=" : "*=",
//               s = "[" + i[r] + "model" + o + '"' + t + '"]',
//               a = e.querySelectorAll(s);
//             if (a.length) return a
//           }
//         }, r.getLocation = function () {
//           return n.url()
//         }, r.setLocation = function (t) {
//           t !== n.url() && (n.url(t), e.$digest())
//         }, r.whenStable = function (e) {
//           t.notifyWhenNoOutstandingRequests(e)
//         }, r
//       }]
//     }

//     function En() {
//       this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (e, t, n, i, r) {
//         function o(o, a, l) {
//           C(o) || (l = a, a = o, o = h);
//           var u, c = V(arguments, 3),
//             d = y(l) && !l,
//             f = (d ? i : n).defer(),
//             p = f.promise;
//           return u = t.defer(function () {
//             try {
//               f.resolve(o.apply(null, c))
//             } catch (e) {
//               f.reject(e), r(e)
//             } finally {
//               delete s[p.$$timeoutId]
//             }
//             d || e.$apply()
//           }, a), p.$$timeoutId = u, s[u] = f, p
//         }
//         var s = {};
//         return o.cancel = function (e) {
//           return !!(e && e.$$timeoutId in s) && (s[e.$$timeoutId].reject("canceled"), delete s[e.$$timeoutId], t.defer.cancel(e.$$timeoutId))
//         }, o
//       }]
//     }

//     function jn(e) {
//       var t = e;
//       return yi && (io.setAttribute("href", t), t = io.href), io.setAttribute("href", t), {
//         href: io.href,
//         protocol: io.protocol ? io.protocol.replace(/:$/, "") : "",
//         host: io.host,
//         search: io.search ? io.search.replace(/^\?/, "") : "",
//         hash: io.hash ? io.hash.replace(/^#/, "") : "",
//         hostname: io.hostname,
//         port: io.port,
//         pathname: "/" === io.pathname.charAt(0) ? io.pathname : "/" + io.pathname
//       }
//     }

//     function Mn(e) {
//       var t = w(e) ? jn(e) : e;
//       return t.protocol === ro.protocol && t.host === ro.host
//     }

//     function _n() {
//       this.$get = m(e)
//     }

//     function An(e) {
//       function t(e) {
//         try {
//           return decodeURIComponent(e)
//         } catch (t) {
//           return e
//         }
//       }
//       var n = e[0] || {},
//         i = {},
//         r = "";
//       return function () {
//         var e, o, s, a, l, u = n.cookie || "";
//         if (u !== r)
//           for (e = (r = u).split("; "), i = {}, s = 0; s < e.length; s++)(a = (o = e[s]).indexOf("=")) > 0 && (l = t(o.substring(0, a)), v(i[l]) && (i[l] = t(o.substring(a + 1))));
//         return i
//       }
//     }

//     function Dn() {
//       this.$get = An
//     }

//     function On(e) {
//       function t(r, o) {
//         if (b(r)) {
//           var s = {};
//           return i(r, function (e, n) {
//             s[n] = t(n, e)
//           }), s
//         }
//         return e.factory(r + n, o)
//       }
//       var n = "Filter";
//       this.register = t, this.$get = ["$injector", function (e) {
//         return function (t) {
//           return e.get(t + n)
//         }
//       }], t("currency", Rn), t("date", Xn), t("filter", Pn), t("json", Kn), t("limitTo", Jn), t("lowercase", fo), t("number", zn), t("orderBy", ei), t("uppercase", ho)
//     }

//     function Pn() {
//       return function (e, i, r, o) {
//         if (!n(e)) {
//           if (null == e) return e;
//           throw t("filter")("notarray", "Expected array but received: {0}", e)
//         }
//         o = o || "$";
//         var s, a;
//         switch (In(i)) {
//           case "function":
//             s = i;
//             break;
//           case "boolean":
//           case "null":
//           case "number":
//           case "string":
//             a = !0;
//           case "object":
//             s = Nn(i, r, o, a);
//             break;
//           default:
//             return e
//         }
//         return Array.prototype.filter.call(e, s)
//       }
//     }

//     function Nn(e, t, n, i) {
//       var r = b(e) && n in e;
//       return !0 === t ? t = L : C(t) || (t = function (e, t) {
//         return !v(e) && (null === e || null === t ? e === t : !(b(t) || b(e) && !g(e)) && (e = gi("" + e), t = gi("" + t), -1 !== e.indexOf(t)))
//       }),
//         function (o) {
//           return r && !b(o) ? Fn(o, e[n], t, n, !1) : Fn(o, e, t, n, i)
//         }
//     }

//     function Fn(e, t, n, i, r, o) {
//       var s = In(e),
//         a = In(t);
//       if ("string" === a && "!" === t.charAt(0)) return !Fn(e, t.substring(1), n, i, r);
//       if (_i(e)) return e.some(function (e) {
//         return Fn(e, t, n, i, r)
//       });
//       switch (s) {
//         case "object":
//           var l;
//           if (r) {
//             for (l in e)
//               if ("$" !== l.charAt(0) && Fn(e[l], t, n, i, !0)) return !0;
//             return !o && Fn(e, t, n, i, !1)
//           }
//           if ("object" === a) {
//             for (l in t) {
//               var u = t[l];
//               if (!C(u) && !v(u)) {
//                 var c = l === i;
//                 if (!Fn(c ? e : e[l], u, n, i, c, c)) return !1
//               }
//             }
//             return !0
//           }
//           return n(e, t);
//         case "function":
//           return !1;
//         default:
//           return n(e, t)
//       }
//     }

//     function In(e) {
//       return null === e ? "null" : typeof e
//     }

//     function Rn(e) {
//       var t = e.NUMBER_FORMATS;
//       return function (e, n, i) {
//         return v(n) && (n = t.CURRENCY_SYM), v(i) && (i = t.PATTERNS[1].maxFrac), null == e ? e : Vn(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, i).replace(/\u00A4/g, n)
//       }
//     }

//     function zn(e) {
//       var t = e.NUMBER_FORMATS;
//       return function (e, n) {
//         return null == e ? e : Vn(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
//       }
//     }

//     function Ln(e) {
//       var t, n, i, r, o, s = 0;
//       for ((n = e.indexOf(so)) > -1 && (e = e.replace(so, "")), (i = e.search(/e/i)) > 0 ? (n < 0 && (n = i), n += +e.slice(i + 1), e = e.substring(0, i)) : n < 0 && (n = e.length), i = 0; e.charAt(i) == ao; i++);
//       if (i == (o = e.length)) t = [0], n = 1;
//       else {
//         for (o--; e.charAt(o) == ao;) o--;
//         for (n -= i, t = [], r = 0; i <= o; i++ , r++) t[r] = +e.charAt(i)
//       }
//       return n > oo && (t = t.splice(0, oo - 1), s = n - 1, n = 1), {
//         d: t,
//         e: s,
//         i: n
//       }
//     }

//     function Hn(e, t, n, i) {
//       var r = e.d,
//         o = r.length - e.i,
//         s = (t = v(t) ? Math.min(Math.max(n, o), i) : +t) + e.i,
//         a = r[s];
//       if (s > 0) {
//         r.splice(Math.max(e.i, s));
//         for (var l = s; l < r.length; l++) r[l] = 0
//       } else {
//         o = Math.max(0, o), e.i = 1, r.length = Math.max(1, s = t + 1), r[0] = 0;
//         for (var u = 1; u < s; u++) r[u] = 0
//       }
//       if (a >= 5)
//         if (s - 1 < 0) {
//           for (var c = 0; c > s; c--) r.unshift(0), e.i++;
//           r.unshift(1), e.i++
//         } else r[s - 1]++;
//       for (; o < Math.max(0, t); o++) r.push(0);
//       var d = r.reduceRight(function (e, t, n, i) {
//         return t += e, i[n] = t % 10, Math.floor(t / 10)
//       }, 0);
//       d && (r.unshift(d), e.i++)
//     }

//     function Vn(e, t, n, i, r) {
//       if (!w(e) && !x(e) || isNaN(e)) return "";
//       var o, s = !isFinite(e),
//         a = !1,
//         l = Math.abs(e) + "",
//         u = "";
//       if (s) u = "∞";
//       else {
//         Hn(o = Ln(l), r, t.minFrac, t.maxFrac);
//         var c = o.d,
//           d = o.i,
//           f = o.e,
//           h = [];
//         for (a = c.reduce(function (e, t) {
//           return e && !t
//         }, !0); d < 0;) c.unshift(0), d++;
//         d > 0 ? h = c.splice(d, c.length) : (h = c, c = [0]);
//         var p = [];
//         for (c.length >= t.lgSize && p.unshift(c.splice(-t.lgSize, c.length).join("")); c.length > t.gSize;) p.unshift(c.splice(-t.gSize, c.length).join(""));
//         c.length && p.unshift(c.join("")), u = p.join(n), h.length && (u += i + h.join("")), f && (u += "e+" + f)
//       }
//       return e < 0 && !a ? t.negPre + u + t.negSuf : t.posPre + u + t.posSuf
//     }

//     function Un(e, t, n, i) {
//       var r = "";
//       for ((e < 0 || i && e <= 0) && (i ? e = 1 - e : (e = -e, r = "-")), e = "" + e; e.length < t;) e = ao + e;
//       return n && (e = e.substr(e.length - t)), r + e
//     }

//     function Bn(e, t, n, i, r) {
//       return n = n || 0,
//         function (o) {
//           var s = o["get" + e]();
//           return (n > 0 || s > -n) && (s += n), 0 === s && -12 == n && (s = 12), Un(s, t, i, r)
//         }
//     }

//     function qn(e, t, n) {
//       return function (i, r) {
//         var o = i["get" + e]();
//         return r[vi((n ? "STANDALONE" : "") + (t ? "SHORT" : "") + e)][o]
//       }
//     }

//     function Wn(e) {
//       var t = new Date(e, 0, 1).getDay();
//       return new Date(e, 0, (t <= 4 ? 5 : 12) - t)
//     }

//     function Yn(e) {
//       return new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay()))
//     }

//     function Gn(e) {
//       return function (t) {
//         var n = Wn(t.getFullYear()),
//           i = +Yn(t) - +n;
//         return Un(1 + Math.round(i / 6048e5), e)
//       }
//     }

//     function Zn(e, t) {
//       return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
//     }

//     function Xn(e) {
//       function t(e) {
//         var t;
//         if (t = e.match(n)) {
//           var i = new Date(0),
//             r = 0,
//             o = 0,
//             s = t[8] ? i.setUTCFullYear : i.setFullYear,
//             a = t[8] ? i.setUTCHours : i.setHours;
//           t[9] && (r = d(t[9] + t[10]), o = d(t[9] + t[11])), s.call(i, d(t[1]), d(t[2]) - 1, d(t[3]));
//           var l = d(t[4] || 0) - r,
//             u = d(t[5] || 0) - o,
//             c = d(t[6] || 0),
//             f = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
//           return a.call(i, l, u, c, f), i
//         }
//         return e
//       }
//       var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
//       return function (n, r, o) {
//         var s, a, l = "",
//           u = [];
//         if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, w(n) && (n = co.test(n) ? d(n) : t(n)), x(n) && (n = new Date(n)), !S(n) || !isFinite(n.getTime())) return n;
//         for (; r;)(a = uo.exec(r)) ? r = (u = H(u, a, 1)).pop() : (u.push(r), r = null);
//         var c = n.getTimezoneOffset();
//         return o && (c = Y(o, c), n = Z(n, o, !0)), i(u, function (t) {
//           s = lo[t], l += s ? s(n, e.DATETIME_FORMATS, c) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
//         }), l
//       }
//     }

//     function Kn() {
//       return function (e, t) {
//         return v(t) && (t = 2), q(e, t)
//       }
//     }

//     function Jn() {
//       return function (e, t, i) {
//         return t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : d(t), isNaN(t) ? e : (x(e) && (e = e.toString()), n(e) ? (i = !i || isNaN(i) ? 0 : d(i), i = i < 0 ? Math.max(0, e.length + i) : i, t >= 0 ? Qn(e, i, i + t) : 0 === i ? Qn(e, t, e.length) : Qn(e, Math.max(0, i + t), i)) : e)
//       }
//     }

//     function Qn(e, t, n) {
//       return w(e) ? e.slice(t, n) : xi.call(e, t, n)
//     }

//     function ei(e) {
//       function i(t) {
//         return t.map(function (t) {
//           var n = 1,
//             i = p;
//           if (C(t)) i = t;
//           else if (w(t) && ("+" != t.charAt(0) && "-" != t.charAt(0) || (n = "-" == t.charAt(0) ? -1 : 1, t = t.substring(1)), "" !== t && (i = e(t)).constant)) {
//             var r = i();
//             i = function (e) {
//               return e[r]
//             }
//           }
//           return {
//             get: i,
//             descending: n
//           }
//         })
//       }

//       function r(e) {
//         switch (typeof e) {
//           case "number":
//           case "boolean":
//           case "string":
//             return !0;
//           default:
//             return !1
//         }
//       }

//       function o(e) {
//         return C(e.valueOf) && (e = e.valueOf(), r(e)) ? e : (g(e) && (e = e.toString(), r(e)), e)
//       }

//       function s(e, t) {
//         var n = typeof e;
//         return null === e ? (n = "string", e = "null") : "object" === n && (e = o(e)), {
//           value: e,
//           type: n,
//           index: t
//         }
//       }

//       function a(e, t) {
//         var n = 0,
//           i = e.type,
//           r = t.type;
//         if (i === r) {
//           var o = e.value,
//             s = t.value;
//           "string" === i ? (o = o.toLowerCase(), s = s.toLowerCase()) : "object" === i && (b(o) && (o = e.index), b(s) && (s = t.index)), o !== s && (n = o < s ? -1 : 1)
//         } else n = i < r ? -1 : 1;
//         return n
//       }
//       return function (e, r, o, l) {
//         if (null == e) return e;
//         if (!n(e)) throw t("orderBy")("notarray", "Expected array but received: {0}", e);
//         _i(r) || (r = [r]), 0 === r.length && (r = ["+"]);
//         var u = i(r),
//           c = o ? -1 : 1,
//           d = C(l) ? l : a,
//           f = Array.prototype.map.call(e, function (e, t) {
//             return {
//               value: e,
//               tieBreaker: {
//                 value: t,
//                 type: "number",
//                 index: t
//               },
//               predicateValues: u.map(function (n) {
//                 return s(n.get(e), t)
//               })
//             }
//           });
//         return f.sort(function (e, t) {
//           for (var n = 0, i = u.length; n < i; n++) {
//             var r = d(e.predicateValues[n], t.predicateValues[n]);
//             if (r) return r * u[n].descending * c
//           }
//           return d(e.tieBreaker, t.tieBreaker) * c
//         }), e = f.map(function (e) {
//           return e.value
//         })
//       }
//     }

//     function ti(e) {
//       return C(e) && (e = {
//         link: e
//       }), e.restrict = e.restrict || "AC", m(e)
//     }

//     function ni(e, t, n, r, o) {
//       var s = this,
//         a = [];
//       s.$error = {}, s.$$success = {}, s.$pending = void 0, s.$name = o(t.name || t.ngForm || "")(n), s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, s.$submitted = !1, s.$$parentForm = go, s.$rollbackViewValue = function () {
//         i(a, function (e) {
//           e.$rollbackViewValue()
//         })
//       }, s.$commitViewValue = function () {
//         i(a, function (e) {
//           e.$commitViewValue()
//         })
//       }, s.$addControl = function (e) {
//         ce(e.$name, "input"), a.push(e), e.$name && (s[e.$name] = e), e.$$parentForm = s
//       }, s.$$renameControl = function (e, t) {
//         var n = e.$name;
//         s[n] === e && delete s[n], s[t] = e, e.$name = t
//       }, s.$removeControl = function (e) {
//         e.$name && s[e.$name] === e && delete s[e.$name], i(s.$pending, function (t, n) {
//           s.$setValidity(n, null, e)
//         }), i(s.$error, function (t, n) {
//           s.$setValidity(n, null, e)
//         }), i(s.$$success, function (t, n) {
//           s.$setValidity(n, null, e)
//         }), R(a, e), e.$$parentForm = go
//       }, ci({
//         ctrl: this,
//         $element: e,
//         set: function (e, t, n) {
//           var i = e[t];
//           i ? -1 === i.indexOf(n) && i.push(n) : e[t] = [n]
//         },
//         unset: function (e, t, n) {
//           var i = e[t];
//           i && (R(i, n), 0 === i.length && delete e[t])
//         },
//         $animate: r
//       }), s.$setDirty = function () {
//         r.removeClass(e, es), r.addClass(e, ts), s.$dirty = !0, s.$pristine = !1, s.$$parentForm.$setDirty()
//       }, s.$setPristine = function () {
//         r.setClass(e, es, ts + " " + vo), s.$dirty = !1, s.$pristine = !0, s.$submitted = !1, i(a, function (e) {
//           e.$setPristine()
//         })
//       }, s.$setUntouched = function () {
//         i(a, function (e) {
//           e.$setUntouched()
//         })
//       }, s.$setSubmitted = function () {
//         r.addClass(e, vo), s.$submitted = !0, s.$$parentForm.$setSubmitted()
//       }
//     }

//     function ii(e) {
//       e.$formatters.push(function (t) {
//         return e.$isEmpty(t) ? t : t.toString()
//       })
//     }

//     function ri(e, t, n, i, r, o) {
//       var s = gi(t[0].type);
//       if (!r.android) {
//         var a = !1;
//         t.on("compositionstart", function () {
//           a = !0
//         }), t.on("compositionend", function () {
//           a = !1, u()
//         })
//       }
//       var l, u = function (e) {
//         if (l && (o.defer.cancel(l), l = null), !a) {
//           var r = t.val(),
//             u = e && e.type;
//           "password" === s || n.ngTrim && "false" === n.ngTrim || (r = Di(r)), (i.$viewValue !== r || "" === r && i.$$hasNativeValidators) && i.$setViewValue(r, u)
//         }
//       };
//       if (r.hasEvent("input")) t.on("input", u);
//       else {
//         var c = function (e, t, n) {
//           l || (l = o.defer(function () {
//             l = null, t && t.value === n || u(e)
//           }))
//         };
//         t.on("keydown", function (e) {
//           var t = e.keyCode;
//           91 === t || 15 < t && t < 19 || 37 <= t && t <= 40 || c(e, this, this.value)
//         }), r.hasEvent("paste") && t.on("paste cut", c)
//       }
//       t.on("change", u), Ao[s] && i.$$hasNativeValidators && s === n.type && t.on(_o, function (e) {
//         if (!l) {
//           var t = this[pi],
//             n = t.badInput,
//             i = t.typeMismatch;
//           l = o.defer(function () {
//             l = null, t.badInput === n && t.typeMismatch === i || u(e)
//           })
//         }
//       }), i.$render = function () {
//         var e = i.$isEmpty(i.$viewValue) ? "" : i.$viewValue;
//         t.val() !== e && t.val(e)
//       }
//     }

//     function oi(e, t) {
//       return function (n, r) {
//         var o, s;
//         if (S(n)) return n;
//         if (w(n)) {
//           if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), wo.test(n)) return new Date(n);
//           if (e.lastIndex = 0, o = e.exec(n)) return o.shift(), s = r ? {
//             yyyy: r.getFullYear(),
//             MM: r.getMonth() + 1,
//             dd: r.getDate(),
//             HH: r.getHours(),
//             mm: r.getMinutes(),
//             ss: r.getSeconds(),
//             sss: r.getMilliseconds() / 1e3
//           } : {
//               yyyy: 1970,
//               MM: 1,
//               dd: 1,
//               HH: 0,
//               mm: 0,
//               ss: 0,
//               sss: 0
//             }, i(o, function (e, n) {
//               n < t.length && (s[t[n]] = +e)
//             }), new Date(s.yyyy, s.MM - 1, s.dd, s.HH, s.mm, s.ss || 0, 1e3 * s.sss || 0)
//         }
//         return NaN
//       }
//     }

//     function si(e, t, n, i) {
//       return function (r, o, s, a, l, u, c) {
//         function d(e) {
//           return e && !(e.getTime && e.getTime() !== e.getTime())
//         }

//         function f(e) {
//           return y(e) && !S(e) ? n(e) || void 0 : e
//         }
//         ai(r, o, s, a), ri(r, o, s, a, l, u);
//         var h, p = a && a.$options && a.$options.timezone;
//         if (a.$$parserName = e, a.$parsers.push(function (e) {
//           if (a.$isEmpty(e)) return null;
//           if (t.test(e)) {
//             var i = n(e, h);
//             return p && (i = Z(i, p)), i
//           }
//         }), a.$formatters.push(function (e) {
//           if (e && !S(e)) throw is("datefmt", "Expected `{0}` to be a date", e);
//           return d(e) ? ((h = e) && p && (h = Z(h, p, !0)), c("date")(e, i, p)) : (h = null, "")
//         }), y(s.min) || s.ngMin) {
//           var m;
//           a.$validators.min = function (e) {
//             return !d(e) || v(m) || n(e) >= m
//           }, s.$observe("min", function (e) {
//             m = f(e), a.$validate()
//           })
//         }
//         if (y(s.max) || s.ngMax) {
//           var g;
//           a.$validators.max = function (e) {
//             return !d(e) || v(g) || n(e) <= g
//           }, s.$observe("max", function (e) {
//             g = f(e), a.$validate()
//           })
//         }
//       }
//     }

//     function ai(e, t, n, i) {
//       var r = t[0];
//       (i.$$hasNativeValidators = b(r.validity)) && i.$parsers.push(function (e) {
//         var n = t.prop(pi) || {};
//         return n.badInput || n.typeMismatch ? void 0 : e
//       })
//     }

//     function li(e, t, n, i, r) {
//       var o;
//       if (y(i)) {
//         if (!(o = e(i)).constant) throw is("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, i);
//         return o(t)
//       }
//       return r
//     }

//     function ui(e, t) {
//       return e = "ngClass" + e, ["$animate", function (n) {
//         function r(e, t) {
//           var n = [];
//           e: for (var i = 0; i < e.length; i++) {
//             for (var r = e[i], o = 0; o < t.length; o++)
//               if (r == t[o]) continue e;
//             n.push(r)
//           }
//           return n
//         }

//         function o(e) {
//           var t = [];
//           return _i(e) ? (i(e, function (e) {
//             t = t.concat(o(e))
//           }), t) : w(e) ? e.split(" ") : b(e) ? (i(e, function (e, n) {
//             e && (t = t.concat(n.split(" ")))
//           }), t) : e
//         }
//         return {
//           restrict: "AC",
//           link: function (s, a, l) {
//             function u(e) {
//               var t = d(e, 1);
//               l.$addClass(t)
//             }

//             function c(e) {
//               var t = d(e, -1);
//               l.$removeClass(t)
//             }

//             function d(e, t) {
//               var n = a.data("$classCounts") || he(),
//                 r = [];
//               return i(e, function (e) {
//                 (t > 0 || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(t > 0) && r.push(e))
//               }), a.data("$classCounts", n), r.join(" ")
//             }

//             function f(e, t) {
//               var i = r(t, e),
//                 o = r(e, t);
//               i = d(i, 1), o = d(o, -1), i && i.length && n.addClass(a, i), o && o.length && n.removeClass(a, o)
//             }

//             function h(e) {
//               if (!0 === t || (1 & s.$index) === t) {
//                 var n = o(e || []);
//                 p ? L(e, p) || f(o(p), n) : u(n)
//               }
//               p = _i(e) ? e.map(function (e) {
//                 return me(e)
//               }) : me(e)
//             }
//             var p;
//             s.$watch(l[e], h, !0), l.$observe("class", function (t) {
//               h(s.$eval(l[e]))
//             }), "ngClass" !== e && s.$watch("$index", function (n, i) {
//               var r = 1 & n;
//               if (r !== (1 & i)) {
//                 var a = o(s.$eval(l[e]));
//                 r === t ? u(a) : c(a)
//               }
//             })
//           }
//         }
//       }]
//     }

//     function ci(e) {
//       function t(e, t, n) {
//         o[e] || (o[e] = {}), l(o[e], t, n)
//       }

//       function n(e, t, n) {
//         o[e] && u(o[e], t, n), di(o[e]) && (o[e] = void 0)
//       }

//       function i(e, t) {
//         t && !a[e] ? (c.addClass(s, e), a[e] = !0) : !t && a[e] && (c.removeClass(s, e), a[e] = !1)
//       }

//       function r(e, t) {
//         e = e ? "-" + ae(e, "-") : "", i(Jo + e, !0 === t), i(Qo + e, !1 === t)
//       }
//       var o = e.ctrl,
//         s = e.$element,
//         a = {},
//         l = e.set,
//         u = e.unset,
//         c = e.$animate;
//       a[Qo] = !(a[Jo] = s.hasClass(Jo)), o.$setValidity = function (e, s, a) {
//         v(s) ? t("$pending", e, a) : n("$pending", e, a), A(s) ? s ? (u(o.$error, e, a), l(o.$$success, e, a)) : (l(o.$error, e, a), u(o.$$success, e, a)) : (u(o.$error, e, a), u(o.$$success, e, a)), o.$pending ? (i(ns, !0), o.$valid = o.$invalid = void 0, r("", null)) : (i(ns, !1), o.$valid = di(o.$error), o.$invalid = !o.$valid, r("", o.$valid));
//         var c;
//         r(e, c = o.$pending && o.$pending[e] ? void 0 : !o.$error[e] && (!!o.$$success[e] || null)), o.$$parentForm.$setValidity(e, c, o)
//       }
//     }

//     function di(e) {
//       if (e)
//         for (var t in e)
//           if (e.hasOwnProperty(t)) return !1;
//       return !0
//     }

//     function fi(e) {
//       e[0].hasAttribute("selected") && (e[0].selected = !0)
//     }
//     var hi = /^\/(.+)\/([a-z]*)$/,
//       pi = "validity",
//       mi = Object.prototype.hasOwnProperty,
//       gi = function (e) {
//         return w(e) ? e.toLowerCase() : e
//       },
//       vi = function (e) {
//         return w(e) ? e.toUpperCase() : e
//       };
//     "i" !== "I".toLowerCase() && (gi = function (e) {
//       return w(e) ? e.replace(/[A-Z]/g, function (e) {
//         return String.fromCharCode(32 | e.charCodeAt(0))
//       }) : e
//     }, vi = function (e) {
//       return w(e) ? e.replace(/[a-z]/g, function (e) {
//         return String.fromCharCode(-33 & e.charCodeAt(0))
//       }) : e
//     });
//     var yi, bi, $i, wi, xi = [].slice,
//       Si = [].splice,
//       Ci = [].push,
//       ki = Object.prototype.toString,
//       Ti = Object.getPrototypeOf,
//       Ei = t("ng"),
//       ji = e.angular || (e.angular = {}),
//       Mi = 0;
//     yi = e.document.documentMode, h.$inject = [], p.$inject = [];
//     var _i = Array.isArray,
//       Ai = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
//       Di = function (e) {
//         return w(e) ? e.trim() : e
//       },
//       Oi = function (e) {
//         return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
//       },
//       Pi = function () {
//         if (!y(Pi.rules)) {
//           var t = e.document.querySelector("[ng-csp]") || e.document.querySelector("[data-ng-csp]");
//           if (t) {
//             var n = t.getAttribute("ng-csp") || t.getAttribute("data-ng-csp");
//             Pi.rules = {
//               noUnsafeEval: !n || -1 !== n.indexOf("no-unsafe-eval"),
//               noInlineStyle: !n || -1 !== n.indexOf("no-inline-style")
//             }
//           } else Pi.rules = {
//             noUnsafeEval: function () {
//               try {
//                 return new Function(""), !1
//               } catch (e) {
//                 return !0
//               }
//             }(),
//             noInlineStyle: !1
//           }
//         }
//         return Pi.rules
//       },
//       Ni = function () {
//         if (y(Ni.name_)) return Ni.name_;
//         var t, n, i, r, o = Ii.length;
//         for (n = 0; n < o; ++n)
//           if (i = Ii[n], t = e.document.querySelector("[" + i.replace(":", "\\:") + "jq]")) {
//             r = t.getAttribute(i + "jq");
//             break
//           }
//         return Ni.name_ = r
//       },
//       Fi = /:/g,
//       Ii = ["ng-", "data-ng-", "ng:", "x-ng-"],
//       Ri = /[A-Z]/g,
//       zi = !1,
//       Li = 1,
//       Hi = 3,
//       Vi = 8,
//       Ui = 9,
//       Bi = 11,
//       qi = {
//         full: "1.5.8",
//         major: 1,
//         minor: 5,
//         dot: 8,
//         codeName: "arbitrary-fallbacks"
//       };
//     ke.expando = "ng339";
//     var Wi = ke.cache = {},
//       Yi = 1,
//       Gi = function (e, t, n) {
//         e.addEventListener(t, n, !1)
//       },
//       Zi = function (e, t, n) {
//         e.removeEventListener(t, n, !1)
//       };
//     ke._data = function (e) {
//       return this.cache[e[this.expando]] || {}
//     };
//     var Xi = /([\:\-\_]+(.))/g,
//       Ki = /^moz([A-Z])/,
//       Ji = {
//         mouseleave: "mouseout",
//         mouseenter: "mouseover"
//       },
//       Qi = t("jqLite"),
//       er = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
//       tr = /<|&#?\w+;/,
//       nr = /<([\w:-]+)/,
//       ir = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
//       rr = {
//         option: [1, '<select multiple="multiple">', "</select>"],
//         thead: [1, "<table>", "</table>"],
//         col: [2, "<table><colgroup>", "</colgroup></table>"],
//         tr: [2, "<table><tbody>", "</tbody></table>"],
//         td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
//         _default: [0, "", ""]
//       };
//     rr.optgroup = rr.option, rr.tbody = rr.tfoot = rr.colgroup = rr.caption = rr.thead, rr.th = rr.td;
//     var or = e.Node.prototype.contains || function (e) {
//       return !!(16 & this.compareDocumentPosition(e))
//     },
//       sr = ke.prototype = {
//         ready: function (t) {
//           function n() {
//             i || (i = !0, t())
//           }
//           var i = !1;
//           "complete" === e.document.readyState ? e.setTimeout(n) : (this.on("DOMContentLoaded", n), ke(e).on("load", n))
//         },
//         toString: function () {
//           var e = [];
//           return i(this, function (t) {
//             e.push("" + t)
//           }), "[" + e.join(", ") + "]"
//         },
//         eq: function (e) {
//           return bi(e >= 0 ? this[e] : this[this.length + e])
//         },
//         length: 0,
//         push: Ci,
//         sort: [].sort,
//         splice: [].splice
//       },
//       ar = {};
//     i("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (e) {
//       ar[gi(e)] = e
//     });
//     var lr = {};
//     i("input,select,option,textarea,button,form,details".split(","), function (e) {
//       lr[e] = !0
//     });
//     var ur = {
//       ngMinlength: "minlength",
//       ngMaxlength: "maxlength",
//       ngMin: "min",
//       ngMax: "max",
//       ngPattern: "pattern"
//     };
//     i({
//       data: Ae,
//       removeData: Me,
//       hasData: function (e) {
//         for (var t in Wi[e.ng339]) return !0;
//         return !1
//       },
//       cleanData: function (e) {
//         for (var t = 0, n = e.length; t < n; t++) Me(e[t])
//       }
//     }, function (e, t) {
//       ke[t] = e
//     }), i({
//       data: Ae,
//       inheritedData: Ie,
//       scope: function (e) {
//         return bi.data(e, "$scope") || Ie(e.parentNode || e, ["$isolateScope", "$scope"])
//       },
//       isolateScope: function (e) {
//         return bi.data(e, "$isolateScope") || bi.data(e, "$isolateScopeNoTemplate")
//       },
//       controller: Fe,
//       injector: function (e) {
//         return Ie(e, "$injector")
//       },
//       removeAttr: function (e, t) {
//         e.removeAttribute(t)
//       },
//       hasClass: De,
//       css: function (e, t, n) {
//         if (t = be(t), !y(n)) return e.style[t];
//         e.style[t] = n
//       },
//       attr: function (e, t, n) {
//         var i = e.nodeType;
//         if (i !== Hi && 2 !== i && i !== Vi) {
//           var r = gi(t);
//           if (ar[r]) {
//             if (!y(n)) return e[t] || (e.attributes.getNamedItem(t) || h).specified ? r : void 0;
//             n ? (e[t] = !0, e.setAttribute(t, r)) : (e[t] = !1, e.removeAttribute(r))
//           } else if (y(n)) e.setAttribute(t, n);
//           else if (e.getAttribute) {
//             var o = e.getAttribute(t, 2);
//             return null === o ? void 0 : o
//           }
//         }
//       },
//       prop: function (e, t, n) {
//         if (!y(n)) return e[t];
//         e[t] = n
//       },
//       text: function () {
//         function e(e, t) {
//           if (v(t)) {
//             var n = e.nodeType;
//             return n === Li || n === Hi ? e.textContent : ""
//           }
//           e.textContent = t
//         }
//         return e.$dv = "", e
//       }(),
//       val: function (e, t) {
//         if (v(t)) {
//           if (e.multiple && "select" === I(e)) {
//             var n = [];
//             return i(e.options, function (e) {
//               e.selected && n.push(e.value || e.text)
//             }), 0 === n.length ? null : n
//           }
//           return e.value
//         }
//         e.value = t
//       },
//       html: function (e, t) {
//         if (v(t)) return e.innerHTML;
//         Ee(e, !0), e.innerHTML = t
//       },
//       empty: Re
//     }, function (e, t) {
//       ke.prototype[t] = function (t, n) {
//         var i, r, o = this.length;
//         if (e !== Re && v(2 == e.length && e !== De && e !== Fe ? t : n)) {
//           if (b(t)) {
//             for (i = 0; i < o; i++)
//               if (e === Ae) e(this[i], t);
//               else
//                 for (r in t) e(this[i], r, t[r]);
//             return this
//           }
//           for (var s = e.$dv, a = v(s) ? Math.min(o, 1) : o, l = 0; l < a; l++) {
//             var u = e(this[l], t, n);
//             s = s ? s + u : u
//           }
//           return s
//         }
//         for (i = 0; i < o; i++) e(this[i], t, n);
//         return this
//       }
//     }), i({
//       removeData: Me,
//       on: function (e, t, n, i) {
//         if (y(i)) throw Qi("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
//         if (we(e)) {
//           var r = _e(e, !0),
//             o = r.events,
//             s = r.handle;
//           s || (s = r.handle = Ue(e, o));
//           for (var a = t.indexOf(" ") >= 0 ? t.split(" ") : [t], l = a.length, u = function (t, i, r) {
//             var a = o[t];
//             a || ((a = o[t] = []).specialHandlerWrapper = i, "$destroy" === t || r || Gi(e, t, s)), a.push(n)
//           }; l--;) t = a[l], Ji[t] ? (u(Ji[t], qe), u(t, void 0, !0)) : u(t)
//         }
//       },
//       off: je,
//       one: function (e, t, n) {
//         (e = bi(e)).on(t, function i() {
//           e.off(t, n), e.off(t, i)
//         }), e.on(t, n)
//       },
//       replaceWith: function (e, t) {
//         var n, r = e.parentNode;
//         Ee(e), i(new ke(t), function (t) {
//           n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
//         })
//       },
//       children: function (e) {
//         var t = [];
//         return i(e.childNodes, function (e) {
//           e.nodeType === Li && t.push(e)
//         }), t
//       },
//       contents: function (e) {
//         return e.contentDocument || e.childNodes || []
//       },
//       append: function (e, t) {
//         var n = e.nodeType;
//         if (n === Li || n === Bi)
//           for (var i = 0, r = (t = new ke(t)).length; i < r; i++) {
//             var o = t[i];
//             e.appendChild(o)
//           }
//       },
//       prepend: function (e, t) {
//         if (e.nodeType === Li) {
//           var n = e.firstChild;
//           i(new ke(t), function (t) {
//             e.insertBefore(t, n)
//           })
//         }
//       },
//       wrap: function (e, t) {
//         Ce(e, bi(t).eq(0).clone()[0])
//       },
//       remove: ze,
//       detach: function (e) {
//         ze(e, !0)
//       },
//       after: function (e, t) {
//         for (var n = e, i = e.parentNode, r = 0, o = (t = new ke(t)).length; r < o; r++) {
//           var s = t[r];
//           i.insertBefore(s, n.nextSibling), n = s
//         }
//       },
//       addClass: Pe,
//       removeClass: Oe,
//       toggleClass: function (e, t, n) {
//         t && i(t.split(" "), function (t) {
//           var i = n;
//           v(i) && (i = !De(e, t)), (i ? Pe : Oe)(e, t)
//         })
//       },
//       parent: function (e) {
//         var t = e.parentNode;
//         return t && t.nodeType !== Bi ? t : null
//       },
//       next: function (e) {
//         return e.nextElementSibling
//       },
//       find: function (e, t) {
//         return e.getElementsByTagName ? e.getElementsByTagName(t) : []
//       },
//       clone: Te,
//       triggerHandler: function (e, t, n) {
//         var r, o, s, a = t.type || t,
//           l = _e(e),
//           c = l && l.events,
//           d = c && c[a];
//         d && (r = {
//           preventDefault: function () {
//             this.defaultPrevented = !0
//           },
//           isDefaultPrevented: function () {
//             return !0 === this.defaultPrevented
//           },
//           stopImmediatePropagation: function () {
//             this.immediatePropagationStopped = !0
//           },
//           isImmediatePropagationStopped: function () {
//             return !0 === this.immediatePropagationStopped
//           },
//           stopPropagation: h,
//           type: a,
//           target: e
//         }, t.type && (r = u(r, t)), o = me(d), s = n ? [r].concat(n) : [r], i(o, function (t) {
//           r.isImmediatePropagationStopped() || t.apply(e, s)
//         }))
//       }
//     }, function (e, t) {
//       ke.prototype[t] = function (t, n, i) {
//         for (var r, o = 0, s = this.length; o < s; o++) v(r) ? y(r = e(this[o], t, n, i)) && (r = bi(r)) : Ne(r, e(this[o], t, n, i));
//         return y(r) ? r : this
//       }, ke.prototype.bind = ke.prototype.on, ke.prototype.unbind = ke.prototype.off
//     }), Ge.prototype = {
//       put: function (e, t) {
//         this[Ye(e, this.nextUid)] = t
//       },
//       get: function (e) {
//         return this[Ye(e, this.nextUid)]
//       },
//       remove: function (e) {
//         var t = this[e = Ye(e, this.nextUid)];
//         return delete this[e], t
//       }
//     };
//     var cr = [function () {
//       this.$get = [function () {
//         return Ge
//       }]
//     }],
//       dr = /^([^\(]+?)=>/,
//       fr = /^[^\(]*\(\s*([^\)]*)\)/m,
//       hr = /,/,
//       pr = /^\s*(_?)(\S+?)\1\s*$/,
//       mr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
//       gr = t("$injector");
//     Je.$$annotate = function (e, t, n) {
//       var r, o;
//       if ("function" == typeof e) {
//         if (!(r = e.$inject)) {
//           if (r = [], e.length) {
//             if (t) throw w(n) && n || (n = e.name || Ke(e)), gr("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
//             i(Xe(e)[1].split(hr), function (e) {
//               e.replace(pr, function (e, t, n) {
//                 r.push(n)
//               })
//             })
//           }
//           e.$inject = r
//         }
//       } else _i(e) ? (ue(e[o = e.length - 1], "fn"), r = e.slice(0, o)) : ue(e, "fn", !0);
//       return r
//     };
//     var vr = t("$animate"),
//       yr = 1,
//       br = function () {
//         this.$get = h
//       },
//       $r = function () {
//         var e = new Ge,
//           t = [];
//         this.$get = ["$$AnimateRunner", "$rootScope", function (n, r) {
//           function o(e, t, n) {
//             var r = !1;
//             return t && i(t = w(t) ? t.split(" ") : _i(t) ? t : [], function (t) {
//               t && (r = !0, e[t] = n)
//             }), r
//           }

//           function s() {
//             i(t, function (t) {
//               var n = e.get(t);
//               if (n) {
//                 var r = nt(t.attr("class")),
//                   o = "",
//                   s = "";
//                 i(n, function (e, t) {
//                   e !== !!r[t] && (e ? o += (o.length ? " " : "") + t : s += (s.length ? " " : "") + t)
//                 }), i(t, function (e) {
//                   o && Pe(e, o), s && Oe(e, s)
//                 }), e.remove(t)
//               }
//             }), t.length = 0
//           }

//           function a(n, i, a) {
//             var l = e.get(n) || {},
//               u = o(l, i, !0),
//               c = o(l, a, !1);
//             (u || c) && (e.put(n, l), t.push(n), 1 === t.length && r.$$postDigest(s))
//           }
//           return {
//             enabled: h,
//             on: h,
//             off: h,
//             pin: h,
//             push: function (e, t, i, r) {
//               r && r(), (i = i || {}).from && e.css(i.from), i.to && e.css(i.to), (i.addClass || i.removeClass) && a(e, i.addClass, i.removeClass);
//               var o = new n;
//               return o.complete(), o
//             }
//           }
//         }]
//       },
//       wr = ["$provide", function (e) {
//         var t = this;
//         this.$$registeredAnimations = Object.create(null), this.register = function (n, i) {
//           if (n && "." !== n.charAt(0)) throw vr("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
//           var r = n + "-animation";
//           t.$$registeredAnimations[n.substr(1)] = r, e.factory(r, i)
//         }, this.classNameFilter = function (e) {
//           if (1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null, this.$$classNameFilter && new RegExp("(\\s+|\\/)ng-animate(\\s+|\\/)").test(this.$$classNameFilter.toString()))) throw vr("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', "ng-animate");
//           return this.$$classNameFilter
//         }, this.$get = ["$$animateQueue", function (e) {
//           function t(e, t, n) {
//             if (n) {
//               var i = tt(n);
//               !i || i.parentNode || i.previousElementSibling || (n = null)
//             }
//             n ? n.after(e) : t.prepend(e)
//           }
//           return {
//             on: e.on,
//             off: e.off,
//             pin: e.pin,
//             enabled: e.enabled,
//             cancel: function (e) {
//               e.end && e.end()
//             },
//             enter: function (n, i, r, o) {
//               return i = i && bi(i), r = r && bi(r), i = i || r.parent(), t(n, i, r), e.push(n, "enter", it(o))
//             },
//             move: function (n, i, r, o) {
//               return i = i && bi(i), r = r && bi(r), i = i || r.parent(), t(n, i, r), e.push(n, "move", it(o))
//             },
//             leave: function (t, n) {
//               return e.push(t, "leave", it(n), function () {
//                 t.remove()
//               })
//             },
//             addClass: function (t, n, i) {
//               return i = it(i), i.addClass = et(i.addclass, n), e.push(t, "addClass", i)
//             },
//             removeClass: function (t, n, i) {
//               return i = it(i), i.removeClass = et(i.removeClass, n), e.push(t, "removeClass", i)
//             },
//             setClass: function (t, n, i, r) {
//               return r = it(r), r.addClass = et(r.addClass, n), r.removeClass = et(r.removeClass, i), e.push(t, "setClass", r)
//             },
//             animate: function (t, n, i, r, o) {
//               return o = it(o), o.from = o.from ? u(o.from, n) : n, o.to = o.to ? u(o.to, i) : i, r = r || "ng-inline-animate", o.tempClasses = et(o.tempClasses, r), e.push(t, "animate", o)
//             }
//           }
//         }]
//       }],
//       xr = function () {
//         this.$get = ["$$rAF", function (e) {
//           function t(t) {
//             n.push(t), n.length > 1 || e(function () {
//               for (var e = 0; e < n.length; e++) n[e]();
//               n = []
//             })
//           }
//           var n = [];
//           return function () {
//             var e = !1;
//             return t(function () {
//               e = !0
//             }),
//               function (n) {
//                 e ? n() : t(n)
//               }
//           }
//         }]
//       },
//       Sr = function () {
//         this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (e, t, n, r, o) {
//           function s(e) {
//             this.setHost(e);
//             var t = n(),
//               i = function (e) {
//                 o(e, 0, !1)
//               };
//             this._doneCallbacks = [], this._tick = function (e) {
//               var n = r[0];
//               n && n.hidden ? i(e) : t(e)
//             }, this._state = 0
//           }
//           return s.chain = function (e, t) {
//             function n() {
//               i !== e.length ? e[i](function (e) {
//                 !1 !== e ? (i++ , n()) : t(!1)
//               }) : t(!0)
//             }
//             var i = 0;
//             n()
//           }, s.all = function (e, t) {
//             function n(n) {
//               o = o && n, ++r === e.length && t(o)
//             }
//             var r = 0,
//               o = !0;
//             i(e, function (e) {
//               e.done(n)
//             })
//           }, s.prototype = {
//             setHost: function (e) {
//               this.host = e || {}
//             },
//             done: function (e) {
//               2 === this._state ? e() : this._doneCallbacks.push(e)
//             },
//             progress: h,
//             getPromise: function () {
//               if (!this.promise) {
//                 var t = this;
//                 this.promise = e(function (e, n) {
//                   t.done(function (t) {
//                     !1 === t ? n() : e()
//                   })
//                 })
//               }
//               return this.promise
//             },
//             then: function (e, t) {
//               return this.getPromise().then(e, t)
//             },
//             catch: function (e) {
//               return this.getPromise().catch(e)
//             },
//             finally: function (e) {
//               return this.getPromise().finally(e)
//             },
//             pause: function () {
//               this.host.pause && this.host.pause()
//             },
//             resume: function () {
//               this.host.resume && this.host.resume()
//             },
//             end: function () {
//               this.host.end && this.host.end(), this._resolve(!0)
//             },
//             cancel: function () {
//               this.host.cancel && this.host.cancel(), this._resolve(!1)
//             },
//             complete: function (e) {
//               var t = this;
//               0 === t._state && (t._state = 1, t._tick(function () {
//                 t._resolve(e)
//               }))
//             },
//             _resolve: function (e) {
//               2 !== this._state && (i(this._doneCallbacks, function (t) {
//                 t(e)
//               }), this._doneCallbacks.length = 0, this._state = 2)
//             }
//           }, s
//         }]
//       },
//       Cr = function () {
//         this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (e, t, n) {
//           return function (t, i) {
//             function r() {
//               return e(function () {
//                 o(), a || l.complete(), a = !0
//               }), l
//             }

//             function o() {
//               s.addClass && (t.addClass(s.addClass), s.addClass = null), s.removeClass && (t.removeClass(s.removeClass), s.removeClass = null), s.to && (t.css(s.to), s.to = null)
//             }
//             var s = i || {};
//             s.$$prepared || (s = z(s)), s.cleanupStyles && (s.from = s.to = null), s.from && (t.css(s.from), s.from = null);
//             var a, l = new n;
//             return {
//               start: r,
//               end: r
//             }
//           }
//         }]
//       },
//       kr = t("$compile"),
//       Tr = new function () { };
//     lt.$inject = ["$provide", "$$sanitizeUriProvider"], ut.prototype.isFirstChange = function () {
//       return this.previousValue === Tr
//     };
//     var Er = /^((?:x|data)[\:\-_])/i,
//       jr = t("$controller"),
//       Mr = /^(\S+)(\s+as\s+([\w$]+))?$/,
//       _r = function () {
//         this.$get = ["$document", function (e) {
//           return function (t) {
//             return t ? !t.nodeType && t instanceof bi && (t = t[0]) : t = e[0].body, t.offsetWidth + 1
//           }
//         }]
//       },
//       Ar = "application/json",
//       Dr = {
//         "Content-Type": Ar + ";charset=utf-8"
//       },
//       Or = /^\[|^\{(?!\{)/,
//       Pr = {
//         "[": /]$/,
//         "{": /}$/
//       },
//       Nr = /^\)\]\}',?\n/,
//       Fr = t("$http"),
//       Ir = function (e) {
//         return function () {
//           throw Fr("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", e)
//         }
//       },
//       Rr = ji.$interpolateMinErr = t("$interpolate");
//     Rr.throwNoconcat = function (e) {
//       throw Rr("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
//     }, Rr.interr = function (e, t) {
//       return Rr("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
//     };
//     var zr = function () {
//       this.$get = ["$window", function (e) {
//         function t(e) {
//           var t = function (e) {
//             t.data = e, t.called = !0
//           };
//           return t.id = e, t
//         }
//         var n = e.angular.callbacks,
//           i = {};
//         return {
//           createCallback: function (e) {
//             var r = "_" + (n.$$counter++).toString(36),
//               o = "angular.callbacks." + r,
//               s = t(r);
//             return i[o] = n[r] = s, o
//           },
//           wasCalled: function (e) {
//             return i[e].called
//           },
//           getResponse: function (e) {
//             return i[e].data
//           },
//           removeCallback: function (e) {
//             var t = i[e];
//             delete n[t.id], delete i[e]
//           }
//         }
//       }]
//     },
//       Lr = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
//       Hr = {
//         http: 80,
//         https: 443,
//         ftp: 21
//       },
//       Vr = t("$location"),
//       Ur = {
//         $$absUrl: "",
//         $$html5: !1,
//         $$replace: !1,
//         absUrl: Bt("$$absUrl"),
//         url: function (e) {
//           if (v(e)) return this.$$url;
//           var t = Lr.exec(e);
//           return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
//         },
//         protocol: Bt("$$protocol"),
//         host: Bt("$$host"),
//         port: Bt("$$port"),
//         path: qt("$$path", function (e) {
//           return "/" == (e = null !== e ? e.toString() : "").charAt(0) ? e : "/" + e
//         }),
//         search: function (e, t) {
//           switch (arguments.length) {
//             case 0:
//               return this.$$search;
//             case 1:
//               if (w(e) || x(e)) e = e.toString(), this.$$search = J(e);
//               else {
//                 if (!b(e)) throw Vr("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
//                 i(e = z(e, {}), function (t, n) {
//                   null == t && delete e[n]
//                 }), this.$$search = e
//               }
//               break;
//             default:
//               v(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
//           }
//           return this.$$compose(), this
//         },
//         hash: qt("$$hash", function (e) {
//           return null !== e ? e.toString() : ""
//         }),
//         replace: function () {
//           return this.$$replace = !0, this
//         }
//       };
//     i([Ut, Vt, Ht], function (e) {
//       e.prototype = Object.create(Ur), e.prototype.state = function (t) {
//         if (!arguments.length) return this.$$state;
//         if (e !== Ht || !this.$$html5) throw Vr("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
//         return this.$$state = v(t) ? null : t, this
//       }
//     });
//     var Br = t("$parse"),
//       qr = Function.prototype.call,
//       Wr = Function.prototype.apply,
//       Yr = Function.prototype.bind,
//       Gr = he();
//     i("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (e) {
//       Gr[e] = !0
//     });
//     var Zr = {
//       n: "\n",
//       f: "\f",
//       r: "\r",
//       t: "\t",
//       v: "\v",
//       "'": "'",
//       '"': '"'
//     },
//       Xr = function (e) {
//         this.options = e
//       };
//     Xr.prototype = {
//       constructor: Xr,
//       lex: function (e) {
//         for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;) {
//           var t = this.text.charAt(this.index);
//           if ('"' === t || "'" === t) this.readString(t);
//           else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber();
//           else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
//           else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
//             index: this.index,
//             text: t
//           }), this.index++;
//           else if (this.isWhitespace(t)) this.index++;
//           else {
//             var n = t + this.peek(),
//               i = n + this.peek(2),
//               r = Gr[t],
//               o = Gr[n],
//               s = Gr[i];
//             if (r || o || s) {
//               var a = s ? i : o ? n : t;
//               this.tokens.push({
//                 index: this.index,
//                 text: a,
//                 operator: !0
//               }), this.index += a.length
//             } else this.throwError("Unexpected next character ", this.index, this.index + 1)
//           }
//         }
//         return this.tokens
//       },
//       is: function (e, t) {
//         return -1 !== t.indexOf(e)
//       },
//       peek: function (e) {
//         var t = e || 1;
//         return this.index + t < this.text.length && this.text.charAt(this.index + t)
//       },
//       isNumber: function (e) {
//         return "0" <= e && e <= "9" && "string" == typeof e
//       },
//       isWhitespace: function (e) {
//         return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || " " === e
//       },
//       isIdentifierStart: function (e) {
//         return this.options.isIdentifierStart ? this.options.isIdentifierStart(e, this.codePointAt(e)) : this.isValidIdentifierStart(e)
//       },
//       isValidIdentifierStart: function (e) {
//         return "a" <= e && e <= "z" || "A" <= e && e <= "Z" || "_" === e || "$" === e
//       },
//       isIdentifierContinue: function (e) {
//         return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(e, this.codePointAt(e)) : this.isValidIdentifierContinue(e)
//       },
//       isValidIdentifierContinue: function (e, t) {
//         return this.isValidIdentifierStart(e, t) || this.isNumber(e)
//       },
//       codePointAt: function (e) {
//         return 1 === e.length ? e.charCodeAt(0) : (e.charCodeAt(0) << 10) + e.charCodeAt(1) - 56613888
//       },
//       peekMultichar: function () {
//         var e = this.text.charAt(this.index),
//           t = this.peek();
//         if (!t) return e;
//         var n = e.charCodeAt(0),
//           i = t.charCodeAt(0);
//         return n >= 55296 && n <= 56319 && i >= 56320 && i <= 57343 ? e + t : e
//       },
//       isExpOperator: function (e) {
//         return "-" === e || "+" === e || this.isNumber(e)
//       },
//       throwError: function (e, t, n) {
//         n = n || this.index;
//         var i = y(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
//         throw Br("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, i, this.text)
//       },
//       readNumber: function () {
//         for (var e = "", t = this.index; this.index < this.text.length;) {
//           var n = gi(this.text.charAt(this.index));
//           if ("." == n || this.isNumber(n)) e += n;
//           else {
//             var i = this.peek();
//             if ("e" == n && this.isExpOperator(i)) e += n;
//             else if (this.isExpOperator(n) && i && this.isNumber(i) && "e" == e.charAt(e.length - 1)) e += n;
//             else {
//               if (!this.isExpOperator(n) || i && this.isNumber(i) || "e" != e.charAt(e.length - 1)) break;
//               this.throwError("Invalid exponent")
//             }
//           }
//           this.index++
//         }
//         this.tokens.push({
//           index: t,
//           text: e,
//           constant: !0,
//           value: Number(e)
//         })
//       },
//       readIdent: function () {
//         var e = this.index;
//         for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
//           var t = this.peekMultichar();
//           if (!this.isIdentifierContinue(t)) break;
//           this.index += t.length
//         }
//         this.tokens.push({
//           index: e,
//           text: this.text.slice(e, this.index),
//           identifier: !0
//         })
//       },
//       readString: function (e) {
//         var t = this.index;
//         this.index++;
//         for (var n = "", i = e, r = !1; this.index < this.text.length;) {
//           var o = this.text.charAt(this.index);
//           if (i += o, r) {
//             if ("u" === o) {
//               var s = this.text.substring(this.index + 1, this.index + 5);
//               s.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + s + "]"), this.index += 4, n += String.fromCharCode(parseInt(s, 16))
//             } else n += Zr[o] || o;
//             r = !1
//           } else if ("\\" === o) r = !0;
//           else {
//             if (o === e) return this.index++ , void this.tokens.push({
//               index: t,
//               text: i,
//               constant: !0,
//               value: n
//             });
//             n += o
//           }
//           this.index++
//         }
//         this.throwError("Unterminated quote", t)
//       }
//     };
//     var Kr = function (e, t) {
//       this.lexer = e, this.options = t
//     };
//     Kr.Program = "Program", Kr.ExpressionStatement = "ExpressionStatement", Kr.AssignmentExpression = "AssignmentExpression", Kr.ConditionalExpression = "ConditionalExpression", Kr.LogicalExpression = "LogicalExpression", Kr.BinaryExpression = "BinaryExpression", Kr.UnaryExpression = "UnaryExpression", Kr.CallExpression = "CallExpression", Kr.MemberExpression = "MemberExpression", Kr.Identifier = "Identifier", Kr.Literal = "Literal", Kr.ArrayExpression = "ArrayExpression", Kr.Property = "Property", Kr.ObjectExpression = "ObjectExpression", Kr.ThisExpression = "ThisExpression", Kr.LocalsExpression = "LocalsExpression", Kr.NGValueParameter = "NGValueParameter", Kr.prototype = {
//       ast: function (e) {
//         this.text = e, this.tokens = this.lexer.lex(e);
//         var t = this.program();
//         return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
//       },
//       program: function () {
//         for (var e = []; ;)
//           if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";")) return {
//             type: Kr.Program,
//             body: e
//           }
//       },
//       expressionStatement: function () {
//         return {
//           type: Kr.ExpressionStatement,
//           expression: this.filterChain()
//         }
//       },
//       filterChain: function () {
//         for (var e = this.expression(); this.expect("|");) e = this.filter(e);
//         return e
//       },
//       expression: function () {
//         return this.assignment()
//       },
//       assignment: function () {
//         var e = this.ternary();
//         return this.expect("=") && (e = {
//           type: Kr.AssignmentExpression,
//           left: e,
//           right: this.assignment(),
//           operator: "="
//         }), e
//       },
//       ternary: function () {
//         var e, t, n = this.logicalOR();
//         return this.expect("?") && (e = this.expression(), this.consume(":")) ? (t = this.expression(), {
//           type: Kr.ConditionalExpression,
//           test: n,
//           alternate: e,
//           consequent: t
//         }) : n
//       },
//       logicalOR: function () {
//         for (var e = this.logicalAND(); this.expect("||");) e = {
//           type: Kr.LogicalExpression,
//           operator: "||",
//           left: e,
//           right: this.logicalAND()
//         };
//         return e
//       },
//       logicalAND: function () {
//         for (var e = this.equality(); this.expect("&&");) e = {
//           type: Kr.LogicalExpression,
//           operator: "&&",
//           left: e,
//           right: this.equality()
//         };
//         return e
//       },
//       equality: function () {
//         for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");) t = {
//           type: Kr.BinaryExpression,
//           operator: e.text,
//           left: t,
//           right: this.relational()
//         };
//         return t
//       },
//       relational: function () {
//         for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");) t = {
//           type: Kr.BinaryExpression,
//           operator: e.text,
//           left: t,
//           right: this.additive()
//         };
//         return t
//       },
//       additive: function () {
//         for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = {
//           type: Kr.BinaryExpression,
//           operator: e.text,
//           left: t,
//           right: this.multiplicative()
//         };
//         return t
//       },
//       multiplicative: function () {
//         for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = {
//           type: Kr.BinaryExpression,
//           operator: e.text,
//           left: t,
//           right: this.unary()
//         };
//         return t
//       },
//       unary: function () {
//         var e;
//         return (e = this.expect("+", "-", "!")) ? {
//           type: Kr.UnaryExpression,
//           operator: e.text,
//           prefix: !0,
//           argument: this.unary()
//         } : this.primary()
//       },
//       primary: function () {
//         var e;
//         this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? e = z(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? e = {
//           type: Kr.Literal,
//           value: this.options.literals[this.consume().text]
//         } : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
//         for (var t; t = this.expect("(", "[", ".");) "(" === t.text ? (e = {
//           type: Kr.CallExpression,
//           callee: e,
//           arguments: this.parseArguments()
//         }, this.consume(")")) : "[" === t.text ? (e = {
//           type: Kr.MemberExpression,
//           object: e,
//           property: this.expression(),
//           computed: !0
//         }, this.consume("]")) : "." === t.text ? e = {
//           type: Kr.MemberExpression,
//           object: e,
//           property: this.identifier(),
//           computed: !1
//         } : this.throwError("IMPOSSIBLE");
//         return e
//       },
//       filter: function (e) {
//         for (var t = [e], n = {
//           type: Kr.CallExpression,
//           callee: this.identifier(),
//           arguments: t,
//           filter: !0
//         }; this.expect(":");) t.push(this.expression());
//         return n
//       },
//       parseArguments: function () {
//         var e = [];
//         if (")" !== this.peekToken().text)
//           do {
//             e.push(this.filterChain())
//           } while (this.expect(","));
//         return e
//       },
//       identifier: function () {
//         var e = this.consume();
//         return e.identifier || this.throwError("is not a valid identifier", e), {
//           type: Kr.Identifier,
//           name: e.text
//         }
//       },
//       constant: function () {
//         return {
//           type: Kr.Literal,
//           value: this.consume().value
//         }
//       },
//       arrayDeclaration: function () {
//         var e = [];
//         if ("]" !== this.peekToken().text)
//           do {
//             if (this.peek("]")) break;
//             e.push(this.expression())
//           } while (this.expect(","));
//         return this.consume("]"), {
//           type: Kr.ArrayExpression,
//           elements: e
//         }
//       },
//       object: function () {
//         var e, t = [];
//         if ("}" !== this.peekToken().text)
//           do {
//             if (this.peek("}")) break;
//             e = {
//               type: Kr.Property,
//               kind: "init"
//             }, this.peek().constant ? (e.key = this.constant(), e.computed = !1, this.consume(":"), e.value = this.expression()) : this.peek().identifier ? (e.key = this.identifier(), e.computed = !1, this.peek(":") ? (this.consume(":"), e.value = this.expression()) : e.value = e.key) : this.peek("[") ? (this.consume("["), e.key = this.expression(), this.consume("]"), e.computed = !0, this.consume(":"), e.value = this.expression()) : this.throwError("invalid key", this.peek()), t.push(e)
//           } while (this.expect(","));
//         return this.consume("}"), {
//           type: Kr.ObjectExpression,
//           properties: t
//         }
//       },
//       throwError: function (e, t) {
//         throw Br("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
//       },
//       consume: function (e) {
//         if (0 === this.tokens.length) throw Br("ueoe", "Unexpected end of expression: {0}", this.text);
//         var t = this.expect(e);
//         return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
//       },
//       peekToken: function () {
//         if (0 === this.tokens.length) throw Br("ueoe", "Unexpected end of expression: {0}", this.text);
//         return this.tokens[0]
//       },
//       peek: function (e, t, n, i) {
//         return this.peekAhead(0, e, t, n, i)
//       },
//       peekAhead: function (e, t, n, i, r) {
//         if (this.tokens.length > e) {
//           var o = this.tokens[e],
//             s = o.text;
//           if (s === t || s === n || s === i || s === r || !t && !n && !i && !r) return o
//         }
//         return !1
//       },
//       expect: function (e, t, n, i) {
//         var r = this.peek(e, t, n, i);
//         return !!r && (this.tokens.shift(), r)
//       },
//       selfReferential: {
//         this: {
//           type: Kr.ThisExpression
//         },
//         $locals: {
//           type: Kr.LocalsExpression
//         }
//       }
//     }, un.prototype = {
//       compile: function (e, t) {
//         var n = this,
//           r = this.astBuilder.ast(e);
//         this.state = {
//           nextId: 0,
//           filters: {},
//           expensiveChecks: t,
//           fn: {
//             vars: [],
//             body: [],
//             own: {}
//           },
//           assign: {
//             vars: [],
//             body: [],
//             own: {}
//           },
//           inputs: []
//         }, nn(r, n.$filter);
//         var o, s = "";
//         if (this.stage = "assign", o = sn(r)) {
//           this.state.computing = "assign";
//           var a = this.nextId();
//           this.recurse(o, a), this.return_(a), s = "fn.assign=" + this.generateFunction("assign", "s,v,l")
//         }
//         var l = rn(r.body);
//         n.stage = "inputs", i(l, function (e, t) {
//           var i = "fn" + t;
//           n.state[i] = {
//             vars: [],
//             body: [],
//             own: {}
//           }, n.state.computing = i;
//           var r = n.nextId();
//           n.recurse(e, r), n.return_(r), n.state.inputs.push(i), e.watchId = t
//         }), this.state.computing = "fn", this.stage = "main", this.recurse(r);
//         var u = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + s + this.watchFns() + "return fn;",
//           c = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", u)(this.$filter, Gt, Xt, Kt, Zt, Jt, Qt, en, e);
//         return this.state = this.stage = void 0, c.literal = an(r), c.constant = ln(r), c
//       },
//       USE: "use",
//       STRICT: "strict",
//       watchFns: function () {
//         var e = [],
//           t = this.state.inputs,
//           n = this;
//         return i(t, function (t) {
//           e.push("var " + t + "=" + n.generateFunction(t, "s"))
//         }), t.length && e.push("fn.inputs=[" + t.join(",") + "];"), e.join("")
//       },
//       generateFunction: function (e, t) {
//         return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
//       },
//       filterPrefix: function () {
//         var e = [],
//           t = this;
//         return i(this.state.filters, function (n, i) {
//           e.push(n + "=$filter(" + t.escape(i) + ")")
//         }), e.length ? "var " + e.join(",") + ";" : ""
//       },
//       varsPrefix: function (e) {
//         return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
//       },
//       body: function (e) {
//         return this.state[e].body.join("")
//       },
//       recurse: function (e, t, n, r, o, s) {
//         var a, l, u, c, d, f = this;
//         if (r = r || h, !s && y(e.watchId)) return t = t || this.nextId(), void this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, n, r, o, !0));
//         switch (e.type) {
//           case Kr.Program:
//             i(e.body, function (t, n) {
//               f.recurse(t.expression, void 0, void 0, function (e) {
//                 l = e
//               }), n !== e.body.length - 1 ? f.current().body.push(l, ";") : f.return_(l)
//             });
//             break;
//           case Kr.Literal:
//             c = this.escape(e.value), this.assign(t, c), r(c);
//             break;
//           case Kr.UnaryExpression:
//             this.recurse(e.argument, void 0, void 0, function (e) {
//               l = e
//             }), c = e.operator + "(" + this.ifDefined(l, 0) + ")", this.assign(t, c), r(c);
//             break;
//           case Kr.BinaryExpression:
//             this.recurse(e.left, void 0, void 0, function (e) {
//               a = e
//             }), this.recurse(e.right, void 0, void 0, function (e) {
//               l = e
//             }), c = "+" === e.operator ? this.plus(a, l) : "-" === e.operator ? this.ifDefined(a, 0) + e.operator + this.ifDefined(l, 0) : "(" + a + ")" + e.operator + "(" + l + ")", this.assign(t, c), r(c);
//             break;
//           case Kr.LogicalExpression:
//             t = t || this.nextId(), f.recurse(e.left, t), f.if_("&&" === e.operator ? t : f.not(t), f.lazyRecurse(e.right, t)), r(t);
//             break;
//           case Kr.ConditionalExpression:
//             t = t || this.nextId(), f.recurse(e.test, t), f.if_(t, f.lazyRecurse(e.alternate, t), f.lazyRecurse(e.consequent, t)), r(t);
//             break;
//           case Kr.Identifier:
//             t = t || this.nextId(), n && (n.context = "inputs" === f.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"), n.computed = !1, n.name = e.name), Gt(e.name), f.if_("inputs" === f.stage || f.not(f.getHasOwnProperty("l", e.name)), function () {
//               f.if_("inputs" === f.stage || "s", function () {
//                 o && 1 !== o && f.if_(f.not(f.nonComputedMember("s", e.name)), f.lazyAssign(f.nonComputedMember("s", e.name), "{}")), f.assign(t, f.nonComputedMember("s", e.name))
//               })
//             }, t && f.lazyAssign(t, f.nonComputedMember("l", e.name))), (f.state.expensiveChecks || dn(e.name)) && f.addEnsureSafeObject(t), r(t);
//             break;
//           case Kr.MemberExpression:
//             a = n && (n.context = this.nextId()) || this.nextId(), t = t || this.nextId(), f.recurse(e.object, a, void 0, function () {
//               f.if_(f.notNull(a), function () {
//                 o && 1 !== o && f.addEnsureSafeAssignContext(a), e.computed ? (l = f.nextId(), f.recurse(e.property, l), f.getStringValue(l), f.addEnsureSafeMemberName(l), o && 1 !== o && f.if_(f.not(f.computedMember(a, l)), f.lazyAssign(f.computedMember(a, l), "{}")), c = f.ensureSafeObject(f.computedMember(a, l)), f.assign(t, c), n && (n.computed = !0, n.name = l)) : (Gt(e.property.name), o && 1 !== o && f.if_(f.not(f.nonComputedMember(a, e.property.name)), f.lazyAssign(f.nonComputedMember(a, e.property.name), "{}")), c = f.nonComputedMember(a, e.property.name), (f.state.expensiveChecks || dn(e.property.name)) && (c = f.ensureSafeObject(c)), f.assign(t, c), n && (n.computed = !1, n.name = e.property.name))
//               }, function () {
//                 f.assign(t, "undefined")
//               }), r(t)
//             }, !!o);
//             break;
//           case Kr.CallExpression:
//             t = t || this.nextId(), e.filter ? (l = f.filter(e.callee.name), u = [], i(e.arguments, function (e) {
//               var t = f.nextId();
//               f.recurse(e, t), u.push(t)
//             }), c = l + "(" + u.join(",") + ")", f.assign(t, c), r(t)) : (l = f.nextId(), a = {}, u = [], f.recurse(e.callee, l, a, function () {
//               f.if_(f.notNull(l), function () {
//                 f.addEnsureSafeFunction(l), i(e.arguments, function (e) {
//                   f.recurse(e, f.nextId(), void 0, function (e) {
//                     u.push(f.ensureSafeObject(e))
//                   })
//                 }), a.name ? (f.state.expensiveChecks || f.addEnsureSafeObject(a.context), c = f.member(a.context, a.name, a.computed) + "(" + u.join(",") + ")") : c = l + "(" + u.join(",") + ")", c = f.ensureSafeObject(c), f.assign(t, c)
//               }, function () {
//                 f.assign(t, "undefined")
//               }), r(t)
//             }));
//             break;
//           case Kr.AssignmentExpression:
//             if (l = this.nextId(), a = {}, !on(e.left)) throw Br("lval", "Trying to assign a value to a non l-value");
//             this.recurse(e.left, void 0, a, function () {
//               f.if_(f.notNull(a.context), function () {
//                 f.recurse(e.right, l), f.addEnsureSafeObject(f.member(a.context, a.name, a.computed)), f.addEnsureSafeAssignContext(a.context), c = f.member(a.context, a.name, a.computed) + e.operator + l, f.assign(t, c), r(t || c)
//               })
//             }, 1);
//             break;
//           case Kr.ArrayExpression:
//             u = [], i(e.elements, function (e) {
//               f.recurse(e, f.nextId(), void 0, function (e) {
//                 u.push(e)
//               })
//             }), c = "[" + u.join(",") + "]", this.assign(t, c), r(c);
//             break;
//           case Kr.ObjectExpression:
//             u = [], d = !1, i(e.properties, function (e) {
//               e.computed && (d = !0)
//             }), d ? (t = t || this.nextId(), this.assign(t, "{}"), i(e.properties, function (e) {
//               e.computed ? (a = f.nextId(), f.recurse(e.key, a)) : a = e.key.type === Kr.Identifier ? e.key.name : "" + e.key.value, l = f.nextId(), f.recurse(e.value, l), f.assign(f.member(t, a, e.computed), l)
//             })) : (i(e.properties, function (t) {
//               f.recurse(t.value, e.constant ? void 0 : f.nextId(), void 0, function (e) {
//                 u.push(f.escape(t.key.type === Kr.Identifier ? t.key.name : "" + t.key.value) + ":" + e)
//               })
//             }), c = "{" + u.join(",") + "}", this.assign(t, c)), r(t || c);
//             break;
//           case Kr.ThisExpression:
//             this.assign(t, "s"), r("s");
//             break;
//           case Kr.LocalsExpression:
//             this.assign(t, "l"), r("l");
//             break;
//           case Kr.NGValueParameter:
//             this.assign(t, "v"), r("v")
//         }
//       },
//       getHasOwnProperty: function (e, t) {
//         var n = e + "." + t,
//           i = this.current().own;
//         return i.hasOwnProperty(n) || (i[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), i[n]
//       },
//       assign: function (e, t) {
//         if (e) return this.current().body.push(e, "=", t, ";"), e
//       },
//       filter: function (e) {
//         return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e]
//       },
//       ifDefined: function (e, t) {
//         return "ifDefined(" + e + "," + this.escape(t) + ")"
//       },
//       plus: function (e, t) {
//         return "plus(" + e + "," + t + ")"
//       },
//       return_: function (e) {
//         this.current().body.push("return ", e, ";")
//       },
//       if_: function (e, t, n) {
//         if (!0 === e) t();
//         else {
//           var i = this.current().body;
//           i.push("if(", e, "){"), t(), i.push("}"), n && (i.push("else{"), n(), i.push("}"))
//         }
//       },
//       not: function (e) {
//         return "!(" + e + ")"
//       },
//       notNull: function (e) {
//         return e + "!=null"
//       },
//       nonComputedMember: function (e, t) {
//         var n = /[^$_a-zA-Z0-9]/g;
//         return /[$_a-zA-Z][$_a-zA-Z0-9]*/.test(t) ? e + "." + t : e + '["' + t.replace(n, this.stringEscapeFn) + '"]'
//       },
//       computedMember: function (e, t) {
//         return e + "[" + t + "]"
//       },
//       member: function (e, t, n) {
//         return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
//       },
//       addEnsureSafeObject: function (e) {
//         this.current().body.push(this.ensureSafeObject(e), ";")
//       },
//       addEnsureSafeMemberName: function (e) {
//         this.current().body.push(this.ensureSafeMemberName(e), ";")
//       },
//       addEnsureSafeFunction: function (e) {
//         this.current().body.push(this.ensureSafeFunction(e), ";")
//       },
//       addEnsureSafeAssignContext: function (e) {
//         this.current().body.push(this.ensureSafeAssignContext(e), ";")
//       },
//       ensureSafeObject: function (e) {
//         return "ensureSafeObject(" + e + ",text)"
//       },
//       ensureSafeMemberName: function (e) {
//         return "ensureSafeMemberName(" + e + ",text)"
//       },
//       ensureSafeFunction: function (e) {
//         return "ensureSafeFunction(" + e + ",text)"
//       },
//       getStringValue: function (e) {
//         this.assign(e, "getStringValue(" + e + ")")
//       },
//       ensureSafeAssignContext: function (e) {
//         return "ensureSafeAssignContext(" + e + ",text)"
//       },
//       lazyRecurse: function (e, t, n, i, r, o) {
//         var s = this;
//         return function () {
//           s.recurse(e, t, n, i, r, o)
//         }
//       },
//       lazyAssign: function (e, t) {
//         var n = this;
//         return function () {
//           n.assign(e, t)
//         }
//       },
//       stringEscapeRegex: /[^ a-zA-Z0-9]/g,
//       stringEscapeFn: function (e) {
//         return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
//       },
//       escape: function (e) {
//         if (w(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
//         if (x(e)) return e.toString();
//         if (!0 === e) return "true";
//         if (!1 === e) return "false";
//         if (null === e) return "null";
//         if (void 0 === e) return "undefined";
//         throw Br("esc", "IMPOSSIBLE")
//       },
//       nextId: function (e, t) {
//         var n = "v" + this.state.nextId++;
//         return e || this.current().vars.push(n + (t ? "=" + t : "")), n
//       },
//       current: function () {
//         return this.state[this.state.computing]
//       }
//     }, cn.prototype = {
//       compile: function (e, t) {
//         var n = this,
//           r = this.astBuilder.ast(e);
//         this.expression = e, this.expensiveChecks = t, nn(r, n.$filter);
//         var o, s;
//         (o = sn(r)) && (s = this.recurse(o));
//         var a, l = rn(r.body);
//         l && (a = [], i(l, function (e, t) {
//           var i = n.recurse(e);
//           e.input = i, a.push(i), e.watchId = t
//         }));
//         var u = [];
//         i(r.body, function (e) {
//           u.push(n.recurse(e.expression))
//         });
//         var c = 0 === r.body.length ? h : 1 === r.body.length ? u[0] : function (e, t) {
//           var n;
//           return i(u, function (i) {
//             n = i(e, t)
//           }), n
//         };
//         return s && (c.assign = function (e, t, n) {
//           return s(e, n, t)
//         }), a && (c.inputs = a), c.literal = an(r), c.constant = ln(r), c
//       },
//       recurse: function (e, t, n) {
//         var r, o, s, a = this;
//         if (e.input) return this.inputs(e.input, e.watchId);
//         switch (e.type) {
//           case Kr.Literal:
//             return this.value(e.value, t);
//           case Kr.UnaryExpression:
//             return o = this.recurse(e.argument), this["unary" + e.operator](o, t);
//           case Kr.BinaryExpression:
//           case Kr.LogicalExpression:
//             return r = this.recurse(e.left), o = this.recurse(e.right), this["binary" + e.operator](r, o, t);
//           case Kr.ConditionalExpression:
//             return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
//           case Kr.Identifier:
//             return Gt(e.name, a.expression), a.identifier(e.name, a.expensiveChecks || dn(e.name), t, n, a.expression);
//           case Kr.MemberExpression:
//             return r = this.recurse(e.object, !1, !!n), e.computed || (Gt(e.property.name, a.expression), o = e.property.name), e.computed && (o = this.recurse(e.property)), e.computed ? this.computedMember(r, o, t, n, a.expression) : this.nonComputedMember(r, o, a.expensiveChecks, t, n, a.expression);
//           case Kr.CallExpression:
//             return s = [], i(e.arguments, function (e) {
//               s.push(a.recurse(e))
//             }), e.filter && (o = this.$filter(e.callee.name)), e.filter || (o = this.recurse(e.callee, !0)), e.filter ? function (e, n, i, r) {
//               for (var a = [], l = 0; l < s.length; ++l) a.push(s[l](e, n, i, r));
//               var u = o.apply(void 0, a, r);
//               return t ? {
//                 context: void 0,
//                 name: void 0,
//                 value: u
//               } : u
//             } : function (e, n, i, r) {
//               var l, u = o(e, n, i, r);
//               if (null != u.value) {
//                 Xt(u.context, a.expression), Kt(u.value, a.expression);
//                 for (var c = [], d = 0; d < s.length; ++d) c.push(Xt(s[d](e, n, i, r), a.expression));
//                 l = Xt(u.value.apply(u.context, c), a.expression)
//               }
//               return t ? {
//                 value: l
//               } : l
//             };
//           case Kr.AssignmentExpression:
//             return r = this.recurse(e.left, !0, 1), o = this.recurse(e.right),
//               function (e, n, i, s) {
//                 var l = r(e, n, i, s),
//                   u = o(e, n, i, s);
//                 return Xt(l.value, a.expression), Jt(l.context), l.context[l.name] = u, t ? {
//                   value: u
//                 } : u
//               };
//           case Kr.ArrayExpression:
//             return s = [], i(e.elements, function (e) {
//               s.push(a.recurse(e))
//             }),
//               function (e, n, i, r) {
//                 for (var o = [], a = 0; a < s.length; ++a) o.push(s[a](e, n, i, r));
//                 return t ? {
//                   value: o
//                 } : o
//               };
//           case Kr.ObjectExpression:
//             return s = [], i(e.properties, function (e) {
//               e.computed ? s.push({
//                 key: a.recurse(e.key),
//                 computed: !0,
//                 value: a.recurse(e.value)
//               }) : s.push({
//                 key: e.key.type === Kr.Identifier ? e.key.name : "" + e.key.value,
//                 computed: !1,
//                 value: a.recurse(e.value)
//               })
//             }),
//               function (e, n, i, r) {
//                 for (var o = {}, a = 0; a < s.length; ++a) s[a].computed ? o[s[a].key(e, n, i, r)] = s[a].value(e, n, i, r) : o[s[a].key] = s[a].value(e, n, i, r);
//                 return t ? {
//                   value: o
//                 } : o
//               };
//           case Kr.ThisExpression:
//             return function (e) {
//               return t ? {
//                 value: e
//               } : e
//             };
//           case Kr.LocalsExpression:
//             return function (e, n) {
//               return t ? {
//                 value: n
//               } : n
//             };
//           case Kr.NGValueParameter:
//             return function (e, n, i) {
//               return t ? {
//                 value: i
//               } : i
//             }
//         }
//       },
//       "unary+": function (e, t) {
//         return function (n, i, r, o) {
//           var s = e(n, i, r, o);
//           return s = y(s) ? +s : 0, t ? {
//             value: s
//           } : s
//         }
//       },
//       "unary-": function (e, t) {
//         return function (n, i, r, o) {
//           var s = e(n, i, r, o);
//           return s = y(s) ? -s : 0, t ? {
//             value: s
//           } : s
//         }
//       },
//       "unary!": function (e, t) {
//         return function (n, i, r, o) {
//           var s = !e(n, i, r, o);
//           return t ? {
//             value: s
//           } : s
//         }
//       },
//       "binary+": function (e, t, n) {
//         return function (i, r, o, s) {
//           var a = en(e(i, r, o, s), t(i, r, o, s));
//           return n ? {
//             value: a
//           } : a
//         }
//       },
//       "binary-": function (e, t, n) {
//         return function (i, r, o, s) {
//           var a = e(i, r, o, s),
//             l = t(i, r, o, s),
//             u = (y(a) ? a : 0) - (y(l) ? l : 0);
//           return n ? {
//             value: u
//           } : u
//         }
//       },
//       "binary*": function (e, t, n) {
//         return function (i, r, o, s) {
//           var a = e(i, r, o, s) * t(i, r, o, s);
//           return n ? {
//             value: a
//           } : a
//         }
//       },
//       "binary/": function (e, t, n) {
//         return function (i, r, o, s) {
//           var a = e(i, r, o, s) / t(i, r, o, s);
//           return n ? {
//             value: a
//           } : a
//         }
//       },
//       "binary%": function (e, t, n) {
//         return function (i, r, o, s) {
//           var a = e(i, r, o, s) % t(i, r, o, s);
//           return n ? {
//             value: a
//           } : a
//         }
//       },
//       "binary===": function (e, t, n) {
//         return function (i, r, o, s) {
//           var a = e(i, r, o, s) === t(i, r, o, s);
//           return n ? {
//             value: a
//           } : a
//         }
//       },
//       "binary!==": function (e, t, n) {
//         return function (i, r, o, s) {
//           var a = e(i, r, o, s) !== t(i, r, o, s);
//           return n ? {
//             value: a
//           } : a
//         }
//       },
//       "binary==": function (e, t, n) {
//         return function (i, r, o, s) {
//           var a = e(i, r, o, s) == t(i, r, o, s);
//           return n ? {
//             value: a
//           } : a
//         }
//       },
//       "binary!=": function (e, t, n) {
//         return function (i, r, o, s) {
//           var a = e(i, r, o, s) != t(i, r, o, s);
//           return n ? {
//             value: a
//           } : a
//         }
//       },
//       "binary<": function (e, t, n) {
//         return function (i, r, o, s) {
//           var a = e(i, r, o, s) < t(i, r, o, s);
//           return n ? {
//             value: a
//           } : a
//         }
//       },
//       "binary>": function (e, t, n) {
//         return function (i, r, o, s) {
//           var a = e(i, r, o, s) > t(i, r, o, s);
//           return n ? {
//             value: a
//           } : a
//         }
//       },
//       "binary<=": function (e, t, n) {
//         return function (i, r, o, s) {
//           var a = e(i, r, o, s) <= t(i, r, o, s);
//           return n ? {
//             value: a
//           } : a
//         }
//       },
//       "binary>=": function (e, t, n) {
//         return function (i, r, o, s) {
//           var a = e(i, r, o, s) >= t(i, r, o, s);
//           return n ? {
//             value: a
//           } : a
//         }
//       },
//       "binary&&": function (e, t, n) {
//         return function (i, r, o, s) {
//           var a = e(i, r, o, s) && t(i, r, o, s);
//           return n ? {
//             value: a
//           } : a
//         }
//       },
//       "binary||": function (e, t, n) {
//         return function (i, r, o, s) {
//           var a = e(i, r, o, s) || t(i, r, o, s);
//           return n ? {
//             value: a
//           } : a
//         }
//       },
//       "ternary?:": function (e, t, n, i) {
//         return function (r, o, s, a) {
//           var l = e(r, o, s, a) ? t(r, o, s, a) : n(r, o, s, a);
//           return i ? {
//             value: l
//           } : l
//         }
//       },
//       value: function (e, t) {
//         return function () {
//           return t ? {
//             context: void 0,
//             name: void 0,
//             value: e
//           } : e
//         }
//       },
//       identifier: function (e, t, n, i, r) {
//         return function (o, s, a, l) {
//           var u = s && e in s ? s : o;
//           i && 1 !== i && u && !u[e] && (u[e] = {});
//           var c = u ? u[e] : void 0;
//           return t && Xt(c, r), n ? {
//             context: u,
//             name: e,
//             value: c
//           } : c
//         }
//       },
//       computedMember: function (e, t, n, i, r) {
//         return function (o, s, a, l) {
//           var u, c, d = e(o, s, a, l);
//           return null != d && (Gt(u = Zt(u = t(o, s, a, l)), r), i && 1 !== i && (Jt(d), d && !d[u] && (d[u] = {})), Xt(c = d[u], r)), n ? {
//             context: d,
//             name: u,
//             value: c
//           } : c
//         }
//       },
//       nonComputedMember: function (e, t, n, i, r, o) {
//         return function (s, a, l, u) {
//           var c = e(s, a, l, u);
//           r && 1 !== r && (Jt(c), c && !c[t] && (c[t] = {}));
//           var d = null != c ? c[t] : void 0;
//           return (n || dn(t)) && Xt(d, o), i ? {
//             context: c,
//             name: t,
//             value: d
//           } : d
//         }
//       },
//       inputs: function (e, t) {
//         return function (n, i, r, o) {
//           return o ? o[t] : e(n, i, r)
//         }
//       }
//     };
//     var Jr = function (e, t, n) {
//       this.lexer = e, this.$filter = t, this.options = n, this.ast = new Kr(e, n), this.astCompiler = n.csp ? new cn(this.ast, t) : new un(this.ast, t)
//     };
//     Jr.prototype = {
//       constructor: Jr,
//       parse: function (e) {
//         return this.astCompiler.compile(e, this.options.expensiveChecks)
//       }
//     };
//     var Qr = Object.prototype.valueOf,
//       eo = t("$sce"),
//       to = {
//         HTML: "html",
//         CSS: "css",
//         URL: "url",
//         RESOURCE_URL: "resourceUrl",
//         JS: "js"
//       },
//       no = t("$compile"),
//       io = e.document.createElement("a"),
//       ro = jn(e.location.href);
//     An.$inject = ["$document"], On.$inject = ["$provide"];
//     var oo = 22,
//       so = ".",
//       ao = "0";
//     Rn.$inject = ["$locale"], zn.$inject = ["$locale"];
//     var lo = {
//       yyyy: Bn("FullYear", 4, 0, !1, !0),
//       yy: Bn("FullYear", 2, 0, !0, !0),
//       y: Bn("FullYear", 1, 0, !1, !0),
//       MMMM: qn("Month"),
//       MMM: qn("Month", !0),
//       MM: Bn("Month", 2, 1),
//       M: Bn("Month", 1, 1),
//       LLLL: qn("Month", !1, !0),
//       dd: Bn("Date", 2),
//       d: Bn("Date", 1),
//       HH: Bn("Hours", 2),
//       H: Bn("Hours", 1),
//       hh: Bn("Hours", 2, -12),
//       h: Bn("Hours", 1, -12),
//       mm: Bn("Minutes", 2),
//       m: Bn("Minutes", 1),
//       ss: Bn("Seconds", 2),
//       s: Bn("Seconds", 1),
//       sss: Bn("Milliseconds", 3),
//       EEEE: qn("Day"),
//       EEE: qn("Day", !0),
//       a: function (e, t) {
//         return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
//       },
//       Z: function (e, t, n) {
//         var i = -1 * n,
//           r = i >= 0 ? "+" : "";
//         return r += Un(Math[i > 0 ? "floor" : "ceil"](i / 60), 2) + Un(Math.abs(i % 60), 2)
//       },
//       ww: Gn(2),
//       w: Gn(1),
//       G: Zn,
//       GG: Zn,
//       GGG: Zn,
//       GGGG: function (e, t) {
//         return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
//       }
//     },
//       uo = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
//       co = /^\-?\d+$/;
//     Xn.$inject = ["$locale"];
//     var fo = m(gi),
//       ho = m(vi);
//     ei.$inject = ["$parse"];
//     var po = m({
//       restrict: "E",
//       compile: function (e, t) {
//         if (!t.href && !t.xlinkHref) return function (e, t) {
//           if ("a" === t[0].nodeName.toLowerCase()) {
//             var n = "[object SVGAnimatedString]" === ki.call(t.prop("href")) ? "xlink:href" : "href";
//             t.on("click", function (e) {
//               t.attr(n) || e.preventDefault()
//             })
//           }
//         }
//       }
//     }),
//       mo = {};
//     i(ar, function (e, t) {
//       function n(e, n, r) {
//         e.$watch(r[i], function (e) {
//           r.$set(t, !!e)
//         })
//       }
//       if ("multiple" != e) {
//         var i = ct("ng-" + t),
//           r = n;
//         "checked" === e && (r = function (e, t, r) {
//           r.ngModel !== r[i] && n(e, 0, r)
//         }), mo[i] = function () {
//           return {
//             restrict: "A",
//             priority: 100,
//             link: r
//           }
//         }
//       }
//     }), i(ur, function (e, t) {
//       mo[t] = function () {
//         return {
//           priority: 100,
//           link: function (e, n, i) {
//             if ("ngPattern" === t && "/" == i.ngPattern.charAt(0)) {
//               var r = i.ngPattern.match(hi);
//               if (r) return void i.$set("ngPattern", new RegExp(r[1], r[2]))
//             }
//             e.$watch(i[t], function (e) {
//               i.$set(t, e)
//             })
//           }
//         }
//       }
//     }), i(["src", "srcset", "href"], function (e) {
//       var t = ct("ng-" + e);
//       mo[t] = function () {
//         return {
//           priority: 99,
//           link: function (n, i, r) {
//             var o = e,
//               s = e;
//             "href" === e && "[object SVGAnimatedString]" === ki.call(i.prop("href")) && (s = "xlinkHref", r.$attr[s] = "xlink:href", o = null), r.$observe(t, function (t) {
//               t ? (r.$set(s, t), yi && o && i.prop(o, r[s])) : "href" === e && r.$set(s, null)
//             })
//           }
//         }
//       }
//     });
//     var go = {
//       $addControl: h,
//       $$renameControl: function (e, t) {
//         e.$name = t
//       },
//       $removeControl: h,
//       $setValidity: h,
//       $setDirty: h,
//       $setPristine: h,
//       $setSubmitted: h
//     },
//       vo = "ng-submitted";
//     ni.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
//     var yo = function (e) {
//       return ["$timeout", "$parse", function (t, n) {
//         function i(e) {
//           return "" === e ? n('this[""]').assign : n(e).assign || h
//         }
//         return {
//           name: "form",
//           restrict: e ? "EAC" : "E",
//           require: ["form", "^^?form"],
//           controller: ni,
//           compile: function (n, r) {
//             n.addClass(es).addClass(Jo);
//             var o = r.name ? "name" : !(!e || !r.ngForm) && "ngForm";
//             return {
//               pre: function (e, n, r, s) {
//                 var a = s[0];
//                 if (!("action" in r)) {
//                   var l = function (t) {
//                     e.$apply(function () {
//                       a.$commitViewValue(), a.$setSubmitted()
//                     }), t.preventDefault()
//                   };
//                   Gi(n[0], "submit", l), n.on("$destroy", function () {
//                     t(function () {
//                       Zi(n[0], "submit", l)
//                     }, 0, !1)
//                   })
//                 } (s[1] || a.$$parentForm).$addControl(a);
//                 var c = o ? i(a.$name) : h;
//                 o && (c(e, a), r.$observe(o, function (t) {
//                   a.$name !== t && (c(e, void 0), a.$$parentForm.$$renameControl(a, t), (c = i(a.$name))(e, a))
//                 })), n.on("$destroy", function () {
//                   a.$$parentForm.$removeControl(a), c(e, void 0), u(a, go)
//                 })
//               }
//             }
//           }
//         }
//       }]
//     },
//       bo = yo(),
//       $o = yo(!0),
//       wo = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
//       xo = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
//       So = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
//       Co = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
//       ko = /^(\d{4,})-(\d{2})-(\d{2})$/,
//       To = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
//       Eo = /^(\d{4,})-W(\d\d)$/,
//       jo = /^(\d{4,})-(\d\d)$/,
//       Mo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
//       _o = "keydown wheel mousedown",
//       Ao = he();
//     i("date,datetime-local,month,time,week".split(","), function (e) {
//       Ao[e] = !0
//     });
//     var Do = {
//       text: function (e, t, n, i, r, o) {
//         ri(e, t, n, i, r, o), ii(i)
//       },
//       date: si("date", ko, oi(ko, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
//       "datetime-local": si("datetimelocal", To, oi(To, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
//       time: si("time", Mo, oi(Mo, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
//       week: si("week", Eo, function (e, t) {
//         if (S(e)) return e;
//         if (w(e)) {
//           Eo.lastIndex = 0;
//           var n = Eo.exec(e);
//           if (n) {
//             var i = +n[1],
//               r = +n[2],
//               o = 0,
//               s = 0,
//               a = 0,
//               l = 0,
//               u = Wn(i),
//               c = 7 * (r - 1);
//             return t && (o = t.getHours(), s = t.getMinutes(), a = t.getSeconds(), l = t.getMilliseconds()), new Date(i, 0, u.getDate() + c, o, s, a, l)
//           }
//         }
//         return NaN
//       }, "yyyy-Www"),
//       month: si("month", jo, oi(jo, ["yyyy", "MM"]), "yyyy-MM"),
//       number: function (e, t, n, i, r, o) {
//         if (ai(e, t, n, i), ri(e, t, n, i, r, o), i.$$parserName = "number", i.$parsers.push(function (e) {
//           return i.$isEmpty(e) ? null : Co.test(e) ? parseFloat(e) : void 0
//         }), i.$formatters.push(function (e) {
//           if (!i.$isEmpty(e)) {
//             if (!x(e)) throw is("numfmt", "Expected `{0}` to be a number", e);
//             e = e.toString()
//           }
//           return e
//         }), y(n.min) || n.ngMin) {
//           var s;
//           i.$validators.min = function (e) {
//             return i.$isEmpty(e) || v(s) || e >= s
//           }, n.$observe("min", function (e) {
//             y(e) && !x(e) && (e = parseFloat(e)), s = x(e) && !isNaN(e) ? e : void 0, i.$validate()
//           })
//         }
//         if (y(n.max) || n.ngMax) {
//           var a;
//           i.$validators.max = function (e) {
//             return i.$isEmpty(e) || v(a) || e <= a
//           }, n.$observe("max", function (e) {
//             y(e) && !x(e) && (e = parseFloat(e)), a = x(e) && !isNaN(e) ? e : void 0, i.$validate()
//           })
//         }
//       },
//       url: function (e, t, n, i, r, o) {
//         ri(e, t, n, i, r, o), ii(i), i.$$parserName = "url", i.$validators.url = function (e, t) {
//           var n = e || t;
//           return i.$isEmpty(n) || xo.test(n)
//         }
//       },
//       email: function (e, t, n, i, r, o) {
//         ri(e, t, n, i, r, o), ii(i), i.$$parserName = "email", i.$validators.email = function (e, t) {
//           var n = e || t;
//           return i.$isEmpty(n) || So.test(n)
//         }
//       },
//       radio: function (e, t, n, i) {
//         v(n.name) && t.attr("name", s());
//         t.on("click", function (e) {
//           t[0].checked && i.$setViewValue(n.value, e && e.type)
//         }), i.$render = function () {
//           var e = n.value;
//           t[0].checked = e == i.$viewValue
//         }, n.$observe("value", i.$render)
//       },
//       checkbox: function (e, t, n, i, r, o, s, a) {
//         var l = li(a, e, "ngTrueValue", n.ngTrueValue, !0),
//           u = li(a, e, "ngFalseValue", n.ngFalseValue, !1);
//         t.on("click", function (e) {
//           i.$setViewValue(t[0].checked, e && e.type)
//         }), i.$render = function () {
//           t[0].checked = i.$viewValue
//         }, i.$isEmpty = function (e) {
//           return !1 === e
//         }, i.$formatters.push(function (e) {
//           return L(e, l)
//         }), i.$parsers.push(function (e) {
//           return e ? l : u
//         })
//       },
//       hidden: h,
//       button: h,
//       submit: h,
//       reset: h,
//       file: h
//     },
//       Oo = ["$browser", "$sniffer", "$filter", "$parse", function (e, t, n, i) {
//         return {
//           restrict: "E",
//           require: ["?ngModel"],
//           link: {
//             pre: function (r, o, s, a) {
//               a[0] && (Do[gi(s.type)] || Do.text)(r, o, s, a[0], t, e, n, i)
//             }
//           }
//         }
//       }],
//       Po = /^(true|false|\d+)$/,
//       No = function () {
//         return {
//           restrict: "A",
//           priority: 100,
//           compile: function (e, t) {
//             return Po.test(t.ngValue) ? function (e, t, n) {
//               n.$set("value", e.$eval(n.ngValue))
//             } : function (e, t, n) {
//               e.$watch(n.ngValue, function (e) {
//                 n.$set("value", e)
//               })
//             }
//           }
//         }
//       },
//       Fo = ["$compile", function (e) {
//         return {
//           restrict: "AC",
//           compile: function (t) {
//             return e.$$addBindingClass(t),
//               function (t, n, i) {
//                 e.$$addBindingInfo(n, i.ngBind), n = n[0], t.$watch(i.ngBind, function (e) {
//                   n.textContent = v(e) ? "" : e
//                 })
//               }
//           }
//         }
//       }],
//       Io = ["$interpolate", "$compile", function (e, t) {
//         return {
//           compile: function (n) {
//             return t.$$addBindingClass(n),
//               function (n, i, r) {
//                 var o = e(i.attr(r.$attr.ngBindTemplate));
//                 t.$$addBindingInfo(i, o.expressions), i = i[0], r.$observe("ngBindTemplate", function (e) {
//                   i.textContent = v(e) ? "" : e
//                 })
//               }
//           }
//         }
//       }],
//       Ro = ["$sce", "$parse", "$compile", function (e, t, n) {
//         return {
//           restrict: "A",
//           compile: function (i, r) {
//             var o = t(r.ngBindHtml),
//               s = t(r.ngBindHtml, function (t) {
//                 return e.valueOf(t)
//               });
//             return n.$$addBindingClass(i),
//               function (t, i, r) {
//                 n.$$addBindingInfo(i, r.ngBindHtml), t.$watch(s, function () {
//                   var n = o(t);
//                   i.html(e.getTrustedHtml(n) || "")
//                 })
//               }
//           }
//         }
//       }],
//       zo = m({
//         restrict: "A",
//         require: "ngModel",
//         link: function (e, t, n, i) {
//           i.$viewChangeListeners.push(function () {
//             e.$eval(n.ngChange)
//           })
//         }
//       }),
//       Lo = ui("", !0),
//       Ho = ui("Odd", 0),
//       Vo = ui("Even", 1),
//       Uo = ti({
//         compile: function (e, t) {
//           t.$set("ngCloak", void 0), e.removeClass("ng-cloak")
//         }
//       }),
//       Bo = [function () {
//         return {
//           restrict: "A",
//           scope: !0,
//           controller: "@",
//           priority: 500
//         }
//       }],
//       qo = {},
//       Wo = {
//         blur: !0,
//         focus: !0
//       };
//     i("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (e) {
//       var t = ct("ng-" + e);
//       qo[t] = ["$parse", "$rootScope", function (n, i) {
//         return {
//           restrict: "A",
//           compile: function (r, o) {
//             var s = n(o[t], null, !0);
//             return function (t, n) {
//               n.on(e, function (n) {
//                 var r = function () {
//                   s(t, {
//                     $event: n
//                   })
//                 };
//                 Wo[e] && i.$$phase ? t.$evalAsync(r) : t.$apply(r)
//               })
//             }
//           }
//         }
//       }]
//     });
//     var Yo = ["$animate", "$compile", function (e, t) {
//       return {
//         multiElement: !0,
//         transclude: "element",
//         priority: 600,
//         terminal: !0,
//         restrict: "A",
//         $$tlb: !0,
//         link: function (n, i, r, o, s) {
//           var a, l, u;
//           n.$watch(r.ngIf, function (n) {
//             n ? l || s(function (n, o) {
//               l = o, n[n.length++] = t.$$createComment("end ngIf", r.ngIf), a = {
//                 clone: n
//               }, e.enter(n, i.parent(), i)
//             }) : (u && (u.remove(), u = null), l && (l.$destroy(), l = null), a && (u = fe(a.clone), e.leave(u).then(function () {
//               u = null
//             }), a = null))
//           })
//         }
//       }
//     }],
//       Go = ["$templateRequest", "$anchorScroll", "$animate", function (e, t, n) {
//         return {
//           restrict: "ECA",
//           priority: 400,
//           terminal: !0,
//           transclude: "element",
//           controller: ji.noop,
//           compile: function (i, r) {
//             var o = r.ngInclude || r.src,
//               s = r.onload || "",
//               a = r.autoscroll;
//             return function (i, r, l, u, c) {
//               var d, f, h, p = 0,
//                 m = function () {
//                   f && (f.remove(), f = null), d && (d.$destroy(), d = null), h && (n.leave(h).then(function () {
//                     f = null
//                   }), f = h, h = null)
//                 };
//               i.$watch(o, function (o) {
//                 var l = function () {
//                   !y(a) || a && !i.$eval(a) || t()
//                 },
//                   f = ++p;
//                 o ? (e(o, !0).then(function (e) {
//                   if (!i.$$destroyed && f === p) {
//                     var t = i.$new();
//                     u.template = e;
//                     var a = c(t, function (e) {
//                       m(), n.enter(e, null, r).then(l)
//                     });
//                     h = a, (d = t).$emit("$includeContentLoaded", o), i.$eval(s)
//                   }
//                 }, function () {
//                   i.$$destroyed || f === p && (m(), i.$emit("$includeContentError", o))
//                 }), i.$emit("$includeContentRequested", o)) : (m(), u.template = null)
//               })
//             }
//           }
//         }
//       }],
//       Zo = ["$compile", function (t) {
//         return {
//           restrict: "ECA",
//           priority: -400,
//           require: "ngInclude",
//           link: function (n, i, r, o) {
//             if (ki.call(i[0]).match(/SVG/)) return i.empty(), void t(xe(o.template, e.document).childNodes)(n, function (e) {
//               i.append(e)
//             }, {
//                 futureParentElement: i
//               });
//             i.html(o.template), t(i.contents())(n)
//           }
//         }
//       }],
//       Xo = ti({
//         priority: 450,
//         compile: function () {
//           return {
//             pre: function (e, t, n) {
//               e.$eval(n.ngInit)
//             }
//           }
//         }
//       }),
//       Ko = function () {
//         return {
//           restrict: "A",
//           priority: 100,
//           require: "ngModel",
//           link: function (e, t, n, r) {
//             var o = t.attr(n.$attr.ngList) || ", ",
//               s = "false" !== n.ngTrim,
//               a = s ? Di(o) : o;
//             r.$parsers.push(function (e) {
//               if (!v(e)) {
//                 var t = [];
//                 return e && i(e.split(a), function (e) {
//                   e && t.push(s ? Di(e) : e)
//                 }), t
//               }
//             }), r.$formatters.push(function (e) {
//               if (_i(e)) return e.join(o)
//             }), r.$isEmpty = function (e) {
//               return !e || !e.length
//             }
//           }
//         }
//       },
//       Jo = "ng-valid",
//       Qo = "ng-invalid",
//       es = "ng-pristine",
//       ts = "ng-dirty",
//       ns = "ng-pending",
//       is = t("ngModel"),
//       rs = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (e, t, n, r, o, s, a, l, u, c) {
//         this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = c(n.name || "", !1)(e), this.$$parentForm = go;
//         var d, f = o(n.ngModel),
//           p = f.assign,
//           m = f,
//           g = p,
//           b = null,
//           $ = this;
//         this.$$setOptions = function (e) {
//           if ($.$options = e, e && e.getterSetter) {
//             var t = o(n.ngModel + "()"),
//               i = o(n.ngModel + "($$$p)");
//             m = function (e) {
//               var n = f(e);
//               return C(n) && (n = t(e)), n
//             }, g = function (e, t) {
//               C(f(e)) ? i(e, {
//                 $$$p: t
//               }) : p(e, t)
//             }
//           } else if (!f.assign) throw is("nonassign", "Expression '{0}' is non-assignable. Element: {1}", n.ngModel, X(r))
//         }, this.$render = h, this.$isEmpty = function (e) {
//           return v(e) || "" === e || null === e || e !== e
//         }, this.$$updateEmptyClasses = function (e) {
//           $.$isEmpty(e) ? (s.removeClass(r, "ng-not-empty"), s.addClass(r, "ng-empty")) : (s.removeClass(r, "ng-empty"), s.addClass(r, "ng-not-empty"))
//         };
//         var w = 0;
//         ci({
//           ctrl: this,
//           $element: r,
//           set: function (e, t) {
//             e[t] = !0
//           },
//           unset: function (e, t) {
//             delete e[t]
//           },
//           $animate: s
//         }), this.$setPristine = function () {
//           $.$dirty = !1, $.$pristine = !0, s.removeClass(r, ts), s.addClass(r, es)
//         }, this.$setDirty = function () {
//           $.$dirty = !0, $.$pristine = !1, s.removeClass(r, es), s.addClass(r, ts), $.$$parentForm.$setDirty()
//         }, this.$setUntouched = function () {
//           $.$touched = !1, $.$untouched = !0, s.setClass(r, "ng-untouched", "ng-touched")
//         }, this.$setTouched = function () {
//           $.$touched = !0, $.$untouched = !1, s.setClass(r, "ng-touched", "ng-untouched")
//         }, this.$rollbackViewValue = function () {
//           a.cancel(b), $.$viewValue = $.$$lastCommittedViewValue, $.$render()
//         }, this.$validate = function () {
//           if (!x($.$modelValue) || !isNaN($.$modelValue)) {
//             var e = $.$$lastCommittedViewValue,
//               t = $.$$rawModelValue,
//               n = $.$valid,
//               i = $.$modelValue,
//               r = $.$options && $.$options.allowInvalid;
//             $.$$runValidators(t, e, function (e) {
//               r || n === e || ($.$modelValue = e ? t : void 0, $.$modelValue !== i && $.$$writeModelToScope())
//             })
//           }
//         }, this.$$runValidators = function (e, t, n) {
//           function r(e, t) {
//             s === w && $.$setValidity(e, t)
//           }

//           function o(e) {
//             s === w && n(e)
//           }
//           var s = ++w;
//           ! function () {
//             var e = $.$$parserName || "parse";
//             return v(d) ? (r(e, null), !0) : (d || (i($.$validators, function (e, t) {
//               r(t, null)
//             }), i($.$asyncValidators, function (e, t) {
//               r(t, null)
//             })), r(e, d), d)
//           }() ? o(!1) : function () {
//             var n = !0;
//             return i($.$validators, function (i, o) {
//               var s = i(e, t);
//               n = n && s, r(o, s)
//             }), !!n || (i($.$asyncValidators, function (e, t) {
//               r(t, null)
//             }), !1)
//           }() ? function () {
//             var n = [],
//               s = !0;
//             i($.$asyncValidators, function (i, o) {
//               var a = i(e, t);
//               if (!D(a)) throw is("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", a);
//               r(o, void 0), n.push(a.then(function () {
//                 r(o, !0)
//               }, function () {
//                 s = !1, r(o, !1)
//               }))
//             }), n.length ? u.all(n).then(function () {
//               o(s)
//             }, h) : o(!0)
//           }() : o(!1)
//         }, this.$commitViewValue = function () {
//           var e = $.$viewValue;
//           a.cancel(b), ($.$$lastCommittedViewValue !== e || "" === e && $.$$hasNativeValidators) && ($.$$updateEmptyClasses(e), $.$$lastCommittedViewValue = e, $.$pristine && this.$setDirty(), this.$$parseAndValidate())
//         }, this.$$parseAndValidate = function () {
//           function t() {
//             $.$modelValue !== r && $.$$writeModelToScope()
//           }
//           var n = $.$$lastCommittedViewValue;
//           if (d = !v(n) || void 0)
//             for (var i = 0; i < $.$parsers.length; i++)
//               if (n = $.$parsers[i](n), v(n)) {
//                 d = !1;
//                 break
//               }
//           x($.$modelValue) && isNaN($.$modelValue) && ($.$modelValue = m(e));
//           var r = $.$modelValue,
//             o = $.$options && $.$options.allowInvalid;
//           $.$$rawModelValue = n, o && ($.$modelValue = n, t()), $.$$runValidators(n, $.$$lastCommittedViewValue, function (e) {
//             o || ($.$modelValue = e ? n : void 0, t())
//           })
//         }, this.$$writeModelToScope = function () {
//           g(e, $.$modelValue), i($.$viewChangeListeners, function (e) {
//             try {
//               e()
//             } catch (e) {
//               t(e)
//             }
//           })
//         }, this.$setViewValue = function (e, t) {
//           $.$viewValue = e, $.$options && !$.$options.updateOnDefault || $.$$debounceViewValueCommit(t)
//         }, this.$$debounceViewValueCommit = function (t) {
//           var n, i = 0,
//             r = $.$options;
//           r && y(r.debounce) && (x(n = r.debounce) ? i = n : x(n[t]) ? i = n[t] : x(n.default) && (i = n.default)), a.cancel(b), i ? b = a(function () {
//             $.$commitViewValue()
//           }, i) : l.$$phase ? $.$commitViewValue() : e.$apply(function () {
//             $.$commitViewValue()
//           })
//         }, e.$watch(function () {
//           var t = m(e);
//           if (t !== $.$modelValue && ($.$modelValue === $.$modelValue || t === t)) {
//             $.$modelValue = $.$$rawModelValue = t, d = void 0;
//             for (var n = $.$formatters, i = n.length, r = t; i--;) r = n[i](r);
//             $.$viewValue !== r && ($.$$updateEmptyClasses(r), $.$viewValue = $.$$lastCommittedViewValue = r, $.$render(), $.$$runValidators(t, r, h))
//           }
//           return t
//         })
//       }],
//       os = ["$rootScope", function (e) {
//         return {
//           restrict: "A",
//           require: ["ngModel", "^?form", "^?ngModelOptions"],
//           controller: rs,
//           priority: 1,
//           compile: function (t) {
//             return t.addClass(es).addClass("ng-untouched").addClass(Jo), {
//               pre: function (e, t, n, i) {
//                 var r = i[0],
//                   o = i[1] || r.$$parentForm;
//                 r.$$setOptions(i[2] && i[2].$options), o.$addControl(r), n.$observe("name", function (e) {
//                   r.$name !== e && r.$$parentForm.$$renameControl(r, e)
//                 }), e.$on("$destroy", function () {
//                   r.$$parentForm.$removeControl(r)
//                 })
//               },
//               post: function (t, n, i, r) {
//                 var o = r[0];
//                 o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function (e) {
//                   o.$$debounceViewValueCommit(e && e.type)
//                 }), n.on("blur", function () {
//                   o.$touched || (e.$$phase ? t.$evalAsync(o.$setTouched) : t.$apply(o.$setTouched))
//                 })
//               }
//             }
//           }
//         }
//       }],
//       ss = /(\s+|^)default(\s+|$)/,
//       as = function () {
//         return {
//           restrict: "A",
//           controller: ["$scope", "$attrs", function (e, t) {
//             var n = this;
//             this.$options = z(e.$eval(t.ngModelOptions)), y(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Di(this.$options.updateOn.replace(ss, function () {
//               return n.$options.updateOnDefault = !0, " "
//             }))) : this.$options.updateOnDefault = !0
//           }]
//         }
//       },
//       ls = ti({
//         terminal: !0,
//         priority: 1e3
//       }),
//       us = t("ngOptions"),
//       cs = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
//       ds = ["$compile", "$document", "$parse", function (t, r, o) {
//         function s(e, t, i) {
//           function r(e, t, n, i, r) {
//             this.selectValue = e, this.viewValue = t, this.label = n, this.group = i, this.disabled = r
//           }

//           function s(e) {
//             var t;
//             if (!u && n(e)) t = e;
//             else {
//               t = [];
//               for (var i in e) e.hasOwnProperty(i) && "$" !== i.charAt(0) && t.push(i)
//             }
//             return t
//           }
//           var a = e.match(cs);
//           if (!a) throw us("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, X(t));
//           var l = a[5] || a[7],
//             u = a[6],
//             c = / as /.test(a[0]) && a[1],
//             d = a[9],
//             f = o(a[2] ? a[1] : l),
//             h = c && o(c) || f,
//             p = d && o(d),
//             m = d ? function (e, t) {
//               return p(i, t)
//             } : function (e) {
//               return Ye(e)
//             },
//             g = function (e, t) {
//               return m(e, x(e, t))
//             },
//             v = o(a[2] || a[1]),
//             y = o(a[3] || ""),
//             b = o(a[4] || ""),
//             $ = o(a[8]),
//             w = {},
//             x = u ? function (e, t) {
//               return w[u] = t, w[l] = e, w
//             } : function (e) {
//               return w[l] = e, w
//             };
//           return {
//             trackBy: d,
//             getTrackByValue: g,
//             getWatchables: o($, function (e) {
//               for (var t = [], n = s(e = e || []), r = n.length, o = 0; o < r; o++) {
//                 var l = e === n ? o : n[o],
//                   u = e[l],
//                   c = x(u, l),
//                   d = m(u, c);
//                 if (t.push(d), a[2] || a[1]) {
//                   var f = v(i, c);
//                   t.push(f)
//                 }
//                 if (a[4]) {
//                   var h = b(i, c);
//                   t.push(h)
//                 }
//               }
//               return t
//             }),
//             getOptions: function () {
//               for (var e = [], t = {}, n = $(i) || [], o = s(n), a = o.length, l = 0; l < a; l++) {
//                 var u = n === o ? l : o[l],
//                   c = x(n[u], u),
//                   f = h(i, c),
//                   p = m(f, c),
//                   w = new r(p, f, v(i, c), y(i, c), b(i, c));
//                 e.push(w), t[p] = w
//               }
//               return {
//                 items: e,
//                 selectValueMap: t,
//                 getOptionFromViewValue: function (e) {
//                   return t[g(e)]
//                 },
//                 getViewValueFromOption: function (e) {
//                   return d ? ji.copy(e.viewValue) : e.viewValue
//                 }
//               }
//             }
//           }
//         }
//         var a = e.document.createElement("option"),
//           l = e.document.createElement("optgroup");
//         return {
//           restrict: "A",
//           terminal: !0,
//           require: ["select", "ngModel"],
//           link: {
//             pre: function (e, t, n, i) {
//               i[0].registerOption = h
//             },
//             post: function (e, n, o, u) {
//               function c(e, t) {
//                 var n = a.cloneNode(!1);
//                 t.appendChild(n), d(e, n)
//               }

//               function d(e, t) {
//                 e.element = t, t.disabled = e.disabled, e.label !== t.label && (t.label = e.label, t.textContent = e.label), e.value !== t.value && (t.value = e.selectValue)
//               }

//               function f() {
//                 var e = S && p.readValue();
//                 if (S)
//                   for (var t = S.items.length - 1; t >= 0; t--) {
//                     var i = S.items[t];
//                     ze(y(i.group) ? i.element.parentNode : i.element)
//                   }
//                 S = C.getOptions();
//                 var r = {};
//                 if (w && n.prepend(h), S.items.forEach(function (e) {
//                   var t;
//                   y(e.group) ? ((t = r[e.group]) || (t = l.cloneNode(!1), k.appendChild(t), t.label = null === e.group ? "null" : e.group, r[e.group] = t), c(e, t)) : c(e, k)
//                 }), n[0].appendChild(k), m.$render(), !m.$isEmpty(e)) {
//                   var o = p.readValue();
//                   (C.trackBy || g ? L(e, o) : e === o) || (m.$setViewValue(o), m.$render())
//                 }
//               }
//               for (var h, p = u[0], m = u[1], g = o.multiple, v = 0, b = n.children(), $ = b.length; v < $; v++)
//                 if ("" === b[v].value) {
//                   h = b.eq(v);
//                   break
//                 }
//               var w = !!h,
//                 x = bi(a.cloneNode(!1));
//               x.val("?");
//               var S, C = s(o.ngOptions, n, e),
//                 k = r[0].createDocumentFragment(),
//                 T = function () {
//                   w || n.prepend(h), n.val(""), h.prop("selected", !0), h.attr("selected", !0)
//                 },
//                 E = function () {
//                   w || h.remove()
//                 },
//                 j = function () {
//                   n.prepend(x), n.val("?"), x.prop("selected", !0), x.attr("selected", !0)
//                 },
//                 M = function () {
//                   x.remove()
//                 };
//               g ? (m.$isEmpty = function (e) {
//                 return !e || 0 === e.length
//               }, p.writeValue = function (e) {
//                 S.items.forEach(function (e) {
//                   e.element.selected = !1
//                 }), e && e.forEach(function (e) {
//                   var t = S.getOptionFromViewValue(e);
//                   t && (t.element.selected = !0)
//                 })
//               }, p.readValue = function () {
//                 var e = [];
//                 return i(n.val() || [], function (t) {
//                   var n = S.selectValueMap[t];
//                   n && !n.disabled && e.push(S.getViewValueFromOption(n))
//                 }), e
//               }, C.trackBy && e.$watchCollection(function () {
//                 if (_i(m.$viewValue)) return m.$viewValue.map(function (e) {
//                   return C.getTrackByValue(e)
//                 })
//               }, function () {
//                 m.$render()
//               })) : (p.writeValue = function (e) {
//                 var t = S.getOptionFromViewValue(e);
//                 t ? (n[0].value !== t.selectValue && (M(), E(), n[0].value = t.selectValue, t.element.selected = !0), t.element.setAttribute("selected", "selected")) : null === e || w ? (M(), T()) : (E(), j())
//               }, p.readValue = function () {
//                 var e = S.selectValueMap[n.val()];
//                 return e && !e.disabled ? (E(), M(), S.getViewValueFromOption(e)) : null
//               }, C.trackBy && e.$watch(function () {
//                 return C.getTrackByValue(m.$viewValue)
//               }, function () {
//                 m.$render()
//               })), w ? (h.remove(), t(h)(e), h.removeClass("ng-scope")) : h = bi(a.cloneNode(!1)), n.empty(), f(), e.$watchCollection(C.getWatchables, f)
//             }
//           }
//         }
//       }],
//       fs = ["$locale", "$interpolate", "$log", function (e, t, n) {
//         var r = /{}/g,
//           o = /^when(Minus)?(.+)$/;
//         return {
//           link: function (s, a, l) {
//             function u(e) {
//               a.text(e || "")
//             }
//             var c, d = l.count,
//               f = l.$attr.when && a.attr(l.$attr.when),
//               p = l.offset || 0,
//               m = s.$eval(f) || {},
//               g = {},
//               y = t.startSymbol(),
//               b = t.endSymbol(),
//               $ = y + d + "-" + p + b,
//               w = ji.noop;
//             i(l, function (e, t) {
//               var n = o.exec(t);
//               if (n) {
//                 var i = (n[1] ? "-" : "") + gi(n[2]);
//                 m[i] = a.attr(l.$attr[t])
//               }
//             }), i(m, function (e, n) {
//               g[n] = t(e.replace(r, $))
//             }), s.$watch(d, function (t) {
//               var i = parseFloat(t),
//                 r = isNaN(i);
//               if (r || i in m || (i = e.pluralCat(i - p)), i !== c && !(r && x(c) && isNaN(c))) {
//                 w();
//                 var o = g[i];
//                 v(o) ? (null != t && n.debug("ngPluralize: no rule defined for '" + i + "' in " + f), w = h, u()) : w = s.$watch(o, u), c = i
//               }
//             })
//           }
//         }
//       }],
//       hs = ["$parse", "$animate", "$compile", function (e, r, o) {
//         var s = t("ngRepeat"),
//           a = function (e, t, n, i, r, o, s) {
//             e[n] = i, r && (e[r] = o), e.$index = t, e.$first = 0 === t, e.$last = t === s - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 == (1 & t))
//           },
//           l = function (e) {
//             return e.clone[0]
//           },
//           u = function (e) {
//             return e.clone[e.clone.length - 1]
//           };
//         return {
//           restrict: "A",
//           multiElement: !0,
//           transclude: "element",
//           priority: 1e3,
//           terminal: !0,
//           $$tlb: !0,
//           compile: function (t, c) {
//             var d = c.ngRepeat,
//               f = o.$$createComment("end ngRepeat", d),
//               h = d.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
//             if (!h) throw s("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", d);
//             var p = h[1],
//               m = h[2],
//               g = h[3],
//               v = h[4];
//             if (!(h = p.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/))) throw s("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", p);
//             var y = h[3] || h[1],
//               b = h[2];
//             if (g && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(g) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(g))) throw s("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", g);
//             var $, w, x, S, C = {
//               $id: Ye
//             };
//             return v ? $ = e(v) : (x = function (e, t) {
//               return Ye(t)
//             }, S = function (e) {
//               return e
//             }),
//               function (e, t, o, c, h) {
//                 $ && (w = function (t, n, i) {
//                   return b && (C[b] = t), C[y] = n, C.$index = i, $(e, C)
//                 });
//                 var p = he();
//                 e.$watchCollection(m, function (o) {
//                   var c, m, v, $, C, k, T, E, j, M, _, A, D = t[0],
//                     O = he();
//                   if (g && (e[g] = o), n(o)) j = o, E = w || x;
//                   else {
//                     E = w || S, j = [];
//                     for (var P in o) mi.call(o, P) && "$" !== P.charAt(0) && j.push(P)
//                   }
//                   for ($ = j.length, _ = new Array($), c = 0; c < $; c++)
//                     if (C = o === j ? c : j[c], k = o[C], T = E(C, k, c), p[T]) M = p[T], delete p[T], O[T] = M, _[c] = M;
//                     else {
//                       if (O[T]) throw i(_, function (e) {
//                         e && e.scope && (p[e.id] = e)
//                       }), s("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", d, T, k);
//                       _[c] = {
//                         id: T,
//                         scope: void 0,
//                         clone: void 0
//                       }, O[T] = !0
//                     }
//                   for (var N in p) {
//                     if (M = p[N], A = fe(M.clone), r.leave(A), A[0].parentNode)
//                       for (c = 0, m = A.length; c < m; c++) A[c].$$NG_REMOVED = !0;
//                     M.scope.$destroy()
//                   }
//                   for (c = 0; c < $; c++)
//                     if (C = o === j ? c : j[c], k = o[C], (M = _[c]).scope) {
//                       v = D;
//                       do {
//                         v = v.nextSibling
//                       } while (v && v.$$NG_REMOVED);
//                       l(M) != v && r.move(fe(M.clone), null, D), D = u(M), a(M.scope, c, y, k, b, C, $)
//                     } else h(function (e, t) {
//                       M.scope = t;
//                       var n = f.cloneNode(!1);
//                       e[e.length++] = n, r.enter(e, null, D), D = n, M.clone = e, O[M.id] = M, a(M.scope, c, y, k, b, C, $)
//                     });
//                   p = O
//                 })
//               }
//           }
//         }
//       }],
//       ps = ["$animate", function (e) {
//         return {
//           restrict: "A",
//           multiElement: !0,
//           link: function (t, n, i) {
//             t.$watch(i.ngShow, function (t) {
//               e[t ? "removeClass" : "addClass"](n, "ng-hide", {
//                 tempClasses: "ng-hide-animate"
//               })
//             })
//           }
//         }
//       }],
//       ms = ["$animate", function (e) {
//         return {
//           restrict: "A",
//           multiElement: !0,
//           link: function (t, n, i) {
//             t.$watch(i.ngHide, function (t) {
//               e[t ? "addClass" : "removeClass"](n, "ng-hide", {
//                 tempClasses: "ng-hide-animate"
//               })
//             })
//           }
//         }
//       }],
//       gs = ti(function (e, t, n) {
//         e.$watch(n.ngStyle, function (e, n) {
//           n && e !== n && i(n, function (e, n) {
//             t.css(n, "")
//           }), e && t.css(e)
//         }, !0)
//       }),
//       vs = ["$animate", "$compile", function (e, t) {
//         return {
//           require: "ngSwitch",
//           controller: ["$scope", function () {
//             this.cases = {}
//           }],
//           link: function (n, r, o, s) {
//             var a = o.ngSwitch || o.on,
//               l = [],
//               u = [],
//               c = [],
//               d = [],
//               f = function (e, t) {
//                 return function () {
//                   e.splice(t, 1)
//                 }
//               };
//             n.$watch(a, function (n) {
//               var r, o;
//               for (r = 0, o = c.length; r < o; ++r) e.cancel(c[r]);
//               for (c.length = 0, r = 0, o = d.length; r < o; ++r) {
//                 var a = fe(u[r].clone);
//                 d[r].$destroy(), (c[r] = e.leave(a)).then(f(c, r))
//               }
//               u.length = 0, d.length = 0, (l = s.cases["!" + n] || s.cases["?"]) && i(l, function (n) {
//                 n.transclude(function (i, r) {
//                   d.push(r);
//                   var o = n.element;
//                   i[i.length++] = t.$$createComment("end ngSwitchWhen");
//                   var s = {
//                     clone: i
//                   };
//                   u.push(s), e.enter(i, o.parent(), o)
//                 })
//               })
//             })
//           }
//         }
//       }],
//       ys = ti({
//         transclude: "element",
//         priority: 1200,
//         require: "^ngSwitch",
//         multiElement: !0,
//         link: function (e, t, n, i, r) {
//           i.cases["!" + n.ngSwitchWhen] = i.cases["!" + n.ngSwitchWhen] || [], i.cases["!" + n.ngSwitchWhen].push({
//             transclude: r,
//             element: t
//           })
//         }
//       }),
//       bs = ti({
//         transclude: "element",
//         priority: 1200,
//         require: "^ngSwitch",
//         multiElement: !0,
//         link: function (e, t, n, i, r) {
//           i.cases["?"] = i.cases["?"] || [], i.cases["?"].push({
//             transclude: r,
//             element: t
//           })
//         }
//       }),
//       $s = t("ngTransclude"),
//       ws = ["$compile", function (e) {
//         return {
//           restrict: "EAC",
//           terminal: !0,
//           compile: function (t) {
//             var n = e(t.contents());
//             return t.empty(),
//               function (e, t, i, r, o) {
//                 function s() {
//                   n(e, function (e) {
//                     t.append(e)
//                   })
//                 }
//                 if (!o) throw $s("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", X(t));
//                 i.ngTransclude === i.$attr.ngTransclude && (i.ngTransclude = "");
//                 var a = i.ngTransclude || i.ngTranscludeSlot;
//                 o(function (e, n) {
//                   e.length ? t.append(e) : (s(), n.$destroy())
//                 }, null, a), a && !o.isSlotFilled(a) && s()
//               }
//           }
//         }
//       }],
//       xs = ["$templateCache", function (e) {
//         return {
//           restrict: "E",
//           terminal: !0,
//           compile: function (t, n) {
//             if ("text/ng-template" == n.type) {
//               var i = n.id,
//                 r = t[0].text;
//               e.put(i, r)
//             }
//           }
//         }
//       }],
//       Ss = {
//         $setViewValue: h,
//         $render: h
//       },
//       Cs = ["$element", "$scope", function (t, n) {
//         var i = this,
//           r = new Ge;
//         i.ngModelCtrl = Ss, i.unknownOption = bi(e.document.createElement("option")), i.renderUnknownOption = function (e) {
//           var n = "? " + Ye(e) + " ?";
//           i.unknownOption.val(n), t.prepend(i.unknownOption), t.val(n)
//         }, n.$on("$destroy", function () {
//           i.renderUnknownOption = h
//         }), i.removeUnknownOption = function () {
//           i.unknownOption.parent() && i.unknownOption.remove()
//         }, i.readValue = function () {
//           return i.removeUnknownOption(), t.val()
//         }, i.writeValue = function (e) {
//           i.hasOption(e) ? (i.removeUnknownOption(), t.val(e), "" === e && i.emptyOption.prop("selected", !0)) : null == e && i.emptyOption ? (i.removeUnknownOption(), t.val("")) : i.renderUnknownOption(e)
//         }, i.addOption = function (e, t) {
//           if (t[0].nodeType !== Vi) {
//             ce(e, '"option value"'), "" === e && (i.emptyOption = t);
//             var n = r.get(e) || 0;
//             r.put(e, n + 1), i.ngModelCtrl.$render(), fi(t)
//           }
//         }, i.removeOption = function (e) {
//           var t = r.get(e);
//           t && (1 === t ? (r.remove(e), "" === e && (i.emptyOption = void 0)) : r.put(e, t - 1))
//         }, i.hasOption = function (e) {
//           return !!r.get(e)
//         }, i.registerOption = function (e, t, n, r, o) {
//           if (r) {
//             var s;
//             n.$observe("value", function (e) {
//               y(s) && i.removeOption(s), s = e, i.addOption(e, t)
//             })
//           } else o ? e.$watch(o, function (e, r) {
//             n.$set("value", e), r !== e && i.removeOption(r), i.addOption(e, t)
//           }) : i.addOption(n.value, t);
//           t.on("$destroy", function () {
//             i.removeOption(n.value), i.ngModelCtrl.$render()
//           })
//         }
//       }],
//       ks = function () {
//         return {
//           restrict: "E",
//           require: ["select", "?ngModel"],
//           controller: Cs,
//           priority: 1,
//           link: {
//             pre: function (e, t, n, r) {
//               var o = r[1];
//               if (o) {
//                 var s = r[0];
//                 if (s.ngModelCtrl = o, t.on("change", function () {
//                   e.$apply(function () {
//                     o.$setViewValue(s.readValue())
//                   })
//                 }), n.multiple) {
//                   s.readValue = function () {
//                     var e = [];
//                     return i(t.find("option"), function (t) {
//                       t.selected && e.push(t.value)
//                     }), e
//                   }, s.writeValue = function (e) {
//                     var n = new Ge(e);
//                     i(t.find("option"), function (e) {
//                       e.selected = y(n.get(e.value))
//                     })
//                   };
//                   var a, l = NaN;
//                   e.$watch(function () {
//                     l !== o.$viewValue || L(a, o.$viewValue) || (a = me(o.$viewValue), o.$render()), l = o.$viewValue
//                   }), o.$isEmpty = function (e) {
//                     return !e || 0 === e.length
//                   }
//                 }
//               }
//             },
//             post: function (e, t, n, i) {
//               var r = i[1];
//               if (r) {
//                 var o = i[0];
//                 r.$render = function () {
//                   o.writeValue(r.$viewValue)
//                 }
//               }
//             }
//           }
//         }
//       },
//       Ts = ["$interpolate", function (e) {
//         return {
//           restrict: "E",
//           priority: 100,
//           compile: function (t, n) {
//             if (y(n.value)) var i = e(n.value, !0);
//             else {
//               var r = e(t.text(), !0);
//               r || n.$set("value", t.text())
//             }
//             return function (e, t, n) {
//               var o = t.parent(),
//                 s = o.data("$selectController") || o.parent().data("$selectController");
//               s && s.registerOption(e, t, n, i, r)
//             }
//           }
//         }
//       }],
//       Es = m({
//         restrict: "E",
//         terminal: !1
//       }),
//       js = function () {
//         return {
//           restrict: "A",
//           require: "?ngModel",
//           link: function (e, t, n, i) {
//             i && (n.required = !0, i.$validators.required = function (e, t) {
//               return !n.required || !i.$isEmpty(t)
//             }, n.$observe("required", function () {
//               i.$validate()
//             }))
//           }
//         }
//       },
//       Ms = function () {
//         return {
//           restrict: "A",
//           require: "?ngModel",
//           link: function (e, n, i, r) {
//             if (r) {
//               var o, s = i.ngPattern || i.pattern;
//               i.$observe("pattern", function (e) {
//                 if (w(e) && e.length > 0 && (e = new RegExp("^" + e + "$")), e && !e.test) throw t("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, e, X(n));
//                 o = e || void 0, r.$validate()
//               }), r.$validators.pattern = function (e, t) {
//                 return r.$isEmpty(t) || v(o) || o.test(t)
//               }
//             }
//           }
//         }
//       },
//       _s = function () {
//         return {
//           restrict: "A",
//           require: "?ngModel",
//           link: function (e, t, n, i) {
//             if (i) {
//               var r = -1;
//               n.$observe("maxlength", function (e) {
//                 var t = d(e);
//                 r = isNaN(t) ? -1 : t, i.$validate()
//               }), i.$validators.maxlength = function (e, t) {
//                 return r < 0 || i.$isEmpty(t) || t.length <= r
//               }
//             }
//           }
//         }
//       },
//       As = function () {
//         return {
//           restrict: "A",
//           require: "?ngModel",
//           link: function (e, t, n, i) {
//             if (i) {
//               var r = 0;
//               n.$observe("minlength", function (e) {
//                 r = d(e) || 0, i.$validate()
//               }), i.$validators.minlength = function (e, t) {
//                 return i.$isEmpty(t) || t.length >= r
//               }
//             }
//           }
//         }
//       };
//     e.angular.bootstrap ? e.console && console.log("WARNING: Tried to load angular more than once.") : (! function () {
//       var t;
//       if (!zi) {
//         var n = Ni();
//         ($i = v(n) ? e.jQuery : n ? e[n] : void 0) && $i.fn.on ? (bi = $i, u($i.fn, {
//           scope: sr.scope,
//           isolateScope: sr.isolateScope,
//           controller: sr.controller,
//           injector: sr.injector,
//           inheritedData: sr.inheritedData
//         }), t = $i.cleanData, $i.cleanData = function (e) {
//           for (var n, i, r = 0; null != (i = e[r]); r++)(n = $i._data(i, "events")) && n.$destroy && $i(i).triggerHandler("$destroy");
//           t(e)
//         }) : bi = ke, ji.element = bi, zi = !0
//       }
//     }(), function (n) {
//       u(n, {
//         bootstrap: re,
//         copy: z,
//         extend: u,
//         merge: c,
//         equals: L,
//         element: bi,
//         forEach: i,
//         injector: Je,
//         noop: h,
//         bind: U,
//         toJson: q,
//         fromJson: W,
//         identity: p,
//         isUndefined: v,
//         isDefined: y,
//         isString: w,
//         isFunction: C,
//         isObject: b,
//         isNumber: x,
//         isElement: N,
//         isArray: _i,
//         version: qi,
//         isDate: S,
//         lowercase: gi,
//         uppercase: vi,
//         callbacks: {
//           $$counter: 0
//         },
//         getTestability: se,
//         $$minErr: t,
//         $$csp: Pi,
//         reloadWithDebugInfo: oe
//       }), (wi = pe(e))("ng", ["ngLocale"], ["$provide", function (e) {
//         e.provider({
//           $$sanitizeUri: bn
//         }), e.provider("$compile", lt).directive({
//           a: po,
//           input: Oo,
//           textarea: Oo,
//           form: bo,
//           script: xs,
//           select: ks,
//           style: Es,
//           option: Ts,
//           ngBind: Fo,
//           ngBindHtml: Ro,
//           ngBindTemplate: Io,
//           ngClass: Lo,
//           ngClassEven: Vo,
//           ngClassOdd: Ho,
//           ngCloak: Uo,
//           ngController: Bo,
//           ngForm: $o,
//           ngHide: ms,
//           ngIf: Yo,
//           ngInclude: Go,
//           ngInit: Xo,
//           ngNonBindable: ls,
//           ngPluralize: fs,
//           ngRepeat: hs,
//           ngShow: ps,
//           ngStyle: gs,
//           ngSwitch: vs,
//           ngSwitchWhen: ys,
//           ngSwitchDefault: bs,
//           ngOptions: ds,
//           ngTransclude: ws,
//           ngModel: os,
//           ngList: Ko,
//           ngChange: zo,
//           pattern: Ms,
//           ngPattern: Ms,
//           required: js,
//           ngRequired: js,
//           minlength: As,
//           ngMinlength: As,
//           maxlength: _s,
//           ngMaxlength: _s,
//           ngValue: No,
//           ngModelOptions: as
//         }).directive({
//           ngInclude: Zo
//         }).directive(mo).directive(qo), e.provider({
//           $anchorScroll: Qe,
//           $animate: wr,
//           $animateCss: Cr,
//           $$animateJs: br,
//           $$animateQueue: $r,
//           $$AnimateRunner: Sr,
//           $$animateAsyncRun: xr,
//           $browser: ot,
//           $cacheFactory: st,
//           $controller: pt,
//           $document: mt,
//           $exceptionHandler: gt,
//           $filter: On,
//           $$forceReflow: _r,
//           $interpolate: _t,
//           $interval: At,
//           $http: Tt,
//           $httpParamSerializer: yt,
//           $httpParamSerializerJQLike: bt,
//           $httpBackend: jt,
//           $xhrFactory: Et,
//           $jsonpCallbacks: zr,
//           $location: Wt,
//           $log: Yt,
//           $parse: hn,
//           $rootScope: yn,
//           $q: pn,
//           $$q: mn,
//           $sce: Sn,
//           $sceDelegate: xn,
//           $sniffer: Cn,
//           $templateCache: at,
//           $templateRequest: kn,
//           $$testability: Tn,
//           $timeout: En,
//           $window: _n,
//           $$rAF: vn,
//           $$jqLite: We,
//           $$HashMap: cr,
//           $$cookieReader: Dn
//         })
//       }])
//     }(ji), ji.module("ngLocale", [], ["$provide", function (e) {
//       function t(e) {
//         var t = (e += "").indexOf(".");
//         return -1 == t ? 0 : e.length - t - 1
//       }

//       function n(e, n) {
//         var i = n;
//         void 0 === i && (i = Math.min(t(e), 3));
//         var r = Math.pow(10, i);
//         return {
//           v: i,
//           f: (e * r | 0) % r
//         }
//       }
//       var i = {
//         ZERO: "zero",
//         ONE: "one",
//         TWO: "two",
//         FEW: "few",
//         MANY: "many",
//         OTHER: "other"
//       };
//       e.value("$locale", {
//         DATETIME_FORMATS: {
//           AMPMS: ["AM", "PM"],
//           DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//           ERANAMES: ["Before Christ", "Anno Domini"],
//           ERAS: ["BC", "AD"],
//           FIRSTDAYOFWEEK: 6,
//           MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
//           SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//           SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//           STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
//           WEEKENDRANGE: [5, 6],
//           fullDate: "EEEE, MMMM d, y",
//           longDate: "MMMM d, y",
//           medium: "MMM d, y h:mm:ss a",
//           mediumDate: "MMM d, y",
//           mediumTime: "h:mm:ss a",
//           short: "M/d/yy h:mm a",
//           shortDate: "M/d/yy",
//           shortTime: "h:mm a"
//         },
//         NUMBER_FORMATS: {
//           CURRENCY_SYM: "$",
//           DECIMAL_SEP: ".",
//           GROUP_SEP: ",",
//           PATTERNS: [{
//             gSize: 3,
//             lgSize: 3,
//             maxFrac: 3,
//             minFrac: 0,
//             minInt: 1,
//             negPre: "-",
//             negSuf: "",
//             posPre: "",
//             posSuf: ""
//           }, {
//             gSize: 3,
//             lgSize: 3,
//             maxFrac: 2,
//             minFrac: 2,
//             minInt: 1,
//             negPre: "-¤",
//             negSuf: "",
//             posPre: "¤",
//             posSuf: ""
//           }]
//         },
//         id: "en-us",
//         localeID: "en_US",
//         pluralCat: function (e, t) {
//           var r = 0 | e,
//             o = n(e, t);
//           return 1 == r && 0 == o.v ? i.ONE : i.OTHER
//         }
//       })
//     }]), bi(e.document).ready(function () {
//       ie(e.document, re)
//     }))
//   }(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
//   function (e, t) {
//     "use strict";

//     function n(e, t, n) {
//       if (!e) throw le("areq", "Argument '{0}' is {1}", t || "?", n || "required");
//       return e
//     }

//     function i(e, t) {
//       return e || t ? e ? t ? (W(e) && (e = e.join(" ")), W(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
//     }

//     function r(e) {
//       var t = {};
//       return e && (e.to || e.from) && (t.to = e.to, t.from = e.from), t
//     }

//     function o(e, t, n) {
//       var i = "";
//       return e = W(e) ? e : e && K(e) && e.length ? e.split(/\s+/) : [], q(e, function (e, r) {
//         e && e.length > 0 && (i += r > 0 ? " " : "", i += n ? t + e : e + t)
//       }), i
//     }

//     function s(e, t) {
//       var n = e.indexOf(t);
//       t >= 0 && e.splice(n, 1)
//     }

//     function a(e) {
//       if (e instanceof Q) switch (e.length) {
//         case 0:
//           return e;
//         case 1:
//           if (e[0].nodeType === I) return e;
//           break;
//         default:
//           return Q(l(e))
//       }
//       if (e.nodeType === I) return Q(e)
//     }

//     function l(e) {
//       if (!e[0]) return e;
//       for (var t = 0; t < e.length; t++) {
//         var n = e[t];
//         if (n.nodeType == I) return n
//       }
//     }

//     function u(e, t, n) {
//       q(t, function (t) {
//         e.addClass(t, n)
//       })
//     }

//     function c(e, t, n) {
//       q(t, function (t) {
//         e.removeClass(t, n)
//       })
//     }

//     function d(e) {
//       return function (t, n) {
//         n.addClass && (u(e, t, n.addClass), n.addClass = null), n.removeClass && (c(e, t, n.removeClass), n.removeClass = null)
//       }
//     }

//     function f(e) {
//       if (!(e = e || {}).$$prepared) {
//         var t = e.domOperation || ee;
//         e.domOperation = function () {
//           e.$$domOperationFired = !0, t(), t = ee
//         }, e.$$prepared = !0
//       }
//       return e
//     }

//     function h(e, t) {
//       p(e, t), m(e, t)
//     }

//     function p(e, t) {
//       t.from && (e.css(t.from), t.from = null)
//     }

//     function m(e, t) {
//       t.to && (e.css(t.to), t.to = null)
//     }

//     function g(e, t, n) {
//       var i = t.options || {},
//         r = n.options || {},
//         o = (i.addClass || "") + " " + (r.addClass || ""),
//         s = (i.removeClass || "") + " " + (r.removeClass || ""),
//         a = v(e.attr("class"), o, s);
//       r.preparationClasses && (i.preparationClasses = C(r.preparationClasses, i.preparationClasses), delete r.preparationClasses);
//       var l = i.domOperation !== ee ? i.domOperation : null;
//       return B(i, r), l && (i.domOperation = l), a.addClass ? i.addClass = a.addClass : i.addClass = null, a.removeClass ? i.removeClass = a.removeClass : i.removeClass = null, t.addClass = i.addClass, t.removeClass = i.removeClass, i
//     }

//     function v(e, t, n) {
//       function i(e) {
//         K(e) && (e = e.split(" "));
//         var t = {};
//         return q(e, function (e) {
//           e.length && (t[e] = !0)
//         }), t
//       }
//       var r = {};
//       e = i(e), t = i(t), q(t, function (e, t) {
//         r[t] = 1
//       }), n = i(n), q(n, function (e, t) {
//         r[t] = 1 === r[t] ? null : -1
//       });
//       var o = {
//         addClass: "",
//         removeClass: ""
//       };
//       return q(r, function (t, n) {
//         var i, r;
//         1 === t ? (i = "addClass", r = !e[n] || e[n + z]) : -1 === t && (i = "removeClass", r = e[n] || e[n + R]), r && (o[i].length && (o[i] += " "), o[i] += n)
//       }), o
//     }

//     function y(e) {
//       return e instanceof Q ? e[0] : e
//     }

//     function b(e, t, n) {
//       var i = "";
//       t && (i = o(t, L, !0)), n.addClass && (i = C(i, o(n.addClass, R))), n.removeClass && (i = C(i, o(n.removeClass, z))), i.length && (n.preparationClasses = i, e.addClass(i))
//     }

//     function $(e, t) {
//       t.preparationClasses && (e.removeClass(t.preparationClasses), t.preparationClasses = null), t.activeClasses && (e.removeClass(t.activeClasses), t.activeClasses = null)
//     }

//     function w(e, t) {
//       var n = t ? "-" + t + "s" : "";
//       return S(e, [se, n]), [se, n]
//     }

//     function x(e, t) {
//       var n = t ? "paused" : "",
//         i = N + ie;
//       return S(e, [i, n]), [i, n]
//     }

//     function S(e, t) {
//       var n = t[0],
//         i = t[1];
//       e.style[n] = i
//     }

//     function C(e, t) {
//       return e ? t ? e + " " + t : e : t
//     }

//     function k(e) {
//       return [oe, e + "s"]
//     }

//     function T(e, t) {
//       return [t ? re : se, e + "s"]
//     }

//     function E(e, t, n) {
//       var i = Object.create(null),
//         r = e.getComputedStyle(t) || {};
//       return q(n, function (e, t) {
//         var n = r[e];
//         if (n) {
//           var o = n.charAt(0);
//           ("-" === o || "+" === o || o >= 0) && (n = j(n)), 0 === n && (n = null), i[t] = n
//         }
//       }), i
//     }

//     function j(e) {
//       var t = 0,
//         n = e.split(/\s*,\s*/);
//       return q(n, function (e) {
//         "s" == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)), e = parseFloat(e) || 0, t = t ? Math.max(e, t) : e
//       }), t
//     }

//     function M(e) {
//       return 0 === e || null != e
//     }

//     function _(e, t) {
//       var n = O,
//         i = e + "s";
//       return t ? n += te : i += " linear all", [n, i]
//     }

//     function A() {
//       var e = Object.create(null);
//       return {
//         flush: function () {
//           e = Object.create(null)
//         },
//         count: function (t) {
//           var n = e[t];
//           return n ? n.total : 0
//         },
//         get: function (t) {
//           var n = e[t];
//           return n && n.value
//         },
//         put: function (t, n) {
//           e[t] ? e[t].total++ : e[t] = {
//             total: 1,
//             value: n
//           }
//         }
//       }
//     }

//     function D(e, t, n) {
//       q(n, function (n) {
//         e[n] = Y(e[n]) ? e[n] : t.style.getPropertyValue(n)
//       })
//     }
//     var O, P, N, F, I = 1,
//       R = "-add",
//       z = "-remove",
//       L = "ng-",
//       H = "ng-animate",
//       V = "$$ngAnimateChildren";
//     void 0 === e.ontransitionend && void 0 !== e.onwebkittransitionend ? ("-webkit-", O = "WebkitTransition", P = "webkitTransitionEnd transitionend") : (O = "transition", P = "transitionend"), void 0 === e.onanimationend && void 0 !== e.onwebkitanimationend ? ("-webkit-", N = "WebkitAnimation", F = "webkitAnimationEnd animationend") : (N = "animation", F = "animationend");
//     var U, B, q, W, Y, G, Z, X, K, J, Q, ee, te = "Duration",
//       ne = "TimingFunction",
//       ie = "PlayState",
//       re = N + "Delay",
//       oe = N + te,
//       se = O + "Delay",
//       ae = O + te,
//       le = t.$$minErr("ng"),
//       ue = ["$$rAF", function (e) {
//         function t(e) {
//           i = i.concat(e), n()
//         }

//         function n() {
//           if (i.length) {
//             for (var t = i.shift(), o = 0; o < t.length; o++) t[o]();
//             r || e(function () {
//               r || n()
//             })
//           }
//         }
//         var i, r;
//         return i = t.queue = [], t.waitUntilQuiet = function (t) {
//           r && r(), r = e(function () {
//             r = null, t(), n()
//           })
//         }, t
//       }],
//       ce = ["$interpolate", function (e) {
//         return {
//           link: function (t, n, i) {
//             function r(e) {
//               e = "on" === e || "true" === e, n.data(V, e)
//             }
//             var o = i.ngAnimateChildren;
//             K(o) && 0 === o.length ? n.data(V, !0) : (r(e(o)(t)), i.$observe("ngAnimateChildren", r))
//           }
//         }
//       }],
//       de = "$$animateCss",
//       fe = 1e3,
//       he = 3,
//       pe = 1.5,
//       me = {
//         transitionDuration: ae,
//         transitionDelay: se,
//         transitionProperty: O + "Property",
//         animationDuration: oe,
//         animationDelay: re,
//         animationIterationCount: N + "IterationCount"
//       },
//       ge = {
//         transitionDuration: ae,
//         transitionDelay: se,
//         animationDuration: oe,
//         animationDelay: re
//       },
//       ve = ["$animateProvider", function (e) {
//         var t = A(),
//           n = A();
//         this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (e, i, a, l, u, c, g, v) {
//           function b(e, t) {
//             var n = "$$ngAnimateParentKey",
//               i = e.parentNode;
//             return (i[n] || (i[n] = ++H)) + "-" + e.getAttribute("class") + "-" + t
//           }

//           function $(n, i, r, o) {
//             var s = t.get(r);
//             return s || "infinite" === (s = E(e, n, o)).animationIterationCount && (s.animationIterationCount = 1), t.put(r, s), s
//           }

//           function C(r, s, a, l) {
//             var u;
//             if (t.count(a) > 0 && !(u = n.get(a))) {
//               var c = o(s, "-stagger");
//               i.addClass(r, c), (u = E(e, r, l)).animationDuration = Math.max(u.animationDuration, 0), u.transitionDuration = Math.max(u.transitionDuration, 0), i.removeClass(r, c), n.put(a, u)
//             }
//             return u || {}
//           }

//           function j(e) {
//             V.push(e), g.waitUntilQuiet(function () {
//               t.flush(), n.flush();
//               for (var e = u(), i = 0; i < V.length; i++) V[i](e);
//               V.length = 0
//             })
//           }

//           function A(e, t, n) {
//             var i = $(e, t, n, me),
//               r = i.animationDelay,
//               o = i.transitionDelay;
//             return i.maxDelay = r && o ? Math.max(r, o) : r || o, i.maxDuration = Math.max(i.animationDuration * i.animationIterationCount, i.transitionDuration), i
//           }
//           var I = d(i),
//             H = 0,
//             V = [];
//           return function (e, n) {
//             function u() {
//               g()
//             }

//             function d() {
//               g(!0)
//             }

//             function g(t) {
//               if (!(Z || K && X)) {
//                 Z = !0, X = !1, B.$$skipPreparationClasses || i.removeClass(e, be), i.removeClass(e, we), x(G, !1), w(G, !1), q(ae, function (e) {
//                   G.style[e[0]] = ""
//                 }), I(e, B), h(e, B), Object.keys(Y).length && q(Y, function (e, t) {
//                   e ? G.style.setProperty(t, e) : G.style.removeProperty(t)
//                 }), B.onDone && B.onDone(), ce && ce.length && e.off(ce.join(" "), H);
//                 var n = e.data(de);
//                 n && (l.cancel(n[0].timer), e.removeData(de)), J && J.complete(!t)
//               }
//             }

//             function $(e) {
//               Pe.blockTransition && w(G, e), Pe.blockKeyframeAnimation && x(G, !!e)
//             }

//             function E() {
//               return J = new a({
//                 end: u,
//                 cancel: d
//               }), j(ee), g(), {
//                   $$willAnimate: !1,
//                   start: function () {
//                     return J
//                   },
//                   end: u
//                 }
//             }

//             function H(e) {
//               e.stopPropagation();
//               var t = e.originalEvent || e,
//                 n = t.$manualTimeStamp || Date.now(),
//                 i = parseFloat(t.elapsedTime.toFixed(he));
//               Math.max(n - se, 0) >= ie && i >= re && (K = !0, g())
//             }

//             function V() {
//               function t() {
//                 if (!Z) {
//                   if ($(!1), q(ae, function (e) {
//                     var t = e[0],
//                       n = e[1];
//                     G.style[t] = n
//                   }), I(e, B), i.addClass(e, we), Pe.recalculateTimingStyles) {
//                     if ($e = G.className + " " + be, Se = b(G, $e), De = A(G, $e, Se), Oe = De.maxDelay, te = Math.max(Oe, 0), 0 === (re = De.maxDuration)) return void g();
//                     Pe.hasTransitions = De.transitionDuration > 0, Pe.hasAnimations = De.animationDuration > 0
//                   }
//                   if (Pe.applyAnimationDelay && (Oe = "boolean" != typeof B.delay && M(B.delay) ? parseFloat(B.delay) : Oe, te = Math.max(Oe, 0), De.animationDelay = Oe, Ne = T(Oe, !0), ae.push(Ne), G.style[Ne[0]] = Ne[1]), ie = te * fe, oe = re * fe, B.easing) {
//                     var t, r = B.easing;
//                     Pe.hasTransitions && (t = O + ne, ae.push([t, r]), G.style[t] = r), Pe.hasAnimations && (t = N + ne, ae.push([t, r]), G.style[t] = r)
//                   }
//                   De.transitionDuration && ce.push(P), De.animationDuration && ce.push(F), se = Date.now();
//                   var o = ie + pe * oe,
//                     s = se + o,
//                     a = e.data(de) || [],
//                     u = !0;
//                   if (a.length) {
//                     var c = a[0];
//                     (u = s > c.expectedEndTime) ? l.cancel(c.timer) : a.push(g)
//                   }
//                   if (u) {
//                     var d = l(n, o, !1);
//                     a[0] = {
//                       timer: d,
//                       expectedEndTime: s
//                     }, a.push(g), e.data(de, a)
//                   }
//                   ce.length && e.on(ce.join(" "), H), B.to && (B.cleanupStyles && D(Y, G, Object.keys(B.to)), m(e, B))
//                 }
//               }

//               function n() {
//                 var t = e.data(de);
//                 if (t) {
//                   for (var n = 1; n < t.length; n++) t[n]();
//                   e.removeData(de)
//                 }
//               }
//               if (!Z)
//                 if (G.parentNode) {
//                   var r = function (e) {
//                     if (K) X && e && (X = !1, g());
//                     else if (X = !e, De.animationDuration) {
//                       var t = x(G, X);
//                       X ? ae.push(t) : s(ae, t)
//                     }
//                   },
//                     o = _e > 0 && (De.transitionDuration && 0 === Ce.transitionDuration || De.animationDuration && 0 === Ce.animationDuration) && Math.max(Ce.animationDelay, Ce.transitionDelay);
//                   o ? l(t, Math.floor(o * _e * fe), !1) : t(), Q.resume = function () {
//                     r(!0)
//                   }, Q.pause = function () {
//                     r(!1)
//                   }
//                 } else g()
//             }
//             var B = n || {};
//             B.$$prepared || (B = f(U(B)));
//             var Y = {},
//               G = y(e);
//             if (!G || !G.parentNode || !v.enabled()) return E();
//             var Z, X, K, J, Q, te, ie, re, oe, se, ae = [],
//               le = e.attr("class"),
//               ue = r(B),
//               ce = [];
//             if (0 === B.duration || !c.animations && !c.transitions) return E();
//             var me = B.event && W(B.event) ? B.event.join(" ") : B.event,
//               ve = "",
//               ye = "";
//             me && B.structural ? ve = o(me, L, !0) : me && (ve = me), B.addClass && (ye += o(B.addClass, R)), B.removeClass && (ye.length && (ye += " "), ye += o(B.removeClass, z)), B.applyClassesEarly && ye.length && I(e, B);
//             var be = [ve, ye].join(" ").trim(),
//               $e = le + " " + be,
//               we = o(be, "-active"),
//               xe = ue.to && Object.keys(ue.to).length > 0;
//             if (!((B.keyframeStyle || "").length > 0) && !xe && !be) return E();
//             var Se, Ce;
//             if (B.stagger > 0) {
//               var ke = parseFloat(B.stagger);
//               Ce = {
//                 transitionDelay: ke,
//                 animationDelay: ke,
//                 transitionDuration: 0,
//                 animationDuration: 0
//               }
//             } else Se = b(G, $e), Ce = C(G, be, Se, ge);
//             B.$$skipPreparationClasses || i.addClass(e, be);
//             var Te;
//             if (B.transitionStyle) {
//               var Ee = [O, B.transitionStyle];
//               S(G, Ee), ae.push(Ee)
//             }
//             if (B.duration >= 0) {
//               Te = G.style[O].length > 0;
//               var je = _(B.duration, Te);
//               S(G, je), ae.push(je)
//             }
//             if (B.keyframeStyle) {
//               var Me = [N, B.keyframeStyle];
//               S(G, Me), ae.push(Me)
//             }
//             var _e = Ce ? B.staggerIndex >= 0 ? B.staggerIndex : t.count(Se) : 0,
//               Ae = 0 === _e;
//             Ae && !B.skipBlocking && w(G, 9999);
//             var De = A(G, $e, Se),
//               Oe = De.maxDelay;
//             te = Math.max(Oe, 0), re = De.maxDuration;
//             var Pe = {};
//             if (Pe.hasTransitions = De.transitionDuration > 0, Pe.hasAnimations = De.animationDuration > 0, Pe.hasTransitionAll = Pe.hasTransitions && "all" == De.transitionProperty, Pe.applyTransitionDuration = xe && (Pe.hasTransitions && !Pe.hasTransitionAll || Pe.hasAnimations && !Pe.hasTransitions), Pe.applyAnimationDuration = B.duration && Pe.hasAnimations, Pe.applyTransitionDelay = M(B.delay) && (Pe.applyTransitionDuration || Pe.hasTransitions), Pe.applyAnimationDelay = M(B.delay) && Pe.hasAnimations, Pe.recalculateTimingStyles = ye.length > 0, (Pe.applyTransitionDuration || Pe.applyAnimationDuration) && (re = B.duration ? parseFloat(B.duration) : re, Pe.applyTransitionDuration && (Pe.hasTransitions = !0, De.transitionDuration = re, Te = G.style[O + "Property"].length > 0, ae.push(_(re, Te))), Pe.applyAnimationDuration && (Pe.hasAnimations = !0, De.animationDuration = re, ae.push(k(re)))), 0 === re && !Pe.recalculateTimingStyles) return E();
//             if (null != B.delay) {
//               var Ne;
//               "boolean" != typeof B.delay && (Ne = parseFloat(B.delay), te = Math.max(Ne, 0)), Pe.applyTransitionDelay && ae.push(T(Ne)), Pe.applyAnimationDelay && ae.push(T(Ne, !0))
//             }
//             return null == B.duration && De.transitionDuration > 0 && (Pe.recalculateTimingStyles = Pe.recalculateTimingStyles || Ae), ie = te * fe, oe = re * fe, B.skipBlocking || (Pe.blockTransition = De.transitionDuration > 0, Pe.blockKeyframeAnimation = De.animationDuration > 0 && Ce.animationDelay > 0 && 0 === Ce.animationDuration), B.from && (B.cleanupStyles && D(Y, G, Object.keys(B.from)), p(e, B)), Pe.blockTransition || Pe.blockKeyframeAnimation ? $(re) : B.skipBlocking || w(G, !1), {
//               $$willAnimate: !0,
//               end: u,
//               start: function () {
//                 if (!Z) return Q = {
//                   end: u,
//                   cancel: d,
//                   resume: null,
//                   pause: null
//                 }, J = new a(Q), j(V), J
//               }
//             }
//           }
//         }]
//       }],
//       ye = ["$$animationProvider", function (e) {
//         function t(e) {
//           return e.parentNode && 11 === e.parentNode.nodeType
//         }
//         e.drivers.push("$$animateCssDriver");
//         var n = "ng-animate-shim",
//           i = "ng-anchor",
//           r = "ng-anchor-out",
//           o = "ng-anchor-in";
//         this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (e, s, a, l, u, c, f) {
//           function h(e) {
//             return e.replace(/\bng-\S+\b/g, "")
//           }

//           function p(e, t) {
//             return K(e) && (e = e.split(" ")), K(t) && (t = t.split(" ")), e.filter(function (e) {
//               return -1 === t.indexOf(e)
//             }).join(" ")
//           }

//           function m(t, s, l) {
//             function u(e) {
//               var t = {},
//                 n = y(e).getBoundingClientRect();
//               return q(["width", "height", "top", "left"], function (e) {
//                 var i = n[e];
//                 switch (e) {
//                   case "top":
//                     i += b.scrollTop;
//                     break;
//                   case "left":
//                     i += b.scrollLeft
//                 }
//                 t[e] = Math.floor(i) + "px"
//               }), t
//             }

//             function c(e) {
//               return e.attr("class") || ""
//             }

//             function d() {
//               var t = h(c(l)),
//                 n = p(t, g),
//                 i = p(g, t),
//                 s = e(m, {
//                   to: u(l),
//                   addClass: o + " " + n,
//                   removeClass: r + " " + i,
//                   delay: !0
//                 });
//               return s.$$willAnimate ? s : null
//             }

//             function f() {
//               m.remove(), s.removeClass(n), l.removeClass(n)
//             }
//             var m = Q(y(s).cloneNode(!0)),
//               g = h(c(m));
//             s.addClass(n), l.addClass(n), m.addClass(i), w.append(m);
//             var v, $ = function () {
//               var t = e(m, {
//                 addClass: r,
//                 delay: !0,
//                 from: u(s)
//               });
//               return t.$$willAnimate ? t : null
//             }();
//             if (!$ && !(v = d())) return f();
//             var x = $ || v;
//             return {
//               start: function () {
//                 function e() {
//                   n && n.end()
//                 }
//                 var t, n = x.start();
//                 return n.done(function () {
//                   if (n = null, !v && (v = d())) return (n = v.start()).done(function () {
//                     n = null, f(), t.complete()
//                   }), n;
//                   f(), t.complete()
//                 }), t = new a({
//                   end: e,
//                   cancel: e
//                 })
//               }
//             }
//           }

//           function g(e, t, n, i) {
//             var r = v(e),
//               o = v(t),
//               s = [];
//             if (q(i, function (e) {
//               var t = e.out,
//                 i = e.in,
//                 r = m(n, t, i);
//               r && s.push(r)
//             }), r || o || 0 !== s.length) return {
//               start: function () {
//                 function e() {
//                   q(t, function (e) {
//                     e.end()
//                   })
//                 }
//                 var t = [];
//                 r && t.push(r.start()), o && t.push(o.start()), q(s, function (e) {
//                   t.push(e.start())
//                 });
//                 var n = new a({
//                   end: e,
//                   cancel: e
//                 });
//                 return a.all(t, function (e) {
//                   n.complete(e)
//                 }), n
//               }
//             }
//           }

//           function v(t) {
//             var n = t.element,
//               i = t.options || {};
//             t.structural && (i.event = t.event, i.structural = !0, i.applyClassesEarly = !0, "leave" === t.event && (i.onDone = i.domOperation)), i.preparationClasses && (i.event = C(i.event, i.preparationClasses));
//             var r = e(n, i);
//             return r.$$willAnimate ? r : null
//           }
//           if (!u.animations && !u.transitions) return ee;
//           var b = f[0].body,
//             $ = y(l),
//             w = Q(t($) || b.contains($) ? $ : b);
//           d(c);
//           return function (e) {
//             return e.from && e.to ? g(e.from, e.to, e.classes, e.anchors) : v(e)
//           }
//         }]
//       }],
//       be = ["$animateProvider", function (e) {
//         this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (t, n, i) {
//           function r(n) {
//             n = W(n) ? n : n.split(" ");
//             for (var i = [], r = {}, o = 0; o < n.length; o++) {
//               var s = n[o],
//                 a = e.$$registeredAnimations[s];
//               a && !r[s] && (i.push(t.get(a)), r[s] = !0)
//             }
//             return i
//           }
//           var o = d(i);
//           return function (e, t, i, s) {
//             function a() {
//               s.domOperation(), o(e, s)
//             }

//             function l() {
//               p = !0, a(), h(e, s)
//             }

//             function u(e, t, i, r, o) {
//               var s;
//               switch (i) {
//                 case "animate":
//                   s = [t, r.from, r.to, o];
//                   break;
//                 case "setClass":
//                   s = [t, v, y, o];
//                   break;
//                 case "addClass":
//                   s = [t, v, o];
//                   break;
//                 case "removeClass":
//                   s = [t, y, o];
//                   break;
//                 default:
//                   s = [t, o]
//               }
//               s.push(r);
//               var a = e.apply(e, s);
//               if (a)
//                 if (Z(a.start) && (a = a.start()), a instanceof n) a.done(o);
//                 else if (Z(a)) return a;
//               return ee
//             }

//             function c(e, t, i, r, o) {
//               var s = [];
//               return q(r, function (r) {
//                 var a = r[o];
//                 a && s.push(function () {
//                   var r, o, s = !1,
//                     l = function (e) {
//                       s || (s = !0, (o || ee)(e), r.complete(!e))
//                     };
//                   return r = new n({
//                     end: function () {
//                       l()
//                     },
//                     cancel: function () {
//                       l(!0)
//                     }
//                   }), o = u(a, e, t, i, function (e) {
//                     l(!1 === e)
//                   }), r
//                 })
//               }), s
//             }

//             function d(e, t, i, r, o) {
//               var s = c(e, t, i, r, o);
//               if (0 === s.length) {
//                 var a, l;
//                 "beforeSetClass" === o ? (a = c(e, "removeClass", i, r, "beforeRemoveClass"), l = c(e, "addClass", i, r, "beforeAddClass")) : "setClass" === o && (a = c(e, "removeClass", i, r, "removeClass"), l = c(e, "addClass", i, r, "addClass")), a && (s = s.concat(a)), l && (s = s.concat(l))
//               }
//               if (0 !== s.length) return function (e) {
//                 var t = [];
//                 return s.length && q(s, function (e) {
//                   t.push(e())
//                 }), t.length ? n.all(t, e) : e(),
//                   function (e) {
//                     q(t, function (t) {
//                       e ? t.cancel() : t.end()
//                     })
//                   }
//               }
//             }
//             var p = !1;
//             3 === arguments.length && X(i) && (s = i, i = null), s = f(s), i || (i = e.attr("class") || "", s.addClass && (i += " " + s.addClass), s.removeClass && (i += " " + s.removeClass));
//             var m, g, v = s.addClass,
//               y = s.removeClass,
//               b = r(i);
//             if (b.length) {
//               var $, w;
//               "leave" == t ? (w = "leave", $ = "afterLeave") : (w = "before" + t.charAt(0).toUpperCase() + t.substr(1), $ = t), "enter" !== t && "move" !== t && (m = d(e, t, s, b, w)), g = d(e, t, s, b, $)
//             }
//             if (m || g) {
//               var x;
//               return {
//                 $$willAnimate: !0,
//                 end: function () {
//                   return x ? x.end() : (l(), (x = new n).complete(!0)), x
//                 },
//                 start: function () {
//                   function e(e) {
//                     l(e), x.complete(e)
//                   }

//                   function t(t) {
//                     p || ((i || ee)(t), e(t))
//                   }
//                   if (x) return x;
//                   x = new n;
//                   var i, r = [];
//                   return m && r.push(function (e) {
//                     i = m(e)
//                   }), r.length ? r.push(function (e) {
//                     a(), e(!0)
//                   }) : a(), g && r.push(function (e) {
//                     i = g(e)
//                   }), x.setHost({
//                     end: function () {
//                       t()
//                     },
//                     cancel: function () {
//                       t(!0)
//                     }
//                   }), n.chain(r, e), x
//                 }
//               }
//             }
//           }
//         }]
//       }],
//       $e = ["$$animationProvider", function (e) {
//         e.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner", function (e, t) {
//           function n(t) {
//             var n = t.element,
//               i = t.event,
//               r = t.options,
//               o = t.classes;
//             return e(n, i, o, r)
//           }
//           return function (e) {
//             if (e.from && e.to) {
//               var i = n(e.from),
//                 r = n(e.to);
//               if (!i && !r) return;
//               return {
//                 start: function () {
//                   function e() {
//                     return function () {
//                       q(n, function (e) {
//                         e.end()
//                       })
//                     }
//                   }
//                   var n = [];
//                   i && n.push(i.start()), r && n.push(r.start()), t.all(n, function (e) {
//                     o.complete(e)
//                   });
//                   var o = new t({
//                     end: e(),
//                     cancel: e()
//                   });
//                   return o
//                 }
//               }
//             }
//             return n(e)
//           }
//         }]
//       }],
//       we = "data-ng-animate",
//       xe = "$ngAnimatePin",
//       Se = ["$animateProvider", function (t) {
//         function i(e) {
//           if (!e) return null;
//           var t = e.split(p),
//             n = Object.create(null);
//           return q(t, function (e) {
//             n[e] = !0
//           }), n
//         }

//         function r(e, t) {
//           if (e && t) {
//             var n = i(t);
//             return e.split(p).some(function (e) {
//               return n[e]
//             })
//           }
//         }

//         function o(e, t, n, i) {
//           return m[e].some(function (e) {
//             return e(t, n, i)
//           })
//         }

//         function s(e, t) {
//           var n = (e.addClass || "").length > 0,
//             i = (e.removeClass || "").length > 0;
//           return t ? n && i : n || i
//         }
//         var u = 1,
//           c = 2,
//           p = " ",
//           m = this.rules = {
//             skip: [],
//             cancel: [],
//             join: []
//           };
//         m.join.push(function (e, t, n) {
//           return !t.structural && s(t)
//         }), m.skip.push(function (e, t, n) {
//           return !t.structural && !s(t)
//         }), m.skip.push(function (e, t, n) {
//           return "leave" == n.event && t.structural
//         }), m.skip.push(function (e, t, n) {
//           return n.structural && n.state === c && !t.structural
//         }), m.cancel.push(function (e, t, n) {
//           return n.structural && t.structural
//         }), m.cancel.push(function (e, t, n) {
//           return n.state === c && t.structural
//         }), m.cancel.push(function (e, t, n) {
//           if (n.structural) return !1;
//           var i = t.addClass,
//             o = t.removeClass,
//             s = n.addClass,
//             a = n.removeClass;
//           return !(J(i) && J(o) || J(s) && J(a)) && (r(i, a) || r(o, s))
//         }), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function (i, r, p, m, v, w, x, S, C, k) {
//           function T() {
//             var e = !1;
//             return function (t) {
//               e ? t() : r.$$postDigest(function () {
//                 e = !0, t()
//               })
//             }
//           }

//           function E(e, t) {
//             return g(e, t, {})
//           }

//           function j(e, t, n) {
//             var i = y(t),
//               r = y(e),
//               o = [],
//               s = Z[n];
//             return s && q(s, function (e) {
//               ie.call(e.node, i) ? o.push(e.callback) : "leave" === n && ie.call(e.node, r) && o.push(e.callback)
//             }), o
//           }

//           function M(e, t, n) {
//             var i = l(t);
//             return e.filter(function (e) {
//               return !(e.node === i && (!n || e.callback === n))
//             })
//           }

//           function _(e, t) {
//             "close" !== e || t[0].parentNode || re.off(t)
//           }

//           function A(e, t, n) {
//             function l(t, n, r, o) {
//               k(function () {
//                 var t = j(v, e, n);
//                 t.length ? i(function () {
//                   q(t, function (t) {
//                     t(e, r, o)
//                   }), _(r, e)
//                 }) : _(r, e)
//               }), t.progress(n, r, o)
//             }

//             function d(t) {
//               $(e, S), ne(e, S), h(e, S), S.domOperation(), C.complete(!t)
//             }
//             var p, v, S = U(n);
//             (e = a(e)) && (p = y(e), v = e.parent()), S = f(S);
//             var C = new x,
//               k = T();
//             if (W(S.addClass) && (S.addClass = S.addClass.join(" ")), S.addClass && !K(S.addClass) && (S.addClass = null), W(S.removeClass) && (S.removeClass = S.removeClass.join(" ")), S.removeClass && !K(S.removeClass) && (S.removeClass = null), S.from && !X(S.from) && (S.from = null), S.to && !X(S.to) && (S.to = null), !p) return d(), C;
//             var M = [p.className, S.addClass, S.removeClass].join(" ");
//             if (!te(M)) return d(), C;
//             var A = ["enter", "move", "leave"].indexOf(t) >= 0,
//               P = m[0].hidden,
//               I = !L || P || z.get(p),
//               H = !I && R.get(p) || {},
//               V = !!H.state;
//             if (I || V && H.state == u || (I = !N(e, v, t)), I) return P && l(C, t, "start"), d(), P && l(C, t, "close"), C;
//             A && D(e);
//             var B = {
//               structural: A,
//               element: e,
//               event: t,
//               addClass: S.addClass,
//               removeClass: S.removeClass,
//               close: d,
//               options: S,
//               runner: C
//             };
//             if (V) {
//               if (o("skip", e, B, H)) return H.state === c ? (d(), C) : (g(e, H, B), H.runner);
//               if (o("cancel", e, B, H))
//                 if (H.state === c) H.runner.end();
//                 else {
//                   if (!H.structural) return g(e, H, B), H.runner;
//                   H.close()
//                 }
//               else if (o("join", e, B, H)) {
//                 if (H.state !== c) return b(e, A ? t : null, S), t = B.event = H.event, S = g(e, H, B), H.runner;
//                 E(e, B)
//               }
//             } else E(e, B);
//             var Y = B.structural;
//             if (Y || (Y = "animate" === B.event && Object.keys(B.options.to || {}).length > 0 || s(B)), !Y) return d(), O(e), C;
//             var G = (H.counter || 0) + 1;
//             return B.counter = G, F(e, u, B), r.$$postDigest(function () {
//               var n = R.get(p),
//                 i = !n;
//               n = n || {};
//               var r = (e.parent() || []).length > 0 && ("animate" === n.event || n.structural || s(n));
//               if (i || n.counter !== G || !r) return i && (ne(e, S), h(e, S)), (i || A && n.event !== t) && (S.domOperation(), C.end()), void (r || O(e));
//               t = !n.structural && s(n, !0) ? "setClass" : n.event, F(e, c);
//               var o = w(e, t, n.options);
//               C.setHost(o), l(C, t, "start", {}), o.done(function (n) {
//                 d(!n);
//                 var i = R.get(p);
//                 i && i.counter === G && O(y(e)), l(C, t, "close", {})
//               })
//             }), C
//           }

//           function D(e) {
//             var t = y(e).querySelectorAll("[" + we + "]");
//             q(t, function (e) {
//               var t = parseInt(e.getAttribute(we)),
//                 n = R.get(e);
//               if (n) switch (t) {
//                 case c:
//                   n.runner.end();
//                 case u:
//                   R.remove(e)
//               }
//             })
//           }

//           function O(e) {
//             var t = y(e);
//             t.removeAttribute(we), R.remove(t)
//           }

//           function P(e, t) {
//             return y(e) === y(t)
//           }

//           function N(e, t, n) {
//             var i, r = Q(m[0].body),
//               o = P(e, r) || "HTML" === e[0].nodeName,
//               s = P(e, p),
//               a = !1,
//               l = z.get(y(e)),
//               u = Q.data(e[0], xe);
//             for (u && (t = u), t = y(t); t && (s || (s = P(t, p)), t.nodeType === I);) {
//               var c = R.get(t) || {};
//               if (!a) {
//                 var d = z.get(t);
//                 if (!0 === d && !1 !== l) {
//                   l = !0;
//                   break
//                 } !1 === d && (l = !1), a = c.structural
//               }
//               if (J(i) || !0 === i) {
//                 var f = Q.data(t, V);
//                 Y(f) && (i = f)
//               }
//               if (a && !1 === i) break;
//               if (o || (o = P(t, r)), o && s) break;
//               t = s || !(u = Q.data(t, xe)) ? t.parentNode : y(u)
//             }
//             return (!a || i) && !0 !== l && s && o
//           }

//           function F(e, t, n) {
//             (n = n || {}).state = t;
//             var i = y(e);
//             i.setAttribute(we, t);
//             var r = R.get(i),
//               o = r ? B(r, n) : n;
//             R.put(i, o)
//           }
//           var R = new v,
//             z = new v,
//             L = null,
//             H = r.$watch(function () {
//               return 0 === S.totalPendingRequests
//             }, function (e) {
//               e && (H(), r.$$postDigest(function () {
//                 r.$$postDigest(function () {
//                   null === L && (L = !0)
//                 })
//               }))
//             }),
//             Z = Object.create(null),
//             ee = t.classNameFilter(),
//             te = ee ? function (e) {
//               return ee.test(e)
//             } : function () {
//               return !0
//             },
//             ne = d(C),
//             ie = e.Node.prototype.contains || function (e) {
//               return this === e || !!(16 & this.compareDocumentPosition(e))
//             },
//             re = {
//               on: function (e, t, n) {
//                 var i = l(t);
//                 Z[e] = Z[e] || [], Z[e].push({
//                   node: i,
//                   callback: n
//                 }), Q(t).on("$destroy", function () {
//                   R.get(i) || re.off(e, t, n)
//                 })
//               },
//               off: function (e, t, n) {
//                 if (1 !== arguments.length || K(arguments[0])) {
//                   var i = Z[e];
//                   i && (Z[e] = 1 === arguments.length ? null : M(i, t, n))
//                 } else {
//                   t = arguments[0];
//                   for (var r in Z) Z[r] = M(Z[r], t)
//                 }
//               },
//               pin: function (e, t) {
//                 n(G(e), "element", "not an element"), n(G(t), "parentElement", "not an element"), e.data(xe, t)
//               },
//               push: function (e, t, n, i) {
//                 return n = n || {}, n.domOperation = i, A(e, t, n)
//               },
//               enabled: function (e, t) {
//                 var n = arguments.length;
//                 if (0 === n) t = !!L;
//                 else if (G(e)) {
//                   var i = y(e);
//                   1 === n ? t = !z.get(i) : z.put(i, !t)
//                 } else t = L = !!e;
//                 return t
//               }
//             };
//           return re
//         }]
//       }],
//       Ce = ["$animateProvider", function (e) {
//         function t(e, t) {
//           e.data(a, t)
//         }

//         function n(e) {
//           e.removeData(a)
//         }

//         function r(e) {
//           return e.data(a)
//         }
//         var o = "ng-animate-ref",
//           s = this.drivers = [],
//           a = "$$animationRunner";
//         this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function (e, a, l, u, c, p) {
//           function m(e) {
//             function t(e) {
//               if (e.processed) return e;
//               e.processed = !0;
//               var n = e.domNode,
//                 o = n.parentNode;
//               r.put(n, e);
//               for (var s; o;) {
//                 if (s = r.get(o)) {
//                   s.processed || (s = t(s));
//                   break
//                 }
//                 o = o.parentNode
//               }
//               return (s || i).children.push(e), e
//             }
//             var n, i = {
//               children: []
//             },
//               r = new c;
//             for (n = 0; n < e.length; n++) {
//               var o = e[n];
//               r.put(o.domNode, e[n] = {
//                 domNode: o.domNode,
//                 fn: o.fn,
//                 children: []
//               })
//             }
//             for (n = 0; n < e.length; n++) t(e[n]);
//             return function (e) {
//               var t, n = [],
//                 i = [];
//               for (t = 0; t < e.children.length; t++) i.push(e.children[t]);
//               var r = i.length,
//                 o = 0,
//                 s = [];
//               for (t = 0; t < i.length; t++) {
//                 var a = i[t];
//                 r <= 0 && (r = o, o = 0, n.push(s), s = []), s.push(a.fn), a.children.forEach(function (e) {
//                   o++ , i.push(e)
//                 }), r--
//               }
//               return s.length && n.push(s), n
//             }(i)
//           }
//           var g = [],
//             v = d(e);
//           return function (c, d, b) {
//             function $(e) {
//               var t = "[" + o + "]",
//                 n = e.hasAttribute(o) ? [e] : e.querySelectorAll(t),
//                 i = [];
//               return q(n, function (e) {
//                 var t = e.getAttribute(o);
//                 t && t.length && i.push(e)
//               }), i
//             }

//             function w(e) {
//               var t = [],
//                 n = {};
//               q(e, function (e, i) {
//                 var r = y(e.element),
//                   s = e.event,
//                   a = ["enter", "move"].indexOf(s) >= 0,
//                   l = e.structural ? $(r) : [];
//                 if (l.length) {
//                   var u = a ? "to" : "from";
//                   q(l, function (e) {
//                     var t = e.getAttribute(o);
//                     n[t] = n[t] || {}, n[t][u] = {
//                       animationID: i,
//                       element: Q(e)
//                     }
//                   })
//                 } else t.push(e)
//               });
//               var i = {},
//                 r = {};
//               return q(n, function (n, o) {
//                 var s = n.from,
//                   a = n.to;
//                 if (s && a) {
//                   var l = e[s.animationID],
//                     u = e[a.animationID],
//                     c = s.animationID.toString();
//                   if (!r[c]) {
//                     var d = r[c] = {
//                       structural: !0,
//                       beforeStart: function () {
//                         l.beforeStart(), u.beforeStart()
//                       },
//                       close: function () {
//                         l.close(), u.close()
//                       },
//                       classes: x(l.classes, u.classes),
//                       from: l,
//                       to: u,
//                       anchors: []
//                     };
//                     d.classes.length ? t.push(d) : (t.push(l), t.push(u))
//                   }
//                   r[c].anchors.push({
//                     out: s.element,
//                     in: a.element
//                   })
//                 } else {
//                   var f = s ? s.animationID : a.animationID,
//                     h = f.toString();
//                   i[h] || (i[h] = !0, t.push(e[f]))
//                 }
//               }), t
//             }

//             function x(e, t) {
//               e = e.split(" "), t = t.split(" ");
//               for (var n = [], i = 0; i < e.length; i++) {
//                 var r = e[i];
//                 if ("ng-" !== r.substring(0, 3))
//                   for (var o = 0; o < t.length; o++)
//                     if (r === t[o]) {
//                       n.push(r);
//                       break
//                     }
//               }
//               return n.join(" ")
//             }

//             function S(e) {
//               for (var t = s.length - 1; t >= 0; t--) {
//                 var n = s[t],
//                   i = l.get(n)(e);
//                 if (i) return i
//               }
//             }

//             function C(e, t) {
//               function n(e) {
//                 var n = r(e);
//                 n && n.setHost(t)
//               }
//               e.from && e.to ? (n(e.from.element), n(e.to.element)) : n(e.element)
//             }

//             function k() {
//               var e = r(c);
//               !e || "leave" === d && b.$$domOperationFired || e.end()
//             }

//             function T(t) {
//               c.off("$destroy", k), n(c), v(c, b), h(c, b), b.domOperation(), _ && e.removeClass(c, _), c.removeClass(H), j.complete(!t)
//             }
//             b = f(b);
//             var E = ["enter", "move", "leave"].indexOf(d) >= 0,
//               j = new u({
//                 end: function () {
//                   T()
//                 },
//                 cancel: function () {
//                   T(!0)
//                 }
//               });
//             if (!s.length) return T(), j;
//             t(c, j);
//             var M = i(c.attr("class"), i(b.addClass, b.removeClass)),
//               _ = b.tempClasses;
//             _ && (M += " " + _, b.tempClasses = null);
//             var A;
//             return E && (A = "ng-" + d + "-prepare", e.addClass(c, A)), g.push({
//               element: c,
//               classes: M,
//               event: d,
//               structural: E,
//               options: b,
//               beforeStart: function () {
//                 c.addClass(H), _ && e.addClass(c, _), A && (e.removeClass(c, A), A = null)
//               },
//               close: T
//             }), c.on("$destroy", k), g.length > 1 ? j : (a.$$postDigest(function () {
//               var e = [];
//               q(g, function (t) {
//                 r(t.element) ? e.push(t) : t.close()
//               }), g.length = 0;
//               var t = w(e),
//                 n = [];
//               q(t, function (e) {
//                 n.push({
//                   domNode: y(e.from ? e.from.element : e.element),
//                   fn: function () {
//                     e.beforeStart();
//                     var t, n = e.close;
//                     if (r(e.anchors ? e.from.element || e.to.element : e.element)) {
//                       var i = S(e);
//                       i && (t = i.start)
//                     }
//                     if (t) {
//                       var o = t();
//                       o.done(function (e) {
//                         n(!e)
//                       }), C(e, o)
//                     } else n()
//                   }
//                 })
//               }), p(m(n))
//             }), j)
//           }
//         }]
//       }],
//       ke = ["$animate", "$rootScope", function (e, t) {
//         return {
//           restrict: "A",
//           transclude: "element",
//           terminal: !0,
//           priority: 600,
//           link: function (t, n, i, r, o) {
//             var s, a;
//             t.$watchCollection(i.ngAnimateSwap || i.for, function (i) {
//               s && e.leave(s), a && (a.$destroy(), a = null), (i || 0 === i) && (a = t.$new(), o(a, function (t) {
//                 s = t, e.enter(t, null, n)
//               }))
//             })
//           }
//         }
//       }];
//     t.module("ngAnimate", [], function () {
//       ee = t.noop, U = t.copy, B = t.extend, Q = t.element, q = t.forEach, W = t.isArray, K = t.isString, X = t.isObject, J = t.isUndefined, Y = t.isDefined, Z = t.isFunction, G = t.isElement
//     }).directive("ngAnimateSwap", ke).directive("ngAnimateChildren", ce).factory("$$rAFScheduler", ue).provider("$$animateQueue", Se).provider("$$animation", Ce).provider("$animateCss", ve).provider("$$animateCssDriver", ye).provider("$$animateJs", be).provider("$$animateJsDriver", $e)
//   }(window, window.angular),
//   function (e, t) {
//     "use strict";

//     function n(e) {
//       return t.lowercase(e.nodeName || e[0] && e[0].nodeName)
//     }

//     function i(e, n) {
//       var i = !1,
//         r = !1;
//       this.ngClickOverrideEnabled = function (o) {
//         return t.isDefined(o) ? (o && !r && (r = !0, s.$$moduleName = "ngTouch", n.directive("ngClick", s), e.decorator("ngClickDirective", ["$delegate", function (e) {
//           if (i) e.shift();
//           else
//             for (var t = e.length - 1; t >= 0;) {
//               if ("ngTouch" === e[t].$$moduleName) {
//                 e.splice(t, 1);
//                 break
//               }
//               t--
//             }
//           return e
//         }])), i = o, this) : i
//       }, this.$get = function () {
//         return {
//           ngClickOverrideEnabled: function () {
//             return i
//           }
//         }
//       }
//     }

//     function r(e, n, i) {
//       o.directive(e, ["$parse", "$swipe", function (r, o) {
//         var s = 75,
//           a = .3,
//           l = 30;
//         return function (u, c, d) {
//           function f(e) {
//             if (!h) return !1;
//             var t = Math.abs(e.y - h.y),
//               i = (e.x - h.x) * n;
//             return p && t < s && i > 0 && i > l && t / i < a
//           }
//           var h, p, m = r(d[e]),
//             g = ["touch"];
//           t.isDefined(d.ngSwipeDisableMouse) || g.push("mouse"), o.bind(c, {
//             start: function (e, t) {
//               h = e, p = !0
//             },
//             cancel: function (e) {
//               p = !1
//             },
//             end: function (e, t) {
//               f(e) && u.$apply(function () {
//                 c.triggerHandler(i), m(u, {
//                   $event: t
//                 })
//               })
//             }
//           }, g)
//         }
//       }])
//     }
//     var o = t.module("ngTouch", []);
//     o.provider("$touch", i), i.$inject = ["$provide", "$compileProvider"], o.factory("$swipe", [function () {
//       function e(e) {
//         var t = e.originalEvent || e,
//           n = t.touches && t.touches.length ? t.touches : [t],
//           i = t.changedTouches && t.changedTouches[0] || n[0];
//         return {
//           x: i.clientX,
//           y: i.clientY
//         }
//       }

//       function n(e, n) {
//         var r = [];
//         return t.forEach(e, function (e) {
//           var t = i[e][n];
//           t && r.push(t)
//         }), r.join(" ")
//       }
//       var i = {
//         mouse: {
//           start: "mousedown",
//           move: "mousemove",
//           end: "mouseup"
//         },
//         touch: {
//           start: "touchstart",
//           move: "touchmove",
//           end: "touchend",
//           cancel: "touchcancel"
//         },
//         pointer: {
//           start: "pointerdown",
//           move: "pointermove",
//           end: "pointerup",
//           cancel: "pointercancel"
//         }
//       };
//       return {
//         bind: function (t, i, r) {
//           var o, s, a, l, u = !1;
//           r = r || ["mouse", "touch", "pointer"], t.on(n(r, "start"), function (t) {
//             a = e(t), u = !0, o = 0, s = 0, l = a, i.start && i.start(a, t)
//           });
//           var c = n(r, "cancel");
//           c && t.on(c, function (e) {
//             u = !1, i.cancel && i.cancel(e)
//           }), t.on(n(r, "move"), function (t) {
//             if (u && a) {
//               var n = e(t);
//               if (o += Math.abs(n.x - l.x), s += Math.abs(n.y - l.y), l = n, !(o < 10 && s < 10)) return s > o ? (u = !1, void (i.cancel && i.cancel(t))) : (t.preventDefault(), void (i.move && i.move(n, t)))
//             }
//           }), t.on(n(r, "end"), function (t) {
//             u && (u = !1, i.end && i.end(e(t), t))
//           })
//         }
//       }
//     }]);
//     var s = ["$parse", "$timeout", "$rootElement", function (e, i, r) {
//       function o(e, t, n, i) {
//         return Math.abs(e - n) < p && Math.abs(t - i) < p
//       }

//       function s(e, t, n) {
//         for (var i = 0; i < e.length; i += 2)
//           if (o(e[i], e[i + 1], t, n)) return e.splice(i, i + 2), !0;
//         return !1
//       }

//       function a(e) {
//         if (!(Date.now() - c > h)) {
//           var t = e.touches && e.touches.length ? e.touches : [e],
//             i = t[0].clientX,
//             r = t[0].clientY;
//           i < 1 && r < 1 || f && f[0] === i && f[1] === r || (f && (f = null), "label" === n(e.target) && (f = [i, r]), s(d, i, r) || (e.stopPropagation(), e.preventDefault(), e.target && e.target.blur && e.target.blur()))
//         }
//       }

//       function l(e) {
//         var t = e.touches && e.touches.length ? e.touches : [e],
//           n = t[0].clientX,
//           r = t[0].clientY;
//         d.push(n, r), i(function () {
//           for (var e = 0; e < d.length; e += 2)
//             if (d[e] == n && d[e + 1] == r) return void d.splice(e, e + 2)
//         }, h, !1)
//       }

//       function u(e, t) {
//         d || (r[0].addEventListener("click", a, !0), r[0].addEventListener("touchstart", l, !0), d = []), c = Date.now(), s(d, e, t)
//       }
//       var c, d, f, h = 2500,
//         p = 25,
//         m = "ng-click-active";
//       return function (n, i, r) {
//         function o() {
//           f = !1, i.removeClass(m)
//         }
//         var s, a, l, c, d = e(r.ngClick),
//           f = !1;
//         i.on("touchstart", function (e) {
//           f = !0, 3 == (s = e.target ? e.target : e.srcElement).nodeType && (s = s.parentNode), i.addClass(m), a = Date.now();
//           var t = e.originalEvent || e,
//             n = (t.touches && t.touches.length ? t.touches : [t])[0];
//           l = n.clientX, c = n.clientY
//         }), i.on("touchcancel", function (e) {
//           o()
//         }), i.on("touchend", function (e) {
//           var n = Date.now() - a,
//             d = e.originalEvent || e,
//             h = (d.changedTouches && d.changedTouches.length ? d.changedTouches : d.touches && d.touches.length ? d.touches : [d])[0],
//             p = h.clientX,
//             m = h.clientY,
//             g = Math.sqrt(Math.pow(p - l, 2) + Math.pow(m - c, 2));
//           f && n < 750 && g < 12 && (u(p, m), s && s.blur(), t.isDefined(r.disabled) && !1 !== r.disabled || i.triggerHandler("click", [e])), o()
//         }), i.onclick = function (e) { }, i.on("click", function (e, t) {
//           n.$apply(function () {
//             d(n, {
//               $event: t || e
//             })
//           })
//         }), i.on("mousedown", function (e) {
//           i.addClass(m)
//         }), i.on("mousemove mouseup", function (e) {
//           i.removeClass(m)
//         })
//       }
//     }];
//     r("ngSwipeLeft", -1, "swipeleft"), r("ngSwipeRight", 1, "swiperight")
//   }(window, window.angular),
//   function (e, t) {
//     "use strict";

//     function n(e) {
//       var t = [];
//       return c(t, l).chars(e), t.join("")
//     }
//     var i, r, o, s, a, l, u, c, d = t.$$minErr("$sanitize");
//     t.module("ngSanitize", []).provider("$sanitize", function () {
//       function n(e, t) {
//         var n, i = {},
//           r = e.split(",");
//         for (n = 0; n < r.length; n++) i[t ? a(r[n]) : r[n]] = !0;
//         return i
//       }

//       function f(e) {
//         for (var t = {}, n = 0, i = e.length; n < i; n++) {
//           var r = e[n];
//           t[r.name] = r.value
//         }
//         return t
//       }

//       function h(e) {
//         return e.replace(/&/g, "&amp;").replace(v, function (e) {
//           return "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";"
//         }).replace(y, function (e) {
//           return "&#" + e.charCodeAt(0) + ";"
//         }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
//       }

//       function p(t) {
//         if (t.nodeType === e.Node.ELEMENT_NODE)
//           for (var n = t.attributes, i = 0, r = n.length; i < r; i++) {
//             var o = n[i],
//               s = o.name.toLowerCase();
//             "xmlns:ns1" !== s && 0 !== s.lastIndexOf("ns1:", 0) || (t.removeAttributeNode(o), i-- , r--)
//           }
//         var a = t.firstChild;
//         a && p(a), (a = t.nextSibling) && p(a)
//       }
//       var m = !1;
//       this.$get = ["$$sanitizeUri", function (e) {
//         return m && r(E, k),
//           function (t) {
//             var n = [];
//             return u(t, c(n, function (t, n) {
//               return !/^unsafe:/.test(e(t, n))
//             })), n.join("")
//           }
//       }], this.enableSvg = function (e) {
//         return s(e) ? (m = e, this) : m
//       }, i = t.bind, r = t.extend, o = t.forEach, s = t.isDefined, a = t.lowercase, l = t.noop, u = function (t, n) {
//         null === t || void 0 === t ? t = "" : "string" != typeof t && (t = "" + t), g.innerHTML = t;
//         var i = 5;
//         do {
//           if (0 === i) throw d("uinput", "Failed to sanitize html because the input is unstable");
//           i-- , e.document.documentMode && p(g), t = g.innerHTML, g.innerHTML = t
//         } while (t !== g.innerHTML);
//         for (var r = g.firstChild; r;) {
//           switch (r.nodeType) {
//             case 1:
//               n.start(r.nodeName.toLowerCase(), f(r.attributes));
//               break;
//             case 3:
//               n.chars(r.textContent)
//           }
//           var o;
//           if (!((o = r.firstChild) || (1 == r.nodeType && n.end(r.nodeName.toLowerCase()), o = r.nextSibling)))
//             for (; null == o && (r = r.parentNode) !== g;) o = r.nextSibling, 1 == r.nodeType && n.end(r.nodeName.toLowerCase());
//           r = o
//         }
//         for (; r = g.firstChild;) g.removeChild(r)
//       }, c = function (e, t) {
//         var n = !1,
//           r = i(e, e.push);
//         return {
//           start: function (e, i) {
//             e = a(e), !n && T[e] && (n = e), n || !0 !== E[e] || (r("<"), r(e), o(i, function (n, i) {
//               var o = a(i),
//                 s = "img" === e && "src" === o || "background" === o;
//               !0 !== A[o] || !0 === j[o] && !t(n, s) || (r(" "), r(i), r('="'), r(h(n)), r('"'))
//             }), r(">"))
//           },
//           end: function (e) {
//             e = a(e), n || !0 !== E[e] || !0 === b[e] || (r("</"), r(e), r(">")), e == n && (n = !1)
//           },
//           chars: function (e) {
//             n || r(h(e))
//           }
//         }
//       };
//       var g, v = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
//         y = /([^\#-~ |!])/g,
//         b = n("area,br,col,hr,img,wbr"),
//         $ = n("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
//         w = n("rp,rt"),
//         x = r({}, w, $),
//         S = r({}, $, n("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),
//         C = r({}, w, n("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
//         k = n("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
//         T = n("script,style"),
//         E = r({}, b, S, C, x),
//         j = n("background,cite,href,longdesc,src,xlink:href"),
//         M = n("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
//         _ = n("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
//         A = r({}, j, _, M);
//       ! function (e) {
//         var t;
//         if (!e.document || !e.document.implementation) throw d("noinert", "Can't create an inert html document");
//         var n = ((t = e.document.implementation.createHTMLDocument("inert")).documentElement || t.getDocumentElement()).getElementsByTagName("body");
//         if (1 === n.length) g = n[0];
//         else {
//           var i = t.createElement("html");
//           g = t.createElement("body"), i.appendChild(g), t.appendChild(i)
//         }
//       }(e)
//     }), t.module("ngSanitize").filter("linky", ["$sanitize", function (e) {
//       var i = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
//         r = /^mailto:/i,
//         o = t.$$minErr("linky"),
//         s = t.isDefined,
//         a = t.isFunction,
//         l = t.isObject,
//         u = t.isString;
//       return function (t, c, d) {
//         function f(e) {
//           e && y.push(n(e))
//         }
//         if (null == t || "" === t) return t;
//         if (!u(t)) throw o("notstring", "Expected string but received: {0}", t);
//         for (var h, p, m, g = a(d) ? d : l(d) ? function () {
//           return d
//         } : function () {
//           return {}
//         }, v = t, y = []; h = v.match(i);) p = h[0], h[2] || h[4] || (p = (h[3] ? "http://" : "mailto:") + p), m = h.index, f(v.substr(0, m)),
//           function (e, t) {
//             var n, i = g(e);
//             y.push("<a ");
//             for (n in i) y.push(n + '="' + i[n] + '" ');
//             !s(c) || "target" in i || y.push('target="', c, '" '), y.push('href="', e.replace(/"/g, "&quot;"), '">'), f(t), y.push("</a>")
//           }(p, h[0].replace(r, "")), v = v.substring(m + h[0].length);
//         return f(v), e(y.join(""))
//       }
//     }])
//   }(window, window.angular), !window.XMLHttpRequest || window.FileAPI && FileAPI.shouldLoad || (window.XMLHttpRequest.prototype.setRequestHeader = function (e) {
//     return function (t, n) {
//       if ("__setXHR_" === t) {
//         var i = n(this);
//         i instanceof Function && i(this)
//       } else e.apply(this, arguments)
//     }
//   }(window.XMLHttpRequest.prototype.setRequestHeader));
// var ngFileUpload = angular.module("ngFileUpload", []);
// ngFileUpload.version = "12.2.13", ngFileUpload.service("UploadBase", ["$http", "$q", "$timeout", function (e, t, n) {
//   function i(i) {
//     function r(e) {
//       u.notify && u.notify(e), c.progressFunc && n(function () {
//         c.progressFunc(e)
//       })
//     }

//     function a(e) {
//       return null != i._start && s ? {
//         loaded: e.loaded + i._start,
//         total: i._file && i._file.size || e.total,
//         type: e.type,
//         config: i,
//         lengthComputable: !0,
//         target: e.target
//       } : e
//     }

//     function l() {
//       e(i).then(function (e) {
//         if (s && i._chunkSize && !i._finished && i._file) {
//           var t = i._file && i._file.size || 0;
//           r({
//             loaded: Math.min(i._end, t),
//             total: t,
//             config: i,
//             type: "progress"
//           }), o.upload(i, !0)
//         } else i._finished && delete i._finished, u.resolve(e)
//       }, function (e) {
//         u.reject(e)
//       }, function (e) {
//         u.notify(e)
//       })
//     }
//     i.method = i.method || "POST", i.headers = i.headers || {};
//     var u = i._deferred = i._deferred || t.defer(),
//       c = u.promise;
//     return i.disableProgress || (i.headers.__setXHR_ = function () {
//       return function (e) {
//         e && e.upload && e.upload.addEventListener && (i.__XHR = e, i.xhrFn && i.xhrFn(e), e.upload.addEventListener("progress", function (e) {
//           e.config = i, r(a(e))
//         }, !1), e.upload.addEventListener("load", function (e) {
//           e.lengthComputable && (e.config = i, r(a(e)))
//         }, !1))
//       }
//     }), s ? i._chunkSize && i._end && !i._finished ? (i._start = i._end, i._end += i._chunkSize, l()) : i.resumeSizeUrl ? e.get(i.resumeSizeUrl).then(function (e) {
//       i._start = i.resumeSizeResponseReader ? i.resumeSizeResponseReader(e.data) : parseInt((null == e.data.size ? e.data : e.data.size).toString()), i._chunkSize && (i._end = i._start + i._chunkSize), l()
//     }, function (e) {
//       throw e
//     }) : i.resumeSize ? i.resumeSize().then(function (e) {
//       i._start = e, i._chunkSize && (i._end = i._start + i._chunkSize), l()
//     }, function (e) {
//       throw e
//     }) : (i._chunkSize && (i._start = 0, i._end = i._start + i._chunkSize), l()) : l(), c.success = function (e) {
//       return c.then(function (t) {
//         e(t.data, t.status, t.headers, i)
//       }), c
//     }, c.error = function (e) {
//       return c.then(null, function (t) {
//         e(t.data, t.status, t.headers, i)
//       }), c
//     }, c.progress = function (e) {
//       return c.progressFunc = e, c.then(null, null, function (t) {
//         e(t)
//       }), c
//     }, c.abort = c.pause = function () {
//       return i.__XHR && n(function () {
//         i.__XHR.abort()
//       }), c
//     }, c.xhr = function (e) {
//       return i.xhrFn = function (t) {
//         return function () {
//           t && t.apply(c, arguments), e.apply(c, arguments)
//         }
//       }(i.xhrFn), c
//     }, o.promisesCount++ , c.finally && c.finally instanceof Function && c.finally(function () {
//       o.promisesCount--
//     }), c
//   }

//   function r(e) {
//     var t = {};
//     for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
//     return t
//   }
//   var o = this;
//   o.promisesCount = 0, this.isResumeSupported = function () {
//     return window.Blob && window.Blob.prototype.slice
//   };
//   var s = this.isResumeSupported();
//   this.isUploadInProgress = function () {
//     return o.promisesCount > 0
//   }, this.rename = function (e, t) {
//     return e.ngfName = t, e
//   }, this.jsonBlob = function (e) {
//     null == e || angular.isString(e) || (e = JSON.stringify(e));
//     var t = new window.Blob([e], {
//       type: "application/json"
//     });
//     return t._ngfBlob = !0, t
//   }, this.json = function (e) {
//     return angular.toJson(e)
//   }, this.isFile = function (e) {
//     return null != e && (e instanceof window.Blob || e.flashId && e.name && e.size)
//   }, this.upload = function (e, t) {
//     function n(t, n) {
//       if (t._ngfBlob) return t;
//       if (e._file = e._file || t, null != e._start && s) {
//         e._end && e._end >= t.size && (e._finished = !0, e._end = t.size);
//         var i = t.slice(e._start, e._end || t.size);
//         return i.name = t.name, i.ngfName = t.ngfName, e._chunkSize && (n.append("_chunkSize", e._chunkSize), n.append("_currentChunkSize", e._end - e._start), n.append("_chunkNumber", Math.floor(e._start / e._chunkSize)), n.append("_totalSize", e._file.size)), i
//       }
//       return t
//     }

//     function a(t, i, r) {
//       if (void 0 !== i)
//         if (angular.isDate(i) && (i = i.toISOString()), angular.isString(i)) t.append(r, i);
//         else if (o.isFile(i)) {
//           var s = n(i, t),
//             l = r.split(",");
//           l[1] && (s.ngfName = l[1].replace(/^\s+|\s+$/g, ""), r = l[0]), e._fileKey = e._fileKey || r, t.append(r, s, s.ngfName || s.name)
//         } else if (angular.isObject(i)) {
//           if (i.$$ngfCircularDetection) throw "ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: " + r;
//           i.$$ngfCircularDetection = !0;
//           try {
//             for (var u in i)
//               if (i.hasOwnProperty(u) && "$$ngfCircularDetection" !== u) {
//                 var c = null == e.objectKey ? "[i]" : e.objectKey;
//                 i.length && parseInt(u) > -1 && (c = null == e.arrayKey ? c : e.arrayKey), a(t, i[u], r + c.replace(/[ik]/g, u))
//               }
//           } finally {
//             delete i.$$ngfCircularDetection
//           }
//         } else t.append(r, i)
//     }
//     return t || (e = r(e)), e._isDigested || (e._isDigested = !0, e._chunkSize = o.translateScalars(e.resumeChunkSize), e._chunkSize = e._chunkSize ? parseInt(e._chunkSize.toString()) : null, e.headers = e.headers || {}, e.headers["Content-Type"] = void 0, e.transformRequest = e.transformRequest ? angular.isArray(e.transformRequest) ? e.transformRequest : [e.transformRequest] : [], e.transformRequest.push(function (t) {
//       var n, i = new window.FormData;
//       t = t || e.fields || {}, e.file && (t.file = e.file);
//       for (n in t)
//         if (t.hasOwnProperty(n)) {
//           var r = t[n];
//           e.formDataAppender ? e.formDataAppender(i, n, r) : a(i, r, n)
//         }
//       return i
//     })), i(e)
//   }, this.http = function (t) {
//     return t = r(t), t.transformRequest = t.transformRequest || function (t) {
//       return window.ArrayBuffer && t instanceof window.ArrayBuffer || t instanceof window.Blob ? t : e.defaults.transformRequest[0].apply(this, arguments)
//     }, t._chunkSize = o.translateScalars(t.resumeChunkSize), t._chunkSize = t._chunkSize ? parseInt(t._chunkSize.toString()) : null, i(t)
//   }, this.translateScalars = function (e) {
//     if (angular.isString(e)) {
//       if (e.search(/kb/i) === e.length - 2) return parseFloat(1024 * e.substring(0, e.length - 2));
//       if (e.search(/mb/i) === e.length - 2) return parseFloat(1048576 * e.substring(0, e.length - 2));
//       if (e.search(/gb/i) === e.length - 2) return parseFloat(1073741824 * e.substring(0, e.length - 2));
//       if (e.search(/b/i) === e.length - 1) return parseFloat(e.substring(0, e.length - 1));
//       if (e.search(/s/i) === e.length - 1) return parseFloat(e.substring(0, e.length - 1));
//       if (e.search(/m/i) === e.length - 1) return parseFloat(60 * e.substring(0, e.length - 1));
//       if (e.search(/h/i) === e.length - 1) return parseFloat(3600 * e.substring(0, e.length - 1))
//     }
//     return e
//   }, this.urlToBlob = function (n) {
//     var i = t.defer();
//     return e({
//       url: n,
//       method: "get",
//       responseType: "arraybuffer"
//     }).then(function (e) {
//       var t = new Uint8Array(e.data),
//         r = e.headers("content-type") || "image/WebP",
//         o = new window.Blob([t], {
//           type: r
//         }),
//         s = n.match(/.*\/(.+?)(\?.*)?$/);
//       s.length > 1 && (o.name = s[1]), i.resolve(o)
//     }, function (e) {
//       i.reject(e)
//     }), i.promise
//   }, this.setDefaults = function (e) {
//     this.defaults = e || {}
//   }, this.defaults = {}, this.version = ngFileUpload.version
// }]), ngFileUpload.service("Upload", ["$parse", "$timeout", "$compile", "$q", "UploadExif", function (e, t, n, i, r) {
//   function o(e, t, n) {
//     var r = [l.emptyPromise()];
//     return angular.forEach(e, function (i, o) {
//       0 === i.type.indexOf("image/jpeg") && l.attrGetter("ngfFixOrientation", t, n, {
//         $file: i
//       }) && r.push(l.happyPromise(l.applyExifRotation(i), i).then(function (t) {
//         e.splice(o, 1, t)
//       }))
//     }), i.all(r)
//   }

//   function s(e, t, n, r) {
//     var o = l.attrGetter("ngfResize", t, n);
//     if (!o || !l.isResizeSupported() || !e.length) return l.emptyPromise();
//     if (o instanceof Function) {
//       var s = i.defer();
//       return o(e).then(function (i) {
//         a(i, e, t, n, r).then(function (e) {
//           s.resolve(e)
//         }, function (e) {
//           s.reject(e)
//         })
//       }, function (e) {
//         s.reject(e)
//       })
//     }
//     return a(o, e, t, n, r)
//   }

//   function a(e, t, n, r, o) {
//     for (var s = [l.emptyPromise()], a = 0; a < t.length; a++) ! function (i, a) {
//       if (0 === i.type.indexOf("image")) {
//         if (e.pattern && !l.validatePattern(i, e.pattern)) return;
//         e.resizeIf = function (e, t) {
//           return l.attrGetter("ngfResizeIf", n, r, {
//             $width: e,
//             $height: t,
//             $file: i
//           })
//         };
//         var u = l.resize(i, e);
//         s.push(u), u.then(function (e) {
//           t.splice(a, 1, e)
//         }, function (e) {
//           i.$error = "resize", (i.$errorMessages = i.$errorMessages || {}).resize = !0, i.$errorParam = (e ? (e.message ? e.message : e) + ": " : "") + (i && i.name), o.$ngfValidations.push({
//             name: "resize",
//             valid: !1
//           }), l.applyModelValidation(o, t)
//         })
//       }
//     }(t[a], a);
//     return i.all(s)
//   }
//   var l = r;
//   return l.getAttrWithDefaults = function (e, t) {
//     if (null != e[t]) return e[t];
//     var n = l.defaults[t];
//     return null == n ? n : angular.isString(n) ? n : JSON.stringify(n)
//   }, l.attrGetter = function (t, n, i, r) {
//     var o = this.getAttrWithDefaults(n, t);
//     if (!i) return o;
//     try {
//       return r ? e(o)(i, r) : e(o)(i)
//     } catch (e) {
//       if (t.search(/min|max|pattern/i)) return o;
//       throw e
//     }
//   }, l.shouldUpdateOn = function (e, t, n) {
//     var i = l.attrGetter("ngfModelOptions", t, n);
//     return !i || !i.updateOn || i.updateOn.split(" ").indexOf(e) > -1
//   }, l.emptyPromise = function () {
//     var e = i.defer(),
//       n = arguments;
//     return t(function () {
//       e.resolve.apply(e, n)
//     }), e.promise
//   }, l.rejectPromise = function () {
//     var e = i.defer(),
//       n = arguments;
//     return t(function () {
//       e.reject.apply(e, n)
//     }), e.promise
//   }, l.happyPromise = function (e, n) {
//     var r = i.defer();
//     return e.then(function (e) {
//       r.resolve(e)
//     }, function (e) {
//       t(function () {
//         throw e
//       }), r.resolve(n)
//     }), r.promise
//   }, l.updateModel = function (n, i, r, a, u, c, d) {
//     function f(o, s, u, d, f) {
//       i.$$ngfPrevValidFiles = o, i.$$ngfPrevInvalidFiles = s;
//       var h = o && o.length ? o[0] : null,
//         p = s && s.length ? s[0] : null;
//       n && (l.applyModelValidation(n, o), n.$setViewValue(f ? h : o)), a && e(a)(r, {
//         $files: o,
//         $file: h,
//         $newFiles: u,
//         $duplicateFiles: d,
//         $invalidFiles: s,
//         $invalidFile: p,
//         $event: c
//       });
//       var m = l.attrGetter("ngfModelInvalid", i);
//       m && t(function () {
//         e(m).assign(r, f ? p : s)
//       }), t(function () { })
//     }

//     function h() {
//       function e() {
//         t(function () {
//           f($ ? m.concat(b) : b, $ ? g.concat(y) : y, u, v, w)
//         }, S && S.debounce ? S.debounce.change || S.debounce : 0)
//       }
//       var o = x ? p : b;
//       s(o, i, r, n).then(function () {
//         x ? l.validate(p, $ ? m.length : 0, n, i, r).then(function (t) {
//           b = t.validsFiles, y = t.invalidsFiles, e()
//         }) : e()
//       }, function () {
//         for (var t = 0; t < o.length; t++) {
//           var n = o[t];
//           if ("resize" === n.$error) {
//             var i = b.indexOf(n);
//             i > -1 && (b.splice(i, 1), y.push(n)), e()
//           }
//         }
//       })
//     }
//     var p, m, g, v = [],
//       y = [],
//       b = [];
//     m = i.$$ngfPrevValidFiles || [], g = i.$$ngfPrevInvalidFiles || [], n && n.$modelValue && (m = function (e) {
//       return angular.isArray(e) ? e : [e]
//     }(n.$modelValue));
//     var $ = l.attrGetter("ngfKeep", i, r);
//     p = (u || []).slice(0), ("distinct" === $ || !0 === l.attrGetter("ngfKeepDistinct", i, r)) && function () {
//       function e(e, t) {
//         return e.name === t.name && (e.$ngfOrigSize || e.size) === (t.$ngfOrigSize || t.size) && e.type === t.type
//       }
//       if (u) {
//         p = [], v = [];
//         for (var t = 0; t < u.length; t++) ! function (t) {
//           var n;
//           for (n = 0; n < m.length; n++)
//             if (e(t, m[n])) return !0;
//           for (n = 0; n < g.length; n++)
//             if (e(t, g[n])) return !0;
//           return !1
//         }(u[t]) ? p.push(u[t]) : v.push(u[t])
//       }
//     }();
//     var w = !$ && !l.attrGetter("ngfMultiple", i, r) && !l.attrGetter("multiple", i);
//     if (!$ || p.length) {
//       l.attrGetter("ngfBeforeModelChange", i, r, {
//         $files: u,
//         $file: u && u.length ? u[0] : null,
//         $newFiles: p,
//         $duplicateFiles: v,
//         $event: c
//       });
//       var x = l.attrGetter("ngfValidateAfterResize", i, r),
//         S = l.attrGetter("ngfModelOptions", i, r);
//       l.validate(p, $ ? m.length : 0, n, i, r).then(function (e) {
//         d ? f(p, [], u, v, w) : (S && S.allowInvalid || x ? b = p : (b = e.validFiles, y = e.invalidFiles), l.attrGetter("ngfFixOrientation", i, r) && l.isExifSupported() ? o(b, i, r).then(function () {
//           h()
//         }) : h())
//       })
//     }
//   }, l
// }]), ngFileUpload.directive("ngfSelect", ["$parse", "$timeout", "$compile", "Upload", function (e, t, n, i) {
//   function r(e) {
//     var t = e.match(/Android[^\d]*(\d+)\.(\d+)/);
//     if (t && t.length > 2) {
//       var n = i.defaults.androidFixMinorVersion || 4;
//       return parseInt(t[1]) < 4 || parseInt(t[1]) === n && parseInt(t[2]) < n
//     }
//     return -1 === e.indexOf("Chrome") && /.*Windows.*Safari.*/.test(e)
//   }

//   function o(e, t, n, i, o, a, l, u) {
//     function c() {
//       return "input" === t[0].tagName.toLowerCase() && n.type && "file" === n.type.toLowerCase()
//     }

//     function d() {
//       return v("ngfChange") || v("ngfSelect")
//     }

//     function f(t) {
//       if (u.shouldUpdateOn("change", n, e)) {
//         var r = t.__files_ || t.target && t.target.files,
//           o = [];
//         if (!r) return;
//         for (var s = 0; s < r.length; s++) o.push(r[s]);
//         u.updateModel(i, n, e, d(), o.length ? o : null, t)
//       }
//     }

//     function h(e, i) {
//       function r(t) {
//         e.attr("id", "ngf-" + t), i.attr("id", "ngf-label-" + t)
//       }
//       for (var o = 0; o < t[0].attributes.length; o++) {
//         var s = t[0].attributes[o];
//         "type" !== s.name && "class" !== s.name && "style" !== s.name && ("id" === s.name ? (r(s.value), y.push(n.$observe("id", r))) : e.attr(s.name, s.value || "required" !== s.name && "multiple" !== s.name ? s.value : s.name))
//       }
//     }

//     function p(e) {
//       var t = e.changedTouches || e.originalEvent && e.originalEvent.changedTouches;
//       if (t) {
//         if ("touchstart" === e.type) return $ = t[0].clientX, b = t[0].clientY, !0;
//         if ("touchend" === e.type) {
//           var n = t[0].clientX,
//             i = t[0].clientY;
//           if (Math.abs(n - $) > 20 || Math.abs(i - b) > 20) return e.stopPropagation(), e.preventDefault(), !1
//         }
//         return !0
//       }
//     }

//     function m(t) {
//       u.shouldUpdateOn("click", n, e) && w.val() && (w.val(null), u.updateModel(i, n, e, d(), null, t, !0))
//     }

//     function g(e) {
//       if (w && !w.attr("__ngf_ie10_Fix_")) {
//         if (!w[0].parentNode) return void (w = null);
//         e.preventDefault(), e.stopPropagation(), w.unbind("click");
//         var t = w.clone();
//         return w.replaceWith(t), (w = t).attr("__ngf_ie10_Fix_", "true"), w.bind("change", f), w.bind("click", g), w[0].click(), !1
//       }
//       w.removeAttr("__ngf_ie10_Fix_")
//     }
//     var v = function (e, t) {
//       return u.attrGetter(e, n, t)
//     };
//     u.registerModelChangeValidator(i, n, e);
//     var y = [];
//     v("ngfMultiple") && y.push(e.$watch(v("ngfMultiple"), function () {
//       w.attr("multiple", v("ngfMultiple", e))
//     })), v("ngfCapture") && y.push(e.$watch(v("ngfCapture"), function () {
//       w.attr("capture", v("ngfCapture", e))
//     })), v("ngfAccept") && y.push(e.$watch(v("ngfAccept"), function () {
//       w.attr("accept", v("ngfAccept", e))
//     })), y.push(n.$observe("accept", function () {
//       w.attr("accept", v("accept"))
//     }));
//     var b = 0,
//       $ = 0,
//       w = t;
//     c() || (w = function () {
//       if (c()) return t;
//       var e = angular.element('<input type="file">'),
//         n = angular.element("<label>upload</label>");
//       return n.css("visibility", "hidden").css("position", "absolute").css("overflow", "hidden").css("width", "0px").css("height", "0px").css("border", "none").css("margin", "0px").css("padding", "0px").attr("tabindex", "-1"), h(e, n), s.push({
//         el: t,
//         ref: n
//       }), document.body.appendChild(n.append(e)[0]), e
//     }()), w.bind("change", f), c() ? t.bind("click", m) : t.bind("click touchstart touchend", function (n) {
//       if (t.attr("disabled")) return !1;
//       if (!v("ngfSelectDisabled", e)) {
//         var i = p(n);
//         if (null != i) return i;
//         m(n);
//         try {
//           c() || document.body.contains(w[0]) || (s.push({
//             el: t,
//             ref: w.parent()
//           }), document.body.appendChild(w.parent()[0]), w.bind("change", f))
//         } catch (e) { }
//         return r(navigator.userAgent) ? setTimeout(function () {
//           w[0].click()
//         }, 0) : w[0].click(), !1
//       }
//     }), -1 !== navigator.appVersion.indexOf("MSIE 10") && w.bind("click", g), i && i.$formatters.push(function (e) {
//       return (null == e || 0 === e.length) && w.val() && w.val(null), e
//     }), e.$on("$destroy", function () {
//       c() || w.parent().remove(), angular.forEach(y, function (e) {
//         e()
//       })
//     }), a(function () {
//       for (var e = 0; e < s.length; e++) {
//         var t = s[e];
//         document.body.contains(t.el[0]) || (s.splice(e, 1), t.ref.remove())
//       }
//     }), window.FileAPI && window.FileAPI.ngfFixIE && window.FileAPI.ngfFixIE(t, w, f)
//   }
//   var s = [];
//   return {
//     restrict: "AEC",
//     require: "?ngModel",
//     link: function (e, n, r, s) {
//       o(e, n, r, s, 0, t, 0, i)
//     }
//   }
// }]),
//   function () {
//     function e(e) {
//       return "img" === e.tagName.toLowerCase() ? "image" : "audio" === e.tagName.toLowerCase() ? "audio" : "video" === e.tagName.toLowerCase() ? "video" : /./
//     }

//     function t(t, n, i, r, o, s, a, l) {
//       function u(e) {
//         var s = t.attrGetter("ngfNoObjectUrl", o, i);
//         t.dataUrl(e, s).finally(function () {
//           n(function () {
//             var t = (s ? e.$ngfDataUrl : e.$ngfBlobUrl) || e.$ngfDataUrl;
//             l ? r.css("background-image", "url('" + (t || "") + "')") : r.attr("src", t), t ? r.removeClass("ng-hide") : r.addClass("ng-hide")
//           })
//         })
//       }
//       n(function () {
//         var n = i.$watch(o[s], function (n) {
//           var c = a;
//           if ("ngfThumbnail" === s && (c || (c = {
//             width: r[0].naturalWidth || r[0].clientWidth,
//             height: r[0].naturalHeight || r[0].clientHeight
//           }), 0 === c.width && window.getComputedStyle)) {
//             var d = getComputedStyle(r[0]);
//             d.width && d.width.indexOf("px") > -1 && d.height && d.height.indexOf("px") > -1 && (c = {
//               width: parseInt(d.width.slice(0, -2)),
//               height: parseInt(d.height.slice(0, -2))
//             })
//           }
//           return angular.isString(n) ? (r.removeClass("ng-hide"), l ? r.css("background-image", "url('" + n + "')") : r.attr("src", n)) : void (!n || !n.type || 0 !== n.type.search(e(r[0])) || l && 0 !== n.type.indexOf("image") ? r.addClass("ng-hide") : c && t.isResizeSupported() ? (c.resizeIf = function (e, r) {
//             return t.attrGetter("ngfResizeIf", o, i, {
//               $width: e,
//               $height: r,
//               $file: n
//             })
//           }, t.resize(n, c).then(function (e) {
//             u(e)
//           }, function (e) {
//             throw e
//           })) : u(n))
//         });
//         i.$on("$destroy", function () {
//           n()
//         })
//       })
//     }
//     ngFileUpload.service("UploadDataUrl", ["UploadBase", "$timeout", "$q", function (e, t, n) {
//       var i = e;
//       return i.base64DataUrl = function (e) {
//         if (angular.isArray(e)) {
//           var t = n.defer(),
//             r = 0;
//           return angular.forEach(e, function (n) {
//             i.dataUrl(n, !0).finally(function () {
//               if (++r === e.length) {
//                 var n = [];
//                 angular.forEach(e, function (e) {
//                   n.push(e.$ngfDataUrl)
//                 }), t.resolve(n, e)
//               }
//             })
//           }), t.promise
//         }
//         return i.dataUrl(e, !0)
//       }, i.dataUrl = function (e, r) {
//         if (!e) return i.emptyPromise(e, e);
//         if (r && null != e.$ngfDataUrl || !r && null != e.$ngfBlobUrl) return i.emptyPromise(r ? e.$ngfDataUrl : e.$ngfBlobUrl, e);
//         var o = r ? e.$$ngfDataUrlPromise : e.$$ngfBlobUrlPromise;
//         if (o) return o;
//         var s = n.defer();
//         return t(function () {
//           if (window.FileReader && e && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 8") || e.size < 2e4) && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 9") || e.size < 4e6)) {
//             var n = window.URL || window.webkitURL;
//             if (n && n.createObjectURL && !r) {
//               var o;
//               try {
//                 o = n.createObjectURL(e)
//               } catch (n) {
//                 return void t(function () {
//                   e.$ngfBlobUrl = "", s.reject()
//                 })
//               }
//               t(function () {
//                 if (e.$ngfBlobUrl = o, o) {
//                   s.resolve(o, e), i.blobUrls = i.blobUrls || [], i.blobUrlsTotalSize = i.blobUrlsTotalSize || 0, i.blobUrls.push({
//                     url: o,
//                     size: e.size
//                   }), i.blobUrlsTotalSize += e.size || 0;
//                   for (var t = i.defaults.blobUrlsMaxMemory || 268435456, r = i.defaults.blobUrlsMaxQueueSize || 200;
//                     (i.blobUrlsTotalSize > t || i.blobUrls.length > r) && i.blobUrls.length > 1;) {
//                     var a = i.blobUrls.splice(0, 1)[0];
//                     n.revokeObjectURL(a.url), i.blobUrlsTotalSize -= a.size
//                   }
//                 }
//               })
//             } else {
//               var a = new FileReader;
//               a.onload = function (n) {
//                 t(function () {
//                   e.$ngfDataUrl = n.target.result, s.resolve(n.target.result, e), t(function () {
//                     delete e.$ngfDataUrl
//                   }, 1e3)
//                 })
//               }, a.onerror = function () {
//                 t(function () {
//                   e.$ngfDataUrl = "", s.reject()
//                 })
//               }, a.readAsDataURL(e)
//             }
//           } else t(function () {
//             e[r ? "$ngfDataUrl" : "$ngfBlobUrl"] = "", s.reject()
//           })
//         }), (o = r ? e.$$ngfDataUrlPromise = s.promise : e.$$ngfBlobUrlPromise = s.promise).finally(function () {
//           delete e[r ? "$$ngfDataUrlPromise" : "$$ngfBlobUrlPromise"]
//         }), o
//       }, i
//     }]), ngFileUpload.directive("ngfSrc", ["Upload", "$timeout", function (e, n) {
//       return {
//         restrict: "AE",
//         link: function (i, r, o) {
//           t(e, n, i, r, o, "ngfSrc", e.attrGetter("ngfResize", o, i), !1)
//         }
//       }
//     }]), ngFileUpload.directive("ngfBackground", ["Upload", "$timeout", function (e, n) {
//       return {
//         restrict: "AE",
//         link: function (i, r, o) {
//           t(e, n, i, r, o, "ngfBackground", e.attrGetter("ngfResize", o, i), !0)
//         }
//       }
//     }]), ngFileUpload.directive("ngfThumbnail", ["Upload", "$timeout", function (e, n) {
//       return {
//         restrict: "AE",
//         link: function (i, r, o) {
//           var s = e.attrGetter("ngfSize", o, i);
//           t(e, n, i, r, o, "ngfThumbnail", s, e.attrGetter("ngfAsBackground", o, i))
//         }
//       }
//     }]), ngFileUpload.config(["$compileProvider", function (e) {
//       e.imgSrcSanitizationWhitelist && e.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/), e.aHrefSanitizationWhitelist && e.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/)
//     }]), ngFileUpload.filter("ngfDataUrl", ["UploadDataUrl", "$sce", function (e, t) {
//       return function (n, i, r) {
//         if (angular.isString(n)) return t.trustAsResourceUrl(n);
//         var o = n && ((i ? n.$ngfDataUrl : n.$ngfBlobUrl) || n.$ngfDataUrl);
//         return n && !o ? (!n.$ngfDataUrlFilterInProgress && angular.isObject(n) && (n.$ngfDataUrlFilterInProgress = !0, e.dataUrl(n, i)), "") : (n && delete n.$ngfDataUrlFilterInProgress, (n && o ? r ? t.trustAsResourceUrl(o) : o : n) || "")
//       }
//     }])
//   }(), ngFileUpload.service("UploadValidate", ["UploadDataUrl", "$q", "$timeout", function (e, t, n) {
//     function i(e) {
//       var t = "",
//         n = [];
//       if (e.length > 2 && "/" === e[0] && "/" === e[e.length - 1]) t = e.substring(1, e.length - 1);
//       else {
//         var r = e.split(",");
//         if (r.length > 1)
//           for (var o = 0; o < r.length; o++) {
//             var s = i(r[o]);
//             s.regexp ? (t += "(" + s.regexp + ")", o < r.length - 1 && (t += "|")) : n = n.concat(s.excludes)
//           } else 0 === e.indexOf("!") ? n.push("^((?!" + i(e.substring(1)).regexp + ").)*$") : (0 === e.indexOf(".") && (e = "*" + e), t = "^" + e.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g"), "\\$&") + "$", t = t.replace(/\\\*/g, ".*").replace(/\\\?/g, "."))
//       }
//       return {
//         regexp: t,
//         excludes: n
//       }
//     }

//     function r(e, t) {
//       null == t || e.$dirty || (e.$setDirty ? e.$setDirty() : e.$dirty = !0)
//     }
//     var o = e;
//     return o.validatePattern = function (e, t) {
//       if (!t) return !0;
//       var n = i(t),
//         r = !0;
//       if (n.regexp && n.regexp.length) {
//         var o = new RegExp(n.regexp, "i");
//         r = null != e.type && o.test(e.type) || null != e.name && o.test(e.name)
//       }
//       for (var s = n.excludes.length; s--;) {
//         var a = new RegExp(n.excludes[s], "i");
//         r = r && (null == e.type || a.test(e.type)) && (null == e.name || a.test(e.name))
//       }
//       return r
//     }, o.ratioToFloat = function (e) {
//       var t = e.toString(),
//         n = t.search(/[x:]/i);
//       return t = n > -1 ? parseFloat(t.substring(0, n)) / parseFloat(t.substring(n + 1)) : parseFloat(t)
//     }, o.registerModelChangeValidator = function (e, t, n) {
//       e && e.$formatters.push(function (i) {
//         if (e.$dirty) {
//           var r = i;
//           i && !angular.isArray(i) && (r = [i]), o.validate(r, 0, e, t, n).then(function () {
//             o.applyModelValidation(e, r)
//           })
//         }
//         return i
//       })
//     }, o.applyModelValidation = function (e, t) {
//       r(e, t), angular.forEach(e.$ngfValidations, function (t) {
//         e.$setValidity(t.name, t.valid)
//       })
//     }, o.getValidationAttr = function (e, t, n, i, r) {
//       var s = "ngf" + n[0].toUpperCase() + n.substr(1),
//         a = o.attrGetter(s, e, t, {
//           $file: r
//         });
//       if (null == a && (a = o.attrGetter("ngfValidate", e, t, {
//         $file: r
//       }))) {
//         var l = (i || n).split(".");
//         a = a[l[0]], l.length > 1 && (a = a && a[l[1]])
//       }
//       return a
//     }, o.validate = function (e, n, i, r, s) {
//       function a(t, n, a) {
//         if (e) {
//           for (var l = e.length, u = null; l--;) {
//             var h = e[l];
//             if (h) {
//               var p = o.getValidationAttr(r, s, t, n, h);
//               null != p && (a(h, p, l) || (-1 === c.indexOf(t) ? (h.$error = t, (h.$errorMessages = h.$errorMessages || {})[t] = !0, h.$errorParam = p, -1 === f.indexOf(h) && f.push(h), d || e.splice(l, 1), u = !1) : e.splice(l, 1)))
//             }
//           }
//           null !== u && i.$ngfValidations.push({
//             name: t,
//             valid: u
//           })
//         }
//       }

//       function l(n, a, l, h, p) {
//         function m(t, i, r) {
//           function o(o) {
//             if (o())
//               if (-1 === c.indexOf(n)) {
//                 if (i.$error = n, (i.$errorMessages = i.$errorMessages || {})[n] = !0, i.$errorParam = r, -1 === f.indexOf(i) && f.push(i), !d) {
//                   var s = e.indexOf(i);
//                   s > -1 && e.splice(s, 1)
//                 }
//                 t.resolve(!1)
//               } else {
//                 var a = e.indexOf(i);
//                 a > -1 && e.splice(a, 1), t.resolve(!0)
//               }
//             else t.resolve(!0)
//           }
//           null != r ? h(i, r).then(function (e) {
//             o(function () {
//               return !p(e, r)
//             })
//           }, function () {
//             o(function () {
//               return u("ngfValidateForce", {
//                 $file: i
//               })
//             })
//           }) : t.resolve(!0)
//         }
//         var g = [o.emptyPromise(!0)];
//         e && (e = void 0 === e.length ? [e] : e, angular.forEach(e, function (e) {
//           var i = t.defer();
//           return g.push(i.promise), !l || null != e.type && 0 === e.type.search(l) ? void ("dimensions" === n && null != o.attrGetter("ngfDimensions", r) ? o.imageDimensions(e).then(function (t) {
//             m(i, e, u("ngfDimensions", {
//               $file: e,
//               $width: t.width,
//               $height: t.height
//             }))
//           }, function () {
//             i.resolve(!1)
//           }) : "duration" === n && null != o.attrGetter("ngfDuration", r) ? o.mediaDuration(e).then(function (t) {
//             m(i, e, u("ngfDuration", {
//               $file: e,
//               $duration: t
//             }))
//           }, function () {
//             i.resolve(!1)
//           }) : m(i, e, o.getValidationAttr(r, s, n, a, e))) : void i.resolve(!0)
//         }));
//         var v = t.defer();
//         return t.all(g).then(function (e) {
//           for (var t = !0, r = 0; r < e.length; r++)
//             if (!e[r]) {
//               t = !1;
//               break
//             }
//           i.$ngfValidations.push({
//             name: n,
//             valid: t
//           }), v.resolve(t)
//         }), v.promise
//       } (i = i || {}).$ngfValidations = i.$ngfValidations || [], angular.forEach(i.$ngfValidations, function (e) {
//         e.valid = !0
//       });
//       var u = function (e, t) {
//         return o.attrGetter(e, r, s, t)
//       },
//         c = (o.attrGetter("ngfIgnoreInvalid", r, s) || "").split(" "),
//         d = o.attrGetter("ngfRunAllValidations", r, s);
//       if (null == e || 0 === e.length) return o.emptyPromise({
//         validFiles: e,
//         invalidFiles: []
//       });
//       e = void 0 === e.length ? [e] : e.slice(0);
//       var f = [];
//       a("pattern", null, o.validatePattern), a("minSize", "size.min", function (e, t) {
//         return e.size + .1 >= o.translateScalars(t)
//       }), a("maxSize", "size.max", function (e, t) {
//         return e.size - .1 <= o.translateScalars(t)
//       });
//       var h = 0;
//       if (a("maxTotalSize", null, function (t, n) {
//         return !((h += t.size) > o.translateScalars(n) && (e.splice(0, e.length), 1))
//       }), a("validateFn", null, function (e, t) {
//         return !0 === t || null === t || "" === t
//       }), !e.length) return o.emptyPromise({
//         validFiles: [],
//         invalidFiles: f
//       });
//       var p = t.defer(),
//         m = [];
//       return m.push(l("maxHeight", "height.max", /image/, this.imageDimensions, function (e, t) {
//         return e.height <= t
//       })), m.push(l("minHeight", "height.min", /image/, this.imageDimensions, function (e, t) {
//         return e.height >= t
//       })), m.push(l("maxWidth", "width.max", /image/, this.imageDimensions, function (e, t) {
//         return e.width <= t
//       })), m.push(l("minWidth", "width.min", /image/, this.imageDimensions, function (e, t) {
//         return e.width >= t
//       })), m.push(l("dimensions", null, /image/, function (e, t) {
//         return o.emptyPromise(t)
//       }, function (e) {
//         return e
//       })), m.push(l("ratio", null, /image/, this.imageDimensions, function (e, t) {
//         for (var n = t.toString().split(","), i = !1, r = 0; r < n.length; r++) Math.abs(e.width / e.height - o.ratioToFloat(n[r])) < .01 && (i = !0);
//         return i
//       })), m.push(l("maxRatio", "ratio.max", /image/, this.imageDimensions, function (e, t) {
//         return e.width / e.height - o.ratioToFloat(t) < 1e-4
//       })), m.push(l("minRatio", "ratio.min", /image/, this.imageDimensions, function (e, t) {
//         return e.width / e.height - o.ratioToFloat(t) > -1e-4
//       })), m.push(l("maxDuration", "duration.max", /audio|video/, this.mediaDuration, function (e, t) {
//         return e <= o.translateScalars(t)
//       })), m.push(l("minDuration", "duration.min", /audio|video/, this.mediaDuration, function (e, t) {
//         return e >= o.translateScalars(t)
//       })), m.push(l("duration", null, /audio|video/, function (e, t) {
//         return o.emptyPromise(t)
//       }, function (e) {
//         return e
//       })), m.push(l("validateAsyncFn", null, null, function (e, t) {
//         return t
//       }, function (e) {
//         return !0 === e || null === e || "" === e
//       })), t.all(m).then(function () {
//         if (d)
//           for (var t = 0; t < e.length; t++) e[t].$error && e.splice(t--, 1);
//         d = !1, a("maxFiles", null, function (e, t, i) {
//           return t > n + i
//         }), p.resolve({
//           validFiles: e,
//           invalidFiles: f
//         })
//       }), p.promise
//     }, o.imageDimensions = function (e) {
//       if (e.$ngfWidth && e.$ngfHeight) {
//         var i = t.defer();
//         return n(function () {
//           i.resolve({
//             width: e.$ngfWidth,
//             height: e.$ngfHeight
//           })
//         }), i.promise
//       }
//       if (e.$ngfDimensionPromise) return e.$ngfDimensionPromise;
//       var r = t.defer();
//       return n(function () {
//         return 0 !== e.type.indexOf("image") ? void r.reject("not image") : void o.dataUrl(e).then(function (t) {
//           function i() {
//             var t = a[0].naturalWidth || a[0].clientWidth,
//               n = a[0].naturalHeight || a[0].clientHeight;
//             a.remove(), e.$ngfWidth = t, e.$ngfHeight = n, r.resolve({
//               width: t,
//               height: n
//             })
//           }

//           function o() {
//             a.remove(), r.reject("load error")
//           }

//           function s() {
//             n(function () {
//               a[0].parentNode && (a[0].clientWidth ? i() : l++ > 10 ? o() : s())
//             }, 1e3)
//           }
//           var a = angular.element("<img>").attr("src", t).css("visibility", "hidden").css("position", "fixed").css("max-width", "none !important").css("max-height", "none !important");
//           a.on("load", i), a.on("error", o);
//           var l = 0;
//           s(), angular.element(document.getElementsByTagName("body")[0]).append(a)
//         }, function () {
//           r.reject("load error")
//         })
//       }), e.$ngfDimensionPromise = r.promise, e.$ngfDimensionPromise.finally(function () {
//         delete e.$ngfDimensionPromise
//       }), e.$ngfDimensionPromise
//     }, o.mediaDuration = function (e) {
//       if (e.$ngfDuration) {
//         var i = t.defer();
//         return n(function () {
//           i.resolve(e.$ngfDuration)
//         }), i.promise
//       }
//       if (e.$ngfDurationPromise) return e.$ngfDurationPromise;
//       var r = t.defer();
//       return n(function () {
//         return 0 !== e.type.indexOf("audio") && 0 !== e.type.indexOf("video") ? void r.reject("not media") : void o.dataUrl(e).then(function (t) {
//           function i() {
//             var t = a[0].duration;
//             e.$ngfDuration = t, a.remove(), r.resolve(t)
//           }

//           function o() {
//             a.remove(), r.reject("load error")
//           }

//           function s() {
//             n(function () {
//               a[0].parentNode && (a[0].duration ? i() : l > 10 ? o() : s())
//             }, 1e3)
//           }
//           var a = angular.element(0 === e.type.indexOf("audio") ? "<audio>" : "<video>").attr("src", t).css("visibility", "none").css("position", "fixed");
//           a.on("loadedmetadata", i), a.on("error", o);
//           var l = 0;
//           s(), angular.element(document.body).append(a)
//         }, function () {
//           r.reject("load error")
//         })
//       }), e.$ngfDurationPromise = r.promise, e.$ngfDurationPromise.finally(function () {
//         delete e.$ngfDurationPromise
//       }), e.$ngfDurationPromise
//     }, o
//   }]), ngFileUpload.service("UploadResize", ["UploadValidate", "$q", function (e, t) {
//     var n = e,
//       i = function (e, t, n, i, r) {
//         var o = r ? Math.max(n / e, i / t) : Math.min(n / e, i / t);
//         return {
//           width: e * o,
//           height: t * o,
//           marginX: e * o - n,
//           marginY: t * o - i
//         }
//       },
//       r = function (e, r, o, s, a, l, u, c) {
//         var d = t.defer(),
//           f = document.createElement("canvas"),
//           h = document.createElement("img");
//         return h.setAttribute("style", "visibility:hidden;position:fixed;z-index:-100000"), document.body.appendChild(h), h.onload = function () {
//           var e = h.width,
//             t = h.height;
//           if (h.parentNode.removeChild(h), null == c || !1 !== c(e, t)) try {
//             if (l) {
//               var p = n.ratioToFloat(l);
//               p > e / t ? (r = e, o = r / p) : (o = t, r = o * p)
//             }
//             r || (r = e), o || (o = t);
//             var m = i(e, t, r, o, u);
//             f.width = Math.min(m.width, r), f.height = Math.min(m.height, o), f.getContext("2d").drawImage(h, Math.min(0, -m.marginX / 2), Math.min(0, -m.marginY / 2), m.width, m.height), d.resolve(f.toDataURL(a || "image/WebP", s || .934))
//           } catch (e) {
//             d.reject(e)
//           } else d.reject("resizeIf")
//         }, h.onerror = function () {
//           h.parentNode.removeChild(h), d.reject()
//         }, h.src = e, d.promise
//       };
//     return n.dataUrltoBlob = function (e, t, n) {
//       for (var i = e.split(","), r = i[0].match(/:(.*?);/)[1], o = atob(i[1]), s = o.length, a = new Uint8Array(s); s--;) a[s] = o.charCodeAt(s);
//       var l = new window.Blob([a], {
//         type: r
//       });
//       return l.name = t, l.$ngfOrigSize = n, l
//     }, n.isResizeSupported = function () {
//       var e = document.createElement("canvas");
//       return window.atob && e.getContext && e.getContext("2d") && window.Blob
//     }, n.isResizeSupported() && Object.defineProperty(window.Blob.prototype, "name", {
//       get: function () {
//         return this.$ngfName
//       },
//       set: function (e) {
//         this.$ngfName = e
//       },
//       configurable: !0
//     }), n.resize = function (e, i) {
//       if (0 !== e.type.indexOf("image")) return n.emptyPromise(e);
//       var o = t.defer();
//       return n.dataUrl(e, !0).then(function (t) {
//         r(t, i.width, i.height, i.quality, i.type || e.type, i.ratio, i.centerCrop, i.resizeIf).then(function (r) {
//           if ("image/jpeg" === e.type && !1 !== i.restoreExif) try {
//             r = n.restoreExif(t, r)
//           } catch (e) {
//             setTimeout(function () {
//               throw e
//             }, 1)
//           }
//           try {
//             var s = n.dataUrltoBlob(r, e.name, e.size);
//             o.resolve(s)
//           } catch (e) {
//             o.reject(e)
//           }
//         }, function (t) {
//           "resizeIf" === t && o.resolve(e), o.reject(t)
//         })
//       }, function (e) {
//         o.reject(e)
//       }), o.promise
//     }, n
//   }]),
//   function () {
//     function e(e, n, i, r, o, s, a, l, u, c) {
//       function d() {
//         return n.attr("disabled") || y("ngfDropDisabled", e)
//       }

//       function f(t, n, i) {
//         if (t) {
//           var r;
//           try {
//             r = t && t.getData && t.getData("text/html")
//           } catch (e) { }
//           g(t.items, t.files, !1 !== y("ngfAllowDir", e), y("multiple") || y("ngfMultiple", e)).then(function (e) {
//             e.length ? h(e, n) : p(i, r).then(function (e) {
//               h(e, n)
//             })
//           })
//         }
//       }

//       function h(t, n) {
//         l.updateModel(r, i, e, y("ngfChange") || y("ngfDrop"), t, n)
//       }

//       function p(t, n) {
//         if (!l.shouldUpdateOn(t, i, e) || "string" != typeof n) return l.rejectPromise([]);
//         var r = [];
//         n.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi, function (e, t, n) {
//           r.push(n)
//         });
//         var o = [],
//           s = [];
//         if (r.length) {
//           angular.forEach(r, function (e) {
//             o.push(l.urlToBlob(e).then(function (e) {
//               s.push(e)
//             }))
//           });
//           var a = c.defer();
//           return c.all(o).then(function () {
//             a.resolve(s)
//           }, function (e) {
//             a.reject(e)
//           }), a.promise
//         }
//         return l.emptyPromise()
//       }

//       function m(e, t, n, i) {
//         var r = y("ngfDragOverClass", e, {
//           $event: n
//         }),
//           o = "dragover";
//         if (angular.isString(r)) o = r;
//         else if (r && (r.delay && (x = r.delay), r.accept || r.reject)) {
//           var s = n.dataTransfer.items;
//           if (null != s && s.length)
//             for (var a = r.pattern || y("ngfPattern", e, {
//               $event: n
//             }), u = s.length; u--;) {
//               if (!l.validatePattern(s[u], a)) {
//                 o = r.reject;
//                 break
//               }
//               o = r.accept
//             } else o = r.accept
//         }
//         i(o)
//       }

//       function g(t, n, r, o) {
//         function s(e, t) {
//           var n = c.defer();
//           if (null != e)
//             if (e.isDirectory) {
//               var i = [l.emptyPromise()];
//               if (f) {
//                 var r = {
//                   type: "directory"
//                 };
//                 r.name = r.path = (t || "") + e.name, h.push(r)
//               }
//               var o = e.createReader(),
//                 a = [],
//                 m = function () {
//                   o.readEntries(function (r) {
//                     try {
//                       r.length ? (a = a.concat(Array.prototype.slice.call(r || [], 0)), m()) : (angular.forEach(a.slice(0), function (n) {
//                         h.length <= u && d >= p && i.push(s(n, (t || "") + e.name + "/"))
//                       }), c.all(i).then(function () {
//                         n.resolve()
//                       }, function (e) {
//                         n.reject(e)
//                       }))
//                     } catch (e) {
//                       n.reject(e)
//                     }
//                   }, function (e) {
//                     n.reject(e)
//                   })
//                 };
//               m()
//             } else e.file(function (e) {
//               try {
//                 e.path = (t || "") + e.name, f && (e = l.rename(e, e.path)), h.push(e), p += e.size, n.resolve()
//               } catch (e) {
//                 n.reject(e)
//               }
//             }, function (e) {
//               n.reject(e)
//             });
//           return n.promise
//         }
//         var u = l.getValidationAttr(i, e, "maxFiles");
//         null == u && (u = Number.MAX_VALUE);
//         var d = l.getValidationAttr(i, e, "maxTotalSize");
//         null == d && (d = Number.MAX_VALUE);
//         var f = y("ngfIncludeDir", e),
//           h = [],
//           p = 0,
//           m = [l.emptyPromise()];
//         if (t && t.length > 0 && "file:" !== a.location.protocol)
//           for (var g = 0; g < t.length; g++) {
//             if (t[g].webkitGetAsEntry && t[g].webkitGetAsEntry() && t[g].webkitGetAsEntry().isDirectory) {
//               var v = t[g].webkitGetAsEntry();
//               if (v.isDirectory && !r) continue;
//               null != v && m.push(s(v))
//             } else {
//               var b = t[g].getAsFile();
//               null != b && (h.push(b), p += b.size)
//             }
//             if (h.length > u || p > d || !o && h.length > 0) break
//           } else if (null != n)
//           for (var $ = 0; $ < n.length; $++) {
//             var w = n.item($);
//             if ((w.type || w.size > 0) && (h.push(w), p += w.size), h.length > u || p > d || !o && h.length > 0) break
//           }
//         var x = c.defer();
//         return c.all(m).then(function () {
//           if (o || f || !h.length) x.resolve(h);
//           else {
//             for (var e = 0; h[e] && "directory" === h[e].type;) e++;
//             x.resolve([h[e]])
//           }
//         }, function (e) {
//           x.reject(e)
//         }), x.promise
//       }
//       var v = t(),
//         y = function (e, t, n) {
//           return l.attrGetter(e, i, t, n)
//         };
//       if (y("dropAvailable") && s(function () {
//         e[y("dropAvailable")] ? e[y("dropAvailable")].value = v : e[y("dropAvailable")] = v
//       }), v) {
//         null == y("ngfSelect") && l.registerModelChangeValidator(r, i, e);
//         var b, $ = null,
//           w = o(y("ngfStopPropagation")),
//           x = 1;
//         n[0].addEventListener("dragover", function (t) {
//           if (!d() && l.shouldUpdateOn("drop", i, e)) {
//             if (t.preventDefault(), w(e) && t.stopPropagation(), navigator.userAgent.indexOf("Chrome") > -1) {
//               var r = t.dataTransfer.effectAllowed;
//               t.dataTransfer.dropEffect = "move" === r || "linkMove" === r ? "move" : "copy"
//             }
//             s.cancel($), b || (b = "C", m(e, 0, t, function (i) {
//               b = i, n.addClass(b), y("ngfDrag", e, {
//                 $isDragging: !0,
//                 $class: b,
//                 $event: t
//               })
//             }))
//           }
//         }, !1), n[0].addEventListener("dragenter", function (t) {
//           !d() && l.shouldUpdateOn("drop", i, e) && (t.preventDefault(), w(e) && t.stopPropagation())
//         }, !1), n[0].addEventListener("dragleave", function (t) {
//           !d() && l.shouldUpdateOn("drop", i, e) && (t.preventDefault(), w(e) && t.stopPropagation(), $ = s(function () {
//             b && n.removeClass(b), b = null, y("ngfDrag", e, {
//               $isDragging: !1,
//               $event: t
//             })
//           }, x || 100))
//         }, !1), n[0].addEventListener("drop", function (t) {
//           !d() && l.shouldUpdateOn("drop", i, e) && (t.preventDefault(), w(e) && t.stopPropagation(), b && n.removeClass(b), b = null, f(t.dataTransfer, t, "dropUrl"))
//         }, !1), n[0].addEventListener("paste", function (t) {
//           navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && y("ngfEnableFirefoxPaste", e) && t.preventDefault(), !d() && l.shouldUpdateOn("paste", i, e) && f(t.clipboardData || t.originalEvent.clipboardData, t, "pasteUrl")
//         }, !1), navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && y("ngfEnableFirefoxPaste", e) && (n.attr("contenteditable", !0), n.on("keypress", function (e) {
//           e.metaKey || e.ctrlKey || e.preventDefault()
//         }))
//       } else !0 === y("ngfHideOnDropNotAvailable", e) && n.css("display", "none")
//     }

//     function t() {
//       var e = document.createElement("div");
//       return "draggable" in e && "ondrop" in e && !/Edge\/12./i.test(navigator.userAgent)
//     }
//     ngFileUpload.directive("ngfDrop", ["$parse", "$timeout", "$window", "Upload", "$http", "$q", function (t, n, i, r, o, s) {
//       return {
//         restrict: "AEC",
//         require: "?ngModel",
//         link: function (o, a, l, u) {
//           e(o, a, l, u, t, n, i, r, 0, s)
//         }
//       }
//     }]), ngFileUpload.directive("ngfNoFileDrop", function () {
//       return function (e, n) {
//         t() && n.css("display", "none")
//       }
//     }), ngFileUpload.directive("ngfDropAvailable", ["$parse", "$timeout", "Upload", function (e, n, i) {
//       return function (r, o, s) {
//         if (t()) {
//           var a = e(i.attrGetter("ngfDropAvailable", s));
//           n(function () {
//             a(r), a.assign && a.assign(r, !0)
//           })
//         }
//       }
//     }])
//   }(), ngFileUpload.service("UploadExif", ["UploadResize", "$q", function (e, t) {
//     function n(e, t, n, i) {
//       switch (t) {
//         case 2:
//           return e.transform(-1, 0, 0, 1, n, 0);
//         case 3:
//           return e.transform(-1, 0, 0, -1, n, i);
//         case 4:
//           return e.transform(1, 0, 0, -1, 0, i);
//         case 5:
//           return e.transform(0, 1, 1, 0, 0, 0);
//         case 6:
//           return e.transform(0, 1, -1, 0, i, 0);
//         case 7:
//           return e.transform(0, -1, -1, 0, i, n);
//         case 8:
//           return e.transform(0, -1, 1, 0, 0, n)
//       }
//     }

//     function i(e) {
//       for (var t = "", n = new Uint8Array(e), i = n.byteLength, r = 0; i > r; r++) t += String.fromCharCode(n[r]);
//       return window.btoa(t)
//     }
//     var r = e;
//     return r.isExifSupported = function () {
//       return window.FileReader && (new FileReader).readAsArrayBuffer && r.isResizeSupported()
//     }, r.readOrientation = function (e) {
//       var n = t.defer(),
//         i = new FileReader,
//         r = e.slice ? e.slice(0, 65536) : e;
//       return i.readAsArrayBuffer(r), i.onerror = function (e) {
//         return n.reject(e)
//       }, i.onload = function (e) {
//         var t = {
//           orientation: 1
//         },
//           i = new DataView(this.result);
//         if (65496 !== i.getUint16(0, !1)) return n.resolve(t);
//         for (var r = i.byteLength, o = 2; r > o;) {
//           var s = i.getUint16(o, !1);
//           if (o += 2, 65505 === s) {
//             if (1165519206 !== i.getUint32(o += 2, !1)) return n.resolve(t);
//             var a = 18761 === i.getUint16(o += 6, !1);
//             o += i.getUint32(o + 4, a);
//             var l = i.getUint16(o, a);
//             o += 2;
//             for (var u = 0; l > u; u++)
//               if (274 === i.getUint16(o + 12 * u, a)) {
//                 var c = i.getUint16(o + 12 * u + 8, a);
//                 return c >= 2 && 8 >= c && (i.setUint16(o + 12 * u + 8, 1, a), t.fixedArrayBuffer = e.target.result), t.orientation = c, n.resolve(t)
//               }
//           } else {
//             if (65280 != (65280 & s)) break;
//             o += i.getUint16(o, !1)
//           }
//         }
//         return n.resolve(t)
//       }, n.promise
//     }, r.applyExifRotation = function (e) {
//       if (0 !== e.type.indexOf("image/jpeg")) return r.emptyPromise(e);
//       var o = t.defer();
//       return r.readOrientation(e).then(function (t) {
//         return t.orientation < 2 || t.orientation > 8 ? o.resolve(e) : void r.dataUrl(e, !0).then(function (s) {
//           var a = document.createElement("canvas"),
//             l = document.createElement("img");
//           l.onload = function () {
//             try {
//               a.width = t.orientation > 4 ? l.height : l.width, a.height = t.orientation > 4 ? l.width : l.height;
//               var s = a.getContext("2d");
//               n(s, t.orientation, l.width, l.height), s.drawImage(l, 0, 0);
//               var u = a.toDataURL(e.type || "image/WebP", .934);
//               u = r.restoreExif(i(t.fixedArrayBuffer), u);
//               var c = r.dataUrltoBlob(u, e.name);
//               o.resolve(c)
//             } catch (e) {
//               return o.reject(e)
//             }
//           }, l.onerror = function () {
//             o.reject()
//           }, l.src = s
//         }, function (e) {
//           o.reject(e)
//         })
//       }, function (e) {
//         o.reject(e)
//       }), o.promise
//     }, r.restoreExif = function (e, t) {
//       var n = {};
//       return n.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n.encode64 = function (e) {
//         var t, n, i, r, o, s = "",
//           a = "",
//           l = "",
//           u = 0;
//         do {
//           t = e[u++], n = e[u++], a = e[u++], i = t >> 2, r = (3 & t) << 4 | n >> 4, o = (15 & n) << 2 | a >> 6, l = 63 & a, isNaN(n) ? o = l = 64 : isNaN(a) && (l = 64), s = s + this.KEY_STR.charAt(i) + this.KEY_STR.charAt(r) + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(l), t = n = a = "", i = r = o = l = ""
//         } while (u < e.length);
//         return s
//       }, n.restore = function (e, t) {
//         e.match("data:image/jpeg;base64,") && (e = e.replace("data:image/jpeg;base64,", ""));
//         var n = this.decode64(e),
//           i = this.slice2Segments(n),
//           r = this.exifManipulation(t, i);
//         return "data:image/jpeg;base64," + this.encode64(r)
//       }, n.exifManipulation = function (e, t) {
//         var n = this.getExifArray(t),
//           i = this.insertExif(e, n);
//         return new Uint8Array(i)
//       }, n.getExifArray = function (e) {
//         for (var t, n = 0; n < e.length; n++)
//           if (255 === (t = e[n])[0] & 225 === t[1]) return t;
//         return []
//       }, n.insertExif = function (e, t) {
//         var n = e.replace("data:image/jpeg;base64,", ""),
//           i = this.decode64(n),
//           r = i.indexOf(255, 3),
//           o = i.slice(0, r),
//           s = i.slice(r),
//           a = o;
//         return a = a.concat(t), a = a.concat(s)
//       }, n.slice2Segments = function (e) {
//         for (var t = 0, n = []; !(255 === e[t] & 218 === e[t + 1]);) {
//           if (255 === e[t] & 216 === e[t + 1]) t += 2;
//           else {
//             var i = t + (256 * e[t + 2] + e[t + 3]) + 2,
//               r = e.slice(t, i);
//             n.push(r), t = i
//           }
//           if (t > e.length) break
//         }
//         return n
//       }, n.decode64 = function (e) {
//         var t, n, i, r, o, s = "",
//           a = "",
//           l = 0,
//           u = [];
//         /[^A-Za-z0-9\+\/\=]/g.exec(e) && console.log("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, NaNExpect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
//         do {
//           i = this.KEY_STR.indexOf(e.charAt(l++)), r = this.KEY_STR.indexOf(e.charAt(l++)), o = this.KEY_STR.indexOf(e.charAt(l++)), a = this.KEY_STR.indexOf(e.charAt(l++)), t = i << 2 | r >> 4, n = (15 & r) << 4 | o >> 2, s = (3 & o) << 6 | a, u.push(t), 64 !== o && u.push(n), 64 !== a && u.push(s), t = n = s = "", i = r = o = a = ""
//         } while (l < e.length);
//         return u
//       }, n.restore(e, t)
//     }, r
//   }]),
//   function () {
//     "use strict";
//     angular.module("core.library.jsonrpc", ["ngFileUpload", "core.library.config"]).provider("jsonrpc", ["coreLibraryConfigProvider", function (e) {
//       function t() {
//         return e.isDevelopment()
//       }

//       function n(e, t) {
//         return e.sort(function (e, n) {
//           return e[t] < n[t] ? -1 : e[t] > n[t] ? 1 : 0
//         })
//       }

//       function i(e, t) {
//         var n = {
//           injected: !1
//         };
//         return angular.isString(e) || angular.isFunction(e) || angular.isArray(e) ? (angular.isObject(t) || (t = {}), n.interceptor = e, n.priority = angular.isNumber(t.priority) ? t.priority : 100, n.methods = angular.isDefined(t.methods) ? t.methods : "*.*", angular.isString(n.methods) && (n.methods = [n.methods]), a.push(n), !0) : (s && console.error("Not valid interceptor", typeof e, e), !1)
//       }

//       function r() {
//         return u++ + ""
//       }
//       var o = this,
//         s = !1,
//         a = [],
//         l = this.defaults = {},
//         u = 0;
//       o.addInterceptor = function (e, t) {
//         return i(e, t)
//       }, l.basePath = "/rpc", this.$get = ["$http", "$q", "$injector", "Upload", function (e, i, s, u) {
//         function c(e) {
//           var t, n, i, r, o, l = e.split("."),
//             u = l.pop(),
//             c = l.join("."),
//             d = [],
//             f = a.length;
//           for (o = 0; o < f; o++) n = !1, t = a[o].methods, angular.isFunction(t) ? n = t({
//             service: c,
//             method: u
//           }) : (n |= t.indexOf("*") > -1, n |= t.indexOf("*.*") > -1, n |= t.indexOf(c + ".*") > -1, n |= t.indexOf("*." + u) > -1, n |= t.indexOf(c + "." + u) > -1), n && (r = a[o].injected, i = a[o].interceptor, r || (i = angular.isString(i) ? s.get(i) : s.invoke(i), a[o].injected = !0, a[o].interceptor = i), d.push(i));
//           return d
//         }

//         function d(e, t, n) {
//           var i, r;
//           if ("request" === n)
//             for (i = t.length - 1; i >= 0; i--)(t[i].request || t[i].requestError) && (e = e.then(t[i].request, t[i].requestError));
//           if ("response" === n)
//             for (i = 0, r = t.length; i < r; i++)(t[i].response || t[i].responseError) && (e = e.then(t[i].response, t[i].responseError));
//           return e
//         }

//         function f(t, n, o) {
//           var s, a, c, d, f = r(),
//             h = {
//               jsonrpc: "2.0",
//               method: t.method,
//               id: f
//             },
//             p = i.defer(),
//             m = p.promise;
//           l.BeforeRequest && l.BeforeRequest(h, t, n), angular.isDefined(t.data) && (h.params = t.data);
//           var g = [];
//           angular.forEach(e.defaults.transformResponse, function (e) {
//             g.push(e)
//           }), g.push(function (e) {
//             return e && e.id === f ? e : null
//           });
//           var v = (n = n || {}).transformResponse;
//           return angular.isArray(v) ? [].push.apply(g, v) : angular.isFunction(v) && g.push(v), n.transformResponse = g, d = t.path || l.basePath, s = n, s.headers = s.headers || {}, s.headers["X-Requested-With"] = s.headers["X-Requested-With"] || "XMLHttpRequest", s.method = "POST", s.url = d, s.data = h, o && (s.file = o), a = i.when(s), a = a.then(function (n) {
//             var r = i.defer();
//             return o ? (t.progress && (c = t.progress, delete t.progress), a = u.upload(n).progress(function (e) {
//               c instanceof Function && c.call(c, e)
//             })) : a = e(n), a.then(r.resolve, r.reject), r.promise
//           }), a = a.then(function (e) {
//             var t = e.data;
//             e.status, e.headers, e.config;
//             return null === t ? (l.ErrorRequest && l.ErrorRequest(m, null), p.reject(null)) : t && t.hasOwnProperty("error") ? (l.ErrorRequest && l.ErrorRequest(m, t.error), p.reject(t.error)) : t && t.hasOwnProperty("result") ? (l.SuccessRequest && l.SuccessRequest(m, t.result), p.resolve(t.result)) : (l.ErrorRequest && l.ErrorRequest(m, t), p.reject(t)), e
//           }, function (e) {
//             return l.ErrorRequest && l.ErrorRequest(m, e.data), p.reject({
//               code: e.status,
//               message: "COMMON.MESSAGES.LOAD_DATA_FROM_SERVER_ERROR",
//               type: "NETWORK",
//               httpError: e
//             }), e
//           }), p.promise
//         }

//         function h(e, t) {
//           this.serviceName = e, this.path = t
//         }
//         return a = n(a, "priority"), f.request = function (e, t, n, i) {
//           return arguments.length < 4 && (i = n, n = t, t = e, e = null), f({
//             path: e,
//             method: t,
//             data: n
//           }, i)
//         }, f.setBasePath = function (e) {
//           return o.setBasePath(e)
//         }, f.getBasePath = function () {
//           return o.getBasePath()
//         }, f.setBeforeRequest = function (e) {
//           return o.setBeforeRequest(e)
//         }, f.setEndSuccessRequest = function (e) {
//           return o.setEndSuccessRequest(e)
//         }, f.setEndErrorRequest = function (e) {
//           return o.setEndErrorRequest(e)
//         }, h.prototype.createMethod = function (e, n) {
//           var r = this.path,
//             o = this.serviceName + "." + e,
//             s = function (e) {
//               var s, a = c(o),
//                 l = {
//                   path: r,
//                   method: o,
//                   params: e,
//                   config: angular.copy(n)
//                 },
//                 u = !!a.length;
//               return s = i.when(l), u && (s = d(s, a, "request")), s = s.then(function (e) {
//                 var t = i.defer();
//                 return s = f.request(e.path, e.method, e.params, e.config), u && (s = s.then(function (t) {
//                   return i.resolve({
//                     data: t,
//                     request: e
//                   })
//                 }, function (t) {
//                   return i.reject({
//                     error: t,
//                     request: e
//                   })
//                 }), s = d(s, a, "response"), s = s.then(function (e) {
//                   return i.resolve(e.data ? e.data : e)
//                 }, function (e) {
//                   return i.reject(e.error ? e.error : e)
//                 })), s.then(t.resolve, t.reject), t.promise
//               }, function (e) {
//                 return i.reject(e)
//               }), s.success = function (e) {
//                 return t() && console.warn('Some code call deprecated method "success" on ', o), s.then(e), this
//               }, s.error = function (e) {
//                 return t() && console.warn('Some code call deprecated method "error" on ', o), s.then(null, e), this
//               }, s.stopPropagation = function () {
//                 t() && console.warn('Some code call deprecated method "stopPropagation" on ', o)
//               }, s
//             };
//           return s.__jsonRpcMethod = o, s
//         }, h.prototype.createUploadMethod = function (e, n) {
//           var i = this.path,
//             r = this.serviceName + "." + e;
//           return function (e, o, s) {
//             var a;
//             if (!e) throw "Property file not found";
//             return a = f({
//               path: i,
//               method: r,
//               data: o,
//               progress: s
//             }, n, e), a.success = function (e) {
//               return t() && console.warn('Some code call deprecated method "success" on ', r), a.then(e), this
//             }, a.error = function (e) {
//               return t() && console.warn('Some code call deprecated method "error" on ', r), a.then(null, e), this
//             }, a
//           }
//         }, f.newService = function (e, t) {
//           return new h(e, t)
//         }, f.createBatch = function (t, n) {
//           function o() { }
//           return o.prototype = {
//             _requests: [],
//             _callbacks: {},
//             add: function (e, t) {
//               var n = {
//                 jsonrpc: "2.0",
//                 id: r()
//               },
//                 o = i.defer(),
//                 s = !1,
//                 a = o.promise,
//                 l = {
//                   success: function () { },
//                   error: function () { }
//                 };
//               return angular.isFunction(e) && (e = e.__jsonRpcMethod), !!e && (n.method = e, angular.isDefined(t) && (n.params = t), a.success = function (e) {
//                 return l.success = e, this
//               }, a.error = function (e) {
//                 return l.error = e, this
//               }, a.then(function () {
//                 s || l.success.apply(null, arguments)
//               }, function () {
//                 s || l.error.apply(null, arguments)
//               }), a.stopPropagation = function () {
//                 s = !0
//               }, this._requests.push(n), this._callbacks[n.id] = o, a)
//             },
//             isEmpty: function () {
//               return !this._requests.length
//             },
//             doRequest: function () {
//               function t(e) {
//                 var t = n._callbacks[e.id];
//                 return !!t && (null === e ? t.reject(null) : e && e.hasOwnProperty("error") ? t.reject(e.error) : e && e.hasOwnProperty("result") ? t.resolve(e.result) : t.reject(e), !0)
//               }
//               var n = this,
//                 r = i.defer(),
//                 o = r.promise,
//                 s = !1,
//                 a = {
//                   success: function () { },
//                   error: function () { }
//                 },
//                 u = {
//                   method: "POST",
//                   url: l.basePath,
//                   headers: {
//                     "X-Requested-With": "XMLHttpRequest"
//                   },
//                   data: this._requests
//                 };
//               return o.success = function (e) {
//                 return a.success = e, this
//               }, o.error = function (e) {
//                 return a.error = e, this
//               }, o.then(function () {
//                 s || a.success.apply(null, arguments)
//               }, function () {
//                 s || a.error.apply(null, arguments)
//               }), o.stopPropagation = function () {
//                 s = !0
//               }, this.isEmpty() ? (r.resolve(), o) : (e(u).success(function (e, n, i, o) {
//                 for (var s = 0, a = e.length; s < a; s++) t(e[s]);
//                 r.resolve(e)
//               }).error(function (e) {
//                 for (var n = 0, i = e.length; n < i; n++) t(e[n]);
//                 r.reject(e)
//               }).finally(function () {
//                 n._requests = [], n._callbacks = {}
//               }), o)
//             }
//           }, new o
//         }, f
//       }], o.setBasePath = function (e) {
//         return this.defaults.basePath = e, this
//       }, o.getBasePath = function () {
//         return this.defaults.basePath
//       }, o.setBeforeRequest = function (e) {
//         return this.defaults.BeforeRequest = e, this
//       }, o.setEndSuccessRequest = function (e) {
//         return this.defaults.SuccessRequest = e, this
//       }, o.setEndErrorRequest = function (e) {
//         return this.defaults.ErrorRequest = e, this
//       }
//     }])
//   }(),
//   function () {
//     "use strict";
//     try {
//       angular.module("application.config.value")
//     } catch (e) {
//       angular.module("application.config.value", ["ng"]).constant("application.config.value", null)
//     }
//     angular.module("core.library.config", ["application.config.value"]).provider("coreLibraryConfig", ["application.config.value", function (e) {
//       function t(e, t) {
//         var n, i, r = [],
//           o = null;
//         for (e && angular.isString(e) && (o = l, r = e.split("."), i = t ? r.length - 1 : r.length), n = 0; n < i; n++) {
//           if (!r[n] || !o.hasOwnProperty(r[n])) {
//             o = null;
//             break
//           }
//           o = o[r[n]]
//         }
//         return t && o && o.hasOwnProperty(r[n]) && (o = o[r[n]] = angular.copy(t)), o
//       }

//       function n(e, t, n) {
//         var i, r, o, s;
//         if (angular.isNumber(t)) {
//           if (isNaN(t)) return n;
//           t += ""
//         }
//         if (!angular.isString(t) || t.length < 1) return n;
//         if (angular.isDefined(e[t])) return e[t];
//         s = t.split(".");
//         try {
//           for (r = e, i = 0, o = s.length; i < o; i++) angular.isDefined(r) && (r = r[s[i]]);
//           if (angular.isDefined(r)) return r
//         } catch (e) { }
//         return n
//       }

//       function i(e, t) {
//         var n, i, r;
//         if (angular.isNumber(t)) {
//           if (isNaN(t)) return !1;
//           t += ""
//         }
//         if (!angular.isString(t) || t.length < 1) return !1;
//         if (angular.isDefined(e[t])) return !0;
//         for (n = 0, i = (r = t.split(".")).length; n < i; n++) {
//           if (angular.isUndefined(e[r[n]])) return !1;
//           e = e[r[n]]
//         }
//         return !0
//       }

//       function r(e, t, n) {
//         var i, r, o, s;
//         if (angular.isNumber(t)) {
//           if (isNaN(t)) return !1;
//           t += ""
//         }
//         if (!angular.isString(t) || t.length < 1) return !1;
//         if (angular.isDefined(e[t])) return e[t] = n, !0;
//         o = t.split(".");
//         try {
//           for (i = 0, r = o.length; i < r && (s = o[i], i !== r - 1); i++) {
//             if (angular.isUndefined(e[s])) e[s] = {};
//             else if (!angular.isObject(e[s]) || angular.isArray(e[s])) return !1;
//             e = e[s]
//           }
//           e[s] = n
//         } catch (e) {
//           console.error(e)
//         }
//         return !0
//       }

//       function o(e, t, n) {
//         var i, r, o, s;
//         if (angular.isNumber(t)) {
//           if (isNaN(t)) return !1;
//           t += ""
//         }
//         if (!angular.isString(t) || t.length < 1) return !1;
//         if (angular.isDefined(e[t])) return angular.extend(e[t], n), !0;
//         o = t.split(".");
//         try {
//           for (i = 0, r = o.length; i < r && (s = o[i], i !== r - 1); i++) {
//             if (angular.isUndefined(e[s])) e[s] = {};
//             else if (!angular.isObject(e[s]) || angular.isArray(e[s])) return !1;
//             e = e[s]
//           }
//           angular.extend(e[s], n)
//         } catch (e) {
//           console.error(e)
//         }
//         return !0
//       }
//       var s, a = this,
//         l = {},
//         u = !1,
//         c = !1,
//         d = !0,
//         f = "production",
//         h = (new Date).getTime(),
//         p = !1;
//       l = angular.isObject(e) ? e : app.config || l, angular.isDefined(l.env) && -1 !== ["development", "testing"].indexOf(l.env) && (f = l.env), u = "development" === f, c = "testing" === f, d = "production" === f, angular.isDefined(l.isDemoMode) && (p = l.isDemoMode), s = n(l, "settings.website.features"), angular.isString(s) && (s = angular.fromJson(s), angular.isObject(s) && (l.settings.website.features = s)), s = n(l, "__features__"), angular.isString(s) && (s = angular.fromJson(s), angular.isObject(s) && (l.__features__ = s)), this.isDevelopment = function () {
//         return u
//       }, this.isTesting = function () {
//         return c
//       }, this.isProduction = function () {
//         return d
//       }, this.isDemoMode = function () {
//         return p
//       }, this.getStage = function () {
//         return f
//       }, this.get = function (e, t) {
//         var i;
//         return (i = n(l, e, t)) && (i = angular.copy(i)), i
//       }, this.exists = function (e) {
//         return i(l, e)
//       }, this.update = function (e, t) {
//         try {
//           t = angular.copy(t)
//         } catch (e) {
//           return !1
//         }
//         return app && app.config && r(app.config, e, t), r(l, e, t)
//       }, this.extend = function (e, t) {
//         try {
//           t = angular.copy(t)
//         } catch (e) {
//           return !1
//         }
//         return app && app.config && o(app.config, e, t), o(l, e, t)
//       }, this.getBuild = function () {
//         return parseInt(n(l, "settings.system.build", h))
//       }, this.getVersion = function () {
//         return n(l, "settings.system.version", "3.1.6")
//       }, this.key = function (e) {
//         return l.hasOwnProperty(e) ? l[e] : null
//       }, this.keyPath = function (e, n) {
//         return t(e) || (angular.isDefined(n) ? n : null)
//       }, this.setValueByPath = function (e, n) {
//         return !(!angular.isDefined(n) || !t(e, n))
//       }, this.$get = [function () {
//         return {
//           isDevelopment: a.isDevelopment,
//           isTesting: a.isTesting,
//           isProduction: a.isProduction,
//           isDemoMode: a.isDemoMode,
//           getStage: a.getStage,
//           get: a.get,
//           exists: a.exists,
//           update: a.update,
//           extend: a.extend,
//           getBuild: a.getBuild,
//           getVersion: a.getVersion,
//           key: a.key,
//           keyPath: a.keyPath,
//           setValueByPath: a.setValueByPath
//         }
//       }]
//     }])
//   }(),
//   function (e) {
//     var t = {
//       mode: "horizontal",
//       slideSelector: "",
//       infiniteLoop: !0,
//       hideControlOnEnd: !1,
//       speed: 500,
//       easing: null,
//       slideMargin: 0,
//       startSlide: 0,
//       randomStart: !1,
//       captions: !1,
//       ticker: !1,
//       tickerHover: !1,
//       adaptiveHeight: !1,
//       adaptiveHeightSpeed: 500,
//       video: !1,
//       useCSS: !0,
//       preloadImages: "visible",
//       responsive: !0,
//       slideZIndex: 50,
//       wrapperClass: "bx-wrapper",
//       touchEnabled: !0,
//       swipeThreshold: 50,
//       oneToOneTouch: !0,
//       preventDefaultSwipeX: !0,
//       preventDefaultSwipeY: !1,
//       ariaLive: !0,
//       ariaHidden: !0,
//       keyboardEnabled: !1,
//       pager: !0,
//       pagerType: "full",
//       pagerShortSeparator: " / ",
//       pagerSelector: null,
//       buildPager: null,
//       pagerCustom: null,
//       controls: !0,
//       nextText: "Next",
//       prevText: "Prev",
//       nextSelector: null,
//       prevSelector: null,
//       autoControls: !1,
//       startText: "Start",
//       stopText: "Stop",
//       autoControlsCombine: !1,
//       autoControlsSelector: null,
//       auto: !1,
//       pause: 4e3,
//       autoStart: !0,
//       autoDirection: "next",
//       stopAutoOnClick: !1,
//       autoHover: !1,
//       autoDelay: 0,
//       autoSlideForOnePage: !1,
//       minSlides: 1,
//       maxSlides: 1,
//       moveSlides: 0,
//       slideWidth: 0,
//       shrinkItems: !1,
//       onSliderLoad: function () {
//         return !0
//       },
//       onSlideBefore: function () {
//         return !0
//       },
//       onSlideAfter: function () {
//         return !0
//       },
//       onSlideNext: function () {
//         return !0
//       },
//       onSlidePrev: function () {
//         return !0
//       },
//       onSliderResize: function () {
//         return !0
//       }
//     };
//     e.fn.bxSlider = function (n) {
//       if (0 === this.length) return this;
//       if (this.length > 1) return this.each(function () {
//         e(this).bxSlider(n)
//       }), this;
//       var r = {},
//         o = this,
//         s = e(window).width(),
//         a = e(window).height();
//       if (!e(o).data("bxSlider")) {
//         var l = function () {
//           e(o).data("bxSlider") || (r.settings = e.extend({}, t, n), r.settings.slideWidth = parseInt(r.settings.slideWidth), r.children = o.children(r.settings.slideSelector), r.children.length < r.settings.minSlides && (r.settings.minSlides = r.children.length), r.children.length < r.settings.maxSlides && (r.settings.maxSlides = r.children.length), r.settings.randomStart && (r.settings.startSlide = Math.floor(Math.random() * r.children.length)), r.active = {
//             index: r.settings.startSlide
//           }, r.carousel = r.settings.minSlides > 1 || r.settings.maxSlides > 1, r.carousel && (r.settings.preloadImages = "all"), r.minThreshold = r.settings.minSlides * r.settings.slideWidth + (r.settings.minSlides - 1) * r.settings.slideMargin, r.maxThreshold = r.settings.maxSlides * r.settings.slideWidth + (r.settings.maxSlides - 1) * r.settings.slideMargin, r.working = !1, r.controls = {}, r.interval = null, r.animProp = "vertical" === r.settings.mode ? "top" : "left", r.usingCSS = r.settings.useCSS && "fade" !== r.settings.mode && function () {
//             for (var e = document.createElement("div"), t = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], n = 0; n < t.length; n++)
//               if (void 0 !== e.style[t[n]]) return r.cssPrefix = t[n].replace("Perspective", "").toLowerCase(), r.animProp = "-" + r.cssPrefix + "-transform", !0;
//             return !1
//           }(), "vertical" === r.settings.mode && (r.settings.maxSlides = r.settings.minSlides), o.data("origStyle", o.attr("style")), o.children(r.settings.slideSelector).each(function () {
//             e(this).data("origStyle", e(this).attr("style"))
//           }), u())
//         },
//           u = function () {
//             var t = r.children.eq(r.settings.startSlide);
//             o.wrap('<div class="' + r.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), r.viewport = o.parent(), r.settings.ariaLive && !r.settings.ticker && r.viewport.attr("aria-live", "polite"), r.loader = e('<div class="bx-loading" />'), r.viewport.prepend(r.loader), o.css({
//               width: "horizontal" === r.settings.mode ? 1e3 * r.children.length + 215 + "%" : "auto",
//               position: "relative"
//             }), r.usingCSS && r.settings.easing ? o.css("-" + r.cssPrefix + "-transition-timing-function", r.settings.easing) : r.settings.easing || (r.settings.easing = "swing"), r.viewport.css({
//               width: "100%",
//               overflow: "hidden",
//               position: "relative"
//             }), r.viewport.parent().css({
//               maxWidth: h()
//             }), r.settings.pager || r.settings.controls || r.viewport.parent().css({
//               margin: "0 auto 0px"
//             }), r.settings.captions && C(), r.children.css({
//               float: "horizontal" === r.settings.mode ? "left" : "none",
//               listStyle: "none",
//               height: f(),
//               position: "relative"
//             }), r.children.css("width", p()), "horizontal" === r.settings.mode && r.settings.slideMargin > 0 && r.children.css("marginRight", r.settings.slideMargin), "vertical" === r.settings.mode && r.settings.slideMargin > 0 && r.children.css("marginBottom", r.settings.slideMargin), "fade" === r.settings.mode && (r.children.css({
//               position: "absolute",
//               zIndex: 0,
//               display: "none"
//             }), r.children.eq(r.settings.startSlide).css({
//               zIndex: r.settings.slideZIndex,
//               display: "block"
//             })), r.controls.el = e('<div class="bx-controls" />'), r.active.last = r.settings.startSlide === g() - 1, r.settings.video && o.fitVids(), ("all" === r.settings.preloadImages || r.settings.ticker) && (t = r.children), r.settings.ticker ? r.settings.pager = !1 : (r.settings.controls && x(), r.settings.auto && r.settings.autoControls && S(), r.settings.pager && w(), (r.settings.controls || r.settings.autoControls || r.settings.pager) && r.viewport.after(r.controls.el)), c(t, d)
//           },
//           c = function (t, n) {
//             var i = t.find('img:not([src=""]), iframe').length,
//               r = 0;
//             0 !== i ? t.find('img:not([src=""]), iframe').each(function () {
//               e(this).one("load error", function () {
//                 ++r === i && n()
//               }).each(function () {
//                 this.complete && e(this).load()
//               })
//             }) : n()
//           },
//           d = function () {
//             if (r.settings.infiniteLoop && "fade" !== r.settings.mode && !r.settings.ticker) {
//               var t = "vertical" === r.settings.mode ? r.settings.minSlides : r.settings.maxSlides,
//                 n = r.children.slice(0, t).clone(!0).addClass("bx-clone"),
//                 i = r.children.slice(-t).clone(!0).addClass("bx-clone");
//               r.settings.ariaHidden && (n.attr("aria-hidden", !0), i.attr("aria-hidden", !0)), o.append(n).prepend(i)
//             }
//             r.loader.remove(), y(), "vertical" === r.settings.mode && (r.settings.adaptiveHeight = !0), r.viewport.height(f()), o.redrawSlider(), r.settings.onSliderLoad.call(o, r.active.index), r.initialized = !0, r.settings.responsive && e(window).bind("resize", B), r.settings.auto && r.settings.autoStart && (g() > 1 || r.settings.autoSlideForOnePage) && P(), r.settings.ticker && N(), r.settings.pager && _(r.settings.startSlide), r.settings.controls && O(), r.settings.touchEnabled && !r.settings.ticker && z(), r.settings.keyboardEnabled && !r.settings.ticker && e(document).keydown(R)
//           },
//           f = function () {
//             var t = 0,
//               n = e();
//             if ("vertical" === r.settings.mode || r.settings.adaptiveHeight)
//               if (r.carousel) {
//                 var o = 1 === r.settings.moveSlides ? r.active.index : r.active.index * v();
//                 for (n = r.children.eq(o), i = 1; i <= r.settings.maxSlides - 1; i++) n = o + i >= r.children.length ? n.add(r.children.eq(i - 1)) : n.add(r.children.eq(o + i))
//               } else n = r.children.eq(r.active.index);
//             else n = r.children;
//             return "vertical" === r.settings.mode ? (n.each(function (n) {
//               t += e(this).outerHeight()
//             }), r.settings.slideMargin > 0 && (t += r.settings.slideMargin * (r.settings.minSlides - 1))) : t = Math.max.apply(Math, n.map(function () {
//               return e(this).css("height", "auto"), e(this).outerHeight(!1)
//             }).get()), "border-box" === r.viewport.css("box-sizing") ? t += parseFloat(r.viewport.css("padding-top")) + parseFloat(r.viewport.css("padding-bottom")) + parseFloat(r.viewport.css("border-top-width")) + parseFloat(r.viewport.css("border-bottom-width")) : "padding-box" === r.viewport.css("box-sizing") && (t += parseFloat(r.viewport.css("padding-top")) + parseFloat(r.viewport.css("padding-bottom"))), t
//           },
//           h = function () {
//             var e = "100%";
//             return r.settings.slideWidth > 0 && (e = "horizontal" === r.settings.mode ? r.settings.maxSlides * r.settings.slideWidth + (r.settings.maxSlides - 1) * r.settings.slideMargin : r.settings.slideWidth), e
//           },
//           p = function () {
//             var e = r.settings.slideWidth,
//               t = r.viewport.width();
//             if (0 === r.settings.slideWidth || r.settings.slideWidth > t && !r.carousel || "vertical" === r.settings.mode) e = t;
//             else if (r.settings.maxSlides > 1 && "horizontal" === r.settings.mode) {
//               if (t > r.maxThreshold) return e;
//               t < r.minThreshold ? e = (t - r.settings.slideMargin * (r.settings.minSlides - 1)) / r.settings.minSlides : r.settings.shrinkItems && (e = Math.floor((t + r.settings.slideMargin) / Math.ceil((t + r.settings.slideMargin) / (e + r.settings.slideMargin)) - r.settings.slideMargin))
//             }
//             return e
//           },
//           m = function () {
//             var e = 1,
//               t = null;
//             return "horizontal" === r.settings.mode && r.settings.slideWidth > 0 ? r.viewport.width() < r.minThreshold ? e = r.settings.minSlides : r.viewport.width() > r.maxThreshold ? e = r.settings.maxSlides : (t = r.children.first().width() + r.settings.slideMargin, e = Math.floor((r.viewport.width() + r.settings.slideMargin) / t)) : "vertical" === r.settings.mode && (e = r.settings.minSlides), e
//           },
//           g = function () {
//             var e = 0,
//               t = 0,
//               n = 0;
//             if (r.settings.moveSlides > 0)
//               if (r.settings.infiniteLoop) e = Math.ceil(r.children.length / v());
//               else
//                 for (; t < r.children.length;)++e, t = n + m(), n += r.settings.moveSlides <= m() ? r.settings.moveSlides : m();
//             else e = Math.ceil(r.children.length / m());
//             return e
//           },
//           v = function () {
//             return r.settings.moveSlides > 0 && r.settings.moveSlides <= m() ? r.settings.moveSlides : m()
//           },
//           y = function () {
//             var e, t, n;
//             r.children.length > r.settings.maxSlides && r.active.last && !r.settings.infiniteLoop ? "horizontal" === r.settings.mode ? (e = (t = r.children.last()).position(), b(-(e.left - (r.viewport.width() - t.outerWidth())), "reset", 0)) : "vertical" === r.settings.mode && (n = r.children.length - r.settings.minSlides, e = r.children.eq(n).position(), b(-e.top, "reset", 0)) : (e = r.children.eq(r.active.index * v()).position(), r.active.index === g() - 1 && (r.active.last = !0), void 0 !== e && ("horizontal" === r.settings.mode ? b(-e.left, "reset", 0) : "vertical" === r.settings.mode && b(-e.top, "reset", 0)))
//           },
//           b = function (t, n, i, s) {
//             var a, l;
//             r.usingCSS ? (l = "vertical" === r.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)", o.css("-" + r.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" === n ? (o.css(r.animProp, l), 0 !== i ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (t) {
//               e(t.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), A())
//             }) : A()) : "reset" === n ? o.css(r.animProp, l) : "ticker" === n && (o.css("-" + r.cssPrefix + "-transition-timing-function", "linear"), o.css(r.animProp, l), 0 !== i ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (t) {
//               e(t.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), F())
//             }) : (b(s.resetValue, "reset", 0), F()))) : ((a = {})[r.animProp] = t, "slide" === n ? o.animate(a, i, r.settings.easing, function () {
//               A()
//             }) : "reset" === n ? o.css(r.animProp, t) : "ticker" === n && o.animate(a, i, "linear", function () {
//               b(s.resetValue, "reset", 0), F()
//             }))
//           },
//           $ = function () {
//             for (var t = "", n = "", i = g(), o = 0; o < i; o++) n = "", r.settings.buildPager && e.isFunction(r.settings.buildPager) || r.settings.pagerCustom ? (n = r.settings.buildPager(o), r.pagerEl.addClass("bx-custom-pager")) : (n = o + 1, r.pagerEl.addClass("bx-default-pager")), t += '<div class="bx-pager-item"><a href="" data-slide-index="' + o + '" class="bx-pager-link">' + n + "</a></div>";
//             r.pagerEl.html(t)
//           },
//           w = function () {
//             r.settings.pagerCustom ? r.pagerEl = e(r.settings.pagerCustom) : (r.pagerEl = e('<div class="bx-pager" />'), r.settings.pagerSelector ? e(r.settings.pagerSelector).html(r.pagerEl) : r.controls.el.addClass("bx-has-pager").append(r.pagerEl), $()), r.pagerEl.on("click touchend", "a", M)
//           },
//           x = function () {
//             r.controls.next = e('<a class="bx-next" href="">' + r.settings.nextText + "</a>"), r.controls.prev = e('<a class="bx-prev" href="">' + r.settings.prevText + "</a>"), r.controls.next.bind("click touchend", k), r.controls.prev.bind("click touchend", T), r.settings.nextSelector && e(r.settings.nextSelector).append(r.controls.next), r.settings.prevSelector && e(r.settings.prevSelector).append(r.controls.prev), r.settings.nextSelector || r.settings.prevSelector || (r.controls.directionEl = e('<div class="bx-controls-direction" />'), r.controls.directionEl.append(r.controls.prev).append(r.controls.next), r.controls.el.addClass("bx-has-controls-direction").append(r.controls.directionEl))
//           },
//           S = function () {
//             r.controls.start = e('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + r.settings.startText + "</a></div>"), r.controls.stop = e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + r.settings.stopText + "</a></div>"), r.controls.autoEl = e('<div class="bx-controls-auto" />'), r.controls.autoEl.on("click", ".bx-start", E), r.controls.autoEl.on("click", ".bx-stop", j), r.settings.autoControlsCombine ? r.controls.autoEl.append(r.controls.start) : r.controls.autoEl.append(r.controls.start).append(r.controls.stop), r.settings.autoControlsSelector ? e(r.settings.autoControlsSelector).html(r.controls.autoEl) : r.controls.el.addClass("bx-has-controls-auto").append(r.controls.autoEl), D(r.settings.autoStart ? "stop" : "start")
//           },
//           C = function () {
//             r.children.each(function (t) {
//               var n = e(this).find("img:first").attr("title");
//               void 0 !== n && ("" + n).length && e(this).append('<div class="bx-caption"><span>' + n + "</span></div>")
//             })
//           },
//           k = function (e) {
//             e.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), o.goToNextSlide())
//           },
//           T = function (e) {
//             e.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), o.goToPrevSlide())
//           },
//           E = function (e) {
//             o.startAuto(), e.preventDefault()
//           },
//           j = function (e) {
//             o.stopAuto(), e.preventDefault()
//           },
//           M = function (t) {
//             var n, i;
//             t.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), void 0 !== (n = e(t.currentTarget)).attr("data-slide-index") && (i = parseInt(n.attr("data-slide-index"))) !== r.active.index && o.goToSlide(i))
//           },
//           _ = function (t) {
//             var n = r.children.length;
//             if ("short" === r.settings.pagerType) return r.settings.maxSlides > 1 && (n = Math.ceil(r.children.length / r.settings.maxSlides)), void r.pagerEl.html(t + 1 + r.settings.pagerShortSeparator + n);
//             r.pagerEl.find("a").removeClass("active"), r.pagerEl.each(function (n, i) {
//               e(i).find("a").eq(t).addClass("active")
//             })
//           },
//           A = function () {
//             if (r.settings.infiniteLoop) {
//               var e = "";
//               0 === r.active.index ? e = r.children.eq(0).position() : r.active.index === g() - 1 && r.carousel ? e = r.children.eq((g() - 1) * v()).position() : r.active.index === r.children.length - 1 && (e = r.children.eq(r.children.length - 1).position()), e && ("horizontal" === r.settings.mode ? b(-e.left, "reset", 0) : "vertical" === r.settings.mode && b(-e.top, "reset", 0))
//             }
//             r.working = !1, r.settings.onSlideAfter.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index)
//           },
//           D = function (e) {
//             r.settings.autoControlsCombine ? r.controls.autoEl.html(r.controls[e]) : (r.controls.autoEl.find("a").removeClass("active"), r.controls.autoEl.find("a:not(.bx-" + e + ")").addClass("active"))
//           },
//           O = function () {
//             1 === g() ? (r.controls.prev.addClass("disabled"), r.controls.next.addClass("disabled")) : !r.settings.infiniteLoop && r.settings.hideControlOnEnd && (0 === r.active.index ? (r.controls.prev.addClass("disabled"), r.controls.next.removeClass("disabled")) : r.active.index === g() - 1 ? (r.controls.next.addClass("disabled"), r.controls.prev.removeClass("disabled")) : (r.controls.prev.removeClass("disabled"), r.controls.next.removeClass("disabled")))
//           },
//           P = function () {
//             if (r.settings.autoDelay > 0) setTimeout(o.startAuto, r.settings.autoDelay);
//             else o.startAuto(), e(window).focus(function () {
//               o.startAuto()
//             }).blur(function () {
//               o.stopAuto()
//             });
//             r.settings.autoHover && o.hover(function () {
//               r.interval && (o.stopAuto(!0), r.autoPaused = !0)
//             }, function () {
//               r.autoPaused && (o.startAuto(!0), r.autoPaused = null)
//             })
//           },
//           N = function () {
//             var t, n, i, s, a, l, u, c, d = 0;
//             "next" === r.settings.autoDirection ? o.append(r.children.clone().addClass("bx-clone")) : (o.prepend(r.children.clone().addClass("bx-clone")), t = r.children.first().position(), d = "horizontal" === r.settings.mode ? -t.left : -t.top), b(d, "reset", 0), r.settings.pager = !1, r.settings.controls = !1, r.settings.autoControls = !1, r.settings.tickerHover && (r.usingCSS ? (s = "horizontal" === r.settings.mode ? 4 : 5, r.viewport.hover(function () {
//               n = o.css("-" + r.cssPrefix + "-transform"), i = parseFloat(n.split(",")[s]), b(i, "reset", 0)
//             }, function () {
//               c = 0, r.children.each(function (t) {
//                 c += "horizontal" === r.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0)
//               }), a = r.settings.speed / c, l = "horizontal" === r.settings.mode ? "left" : "top", u = a * (c - Math.abs(parseInt(i))), F(u)
//             })) : r.viewport.hover(function () {
//               o.stop()
//             }, function () {
//               c = 0, r.children.each(function (t) {
//                 c += "horizontal" === r.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0)
//               }), a = r.settings.speed / c, l = "horizontal" === r.settings.mode ? "left" : "top", u = a * (c - Math.abs(parseInt(o.css(l)))), F(u)
//             })), F()
//           },
//           F = function (e) {
//             var t, n, i = e || r.settings.speed,
//               s = {
//                 left: 0,
//                 top: 0
//               },
//               a = {
//                 left: 0,
//                 top: 0
//               };
//             "next" === r.settings.autoDirection ? s = o.find(".bx-clone").first().position() : a = r.children.first().position(), t = "horizontal" === r.settings.mode ? -s.left : -s.top, n = "horizontal" === r.settings.mode ? -a.left : -a.top, b(t, "ticker", i, {
//               resetValue: n
//             })
//           },
//           I = function (t) {
//             var n = e(window),
//               i = {
//                 top: n.scrollTop(),
//                 left: n.scrollLeft()
//               },
//               r = t.offset();
//             return i.right = i.left + n.width(), i.bottom = i.top + n.height(), r.right = r.left + t.outerWidth(), r.bottom = r.top + t.outerHeight(), !(i.right < r.left || i.left > r.right || i.bottom < r.top || i.top > r.bottom)
//           },
//           R = function (e) {
//             var t = document.activeElement.tagName.toLowerCase();
//             if (null == new RegExp(t, ["i"]).exec("input|textarea") && I(o)) {
//               if (39 === e.keyCode) return k(e), !1;
//               if (37 === e.keyCode) return T(e), !1
//             }
//           },
//           z = function () {
//             r.touch = {
//               start: {
//                 x: 0,
//                 y: 0
//               },
//               end: {
//                 x: 0,
//                 y: 0
//               }
//             }, r.viewport.bind("touchstart MSPointerDown pointerdown", L), r.viewport.on("click", ".bxslider a", function (e) {
//               r.viewport.hasClass("click-disabled") && (e.preventDefault(), r.viewport.removeClass("click-disabled"))
//             })
//           },
//           L = function (e) {
//             if (r.controls.el.addClass("disabled"), r.working) e.preventDefault(), r.controls.el.removeClass("disabled");
//             else {
//               r.touch.originalPos = o.position();
//               var t = e.originalEvent,
//                 n = void 0 !== t.changedTouches ? t.changedTouches : [t];
//               r.touch.start.x = n[0].pageX, r.touch.start.y = n[0].pageY, r.viewport.get(0).setPointerCapture && (r.pointerId = t.pointerId, r.viewport.get(0).setPointerCapture(r.pointerId)), r.viewport.bind("touchmove MSPointerMove pointermove", V), r.viewport.bind("touchend MSPointerUp pointerup", U), r.viewport.bind("MSPointerCancel pointercancel", H)
//             }
//           },
//           H = function (e) {
//             b(r.touch.originalPos.left, "reset", 0), r.controls.el.removeClass("disabled"), r.viewport.unbind("MSPointerCancel pointercancel", H), r.viewport.unbind("touchmove MSPointerMove pointermove", V), r.viewport.unbind("touchend MSPointerUp pointerup", U), r.viewport.get(0).releasePointerCapture && r.viewport.get(0).releasePointerCapture(r.pointerId)
//           },
//           V = function (e) {
//             var t = e.originalEvent,
//               n = void 0 !== t.changedTouches ? t.changedTouches : [t],
//               i = Math.abs(n[0].pageX - r.touch.start.x),
//               o = Math.abs(n[0].pageY - r.touch.start.y),
//               s = 0,
//               a = 0;
//             3 * i > o && r.settings.preventDefaultSwipeX ? e.preventDefault() : 3 * o > i && r.settings.preventDefaultSwipeY && e.preventDefault(), "fade" !== r.settings.mode && r.settings.oneToOneTouch && ("horizontal" === r.settings.mode ? (a = n[0].pageX - r.touch.start.x, s = r.touch.originalPos.left + a) : (a = n[0].pageY - r.touch.start.y, s = r.touch.originalPos.top + a), b(s, "reset", 0))
//           },
//           U = function (e) {
//             r.viewport.unbind("touchmove MSPointerMove pointermove", V), r.controls.el.removeClass("disabled");
//             var t = e.originalEvent,
//               n = void 0 !== t.changedTouches ? t.changedTouches : [t],
//               i = 0,
//               s = 0;
//             r.touch.end.x = n[0].pageX, r.touch.end.y = n[0].pageY, "fade" === r.settings.mode ? (s = Math.abs(r.touch.start.x - r.touch.end.x)) >= r.settings.swipeThreshold && (r.touch.start.x > r.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : ("horizontal" === r.settings.mode ? (s = r.touch.end.x - r.touch.start.x, i = r.touch.originalPos.left) : (s = r.touch.end.y - r.touch.start.y, i = r.touch.originalPos.top), !r.settings.infiniteLoop && (0 === r.active.index && s > 0 || r.active.last && s < 0) ? b(i, "reset", 200) : Math.abs(s) >= r.settings.swipeThreshold ? (s < 0 ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : b(i, "reset", 200)), r.viewport.unbind("touchend MSPointerUp pointerup", U), r.viewport.get(0).releasePointerCapture && r.viewport.get(0).releasePointerCapture(r.pointerId)
//           },
//           B = function (t) {
//             if (r.initialized)
//               if (r.working) window.setTimeout(B, 10);
//               else {
//                 var n = e(window).width(),
//                   i = e(window).height();
//                 s === n && a === i || (s = n, a = i, o.redrawSlider(), r.settings.onSliderResize.call(o, r.active.index))
//               }
//           },
//           q = function (e) {
//             var t = m();
//             r.settings.ariaHidden && !r.settings.ticker && (r.children.attr("aria-hidden", "true"), r.children.slice(e, e + t).attr("aria-hidden", "false"))
//           },
//           W = function (e) {
//             return e < 0 ? r.settings.infiniteLoop ? g() - 1 : r.active.index : e >= g() ? r.settings.infiniteLoop ? 0 : r.active.index : e
//           };
//         return o.goToSlide = function (t, n) {
//           var i, s, a, l, u = !0,
//             c = 0,
//             d = {
//               left: 0,
//               top: 0
//             },
//             h = null;
//           if (r.oldIndex = r.active.index, r.active.index = W(t), !r.working && r.active.index !== r.oldIndex) {
//             if (r.working = !0, void 0 !== (u = r.settings.onSlideBefore.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index)) && !u) return r.active.index = r.oldIndex, void (r.working = !1);
//             "next" === n ? r.settings.onSlideNext.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index) || (u = !1) : "prev" === n && (r.settings.onSlidePrev.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index) || (u = !1)), r.active.last = r.active.index >= g() - 1, (r.settings.pager || r.settings.pagerCustom) && _(r.active.index), r.settings.controls && O(), "fade" === r.settings.mode ? (r.settings.adaptiveHeight && r.viewport.height() !== f() && r.viewport.animate({
//               height: f()
//             }, r.settings.adaptiveHeightSpeed), r.children.filter(":visible").fadeOut(r.settings.speed).css({
//               zIndex: 0
//             }), r.children.eq(r.active.index).css("zIndex", r.settings.slideZIndex + 1).fadeIn(r.settings.speed, function () {
//               e(this).css("zIndex", r.settings.slideZIndex), A()
//             })) : (r.settings.adaptiveHeight && r.viewport.height() !== f() && r.viewport.animate({
//               height: f()
//             }, r.settings.adaptiveHeightSpeed), !r.settings.infiniteLoop && r.carousel && r.active.last ? "horizontal" === r.settings.mode ? (d = (h = r.children.eq(r.children.length - 1)).position(), c = r.viewport.width() - h.outerWidth()) : (i = r.children.length - r.settings.minSlides, d = r.children.eq(i).position()) : r.carousel && r.active.last && "prev" === n ? (s = 1 === r.settings.moveSlides ? r.settings.maxSlides - v() : (g() - 1) * v() - (r.children.length - r.settings.maxSlides), d = (h = o.children(".bx-clone").eq(s)).position()) : "next" === n && 0 === r.active.index ? (d = o.find("> .bx-clone").eq(r.settings.maxSlides).position(), r.active.last = !1) : t >= 0 && (l = t * parseInt(v()), d = r.children.eq(l).position()), void 0 !== d ? (a = "horizontal" === r.settings.mode ? -(d.left - c) : -d.top, b(a, "slide", r.settings.speed)) : r.working = !1), r.settings.ariaHidden && q(r.active.index * v())
//           }
//         }, o.goToNextSlide = function () {
//           if (r.settings.infiniteLoop || !r.active.last) {
//             var e = parseInt(r.active.index) + 1;
//             o.goToSlide(e, "next")
//           }
//         }, o.goToPrevSlide = function () {
//           if (r.settings.infiniteLoop || 0 !== r.active.index) {
//             var e = parseInt(r.active.index) - 1;
//             o.goToSlide(e, "prev")
//           }
//         }, o.startAuto = function (e) {
//           r.interval || (r.interval = setInterval(function () {
//             "next" === r.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide()
//           }, r.settings.pause), r.settings.autoControls && !0 !== e && D("stop"))
//         }, o.stopAuto = function (e) {
//           r.interval && (clearInterval(r.interval), r.interval = null, r.settings.autoControls && !0 !== e && D("start"))
//         }, o.getCurrentSlide = function () {
//           return r.active.index
//         }, o.getCurrentSlideElement = function () {
//           return r.children.eq(r.active.index)
//         }, o.getSlideElement = function (e) {
//           return r.children.eq(e)
//         }, o.getSlideCount = function () {
//           return r.children.length
//         }, o.isWorking = function () {
//           return r.working
//         }, o.redrawSlider = function () {
//           r.children.add(o.find(".bx-clone")).outerWidth(p()), r.viewport.css("height", f()), o.find(".bx-clone").css({
//             height: f()
//           }), r.children.css({
//             height: f()
//           }), r.settings.ticker || y(), r.active.last && (r.active.index = g() - 1), r.active.index >= g() && (r.active.last = !0), r.settings.pager && !r.settings.pagerCustom && ($(), _(r.active.index)), r.settings.ariaHidden && q(r.active.index * v())
//         }, o.destroySlider = function () {
//           r.initialized && (r.initialized = !1, e(".bx-clone", this).remove(), r.children.each(function () {
//             void 0 !== e(this).data("origStyle") ? e(this).attr("style", e(this).data("origStyle")) : e(this).removeAttr("style")
//           }), void 0 !== e(this).data("origStyle") ? this.attr("style", e(this).data("origStyle")) : e(this).removeAttr("style"), e(this).unwrap().unwrap(), r.controls.el && r.controls.el.remove(), r.controls.next && r.controls.next.remove(), r.controls.prev && r.controls.prev.remove(), r.pagerEl && r.settings.controls && !r.settings.pagerCustom && r.pagerEl.remove(), e(".bx-caption", this).remove(), r.controls.autoEl && r.controls.autoEl.remove(), clearInterval(r.interval), r.settings.responsive && e(window).unbind("resize", B), r.settings.keyboardEnabled && e(document).unbind("keydown", R), e(this).removeData("bxSlider"))
//         }, o.reloadSlider = function (t) {
//           void 0 !== t && (n = t), o.destroySlider(), l(), e(o).data("bxSlider", this)
//         }, l(), e(o).data("bxSlider", this), this
//       }
//     }
//   }(jQuery),
//   function (e) {
//     function t() {
//       return e("body").height() > e(window).height()
//     }
//     var n = function (t, n) {
//       this.settings = n, this.checkSettings(), this.imgAnalyzerTimeout = null, this.entries = null, this.buildingRow = {
//         entriesBuff: [],
//         width: 0,
//         height: 0,
//         aspectRatio: 0
//       }, this.lastFetchedEntry = null, this.lastAnalyzedIndex = -1, this.yield = {
//         every: 2,
//         flushed: 0
//       }, this.border = n.border >= 0 ? n.border : n.margins, this.maxRowHeight = this.retrieveMaxRowHeight(), this.suffixRanges = this.retrieveSuffixRanges(), this.offY = this.border, this.rows = 0, this.spinner = {
//         phase: 0,
//         timeSlot: 150,
//         $el: e('<div class="spinner"><span></span><span></span><span></span></div>'),
//         intervalId: null
//       }, this.checkWidthIntervalId = null, this.galleryWidth = t.width(), this.$gallery = t
//     };
//     n.prototype.getSuffix = function (e, t) {
//       var n, i;
//       for (n = e > t ? e : t, i = 0; i < this.suffixRanges.length; i++)
//         if (n <= this.suffixRanges[i]) return this.settings.sizeRangeSuffixes[this.suffixRanges[i]];
//       return this.settings.sizeRangeSuffixes[this.suffixRanges[i - 1]]
//     }, n.prototype.removeSuffix = function (e, t) {
//       return e.substring(0, e.length - t.length)
//     }, n.prototype.endsWith = function (e, t) {
//       return -1 !== e.indexOf(t, e.length - t.length)
//     }, n.prototype.getUsedSuffix = function (e) {
//       for (var t in this.settings.sizeRangeSuffixes)
//         if (this.settings.sizeRangeSuffixes.hasOwnProperty(t)) {
//           if (0 === this.settings.sizeRangeSuffixes[t].length) continue;
//           if (this.endsWith(e, this.settings.sizeRangeSuffixes[t])) return this.settings.sizeRangeSuffixes[t]
//         }
//       return ""
//     }, n.prototype.newSrc = function (e, t, n, i) {
//       var r;
//       if (this.settings.thumbnailPath) r = this.settings.thumbnailPath(e, t, n, i);
//       else {
//         var o = e.match(this.settings.extension),
//           s = null !== o ? o[0] : "";
//         r = e.replace(this.settings.extension, ""), r = this.removeSuffix(r, this.getUsedSuffix(r)), r += this.getSuffix(t, n) + s
//       }
//       return r
//     }, n.prototype.showImg = function (e, t) {
//       this.settings.cssAnimation ? (e.addClass("entry-visible"), t && t()) : (e.stop().fadeTo(this.settings.imagesAnimationDuration, 1, t), e.find("> img, > a > img").stop().fadeTo(this.settings.imagesAnimationDuration, 1, t))
//     }, n.prototype.extractImgSrcFromImage = function (e) {
//       var t = void 0 !== e.data("safe-src") ? e.data("safe-src") : e.attr("src");
//       return e.data("jg.originalSrc", t), t
//     }, n.prototype.imgFromEntry = function (e) {
//       var t = e.find("> img");
//       return 0 === t.length && (t = e.find("> a > img")), 0 === t.length ? null : t
//     }, n.prototype.captionFromEntry = function (e) {
//       var t = e.find("> .caption");
//       return 0 === t.length ? null : t
//     }, n.prototype.displayEntry = function (t, n, i, r, o, s) {
//       t.width(r), t.height(s), t.css("top", i), t.css("left", n);
//       var a = this.imgFromEntry(t);
//       if (null !== a) {
//         a.css("width", r), a.css("height", o), a.css("margin-left", -r / 2), a.css("margin-top", -o / 2);
//         var l = a.attr("src"),
//           u = this.newSrc(l, r, o, a[0]);
//         a.one("error", function () {
//           a.attr("src", a.data("jg.originalSrc"))
//         });
//         var c = function () {
//           l !== u && a.attr("src", u)
//         };
//         "skipped" === t.data("jg.loaded") ? this.onImageEvent(l, e.proxy(function () {
//           this.showImg(t, c), t.data("jg.loaded", !0)
//         }, this)) : this.showImg(t, c)
//       } else this.showImg(t);
//       this.displayEntryCaption(t)
//     }, n.prototype.displayEntryCaption = function (t) {
//       var n = this.imgFromEntry(t);
//       if (null !== n && this.settings.captions) {
//         var i = this.captionFromEntry(t);
//         if (null === i) {
//           var r = n.attr("alt");
//           this.isValidCaption(r) || (r = t.attr("title")), this.isValidCaption(r) && (i = e('<div class="caption">' + r + "</div>"), t.append(i), t.data("jg.createdCaption", !0))
//         }
//         null !== i && (this.settings.cssAnimation || i.stop().fadeTo(0, this.settings.captionSettings.nonVisibleOpacity), this.addCaptionEventsHandlers(t))
//       } else this.removeCaptionEventsHandlers(t)
//     }, n.prototype.isValidCaption = function (e) {
//       return void 0 !== e && e.length > 0
//     }, n.prototype.onEntryMouseEnterForCaption = function (t) {
//       var n = this.captionFromEntry(e(t.currentTarget));
//       this.settings.cssAnimation ? n.addClass("caption-visible").removeClass("caption-hidden") : n.stop().fadeTo(this.settings.captionSettings.animationDuration, this.settings.captionSettings.visibleOpacity)
//     }, n.prototype.onEntryMouseLeaveForCaption = function (t) {
//       var n = this.captionFromEntry(e(t.currentTarget));
//       this.settings.cssAnimation ? n.removeClass("caption-visible").removeClass("caption-hidden") : n.stop().fadeTo(this.settings.captionSettings.animationDuration, this.settings.captionSettings.nonVisibleOpacity)
//     }, n.prototype.addCaptionEventsHandlers = function (t) {
//       var n = t.data("jg.captionMouseEvents");
//       void 0 === n && (n = {
//         mouseenter: e.proxy(this.onEntryMouseEnterForCaption, this),
//         mouseleave: e.proxy(this.onEntryMouseLeaveForCaption, this)
//       }, t.on("mouseenter", void 0, void 0, n.mouseenter), t.on("mouseleave", void 0, void 0, n.mouseleave), t.data("jg.captionMouseEvents", n))
//     }, n.prototype.removeCaptionEventsHandlers = function (e) {
//       var t = e.data("jg.captionMouseEvents");
//       void 0 !== t && (e.off("mouseenter", void 0, t.mouseenter), e.off("mouseleave", void 0, t.mouseleave), e.removeData("jg.captionMouseEvents"))
//     }, n.prototype.prepareBuildingRow = function (e) {
//       var t, n, i, r, o, s = !0,
//         a = 0,
//         l = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
//         u = l / this.buildingRow.aspectRatio,
//         c = this.settings.rowHeight,
//         d = this.buildingRow.width / l > this.settings.justifyThreshold;
//       if (e && "hide" === this.settings.lastRow && !d) {
//         for (t = 0; t < this.buildingRow.entriesBuff.length; t++) n = this.buildingRow.entriesBuff[t], this.settings.cssAnimation ? n.removeClass("entry-visible") : (n.stop().fadeTo(0, .1), n.find("> img, > a > img").fadeTo(0, 0));
//         return -1
//       }
//       for (e && !d && "justify" !== this.settings.lastRow && "hide" !== this.settings.lastRow && (s = !1, this.rows > 0 && (s = (c = (this.offY - this.border - this.settings.margins * this.rows) / this.rows) * this.buildingRow.aspectRatio / l > this.settings.justifyThreshold)), t = 0; t < this.buildingRow.entriesBuff.length; t++) i = (n = this.buildingRow.entriesBuff[t]).data("jg.width") / n.data("jg.height"), s ? (r = t === this.buildingRow.entriesBuff.length - 1 ? l : u * i, o = u) : (r = c * i, o = c), l -= Math.round(r), n.data("jg.jwidth", Math.round(r)), n.data("jg.jheight", Math.ceil(o)), (0 === t || a > o) && (a = o);
//       return this.buildingRow.height = a, s
//     }, n.prototype.clearBuildingRow = function () {
//       this.buildingRow.entriesBuff = [], this.buildingRow.aspectRatio = 0, this.buildingRow.width = 0
//     }, n.prototype.flushRow = function (e) {
//       var t, n, i, r = this.settings,
//         o = this.border;
//       if (n = this.prepareBuildingRow(e), e && "hide" === r.lastRow && -1 === n) this.clearBuildingRow();
//       else {
//         if (this.maxRowHeight && (this.maxRowHeight.isPercentage && this.maxRowHeight.value * r.rowHeight < this.buildingRow.height ? this.buildingRow.height = this.maxRowHeight.value * r.rowHeight : this.maxRowHeight.value >= r.rowHeight && this.maxRowHeight.value < this.buildingRow.height && (this.buildingRow.height = this.maxRowHeight.value)), "center" === r.lastRow || "right" === r.lastRow) {
//           var s = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * r.margins;
//           for (i = 0; i < this.buildingRow.entriesBuff.length; i++) s -= (t = this.buildingRow.entriesBuff[i]).data("jg.jwidth");
//           "center" === r.lastRow ? o += s / 2 : "right" === r.lastRow && (o += s)
//         }
//         for (i = 0; i < this.buildingRow.entriesBuff.length; i++) t = this.buildingRow.entriesBuff[i], this.displayEntry(t, o, this.offY, t.data("jg.jwidth"), t.data("jg.jheight"), this.buildingRow.height), o += t.data("jg.jwidth") + r.margins;
//         this.galleryHeightToSet = this.offY + this.buildingRow.height + this.border, this.$gallery.height(this.galleryHeightToSet + this.getSpinnerHeight()), (!e || this.buildingRow.height <= r.rowHeight && n) && (this.offY += this.buildingRow.height + r.margins, this.rows += 1, this.clearBuildingRow(), this.$gallery.trigger("jg.rowflush"))
//       }
//     };
//     var i = !1;
//     n.prototype.checkWidth = function () {
//       this.checkWidthIntervalId = setInterval(e.proxy(function () {
//         var e = parseFloat(this.$gallery.width());
//         t() === i ? Math.abs(e - this.galleryWidth) > this.settings.refreshSensitivity && (this.galleryWidth = e, this.rewind(), this.startImgAnalyzer(!0)) : (i = t(), this.galleryWidth = e)
//       }, this), this.settings.refreshTime)
//     }, n.prototype.isSpinnerActive = function () {
//       return null !== this.spinner.intervalId
//     }, n.prototype.getSpinnerHeight = function () {
//       return this.spinner.$el.innerHeight()
//     }, n.prototype.stopLoadingSpinnerAnimation = function () {
//       clearInterval(this.spinner.intervalId), this.spinner.intervalId = null, this.$gallery.height(this.$gallery.height() - this.getSpinnerHeight()), this.spinner.$el.detach()
//     }, n.prototype.startLoadingSpinnerAnimation = function () {
//       var e = this.spinner,
//         t = e.$el.find("span");
//       clearInterval(e.intervalId), this.$gallery.append(e.$el), this.$gallery.height(this.offY + this.buildingRow.height + this.getSpinnerHeight()), e.intervalId = setInterval(function () {
//         e.phase < t.length ? t.eq(e.phase).fadeTo(e.timeSlot, 1) : t.eq(e.phase - t.length).fadeTo(e.timeSlot, 0), e.phase = (e.phase + 1) % (2 * t.length)
//       }, e.timeSlot)
//     }, n.prototype.rewind = function () {
//       this.lastFetchedEntry = null, this.lastAnalyzedIndex = -1, this.offY = this.border, this.rows = 0, this.clearBuildingRow()
//     }, n.prototype.updateEntries = function (t) {
//       var n;
//       return t && null != this.lastFetchedEntry ? n = e(this.lastFetchedEntry).nextAll(this.settings.selector).toArray() : (this.entries = [], n = this.$gallery.children(this.settings.selector).toArray()), n.length > 0 && (e.isFunction(this.settings.sort) ? n = this.sortArray(n) : this.settings.randomize && (n = this.shuffleArray(n)), this.lastFetchedEntry = n[n.length - 1], this.settings.filter ? n = this.filterArray(n) : this.resetFilters(n)), this.entries = this.entries.concat(n), !0
//     }, n.prototype.insertToGallery = function (t) {
//       var n = this;
//       e.each(t, function () {
//         e(this).appendTo(n.$gallery)
//       })
//     }, n.prototype.shuffleArray = function (e) {
//       var t, n, i;
//       for (t = e.length - 1; t > 0; t--) n = Math.floor(Math.random() * (t + 1)), i = e[t], e[t] = e[n], e[n] = i;
//       return this.insertToGallery(e), e
//     }, n.prototype.sortArray = function (e) {
//       return e.sort(this.settings.sort), this.insertToGallery(e), e
//     }, n.prototype.resetFilters = function (t) {
//       for (var n = 0; n < t.length; n++) e(t[n]).removeClass("jg-filtered")
//     }, n.prototype.filterArray = function (t) {
//       var n = this.settings;
//       if ("string" === e.type(n.filter)) return t.filter(function (t) {
//         var i = e(t);
//         return i.is(n.filter) ? (i.removeClass("jg-filtered"), !0) : (i.addClass("jg-filtered").removeClass("jg-visible"), !1)
//       });
//       if (e.isFunction(n.filter)) {
//         for (var i = t.filter(n.filter), r = 0; r < t.length; r++) - 1 == i.indexOf(t[r]) ? e(t[r]).addClass("jg-filtered").removeClass("jg-visible") : e(t[r]).removeClass("jg-filtered");
//         return i
//       }
//     }, n.prototype.destroy = function () {
//       clearInterval(this.checkWidthIntervalId), e.each(this.entries, e.proxy(function (t, n) {
//         var i = e(n);
//         i.css("width", ""), i.css("height", ""), i.css("top", ""), i.css("left", ""), i.data("jg.loaded", void 0), i.removeClass("jg-entry");
//         var r = this.imgFromEntry(i);
//         r.css("width", ""), r.css("height", ""), r.css("margin-left", ""), r.css("margin-top", ""), r.attr("src", r.data("jg.originalSrc")), r.data("jg.originalSrc", void 0), this.removeCaptionEventsHandlers(i);
//         var o = this.captionFromEntry(i);
//         i.data("jg.createdCaption") ? (i.data("jg.createdCaption", void 0), null !== o && o.remove()) : null !== o && o.fadeTo(0, 1)
//       }, this)), this.$gallery.css("height", ""), this.$gallery.removeClass("justified-gallery"), this.$gallery.data("jg.controller", void 0)
//     }, n.prototype.analyzeImages = function (t) {
//       for (var n = this.lastAnalyzedIndex + 1; n < this.entries.length; n++) {
//         var i = e(this.entries[n]);
//         if (!0 === i.data("jg.loaded") || "skipped" === i.data("jg.loaded")) {
//           var r = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
//             o = i.data("jg.width") / i.data("jg.height");
//           if (r / (this.buildingRow.aspectRatio + o) < this.settings.rowHeight && (this.flushRow(!1), ++this.yield.flushed >= this.yield.every)) return void this.startImgAnalyzer(t);
//           this.buildingRow.entriesBuff.push(i), this.buildingRow.aspectRatio += o, this.buildingRow.width += o * this.settings.rowHeight, this.lastAnalyzedIndex = n
//         } else if ("error" !== i.data("jg.loaded")) return
//       }
//       this.buildingRow.entriesBuff.length > 0 && this.flushRow(!0), this.isSpinnerActive() && this.stopLoadingSpinnerAnimation(), this.stopImgAnalyzerStarter(), this.$gallery.trigger(t ? "jg.resize" : "jg.complete"), this.$gallery.height(this.galleryHeightToSet)
//     }, n.prototype.stopImgAnalyzerStarter = function () {
//       this.yield.flushed = 0, null !== this.imgAnalyzerTimeout && clearTimeout(this.imgAnalyzerTimeout)
//     }, n.prototype.startImgAnalyzer = function (e) {
//       var t = this;
//       this.stopImgAnalyzerStarter(), this.imgAnalyzerTimeout = setTimeout(function () {
//         t.analyzeImages(e)
//       }, .001)
//     }, n.prototype.onImageEvent = function (t, n, i) {
//       if (n || i) {
//         var r = new Image,
//           o = e(r);
//         n && o.one("load", function () {
//           o.off("load error"), n(r)
//         }), i && o.one("error", function () {
//           o.off("load error"), i(r)
//         }), r.src = t
//       }
//     }, n.prototype.init = function () {
//       var t = !1,
//         n = !1,
//         i = this;
//       e.each(this.entries, function (r, o) {
//         var s = e(o),
//           a = i.imgFromEntry(s);
//         if (s.addClass("jg-entry"), !0 !== s.data("jg.loaded") && "skipped" !== s.data("jg.loaded"))
//           if (null !== i.settings.rel && s.attr("rel", i.settings.rel), null !== i.settings.target && s.attr("target", i.settings.target), null !== a) {
//             var l = i.extractImgSrcFromImage(a);
//             if (a.attr("src", l), !1 === i.settings.waitThumbnailsLoad) {
//               var u = parseFloat(a.attr("width")),
//                 c = parseFloat(a.attr("height"));
//               if (!isNaN(u) && !isNaN(c)) return s.data("jg.width", u), s.data("jg.height", c), s.data("jg.loaded", "skipped"), n = !0, i.startImgAnalyzer(!1), !0
//             }
//             s.data("jg.loaded", !1), t = !0, i.isSpinnerActive() || i.startLoadingSpinnerAnimation(), i.onImageEvent(l, function (e) {
//               s.data("jg.width", e.width), s.data("jg.height", e.height), s.data("jg.loaded", !0), i.startImgAnalyzer(!1)
//             }, function () {
//               s.data("jg.loaded", "error"), i.startImgAnalyzer(!1)
//             })
//           } else s.data("jg.loaded", !0), s.data("jg.width", s.width() | parseFloat(s.css("width")) | 1), s.data("jg.height", s.height() | parseFloat(s.css("height")) | 1)
//       }), t || n || this.startImgAnalyzer(!1), this.checkWidth()
//     }, n.prototype.checkOrConvertNumber = function (t, n) {
//       if ("string" === e.type(t[n]) && (t[n] = parseFloat(t[n])), "number" !== e.type(t[n])) throw n + " must be a number";
//       if (isNaN(t[n])) throw "invalid number for " + n
//     }, n.prototype.checkSizeRangesSuffixes = function () {
//       if ("object" !== e.type(this.settings.sizeRangeSuffixes)) throw "sizeRangeSuffixes must be defined and must be an object";
//       var t = [];
//       for (var n in this.settings.sizeRangeSuffixes) this.settings.sizeRangeSuffixes.hasOwnProperty(n) && t.push(n);
//       for (var i = {
//         0: ""
//       }, r = 0; r < t.length; r++)
//         if ("string" === e.type(t[r])) try {
//           i[parseInt(t[r].replace(/^[a-z]+/, ""), 10)] = this.settings.sizeRangeSuffixes[t[r]]
//         } catch (e) {
//           throw "sizeRangeSuffixes keys must contains correct numbers (" + e + ")"
//         } else i[t[r]] = this.settings.sizeRangeSuffixes[t[r]];
//       this.settings.sizeRangeSuffixes = i
//     }, n.prototype.retrieveMaxRowHeight = function () {
//       var t = {};
//       if ("string" === e.type(this.settings.maxRowHeight)) this.settings.maxRowHeight.match(/^[0-9]+%$/) ? (t.value = parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1]) / 100, t.isPercentage = !1) : (t.value = parseFloat(this.settings.maxRowHeight), t.isPercentage = !0);
//       else {
//         if ("number" !== e.type(this.settings.maxRowHeight)) {
//           if (!1 === this.settings.maxRowHeight || null === this.settings.maxRowHeight || void 0 === this.settings.maxRowHeight) return null;
//           throw "maxRowHeight must be a number or a percentage"
//         }
//         t.value = this.settings.maxRowHeight, t.isPercentage = !1
//       }
//       if (isNaN(t.value)) throw "invalid number for maxRowHeight";
//       return t.isPercentage && t.value < 100 && (t.value = 100), t
//     }, n.prototype.checkSettings = function () {
//       this.checkSizeRangesSuffixes(), this.checkOrConvertNumber(this.settings, "rowHeight"), this.checkOrConvertNumber(this.settings, "margins"), this.checkOrConvertNumber(this.settings, "border");
//       var t = ["justify", "nojustify", "left", "center", "right", "hide"];
//       if (-1 === t.indexOf(this.settings.lastRow)) throw "lastRow must be one of: " + t.join(", ");
//       if (this.checkOrConvertNumber(this.settings, "justifyThreshold"), this.settings.justifyThreshold < 0 || this.settings.justifyThreshold > 1) throw "justifyThreshold must be in the interval [0,1]";
//       if ("boolean" !== e.type(this.settings.cssAnimation)) throw "cssAnimation must be a boolean";
//       if ("boolean" !== e.type(this.settings.captions)) throw "captions must be a boolean";
//       if (this.checkOrConvertNumber(this.settings.captionSettings, "animationDuration"), this.checkOrConvertNumber(this.settings.captionSettings, "visibleOpacity"), this.settings.captionSettings.visibleOpacity < 0 || this.settings.captionSettings.visibleOpacity > 1) throw "captionSettings.visibleOpacity must be in the interval [0, 1]";
//       if (this.checkOrConvertNumber(this.settings.captionSettings, "nonVisibleOpacity"), this.settings.captionSettings.nonVisibleOpacity < 0 || this.settings.captionSettings.nonVisibleOpacity > 1) throw "captionSettings.nonVisibleOpacity must be in the interval [0, 1]";
//       if (this.checkOrConvertNumber(this.settings, "imagesAnimationDuration"), this.checkOrConvertNumber(this.settings, "refreshTime"), this.checkOrConvertNumber(this.settings, "refreshSensitivity"), "boolean" !== e.type(this.settings.randomize)) throw "randomize must be a boolean";
//       if ("string" !== e.type(this.settings.selector)) throw "selector must be a string";
//       if (!1 !== this.settings.sort && !e.isFunction(this.settings.sort)) throw "sort must be false or a comparison function";
//       if (!1 !== this.settings.filter && !e.isFunction(this.settings.filter) && "string" !== e.type(this.settings.filter)) throw "filter must be false, a string or a filter function"
//     }, n.prototype.retrieveSuffixRanges = function () {
//       var e = [];
//       for (var t in this.settings.sizeRangeSuffixes) this.settings.sizeRangeSuffixes.hasOwnProperty(t) && e.push(parseInt(t, 10));
//       return e.sort(function (e, t) {
//         return e > t ? 1 : e < t ? -1 : 0
//       }), e
//     }, n.prototype.updateSettings = function (t) {
//       this.settings = e.extend({}, this.settings, t), this.checkSettings(), this.border = this.settings.border >= 0 ? this.settings.border : this.settings.margins, this.maxRowHeight = this.retrieveMaxRowHeight(), this.suffixRanges = this.retrieveSuffixRanges()
//     }, e.fn.justifiedGallery = function (t) {
//       return this.each(function (i, r) {
//         var o = e(r);
//         o.addClass("justified-gallery");
//         var s = o.data("jg.controller");
//         if (void 0 === s) {
//           if (void 0 !== t && null !== t && "object" !== e.type(t)) {
//             if ("destroy" === t) return;
//             throw "The argument must be an object"
//           }
//           s = new n(o, e.extend({}, e.fn.justifiedGallery.defaults, t)), o.data("jg.controller", s)
//         } else if ("norewind" === t);
//         else {
//           if ("destroy" === t) return void s.destroy();
//           s.updateSettings(t), s.rewind()
//         }
//         s.updateEntries("norewind" === t) && s.init()
//       })
//     }, e.fn.justifiedGallery.defaults = {
//       sizeRangeSuffixes: {},
//       thumbnailPath: void 0,
//       rowHeight: 120,
//       maxRowHeight: !1,
//       margins: 1,
//       border: -1,
//       lastRow: "nojustify",
//       justifyThreshold: .9,
//       waitThumbnailsLoad: !0,
//       captions: !0,
//       cssAnimation: !0,
//       imagesAnimationDuration: 500,
//       captionSettings: {
//         animationDuration: 500,
//         visibleOpacity: .7,
//         nonVisibleOpacity: 0
//       },
//       rel: null,
//       target: null,
//       extension: /\.[^.\\/]+$/,
//       refreshTime: 200,
//       refreshSensitivity: 0,
//       randomize: !1,
//       sort: !1,
//       filter: !1,
//       selector: "a, div:not(.spinner)"
//     }
//   }(jQuery),
//   function (e, t, n, i) {
//     function r(t, n) {
//       this.element = t, this.options = e.extend({}, s, n), this._defaults = s, this._name = o, this.init()
//     }
//     var o = "stellar",
//       s = {
//         scrollProperty: "scroll",
//         positionProperty: "position",
//         horizontalScrolling: !0,
//         verticalScrolling: !0,
//         horizontalOffset: 0,
//         verticalOffset: 0,
//         responsive: !1,
//         parallaxBackgrounds: !0,
//         parallaxElements: !0,
//         hideDistantElements: !0,
//         hideElement: function (e) {
//           e.hide()
//         },
//         showElement: function (e) {
//           e.show()
//         }
//       },
//       a = {
//         scroll: {
//           getLeft: function (e) {
//             return e.scrollLeft()
//           },
//           setLeft: function (e, t) {
//             e.scrollLeft(t)
//           },
//           getTop: function (e) {
//             return e.scrollTop()
//           },
//           setTop: function (e, t) {
//             e.scrollTop(t)
//           }
//         },
//         position: {
//           getLeft: function (e) {
//             return -1 * parseInt(e.css("left"), 10)
//           },
//           getTop: function (e) {
//             return -1 * parseInt(e.css("top"), 10)
//           }
//         },
//         margin: {
//           getLeft: function (e) {
//             return -1 * parseInt(e.css("margin-left"), 10)
//           },
//           getTop: function (e) {
//             return -1 * parseInt(e.css("margin-top"), 10)
//           }
//         },
//         transform: {
//           getLeft: function (e) {
//             var t = getComputedStyle(e[0])[u];
//             return "none" !== t ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[4], 10) : 0
//           },
//           getTop: function (e) {
//             var t = getComputedStyle(e[0])[u];
//             return "none" !== t ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[5], 10) : 0
//           }
//         }
//       },
//       l = {
//         position: {
//           setLeft: function (e, t) {
//             e.css("left", t)
//           },
//           setTop: function (e, t) {
//             e.css("top", t)
//           }
//         },
//         transform: {
//           setPosition: function (e, t, n, i, r) {
//             e[0].style[u] = "translate3d(" + (t - n) + "px, " + (i - r) + "px, 0)"
//           }
//         }
//       },
//       u = function () {
//         var t, n = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
//           i = e("script")[0].style,
//           r = "";
//         for (t in i)
//           if (n.test(t)) {
//             r = t.match(n)[0];
//             break
//           }
//         return "WebkitOpacity" in i && (r = "Webkit"), "KhtmlOpacity" in i && (r = "Khtml"),
//           function (e) {
//             return r + (r.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)
//           }
//       }()("transform"),
//       c = void 0 !== e("<div />", {
//         style: "background:#fff"
//       }).css("background-position-x"),
//       d = c ? function (e, t, n) {
//         e.css({
//           "background-position-x": t,
//           "background-position-y": n
//         })
//       } : function (e, t, n) {
//         e.css("background-position", t + " " + n)
//       },
//       f = c ? function (e) {
//         return [e.css("background-position-x"), e.css("background-position-y")]
//       } : function (e) {
//         return e.css("background-position").split(" ")
//       },
//       h = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
//         setTimeout(e, 1e3 / 60)
//       };
//     r.prototype = {
//       init: function () {
//         this.options.name = o + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
//           firstLoad: !0
//         }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
//       },
//       _defineElements: function () {
//         this.element === n.body && (this.element = t), this.$scrollElement = e(this.element), this.$element = e.isWindow(this.element) ? e("body") : this.$scrollElement, this.$viewportElement = void 0 !== this.options.viewportElement ? e(this.options.viewportElement) : this.$scrollElement[0] === t || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
//       },
//       _defineGetters: function () {
//         var e = this,
//           t = a[e.options.scrollProperty];
//         this._getScrollLeft = function () {
//           return t.getLeft(e.$scrollElement)
//         }, this._getScrollTop = function () {
//           return t.getTop(e.$scrollElement)
//         }
//       },
//       _defineSetters: function () {
//         var t = this,
//           n = a[t.options.scrollProperty],
//           i = l[t.options.positionProperty],
//           r = n.setLeft,
//           o = n.setTop;
//         this._setScrollLeft = "function" == typeof r ? function (e) {
//           r(t.$scrollElement, e)
//         } : e.noop, this._setScrollTop = "function" == typeof o ? function (e) {
//           o(t.$scrollElement, e)
//         } : e.noop, this._setPosition = i.setPosition || function (e, n, r, o, s) {
//           t.options.horizontalScrolling && i.setLeft(e, n, r), t.options.verticalScrolling && i.setTop(e, o, s)
//         }
//       },
//       _handleWindowLoadAndResize: function () {
//         var n = this,
//           i = e(t);
//         n.options.responsive && i.bind("load." + this.name, function () {
//           n.refresh()
//         }), i.bind("resize." + this.name, function () {
//           n._detectViewport(), n.options.responsive && n.refresh()
//         })
//       },
//       refresh: function (n) {
//         var i = this,
//           r = i._getScrollLeft(),
//           o = i._getScrollTop();
//         n && n.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), n && n.firstLoad && /WebKit/.test(navigator.userAgent) && e(t).load(function () {
//           var e = i._getScrollLeft(),
//             t = i._getScrollTop();
//           i._setScrollLeft(e + 1), i._setScrollTop(t + 1), i._setScrollLeft(e), i._setScrollTop(t)
//         }), this._setScrollLeft(r), this._setScrollTop(o)
//       },
//       _detectViewport: function () {
//         var e = this.$viewportElement.offset(),
//           t = null !== e && void 0 !== e;
//         this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = t ? e.top : 0, this.viewportOffsetLeft = t ? e.left : 0
//       },
//       _findParticles: function () {
//         var t = this;
//         this._getScrollLeft(), this._getScrollTop();
//         if (void 0 !== this.particles)
//           for (var n = this.particles.length - 1; n >= 0; n--) this.particles[n].$element.data("stellar-elementIsActive", void 0);
//         this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function (n) {
//           var i, r, o, s, a, l, u, c, d, f = e(this),
//             h = 0,
//             p = 0,
//             m = 0,
//             g = 0;
//           if (f.data("stellar-elementIsActive")) {
//             if (f.data("stellar-elementIsActive") !== this) return
//           } else f.data("stellar-elementIsActive", this);
//           t.options.showElement(f), f.data("stellar-startingLeft") ? (f.css("left", f.data("stellar-startingLeft")), f.css("top", f.data("stellar-startingTop"))) : (f.data("stellar-startingLeft", f.css("left")), f.data("stellar-startingTop", f.css("top"))), o = f.position().left, s = f.position().top, a = "auto" === f.css("margin-left") ? 0 : parseInt(f.css("margin-left"), 10), l = "auto" === f.css("margin-top") ? 0 : parseInt(f.css("margin-top"), 10), c = f.offset().left - a, d = f.offset().top - l, f.parents().each(function () {
//             var t = e(this);
//             if (!0 === t.data("stellar-offset-parent")) return h = m, p = g, u = t, !1;
//             m += t.position().left, g += t.position().top
//           }), i = void 0 !== f.data("stellar-horizontal-offset") ? f.data("stellar-horizontal-offset") : void 0 !== u && void 0 !== u.data("stellar-horizontal-offset") ? u.data("stellar-horizontal-offset") : t.horizontalOffset, r = void 0 !== f.data("stellar-vertical-offset") ? f.data("stellar-vertical-offset") : void 0 !== u && void 0 !== u.data("stellar-vertical-offset") ? u.data("stellar-vertical-offset") : t.verticalOffset, t.particles.push({
//             $element: f,
//             $offsetParent: u,
//             isFixed: "fixed" === f.css("position"),
//             horizontalOffset: i,
//             verticalOffset: r,
//             startingPositionLeft: o,
//             startingPositionTop: s,
//             startingOffsetLeft: c,
//             startingOffsetTop: d,
//             parentOffsetLeft: h,
//             parentOffsetTop: p,
//             stellarRatio: void 0 !== f.data("stellar-ratio") ? f.data("stellar-ratio") : 1,
//             width: f.outerWidth(!0),
//             height: f.outerHeight(!0),
//             isHidden: !1
//           })
//         })
//       },
//       _findBackgrounds: function () {
//         var t, n = this,
//           i = this._getScrollLeft(),
//           r = this._getScrollTop();
//         this.backgrounds = [], this.options.parallaxBackgrounds && (t = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (t = t.add(this.$element)), t.each(function () {
//           var t, o, s, a, l, u, c, h = e(this),
//             p = f(h),
//             m = 0,
//             g = 0,
//             v = 0,
//             y = 0;
//           if (h.data("stellar-backgroundIsActive")) {
//             if (h.data("stellar-backgroundIsActive") !== this) return
//           } else h.data("stellar-backgroundIsActive", this);
//           h.data("stellar-backgroundStartingLeft") ? d(h, h.data("stellar-backgroundStartingLeft"), h.data("stellar-backgroundStartingTop")) : (h.data("stellar-backgroundStartingLeft", p[0]), h.data("stellar-backgroundStartingTop", p[1])), s = "auto" === h.css("margin-left") ? 0 : parseInt(h.css("margin-left"), 10), a = "auto" === h.css("margin-top") ? 0 : parseInt(h.css("margin-top"), 10), l = h.offset().left - s - i, u = h.offset().top - a - r, h.parents().each(function () {
//             var t = e(this);
//             if (!0 === t.data("stellar-offset-parent")) return m = v, g = y, c = t, !1;
//             v += t.position().left, y += t.position().top
//           }), t = void 0 !== h.data("stellar-horizontal-offset") ? h.data("stellar-horizontal-offset") : void 0 !== c && void 0 !== c.data("stellar-horizontal-offset") ? c.data("stellar-horizontal-offset") : n.horizontalOffset, o = void 0 !== h.data("stellar-vertical-offset") ? h.data("stellar-vertical-offset") : void 0 !== c && void 0 !== c.data("stellar-vertical-offset") ? c.data("stellar-vertical-offset") : n.verticalOffset, n.backgrounds.push({
//             $element: h,
//             $offsetParent: c,
//             isFixed: "fixed" === h.css("background-attachment"),
//             horizontalOffset: t,
//             verticalOffset: o,
//             startingValueLeft: p[0],
//             startingValueTop: p[1],
//             startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10),
//             startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10),
//             startingPositionLeft: h.position().left,
//             startingPositionTop: h.position().top,
//             startingOffsetLeft: l,
//             startingOffsetTop: u,
//             parentOffsetLeft: m,
//             parentOffsetTop: g,
//             stellarRatio: void 0 === h.data("stellar-background-ratio") ? 1 : h.data("stellar-background-ratio")
//           })
//         }))
//       },
//       _reset: function () {
//         var e, t, n, i, r;
//         for (r = this.particles.length - 1; r >= 0; r--) t = (e = this.particles[r]).$element.data("stellar-startingLeft"), n = e.$element.data("stellar-startingTop"), this._setPosition(e.$element, t, t, n, n), this.options.showElement(e.$element), e.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
//         for (r = this.backgrounds.length - 1; r >= 0; r--)(i = this.backgrounds[r]).$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), d(i.$element, i.startingValueLeft, i.startingValueTop)
//       },
//       destroy: function () {
//         this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = e.noop, e(t).unbind("load." + this.name).unbind("resize." + this.name)
//       },
//       _setOffsets: function () {
//         var n = this,
//           i = e(t);
//         i.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), i.bind("resize.horizontal-" + this.name, function () {
//           n.horizontalOffset = n.options.horizontalOffset()
//         })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), i.bind("resize.vertical-" + this.name, function () {
//           n.verticalOffset = n.options.verticalOffset()
//         })) : this.verticalOffset = this.options.verticalOffset
//       },
//       _repositionElements: function () {
//         var e, t, n, i, r, o, s, a, l, u, c = this._getScrollLeft(),
//           f = this._getScrollTop(),
//           h = !0,
//           p = !0;
//         if (this.currentScrollLeft !== c || this.currentScrollTop !== f || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
//           for (this.currentScrollLeft = c, this.currentScrollTop = f, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, u = this.particles.length - 1; u >= 0; u--) t = (e = this.particles[u]).isFixed ? 1 : 0, this.options.horizontalScrolling ? a = (o = (c + e.horizontalOffset + this.viewportOffsetLeft + e.startingPositionLeft - e.startingOffsetLeft + e.parentOffsetLeft) * -(e.stellarRatio + t - 1) + e.startingPositionLeft) - e.startingPositionLeft + e.startingOffsetLeft : (o = e.startingPositionLeft, a = e.startingOffsetLeft), this.options.verticalScrolling ? l = (s = (f + e.verticalOffset + this.viewportOffsetTop + e.startingPositionTop - e.startingOffsetTop + e.parentOffsetTop) * -(e.stellarRatio + t - 1) + e.startingPositionTop) - e.startingPositionTop + e.startingOffsetTop : (s = e.startingPositionTop, l = e.startingOffsetTop), this.options.hideDistantElements && (p = !this.options.horizontalScrolling || a + e.width > (e.isFixed ? 0 : c) && a < (e.isFixed ? 0 : c) + this.viewportWidth + this.viewportOffsetLeft, h = !this.options.verticalScrolling || l + e.height > (e.isFixed ? 0 : f) && l < (e.isFixed ? 0 : f) + this.viewportHeight + this.viewportOffsetTop), p && h ? (e.isHidden && (this.options.showElement(e.$element), e.isHidden = !1), this._setPosition(e.$element, o, e.startingPositionLeft, s, e.startingPositionTop)) : e.isHidden || (this.options.hideElement(e.$element), e.isHidden = !0);
//           for (u = this.backgrounds.length - 1; u >= 0; u--) t = (n = this.backgrounds[u]).isFixed ? 0 : 1, i = this.options.horizontalScrolling ? (c + n.horizontalOffset - this.viewportOffsetLeft - n.startingOffsetLeft + n.parentOffsetLeft - n.startingBackgroundPositionLeft) * (t - n.stellarRatio) + "px" : n.startingValueLeft, r = this.options.verticalScrolling ? (f + n.verticalOffset - this.viewportOffsetTop - n.startingOffsetTop + n.parentOffsetTop - n.startingBackgroundPositionTop) * (t - n.stellarRatio) + "px" : n.startingValueTop, d(n.$element, i, r)
//         }
//       },
//       _handleScrollEvent: function () {
//         var e = this,
//           t = !1,
//           n = function () {
//             e._repositionElements(), t = !1
//           },
//           i = function () {
//             t || (h(n), t = !0)
//           };
//         this.$scrollElement.bind("scroll." + this.name, i), i()
//       },
//       _startAnimationLoop: function () {
//         var e = this;
//         this._animationLoop = function () {
//           h(e._animationLoop), e._repositionElements()
//         }, this._animationLoop()
//       }
//     }, e.fn[o] = function (t) {
//       var n = arguments;
//       return void 0 === t || "object" == typeof t ? this.each(function () {
//         e.data(this, "plugin_" + o) || e.data(this, "plugin_" + o, new r(this, t))
//       }) : "string" == typeof t && "_" !== t[0] && "init" !== t ? this.each(function () {
//         var i = e.data(this, "plugin_" + o);
//         i instanceof r && "function" == typeof i[t] && i[t].apply(i, Array.prototype.slice.call(n, 1)), "destroy" === t && e.data(this, "plugin_" + o, null)
//       }) : void 0
//     }, e[o] = function (n) {
//       var i = e(t);
//       return i.stellar.apply(i, Array.prototype.slice.call(arguments, 0))
//     }, e[o].scrollProperty = a, e[o].positionProperty = l, t.Stellar = r
//   }(jQuery, this, document),
//   function (e) {
//     "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
//   }(function (e) {
//     var t, n, i, r, o, s, a = "Close",
//       l = "BeforeClose",
//       u = "MarkupParse",
//       c = "Open",
//       d = "Change",
//       f = "mfp",
//       h = "." + f,
//       p = "mfp-ready",
//       m = "mfp-removing",
//       g = "mfp-prevent-close",
//       v = function () { },
//       y = !!window.jQuery,
//       b = e(window),
//       $ = function (e, n) {
//         t.ev.on(f + e + h, n)
//       },
//       w = function (t, n, i, r) {
//         var o = document.createElement("div");
//         return o.className = "mfp-" + t, i && (o.innerHTML = i), r ? n && n.appendChild(o) : (o = e(o), n && o.appendTo(n)), o
//       },
//       x = function (n, i) {
//         t.ev.triggerHandler(f + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
//       },
//       S = function (n) {
//         return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
//       },
//       C = function () {
//         e.magnificPopup.instance || ((t = new v).init(), e.magnificPopup.instance = t)
//       },
//       k = function () {
//         var e = document.createElement("p").style,
//           t = ["ms", "O", "Moz", "Webkit"];
//         if (void 0 !== e.transition) return !0;
//         for (; t.length;)
//           if (t.pop() + "Transition" in e) return !0;
//         return !1
//       };
//     v.prototype = {
//       constructor: v,
//       init: function () {
//         var n = navigator.appVersion;
//         t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = k(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {}
//       },
//       open: function (n) {
//         var r;
//         if (!1 === n.isObj) {
//           t.items = n.items.toArray(), t.index = 0;
//           var s, a = n.items;
//           for (r = 0; r < a.length; r++)
//             if ((s = a[r]).parsed && (s = s.el[0]), s === n.el[0]) {
//               t.index = r;
//               break
//             }
//         } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0; {
//           if (!t.isOpen) {
//             t.types = [], o = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = w("bg").on("click" + h, function () {
//               t.close()
//             }), t.wrap = w("wrap").attr("tabindex", -1).on("click" + h, function (e) {
//               t._checkIfClose(e.target) && t.close()
//             }), t.container = w("container", t.wrap)), t.contentContainer = w("content"), t.st.preloader && (t.preloader = w("preloader", t.container, t.st.tLoading));
//             var l = e.magnificPopup.modules;
//             for (r = 0; r < l.length; r++) {
//               var d = l[r];
//               d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t)
//             }
//             x("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? ($(u, function (e, t, n, i) {
//               n.close_replaceWith = S(i.type)
//             }), o += " mfp-close-btn-in") : t.wrap.append(S())), t.st.alignTop && (o += " mfp-align-top"), t.wrap.css(t.fixedContentPos ? {
//               overflow: t.st.overflowY,
//               overflowX: "hidden",
//               overflowY: t.st.overflowY
//             } : {
//                 top: b.scrollTop(),
//                 position: "absolute"
//               }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
//                 height: i.height(),
//                 position: "absolute"
//               }), t.st.enableEscapeKey && i.on("keyup" + h, function (e) {
//                 27 === e.keyCode && t.close()
//               }), b.on("resize" + h, function () {
//                 t.updateSize()
//               }), t.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && t.wrap.addClass(o);
//             var f = t.wH = b.height(),
//               m = {};
//             if (t.fixedContentPos && t._hasScrollBar(f)) {
//               var g = t._getScrollbarSize();
//               g && (m.marginRight = g)
//             }
//             t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
//             var v = t.st.mainClass;
//             return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), x("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
//               t.content ? (t._addClassToMFP(p), t._setFocus()) : t.bgOverlay.addClass(p), i.on("focusin" + h, t._onFocusIn)
//             }, 16), t.isOpen = !0, t.updateSize(f), x(c), n
//           }
//           t.updateItemHTML()
//         }
//       },
//       close: function () {
//         t.isOpen && (x(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(m), setTimeout(function () {
//           t._close()
//         }, t.st.removalDelay)) : t._close())
//       },
//       _close: function () {
//         x(a);
//         var n = m + " " + p + " ";
//         if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
//           var r = {
//             marginRight: ""
//           };
//           t.isIE7 ? e("body, html").css("overflow", "") : r.overflow = "", e("html").css(r)
//         }
//         i.off("keyup.mfp focusin" + h), t.ev.off(h), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, x("AfterClose")
//       },
//       updateSize: function (e) {
//         if (t.isIOS) {
//           var n = document.documentElement.clientWidth / window.innerWidth,
//             i = window.innerHeight * n;
//           t.wrap.css("height", i), t.wH = i
//         } else t.wH = e || b.height();
//         t.fixedContentPos || t.wrap.css("height", t.wH), x("Resize")
//       },
//       updateItemHTML: function () {
//         var n = t.items[t.index];
//         t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
//         var i = n.type;
//         if (x("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
//           var o = !!t.st[i] && t.st[i].markup;
//           x("FirstMarkupParse", o), t.currTemplate[i] = !o || e(o)
//         }
//         r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
//         var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
//         t.appendContent(s, i), n.preloaded = !0, x(d, n), r = n.type, t.container.prepend(t.contentContainer), x("AfterChange")
//       },
//       appendContent: function (e, n) {
//         t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find(".mfp-close").length || t.content.append(S()) : t.content = e : t.content = "", x("BeforeAppend"), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
//       },
//       parseEl: function (n) {
//         var i, r = t.items[n];
//         if (r.tagName ? r = {
//           el: e(r)
//         } : (i = r.type, r = {
//           data: r,
//           src: r.src
//         }), r.el) {
//           for (var o = t.types, s = 0; s < o.length; s++)
//             if (r.el.hasClass("mfp-" + o[s])) {
//               i = o[s];
//               break
//             }
//           r.src = r.el.attr("data-mfp-src"), r.src || (r.src = r.el.attr("href"))
//         }
//         return r.type = i || t.st.type || "inline", r.index = n, r.parsed = !0, t.items[n] = r, x("ElementParse", r), t.items[n]
//       },
//       addGroup: function (e, n) {
//         var i = function (i) {
//           i.mfpEl = this, t._openClick(i, e, n)
//         };
//         n || (n = {});
//         var r = "click.magnificPopup";
//         n.mainEl = e, n.items ? (n.isObj = !0, e.off(r).on(r, i)) : (n.isObj = !1, n.delegate ? e.off(r).on(r, n.delegate, i) : (n.items = e, e.off(r).on(r, i)))
//       },
//       _openClick: function (n, i, r) {
//         if ((void 0 !== r.midClick ? r.midClick : e.magnificPopup.defaults.midClick) || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
//           var o = void 0 !== r.disableOn ? r.disableOn : e.magnificPopup.defaults.disableOn;
//           if (o)
//             if (e.isFunction(o)) {
//               if (!o.call(t)) return !0
//             } else if (b.width() < o) return !0;
//           n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), r.el = e(n.mfpEl), r.delegate && (r.items = i.find(r.delegate)), t.open(r)
//         }
//       },
//       updateStatus: function (e, i) {
//         if (t.preloader) {
//           n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
//           var r = {
//             status: e,
//             text: i
//           };
//           x("UpdateStatus", r), e = r.status, i = r.text, t.preloader.html(i), t.preloader.find("a").on("click", function (e) {
//             e.stopImmediatePropagation()
//           }), t.container.addClass("mfp-s-" + e), n = e
//         }
//       },
//       _checkIfClose: function (n) {
//         if (!e(n).hasClass(g)) {
//           var i = t.st.closeOnContentClick,
//             r = t.st.closeOnBgClick;
//           if (i && r) return !0;
//           if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
//           if (n === t.content[0] || e.contains(t.content[0], n)) {
//             if (i) return !0
//           } else if (r && e.contains(document, n)) return !0;
//           return !1
//         }
//       },
//       _addClassToMFP: function (e) {
//         t.bgOverlay.addClass(e), t.wrap.addClass(e)
//       },
//       _removeClassFromMFP: function (e) {
//         this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
//       },
//       _hasScrollBar: function (e) {
//         return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || b.height())
//       },
//       _setFocus: function () {
//         (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
//       },
//       _onFocusIn: function (n) {
//         return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
//       },
//       _parseMarkup: function (t, n, i) {
//         var r;
//         i.data && (n = e.extend(i.data, n)), x(u, [t, n, i]), e.each(n, function (e, n) {
//           if (void 0 === n || !1 === n) return !0;
//           if ((r = e.split("_")).length > 1) {
//             var i = t.find(h + "-" + r[0]);
//             if (i.length > 0) {
//               var o = r[1];
//               "replaceWith" === o ? i[0] !== n[0] && i.replaceWith(n) : "img" === o ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(r[1], n)
//             }
//           } else t.find(h + "-" + e).html(n)
//         })
//       },
//       _getScrollbarSize: function () {
//         if (void 0 === t.scrollbarSize) {
//           var e = document.createElement("div");
//           e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
//         }
//         return t.scrollbarSize
//       }
//     }, e.magnificPopup = {
//       instance: null,
//       proto: v.prototype,
//       modules: [],
//       open: function (t, n) {
//         return C(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
//       },
//       close: function () {
//         return e.magnificPopup.instance && e.magnificPopup.instance.close()
//       },
//       registerModule: function (t, n) {
//         n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
//       },
//       defaults: {
//         disableOn: 0,
//         key: null,
//         midClick: !1,
//         mainClass: "",
//         preloader: !0,
//         focus: "",
//         closeOnContentClick: !1,
//         closeOnBgClick: !0,
//         closeBtnInside: !0,
//         showCloseBtn: !0,
//         enableEscapeKey: !0,
//         modal: !1,
//         alignTop: !1,
//         removalDelay: 0,
//         prependTo: null,
//         fixedContentPos: "auto",
//         fixedBgPos: "auto",
//         overflowY: "auto",
//         closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
//         tClose: "Close (Esc)",
//         tLoading: "Loading..."
//       }
//     }, e.fn.magnificPopup = function (n) {
//       C();
//       var i = e(this);
//       if ("string" == typeof n)
//         if ("open" === n) {
//           var r, o = y ? i.data("magnificPopup") : i[0].magnificPopup,
//             s = parseInt(arguments[1], 10) || 0;
//           o.items ? r = o.items[s] : (r = i, o.delegate && (r = r.find(o.delegate)), r = r.eq(s)), t._openClick({
//             mfpEl: r
//           }, i, o)
//         } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
//       else n = e.extend(!0, {}, n), y ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
//       return i
//     };
//     var T, E, j, M = "inline",
//       _ = function () {
//         j && (E.after(j.addClass(T)).detach(), j = null)
//       };
//     e.magnificPopup.registerModule(M, {
//       options: {
//         hiddenClass: "hide",
//         markup: "",
//         tNotFound: "Content not found"
//       },
//       proto: {
//         initInline: function () {
//           t.types.push(M), $(a + "." + M, function () {
//             _()
//           })
//         },
//         getInline: function (n, i) {
//           if (_(), n.src) {
//             var r = t.st.inline,
//               o = e(n.src);
//             if (o.length) {
//               var s = o[0].parentNode;
//               s && s.tagName && (E || (T = r.hiddenClass, E = w(T), T = "mfp-" + T), j = o.after(E).detach().removeClass(T)), t.updateStatus("ready")
//             } else t.updateStatus("error", r.tNotFound), o = e("<div>");
//             return n.inlineElement = o, o
//           }
//           return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
//         }
//       }
//     });
//     var A, D = "ajax",
//       O = function () {
//         A && e(document.body).removeClass(A)
//       },
//       P = function () {
//         O(), t.req && t.req.abort()
//       };
//     e.magnificPopup.registerModule(D, {
//       options: {
//         settings: null,
//         cursor: "mfp-ajax-cur",
//         tError: '<a href="%url%">The content</a> could not be loaded.'
//       },
//       proto: {
//         initAjax: function () {
//           t.types.push(D), A = t.st.ajax.cursor, $(a + "." + D, P), $("BeforeChange." + D, P)
//         },
//         getAjax: function (n) {
//           A && e(document.body).addClass(A), t.updateStatus("loading");
//           var i = e.extend({
//             url: n.src,
//             success: function (i, r, o) {
//               var s = {
//                 data: i,
//                 xhr: o
//               };
//               x("ParseAjax", s), t.appendContent(e(s.data), D), n.finished = !0, O(), t._setFocus(), setTimeout(function () {
//                 t.wrap.addClass(p)
//               }, 16), t.updateStatus("ready"), x("AjaxContentAdded")
//             },
//             error: function () {
//               O(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
//             }
//           }, t.st.ajax.settings);
//           return t.req = e.ajax(i), ""
//         }
//       }
//     });
//     var N, F = function (n) {
//       if (n.data && void 0 !== n.data.title) return n.data.title;
//       var i = t.st.image.titleSrc;
//       if (i) {
//         if (e.isFunction(i)) return i.call(t, n);
//         if (n.el) return n.el.attr(i) || ""
//       }
//       return ""
//     };
//     e.magnificPopup.registerModule("image", {
//       options: {
//         markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
//         cursor: "mfp-zoom-out-cur",
//         titleSrc: "title",
//         verticalFit: !0,
//         tError: '<a href="%url%">The image</a> could not be loaded.'
//       },
//       proto: {
//         initImage: function () {
//           var n = t.st.image,
//             i = ".image";
//           t.types.push("image"), $(c + i, function () {
//             "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor)
//           }), $(a + i, function () {
//             n.cursor && e(document.body).removeClass(n.cursor), b.off("resize" + h)
//           }), $("Resize" + i, t.resizeImage), t.isLowIE && $("AfterChange", t.resizeImage)
//         },
//         resizeImage: function () {
//           var e = t.currItem;
//           if (e && e.img && t.st.image.verticalFit) {
//             var n = 0;
//             t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
//           }
//         },
//         _onImageHasSize: function (e) {
//           e.img && (e.hasSize = !0, N && clearInterval(N), e.isCheckingImgSize = !1, x("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
//         },
//         findImageSize: function (e) {
//           var n = 0,
//             i = e.img[0],
//             r = function (o) {
//               N && clearInterval(N), N = setInterval(function () {
//                 return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(N), void (3 === ++n ? r(10) : 40 === n ? r(50) : 100 === n && r(500)))
//               }, o)
//             };
//           r(1)
//         },
//         getImage: function (n, i) {
//           var r = 0,
//             o = function () {
//               n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, x("ImageLoadComplete")) : 200 > ++r ? setTimeout(o, 100) : s())
//             },
//             s = function () {
//               n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
//             },
//             a = t.st.image,
//             l = i.find(".mfp-img");
//           if (l.length) {
//             var u = document.createElement("img");
//             u.className = "mfp-img", n.el && n.el.find("img").length && (u.alt = n.el.find("img").attr("alt")), n.img = e(u).on("load.mfploader", o).on("error.mfploader", s), u.src = n.src, l.is("img") && (n.img = n.img.clone()), (u = n.img[0]).naturalWidth > 0 ? n.hasSize = !0 : u.width || (n.hasSize = !1)
//           }
//           return t._parseMarkup(i, {
//             title: F(n),
//             img_replaceWith: n.img
//           }, n), t.resizeImage(), n.hasSize ? (N && clearInterval(N), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
//         }
//       }
//     });
//     var I, R = function () {
//       return void 0 === I && (I = void 0 !== document.createElement("p").style.MozTransform), I
//     };
//     e.magnificPopup.registerModule("zoom", {
//       options: {
//         enabled: !1,
//         easing: "ease-in-out",
//         duration: 300,
//         opener: function (e) {
//           return e.is("img") ? e : e.find("img")
//         }
//       },
//       proto: {
//         initZoom: function () {
//           var e, n = t.st.zoom,
//             i = ".zoom";
//           if (n.enabled && t.supportsTransition) {
//             var r, o, s = n.duration,
//               u = function (e) {
//                 var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
//                   i = "all " + n.duration / 1e3 + "s " + n.easing,
//                   r = {
//                     position: "fixed",
//                     zIndex: 9999,
//                     left: 0,
//                     top: 0,
//                     "-webkit-backface-visibility": "hidden"
//                   },
//                   o = "transition";
//                 return r["-webkit-" + o] = r["-moz-" + o] = r["-o-" + o] = r[o] = i, t.css(r), t
//               },
//               c = function () {
//                 t.content.css("visibility", "visible")
//               };
//             $("BuildControls" + i, function () {
//               if (t._allowZoom()) {
//                 if (clearTimeout(r), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void c();
//                 (o = u(e)).css(t._getOffset()), t.wrap.append(o), r = setTimeout(function () {
//                   o.css(t._getOffset(!0)), r = setTimeout(function () {
//                     c(), setTimeout(function () {
//                       o.remove(), e = o = null, x("ZoomAnimationEnded")
//                     }, 16)
//                   }, s)
//                 }, 16)
//               }
//             }), $(l + i, function () {
//               if (t._allowZoom()) {
//                 if (clearTimeout(r), t.st.removalDelay = s, !e) {
//                   if (!(e = t._getItemToZoom())) return;
//                   o = u(e)
//                 }
//                 o.css(t._getOffset(!0)), t.wrap.append(o), t.content.css("visibility", "hidden"), setTimeout(function () {
//                   o.css(t._getOffset())
//                 }, 16)
//               }
//             }), $(a + i, function () {
//               t._allowZoom() && (c(), o && o.remove(), e = null)
//             })
//           }
//         },
//         _allowZoom: function () {
//           return "image" === t.currItem.type
//         },
//         _getItemToZoom: function () {
//           return !!t.currItem.hasSize && t.currItem.img
//         },
//         _getOffset: function (n) {
//           var i, r = (i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
//             o = parseInt(i.css("padding-top"), 10),
//             s = parseInt(i.css("padding-bottom"), 10);
//           r.top -= e(window).scrollTop() - o;
//           var a = {
//             width: i.width(),
//             height: (y ? i.innerHeight() : i[0].offsetHeight) - s - o
//           };
//           return R() ? a["-moz-transform"] = a.transform = "translate(" + r.left + "px," + r.top + "px)" : (a.left = r.left, a.top = r.top), a
//         }
//       }
//     });
//     var z = "iframe",
//       L = function (e) {
//         if (t.currTemplate[z]) {
//           var n = t.currTemplate[z].find("iframe");
//           n.length && (e || (n[0].src = "//about:blank"), t.isIE8 && n.css("display", e ? "block" : "none"))
//         }
//       };
//     e.magnificPopup.registerModule(z, {
//       options: {
//         markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
//         srcAction: "iframe_src",
//         patterns: {
//           youtube: {
//             index: "youtube.com",
//             id: "v=",
//             src: "//www.youtube.com/embed/%id%?autoplay=1"
//           },
//           vimeo: {
//             index: "vimeo.com/",
//             id: "/",
//             src: "//player.vimeo.com/video/%id%?autoplay=1"
//           },
//           gmaps: {
//             index: "//maps.google.",
//             src: "%id%&output=embed"
//           }
//         }
//       },
//       proto: {
//         initIframe: function () {
//           t.types.push(z), $("BeforeChange", function (e, t, n) {
//             t !== n && (t === z ? L() : n === z && L(!0))
//           }), $(a + "." + z, function () {
//             L()
//           })
//         },
//         getIframe: function (n, i) {
//           var r = n.src,
//             o = t.st.iframe;
//           e.each(o.patterns, function () {
//             return r.indexOf(this.index) > -1 ? (this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), r = this.src.replace("%id%", r), !1) : void 0
//           });
//           var s = {};
//           return o.srcAction && (s[o.srcAction] = r), t._parseMarkup(i, s, n), t.updateStatus("ready"), i
//         }
//       }
//     });
//     var H = function (e) {
//       var n = t.items.length;
//       return e > n - 1 ? e - n : 0 > e ? n + e : e
//     },
//       V = function (e, t, n) {
//         return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
//       };
//     e.magnificPopup.registerModule("gallery", {
//       options: {
//         enabled: !1,
//         arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
//         preload: [0, 2],
//         navigateByImgClick: !0,
//         arrows: !0,
//         tPrev: "Previous (Left arrow key)",
//         tNext: "Next (Right arrow key)",
//         tCounter: "%curr% of %total%"
//       },
//       proto: {
//         initGallery: function () {
//           var n = t.st.gallery,
//             r = ".mfp-gallery",
//             s = Boolean(e.fn.mfpFastClick);
//           return t.direction = !0, !(!n || !n.enabled) && (o += " mfp-gallery", $(c + r, function () {
//             n.navigateByImgClick && t.wrap.on("click" + r, ".mfp-img", function () {
//               return t.items.length > 1 ? (t.next(), !1) : void 0
//             }), i.on("keydown" + r, function (e) {
//               37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
//             })
//           }), $("UpdateStatus" + r, function (e, n) {
//             n.text && (n.text = V(n.text, t.currItem.index, t.items.length))
//           }), $(u + r, function (e, i, r, o) {
//             var s = t.items.length;
//             r.counter = s > 1 ? V(n.tCounter, o.index, s) : ""
//           }), $("BuildControls" + r, function () {
//             if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
//               var i = n.arrowMarkup,
//                 r = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(g),
//                 o = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(g),
//                 a = s ? "mfpFastClick" : "click";
//               r[a](function () {
//                 t.prev()
//               }), o[a](function () {
//                 t.next()
//               }), t.isIE7 && (w("b", r[0], !1, !0), w("a", r[0], !1, !0), w("b", o[0], !1, !0), w("a", o[0], !1, !0)), t.container.append(r.add(o))
//             }
//           }), $(d + r, function () {
//             t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
//               t.preloadNearbyImages(), t._preloadTimeout = null
//             }, 16)
//           }), void $(a + r, function () {
//             i.off(r), t.wrap.off("click" + r), t.arrowLeft && s && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
//           }))
//         },
//         next: function () {
//           t.direction = !0, t.index = H(t.index + 1), t.updateItemHTML()
//         },
//         prev: function () {
//           t.direction = !1, t.index = H(t.index - 1), t.updateItemHTML()
//         },
//         goTo: function (e) {
//           t.direction = e >= t.index, t.index = e, t.updateItemHTML()
//         },
//         preloadNearbyImages: function () {
//           var e, n = t.st.gallery.preload,
//             i = Math.min(n[0], t.items.length),
//             r = Math.min(n[1], t.items.length);
//           for (e = 1; e <= (t.direction ? r : i); e++) t._preloadItem(t.index + e);
//           for (e = 1; e <= (t.direction ? i : r); e++) t._preloadItem(t.index - e)
//         },
//         _preloadItem: function (n) {
//           if (n = H(n), !t.items[n].preloaded) {
//             var i = t.items[n];
//             i.parsed || (i = t.parseEl(n)), x("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
//               i.hasSize = !0
//             }).on("error.mfploader", function () {
//               i.hasSize = !0, i.loadError = !0, x("LazyLoadError", i)
//             }).attr("src", i.src)), i.preloaded = !0
//           }
//         }
//       }
//     });
//     var U = "retina";
//     e.magnificPopup.registerModule(U, {
//       options: {
//         replaceSrc: function (e) {
//           return e.src.replace(/\.\w+$/, function (e) {
//             return "@2x" + e
//           })
//         },
//         ratio: 1
//       },
//       proto: {
//         initRetina: function () {
//           if (window.devicePixelRatio > 1) {
//             var e = t.st.retina,
//               n = e.ratio;
//             (n = isNaN(n) ? n() : n) > 1 && ($("ImageHasSize." + U, function (e, t) {
//               t.img.css({
//                 "max-width": t.img[0].naturalWidth / n,
//                 width: "100%"
//               })
//             }), $("ElementParse." + U, function (t, i) {
//               i.src = e.replaceSrc(i, n)
//             }))
//           }
//         }
//       }
//     }),
//       function () {
//         var t = "ontouchstart" in window,
//           n = function () {
//             b.off("touchmove" + i + " touchend" + i)
//           },
//           i = ".mfpFastClick";
//         e.fn.mfpFastClick = function (r) {
//           return e(this).each(function () {
//             var o, s = e(this);
//             if (t) {
//               var a, l, u, c, d, f;
//               s.on("touchstart" + i, function (e) {
//                 c = !1, f = 1, d = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], l = d.clientX, u = d.clientY, b.on("touchmove" + i, function (e) {
//                   d = e.originalEvent ? e.originalEvent.touches : e.touches, f = d.length, d = d[0], (Math.abs(d.clientX - l) > 10 || Math.abs(d.clientY - u) > 10) && (c = !0, n())
//                 }).on("touchend" + i, function (e) {
//                   n(), c || f > 1 || (o = !0, e.preventDefault(), clearTimeout(a), a = setTimeout(function () {
//                     o = !1
//                   }, 1e3), r())
//                 })
//               })
//             }
//             s.on("click" + i, function () {
//               o || r()
//             })
//           })
//         }, e.fn.destroyMfpFastClick = function () {
//           e(this).off("touchstart" + i + " click" + i), t && b.off("touchmove" + i + " touchend" + i)
//         }
//       }(), C()
//   });
// var mejs = mejs || {};
// mejs.version = "2.22.0", mejs.meIndex = 0, mejs.plugins = {
//   silverlight: [{
//     version: [3, 0],
//     types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
//   }],
//   flash: [{
//     version: [9, 0, 124],
//     types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/dailymotion", "video/x-dailymotion", "application/x-mpegURL"]
//   }],
//   youtube: [{
//     version: null,
//     types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
//   }],
//   vimeo: [{
//     version: null,
//     types: ["video/vimeo", "video/x-vimeo"]
//   }]
// }, mejs.Utility = {
//   encodeUrl: function (e) {
//     return encodeURIComponent(e)
//   },
//   escapeHTML: function (e) {
//     return e.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
//   },
//   absolutizeUrl: function (e) {
//     var t = document.createElement("div");
//     return t.innerHTML = '<a href="' + this.escapeHTML(e) + '">x</a>', t.firstChild.href
//   },
//   getScriptPath: function (e) {
//     for (var t, n, i, r, o, s = 0, a = "", l = "", u = document.getElementsByTagName("script"), c = u.length, d = e.length; c > s; s++) {
//       for ((n = (i = u[s].src).lastIndexOf("/")) > -1 ? (o = i.substring(n + 1), r = i.substring(0, n + 1)) : (o = i, r = ""), t = 0; d > t; t++)
//         if (l = e[t], o.indexOf(l) > -1) {
//           a = r;
//           break
//         }
//       if ("" !== a) break
//     }
//     return a
//   },
//   calculateTimeFormat: function (e, t, n) {
//     0 > e && (e = 0), void 0 === n && (n = 25);
//     var i = t.timeFormat,
//       r = i[0],
//       o = i[1] == i[0],
//       s = o ? 2 : 1,
//       a = ":",
//       l = Math.floor(e / 3600) % 24,
//       u = Math.floor(e / 60) % 60,
//       c = Math.floor(e % 60),
//       d = [
//         [Math.floor((e % 1 * n).toFixed(3)), "f"],
//         [c, "s"],
//         [u, "m"],
//         [l, "h"]
//       ];
//     i.length < s && (a = i[s]);
//     for (var f = !1, h = 0, p = d.length; p > h; h++)
//       if (-1 !== i.indexOf(d[h][1])) f = !0;
//       else if (f) {
//         for (var m = !1, g = h; p > g; g++)
//           if (d[g][0] > 0) {
//             m = !0;
//             break
//           }
//         if (!m) break;
//         o || (i = r + i), i = d[h][1] + a + i, o && (i = d[h][1] + i), r = d[h][1]
//       }
//     t.currentTimeFormat = i
//   },
//   twoDigitsString: function (e) {
//     return 10 > e ? "0" + e : String(e)
//   },
//   secondsToTimeCode: function (e, t) {
//     if (0 > e && (e = 0), "object" != typeof t) {
//       r = "m:ss";
//       r = arguments[1] ? "hh:mm:ss" : r, t = {
//         currentTimeFormat: r = arguments[2] ? r + ":ff" : r,
//         framesPerSecond: arguments[3] || 25
//       }
//     }
//     var n = t.framesPerSecond;
//     void 0 === n && (n = 25);
//     var r = t.currentTimeFormat,
//       o = Math.floor(e / 3600) % 24,
//       s = Math.floor(e / 60) % 60,
//       a = Math.floor(e % 60),
//       l = Math.floor((e % 1 * n).toFixed(3));
//     lis = [
//       [l, "f"],
//       [a, "s"],
//       [s, "m"],
//       [o, "h"]
//     ];
//     var u = r;
//     for (i = 0, len = lis.length; i < len; i++) u = u.replace(lis[i][1] + lis[i][1], this.twoDigitsString(lis[i][0])), u = u.replace(lis[i][1], lis[i][0]);
//     return u
//   },
//   timeCodeToSeconds: function (e, t, n, i) {
//     void 0 === n ? n = !1 : void 0 === i && (i = 25);
//     var r = e.split(":"),
//       o = parseInt(r[0], 10),
//       s = parseInt(r[1], 10),
//       a = parseInt(r[2], 10),
//       l = 0;
//     return n && (l = parseInt(r[3]) / i), 3600 * o + 60 * s + a + l
//   },
//   convertSMPTEtoSeconds: function (e) {
//     if ("string" != typeof e) return !1;
//     var t = 0,
//       n = -1 != (e = e.replace(",", ".")).indexOf(".") ? e.split(".")[1].length : 0,
//       i = 1;
//     e = e.split(":").reverse();
//     for (var r = 0; r < e.length; r++) i = 1, r > 0 && (i = Math.pow(60, r)), t += Number(e[r]) * i;
//     return Number(t.toFixed(n))
//   },
//   removeSwf: function (e) {
//     var t = document.getElementById(e);
//     t && /object|embed/i.test(t.nodeName) && (mejs.MediaFeatures.isIE ? (t.style.display = "none", function () {
//       4 == t.readyState ? mejs.Utility.removeObjectInIE(e) : setTimeout(arguments.callee, 10)
//     }()) : t.parentNode.removeChild(t))
//   },
//   removeObjectInIE: function (e) {
//     var t = document.getElementById(e);
//     if (t) {
//       for (var n in t) "function" == typeof t[n] && (t[n] = null);
//       t.parentNode.removeChild(t)
//     }
//   },
//   determineScheme: function (e) {
//     return e && -1 != e.indexOf("://") ? e.substr(0, e.indexOf("://") + 3) : "//"
//   }
// }, mejs.PluginDetector = {
//   hasPluginVersion: function (e, t) {
//     var n = this.plugins[e];
//     return t[1] = t[1] || 0, t[2] = t[2] || 0, n[0] > t[0] || n[0] == t[0] && n[1] > t[1] || n[0] == t[0] && n[1] == t[1] && n[2] >= t[2]
//   },
//   nav: window.navigator,
//   ua: window.navigator.userAgent.toLowerCase(),
//   plugins: [],
//   addPlugin: function (e, t, n, i, r) {
//     this.plugins[e] = this.detectPlugin(t, n, i, r)
//   },
//   detectPlugin: function (e, t, n, i) {
//     var r, o, s, a = [0, 0, 0];
//     if (void 0 !== this.nav.plugins && "object" == typeof this.nav.plugins[e]) {
//       if ((r = this.nav.plugins[e].description) && (void 0 === this.nav.mimeTypes || !this.nav.mimeTypes[t] || this.nav.mimeTypes[t].enabledPlugin))
//         for (a = r.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), o = 0; o < a.length; o++) a[o] = parseInt(a[o].match(/\d+/), 10)
//     } else if (void 0 !== window.ActiveXObject) try {
//       (s = new ActiveXObject(n)) && (a = i(s))
//     } catch (e) { }
//     return a
//   }
// }, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (e) {
//   var t = [],
//     n = e.GetVariable("$version");
//   return n && (n = n.split(" ")[1].split(","), t = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)]), t
// }), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function (e) {
//   var t = [0, 0, 0, 0],
//     n = function (e, t, n, i) {
//       for (; e.isVersionSupported(t[0] + "." + t[1] + "." + t[2] + "." + t[3]);) t[n] += i;
//       t[n] -= i
//     };
//   return n(e, t, 0, 1), n(e, t, 1, 1), n(e, t, 2, 1e4), n(e, t, 2, 1e3), n(e, t, 2, 100), n(e, t, 2, 10), n(e, t, 2, 1), n(e, t, 3, 1), t
// }), mejs.MediaFeatures = {
//   init: function () {
//     var e, t, n = this,
//       i = document,
//       r = mejs.PluginDetector.nav,
//       o = mejs.PluginDetector.ua.toLowerCase(),
//       s = ["source", "track", "audio", "video"];
//     n.isiPad = null !== o.match(/ipad/i), n.isiPhone = null !== o.match(/iphone/i), n.isiOS = n.isiPhone || n.isiPad, n.isAndroid = null !== o.match(/android/i), n.isBustedAndroid = null !== o.match(/android 2\.[12]/), n.isBustedNativeHTTPS = "https:" === location.protocol && (null !== o.match(/android [12]\./) || null !== o.match(/macintosh.* version.* safari/)), n.isIE = -1 != r.appName.toLowerCase().indexOf("microsoft") || null !== r.appName.toLowerCase().match(/trident/gi), n.isChrome = null !== o.match(/chrome/gi), n.isChromium = null !== o.match(/chromium/gi), n.isFirefox = null !== o.match(/firefox/gi), n.isWebkit = null !== o.match(/webkit/gi), n.isGecko = null !== o.match(/gecko/gi) && !n.isWebkit && !n.isIE, n.isOpera = null !== o.match(/opera/gi), n.hasTouch = "ontouchstart" in window, n.svgAsImg = !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
//     for (e = 0; e < s.length; e++) t = document.createElement(s[e]);
//     n.supportsMediaTag = void 0 !== t.canPlayType || n.isBustedAndroid;
//     try {
//       t.canPlayType("video/mp4")
//     } catch (e) {
//       n.supportsMediaTag = !1
//     }
//     n.supportsPointerEvents = function () {
//       var e, t = document.createElement("x"),
//         n = document.documentElement,
//         i = window.getComputedStyle;
//       return "pointerEvents" in t.style && (t.style.pointerEvents = "auto", t.style.pointerEvents = "x", n.appendChild(t), e = i && "auto" === i(t, "").pointerEvents, n.removeChild(t), !!e)
//     }(), n.hasFirefoxPluginMovingProblem = !1, n.hasiOSFullScreen = void 0 !== t.webkitEnterFullscreen, n.hasNativeFullscreen = void 0 !== t.requestFullscreen, n.hasWebkitNativeFullScreen = void 0 !== t.webkitRequestFullScreen, n.hasMozNativeFullScreen = void 0 !== t.mozRequestFullScreen, n.hasMsNativeFullScreen = void 0 !== t.msRequestFullscreen, n.hasTrueNativeFullScreen = n.hasWebkitNativeFullScreen || n.hasMozNativeFullScreen || n.hasMsNativeFullScreen, n.nativeFullScreenEnabled = n.hasTrueNativeFullScreen, n.hasMozNativeFullScreen ? n.nativeFullScreenEnabled = document.mozFullScreenEnabled : n.hasMsNativeFullScreen && (n.nativeFullScreenEnabled = document.msFullscreenEnabled), n.isChrome && (n.hasiOSFullScreen = !1), n.hasTrueNativeFullScreen && (n.fullScreenEventName = "", n.hasWebkitNativeFullScreen ? n.fullScreenEventName = "webkitfullscreenchange" : n.hasMozNativeFullScreen ? n.fullScreenEventName = "mozfullscreenchange" : n.hasMsNativeFullScreen && (n.fullScreenEventName = "MSFullscreenChange"), n.isFullScreen = function () {
//       return n.hasMozNativeFullScreen ? i.mozFullScreen : n.hasWebkitNativeFullScreen ? i.webkitIsFullScreen : n.hasMsNativeFullScreen ? null !== i.msFullscreenElement : void 0
//     }, n.requestFullScreen = function (e) {
//       n.hasWebkitNativeFullScreen ? e.webkitRequestFullScreen() : n.hasMozNativeFullScreen ? e.mozRequestFullScreen() : n.hasMsNativeFullScreen && e.msRequestFullscreen()
//     }, n.cancelFullScreen = function () {
//       n.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : n.hasMozNativeFullScreen ? document.mozCancelFullScreen() : n.hasMsNativeFullScreen && document.msExitFullscreen()
//     }), n.hasiOSFullScreen && o.match(/mac os x 10_5/i) && (n.hasNativeFullScreen = !1, n.hasiOSFullScreen = !1)
//   }
// }, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
//   pluginType: "native",
//   isFullScreen: !1,
//   setCurrentTime: function (e) {
//     this.currentTime = e
//   },
//   setMuted: function (e) {
//     this.muted = e
//   },
//   setVolume: function (e) {
//     this.volume = e
//   },
//   stop: function () {
//     this.pause()
//   },
//   setSrc: function (e) {
//     for (var t = this.getElementsByTagName("source"); t.length > 0;) this.removeChild(t[0]);
//     if ("string" == typeof e) this.src = e;
//     else {
//       var n, i;
//       for (n = 0; n < e.length; n++)
//         if (i = e[n], this.canPlayType(i.type)) {
//           this.src = i.src;
//           break
//         }
//     }
//   },
//   setVideoSize: function (e, t) {
//     this.width = e, this.height = t
//   }
// }, mejs.PluginMediaElement = function (e, t, n) {
//   this.id = e, this.pluginType = t, this.src = n, this.events = {}, this.attributes = {}
// }, mejs.PluginMediaElement.prototype = {
//   pluginElement: null,
//   pluginType: "",
//   isFullScreen: !1,
//   playbackRate: -1,
//   defaultPlaybackRate: -1,
//   seekable: [],
//   played: [],
//   paused: !0,
//   ended: !1,
//   seeking: !1,
//   duration: 0,
//   error: null,
//   tagName: "",
//   muted: !1,
//   volume: 1,
//   currentTime: 0,
//   play: function () {
//     null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), this.paused = !1)
//   },
//   load: function () {
//     null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType || this.pluginApi.loadMedia(), this.paused = !1)
//   },
//   pause: function () {
//     null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? 1 == this.pluginApi.getPlayerState() && this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), this.paused = !0)
//   },
//   stop: function () {
//     null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), this.paused = !0)
//   },
//   canPlayType: function (e) {
//     var t, n, i, r = mejs.plugins[this.pluginType];
//     for (t = 0; t < r.length; t++)
//       if (i = r[t], mejs.PluginDetector.hasPluginVersion(this.pluginType, i.version))
//         for (n = 0; n < i.types.length; n++)
//           if (e == i.types[n]) return "probably";
//     return ""
//   },
//   positionFullscreenButton: function (e, t, n) {
//     null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(e), Math.floor(t), n)
//   },
//   hideFullscreenButton: function () {
//     null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
//   },
//   setSrc: function (e) {
//     if ("string" == typeof e) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(e)), this.src = mejs.Utility.absolutizeUrl(e);
//     else {
//       var t, n;
//       for (t = 0; t < e.length; t++)
//         if (n = e[t], this.canPlayType(n.type)) {
//           this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(n.src)), this.src = mejs.Utility.absolutizeUrl(n.src);
//           break
//         }
//     }
//   },
//   setCurrentTime: function (e) {
//     null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.seekTo(e) : this.pluginApi.setCurrentTime(e), this.currentTime = e)
//   },
//   setVolume: function (e) {
//     null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.setVolume(100 * e) : this.pluginApi.setVolume(e), this.volume = e)
//   },
//   setMuted: function (e) {
//     null != this.pluginApi && ("youtube" == this.pluginType ? (e ? this.pluginApi.mute() : this.pluginApi.unMute(), this.muted = e, this.dispatchEvent({
//       type: "volumechange"
//     })) : this.pluginApi.setMuted(e), this.muted = e)
//   },
//   setVideoSize: function (e, t) {
//     this.pluginElement && this.pluginElement.style && (this.pluginElement.style.width = e + "px", this.pluginElement.style.height = t + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(e, t)
//   },
//   setFullscreen: function (e) {
//     null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(e)
//   },
//   enterFullScreen: function () {
//     null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0)
//   },
//   exitFullScreen: function () {
//     null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1)
//   },
//   addEventListener: function (e, t, n) {
//     this.events[e] = this.events[e] || [], this.events[e].push(t)
//   },
//   removeEventListener: function (e, t) {
//     if (!e) return this.events = {}, !0;
//     var n = this.events[e];
//     if (!n) return !0;
//     if (!t) return this.events[e] = [], !0;
//     for (var i = 0; i < n.length; i++)
//       if (n[i] === t) return this.events[e].splice(i, 1), !0;
//     return !1
//   },
//   dispatchEvent: function (e) {
//     var t, n = this.events[e.type];
//     if (n)
//       for (t = 0; t < n.length; t++) n[t].apply(this, [e])
//   },
//   hasAttribute: function (e) {
//     return e in this.attributes
//   },
//   removeAttribute: function (e) {
//     delete this.attributes[e]
//   },
//   getAttribute: function (e) {
//     return this.hasAttribute(e) ? this.attributes[e] : ""
//   },
//   setAttribute: function (e, t) {
//     this.attributes[e] = t
//   },
//   remove: function () {
//     mejs.Utility.removeSwf(this.pluginElement.id)
//   }
// }, mejs.MediaElementDefaults = {
//   mode: "auto",
//   plugins: ["flash", "silverlight", "youtube", "vimeo"],
//   enablePluginDebug: !1,
//   httpsBasicAuthSite: !1,
//   type: "",
//   pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
//   flashName: "flashmediaelement.swf",
//   flashStreamer: "",
//   flashScriptAccess: "sameDomain",
//   enablePluginSmoothing: !1,
//   enablePseudoStreaming: !1,
//   pseudoStreamingStartQueryParam: "start",
//   silverlightName: "silverlightmediaelement.xap",
//   defaultVideoWidth: 480,
//   defaultVideoHeight: 270,
//   pluginWidth: -1,
//   pluginHeight: -1,
//   pluginVars: [],
//   timerRate: 250,
//   startVolume: .8,
//   success: function () { },
//   error: function () { }
// }, mejs.MediaElement = function (e, t) {
//   return mejs.HtmlMediaElementShim.create(e, t)
// }, mejs.HtmlMediaElementShim = {
//   create: function (e, t) {
//     var n, i, r = {},
//       o = "string" == typeof e ? document.getElementById(e) : e,
//       s = o.tagName.toLowerCase(),
//       a = "audio" === s || "video" === s,
//       l = a ? o.getAttribute("src") : o.getAttribute("href"),
//       u = o.getAttribute("poster"),
//       c = o.getAttribute("autoplay"),
//       d = o.getAttribute("preload"),
//       f = o.getAttribute("controls");
//     for (i in mejs.MediaElementDefaults) r[i] = mejs.MediaElementDefaults[i];
//     for (i in t) r[i] = t[i];
//     return l = void 0 === l || null === l || "" == l ? null : l, u = void 0 === u || null === u ? "" : u, d = void 0 === d || null === d || "false" === d ? "none" : d, c = !(void 0 === c || null === c || "false" === c), f = !(void 0 === f || null === f || "false" === f), n = this.determinePlayback(o, r, mejs.MediaFeatures.supportsMediaTag, a, l), n.url = null !== n.url ? mejs.Utility.absolutizeUrl(n.url) : "", n.scheme = mejs.Utility.determineScheme(n.url), "native" == n.method ? (mejs.MediaFeatures.isBustedAndroid && (o.src = n.url, o.addEventListener("click", function () {
//       o.play()
//     }, !1)), this.updateNative(n, r, c, d)) : "" !== n.method ? this.createPlugin(n, r, u, c, d, f) : (this.createErrorMessage(n, r, u), this)
//   },
//   determinePlayback: function (e, t, n, i, r) {
//     var o, s, a, l, u, c, d, f, h, p, m, g = [],
//       v = {
//         method: "",
//         url: "",
//         htmlMediaElement: e,
//         isVideo: "audio" != e.tagName.toLowerCase(),
//         scheme: ""
//       };
//     if (void 0 !== t.type && "" !== t.type)
//       if ("string" == typeof t.type) g.push({
//         type: t.type,
//         url: r
//       });
//       else
//         for (o = 0; o < t.type.length; o++) g.push({
//           type: t.type[o],
//           url: r
//         });
//     else if (null !== r) c = this.formatType(r, e.getAttribute("type")), g.push({
//       type: c,
//       url: r
//     });
//     else
//       for (o = 0; o < e.childNodes.length; o++) 1 == (u = e.childNodes[o]).nodeType && "source" == u.tagName.toLowerCase() && (r = u.getAttribute("src"), c = this.formatType(r, u.getAttribute("type")), (!(m = u.getAttribute("media")) || !window.matchMedia || window.matchMedia && window.matchMedia(m).matches) && g.push({
//         type: c,
//         url: r
//       }));
//     if (!i && g.length > 0 && null !== g[0].url && this.getTypeFromFile(g[0].url).indexOf("audio") > -1 && (v.isVideo = !1), mejs.MediaFeatures.isBustedAndroid && (e.canPlayType = function (e) {
//       return null !== e.match(/video\/(mp4|m4v)/gi) ? "maybe" : ""
//     }), mejs.MediaFeatures.isChromium && (e.canPlayType = function (e) {
//       return null !== e.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" : ""
//     }), n && ("auto" === t.mode || "auto_plugin" === t.mode || "native" === t.mode) && (!mejs.MediaFeatures.isBustedNativeHTTPS || !0 !== t.httpsBasicAuthSite)) {
//       for (i || (p = document.createElement(v.isVideo ? "video" : "audio"), e.parentNode.insertBefore(p, e), e.style.display = "none", v.htmlMediaElement = e = p), o = 0; o < g.length; o++)
//         if ("video/m3u8" == g[o].type || "" !== e.canPlayType(g[o].type).replace(/no/, "") || "" !== e.canPlayType(g[o].type.replace(/mp3/, "mpeg")).replace(/no/, "") || "" !== e.canPlayType(g[o].type.replace(/m4a/, "mp4")).replace(/no/, "")) {
//           v.method = "native", v.url = g[o].url;
//           break
//         }
//       if ("native" === v.method && (null !== v.url && (e.src = v.url), "auto_plugin" !== t.mode)) return v
//     }
//     if ("auto" === t.mode || "auto_plugin" === t.mode || "shim" === t.mode)
//       for (o = 0; o < g.length; o++)
//         for (c = g[o].type, s = 0; s < t.plugins.length; s++)
//           for (d = t.plugins[s], f = mejs.plugins[d], a = 0; a < f.length; a++)
//             if (null == (h = f[a]).version || mejs.PluginDetector.hasPluginVersion(d, h.version))
//               for (l = 0; l < h.types.length; l++)
//                 if (c.toLowerCase() == h.types[l].toLowerCase()) return v.method = d, v.url = g[o].url, v;
//     return "auto_plugin" === t.mode && "native" === v.method ? v : ("" === v.method && g.length > 0 && (v.url = g[0].url), v)
//   },
//   formatType: function (e, t) {
//     return e && !t ? this.getTypeFromFile(e) : t && ~t.indexOf(";") ? t.substr(0, t.indexOf(";")) : t
//   },
//   getTypeFromFile: function (e) {
//     var t = (e = e.split("?")[0]).substring(e.lastIndexOf(".") + 1).toLowerCase(),
//       n = /(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(t) ? "video/" : "audio/";
//     return this.getTypeFromExtension(t, n)
//   },
//   getTypeFromExtension: function (e, t) {
//     switch (t = t || "", e) {
//       case "mp4":
//       case "m4v":
//       case "m4a":
//       case "f4v":
//       case "f4a":
//         return t + "mp4";
//       case "flv":
//         return t + "x-flv";
//       case "webm":
//       case "webma":
//       case "webmv":
//         return t + "webm";
//       case "ogg":
//       case "oga":
//       case "ogv":
//         return t + "ogg";
//       case "m3u8":
//         return "application/x-mpegurl";
//       case "ts":
//         return t + "mp2t";
//       default:
//         return t + e
//     }
//   },
//   createErrorMessage: function (e, t, n) {
//     var i = e.htmlMediaElement,
//       r = document.createElement("div"),
//       o = t.customError;
//     r.className = "me-cannotplay";
//     try {
//       r.style.width = i.width + "px", r.style.height = i.height + "px"
//     } catch (e) { }
//     o || (o = '<a href="' + e.url + '">', "" !== n && (o += '<img src="' + n + '" width="100%" height="100%" alt="" />'), o += "<span>" + mejs.i18n.t("Download File") + "</span></a>"), r.innerHTML = o, i.parentNode.insertBefore(r, i), i.style.display = "none", t.error(i)
//   },
//   createPlugin: function (e, t, n, i, r, o) {
//     var s, a, l, u = e.htmlMediaElement,
//       c = 1,
//       d = 1,
//       f = "me_" + e.method + "_" + mejs.meIndex++,
//       h = new mejs.PluginMediaElement(f, e.method, e.url),
//       p = document.createElement("div");
//     h.tagName = u.tagName;
//     for (var m = 0; m < u.attributes.length; m++) {
//       var g = u.attributes[m];
//       g.specified && h.setAttribute(g.name, g.value)
//     }
//     for (a = u.parentNode; null !== a && null != a.tagName && "body" !== a.tagName.toLowerCase() && null != a.parentNode && null != a.parentNode.tagName && null != a.parentNode.constructor && "ShadowRoot" === a.parentNode.constructor.name;) {
//       if ("p" === a.parentNode.tagName.toLowerCase()) {
//         a.parentNode.parentNode.insertBefore(a, a.parentNode);
//         break
//       }
//       a = a.parentNode
//     }
//     switch (e.isVideo ? (c = t.pluginWidth > 0 ? t.pluginWidth : t.videoWidth > 0 ? t.videoWidth : null !== u.getAttribute("width") ? u.getAttribute("width") : t.defaultVideoWidth, d = t.pluginHeight > 0 ? t.pluginHeight : t.videoHeight > 0 ? t.videoHeight : null !== u.getAttribute("height") ? u.getAttribute("height") : t.defaultVideoHeight, c = mejs.Utility.encodeUrl(c), d = mejs.Utility.encodeUrl(d)) : t.enablePluginDebug && (c = 320, d = 240), h.success = t.success, p.className = "me-plugin", p.id = f + "_container", e.isVideo ? u.parentNode.insertBefore(p, u) : document.body.insertBefore(p, document.body.childNodes[0]), ("flash" === e.method || "silverlight" === e.method) && (l = ["id=" + f, "isvideo=" + (e.isVideo ? "true" : "false"), "autoplay=" + (i ? "true" : "false"), "preload=" + r, "width=" + c, "startvolume=" + t.startVolume, "timerrate=" + t.timerRate, "flashstreamer=" + t.flashStreamer, "height=" + d, "pseudostreamstart=" + t.pseudoStreamingStartQueryParam], null !== e.url && ("flash" == e.method ? l.push("file=" + mejs.Utility.encodeUrl(e.url)) : l.push("file=" + e.url)), t.enablePluginDebug && l.push("debug=true"), t.enablePluginSmoothing && l.push("smoothing=true"), t.enablePseudoStreaming && l.push("pseudostreaming=true"), o && l.push("controls=true"), t.pluginVars && (l = l.concat(t.pluginVars)), window[f + "_init"] = function () {
//       switch (h.pluginType) {
//         case "flash":
//           h.pluginElement = h.pluginApi = document.getElementById(f);
//           break;
//         case "silverlight":
//           h.pluginElement = document.getElementById(h.id), h.pluginApi = h.pluginElement.Content.MediaElementJS
//       }
//       null != h.pluginApi && h.success && h.success(h, u)
//     }, window[f + "_event"] = function (e, t) {
//       var n, i, r;
//       n = {
//         type: e,
//         target: h
//       };
//       for (i in t) h[i] = t[i], n[i] = t[i];
//       r = t.bufferedTime || 0, n.target.buffered = n.buffered = {
//         start: function (e) {
//           return 0
//         },
//         end: function (e) {
//           return r
//         },
//         length: 1
//       }, h.dispatchEvent(n)
//     }), e.method) {
//       case "silverlight":
//         p.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + f + '" name="' + f + '" width="' + c + '" height="' + d + '" class="mejs-shim"><param name="initParams" value="' + l.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + t.pluginPath + t.silverlightName + '" /></object>';
//         break;
//       case "flash":
//         mejs.MediaFeatures.isIE ? (s = document.createElement("div"), p.appendChild(s), s.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + f + '" width="' + c + '" height="' + d + '" class="mejs-shim"><param name="movie" value="' + t.pluginPath + t.flashName + "?" + (new Date).getTime() + '" /><param name="flashvars" value="' + l.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + t.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : p.innerHTML = '<embed id="' + f + '" name="' + f + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="' + t.flashScriptAccess + '" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + t.pluginPath + t.flashName + '" flashvars="' + l.join("&") + '" width="' + c + '" height="' + d + '" scale="default"class="mejs-shim"></embed>';
//         break;
//       case "youtube":
//         var v;
//         if (-1 != e.url.lastIndexOf("youtu.be")) - 1 != (v = e.url.substr(e.url.lastIndexOf("/") + 1)).indexOf("?") && (v = v.substr(0, v.indexOf("?")));
//         else {
//           var y = e.url.match(/[?&]v=([^&#]+)|&|#|$/);
//           y && (v = y[1])
//         }
//         youtubeSettings = {
//           container: p,
//           containerId: p.id,
//           pluginMediaElement: h,
//           pluginId: f,
//           videoId: v,
//           height: d,
//           width: c,
//           scheme: e.scheme
//         }, window.postMessage ? mejs.YouTubeApi.enqueueIframe(youtubeSettings) : mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) && mejs.YouTubeApi.createFlash(youtubeSettings, t);
//         break;
//       case "vimeo":
//         var b = f + "_player";
//         if (h.vimeoid = e.url.substr(e.url.lastIndexOf("/") + 1), p.innerHTML = '<iframe src="' + e.scheme + "player.vimeo.com/video/" + h.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + b + '" width="' + c + '" height="' + d + '" frameborder="0" class="mejs-shim" id="' + b + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', "function" == typeof $f) {
//           var $ = $f(p.childNodes[0]),
//             w = -1;
//           $.addEvent("ready", function () {
//             function e(e, t, n, i) {
//               var r = {
//                 type: n,
//                 target: t
//               };
//               "timeupdate" == n && (t.currentTime = r.currentTime = i.seconds, t.duration = r.duration = i.duration), t.dispatchEvent(r)
//             }
//             $.playVideo = function () {
//               $.api("play")
//             }, $.stopVideo = function () {
//               $.api("unload")
//             }, $.pauseVideo = function () {
//               $.api("pause")
//             }, $.seekTo = function (e) {
//               $.api("seekTo", e)
//             }, $.setVolume = function (e) {
//               $.api("setVolume", e)
//             }, $.setMuted = function (e) {
//               e ? ($.lastVolume = $.api("getVolume"), $.api("setVolume", 0)) : ($.api("setVolume", $.lastVolume), delete $.lastVolume)
//             }, $.getPlayerState = function () {
//               return w
//             }, $.addEvent("play", function () {
//               w = 1, e(0, h, "play"), e(0, h, "playing")
//             }), $.addEvent("pause", function () {
//               w = 2, e(0, h, "pause")
//             }), $.addEvent("finish", function () {
//               w = 0, e(0, h, "ended")
//             }), $.addEvent("playProgress", function (t) {
//               e(0, h, "timeupdate", t)
//             }), $.addEvent("seek", function (t) {
//               w = 3, e(0, h, "seeked", t)
//             }), $.addEvent("loadProgress", function (t) {
//               w = 3, e(0, h, "progress", t)
//             }), h.pluginElement = p, h.pluginApi = $, h.success(h, h.pluginElement)
//           })
//         } else console.warn("You need to include froogaloop for vimeo to work")
//     }
//     return u.style.display = "none", u.removeAttribute("autoplay"), h
//   },
//   updateNative: function (e, t, n, i) {
//     var r, o = e.htmlMediaElement;
//     for (r in mejs.HtmlMediaElement) o[r] = mejs.HtmlMediaElement[r];
//     return t.success(o, o), o
//   }
// }, mejs.YouTubeApi = {
//   isIframeStarted: !1,
//   isIframeLoaded: !1,
//   loadIframeApi: function (e) {
//     if (!this.isIframeStarted) {
//       var t = document.createElement("script");
//       t.src = e.scheme + "www.youtube.com/player_api";
//       var n = document.getElementsByTagName("script")[0];
//       n.parentNode.insertBefore(t, n), this.isIframeStarted = !0
//     }
//   },
//   iframeQueue: [],
//   enqueueIframe: function (e) {
//     this.isLoaded ? this.createIframe(e) : (this.loadIframeApi(e), this.iframeQueue.push(e))
//   },
//   createIframe: function (e) {
//     var t = e.pluginMediaElement,
//       n = new YT.Player(e.containerId, {
//         height: e.height,
//         width: e.width,
//         videoId: e.videoId,
//         playerVars: {
//           controls: 0,
//           wmode: "transparent"
//         },
//         events: {
//           onReady: function () {
//             n.setVideoSize = function (e, t) {
//               n.setSize(e, t)
//             }, e.pluginMediaElement.pluginApi = n, e.pluginMediaElement.pluginElement = document.getElementById(e.containerId), t.success(t, t.pluginElement), setInterval(function () {
//               mejs.YouTubeApi.createEvent(n, t, "timeupdate")
//             }, 250)
//           },
//           onStateChange: function (e) {
//             mejs.YouTubeApi.handleStateChange(e.data, n, t)
//           }
//         }
//       })
//   },
//   createEvent: function (e, t, n) {
//     var i = {
//       type: n,
//       target: t
//     };
//     if (e && e.getDuration) {
//       t.currentTime = i.currentTime = e.getCurrentTime(), t.duration = i.duration = e.getDuration(), i.paused = t.paused, i.ended = t.ended, i.muted = e.isMuted(), i.volume = e.getVolume() / 100, i.bytesTotal = e.getVideoBytesTotal(), i.bufferedBytes = e.getVideoBytesLoaded();
//       var r = i.bufferedBytes / i.bytesTotal * i.duration;
//       i.target.buffered = i.buffered = {
//         start: function (e) {
//           return 0
//         },
//         end: function (e) {
//           return r
//         },
//         length: 1
//       }
//     }
//     t.dispatchEvent(i)
//   },
//   iFrameReady: function () {
//     for (this.isLoaded = !0, this.isIframeLoaded = !0; this.iframeQueue.length > 0;) {
//       var e = this.iframeQueue.pop();
//       this.createIframe(e)
//     }
//   },
//   flashPlayers: {},
//   createFlash: function (e) {
//     this.flashPlayers[e.pluginId] = e;
//     var t, n = e.scheme + "www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + e.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
//     mejs.MediaFeatures.isIE ? (t = document.createElement("div"), e.container.appendChild(t), t.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + e.scheme + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e.pluginId + '" width="' + e.width + '" height="' + e.height + '" class="mejs-shim"><param name="movie" value="' + n + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + options.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /></object>') : e.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + e.pluginId + '" data="' + n + '" width="' + e.width + '" height="' + e.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="' + options.flashScriptAccess + '"><param name="wmode" value="transparent"></object>'
//   },
//   flashReady: function (e) {
//     var t = this.flashPlayers[e],
//       n = document.getElementById(e),
//       i = t.pluginMediaElement;
//     i.pluginApi = i.pluginElement = n, t.success(i, i.pluginElement), n.cueVideoById(t.videoId);
//     var r = t.containerId + "_callback";
//     window[r] = function (e) {
//       mejs.YouTubeApi.handleStateChange(e, n, i)
//     }, n.addEventListener("onStateChange", r), setInterval(function () {
//       mejs.YouTubeApi.createEvent(n, i, "timeupdate")
//     }, 250), mejs.YouTubeApi.createEvent(n, i, "canplay")
//   },
//   handleStateChange: function (e, t, n) {
//     switch (e) {
//       case -1:
//         n.paused = !0, n.ended = !0, mejs.YouTubeApi.createEvent(t, n, "loadedmetadata");
//         break;
//       case 0:
//         n.paused = !1, n.ended = !0, mejs.YouTubeApi.createEvent(t, n, "ended");
//         break;
//       case 1:
//         n.paused = !1, n.ended = !1, mejs.YouTubeApi.createEvent(t, n, "play"), mejs.YouTubeApi.createEvent(t, n, "playing");
//         break;
//       case 2:
//         n.paused = !0, n.ended = !1, mejs.YouTubeApi.createEvent(t, n, "pause");
//         break;
//       case 3:
//         mejs.YouTubeApi.createEvent(t, n, "progress")
//     }
//   }
// }, window.onYouTubePlayerAPIReady = function () {
//   mejs.YouTubeApi.iFrameReady()
// }, window.onYouTubePlayerReady = function (e) {
//   mejs.YouTubeApi.flashReady(e)
// }, window.mejs = mejs, window.MediaElement = mejs.MediaElement,
//   function (e, t, n) {
//     "use strict";
//     var i = {
//       locale: {
//         language: t.i18n && t.i18n.locale.language || "",
//         strings: t.i18n && t.i18n.locale.strings || {}
//       },
//       ietf_lang_regex: /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/,
//       methods: {}
//     };
//     i.getLanguage = function () {
//       var e = i.locale.language || window.navigator.userLanguage || window.navigator.language;
//       return i.ietf_lang_regex.exec(e) ? e : null
//     }, "undefined" != typeof mejsL10n && (i.locale.language = mejsL10n.language), i.methods.checkPlain = function (e) {
//       var t, n, i = {
//         "&": "&amp;",
//         '"': "&quot;",
//         "<": "&lt;",
//         ">": "&gt;"
//       };
//       e = String(e);
//       for (t in i) i.hasOwnProperty(t) && (n = new RegExp(t, "g"), e = e.replace(n, i[t]));
//       return e
//     }, i.methods.t = function (e, t) {
//       return i.locale.strings && i.locale.strings[t.context] && i.locale.strings[t.context][e] && (e = i.locale.strings[t.context][e]), i.methods.checkPlain(e)
//     }, i.t = function (e, t) {
//       if ("string" == typeof e && e.length > 0) {
//         var n = i.getLanguage();
//         return t = t || {
//           context: n
//         }, i.methods.t(e, t)
//       }
//       throw {
//         name: "InvalidArgumentException",
//         message: "First argument is either not a string or empty."
//       }
//     }, t.i18n = i
//   }(document, mejs),
//   function (e, t) {
//     "use strict";
//     "undefined" != typeof mejsL10n && (e[mejsL10n.language] = mejsL10n.strings)
//   }(mejs.i18n.locale.strings), "undefined" != typeof jQuery ? mejs.$ = jQuery : "undefined" != typeof Zepto ? (mejs.$ = Zepto, Zepto.fn.outerWidth = function (e) {
//     var t = $(this).width();
//     return e && (t += parseInt($(this).css("margin-right"), 10), t += parseInt($(this).css("margin-left"), 10)), t
//   }) : "undefined" != typeof ender && (mejs.$ = ender),
//   function (e) {
//     mejs.MepDefaults = {
//       poster: "",
//       showPosterWhenEnded: !1,
//       defaultVideoWidth: 480,
//       defaultVideoHeight: 270,
//       videoWidth: -1,
//       videoHeight: -1,
//       defaultAudioWidth: 400,
//       defaultAudioHeight: 30,
//       defaultSeekBackwardInterval: function (e) {
//         return .05 * e.duration
//       },
//       defaultSeekForwardInterval: function (e) {
//         return .05 * e.duration
//       },
//       setDimensions: !0,
//       audioWidth: -1,
//       audioHeight: -1,
//       startVolume: .8,
//       loop: !1,
//       autoRewind: !0,
//       enableAutosize: !0,
//       timeFormat: "",
//       alwaysShowHours: !1,
//       showTimecodeFrameCount: !1,
//       framesPerSecond: 25,
//       autosizeProgress: !0,
//       alwaysShowControls: !1,
//       hideVideoControlsOnLoad: !1,
//       clickToPlayPause: !0,
//       iPadUseNativeControls: !1,
//       iPhoneUseNativeControls: !1,
//       AndroidUseNativeControls: !1,
//       features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
//       isVideo: !0,
//       stretching: "auto",
//       enableKeyboard: !0,
//       pauseOtherPlayers: !0,
//       keyActions: [{
//         keys: [32, 179],
//         action: function (e, t) {
//           t.paused || t.ended ? t.play() : t.pause()
//         }
//       }, {
//         keys: [38],
//         action: function (e, t) {
//           e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), e.startControlsTimer());
//           var n = Math.min(t.volume + .1, 1);
//           t.setVolume(n)
//         }
//       }, {
//         keys: [40],
//         action: function (e, t) {
//           e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), e.startControlsTimer());
//           var n = Math.max(t.volume - .1, 0);
//           t.setVolume(n)
//         }
//       }, {
//         keys: [37, 227],
//         action: function (e, t) {
//           if (!isNaN(t.duration) && t.duration > 0) {
//             e.isVideo && (e.showControls(), e.startControlsTimer());
//             var n = Math.max(t.currentTime - e.options.defaultSeekBackwardInterval(t), 0);
//             t.setCurrentTime(n)
//           }
//         }
//       }, {
//         keys: [39, 228],
//         action: function (e, t) {
//           if (!isNaN(t.duration) && t.duration > 0) {
//             e.isVideo && (e.showControls(), e.startControlsTimer());
//             var n = Math.min(t.currentTime + e.options.defaultSeekForwardInterval(t), t.duration);
//             t.setCurrentTime(n)
//           }
//         }
//       }, {
//         keys: [70],
//         action: function (e, t) {
//           void 0 !== e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen())
//         }
//       }, {
//         keys: [77],
//         action: function (e, t) {
//           e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), e.startControlsTimer()), e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
//         }
//       }]
//     }, mejs.mepIndex = 0, mejs.players = {}, mejs.MediaElementPlayer = function (t, n) {
//       if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(t, n);
//       var i = this;
//       return i.$media = i.$node = e(t), i.node = i.media = i.$media[0], i.node ? void 0 !== i.node.player ? i.node.player : (void 0 === n && (n = i.$node.data("mejsoptions")), i.options = e.extend({}, mejs.MepDefaults, n), i.options.timeFormat || (i.options.timeFormat = "mm:ss", i.options.alwaysShowHours && (i.options.timeFormat = "hh:mm:ss"), i.options.showTimecodeFrameCount && (i.options.timeFormat += ":ff")), mejs.Utility.calculateTimeFormat(0, i.options, i.options.framesPerSecond || 25), i.id = "mep_" + mejs.mepIndex++ , mejs.players[i.id] = i, i.init(), i) : void 0
//     }, mejs.MediaElementPlayer.prototype = {
//       hasFocus: !1,
//       controlsAreVisible: !0,
//       init: function () {
//         var t = this,
//           n = mejs.MediaFeatures,
//           i = e.extend(!0, {}, t.options, {
//             success: function (e, n) {
//               t.meReady(e, n)
//             },
//             error: function (e) {
//               t.handleError(e)
//             }
//           }),
//           r = t.media.tagName.toLowerCase();
//         if (t.isDynamic = "audio" !== r && "video" !== r, t.isDynamic ? t.isVideo = t.options.isVideo : t.isVideo = "audio" !== r && t.options.isVideo, n.isiPad && t.options.iPadUseNativeControls || n.isiPhone && t.options.iPhoneUseNativeControls) t.$media.attr("controls", "controls"), n.isiPad && null !== t.media.getAttribute("autoplay") && t.play();
//         else if (n.isAndroid && t.options.AndroidUseNativeControls);
//         else {
//           t.$media.removeAttr("controls");
//           var o = t.isVideo ? mejs.i18n.t("Video Player") : mejs.i18n.t("Audio Player");
//           e('<span class="mejs-offscreen">' + o + "</span>").insertBefore(t.$media), t.container = e('<div id="' + t.id + '" class="mejs-container ' + (mejs.MediaFeatures.svgAsImg ? "svg" : "no-svg") + '" tabindex="0" role="application" aria-label="' + o + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(t.$media[0].className).insertBefore(t.$media).focus(function (e) {
//             t.controlsAreVisible || t.hasFocus || (t.showControls(!0), t.hasMsNativeFullScreen) || t.container.find(".mejs-playpause-button > button").focus()
//           }), "fill" !== t.options.stretching || t.container.parent("mejs-fill-container").length || (t.outerContainer = t.$media.parent(), t.container.wrap('<div class="mejs-fill-container"/>')), t.container.addClass((n.isAndroid ? "mejs-android " : "") + (n.isiOS ? "mejs-ios " : "") + (n.isiPad ? "mejs-ipad " : "") + (n.isiPhone ? "mejs-iphone " : "") + (t.isVideo ? "mejs-video " : "mejs-audio ")), t.container.find(".mejs-mediaelement").append(t.$media), t.node.player = t, t.controls = t.container.find(".mejs-controls"), t.layers = t.container.find(".mejs-layers");
//           var s = t.isVideo ? "video" : "audio",
//             a = s.substring(0, 1).toUpperCase() + s.substring(1);
//           t.options[s + "Width"] > 0 || t.options[s + "Width"].toString().indexOf("%") > -1 ? t.width = t.options[s + "Width"] : "" !== t.media.style.width && null !== t.media.style.width ? t.width = t.media.style.width : null !== t.media.getAttribute("width") ? t.width = t.$media.attr("width") : t.width = t.options["default" + a + "Width"], t.options[s + "Height"] > 0 || t.options[s + "Height"].toString().indexOf("%") > -1 ? t.height = t.options[s + "Height"] : "" !== t.media.style.height && null !== t.media.style.height ? t.height = t.media.style.height : null !== t.$media[0].getAttribute("height") ? t.height = t.$media.attr("height") : t.height = t.options["default" + a + "Height"], t.setPlayerSize(t.width, t.height), i.pluginWidth = t.width, i.pluginHeight = t.height
//         }
//         mejs.MediaElement(t.$media[0], i), void 0 !== t.container && t.controlsAreVisible && t.container.trigger("controlsshown")
//       },
//       showControls: function (e) {
//         var t = this;
//         e = void 0 === e || e, t.controlsAreVisible || (e ? (t.controls.removeClass("mejs-offscreen").stop(!0, !0).fadeIn(200, function () {
//           t.controlsAreVisible = !0, t.container.trigger("controlsshown")
//         }), t.container.find(".mejs-control").removeClass("mejs-offscreen").stop(!0, !0).fadeIn(200, function () {
//           t.controlsAreVisible = !0
//         })) : (t.controls.removeClass("mejs-offscreen").css("display", "block"), t.container.find(".mejs-control").removeClass("mejs-offscreen").css("display", "block"), t.controlsAreVisible = !0, t.container.trigger("controlsshown")), t.setControlsSize())
//       },
//       hideControls: function (t) {
//         var n = this;
//         t = void 0 === t || t, !n.controlsAreVisible || n.options.alwaysShowControls || n.keyboardAction || (t ? (n.controls.stop(!0, !0).fadeOut(200, function () {
//           e(this).addClass("mejs-offscreen").css("display", "block"), n.controlsAreVisible = !1, n.container.trigger("controlshidden")
//         }), n.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function () {
//           e(this).addClass("mejs-offscreen").css("display", "block")
//         })) : (n.controls.addClass("mejs-offscreen").css("display", "block"), n.container.find(".mejs-control").addClass("mejs-offscreen").css("display", "block"), n.controlsAreVisible = !1, n.container.trigger("controlshidden")))
//       },
//       controlsTimer: null,
//       startControlsTimer: function (e) {
//         var t = this;
//         e = void 0 !== e ? e : 1500, t.killControlsTimer("start"), t.controlsTimer = setTimeout(function () {
//           t.hideControls(), t.killControlsTimer("hide")
//         }, e)
//       },
//       killControlsTimer: function (e) {
//         var t = this;
//         null !== t.controlsTimer && (clearTimeout(t.controlsTimer), delete t.controlsTimer, t.controlsTimer = null)
//       },
//       controlsEnabled: !0,
//       disableControls: function () {
//         var e = this;
//         e.killControlsTimer(), e.hideControls(!1), this.controlsEnabled = !1
//       },
//       enableControls: function () {
//         var e = this;
//         e.showControls(!1), e.controlsEnabled = !0
//       },
//       meReady: function (t, n) {
//         var i, r, o = this,
//           s = mejs.MediaFeatures,
//           a = n.getAttribute("autoplay"),
//           l = !(void 0 === a || null === a || "false" === a);
//         if (!o.created) {
//           if (o.created = !0, o.media = t, o.domNode = n, !(s.isAndroid && o.options.AndroidUseNativeControls || s.isiPad && o.options.iPadUseNativeControls || s.isiPhone && o.options.iPhoneUseNativeControls)) {
//             o.buildposter(o, o.controls, o.layers, o.media), o.buildkeyboard(o, o.controls, o.layers, o.media), o.buildoverlays(o, o.controls, o.layers, o.media), o.findTracks();
//             for (i in o.options.features)
//               if (r = o.options.features[i], o["build" + r]) try {
//                 o["build" + r](o, o.controls, o.layers, o.media)
//               } catch (e) { }
//             o.container.trigger("controlsready"), o.setPlayerSize(o.width, o.height), o.setControlsSize(), o.isVideo && (mejs.MediaFeatures.hasTouch ? o.$media.bind("touchstart", function () {
//               o.controlsAreVisible ? o.hideControls(!1) : o.controlsEnabled && o.showControls(!1)
//             }) : (o.clickToPlayPauseCallback = function () {
//               o.options.clickToPlayPause && (o.media.paused ? o.play() : o.pause())
//             }, o.media.addEventListener("click", o.clickToPlayPauseCallback, !1), o.container.bind("mouseenter", function () {
//               o.controlsEnabled && (o.options.alwaysShowControls || (o.killControlsTimer("enter"), o.showControls(), o.startControlsTimer(2500)))
//             }).bind("mousemove", function () {
//               o.controlsEnabled && (o.controlsAreVisible || o.showControls(), o.options.alwaysShowControls || o.startControlsTimer(2500))
//             }).bind("mouseleave", function () {
//               o.controlsEnabled && (o.media.paused || o.options.alwaysShowControls || o.startControlsTimer(1e3))
//             })), o.options.hideVideoControlsOnLoad && o.hideControls(!1), l && !o.options.alwaysShowControls && o.hideControls(), o.options.enableAutosize && o.media.addEventListener("loadedmetadata", function (e) {
//               o.options.videoHeight <= 0 && null === o.domNode.getAttribute("height") && !isNaN(e.target.videoHeight) && (o.setPlayerSize(e.target.videoWidth, e.target.videoHeight), o.setControlsSize(), o.media.setVideoSize(e.target.videoWidth, e.target.videoHeight))
//             }, !1)), o.media.addEventListener("play", function () {
//               var e;
//               for (e in mejs.players) {
//                 var t = mejs.players[e];
//                 t.id == o.id || !o.options.pauseOtherPlayers || t.paused || t.ended || t.pause(), t.hasFocus = !1
//               }
//               o.hasFocus = !0
//             }, !1), o.media.addEventListener("ended", function (t) {
//               if (o.options.autoRewind) try {
//                 o.media.setCurrentTime(0), window.setTimeout(function () {
//                   e(o.container).find(".mejs-overlay-loading").parent().hide()
//                 }, 20)
//               } catch (e) { }
//               o.media.pause(), o.setProgressRail && o.setProgressRail(), o.setCurrentRail && o.setCurrentRail(), o.options.loop ? o.play() : !o.options.alwaysShowControls && o.controlsEnabled && o.showControls()
//             }, !1), o.media.addEventListener("loadedmetadata", function (e) {
//               o.updateDuration && o.updateDuration(), o.updateCurrent && o.updateCurrent(), o.isFullScreen || (o.setPlayerSize(o.width, o.height), o.setControlsSize())
//             }, !1);
//             var u = null;
//             o.media.addEventListener("timeupdate", function () {
//               u !== this.duration && (u = this.duration, mejs.Utility.calculateTimeFormat(u, o.options, o.options.framesPerSecond || 25), o.updateDuration && o.updateDuration(), o.updateCurrent && o.updateCurrent(), o.setControlsSize())
//             }, !1), o.container.focusout(function (t) {
//               if (t.relatedTarget) {
//                 var n = e(t.relatedTarget);
//                 o.keyboardAction && 0 === n.parents(".mejs-container").length && (o.keyboardAction = !1, o.hideControls(!0))
//               }
//             }), setTimeout(function () {
//               o.setPlayerSize(o.width, o.height), o.setControlsSize()
//             }, 50), o.globalBind("resize", function () {
//               o.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || o.setPlayerSize(o.width, o.height), o.setControlsSize()
//             }), "youtube" == o.media.pluginType && (s.isiOS || s.isAndroid) && (o.container.find(".mejs-overlay-play").hide(), o.container.find(".mejs-poster").hide())
//           }
//           l && "native" == t.pluginType && o.play(), o.options.success && ("string" == typeof o.options.success ? window[o.options.success](o.media, o.domNode, o) : o.options.success(o.media, o.domNode, o))
//         }
//       },
//       handleError: function (e) {
//         var t = this;
//         t.controls && t.controls.hide(), t.options.error && t.options.error(e)
//       },
//       setPlayerSize: function (e, t) {
//         var n = this;
//         if (!n.options.setDimensions) return !1;
//         switch (void 0 !== e && (n.width = e), void 0 !== t && (n.height = t), n.options.stretching) {
//           case "fill":
//             n.isVideo ? this.setFillMode() : this.setDimensions(n.width, n.height);
//             break;
//           case "responsive":
//             this.setResponsiveMode();
//             break;
//           case "none":
//             this.setDimensions(n.width, n.height);
//             break;
//           default:
//             !0 === this.hasFluidMode() ? this.setResponsiveMode() : this.setDimensions(n.width, n.height)
//         }
//       },
//       hasFluidMode: function () {
//         var e = this;
//         return e.height.toString().indexOf("%") > 0 || "none" !== e.$node.css("max-width") && "t.width" !== e.$node.css("max-width") || e.$node[0].currentStyle && "100%" === e.$node[0].currentStyle.maxWidth
//       },
//       setResponsiveMode: function () {
//         var t = this,
//           n = t.isVideo ? t.media.videoWidth && t.media.videoWidth > 0 ? t.media.videoWidth : null !== t.media.getAttribute("width") ? t.media.getAttribute("width") : t.options.defaultVideoWidth : t.options.defaultAudioWidth,
//           i = t.isVideo ? t.media.videoHeight && t.media.videoHeight > 0 ? t.media.videoHeight : null !== t.media.getAttribute("height") ? t.media.getAttribute("height") : t.options.defaultVideoHeight : t.options.defaultAudioHeight,
//           r = t.container.parent().closest(":visible").width(),
//           o = t.container.parent().closest(":visible").height(),
//           s = t.isVideo || !t.options.autosizeProgress ? parseInt(r * i / n, 10) : i;
//         (isNaN(s) || 0 !== o && s > o && o > i) && (s = o), t.container.parent().length > 0 && "body" === t.container.parent()[0].tagName.toLowerCase() && (r = e(window).width(), s = e(window).height()), s && r && (t.container.width(r).height(s), t.$media.add(t.container.find(".mejs-shim")).width("100%").height("100%"), t.isVideo && t.media.setVideoSize && t.media.setVideoSize(r, s), t.layers.children(".mejs-layer").width("100%").height("100%"))
//       },
//       setFillMode: function () {
//         var e = this,
//           t = e.outerContainer;
//         t.width() || t.height(e.$media.width()), t.height() || t.height(e.$media.height());
//         var n = t.width(),
//           i = t.height();
//         e.setDimensions("100%", "100%"), e.container.find(".mejs-poster img").css("display", "block"), targetElement = e.container.find("object, embed, iframe, video");
//         var r = e.height,
//           o = e.width,
//           s = n,
//           a = r * n / o,
//           l = o * i / r,
//           u = i,
//           c = !(l > n),
//           d = c ? Math.floor(s) : Math.floor(l),
//           f = c ? Math.floor(a) : Math.floor(u);
//         c ? (targetElement.height(f).width(n), e.media.setVideoSize && e.media.setVideoSize(n, f)) : (targetElement.height(i).width(d), e.media.setVideoSize && e.media.setVideoSize(d, i)), targetElement.css({
//           "margin-left": Math.floor((n - d) / 2),
//           "margin-top": 0
//         })
//       },
//       setDimensions: function (e, t) {
//         var n = this;
//         n.container.width(e).height(t), n.layers.children(".mejs-layer").width(e).height(t)
//       },
//       setControlsSize: function () {
//         var t = this,
//           n = 0,
//           i = 0,
//           r = t.controls.find(".mejs-time-rail"),
//           o = t.controls.find(".mejs-time-total"),
//           s = r.siblings(),
//           a = s.last(),
//           l = null;
//         if (t.container.is(":visible") && r.length && r.is(":visible")) {
//           t.options && !t.options.autosizeProgress && (i = parseInt(r.css("width"), 10)), 0 !== i && i || (s.each(function () {
//             var t = e(this);
//             "absolute" != t.css("position") && t.is(":visible") && (n += e(this).outerWidth(!0))
//           }), i = t.controls.width() - n - (r.outerWidth(!0) - r.width()));
//           do {
//             r.width(i), o.width(i - (o.outerWidth(!0) - o.width())), "absolute" != a.css("position") && (l = a.length ? a.position() : null, i--)
//           } while (null !== l && l.top.toFixed(2) > 0 && i > 0);
//           t.container.trigger("controlsresize")
//         }
//       },
//       buildposter: function (t, n, i, r) {
//         var o = this,
//           s = e('<div class="mejs-poster mejs-layer"></div>').appendTo(i),
//           a = t.$media.attr("poster");
//         "" !== t.options.poster && (a = t.options.poster), a ? o.setPoster(a) : s.hide(), r.addEventListener("play", function () {
//           s.hide()
//         }, !1), t.options.showPosterWhenEnded && t.options.autoRewind && r.addEventListener("ended", function () {
//           s.show()
//         }, !1)
//       },
//       setPoster: function (t) {
//         var n = this.container.find(".mejs-poster"),
//           i = n.find("img");
//         0 === i.length && (i = e('<img width="100%" height="100%" alt="" />').appendTo(n)), i.attr("src", t), n.css({
//           "background-image": "url(" + t + ")"
//         })
//       },
//       buildoverlays: function (t, n, i, r) {
//         var o = this;
//         if (t.isVideo) {
//           var s = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(i),
//             a = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(i),
//             l = e('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(i).bind("click", function () {
//               o.options.clickToPlayPause && r.paused && r.play()
//             });
//           r.addEventListener("play", function () {
//             l.hide(), s.hide(), n.find(".mejs-time-buffering").hide(), a.hide()
//           }, !1), r.addEventListener("playing", function () {
//             l.hide(), s.hide(), n.find(".mejs-time-buffering").hide(), a.hide()
//           }, !1), r.addEventListener("seeking", function () {
//             s.show(), n.find(".mejs-time-buffering").show()
//           }, !1), r.addEventListener("seeked", function () {
//             s.hide(), n.find(".mejs-time-buffering").hide()
//           }, !1), r.addEventListener("pause", function () {
//             mejs.MediaFeatures.isiPhone || l.show()
//           }, !1), r.addEventListener("waiting", function () {
//             s.show(), n.find(".mejs-time-buffering").show()
//           }, !1), r.addEventListener("loadeddata", function () {
//             s.show(), n.find(".mejs-time-buffering").show(), mejs.MediaFeatures.isAndroid && (r.canplayTimeout = window.setTimeout(function () {
//               if (document.createEvent) {
//                 var e = document.createEvent("HTMLEvents");
//                 return e.initEvent("canplay", !0, !0), r.dispatchEvent(e)
//               }
//             }, 300))
//           }, !1), r.addEventListener("canplay", function () {
//             s.hide(), n.find(".mejs-time-buffering").hide(), clearTimeout(r.canplayTimeout)
//           }, !1), r.addEventListener("error", function (e) {
//             o.handleError(e), s.hide(), l.hide(), a.show(), a.find(".mejs-overlay-error").html("Error loading this resource")
//           }, !1), r.addEventListener("keydown", function (e) {
//             o.onkeydown(t, r, e)
//           }, !1)
//         }
//       },
//       buildkeyboard: function (t, n, i, r) {
//         var o = this;
//         o.container.keydown(function () {
//           o.keyboardAction = !0
//         }), o.globalBind("keydown", function (n) {
//           return t.hasFocus = 0 !== e(n.target).closest(".mejs-container").length && e(n.target).closest(".mejs-container").attr("id") === t.$media.closest(".mejs-container").attr("id"), o.onkeydown(t, r, n)
//         }), o.globalBind("click", function (n) {
//           t.hasFocus = 0 !== e(n.target).closest(".mejs-container").length
//         })
//       },
//       onkeydown: function (e, t, n) {
//         if (e.hasFocus && e.options.enableKeyboard)
//           for (var i = 0, r = e.options.keyActions.length; r > i; i++)
//             for (var o = e.options.keyActions[i], s = 0, a = o.keys.length; a > s; s++)
//               if (n.keyCode == o.keys[s]) return "function" == typeof n.preventDefault && n.preventDefault(), o.action(e, t, n.keyCode, n), !1;
//         return !0
//       },
//       findTracks: function () {
//         var t = this,
//           n = t.$media.find("track");
//         t.tracks = [], n.each(function (n, i) {
//           i = e(i), t.tracks.push({
//             srclang: i.attr("srclang") ? i.attr("srclang").toLowerCase() : "",
//             src: i.attr("src"),
//             kind: i.attr("kind"),
//             label: i.attr("label") || "",
//             entries: [],
//             isLoaded: !1
//           })
//         })
//       },
//       changeSkin: function (e) {
//         this.container[0].className = "mejs-container " + e, this.setPlayerSize(this.width, this.height), this.setControlsSize()
//       },
//       play: function () {
//         this.load(), this.media.play()
//       },
//       pause: function () {
//         try {
//           this.media.pause()
//         } catch (e) { }
//       },
//       load: function () {
//         this.isLoaded || this.media.load(), this.isLoaded = !0
//       },
//       setMuted: function (e) {
//         this.media.setMuted(e)
//       },
//       setCurrentTime: function (e) {
//         this.media.setCurrentTime(e)
//       },
//       getCurrentTime: function () {
//         return this.media.currentTime
//       },
//       setVolume: function (e) {
//         this.media.setVolume(e)
//       },
//       getVolume: function () {
//         return this.media.volume
//       },
//       setSrc: function (e) {
//         this.media.setSrc(e)
//       },
//       remove: function () {
//         var e, t, n = this;
//         n.container.prev(".mejs-offscreen").remove();
//         for (e in n.options.features)
//           if (t = n.options.features[e], n["clean" + t]) try {
//             n["clean" + t](n)
//           } catch (e) { }
//         n.isDynamic ? n.$node.insertBefore(n.container) : (n.$media.prop("controls", !0), n.$node.clone().insertBefore(n.container).show(), n.$node.remove()), "native" !== n.media.pluginType && n.media.remove(), delete mejs.players[n.id], "object" == typeof n.container && n.container.remove(), n.globalUnbind(), delete n.node.player
//       },
//       rebuildtracks: function () {
//         var e = this;
//         e.findTracks(), e.buildtracks(e, e.controls, e.layers, e.media)
//       },
//       resetSize: function () {
//         var e = this;
//         setTimeout(function () {
//           e.setPlayerSize(e.width, e.height), e.setControlsSize()
//         }, 50)
//       }
//     },
//       function () {
//         function t(t, i) {
//           var r = {
//             d: [],
//             w: []
//           };
//           return e.each((t || "").split(" "), function (e, t) {
//             var o = t + "." + i;
//             0 === o.indexOf(".") ? (r.d.push(o), r.w.push(o)) : r[n.test(t) ? "w" : "d"].push(o)
//           }), r.d = r.d.join(" "), r.w = r.w.join(" "), r
//         }
//         var n = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
//         mejs.MediaElementPlayer.prototype.globalBind = function (n, i, r) {
//           var o = this,
//             s = o.node ? o.node.ownerDocument : document;
//           (n = t(n, o.id)).d && e(s).bind(n.d, i, r), n.w && e(window).bind(n.w, i, r)
//         }, mejs.MediaElementPlayer.prototype.globalUnbind = function (n, i) {
//           var r = this,
//             o = r.node ? r.node.ownerDocument : document;
//           (n = t(n, r.id)).d && e(o).unbind(n.d, i), n.w && e(window).unbind(n.w, i)
//         }
//       }(), void 0 !== e && (e.fn.mediaelementplayer = function (t) {
//         return !1 === t ? this.each(function () {
//           var t = e(this).data("mediaelementplayer");
//           t && t.remove(), e(this).removeData("mediaelementplayer")
//         }) : this.each(function () {
//           e(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, t))
//         }), this
//       }, e(document).ready(function () {
//         e(".mejs-player").mediaelementplayer()
//       })), window.MediaElementPlayer = mejs.MediaElementPlayer
//   }(mejs.$),
//   function (e) {
//     e.extend(mejs.MepDefaults, {
//       playText: mejs.i18n.t("Play"),
//       pauseText: mejs.i18n.t("Pause")
//     }), e.extend(MediaElementPlayer.prototype, {
//       buildplaypause: function (t, n, i, r) {
//         function o(e) {
//           "play" === e ? (l.removeClass("mejs-play").addClass("mejs-pause"), u.attr({
//             title: a.pauseText,
//             "aria-label": a.pauseText
//           })) : (l.removeClass("mejs-pause").addClass("mejs-play"), u.attr({
//             title: a.playText,
//             "aria-label": a.playText
//           }))
//         }
//         var s = this,
//           a = s.options,
//           l = e('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + s.id + '" title="' + a.playText + '" aria-label="' + a.playText + '"></button></div>').appendTo(n).click(function (e) {
//             return e.preventDefault(), r.paused ? r.play() : r.pause(), !1
//           }),
//           u = l.find("button");
//         o("pse"), r.addEventListener("play", function () {
//           o("play")
//         }, !1), r.addEventListener("playing", function () {
//           o("play")
//         }, !1), r.addEventListener("pause", function () {
//           o("pse")
//         }, !1), r.addEventListener("paused", function () {
//           o("pse")
//         }, !1)
//       }
//     })
//   }(mejs.$),
//   function (e) {
//     e.extend(mejs.MepDefaults, {
//       stopText: "Stop"
//     }), e.extend(MediaElementPlayer.prototype, {
//       buildstop: function (t, n, i, r) {
//         var o = this;
//         e('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + o.id + '" title="' + o.options.stopText + '" aria-label="' + o.options.stopText + '"></button></div>').appendTo(n).click(function () {
//           r.paused || r.pause(), r.currentTime > 0 && (r.setCurrentTime(0), r.pause(), n.find(".mejs-time-current").width("0px"), n.find(".mejs-time-handle").css("left", "0px"), n.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0, t.options)), n.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0, t.options)), i.find(".mejs-poster").show())
//         })
//       }
//     })
//   }(mejs.$),
//   function (e) {
//     e.extend(mejs.MepDefaults, {
//       progessHelpText: mejs.i18n.t("Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.")
//     }), e.extend(MediaElementPlayer.prototype, {
//       buildprogress: function (t, n, i, r) {
//         e('<div class="mejs-time-rail"><span  class="mejs-time-total mejs-time-slider"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(n), n.find(".mejs-time-buffering").hide();
//         var o = this,
//           s = n.find(".mejs-time-total"),
//           a = n.find(".mejs-time-loaded"),
//           l = n.find(".mejs-time-current"),
//           u = n.find(".mejs-time-handle"),
//           c = n.find(".mejs-time-float"),
//           d = n.find(".mejs-time-float-current"),
//           f = n.find(".mejs-time-slider"),
//           h = function (e) {
//             var n, i = s.offset(),
//               o = s.width(),
//               a = 0,
//               l = 0,
//               u = 0;
//             n = e.originalEvent && e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0].pageX : e.changedTouches ? e.changedTouches[0].pageX : e.pageX, r.duration && (n < i.left ? n = i.left : n > o + i.left && (n = o + i.left), u = n - i.left, a = u / o, l = .02 >= a ? 0 : a * r.duration, p && l !== r.currentTime && r.setCurrentTime(l), mejs.MediaFeatures.hasTouch || (c.css("left", u), d.html(mejs.Utility.secondsToTimeCode(l, t.options)), c.show()))
//           },
//           p = !1,
//           m = !1,
//           g = 0,
//           v = !1,
//           y = t.options.autoRewind,
//           b = function (e) {
//             var n = r.currentTime,
//               i = mejs.i18n.t("Time Slider"),
//               o = mejs.Utility.secondsToTimeCode(n, t.options),
//               s = r.duration;
//             f.attr({
//               "aria-label": i,
//               "aria-valuemin": 0,
//               "aria-valuemax": s,
//               "aria-valuenow": n,
//               "aria-valuetext": o,
//               role: "slider",
//               tabindex: 0
//             })
//           },
//           $ = function () {
//             new Date - g >= 1e3 && r.play()
//           };
//         f.bind("focus", function (e) {
//           t.options.autoRewind = !1
//         }), f.bind("blur", function (e) {
//           t.options.autoRewind = y
//         }), f.bind("keydown", function (e) {
//           new Date - g >= 1e3 && (v = r.paused);
//           var n = e.keyCode,
//             i = r.duration,
//             o = r.currentTime,
//             s = t.options.defaultSeekForwardInterval(i),
//             a = t.options.defaultSeekBackwardInterval(i);
//           switch (n) {
//             case 37:
//             case 40:
//               o -= a;
//               break;
//             case 39:
//             case 38:
//               o += s;
//               break;
//             case 36:
//               o = 0;
//               break;
//             case 35:
//               o = i;
//               break;
//             case 32:
//             case 13:
//               return void (r.paused ? r.play() : r.pause());
//             default:
//               return
//           }
//           return o = 0 > o ? 0 : o >= i ? i : Math.floor(o), g = new Date, v || r.pause(), o < r.duration && !v && setTimeout($, 1100), r.setCurrentTime(o), e.preventDefault(), e.stopPropagation(), !1
//         }), s.bind("mousedown touchstart", function (e) {
//           (1 === e.which || 0 === e.which) && (p = !0, h(e), o.globalBind("mousemove.dur touchmove.dur", function (e) {
//             h(e)
//           }), o.globalBind("mouseup.dur touchend.dur", function (e) {
//             p = !1, c.hide(), o.globalUnbind(".dur")
//           }))
//         }).bind("mouseenter", function (e) {
//           m = !0, o.globalBind("mousemove.dur", function (e) {
//             h(e)
//           }), mejs.MediaFeatures.hasTouch || c.show()
//         }).bind("mouseleave", function (e) {
//           m = !1, p || (o.globalUnbind(".dur"), c.hide())
//         }), r.addEventListener("progress", function (e) {
//           t.setProgressRail(e), t.setCurrentRail(e)
//         }, !1), r.addEventListener("timeupdate", function (e) {
//           t.setProgressRail(e), t.setCurrentRail(e), b()
//         }, !1), o.container.on("controlsresize", function () {
//           t.setProgressRail(), t.setCurrentRail()
//         }), o.loaded = a, o.total = s, o.current = l, o.handle = u
//       },
//       setProgressRail: function (e) {
//         var t = this,
//           n = void 0 !== e ? e.target : t.media,
//           i = null;
//         n && n.buffered && n.buffered.length > 0 && n.buffered.end && n.duration ? i = n.buffered.end(n.buffered.length - 1) / n.duration : n && void 0 !== n.bytesTotal && n.bytesTotal > 0 && void 0 !== n.bufferedBytes ? i = n.bufferedBytes / n.bytesTotal : e && e.lengthComputable && 0 !== e.total && (i = e.loaded / e.total), null !== i && (i = Math.min(1, Math.max(0, i)), t.loaded && t.total && t.loaded.width(t.total.width() * i))
//       },
//       setCurrentRail: function () {
//         var e = this;
//         if (void 0 !== e.media.currentTime && e.media.duration && e.total && e.handle) {
//           var t = Math.round(e.total.width() * e.media.currentTime / e.media.duration),
//             n = t - Math.round(e.handle.outerWidth(!0) / 2);
//           e.current.width(t), e.handle.css("left", n)
//         }
//       }
//     })
//   }(mejs.$),
//   function (e) {
//     e.extend(mejs.MepDefaults, {
//       duration: -1,
//       timeAndDurationSeparator: "<span> | </span>"
//     }), e.extend(MediaElementPlayer.prototype, {
//       buildcurrent: function (t, n, i, r) {
//         var o = this;
//         e('<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">' + mejs.Utility.secondsToTimeCode(0, t.options) + "</span></div>").appendTo(n), o.currenttime = o.controls.find(".mejs-currenttime"), r.addEventListener("timeupdate", function () {
//           t.updateCurrent()
//         }, !1)
//       },
//       buildduration: function (t, n, i, r) {
//         var o = this;
//         n.children().last().find(".mejs-currenttime").length > 0 ? e(o.options.timeAndDurationSeparator + '<span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(o.options.duration, o.options) + "</span>").appendTo(n.find(".mejs-time")) : (n.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"), e('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(o.options.duration, o.options) + "</span></div>").appendTo(n)), o.durationD = o.controls.find(".mejs-duration"), r.addEventListener("timeupdate", function () {
//           t.updateDuration()
//         }, !1)
//       },
//       updateCurrent: function () {
//         var e = this,
//           t = e.media.currentTime;
//         isNaN(t) && (t = 0), e.currenttime && e.currenttime.html(mejs.Utility.secondsToTimeCode(t, e.options))
//       },
//       updateDuration: function () {
//         var e = this,
//           t = e.media.duration;
//         e.options.duration > 0 && (t = e.options.duration), isNaN(t) && (t = 0), e.container.toggleClass("mejs-long-video", t > 3600), e.durationD && t > 0 && e.durationD.html(mejs.Utility.secondsToTimeCode(t, e.options))
//       }
//     })
//   }(mejs.$),
//   function (e) {
//     e.extend(mejs.MepDefaults, {
//       muteText: mejs.i18n.t("Mute Toggle"),
//       allyVolumeControlText: mejs.i18n.t("Use Up/Down Arrow keys to increase or decrease volume."),
//       hideVolumeOnTouchDevices: !0,
//       audioVolume: "horizontal",
//       videoVolume: "vertical"
//     }), e.extend(MediaElementPlayer.prototype, {
//       buildvolume: function (t, n, i, r) {
//         if (!mejs.MediaFeatures.isAndroid && !mejs.MediaFeatures.isiOS || !this.options.hideVolumeOnTouchDevices) {
//           var o = this,
//             s = o.isVideo ? o.options.videoVolume : o.options.audioVolume,
//             a = "horizontal" == s ? e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + o.id + '" title="' + o.options.muteText + '" aria-label="' + o.options.muteText + '"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">' + o.options.allyVolumeControlText + '</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>').appendTo(n) : e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + o.id + '" title="' + o.options.muteText + '" aria-label="' + o.options.muteText + '"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">' + o.options.allyVolumeControlText + '</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>').appendTo(n),
//             l = o.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
//             u = o.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
//             c = o.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
//             d = o.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
//             f = function (e, t) {
//               if (!l.is(":visible") && void 0 === t) return l.show(), f(e, !0), void l.hide();
//               e = Math.max(0, e), 0 === (e = Math.min(e, 1)) ? (a.removeClass("mejs-mute").addClass("mejs-unmute"), a.children("button").attr("title", mejs.i18n.t("Unmute")).attr("aria-label", mejs.i18n.t("Unmute"))) : (a.removeClass("mejs-unmute").addClass("mejs-mute"), a.children("button").attr("title", mejs.i18n.t("Mute")).attr("aria-label", mejs.i18n.t("Mute")));
//               var n = u.position();
//               if ("vertical" == s) {
//                 var i = u.height(),
//                   r = i - i * e;
//                 d.css("top", Math.round(n.top + r - d.height() / 2)), c.height(i - r), c.css("top", n.top + r)
//               } else {
//                 var o = u.width() * e;
//                 d.css("left", Math.round(n.left + o - d.width() / 2)), c.width(Math.round(o))
//               }
//             },
//             h = function (e) {
//               var t = null,
//                 n = u.offset();
//               if ("vertical" === s) {
//                 var i = u.height();
//                 if (t = (i - (e.pageY - n.top)) / i, 0 === n.top || 0 === n.left) return
//               } else {
//                 var o = u.width();
//                 t = (e.pageX - n.left) / o
//               }
//               t = Math.max(0, t), t = Math.min(t, 1), f(t), 0 === t ? r.setMuted(!0) : r.setMuted(!1), r.setVolume(t)
//             },
//             p = !1,
//             m = !1;
//           a.hover(function () {
//             l.show(), m = !0
//           }, function () {
//             m = !1, p || "vertical" != s || l.hide()
//           });
//           var g = function (e) {
//             var t = Math.floor(100 * r.volume);
//             l.attr({
//               "aria-label": mejs.i18n.t("Volume Slider"),
//               "aria-valuemin": 0,
//               "aria-valuemax": 100,
//               "aria-valuenow": t,
//               "aria-valuetext": t + "%",
//               role: "slider",
//               tabindex: 0
//             })
//           };
//           l.bind("mouseover", function () {
//             m = !0
//           }).bind("mousedown", function (e) {
//             return h(e), o.globalBind("mousemove.vol", function (e) {
//               h(e)
//             }), o.globalBind("mouseup.vol", function () {
//               p = !1, o.globalUnbind(".vol"), m || "vertical" != s || l.hide()
//             }), p = !0, !1
//           }).bind("keydown", function (e) {
//             var t = e.keyCode,
//               n = r.volume;
//             switch (t) {
//               case 38:
//                 n = Math.min(n + .1, 1);
//                 break;
//               case 40:
//                 n = Math.max(0, n - .1);
//                 break;
//               default:
//                 return !0
//             }
//             return p = !1, f(n), r.setVolume(n), !1
//           }), a.find("button").click(function () {
//             r.setMuted(!r.muted)
//           }), a.find("button").bind("focus", function () {
//             l.show()
//           }), r.addEventListener("volumechange", function (e) {
//             p || (r.muted ? (f(0), a.removeClass("mejs-mute").addClass("mejs-unmute")) : (f(r.volume), a.removeClass("mejs-unmute").addClass("mejs-mute"))), g()
//           }, !1), 0 === t.options.startVolume && r.setMuted(!0), "native" === r.pluginType && r.setVolume(t.options.startVolume), o.container.on("controlsresize", function () {
//             f(r.volume)
//           })
//         }
//       }
//     })
//   }(mejs.$),
//   function (e) {
//     e.extend(mejs.MepDefaults, {
//       usePluginFullScreen: !0,
//       newWindowCallback: function () {
//         return ""
//       },
//       fullscreenText: mejs.i18n.t("Fullscreen")
//     }), e.extend(MediaElementPlayer.prototype, {
//       isFullScreen: !1,
//       isNativeFullScreen: !1,
//       isInIframe: !1,
//       fullscreenMode: "",
//       buildfullscreen: function (t, n, i, r) {
//         if (t.isVideo) {
//           t.isInIframe = window.location != window.parent.location, r.addEventListener("play", function () {
//             t.detectFullscreenMode()
//           });
//           var o = this,
//             s = null,
//             a = e('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + o.id + '" title="' + o.options.fullscreenText + '" aria-label="' + o.options.fullscreenText + '"></button></div>').appendTo(n).on("click", function () {
//               mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || t.isFullScreen ? t.exitFullScreen() : t.enterFullScreen()
//             }).on("mouseover", function () {
//               if ("plugin-hover" == o.fullscreenMode) {
//                 null !== s && (clearTimeout(s), delete s);
//                 var e = a.offset(),
//                   n = t.container.offset();
//                 r.positionFullscreenButton(e.left - n.left, e.top - n.top, !0)
//               }
//             }).on("mouseout", function () {
//               "plugin-hover" == o.fullscreenMode && (null !== s && (clearTimeout(s), delete s), s = setTimeout(function () {
//                 r.hideFullscreenButton()
//               }, 1500))
//             });
//           if (t.fullscreenBtn = a, o.globalBind("keydown", function (e) {
//             27 == e.keyCode && (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || o.isFullScreen) && t.exitFullScreen()
//           }), o.normalHeight = 0, o.normalWidth = 0, mejs.MediaFeatures.hasTrueNativeFullScreen) {
//             t.globalBind(mejs.MediaFeatures.fullScreenEventName, function (e) {
//               t.isFullScreen && (mejs.MediaFeatures.isFullScreen() ? (t.isNativeFullScreen = !0, t.setControlsSize()) : (t.isNativeFullScreen = !1, t.exitFullScreen()))
//             })
//           }
//         }
//       },
//       detectFullscreenMode: function () {
//         var e = this,
//           t = "",
//           n = mejs.MediaFeatures;
//         return n.hasTrueNativeFullScreen && "native" === e.media.pluginType ? t = "native-native" : n.hasTrueNativeFullScreen && "native" !== e.media.pluginType && !n.hasFirefoxPluginMovingProblem ? t = "plugin-native" : e.usePluginFullScreen ? mejs.MediaFeatures.supportsPointerEvents ? (t = "plugin-click", e.createPluginClickThrough()) : t = "plugin-hover" : t = "fullwindow", e.fullscreenMode = t, t
//       },
//       isPluginClickThroughCreated: !1,
//       createPluginClickThrough: function () {
//         var t = this;
//         if (!t.isPluginClickThroughCreated) {
//           var n, i, r = !1,
//             o = function () {
//               if (r) {
//                 for (var e in s) s[e].hide();
//                 t.fullscreenBtn.css("pointer-events", ""), t.controls.css("pointer-events", ""), t.media.removeEventListener("click", t.clickToPlayPauseCallback), r = !1
//               }
//             },
//             s = {},
//             a = ["top", "left", "right", "bottom"],
//             l = function () {
//               var e = fullscreenBtn.offset().left - t.container.offset().left,
//                 i = fullscreenBtn.offset().top - t.container.offset().top,
//                 r = fullscreenBtn.outerWidth(!0),
//                 o = fullscreenBtn.outerHeight(!0),
//                 a = t.container.width(),
//                 l = t.container.height();
//               for (n in s) s[n].css({
//                 position: "absolute",
//                 top: 0,
//                 left: 0
//               });
//               s.top.width(a).height(i), s.left.width(e).height(o).css({
//                 top: i
//               }), s.right.width(a - e - r).height(o).css({
//                 top: i,
//                 left: e + r
//               }), s.bottom.width(a).height(l - o - i).css({
//                 top: i + o
//               })
//             };
//           for (t.globalBind("resize", function () {
//             l()
//           }), n = 0, i = a.length; i > n; n++) s[a[n]] = e('<div class="mejs-fullscreen-hover" />').appendTo(t.container).mouseover(o).hide();
//           fullscreenBtn.on("mouseover", function () {
//             if (!t.isFullScreen) {
//               var e = fullscreenBtn.offset(),
//                 i = player.container.offset();
//               media.positionFullscreenButton(e.left - i.left, e.top - i.top, !1), t.fullscreenBtn.css("pointer-events", "none"), t.controls.css("pointer-events", "none"), t.media.addEventListener("click", t.clickToPlayPauseCallback);
//               for (n in s) s[n].show();
//               l(), r = !0
//             }
//           }), media.addEventListener("fullscreenchange", function (e) {
//             t.isFullScreen = !t.isFullScreen, t.isFullScreen ? t.media.removeEventListener("click", t.clickToPlayPauseCallback) : t.media.addEventListener("click", t.clickToPlayPauseCallback), o()
//           }), t.globalBind("mousemove", function (e) {
//             if (r) {
//               var n = fullscreenBtn.offset();
//               (e.pageY < n.top || e.pageY > n.top + fullscreenBtn.outerHeight(!0) || e.pageX < n.left || e.pageX > n.left + fullscreenBtn.outerWidth(!0)) && (fullscreenBtn.css("pointer-events", ""), t.controls.css("pointer-events", ""), r = !1)
//             }
//           }), t.isPluginClickThroughCreated = !0
//         }
//       },
//       cleanfullscreen: function (e) {
//         e.exitFullScreen()
//       },
//       containerSizeTimeout: null,
//       enterFullScreen: function () {
//         var t = this;
//         return mejs.MediaFeatures.hasiOSFullScreen ? void t.media.webkitEnterFullscreen() : (e(document.documentElement).addClass("mejs-fullscreen"), t.normalHeight = t.container.height(), t.normalWidth = t.container.width(), "native-native" === t.fullscreenMode || "plugin-native" === t.fullscreenMode ? (mejs.MediaFeatures.requestFullScreen(t.container[0]), t.isInIframe && setTimeout(function n() {
//           if (t.isNativeFullScreen) {
//             var i = e(window).width(),
//               r = screen.width;
//             Math.abs(r - i) > .002 * r ? t.exitFullScreen() : setTimeout(n, 500)
//           }
//         }, 1e3)) : t.fullscreeMode, t.container.addClass("mejs-container-fullscreen").width("100%").height("100%"), t.containerSizeTimeout = setTimeout(function () {
//           t.container.css({
//             width: "100%",
//             height: "100%"
//           }), t.setControlsSize()
//         }, 500), "native" === t.media.pluginType ? t.$media.width("100%").height("100%") : (t.container.find(".mejs-shim").width("100%").height("100%"), setTimeout(function () {
//           var n = e(window),
//             i = n.width(),
//             r = n.height();
//           t.media.setVideoSize(i, r)
//         }, 500)), t.layers.children("div").width("100%").height("100%"), t.fullscreenBtn && t.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"), t.setControlsSize(), t.isFullScreen = !0, t.container.find(".mejs-captions-text").css("font-size", screen.width / t.width * 1 * 100 + "%"), t.container.find(".mejs-captions-position").css("bottom", "45px"), void t.container.trigger("enteredfullscreen"))
//       },
//       exitFullScreen: function () {
//         var t = this;
//         clearTimeout(t.containerSizeTimeout), mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || t.isFullScreen) && mejs.MediaFeatures.cancelFullScreen(), e(document.documentElement).removeClass("mejs-fullscreen"), t.container.removeClass("mejs-container-fullscreen").width(t.normalWidth).height(t.normalHeight), "native" === t.media.pluginType ? t.$media.width(t.normalWidth).height(t.normalHeight) : (t.container.find(".mejs-shim").width(t.normalWidth).height(t.normalHeight), t.media.setVideoSize(t.normalWidth, t.normalHeight)), t.layers.children("div").width(t.normalWidth).height(t.normalHeight), t.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"), t.setControlsSize(), t.isFullScreen = !1, t.container.find(".mejs-captions-text").css("font-size", ""), t.container.find(".mejs-captions-position").css("bottom", ""), t.container.trigger("exitedfullscreen")
//       }
//     })
//   }(mejs.$),
//   function (e) {
//     e.extend(mejs.MepDefaults, {
//       speeds: ["2.00", "1.50", "1.25", "1.00", "0.75"],
//       defaultSpeed: "1.00",
//       speedChar: "x"
//     }), e.extend(MediaElementPlayer.prototype, {
//       buildspeed: function (t, n, i, r) {
//         var o = this;
//         if ("native" == o.media.pluginType) {
//           for (var s = null, a = null, l = null, u = null, c = [], d = !1, f = 0, h = o.options.speeds.length; h > f; f++) {
//             var p = o.options.speeds[f];
//             "string" == typeof p ? (c.push({
//               name: p + o.options.speedChar,
//               value: p
//             }), p === o.options.defaultSpeed && (d = !0)) : (c.push(p), p.value === o.options.defaultSpeed && (d = !0))
//           }
//           d || c.push({
//             name: o.options.defaultSpeed + o.options.speedChar,
//             value: o.options.defaultSpeed
//           }), c.sort(function (e, t) {
//             return parseFloat(t.value) - parseFloat(e.value)
//           });
//           var m = function (e) {
//             for (f = 0, h = c.length; h > f; f++)
//               if (c[f].value === e) return c[f].name
//           },
//             g = '<div class="mejs-button mejs-speed-button"><button type="button">' + m(o.options.defaultSpeed) + '</button><div class="mejs-speed-selector"><ul>';
//           for (f = 0, il = c.length; f < il; f++) u = o.id + "-speed-" + c[f].value, g += '<li><input type="radio" name="speed" value="' + c[f].value + '" id="' + u + '" ' + (c[f].value === o.options.defaultSpeed ? " checked" : "") + ' /><label for="' + u + '" ' + (c[f].value === o.options.defaultSpeed ? ' class="mejs-speed-selected"' : "") + ">" + c[f].name + "</label></li>";
//           s = e(g += "</ul></div></div>").appendTo(n), a = s.find(".mejs-speed-selector"), l = o.options.defaultSpeed, r.addEventListener("loadedmetadata", function (e) {
//             l && (r.playbackRate = parseFloat(l))
//           }, !0), a.on("click", 'input[type="radio"]', function () {
//             var t = e(this).attr("value");
//             l = t, r.playbackRate = parseFloat(t), s.find("button").html(m(t)), s.find(".mejs-speed-selected").removeClass("mejs-speed-selected"), s.find('input[type="radio"]:checked').next().addClass("mejs-speed-selected")
//           }), s.one("mouseenter focusin", function () {
//             a.height(s.find(".mejs-speed-selector ul").outerHeight(!0) + s.find(".mejs-speed-translations").outerHeight(!0)).css("top", -1 * a.height() + "px")
//           })
//         }
//       }
//     })
//   }(mejs.$),
//   function (e) {
//     e.extend(mejs.MepDefaults, {
//       startLanguage: "",
//       tracksText: mejs.i18n.t("Captions/Subtitles"),
//       tracksAriaLive: !1,
//       hideCaptionsButtonWhenEmpty: !0,
//       toggleCaptionsButtonWhenOnlyOne: !1,
//       slidesSelector: ""
//     }), e.extend(MediaElementPlayer.prototype, {
//       hasChapters: !1,
//       cleartracks: function (e, t, n, i) {
//         e && (e.captions && e.captions.remove(), e.chapters && e.chapters.remove(), e.captionsText && e.captionsText.remove(), e.captionsButton && e.captionsButton.remove())
//       },
//       buildtracks: function (t, n, i, r) {
//         if (0 !== t.tracks.length) {
//           var o, s = this,
//             a = s.options.tracksAriaLive ? 'role="log" aria-live="assertive" aria-atomic="false"' : "";
//           if (s.domNode.textTracks)
//             for (o = s.domNode.textTracks.length - 1; o >= 0; o--) s.domNode.textTracks[o].mode = "hidden";
//           s.cleartracks(t, n, i, r), t.chapters = e('<div class="mejs-chapters mejs-layer"></div>').prependTo(i).hide(), t.captions = e('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" ' + a + '><span class="mejs-captions-text"></span></div></div>').prependTo(i).hide(), t.captionsText = t.captions.find(".mejs-captions-text"), t.captionsButton = e('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + s.id + '" title="' + s.options.tracksText + '" aria-label="' + s.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + t.id + '_captions" id="' + t.id + '_captions_none" value="none" checked="checked" /><label for="' + t.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(n);
//           var l = 0;
//           for (o = 0; o < t.tracks.length; o++) "subtitles" == t.tracks[o].kind && l++;
//           for (s.options.toggleCaptionsButtonWhenOnlyOne && 1 == l ? t.captionsButton.on("click", function () {
//             null === t.selectedTrack ? lang = t.tracks[0].srclang : lang = "none", t.setTrack(lang)
//           }) : (t.captionsButton.on("mouseenter focusin", function () {
//             e(this).find(".mejs-captions-selector").removeClass("mejs-offscreen")
//           }).on("click", "input[type=radio]", function () {
//             lang = this.value, t.setTrack(lang)
//           }), t.captionsButton.on("mouseleave focusout", function () {
//             e(this).find(".mejs-captions-selector").addClass("mejs-offscreen")
//           })), t.options.alwaysShowControls ? t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : t.container.bind("controlsshown", function () {
//             t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
//           }).bind("controlshidden", function () {
//             r.paused || t.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
//           }), t.trackToLoad = -1, t.selectedTrack = null, t.isLoadingTrack = !1, o = 0; o < t.tracks.length; o++) "subtitles" == t.tracks[o].kind && t.addTrackButton(t.tracks[o].srclang, t.tracks[o].label);
//           t.loadNextTrack(), r.addEventListener("timeupdate", function (e) {
//             t.displayCaptions()
//           }, !1), "" !== t.options.slidesSelector && (t.slidesContainer = e(t.options.slidesSelector), r.addEventListener("timeupdate", function (e) {
//             t.displaySlides()
//           }, !1)), r.addEventListener("loadedmetadata", function (e) {
//             t.displayChapters()
//           }, !1), t.container.hover(function () {
//             t.hasChapters && (t.chapters.removeClass("mejs-offscreen"), t.chapters.fadeIn(200).height(t.chapters.find(".mejs-chapter").outerHeight()))
//           }, function () {
//             t.hasChapters && !r.paused && t.chapters.fadeOut(200, function () {
//               e(this).addClass("mejs-offscreen"), e(this).css("display", "block")
//             })
//           }), s.container.on("controlsresize", function () {
//             s.adjustLanguageBox()
//           }), null !== t.node.getAttribute("autoplay") && t.chapters.addClass("mejs-offscreen")
//         }
//       },
//       setTrack: function (e) {
//         var t, n = this;
//         if ("none" == e) n.selectedTrack = null, n.captionsButton.removeClass("mejs-captions-enabled");
//         else
//           for (t = 0; t < n.tracks.length; t++)
//             if (n.tracks[t].srclang == e) {
//               null === n.selectedTrack && n.captionsButton.addClass("mejs-captions-enabled"), n.selectedTrack = n.tracks[t], n.captions.attr("lang", n.selectedTrack.srclang), n.displayCaptions();
//               break
//             }
//       },
//       loadNextTrack: function () {
//         var e = this;
//         e.trackToLoad++ , e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0, e.loadTrack(e.trackToLoad)) : (e.isLoadingTrack = !1, e.checkForTracks())
//       },
//       loadTrack: function (t) {
//         var n = this,
//           i = n.tracks[t],
//           r = function () {
//             i.isLoaded = !0, n.enableTrackButton(i.srclang, i.label), n.loadNextTrack()
//           };
//         e.ajax({
//           url: i.src,
//           dataType: "text",
//           success: function (e) {
//             "string" == typeof e && /<tt\s+xml/gi.exec(e) ? i.entries = mejs.TrackFormatParser.dfxp.parse(e) : i.entries = mejs.TrackFormatParser.webvtt.parse(e), r(), "chapters" == i.kind && n.media.addEventListener("play", function (e) {
//               n.media.duration > 0 && n.displayChapters(i)
//             }, !1), "slides" == i.kind && n.setupSlides(i)
//           },
//           error: function () {
//             n.removeTrackButton(i.srclang), n.loadNextTrack()
//           }
//         })
//       },
//       enableTrackButton: function (t, n) {
//         var i = this;
//         "" === n && (n = mejs.language.codes[t] || t), i.captionsButton.find("input[value=" + t + "]").prop("disabled", !1).siblings("label").html(n), i.options.startLanguage == t && e("#" + i.id + "_captions_" + t).prop("checked", !0).trigger("click"), i.adjustLanguageBox()
//       },
//       removeTrackButton: function (e) {
//         var t = this;
//         t.captionsButton.find("input[value=" + e + "]").closest("li").remove(), t.adjustLanguageBox()
//       },
//       addTrackButton: function (t, n) {
//         var i = this;
//         "" === n && (n = mejs.language.codes[t] || t), i.captionsButton.find("ul").append(e('<li><input type="radio" name="' + i.id + '_captions" id="' + i.id + "_captions_" + t + '" value="' + t + '" disabled="disabled" /><label for="' + i.id + "_captions_" + t + '">' + n + " (loading)</label></li>")), i.adjustLanguageBox(), i.container.find(".mejs-captions-translations option[value=" + t + "]").remove()
//       },
//       adjustLanguageBox: function () {
//         var e = this;
//         e.captionsButton.find(".mejs-captions-selector").height(e.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + e.captionsButton.find(".mejs-captions-translations").outerHeight(!0))
//       },
//       checkForTracks: function () {
//         var e = this,
//           t = !1;
//         if (e.options.hideCaptionsButtonWhenEmpty) {
//           for (i = 0; i < e.tracks.length; i++)
//             if ("subtitles" == e.tracks[i].kind && e.tracks[i].isLoaded) {
//               t = !0;
//               break
//             }
//           t || (e.captionsButton.hide(), e.setControlsSize())
//         }
//       },
//       displayCaptions: function () {
//         if (void 0 !== this.tracks) {
//           var e, t = this,
//             n = t.selectedTrack;
//           if (null !== n && n.isLoaded) {
//             for (e = 0; e < n.entries.times.length; e++)
//               if (t.media.currentTime >= n.entries.times[e].start && t.media.currentTime <= n.entries.times[e].stop) return t.captionsText.html(n.entries.text[e]).attr("class", "mejs-captions-text " + (n.entries.times[e].identifier || "")), void t.captions.show().height(0);
//             t.captions.hide()
//           } else t.captions.hide()
//         }
//       },
//       setupSlides: function (e) {
//         var t = this;
//         t.slides = e, t.slides.entries.imgs = [t.slides.entries.text.length], t.showSlide(0)
//       },
//       showSlide: function (t) {
//         if (void 0 !== this.tracks && void 0 !== this.slidesContainer) {
//           var n = this,
//             i = n.slides.entries.text[t],
//             r = n.slides.entries.imgs[t];
//           void 0 === r || void 0 === r.fadeIn ? n.slides.entries.imgs[t] = r = e('<img src="' + i + '">').on("load", function () {
//             r.appendTo(n.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
//           }) : r.is(":visible") || r.is(":animated") || r.fadeIn().siblings(":visible").fadeOut()
//         }
//       },
//       displaySlides: function () {
//         if (void 0 !== this.slides) {
//           var e, t = this,
//             n = t.slides;
//           for (e = 0; e < n.entries.times.length; e++)
//             if (t.media.currentTime >= n.entries.times[e].start && t.media.currentTime <= n.entries.times[e].stop) return void t.showSlide(e)
//         }
//       },
//       displayChapters: function () {
//         var e, t = this;
//         for (e = 0; e < t.tracks.length; e++)
//           if ("chapters" == t.tracks[e].kind && t.tracks[e].isLoaded) {
//             t.drawChapters(t.tracks[e]), t.hasChapters = !0;
//             break
//           }
//       },
//       drawChapters: function (t) {
//         var n, i, r = this,
//           o = 0,
//           s = 0;
//         for (r.chapters.empty(), n = 0; n < t.entries.times.length; n++) i = t.entries.times[n].stop - t.entries.times[n].start, ((o = Math.floor(i / r.media.duration * 100)) + s > 100 || n == t.entries.times.length - 1 && 100 > o + s) && (o = 100 - s), r.chapters.append(e('<div class="mejs-chapter" rel="' + t.entries.times[n].start + '" style="left: ' + s.toString() + "%;width: " + o.toString() + '%;"><div class="mejs-chapter-block' + (n == t.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + t.entries.text[n] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(t.entries.times[n].start, r.options) + "&ndash;" + mejs.Utility.secondsToTimeCode(t.entries.times[n].stop, r.options) + "</span></div></div>")), s += o;
//         r.chapters.find("div.mejs-chapter").click(function () {
//           r.media.setCurrentTime(parseFloat(e(this).attr("rel"))), r.media.paused && r.media.play()
//         }), r.chapters.show()
//       }
//     }), mejs.language = {
//       codes: {
//         af: "Afrikaans",
//         sq: "Albanian",
//         ar: "Arabic",
//         be: "Belarusian",
//         bg: "Bulgarian",
//         ca: "Catalan",
//         zh: "Chinese",
//         "zh-cn": "Chinese Simplified",
//         "zh-tw": "Chinese Traditional",
//         hr: "Croatian",
//         cs: "Czech",
//         da: "Danish",
//         nl: "Dutch",
//         en: "English",
//         et: "Estonian",
//         fl: "Filipino",
//         fi: "Finnish",
//         fr: "French",
//         gl: "Galician",
//         de: "German",
//         el: "Greek",
//         ht: "Haitian Creole",
//         iw: "Hebrew",
//         hi: "Hindi",
//         hu: "Hungarian",
//         is: "Icelandic",
//         id: "Indonesian",
//         ga: "Irish",
//         it: "Italian",
//         ja: "Japanese",
//         ko: "Korean",
//         lv: "Latvian",
//         lt: "Lithuanian",
//         mk: "Macedonian",
//         ms: "Malay",
//         mt: "Maltese",
//         no: "Norwegian",
//         fa: "Persian",
//         pl: "Polish",
//         pt: "Portuguese",
//         ro: "Romanian",
//         ru: "Russian",
//         sr: "Serbian",
//         sk: "Slovak",
//         sl: "Slovenian",
//         es: "Spanish",
//         sw: "Swahili",
//         sv: "Swedish",
//         tl: "Tagalog",
//         th: "Thai",
//         tr: "Turkish",
//         uk: "Ukrainian",
//         vi: "Vietnamese",
//         cy: "Welsh",
//         yi: "Yiddish"
//       }
//     }, mejs.TrackFormatParser = {
//       webvtt: {
//         pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
//         parse: function (t) {
//           for (var n, i, r, o = 0, s = mejs.TrackFormatParser.split2(t, /\r?\n/), a = {
//             text: [],
//             times: []
//           }; o < s.length; o++) {
//             if ((n = this.pattern_timecode.exec(s[o])) && o < s.length) {
//               for (o - 1 >= 0 && "" !== s[o - 1] && (r = s[o - 1]), i = s[++o], o++;
//                 "" !== s[o] && o < s.length;) i = i + "\n" + s[o], o++;
//               i = e.trim(i).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), a.text.push(i), a.times.push({
//                 identifier: r,
//                 start: 0 === mejs.Utility.convertSMPTEtoSeconds(n[1]) ? .2 : mejs.Utility.convertSMPTEtoSeconds(n[1]),
//                 stop: mejs.Utility.convertSMPTEtoSeconds(n[3]),
//                 settings: n[5]
//               })
//             }
//             r = ""
//           }
//           return a
//         }
//       },
//       dfxp: {
//         parse: function (t) {
//           var n, i, r = 0,
//             o = (t = e(t).filter("tt")).children("div").eq(0),
//             s = o.find("p"),
//             a = t.find("#" + o.attr("style")),
//             l = {
//               text: [],
//               times: []
//             };
//           if (a.length) {
//             var u = a.removeAttr("id").get(0).attributes;
//             if (u.length)
//               for (n = {}, r = 0; r < u.length; r++) n[u[r].name.split(":")[1]] = u[r].value
//           }
//           for (r = 0; r < s.length; r++) {
//             var c, d = {
//               start: null,
//               stop: null,
//               style: null
//             };
//             if (s.eq(r).attr("begin") && (d.start = mejs.Utility.convertSMPTEtoSeconds(s.eq(r).attr("begin"))), !d.start && s.eq(r - 1).attr("end") && (d.start = mejs.Utility.convertSMPTEtoSeconds(s.eq(r - 1).attr("end"))), s.eq(r).attr("end") && (d.stop = mejs.Utility.convertSMPTEtoSeconds(s.eq(r).attr("end"))), !d.stop && s.eq(r + 1).attr("begin") && (d.stop = mejs.Utility.convertSMPTEtoSeconds(s.eq(r + 1).attr("begin"))), n) {
//               c = "";
//               for (var f in n) c += f + ":" + n[f] + ";"
//             }
//             c && (d.style = c), 0 === d.start && (d.start = .2), l.times.push(d), i = e.trim(s.eq(r).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), l.text.push(i), 0 === l.times.start && (l.times.start = 2)
//           }
//           return l
//         }
//       },
//       split2: function (e, t) {
//         return e.split(t)
//       }
//     }, 3 != "x\n\ny".split(/\n/gi).length && (mejs.TrackFormatParser.split2 = function (e, t) {
//       var n, i = [],
//         r = "";
//       for (n = 0; n < e.length; n++) r += e.substring(n, n + 1), t.test(r) && (i.push(r.replace(t, "")), r = "");
//       return i.push(r), i
//     })
//   }(mejs.$),
//   function (e) {
//     e.extend(mejs.MepDefaults, {
//       contextMenuItems: [{
//         render: function (e) {
//           return void 0 === e.enterFullScreen ? null : e.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
//         },
//         click: function (e) {
//           e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen()
//         }
//       }, {
//         render: function (e) {
//           return e.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
//         },
//         click: function (e) {
//           e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
//         }
//       }, {
//         isSeparator: !0
//       }, {
//         render: function (e) {
//           return mejs.i18n.t("Download Video")
//         },
//         click: function (e) {
//           window.location.href = e.media.currentSrc
//         }
//       }]
//     }), e.extend(MediaElementPlayer.prototype, {
//       buildcontextmenu: function (t, n, i, r) {
//         t.contextMenu = e('<div class="mejs-contextmenu"></div>').appendTo(e("body")).hide(), t.container.bind("contextmenu", function (e) {
//           return t.isContextMenuEnabled ? (e.preventDefault(), t.renderContextMenu(e.clientX - 1, e.clientY - 1), !1) : void 0
//         }), t.container.bind("click", function () {
//           t.contextMenu.hide()
//         }), t.contextMenu.bind("mouseleave", function () {
//           t.startContextMenuTimer()
//         })
//       },
//       cleancontextmenu: function (e) {
//         e.contextMenu.remove()
//       },
//       isContextMenuEnabled: !0,
//       enableContextMenu: function () {
//         this.isContextMenuEnabled = !0
//       },
//       disableContextMenu: function () {
//         this.isContextMenuEnabled = !1
//       },
//       contextMenuTimeout: null,
//       startContextMenuTimer: function () {
//         var e = this;
//         e.killContextMenuTimer(), e.contextMenuTimer = setTimeout(function () {
//           e.hideContextMenu(), e.killContextMenuTimer()
//         }, 750)
//       },
//       killContextMenuTimer: function () {
//         var e = this.contextMenuTimer;
//         null != e && (clearTimeout(e), delete e, e = null)
//       },
//       hideContextMenu: function () {
//         this.contextMenu.hide()
//       },
//       renderContextMenu: function (t, n) {
//         for (var i = this, r = "", o = i.options.contextMenuItems, s = 0, a = o.length; a > s; s++)
//           if (o[s].isSeparator) r += '<div class="mejs-contextmenu-separator"></div>';
//           else {
//             var l = o[s].render(i);
//             null != l && (r += '<div class="mejs-contextmenu-item" data-itemindex="' + s + '" id="element-' + 1e6 * Math.random() + '">' + l + "</div>")
//           }
//         i.contextMenu.empty().append(e(r)).css({
//           top: n,
//           left: t
//         }).show(), i.contextMenu.find(".mejs-contextmenu-item").each(function () {
//           var t = e(this),
//             n = parseInt(t.data("itemindex"), 10),
//             r = i.options.contextMenuItems[n];
//           void 0 !== r.show && r.show(t, i), t.click(function () {
//             void 0 !== r.click && r.click(i), i.contextMenu.hide()
//           })
//         }), setTimeout(function () {
//           i.killControlsTimer("rev3")
//         }, 100)
//       }
//     })
//   }(mejs.$),
//   function (e) {
//     e.extend(mejs.MepDefaults, {
//       skipBackInterval: 30,
//       skipBackText: mejs.i18n.t("Skip back %1 seconds")
//     }), e.extend(MediaElementPlayer.prototype, {
//       buildskipback: function (t, n, i, r) {
//         var o = this,
//           s = o.options.skipBackText.replace("%1", o.options.skipBackInterval);
//         e('<div class="mejs-button mejs-skip-back-button"><button type="button" aria-controls="' + o.id + '" title="' + s + '" aria-label="' + s + '">' + o.options.skipBackInterval + "</button></div>").appendTo(n).click(function () {
//           r.setCurrentTime(Math.max(r.currentTime - o.options.skipBackInterval, 0)), e(this).find("button").blur()
//         })
//       }
//     })
//   }(mejs.$),
//   function (e) {
//     e.extend(mejs.MepDefaults, {
//       postrollCloseText: mejs.i18n.t("Close")
//     }), e.extend(MediaElementPlayer.prototype, {
//       buildpostroll: function (t, n, i, r) {
//         var o = this,
//           s = o.container.find('link[rel="postroll"]').attr("href");
//         void 0 !== s && (t.postroll = e('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + o.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(i).hide(), o.media.addEventListener("ended", function (n) {
//           e.ajax({
//             dataType: "html",
//             url: s,
//             success: function (e, t) {
//               i.find(".mejs-postroll-layer-content").html(e)
//             }
//           }), t.postroll.show()
//         }, !1))
//       }
//     })
//   }(mejs.$),
//   function (e) {
//     e.extend(MediaElementPlayer.prototype, {
//       buildmototrackname: function (t, n) {
//         var i, r;
//         r = e(n).find(".mejs-time"), (i = e('<div class="mejs-moto-track-name" style="margin-right:' + (r.width() + parseInt(r.css("right").slice(0, -2))) + 'px">' + t.options.motoTrackName + "</div>")).attr("title", i.text()), i.appendTo(e(n).find(".mejs-time-rail"))
//       },
//       buildmotoloop: function (t, n) {
//         var i;
//         i = e('<div class="mejs-button mejs-moto-loop-button' + (t.options.loop ? " mejs-button_active" : "") + '"><button></button></div>').appendTo(n).click(function () {
//           t.options.loop = !t.options.loop, i.toggleClass("mejs-button_active")
//         })
//       },
//       buildmotoskin: function (t, n, i, r) {
//         function o() {
//           var e, t = 2;
//           u.attr("title", ""), e = setInterval(function () {
//             t-- , u.attr("title", ""), t <= 0 && clearInterval(e)
//           }, 500)
//         }
//         var s, a, l, u;
//         l = e(n), s = l.find(".mejs-stop"), a = l.find(".mejs-playpause-button"), s.on("click", function () {
//           s.toggleClass("mejs-button_active")
//         }), a.on("click", function () {
//           s.removeClass("mejs-button_active")
//         }), l.find(".mejs-volume-button").append(l.find(".mejs-horizontal-volume-slider")), l.find(".mejs-time-rail").append(l.find(".mejs-time")), u = l.find(".mejs-volume-button button").attr("title", ""), l.append(e('<div class="mejs-button mejs-moto-last-hidden-button"></div>')), l.closest(".moto-widget-audio_player").on("animationend", function () {
//           var e, n = 2;
//           t.setPlayerSize(), t.setControlsSize(), e = setInterval(function () {
//             n-- , t.setPlayerSize(), t.setControlsSize(), n <= 0 && clearInterval(e)
//           }, 500)
//         }), u.on("mousemove", o), r.addEventListener("volumechange", o)
//       }
//     })
//   }($),
//   function () {
//     function e(e) {
//       var n = function (e, r) {
//         return t(e, i({}, n, r || {}))
//       };
//       return i(n, {
//         language: "en",
//         delimiter: ", ",
//         spacer: " ",
//         conjunction: "",
//         serialComma: !0,
//         units: ["y", "mo", "w", "d", "h", "m", "s"],
//         languages: {},
//         round: !1,
//         unitMeasures: {
//           y: 315576e5,
//           mo: 26298e5,
//           w: 6048e5,
//           d: 864e5,
//           h: 36e5,
//           m: 6e4,
//           s: 1e3,
//           ms: 1
//         }
//       }, e)
//     }

//     function t(e, t) {
//       var i, r, o;
//       e = Math.abs(e);
//       var s = t.languages[t.language] || l[t.language];
//       if (!s) throw new Error("No language " + s + ".");
//       var a, u, c, d = [];
//       for (i = 0, r = t.units.length; i < r; i++) a = t.units[i], u = t.unitMeasures[a], c = i + 1 === r ? e / u : Math.floor(e / u), d.push({
//         unitCount: c,
//         unitName: a
//       }), e -= c * u;
//       var f = 0;
//       for (i = 0; i < d.length; i++)
//         if (d[i].unitCount) {
//           f = i;
//           break
//         }
//       if (t.round) {
//         var h, p;
//         for (i = d.length - 1; i >= 0 && (o = d[i], o.unitCount = Math.round(o.unitCount), 0 !== i); i--) p = d[i - 1], h = t.unitMeasures[p.unitName] / t.unitMeasures[o.unitName], (o.unitCount % h == 0 || t.largest && t.largest - 1 < i - f) && (p.unitCount += o.unitCount / h, o.unitCount = 0)
//       }
//       var m = [];
//       for (i = 0, d.length; i < r && ((o = d[i]).unitCount && m.push(n(o.unitCount, o.unitName, s, t)), m.length !== t.largest); i++);
//       return m.length ? t.conjunction && 1 !== m.length ? 2 === m.length ? m.join(t.conjunction) : m.length > 2 ? m.slice(0, -1).join(t.delimiter) + (t.serialComma ? "," : "") + t.conjunction + m.slice(-1) : void 0 : m.join(t.delimiter) : n(0, t.units[t.units.length - 1], s, t)
//     }

//     function n(e, t, n, i) {
//       var r;
//       r = void 0 === i.decimal ? n.decimal : i.decimal;
//       var o, s = e.toString().replace(".", r),
//         a = n[t];
//       return o = "function" == typeof a ? a(e) : a, s + i.spacer + o
//     }

//     function i(e) {
//       for (var t, n = 1; n < arguments.length; n++) {
//         t = arguments[n];
//         for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
//       }
//       return e
//     }

//     function r(e) {
//       return 1 === e ? 0 : Math.floor(e) !== e ? 1 : e % 10 >= 2 && e % 10 <= 4 && e % 100 < 10 ? 2 : 3
//     }

//     function o(e) {
//       return 1 === e ? 0 : Math.floor(e) !== e ? 1 : e % 10 >= 2 && e % 10 <= 4 && !(e % 100 > 10 && e % 100 < 20) ? 2 : 3
//     }

//     function s(e) {
//       return Math.floor(e) !== e ? 2 : e % 100 >= 5 && e % 100 <= 20 || e % 10 >= 5 && e % 10 <= 9 || e % 10 == 0 ? 0 : e % 10 == 1 ? 1 : e > 1 ? 2 : 0
//     }

//     function a(e) {
//       return 1 === e || e % 10 == 1 && e % 100 > 20 ? 0 : Math.floor(e) !== e || e % 10 >= 2 && e % 100 > 20 || e % 10 >= 2 && e % 100 < 10 ? 1 : 2
//     }
//     var l = {
//       ar: {
//         y: function (e) {
//           return 1 === e ? "سنة" : "سنوات"
//         },
//         mo: function (e) {
//           return 1 === e ? "شهر" : "أشهر"
//         },
//         w: function (e) {
//           return 1 === e ? "أسبوع" : "أسابيع"
//         },
//         d: function (e) {
//           return 1 === e ? "يوم" : "أيام"
//         },
//         h: function (e) {
//           return 1 === e ? "ساعة" : "ساعات"
//         },
//         m: function (e) {
//           return 1 === e ? "دقيقة" : "دقائق"
//         },
//         s: function (e) {
//           return 1 === e ? "ثانية" : "ثواني"
//         },
//         ms: function (e) {
//           return 1 === e ? "جزء من الثانية" : "أجزاء من الثانية"
//         },
//         decimal: ","
//       },
//       ca: {
//         y: function (e) {
//           return "any" + (1 !== e ? "s" : "")
//         },
//         mo: function (e) {
//           return "mes" + (1 !== e ? "os" : "")
//         },
//         w: function (e) {
//           return "setman" + (1 !== e ? "es" : "a")
//         },
//         d: function (e) {
//           return "di" + (1 !== e ? "es" : "a")
//         },
//         h: function (e) {
//           return "hor" + (1 !== e ? "es" : "a")
//         },
//         m: function (e) {
//           return "minut" + (1 !== e ? "s" : "")
//         },
//         s: function (e) {
//           return "segon" + (1 !== e ? "s" : "")
//         },
//         ms: function (e) {
//           return "milisegon" + (1 !== e ? "s" : "")
//         },
//         decimal: ","
//       },
//       cs: {
//         y: function (e) {
//           return ["rok", "roku", "roky", "let"][r(e)]
//         },
//         mo: function (e) {
//           return ["měsíc", "měsíce", "měsíce", "měsíců"][r(e)]
//         },
//         w: function (e) {
//           return ["týden", "týdne", "týdny", "týdnů"][r(e)]
//         },
//         d: function (e) {
//           return ["den", "dne", "dny", "dní"][r(e)]
//         },
//         h: function (e) {
//           return ["hodina", "hodiny", "hodiny", "hodin"][r(e)]
//         },
//         m: function (e) {
//           return ["minuta", "minuty", "minuty", "minut"][r(e)]
//         },
//         s: function (e) {
//           return ["sekunda", "sekundy", "sekundy", "sekund"][r(e)]
//         },
//         ms: function (e) {
//           return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][r(e)]
//         },
//         decimal: ","
//       },
//       da: {
//         y: "år",
//         mo: function (e) {
//           return "måned" + (1 !== e ? "er" : "")
//         },
//         w: function (e) {
//           return "uge" + (1 !== e ? "r" : "")
//         },
//         d: function (e) {
//           return "dag" + (1 !== e ? "e" : "")
//         },
//         h: function (e) {
//           return "time" + (1 !== e ? "r" : "")
//         },
//         m: function (e) {
//           return "minut" + (1 !== e ? "ter" : "")
//         },
//         s: function (e) {
//           return "sekund" + (1 !== e ? "er" : "")
//         },
//         ms: function (e) {
//           return "millisekund" + (1 !== e ? "er" : "")
//         },
//         decimal: ","
//       },
//       de: {
//         y: function (e) {
//           return "Jahr" + (1 !== e ? "e" : "")
//         },
//         mo: function (e) {
//           return "Monat" + (1 !== e ? "e" : "")
//         },
//         w: function (e) {
//           return "Woche" + (1 !== e ? "n" : "")
//         },
//         d: function (e) {
//           return "Tag" + (1 !== e ? "e" : "")
//         },
//         h: function (e) {
//           return "Stunde" + (1 !== e ? "n" : "")
//         },
//         m: function (e) {
//           return "Minute" + (1 !== e ? "n" : "")
//         },
//         s: function (e) {
//           return "Sekunde" + (1 !== e ? "n" : "")
//         },
//         ms: function (e) {
//           return "Millisekunde" + (1 !== e ? "n" : "")
//         },
//         decimal: ","
//       },
//       en: {
//         y: function (e) {
//           return "year" + (1 !== e ? "s" : "")
//         },
//         mo: function (e) {
//           return "month" + (1 !== e ? "s" : "")
//         },
//         w: function (e) {
//           return "week" + (1 !== e ? "s" : "")
//         },
//         d: function (e) {
//           return "day" + (1 !== e ? "s" : "")
//         },
//         h: function (e) {
//           return "hour" + (1 !== e ? "s" : "")
//         },
//         m: function (e) {
//           return "minute" + (1 !== e ? "s" : "")
//         },
//         s: function (e) {
//           return "second" + (1 !== e ? "s" : "")
//         },
//         ms: function (e) {
//           return "millisecond" + (1 !== e ? "s" : "")
//         },
//         decimal: "."
//       },
//       es: {
//         y: function (e) {
//           return "año" + (1 !== e ? "s" : "")
//         },
//         mo: function (e) {
//           return "mes" + (1 !== e ? "es" : "")
//         },
//         w: function (e) {
//           return "semana" + (1 !== e ? "s" : "")
//         },
//         d: function (e) {
//           return "día" + (1 !== e ? "s" : "")
//         },
//         h: function (e) {
//           return "hora" + (1 !== e ? "s" : "")
//         },
//         m: function (e) {
//           return "minuto" + (1 !== e ? "s" : "")
//         },
//         s: function (e) {
//           return "segundo" + (1 !== e ? "s" : "")
//         },
//         ms: function (e) {
//           return "milisegundo" + (1 !== e ? "s" : "")
//         },
//         decimal: ","
//       },
//       fi: {
//         y: function (e) {
//           return 1 === e ? "vuosi" : "vuotta"
//         },
//         mo: function (e) {
//           return 1 === e ? "kuukausi" : "kuukautta"
//         },
//         w: function (e) {
//           return "viikko" + (1 !== e ? "a" : "")
//         },
//         d: function (e) {
//           return "päivä" + (1 !== e ? "ä" : "")
//         },
//         h: function (e) {
//           return "tunti" + (1 !== e ? "a" : "")
//         },
//         m: function (e) {
//           return "minuutti" + (1 !== e ? "a" : "")
//         },
//         s: function (e) {
//           return "sekunti" + (1 !== e ? "a" : "")
//         },
//         ms: function (e) {
//           return "millisekunti" + (1 !== e ? "a" : "")
//         },
//         decimal: ","
//       },
//       fr: {
//         y: function (e) {
//           return "an" + (1 !== e ? "s" : "")
//         },
//         mo: "mois",
//         w: function (e) {
//           return "semaine" + (1 !== e ? "s" : "")
//         },
//         d: function (e) {
//           return "jour" + (1 !== e ? "s" : "")
//         },
//         h: function (e) {
//           return "heure" + (1 !== e ? "s" : "")
//         },
//         m: function (e) {
//           return "minute" + (1 !== e ? "s" : "")
//         },
//         s: function (e) {
//           return "seconde" + (1 !== e ? "s" : "")
//         },
//         ms: function (e) {
//           return "milliseconde" + (1 !== e ? "s" : "")
//         },
//         decimal: ","
//       },
//       gr: {
//         y: function (e) {
//           return 1 === e ? "χρόνος" : "χρόνια"
//         },
//         mo: function (e) {
//           return 1 === e ? "μήνας" : "μήνες"
//         },
//         w: function (e) {
//           return 1 === e ? "εβδομάδα" : "εβδομάδες"
//         },
//         d: function (e) {
//           return 1 === e ? "μέρα" : "μέρες"
//         },
//         h: function (e) {
//           return 1 === e ? "ώρα" : "ώρες"
//         },
//         m: function (e) {
//           return 1 === e ? "λεπτό" : "λεπτά"
//         },
//         s: function (e) {
//           return 1 === e ? "δευτερόλεπτο" : "δευτερόλεπτα"
//         },
//         ms: function (e) {
//           return 1 === e ? "χιλιοστό του δευτερολέπτου" : "χιλιοστά του δευτερολέπτου"
//         },
//         decimal: ","
//       },
//       hu: {
//         y: "év",
//         mo: "hónap",
//         w: "hét",
//         d: "nap",
//         h: "óra",
//         m: "perc",
//         s: "másodperc",
//         ms: "ezredmásodperc",
//         decimal: ","
//       },
//       id: {
//         y: "tahun",
//         mo: "bulan",
//         w: "minggu",
//         d: "hari",
//         h: "jam",
//         m: "menit",
//         s: "detik",
//         ms: "milidetik",
//         decimal: "."
//       },
//       it: {
//         y: function (e) {
//           return "ann" + (1 !== e ? "i" : "o")
//         },
//         mo: function (e) {
//           return "mes" + (1 !== e ? "i" : "e")
//         },
//         w: function (e) {
//           return "settiman" + (1 !== e ? "e" : "a")
//         },
//         d: function (e) {
//           return "giorn" + (1 !== e ? "i" : "o")
//         },
//         h: function (e) {
//           return "or" + (1 !== e ? "e" : "a")
//         },
//         m: function (e) {
//           return "minut" + (1 !== e ? "i" : "o")
//         },
//         s: function (e) {
//           return "second" + (1 !== e ? "i" : "o")
//         },
//         ms: function (e) {
//           return "millisecond" + (1 !== e ? "i" : "o")
//         },
//         decimal: ","
//       },
//       ja: {
//         y: "年",
//         mo: "月",
//         w: "週",
//         d: "日",
//         h: "時間",
//         m: "分",
//         s: "秒",
//         ms: "ミリ秒",
//         decimal: "."
//       },
//       ko: {
//         y: "년",
//         mo: "개월",
//         w: "주일",
//         d: "일",
//         h: "시간",
//         m: "분",
//         s: "초",
//         ms: "밀리 초",
//         decimal: "."
//       },
//       lt: {
//         y: function (e) {
//           return e % 10 == 0 || e % 100 >= 10 && e % 100 <= 20 ? "metų" : "metai"
//         },
//         mo: function (e) {
//           return ["mėnuo", "mėnesiai", "mėnesių"][a(e)]
//         },
//         w: function (e) {
//           return ["savaitė", "savaitės", "savaičių"][a(e)]
//         },
//         d: function (e) {
//           return ["diena", "dienos", "dienų"][a(e)]
//         },
//         h: function (e) {
//           return ["valanda", "valandos", "valandų"][a(e)]
//         },
//         m: function (e) {
//           return ["minutė", "minutės", "minučių"][a(e)]
//         },
//         s: function (e) {
//           return ["sekundė", "sekundės", "sekundžių"][a(e)]
//         },
//         ms: function (e) {
//           return ["milisekundė", "milisekundės", "milisekundžių"][a(e)]
//         },
//         decimal: ","
//       },
//       ms: {
//         y: "tahun",
//         mo: "bulan",
//         w: "minggu",
//         d: "hari",
//         h: "jam",
//         m: "minit",
//         s: "saat",
//         ms: "milisaat",
//         decimal: "."
//       },
//       nl: {
//         y: "jaar",
//         mo: function (e) {
//           return 1 === e ? "maand" : "maanden"
//         },
//         w: function (e) {
//           return 1 === e ? "week" : "weken"
//         },
//         d: function (e) {
//           return 1 === e ? "dag" : "dagen"
//         },
//         h: "uur",
//         m: function (e) {
//           return 1 === e ? "minuut" : "minuten"
//         },
//         s: function (e) {
//           return 1 === e ? "seconde" : "seconden"
//         },
//         ms: function (e) {
//           return 1 === e ? "milliseconde" : "milliseconden"
//         },
//         decimal: ","
//       },
//       no: {
//         y: "år",
//         mo: function (e) {
//           return "måned" + (1 !== e ? "er" : "")
//         },
//         w: function (e) {
//           return "uke" + (1 !== e ? "r" : "")
//         },
//         d: function (e) {
//           return "dag" + (1 !== e ? "er" : "")
//         },
//         h: function (e) {
//           return "time" + (1 !== e ? "r" : "")
//         },
//         m: function (e) {
//           return "minutt" + (1 !== e ? "er" : "")
//         },
//         s: function (e) {
//           return "sekund" + (1 !== e ? "er" : "")
//         },
//         ms: function (e) {
//           return "millisekund" + (1 !== e ? "er" : "")
//         },
//         decimal: ","
//       },
//       pl: {
//         y: function (e) {
//           return ["rok", "roku", "lata", "lat"][o(e)]
//         },
//         mo: function (e) {
//           return ["miesiąc", "miesiąca", "miesiące", "miesięcy"][o(e)]
//         },
//         w: function (e) {
//           return ["tydzień", "tygodnia", "tygodnie", "tygodni"][o(e)]
//         },
//         d: function (e) {
//           return ["dzień", "dnia", "dni", "dni"][o(e)]
//         },
//         h: function (e) {
//           return ["godzina", "godziny", "godziny", "godzin"][o(e)]
//         },
//         m: function (e) {
//           return ["minuta", "minuty", "minuty", "minut"][o(e)]
//         },
//         s: function (e) {
//           return ["sekunda", "sekundy", "sekundy", "sekund"][o(e)]
//         },
//         ms: function (e) {
//           return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][o(e)]
//         },
//         decimal: ","
//       },
//       pt: {
//         y: function (e) {
//           return "ano" + (1 !== e ? "s" : "")
//         },
//         mo: function (e) {
//           return 1 !== e ? "meses" : "mês"
//         },
//         w: function (e) {
//           return "semana" + (1 !== e ? "s" : "")
//         },
//         d: function (e) {
//           return "dia" + (1 !== e ? "s" : "")
//         },
//         h: function (e) {
//           return "hora" + (1 !== e ? "s" : "")
//         },
//         m: function (e) {
//           return "minuto" + (1 !== e ? "s" : "")
//         },
//         s: function (e) {
//           return "segundo" + (1 !== e ? "s" : "")
//         },
//         ms: function (e) {
//           return "milissegundo" + (1 !== e ? "s" : "")
//         },
//         decimal: ","
//       },
//       ru: {
//         y: function (e) {
//           return ["лет", "год", "года"][s(e)]
//         },
//         mo: function (e) {
//           return ["месяцев", "месяц", "месяца"][s(e)]
//         },
//         w: function (e) {
//           return ["недель", "неделя", "недели"][s(e)]
//         },
//         d: function (e) {
//           return ["дней", "день", "дня"][s(e)]
//         },
//         h: function (e) {
//           return ["часов", "час", "часа"][s(e)]
//         },
//         m: function (e) {
//           return ["минут", "минута", "минуты"][s(e)]
//         },
//         s: function (e) {
//           return ["секунд", "секунда", "секунды"][s(e)]
//         },
//         ms: function (e) {
//           return ["миллисекунд", "миллисекунда", "миллисекунды"][s(e)]
//         },
//         decimal: ","
//       },
//       uk: {
//         y: function (e) {
//           return ["років", "рік", "роки"][s(e)]
//         },
//         mo: function (e) {
//           return ["місяців", "місяць", "місяці"][s(e)]
//         },
//         w: function (e) {
//           return ["неділь", "неділя", "неділі"][s(e)]
//         },
//         d: function (e) {
//           return ["днів", "день", "дні"][s(e)]
//         },
//         h: function (e) {
//           return ["годин", "година", "години"][s(e)]
//         },
//         m: function (e) {
//           return ["хвилин", "хвилина", "хвилини"][s(e)]
//         },
//         s: function (e) {
//           return ["секунд", "секунда", "секунди"][s(e)]
//         },
//         ms: function (e) {
//           return ["мілісекунд", "мілісекунда", "мілісекунди"][s(e)]
//         },
//         decimal: ","
//       },
//       sv: {
//         y: "år",
//         mo: function (e) {
//           return "månad" + (1 !== e ? "er" : "")
//         },
//         w: function (e) {
//           return "veck" + (1 !== e ? "or" : "a")
//         },
//         d: function (e) {
//           return "dag" + (1 !== e ? "ar" : "")
//         },
//         h: function (e) {
//           return "timm" + (1 !== e ? "ar" : "e")
//         },
//         m: function (e) {
//           return "minut" + (1 !== e ? "er" : "")
//         },
//         s: function (e) {
//           return "sekund" + (1 !== e ? "er" : "")
//         },
//         ms: function (e) {
//           return "millisekund" + (1 !== e ? "er" : "")
//         },
//         decimal: ","
//       },
//       tr: {
//         y: "yıl",
//         mo: "ay",
//         w: "hafta",
//         d: "gün",
//         h: "saat",
//         m: "dakika",
//         s: "saniye",
//         ms: "milisaniye",
//         decimal: ","
//       },
//       vi: {
//         y: "năm",
//         mo: "tháng",
//         w: "tuần",
//         d: "ngày",
//         h: "giờ",
//         m: "phút",
//         s: "giây",
//         ms: "mili giây",
//         decimal: ","
//       },
//       zh_CN: {
//         y: "年",
//         mo: "个月",
//         w: "周",
//         d: "天",
//         h: "小时",
//         m: "分钟",
//         s: "秒",
//         ms: "毫秒",
//         decimal: "."
//       },
//       zh_TW: {
//         y: "年",
//         mo: "個月",
//         w: "周",
//         d: "天",
//         h: "小時",
//         m: "分鐘",
//         s: "秒",
//         ms: "毫秒",
//         decimal: "."
//       }
//     },
//       u = e({});
//     u.getSupportedLanguages = function () {
//       var e = [];
//       for (var t in l) l.hasOwnProperty(t) && e.push(t);
//       return e
//     }, u.humanizer = e, "function" == typeof define && define.amd ? define(function () {
//       return u
//     }) : "undefined" != typeof module && module.exports ? module.exports = u : this.humanizeDuration = u
//   }(),
//   function (e, t) {
//     "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
//   }(this, function () {
//     "use strict";

//     function e() {
//       return kt.apply(null, arguments)
//     }

//     function t(e) {
//       return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
//     }

//     function n(e) {
//       return null != e && "[object Object]" === Object.prototype.toString.call(e)
//     }

//     function i(e) {
//       if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
//       var t;
//       for (t in e)
//         if (e.hasOwnProperty(t)) return !1;
//       return !0
//     }

//     function r(e) {
//       return void 0 === e
//     }

//     function o(e) {
//       return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
//     }

//     function s(e) {
//       return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
//     }

//     function a(e, t) {
//       var n, i = [];
//       for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
//       return i
//     }

//     function l(e, t) {
//       return Object.prototype.hasOwnProperty.call(e, t)
//     }

//     function u(e, t) {
//       for (var n in t) l(t, n) && (e[n] = t[n]);
//       return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e
//     }

//     function c(e, t, n, i) {
//       return He(e, t, n, i, !0).utc()
//     }

//     function d() {
//       return {
//         empty: !1,
//         unusedTokens: [],
//         unusedInput: [],
//         overflow: -2,
//         charsLeftOver: 0,
//         nullInput: !1,
//         invalidMonth: null,
//         invalidFormat: !1,
//         userInvalidated: !1,
//         iso: !1,
//         parsedDateParts: [],
//         meridiem: null,
//         rfc2822: !1,
//         weekdayMismatch: !1
//       }
//     }

//     function f(e) {
//       return null == e._pf && (e._pf = d()), e._pf
//     }

//     function h(e) {
//       if (null == e._isValid) {
//         var t = f(e),
//           n = Tt.call(t.parsedDateParts, function (e) {
//             return null != e
//           }),
//           i = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
//         if (e._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return i;
//         e._isValid = i
//       }
//       return e._isValid
//     }

//     function p(e) {
//       var t = c(NaN);
//       return null != e ? u(f(t), e) : f(t).userInvalidated = !0, t
//     }

//     function m(e, t) {
//       var n, i, o;
//       if (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), r(t._i) || (e._i = t._i), r(t._f) || (e._f = t._f), r(t._l) || (e._l = t._l), r(t._strict) || (e._strict = t._strict), r(t._tzm) || (e._tzm = t._tzm), r(t._isUTC) || (e._isUTC = t._isUTC), r(t._offset) || (e._offset = t._offset), r(t._pf) || (e._pf = f(t)), r(t._locale) || (e._locale = t._locale), Et.length > 0)
//         for (n = 0; n < Et.length; n++) r(o = t[i = Et[n]]) || (e[i] = o);
//       return e
//     }

//     function g(t) {
//       m(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === jt && (jt = !0, e.updateOffset(this), jt = !1)
//     }

//     function v(e) {
//       return e instanceof g || null != e && null != e._isAMomentObject
//     }

//     function y(e) {
//       return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
//     }

//     function b(e) {
//       var t = +e,
//         n = 0;
//       return 0 !== t && isFinite(t) && (n = y(t)), n
//     }

//     function $(e, t, n) {
//       var i, r = Math.min(e.length, t.length),
//         o = Math.abs(e.length - t.length),
//         s = 0;
//       for (i = 0; i < r; i++)(n && e[i] !== t[i] || !n && b(e[i]) !== b(t[i])) && s++;
//       return s + o
//     }

//     function w(t) {
//       !1 === e.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
//     }

//     function x(t, n) {
//       var i = !0;
//       return u(function () {
//         if (null != e.deprecationHandler && e.deprecationHandler(null, t), i) {
//           for (var r, o = [], s = 0; s < arguments.length; s++) {
//             if (r = "", "object" == typeof arguments[s]) {
//               r += "\n[" + s + "] ";
//               for (var a in arguments[0]) r += a + ": " + arguments[0][a] + ", ";
//               r = r.slice(0, -2)
//             } else r = arguments[s];
//             o.push(r)
//           }
//           w(t + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), i = !1
//         }
//         return n.apply(this, arguments)
//       }, n)
//     }

//     function S(t, n) {
//       null != e.deprecationHandler && e.deprecationHandler(t, n), Mt[t] || (w(n), Mt[t] = !0)
//     }

//     function C(e) {
//       return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
//     }

//     function k(e, t) {
//       var i, r = u({}, e);
//       for (i in t) l(t, i) && (n(e[i]) && n(t[i]) ? (r[i] = {}, u(r[i], e[i]), u(r[i], t[i])) : null != t[i] ? r[i] = t[i] : delete r[i]);
//       for (i in e) l(e, i) && !l(t, i) && n(e[i]) && (r[i] = u({}, r[i]));
//       return r
//     }

//     function T(e) {
//       null != e && this.set(e)
//     }

//     function E(e, t) {
//       var n = e.toLowerCase();
//       Nt[n] = Nt[n + "s"] = Nt[t] = e
//     }

//     function j(e) {
//       return "string" == typeof e ? Nt[e] || Nt[e.toLowerCase()] : void 0
//     }

//     function M(e) {
//       var t, n, i = {};
//       for (n in e) l(e, n) && (t = j(n)) && (i[t] = e[n]);
//       return i
//     }

//     function _(e, t) {
//       Ft[e] = t
//     }

//     function A(e) {
//       var t = [];
//       for (var n in e) t.push({
//         unit: n,
//         priority: Ft[n]
//       });
//       return t.sort(function (e, t) {
//         return e.priority - t.priority
//       }), t
//     }

//     function D(e, t, n) {
//       var i = "" + Math.abs(e),
//         r = t - i.length;
//       return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
//     }

//     function O(e, t, n, i) {
//       var r = i;
//       "string" == typeof i && (r = function () {
//         return this[i]()
//       }), e && (Lt[e] = r), t && (Lt[t[0]] = function () {
//         return D(r.apply(this, arguments), t[1], t[2])
//       }), n && (Lt[n] = function () {
//         return this.localeData().ordinal(r.apply(this, arguments), e)
//       })
//     }

//     function P(e) {
//       return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
//     }

//     function N(e) {
//       var t, n, i = e.match(It);
//       for (t = 0, n = i.length; t < n; t++) Lt[i[t]] ? i[t] = Lt[i[t]] : i[t] = P(i[t]);
//       return function (t) {
//         var r, o = "";
//         for (r = 0; r < n; r++) o += C(i[r]) ? i[r].call(t, e) : i[r];
//         return o
//       }
//     }

//     function F(e, t) {
//       return e.isValid() ? (t = I(t, e.localeData()), zt[t] = zt[t] || N(t), zt[t](e)) : e.localeData().invalidDate()
//     }

//     function I(e, t) {
//       var n = 5;
//       for (Rt.lastIndex = 0; n >= 0 && Rt.test(e);) e = e.replace(Rt, function (e) {
//         return t.longDateFormat(e) || e
//       }), Rt.lastIndex = 0, n -= 1;
//       return e
//     }

//     function R(e, t, n) {
//       on[e] = C(t) ? t : function (e, i) {
//         return e && n ? n : t
//       }
//     }

//     function z(e, t) {
//       return l(on, e) ? on[e](t._strict, t._locale) : new RegExp(L(e))
//     }

//     function L(e) {
//       return H(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, i, r) {
//         return t || n || i || r
//       }))
//     }

//     function H(e) {
//       return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
//     }

//     function V(e, t) {
//       var n, i = t;
//       for ("string" == typeof e && (e = [e]), o(t) && (i = function (e, n) {
//         n[t] = b(e)
//       }), n = 0; n < e.length; n++) sn[e[n]] = i
//     }

//     function U(e, t) {
//       V(e, function (e, n, i, r) {
//         i._w = i._w || {}, t(e, i._w, i, r)
//       })
//     }

//     function B(e, t, n) {
//       null != t && l(sn, e) && sn[e](t, n._a, n, e)
//     }

//     function q(e) {
//       return W(e) ? 366 : 365
//     }

//     function W(e) {
//       return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
//     }

//     function Y(t, n) {
//       return function (i) {
//         return null != i ? (Z(this, t, i), e.updateOffset(this, n), this) : G(this, t)
//       }
//     }

//     function G(e, t) {
//       return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
//     }

//     function Z(e, t, n) {
//       e.isValid() && !isNaN(n) && ("FullYear" === t && W(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), K(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
//     }

//     function X(e, t) {
//       return (e % t + t) % t
//     }

//     function K(e, t) {
//       if (isNaN(e) || isNaN(t)) return NaN;
//       var n = X(t, 12);
//       return e += (t - n) / 12, 1 === n ? W(e) ? 29 : 28 : 31 - n % 7 % 2
//     }

//     function J(e, t, n) {
//       var i, r, o, s = e.toLocaleLowerCase();
//       if (!this._monthsParse)
//         for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) o = c([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
//       return n ? "MMM" === t ? -1 !== (r = gn.call(this._shortMonthsParse, s)) ? r : null : -1 !== (r = gn.call(this._longMonthsParse, s)) ? r : null : "MMM" === t ? -1 !== (r = gn.call(this._shortMonthsParse, s)) ? r : -1 !== (r = gn.call(this._longMonthsParse, s)) ? r : null : -1 !== (r = gn.call(this._longMonthsParse, s)) ? r : -1 !== (r = gn.call(this._shortMonthsParse, s)) ? r : null
//     }

//     function Q(e, t) {
//       var n;
//       if (!e.isValid()) return e;
//       if ("string" == typeof t)
//         if (/^\d+$/.test(t)) t = b(t);
//         else if (t = e.localeData().monthsParse(t), !o(t)) return e;
//       return n = Math.min(e.date(), K(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
//     }

//     function ee(t) {
//       return null != t ? (Q(this, t), e.updateOffset(this, !0), this) : G(this, "Month")
//     }

//     function te() {
//       function e(e, t) {
//         return t.length - e.length
//       }
//       var t, n, i = [],
//         r = [],
//         o = [];
//       for (t = 0; t < 12; t++) n = c([2e3, t]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
//       for (i.sort(e), r.sort(e), o.sort(e), t = 0; t < 12; t++) i[t] = H(i[t]), r[t] = H(r[t]);
//       for (t = 0; t < 24; t++) o[t] = H(o[t]);
//       this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
//     }

//     function ne(e, t, n, i, r, o, s) {
//       var a = new Date(e, t, n, i, r, o, s);
//       return e < 100 && e >= 0 && isFinite(a.getFullYear()) && a.setFullYear(e), a
//     }

//     function ie(e) {
//       var t = new Date(Date.UTC.apply(null, arguments));
//       return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
//     }

//     function re(e, t, n) {
//       var i = 7 + t - n;
//       return -((7 + ie(e, 0, i).getUTCDay() - t) % 7) + i - 1
//     }

//     function oe(e, t, n, i, r) {
//       var o, s, a = 1 + 7 * (t - 1) + (7 + n - i) % 7 + re(e, i, r);
//       return a <= 0 ? s = q(o = e - 1) + a : a > q(e) ? (o = e + 1, s = a - q(e)) : (o = e, s = a), {
//         year: o,
//         dayOfYear: s
//       }
//     }

//     function se(e, t, n) {
//       var i, r, o = re(e.year(), t, n),
//         s = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
//       return s < 1 ? i = s + ae(r = e.year() - 1, t, n) : s > ae(e.year(), t, n) ? (i = s - ae(e.year(), t, n), r = e.year() + 1) : (r = e.year(), i = s), {
//         week: i,
//         year: r
//       }
//     }

//     function ae(e, t, n) {
//       var i = re(e, t, n),
//         r = re(e + 1, t, n);
//       return (q(e) - i + r) / 7
//     }

//     function le(e, t) {
//       return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
//     }

//     function ue(e, t) {
//       return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
//     }

//     function ce(e, t, n) {
//       var i, r, o, s = e.toLocaleLowerCase();
//       if (!this._weekdaysParse)
//         for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) o = c([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
//       return n ? "dddd" === t ? -1 !== (r = gn.call(this._weekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = gn.call(this._shortWeekdaysParse, s)) ? r : null : -1 !== (r = gn.call(this._minWeekdaysParse, s)) ? r : null : "dddd" === t ? -1 !== (r = gn.call(this._weekdaysParse, s)) ? r : -1 !== (r = gn.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = gn.call(this._minWeekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = gn.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = gn.call(this._weekdaysParse, s)) ? r : -1 !== (r = gn.call(this._minWeekdaysParse, s)) ? r : null : -1 !== (r = gn.call(this._minWeekdaysParse, s)) ? r : -1 !== (r = gn.call(this._weekdaysParse, s)) ? r : -1 !== (r = gn.call(this._shortWeekdaysParse, s)) ? r : null
//     }

//     function de() {
//       function e(e, t) {
//         return t.length - e.length
//       }
//       var t, n, i, r, o, s = [],
//         a = [],
//         l = [],
//         u = [];
//       for (t = 0; t < 7; t++) n = c([2e3, 1]).day(t), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), s.push(i), a.push(r), l.push(o), u.push(i), u.push(r), u.push(o);
//       for (s.sort(e), a.sort(e), l.sort(e), u.sort(e), t = 0; t < 7; t++) a[t] = H(a[t]), l[t] = H(l[t]), u[t] = H(u[t]);
//       this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
//     }

//     function fe() {
//       return this.hours() % 12 || 12
//     }

//     function he(e, t) {
//       O(e, 0, 0, function () {
//         return this.localeData().meridiem(this.hours(), this.minutes(), t)
//       })
//     }

//     function pe(e, t) {
//       return t._meridiemParse
//     }

//     function me(e) {
//       return e ? e.toLowerCase().replace("_", "-") : e
//     }

//     function ge(e) {
//       for (var t, n, i, r, o = 0; o < e.length;) {
//         for (t = (r = me(e[o]).split("-")).length, n = (n = me(e[o + 1])) ? n.split("-") : null; t > 0;) {
//           if (i = ve(r.slice(0, t).join("-"))) return i;
//           if (n && n.length >= t && $(r, n, !0) >= t - 1) break;
//           t--
//         }
//         o++
//       }
//       return null
//     }

//     function ve(e) {
//       var t = null;
//       if (!Pn[e] && "undefined" != typeof module && module && module.exports) try {
//         t = _n._abbr, require("./locale/" + e), ye(t)
//       } catch (e) { }
//       return Pn[e]
//     }

//     function ye(e, t) {
//       var n;
//       return e && (n = r(t) ? $e(e) : be(e, t)) && (_n = n), _n._abbr
//     }

//     function be(e, t) {
//       if (null !== t) {
//         var n = On;
//         if (t.abbr = e, null != Pn[e]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Pn[e]._config;
//         else if (null != t.parentLocale) {
//           if (null == Pn[t.parentLocale]) return Nn[t.parentLocale] || (Nn[t.parentLocale] = []), Nn[t.parentLocale].push({
//             name: e,
//             config: t
//           }), null;
//           n = Pn[t.parentLocale]._config
//         }
//         return Pn[e] = new T(k(n, t)), Nn[e] && Nn[e].forEach(function (e) {
//           be(e.name, e.config)
//         }), ye(e), Pn[e]
//       }
//       return delete Pn[e], null
//     }

//     function $e(e) {
//       var n;
//       if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return _n;
//       if (!t(e)) {
//         if (n = ve(e)) return n;
//         e = [e]
//       }
//       return ge(e)
//     }

//     function we(e) {
//       var t, n = e._a;
//       return n && -2 === f(e).overflow && (t = n[ln] < 0 || n[ln] > 11 ? ln : n[un] < 1 || n[un] > K(n[an], n[ln]) ? un : n[cn] < 0 || n[cn] > 24 || 24 === n[cn] && (0 !== n[dn] || 0 !== n[fn] || 0 !== n[hn]) ? cn : n[dn] < 0 || n[dn] > 59 ? dn : n[fn] < 0 || n[fn] > 59 ? fn : n[hn] < 0 || n[hn] > 999 ? hn : -1, f(e)._overflowDayOfYear && (t < an || t > un) && (t = un), f(e)._overflowWeeks && -1 === t && (t = pn), f(e)._overflowWeekday && -1 === t && (t = mn), f(e).overflow = t), e
//     }

//     function xe(e, t, n) {
//       return null != e ? e : null != t ? t : n
//     }

//     function Se(t) {
//       var n = new Date(e.now());
//       return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
//     }

//     function Ce(e) {
//       var t, n, i, r, o, s = [];
//       if (!e._d) {
//         for (i = Se(e), e._w && null == e._a[un] && null == e._a[ln] && ke(e), null != e._dayOfYear && (o = xe(e._a[an], i[an]), (e._dayOfYear > q(o) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), n = ie(o, 0, e._dayOfYear), e._a[ln] = n.getUTCMonth(), e._a[un] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = s[t] = i[t];
//         for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
//         24 === e._a[cn] && 0 === e._a[dn] && 0 === e._a[fn] && 0 === e._a[hn] && (e._nextDay = !0, e._a[cn] = 0), e._d = (e._useUTC ? ie : ne).apply(null, s), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[cn] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (f(e).weekdayMismatch = !0)
//       }
//     }

//     function ke(e) {
//       var t, n, i, r, o, s, a, l;
//       if (null != (t = e._w).GG || null != t.W || null != t.E) o = 1, s = 4, n = xe(t.GG, e._a[an], se(Ve(), 1, 4).year), i = xe(t.W, 1), ((r = xe(t.E, 1)) < 1 || r > 7) && (l = !0);
//       else {
//         o = e._locale._week.dow, s = e._locale._week.doy;
//         var u = se(Ve(), o, s);
//         n = xe(t.gg, e._a[an], u.year), i = xe(t.w, u.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (l = !0) : null != t.e ? (r = t.e + o, (t.e < 0 || t.e > 6) && (l = !0)) : r = o
//       }
//       i < 1 || i > ae(n, o, s) ? f(e)._overflowWeeks = !0 : null != l ? f(e)._overflowWeekday = !0 : (a = oe(n, i, r, o, s), e._a[an] = a.year, e._dayOfYear = a.dayOfYear)
//     }

//     function Te(e) {
//       var t, n, i, r, o, s, a = e._i,
//         l = Fn.exec(a) || In.exec(a);
//       if (l) {
//         for (f(e).iso = !0, t = 0, n = zn.length; t < n; t++)
//           if (zn[t][1].exec(l[1])) {
//             r = zn[t][0], i = !1 !== zn[t][2];
//             break
//           }
//         if (null == r) return void (e._isValid = !1);
//         if (l[3]) {
//           for (t = 0, n = Ln.length; t < n; t++)
//             if (Ln[t][1].exec(l[3])) {
//               o = (l[2] || " ") + Ln[t][0];
//               break
//             }
//           if (null == o) return void (e._isValid = !1)
//         }
//         if (!i && null != o) return void (e._isValid = !1);
//         if (l[4]) {
//           if (!Rn.exec(l[4])) return void (e._isValid = !1);
//           s = "Z"
//         }
//         e._f = r + (o || "") + (s || ""), Pe(e)
//       } else e._isValid = !1
//     }

//     function Ee(e, t, n, i, r, o) {
//       var s = [je(e), $n.indexOf(t), parseInt(n, 10), parseInt(i, 10), parseInt(r, 10)];
//       return o && s.push(parseInt(o, 10)), s
//     }

//     function je(e) {
//       var t = parseInt(e, 10);
//       return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
//     }

//     function Me(e) {
//       return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
//     }

//     function _e(e, t, n) {
//       return !e || kn.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (f(n).weekdayMismatch = !0, n._isValid = !1, !1)
//     }

//     function Ae(e, t, n) {
//       if (e) return Un[e];
//       if (t) return 0;
//       var i = parseInt(n, 10),
//         r = i % 100;
//       return 60 * ((i - r) / 100) + r
//     }

//     function De(e) {
//       var t = Vn.exec(Me(e._i));
//       if (t) {
//         var n = Ee(t[4], t[3], t[2], t[5], t[6], t[7]);
//         if (!_e(t[1], n, e)) return;
//         e._a = n, e._tzm = Ae(t[8], t[9], t[10]), e._d = ie.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0
//       } else e._isValid = !1
//     }

//     function Oe(t) {
//       var n = Hn.exec(t._i);
//       null === n ? (Te(t), !1 === t._isValid && (delete t._isValid, De(t), !1 === t._isValid && (delete t._isValid, e.createFromInputFallback(t)))) : t._d = new Date(+n[1])
//     }

//     function Pe(t) {
//       if (t._f !== e.ISO_8601)
//         if (t._f !== e.RFC_2822) {
//           t._a = [], f(t).empty = !0;
//           var n, i, r, o, s, a = "" + t._i,
//             l = a.length,
//             u = 0;
//           for (r = I(t._f, t._locale).match(It) || [], n = 0; n < r.length; n++) o = r[n], (i = (a.match(z(o, t)) || [])[0]) && ((s = a.substr(0, a.indexOf(i))).length > 0 && f(t).unusedInput.push(s), a = a.slice(a.indexOf(i) + i.length), u += i.length), Lt[o] ? (i ? f(t).empty = !1 : f(t).unusedTokens.push(o), B(o, i, t)) : t._strict && !i && f(t).unusedTokens.push(o);
//           f(t).charsLeftOver = l - u, a.length > 0 && f(t).unusedInput.push(a), t._a[cn] <= 12 && !0 === f(t).bigHour && t._a[cn] > 0 && (f(t).bigHour = void 0), f(t).parsedDateParts = t._a.slice(0), f(t).meridiem = t._meridiem, t._a[cn] = Ne(t._locale, t._a[cn], t._meridiem), Ce(t), we(t)
//         } else De(t);
//       else Te(t)
//     }

//     function Ne(e, t, n) {
//       var i;
//       return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((i = e.isPM(n)) && t < 12 && (t += 12), i || 12 !== t || (t = 0), t) : t
//     }

//     function Fe(e) {
//       var t, n, i, r, o;
//       if (0 === e._f.length) return f(e).invalidFormat = !0, void (e._d = new Date(NaN));
//       for (r = 0; r < e._f.length; r++) o = 0, t = m({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], Pe(t), h(t) && (o += f(t).charsLeftOver, o += 10 * f(t).unusedTokens.length, f(t).score = o, (null == i || o < i) && (i = o, n = t));
//       u(e, n || t)
//     }

//     function Ie(e) {
//       if (!e._d) {
//         var t = M(e._i);
//         e._a = a([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
//           return e && parseInt(e, 10)
//         }), Ce(e)
//       }
//     }

//     function Re(e) {
//       var t = new g(we(ze(e)));
//       return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
//     }

//     function ze(e) {
//       var n = e._i,
//         i = e._f;
//       return e._locale = e._locale || $e(e._l), null === n || void 0 === i && "" === n ? p({
//         nullInput: !0
//       }) : ("string" == typeof n && (e._i = n = e._locale.preparse(n)), v(n) ? new g(we(n)) : (s(n) ? e._d = n : t(i) ? Fe(e) : i ? Pe(e) : Le(e), h(e) || (e._d = null), e))
//     }

//     function Le(i) {
//       var l = i._i;
//       r(l) ? i._d = new Date(e.now()) : s(l) ? i._d = new Date(l.valueOf()) : "string" == typeof l ? Oe(i) : t(l) ? (i._a = a(l.slice(0), function (e) {
//         return parseInt(e, 10)
//       }), Ce(i)) : n(l) ? Ie(i) : o(l) ? i._d = new Date(l) : e.createFromInputFallback(i)
//     }

//     function He(e, r, o, s, a) {
//       var l = {};
//       return !0 !== o && !1 !== o || (s = o, o = void 0), (n(e) && i(e) || t(e) && 0 === e.length) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = o, l._i = e, l._f = r, l._strict = s, Re(l)
//     }

//     function Ve(e, t, n, i) {
//       return He(e, t, n, i, !1)
//     }

//     function Ue(e, n) {
//       var i, r;
//       if (1 === n.length && t(n[0]) && (n = n[0]), !n.length) return Ve();
//       for (i = n[0], r = 1; r < n.length; ++r) n[r].isValid() && !n[r][e](i) || (i = n[r]);
//       return i
//     }

//     function Be(e) {
//       for (var t in e)
//         if (-1 === gn.call(Wn, t) || null != e[t] && isNaN(e[t])) return !1;
//       for (var n = !1, i = 0; i < Wn.length; ++i)
//         if (e[Wn[i]]) {
//           if (n) return !1;
//           parseFloat(e[Wn[i]]) !== b(e[Wn[i]]) && (n = !0)
//         }
//       return !0
//     }

//     function qe(e) {
//       var t = M(e),
//         n = t.year || 0,
//         i = t.quarter || 0,
//         r = t.month || 0,
//         o = t.week || 0,
//         s = t.day || 0,
//         a = t.hour || 0,
//         l = t.minute || 0,
//         u = t.second || 0,
//         c = t.millisecond || 0;
//       this._isValid = Be(t), this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60, this._days = +s + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = $e(), this._bubble()
//     }

//     function We(e) {
//       return e instanceof qe
//     }

//     function Ye(e) {
//       return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
//     }

//     function Ge(e, t) {
//       O(e, 0, 0, function () {
//         var e = this.utcOffset(),
//           n = "+";
//         return e < 0 && (e = -e, n = "-"), n + D(~~(e / 60), 2) + t + D(~~e % 60, 2)
//       })
//     }

//     function Ze(e, t) {
//       var n = (t || "").match(e);
//       if (null === n) return null;
//       var i = ((n[n.length - 1] || []) + "").match(Yn) || ["-", 0, 0],
//         r = 60 * i[1] + b(i[2]);
//       return 0 === r ? 0 : "+" === i[0] ? r : -r
//     }

//     function Xe(t, n) {
//       var i, r;
//       return n._isUTC ? (i = n.clone(), r = (v(t) || s(t) ? t.valueOf() : Ve(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + r), e.updateOffset(i, !1), i) : Ve(t).local()
//     }

//     function Ke(e) {
//       return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
//     }

//     function Je() {
//       return !!this.isValid() && (this._isUTC && 0 === this._offset)
//     }

//     function Qe(e, t) {
//       var n, i, r, s = e,
//         a = null;
//       return We(e) ? s = {
//         ms: e._milliseconds,
//         d: e._days,
//         M: e._months
//       } : o(e) ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (a = Gn.exec(e)) ? (n = "-" === a[1] ? -1 : 1, s = {
//         y: 0,
//         d: b(a[un]) * n,
//         h: b(a[cn]) * n,
//         m: b(a[dn]) * n,
//         s: b(a[fn]) * n,
//         ms: b(Ye(1e3 * a[hn])) * n
//       }) : (a = Zn.exec(e)) ? (n = "-" === a[1] ? -1 : (a[1], 1), s = {
//         y: et(a[2], n),
//         M: et(a[3], n),
//         w: et(a[4], n),
//         d: et(a[5], n),
//         h: et(a[6], n),
//         m: et(a[7], n),
//         s: et(a[8], n)
//       }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (r = nt(Ve(s.from), Ve(s.to)), (s = {}).ms = r.milliseconds, s.M = r.months), i = new qe(s), We(e) && l(e, "_locale") && (i._locale = e._locale), i
//     }

//     function et(e, t) {
//       var n = e && parseFloat(e.replace(",", "."));
//       return (isNaN(n) ? 0 : n) * t
//     }

//     function tt(e, t) {
//       var n = {
//         milliseconds: 0,
//         months: 0
//       };
//       return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
//     }

//     function nt(e, t) {
//       var n;
//       return e.isValid() && t.isValid() ? (t = Xe(t, e), e.isBefore(t) ? n = tt(e, t) : ((n = tt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months), n) : {
//         milliseconds: 0,
//         months: 0
//       }
//     }

//     function it(e, t) {
//       return function (n, i) {
//         var r, o;
//         return null === i || isNaN(+i) || (S(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = n, n = i, i = o), n = "string" == typeof n ? +n : n, r = Qe(n, i), rt(this, r, e), this
//       }
//     }

//     function rt(t, n, i, r) {
//       var o = n._milliseconds,
//         s = Ye(n._days),
//         a = Ye(n._months);
//       t.isValid() && (r = null == r || r, a && Q(t, G(t, "Month") + a * i), s && Z(t, "Date", G(t, "Date") + s * i), o && t._d.setTime(t._d.valueOf() + o * i), r && e.updateOffset(t, s || a))
//     }

//     function ot(e, t) {
//       var n, i = 12 * (t.year() - e.year()) + (t.month() - e.month()),
//         r = e.clone().add(i, "months");
//       return n = t - r < 0 ? (t - r) / (r - e.clone().add(i - 1, "months")) : (t - r) / (e.clone().add(i + 1, "months") - r), -(i + n) || 0
//     }

//     function st(e) {
//       var t;
//       return void 0 === e ? this._locale._abbr : (null != (t = $e(e)) && (this._locale = t), this)
//     }

//     function at() {
//       return this._locale
//     }

//     function lt(e, t) {
//       O(0, [e, e.length], 0, t)
//     }

//     function ut(e, t, n, i, r) {
//       var o;
//       return null == e ? se(this, i, r).year : (o = ae(e, i, r), t > o && (t = o), ct.call(this, e, t, n, i, r))
//     }

//     function ct(e, t, n, i, r) {
//       var o = oe(e, t, n, i, r),
//         s = ie(o.year, 0, o.dayOfYear);
//       return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
//     }

//     function dt(e) {
//       return e
//     }

//     function ft(e, t, n, i) {
//       var r = $e(),
//         o = c().set(i, t);
//       return r[n](o, e)
//     }

//     function ht(e, t, n) {
//       if (o(e) && (t = e, e = void 0), e = e || "", null != t) return ft(e, t, n, "month");
//       var i, r = [];
//       for (i = 0; i < 12; i++) r[i] = ft(e, i, n, "month");
//       return r
//     }

//     function pt(e, t, n, i) {
//       "boolean" == typeof e ? (o(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, o(t) && (n = t, t = void 0), t = t || "");
//       var r = $e(),
//         s = e ? r._week.dow : 0;
//       if (null != n) return ft(t, (n + s) % 7, i, "day");
//       var a, l = [];
//       for (a = 0; a < 7; a++) l[a] = ft(t, (a + s) % 7, i, "day");
//       return l
//     }

//     function mt(e, t, n, i) {
//       var r = Qe(t, n);
//       return e._milliseconds += i * r._milliseconds, e._days += i * r._days, e._months += i * r._months, e._bubble()
//     }

//     function gt(e) {
//       return e < 0 ? Math.floor(e) : Math.ceil(e)
//     }

//     function vt(e) {
//       return 4800 * e / 146097
//     }

//     function yt(e) {
//       return 146097 * e / 4800
//     }

//     function bt(e) {
//       return function () {
//         return this.as(e)
//       }
//     }

//     function $t(e) {
//       return function () {
//         return this.isValid() ? this._data[e] : NaN
//       }
//     }

//     function wt(e, t, n, i, r) {
//       return r.relativeTime(t || 1, !!n, e, i)
//     }

//     function xt(e, t, n) {
//       var i = Qe(e).abs(),
//         r = xi(i.as("s")),
//         o = xi(i.as("m")),
//         s = xi(i.as("h")),
//         a = xi(i.as("d")),
//         l = xi(i.as("M")),
//         u = xi(i.as("y")),
//         c = r <= Si.ss && ["s", r] || r < Si.s && ["ss", r] || o <= 1 && ["m"] || o < Si.m && ["mm", o] || s <= 1 && ["h"] || s < Si.h && ["hh", s] || a <= 1 && ["d"] || a < Si.d && ["dd", a] || l <= 1 && ["M"] || l < Si.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u];
//       return c[2] = t, c[3] = +e > 0, c[4] = n, wt.apply(null, c)
//     }

//     function St(e) {
//       return (e > 0) - (e < 0) || +e
//     }

//     function Ct() {
//       if (!this.isValid()) return this.localeData().invalidDate();
//       var e, t, n, i = Ci(this._milliseconds) / 1e3,
//         r = Ci(this._days),
//         o = Ci(this._months);
//       t = y((e = y(i / 60)) / 60), i %= 60, e %= 60;
//       var s = n = y(o / 12),
//         a = o %= 12,
//         l = r,
//         u = t,
//         c = e,
//         d = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
//         f = this.asSeconds();
//       if (!f) return "P0D";
//       var h = f < 0 ? "-" : "",
//         p = St(this._months) !== St(f) ? "-" : "",
//         m = St(this._days) !== St(f) ? "-" : "",
//         g = St(this._milliseconds) !== St(f) ? "-" : "";
//       return h + "P" + (s ? p + s + "Y" : "") + (a ? p + a + "M" : "") + (l ? m + l + "D" : "") + (u || c || d ? "T" : "") + (u ? g + u + "H" : "") + (c ? g + c + "M" : "") + (d ? g + d + "S" : "")
//     }
//     var kt, Tt;
//     Tt = Array.prototype.some ? Array.prototype.some : function (e) {
//       for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++)
//         if (i in t && e.call(this, t[i], i, t)) return !0;
//       return !1
//     };
//     var Et = e.momentProperties = [],
//       jt = !1,
//       Mt = {};
//     e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
//     var _t;
//     _t = Object.keys ? Object.keys : function (e) {
//       var t, n = [];
//       for (t in e) l(e, t) && n.push(t);
//       return n
//     };
//     var At = {
//       sameDay: "[Today at] LT",
//       nextDay: "[Tomorrow at] LT",
//       nextWeek: "dddd [at] LT",
//       lastDay: "[Yesterday at] LT",
//       lastWeek: "[Last] dddd [at] LT",
//       sameElse: "L"
//     },
//       Dt = {
//         LTS: "h:mm:ss A",
//         LT: "h:mm A",
//         L: "MM/DD/YYYY",
//         LL: "MMMM D, YYYY",
//         LLL: "MMMM D, YYYY h:mm A",
//         LLLL: "dddd, MMMM D, YYYY h:mm A"
//       },
//       Ot = /\d{1,2}/,
//       Pt = {
//         future: "in %s",
//         past: "%s ago",
//         s: "a few seconds",
//         ss: "%d seconds",
//         m: "a minute",
//         mm: "%d minutes",
//         h: "an hour",
//         hh: "%d hours",
//         d: "a day",
//         dd: "%d days",
//         M: "a month",
//         MM: "%d months",
//         y: "a year",
//         yy: "%d years"
//       },
//       Nt = {},
//       Ft = {},
//       It = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
//       Rt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
//       zt = {},
//       Lt = {},
//       Ht = /\d/,
//       Vt = /\d\d/,
//       Ut = /\d{3}/,
//       Bt = /\d{4}/,
//       qt = /[+-]?\d{6}/,
//       Wt = /\d\d?/,
//       Yt = /\d\d\d\d?/,
//       Gt = /\d\d\d\d\d\d?/,
//       Zt = /\d{1,3}/,
//       Xt = /\d{1,4}/,
//       Kt = /[+-]?\d{1,6}/,
//       Jt = /\d+/,
//       Qt = /[+-]?\d+/,
//       en = /Z|[+-]\d\d:?\d\d/gi,
//       tn = /Z|[+-]\d\d(?::?\d\d)?/gi,
//       nn = /[+-]?\d+(\.\d{1,3})?/,
//       rn = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
//       on = {},
//       sn = {},
//       an = 0,
//       ln = 1,
//       un = 2,
//       cn = 3,
//       dn = 4,
//       fn = 5,
//       hn = 6,
//       pn = 7,
//       mn = 8;
//     O("Y", 0, 0, function () {
//       var e = this.year();
//       return e <= 9999 ? "" + e : "+" + e
//     }), O(0, ["YY", 2], 0, function () {
//       return this.year() % 100
//     }), O(0, ["YYYY", 4], 0, "year"), O(0, ["YYYYY", 5], 0, "year"), O(0, ["YYYYYY", 6, !0], 0, "year"), E("year", "y"), _("year", 1), R("Y", Qt), R("YY", Wt, Vt), R("YYYY", Xt, Bt), R("YYYYY", Kt, qt), R("YYYYYY", Kt, qt), V(["YYYYY", "YYYYYY"], an), V("YYYY", function (t, n) {
//       n[an] = 2 === t.length ? e.parseTwoDigitYear(t) : b(t)
//     }), V("YY", function (t, n) {
//       n[an] = e.parseTwoDigitYear(t)
//     }), V("Y", function (e, t) {
//       t[an] = parseInt(e, 10)
//     }), e.parseTwoDigitYear = function (e) {
//       return b(e) + (b(e) > 68 ? 1900 : 2e3)
//     };
//     var gn, vn = Y("FullYear", !0);
//     gn = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
//       var t;
//       for (t = 0; t < this.length; ++t)
//         if (this[t] === e) return t;
//       return -1
//     }, O("M", ["MM", 2], "Mo", function () {
//       return this.month() + 1
//     }), O("MMM", 0, 0, function (e) {
//       return this.localeData().monthsShort(this, e)
//     }), O("MMMM", 0, 0, function (e) {
//       return this.localeData().months(this, e)
//     }), E("month", "M"), _("month", 8), R("M", Wt), R("MM", Wt, Vt), R("MMM", function (e, t) {
//       return t.monthsShortRegex(e)
//     }), R("MMMM", function (e, t) {
//       return t.monthsRegex(e)
//     }), V(["M", "MM"], function (e, t) {
//       t[ln] = b(e) - 1
//     }), V(["MMM", "MMMM"], function (e, t, n, i) {
//       var r = n._locale.monthsParse(e, i, n._strict);
//       null != r ? t[ln] = r : f(n).invalidMonth = e
//     });
//     var yn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
//       bn = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
//       $n = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
//       wn = rn,
//       xn = rn;
//     O("w", ["ww", 2], "wo", "week"), O("W", ["WW", 2], "Wo", "isoWeek"), E("week", "w"), E("isoWeek", "W"), _("week", 5), _("isoWeek", 5), R("w", Wt), R("ww", Wt, Vt), R("W", Wt), R("WW", Wt, Vt), U(["w", "ww", "W", "WW"], function (e, t, n, i) {
//       t[i.substr(0, 1)] = b(e)
//     });
//     var Sn = {
//       dow: 0,
//       doy: 6
//     };
//     O("d", 0, "do", "day"), O("dd", 0, 0, function (e) {
//       return this.localeData().weekdaysMin(this, e)
//     }), O("ddd", 0, 0, function (e) {
//       return this.localeData().weekdaysShort(this, e)
//     }), O("dddd", 0, 0, function (e) {
//       return this.localeData().weekdays(this, e)
//     }), O("e", 0, 0, "weekday"), O("E", 0, 0, "isoWeekday"), E("day", "d"), E("weekday", "e"), E("isoWeekday", "E"), _("day", 11), _("weekday", 11), _("isoWeekday", 11), R("d", Wt), R("e", Wt), R("E", Wt), R("dd", function (e, t) {
//       return t.weekdaysMinRegex(e)
//     }), R("ddd", function (e, t) {
//       return t.weekdaysShortRegex(e)
//     }), R("dddd", function (e, t) {
//       return t.weekdaysRegex(e)
//     }), U(["dd", "ddd", "dddd"], function (e, t, n, i) {
//       var r = n._locale.weekdaysParse(e, i, n._strict);
//       null != r ? t.d = r : f(n).invalidWeekday = e
//     }), U(["d", "e", "E"], function (e, t, n, i) {
//       t[i] = b(e)
//     });
//     var Cn = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
//       kn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
//       Tn = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
//       En = rn,
//       jn = rn,
//       Mn = rn;
//     O("H", ["HH", 2], 0, "hour"), O("h", ["hh", 2], 0, fe), O("k", ["kk", 2], 0, function () {
//       return this.hours() || 24
//     }), O("hmm", 0, 0, function () {
//       return "" + fe.apply(this) + D(this.minutes(), 2)
//     }), O("hmmss", 0, 0, function () {
//       return "" + fe.apply(this) + D(this.minutes(), 2) + D(this.seconds(), 2)
//     }), O("Hmm", 0, 0, function () {
//       return "" + this.hours() + D(this.minutes(), 2)
//     }), O("Hmmss", 0, 0, function () {
//       return "" + this.hours() + D(this.minutes(), 2) + D(this.seconds(), 2)
//     }), he("a", !0), he("A", !1), E("hour", "h"), _("hour", 13), R("a", pe), R("A", pe), R("H", Wt), R("h", Wt), R("k", Wt), R("HH", Wt, Vt), R("hh", Wt, Vt), R("kk", Wt, Vt), R("hmm", Yt), R("hmmss", Gt), R("Hmm", Yt), R("Hmmss", Gt), V(["H", "HH"], cn), V(["k", "kk"], function (e, t, n) {
//       var i = b(e);
//       t[cn] = 24 === i ? 0 : i
//     }), V(["a", "A"], function (e, t, n) {
//       n._isPm = n._locale.isPM(e), n._meridiem = e
//     }), V(["h", "hh"], function (e, t, n) {
//       t[cn] = b(e), f(n).bigHour = !0
//     }), V("hmm", function (e, t, n) {
//       var i = e.length - 2;
//       t[cn] = b(e.substr(0, i)), t[dn] = b(e.substr(i)), f(n).bigHour = !0
//     }), V("hmmss", function (e, t, n) {
//       var i = e.length - 4,
//         r = e.length - 2;
//       t[cn] = b(e.substr(0, i)), t[dn] = b(e.substr(i, 2)), t[fn] = b(e.substr(r)), f(n).bigHour = !0
//     }), V("Hmm", function (e, t, n) {
//       var i = e.length - 2;
//       t[cn] = b(e.substr(0, i)), t[dn] = b(e.substr(i))
//     }), V("Hmmss", function (e, t, n) {
//       var i = e.length - 4,
//         r = e.length - 2;
//       t[cn] = b(e.substr(0, i)), t[dn] = b(e.substr(i, 2)), t[fn] = b(e.substr(r))
//     });
//     var _n, An = /[ap]\.?m?\.?/i,
//       Dn = Y("Hours", !0),
//       On = {
//         calendar: At,
//         longDateFormat: Dt,
//         invalidDate: "Invalid date",
//         ordinal: "%d",
//         dayOfMonthOrdinalParse: Ot,
//         relativeTime: Pt,
//         months: bn,
//         monthsShort: $n,
//         week: Sn,
//         weekdays: Cn,
//         weekdaysMin: Tn,
//         weekdaysShort: kn,
//         meridiemParse: An
//       },
//       Pn = {},
//       Nn = {},
//       Fn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
//       In = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
//       Rn = /Z|[+-]\d\d(?::?\d\d)?/,
//       zn = [
//         ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
//         ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
//         ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
//         ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
//         ["YYYY-DDD", /\d{4}-\d{3}/],
//         ["YYYY-MM", /\d{4}-\d\d/, !1],
//         ["YYYYYYMMDD", /[+-]\d{10}/],
//         ["YYYYMMDD", /\d{8}/],
//         ["GGGG[W]WWE", /\d{4}W\d{3}/],
//         ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
//         ["YYYYDDD", /\d{7}/]
//       ],
//       Ln = [
//         ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
//         ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
//         ["HH:mm:ss", /\d\d:\d\d:\d\d/],
//         ["HH:mm", /\d\d:\d\d/],
//         ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
//         ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
//         ["HHmmss", /\d\d\d\d\d\d/],
//         ["HHmm", /\d\d\d\d/],
//         ["HH", /\d\d/]
//       ],
//       Hn = /^\/?Date\((\-?\d+)/i,
//       Vn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
//       Un = {
//         UT: 0,
//         GMT: 0,
//         EDT: -240,
//         EST: -300,
//         CDT: -300,
//         CST: -360,
//         MDT: -360,
//         MST: -420,
//         PDT: -420,
//         PST: -480
//       };
//     e.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
//       e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
//     }), e.ISO_8601 = function () { }, e.RFC_2822 = function () { };
//     var Bn = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
//       var e = Ve.apply(null, arguments);
//       return this.isValid() && e.isValid() ? e < this ? this : e : p()
//     }),
//       qn = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
//         var e = Ve.apply(null, arguments);
//         return this.isValid() && e.isValid() ? e > this ? this : e : p()
//       }),
//       Wn = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
//     Ge("Z", ":"), Ge("ZZ", ""), R("Z", tn), R("ZZ", tn), V(["Z", "ZZ"], function (e, t, n) {
//       n._useUTC = !0, n._tzm = Ze(tn, e)
//     });
//     var Yn = /([\+\-]|\d\d)/gi;
//     e.updateOffset = function () { };
//     var Gn = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
//       Zn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
//     Qe.fn = qe.prototype, Qe.invalid = function () {
//       return Qe(NaN)
//     };
//     var Xn = it(1, "add"),
//       Kn = it(-1, "subtract");
//     e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
//     var Jn = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
//       return void 0 === e ? this.localeData() : this.locale(e)
//     });
//     O(0, ["gg", 2], 0, function () {
//       return this.weekYear() % 100
//     }), O(0, ["GG", 2], 0, function () {
//       return this.isoWeekYear() % 100
//     }), lt("gggg", "weekYear"), lt("ggggg", "weekYear"), lt("GGGG", "isoWeekYear"), lt("GGGGG", "isoWeekYear"), E("weekYear", "gg"), E("isoWeekYear", "GG"), _("weekYear", 1), _("isoWeekYear", 1), R("G", Qt), R("g", Qt), R("GG", Wt, Vt), R("gg", Wt, Vt), R("GGGG", Xt, Bt), R("gggg", Xt, Bt), R("GGGGG", Kt, qt), R("ggggg", Kt, qt), U(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, i) {
//       t[i.substr(0, 2)] = b(e)
//     }), U(["gg", "GG"], function (t, n, i, r) {
//       n[r] = e.parseTwoDigitYear(t)
//     }), O("Q", 0, "Qo", "quarter"), E("quarter", "Q"), _("quarter", 7), R("Q", Ht), V("Q", function (e, t) {
//       t[ln] = 3 * (b(e) - 1)
//     }), O("D", ["DD", 2], "Do", "date"), E("date", "D"), _("date", 9), R("D", Wt), R("DD", Wt, Vt), R("Do", function (e, t) {
//       return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
//     }), V(["D", "DD"], un), V("Do", function (e, t) {
//       t[un] = b(e.match(Wt)[0])
//     });
//     var Qn = Y("Date", !0);
//     O("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), E("dayOfYear", "DDD"), _("dayOfYear", 4), R("DDD", Zt), R("DDDD", Ut), V(["DDD", "DDDD"], function (e, t, n) {
//       n._dayOfYear = b(e)
//     }), O("m", ["mm", 2], 0, "minute"), E("minute", "m"), _("minute", 14), R("m", Wt), R("mm", Wt, Vt), V(["m", "mm"], dn);
//     var ei = Y("Minutes", !1);
//     O("s", ["ss", 2], 0, "second"), E("second", "s"), _("second", 15), R("s", Wt), R("ss", Wt, Vt), V(["s", "ss"], fn);
//     var ti = Y("Seconds", !1);
//     O("S", 0, 0, function () {
//       return ~~(this.millisecond() / 100)
//     }), O(0, ["SS", 2], 0, function () {
//       return ~~(this.millisecond() / 10)
//     }), O(0, ["SSS", 3], 0, "millisecond"), O(0, ["SSSS", 4], 0, function () {
//       return 10 * this.millisecond()
//     }), O(0, ["SSSSS", 5], 0, function () {
//       return 100 * this.millisecond()
//     }), O(0, ["SSSSSS", 6], 0, function () {
//       return 1e3 * this.millisecond()
//     }), O(0, ["SSSSSSS", 7], 0, function () {
//       return 1e4 * this.millisecond()
//     }), O(0, ["SSSSSSSS", 8], 0, function () {
//       return 1e5 * this.millisecond()
//     }), O(0, ["SSSSSSSSS", 9], 0, function () {
//       return 1e6 * this.millisecond()
//     }), E("millisecond", "ms"), _("millisecond", 16), R("S", Zt, Ht), R("SS", Zt, Vt), R("SSS", Zt, Ut);
//     var ni;
//     for (ni = "SSSS"; ni.length <= 9; ni += "S") R(ni, Jt);
//     for (ni = "S"; ni.length <= 9; ni += "S") V(ni, function (e, t) {
//       t[hn] = b(1e3 * ("0." + e))
//     });
//     var ii = Y("Milliseconds", !1);
//     O("z", 0, 0, "zoneAbbr"), O("zz", 0, 0, "zoneName");
//     var ri = g.prototype;
//     ri.add = Xn, ri.calendar = function (t, n) {
//       var i = t || Ve(),
//         r = Xe(i, this).startOf("day"),
//         o = e.calendarFormat(this, r) || "sameElse",
//         s = n && (C(n[o]) ? n[o].call(this, i) : n[o]);
//       return this.format(s || this.localeData().calendar(o, this, Ve(i)))
//     }, ri.clone = function () {
//       return new g(this)
//     }, ri.diff = function (e, t, n) {
//       var i, r, o;
//       if (!this.isValid()) return NaN;
//       if (!(i = Xe(e, this)).isValid()) return NaN;
//       switch (r = 6e4 * (i.utcOffset() - this.utcOffset()), t = j(t)) {
//         case "year":
//           o = ot(this, i) / 12;
//           break;
//         case "month":
//           o = ot(this, i);
//           break;
//         case "quarter":
//           o = ot(this, i) / 3;
//           break;
//         case "second":
//           o = (this - i) / 1e3;
//           break;
//         case "minute":
//           o = (this - i) / 6e4;
//           break;
//         case "hour":
//           o = (this - i) / 36e5;
//           break;
//         case "day":
//           o = (this - i - r) / 864e5;
//           break;
//         case "week":
//           o = (this - i - r) / 6048e5;
//           break;
//         default:
//           o = this - i
//       }
//       return n ? o : y(o)
//     }, ri.endOf = function (e) {
//       return void 0 === (e = j(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
//     }, ri.format = function (t) {
//       t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
//       var n = F(this, t);
//       return this.localeData().postformat(n)
//     }, ri.from = function (e, t) {
//       return this.isValid() && (v(e) && e.isValid() || Ve(e).isValid()) ? Qe({
//         to: this,
//         from: e
//       }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
//     }, ri.fromNow = function (e) {
//       return this.from(Ve(), e)
//     }, ri.to = function (e, t) {
//       return this.isValid() && (v(e) && e.isValid() || Ve(e).isValid()) ? Qe({
//         from: this,
//         to: e
//       }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
//     }, ri.toNow = function (e) {
//       return this.to(Ve(), e)
//     }, ri.get = function (e) {
//       return e = j(e), C(this[e]) ? this[e]() : this
//     }, ri.invalidAt = function () {
//       return f(this).overflow
//     }, ri.isAfter = function (e, t) {
//       var n = v(e) ? e : Ve(e);
//       return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = j(r(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
//     }, ri.isBefore = function (e, t) {
//       var n = v(e) ? e : Ve(e);
//       return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = j(r(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
//     }, ri.isBetween = function (e, t, n, i) {
//       return ("(" === (i = i || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === i[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
//     }, ri.isSame = function (e, t) {
//       var n, i = v(e) ? e : Ve(e);
//       return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = j(t || "millisecond")) ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
//     }, ri.isSameOrAfter = function (e, t) {
//       return this.isSame(e, t) || this.isAfter(e, t)
//     }, ri.isSameOrBefore = function (e, t) {
//       return this.isSame(e, t) || this.isBefore(e, t)
//     }, ri.isValid = function () {
//       return h(this)
//     }, ri.lang = Jn, ri.locale = st, ri.localeData = at, ri.max = qn, ri.min = Bn, ri.parsingFlags = function () {
//       return u({}, f(this))
//     }, ri.set = function (e, t) {
//       if ("object" == typeof e)
//         for (var n = A(e = M(e)), i = 0; i < n.length; i++) this[n[i].unit](e[n[i].unit]);
//       else if (e = j(e), C(this[e])) return this[e](t);
//       return this
//     }, ri.startOf = function (e) {
//       switch (e = j(e)) {
//         case "year":
//           this.month(0);
//         case "quarter":
//         case "month":
//           this.date(1);
//         case "week":
//         case "isoWeek":
//         case "day":
//         case "date":
//           this.hours(0);
//         case "hour":
//           this.minutes(0);
//         case "minute":
//           this.seconds(0);
//         case "second":
//           this.milliseconds(0)
//       }
//       return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
//     }, ri.subtract = Kn, ri.toArray = function () {
//       var e = this;
//       return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
//     }, ri.toObject = function () {
//       var e = this;
//       return {
//         years: e.year(),
//         months: e.month(),
//         date: e.date(),
//         hours: e.hours(),
//         minutes: e.minutes(),
//         seconds: e.seconds(),
//         milliseconds: e.milliseconds()
//       }
//     }, ri.toDate = function () {
//       return new Date(this.valueOf())
//     }, ri.toISOString = function (e) {
//       if (!this.isValid()) return null;
//       var t = !0 !== e,
//         n = t ? this.clone().utc() : this;
//       return n.year() < 0 || n.year() > 9999 ? F(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : C(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", F(n, "Z")) : F(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
//     }, ri.inspect = function () {
//       if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
//       var e = "moment",
//         t = "";
//       this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
//       var n = "[" + e + '("]',
//         i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
//         r = t + '[")]';
//       return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + r)
//     }, ri.toJSON = function () {
//       return this.isValid() ? this.toISOString() : null
//     }, ri.toString = function () {
//       return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
//     }, ri.unix = function () {
//       return Math.floor(this.valueOf() / 1e3)
//     }, ri.valueOf = function () {
//       return this._d.valueOf() - 6e4 * (this._offset || 0)
//     }, ri.creationData = function () {
//       return {
//         input: this._i,
//         format: this._f,
//         locale: this._locale,
//         isUTC: this._isUTC,
//         strict: this._strict
//       }
//     }, ri.year = vn, ri.isLeapYear = function () {
//       return W(this.year())
//     }, ri.weekYear = function (e) {
//       return ut.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
//     }, ri.isoWeekYear = function (e) {
//       return ut.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
//     }, ri.quarter = ri.quarters = function (e) {
//       return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
//     }, ri.month = ee, ri.daysInMonth = function () {
//       return K(this.year(), this.month())
//     }, ri.week = ri.weeks = function (e) {
//       var t = this.localeData().week(this);
//       return null == e ? t : this.add(7 * (e - t), "d")
//     }, ri.isoWeek = ri.isoWeeks = function (e) {
//       var t = se(this, 1, 4).week;
//       return null == e ? t : this.add(7 * (e - t), "d")
//     }, ri.weeksInYear = function () {
//       var e = this.localeData()._week;
//       return ae(this.year(), e.dow, e.doy)
//     }, ri.isoWeeksInYear = function () {
//       return ae(this.year(), 1, 4)
//     }, ri.date = Qn, ri.day = ri.days = function (e) {
//       if (!this.isValid()) return null != e ? this : NaN;
//       var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
//       return null != e ? (e = le(e, this.localeData()), this.add(e - t, "d")) : t
//     }, ri.weekday = function (e) {
//       if (!this.isValid()) return null != e ? this : NaN;
//       var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
//       return null == e ? t : this.add(e - t, "d")
//     }, ri.isoWeekday = function (e) {
//       if (!this.isValid()) return null != e ? this : NaN;
//       if (null != e) {
//         var t = ue(e, this.localeData());
//         return this.day(this.day() % 7 ? t : t - 7)
//       }
//       return this.day() || 7
//     }, ri.dayOfYear = function (e) {
//       var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
//       return null == e ? t : this.add(e - t, "d")
//     }, ri.hour = ri.hours = Dn, ri.minute = ri.minutes = ei, ri.second = ri.seconds = ti, ri.millisecond = ri.milliseconds = ii, ri.utcOffset = function (t, n, i) {
//       var r, o = this._offset || 0;
//       if (!this.isValid()) return null != t ? this : NaN;
//       if (null != t) {
//         if ("string" == typeof t) {
//           if (null === (t = Ze(tn, t))) return this
//         } else Math.abs(t) < 16 && !i && (t *= 60);
//         return !this._isUTC && n && (r = Ke(this)), this._offset = t, this._isUTC = !0, null != r && this.add(r, "m"), o !== t && (!n || this._changeInProgress ? rt(this, Qe(t - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this
//       }
//       return this._isUTC ? o : Ke(this)
//     }, ri.utc = function (e) {
//       return this.utcOffset(0, e)
//     }, ri.local = function (e) {
//       return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ke(this), "m")), this
//     }, ri.parseZone = function () {
//       if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
//       else if ("string" == typeof this._i) {
//         var e = Ze(en, this._i);
//         null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
//       }
//       return this
//     }, ri.hasAlignedHourOffset = function (e) {
//       return !!this.isValid() && (e = e ? Ve(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
//     }, ri.isDST = function () {
//       return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
//     }, ri.isLocal = function () {
//       return !!this.isValid() && !this._isUTC
//     }, ri.isUtcOffset = function () {
//       return !!this.isValid() && this._isUTC
//     }, ri.isUtc = Je, ri.isUTC = Je, ri.zoneAbbr = function () {
//       return this._isUTC ? "UTC" : ""
//     }, ri.zoneName = function () {
//       return this._isUTC ? "Coordinated Universal Time" : ""
//     }, ri.dates = x("dates accessor is deprecated. Use date instead.", Qn), ri.months = x("months accessor is deprecated. Use month instead", ee), ri.years = x("years accessor is deprecated. Use year instead", vn), ri.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
//       return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
//     }), ri.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
//       if (!r(this._isDSTShifted)) return this._isDSTShifted;
//       var e = {};
//       if (m(e, this), (e = ze(e))._a) {
//         var t = e._isUTC ? c(e._a) : Ve(e._a);
//         this._isDSTShifted = this.isValid() && $(e._a, t.toArray()) > 0
//       } else this._isDSTShifted = !1;
//       return this._isDSTShifted
//     });
//     var oi = T.prototype;
//     oi.calendar = function (e, t, n) {
//       var i = this._calendar[e] || this._calendar.sameElse;
//       return C(i) ? i.call(t, n) : i
//     }, oi.longDateFormat = function (e) {
//       var t = this._longDateFormat[e],
//         n = this._longDateFormat[e.toUpperCase()];
//       return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
//         return e.slice(1)
//       }), this._longDateFormat[e])
//     }, oi.invalidDate = function () {
//       return this._invalidDate
//     }, oi.ordinal = function (e) {
//       return this._ordinal.replace("%d", e)
//     }, oi.preparse = dt, oi.postformat = dt, oi.relativeTime = function (e, t, n, i) {
//       var r = this._relativeTime[n];
//       return C(r) ? r(e, t, n, i) : r.replace(/%d/i, e)
//     }, oi.pastFuture = function (e, t) {
//       var n = this._relativeTime[e > 0 ? "future" : "past"];
//       return C(n) ? n(t) : n.replace(/%s/i, t)
//     }, oi.set = function (e) {
//       var t, n;
//       for (n in e) C(t = e[n]) ? this[n] = t : this["_" + n] = t;
//       this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
//     }, oi.months = function (e, n) {
//       return e ? t(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || yn).test(n) ? "format" : "standalone"][e.month()] : t(this._months) ? this._months : this._months.standalone
//     }, oi.monthsShort = function (e, n) {
//       return e ? t(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[yn.test(n) ? "format" : "standalone"][e.month()] : t(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
//     }, oi.monthsParse = function (e, t, n) {
//       var i, r, o;
//       if (this._monthsParseExact) return J.call(this, e, t, n);
//       for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
//         if (r = c([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
//         if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
//         if (!n && this._monthsParse[i].test(e)) return i
//       }
//     }, oi.monthsRegex = function (e) {
//       return this._monthsParseExact ? (l(this, "_monthsRegex") || te.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = xn), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
//     }, oi.monthsShortRegex = function (e) {
//       return this._monthsParseExact ? (l(this, "_monthsRegex") || te.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = wn), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
//     }, oi.week = function (e) {
//       return se(e, this._week.dow, this._week.doy).week
//     }, oi.firstDayOfYear = function () {
//       return this._week.doy
//     }, oi.firstDayOfWeek = function () {
//       return this._week.dow
//     }, oi.weekdays = function (e, n) {
//       return e ? t(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(n) ? "format" : "standalone"][e.day()] : t(this._weekdays) ? this._weekdays : this._weekdays.standalone
//     }, oi.weekdaysMin = function (e) {
//       return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
//     }, oi.weekdaysShort = function (e) {
//       return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
//     }, oi.weekdaysParse = function (e, t, n) {
//       var i, r, o;
//       if (this._weekdaysParseExact) return ce.call(this, e, t, n);
//       for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
//         if (r = c([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i;
//         if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;
//         if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
//         if (!n && this._weekdaysParse[i].test(e)) return i
//       }
//     }, oi.weekdaysRegex = function (e) {
//       return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || de.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = En), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
//     }, oi.weekdaysShortRegex = function (e) {
//       return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || de.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = jn), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
//     }, oi.weekdaysMinRegex = function (e) {
//       return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || de.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Mn), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
//     }, oi.isPM = function (e) {
//       return "p" === (e + "").toLowerCase().charAt(0)
//     }, oi.meridiem = function (e, t, n) {
//       return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
//     }, ye("en", {
//       dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
//       ordinal: function (e) {
//         var t = e % 10;
//         return e + (1 === b(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
//       }
//     }), e.lang = x("moment.lang is deprecated. Use moment.locale instead.", ye), e.langData = x("moment.langData is deprecated. Use moment.localeData instead.", $e);
//     var si = Math.abs,
//       ai = bt("ms"),
//       li = bt("s"),
//       ui = bt("m"),
//       ci = bt("h"),
//       di = bt("d"),
//       fi = bt("w"),
//       hi = bt("M"),
//       pi = bt("y"),
//       mi = $t("milliseconds"),
//       gi = $t("seconds"),
//       vi = $t("minutes"),
//       yi = $t("hours"),
//       bi = $t("days"),
//       $i = $t("months"),
//       wi = $t("years"),
//       xi = Math.round,
//       Si = {
//         ss: 44,
//         s: 45,
//         m: 45,
//         h: 22,
//         d: 26,
//         M: 11
//       },
//       Ci = Math.abs,
//       ki = qe.prototype;
//     return ki.isValid = function () {
//       return this._isValid
//     }, ki.abs = function () {
//       var e = this._data;
//       return this._milliseconds = si(this._milliseconds), this._days = si(this._days), this._months = si(this._months), e.milliseconds = si(e.milliseconds), e.seconds = si(e.seconds), e.minutes = si(e.minutes), e.hours = si(e.hours), e.months = si(e.months), e.years = si(e.years), this
//     }, ki.add = function (e, t) {
//       return mt(this, e, t, 1)
//     }, ki.subtract = function (e, t) {
//       return mt(this, e, t, -1)
//     }, ki.as = function (e) {
//       if (!this.isValid()) return NaN;
//       var t, n, i = this._milliseconds;
//       if ("month" === (e = j(e)) || "year" === e) return t = this._days + i / 864e5, n = this._months + vt(t), "month" === e ? n : n / 12;
//       switch (t = this._days + Math.round(yt(this._months)), e) {
//         case "week":
//           return t / 7 + i / 6048e5;
//         case "day":
//           return t + i / 864e5;
//         case "hour":
//           return 24 * t + i / 36e5;
//         case "minute":
//           return 1440 * t + i / 6e4;
//         case "second":
//           return 86400 * t + i / 1e3;
//         case "millisecond":
//           return Math.floor(864e5 * t) + i;
//         default:
//           throw new Error("Unknown unit " + e)
//       }
//     }, ki.asMilliseconds = ai, ki.asSeconds = li, ki.asMinutes = ui, ki.asHours = ci, ki.asDays = di, ki.asWeeks = fi, ki.asMonths = hi, ki.asYears = pi, ki.valueOf = function () {
//       return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12) : NaN
//     }, ki._bubble = function () {
//       var e, t, n, i, r, o = this._milliseconds,
//         s = this._days,
//         a = this._months,
//         l = this._data;
//       return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * gt(yt(a) + s), s = 0, a = 0), l.milliseconds = o % 1e3, e = y(o / 1e3), l.seconds = e % 60, t = y(e / 60), l.minutes = t % 60, n = y(t / 60), l.hours = n % 24, s += y(n / 24), r = y(vt(s)), a += r, s -= gt(yt(r)), i = y(a / 12), a %= 12, l.days = s, l.months = a, l.years = i, this
//     }, ki.clone = function () {
//       return Qe(this)
//     }, ki.get = function (e) {
//       return e = j(e), this.isValid() ? this[e + "s"]() : NaN
//     }, ki.milliseconds = mi, ki.seconds = gi, ki.minutes = vi, ki.hours = yi, ki.days = bi, ki.weeks = function () {
//       return y(this.days() / 7)
//     }, ki.months = $i, ki.years = wi, ki.humanize = function (e) {
//       if (!this.isValid()) return this.localeData().invalidDate();
//       var t = this.localeData(),
//         n = xt(this, !e, t);
//       return e && (n = t.pastFuture(+this, n)), t.postformat(n)
//     }, ki.toISOString = Ct, ki.toString = Ct, ki.toJSON = Ct, ki.locale = st, ki.localeData = at, ki.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ct), ki.lang = Jn, O("X", 0, 0, "unix"), O("x", 0, 0, "valueOf"), R("x", Qt), R("X", nn), V("X", function (e, t, n) {
//       n._d = new Date(1e3 * parseFloat(e, 10))
//     }), V("x", function (e, t, n) {
//       n._d = new Date(b(e))
//     }), e.version = "2.20.1",
//       function (e) {
//         kt = e
//       }(Ve), e.fn = ri, e.min = function () {
//         return Ue("isBefore", [].slice.call(arguments, 0))
//       }, e.max = function () {
//         return Ue("isAfter", [].slice.call(arguments, 0))
//       }, e.now = function () {
//         return Date.now ? Date.now() : +new Date
//       }, e.utc = c, e.unix = function (e) {
//         return Ve(1e3 * e)
//       }, e.months = function (e, t) {
//         return ht(e, t, "months")
//       }, e.isDate = s, e.locale = ye, e.invalid = p, e.duration = Qe, e.isMoment = v, e.weekdays = function (e, t, n) {
//         return pt(e, t, n, "weekdays")
//       }, e.parseZone = function () {
//         return Ve.apply(null, arguments).parseZone()
//       }, e.localeData = $e, e.isDuration = We, e.monthsShort = function (e, t) {
//         return ht(e, t, "monthsShort")
//       }, e.weekdaysMin = function (e, t, n) {
//         return pt(e, t, n, "weekdaysMin")
//       }, e.defineLocale = be, e.updateLocale = function (e, t) {
//         if (null != t) {
//           var n, i, r = On;
//           null != (i = ve(e)) && (r = i._config), (n = new T(t = k(r, t))).parentLocale = Pn[e], Pn[e] = n, ye(e)
//         } else null != Pn[e] && (null != Pn[e].parentLocale ? Pn[e] = Pn[e].parentLocale : null != Pn[e] && delete Pn[e]);
//         return Pn[e]
//       }, e.locales = function () {
//         return _t(Pn)
//       }, e.weekdaysShort = function (e, t, n) {
//         return pt(e, t, n, "weekdaysShort")
//       }, e.normalizeUnits = j, e.relativeTimeRounding = function (e) {
//         return void 0 === e ? xi : "function" == typeof e && (xi = e, !0)
//       }, e.relativeTimeThreshold = function (e, t) {
//         return void 0 !== Si[e] && (void 0 === t ? Si[e] : (Si[e] = t, "s" === e && (Si.ss = t - 1), !0))
//       }, e.calendarFormat = function (e, t) {
//         var n = e.diff(t, "days", !0);
//         return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
//       }, e.prototype = ri, e.HTML5_FMT = {
//         DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
//         DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
//         DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
//         DATE: "YYYY-MM-DD",
//         TIME: "HH:mm",
//         TIME_SECONDS: "HH:mm:ss",
//         TIME_MS: "HH:mm:ss.SSS",
//         WEEK: "YYYY-[W]WW",
//         MONTH: "YYYY-MM"
//       }, e
//   });
// var timerModule = angular.module("timer", []).directive("timer", ["$compile", function (e) {
//   return {
//     restrict: "EA",
//     replace: !1,
//     scope: {
//       interval: "=interval",
//       startTimeAttr: "=startTime",
//       endTimeAttr: "=endTime",
//       countdownattr: "=countdown",
//       finishCallback: "&finishCallback",
//       autoStart: "&autoStart",
//       language: "@?",
//       fallback: "@?",
//       maxTimeUnit: "=",
//       seconds: "=?",
//       minutes: "=?",
//       hours: "=?",
//       days: "=?",
//       months: "=?",
//       years: "=?",
//       secondsS: "=?",
//       minutesS: "=?",
//       hoursS: "=?",
//       daysS: "=?",
//       monthsS: "=?",
//       yearsS: "=?"
//     },
//     controller: ["$scope", "$element", "$attrs", "$timeout", "I18nService", "$interpolate", "progressBarService", function (t, n, i, r, o, s, a) {
//       function l() {
//         t.timeoutId && clearTimeout(t.timeoutId)
//       }

//       function u() {
//         var e = {};
//         void 0 !== i.startTime && (t.millis = moment().diff(moment(t.startTimeAttr))), e = c.getTimeUnits(t.millis), t.maxTimeUnit && "day" !== t.maxTimeUnit ? "second" === t.maxTimeUnit ? (t.seconds = Math.floor(t.millis / 1e3), t.minutes = 0, t.hours = 0, t.days = 0, t.months = 0, t.years = 0) : "minute" === t.maxTimeUnit ? (t.seconds = Math.floor(t.millis / 1e3 % 60), t.minutes = Math.floor(t.millis / 6e4), t.hours = 0, t.days = 0, t.months = 0, t.years = 0) : "hour" === t.maxTimeUnit ? (t.seconds = Math.floor(t.millis / 1e3 % 60), t.minutes = Math.floor(t.millis / 6e4 % 60), t.hours = Math.floor(t.millis / 36e5), t.days = 0, t.months = 0, t.years = 0) : "month" === t.maxTimeUnit ? (t.seconds = Math.floor(t.millis / 1e3 % 60), t.minutes = Math.floor(t.millis / 6e4 % 60), t.hours = Math.floor(t.millis / 36e5 % 24), t.days = Math.floor(t.millis / 36e5 / 24 % 30), t.months = Math.floor(t.millis / 36e5 / 24 / 30), t.years = 0) : "year" === t.maxTimeUnit && (t.seconds = Math.floor(t.millis / 1e3 % 60), t.minutes = Math.floor(t.millis / 6e4 % 60), t.hours = Math.floor(t.millis / 36e5 % 24), t.days = Math.floor(t.millis / 36e5 / 24 % 30), t.months = Math.floor(t.millis / 36e5 / 24 / 30 % 12), t.years = Math.floor(t.millis / 36e5 / 24 / 365)) : (t.seconds = Math.floor(t.millis / 1e3 % 60), t.minutes = Math.floor(t.millis / 6e4 % 60), t.hours = Math.floor(t.millis / 36e5 % 24), t.days = Math.floor(t.millis / 36e5 / 24), t.months = 0, t.years = 0), t.secondsS = 1 === t.seconds ? "" : "s", t.minutesS = 1 === t.minutes ? "" : "s", t.hoursS = 1 === t.hours ? "" : "s", t.daysS = 1 === t.days ? "" : "s", t.monthsS = 1 === t.months ? "" : "s", t.yearsS = 1 === t.years ? "" : "s", t.secondUnit = e.seconds, t.minuteUnit = e.minutes, t.hourUnit = e.hours, t.dayUnit = e.days, t.monthUnit = e.months, t.yearUnit = e.years, t.sseconds = t.seconds < 10 ? "0" + t.seconds : t.seconds, t.mminutes = t.minutes < 10 ? "0" + t.minutes : t.minutes, t.hhours = t.hours < 10 ? "0" + t.hours : t.hours, t.ddays = t.days < 10 ? "0" + t.days : t.days, t.mmonths = t.months < 10 ? "0" + t.months : t.months, t.yyears = t.years < 10 ? "0" + t.years : t.years
//       }
//       "function" != typeof String.prototype.trim && (String.prototype.trim = function () {
//         return this.replace(/^\s+|\s+$/g, "")
//       }), t.autoStart = i.autoStart || i.autostart, t.language = t.language || "en", t.fallback = t.fallback || "en", t.$watch("language", function (e) {
//         void 0 !== e && c.init(e, t.fallback)
//       });
//       var c = new o;
//       c.init(t.language, t.fallback), t.displayProgressBar = 0, t.displayProgressActive = "active", n.append(0 === n.html().trim().length ? e("<span>" + s.startSymbol() + "millis" + s.endSymbol() + "</span>")(t) : e(n.contents())(t)), t.startTime = null, t.endTime = null, t.timeoutId = null, t.countdown = angular.isNumber(t.countdownattr) && parseInt(t.countdownattr, 10) >= 0 ? parseInt(t.countdownattr, 10) : void 0, t.isRunning = !1, t.$on("timer-start", function () {
//         t.start()
//       }), t.$on("timer-resume", function () {
//         t.resume()
//       }), t.$on("timer-stop", function () {
//         t.stop()
//       }), t.$on("timer-clear", function () {
//         t.clear()
//       }), t.$on("timer-reset", function () {
//         t.reset()
//       }), t.$on("timer-set-countdown", function (e, n) {
//         t.countdown = n
//       }), t.$watch("startTimeAttr", function (e, n) {
//         e !== n && t.isRunning && t.start()
//       }), t.$watch("endTimeAttr", function (e, n) {
//         e !== n && t.isRunning && t.start()
//       }), t.start = n[0].start = function () {
//         t.startTime = t.startTimeAttr ? moment(t.startTimeAttr) : moment(), t.endTime = t.endTimeAttr ? moment(t.endTimeAttr) : null, angular.isNumber(t.countdown) || (t.countdown = angular.isNumber(t.countdownattr) && parseInt(t.countdownattr, 10) > 0 ? parseInt(t.countdownattr, 10) : void 0), l(), d(), t.isRunning = !0
//       }, t.resume = n[0].resume = function () {
//         l(), t.countdownattr && (t.countdown += 1), t.startTime = moment().diff(moment(t.stoppedTime).diff(moment(t.startTime))), d(), t.isRunning = !0
//       }, t.stop = t.pause = n[0].stop = n[0].pause = function () {
//         var e = t.timeoutId;
//         t.clear(), t.$emit("timer-stopped", {
//           timeoutId: e,
//           millis: t.millis,
//           seconds: t.seconds,
//           minutes: t.minutes,
//           hours: t.hours,
//           days: t.days
//         })
//       }, t.clear = n[0].clear = function () {
//         t.stoppedTime = moment(), l(), t.timeoutId = null, t.isRunning = !1
//       }, t.reset = n[0].reset = function () {
//         t.startTime = t.startTimeAttr ? moment(t.startTimeAttr) : moment(), t.endTime = t.endTimeAttr ? moment(t.endTimeAttr) : null, t.countdown = angular.isNumber(t.countdownattr) && parseInt(t.countdownattr, 10) > 0 ? parseInt(t.countdownattr, 10) : void 0, l(), d(), t.isRunning = !1, t.clear()
//       }, n.bind("$destroy", function () {
//         l(), t.isRunning = !1
//       }), t.countdownattr ? (t.millis = 1e3 * t.countdownattr, t.addCDSeconds = n[0].addCDSeconds = function (e) {
//         t.countdown += e, t.$digest(), t.isRunning || t.start()
//       }, t.$on("timer-add-cd-seconds", function (e, n) {
//         r(function () {
//           t.addCDSeconds(n)
//         })
//       }), t.$on("timer-set-countdown-seconds", function (e, n) {
//         t.isRunning || t.clear(), t.countdown = n, t.millis = 1e3 * n, u()
//       })) : t.millis = 0, u();
//       var d = function e() {
//         var i = null;
//         t.millis = moment().diff(t.startTime);
//         var r = t.millis % 1e3;
//         return t.endTimeAttr && (i = t.endTimeAttr, t.millis = moment(t.endTime).diff(moment()), r = t.interval - t.millis % 1e3), t.countdownattr && (i = t.countdownattr, t.millis = 1e3 * t.countdown), t.millis < 0 ? (t.stop(), t.millis = 0, u(), void (t.finishCallback && t.$eval(t.finishCallback))) : (u(), t.timeoutId = setTimeout(function () {
//           e(), t.$digest()
//         }, t.interval - r), t.$emit("timer-tick", {
//           timeoutId: t.timeoutId,
//           millis: t.millis,
//           timerElement: n[0]
//         }), t.countdown > 0 ? t.countdown-- : t.countdown <= 0 && (t.stop(), t.finishCallback && t.$eval(t.finishCallback)), void (null !== i && (t.progressBar = a.calculateProgressBar(t.startTime, t.millis, t.endTime, t.countdownattr), 100 === t.progressBar && (t.displayProgressActive = ""))))
//       };
//       (void 0 === t.autoStart || !0 === t.autoStart) && t.start()
//     }]
//   }
// }]);
// "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = timerModule);
// var app = angular.module("timer");
// app.factory("I18nService", function () {
//   var e = function () { };
//   return e.prototype.language = "en", e.prototype.fallback = "en", e.prototype.timeHumanizer = {}, e.prototype.init = function (e, t) {
//     var n = humanizeDuration.getSupportedLanguages();
//     this.fallback = void 0 !== t ? t : "en", -1 === n.indexOf(t) && (this.fallback = "en"), this.language = e, -1 === n.indexOf(e) && (this.language = this.fallback), moment.locale(this.language), this.timeHumanizer = humanizeDuration.humanizer({
//       language: this.language,
//       halfUnit: !1
//     })
//   }, e.prototype.getTimeUnits = function (e) {
//     var t = 1e3 * Math.round(e / 1e3),
//       n = {};
//     return void 0 !== this.timeHumanizer ? n = {
//       millis: this.timeHumanizer(t, {
//         units: ["milliseconds"]
//       }),
//       seconds: this.timeHumanizer(t, {
//         units: ["seconds"]
//       }),
//       minutes: this.timeHumanizer(t, {
//         units: ["minutes", "seconds"]
//       }),
//       hours: this.timeHumanizer(t, {
//         units: ["hours", "minutes", "seconds"]
//       }),
//       days: this.timeHumanizer(t, {
//         units: ["days", "hours", "minutes", "seconds"]
//       }),
//       months: this.timeHumanizer(t, {
//         units: ["months", "days", "hours", "minutes", "seconds"]
//       }),
//       years: this.timeHumanizer(t, {
//         units: ["years", "months", "days", "hours", "minutes", "seconds"]
//       })
//     } : console.error('i18nService has not been initialized. You must call i18nService.init("en") for example'), n
//   }, e
// }), (app = angular.module("timer")).factory("progressBarService", function () {
//   var e = function () { };
//   return e.prototype.calculateProgressBar = function (e, t, n, i) {
//     var r, o, s = 0;
//     return t /= 1e3, null !== n ? (r = moment(n), o = r.diff(e, "seconds"), s = 100 * t / o) : s = 100 * t / i, s = 100 - s, (s = Math.round(10 * s) / 10) > 100 && (s = 100), s
//   }, new e
// }),
//   function (e, t) {
//     var n = t(e, e.document);
//     e.lazySizes = n, "object" == typeof module && module.exports && (module.exports = n)
//   }(window, function (e, t) {
//     "use strict";
//     if (t.getElementsByClassName) {
//       var n, i = t.documentElement,
//         r = e.Date,
//         o = e.HTMLPictureElement,
//         s = "addEventListener",
//         a = "getAttribute",
//         l = e[s],
//         u = e.setTimeout,
//         c = e.requestAnimationFrame || u,
//         d = e.requestIdleCallback,
//         f = /^picture$/i,
//         h = ["load", "error", "lazyincluded", "_lazyloaded"],
//         p = {},
//         m = Array.prototype.forEach,
//         g = function (e, t) {
//           return p[t] || (p[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), p[t].test(e[a]("class") || "") && p[t]
//         },
//         v = function (e, t) {
//           g(e, t) || e.setAttribute("class", (e[a]("class") || "").trim() + " " + t)
//         },
//         y = function (e, t) {
//           var n;
//           (n = g(e, t)) && e.setAttribute("class", (e[a]("class") || "").replace(n, " "))
//         },
//         b = function (e, t, n) {
//           var i = n ? s : "removeEventListener";
//           n && b(e, t), h.forEach(function (n) {
//             e[i](n, t)
//           })
//         },
//         $ = function (e, n, i, r, o) {
//           var s = t.createEvent("CustomEvent");
//           return s.initCustomEvent(n, !r, !o, i || {}), e.dispatchEvent(s), s
//         },
//         w = function (t, i) {
//           var r;
//           !o && (r = e.picturefill || n.pf) ? r({
//             reevaluate: !0,
//             elements: [t]
//           }) : i && i.src && (t.src = i.src)
//         },
//         x = function (e, t) {
//           return (getComputedStyle(e, null) || {})[t]
//         },
//         S = function (e, t, i) {
//           for (i = i || e.offsetWidth; i < n.minSize && t && !e._lazysizesWidth;) i = t.offsetWidth, t = t.parentNode;
//           return i
//         },
//         C = function () {
//           var e, n, i = [],
//             r = [],
//             o = i,
//             s = function () {
//               var t = o;
//               for (o = i.length ? r : i, e = !0, n = !1; t.length;) t.shift()();
//               e = !1
//             },
//             a = function (i, r) {
//               e && !r ? i.apply(this, arguments) : (o.push(i), n || (n = !0, (t.hidden ? u : c)(s)))
//             };
//           return a._lsFlush = s, a
//         }(),
//         k = function (e, t) {
//           return t ? function () {
//             C(e)
//           } : function () {
//             var t = this,
//               n = arguments;
//             C(function () {
//               e.apply(t, n)
//             })
//           }
//         },
//         T = function (e) {
//           var t, n = 0,
//             i = 666,
//             o = function () {
//               t = !1, n = r.now(), e()
//             },
//             s = d ? function () {
//               d(o, {
//                 timeout: i
//               }), 666 !== i && (i = 666)
//             } : k(function () {
//               u(o)
//             }, !0);
//           return function (e) {
//             var o;
//             (e = !0 === e) && (i = 44), t || (t = !0, 0 > (o = 125 - (r.now() - n)) && (o = 0), e || 9 > o && d ? s() : u(s, o))
//           }
//         },
//         E = function (e) {
//           var t, n, i = function () {
//             t = null, e()
//           },
//             o = function () {
//               var e = r.now() - n;
//               99 > e ? u(o, 99 - e) : (d || i)(i)
//             };
//           return function () {
//             n = r.now(), t || (t = u(o, 99))
//           }
//         },
//         j = function () {
//           var o, c, d, h, p, S, j, _, A, D, O, P, N, F, I, R = /^img$/i,
//             z = /^iframe$/i,
//             L = "onscroll" in e && !/glebot/.test(navigator.userAgent),
//             H = 0,
//             V = 0,
//             U = -1,
//             B = function (e) {
//               V-- , e && e.target && b(e.target, B), (!e || 0 > V || !e.target) && (V = 0)
//             },
//             q = function (e, n) {
//               var r, o = e,
//                 s = "hidden" == x(t.body, "visibility") || "hidden" != x(e, "visibility");
//               for (A -= n, P += n, D -= n, O += n; s && (o = o.offsetParent) && o != t.body && o != i;)(s = (x(o, "opacity") || 1) > 0) && "visible" != x(o, "overflow") && (r = o.getBoundingClientRect(), s = O > r.left && D < r.right && P > r.top - 1 && A < r.bottom + 1);
//               return s
//             },
//             W = function () {
//               var e, r, s, l, u, f, h, m, g;
//               if ((p = n.loadMode) && 8 > V && (e = o.length)) {
//                 r = 0, U++ , null == F && ("expand" in n || (n.expand = i.clientHeight > 500 && i.clientWidth > 500 ? 500 : 370), N = n.expand, F = N * n.expFactor), F > H && 1 > V && U > 2 && p > 2 && !t.hidden ? (H = F, U = 0) : H = p > 1 && U > 1 && 6 > V ? N : 0;
//                 for (; e > r; r++)
//                   if (o[r] && !o[r]._lazyRace)
//                     if (L)
//                       if ((m = o[r][a]("data-expand")) && (f = 1 * m) || (f = H), g !== f && (j = innerWidth + f * I, _ = innerHeight + f, h = -1 * f, g = f), s = o[r].getBoundingClientRect(), (P = s.bottom) >= h && (A = s.top) <= _ && (O = s.right) >= h * I && (D = s.left) <= j && (P || O || D || A) && (d && 3 > V && !m && (3 > p || 4 > U) || q(o[r], f))) {
//                         if (ee(o[r]), u = !0, V > 9) break
//                       } else !u && d && !l && 4 > V && 4 > U && p > 2 && (c[0] || n.preloadAfterLoad) && (c[0] || !m && (P || O || D || A || "auto" != o[r][a](n.sizesAttr))) && (l = c[0] || o[r]);
//                     else ee(o[r]);
//                 l && !u && ee(l)
//               }
//             },
//             Y = T(W),
//             G = function (e) {
//               v(e.target, n.loadedClass), y(e.target, n.loadingClass), b(e.target, X)
//             },
//             Z = k(G),
//             X = function (e) {
//               Z({
//                 target: e.target
//               })
//             },
//             K = function (e, t) {
//               try {
//                 e.contentWindow.location.replace(t)
//               } catch (n) {
//                 e.src = t
//               }
//             },
//             J = function (e) {
//               var t, i, r = e[a](n.srcsetAttr);
//               (t = n.customMedia[e[a]("data-media") || e[a]("media")]) && e.setAttribute("media", t), r && e.setAttribute("srcset", r), t && ((i = e.parentNode).insertBefore(e.cloneNode(), e), i.removeChild(e))
//             },
//             Q = k(function (e, t, i, r, o) {
//               var s, l, c, d, p, g;
//               (p = $(e, "lazybeforeunveil", t)).defaultPrevented || (r && (i ? v(e, n.autosizesClass) : e.setAttribute("sizes", r)), l = e[a](n.srcsetAttr), s = e[a](n.srcAttr), o && (c = e.parentNode, d = c && f.test(c.nodeName || "")), g = t.firesLoad || "src" in e && (l || s || d), p = {
//                 target: e
//               }, g && (b(e, B, !0), clearTimeout(h), h = u(B, 2500), v(e, n.loadingClass), b(e, X, !0)), d && m.call(c.getElementsByTagName("source"), J), l ? e.setAttribute("srcset", l) : s && !d && (z.test(e.nodeName) ? K(e, s) : e.src = s), (l || d) && w(e, {
//                 src: s
//               })), e._lazyRace && delete e._lazyRace, y(e, n.lazyClass), C(function () {
//                 (!g || e.complete && e.naturalWidth > 1) && (g ? B(p) : V-- , G(p))
//               }, !0)
//             }),
//             ee = function (e) {
//               var t, i = R.test(e.nodeName),
//                 r = i && (e[a](n.sizesAttr) || e[a]("sizes")),
//                 o = "auto" == r;
//               (!o && d || !i || !e.src && !e.srcset || e.complete || g(e, n.errorClass)) && (t = $(e, "lazyunveilread").detail, o && M.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, V++ , Q(e, t, o, r, i))
//             },
//             te = function () {
//               if (!d) {
//                 if (r.now() - S < 999) return void u(te, 999);
//                 var e = E(function () {
//                   n.loadMode = 3, Y()
//                 });
//                 d = !0, n.loadMode = 3, Y(), l("scroll", function () {
//                   3 == n.loadMode && (n.loadMode = 2), e()
//                 }, !0)
//               }
//             };
//           return {
//             _: function () {
//               S = r.now(), o = t.getElementsByClassName(n.lazyClass), c = t.getElementsByClassName(n.lazyClass + " " + n.preloadClass), I = n.hFac, l("scroll", Y, !0), l("resize", Y, !0), e.MutationObserver ? new MutationObserver(Y).observe(i, {
//                 childList: !0,
//                 subtree: !0,
//                 attributes: !0
//               }) : (i[s]("DOMNodeInserted", Y, !0), i[s]("DOMAttrModified", Y, !0), setInterval(Y, 999)), l("hashchange", Y, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (e) {
//                 t[s](e, Y, !0)
//               }), /d$|^c/.test(t.readyState) ? te() : (l("load", te), t[s]("DOMContentLoaded", Y), u(te, 2e4)), o.length ? (W(), C._lsFlush()) : Y()
//             },
//             checkElems: Y,
//             unveil: ee
//           }
//         }(),
//         M = function () {
//           var e, i = k(function (e, t, n, i) {
//             var r, o, s;
//             if (e._lazysizesWidth = i, i += "px", e.setAttribute("sizes", i), f.test(t.nodeName || ""))
//               for (r = t.getElementsByTagName("source"), o = 0, s = r.length; s > o; o++) r[o].setAttribute("sizes", i);
//             n.detail.dataAttr || w(e, n.detail)
//           }),
//             r = function (e, t, n) {
//               var r, o = e.parentNode;
//               o && (n = S(e, o, n), (r = $(e, "lazybeforesizes", {
//                 width: n,
//                 dataAttr: !!t
//               })).defaultPrevented || (n = r.detail.width) && n !== e._lazysizesWidth && i(e, o, r, n))
//             },
//             o = E(function () {
//               var t, n = e.length;
//               if (n)
//                 for (t = 0; n > t; t++) r(e[t])
//             });
//           return {
//             _: function () {
//               e = t.getElementsByClassName(n.autosizesClass), l("resize", o)
//             },
//             checkElems: o,
//             updateElem: r
//           }
//         }(),
//         _ = function () {
//           _.i || (_.i = !0, M._(), j._())
//         };
//       return function () {
//         var t, i = {
//           lazyClass: "lazyload",
//           loadedClass: "lazyloaded",
//           loadingClass: "lazyloading",
//           preloadClass: "lazypreload",
//           errorClass: "lazyerror",
//           autosizesClass: "lazyautosizes",
//           srcAttr: "data-src",
//           srcsetAttr: "data-srcset",
//           sizesAttr: "data-sizes",
//           minSize: 40,
//           customMedia: {},
//           init: !0,
//           expFactor: 1.5,
//           hFac: .8,
//           loadMode: 2
//         };
//         n = e.lazySizesConfig || e.lazysizesConfig || {};
//         for (t in i) t in n || (n[t] = i[t]);
//         e.lazySizesConfig = n, u(function () {
//           n.init && _()
//         })
//       }(), {
//           cfg: n,
//           autoSizer: M,
//           loader: j,
//           init: _,
//           uP: w,
//           aC: v,
//           rC: y,
//           hC: g,
//           fire: $,
//           gW: S,
//           rAF: C
//         }
//     }
//   });