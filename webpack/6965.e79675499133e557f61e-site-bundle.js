/*! For license information please see 6965.e79675499133e557f61e-site-bundle.js.LICENSE.txt */
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [6965], {
        176965: function(t, e, n) {
            var r = n(366757),
                i = n(328463);
            t.exports = n(286872)(r, i)
        },
        572225: function(t, e, n) {
            var r, i, a, s, u, o, c, l, h, f, d, g, p, v = n(143393),
                b = n(676702),
                _ = n(305598),
                m = {};
            r = function(t) {
                return t._sharedInternals.backingValue
            }, i = function(t, e) {
                t._sharedInternals.backingValue = e
            }, a = [], s = ".", u = function(t) {
                return t ? t.split(s) : []
            }, o = function(t, e) {
                return t && e.length > 0 ? t.getIn(e) : t
            }, c = function(t) {
                return "string" == typeof t ? u(t) : b.undefinedOrNull(t) ? [] : t
            }, l = function(t) {
                switch (typeof t) {
                    case "string":
                        return t;
                    case "number":
                        return t.toString();
                    default:
                        return b.undefinedOrNull(t) ? "" : t.join(s)
                }
            }, h = function(t, e, n) {
                return t.updateIn(e, m, (function(t) {
                    return t === m ? n() : n(t)
                }))
            }, f = function(t, e, n) {
                var a = r(t),
                    s = b.joinPaths(t._path, e),
                    u = h(a, s, n);
                return i(t, u), a.hasIn(s) ? s : s.slice(0, s.length - 1)
            }, d = function(t, e) {
                var n = b.joinPaths(t._path, e),
                    a = r(t),
                    s = n.length;
                if (0 === s) throw new Error("Cannot delete root value");
                var u = n.slice(0, s - 1);
                if (a.has(u[0]) || 1 === s) {
                    var o = a.updateIn(u, (function(t) {
                        var e = n[s - 1];
                        return v.List.isList(t) ? t.splice(e, 1) : t && t.remove(e)
                    }));
                    i(t, o)
                }
                return u
            }, g = function(t, e, n) {
                return b.undefinedOrNull(n) ? e : v.Iterable.isIterable(n) && v.Iterable.isIterable(n) ? t ? e.mergeDeep(n) : n.mergeDeep(e) : t ? n : e
            }, p = function(t) {
                return v.Iterable.isIterable(t) ? t.clear() : null
            };
            var y, M, I, E, C, B, S, P, k, w, R, V, A = function(t, e, n, r, i) {
                    return {
                        currentBackingValue: t,
                        currentBackingMeta: n,
                        previousBackingValue: e,
                        previousBackingMeta: r,
                        metaMetaChanged: i || !1
                    }
                },
                L = function() {
                    return Math.random().toString(36).substr(2, 9)
                };
            y = function(t, e, n, r, i) {
                var a = i.currentBackingValue,
                    s = i.previousBackingValue,
                    u = i.currentBackingMeta,
                    o = i.previousBackingMeta;
                b.getPropertyValues(e).forEach((function(t) {
                    if (!t.disabled) {
                        var e = c(n),
                            l = a !== s && a.getIn(e) !== s.getIn(e),
                            h = i.metaMetaChanged || o && u !== o && u.getIn(e) !== o.getIn(e);
                        (l || h) && t.cb(new _(r, e, l, h, i))
                    }
                }))
            }, M = function(t, e, n) {
                var r = t._sharedInternals.listeners[""];
                r && y(0, r, a, e, n)
            }, I = function(t, e) {
                return 0 === t.indexOf(e)
            }, E = function(t, e) {
                return "" === e || t === e || I(e, t + s) || I(t, e + s)
            }, C = function(t, e, n) {
                var r = t._sharedInternals.listeners;
                Object.keys(r).filter(b.identity).forEach((function(t) {
                    E(t, l(e)) && y(0, r[t], t, e, n)
                }))
            }, B = function(t, e, n) {
                M(t, e, n), C(t, e, n)
            }, S = function(t, e) {
                t._sharedInternals.metaBindingListenerId = e.addListener((function(n) {
                    var i = n.getPath(),
                        a = i.slice(0, i.length - 1),
                        s = r(t),
                        u = !n.isValueChanged(),
                        o = u ? r(e) : n.getPreviousValue();
                    B(t, a, A(s, s, r(e), o, u))
                }))
            }, P = function(t, e) {
                var n = e.removeListener(t._sharedInternals.metaBindingListenerId);
                return t._sharedInternals.metaBinding = null, t._sharedInternals.metaBindingListenerId = null, n
            }, k = function(t, e) {
                return b.find(b.getPropertyValues(t._sharedInternals.listeners), (function(t) {
                    return !!t[e]
                }))
            }, w = function(t, e, n) {
                var r = k(t, e);
                r && (r[e].disabled = n)
            }, R = function(t, e, n) {
                var i = r(t),
                    a = f(t, c(e), n),
                    s = r(t.meta());
                B(t, a, A(r(t), i, s, s))
            }, V = function(t, e) {
                var n = r(t),
                    i = d(t, c(e)),
                    a = r(t.meta());
                B(t, i, A(r(t), n, a, a))
            };
            var O = function(t, e) {
                this._path = t || a, this._sharedInternals = e || {}, this._sharedInternals.listeners || (this._sharedInternals.listeners = {}), this._sharedInternals.cache || (this._sharedInternals.cache = {})
            };
            O.init = function(t, e) {
                var n = new O(a, {
                    backingValue: t || v.Map(),
                    metaBinding: e
                });
                return e && S(n, e), n
            }, O.asArrayPath = function(t) {
                return c(t)
            }, O.asStringPath = function(t) {
                return l(t)
            }, O.META_NODE = b.META_NODE;
            var x = {
                getPath: function() {
                    return this._path
                },
                withBackingValue: function(t) {
                    var e = {};
                    return b.assign(e, this._sharedInternals), e.backingValue = t, new O(this._path, e)
                },
                isChanged: function(t, e) {
                    var n = this.get(),
                        r = t ? t.getIn(this._path) : void 0;
                    return e ? !e(n, r) : !(n === r || b.undefinedOrNull(n) && b.undefinedOrNull(r))
                },
                isRelative: function(t) {
                    return this._sharedInternals === t._sharedInternals && this._sharedInternals.backingValue === t._sharedInternals.backingValue
                },
                meta: function(t) {
                    if (!this._sharedInternals.metaBinding) {
                        var e = O.init(v.Map());
                        S(this, e), this._sharedInternals.metaBinding = e
                    }
                    var n = t ? b.joinPaths([b.META_NODE], c(t)) : [b.META_NODE],
                        r = this.getPath(),
                        i = r.length > 0 ? b.joinPaths(r, n) : n;
                    return this._sharedInternals.metaBinding.sub(i)
                },
                unlinkMeta: function() {
                    var t = this._sharedInternals.metaBinding;
                    return !!t && P(this, t)
                },
                reset: function() {
                    this._sharedInternals.listeners = {}, this._sharedInternals.cache = {}, this._sharedInternals.backingValue = v.Map(), this.unlinkMeta()
                },
                get: function(t) {
                    return o(r(this), b.joinPaths(this._path, c(t)))
                },
                toJS: function(t) {
                    var e = this.sub(t).get();
                    return v.Iterable.isIterable(e) ? e.toJS() : e
                },
                sub: function(t) {
                    var e = c(t),
                        n = b.joinPaths(this._path, e);
                    if (n.length > 0) {
                        var r = l(n),
                            i = this._sharedInternals.cache[r];
                        if (i) return i;
                        var a = new O(n, this._sharedInternals);
                        return this._sharedInternals.cache[r] = a, a
                    }
                    return this
                },
                update: function(t, e) {
                    var n = b.resolveArgs(arguments, "?subpath", "f");
                    return R(this, n.subpath, n.f), this
                },
                set: function(t, e) {
                    var n = b.resolveArgs(arguments, "?subpath", "newValue");
                    return R(this, n.subpath, b.constantly(n.newValue)), this
                },
                remove: function(t) {
                    return V(this, t), this
                },
                merge: function(t, e, n) {
                    var r = b.resolveArgs(arguments, (function(t) {
                        return b.canRepresentSubpath(t) ? "subpath" : null
                    }), "?preserve", "newValue");
                    return R(this, r.subpath, g.bind(null, r.preserve, r.newValue)), this
                },
                clear: function(t) {
                    var e = c(t);
                    return b.undefinedOrNull(this.get(e)) || R(this, e, p), this
                },
                addListener: function(t, e) {
                    var n = b.resolveArgs(arguments, (function(t) {
                            return b.canRepresentSubpath(t) ? "subpath" : null
                        }), "cb"),
                        r = L(),
                        i = l(b.joinPaths(this._path, c(n.subpath || ""))),
                        a = this._sharedInternals.listeners[i],
                        s = {
                            cb: n.cb,
                            disabled: !1
                        };
                    if (a) a[r] = s;
                    else {
                        var u = {};
                        u[r] = s, this._sharedInternals.listeners[i] = u
                    }
                    return r
                },
                addOnceListener: function(t, e) {
                    var n = b.resolveArgs(arguments, (function(t) {
                            return b.canRepresentSubpath(t) ? "subpath" : null
                        }), "cb"),
                        r = this,
                        i = r.addListener(n.subpath, (function() {
                            r.removeListener(i), n.cb()
                        }));
                    return i
                },
                enableListener: function(t) {
                    return w(this, t, !1), this
                },
                disableListener: function(t) {
                    return w(this, t, !0), this
                },
                withDisabledListener: function(t, e) {
                    var n = k(this, t);
                    if (n) {
                        var r = n[t];
                        r.disabled = !0, b.afterComplete(e, (function() {
                            r.disabled = !1
                        }))
                    } else e();
                    return this
                },
                removeListener: function(t) {
                    var e = k(this, t);
                    return !!e && delete e[t]
                },
                atomically: function(t) {
                    return new U(this, t)
                }
            };
            x.delete = x.remove, O.prototype = x;
            var U = function(t, e) {
                if (this._binding = t, this._queuedUpdates = [], this._finishedUpdates = [], this._committed = !1, this._cancelled = !1, this._hasChanges = !1, this._hasMetaChanges = !1, e) {
                    var n = this;
                    e.then(b.identity, (function() {
                        n.isCancelled() || n.cancel()
                    }))
                }
            };
            U.prototype = function() {
                var t, e, n, i, a, s, u, o = Object.freeze({
                    UPDATE: "update",
                    DELETE: "delete"
                });
                t = function(t, e) {
                    t._hasChanges || (t._hasChanges = e.isRelative(t._binding)), t._hasMetaChanges || (t._hasMetaChanges = !e.isRelative(t._binding))
                }, e = function(t) {
                    return t._hasChanges || t._hasMetaChanges
                }, n = function(e, n, r, i) {
                    t(e, n), e._queuedUpdates.push({
                        binding: n,
                        update: r,
                        subpath: i,
                        type: o.UPDATE
                    })
                }, i = function(e, n, r) {
                    t(e, n), e._queuedUpdates.push({
                        binding: n,
                        subpath: r,
                        type: o.DELETE
                    })
                }, a = function(t, e) {
                    var n = t.length;
                    return n === e.length && (1 === n || t[n - 2] === e[n - 2])
                }, s = function(t) {
                    if (t.length < 2) return t;
                    for (var e = t.sort(), n = e[0], r = l(n), i = [n], s = 1; s < e.length; s++) {
                        var u = e[s],
                            o = l(u);
                        if (!I(o, r))
                            if (a(u, n)) {
                                var c = u.slice(0, u.length - 1);
                                i.pop(), i.push(c), n = c, r = l(c)
                            } else i.push(u), n = u, r = o
                    }
                    return i
                }, u = function(t) {
                    var e = t._queuedUpdates.map((function(t) {
                        var e = r(t.binding);
                        return {
                            affectedPath: t.type === o.UPDATE ? f(t.binding, t.subpath, t.update) : d(t.binding, t.subpath),
                            binding: t.binding,
                            previousBackingValue: e
                        }
                    }));
                    return t._committed = !0, t._queuedUpdates = null, e
                };
                var h = {
                    update: function(t, e, r) {
                        var i = b.resolveArgs(arguments, (function(t) {
                            return t instanceof O ? "binding" : null
                        }), "?subpath", "f");
                        return n(this, i.binding || this._binding, i.f, c(i.subpath)), this
                    },
                    set: function(t, e, n) {
                        var r = b.resolveArgs(arguments, (function(t) {
                            return t instanceof O ? "binding" : null
                        }), "?subpath", "newValue");
                        return this.update(r.binding, r.subpath, b.constantly(r.newValue))
                    },
                    remove: function(t, e) {
                        var n = b.resolveArgs(arguments, (function(t) {
                            return t instanceof O ? "binding" : null
                        }), "?subpath");
                        return i(this, n.binding || this._binding, c(n.subpath)), this
                    },
                    merge: function(t, e, n, r) {
                        var i = b.resolveArgs(arguments, (function(t) {
                            return t instanceof O ? "binding" : null
                        }), (function(t) {
                            return b.canRepresentSubpath(t) ? "subpath" : null
                        }), (function(t) {
                            return "boolean" == typeof t ? "preserve" : null
                        }), "newValue");
                        return this.update(i.binding, i.subpath, g.bind(null, i.preserve, i.newValue))
                    },
                    clear: function(t, e) {
                        var r = b.resolveArgs(arguments, (function(t) {
                            return t instanceof O ? "binding" : null
                        }), "?subpath");
                        return n(this, r.binding || this._binding, p, c(r.subpath)), this
                    },
                    commit: function(t) {
                        if (this.isCommitted()) throw new Error("Morearty: transaction already committed");
                        if (!this.isCancelled() && e(this)) {
                            var n = t || {},
                                i = this._binding,
                                a = i.meta(),
                                o = null,
                                c = null;
                            !1 !== n.notify && (o = r(i), c = r(a)), this._finishedUpdates = u(this);
                            var l = this._finishedUpdates.map((function(t) {
                                return t.affectedPath
                            }));
                            if (!1 !== n.notify) {
                                var h = s(l),
                                    f = A(r(i), o, r(a), c);
                                M(i, h[0], f), h.forEach((function(t) {
                                    C(i, t, f)
                                }))
                            }
                        }
                        return this
                    },
                    cancel: function() {
                        if (this.isCancelled()) throw new Error("Morearty: transaction already cancelled");
                        ! function(t) {
                            t.isCommitted() && function(t) {
                                var e = t._finishedUpdates;
                                if (e.length > 0) {
                                    for (var n = t._binding.atomically(), r = e.length; r-- > 0;) {
                                        var i = e[r],
                                            a = i.binding,
                                            s = i.affectedPath,
                                            u = a.getPath().length === s.length ? s : s.slice(a.getPath().length);
                                        n.set(a, u, i.previousBackingValue.getIn(s))
                                    }
                                    n.commit()
                                }
                                t._finishedUpdates = null
                            }(t), t._cancelled = !0
                        }(this)
                    },
                    isCommitted: function() {
                        return this._committed
                    },
                    isCancelled: function() {
                        return this._cancelled
                    }
                };
                return h.delete = h.remove, h
            }(), t.exports = O
        },
        305598: function(t, e, n) {
            var r = n(676702),
                i = function(t, e, n, i, a) {
                    this._path = t, this._listenerPath = e, this._metaPath = r.joinPaths(e, [r.META_NODE]), this._valueChanged = n, this._metaChanged = i, this._currentBackingValue = a.currentBackingValue, this._previousBackingValue = a.previousBackingValue, this._currentBackingMeta = a.currentBackingMeta, this._previousBackingMeta = a.previousBackingMeta
                };
            i.prototype = {
                getPath: function() {
                    var t = this._listenerPath.length;
                    return t === this._path.length ? [] : this._path.slice(t)
                },
                isValueChanged: function() {
                    return this._valueChanged
                },
                isMetaChanged: function() {
                    return this._metaChanged
                },
                getCurrentValue: function() {
                    return this._currentBackingValue.getIn(this._listenerPath)
                },
                getPreviousValue: function() {
                    return this._previousBackingValue.getIn(this._listenerPath)
                },
                getCurrentMeta: function() {
                    return this._currentBackingMeta ? this._currentBackingMeta.getIn(this._metaPath) : null
                },
                getPreviousMeta: function() {
                    return this._previousBackingMeta ? this._previousBackingMeta.getIn(this._metaPath) : null
                },
                getPreviousBackingValue: function() {
                    return this._previousBackingValue
                },
                getPreviousBackingMeta: function() {
                    return this._previousBackingMeta || null
                }
            }, t.exports = i
        },
        328463: function(t, e, n) {
            const r = n(676702),
                i = n(366757),
                a = (n(973935), n(972555));
            var s = function() {
                if (i) return i.createElement;
                throw new Error("Morearty: global variable React not found")
            }();

            function u(t, e) {
                return a({
                    displayName: e,
                    getInitialState: function() {
                        return {
                            value: this.props.value
                        }
                    },
                    onChange: function(t) {
                        var e = this.props.onChange;
                        e && (e(t), this.setState({
                            value: t.target.value
                        }))
                    },
                    componentWillReceiveProps: function(t) {
                        this.setState({
                            value: t.value
                        })
                    },
                    render: function() {
                        var e = r.assign({}, this.props, {
                            value: this.state.value,
                            onChange: this.onChange,
                            children: this.props.children
                        });
                        return t(e)
                    }
                })
            }

            function o(t) {
                return function(e, n) {
                    return s(t, e, n)
                }
            }
            var c = {
                input: u(o("input"), "input"),
                textarea: u(o("textarea"), "textarea"),
                option: u(o("option"), "option")
            };
            t.exports = c
        },
        954683: function(t, e, n) {
            var r, i, a, s, u, o, c, l = n(143393),
                h = n(572225);
            r = function(t) {
                return t.meta("history")
            }, i = function(t) {
                t.set(l.fromJS({
                    listenerId: null,
                    undo: [],
                    redo: []
                }))
            }, a = function(t) {
                var e = t.get("listenerId");
                t.withDisabledListener(e, (function() {
                    t.atomically().set("undo", l.List.of()).set("redo", l.List.of()).commit()
                }))
            }, s = function(t, e) {
                var n = r(t),
                    i = n.get("listenerId");
                t.removeListener(i), n.atomically().set(null).commit({
                    notify: e
                })
            }, u = function(t, e) {
                var n = t.addListener([], (function(n) {
                    n.isValueChanged() && e.atomically().update((function(e) {
                        var r = n.getPath(),
                            i = n.getPreviousValue(),
                            a = t.get();
                        return e.update("undo", (function(t) {
                            var e = h.asArrayPath(r);
                            return t && t.unshift(l.Map({
                                newValue: e.length ? a.getIn(e) : a,
                                oldValue: e.length ? i && i.getIn(e) : i,
                                path: r
                            }))
                        })).set("redo", l.List.of())
                    })).commit({
                        notify: !1
                    })
                }));
                e.atomically().set("listenerId", n).commit({
                    notify: !1
                })
            }, o = function(t, e, n, r) {
                r.withDisabledListener(n, (function() {
                    r.set(t, e)
                }))
            }, c = function(t, e, n, r, i) {
                var a = e.get();
                if (a.isEmpty()) return !1;
                var s = a.get(0);
                return e.atomically().remove(0).update(n, (function(t) {
                    return t.unshift(s)
                })).commit({
                    notify: !1
                }), o(s.get("path"), s.get(i), r, t), !0
            };
            var f = {
                init: function(t) {
                    var e = r(t);
                    i(e), u(t, e)
                },
                clear: function(t) {
                    var e = r(t);
                    a(e)
                },
                destroy: function(t, e) {
                    s(t, (e || {}).notify)
                },
                hasUndo: function(t) {
                    var e = r(t).get("undo");
                    return !!e && !e.isEmpty()
                },
                hasRedo: function(t) {
                    var e = r(t).get("redo");
                    return !!e && !e.isEmpty()
                },
                undo: function(t) {
                    var e = r(t),
                        n = e.get("listenerId"),
                        i = e.sub("undo"),
                        a = e.sub("redo");
                    return c(t, i, a, n, "oldValue")
                },
                redo: function(t) {
                    var e = r(t),
                        n = e.get("listenerId"),
                        i = e.sub("undo"),
                        a = e.sub("redo");
                    return c(t, a, i, n, "newValue")
                }
            };
            t.exports = f
        },
        286872: function(t, e, n) {
            var r, i, a, s, u, o, c, l, h, f, d = n(734155),
                g = n(143393),
                p = n(45697),
                v = n(972555),
                b = n(676702),
                _ = n(572225),
                m = n(954683),
                y = n(516652),
                M = [],
                I = Object.freeze({
                    OVERWRITE: "overwrite",
                    OVERWRITE_EMPTY: "overwrite-empty",
                    MERGE_PRESERVE: "merge-preserve",
                    MERGE_REPLACE: "merge-replace"
                });

            function E() {
                return void 0 !== d && d.versions && d.versions.node
            }
            r = function(t, e) {
                var n = t.binding;
                return e ? n[e] : n
            }, s = function(t) {
                return "function" == typeof t.get
            }, i = function(t, e, n, r) {
                return t._stateChanged && n !== e.get() || t._metaChanged && t._metaBinding.sub(e.getPath()).isChanged(r)
            }, a = function(t, e, n, r, a) {
                if (e) {
                    var u = t.getMoreartyContext();
                    if (s(e)) return e !== n || i(u, e, r, a);
                    if (u._stateChanged || u._metaChanged) {
                        var o = Object.keys(e);
                        return !!b.find(o, (function(t) {
                            var s = e[t];
                            return s && (s !== n[t] || i(u, s, r[t], a))
                        }))
                    }
                    return !1
                }
                return !1
            }, u = function(t, e, n) {
                return e[t] !== n[t]
            }, o = function(t) {
                var e = 0;
                for (var n in t) ++e;
                return e
            }, c = function(t, e, n) {
                var r = e || {},
                    i = t.props || {};
                if (o(r) !== o(i)) return !0;
                for (var a in r)
                    if (n[a]) {
                        if (!n[a](i[a], r[a])) return !0
                    } else if ("binding" !== a && u(a, r, i)) return !0;
                return !1
            }, h = function(t) {
                var e = 0;
                for (var n in t) ++e;
                return e
            }, l = function(t, e, n) {
                return e[t] !== n[t]
            }, f = function(t, e) {
                var n = e || {},
                    r = t.state || {};
                if (h(n) !== h(r)) return !0;
                for (var i in n)
                    if (l(i, n, r)) return !0;
                return !1
            };
            var C, B, S, P, k, w, R, V, A = function(t, e, n) {
                var r = n.atomically();
                if ("function" == typeof t) r = r.update((function(n) {
                    return t(n, e)
                }));
                else switch (t) {
                    case I.OVERWRITE:
                        r = r.set(e);
                        break;
                    case I.OVERWRITE_EMPTY:
                        r = r.update((function(t) {
                            return b.undefinedOrNull(t) || g.Iterable.isIterable(t) && t.isEmpty() ? e : t
                        }));
                        break;
                    case I.MERGE_PRESERVE:
                        r = r.merge(!0, e);
                        break;
                    case I.MERGE_REPLACE:
                        r = r.merge(!1, e);
                        break;
                    default:
                        throw new Error("Invalid merge strategy: " + t)
                }
                r.commit({
                    notify: !1
                })
            };
            C = function(t, e, n) {
                if ("function" == typeof t[e]) {
                    var i = t[e]();
                    if (i) {
                        var a = r(t.props),
                            u = "function" == typeof t.getMergeStrategy ? t.getMergeStrategy() : I.MERGE_PRESERVE,
                            o = g.Iterable.isIterable(i);
                        if (s(a)) {
                            var c = o ? i : i.default;
                            A(u, c, n(a))
                        } else {
                            var l = Object.keys(a),
                                h = 1 === l.length ? l[0] : "default",
                                f = "string" == typeof u ? u : u[h];
                            o ? A(f, i, n(a[h])) : l.forEach((function(t) {
                                i[t] && A(f, i[t], n(a[t]))
                            }))
                        }
                    }
                }
            }, B = function(t) {
                C(t, "getDefaultState", b.identity)
            }, S = function(t) {
                C(t, "getDefaultMetaState", (function(t) {
                    return t.meta()
                }))
            }, P = function(t) {
                var e = t.props.binding;
                if (e) {
                    var n = t.getMoreartyContext();
                    t._previousMetaState = n && n.getCurrentMeta(), s(e) ? t._previousState = e.get() : (t._previousState = {}, Object.keys(t.props.binding).forEach((function(e) {
                        t._previousState[e] = t.props.binding[e] && t.props.binding[e].get()
                    })))
                } else t._previousState = null, t._previousMetaState = null
            }, k = function(t, e) {
                t._componentQueue[e.componentQueueId] = e
            }, w = function(t, e) {
                delete t._componentQueue[e.componentQueueId]
            }, R = function(t) {
                return t ? ++t._lastComponentQueueId : 0
            }, V = function(t, e) {
                t._observedListenerRemovers || (t._observedListenerRemovers = []);
                var n = e.addListener((function() {
                    k(t.getMoreartyContext(), t)
                }));
                t._observedListenerRemovers.push((function() {
                    e.removeListener(n)
                }))
            };
            var L = {
                error: function(t, e) {
                    console.error(t), console.error("Error details: %s", e.message, e.stack)
                }
            };
            t.exports = function(t, e) {
                var n = function(t, e, n) {
                        this._initialMetaState = e.get(), this._previousMetaState = null, this._metaBinding = e, this._metaChanged = !1, this._initialState = t.get(), this._previousState = null, this._stateBinding = t, this._stateChanged = !1, this._options = n, this._renderQueued = !1, this._fullUpdateQueued = !1, this._fullUpdateInProgress = !1, this._componentQueue = [], this._lastComponentQueueId = 0
                    },
                    i = {
                        getBinding: function() {
                            return this._stateBinding
                        },
                        getMetaBinding: function() {
                            return this._metaBinding
                        },
                        reset: function() {
                            const t = this.getBinding(),
                                e = this.getMetaBinding();
                            t && t.reset(), e && e.reset()
                        },
                        getCurrentState: function() {
                            return this.getBinding().get()
                        },
                        getPreviousState: function() {
                            return this._previousState
                        },
                        getCurrentMeta: function() {
                            var t = this.getMetaBinding();
                            return t ? t.get() : void 0
                        },
                        getPreviousMeta: function() {
                            return this._previousMetaState
                        },
                        copy: function(t) {
                            return new n(this._stateBinding.sub(t), this._metaBinding.sub(t), this._options)
                        },
                        resetState: function(t, e) {
                            var n = b.resolveArgs(arguments, (function(t) {
                                    return b.canRepresentSubpath(t) ? "subpath" : null
                                }), "?options"),
                                r = n.subpath ? _.asArrayPath(n.subpath) : [],
                                i = this.getBinding().atomically();
                            i.set(r, this._initialState.getIn(r));
                            var a = n.options || {};
                            !1 !== a.resetMeta && i.set(this.getMetaBinding(), r, this._initialMetaState.getIn(r)), i.commit({
                                notify: a.notify
                            })
                        },
                        replaceState: function(t, e, n) {
                            var r = b.resolveArgs(arguments, "newState", (function(t) {
                                    return g.Map.isMap(t) ? "newMetaState" : null
                                }), "?options"),
                                i = r.options || {},
                                a = this.getBinding().atomically();
                            a.set(t), r.newMetaState && a.set(this.getMetaBinding(), r.newMetaState), a.commit({
                                notify: i.notify
                            })
                        },
                        isChanged: function(t, e, n) {
                            var r = b.resolveArgs(arguments, "binding", (function(t) {
                                return b.canRepresentSubpath(t) ? "subpath" : null
                            }), "?compare");
                            return r.binding.sub(r.subpath).isChanged(this._previousState, r.compare || g.is)
                        },
                        init: function(t) {
                            var e = this,
                                n = !1,
                                r = [],
                                i = function(t, e) {
                                    t.isMounted() && t.forceUpdate(e)
                                },
                                a = function(t) {
                                    try {
                                        t()
                                    } catch (t) {
                                        e._options.stopOnRenderError && (n = !0),
                                            function(t, n) {
                                                if (e._options.logger) try {
                                                    e._options.logger.error(t, n)
                                                } catch (e) {
                                                    L.error(t, n)
                                                }
                                            }("Morearty: render error. " + (n ? "Will exit on next render attempt." : "Continuing."), t)
                                    }
                                },
                                s = function() {
                                    ! function() {
                                        var t, n;
                                        if (1 === r.length) {
                                            var i = r[0];
                                            t = i.stateChanged, n = i.metaChanged, t && (e._previousState = i.previousState), n && (e._previousMetaState = i.previousMetaState)
                                        } else {
                                            var a = b.find(r, (function(t) {
                                                    return t.stateChanged
                                                })),
                                                s = b.find(r, (function(t) {
                                                    return t.metaChanged
                                                }));
                                            n = !!s, (t = !!a) && (e._previousState = a.previousState), n && (e._previousMetaState = s.previousMetaState)
                                        }
                                        e._stateChanged = t, e._metaChanged = n, r = []
                                    }(), e._renderQueued = !1, a((function() {
                                        e._fullUpdateQueued ? (e._fullUpdateInProgress = !0, i(t, (function() {
                                            e._fullUpdateQueued = !1, e._fullUpdateInProgress = !1
                                        }))) : (i(t), e._componentQueue.forEach((function(t) {
                                            i(t), P(t)
                                        })), e._componentQueue = [])
                                    }))
                                };
                            if (!e._options.renderOnce) var u = function(t) {
                                    var e = "undefined" != typeof window && window.requestAnimationFrame,
                                        n = function(t) {
                                            setTimeout(t, 1e3 / 60)
                                        };
                                    return t._options.requestAnimationFrameEnabled ? e || (console.warn("Morearty: requestAnimationFrame is not available, will render using setTimeout"), n) : n
                                }(e),
                                o = e._stateBinding.addListener((function(t) {
                                    if (n) e._stateBinding.removeListener(o);
                                    else {
                                        var i = t.isValueChanged(),
                                            a = t.isMetaChanged();
                                        (i || a) && (r.push({
                                            stateChanged: i,
                                            metaChanged: a,
                                            previousState: i ? t.getPreviousBackingValue() : null,
                                            previousMetaState: a ? t.getPreviousBackingMeta() : null
                                        }), e._renderQueued || (e._renderQueued = !0, u(s)))
                                    }
                                }));
                            a(t.forceUpdate.bind(t))
                        },
                        queueFullUpdate: function() {
                            this._fullUpdateQueued = !0
                        },
                        bootstrap: function(e, r) {
                            var i = this,
                                a = r || {};
                            return a.morearty = i, v({
                                displayName: "Bootstrap",
                                childContextTypes: {
                                    morearty: p.instanceOf(n).isRequired
                                },
                                getChildContext: function() {
                                    return a
                                },
                                componentWillMount: function() {
                                    i.init(this)
                                },
                                render: function() {
                                    var n = b.assign({}, {
                                        binding: i.getBinding()
                                    }, this.props);
                                    return t.createFactory(e)(n)
                                }
                            })
                        }
                    };
                return n.prototype = i, {
                    Binding: _,
                    History: m,
                    Util: b,
                    Callback: y,
                    DOM: e,
                    MergeStrategy: I,
                    Mixin: {
                        contextTypes: {
                            morearty: p.instanceOf(n).isRequired
                        },
                        getMoreartyContext: function() {
                            return this.context.morearty
                        },
                        getBinding: function(t) {
                            return r(this.props, t)
                        },
                        getDefaultBinding: function() {
                            var t = r(this.props);
                            if (!t) return this.observedBindings && this.observedBindings[0];
                            if (s(t)) return t;
                            if ("object" == typeof t) {
                                var e = Object.keys(t);
                                return 1 === e.length ? t[e[0]] : t.default
                            }
                        },
                        getPreviousState: function(t) {
                            var e = this.getMoreartyContext();
                            return r(this.props, t).withBackingValue(e._previousState).get()
                        },
                        observeBinding: function(t, e) {
                            this.observedBindings || (this.observedBindings = []);
                            var n = t.getPath();
                            return b.find(this.observedBindings, (function(t) {
                                return t.getPath() === n
                            })) || (this.observedBindings.push(t), V(this, t)), e ? e(t.get()) : void 0
                        },
                        componentWillMount: function() {
                            this.componentQueueId = R(this.getMoreartyContext()), P(this), B(this), S(this), this.observedBindings && this.observedBindings.forEach(V.bind(null, this))
                        },
                        shouldComponentUpdate: function(t, e, n) {
                            var i = this,
                                s = i.getMoreartyContext(),
                                u = i._previousState,
                                o = i._previousMetaState,
                                l = {};
                            i.getPropCompareFunctions && (l = i.getPropCompareFunctions()), P(i);
                            var h = function() {
                                    return s._fullUpdateInProgress || f(i, e) || a(i, r(t), r(i.props), u, o) || c(i, t, l)
                                },
                                d = i.shouldComponentUpdateOverride;
                            return d ? d(h, t, e, n) : h()
                        },
                        addBindingListener: function(t, e, n) {
                            var r = b.resolveArgs(arguments, (function(t) {
                                return s(_) ? "binding" : null
                            }), (function(t) {
                                return b.canRepresentSubpath(t) ? "subpath" : null
                            }), "cb");
                            this._bindingListenerRemovers || (this._bindingListenerRemovers = []);
                            var i = r.binding || this.getDefaultBinding();
                            if (!i) return console.warn("Morearty: cannot attach binding listener to a component without default binding");
                            var a = i.addListener(r.subpath, r.cb);
                            return this._bindingListenerRemovers.push((function() {
                                i.removeListener(a)
                            })), a
                        },
                        componentDidUpdate: function() {
                            w(this.getMoreartyContext(), this)
                        },
                        componentWillUnmount: function() {
                            this._observedListenerRemovers && (this._observedListenerRemovers.forEach((function(t) {
                                t()
                            })), this._observedListenerRemovers = []), this._bindingListenerRemovers && (this._bindingListenerRemovers.forEach((function(t) {
                                t()
                            })), this._bindingListenerRemovers = [])
                        }
                    },
                    createContext: function(t) {
                        var e, r, i;
                        if (arguments.length <= 1) {
                            var a = t || {};
                            e = a.initialState, r = a.initialMetaState, i = a.options
                        } else console.warn("Passing multiple arguments to createContext is deprecated. Use single object form instead."), e = arguments[0], r = arguments[1], i = arguments[2];
                        var s = function(t) {
                                return g.Iterable.isIterable(t) ? t : g.fromJS(t)
                            },
                            u = s(e || {}),
                            o = s(r || {}),
                            c = _.init(o),
                            l = _.init(u, c),
                            h = i || {},
                            f = new n(l, c, {
                                requestAnimationFrameEnabled: !1 !== h.requestAnimationFrameEnabled,
                                renderOnce: h.renderOnce || !1,
                                stopOnRenderError: h.stopOnRenderError || !1,
                                logger: h.logger || L
                            });
                        return E() && M.push(f), f
                    },
                    ssrReset: function() {
                        M.forEach((function(t) {
                            t.reset()
                        }))
                    }
                }
            }
        },
        676702: function(t) {
            var e, n, r;
            e = function(t) {
                return "string" == typeof t && "?" !== t.charAt(0)
            }, n = function(t, e) {
                for (var n = e(t[0]), r = 1; r < t.length; r++)
                    if (e(t[r]) !== n) return r;
                return null
            }, r = function(t, e) {
                return t.slice(e).reverse().concat(t.slice(0, e))
            }, t.exports = {
                identity: function(t) {
                    return t
                },
                not: function(t) {
                    return !t
                },
                constantly: function(t) {
                    return function() {
                        return t
                    }
                },
                async: function(t) {
                    setTimeout(t, 0)
                },
                afterComplete: function(t, e) {
                    var n = t();
                    n && "function" == typeof n.always ? n.always(e) : e()
                },
                undefinedOrNull: function(t) {
                    return null == t
                },
                getPropertyValues: function(t) {
                    return Object.keys(t).map((function(e) {
                        return t[e]
                    }))
                },
                find: function(t, e) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        if (e(r, n, t)) return r
                    }
                    return null
                },
                resolveArgs: function(t, i) {
                    var a = {};
                    if (arguments.length > 1) {
                        var s, u, o, c = Array.isArray(i) ? i : Array.prototype.slice.call(arguments, 1);
                        if (e(c[0]) || !(o = n(c, e))) s = c, u = t;
                        else {
                            var l = Array.isArray(t) ? t : Array.prototype.slice.call(t);
                            s = r(c, o), u = r(l, l.length - (c.length - o))
                        }
                        for (var h = 0, f = 0; h < s.length && f < u.length; h++) {
                            var d = s[h],
                                g = u[f];
                            if (e(d)) a[d] = g, f++;
                            else {
                                var p = "function" == typeof d ? d(g) : "?" !== d.charAt(0) ? d : d.substring(1);
                                (p || void 0 === g) && (a[p] = g, f++)
                            }
                        }
                    }
                    return a
                },
                canRepresentSubpath: function(t) {
                    var e = typeof t;
                    return "string" === e || "number" === e || Array.isArray(t)
                },
                META_NODE: "__meta__",
                joinPaths: function(t, e) {
                    return 0 === t.length ? e : 0 === e.length ? t : t.concat(e)
                },
                assign: function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert first argument to object");
                    for (var n, r = Object(t), i = !1, a = 1; a < arguments.length; a++) {
                        var s = arguments[a];
                        if (null != s) {
                            for (var u = Object.keys(Object(s)), o = 0, c = u.length; o < c; o++) {
                                var l = u[o];
                                try {
                                    var h = Object.getOwnPropertyDescriptor(s, l);
                                    void 0 !== h && h.enumerable && (r[l] = s[l])
                                } catch (t) {
                                    i || (i = !0, n = t)
                                }
                            }
                            if (i) throw n
                        }
                    }
                    return r
                }
            }
        },
        516652: function(t, e, n) {
            var r = n(676702);
            t.exports = {
                set: function(t, e, n) {
                    var i = r.resolveArgs(arguments, "binding", (function(t) {
                        return r.canRepresentSubpath(t) ? "subpath" : null
                    }), "?f");
                    return function(e) {
                        var n = e.target.value;
                        t.set(i.subpath, i.f ? i.f(n) : n)
                    }
                },
                remove: function(t, e, n) {
                    var i = r.resolveArgs(arguments, "binding", (function(t) {
                        return r.canRepresentSubpath(t) ? "subpath" : null
                    }), "?pred");
                    return function(e) {
                        var n = e.target.value;
                        i.pred && !i.pred(n) || t.remove(i.subpath)
                    }
                },
                onKey: function(t, e, n, i) {
                    var a = n || !1,
                        s = i || !1;
                    return function(n) {
                        ("string" == typeof e ? n.key === e : r.find(e, (function(t) {
                            return t === n.key
                        }))) && n.shiftKey === a && n.ctrlKey === s && t(n)
                    }
                },
                onEnter: function(t) {
                    return this.onKey(t, "Enter")
                },
                onEscape: function(t) {
                    return this.onKey(t, "Escape")
                }
            }, t.exports.delete = t.exports.remove
        }
    }
]);