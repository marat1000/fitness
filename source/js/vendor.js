!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).IMask = {})
}(this, (function (t) {
  "use strict";
  var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
    check = function (t) {
      return t && t.Math == Math && t
    }, n =// eslint-disable-next-line es/no-global-this -- safe
      check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) ||// eslint-disable-next-line no-restricted-globals -- safe
      check("object" == typeof self && self) || check("object" == typeof e && e) ||// eslint-disable-next-line no-new-func -- fallback
      function () {
        return this
      }() || Function("return this")(), r = {}, fails$8 = function (t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }, i = !fails$8((function () {
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return 7 != Object.defineProperty({}, 1, {
        get: function () {
          return 7
        }
      })[1]
    })), a = !fails$8((function () {
      var t = function () {
        /* empty */
      }.bind();// eslint-disable-next-line no-prototype-builtins -- safe
      return "function" != typeof t || t.hasOwnProperty("prototype")
    })), s = a, u = Function.prototype.call, o = s ? u.bind(u) : function () {
      return u.apply(u, arguments)
    }, l = {}, h = {}.propertyIsEnumerable, c = Object.getOwnPropertyDescriptor, p = c && !h.call({1: 2}, 1);// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  l.f = p ? function propertyIsEnumerable(t) {
    var e = c(this, t);
    return !!e && e.enumerable
  } : h;
  var f, d, createPropertyDescriptor$2 = function (t, e) {
      return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }, g = a, k = Function.prototype, v = k.bind, y = k.call, _ = g && v.bind(y, y), m = g ? function (t) {
      return t && _(t)
    } : function (t) {
      return t && function () {
        return y.apply(t, arguments)
      }
    }, b = m, C = b({}.toString), A = b("".slice), classofRaw$1 = function (t) {
      return A(C(t), 8, -1)
    }, E = m, M = fails$8, F = classofRaw$1, S = n.Object, D = E("".split), P = M((function () {
// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
      return !S("z").propertyIsEnumerable(0)
    })) ? function (t) {
      return "String" == F(t) ? D(t, "") : S(t)
    } : S, B = n.TypeError, requireObjectCoercible$4 = function (t) {
      if (null == t) throw B("Can't call method on " + t);
      return t
    }, w = P, x = requireObjectCoercible$4, toIndexedObject$3 = function (t) {
      return w(x(t))
    }, isCallable$a = function (t) {
      return "function" == typeof t
    }, O = isCallable$a, isObject$5 = function (t) {
      return "object" == typeof t ? null !== t : O(t)
    }, I = n, T = isCallable$a, aFunction = function (t) {
      return T(t) ? t : void 0
    }, getBuiltIn$3 = function (t, e) {
      return arguments.length < 2 ? aFunction(I[t]) : I[t] && I[t][e]
    }, R = m({}.isPrototypeOf), j = getBuiltIn$3("navigator", "userAgent") || "", V = n, L = j, N = V.process, z = V.Deno,
    U = N && N.versions || z && z.version, H = U && U.v8;
  H && (// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
    d = (f = H.split("."))[0] > 0 && f[0] < 4 ? 1 : +(f[0] + f[1])),// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
  !d && L && (!(f = L.match(/Edge\/(\d+)/)) || f[1] >= 74) && (f = L.match(/Chrome\/(\d+)/)) && (d = +f[1]);
  var q = d, W = fails$8, Y = !!Object.getOwnPropertySymbols && !W((function () {
      var t = Symbol();// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
      return !String(t) || !(Object(t) instanceof Symbol) ||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && q && q < 41
    })), Z = Y && !Symbol.sham && "symbol" == typeof Symbol.iterator, G = getBuiltIn$3, K = isCallable$a, $ = R, X = Z,
    J = n.Object, Q = X ? function (t) {
      return "symbol" == typeof t
    } : function (t) {
      var e = G("Symbol");
      return K(e) && $(e.prototype, J(t))
    }, tt = n.String, et = isCallable$a, tryToString = function (t) {
      try {
        return tt(t)
      } catch (t) {
        return "Object"
      }
    }, nt = n.TypeError, aCallable = function (t) {
      if (et(t)) return t;
      throw nt(tryToString(t) + " is not a function")
    }, rt = o, it = isCallable$a, at = isObject$5, st = n.TypeError, ut = {exports: {}}, ot = n,
    lt = Object.defineProperty, setGlobal$3 = function (t, e) {
      try {
        lt(ot, t, {value: e, configurable: !0, writable: !0})
      } catch (n) {
        ot[t] = e
      }
      return e
    }, ht = setGlobal$3, ct = "__core-js_shared__", pt = n[ct] || ht(ct, {}), ft = pt;
  /* eslint-disable es/no-symbol -- required for testing */
  (ut.exports = function (t, e) {
    return ft[t] || (ft[t] = void 0 !== e ? e : {})
  })("versions", []).push({
    version: "3.21.0",
    mode: "global",
    copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  });
  var dt = requireObjectCoercible$4, gt = n.Object, toObject$2 = function (t) {
      return gt(dt(t))
    }, kt = toObject$2, vt = m({}.hasOwnProperty), yt = Object.hasOwn || function hasOwn(t, e) {
      return vt(kt(t), e)
    }, _t = m, mt = 0, bt = Math.random(), Ct = _t(1..toString), uid$2 = function (t) {
      return "Symbol(" + (void 0 === t ? "" : t) + ")_" + Ct(++mt + bt, 36)
    }, At = n, Et = ut.exports, Mt = yt, Ft = uid$2, St = Y, Dt = Z, Pt = Et("wks"), Bt = At.Symbol, wt = Bt && Bt.for,
    xt = Dt ? Bt : Bt && Bt.withoutSetter || Ft, wellKnownSymbol$3 = function (t) {
      if (!Mt(Pt, t) || !St && "string" != typeof Pt[t]) {
        var e = "Symbol." + t;
        St && Mt(Bt, t) ? Pt[t] = Bt[t] : Pt[t] = Dt && wt ? wt(e) : xt(e)
      }
      return Pt[t]
    }, Ot = o, It = isObject$5, Tt = Q, getMethod = function (t, e) {
      var n = t[e];
      return null == n ? void 0 : aCallable(n)
    }, ordinaryToPrimitive = function (t, e) {
      var n, r;
      if ("string" === e && it(n = t.toString) && !at(r = rt(n, t))) return r;
      if (it(n = t.valueOf) && !at(r = rt(n, t))) return r;
      if ("string" !== e && it(n = t.toString) && !at(r = rt(n, t))) return r;
      throw st("Can't convert object to primitive value")
    }, Rt = wellKnownSymbol$3, jt = n.TypeError, Vt = Rt("toPrimitive"), toPrimitive = function (t, e) {
      if (!It(t) || Tt(t)) return t;
      var n, r = getMethod(t, Vt);
      if (r) {
        if (void 0 === e && (e = "default"), n = Ot(r, t, e), !It(n) || Tt(n)) return n;
        throw jt("Can't convert object to primitive value")
      }
      return void 0 === e && (e = "number"), ordinaryToPrimitive(t, e)
    }, Lt = Q, toPropertyKey$2 = function (t) {
      var e = toPrimitive(t, "string");
      return Lt(e) ? e : e + ""
    }, Nt = isObject$5, zt = n.document, Ut = Nt(zt) && Nt(zt.createElement), createElement = function (t) {
      return Ut ? zt.createElement(t) : {}
    }, Ht = !i && !fails$8((function () {
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return 7 != Object.defineProperty(createElement("div"), "a", {
        get: function () {
          return 7
        }
      }).a
    })), qt = i, Wt = o, Yt = l, Zt = createPropertyDescriptor$2, Gt = toIndexedObject$3, Kt = toPropertyKey$2, $t = yt,
    Xt = Ht, Jt = Object.getOwnPropertyDescriptor;// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  r.f = qt ? Jt : function getOwnPropertyDescriptor(t, e) {
    if (t = Gt(t), e = Kt(e), Xt) try {
      return Jt(t, e)
    } catch (t) {
      /* empty */
    }
    if ($t(t, e)) return Zt(!Wt(Yt.f, t, e), t[e])
  };
  var Qt = {}, te = i && fails$8((function () {
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return 42 != Object.defineProperty((function () {
        /* empty */
      }), "prototype", {value: 42, writable: !1}).prototype
    })), ee = n, ne = isObject$5, re = ee.String, ie = ee.TypeError, anObject$2 = function (t) {
      if (ne(t)) return t;
      throw ie(re(t) + " is not an object")
    }, ae = i, se = Ht, ue = te, oe = anObject$2, le = toPropertyKey$2, he = n.TypeError, ce = Object.defineProperty,
    pe = Object.getOwnPropertyDescriptor, fe = "enumerable", de = "configurable", ge = "writable";// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
  Qt.f = ae ? ue ? function defineProperty(t, e, n) {
    if (oe(t), e = le(e), oe(n), "function" == typeof t && "prototype" === e && "value" in n && ge in n && !n.writable) {
      var r = pe(t, e);
      r && r.writable && (t[e] = n.value, n = {
        configurable: de in n ? n.configurable : r.configurable,
        enumerable: fe in n ? n.enumerable : r.enumerable,
        writable: !1
      })
    }
    return ce(t, e, n)
  } : ce : function defineProperty(t, e, n) {
    if (oe(t), e = le(e), oe(n), se) try {
      return ce(t, e, n)
    } catch (t) {
      /* empty */
    }
    if ("get" in n || "set" in n) throw he("Accessors not supported");
    return "value" in n && (t[e] = n.value), t
  };
  var ke = Qt, ve = createPropertyDescriptor$2, ye = i ? function (t, e, n) {
    return ke.f(t, e, ve(1, n))
  } : function (t, e, n) {
    return t[e] = n, t
  }, _e = {exports: {}}, me = isCallable$a, be = pt, Ce = m(Function.toString);// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  me(be.inspectSource) || (be.inspectSource = function (t) {
    return Ce(t)
  });
  var Ae, Ee, Me, Fe = be.inspectSource, Se = isCallable$a, De = Fe, Pe = n.WeakMap,
    Be = Se(Pe) && /native code/.test(De(Pe)), we = ut.exports, xe = uid$2, Oe = we("keys"), Ie = {}, Te = Be, Re = n,
    je = m, Ve = isObject$5, Le = ye, Ne = yt, ze = pt, sharedKey = function (t) {
      return Oe[t] || (Oe[t] = xe(t))
    }, Ue = Ie, He = "Object already initialized", qe = Re.TypeError, We = Re.WeakMap;
  if (Te || ze.state) {
    var Ye = ze.state || (ze.state = new We), Ze = je(Ye.get), Ge = je(Ye.has), Ke = je(Ye.set);
    Ae = function (t, e) {
      if (Ge(Ye, t)) throw new qe(He);
      return e.facade = t, Ke(Ye, t, e), e
    }, Ee = function (t) {
      return Ze(Ye, t) || {}
    }, Me = function (t) {
      return Ge(Ye, t)
    }
  } else {
    var $e = sharedKey("state");
    Ue[$e] = !0, Ae = function (t, e) {
      if (Ne(t, $e)) throw new qe(He);
      return e.facade = t, Le(t, $e, e), e
    }, Ee = function (t) {
      return Ne(t, $e) ? t[$e] : {}
    }, Me = function (t) {
      return Ne(t, $e)
    }
  }
  var Xe = {
      set: Ae, get: Ee, has: Me, enforce: function (t) {
        return Me(t) ? Ee(t) : Ae(t, {})
      }, getterFor: function (t) {
        return function (e) {
          var n;
          if (!Ve(e) || (n = Ee(e)).type !== t) throw qe("Incompatible receiver, " + t + " required");
          return n
        }
      }
    }, Je = i, Qe = yt, tn = Function.prototype, en = Je && Object.getOwnPropertyDescriptor, nn = Qe(tn, "name"),
    rn = nn && "something" === function something() {
      /* empty */
    }.name, an = nn && (!Je || Je && en(tn, "name").configurable), sn = n, un = isCallable$a, ln = yt, hn = ye,
    cn = setGlobal$3, pn = Fe, fn = {EXISTS: nn, PROPER: rn, CONFIGURABLE: an}.CONFIGURABLE, dn = Xe.get,
    gn = Xe.enforce, kn = String(String).split("String");
  (_e.exports = function (t, e, n, r) {
    var i, a = !!r && !!r.unsafe, s = !!r && !!r.enumerable, u = !!r && !!r.noTargetGet,
      o = r && void 0 !== r.name ? r.name : e;
    un(n) && ("Symbol(" === String(o).slice(0, 7) && (o = "[" + String(o).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!ln(n, "name") || fn && n.name !== o) && hn(n, "name", o), (i = gn(n)).source || (i.source = kn.join("string" == typeof o ? o : ""))), t !== sn ? (a ? !u && t[e] && (s = !0) : delete t[e], s ? t[e] = n : hn(t, e, n)) : s ? t[e] = n : cn(e, n)
  })(Function.prototype, "toString", (function toString() {
    return un(this) && dn(this).source || pn(this)
  }));
  var vn = {}, yn = Math.ceil, _n = Math.floor, toIntegerOrInfinity$3 = function (t) {
      var e = +t;// eslint-disable-next-line no-self-compare -- safe
      return e != e || 0 === e ? 0 : (e > 0 ? _n : yn)(e)
    }, mn = toIntegerOrInfinity$3, bn = Math.max, Cn = Math.min, An = toIntegerOrInfinity$3, En = Math.min,
    toLength$2 = function (t) {
      return t > 0 ? En(An(t), 9007199254740991) : 0;// 2 ** 53 - 1 == 9007199254740991
    }, Mn = toLength$2, Fn = toIndexedObject$3, toAbsoluteIndex = function (t, e) {
      var n = mn(t);
      return n < 0 ? bn(n + e, 0) : Cn(n, e)
    }, lengthOfArrayLike = function (t) {
      return Mn(t.length)
    }, createMethod$1 = function (t) {
      return function (e, n, r) {
        var i, a = Fn(e), s = lengthOfArrayLike(a), u = toAbsoluteIndex(r, s);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
        if (t && n != n) {
          for (; s > u;)// eslint-disable-next-line no-self-compare -- NaN check
            if ((i = a[u++]) != i) return !0;// Array#indexOf ignores holes, Array#includes - not
        } else for (; s > u; u++) if ((t || u in a) && a[u] === n) return t || u || 0;
        return !t && -1
      }
    }, Sn = {
// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod$1(!0),
// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod$1(!1)
    }, Dn = yt, Pn = toIndexedObject$3, Bn = Sn.indexOf, wn = Ie, xn = m([].push), objectKeysInternal = function (t, e) {
      var n, r = Pn(t), i = 0, a = [];
      for (n in r) !Dn(wn, n) && Dn(r, n) && xn(a, n);// Don't enum bug & hidden keys
      for (; e.length > i;) Dn(r, n = e[i++]) && (~Bn(a, n) || xn(a, n));
      return a
    },
    On = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    In = objectKeysInternal, Tn = On.concat("length", "prototype");// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
  vn.f = Object.getOwnPropertyNames || function getOwnPropertyNames(t) {
    return In(t, Tn)
  };
  var Rn = {};
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  Rn.f = Object.getOwnPropertySymbols;
  var jn = getBuiltIn$3, Vn = vn, Ln = Rn, Nn = anObject$2, zn = m([].concat),
    Un = jn("Reflect", "ownKeys") || function ownKeys(t) {
      var e = Vn.f(Nn(t)), n = Ln.f;
      return n ? zn(e, n(t)) : e
    }, Hn = yt, qn = Un, Wn = r, Yn = Qt, Zn = fails$8, Gn = isCallable$a, Kn = /#|\.prototype\./,
    isForced$1 = function (t, e) {
      var n = Xn[$n(t)];
      return n == Qn || n != Jn && (Gn(e) ? Zn(e) : !!e)
    }, $n = isForced$1.normalize = function (t) {
      return String(t).replace(Kn, ".").toLowerCase()
    }, Xn = isForced$1.data = {}, Jn = isForced$1.NATIVE = "N", Qn = isForced$1.POLYFILL = "P", tr = isForced$1, er = n,
    nr = r.f, rr = ye, ir = _e.exports, ar = setGlobal$3, copyConstructorProperties = function (t, e, n) {
      for (var r = qn(e), i = Yn.f, a = Wn.f, s = 0; s < r.length; s++) {
        var u = r[s];
        Hn(t, u) || n && Hn(n, u) || i(t, u, a(e, u))
      }
    }, sr = tr, _export = function (t, e) {
      var n, r, i, a, s, u = t.target, o = t.global, l = t.stat;
      if (n = o ? er : l ? er[u] || ar(u, {}) : (er[u] || {}).prototype) for (r in e) {// contained in target
        if (a = e[r], i = t.noTargetGet ? (s = nr(n, r)) && s.value : n[r], !sr(o ? r : u + (l ? "." : "#") + r, t.forced) && void 0 !== i) {
          if (typeof a == typeof i) continue;
          copyConstructorProperties(a, i)
        }// add a flag to not completely full polyfills
        (t.sham || i && i.sham) && rr(a, "sham", !0),// extend global
          ir(n, r, a, t)
      }
    }, ur = objectKeysInternal, or = On, lr = Object.keys || function keys(t) {
      return ur(t, or)
    }, hr = i, cr = m, pr = o, fr = fails$8, dr = lr, gr = Rn, kr = l, vr = toObject$2, yr = P, _r = Object.assign,
    mr = Object.defineProperty, br = cr([].concat), Cr = !_r || fr((function () {
// should have correct order of operations (Edge bug)
      if (hr && 1 !== _r({b: 1}, _r(mr({}, "a", {
        enumerable: !0, get: function () {
          mr(this, "b", {value: 3, enumerable: !1})
        }
      }), {b: 2})).b) return !0;// should work with symbols and should have deterministic property order (V8 bug)
      var t = {}, e = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
      return t[n] = 7, r.split("").forEach((function (t) {
        e[t] = t
      })), 7 != _r({}, t)[n] || dr(_r({}, e)).join("") != r
    })) ? function assign(t, e) {
      for (
// eslint-disable-line no-unused-vars -- required for `.length`
        var n = vr(t), r = arguments.length, i = 1, a = gr.f, s = kr.f; r > i;) for (var u, o = yr(arguments[i++]), l = a ? br(dr(o), a(o)) : dr(o), h = l.length, c = 0; h > c;) u = l[c++], hr && !pr(s, o, u) || (n[u] = o[u]);
      return n
    } : _r, Ar = Cr;// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
  _export({target: "Object", stat: !0, forced: Object.assign !== Ar}, {assign: Ar});
  var Er = {};
  Er[wellKnownSymbol$3("toStringTag")] = "z";
  var Mr = n, Fr = "[object z]" === String(Er), Sr = isCallable$a, Dr = classofRaw$1,
    Pr = wellKnownSymbol$3("toStringTag"), Br = Mr.Object, wr = "Arguments" == Dr(function () {
      return arguments
    }()), xr = Fr ? Dr : function (t) {
      var e, n, r;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
        try {
          return t[e]
        } catch (t) {
          /* empty */
        }
      }(e = Br(t), Pr)) ? n : wr ? Dr(e) : "Object" == (r = Dr(e)) && Sr(e.callee) ? "Arguments" : r
    }, Or = n.String, toString$2 = function (t) {
      if ("Symbol" === xr(t)) throw TypeError("Cannot convert a Symbol value to a string");
      return Or(t)
    }, Ir = toIntegerOrInfinity$3, Tr = toString$2, Rr = requireObjectCoercible$4, jr = n.RangeError,
    Vr = function repeat(t) {
      var e = Tr(Rr(this)), n = "", r = Ir(t);
      if (r < 0 || Infinity == r) throw jr("Wrong number of repetitions");
      for (; r > 0; (r >>>= 1) && (e += e)) 1 & r && (n += e);
      return n
    };// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
  _export({target: "String", proto: !0}, {repeat: Vr});
// https://github.com/tc39/proposal-string-pad-start-end
  var Lr = m, Nr = toLength$2, zr = toString$2, Ur = requireObjectCoercible$4, Hr = Lr(Vr), qr = Lr("".slice),
    Wr = Math.ceil, createMethod = function (t) {
      return function (e, n, r) {
        var i, a, s = zr(Ur(e)), u = Nr(n), o = s.length, l = void 0 === r ? " " : zr(r);
        return u <= o || "" == l ? s : ((a = Hr(l, Wr((i = u - o) / l.length))).length > i && (a = qr(a, 0, i)), t ? s + a : a + s)
      }
    }, Yr = {
// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
      start: createMethod(!1),
// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
      end: createMethod(!0)
    }, Zr = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(j), Gr = Yr.start;// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
  _export({target: "String", proto: !0, forced: Zr}, {
    padStart: function padStart(t
                                /* , fillString = ' ' */) {
      return Gr(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  });
  var Kr = Yr.end;

  function _typeof(t) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, _typeof(t)
  }

  function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function _defineProperties(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function _createClass(t, e, n) {
    return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), Object.defineProperty(t, "prototype", {writable: !1}), t
  }

  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {writable: !1}), e && _setPrototypeOf(t, e)
  }

  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    }, _getPrototypeOf(t)
  }

  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(t, e) {
      return t.__proto__ = e, t
    }, _setPrototypeOf(t, e)
  }

  function _objectWithoutProperties(t, e) {
    if (null == t) return {};
    var n, r, i = function _objectWithoutPropertiesLoose(t, e) {
      if (null == t) return {};
      var n, r, i = {}, a = Object.keys(t);
      for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
      return i
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(t);
      for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
    }
    return i
  }

  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return function _assertThisInitialized(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t)
  }

  function _createSuper(t) {
    var e = function _isNativeReflectConstruct() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
        }))), !0
      } catch (t) {
        return !1
      }
    }();
    return function _createSuperInternal() {
      var n, r = _getPrototypeOf(t);
      if (e) {
        var i = _getPrototypeOf(this).constructor;
        n = Reflect.construct(r, arguments, i)
      } else n = r.apply(this, arguments);
      return _possibleConstructorReturn(this, n)
    }
  }

  function _superPropBase(t, e) {
    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _getPrototypeOf(t));) ;
    return t
  }

  function _get() {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function _get(t, e, n) {
      var r = _superPropBase(t, e);
      if (r) {
        var i = Object.getOwnPropertyDescriptor(r, e);
        return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value
      }
    }, _get.apply(this, arguments)
  }

  function set(t, e, n, r) {
    return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function set(t, e, n, r) {
      var i, a = _superPropBase(t, e);
      if (a) {
        if ((i = Object.getOwnPropertyDescriptor(a, e)).set) return i.set.call(r, n), !0;
        if (!i.writable) return !1
      }
      if (i = Object.getOwnPropertyDescriptor(r, e)) {
        if (!i.writable) return !1;
        i.value = n, Object.defineProperty(r, e, i)
      } else !function _defineProperty(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t
      }(r, e, n);
      return !0
    }, set(t, e, n, r)
  }

  function _set(t, e, n, r, i) {
    if (!set(t, e, n, r || t) && i) throw new Error("failed to set property");
    return n
  }

  function _slicedToArray(t, e) {
    return function _arrayWithHoles(t) {
      if (Array.isArray(t)) return t
    }(t) || function _iterableToArrayLimit(t, e) {
      var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (null == n) return;
      var r, i, a = [], s = !0, u = !1;
      try {
        for (n = n.call(t); !(s = (r = n.next()).done) && (a.push(r.value), !e || a.length !== e); s = !0) ;
      } catch (t) {
        u = !0, i = t
      } finally {
        try {
          s || null == n.return || n.return()
        } finally {
          if (u) throw i
        }
      }
      return a
    }(t, e) || function _unsupportedIterableToArray(t, e) {
      if (!t) return;
      if ("string" == typeof t) return _arrayLikeToArray(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(t, e)
    }(t, e) || function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
      /** Provides details of changing model value @param {Object} [details] @param {string} [details.inserted] - Inserted symbols @param {boolean} [details.skip] - Can skip chars @param {number} [details.removeCount] - Removed symbols count @param {number} [details.tailShift] - Additional offset if any changes occurred before tail */()
  }

  function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r
  }// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
  _export({target: "String", proto: !0, forced: Zr}, {
    padEnd: function padEnd(t
                            /* , fillString = ' ' */) {
      return Kr(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }),// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
    _export({global: !0}, {globalThis: n});
  var $r = function () {
    /** Inserted symbols */
    /** Can skip chars */

    /** Additional offset if any changes occurred before tail */
    /** Raw inserted is used by dynamic mask */
    function ChangeDetails(t) {
      _classCallCheck(this, ChangeDetails), Object.assign(this, {
        inserted: "",
        rawInserted: "",
        skip: !1,
        tailShift: 0
      }, t)
    }

    /** Aggregate changes @returns {ChangeDetails} `this` */
    return _createClass(ChangeDetails, [{
      key: "aggregate", value: function aggregate(t) {
        return this.rawInserted += t.rawInserted, this.skip = this.skip || t.skip, this.inserted += t.inserted, this.tailShift += t.tailShift, this
      }
      /** Total offset considering all changes */
    }, {
      key: "offset", get: function get() {
        return this.tailShift + this.inserted.length
      }
    }]), ChangeDetails
  }();

  /** Checks if value is string */function isString(t) {
    return "string" == typeof t || t instanceof String
  }

  /** Direction @prop {string} NONE @prop {string} LEFT @prop {string} FORCE_LEFT @prop {string} RIGHT @prop {string} FORCE_RIGHT */var Xr = "NONE",
    Jr = "LEFT", Qr = "FORCE_LEFT", ti = "RIGHT", ei = "FORCE_RIGHT";

  /** */
  /** Escapes regular expression control chars */
  function escapeRegExp(t) {
    return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
  }

  function normalizePrepare(t) {
    return Array.isArray(t) ? t : [t, new $r]
  }// cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
  function objectIncludes(t, e) {
    if (e === t) return !0;
    var n, r = Array.isArray(e), i = Array.isArray(t);
    if (r && i) {
      if (e.length != t.length) return !1;
      for (n = 0; n < e.length; n++) if (!objectIncludes(e[n], t[n])) return !1;
      return !0
    }
    if (r != i) return !1;
    if (e && t && "object" === _typeof(e) && "object" === _typeof(t)) {
      var a = e instanceof Date, s = t instanceof Date;
      if (a && s) return e.getTime() == t.getTime();
      if (a != s) return !1;
      var u = e instanceof RegExp, o = t instanceof RegExp;
      if (u && o) return e.toString() == t.toString();
      if (u != o) return !1;
      var l = Object.keys(e);// if (keys.length !== Object.keys(b).length) return false;
      for (n = 0; n < l.length; n++)
// $FlowFixMe ... ???
        if (!Object.prototype.hasOwnProperty.call(t, l[n])) return !1;
      for (n = 0; n < l.length; n++) if (!objectIncludes(t[l[n]], e[l[n]])) return !1;
      return !0
    }
    return !(!e || !t || "function" != typeof e || "function" != typeof t) && e.toString() === t.toString()
  }

  /** Selection range */
  /** Provides details of changing input */var ni = function () {
    /** Current input value */
    /** Current cursor position */

    /** Old input value */
    /** Old selection */
    function ActionDetails(t, e, n, r) {// double check if left part was changed (autofilling, other non-standard input triggers)
      for (_classCallCheck(this, ActionDetails), this.value = t, this.cursorPos = e, this.oldValue = n, this.oldSelection = r; this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) --this.oldSelection.start
    }

    /** Start changing position @readonly */
    return _createClass(ActionDetails, [{
      key: "startChangePos", get: function get() {
        return Math.min(this.cursorPos, this.oldSelection.start)
      }
      /** Inserted symbols count @readonly */
    }, {
      key: "insertedCount", get: function get() {
        return this.cursorPos - this.startChangePos
      }
      /** Inserted symbols @readonly */
    }, {
      key: "inserted", get: function get() {
        return this.value.substr(this.startChangePos, this.insertedCount)
      }
      /** Removed symbols count @readonly */
    }, {
      key: "removedCount", get: function get() {
// Math.max for opposite operation
        return Math.max(this.oldSelection.end - this.startChangePos ||// for Delete
          this.oldValue.length - this.value.length, 0)
      }
      /** Removed symbols @readonly */
    }, {
      key: "removed", get: function get() {
        return this.oldValue.substr(this.startChangePos, this.removedCount)
      }
      /** Unchanged head symbols @readonly */
    }, {
      key: "head", get: function get() {
        return this.value.substring(0, this.startChangePos)
      }
      /** Unchanged tail symbols @readonly */
    }, {
      key: "tail", get: function get() {
        return this.value.substring(this.startChangePos + this.insertedCount)
      }
      /** Remove direction @readonly */
    }, {
      key: "removeDirection", get: function get() {
        return !this.removedCount || this.insertedCount ? Xr : this.oldSelection.end !== this.cursorPos && this.oldSelection.start !== this.cursorPos ||// if not range removed (event with backspace)
        this.oldSelection.end !== this.oldSelection.start ? Jr : ti;// align right if delete at right
      }
    }]), ActionDetails
  }(), ri = function () {
    /** Tail value as string */

    /** Tail start position */
    /** Start position */
    function ContinuousTailDetails() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 ? arguments[2] : void 0;
      _classCallCheck(this, ContinuousTailDetails), this.value = t, this.from = e, this.stop = n
    }

    return _createClass(ContinuousTailDetails, [{
      key: "toString", value: function toString() {
        return this.value
      }
    }, {
      key: "extend", value: function extend(t) {
        this.value += String(t)
      }
    }, {
      key: "appendTo", value: function appendTo(t) {
        return t.append(this.toString(), {tail: !0}).aggregate(t._appendPlaceholder())
      }
    }, {
      key: "state", get: function get() {
        return {value: this.value, from: this.from, stop: this.stop}
      }, set: function set(t) {
        Object.assign(this, t)
      }
    }, {
      key: "unshift", value: function unshift(t) {
        if (!this.value.length || null != t && this.from >= t) return "";
        var e = this.value[0];
        return this.value = this.value.slice(1), e
      }
    }, {
      key: "shift", value: function shift() {
        if (!this.value.length) return "";
        var t = this.value[this.value.length - 1];
        return this.value = this.value.slice(0, -1), t
      }
    }]), ContinuousTailDetails
  }();

  /** Provides details of continuous extracted tail */
  /** * Applies mask on element. * @constructor * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask * @param {Object} opts - Custom mask options * @return {InputMask} */
  function IMask(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
// currently available only for input-like elements
    return new IMask.InputMask(t, e)
  }

  /** Supported mask type */
  /** Provides common masking stuff */var ii = function () {
// $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773
    /** @type {Mask} */
    /** */
// $FlowFixMe no ideas
    /** Transforms value before mask processing */
    /** Validates if value is acceptable */
    /** Does additional processing in the end of editing */
    /** Format typed value to string */
    /** Parse strgin to get typed value */
    /** Enable characters overwriting */

    /** */
    /** */
    function Masked(t) {
      _classCallCheck(this, Masked), this._value = "", this._update(Object.assign({}, Masked.DEFAULTS, t)), this.isInitialized = !0
    }

    /** Sets and applies new options */
    return _createClass(Masked, [{
      key: "updateOptions", value: function updateOptions(t) {
        Object.keys(t).length &&// $FlowFixMe
        this.withValueRefresh(this._update.bind(this, t))
      }
      /** Sets new options @protected */
    }, {
      key: "_update", value: function _update(t) {
        Object.assign(this, t)
      }
      /** Mask state */
    }, {
      key: "state", get: function get() {
        return {_value: this.value}
      }, set: function set(t) {
        this._value = t._value
      }
      /** Resets value */
    }, {
      key: "reset", value: function reset() {
        this._value = ""
      }
      /** */
    }, {
      key: "value", get: function get() {
        return this._value
      }, set: function set(t) {
        this.resolve(t)
      }
      /** Resolve new value */
    }, {
      key: "resolve", value: function resolve(t) {
        return this.reset(), this.append(t, {input: !0}, ""), this.doCommit(), this.value
      }
      /** */
    }, {
      key: "unmaskedValue", get: function get() {
        return this.value
      }, set: function set(t) {
        this.reset(), this.append(t, {}, ""), this.doCommit()
      }
      /** */
    }, {
      key: "typedValue", get: function get() {
        return this.doParse(this.value)
      }, set: function set(t) {
        this.value = this.doFormat(t)
      }
      /** Value that includes raw user input */
    }, {
      key: "rawInputValue", get: function get() {
        return this.extractInput(0, this.value.length, {raw: !0})
      }, set: function set(t) {
        this.reset(), this.append(t, {raw: !0}, ""), this.doCommit()
      }
      /** */
    }, {
      key: "isComplete", get: function get() {
        return !0
      }
      /** */
    }, {
      key: "isFilled", get: function get() {
        return this.isComplete
      }
      /** Finds nearest input position in direction */
    }, {
      key: "nearestInputPos", value: function nearestInputPos(t, e) {
        return t
      }
      /** Extracts value in range considering flags */
    }, {
      key: "extractInput", value: function extractInput() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return this.value.slice(t, e)
      }
      /** Extracts tail in range */
    }, {
      key: "extractTail", value: function extractTail() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return new ri(this.extractInput(t, e), t)
      }
      /** Appends tail */
// $FlowFixMe no ideas
    }, {
      key: "appendTail", value: function appendTail(t) {
        return isString(t) && (t = new ri(String(t))), t.appendTo(this)
      }
      /** Appends char */
    }, {
      key: "_appendCharRaw", value: function _appendCharRaw(t) {
        return t ? (this._value += t, new $r({inserted: t, rawInserted: t})) : new $r
      }
      /** Appends char */
    }, {
      key: "_appendChar", value: function _appendChar(t) {
        var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0, i = this.state, a = normalizePrepare(this.doPrepare(t, n)),
          s = _slicedToArray(a, 2);
        if (t = s[0], (e = (e = s[1]).aggregate(this._appendCharRaw(t, n))).inserted) {
          var u, o = !1 !== this.doValidate(n);
          if (o && null != r) {
// validation ok, check tail
            var l = this.state;
            !0 === this.overwrite && (u = r.state, r.unshift(this.value.length));
            var h = this.appendTail(r);// not ok, try shift
            (o = h.rawInserted === r.toString()) && h.inserted || "shift" !== this.overwrite || (this.state = l, u = r.state, r.shift(), o = (h = this.appendTail(r)).rawInserted === r.toString()),// if ok, rollback state after tail
            o && h.inserted && (this.state = l)
          }// revert all if something went wrong
          o || (e = new $r, this.state = i, r && u && (r.state = u))
        }
        return e
      }
      /** Appends optional placeholder at end */
    }, {
      key: "_appendPlaceholder", value: function _appendPlaceholder() {
        return new $r
      }
      /** Appends optional eager placeholder at end */
    }, {
      key: "_appendEager", value: function _appendEager() {
        return new $r
      }
      /** Appends symbols considering flags */
// $FlowFixMe no ideas
    }, {
      key: "append", value: function append(t, e, n) {
        if (!isString(t)) throw new Error("value should be string");
        var r = new $r, i = isString(n) ? new ri(String(n)) : n;
        e && e.tail && (e._beforeTailState = this.state);
        for (var a = 0; a < t.length; ++a) r.aggregate(this._appendChar(t[a], e, i));// append tail but aggregate only tailShift
        return null != i && (r.tailShift += this.appendTail(i).tailShift), this.eager && null != e && e.input && t && r.aggregate(this._appendEager()), r
      }
      /** */
    }, {
      key: "remove", value: function remove() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return this._value = this.value.slice(0, t) + this.value.slice(e), new $r
      }
      /** Calls function and reapplies current value */
    }, {
      key: "withValueRefresh", value: function withValueRefresh(t) {
        if (this._refreshing || !this.isInitialized) return t();
        this._refreshing = !0;
        var e = this.rawInputValue, n = this.value, r = t();
        return this.rawInputValue = e,// append lost trailing chars at end
        this.value && this.value !== n && 0 === n.indexOf(this.value) && this.append(n.slice(this.value.length), {}, ""), delete this._refreshing, r
      }
      /** */
    }, {
      key: "runIsolated", value: function runIsolated(t) {
        if (this._isolated || !this.isInitialized) return t(this);
        this._isolated = !0;
        var e = this.state, n = t(this);
        return this.state = e, delete this._isolated, n
      }
      /** Prepares string before mask processing @protected */
    }, {
      key: "doPrepare", value: function doPrepare(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.prepare ? this.prepare(t, this, e) : t
      }
      /** Validates if value is acceptable @protected */
    }, {
      key: "doValidate", value: function doValidate(t) {
        return (!this.validate || this.validate(this.value, this, t)) && (!this.parent || this.parent.doValidate(t))
      }
      /** Does additional processing in the end of editing @protected */
    }, {
      key: "doCommit", value: function doCommit() {
        this.commit && this.commit(this.value, this)
      }
      /** */
    }, {
      key: "doFormat", value: function doFormat(t) {
        return this.format ? this.format(t, this) : t
      }
      /** */
    }, {
      key: "doParse", value: function doParse(t) {
        return this.parse ? this.parse(t, this) : t
      }
      /** */
    }, {
      key: "splice", value: function splice(t, e, n, r) {
        var i, a = t + e, s = this.extractTail(a);
        this.eager && (r = function forceDirection(t) {
          switch (t) {
            case Jr:
              return Qr;
            case ti:
              return ei;
            default:
              return t
          }
        }(r), i = this.extractInput(0, a, {raw: !0}));
        var u = this.nearestInputPos(t, e > 1 && 0 !== t && !this.eager ? Xr : r),
          o = new $r({tailShift: u - t}).aggregate(this.remove(u));
        if (this.eager && r !== Xr && i === this.rawInputValue) if (r === Qr) for (var l; i === this.rawInputValue && (l = this.value.length);) o.aggregate(new $r({tailShift: -1})).aggregate(this.remove(l - 1)); else r === ei && s.unshift();
        return o.aggregate(this.append(n, {input: !0}, s))
      }
    }, {
      key: "maskEquals", value: function maskEquals(t) {
        return this.mask === t
      }
    }]), Masked
  }();

  /** Get Masked class by mask type */
  function maskedClass(t) {
    if (null == t) throw new Error("mask property should be defined");// $FlowFixMe
    return t instanceof RegExp ? IMask.MaskedRegExp :// $FlowFixMe
      isString(t) ? IMask.MaskedPattern :// $FlowFixMe
        t instanceof Date || t === Date ? IMask.MaskedDate :// $FlowFixMe
          t instanceof Number || "number" == typeof t || t === Number ? IMask.MaskedNumber :// $FlowFixMe
            Array.isArray(t) || t === Array ? IMask.MaskedDynamic :// $FlowFixMe
              IMask.Masked && t.prototype instanceof IMask.Masked ? t :// $FlowFixMe
                t instanceof IMask.Masked ? t.constructor :// $FlowFixMe
                  t instanceof Function ? IMask.MaskedFunction : (console.warn("Mask not found for mask", t), IMask.Masked)
  }

  /** Creates new {@link Masked} depending on mask type */function createMask(t) {
// $FlowFixMe
    if (IMask.Masked && t instanceof IMask.Masked) return t;
    var e = (t = Object.assign({}, t)).mask;// $FlowFixMe
    if (IMask.Masked && e instanceof IMask.Masked) return e;
    var n = maskedClass(e);
    if (!n) throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
    return new n(t)
  }

  ii.DEFAULTS = {
    format: function format(t) {
      return t
    }, parse: function parse(t) {
      return t
    }
  }, IMask.Masked = ii, IMask.createMask = createMask;
  var ai = ["mask"], si = {
    0: /\d/,
    a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
// http://stackoverflow.com/a/22075070
    "*": /./
  }, ui = function () {
    /** */
    /** */
    /** */
    /** */
    /** */

    /** */
    /** */
    function PatternInputDefinition(t) {
      _classCallCheck(this, PatternInputDefinition);
      var e = t.mask, n = _objectWithoutProperties(t, ai);
      this.masked = createMask({mask: e}), Object.assign(this, n)
    }

    return _createClass(PatternInputDefinition, [{
      key: "reset", value: function reset() {
        this.isFilled = !1, this.masked.reset()
      }
    }, {
      key: "remove", value: function remove() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
        return 0 === t && e >= 1 ? (this.isFilled = !1, this.masked.remove(t, e)) : new $r
      }
    }, {
      key: "value", get: function get() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "")
      }
    }, {
      key: "unmaskedValue", get: function get() {
        return this.masked.unmaskedValue
      }
    }, {
      key: "isComplete", get: function get() {
        return Boolean(this.masked.value) || this.isOptional
      }
    }, {
      key: "_appendChar", value: function _appendChar(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (this.isFilled) return new $r;
        var n = this.masked.state, r = this.masked._appendChar(t, e);// simulate input
        return r.inserted && !1 === this.doValidate(e) && (r.inserted = r.rawInserted = "", this.masked.state = n), r.inserted || this.isOptional || this.lazy || e.input || (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = Boolean(r.inserted), r
      }
    }, {
      key: "append", value: function append() {
        var t;
// TODO probably should be done via _appendChar
        return (t = this.masked).append.apply(t, arguments)
      }
    }, {
      key: "_appendPlaceholder", value: function _appendPlaceholder() {
        var t = new $r;
        return this.isFilled || this.isOptional || (this.isFilled = !0, t.inserted = this.placeholderChar), t
      }
    }, {
      key: "_appendEager", value: function _appendEager() {
        return new $r
      }
    }, {
      key: "extractTail", value: function extractTail() {
        var t;
        return (t = this.masked).extractTail.apply(t, arguments)
      }
    }, {
      key: "appendTail", value: function appendTail() {
        var t;
        return (t = this.masked).appendTail.apply(t, arguments)
      }
    }, {
      key: "extractInput", value: function extractInput() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          n = arguments.length > 2 ? arguments[2] : void 0;
        return this.masked.extractInput(t, e, n)
      }
    }, {
      key: "nearestInputPos", value: function nearestInputPos(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xr, n = 0, r = this.value.length,
          i = Math.min(Math.max(t, n), r);
        switch (e) {
          case Jr:
          case Qr:
            return this.isComplete ? i : n;
          case ti:
          case ei:
            return this.isComplete ? i : r;
          default:
            return i
        }
      }
    }, {
      key: "doValidate", value: function doValidate() {
        var t, e;
        return (t = this.masked).doValidate.apply(t, arguments) && (!this.parent || (e = this.parent).doValidate.apply(e, arguments))
      }
    }, {
      key: "doCommit", value: function doCommit() {
        this.masked.doCommit()
      }
    }, {
      key: "state", get: function get() {
        return {masked: this.masked.state, isFilled: this.isFilled}
      }, set: function set(t) {
        this.masked.state = t.masked, this.isFilled = t.isFilled
      }
    }]), PatternInputDefinition
  }(), oi = function () {
    /** */
    /** */
    /** */
    /** */

    /** */
    /** */
    function PatternFixedDefinition(t) {
      _classCallCheck(this, PatternFixedDefinition), Object.assign(this, t), this._value = "", this.isFixed = !0
    }

    return _createClass(PatternFixedDefinition, [{
      key: "value", get: function get() {
        return this._value
      }
    }, {
      key: "unmaskedValue", get: function get() {
        return this.isUnmasking ? this.value : ""
      }
    }, {
      key: "reset", value: function reset() {
        this._isRawInput = !1, this._value = ""
      }
    }, {
      key: "remove", value: function remove() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
        return this._value = this._value.slice(0, t) + this._value.slice(e), this._value || (this._isRawInput = !1), new $r
      }
    }, {
      key: "nearestInputPos", value: function nearestInputPos(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xr, n = 0, r = this._value.length;
        switch (e) {
          case Jr:
          case Qr:
            return n;
          default:
            return r
        }
      }
    }, {
      key: "extractInput", value: function extractInput() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return n.raw && this._isRawInput && this._value.slice(t, e) || ""
      }
    }, {
      key: "isComplete", get: function get() {
        return !0
      }
    }, {
      key: "isFilled", get: function get() {
        return Boolean(this._value)
      }
    }, {
      key: "_appendChar", value: function _appendChar(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = new $r;
        if (this._value) return n;
        var r = this.char === t, i = r && (this.isUnmasking || e.input || e.raw) && !this.eager && !e.tail;
        return i && (n.rawInserted = this.char), this._value = n.inserted = this.char, this._isRawInput = i && (e.raw || e.input), n
      }
    }, {
      key: "_appendEager", value: function _appendEager() {
        return this._appendChar(this.char)
      }
    }, {
      key: "_appendPlaceholder", value: function _appendPlaceholder() {
        var t = new $r;
        return this._value || (this._value = t.inserted = this.char), t
      }
    }, {
      key: "extractTail", value: function extractTail() {
        return arguments.length > 1 && void 0 !== arguments[1] || this.value.length, new ri("")
      }// $FlowFixMe no ideas
    }, {
      key: "appendTail", value: function appendTail(t) {
        return isString(t) && (t = new ri(String(t))), t.appendTo(this)
      }
    }, {
      key: "append", value: function append(t, e, n) {
        var r = this._appendChar(t[0], e);
        return null != n && (r.tailShift += this.appendTail(n).tailShift), r
      }
    }, {
      key: "doCommit", value: function doCommit() {
      }
    }, {
      key: "state", get: function get() {
        return {_value: this._value, _isRawInput: this._isRawInput}
      }, set: function set(t) {
        Object.assign(this, t)
      }
    }]), PatternFixedDefinition
  }(), li = ["chunks"], hi = function () {
    /** */
    function ChunksTailDetails() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      _classCallCheck(this, ChunksTailDetails), this.chunks = t, this.from = e
    }

    return _createClass(ChunksTailDetails, [{
      key: "toString", value: function toString() {
        return this.chunks.map(String).join("")
      }// $FlowFixMe no ideas
    }, {
      key: "extend", value: function extend(t) {
        if (String(t)) {
          isString(t) && (t = new ri(String(t)));
          var e = this.chunks[this.chunks.length - 1], n = e && (// if stops are same or tail has no stop
              e.stop === t.stop || null == t.stop) &&// if tail chunk goes just after last chunk
            t.from === e.from + e.toString().length;
          if (t instanceof ri)
// check the ability to extend previous chunk
            n ?
              // extend previous chunk
              e.extend(t.toString()) :
              // append new chunk
              this.chunks.push(t); else if (t instanceof ChunksTailDetails) {
            if (null == t.stop) for (
// unwrap floating chunks to parent, keeping `from` pos
              var r; t.chunks.length && null == t.chunks[0].stop;) (r = t.chunks.shift()).from += t.from, this.extend(r);// if tail chunk still has value
            t.toString() && (
// if chunks contains stops, then popup stop to container
              t.stop = t.blockIndex, this.chunks.push(t))
          }
        }
      }
    }, {
      key: "appendTo", value: function appendTo(t) {
// $FlowFixMe
        if (!(t instanceof IMask.MaskedPattern)) return new ri(this.toString()).appendTo(t);
        for (var e = new $r, n = 0; n < this.chunks.length && !e.skip; ++n) {
          var r = this.chunks[n], i = t._mapPosToBlock(t.value.length), a = r.stop, s = void 0;
          if (null != a && (// if block not found or stop is behind lastBlock
            !i || i.index <= a) && ((r instanceof ChunksTailDetails ||// for continuous block also check if stop is exist
            t._stops.indexOf(a) >= 0) && e.aggregate(t._appendPlaceholder(a)), s = r instanceof ChunksTailDetails && t._blocks[a]), s) {
            var u = s.appendTail(r);
            u.skip = !1,// always ignore skip, it will be set on last
              e.aggregate(u), t._value += u.inserted;// get not inserted chars
            var o = r.toString().slice(u.rawInserted.length);
            o && e.aggregate(t.append(o, {tail: !0}))
          } else e.aggregate(t.append(r.toString(), {tail: !0}))
        }
        return e
      }
    }, {
      key: "state", get: function get() {
        return {
          chunks: this.chunks.map((function (t) {
            return t.state
          })), from: this.from, stop: this.stop, blockIndex: this.blockIndex
        }
      }, set: function set(t) {
        var e = t.chunks, n = _objectWithoutProperties(t, li);
        Object.assign(this, n), this.chunks = e.map((function (t) {
          var e = "chunks" in t ? new ChunksTailDetails : new ri;// $FlowFixMe already checked above
          return e.state = t, e
        }))
      }
    }, {
      key: "unshift", value: function unshift(t) {
        if (!this.chunks.length || null != t && this.from >= t) return "";
        for (var e = null != t ? t - this.from : t, n = 0; n < this.chunks.length;) {
          var r = this.chunks[n], i = r.unshift(e);
          if (r.toString()) {
// chunk still contains value
// but not shifted - means no more available chars to shift
            if (!i) break;
            ++n
          } else
// clean if chunk has no value
            this.chunks.splice(n, 1);
          if (i) return i
        }
        return ""
      }
    }, {
      key: "shift", value: function shift() {
        if (!this.chunks.length) return "";
        for (var t = this.chunks.length - 1; 0 <= t;) {
          var e = this.chunks[t], n = e.shift();
          if (e.toString()) {
// chunk still contains value
// but not shifted - means no more available chars to shift
            if (!n) break;
            --t
          } else
// clean if chunk has no value
            this.chunks.splice(t, 1);
          if (n) return n
        }
        return ""
      }
    }]), ChunksTailDetails
  }(), ci = function () {
    function PatternCursor(t, e) {
      _classCallCheck(this, PatternCursor), this.masked = t, this._log = [];
      var n = t._mapPosToBlock(e) || (e < 0 ?// first
        {index: 0, offset: 0} :// last
        {index: this.masked._blocks.length, offset: 0}), r = n.offset, i = n.index;
      this.offset = r, this.index = i, this.ok = !1
    }

    return _createClass(PatternCursor, [{
      key: "block", get: function get() {
        return this.masked._blocks[this.index]
      }
    }, {
      key: "pos", get: function get() {
        return this.masked._blockStartPos(this.index) + this.offset
      }
    }, {
      key: "state", get: function get() {
        return {index: this.index, offset: this.offset, ok: this.ok}
      }, set: function set(t) {
        Object.assign(this, t)
      }
    }, {
      key: "pushState", value: function pushState() {
        this._log.push(this.state)
      }
    }, {
      key: "popState", value: function popState() {
        var t = this._log.pop();
        return this.state = t, t
      }
    }, {
      key: "bindBlock", value: function bindBlock() {
        this.block || (this.index < 0 && (this.index = 0, this.offset = 0), this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1, this.offset = this.block.value.length))
      }
    }, {
      key: "_pushLeft", value: function _pushLeft(t) {
        for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = (null === (e = this.block) || void 0 === e ? void 0 : e.value.length) || 0) {
          var e;
          if (t()) return this.ok = !0
        }
        return this.ok = !1
      }
    }, {
      key: "_pushRight", value: function _pushRight(t) {
        for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) if (t()) return this.ok = !0;
        return this.ok = !1
      }
    }, {
      key: "pushLeftBeforeFilled", value: function pushLeftBeforeFilled() {
        var t = this;
        return this._pushLeft((function () {
          if (!t.block.isFixed && t.block.value) return t.offset = t.block.nearestInputPos(t.offset, Qr), 0 !== t.offset || void 0
        }))
      }
    }, {
      key: "pushLeftBeforeInput", value: function pushLeftBeforeInput() {
        var t = this;
// cases:
// filled input: 00|
// optional empty input: 00[]|
// nested block: XX<[]>|
        return this._pushLeft((function () {
          if (!t.block.isFixed) return t.offset = t.block.nearestInputPos(t.offset, Jr), !0
        }))
      }
    }, {
      key: "pushLeftBeforeRequired", value: function pushLeftBeforeRequired() {
        var t = this;
        return this._pushLeft((function () {
          if (!(t.block.isFixed || t.block.isOptional && !t.block.value)) return t.offset = t.block.nearestInputPos(t.offset, Jr), !0
        }))
      }
    }, {
      key: "pushRightBeforeFilled", value: function pushRightBeforeFilled() {
        var t = this;
        return this._pushRight((function () {
          if (!t.block.isFixed && t.block.value) return t.offset = t.block.nearestInputPos(t.offset, ei), t.offset !== t.block.value.length || void 0
        }))
      }
    }, {
      key: "pushRightBeforeInput", value: function pushRightBeforeInput() {
        var t = this;
        return this._pushRight((function () {
          if (!t.block.isFixed)// HACK cases like (STILL DOES NOT WORK FOR NESTED)
// aa|X
// aa<X|[]>X_ - this will not work
// if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
// const o = this.offset;
            return t.offset = t.block.nearestInputPos(t.offset, Xr), !0
        }))
      }
    }, {
      key: "pushRightBeforeRequired", value: function pushRightBeforeRequired() {
        var t = this;
        return this._pushRight((function () {
          if (!(t.block.isFixed || t.block.isOptional && !t.block.value))// TODO check |[*]XX_
            return t.offset = t.block.nearestInputPos(t.offset, Xr), !0
        }))
      }
    }]), PatternCursor
  }(), pi = function (t) {
    _inherits(MaskedRegExp, t);
    var e = _createSuper(MaskedRegExp);

    function MaskedRegExp() {
      return _classCallCheck(this, MaskedRegExp), e.apply(this, arguments)
    }

    return _createClass(MaskedRegExp, [{
      key: "_update", value:
        /** @override @param {Object} opts */
        function _update(t) {
          t.mask && (t.validate = function (e) {
            return e.search(t.mask) >= 0
          }), _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, t)
        }
    }]), MaskedRegExp
  }(ii);
  IMask.MaskedRegExp = pi;
  var fi = ["_blocks"], di = function (t) {
    _inherits(MaskedPattern, t);
    var e = _createSuper(MaskedPattern);
    /** */
    /** */

    /** Single char for empty input */
    /** Show placeholder only when needed */function MaskedPattern() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return _classCallCheck(this, MaskedPattern),
// TODO type $Shape<MaskedPatternOptions>={} does not work
        t.definitions = Object.assign({}, si, t.definitions), e.call(this, Object.assign({}, MaskedPattern.DEFAULTS, t))
    }

    /** @override @param {Object} opts */
    return _createClass(MaskedPattern, [{
      key: "_update", value: function _update() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t.definitions = Object.assign({}, this.definitions, t.definitions), _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, t), this._rebuildMask()
      }
      /** */
    }, {
      key: "_rebuildMask", value: function _rebuildMask() {
        var t = this, e = this.definitions;
        this._blocks = [], this._stops = [], this._maskedBlocks = {};
        var n = this.mask;
        if (n && e) for (var r = !1, i = !1, a = 0; a < n.length; ++a) {
          if (this.blocks) if ("continue" === function () {
            var e = n.slice(a), r = Object.keys(t.blocks).filter((function (t) {
              return 0 === e.indexOf(t)
            }));// order by key length
            r.sort((function (t, e) {
              return e.length - t.length
            }));// use block name with max length
            var i = r[0];
            if (i) {
// $FlowFixMe no ideas
              var s = createMask(Object.assign({
                parent: t,
                lazy: t.lazy,
                eager: t.eager,
                placeholderChar: t.placeholderChar,
                overwrite: t.overwrite
              }, t.blocks[i]));
              return s && (t._blocks.push(s),// store block index
              t._maskedBlocks[i] || (t._maskedBlocks[i] = []), t._maskedBlocks[i].push(t._blocks.length - 1)), a += i.length - 1, "continue"
            }
          }()) continue;
          var s = n[a], u = s in e;
          if (s !== MaskedPattern.STOP_CHAR) if ("{" !== s && "}" !== s) if ("[" !== s && "]" !== s) {
            if (s === MaskedPattern.ESCAPE_CHAR) {
              if (++a, !(s = n[a])) break;
              u = !1
            }
            var o = u ? new ui({
              parent: this,
              lazy: this.lazy,
              eager: this.eager,
              placeholderChar: this.placeholderChar,
              mask: e[s],
              isOptional: i
            }) : new oi({char: s, eager: this.eager, isUnmasking: r});
            this._blocks.push(o)
          } else i = !i; else r = !r; else this._stops.push(this._blocks.length)
        }
      }
      /** @override */
    }, {
      key: "state", get: function get() {
        return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
          _blocks: this._blocks.map((function (t) {
            return t.state
          }))
        })
      }, set: function set(t) {
        var e = t._blocks, n = _objectWithoutProperties(t, fi);
        this._blocks.forEach((function (t, n) {
          return t.state = e[n]
        })), _set(_getPrototypeOf(MaskedPattern.prototype), "state", n, this, !0)
      }
      /** @override */
    }, {
      key: "reset", value: function reset() {
        _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this), this._blocks.forEach((function (t) {
          return t.reset()
        }))
      }
      /** @override */
    }, {
      key: "isComplete", get: function get() {
        return this._blocks.every((function (t) {
          return t.isComplete
        }))
      }
      /** @override */
    }, {
      key: "isFilled", get: function get() {
        return this._blocks.every((function (t) {
          return t.isFilled
        }))
      }
    }, {
      key: "isFixed", get: function get() {
        return this._blocks.every((function (t) {
          return t.isFixed
        }))
      }
    }, {
      key: "isOptional", get: function get() {
        return this._blocks.every((function (t) {
          return t.isOptional
        }))
      }
      /** @override */
    }, {
      key: "doCommit", value: function doCommit() {
        this._blocks.forEach((function (t) {
          return t.doCommit()
        })), _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this)
      }
      /** @override */
    }, {
      key: "unmaskedValue", get: function get() {
        return this._blocks.reduce((function (t, e) {
          return t + e.unmaskedValue
        }), "")
      }, set: function set(t) {
        _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", t, this, !0)
      }
      /** @override */
    }, {
      key: "value", get: function get() {
// TODO return _value when not in change?
        return this._blocks.reduce((function (t, e) {
          return t + e.value
        }), "")
      }, set: function set(t) {
        _set(_getPrototypeOf(MaskedPattern.prototype), "value", t, this, !0)
      }
      /** @override */
    }, {
      key: "appendTail", value: function appendTail(t) {
        return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, t).aggregate(this._appendPlaceholder())
      }
      /** @override */
    }, {
      key: "_appendEager", value: function _appendEager() {
        var t, e = new $r, n = null === (t = this._mapPosToBlock(this.value.length)) || void 0 === t ? void 0 : t.index;
        if (null == n) return e;// TODO test if it works for nested pattern masks
        this._blocks[n].isFilled && ++n;
        for (var r = n; r < this._blocks.length; ++r) {
          var i = this._blocks[r]._appendEager();
          if (!i.inserted) break;
          e.aggregate(i)
        }
        return e
      }
      /** @override */
    }, {
      key: "_appendCharRaw", value: function _appendCharRaw(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = this._mapPosToBlock(this.value.length), r = new $r;
        if (!n) return r;
        for (var i = n.index; ; ++i) {
          var a, s = this._blocks[i];
          if (!s) break;
          var u = s._appendChar(t, Object.assign({}, e, {_beforeTailState: null === (a = e._beforeTailState) || void 0 === a ? void 0 : a._blocks[i]})),
            o = u.skip;
          if (r.aggregate(u), o || u.rawInserted) break;// go next char
        }
        return r
      }
      /** @override */
    }, {
      key: "extractTail", value: function extractTail() {
        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length, r = new hi;
        return e === n || this._forEachBlocksInRange(e, n, (function (e, n, i, a) {
          var s = e.extractTail(i, a);
          s.stop = t._findStopBefore(n), s.from = t._blockStartPos(n), s instanceof hi && (s.blockIndex = n), r.extend(s)
        })), r
      }
      /** @override */
    }, {
      key: "extractInput", value: function extractInput() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (t === e) return "";
        var r = "";
        return this._forEachBlocksInRange(t, e, (function (t, e, i, a) {
          r += t.extractInput(i, a, n)
        })), r
      }
    }, {
      key: "_findStopBefore", value: function _findStopBefore(t) {
        for (var e, n = 0; n < this._stops.length; ++n) {
          var r = this._stops[n];
          if (!(r <= t)) break;
          e = r
        }
        return e
      }
      /** Appends placeholder depending on laziness */
    }, {
      key: "_appendPlaceholder", value: function _appendPlaceholder(t) {
        var e = this, n = new $r;
        if (this.lazy && null == t) return n;
        var r = this._mapPosToBlock(this.value.length);
        if (!r) return n;
        var i = r.index, a = null != t ? t : this._blocks.length;
        return this._blocks.slice(i, a).forEach((function (r) {
          if (!r.lazy || null != t) {
// $FlowFixMe `_blocks` may not be present
            var i = null != r._blocks ? [r._blocks.length] : [], a = r._appendPlaceholder.apply(r, i);
            e._value += a.inserted, n.aggregate(a)
          }
        })), n
      }
      /** Finds block in pos */
    }, {
      key: "_mapPosToBlock", value: function _mapPosToBlock(t) {
        for (var e = "", n = 0; n < this._blocks.length; ++n) {
          var r = this._blocks[n], i = e.length;
          if (t <= (e += r.value).length) return {index: n, offset: t - i}
        }
      }
      /** */
    }, {
      key: "_blockStartPos", value: function _blockStartPos(t) {
        return this._blocks.slice(0, t).reduce((function (t, e) {
          return t + e.value.length
        }), 0)
      }
      /** */
    }, {
      key: "_forEachBlocksInRange", value: function _forEachBlocksInRange(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          n = arguments.length > 2 ? arguments[2] : void 0, r = this._mapPosToBlock(t);
        if (r) {
          var i = this._mapPosToBlock(e), a = i && r.index === i.index, s = r.offset,
            u = i && a ? i.offset : this._blocks[r.index].value.length;// process first block
          if (n(this._blocks[r.index], r.index, s, u), i && !a) {
// process intermediate blocks
            for (var o = r.index + 1; o < i.index; ++o) n(this._blocks[o], o, 0, this._blocks[o].value.length);// process last block
            n(this._blocks[i.index], i.index, 0, i.offset)
          }
        }
      }
      /** @override */
    }, {
      key: "remove", value: function remove() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          n = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, t, e);
        return this._forEachBlocksInRange(t, e, (function (t, e, r, i) {
          n.aggregate(t.remove(r, i))
        })), n
      }
      /** @override */
    }, {
      key: "nearestInputPos", value: function nearestInputPos(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xr;
        if (!this._blocks.length) return 0;
        var n = new ci(this, t);
        if (e === Xr)
// -------------------------------------------------
// NONE should only go out from fixed to the right!
// -------------------------------------------------
          return n.pushRightBeforeInput() ? n.pos : (n.popState(), n.pushLeftBeforeInput() ? n.pos : this.value.length);// FORCE is only about a|* otherwise is 0
        if (e === Jr || e === Qr) {
// try to break fast when *|a
          if (e === Jr) {
            if (n.pushRightBeforeFilled(), n.ok && n.pos === t) return t;
            n.popState()
          }// forward flow
// backward flow
          if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), e === Jr) {
            if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= t) return n.pos;
            if (n.popState(), n.ok && n.pos <= t) return n.pos;
            n.popState()
          }
          return n.ok ? n.pos : e === Qr ? 0 : (n.popState(), n.ok ? n.pos : (n.popState(), n.ok ? n.pos : 0))
        }
        return e === ti || e === ei ? (
// forward flow
          n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : e === ei ? this.value.length : (// backward flow
            n.popState(), n.ok ? n.pos : (n.popState(), n.ok ? n.pos : this.nearestInputPos(t, Jr)))) : t
      }
      /** Get block by name */
    }, {
      key: "maskedBlock", value: function maskedBlock(t) {
        return this.maskedBlocks(t)[0]
      }
      /** Get all blocks by name */
    }, {
      key: "maskedBlocks", value: function maskedBlocks(t) {
        var e = this, n = this._maskedBlocks[t];
        return n ? n.map((function (t) {
          return e._blocks[t]
        })) : []
      }
    }]), MaskedPattern
  }(ii);
  /** Pattern mask @param {Object} opts @param {Object} opts.blocks @param {Object} opts.definitions @param {string} opts.placeholderChar @param {boolean} opts.lazy */di.DEFAULTS = {
    lazy: !0,
    placeholderChar: "_"
  }, di.STOP_CHAR = "`", di.ESCAPE_CHAR = "\\", di.InputDefinition = ui, di.FixedDefinition = oi, IMask.MaskedPattern = di;
  /** Pattern which accepts ranges */
  var gi = function (t) {
    _inherits(MaskedRange, t);
    var e = _createSuper(MaskedRange);

    function MaskedRange() {
      return _classCallCheck(this, MaskedRange), e.apply(this, arguments)
    }

    return _createClass(MaskedRange, [{
      key: "_matchFrom", get:
      /** Optionally sets max length of pattern. Used when pattern length is longer then `to` param length. Pads zeros at start in this case. */
      /** Min bound */
      /** Max bound */
        /** */
        function get() {
          return this.maxLength - String(this.from).length
        }
      /** @override */
    }, {
      key: "_update", value: function _update(t) {
// TODO type
        t = Object.assign({to: this.to || 0, from: this.from || 0, maxLength: this.maxLength || 0}, t);
        var e = String(t.to).length;
        null != t.maxLength && (e = Math.max(e, t.maxLength)), t.maxLength = e;
        for (var n = String(t.from).padStart(e, "0"), r = String(t.to).padStart(e, "0"), i = 0; i < r.length && r[i] === n[i];) ++i;
        t.mask = r.slice(0, i).replace(/0/g, "\\0") + "0".repeat(e - i), _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, t)
      }
      /** @override */
    }, {
      key: "isComplete", get: function get() {
        return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value)
      }
    }, {
      key: "boundaries", value: function boundaries(t) {
        var e = "", n = "", r = _slicedToArray(t.match(/^(\D*)(\d*)(\D*)/) || [], 3), i = r[1], a = r[2];
        return a && (e = "0".repeat(i.length) + a, n = "9".repeat(i.length) + a), [e = e.padEnd(this.maxLength, "0"), n = n.padEnd(this.maxLength, "9")]
      }// TODO str is a single char everytime
      /** @override */
    }, {
      key: "doPrepare", value: function doPrepare(t) {
        var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = normalizePrepare(_get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, t.replace(/\D/g, ""), n)),
          i = _slicedToArray(r, 2);
        if (t = i[0], e = i[1], !this.autofix || !t) return t;
        var a = String(this.from).padStart(this.maxLength, "0"), s = String(this.to).padStart(this.maxLength, "0"),
          u = this.value + t;
        if (u.length > this.maxLength) return "";
        var o = this.boundaries(u), l = _slicedToArray(o, 2), h = l[0], c = l[1];
        return Number(c) < this.from ? a[u.length - 1] : Number(h) > this.to ? "pad" === this.autofix && u.length < this.maxLength ? ["", e.aggregate(this.append(a[u.length - 1] + t, n))] : s[u.length - 1] : t
      }
      /** @override */
    }, {
      key: "doValidate", value: function doValidate() {
        var t, e = this.value, n = e.search(/[^0]/);
        if (-1 === n && e.length <= this._matchFrom) return !0;
        for (var r = this.boundaries(e), i = _slicedToArray(r, 2), a = i[0], s = i[1], u = arguments.length, o = new Array(u), l = 0; l < u; l++) o[l] = arguments[l];
        return this.from <= Number(s) && Number(a) <= this.to && (t = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(t, [this].concat(o))
      }
    }]), MaskedRange
  }(di);
  IMask.MaskedRange = gi;
  /** Date mask */
  var ki = function (t) {
    _inherits(MaskedDate, t);
    var e = _createSuper(MaskedDate);
    /** Pattern mask for date according to {@link MaskedDate#format} */
    /** Start date */
    /** End date */

    /** */
    /** @param {Object} opts */function MaskedDate(t) {
      return _classCallCheck(this, MaskedDate), e.call(this, Object.assign({}, MaskedDate.DEFAULTS, t))
    }

    /** @override */
    return _createClass(MaskedDate, [{
      key: "_update", value: function _update(t) {
        t.mask === Date && delete t.mask, t.pattern && (t.mask = t.pattern);
        var e = t.blocks;
        t.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()),// adjust year block
        t.min && (t.blocks.Y.from = t.min.getFullYear()), t.max && (t.blocks.Y.to = t.max.getFullYear()), t.min && t.max && t.blocks.Y.from === t.blocks.Y.to && (t.blocks.m.from = t.min.getMonth() + 1, t.blocks.m.to = t.max.getMonth() + 1, t.blocks.m.from === t.blocks.m.to && (t.blocks.d.from = t.min.getDate(), t.blocks.d.to = t.max.getDate())), Object.assign(t.blocks, this.blocks, e),// add autofix
          Object.keys(t.blocks).forEach((function (e) {
            var n = t.blocks[e];
            !("autofix" in n) && "autofix" in t && (n.autofix = t.autofix)
          })), _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, t)
      }
      /** @override */
    }, {
      key: "doValidate", value: function doValidate() {
        for (var t, e = this.date, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return (t = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(t, [this].concat(r)) && (!this.isComplete || this.isDateExist(this.value) && null != e && (null == this.min || this.min <= e) && (null == this.max || e <= this.max))
      }
      /** Checks if date is exists */
    }, {
      key: "isDateExist", value: function isDateExist(t) {
        return this.format(this.parse(t, this), this).indexOf(t) >= 0
      }
      /** Parsed Date */
    }, {
      key: "date", get: function get() {
        return this.typedValue
      }, set: function set(t) {
        this.typedValue = t
      }
      /** @override */
    }, {
      key: "typedValue", get: function get() {
        return this.isComplete ? _get(_getPrototypeOf(MaskedDate.prototype), "typedValue", this) : null
      }, set: function set(t) {
        _set(_getPrototypeOf(MaskedDate.prototype), "typedValue", t, this, !0)
      }
      /** @override */
    }, {
      key: "maskEquals", value: function maskEquals(t) {
        return t === Date || _get(_getPrototypeOf(MaskedDate.prototype), "maskEquals", this).call(this, t)
      }
    }]), MaskedDate
  }(di);
  ki.DEFAULTS = {
    pattern: "d{.}`m{.}`Y", format: function format(t) {
      return t ? [String(t.getDate()).padStart(2, "0"), String(t.getMonth() + 1).padStart(2, "0"), t.getFullYear()].join(".") : ""
    }, parse: function parse(t) {
      var e = _slicedToArray(t.split("."), 3), n = e[0], r = e[1], i = e[2];
      return new Date(i, r - 1, n)
    }
  }, ki.GET_DEFAULT_BLOCKS = function () {
    return {
      d: {mask: gi, from: 1, to: 31, maxLength: 2},
      m: {mask: gi, from: 1, to: 12, maxLength: 2},
      Y: {mask: gi, from: 1900, to: 9999}
    }
  }, IMask.MaskedDate = ki;
  /** Generic element API to use with mask @interface */
  var vi = function () {
    function MaskElement() {
      _classCallCheck(this, MaskElement)
    }

    return _createClass(MaskElement, [{
      key: "selectionStart", get:
      /** */
      /** */
      /** */
        /** Safely returns selection start */
        function get() {
          var t;
          try {
            t = this._unsafeSelectionStart
          } catch (t) {
          }
          return null != t ? t : this.value.length
        }
      /** Safely returns selection end */
    }, {
      key: "selectionEnd", get: function get() {
        var t;
        try {
          t = this._unsafeSelectionEnd
        } catch (t) {
        }
        return null != t ? t : this.value.length
      }
      /** Safely sets element selection */
    }, {
      key: "select", value: function select(t, e) {
        if (null != t && null != e && (t !== this.selectionStart || e !== this.selectionEnd)) try {
          this._unsafeSelect(t, e)
        } catch (t) {
        }
      }
      /** Should be overriden in subclasses */
    }, {
      key: "_unsafeSelect", value: function _unsafeSelect(t, e) {
      }
      /** Should be overriden in subclasses */
    }, {
      key: "isActive", get: function get() {
        return !1
      }
      /** Should be overriden in subclasses */
    }, {
      key: "bindEvents", value: function bindEvents(t) {
      }
      /** Should be overriden in subclasses */
    }, {
      key: "unbindEvents", value: function unbindEvents() {
      }
    }]), MaskElement
  }();
  IMask.MaskElement = vi;
  /** Bridge between HTMLElement and {@link Masked} */
  var yi = function (t) {
    _inherits(HTMLMaskElement, t);
    var e = _createSuper(HTMLMaskElement);
    /** Mapping between HTMLElement events and mask internal events */

    /** HTMLElement to use mask on */
    /** @param {HTMLInputElement|HTMLTextAreaElement} input */function HTMLMaskElement(t) {
      var n;
      return _classCallCheck(this, HTMLMaskElement), (n = e.call(this)).input = t, n._handlers = {}, n
    }

    /** */
// $FlowFixMe https://github.com/facebook/flow/issues/2839
    return _createClass(HTMLMaskElement, [{
      key: "rootElement", get: function get() {
        var t, e, n;
        return null !== (t = null === (e = (n = this.input).getRootNode) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : document
      }
      /** Is element in focus @readonly */
    }, {
      key: "isActive", get: function get() {
//$FlowFixMe
        return this.input === this.rootElement.activeElement
      }
      /** Returns HTMLElement selection start @override */
    }, {
      key: "_unsafeSelectionStart", get: function get() {
        return this.input.selectionStart
      }
      /** Returns HTMLElement selection end @override */
    }, {
      key: "_unsafeSelectionEnd", get: function get() {
        return this.input.selectionEnd
      }
      /** Sets HTMLElement selection @override */
    }, {
      key: "_unsafeSelect", value: function _unsafeSelect(t, e) {
        this.input.setSelectionRange(t, e)
      }
      /** HTMLElement value @override */
    }, {
      key: "value", get: function get() {
        return this.input.value
      }, set: function set(t) {
        this.input.value = t
      }
      /** Binds HTMLElement events to mask internal events @override */
    }, {
      key: "bindEvents", value: function bindEvents(t) {
        var e = this;
        Object.keys(t).forEach((function (n) {
          return e._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[n], t[n])
        }))
      }
      /** Unbinds HTMLElement events to mask internal events @override */
    }, {
      key: "unbindEvents", value: function unbindEvents() {
        var t = this;
        Object.keys(this._handlers).forEach((function (e) {
          return t._toggleEventHandler(e)
        }))
      }
      /** */
    }, {
      key: "_toggleEventHandler", value: function _toggleEventHandler(t, e) {
        this._handlers[t] && (this.input.removeEventListener(t, this._handlers[t]), delete this._handlers[t]), e && (this.input.addEventListener(t, e), this._handlers[t] = e)
      }
    }]), HTMLMaskElement
  }(vi);
  yi.EVENTS_MAP = {
    selectionChange: "keydown",
    input: "input",
    drop: "drop",
    click: "click",
    focus: "focus",
    commit: "blur"
  }, IMask.HTMLMaskElement = yi;
  var _i = function (t) {
    _inherits(HTMLContenteditableMaskElement, t);
    var e = _createSuper(HTMLContenteditableMaskElement);

    function HTMLContenteditableMaskElement() {
      return _classCallCheck(this, HTMLContenteditableMaskElement), e.apply(this, arguments)
    }

    return _createClass(HTMLContenteditableMaskElement, [{
      key: "_unsafeSelectionStart", get:
        /** Returns HTMLElement selection start @override */
        function get() {
          var t = this.rootElement, e = t.getSelection && t.getSelection(), n = e && e.anchorOffset,
            r = e && e.focusOffset;
          return null == r || null == n || n < r ? n : r
        }
      /** Returns HTMLElement selection end @override */
    }, {
      key: "_unsafeSelectionEnd", get: function get() {
        var t = this.rootElement, e = t.getSelection && t.getSelection(), n = e && e.anchorOffset,
          r = e && e.focusOffset;
        return null == r || null == n || n > r ? n : r
      }
      /** Sets HTMLElement selection @override */
    }, {
      key: "_unsafeSelect", value: function _unsafeSelect(t, e) {
        if (this.rootElement.createRange) {
          var n = this.rootElement.createRange();
          n.setStart(this.input.firstChild || this.input, t), n.setEnd(this.input.lastChild || this.input, e);
          var r = this.rootElement, i = r.getSelection && r.getSelection();
          i && (i.removeAllRanges(), i.addRange(n))
        }
      }
      /** HTMLElement value @override */
    }, {
      key: "value", get: function get() {
// $FlowFixMe
        return this.input.textContent
      }, set: function set(t) {
        this.input.textContent = t
      }
    }]), HTMLContenteditableMaskElement
  }(yi);
  IMask.HTMLContenteditableMaskElement = _i;
  var mi = ["mask"], bi = function () {
    /** View element @readonly */

    /** Internal {@link Masked} model @readonly */
    /** @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el @param {Object} opts */
    function InputMask(t, e) {
      _classCallCheck(this, InputMask), this.el = t instanceof vi ? t : t.isContentEditable && "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName ? new _i(t) : new yi(t), this.masked = createMask(e), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(),// refresh
        this.updateValue(), this._onChange()
    }

    /** Read or update mask */
    return _createClass(InputMask, [{
      key: "mask", get: function get() {
        return this.masked.mask
      }, set: function set(t) {
        if (!this.maskEquals(t))// $FlowFixMe No ideas ... after update
          if (t instanceof IMask.Masked || this.masked.constructor !== maskedClass(t)) {
            var e = createMask({mask: t});
            e.unmaskedValue = this.masked.unmaskedValue, this.masked = e
          } else this.masked.updateOptions({mask: t})
      }
      /** Raw value */
    }, {
      key: "maskEquals", value: function maskEquals(t) {
        var e;
        return null == t || (null === (e = this.masked) || void 0 === e ? void 0 : e.maskEquals(t))
      }
    }, {
      key: "value", get: function get() {
        return this._value
      }, set: function set(t) {
        this.masked.value = t, this.updateControl(), this.alignCursor()
      }
      /** Unmasked value */
    }, {
      key: "unmaskedValue", get: function get() {
        return this._unmaskedValue
      }, set: function set(t) {
        this.masked.unmaskedValue = t, this.updateControl(), this.alignCursor()
      }
      /** Typed unmasked value */
    }, {
      key: "typedValue", get: function get() {
        return this.masked.typedValue
      }, set: function set(t) {
        this.masked.typedValue = t, this.updateControl(), this.alignCursor()
      }
      /** Starts listening to element events @protected */
    }, {
      key: "_bindEvents", value: function _bindEvents() {
        this.el.bindEvents({
          selectionChange: this._saveSelection,
          input: this._onInput,
          drop: this._onDrop,
          click: this._onClick,
          focus: this._onFocus,
          commit: this._onChange
        })
      }
      /** Stops listening to element events @protected */
    }, {
      key: "_unbindEvents", value: function _unbindEvents() {
        this.el && this.el.unbindEvents()
      }
      /** Fires custom event @protected */
    }, {
      key: "_fireEvent", value: function _fireEvent(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        var i = this._listeners[t];
        i && i.forEach((function (t) {
          return t.apply(void 0, n)
        }))
      }
      /** Current selection start @readonly */
    }, {
      key: "selectionStart", get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart
      }
      /** Current cursor position */
    }, {
      key: "cursorPos", get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd
      }, set: function set(t) {
        this.el && this.el.isActive && (this.el.select(t, t), this._saveSelection())
      }
      /** Stores current selection @protected */
    }, {
      key: "_saveSelection", value: function
        /* ev */
        _saveSelection() {
        this.value !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
          start: this.selectionStart,
          end: this.cursorPos
        }
      }
      /** Syncronizes model value from view */
    }, {
      key: "updateValue", value: function updateValue() {
        this.masked.value = this.el.value, this._value = this.masked.value
      }
      /** Syncronizes view from model value, fires change events */
    }, {
      key: "updateControl", value: function updateControl() {
        var t = this.masked.unmaskedValue, e = this.masked.value, n = this.unmaskedValue !== t || this.value !== e;
        this._unmaskedValue = t, this._value = e, this.el.value !== e && (this.el.value = e), n && this._fireChangeEvents()
      }
      /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */
    }, {
      key: "updateOptions", value: function updateOptions(t) {
        var e = t.mask, n = _objectWithoutProperties(t, mi), r = !this.maskEquals(e),
          i = !objectIncludes(this.masked, n);
        r && (this.mask = e), i && this.masked.updateOptions(n), (r || i) && this.updateControl()
      }
      /** Updates cursor */
    }, {
      key: "updateCursor", value: function updateCursor(t) {
        null != t && (this.cursorPos = t,// also queue change cursor for mobile browsers
          this._delayUpdateCursor(t))
      }
      /** Delays cursor update to support mobile browsers @private */
    }, {
      key: "_delayUpdateCursor", value: function _delayUpdateCursor(t) {
        var e = this;
        this._abortUpdateCursor(), this._changingCursorPos = t, this._cursorChanging = setTimeout((function () {
          e.el && (// if was destroyed
            e.cursorPos = e._changingCursorPos, e._abortUpdateCursor())
        }), 10)
      }
      /** Fires custom events @protected */
    }, {
      key: "_fireChangeEvents", value: function _fireChangeEvents() {
        this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent)
      }
      /** Aborts delayed cursor update @private */
    }, {
      key: "_abortUpdateCursor", value: function _abortUpdateCursor() {
        this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging)
      }
      /** Aligns cursor to nearest available position */
    }, {
      key: "alignCursor", value: function alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, Jr))
      }
      /** Aligns cursor only if selection is empty */
    }, {
      key: "alignCursorFriendly", value: function alignCursorFriendly() {
        this.selectionStart === this.cursorPos &&// skip if range is selected
        this.alignCursor()
      }
      /** Adds listener on custom event */
    }, {
      key: "on", value: function on(t, e) {
        return this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e), this
      }
      /** Removes custom event listener */
    }, {
      key: "off", value: function off(t, e) {
        if (!this._listeners[t]) return this;
        if (!e) return delete this._listeners[t], this;
        var n = this._listeners[t].indexOf(e);
        return n >= 0 && this._listeners[t].splice(n, 1), this
      }
      /** Handles view input event */
    }, {
      key: "_onInput", value: function _onInput(t) {// fix strange IE behavior
        if (this._inputEvent = t, this._abortUpdateCursor(), !this._selection) return this.updateValue();
        var e = new ni(// new state
            this.el.value, this.cursorPos,// old state
            this.value, this._selection), n = this.masked.rawInputValue,
          r = this.masked.splice(e.startChangePos, e.removed.length, e.inserted, e.removeDirection).offset,
          i = n === this.masked.rawInputValue ? e.removeDirection : Xr,
          a = this.masked.nearestInputPos(e.startChangePos + r, i);
        i !== Xr && (a = this.masked.nearestInputPos(a, Xr)), this.updateControl(), this.updateCursor(a), delete this._inputEvent
      }
      /** Handles view change event and commits model value */
    }, {
      key: "_onChange", value: function _onChange() {
        this.value !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection()
      }
      /** Handles view drop event, prevents by default */
    }, {
      key: "_onDrop", value: function _onDrop(t) {
        t.preventDefault(), t.stopPropagation()
      }
      /** Restore last selection on focus */
    }, {
      key: "_onFocus", value: function _onFocus(t) {
        this.alignCursorFriendly()
      }
      /** Restore last selection on focus */
    }, {
      key: "_onClick", value: function _onClick(t) {
        this.alignCursorFriendly()
      }
      /** Unbind view events and removes element reference */
    }, {
      key: "destroy", value: function destroy() {
        this._unbindEvents(),// $FlowFixMe why not do so?
          this._listeners.length = 0,// $FlowFixMe
          delete this.el
      }
    }]), InputMask
  }();
  /** Listens to element events and controls changes between element and {@link Masked} */IMask.InputMask = bi;
  /** Pattern which validates enum values */
  var Ci = function (t) {
    _inherits(MaskedEnum, t);
    var e = _createSuper(MaskedEnum);

    function MaskedEnum() {
      return _classCallCheck(this, MaskedEnum), e.apply(this, arguments)
    }

    return _createClass(MaskedEnum, [{
      key: "_update", value:
        /** @override @param {Object} opts */
        function _update(t) {
// TODO type
          t.enum && (t.mask = "*".repeat(t.enum[0].length)), _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, t)
        }
      /** @override */
    }, {
      key: "doValidate", value: function doValidate() {
        for (var t, e = this, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return this.enum.some((function (t) {
          return t.indexOf(e.unmaskedValue) >= 0
        })) && (t = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(t, [this].concat(r))
      }
    }]), MaskedEnum
  }(di);
  IMask.MaskedEnum = Ci;
  /** Number mask @param {Object} opts @param {string} opts.radix - Single char @param {string} opts.thousandsSeparator - Single char @param {Array<string>} opts.mapToRadix - Array of single chars @param {number} opts.min @param {number} opts.max @param {number} opts.scale - Digits after point @param {boolean} opts.signed - Allow negative @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing */
  var Ai = function (t) {
    _inherits(MaskedNumber, t);
    var e = _createSuper(MaskedNumber);
    /** Single char */
    /** Single char */
    /** Array of single chars */
    /** */
    /** */
    /** Digits after point */
    /** */

    /** Flag to remove leading and trailing zeros in the end of editing */
    /** Flag to pad trailing zeros after point in the end of editing */function MaskedNumber(t) {
      return _classCallCheck(this, MaskedNumber), e.call(this, Object.assign({}, MaskedNumber.DEFAULTS, t))
    }

    /** @override */
    return _createClass(MaskedNumber, [{
      key: "_update", value: function _update(t) {
        _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, t), this._updateRegExps()
      }
      /** */
    }, {
      key: "_updateRegExps", value: function _updateRegExps() {
// use different regexp to process user input (more strict, input suffix) and tail shifting
        var t = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
          e = (this.scale ? "(" + escapeRegExp(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
        this._numberRegExpInput = new RegExp(t + "(0|([1-9]+\\d*))?" + e), this._numberRegExp = new RegExp(t + "\\d*" + e), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(escapeRegExp).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), "g")
      }
      /** */
    }, {
      key: "_removeThousandsSeparators", value: function _removeThousandsSeparators(t) {
        return t.replace(this._thousandsSeparatorRegExp, "")
      }
      /** */
    }, {
      key: "_insertThousandsSeparators", value: function _insertThousandsSeparators(t) {
// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        var e = t.split(this.radix);
        return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), e.join(this.radix)
      }
      /** @override */
    }, {
      key: "doPrepare", value: function doPrepare(t) {
        var e;
        t = t.replace(this._mapToRadixRegExp, this.radix);
        for (var n = this._removeThousandsSeparators(t), r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
        var s = normalizePrepare((e = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(e, [this, n].concat(i))),
          u = _slicedToArray(s, 2), o = u[0], l = u[1];
        return t && !n && (l.skip = !0), [o, l]
      }
      /** */
    }, {
      key: "_separatorsCount", value: function _separatorsCount(t) {
        for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, r = 0; r < t; ++r) this._value.indexOf(this.thousandsSeparator, r) === r && (++n, e && (t += this.thousandsSeparator.length));
        return n
      }
      /** */
    }, {
      key: "_separatorsCountFromSlice", value: function _separatorsCountFromSlice() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._value;
        return this._separatorsCount(this._removeThousandsSeparators(t).length, !0)
      }
      /** @override */
    }, {
      key: "extractInput", value: function extractInput() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          n = arguments.length > 2 ? arguments[2] : void 0, r = this._adjustRangeWithSeparators(t, e),
          i = _slicedToArray(r, 2);
        return t = i[0], e = i[1], this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, t, e, n))
      }
      /** @override */
    }, {
      key: "_appendCharRaw", value: function _appendCharRaw(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, t, e);
        var n = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
          r = this._separatorsCountFromSlice(n);
        this._value = this._removeThousandsSeparators(this.value);
        var i = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, t, e);
        this._value = this._insertThousandsSeparators(this._value);
        var a = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
          s = this._separatorsCountFromSlice(a);
        return i.tailShift += (s - r) * this.thousandsSeparator.length, i.skip = !i.rawInserted && t === this.thousandsSeparator, i
      }
      /** */
    }, {
      key: "_findSeparatorAround", value: function _findSeparatorAround(t) {
        if (this.thousandsSeparator) {
          var e = t - this.thousandsSeparator.length + 1, n = this.value.indexOf(this.thousandsSeparator, e);
          if (n <= t) return n
        }
        return -1
      }
    }, {
      key: "_adjustRangeWithSeparators", value: function _adjustRangeWithSeparators(t, e) {
        var n = this._findSeparatorAround(t);
        n >= 0 && (t = n);
        var r = this._findSeparatorAround(e);
        return r >= 0 && (e = r + this.thousandsSeparator.length), [t, e]
      }
      /** @override */
    }, {
      key: "remove", value: function remove() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
          n = this._adjustRangeWithSeparators(t, e), r = _slicedToArray(n, 2);
        t = r[0], e = r[1];
        var i = this.value.slice(0, t), a = this.value.slice(e), s = this._separatorsCount(i.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(i + a));
        var u = this._separatorsCountFromSlice(i);
        return new $r({tailShift: (u - s) * this.thousandsSeparator.length})
      }
      /** @override */
    }, {
      key: "nearestInputPos", value: function nearestInputPos(t, e) {
        if (!this.thousandsSeparator) return t;
        switch (e) {
          case Xr:
          case Jr:
          case Qr:
            var n = this._findSeparatorAround(t - 1);
            if (n >= 0) {
              var r = n + this.thousandsSeparator.length;
              if (t < r || this.value.length <= r || e === Qr) return n
            }
            break;
          case ti:
          case ei:
            var i = this._findSeparatorAround(t);
            if (i >= 0) return i + this.thousandsSeparator.length
        }
        return t
      }
      /** @override */
    }, {
      key: "doValidate", value: function doValidate(t) {
        var e = (t.input ? this._numberRegExpInput : this._numberRegExp).test(this._removeThousandsSeparators(this.value));// validate as string
        if (e) {
// validate as number
          var n = this.number;
          e = e && !isNaN(n) && (// check min bound for negative values
            null == this.min || this.min >= 0 || this.min <= this.number) && (// check max bound for positive values
            null == this.max || this.max <= 0 || this.number <= this.max)
        }
        return e && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, t)
      }
      /** @override */
    }, {
      key: "doCommit", value: function doCommit() {
        if (this.value) {
          var t = this.number, e = t;// check bounds
          null != this.min && (e = Math.max(e, this.min)), null != this.max && (e = Math.min(e, this.max)), e !== t && (this.unmaskedValue = String(e));
          var n = this.value;
          this.normalizeZeros && (n = this._normalizeZeros(n)), this.padFractionalZeros && this.scale > 0 && (n = this._padFractionalZeros(n)), this._value = n
        }
        _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this)
      }
      /** */
    }, {
      key: "_normalizeZeros", value: function _normalizeZeros(t) {
        var e = this._removeThousandsSeparators(t).split(this.radix);// remove leading zeros
        return e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, (function (t, e, n, r) {
          return e + r
        })),// add leading zero
        t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + "0"), e.length > 1 && (e[1] = e[1].replace(/0*$/, ""),// remove trailing zeros
        e[1].length || (e.length = 1)), this._insertThousandsSeparators(e.join(this.radix))
      }
      /** */
    }, {
      key: "_padFractionalZeros", value: function _padFractionalZeros(t) {
        if (!t) return t;
        var e = t.split(this.radix);
        return e.length < 2 && e.push(""), e[1] = e[1].padEnd(this.scale, "0"), e.join(this.radix)
      }
      /** @override */
    }, {
      key: "unmaskedValue", get: function get() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".")
      }, set: function set(t) {
        _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", t.replace(".", this.radix), this, !0)
      }
      /** @override */
    }, {
      key: "typedValue", get: function get() {
        return Number(this.unmaskedValue)
      }, set: function set(t) {
        _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", String(t), this, !0)
      }
      /** Parsed Number */
    }, {
      key: "number", get: function get() {
        return this.typedValue
      }, set: function set(t) {
        this.typedValue = t
      }
      /** Is negative allowed @readonly */
    }, {
      key: "allowNegative", get: function get() {
        return this.signed || null != this.min && this.min < 0 || null != this.max && this.max < 0
      }
    }]), MaskedNumber
  }(ii);
  Ai.DEFAULTS = {
    radix: ",",
    thousandsSeparator: "",
    mapToRadix: ["."],
    scale: 2,
    signed: !1,
    normalizeZeros: !0,
    padFractionalZeros: !1
  }, IMask.MaskedNumber = Ai;
  /** Masking by custom Function */
  var Ei = function (t) {
    _inherits(MaskedFunction, t);
    var e = _createSuper(MaskedFunction);

    function MaskedFunction() {
      return _classCallCheck(this, MaskedFunction), e.apply(this, arguments)
    }

    return _createClass(MaskedFunction, [{
      key: "_update", value:
        /** @override @param {Object} opts */
        function _update(t) {
          t.mask && (t.validate = t.mask), _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, t)
        }
    }]), MaskedFunction
  }(ii);
  IMask.MaskedFunction = Ei;
  var Mi = ["compiledMasks", "currentMaskRef", "currentMask"], Fi = function (t) {
    _inherits(MaskedDynamic, t);
    var e = _createSuper(MaskedDynamic);
    /** Currently chosen mask */
    /** Compliled {@link Masked} options */

    /** Chooses {@link Masked} depending on input value */
    /** @param {Object} opts */function MaskedDynamic(t) {
      var n;
      return _classCallCheck(this, MaskedDynamic), (n = e.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, t))).currentMask = null, n
    }

    /** @override */
    return _createClass(MaskedDynamic, [{
      key: "_update", value: function _update(t) {
        _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, t), "mask" in t && (
// mask could be totally dynamic with only `dispatch` option
          this.compiledMasks = Array.isArray(t.mask) ? t.mask.map((function (t) {
            return createMask(t)
          })) : [])
      }
      /** @override */
    }, {
      key: "_appendCharRaw", value: function _appendCharRaw(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = this._applyDispatch(t, e);
        return this.currentMask && n.aggregate(this.currentMask._appendChar(t, e)), n
      }
    }, {
      key: "_applyDispatch", value: function _applyDispatch() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.tail && null != e._beforeTailState ? e._beforeTailState._value : this.value, r = this.rawInputValue,
          i = e.tail && null != e._beforeTailState ?// $FlowFixMe - tired to fight with type system
            e._beforeTailState._rawInputValue : r, a = r.slice(i.length), s = this.currentMask, u = new $r,
          o = s && s.state;// restore state after dispatch
        if (// clone flags to prevent overwriting `_beforeTailState`
          this.currentMask = this.doDispatch(t, Object.assign({}, e)), this.currentMask) if (this.currentMask !== s) {
          if (
// if mask changed reapply input
            this.currentMask.reset(), i) {
// $FlowFixMe - it's ok, we don't change current mask above
            var l = this.currentMask.append(i, {raw: !0});
            u.tailShift = l.inserted.length - n.length
          }
          a && (
// $FlowFixMe - it's ok, we don't change current mask above
            u.tailShift += this.currentMask.append(a, {raw: !0, tail: !0}).tailShift)
        } else
// Dispatch can do something bad with state, so
// restore prev mask state
          this.currentMask.state = o;
        return u
      }
    }, {
      key: "_appendPlaceholder", value: function _appendPlaceholder() {
        var t = this._applyDispatch.apply(this, arguments);
        return this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()), t
      }
      /** @override */
    }, {
      key: "_appendEager", value: function _appendEager() {
        var t = this._applyDispatch.apply(this, arguments);
        return this.currentMask && t.aggregate(this.currentMask._appendEager()), t
      }
      /** @override */
    }, {
      key: "doDispatch", value: function doDispatch(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.dispatch(t, this, e)
      }
      /** @override */
    }, {
      key: "doValidate", value: function doValidate() {
        for (var t, e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return (t = _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this)).call.apply(t, [this].concat(r)) && (!this.currentMask || (e = this.currentMask).doValidate.apply(e, r))
      }
      /** @override */
    }, {
      key: "reset", value: function reset() {
        var t;
        null === (t = this.currentMask) || void 0 === t || t.reset(), this.compiledMasks.forEach((function (t) {
          return t.reset()
        }))
      }
      /** @override */
    }, {
      key: "value", get: function get() {
        return this.currentMask ? this.currentMask.value : ""
      }, set: function set(t) {
        _set(_getPrototypeOf(MaskedDynamic.prototype), "value", t, this, !0)
      }
      /** @override */
    }, {
      key: "unmaskedValue", get: function get() {
        return this.currentMask ? this.currentMask.unmaskedValue : ""
      }, set: function set(t) {
        _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", t, this, !0)
      }
      /** @override */
    }, {
      key: "typedValue", get: function get() {
        return this.currentMask ? this.currentMask.typedValue : ""
      }// probably typedValue should not be used with dynamic
      , set: function set(t) {
        var e = String(t);// double check it
        this.currentMask && (this.currentMask.typedValue = t, e = this.currentMask.unmaskedValue), this.unmaskedValue = e
      }
      /** @override */
    }, {
      key: "isComplete", get: function get() {
        var t;
        return Boolean(null === (t = this.currentMask) || void 0 === t ? void 0 : t.isComplete)
      }
      /** @override */
    }, {
      key: "isFilled", get: function get() {
        var t;
        return Boolean(null === (t = this.currentMask) || void 0 === t ? void 0 : t.isFilled)
      }
      /** @override */
    }, {
      key: "remove", value: function remove() {
        var t, e = new $r;
        this.currentMask && e.aggregate((t = this.currentMask).remove.apply(t, arguments)).aggregate(this._applyDispatch());
        return e
      }
      /** @override */
    }, {
      key: "state", get: function get() {
        return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
          _rawInputValue: this.rawInputValue,
          compiledMasks: this.compiledMasks.map((function (t) {
            return t.state
          })),
          currentMaskRef: this.currentMask,
          currentMask: this.currentMask && this.currentMask.state
        })
      }, set: function set(t) {
        var e = t.compiledMasks, n = t.currentMaskRef, r = t.currentMask, i = _objectWithoutProperties(t, Mi);
        this.compiledMasks.forEach((function (t, n) {
          return t.state = e[n]
        })), null != n && (this.currentMask = n, this.currentMask.state = r), _set(_getPrototypeOf(MaskedDynamic.prototype), "state", i, this, !0)
      }
      /** @override */
    }, {
      key: "extractInput", value: function extractInput() {
        var t;
        return this.currentMask ? (t = this.currentMask).extractInput.apply(t, arguments) : ""
      }
      /** @override */
    }, {
      key: "extractTail", value: function extractTail() {
        for (var t, e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return this.currentMask ? (t = this.currentMask).extractTail.apply(t, r) : (e = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(e, [this].concat(r))
      }
      /** @override */
    }, {
      key: "doCommit", value: function doCommit() {
        this.currentMask && this.currentMask.doCommit(), _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this)
      }
      /** @override */
    }, {
      key: "nearestInputPos", value: function nearestInputPos() {
        for (var t, e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return this.currentMask ? (t = this.currentMask).nearestInputPos.apply(t, r) : (e = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(e, [this].concat(r))
      }
    }, {
      key: "overwrite", get: function get() {
        return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this)
      }, set: function set(t) {
        console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings')
      }
    }, {
      key: "eager", get: function get() {
        return this.currentMask ? this.currentMask.eager : _get(_getPrototypeOf(MaskedDynamic.prototype), "eager", this)
      }, set: function set(t) {
        console.warn('"eager" option is not available in dynamic mask, use this option in siblings')
      }
      /** @override */
    }, {
      key: "maskEquals", value: function maskEquals(t) {
        return Array.isArray(t) && this.compiledMasks.every((function (e, n) {
          var r;
          return e.maskEquals(null === (r = t[n]) || void 0 === r ? void 0 : r.mask)
        }))
      }
    }]), MaskedDynamic
  }(ii);
  /** Dynamic mask for choosing apropriate mask in run-time */Fi.DEFAULTS = {
    dispatch: function dispatch(t, e, n) {
      if (e.compiledMasks.length) {
        var r = e.rawInputValue, i = e.compiledMasks.map((function (e, i) {
          return e.reset(), e.append(r, {raw: !0}), e.append(t, n), {weight: e.rawInputValue.length, index: i}
        }));// simulate input
// pop masks with longer values first
        return i.sort((function (t, e) {
          return e.weight - t.weight
        })), e.compiledMasks[i[0].index]
      }
    }
  }, IMask.MaskedDynamic = Fi;
  /** Mask pipe source and destination types */
  var Si = {MASKED: "value", UNMASKED: "unmaskedValue", TYPED: "typedValue"};

  /** Creates new pipe function depending on mask type, source and destination options */function createPipe(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Si.MASKED,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Si.MASKED, r = createMask(t);
    return function (t) {
      return r.runIsolated((function (r) {
        return r[e] = t, r[n]
      }))
    }
  }

  /** Pipes value through mask depending on mask type, source and destination options */function pipe(t) {
    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
    return createPipe.apply(void 0, n)(t)
  }

  IMask.PIPE_TYPE = Si, IMask.createPipe = createPipe, IMask.pipe = pipe;
  try {
    globalThis.IMask = IMask
  } catch (t) {
  }
  t.HTMLContenteditableMaskElement = _i, t.HTMLMaskElement = yi, t.InputMask = bi, t.MaskElement = vi, t.Masked = ii, t.MaskedDate = ki, t.MaskedDynamic = Fi, t.MaskedEnum = Ci, t.MaskedFunction = Ei, t.MaskedNumber = Ai, t.MaskedPattern = di, t.MaskedRange = gi, t.MaskedRegExp = pi, t.PIPE_TYPE = Si, t.createMask = createMask, t.createPipe = createPipe, t.default = IMask, t.pipe = pipe, Object.defineProperty(t, "__esModule", {value: !0})
}));//# sourceMappingURL=imask.js.map


/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function (a) {
  var b = navigator.userAgent;
  a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function () {
    var b, c = document.createElement("source"), d = function (a) {
      var b, d, e = a.parentNode;
      "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), setTimeout(function () {
        e.removeChild(b)
      })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, d = a.sizes, a.sizes += ",100vw", setTimeout(function () {
        a.sizes = d
      }))
    }, e = function () {
      var a, b = document.querySelectorAll("picture > img, img[srcset][sizes]");
      for (a = 0; a < b.length; a++) d(b[a])
    }, f = function () {
      clearTimeout(b), b = setTimeout(e, 99)
    }, g = a.matchMedia && matchMedia("(orientation: landscape)"), h = function () {
      f(), g && g.addListener && g.addListener(f)
    };
    return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), f
  }())
}(window), function (a, b, c) {
  "use strict";

  function d(a) {
    return " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a
  }

  function e(b, c) {
    var d = new a.Image;
    return d.onerror = function () {
      A[b] = !1, ba()
    }, d.onload = function () {
      A[b] = 1 === d.width, ba()
    }, d.src = c, "pending"
  }

  function f() {
    M = !1, P = a.devicePixelRatio, N = {}, O = {}, s.DPR = P || 1, Q.width = Math.max(a.innerWidth || 0, z.clientWidth), Q.height = Math.max(a.innerHeight || 0, z.clientHeight), Q.vw = Q.width / 100, Q.vh = Q.height / 100, r = [Q.height, Q.width, P].join("-"), Q.em = s.getEmValue(), Q.rem = Q.em
  }

  function g(a, b, c, d) {
    var e, f, g, h;
    return "saveData" === B.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c
  }

  function h(a) {
    var b, c = s.getSet(a), d = !1;
    "pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d
  }

  function i(a, b) {
    return a.res - b.res
  }

  function j(a, b, c) {
    var d;
    return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || aa(d, d.set.sizes)), d
  }

  function k(a, b) {
    var c, d, e;
    if (a && b) for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++) if (a === s.makeUrl(e[c].url)) {
      d = e[c];
      break
    }
    return d
  }

  function l(a, b) {
    var c, d, e, f, g = a.getElementsByTagName("source");
    for (c = 0, d = g.length; d > c; c++) e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), f && b.push({
      srcset: f,
      media: e.getAttribute("media"),
      type: e.getAttribute("type"),
      sizes: e.getAttribute("sizes")
    })
  }

  function m(a, b) {
    function c(b) {
      var c, d = b.exec(a.substring(m));
      return d ? (c = d[0], m += c.length, c) : void 0
    }

    function e() {
      var a, c, d, e, f, i, j, k, l, m = !1, o = {};
      for (e = 0; e < h.length; e++) f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), k = parseInt(j, 10), l = parseFloat(j), X.test(j) && "w" === i ? ((a || c) && (m = !0), 0 === k ? m = !0 : a = k) : Y.test(j) && "x" === i ? ((a || c || d) && (m = !0), 0 > l ? m = !0 : c = l) : X.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0;
      m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 1 === o.d && (b.has1x = !0), o.set = b, n.push(o))
    }

    function f() {
      for (c(T), i = "", j = "in descriptor"; ;) {
        if (k = a.charAt(m), "in descriptor" === j) if (d(k)) i && (h.push(i), i = "", j = "after descriptor"); else {
          if ("," === k) return m += 1, i && h.push(i), void e();
          if ("(" === k) i += k, j = "in parens"; else {
            if ("" === k) return i && h.push(i), void e();
            i += k
          }
        } else if ("in parens" === j) if (")" === k) i += k, j = "in descriptor"; else {
          if ("" === k) return h.push(i), void e();
          i += k
        } else if ("after descriptor" === j) if (d(k)) ; else {
          if ("" === k) return void e();
          j = "in descriptor", m -= 1
        }
        m += 1
      }
    }

    for (var g, h, i, j, k, l = a.length, m = 0, n = []; ;) {
      if (c(U), m >= l) return n;
      g = c(V), h = [], "," === g.slice(-1) ? (g = g.replace(W, ""), e()) : f()
    }
  }

  function n(a) {
    function b(a) {
      function b() {
        f && (g.push(f), f = "")
      }

      function c() {
        g[0] && (h.push(g), g = [])
      }

      for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1; ;) {
        if (e = a.charAt(j), "" === e) return b(), c(), h;
        if (k) {
          if ("*" === e && "/" === a[j + 1]) {
            k = !1, j += 2, b();
            continue
          }
          j += 1
        } else {
          if (d(e)) {
            if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
              j += 1;
              continue
            }
            if (0 === i) {
              b(), j += 1;
              continue
            }
            e = " "
          } else if ("(" === e) i += 1; else if (")" === e) i -= 1; else {
            if ("," === e) {
              b(), c(), j += 1;
              continue
            }
            if ("/" === e && "*" === a.charAt(j + 1)) {
              k = !0, j += 2;
              continue
            }
          }
          f += e, j += 1
        }
      }
    }

    function c(a) {
      return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1
    }

    var e, f, g, h, i, j,
      k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
      l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
    for (f = b(a), g = f.length, e = 0; g > e; e++) if (h = f[e], i = h[h.length - 1], c(i)) {
      if (j = i, h.pop(), 0 === h.length) return j;
      if (h = h.join(" "), s.matchesMedia(h)) return j
    }
    return "100vw"
  }

  b.createElement("picture");
  var o, p, q, r, s = {}, t = !1, u = function () {
    }, v = b.createElement("img"), w = v.getAttribute, x = v.setAttribute, y = v.removeAttribute, z = b.documentElement,
    A = {}, B = {algorithm: ""}, C = "data-pfsrc", D = C + "set", E = navigator.userAgent,
    F = /rident/.test(E) || /ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35, G = "currentSrc",
    H = /\s+\+?\d+(e\d+)?w/, I = /(\([^)]+\))?\s*(.+)/, J = a.picturefillCFG,
    K = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
    L = "font-size:100%!important;", M = !0, N = {}, O = {}, P = a.devicePixelRatio, Q = {px: 1, "in": 96},
    R = b.createElement("a"), S = !1, T = /^[ \t\n\r\u000c]+/, U = /^[, \t\n\r\u000c]+/, V = /^[^ \t\n\r\u000c]+/,
    W = /[,]+$/, X = /^\d+$/, Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, Z = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
    }, $ = function (a) {
      var b = {};
      return function (c) {
        return c in b || (b[c] = a(c)), b[c]
      }
    }, _ = function () {
      var a = /^([\d\.]+)(em|vw|px)$/, b = function () {
        for (var a = arguments, b = 0, c = a[0]; ++b in a;) c = c.replace(a[b], a[++b]);
        return c
      }, c = $(function (a) {
        return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
      });
      return function (b, d) {
        var e;
        if (!(b in N)) if (N[b] = !1, d && (e = b.match(a))) N[b] = e[1] * Q[e[2]]; else try {
          N[b] = new Function("e", c(b))(Q)
        } catch (f) {
        }
        return N[b]
      }
    }(), aa = function (a, b) {
      return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, a
    }, ba = function (a) {
      if (t) {
        var c, d, e, f = a || {};
        if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements, f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), e = c.length) {
          for (s.setupRun(f), S = !0, d = 0; e > d; d++) s.fillImg(c[d], f);
          s.teardownRun(f)
        }
      }
    };
  o = a.console && console.warn ? function (a) {
    console.warn(a)
  } : u, G in v || (G = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + (new Date).getTime()).substr(0, 9), s.supSrcset = "srcset" in v, s.supSizes = "sizes" in v, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && !function (a) {
    v.srcset = "data:,a", a.src = "data:,a", s.supSrcset = v.complete === a.complete, s.supPicture = s.supSrcset && s.supPicture
  }(b.createElement("img")), s.supSrcset && !s.supSizes ? !function () {
    var a = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
      c = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", d = b.createElement("img"),
      e = function () {
        var a = d.width;
        2 === a && (s.supSizes = !0), q = s.supSrcset && !s.supSizes, t = !0, setTimeout(ba)
      };
    d.onload = e, d.onerror = e, d.setAttribute("sizes", "9px"), d.srcset = c + " 1w," + a + " 9w", d.src = c
  }() : t = !0, s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = B, s.DPR = P || 1, s.u = Q, s.types = A, s.setSize = u, s.makeUrl = $(function (a) {
    return R.href = a, R.href
  }), s.qsa = function (a, b) {
    return "querySelector" in a ? a.querySelectorAll(b) : []
  }, s.matchesMedia = function () {
    return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function (a) {
      return !a || matchMedia(a).matches
    } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments)
  }, s.mMQ = function (a) {
    return a ? _(a) : !0
  }, s.calcLength = function (a) {
    var b = _(a, !0) || !1;
    return 0 > b && (b = !1), b
  }, s.supportsType = function (a) {
    return a ? A[a] : !0
  }, s.parseSize = $(function (a) {
    var b = (a || "").match(I);
    return {media: b && b[1], length: b && b[2]}
  }), s.parseSet = function (a) {
    return a.cands || (a.cands = m(a.srcset, a)), a.cands
  }, s.getEmValue = function () {
    var a;
    if (!p && (a = b.body)) {
      var c = b.createElement("div"), d = z.style.cssText, e = a.style.cssText;
      c.style.cssText = K, z.style.cssText = L, a.style.cssText = L, a.appendChild(c), p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), z.style.cssText = d, a.style.cssText = e
    }
    return p || 16
  }, s.calcListLength = function (a) {
    if (!(a in O) || B.uT) {
      var b = s.calcLength(n(a));
      O[a] = b ? b : Q.width
    }
    return O[a]
  }, s.setRes = function (a) {
    var b;
    if (a) {
      b = s.parseSet(a);
      for (var c = 0, d = b.length; d > c; c++) aa(b[c], a.sizes)
    }
    return b
  }, s.setRes.res = aa, s.applySetCandidate = function (a, b) {
    if (a.length) {
      var c, d, e, f, h, k, l, m, n, o = b[s.ns], p = s.DPR;
      if (k = o.curSrc || b[G], l = o.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (n = F && !b.complete && l.res - .1 > p, n || (l.cached = !0, l.res >= p && (h = l))), !h) for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++) if (c = a[d], c.res >= p) {
        e = d - 1, h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;
        break
      }
      h && (m = s.makeUrl(h.url), o.curSrc = m, o.curCan = h, m !== k && s.setSrc(b, h), s.setSize(b))
    }
  }, s.setSrc = function (a, b) {
    var c;
    a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", a.offsetWidth + 1 && (a.style.width = c))
  }, s.getSet = function (a) {
    var b, c, d, e = !1, f = a[s.ns].sets;
    for (b = 0; b < f.length && !e; b++) if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
      "pending" === d && (c = d), e = c;
      break
    }
    return e
  }, s.parseSets = function (a, b, d) {
    var e, f, g, h, i = b && "PICTURE" === b.nodeName.toUpperCase(), j = a[s.ns];
    (j.src === c || d.src) && (j.src = w.call(a, "src"), j.src ? x.call(a, C, j.src) : y.call(a, C)), (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = w.call(a, "srcset"), j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = {
      srcset: j.srcset,
      sizes: w.call(a, "sizes")
    }, j.sets.push(f), g = (q || j.src) && H.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, f.cands.push({
      url: j.src,
      d: 1,
      set: f
    }))) : j.src && j.sets.push({
      srcset: j.src,
      sizes: null
    }), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g && !s.supSizes), h && s.supSrcset && !j.supported && (e ? (x.call(a, D, e), a.srcset = "") : y.call(a, D)), j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), j.parsed = !0
  }, s.fillImg = function (a, b) {
    var c, d = b.reselect || b.reevaluate;
    a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), c.supported ? c.evaled = r : h(a))
  }, s.setupRun = function () {
    (!S || M || P !== a.devicePixelRatio) && f()
  }, s.supPicture ? (ba = u, s.fillImg = u) : !function () {
    var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/, e = function () {
      var a = b.readyState || "";
      f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), c && clearTimeout(f))
    }, f = setTimeout(e, b.body ? 9 : 99), g = function (a, b) {
      var c, d, e = function () {
        var f = new Date - d;
        b > f ? c = setTimeout(e, b - f) : (c = null, a())
      };
      return function () {
        d = new Date, c || (c = setTimeout(e, b))
      }
    }, h = z.clientHeight, i = function () {
      M = Math.max(a.innerWidth || 0, z.clientWidth) !== Q.width || z.clientHeight !== h, h = z.clientHeight, M && s.fillImgs()
    };
    Z(a, "resize", g(i, 99)), Z(b, "readystatechange", e)
  }(), s.picturefill = ba, s.fillImgs = ba, s.teardownRun = u, ba._ = s, a.picturefillCFG = {
    pf: s, push: function (a) {
      var b = a.shift();
      "function" == typeof s[b] ? s[b].apply(s, a) : (B[b] = a[0], S && s.fillImgs({reselect: !0}))
    }
  };
  for (; J && J.length;) a.picturefillCFG.push(J.shift());
  a.picturefill = ba, "object" == typeof module && "object" == typeof module.exports ? module.exports = ba : "function" == typeof define && define.amd && define("picturefill", function () {
    return ba
  }), s.supPicture || (A["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window, document);
// ! jQuery v3.5.0 | (c) JS Foundation and other contributors | jquery.org/license
!function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function (e) {
      return t.flat.call(e)
    } : function (e) {
      return t.concat.apply([], e)
    }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object),
    y = {}, m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType
    }, x = function (e) {
      return null != e && e === e.window
    }, E = C.document, c = {type: !0, src: !0, nonce: !0, noModule: !0};

  function b(e, t, n) {
    var r, i, o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o)
  }

  function w(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
  }

  var f = "3.5.0", S = function (e, t) {
    return new S.fn.init(e, t)
  };

  function p(e) {
    var t = !!e && "length" in e && e.length, n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }

  S.fn = S.prototype = {
    jquery: f, constructor: S, length: 0, toArray: function () {
      return s.call(this)
    }, get: function (e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
    }, pushStack: function (e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t
    }, each: function (e) {
      return S.each(this, e)
    }, map: function (n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e)
      }))
    }, slice: function () {
      return this.pushStack(s.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, even: function () {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2
      }))
    }, odd: function () {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2
      }))
    }, eq: function (e) {
      var t = this.length, n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : [])
    }, end: function () {
      return this.prevObject || this.constructor()
    }, push: u, sort: t.sort, splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
      throw new Error(e)
    }, noop: function () {
    }, isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
    }, isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    }, globalEval: function (e, t, n) {
      b(e, {nonce: t && t.nonce}, n)
    }, each: function (e, t) {
      var n, r = 0;
      if (p(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e
    }, makeArray: function (e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
    }, inArray: function (e, t, n) {
      return null == t ? -1 : i.call(t, e, n)
    }, merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e
    }, grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r
    }, map: function (e, t, n) {
      var r, i, o = 0, a = [];
      if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a)
    }, guid: 1, support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase()
  });
  var d = function (n) {
    var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0,
      r = 0, m = ue(), x = ue(), A = ue(), N = ue(), D = function (e, t) {
        return e === t && (l = !0), 0
      }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1
      },
      R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
      F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
      }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
      }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      }, oe = function () {
        T()
      }, ae = be(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
      }, {dir: "parentNode", next: "legend"});
    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t))
        } : function (e, t) {
          var n = e.length, r = 0;
          while (e[n++] = t[r++]) ;
          e.length = n - 1
        }
      }
    }

    function se(t, e, n, r) {
      var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
        }
        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",")
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n
          } catch (e) {
            N(t, !0)
          } finally {
            s === S && e.removeAttribute("id")
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r)
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
      }
    }

    function le(e) {
      return e[S] = !0, e
    }

    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function fe(e, t) {
      var n = e.split("|"), r = n.length;
      while (r--) b.attrHandle[n[r]] = t
    }

    function pe(e, t) {
      var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) if (n === t) return -1;
      return e ? 1 : -1
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t
      }
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n
      }
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
      }
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n, r = a([], e.length, o), i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
        })
      })
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML")
    }, T = se.setDocument = function (e) {
      var t, n, r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className")
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t
        }
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : []
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n
        }
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n, r, i, o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;
            while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
          }
          return []
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
      } : function (e, t) {
        var n, r = [], i = 0, o = t.getElementsByTagName(e);
        if ("*" === e) {
          while (n = o[i++]) 1 === n.nodeType && r.push(n);
          return r
        }
        return o
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      } : function (e, t) {
        if (t) while (t = t.parentNode) if (t === e) return !0;
        return !1
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;
        while (n = n.parentNode) a.unshift(n);
        n = t;
        while (n = n.parentNode) s.unshift(n);
        while (a[r] === s[r]) r++;
        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
      }), C
    }, se.matches = function (e, t) {
      return se(e, null, null, t)
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
      } catch (e) {
        N(t, !0)
      }
      return 0 < se(t, C, null, [e]).length
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t)
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()], r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }, se.escape = function (e) {
      return (e + "").replace(re, ie)
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, se.uniqueSort = function (e) {
      var t, n = [], r = 0, i = 0;
      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1)
      }
      return u = null, e
    }, o = se.getText = function (e) {
      var t, n = "", r = 0, i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
        } else if (3 === i || 4 === i) return e.nodeValue
      } else while (t = e[r++]) n += o(t);
      return n
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
        }, PSEUDO: function (e) {
          var t, n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        }, CLASS: function (e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
          })
        }, ATTR: function (n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
          }
        }, CHILD: function (h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode
          } : function (e, t, n) {
            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode,
              f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
            if (c) {
              if (y) {
                while (l) {
                  a = e;
                  while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  u = l = "only" === h && !u && "nextSibling"
                }
                return !0
              }
              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                  i[h] = [k, s, d];
                  break
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              return (d -= v) === g || d % g == 0 && 0 <= d / g
            }
          }
        }, PSEUDO: function (e, o) {
          var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n, r = a(e, o), i = r.length;
            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
          }) : function (e) {
            return a(e, 0, t)
          }) : a
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [], i = [], s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i, o = s(e, null, r, []), a = e.length;
            while (a--) (i = o[a]) && (e[a] = !(t[a] = i))
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
          }
        }), has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length
          }
        }), contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t)
          }
        }), lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;
            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1
          }
        }), target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id
        }, root: function (e) {
          return e === a
        }, focus: function (e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0
        }, parent: function (e) {
          return !b.pseudos.empty(e)
        }, header: function (e) {
          return J.test(e.nodeName)
        }, input: function (e) {
          return Q.test(e.nodeName)
        }, button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        }, text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        }, first: ve(function () {
          return [0]
        }), last: ve(function (e, t) {
          return [t - 1]
        }), eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n]
        }), even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }), odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }), lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
          return e
        }), gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e
        })
      }
    }).pseudos.nth = b.pseudos.eq, {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) b.pseudos[e] = de(e);
    for (e in {submit: !0, reset: !0}) b.pseudos[e] = he(e);

    function me() {
    }

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r
    }

    function be(s, e, t) {
      var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
        return !1
      } : function (e, t, n) {
        var r, i, o, a = [k, p];
        if (n) {
          while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0
        } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
          if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
          if ((i[c] = a)[2] = s(e, t, n)) return !0
        }
        return !1
      }
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--) if (!i[r](e, t, n)) return !1;
        return !0
      } : i[0]
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
            return n
          }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r),
          p = g ? y || (e ? d : l || v) ? [] : t : f;
        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;
          while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;
              while (o--) (a = p[o]) && i.push(f[o] = a);
              y(null, p = [], i, r)
            }
            o = p.length;
            while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
      })
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e)
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r
      }]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else {
        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
          for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
          return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
        }
        c.push(t)
      }
      return we(c)
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
      var n, r, i, o, a, s, u, l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break
      }
      return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
    }, f = se.compile = function (e, t) {
      var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
      if (!a) {
        t || (t = h(e)), n = t.length;
        while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
          var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i),
            h = k += null == p ? 1 : Math.random() || .1, g = d.length;
          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);
              while (s = v[a++]) if (s(o, t || C, n)) {
                r.push(o);
                break
              }
              i && (k = h)
            }
            m && ((o = !s && o) && u--, e && c.push(o))
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) s(c, f, t, n);
            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
              f = Te(f)
            }
            H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
          }
          return i && (k = h, w = p), c
        }, m ? le(r) : r))).selector = e
      }
      return a
    }, g = se.select = function (e, t, n, r) {
      var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        i = G.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break
          }
        }
      }
      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
    }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), ce(function (e) {
      return null == e.getAttribute("disabled")
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), se
  }(C);
  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
  var h = function (e, t, n) {
    var r = [], i = void 0 !== n;
    while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
      if (i && S(e).is(n)) break;
      r.push(e)
    }
    return r
  }, T = function (e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n
  }, k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function D(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r
    }) : S.filter(n, e, r)
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, S.fn.extend({
    find: function (e) {
      var t, n, r = this.length, i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
      return 1 < r ? S.uniqueSort(n) : n
    }, filter: function (e) {
      return this.pushStack(D(this, e || [], !1))
    }, not: function (e) {
      return this.pushStack(D(this, e || [], !0))
    }, is: function (e) {
      return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
    }
  });
  var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || j, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this
      }
      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
  }).prototype = S.fn, j = S(E);
  var L = /^(?:parents|prev(?:Until|All))/, H = {children: !0, contents: !0, next: !0, prev: !0};

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) ;
    return e
  }

  S.fn.extend({
    has: function (e) {
      var t = S(e, this), n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0
      })
    }, closest: function (e, t) {
      var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
        o.push(n);
        break
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
    }, index: function (e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), S.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
      return h(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
      return h(e, "parentNode", n)
    }, next: function (e) {
      return O(e, "nextSibling")
    }, prev: function (e) {
      return O(e, "previousSibling")
    }, nextAll: function (e) {
      return h(e, "nextSibling")
    }, prevAll: function (e) {
      return h(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
      return h(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
      return h(e, "previousSibling", n)
    }, siblings: function (e) {
      return T((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
      return T(e.firstChild)
    }, contents: function (e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
    }
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e
  }

  function M(e) {
    throw e
  }

  function I(e, t, n, r) {
    var i;
    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0
    }), n) : S.extend({}, r);
    var i, t, o, a, s = [], u = [], l = -1, c = function () {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();
        while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
      }
      r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
    }, f = {
      add: function () {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
          })
        }(arguments), t && !i && c()), this
      }, remove: function () {
        return S.each(arguments, function (e, t) {
          var n;
          while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
        }), this
      }, has: function (e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length
      }, empty: function () {
        return s && (s = []), this
      }, disable: function () {
        return a = u = [], s = t = "", this
      }, disabled: function () {
        return !s
      }, lock: function () {
        return a = u = [], t || i || (s = t = ""), this
      }, locked: function () {
        return !!a
      }, fireWith: function (e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
      }, fire: function () {
        return f.fireWith(this, arguments), this
      }, fired: function () {
        return !!o
      }
    };
    return f
  }, S.extend({
    Deferred: function (e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
        i = "pending", a = {
          state: function () {
            return i
          }, always: function () {
            return s.done(arguments).fail(arguments), this
          }, "catch": function (e) {
            return a.then(null, e)
          }, pipe: function () {
            var i = arguments;
            return S.Deferred(function (r) {
              S.each(o, function (e, t) {
                var n = m(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                })
              }), i = null
            }).promise()
          }, then: function (t, n, r) {
            var u = 0;

            function l(i, o, a, s) {
              return function () {
                var n = this, r = arguments, e = function () {
                  var e, t;
                  if (!(i < u)) {
                    if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                    t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                  }
                }, t = s ? e : function () {
                  try {
                    e()
                  } catch (e) {
                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                  }
                };
                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
              }
            }

            return S.Deferred(function (e) {
              o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
            }).promise()
          }, promise: function (e) {
            return null != e ? S.extend(e, a) : a
          }
        }, s = {};
      return S.each(o, function (e, t) {
        var n = t[2], r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
        }, s[t[0] + "With"] = n.fireWith
      }), a.promise(s), e && e.call(s, s), s
    }, when: function (e) {
      var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = S.Deferred(), a = function (t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
        }
      };
      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
      while (t--) I(i[t], a(t), o.reject);
      return o.promise()
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e
    })
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e)
    }), this
  }, S.extend({
    isReady: !1, readyWait: 1, ready: function (e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
    var s = 0, u = e.length, l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
      return l.call(S(e), n)
    })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
  }, _ = /^-ms-/, z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase()
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U)
  }

  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function G() {
    this.expando = S.expando + G.uid++
  }

  G.uid = 1, G.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = Object.create(null), V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    }, set: function (e, t, n) {
      var r, i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n; else for (r in t) i[X(r)] = t[r];
      return i
    }, get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
    }, access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    }, remove: function (e, t) {
      var n, r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
          while (n--) delete r[t[n]]
        }
        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    }, hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t)
    }
  };
  var Y = new G, Q = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
      } catch (e) {
      }
      Q.set(e, t, n)
    } else n = void 0;
    return n
  }

  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e)
    }, data: function (e, t, n) {
      return Q.access(e, t, n)
    }, removeData: function (e, t) {
      Q.remove(e, t)
    }, _data: function (e, t, n) {
      return Y.access(e, t, n)
    }, _removeData: function (e, t) {
      Y.remove(e, t)
    }
  }), S.fn.extend({
    data: function (n, e) {
      var t, r, i, o = this[0], a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          Y.set(o, "hasDataAttrs", !0)
        }
        return i
      }
      return "object" == typeof n ? this.each(function () {
        Q.set(this, n)
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e)
        })
      }, null, e, 1 < arguments.length, null, !0)
    }, removeData: function (e) {
      return this.each(function () {
        Q.remove(this, e)
      })
    }
  }), S.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
    }, dequeue: function (e, t) {
      t = t || "fx";
      var n = S.queue(e, t), r = n.length, i = n.shift(), o = S._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t)
      }, o)), !r && o && o.empty.fire()
    }, _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n])
        })
      })
    }
  }), S.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
      })
    }, dequeue: function (e) {
      return this.each(function () {
        S.dequeue(this, e)
      })
    }, clearQueue: function (e) {
      return this.queue(e || "fx", [])
    }, promise: function (e, t) {
      var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function () {
        --r || i.resolveWith(o, [o])
      };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t)
    }
  });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"], re = E.documentElement, ie = function (e) {
      return S.contains(e.ownerDocument, e)
    }, oe = {composed: !0};
  re.getRootNode && (ie = function (e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
  });
  var ae = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
  };

  function se(e, t, n, r) {
    var i, o, a = 20, s = r ? function () {
        return r.cur()
      } : function () {
        return S.css(e, t, "")
      }, u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, S.style(e, t, c + l), n = n || []
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e
  }

  S.fn.extend({
    show: function () {
      return le(this, !0)
    }, hide: function () {
      return le(this)
    }, toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide()
      })
    }
  });
  var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
    } else p.push(t.createTextNode(o));
    f.textContent = "", d = 0;
    while (o = p[d++]) if (r && -1 < S.inArray(o, r)) i && i.push(o); else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
      c = 0;
      while (o = a[c++]) he.test(o.type || "") && n.push(o)
    }
    return f
  }

  var be = /^key/, we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Te = /^([^.]*)(?:\.(.+)|)/;

  function Ce() {
    return !0
  }

  function Ee() {
    return !1
  }

  function Se(e, t) {
    return e === function () {
      try {
        return E.activeElement
      } catch (e) {
      }
    }() == ("focus" === t)
  }

  function ke(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
      return e
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee; else if (!i) return e;
    return 1 === o && (a = i, (i = function (e) {
      return S().off(e), a.apply(this, arguments)
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n)
    })
  }

  function Ae(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1, handler: function (e) {
        var t, n, r = Y.get(this, i);
        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
        } else r.length && (Y.set(this, i, {value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)}), e.stopImmediatePropagation())
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
  }

  S.event = {
    global: {}, add: function (t, e, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
        }), l = (e = (e || "").match(P) || [""]).length;
        while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && S.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
      }
    }, remove: function (e, t, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--) if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
          f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
          while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
        } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events")
      }
    }, dispatch: function (e) {
      var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result
      }
    }, handlers: function (e, t) {
      var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
        o.length && s.push({elem: l, handlers: o})
      }
      return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
    }, addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0, configurable: !0, get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent)
        } : function () {
          if (this.originalEvent) return this.originalEvent[t]
        }, set: function (e) {
          Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
        }
      })
    }, fix: function (e) {
      return e[S.expando] ? e : new S.Event(e)
    }, special: {
      load: {noBubble: !0}, click: {
        setup: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1
        }, trigger: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
        }, _default: function (e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
        }
      }, beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Ee,
    isPropagationStopped: Ee,
    isImmediatePropagationStopped: Ee,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, S.each({
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
    "char": !0,
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
    which: function (e) {
      var t = e.button;
      return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, S.event.addProp), S.each({focus: "focusin", blur: "focusout"}, function (e, t) {
    S.event.special[e] = {
      setup: function () {
        return Ae(this, e, Se), !1
      }, trigger: function () {
        return Ae(this, e), !0
      }, delegateType: t
    }
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i, bindType: i, handle: function (e) {
        var t, n = e.relatedTarget, r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
      }
    }
  }), S.fn.extend({
    on: function (e, t, n, r) {
      return ke(this, e, t, n, r)
    }, one: function (e, t, n, r) {
      return ke(this, e, t, n, r, 1)
    }, off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
        S.event.remove(this, e, n, t)
      })
    }
  });
  var Ne = /<script|<style|<link/i, De = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function qe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
  }

  function Le(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function He(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function Oe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
    }
  }

  function Pe(n, r, i, o) {
    r = g(r);
    var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
    });
    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {nonce: u.nonce || u.getAttribute("nonce")}, l) : b(u.textContent.replace(je, ""), u, l))
    }
    return n
  }

  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e
  }

  S.extend({
    htmlPrefilter: function (e) {
      return e
    }, clone: function (e, t, n) {
      var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]); else Oe(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
    }, cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
        if (t = n[Y.expando]) {
          if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
          n[Y.expando] = void 0
        }
        n[Q.expando] && (n[Q.expando] = void 0)
      }
    }
  }), S.fn.extend({
    detach: function (e) {
      return Re(this, e, !0)
    }, remove: function (e) {
      return Re(this, e)
    }, text: function (e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    }, append: function () {
      return Pe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
      })
    }, prepend: function () {
      return Pe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = qe(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    }, before: function () {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    }, after: function () {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    }, empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      return this
    }, clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t)
      })
    }, html: function (e) {
      return $(this, function (e) {
        var t = this[0] || {}, n = 0, r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {
          }
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    }, replaceWith: function () {
      var n = [];
      return Pe(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
      }, n)
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      return this.pushStack(n)
    }
  });
  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Ie = function (e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e)
  }, We = function (e, t, n) {
    var r, i, o = {};
    for (i in t) o[i] = e.style[i], e.style[i] = t[i];
    for (i in r = n.call(e), t) e.style[i] = o[i];
    return r
  }, Fe = new RegExp(ne.join("|"), "i");

  function Be(e, t, n) {
    var r, i, o, a, s = e.style;
    return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
  }

  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
      }
    }

    function t(e) {
      return Math.round(parseFloat(e))
    }

    var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function () {
        return e(), r
      }, pixelBoxStyles: function () {
        return e(), o
      }, pixelPosition: function () {
        return e(), n
      }, reliableMarginLeft: function () {
        return e(), s
      }, scrollboxSize: function () {
        return e(), i
      }, reliableTrDimensions: function () {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a
      }
    }))
  }();
  var _e = ["Webkit", "Moz", "ms"], ze = E.createElement("div").style, Ue = {};

  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return t || (e in ze ? e : Ue[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1), n = _e.length;
      while (n--) if ((e = _e[n] + t) in ze) return e
    }(e) || e)
  }

  var Ve = /^(none|table(?!-c[ea]).+)/, Ge = /^--/, Ye = {position: "absolute", visibility: "hidden", display: "block"},
    Qe = {letterSpacing: "0", fontWeight: "400"};

  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }

  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0, s = 0, u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
  }

  function Ze(e, t, n) {
    var r = Ie(e), i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r), o = i,
      a = Be(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Me.test(a)) {
      if (!n) return a;
      a = "auto"
    }
    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
  }

  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i)
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n
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
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, s = X(t), u = Ge.test(t), l = e.style;
        if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
      }
    },
    css: function (e, t, n, r) {
      var i, o, a, s = X(t);
      return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function (e, t, n) {
        if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
          return Ze(e, u, n)
        })
      }, set: function (e, t, n) {
        var r, i = Ie(e), o = !y.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Ke(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
      }
    }
  }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {marginLeft: 0}, function () {
      return e.getBoundingClientRect().left
    })) + "px"
  }), S.each({margin: "", padding: "", border: "Width"}, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function (e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        return n
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Je)
  }), S.fn.extend({
    css: function (e, t) {
      return $(this, function (e, t, n) {
        var r, i, o = {}, a = 0;
        if (Array.isArray(t)) {
          for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
          return o
        }
        return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
      }, e, t, 1 < arguments.length)
    }
  }), ((S.Tween = et).prototype = {
    constructor: et, init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
    }, cur: function () {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this)
    }, run: function (e) {
      var t, n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
    }
  }).init.prototype = et.prototype, (et.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
      }, set: function (e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }).scrollTop = et.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, S.easing = {
    linear: function (e) {
      return e
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }, _default: "swing"
  }, S.fx = et.prototype.init, S.fx.step = {};
  var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;

  function st() {
    nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick())
  }

  function ut() {
    return C.setTimeout(function () {
      tt = void 0
    }), tt = Date.now()
  }

  function lt(e, t) {
    var n, r = 0, i = {height: e};
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
  }

  function ft(o, e, t) {
    var n, a, r = 0, i = ft.prefilters.length, s = S.Deferred().always(function () {
      delete u.elem
    }), u = function () {
      if (a) return !1;
      for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
    }, l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {specialEasing: {}, easing: S.easing._default}, t),
      originalProperties: e,
      originalOptions: t,
      startTime: tt || ut(),
      duration: t.duration,
      tweens: [],
      createTween: function (e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n
      },
      stop: function (e) {
        var t = 0, n = e ? l.tweens.length : 0;
        if (a) return this;
        for (a = !0; t < n; t++) l.tweens[t].run(1);
        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
      }
    }), c = l.props;
    for (!function (e, t) {
      var n, r, i, o, a;
      for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
    }(c, l.opts.specialEasing); r < i; r++) if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l
  }

  S.Animation = S.extend(ft, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n
      }]
    }, tweener: function (e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
    }, prefilters: [function (e, t, n) {
      var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
        g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s()
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
        })
      })), t) if (i = t[r], ot.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0
        }
        d[r] = v && v[r] || S.style(e, r)
      }
      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
      })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {display: l}), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
        for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
      })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
    }], prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
    }, r
  }, S.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
    }, animate: function (t, e, n, r) {
      var i = S.isEmptyObject(t), o = S.speed(e, n, r), a = function () {
        var e = ft(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0)
      };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
    }, stop: function (i, e, o) {
      var a = function (e) {
        var t = e.stop;
        delete e.stop, t(o)
      };
      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0, t = null != i && i + "queueHooks", n = S.timers, r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || S.dequeue(this, i)
      })
    }, finish: function (a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish
      })
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];
    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
    }
  }), S.each({
    slideDown: lt("show"),
    slideUp: lt("hide"),
    slideToggle: lt("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n)
    }
  }), S.timers = [], S.fx.tick = function () {
    var e, t = 0, n = S.timers;
    for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || S.fx.stop(), tt = void 0
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start()
  }, S.fx.interval = 13, S.fx.start = function () {
    nt || (nt = !0, st())
  }, S.fx.stop = function () {
    nt = null
  }, S.fx.speeds = {slow: 600, fast: 200, _default: 400}, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);
      t.stop = function () {
        C.clearTimeout(n)
      }
    })
  }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
  var pt, dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length)
    }, removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e)
      })
    }
  }), S.extend({
    attr: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
    }, attrHooks: {
      type: {
        set: function (e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }, removeAttr: function (e, t) {
      var n, r = 0, i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
    }
  }), pt = {
    set: function (e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = dt[t] || S.find.attr;
    dt[t] = function (e, t, n) {
      var r, i, o = t.toLowerCase();
      return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
    }
  });
  var ht = /^(?:input|select|textarea|button)$/i, gt = /^(?:a|area)$/i;

  function vt(e) {
    return (e.match(P) || []).join(" ")
  }

  function yt(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
  }

  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length)
    }, removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e]
      })
    }
  }), S.extend({
    prop: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
    }, propHooks: {
      tabIndex: {
        get: function (e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }, propFix: {"for": "htmlFor", "class": "className"}
  }), y.optSelected || (S.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    }, set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this
  }), S.fn.extend({
    addClass: function (t) {
      var e, n, r, i, o, a, s, u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, yt(this)))
      });
      if ((e = mt(t)).length) while (n = this[u++]) if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
        a = 0;
        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
        i !== (s = vt(r)) && n.setAttribute("class", s)
      }
      return this
    }, removeClass: function (t) {
      var e, n, r, i, o, a, s, u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, yt(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = mt(t)).length) while (n = this[u++]) if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
        a = 0;
        while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
        i !== (s = vt(r)) && n.setAttribute("class", s)
      }
      return this
    }, toggleClass: function (i, t) {
      var o = typeof i, a = "string" === o || Array.isArray(i);
      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, yt(this), t), t)
      }) : this.each(function () {
        var e, t, n, r;
        if (a) {
          t = 0, n = S(this), r = mt(i);
          while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
        } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
      })
    }, hasClass: function (e) {
      var t, n, r = 0;
      t = " " + e + " ";
      while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
      return !1
    }
  });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r, e, i, t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + ""
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : vt(S.text(e))
        }
      }, select: {
        get: function (e) {
          var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
            if (t = S(n).val(), a) return t;
            s.push(t)
          }
          return s
        }, set: function (e, t) {
          var n, r, i = e.options, o = S.makeArray(t), a = i.length;
          while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), y.focusin = "onfocusin" in C;
  var bt = /^(?:focusinfocus|focusoutblur)$/, wt = function (e) {
    e.stopPropagation()
  };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
      }
    }, simulate: function (e, t, n) {
      var r = S.extend(new S.Event, n, {type: e, isSimulated: !0});
      S.event.trigger(r, null, t)
    }
  }), S.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this)
      })
    }, triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0)
    }
  }), y.focusin || S.each({focus: "focusin", blur: "focusout"}, function (n, r) {
    var i = function (e) {
      S.event.simulate(r, e.target, S.event.fix(e))
    };
    S.event.special[r] = {
      setup: function () {
        var e = this.ownerDocument || this.document || this, t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
      }, teardown: function () {
        var e = this.ownerDocument || this.document || this, t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
      }
    }
  });
  var Tt = C.location, Ct = {guid: Date.now()}, Et = /\?/;
  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = (new C.DOMParser).parseFromString(e, "text/xml")
    } catch (e) {
      t = void 0
    }
    return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
  };
  var St = /\[\]$/, kt = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;

  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
    }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
  }

  S.param = function (e, t) {
    var n, r = [], i = function (e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
    };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value)
    }); else for (n in e) Dt(n, e[n], t, i);
    return r.join("&")
  }, S.fn.extend({
    serialize: function () {
      return S.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {name: t.name, value: e.replace(kt, "\r\n")}
        }) : {name: t.name, value: n.replace(kt, "\r\n")}
      }).get()
    }
  });
  var jt = /%20/g, qt = /#.*$/, Lt = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//, Rt = {}, Mt = {}, It = "*/".concat("*"), Wt = E.createElement("a");

  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n, r = 0, i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
    }
  }

  function Bt(t, i, o, a) {
    var s = {}, u = t === Mt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
      }), r
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*")
  }

  function $t(e, t) {
    var n, r, i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e
  }

  Wt.href = Tt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Tt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": It,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (e, t) {
      return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
    },
    ajaxPrefilter: Ft(Rt),
    ajaxTransport: Ft(Mt),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v,
        m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"),
        w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
          readyState: 0, getResponseHeader: function (e) {
            var t;
            if (h) {
              if (!n) {
                n = {};
                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
              }
              t = n[e.toLowerCase() + " "]
            }
            return null == t ? null : t.join(", ")
          }, getAllResponseHeaders: function () {
            return h ? p : null
          }, setRequestHeader: function (e, t) {
            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
          }, overrideMimeType: function (e) {
            return null == h && (v.mimeType = e), this
          }, statusCode: function (e) {
            var t;
            if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]];
            return this
          }, abort: function (e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this
          }
        };
      if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");
        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
        } catch (e) {
          v.crossDomain = !0
        }
      }
      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;
      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout")
        }, v.timeout));
        try {
          h = !1, c.send(a, l)
        } catch (e) {
          if (h) throw e;
          l(-1, e)
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i, o, a, s, u, l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r, i, o, a, s = e.contents, u = e.dataTypes;
          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break
          }
          if (u[0] in n) o = u[0]; else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break
              }
              a || (a = i)
            }
            o = o || a
          }
          if (o) return o !== u[0] && u.unshift(o), n[o]
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {
        }), s = function (e, t, n, r) {
          var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
              !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
              break
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
              t = a(t)
            } catch (e) {
              return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
            }
          }
          return {state: "success", data: t}
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
      }

      return T
    },
    getJSON: function (e, t, n) {
      return S.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return S.get(e, void 0, t, "script")
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e))
    }
  }), S.ajaxPrefilter(function (e) {
    var t;
    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function () {
        }
      },
      dataFilter: function (e) {
        S.globalEval(e, t, n)
      }
    })
  }, S.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e
      }).append(this)), this
    }, wrapInner: function (n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e))
      }) : this.each(function () {
        var e = S(this), t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n)
      })
    }, wrap: function (t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t)
      })
    }, unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes)
      }), this
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e)
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest
    } catch (e) {
    }
  };
  var _t = {0: 200, 1223: 204}, zt = S.ajaxSettings.xhr();
  y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
    var o, a;
    if (y.cors || zt && !i.crossDomain) return {
      send: function (e, t) {
        var n, r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
        o = function (e) {
          return function () {
            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
          }
        }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            o && a()
          })
        }, o = o("abort");
        try {
          r.send(i.hasContent && i.data || null)
        } catch (e) {
          if (o) throw e
        }
      }, abort: function () {
        o && o()
      }
    }
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
  }), S.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /\b(?:java|ecma)script\b/},
    converters: {
      "text script": function (e) {
        return S.globalEval(e), e
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), S.ajaxTransport("script", function (n) {
    var r, i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function (e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", i = function (e) {
          r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
        }), E.head.appendChild(r[0])
      }, abort: function () {
        i && i()
      }
    }
  });
  var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return this[e] = !0, e
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r, i, o,
      a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0]
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
    }), "script"
  }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o
  }, S.fn.load = function (e, t, n) {
    var r, i, o, a = this, s = e.indexOf(" ");
    return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e])
      })
    }), this
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem
    }).length
  }, S.offset = {
    setOffset: function (e, t, n) {
      var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
    }
  }, S.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e)
      });
      var e, n, r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {top: 0, left: 0} : void 0
    }, position: function () {
      if (this[0]) {
        var e, t, n, r = this[0], i = {top: 0, left: 0};
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect(); else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
        }
        return {top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0)}
      }
    }, offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && "static" === S.css(e, "position")) e = e.offsetParent;
        return e || re
      })
    }
  }), S.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
    var o = "pageYOffset" === i;
    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
      }, t, e, arguments.length)
    }
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
      if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t
    })
  }), S.each({Height: "height", Width: "width"}, function (a, s) {
    S.each({padding: "inner" + a, content: s, "": "outer" + a}, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
        }, s, n ? e : void 0, n)
      }
    })
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), S.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    }, unbind: function (e, t) {
      return this.off(e, null, t)
    }, delegate: function (e, t, n, r) {
      return this.on(t, e, n, r)
    }, undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }, hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
  });
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
      return e.apply(t || this, r.concat(s.call(arguments)))
    }).guid = e.guid = e.guid || S.guid++, i
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0)
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Gt, "")
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S
  });
  var Yt = C.jQuery, Qt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});
// Author: Ken Wheeler
// Website: http://kenwheeler.github.io
// Docs: http://kenwheeler.github.io/slick
// Repo: http://github.com/kenwheeler/slick
!function (i) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function (i) {
  "use strict";
  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s, n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
    }
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null; else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e)
    }), s.$slidesCache = s.$slides, s.reinit()
  }, e.prototype.animateHeight = function () {
    var i = this;
    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({height: e}, i.options.speed)
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {}, s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({left: e}, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({top: e}, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({animStart: s.currentLeft}).animate({animStart: e}, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function (i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
      },
      complete: function () {
        t && t.call()
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call()
    }, s.options.speed))
  }, e.prototype.getNavTarget = function () {
    var e = this, t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == typeof t && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0)
    })
  }, e.prototype.applyTransition = function (i) {
    var e = this, t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer)
  }, e.prototype.autoPlayIterator = function () {
    var i = this, e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }))
  }, e.prototype.buildDots = function () {
    var e, t, o = this;
    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
  }, e.prototype.buildRows = function () {
    var i, e, t, o, s, n, r, l = this;
    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");
        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");
          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c))
          }
          d.appendChild(a)
        }
        o.appendChild(d)
      }
      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      })
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;
      for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o, s, n, r = this, l = i(e.currentTarget);
    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case"previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;
      case"next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;
      case"index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;
      default:
        return
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1]; else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break
      }
      t = e[o]
    }
    return i
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
  }, e.prototype.cleanUpRows = function () {
    var i, e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"))
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
  }, e.prototype.disableTransition = function (i) {
    var e = this, t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({zIndex: t.options.zIndex}), t.$slides.eq(i).animate({opacity: 1}, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call()
    }, t.options.speed))
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }))
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
      }, 0)
    })
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide
  }, e.prototype.getDotCount = function () {
    var i = this, e = 0, t = 0, o = 0;
    if (!0 === i.options.infinite) if (i.slideCount <= i.options.slidesToShow) ++o; else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (!0 === i.options.centerMode) o = i.slideCount; else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1
  }, e.prototype.getLeft = function (i) {
    var e, t, o, s, n = this, r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i]
  }, e.prototype.getNavigableIndexes = function () {
    var i, e = this, t = 0, o = 0, s = [];
    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    return s
  }, e.prototype.getSlick = function () {
    return this
  }, e.prototype.getSlideCount = function () {
    var e, t, o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({data: {message: "index", index: parseInt(i)}}, e)
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
  }, e.prototype.initADA = function () {
    var e = this, t = Math.ceil(e.slideCount / e.options.slidesToShow),
      o = e.getNavigableIndexes().filter(function (i) {
        return i >= 0 && i < e.slideCount
      });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({tabindex: "-1"}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({"aria-describedby": "slick-slide-control" + e.instanceUid + s})
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({role: "presentation"}), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      })
    }).eq(e.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
    e.activateADA()
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({data: {message: !0 === e.options.rtl ? "next" : "previous"}}) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({data: {message: !0 === e.options.rtl ? "previous" : "next"}}))
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this), t = i(this).attr("data-lazy"), o = i(this).attr("data-srcset"),
          s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r = document.createElement("img");
        r.onload = function () {
          e.animate({opacity: 0}, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({opacity: 1}, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
            }), n.$slider.trigger("lazyLoaded", [n, e, t])
          })
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
        }, r.src = t
      })
    }

    var t, o, s, n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({opacity: 1}), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({data: {message: "next"}})
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition()
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({data: {message: "previous"}})
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault()
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1)
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
  }, e.prototype.refresh = function (e) {
    var t, o, s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {currentSlide: t}), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1)
  }, e.prototype.registerBreakpoints = function () {
    var e, t, o, s = this, n = s.options.responsive || null;
    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";
      for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
        for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
        s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
      }
      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i
      })
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
    }, 50))
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
  }, e.prototype.setCSS = function (i) {
    var e, t, o = this, s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({padding: "0px " + i.options.centerPadding}) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({padding: i.options.centerPadding + " 0px"})), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
  }, e.prototype.setFade = function () {
    var e, t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0})
    }), t.$slides.eq(t.currentSlide).css({zIndex: t.options.zIndex - 1, opacity: 1})
  }, e.prototype.setHeight = function () {
    var i = this;
    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e)
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e, t, o, s, n, r = this, l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s; else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e
    }); else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]]; else {
      for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
      r.options.responsive.push(s[t])
    }
    l && (r.unload(), r.reinit())
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
  }, e.prototype.setProps = function () {
    var i = this, e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
  }, e.prototype.setSlideClasses = function (i) {
    var e, t, o, s, n = this;
    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
  }, e.prototype.setupInfinite = function () {
    var e, t, o, s = this;
    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "")
      })
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i
  }, e.prototype.selectHandler = function (e) {
    var t = this, o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
      s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
  }, e.prototype.slideHandler = function (i, e, t) {
    var o, s, n, r, l, d = null, a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o)
    }) : a.postSlide(o)); else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o)
    }) : a.postSlide(o)); else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s)
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s)
      }) : a.postSlide(s)
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
  }, e.prototype.swipeDirection = function () {
    var i, e, t, o, s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
  }, e.prototype.swipeEnd = function (i) {
    var e, t, o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case"left":
        case"down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;
        case"right":
        case"up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
      }
      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case"start":
        e.swipeStart(i);
        break;
      case"move":
        e.swipeMove(i);
        break;
      case"end":
        e.swipeEnd(i)
    }
  }, e.prototype.swipeMove = function (i) {
    var e, t, o, s, n, r, l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
  }, e.prototype.swipeStart = function (i) {
    var e, t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy()
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
  }, i.fn.slick = function () {
    var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
    for (i = 0; i < r; i++) if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    return o
  }
});
