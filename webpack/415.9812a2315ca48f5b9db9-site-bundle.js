/*! For license information please see 415.9812a2315ca48f5b9db9-site-bundle.js.LICENSE.txt */
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [415], {
        964090: function(t, e, i) {
            var o = i(893379),
                r = i(293052);
            "string" == typeof(r = r.__esModule ? r.default : r) && (r = [
                [t.id, r, ""]
            ]);
            o(r, {
                insert: "head",
                singleton: !1
            }), t.exports = r.locals || {}
        },
        732661: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return X
                }
            });
            var o, r, n = i(501068),
                l = i.n(n),
                a = i(615713),
                s = i(863056),
                d = i(468420),
                c = i(327344),
                u = i(505281),
                p = i(484441),
                f = i(103020),
                g = i(803362),
                m = i(844845),
                h = i(694473),
                v = i.n(h),
                b = i(277149),
                y = i.n(b),
                k = i(2991),
                P = i.n(k),
                x = i(169301),
                C = i.n(x),
                F = i(703649),
                S = i.n(F),
                _ = i(620116),
                M = i.n(_),
                N = i(678580),
                E = i.n(N),
                w = i(977766),
                Z = i.n(w),
                I = i(31238),
                D = i.n(I),
                O = i(366757),
                T = i(50533),
                L = i(622587),
                z = i(31130),
                B = i(601765),
                R = i(685231),
                U = i(171725),
                V = i(496486),
                W = i(223336),
                A = i(918186),
                j = i(372742);
            ! function(t) {
                t.PRICES = "prices", t.OPTIONS = "productOptions", t.DIMENSIONS = "dimensions"
            }(r || (r = {}));
            var J, G, H = (o = {}, (0, m.Z)(o, r.PRICES, "Ecommerce|Price"), (0, m.Z)(o, r.OPTIONS, "Ecommerce|Product Options"), (0, m.Z)(o, r.DIMENSIONS, null), o),
                K = (i(964090), i(143393)),
                q = i(353147);
            i(43138);
            var Q = function(t) {
                    (0, p.Z)(n, t);
                    var e, i, o = (e = n, i = function() {
                        if ("undefined" == typeof Reflect || !l()) return !1;
                        if (l().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(l()(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, o = (0, g.Z)(e);
                        if (i) {
                            var r = (0, g.Z)(this).constructor;
                            t = l()(o, arguments, r)
                        } else t = o.apply(this, arguments);
                        return (0, f.Z)(this, t)
                    });

                    function n(t) {
                        var e;
                        return (0, d.Z)(this, n), e = o.call(this, t), (0, m.Z)((0, u.Z)(e), "changeMarkPosition", (function() {
                            var t, i, o, r, n = e.props,
                                l = (n.allFilters, n.selectedFilters, n.canEdit),
                                a = n.sectionId;
                            if (l) {
                                var s = v()(t = W(".price-slider-".concat(a))).call(t, ".s-kit-slider-handle-1"),
                                    d = v()(i = W(".price-slider-".concat(a))).call(i, ".s-kit-slider-handle-2");
                                if (s && d) {
                                    var c = v()(o = W(".price-slider-".concat(a))).call(o, ".min-marks-text"),
                                        u = v()(r = W(".price-slider-".concat(a))).call(r, ".max-marks-text");
                                    if (u.length && c.length) {
                                        var p = e.getMarksOffset(s.css("left")),
                                            f = e.getMarksOffset(d.css("right")),
                                            g = e.getMarksOffset(d.css("left")),
                                            m = e.getMarksOffset(c.css("width")),
                                            h = e.getMarksOffset(u.css("width")),
                                            b = (u.position() || {}).left,
                                            y = p ? Math.min(p, b - m) : 0,
                                            k = (c.position() || {}).left,
                                            P = e.getMarksOffset(c.parent().css("width")),
                                            x = g ? Math.min(f, P - k - m) : 0;
                                        if (m - ((g ? e.getMarksOffset(g - h / 3) : 0) - y) + 10 > 0) return;
                                        c.css("left", y), u.css("right", x)
                                    }
                                }
                            }
                        })), (0, m.Z)((0, u.Z)(e), "renderFilterList", (function() {
                            var t = e.props,
                                i = t.allFilters,
                                o = t.resetFilter,
                                n = t.isInSection,
                                l = t.selectedFilters,
                                a = (t.canEdit, V.values(r));
                            if (i && !((null == i ? void 0 : i.size) <= 0)) {
                                var d, c, u, p = (null == l ? void 0 : l.get("productOptions")) || [],
                                    f = (null == i || null === (d = i.get("productOptions")) || void 0 === d ? void 0 : d.size) !== (null == p ? void 0 : p.length) && (null == p ? void 0 : p.length) > 0,
                                    g = (null == l ? void 0 : l.get("prices")) || [],
                                    m = null == i ? void 0 : y()(c = i.get("dimensions")).call(c, (function(t, e) {
                                        var i, o;
                                        return (null == l || null === (i = l.get(e)) || void 0 === i ? void 0 : i.length) !== (null == t ? void 0 : t.size) && (null == l || null === (o = l.get(e)) || void 0 === o ? void 0 : o.length) > 0
                                    }));
                                return u = f || m || (null == g ? void 0 : g.length) > 0, (0, s.Z)("div", {}, void 0, n && (0, s.Z)("div", {
                                    className: "top-bar s-font-body"
                                }, void 0, (0, s.Z)("div", {
                                    className: "title"
                                }, void 0, q("Ecommerce|Filter Products")), u && (0, s.Z)("div", {
                                    className: "reset",
                                    onClick: o
                                }, void 0, q("Ecommerce|Reset"))), (0, s.Z)("div", {
                                    className: "list s-font-body"
                                }, void 0, P()(a).call(a, (function(t) {
                                    var o = null == i ? void 0 : i.get(t);
                                    if (o) return t === r.DIMENSIONS ? e.renderDimensions(o) : e.renderFilterItem(t, o)
                                }))))
                            }
                        })), (0, m.Z)((0, u.Z)(e), "renderDimensions", (function(t) {
                            var i = null == t ? void 0 : C()(t).call(t),
                                o = (0, a.Z)(i),
                                r = S()(o).call(o, 0);
                            return P()(r).call(r, (function(i) {
                                var o = t.get(i);
                                return e.renderFilterItem(i, o)
                            }))
                        })), (0, m.Z)((0, u.Z)(e), "renderFilterItem", (function(t, i) {
                            var o = M()(i).call(i, (function(t) {
                                return 0 === t || Boolean(t)
                            }));
                            if (o && !(o.size <= 0)) return e.props.isInSection ? e.renderSectionItem(t, o) : e.renderEditorItem(t, o)
                        })), (0, m.Z)((0, u.Z)(e), "renderEditorItem", (function(t, i) {
                            var o = H[t] ? q("".concat(H[t])) : t,
                                n = e.props,
                                l = n.changeFilter,
                                a = n.selectedFilters,
                                d = null == a ? void 0 : E()(a).call(a, t);
                            return (0, s.Z)("div", {
                                className: "editor-item item"
                            }, void 0, (0, s.Z)(L.Z, {
                                className: "checkbox",
                                checked: d,
                                value: t,
                                onChange: l
                            }, void 0, (0, s.Z)("div", {
                                className: "label-panel"
                            }, void 0, (0, s.Z)("span", {
                                className: "label"
                            }, void 0, o, " "), t !== r.PRICES && (null == i ? void 0 : P()(i).call(i, (function(t, e) {
                                return e < 3 && (0, s.Z)("span", {}, void 0, (0, s.Z)("span", {
                                    className: "sub-label"
                                }, void 0, t), (0, s.Z)("span", {
                                    className: "sub-label"
                                }, void 0, e <= 1 && e !== i.size - 1 ? ", " : ""))
                            }))), (null == i ? void 0 : i.size) > 3 && (J || (J = (0, s.Z)("span", {
                                className: "sub-label"
                            }, void 0, "..."))))))
                        })), (0, m.Z)((0, u.Z)(e), "renderPrice", (function(t) {
                            var i = e.props.currencyData,
                                o = void 0 === i ? null : i;
                            return o ? (0, j.getFormattedPrice)(t, o) : A.addCurrencySymbol(t)
                        })), (0, m.Z)((0, u.Z)(e), "renderMarks", (function(t, i) {
                            var o = e.renderPrice(t),
                                r = e.renderPrice(i);
                            return (0, s.Z)("div", {
                                className: "price-slider-marks"
                            }, void 0, (0, s.Z)("span", {
                                className: "min-marks-text"
                            }, void 0, o), (0, s.Z)("span", {
                                className: "max-marks-text"
                            }, void 0, r))
                        })), (0, m.Z)((0, u.Z)(e), "renderSectionItem", (function(t, i) {
                            var o = e.props,
                                n = o.canEdit,
                                l = o.changeFilter,
                                a = o.changePrice,
                                d = o.afterChangePrice,
                                c = o.selectedFilters,
                                u = o.isMobile,
                                p = o.sectionId,
                                f = e.state.showMoreFiltersMap,
                                g = H[t] ? q("".concat(H[t])) : t,
                                h = (null == c ? void 0 : c.get("prices")) || [],
                                v = function(t) {
                                    t[0] === h[0] && t[1] === h[1] || d(t)
                                },
                                b = function(e) {
                                    return null == e ? void 0 : P()(e).call(e, (function(e) {
                                        var i, o = null == c || null === (i = c.get(t)) || void 0 === i ? void 0 : E()(i).call(i, e);
                                        return (0, s.Z)("div", {
                                            className: "section-item item"
                                        }, void 0, (0, s.Z)(L.Z, {
                                            className: "checkbox",
                                            checked: o,
                                            value: e,
                                            onChange: function(i) {
                                                n && l(t, e)
                                            }
                                        }, void 0, (0, s.Z)("div", {
                                            className: "label-panel"
                                        }, void 0, (0, s.Z)("span", {
                                            className: "label s-font-body"
                                        }, void 0, e))))
                                    }))
                                },
                                y = i,
                                k = K.fromJS({});
                            u || (y = S()(i).call(i, 0, 7), k = S()(i).call(i, 7));
                            var x = f[t];
                            return (0, s.Z)("div", {
                                className: "option option-".concat(t)
                            }, void 0, (0, s.Z)("div", {
                                className: "title"
                            }, void 0, g), t === r.PRICES ? function(t) {
                                var i, o = (null == t ? void 0 : t.get("min")) / 100,
                                    r = (null == t ? void 0 : t.get("max")) / 100;
                                r === o && r++;
                                var l = h[0] ? h[0] / 100 : o,
                                    d = h[1] ? h[1] / 100 : r,
                                    c = Math.max(o, l),
                                    u = Math.min(r, d),
                                    f = (r - o) / 20 || 1;
                                return (0, s.Z)("div", {
                                    className: Z()(i = "price-slider item price-slider-".concat(p, " ")).call(i, n ? "" : "disabled")
                                }, void 0, (0, s.Z)(z.Z, {
                                    range: !0,
                                    onChange: function(t) {
                                        n && function(t) {
                                            var i = e.props.allFilters,
                                                o = t[0],
                                                r = t[1],
                                                n = null == i ? void 0 : i.get("prices"),
                                                l = ((null == n ? void 0 : n.get("max")) - (null == n ? void 0 : n.get("min"))) / 100;
                                            100 * (r / l - o / l) <= 5 || a(P()(t).call(t, (function(t) {
                                                return 100 * t
                                            })))
                                        }(t)
                                    },
                                    onAfterChange: v,
                                    min: o,
                                    max: r,
                                    disabled: !n,
                                    step: f,
                                    tipFormatter: null,
                                    value: [c, u]
                                }, void 0, e.renderMarks(c, u)))
                            }(i) : (0, s.Z)("div", {}, void 0, b(y), k.size > 0 && x && b(k), k.size > 0 && !x && (0, s.Z)("div", {
                                className: "view-all",
                                onClick: function() {
                                    return function(t) {
                                        if (n) {
                                            var i = V.assign({}, f, (0, m.Z)({}, t, !0));
                                            e.setState({
                                                showMoreFiltersMap: i
                                            })
                                        }
                                    }(t)
                                }
                            }, void 0, (0, s.Z)("p", {}, void 0, q("Sections|View All")), G || (G = (0, s.Z)(B.Z, {
                                type: "entypo-down-open-mini"
                            })))))
                        })), (0, m.Z)((0, u.Z)(e), "renderMobileFilter", (function() {
                            var t = e.props,
                                i = t.filterPopupVisible,
                                o = t.hideFilterPopup,
                                r = t.mobileFilterSearch;
                            return (0, s.Z)(R.Z, {
                                className: "product-filter-popup",
                                closable: !1,
                                maskClosable: !0,
                                onCancel: o,
                                visible: i,
                                style: {}
                            }, void 0, (0, s.Z)("div", {
                                className: "container"
                            }, void 0, e.renderFilterList()), (0, s.Z)("div", {
                                className: "btn"
                            }, void 0, (0, s.Z)(U.Z, {
                                className: "gray",
                                onClick: r
                            }, void 0, q("Ecommerce|Ok"))))
                        })), e.state = {
                            showMoreFiltersMap: {}
                        }, e
                    }
                    return (0, c.Z)(n, [{
                        key: "componentDidUpdate",
                        value: function() {
                            this.changeMarkPosition(), W(".product-filter-popup").parent(".s-kit-modal-wrap").css("overflow", "hidden")
                        }
                    }, {
                        key: "getMarksOffset",
                        value: function(t) {
                            return Math.max(D()("".concat(t)), 0)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props.isMobile;
                            return (0, s.Z)("div", {
                                className: "product-filter-container"
                            }, void 0, t ? this.renderMobileFilter() : this.renderFilterList())
                        }
                    }]), n
                }(O.Component),
                X = (0, T.connect)((function() {
                    return {
                        isMobile: screen.width <= 726
                    }
                }), {})(Q)
        },
        781215: function(t, e, i) {
            "use strict";
            var o = i(501068),
                r = i(663978),
                n = i(60530)(i(60530));
            r(e, "__esModule", {
                value: !0
            });
            var l = i(726394),
                a = (0, n.default)(l),
                s = i(569198),
                d = (0, n.default)(s),
                c = i(351379),
                u = (0, n.default)(c),
                p = i(900214),
                f = (0, n.default)(p),
                g = i(566380),
                m = (0, n.default)(g),
                h = i(366757),
                v = (0, n.default)(h),
                b = i(45697),
                y = ((0, n.default)(b), i(454275)),
                k = (0, n.default)(y),
                P = i(205223),
                x = (0, n.default)(P),
                C = i(266004);
            var F = function(t) {
                    var e = function(t) {
                        (0, u.default)(n, t);
                        var e, i, r = (e = n, i = function() {
                            if ("undefined" == typeof Reflect || !o) return !1;
                            if (o.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function() {
                            var t, r = (0, m.default)(e);
                            if (i) {
                                var n = (0, m.default)(this).constructor;
                                t = o(r, arguments, n)
                            } else t = r.apply(this, arguments);
                            return (0, f.default)(this, t)
                        });

                        function n() {
                            return (0, a.default)(this, n), r.apply(this, arguments)
                        }
                        return (0, d.default)(n, [{
                            key: "render",
                            value: function() {
                                return v.default.createElement(k.default, this.props)
                            }
                        }]), n
                    }(v.default.Component);
                    return (0, x.default)(e, [], (function() {
                        return {
                            isCategoryIdExist: function(e) {
                                return t.isCategoryIdExist(e)
                            }
                        }
                    }))
                },
                S = F((0, n.default)(C).default);
            S.createCategoryBar = F, e.default = S, t.exports = e.default
        },
        990415: function(t, e, i) {
            "use strict";
            var o = i(353147),
                r = i(663978),
                n = i(60530)(i(60530));
            r(e, "__esModule", {
                value: !0
            });
            var l, a, s, d, c = i(205872),
                u = (0, n.default)(c),
                p = i(812077),
                f = (0, n.default)(p),
                g = i(359036),
                m = (0, n.default)(g),
                h = i(694473),
                v = (0, n.default)(h),
                b = i(703649),
                y = ((0, n.default)(b), i(492762)),
                k = (0, n.default)(y),
                P = i(620116),
                x = (0, n.default)(P),
                C = i(981643),
                F = (0, n.default)(C),
                S = i(394198),
                _ = (0, n.default)(S),
                M = i(2991),
                N = (0, n.default)(M),
                E = i(678580),
                w = (0, n.default)(E),
                Z = i(62462),
                I = (0, n.default)(Z),
                D = i(778914),
                O = (0, n.default)(D),
                T = i(977766),
                L = (0, n.default)(T),
                z = i(54103),
                B = (0, n.default)(z);
            i(974916), i(323123), i(569600);
            var R = i(366757),
                U = (0, n.default)(R),
                V = i(45697),
                W = (0, n.default)(V),
                A = i(868309),
                j = (0, n.default)(A),
                J = i(183123),
                G = (0, n.default)(J),
                H = i(294184),
                K = (0, n.default)(H),
                q = i(189705),
                Q = ((0, n.default)(q), i(143393)),
                X = (0, n.default)(Q),
                Y = i(805803),
                $ = i(223336),
                tt = (0, n.default)($),
                et = i(399069),
                it = (0, n.default)(et),
                ot = i(141655),
                rt = ((0, n.default)(ot), i(345129)),
                nt = (0, n.default)(rt),
                lt = i(234584),
                at = (0, n.default)(lt),
                st = i(80827),
                dt = (0, n.default)(st),
                ct = i(266004),
                ut = (0, n.default)(ct),
                pt = i(230139),
                ft = (0, n.default)(pt),
                gt = i(786483),
                mt = ((0, n.default)(gt), i(174001)),
                ht = (0, n.default)(mt),
                vt = i(869371),
                bt = (0, n.default)(vt),
                yt = i(489053),
                kt = (0, n.default)(yt),
                Pt = i(781215),
                xt = (0, n.default)(Pt),
                Ct = i(818166),
                Ft = (0, n.default)(Ct),
                St = i(43138),
                _t = (0, n.default)(St),
                Mt = i(918186),
                Nt = ((0, n.default)(Mt), i(513495)),
                Et = (0, n.default)(Nt),
                wt = i(285072),
                Zt = (0, n.default)(wt),
                It = i(105001),
                Dt = i(500134),
                Ot = i(607947),
                Tt = (0, n.default)(Ot),
                Lt = i(496486),
                zt = (0, n.default)(Lt),
                Bt = i(344711),
                Rt = ((0, n.default)(Bt), i(590936)),
                Ut = (0, n.default)(Rt),
                Vt = i(732661).Z,
                Wt = !1,
                At = it.default.createPageComponent({
                    displayName: "Ecommerce",
                    mixins: [(0, ft.default)("editor"), Zt.default],
                    bobcatPropTypes: {
                        data: {
                            text: W.default.string,
                            category: W.default.oneOfType([W.default.string, W.default.number]),
                            binding: W.default.object
                        },
                        internal: {
                            onConnectionFailed: W.default.func
                        }
                    },
                    componentWillMount: function() {
                        var t = this,
                            e = this._getProperLocation().pathname.split("/");
                        this.initMeta({
                            currentCategory: Ft.default.isInStorePage() ? ut.default.getCategoryIdByName(e.pop()) : this.dtProps.category,
                            nextCategory: this.dtProps.category,
                            currentPage: 1,
                            detailMode: !1
                        }), this.setState({
                            selectedFilters: X.default.fromJS({}),
                            filterPopupVisible: !1,
                            isShowEcommerceTooltip: !1,
                            isFirstFetch: !0,
                            isAiSite: !1
                        }), Ut.default.subCloseProductManagement((function(e, i) {
                            var o = i.reloadProduct,
                                r = i.from;
                            o && t._loadProductsFromServer(void 0, void 0, void 0, void 0, void 0, r)
                        }))
                    },
                    componentDidMount: function() {
                        var t = this;
                        this._loadProductsFromServer(), ut.default.getFistLoadingState("settings") && nt.default.getEcommerceSettings({
                            pageId: at.default.getId()
                        }), ut.default.getFistLoadingState("categories") && nt.default.getEcommerceCategories({
                            pageId: at.default.getId()
                        }), this._token = ht.default.register((function(t) {
                            if (t.actionType === bt.default.ActionTypes.GET_ECOMMERCE_PRODUCTS_SUCCESS && !Wt) {
                                Wt = !0;
                                var e = i(796764);
                                e.init(), e.trackEcommerceBuyerEvent(G.default.getKeenIoEcommerceBuyerLanding())
                            }
                        })), this._onCategoryChangeListenId = ut.default.getCategoriesBinding().addListener("", this._onCategoryChange), (0, tt.default)(window).on("resize.ecommerce", Tt.default.debounce((function() {
                            return t.forceUpdate()
                        }), 300))
                    },
                    componentDidUpdate: function(t, e) {
                        var i, o;
                        this._getRenderCategory(this.dtProps.category) === this._getRenderCategory(t.category) && t.category === this.dtProps.category && (null === (i = t.layoutConfig) || void 0 === i ? void 0 : i.get("productPerPage")) === (null === (o = this.dtProps.layoutConfig) || void 0 === o ? void 0 : o.get("productPerPage")) || ("all" === this._getRenderCategory(this.dtProps.category) || "all" === this.dtProps.category ? (this.setMeta("nextCategory", "all"), this.setMeta("currentCategory", "all"), this.setMeta("currentPage", 1)) : (this.setMeta("nextCategory", this.dtProps.category), this.setMeta("currentCategory", this.dtProps.category), this.setMeta("currentPage", 1)), this._loadProductsFromServer(1, null))
                    },
                    componentWillUnmount: function() {
                        ht.default.unregister(this._token), ut.default.getCategoriesBinding().removeListener(this._onCategoryChangeListenId), (0, tt.default)(window).off("resize.ecommerce")
                    },
                    _getProperLocation: function() {
                        return location
                    },
                    _changeRouteByCategoryId: function(t) {
                        var e = ut.default.getCategories(),
                            i = (0, v.default)(e).call(e, (function(e) {
                                return e.id === t
                            })) || {
                                name: ""
                            };
                        history.replaceState({}, "/store/categories", "/store/categories/".concat(i.name))
                    },
                    _onCategoryChange: function() {
                        var t = this;
                        return this.setTimeout((function() {
                            return t._loadProductsFromServer(1, null)
                        }), 10)
                    },
                    _getProductsData: function() {
                        var t = this.props,
                            e = t.layoutConfig,
                            i = t.sectionId,
                            o = t.category,
                            r = (null == e ? void 0 : e.get("productPerPage")) || 20;
                        if (this.shouldUseDummy()) {
                            var n = this._getDummyDataInSectionSelector();
                            return (0, k.default)(n).call(n, r, n.length), n
                        }
                        return ut.default.getSectionProducts(this.getMeta("currentPage"), i, r, "visible", o || "all")
                    },
                    _getDummyDataInSectionSelector: function() {
                        var t = this.props.templateDummyData,
                            e = void 0 === t ? [] : t,
                            i = (0, m.default)(e) || [],
                            o = this.getMeta("currentCategory");
                        return o && "all" !== o ? (0, x.default)(i).call(i, (function(t) {
                            var e = t.categoryIds,
                                i = void 0 === e ? [] : e;
                            return -1 !== (0, F.default)(i).call(i, (0, _.default)(o))
                        })) || [] : i
                    },
                    _getEcommerceSectionShowDummyData: function() {
                        var t = this.props.sectionId;
                        return ut.default.getEcommerceSectionShowDummyData(t)
                    },
                    _getEditBtnText: function() {
                        var t = this._getProductsData().length;
                        return o(0 === t ? "Ecommerce|Add Product" : 1 === t ? "Ecommerce|Manage Product" : "Ecommerce|Manage Products")
                    },
                    _getRenderCategory: function(t) {
                        var e = "all" === t ? this.getMeta("currentCategory") : t;
                        return ut.default.isCategoryIdExist(e) || (e = "all"), e
                    },
                    _loadProductsFromServer: function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            i = arguments.length > 1 ? arguments[1] : void 0,
                            o = arguments.length > 2 ? arguments[2] : void 0,
                            r = arguments.length > 3 ? arguments[3] : void 0,
                            n = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                            l = arguments.length > 5 ? arguments[5] : void 0;
                        this.setMeta("currentPage", e);
                        var a = this.props,
                            s = a.layoutConfig,
                            d = a.sectionId,
                            c = this.state.isFirstFetch;
                        if (!this.shouldUseDummy()) {
                            var u = this.state.filterData,
                                p = (null == s ? void 0 : s.get("productPerPage")) || 20,
                                f = nt.default.getEcommerceProducts({
                                    pageId: at.default.getId(),
                                    category: i || this._getRenderCategory(this.getMeta("currentCategory")),
                                    page: e,
                                    needRefresh: !0,
                                    reloadProducts: n,
                                    needFilterOptions: !0,
                                    filters: u,
                                    sectionId: d,
                                    per: p,
                                    filter: "visible",
                                    isNextPage: o,
                                    needUpdateProducts: r,
                                    from: l
                                });
                            return f ? (c && (window.ssrIsLoaded && 1 !== e ? this.setState({
                                isFirstFetch: !1
                            }) : window.ssrIsLoaded || this.setState({
                                isFirstFetch: !1
                            })), f.fail((function() {
                                return t.props.onConnectionFailed()
                            }))) : void 0
                        }
                    },
                    shouldUseDummy: function() {
                        var t = this.props,
                            e = t.templateDummyData;
                        return t.inSectionSelector && e
                    },
                    _getCurrentPageNum: function() {
                        return this.getMeta("currentPage")
                    },
                    _loadNextPage: function() {
                        var t = this._getCurrentPageNum();
                        return this.setMeta("currentPage", t + 1), this._loadProductsFromServer(t + 1, null, !0, !1, !1)
                    },
                    _onClickEditor: function(t) {},
                    toggleTooltip: function(t) {
                        this._getEcommerceSectionShowDummyData() && this.setState({
                            isShowEcommerceTooltip: t
                        })
                    },
                    publishOpenSideMenuTabPanel: function(t) {},
                    _changeCategory: function(t) {
                        return Ft.default.isInStorePage() && this._changeRouteByCategoryId(t), this.setMeta("currentCategory", t), this._changePrices([]), this._loadProductsWithFilters(t, !0)
                    },
                    _changeToDetailMode: function() {
                        return this.setMeta("detailMode", !0)
                    },
                    _changeToNormalMode: function() {
                        return this.setMeta("detailMode", !1)
                    },
                    _getCategoryBarProps: function() {
                        return {
                            currentCategory: this.getMeta("currentCategory"),
                            changeCategory: this._changeCategory,
                            categories: ut.default.getCategories(),
                            editPanel: ""
                        }
                    },
                    _getWrapperProps: function() {
                        var t = this.props,
                            e = t.layoutConfig,
                            i = t.layout,
                            o = t.category,
                            r = t.isPreviewMode,
                            n = t.sectionStyleProps;
                        return {
                            products: this._getProductsData(),
                            pageId: at.default.getId(),
                            hasMultipleProducts: this._getProductsData().length >= 2,
                            settings: ut.default.getSettings(),
                            cartData: dt.default.getCart(),
                            layout: i || "landscape-one",
                            category: o || "all",
                            changeToDetailMode: this._changeToDetailMode,
                            changeToNormalMode: this._changeToNormalMode,
                            layoutConfig: e,
                            showDummyData: this._getEcommerceSectionShowDummyData(),
                            isPreviewMode: r,
                            sectionStyleProps: n
                        }
                    },
                    _getVisibleFilterOptions: function() {
                        var t = this.props.sectionId,
                            e = (ut.default.getSettings() || {}).productFilters,
                            i = zt.default.isEmpty(e) ? [] : e,
                            o = ut.default.getEcommerceSectionFilters(t);
                        return !o || o.size <= 0 ? null : (0, N.default)(o).call(o, (function(t, e) {
                            return "dimensions" === e ? t && (0, x.default)(t).call(t, (function(t, e) {
                                return (0, w.default)(i).call(i, e)
                            })) : (0, w.default)(i).call(i, e) ? t : void 0
                        }))
                    },
                    _resetFilters: function() {
                        var t = this;
                        this.setState({
                            selectedFilters: X.default.fromJS({}),
                            filterData: ""
                        }, (function() {
                            t._loadProductsFromServer(1, t._getRenderCategory(t.getMeta("currentCategory")), null, !1, !1)
                        }))
                    },
                    _changeFilters: function(t, e) {
                        var i = this,
                            o = this.state.selectedFilters,
                            r = o.get(t) || [],
                            n = (0, I.default)(r).call(r, (function(t) {
                                return t === e
                            }));
                        n < 0 ? r.push(e) : (0, k.default)(r).call(r, n, 1);
                        var l = r.length > 0 ? o.set(t, (0, m.default)(r)) : o.delete(t);
                        this.setState({
                            selectedFilters: l
                        }, (function() {
                            _t.default.isMobile() || i._loadProductsWithFilters(null, !1, !1, !0)
                        }))
                    },
                    _changePrices: function(t) {
                        var e = this.state.selectedFilters,
                            i = this._getVisibleFilterOptions(),
                            o = i.get("prices") && i.get("prices").get("min"),
                            r = i.get("prices") && i.get("prices").get("max"),
                            n = t[0],
                            l = t[1],
                            a = t;
                        o === n && r === l && (a = []);
                        var s = e.set("prices", a);
                        this.setState({
                            selectedFilters: s
                        })
                    },
                    _afterChangePrice: function() {
                        var t = this;
                        _t.default.isMobile() || zt.default.debounce((function() {
                            t._loadProductsWithFilters()
                        }), 600)()
                    },
                    _toggleFilterPopup: function() {
                        this.setState({
                            filterPopupVisible: !this.state.filterPopupVisible
                        })
                    },
                    _mobileFilterSearch: function() {
                        this._loadProductsWithFilters(), this._toggleFilterPopup()
                    },
                    _loadProductsWithFilters: function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            n = this._getFilterParams(i);
                        this.setState({
                            filterData: n
                        }, (function() {
                            return t._loadProductsFromServer(1, e || t._getRenderCategory(t.getMeta("currentCategory")), !1, o, r)
                        }))
                    },
                    _getFilterParams: function(t) {
                        var e = this,
                            i = this.state.selectedFilters,
                            o = [];
                        return (0, O.default)(i).call(i, (function(i, r) {
                            if ("prices" == r) {
                                if (!t) {
                                    var n, l, a = e._getVisibleFilterOptions(),
                                        s = null === (n = a.get("prices")) || void 0 === n ? void 0 : n.get("min"),
                                        d = null === (l = a.get("prices")) || void 0 === l ? void 0 : l.get("max"),
                                        c = i[0],
                                        u = i[1];
                                    c && s !== c && o.push("price[min]=".concat((0, _.default)(c))), u && d !== u && o.push("price[max]=".concat((0, _.default)(u)))
                                }
                            } else(0, O.default)(i).call(i, (function(t) {
                                if (t) {
                                    var e, i = encodeURIComponent(t);
                                    "productOptions" === r ? o.push("options[]=".concat(i)) : o.push((0, L.default)(e = "dimensions[".concat(encodeURIComponent(r), "][]=")).call(e, i))
                                }
                            }))
                        })), o.join("&")
                    },
                    renderTooltipTilte: function() {
                        return U.default.createElement(U.default.Fragment, null, o("Editor|These sample products won’t be shown on your live site. And the samples will be removed when you add your own products."), l || (l = (0, f.default)("br", {})), o("Editor|Click here to add your own products!"))
                    },
                    renderProductFilterSkeleton: function() {
                        return a || (a = (0, f.default)("div", {
                            className: "s-product-filter-skeleton-wrapper"
                        }, void 0, (0, f.default)("div", {
                            className: "skeleton-line"
                        }), (0, f.default)("div", {
                            className: "skeleton-border-line"
                        }), (0, f.default)("div", {
                            className: "skeleton-line"
                        })))
                    },
                    render: function() {
                        var t, e, i, r = this,
                            n = this.props,
                            l = n.sectionId,
                            a = n.inSectionSelector,
                            c = n.layoutConfig,
                            p = n.sectionStyleProps,
                            g = this.state,
                            m = g.isFirstFetch,
                            h = g.selectedFilters,
                            v = g.filterPopupVisible,
                            b = g.isShowEcommerceTooltip;
                        this.observeBinding(ut.default.getBinding()), this.observeBinding(dt.default.getCartBinding());
                        var y = "filter" === this.props.layout.split("-")[2],
                            k = this._getVisibleFilterOptions(),
                            P = (_t.default.isMobile(), (0, x.default)(t = this._getProductsData()).call(t, (function(t) {
                                return "visible" === t.status
                            }))),
                            C = P && P.length > 0,
                            F = ut.default.getPagination(this.getMeta("currentCategory")),
                            S = this.getMeta("detailMode"),
                            _ = this._getEditBtnText(),
                            M = !m && (ut.default.getLoadingState("product") || ut.default.getLoadingState("settings") || ut.default.getLoadingState("category")),
                            N = ut.default.getFistLoadingState("categories") || ut.default.getFistLoadingState("settings"),
                            E = "persona" === at.default.getTheme().get("name") ? "" : "sixteen columns",
                            w = G.default.getFromSiteToApp(),
                            Z = (0, f.default)("div", {
                                className: "".concat(E, " s-ecommerce-empty-box s-common-status no-float")
                            }, void 0, s || (s = (0, f.default)("div", {
                                className: "tags"
                            }, void 0, (0, f.default)("div", {
                                className: "fa fa-tag"
                            }), (0, f.default)("div", {
                                className: "entypo-bag"
                            }), (0, f.default)("div", {
                                className: "fa fa-shopping-cart"
                            }))), (0, f.default)("div", {
                                className: "text s-font-body"
                            }, void 0, o("Ecommerce|No products in this shop now!"))),
                            I = (F || {}).totalPages;
                        if (this.shouldUseDummy()) {
                            var D = (null == c ? void 0 : c.get("productPerPage")) || 20,
                                O = this._getDummyDataInSectionSelector();
                            I = Math.ceil(O.length / D)
                        }
                        var T = I >= 2 && (w ? (0, f.default)("div", {
                            className: "s-ecommerce-pagination"
                        }, void 0, (0, f.default)(Y.Link, {
                            className: "s-ecommerce-pagination-item s-font-body",
                            to: "/store/page?category=".concat(this.getMeta("currentCategory"))
                        }, void 0, o("Ecommerce|View more"))) : (0, f.default)("div", {
                            className: "s-ecommerce-pagination"
                        }, void 0, I > this._getCurrentPageNum() && (0, f.default)(Et.default, {
                            component: "span",
                            className: "s-common-button s-small-button s-font-body",
                            onClick: this._loadNextPage,
                            sectionStyleProps: p
                        }, void 0, o("Load More"))));
                        return U.default.createElement("div", {
                            className: "s-component s-ecommerce",
                            ref: "root"
                        }, (0, f.default)("div", {
                            className: "s-ecommerce-content"
                        }, void 0, ut.default.getCategories().length > 0 && ("all" === this.dtProps.category || !ut.default.isCategoryIdExist(this.dtProps.category)) && !this.shouldUseDummy() && (0, f.default)("div", {
                            className: "persona" === at.default.getTheme().get("name") ? "" : "sixteen columns",
                            style: {
                                display: S ? "none" : "block"
                            }
                        }, void 0, U.default.createElement(xt.default, (0, u.default)({
                            sbClass: this.props.sbClass
                        }, this._getCategoryBarProps()), !a && (0, f.default)("div", {
                            className: "s-component-editor-wrapper"
                        }, void 0, (0, f.default)("div", {
                            className: (0, K.default)("s-component-overlay", {
                                visible: G.default.getInWeChat()
                            }),
                            onClick: function() {
                                return r._onClickEditor({
                                    tab: "category"
                                })
                            }
                        }, void 0, (0, f.default)("div", {
                            className: "overlay"
                        }, void 0, (0, f.default)("div", {
                            className: "center"
                        }, void 0, (0, f.default)("span", {}, void 0, o("Ecommerce|Manage Categories")))))))), M && !this.shouldUseDummy() && (0, f.default)("div", {
                            className: (0, K.default)("s-loading-wrapper", {
                                "relative-wrapper": !this._getProductsData().length
                            })
                        }, void 0, d || (d = (0, f.default)("div", {
                            className: "s-loading"
                        }))), (0, f.default)("div", {
                            className: "s-ecommerce-wrapper"
                        }, void 0, y && !this.shouldUseDummy() && (0, f.default)("div", {
                            className: "s-product-filter-wrapper"
                        }, void 0, U.default.createElement(U.default.Fragment, null, (0, f.default)("div", {
                            className: "s-product-filter"
                        }, void 0, (0, f.default)("div", {
                            className: "s-component-editor-wrapper"
                        }, void 0, !1), (0, f.default)(Vt, {
                            allFilters: k,
                            selectedFilters: h,
                            changeFilter: this._changeFilters,
                            afterChangePrice: this._afterChangePrice,
                            filterPopupVisible: v,
                            changePrice: this._changePrices,
                            resetFilter: this._resetFilters,
                            canEdit: !0,
                            hideFilterPopup: this._toggleFilterPopup,
                            mobileFilterSearch: this._mobileFilterSearch,
                            sectionId: l,
                            settings: ut.default.getSettings(),
                            isInSection: !0
                        })), (0, f.default)(Dt.Button, {
                            icon: "fa-filter",
                            className: "s-product-filter-btn gray",
                            onClick: this._toggleFilterPopup
                        }, void 0, o("Ecommerce|Filter Products")))), !C && k && k.size > 0 && y && (0, f.default)("div", {
                            className: "reset-filter s-font-body"
                        }, void 0, o("Ecommerce|No results found."), " ", (0, f.default)("span", {
                            onClick: this._resetFilters
                        }, void 0, o("Reset filter"))), U.default.createElement(kt.default, (0, u.default)({}, this._getWrapperProps(), {
                            isLoading: M,
                            isFirstLoading: N,
                            EmptyComponent: Z,
                            showFilter: y,
                            inSectionSelector: a,
                            PaginationComponent: T
                        }), !M && !this.shouldUseDummy() && (0, f.default)("div", {
                            className: "s-component-editor-wrapper"
                        }, void 0, (0, f.default)("div", {
                            onMouseEnter: (0, B.default)(e = this.toggleTooltip).call(e, this, !0),
                            onMouseLeave: (0, B.default)(i = this.toggleTooltip).call(i, this, !1),
                            className: "s-component-overlay".concat(G.default.getInWeChat() ? " visible" : ""),
                            onClick: function() {
                                return r._onClickEditor({
                                    category: r.getMeta("currentCategory"),
                                    tab: "product"
                                })
                            }
                        }, void 0, (0, f.default)("div", {
                            className: "overlay"
                        }, void 0, (0, f.default)("div", {
                            className: "center"
                        }, void 0, (0, f.default)(Dt.Tooltip, {
                            getPopupContainer: function(t) {
                                return null == t ? void 0 : t.parentNode
                            },
                            destroyTooltipOnHide: !0,
                            visible: b,
                            title: this.renderTooltipTilte()
                        }, void 0, (0, f.default)("span", {}, void 0, _))))))))))
                    }
                }),
                jt = (0, It.addOffline)(At);
            At.WaypointLazy = (0, j.default)(jt), e.default = jt, t.exports = e.default
        },
        293052: function(t, e, i) {
            (e = i(923645)(!1)).push([t.id, ".product-filter-container,\n.product-filter-popup {\n  width: 225px;\n  padding: 0 10px 15px 14px;\n}\n.product-filter-container .editor-item,\n.product-filter-popup .editor-item {\n  margin-bottom: 10px;\n}\n.product-filter-container .editor-item .label-panel,\n.product-filter-popup .editor-item .label-panel {\n  display: inline-block;\n  text-transform: capitalize;\n}\n.product-filter-container .editor-item .label-panel .label,\n.product-filter-popup .editor-item .label-panel .label {\n  margin-right: 5px;\n}\n.product-filter-container .editor-item .label-panel .sub-label,\n.product-filter-popup .editor-item .label-panel .sub-label {\n  color: #c6c9cd;\n  text-transform: capitalize;\n}\n.product-filter-container .top-bar .title,\n.product-filter-popup .top-bar .title,\n.product-filter-container .list .title,\n.product-filter-popup .list .title {\n  color: #4b5056;\n  font-weight: bold;\n}\n.product-filter-container .top-bar .s-kit-checkbox,\n.product-filter-popup .top-bar .s-kit-checkbox,\n.product-filter-container .list .s-kit-checkbox,\n.product-filter-popup .list .s-kit-checkbox {\n  vertical-align: middle;\n}\n.product-filter-container .top-bar .s-kit-checkbox .s-kit-checkbox-input,\n.product-filter-popup .top-bar .s-kit-checkbox .s-kit-checkbox-input,\n.product-filter-container .list .s-kit-checkbox .s-kit-checkbox-input,\n.product-filter-popup .list .s-kit-checkbox .s-kit-checkbox-input {\n  vertical-align: text-top;\n}\n.product-filter-container .top-bar,\n.product-filter-popup .top-bar {\n  display: flex;\n  border-bottom: 1px solid #E2E4E7;\n  margin-bottom: 15px;\n  padding-bottom: 15px;\n}\n.product-filter-container .top-bar .title,\n.product-filter-popup .top-bar .title {\n  flex: 1;\n  font-size: 14px;\n}\n.product-filter-container .top-bar .reset,\n.product-filter-popup .top-bar .reset {\n  margin: auto;\n  font-size: 14px;\n  color: #636972;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.product-filter-container .list,\n.product-filter-popup .list {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.product-filter-container .list .option,\n.product-filter-popup .list .option {\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #E2E4E7;\n}\n.product-filter-container .list .option.option-prices .title,\n.product-filter-popup .list .option.option-prices .title {\n  margin-bottom: 0px;\n}\n.product-filter-container .list .option .title,\n.product-filter-popup .list .option .title {\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-transform: capitalize;\n}\n.product-filter-container .list .option .item:not(:last-child),\n.product-filter-popup .list .option .item:not(:last-child) {\n  margin-bottom: 10px;\n}\n.product-filter-container .list .option .item .label-panel,\n.product-filter-popup .list .option .item .label-panel {\n  text-transform: capitalize;\n  display: inline-block;\n}\n.product-filter-container .list .option .item.price-slider .s-kit-slider,\n.product-filter-popup .list .option .item.price-slider .s-kit-slider {\n  width: 206px;\n  margin: 10px 7px;\n  padding: 4px 0;\n  display: inline-block;\n  text-align: center;\n}\n.product-filter-container .list .option .item.price-slider .s-kit-slider .s-kit-slider-rail,\n.product-filter-popup .list .option .item.price-slider .s-kit-slider .s-kit-slider-rail,\n.product-filter-container .list .option .item.price-slider .s-kit-slider .s-kit-slider-track,\n.product-filter-popup .list .option .item.price-slider .s-kit-slider .s-kit-slider-track {\n  height: 4px;\n  width: 100%;\n  border-radius: 4px;\n  top: 6px;\n  color: #E2E4E7;\n  background: #E2E4E7;\n}\n.product-filter-container .list .option .item.price-slider .s-kit-slider .price-slider-marks,\n.product-filter-popup .list .option .item.price-slider .s-kit-slider .price-slider-marks {\n  color: #4b5056;\n  margin-top: 15px;\n  position: relative;\n  margin-left: -6px;\n  font-size: 12px;\n}\n.product-filter-container .list .option .item.price-slider .s-kit-slider .price-slider-marks span,\n.product-filter-popup .list .option .item.price-slider .s-kit-slider .price-slider-marks span {\n  position: absolute;\n}\n.product-filter-container .list .option .item.price-slider .s-kit-slider .price-slider-marks .min-marks-text,\n.product-filter-popup .list .option .item.price-slider .s-kit-slider .price-slider-marks .min-marks-text {\n  left: 0;\n}\n.product-filter-container .list .option .item.price-slider .s-kit-slider .price-slider-marks .max-marks-text,\n.product-filter-popup .list .option .item.price-slider .s-kit-slider .price-slider-marks .max-marks-text {\n  right: 0;\n}\n.product-filter-container .list .option .item.price-slider .s-kit-slider .s-kit-slider-handle,\n.product-filter-popup .list .option .item.price-slider .s-kit-slider .s-kit-slider-handle {\n  width: 16px;\n  height: 16px;\n  border: 1px solid #636972;\n}\n.product-filter-container .list .option .item.price-slider .s-kit-slider .s-kit-slider-handle:hover,\n.product-filter-popup .list .option .item.price-slider .s-kit-slider .s-kit-slider-handle:hover,\n.product-filter-container .list .option .item.price-slider .s-kit-slider .s-kit-slider-handle:active,\n.product-filter-popup .list .option .item.price-slider .s-kit-slider .s-kit-slider-handle:active {\n  transform: scale(1);\n  box-shadow: none;\n}\n.product-filter-container .list .option .item.price-slider .s-kit-slider-mark,\n.product-filter-popup .list .option .item.price-slider .s-kit-slider-mark {\n  margin-top: 10px;\n}\n.product-filter-container .list .option .item.price-slider.disabled .s-kit-slider-handle:hover,\n.product-filter-popup .list .option .item.price-slider.disabled .s-kit-slider-handle:hover,\n.product-filter-container .list .option .item.price-slider.disabled .s-kit-slider-handle:active,\n.product-filter-popup .list .option .item.price-slider.disabled .s-kit-slider-handle:active {\n  transform: scale(1);\n  box-shadow: none;\n  border: 1px solid #636972;\n}\n.product-filter-container .list .option .view-all,\n.product-filter-popup .list .option .view-all {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: #636972;\n  opacity: 0.6;\n  padding-left: 19px;\n  cursor: pointer;\n  text-transform: lowercase;\n}\n.product-filter-container .list .option .view-all p,\n.product-filter-popup .list .option .view-all p {\n  display: inline-block;\n}\n.product-filter-container .list .option .view-all p::first-letter,\n.product-filter-popup .list .option .view-all p::first-letter {\n  text-transform: uppercase;\n}\n.product-filter-container .list .option .view-all p:hover,\n.product-filter-popup .list .option .view-all p:hover {\n  text-decoration: underline;\n}\n.product-filter-container .list {\n  max-height: 1200px;\n}\n.product-filter-popup {\n  height: 80%;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n.product-filter-popup .s-kit-modal-content {\n  height: 100%;\n  margin: 15px;\n}\n.product-filter-popup .s-kit-modal-content .s-kit-modal-body {\n  height: 100%;\n  position: relative;\n  box-sizing: border-box;\n}\n.product-filter-popup .s-kit-modal-content .container {\n  height: 100%;\n  padding-bottom: 60px;\n  overflow-y: auto;\n  box-sizing: border-box;\n}\n.product-filter-popup .s-kit-modal-content .list {\n  height: auto;\n  overflow: hidden;\n}\n.product-filter-popup .s-kit-modal-content .list .option .price-slider .s-kit-slider {\n  width: 94%;\n}\n.product-filter-popup .s-kit-modal-content .btn {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 0 22px;\n  background-color: #ffffff;\n}\n.product-filter-popup .s-kit-modal-content .btn .s-kit-btn {\n  width: 220px;\n  height: 36px;\n  background-color: #ffffff;\n}\n", ""]), t.exports = e
        }
    }
]);