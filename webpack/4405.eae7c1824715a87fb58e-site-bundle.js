/*! For license information please see 4405.eae7c1824715a87fb58e-site-bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [4405], {
        298657: function(t, e, n) {
            n.r(e);
            var a = n(468420),
                o = n(844845),
                i = function t() {
                    (0, a.Z)(this, t)
                };
            (0, o.Z)(i, "NATIVE_UPDATE_DATA", "NATIVE_UPDATE_DATA"), (0, o.Z)(i, "SCROLL_TO_SECTION", "SCROLL_TO_SECTION"), (0, o.Z)(i, "EXTERNAL_UPDATE_TEXT", "EXTERNAL_UPDATE_TEXT"), (0, o.Z)(i, "EXTERNAL_UPDATE_IMAGE", "EXTERNAL_UPDATE_IMAGE"), (0, o.Z)(i, "EXTERNAL_ADD_TO_GALLERY", "EXTERNAL_ADD_TO_GALLERY"), (0, o.Z)(i, "EXTERNAL_ADD_TO_ASSET_LIBRARY", "EXTERNAL_ADD_TO_ASSET_LIBRARY"), (0, o.Z)(i, "OPEN_SECTION_SELECTOR", "OPEN_SECTION_SELECTOR"), (0, o.Z)(i, "CHANGE_SECTION_NAME", "CHANGE_SECTION_NAME"), (0, o.Z)(i, "DELETE_SECTION", "DELETE_SECTION"), (0, o.Z)(i, "REORDER_SECTIONS", "REORDER_SECTIONS"), (0, o.Z)(i, "CLOSE_SECTION_SELECTOR", "CLOSE_SECTION_SELECTOR"), (0, o.Z)(i, "TOGGLE_SECTION_SELECTOR", "TOGGLE_SECTION_SELECTOR"), (0, o.Z)(i, "ADD_SECTION", "ADD_SECTION"), (0, o.Z)(i, "DELETE_ITEM", "DELETE_ITEM"), (0, o.Z)(i, "GALLERY_ADD_IMAGE", "GALLERY_ADD_IMAGE"), (0, o.Z)(i, "ADD_TO_ASSET_LIBRARY", "ADD_TO_ASSET_LIBRARY"), (0, o.Z)(i, "EDITOR_UNDO", "EDITOR_UNDO"), (0, o.Z)(i, "EDITOR_REDO", "EDITOR_REDO"), (0, o.Z)(i, "TOGGLE_SIDE_MENU", "TOGGLE_SIDE_MENU"), (0, o.Z)(i, "SIDE_MENU_DUPLICATE_SECTION", "SIDE_MENU_DUPLICATE_SECTION"), (0, o.Z)(i, "SIDE_MENU_RENAME_SECTION", "SIDE_MENU_RENAME_SECTION"), (0, o.Z)(i, "UPDATE_SHOW_SECTION_IN_NAV", "UPDATE_SHOW_SECTION_IN_NAV"), (0, o.Z)(i, "DELETE_EXTERNAL_LINK", "DELETE_EXTERNAL_LINK"), (0, o.Z)(i, "DELETE_DROPDOWN", "DELETE_DROPDOWN"), (0, o.Z)(i, "UPDATE_DROPDOWN", "UPDATE_DROPDOWN"), (0, o.Z)(i, "DELETE_PAGE", "DELETE_PAGE"), (0, o.Z)(i, "UPDATE_PAGE", "UPDATE_PAGE"), (0, o.Z)(i, "DELETE_LINK", "DELETE_LINK"), (0, o.Z)(i, "UPDATE_LINK", "UPDATE_LINK"), (0, o.Z)(i, "SWITCH_PAGE", "SWITCH_PAGE"), (0, o.Z)(i, "PULL_DOWN_AUDIENCE_PAGE", "PULL_DOWN_AUDIENCE_PAGE"), (0, o.Z)(i, "CLOSE_AUDIENCE_DETAIL", "CLOSE_AUDIENCE_DETAIL"), (0, o.Z)(i, "OPEN_AUDIENCE_DETAIL", "OPEN_AUDIENCE_DETAIL"), (0, o.Z)(i, "BLOG_SAVE_CONTENT", "BLOG_SAVE_CONTENT"), (0, o.Z)(i, "BLOG_SYNC_SETTING", "BLOG_SYNC_SETTING"), e.default = i
        },
        398193: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return r
                },
                setPageDataBinding: function() {
                    return s
                },
                updatePageData: function() {
                    return d
                },
                MOREARTY_STORE_CHANGE: function() {
                    return u
                }
            }), n(569600);
            var a, o = n(143393),
                i = "bobcat/page/update_page_data",
                u = "bobcat/page/morearty_store_change";

            function l(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                a.sub(t.join(".")).get() && a.sub(t.join(".")).merge(o.fromJS(e))
            }

            function r() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 ? arguments[1] : void 0;
                switch (e.type) {
                    case i:
                        return l(e.payload.path, e.payload.updateData), t;
                    case u:
                        return t + 1;
                    default:
                        return t
                }
            }

            function s(t) {
                a = t
            }

            function d(t, e) {
                return {
                    type: i,
                    payload: {
                        path: t,
                        updateData: e
                    }
                }
            }
        },
        947566: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var a = n(843296),
                o = n(234584);

            function i(t) {
                return a.get(o.getTheme().get("name")).defaultFonts[t].toLowerCase()
            }
        },
        839658: function(t, e, n) {
            var a = n(794500),
                o = n(143393),
                i = (0, a.createLogger)({
                    collapsed: !0,
                    predicate: function(t, e) {
                        return !1
                    },
                    stateTransformer: function(t) {
                        return (0, o.isImmutable)(t) ? t.toJS() : t
                    }
                });
            e.Z = i
        },
        451816: function(t, e, n) {
            n.d(e, {
                U: function() {
                    return U
                },
                O: function() {
                    return G
                }
            }), n(241539);
            var a = n(14310),
                o = n.n(a),
                i = n(620116),
                u = n.n(i),
                l = n(834074),
                r = n.n(l),
                s = n(778914),
                d = n.n(s),
                c = n(239649),
                f = n.n(c),
                g = n(820368),
                E = n.n(g),
                h = n(663978),
                _ = n.n(h),
                v = n(703649),
                T = n.n(v),
                m = n(666419),
                S = n.n(m),
                b = n(465420),
                p = n.n(b),
                y = n(619996),
                F = n.n(y),
                N = n(841511),
                D = n.n(N),
                A = n(844845),
                O = n(432366),
                I = n.n(O),
                L = n(686902),
                C = n.n(L),
                B = n(472739),
                w = n(143393);

            function P(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a
            }

            function R(t, e) {
                var n = C()(t);
                if (o()) {
                    var a = o()(t);
                    e && (a = u()(a).call(a, (function(e) {
                        return r()(t, e).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function U(t) {
                var e, n = (e = {}, {
                    getCount: function(t) {
                        return null == t ? 0 : e[t] || 0
                    },
                    add: function(t) {
                        null != t && (e[t] ? e[t]++ : e[t] = 1)
                    },
                    remove: function(t) {
                        return null != t && !!e[t] && (1 === e[t] ? (delete e[t], !0) : (e[t]--, !1))
                    }
                });
                for (var a in t.getReducerMap()) n.add(a);
                return {
                    reduce: I()(t),
                    getReducerMap: t.getReducerMap,
                    add: function(e, a) {
                        0 === n.getCount(e) && t.add(e, a), n.add(e)
                    },
                    remove: function(e) {
                        n.remove(e), 0 === n.getCount(e) && t.remove(e)
                    }
                }
            }

            function G(t) {
                var e = (0, B.combineReducers)(t),
                    n = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n, a = null != arguments[e] ? arguments[e] : {};
                            if (e % 2) d()(n = R(Object(a), !0)).call(n, (function(e) {
                                (0, A.Z)(t, e, a[e])
                            }));
                            else if (f()) E()(t, f()(a));
                            else {
                                var o;
                                d()(o = R(Object(a))).call(o, (function(e) {
                                    _()(t, e, r()(a, e))
                                }))
                            }
                        }
                        return t
                    }({}, t),
                    a = [];
                return {
                    getReducerMap: function() {
                        return n
                    },
                    reduce: function(t, n) {
                        if (a.length > 0) {
                            t = t;
                            var o, i = function(t, e) {
                                var n = void 0 !== p() && F()(t) || t["@@iterator"];
                                if (!n) {
                                    if (D()(t) || (n = function(t, e) {
                                            var n;
                                            if (t) {
                                                if ("string" == typeof t) return P(t, e);
                                                var a = T()(n = Object.prototype.toString.call(t)).call(n, 8, -1);
                                                return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? S()(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? P(t, e) : void 0
                                            }
                                        }(t)) || e && t && "number" == typeof t.length) {
                                        n && (t = n);
                                        var a = 0,
                                            o = function() {};
                                        return {
                                            s: o,
                                            n: function() {
                                                return a >= t.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: t[a++]
                                                }
                                            },
                                            e: function(t) {
                                                throw t
                                            },
                                            f: o
                                        }
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var i, u = !0,
                                    l = !1;
                                return {
                                    s: function() {
                                        n = n.call(t)
                                    },
                                    n: function() {
                                        var t = n.next();
                                        return u = t.done, t
                                    },
                                    e: function(t) {
                                        l = !0, i = t
                                    },
                                    f: function() {
                                        try {
                                            u || null == n.return || n.return()
                                        } finally {
                                            if (l) throw i
                                        }
                                    }
                                }
                            }(a);
                            try {
                                for (i.s(); !(o = i.n()).done;) {
                                    var u = o.value;
                                    t = t.remove(u)
                                }
                            } catch (t) {
                                i.e(t)
                            } finally {
                                i.f()
                            }
                            a = []
                        }
                        return void 0 === t && (t = (0, w.fromJS)({})), e(t, n)
                    },
                    add: function(t, a) {
                        t && !n[t] && (n[t] = a, e = W(n))
                    },
                    remove: function(t) {
                        t && n[t] && (delete n[t], a.push(t), e = W(n))
                    }
                }
            }

            function W(t) {
                return t && 0 !== C()(t).length ? (0, B.combineReducers)(t) : function(t, e) {
                    return t || null
                }
            }
        },
        80676: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return l
                }
            });
            var a = n(385002),
                o = n(118120),
                i = n(143393),
                u = n(876424);

            function l() {
                var t = (0, u.Z)(),
                    e = [(0, o.W)()],
                    l = n(108279).getSagaExtension;
                e.push(l()), e.push(t);
                var r = (0, a.createStore)((0, i.fromJS)({}), [], e);
                return r.replaceReducer(t.reducer), r
            }
        },
        876424: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return r
                }
            });
            var a = n(432366),
                o = n.n(a),
                i = n(451816),
                u = null,
                l = function(t, e) {
                    return u ? o()(u).call(u, t, e) : t || null
                },
                r = function() {
                    return {
                        onModuleAdded: function(t) {
                            ! function(t) {
                                if (t)
                                    if (u)
                                        for (var e in t) u.add(e, t[e]);
                                    else u = (0, i.U)((0, i.O)(t))
                            }(t.reducerMap)
                        },
                        onModuleRemoved: function(t) {
                            ! function(t) {
                                if (t && u)
                                    for (var e in t) u.remove(e)
                            }(t.reducerMap)
                        },
                        reducer: l
                    }
                }
        },
        505130: function(t, e, n) {
            n(663978)(e, "__esModule", {
                value: !0
            }), e.default = [{
                cssFallback: "sans-serif",
                cssValue: "Open Sans, Lucida Grande, Verdana, Pingfang SC, Pingfang TC, Hiragino Sans GB, Microsoft YaHei, sans-serif",
                disableBody: null,
                disableButton: null,
                displayName: "现代",
                fontType: "system",
                hidden: !1,
                isSuggested: !0,
                isSuggestedByLanguage: "",
                name: "hei",
                settings: {
                    weight: "800"
                }
            }, {
                cssFallback: "sans-serif",
                cssValue: "Cardo, STSong, Songti SC, SimSun",
                disableBody: null,
                disableButton: null,
                displayName: "标准",
                fontType: "system",
                hidden: !1,
                isSuggested: !0,
                isSuggestedByLanguage: "",
                name: "song"
            }, {
                cssFallback: "sans-serif",
                cssValue: "Times New Roman, STKaiTi, KaiTi, Kaiti_GB2312",
                disableBody: null,
                disableButton: null,
                displayName: "传统",
                fontType: "system",
                hidden: !1,
                isSuggested: !0,
                isSuggestedByLanguage: "",
                name: "kai"
            }, {
                name: "thinnerhei",
                displayName: "极细",
                cssValue: '"Open Sans", "open_sans", "Lucida Grande", "Verdana", "Pingfang SC", "Pingfang TC", "Hiragino Sans GB", "Microsoft YaHei"',
                cssFallback: "serif",
                disableBody: !1,
                disableButton: !1,
                fontType: "system",
                hidden: !1,
                isSuggested: !0
            }, {
                cssFallback: "sans-serif",
                cssValue: "Calibri-light, Calibri, YouYuan, Yuanti SC, Microsoft YaHei",
                disableBody: null,
                disableButton: null,
                displayName: "圆体",
                fontType: "system",
                hidden: !1,
                isSuggested: !0,
                isSuggestedByLanguage: "",
                name: "yuanti"
            }, {
                name: "noto sans sc",
                displayName: "思源黑体",
                cssValue: "noto sans sc",
                cssFallback: "sans-serif",
                disableBody: !1,
                disableButton: !1,
                fontType: "google",
                settings: {
                    google_embed_name: "Noto Sans SC"
                },
                hidden: !1,
                isSuggested: !0,
                isSuggestedByLanguage: "zh-CN"
            }, {
                name: "noto serif sc",
                displayName: "思源宋体",
                cssValue: "noto serif sc",
                cssFallback: "serif",
                disableBody: !1,
                disableButton: !1,
                fontType: "google",
                settings: {
                    google_embed_name: "Noto Serif SC"
                },
                hidden: !1,
                isSuggested: !0,
                isSuggestedByLanguage: "zh-CN"
            }, {
                name: "zcool xiaowei",
                displayName: "站酷小薇体",
                cssValue: "zcool xiaowei",
                cssFallback: "serif",
                disableBody: !1,
                disableButton: !1,
                fontType: "google",
                settings: {
                    google_embed_name: "ZCOOL XiaoWei"
                },
                hidden: !1,
                isSuggested: !0,
                isSuggestedByLanguage: "zh-CN"
            }, {
                name: "zcool qingke huangyou",
                displayName: "站酷庆科黄油体",
                cssValue: "zcool qingke huangyou",
                cssFallback: "sans-serif",
                disableBody: !1,
                disableButton: !1,
                fontType: "google",
                settings: {
                    google_embed_name: "ZCOOL QingKe HuangYou"
                },
                hidden: !1,
                isSuggested: !0,
                isSuggestedByLanguage: "zh-CN"
            }, {
                name: "zcool kuaile",
                displayName: "站酷快乐体",
                cssValue: "zcool kuaile",
                cssFallback: "sans-serif",
                disableBody: !1,
                disableButton: !1,
                fontType: "google",
                settings: {
                    google_embed_name: "ZCOOL KuaiLe"
                },
                hidden: !1,
                isSuggested: !0,
                isSuggestedByLanguage: "zh-CN"
            }, {
                name: "ma shan zheng",
                displayName: "马善政体",
                cssValue: "ma shan zheng",
                cssFallback: "cursive",
                disableBody: !1,
                disableButton: !1,
                fontType: "google",
                settings: null,
                hidden: !1,
                isSuggested: !0,
                isSuggestedByLanguage: "zh-CN"
            }, {
                name: "liu jian mao cao",
                displayName: "流江毛草",
                cssValue: "liu jian mao cao",
                cssFallback: "cursive",
                disableBody: !1,
                disableButton: !1,
                fontType: "google",
                settings: null,
                hidden: !1,
                isSuggested: !0,
                isSuggestedByLanguage: "zh-CN"
            }, {
                name: "zhi mang xing",
                displayName: "志莽行书",
                cssValue: "zhi mang xing",
                cssFallback: "cursive",
                disableBody: !1,
                disableButton: !1,
                fontType: "google",
                settings: null,
                hidden: !1,
                isSuggested: !0,
                isSuggestedByLanguage: "zh-CN"
            }, {
                name: "long cang",
                displayName: "龙藏体",
                cssValue: "long cang",
                cssFallback: "cursive",
                disableBody: !1,
                disableButton: !1,
                fontType: "google",
                settings: null,
                hidden: !1,
                isSuggested: !0,
                isSuggestedByLanguage: "zh-CN"
            }], t.exports = e.default
        },
        23436: function(t, e, n) {
            var a = n(663978),
                o = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var i = n(855108),
                u = (0, o.default)(i);
            e.default = new u.default("MobileEditorDispatcher"), t.exports = e.default
        },
        145546: function(t, e, n) {
            var a = n(663978),
                o = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var i, u = n(496486),
                l = (0, o.default)(u),
                r = n(143393),
                s = ((0, o.default)(r), n(717187)),
                d = n(14991),
                c = (0, o.default)(d),
                f = n(23436),
                g = ((0, o.default)(f), n(298657)),
                E = ((0, o.default)(g), l.default.assign({}, s.EventEmitter.prototype, {
                    init: function(t) {
                        return (i = new c.default(t)).binding
                    },
                    getBinding: function() {
                        return i.binding
                    },
                    getSideMenuOpenState: function() {
                        return this.getImmutableSideMenuOpenState().toObject()
                    },
                    getImmutableSideMenuOpenState: function() {
                        return this.getBinding().get("sideMenuOpenState")
                    }
                }));
            window.DEBUG.PageBridgeStore = E, e.default = E, t.exports = e.default
        },
        125485: function(t, e, n) {
            var a = n(663978),
                o = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var i = n(359036),
                u = (0, o.default)(i);
            n(974916), n(115306), n(569600);
            var l, r, s = n(2991),
                d = (0, o.default)(s),
                c = n(493476),
                f = (0, o.default)(c),
                g = n(977766),
                E = (0, o.default)(g),
                h = n(678580),
                _ = (0, o.default)(h),
                v = n(277149),
                T = (0, o.default)(v),
                m = n(620116),
                S = (0, o.default)(m),
                b = n(981643),
                p = (0, o.default)(b),
                y = n(778914),
                F = (0, o.default)(y),
                N = n(703649),
                D = (0, o.default)(N),
                A = n(694473),
                O = (0, o.default)(A),
                I = n(254804),
                L = (0, o.default)(I),
                C = n(496486),
                B = (0, o.default)(C),
                w = n(177897),
                P = (0, o.default)(w),
                R = n(143393),
                U = (0, o.default)(R),
                G = n(717187),
                W = n(610292),
                M = (0, o.default)(W),
                Z = n(159508),
                V = (0, o.default)(Z),
                k = n(14991),
                x = (0, o.default)(k),
                H = n(112215),
                z = (0, o.default)(H),
                j = n(234584),
                Y = (0, o.default)(j),
                X = n(505130),
                J = ((0, o.default)(X), n(183123)),
                K = (0, o.default)(J),
                $ = n(359011),
                q = n(947566).Z,
                Q = function(t, e, n) {
                    var a = "".concat(t, "Font"),
                        o = "".concat(t, "FontWeight");
                    r.setData(a, e), r.setData(o, n), et()
                },
                tt = function(t, e, n) {
                    l.setData("preview.".concat(t, "Font"), e), l.setData("preview.".concat(t, "FontWeight"), n)
                },
                et = function() {
                    var t = l.binding.sub("preview"),
                        e = t.atomically(),
                        n = t.get().toJS();
                    for (var a in n) n[a], e.set(a, void 0);
                    e.commit()
                },
                nt = B.default.assign({}, G.EventEmitter.prototype, {
                    _allFonts: null,
                    _initialFonts: null,
                    customFonts: [],
                    _fontsSelectedOnPageLoad: [],
                    getDefault: function(t) {
                        return {
                            preview: {
                                titleFont: "",
                                bodyFont: "",
                                buttonFont: "",
                                navItemFont: "",
                                navDropdownFont: "",
                                headingFont: "",
                                fontPreset: "",
                                titleFontWeight: "",
                                bodyFontWeight: "",
                                headingFontWeight: "",
                                buttonFontWeight: "",
                                navItemFontWeight: "",
                                navDropdownFontWeight: ""
                            },
                            data: {
                                titleFont: t.titleFont,
                                bodyFont: t.bodyFont,
                                buttonFont: t.buttonFont || t.bodyFont,
                                navItemFont: t.navItemFont || t.bodyFont,
                                navDropdownFont: t.navDropdownFont || t.bodyFont,
                                headingFont: t.headingFont,
                                fontPreset: t.fontPreset,
                                titleFontWeight: t.titleFontWeight,
                                bodyFontWeight: t.bodyFontWeight,
                                buttonFontWeight: t.buttonFontWeight || t.bodyFontWeight,
                                navItemFontWeight: t.navItemFontWeight || t.bodyFontWeight,
                                navDropdownFontWeight: t.navDropdownFontWeight || t.bodyFontWeight,
                                headingFontWeight: t.headingFontWeight
                            }
                        }
                    },
                    init: function(t, e) {
                        return l = new x.default(t), n(183123), "undefined" != typeof $S && (this.customFonts = $S.user_meta && $S.user_meta.custom_fonts || []), l.binding
                    },
                    _setBHelperForTests: function(t) {
                        return l = t
                    },
                    i18nFontName: function(t) {
                        var e = K.default.getLocale(),
                            n = K.default.getSuggestedFontsTranslation() || {};
                        return "ja" === e && (0, d.default)(t).call(t, (function(t) {
                            for (var e in n)
                                if (t.displayName == e) return t.displayName = n[e].ja
                        })), t
                    },
                    loadFontsIfNotLoaded: function() {
                        var t = this;
                        l.getData("isLoadingFonts") || (l.setData("isLoadingFonts", !0), new f.default((function(t, e) {
                            (0, $.fetchJSON)("https://static-assets.strikinglycdn.com/fonts.json").then((function(e) {
                                t(e.json())
                            })).catch((function(t) {
                                e(t)
                            }))
                        })).then((function(e) {
                            return t._setAllFonts(t.i18nFontName(e)), l.setData("isLoadingFonts", !1)
                        })).catch((function() {
                            l.setData("isLoadingFonts", !1)
                        })))
                    },
                    hydrate: function(t, e, n) {
                        return this._initialFonts = n, l.binding.atomically().set(U.default.fromJS(this.getDefault(e))).commit({
                            notify: !1
                        }), this._fontsSelectedOnPageLoad = this._getUsedFonts()
                    },
                    getData: function(t) {
                        return l.binding.get(t)
                    },
                    getBinding: function() {
                        return l.binding
                    },
                    getFontName: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = !1;
                        return null != e.preview && (n = e.preview), n ? l.getData("preview.".concat(t, "Font")) : l.getData("data.".concat(t, "Font"))
                    },
                    getFontWeight: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = !1;
                        return null != e.preview && (n = e.preview), n ? l.getData("preview.".concat(t, "FontWeight")) : l.getData("data.".concat(t, "FontWeight"))
                    },
                    getAvailableFonts: function() {
                        var t;
                        return (0, E.default)(t = []).call(t, (0, u.default)(this._allFonts || []), (0, u.default)(this.customFonts || []), (0, u.default)(this._initialFonts || []))
                    },
                    isCJKFont: function(t) {
                        var e, n = this.getFontByName(t);
                        return !!n && (0, _.default)(e = ["ja", "zh-CN", "zh-TW"]).call(e, n.isSuggestedByLanguage)
                    },
                    doesSiteHaveCJKFont: function() {
                        var t = this,
                            e = ["body", "title", "heading", "button", "navItem", "navDropdown"],
                            n = (0, d.default)(e).call(e, (function(e) {
                                var n = t.getFontName(e);
                                return "" === n ? "montserrat" : n
                            }));
                        return n = P.default.uniq(n), (0, T.default)(n).call(n, (function(e) {
                            return t.isCJKFont(e)
                        }))
                    },
                    getRenderingFonts: function() {
                        var t, e, n, a = (0, d.default)(t = this.customFonts).call(t, (function(t) {
                                return t.id
                            })),
                            o = (0, S.default)(e = this._initialFonts || []).call(e, (function(t) {
                                return t && t.id && (0, p.default)(a).call(a, t.id)
                            }));
                        return (0, E.default)(n = []).call(n, (0, u.default)(this.customFonts), (0, u.default)(o))
                    },
                    search: function(t, e) {
                        var n, a, o = [],
                            i = [],
                            u = function(t) {
                                return t.toLowerCase().replace(/ /g, "")
                            };
                        return e = u(e), (0, F.default)(n = this.getAvailableFonts()).call(n, (function(n) {
                            if (("body" !== t || n && !n.disableBody) && ("button" !== t || n && !n.disableButton) && n && !n.hidden) {
                                var a = u(n.displayName);
                                return (0, D.default)(a).call(a, 0, e.length) === e ? o.push(n) : -1 !== (0, p.default)(a).call(a, e) ? i.push(n) : void 0
                            }
                        })), o = B.default.sortBy(o, (function(t) {
                            return t.name
                        })), i = B.default.sortBy(i, (function(t) {
                            return t.name
                        })), (0, D.default)(a = (0, E.default)(o).call(o, i)).call(a, 0, 20)
                    },
                    _getSuggestedFonts: function() {
                        var t;
                        return (0, S.default)(t = this.getVisibleFonts()).call(t, (function(t) {
                            return t.isSuggested
                        }))
                    },
                    _getSuggestedByLanguage: function() {
                        var t, e = Y.default.getForcedLocale();
                        return (0, S.default)(t = this.getVisibleFonts()).call(t, (function(t) {
                            return t.isSuggestedByLanguage === e
                        }))
                    },
                    _getUsedFonts: function() {
                        var t, e = this;
                        return (0, d.default)(t = (0, B.default)([this.getFontName("title"), this.getFontName("heading"), this.getFontName("body"), this.getFontName("button"), this.getFontName("navItem"), this.getFontName("navDropdown")]).compact().uniq()).call(t, (function(t) {
                            return e.getFontByName(t)
                        })).value()
                    },
                    getSuggestedFonts: function(t) {
                        var e, n, a, o = [],
                            i = this._getUsedFonts(),
                            l = q(t),
                            r = this.getFontByName(l),
                            s = this._fontFilterSortBy(this._getSuggestedByLanguage(), l),
                            d = (0, E.default)(n = []).call(n, (0, u.default)(this._getSuggestedFonts()), (0, u.default)(this._fontsSelectedOnPageLoad));
                        return o = (0, E.default)(a = []).call(a, (0, u.default)(i), [r], (0, u.default)(s), (0, u.default)(this._fontFilterSortBy(d, l))), (0, S.default)(e = (0, B.default)(o)).call(e, (function(t) {
                            return t && !t.id
                        })).reject((function(e) {
                            return !("body" !== t || !e.disableBody) || !("button" !== t || !e.disableButton) || !!e.hidden || void 0
                        })).uniq((function(t) {
                            return t.name
                        })).value()
                    },
                    _fontFilterSortBy: function(t, e) {
                        var n;
                        return (0, S.default)(n = (0, B.default)(t)).call(n, (function(t) {
                            return t && !t.id && t.name !== e
                        })).sortBy((function(t) {
                            return t.name
                        })).value()
                    },
                    _setAllFonts: function(t) {
                        this._allFonts = t
                    },
                    _getVisibleFonts: (0, z.default)((function(t) {
                        return (0, S.default)(t).call(t, (function(t) {
                            return t && !t.hidden
                        }))
                    })),
                    getVisibleFonts: function() {
                        return this._getVisibleFonts(this.getAvailableFonts())
                    },
                    getTitleFonts: function() {
                        return this.getVisibleFonts()
                    },
                    getHeadingFonts: function() {
                        return this.getVisibleFonts()
                    },
                    _getBodyFonts: (0, z.default)((function(t) {
                        return (0, S.default)(B.default).call(B.default, t, (function(t) {
                            return !t.disableBody
                        }))
                    })),
                    getBodyFonts: function() {
                        return this._getBodyFonts(this.getVisibleFonts())
                    },
                    getButtonFonts: function() {
                        return this.getVisibleFonts()
                    },
                    getNavItemFonts: function() {
                        return this.getVisibleFonts()
                    },
                    getNavDropdownFonts: function() {
                        return this.getVisibleFonts()
                    },
                    getFontByName: function(t) {
                        return (0, O.default)(B.default).call(B.default, this.getAvailableFonts(), (function(e) {
                            return e && e.name && e.name.toLowerCase() === t.toLowerCase()
                        }))
                    },
                    getFont: function(t, e) {
                        var n = this;
                        return (0, O.default)(B.default).call(B.default, this.getAvailableFonts(), (function(a) {
                            return a.name === n.getFontName(t, e)
                        }))
                    },
                    getSelectedFontPresetName: function() {
                        return r.getData("fontPreset")
                    },
                    camelToUnderscore: function(t) {
                        return t.replace(/([A-Z])/g, "_$1").toLowerCase()
                    },
                    getFontStyle: function(t) {
                        if ("default" === this.getFontName(t, {
                                preview: !0
                            })) return {};
                        var e = this.getFont(t, {
                            preview: !0
                        }) || this.getFont(t, {
                            preview: !1
                        });
                        return null != e ? {
                            fontFamily: e.cssValue
                        } : {}
                    },
                    getFontClass: function(t, e) {
                        var n, a = e ? (0, L.default)(e).call(e, "-") ? "".concat(e.toSlug(), "-") : e.toSlug() : void 0,
                            o = this.camelToUnderscore(t);
                        return a ? (0, E.default)(n = "s-font-".concat(o, "-")).call(n, a) : "s-font-".concat(o, "-default")
                    },
                    getFontWeightClass: function(t, e, n) {
                        var a;
                        e && (a = (0, L.default)(e).call(e, "-") ? "".concat(e.toSlug(), "-") : e.toSlug());
                        var o, i, u = this.camelToUnderscore(t);
                        return a && n ? (0, E.default)(o = (0, E.default)(i = "s-font-weight-".concat(n, "-")).call(i, u, "-")).call(o, a) : "s-font-weight-".concat(u, "-default")
                    },
                    getFontClassNames: function() {
                        var t, e, n = this,
                            a = (0, d.default)(t = ["body", "title", "heading", "button", "navItem", "navDropdown"]).call(t, (function(t) {
                                var e = n.getFontName(t, {
                                    preview: !0
                                }) || n.getFontName(t, {
                                    preview: !1
                                });
                                return n.getFontClass(t, e)
                            })),
                            o = (0, d.default)(e = ["body", "title", "heading", "button", "navItem", "navDropdown"]).call(e, (function(t) {
                                var e = n.getFontName(t, {
                                        preview: !0
                                    }) || n.getFontName(t, {
                                        preview: !1
                                    }),
                                    a = n.getFontWeight(t, {
                                        preview: !0
                                    }) || n.getFontWeight(t, {
                                        preview: !1
                                    });
                                return n.getFontWeightClass(t, e, a)
                            }));
                        return (0, E.default)(a).call(a, o).join(" ")
                    },
                    addCustomFonts: function(t) {
                        return this.customFonts.push(t), this.customFonts
                    },
                    removeCustomFont: function(t) {
                        var e;
                        return this.customFonts = (0, S.default)(e = this.customFonts).call(e, (function(e) {
                            return e.name !== t
                        })), this.customFonts
                    }
                });
            M.default.register((function(t) {
                switch (t.actionType) {
                    case V.default.ActionTypes.SELECT_FONT:
                        Q(t.fontType, t.value, t.fontWeight);
                        break;
                    case V.default.ActionTypes.SELECT_FONT_PRESET:
                        e = t.preset, r.setData("fontPreset", e.id), (0, d.default)(n = ["body", "title", "heading", "button", "navItem", "navDropdown"]).call(n, (function(t) {
                            return Q(t, e.fonts[t])
                        }));
                        break;
                    case V.default.ActionTypes.PREVIEW_FONT:
                        tt(t.fontType, t.value, t.fontWeight);
                        break;
                    case V.default.ActionTypes.PREVIEW_FONT_PRESET:
                        ! function(t) {
                            var e;
                            (0, d.default)(e = ["body", "title", "heading", "button", "navItem", "navDropdown"]).call(e, (function(e) {
                                return tt(e, t.fonts[e])
                            }))
                        }(t.preset);
                        break;
                    case V.default.ActionTypes.CLEAR_PREVIEW_FONT:
                        et()
                }
                var e, n
            })), window.DEBUG || (window.DEBUG = {}), window.DEBUG.FontStore = nt, e.default = nt, t.exports = e.default
        },
        229081: function(t, e, n) {
            var a = n(663978),
                o = n(60530)(n(60530));
            a(e, "__esModule", {
                value: !0
            });
            var i = n(977766),
                u = (0, o.default)(i),
                l = n(678580),
                r = (0, o.default)(l),
                s = n(981643),
                d = (0, o.default)(s),
                c = n(62462),
                f = (0, o.default)(c),
                g = n(694473),
                E = (0, o.default)(g),
                h = n(277149),
                _ = (0, o.default)(h),
                v = n(933032),
                T = (0, o.default)(v),
                m = n(394198),
                S = (0, o.default)(m),
                b = n(729828),
                p = (0, o.default)(b);
            n(974916), n(804723), n(864765), n(241539), n(339714);
            var y, F, N = n(143393),
                D = (0, o.default)(N),
                A = n(496486),
                O = (0, o.default)(A),
                I = n(223336),
                L = (0, o.default)(I),
                C = n(717187),
                B = n(14991),
                w = (0, o.default)(B),
                P = n(14137),
                R = (0, o.default)(P),
                U = n(877909),
                G = (0, o.default)(U),
                W = n(183123),
                M = (0, o.default)(W),
                Z = !1,
                V = function(t, e) {
                    return (0 === (t = t.toSlug()).length || t.match(/^[0-9]+$/g)) && (t = "_".concat(e + 1)), t
                },
                k = function() {
                    var t = n(8689),
                        e = n(818166),
                        a = n(234584),
                        o = e.getCurrentPageType(),
                        i = a.getId();
                    if (!t.isEditMode() && F) return F;
                    for (var l = e.getSectionNames(), s = [], c = 0; c < l.length; c++) {
                        var f, g, E = l[c];
                        E || (E = "");
                        for (var h = "preview" === a.getSiteMode() ? (0, u.default)(f = "/s/sites/".concat(i)).call(f, "/preview", "?mode=iframe&v4=1#") : "/#", _ = M.default.getIsBlog(), v = (0, r.default)(g = ["productPage", "itemPage", "searchPage", "storePage", "bookingPage", "blogCategoriesPage", "portfolioCategoriesPage"]).call(g, o) || _ ? h : "#", T = v + V(E, c), m = 1; - 1 !== (0, d.default)(O.default).call(O.default, s, T);) {
                            var S;
                            T = (0, u.default)(S = "".concat(v, "-")).call(S, m++)
                        }
                        s.push(T)
                    }
                    return t.isEditMode() || (F = s), s
                },
                x = function(t) {
                    return H(t)
                },
                H = function(t) {
                    if (t >= 0) return y.setData("navigating", !0), y.setData("navToIndex", t), y.setData("selected", t)
                },
                z = O.default.debounce((function() {
                    return window.Waypoint.refreshAll()
                }), 1e3),
                j = "navigator_store",
                Y = O.default.assign({}, C.EventEmitter.prototype, {
                    getDefault: function(t) {
                        return O.default.merge({
                            selected: 0,
                            navToIndex: null,
                            navigating: !1
                        }, {
                            nav: t || []
                        })
                    },
                    emitChange: function() {
                        this.emit(j)
                    },
                    addListener: function(t) {
                        return this.on(j, t)
                    },
                    rmListener: function(t) {
                        return this.removeListener(j, t)
                    },
                    init: function(t) {
                        return (y = new w.default(t)).binding
                    },
                    hydrate: function(t) {
                        y.binding.set(D.default.fromJS(this.getDefault(t)))
                    },
                    getStates: function() {
                        return y.binding.toJS()
                    },
                    getData: function(t) {
                        return y.binding.get(t)
                    },
                    getBinding: function() {
                        return y.binding
                    },
                    getNav: function() {
                        return y.getData("nav").toJS()
                    },
                    getNavById: function(t) {
                        var e = y.getData("nav"),
                            n = e && e.toJS() || [];
                        return (0, E.default)(n).call(n, (function(e) {
                            return e.uid === t
                        }))
                    },
                    getSelectedIndex: function() {
                        return y.getData("selected")
                    },
                    getSelectedPageIndex: function() {
                        return y.getData("selectedPageIndex")
                    },
                    getNavToIndex: function() {
                        return y.getData("navToIndex")
                    },
                    getNavToPosition: function() {
                        return y.getData("navToPosition")
                    },
                    isNavigating: function() {
                        return y.getData("navigating")
                    },
                    getSectionHashByIndex: function(t) {
                        return function(t) {
                            return k()[t]
                        }(t)
                    },
                    navigateToHashIndex: function(t) {
                        return x(t)
                    },
                    isUidMemberOnly: function(t) {
                        var e;
                        return (0, _.default)(e = this.getNav()).call(e, (function(e) {
                            return (e.paidMemberOnly || e.memberOnly) && e.uid === t
                        }))
                    },
                    isUidHasPassword: function(t) {
                        var e;
                        return (0, _.default)(e = this.getNav()).call(e, (function(e) {
                            return e.hasPassword && e.uid === t
                        }))
                    }
                });
            Y.dispatchToken = R.default.register((function(t) {
                switch (t.actionType) {
                    case G.default.ActionTypes.SET_SECTION_INDEX:
                        if (!Z) return;
                        ! function(t) {
                            var e;
                            y.getData("navigating") || ("" !== (e = window.location.hash) && "#" !== e && 0 !== (0, d.default)(e).call(e, "#!") && window.history && "function" == typeof window.history.replaceState && window.history.replaceState("", document.title, window.location.pathname + window.location.search), y.setData("selected", t))
                        }(t.index);
                        break;
                    case G.default.ActionTypes.NAVIGATE_TO_HASH:
                        l = t.hash, r = Y.getSectionIndexByHash(l), x(r);
                        break;
                    case G.default.ActionTypes.NAVIGATE_TO_PREVIOUS_SECTION:
                        var e = Y.getSelectedIndex();
                        x(e > 0 ? e - 1 : 0);
                        break;
                    case G.default.ActionTypes.NAVIGATE_TO_NEXT_SECTION:
                        var a = n(818166),
                            o = Y.getSelectedIndex(),
                            i = a.getSections().length;
                        x(o + 1 < i ? o + 1 : i - 1);
                        break;
                    case G.default.ActionTypes.DID_NAVIGATE_TO_SECTION:
                        y.setData("navigating", !1), y.setData("navToIndex", null);
                        break;
                    case G.default.ActionTypes.PAGE_CONTENT_UPDATED:
                        z();
                        break;
                    case G.default.ActionTypes.PAGE_MOUNTED:
                        (0, T.default)((function() {
                            return Z = !0
                        }), 1500);
                        break;
                    case G.default.ActionTypes.REPEATABLE_ITEM_MOVED:
                        u = t.position, y.setData("navigating", !0), y.setData("navToPosition", u);
                        break;
                    case G.default.ActionTypes.SWITCH_PAGE:
                        F = void 0
                }
                var u, l, r;
                return Y.emitChange()
            })), Y.getSectionIndexByHash = function(t) {
                var e, a, o;
                if ("" === t) return 0;
                if (t.match(/^#\d+$/g)) {
                    var i = (o = n(818166)).getSections();
                    if ((e = (0, S.default)(t.substring(1), 10) - 1) > (null == i ? void 0 : i.length)) return;
                    return e < 0 && (e = 0), e
                }
                if (-1 !== (0, d.default)(O.default).call(O.default, k(), t)) return (0, d.default)(O.default).call(O.default, k(), t);
                if ((0, p.default)(O.default).call(O.default, t, "#blog") || (0, p.default)(O.default).call(O.default, t, "#_blog")) {
                    var u;
                    o = n(818166), u = (u = L.default.url(location.href).param("categoryId")) || "all";
                    var l = null;
                    return (a = (0, f.default)(O.default).call(O.default, o.getSections(), (function(t, e) {
                        return !(!O.default.isObject(t.components.blog1) || !O.default.isObject(t.components.blog1.category)) && (l || (l = e), O.default.isUndefined(t.components.blog1.category.id) ? "all" === u : u === t.components.blog1.category.id.toString())
                    }))) < 0 && l && (a = l), a
                }
                return "#store" === t || "#_store" === t ? (o = n(818166), a = (0, f.default)(O.default).call(O.default, o.getSections(), (function(t) {
                    return O.default.isObject(t.components.ecommerce1)
                }))) : void 0
            }, window.DEBUG || (window.DEBUG = {}), window.DEBUG.NavigatorStore = Y, e.default = Y, t.exports = e.default
        }
    }
]);