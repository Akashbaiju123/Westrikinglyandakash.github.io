/*! For license information please see 13.c993ea4aef952ccb8386-site-bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [13], {
        22874: function(e, t, n) {
            n.r(t), n.d(t, {
                NAV_LAYOUT_KEYS: function() {
                    return g
                },
                defaultS5Theme: function() {
                    return m
                },
                migrateVersion: function() {
                    return y
                },
                migrateS5StyleConfig: function() {
                    return _
                }
            });
            var a = n(778914),
                i = n.n(a),
                o = n(977766),
                l = n.n(o),
                r = n(31238),
                s = n.n(r),
                u = n(678580),
                d = n.n(u),
                c = (n(143290), n(241539), n(339714), n(496486)),
                f = n(926941),
                h = n(879042),
                g = {
                    A: "a",
                    B: "b",
                    C: "c",
                    D: "d",
                    E: "e",
                    F: "f",
                    G: "g",
                    H: "h"
                },
                m = {
                    type: "Theme",
                    version: "10",
                    nav: {
                        type: "NavTheme",
                        name: "topBar",
                        layout: g.A,
                        padding: "medium",
                        sidebarWidth: "small",
                        topContentWidth: "full",
                        horizontalContentAlignment: "left",
                        verticalContentAlignment: "top",
                        fontSize: "medium",
                        backgroundColor1: "#dddddd",
                        highlightColor: null,
                        itemSpacing: "compact",
                        dropShadow: "no",
                        highlight: {
                            type: "underline",
                            textColor: null,
                            blockTextColor: null,
                            blockBackgroundColor: null,
                            blockShape: "pill"
                        },
                        border: {
                            enable: !1,
                            borderColor: "#000",
                            position: "bottom",
                            thickness: "small"
                        },
                        isTransparent: !0,
                        isSticky: !0,
                        presetColorName: "transparent",
                        showSocialMedia: !1,
                        socialMedia: h.defaultSocialMediaList,
                        socialMediaButtonList: h.INTI_SOCIAL_MEDIA_BUTTON_LIST,
                        socialMediaContactList: h.INTI_SOCIAL_MEDIA_CONTACT_LIST,
                        socialMediaListType: "link"
                    },
                    section: {
                        type: "SectionTheme",
                        contentWidth: "full",
                        padding: "normal",
                        baseFontSize: null,
                        titleFontSize: null,
                        subtitleFontSize: null,
                        itemTitleFontSize: null,
                        itemSubtitleFontSize: null,
                        textHighlightColor: null,
                        baseColor: null,
                        titleColor: null,
                        subtitleColor: null,
                        itemTitleColor: null,
                        itemSubtitleColor: null,
                        contentAlignment: "center",
                        textHighlightSelection: {
                            type: "TextHighlightSelection",
                            title: !1,
                            subtitle: !0,
                            itemTitle: !1,
                            itemSubtitle: !0
                        }
                    },
                    firstSection: {
                        type: "FirstSectionTheme",
                        height: "normal",
                        shape: "none"
                    },
                    button: {
                        type: "ButtonTheme",
                        backgroundColor: "#000000",
                        shape: "square",
                        fill: "solid"
                    }
                },
                p = {
                    1: {
                        migrate: function(e) {},
                        undoMigration: function(e) {}
                    },
                    2: {
                        migrate: function(e) {
                            e.section.padding = "normal"
                        },
                        undoMigration: function(e) {
                            delete e.section.padding
                        }
                    },
                    3: {
                        migrate: function(e) {
                            e.firstSection || (e.firstSection = m.firstSection), e.firstSection.shape = "none"
                        },
                        undoMigration: function(e) {
                            delete e.firstSection.shape
                        }
                    },
                    4: {
                        migrate: function(e) {
                            e.button.fill = "solid"
                        },
                        undoMigration: function(e) {
                            delete e.button.fill
                        }
                    },
                    5: {
                        migrate: function(e) {
                            e.nav.highlightColor = null
                        },
                        undoMigration: function(e) {
                            delete e.nav.highlightColor, "topBlock" === e.nav.name && (e.nav.name = "topBar"), "circleIcon" === e.nav.name && (e.nav.name = "topCenter")
                        }
                    },
                    6: {
                        migrate: function(e) {
                            var t = m.section,
                                n = t.textHighlightColor,
                                a = t.textHighlightSelection;
                            e.section.textHighlightColor = n, e.section.textHighlightSelection = a
                        },
                        undoMigration: function(e) {
                            delete e.section.textHighlightColor, delete e.section.textHighlightSelection
                        }
                    },
                    7: {
                        migrate: function(e) {
                            "topBlock" !== e.nav.name && (e.nav.highlightColor = null)
                        },
                        undoMigration: function(e) {}
                    },
                    8: {
                        migrate: function(e) {
                            e.section.contentAlignment = "center"
                        },
                        undoMigration: function(e) {
                            delete e.section.contentAlignment
                        }
                    },
                    9: {
                        migrate: function(e) {
                            e.section.baseColor = e.section.titleColor = e.section.subtitleColor = e.section.itemTitleColor = e.section.itemSubtitleColor = e.section.itemTitleFontSize = e.section.itemSubtitleFontSize = null
                        },
                        undoMigration: function(e) {
                            var t;
                            i()(t = ["baseColor", "titleColor", "subtitleColor", "itemTitleColor", "itemSubtitleColor", "itemTitleFontSize", "itemSubtitleFontSize"]).call(t, (function(t) {
                                return delete e.section[t]
                            }))
                        }
                    },
                    10: {
                        migrate: function(e) {
                            var t, n = {
                                    topBar: g.A,
                                    topCenter: g.F,
                                    left: g.G,
                                    topRadial: g.D,
                                    circleIcon: g.F,
                                    topBlock: g.H
                                },
                                a = e.nav,
                                i = a.name,
                                o = a.isTransparent,
                                l = a.backgroundColor1;
                            e.nav.presetColorName = o ? "transparent" : "customized", "topRadial" !== i && "circleIcon" !== i || (e.nav.keptOldLayout = !0), e.nav.layout = n[i], e.nav.itemColor = null === (t = new f(l || "#fff")) || void 0 === t ? void 0 : t.getTextColor(), e.nav.isSticky = !0
                        },
                        undoMigration: function(e) {
                            delete e.nav.layout, delete e.nav.itemColor, delete e.nav.isSticky, delete e.nav.presetColorName, e.nav.isTransparent = !1
                        }
                    }
                };

            function v(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                return c.mapValues(e, (function(e, a) {
                    return c.isObject(e) && !c.isArray(e) ? v(e, t, l()(n).call(n, [a])) : t(e, a, n)
                }))
            }

            function y(e, t) {
                if (e.version !== t) {
                    var n = s()(e.version);
                    n - s()(t) > 0 ? (p[n] && p[n].undoMigration(e), e.version = (n - 1).toString(), y(e, t)) : (p[n + 1].migrate(e), e.version = (n + 1).toString(), y(e, t))
                }
            }

            function _(e, t) {
                return e && "s5-theme" === t ? (e.version = e.version || "1", y(e, m.version), e = function(e) {
                    return v(e, (function(e, t, n) {
                        var a, i = c.get(m, l()(n).call(n, [t]));
                        return d()(a = ["type", "id", "defaultValue"]).call(a, t) ? e : !c.isObject(i) && function(e) {
                            var t = null === e,
                                n = "boolean" == typeof e,
                                a = "number" == typeof e,
                                i = b.test(e);
                            return !(t || n || i || a)
                        }(e) ? (console.error("This is not a secure s5 theme value, will reset:", e), i) : e
                    }))
                }(e = v(e, (function(e, t, n) {
                    if (null === e) {
                        var a = c.get(m, l()(n).call(n, [t]));
                        if (c.isObject(a)) return
                    }
                    return e
                }))), c.defaultsDeep(e, m)) : m
            }
            var b = /^[a-zA-Z\(\)\#,0-9\.]*$/
        },
        408072: function(e, t, n) {
            n.r(t), n.d(t, {
                areBackgroundAnimationsEnabledOnThisDevice: function() {
                    return E
                },
                default: function() {
                    return R
                }
            });
            var a, i = n(468420),
                o = n(327344),
                l = n(844845),
                r = n(54103),
                s = n.n(r),
                u = n(778914),
                d = n.n(u),
                c = n(786483),
                f = n(818166),
                h = n(496486),
                g = n(694473),
                m = n.n(g),
                p = n(933032),
                v = n.n(p),
                y = n(820666),
                _ = n(223336),
                b = function() {
                    function e(t, n) {
                        var a, o, r, u;
                        if ((0, i.Z)(this, e), (0, l.Z)(this, "_waypoints", void 0), (0, l.Z)(this, "_refreshTimeout", null), (0, l.Z)(this, "_animationType", null), this._waypoints = [], t && "none" !== t.page_scroll) {
                            var d = t.page_scroll;
                            this._animationType = d;
                            var c = "s-animation-page-".concat(d, "-before");
                            m()(a = _(n)).call(a, ".s-section .s-component, .s-section.s-rows-section .s-item-text-group, .process-item-infos").each((function(e, t) {
                                if (!y(t)) {
                                    var n = (t = _(t)).parents(".s-info-box"),
                                        a = t.parents(".s-item-text-group");
                                    n.length > 0 ? t = n : a.length > 0 && (t = a), t.addClass(c)
                                }
                            })), _("." + c).each((function() {
                                _(this).parents("." + c).removeClass(c)
                            }));
                            var f = s()(o = this._onScrolledToElement).call(o, this);
                            this._waypoints = m()(r = _(n)).call(r, "." + c).waypoint((function(e) {
                                "down" === e && (f(this.element), this.destroy())
                            }), {
                                offset: "100%"
                            }), this._onScroll = h.debounce(s()(u = this._onScroll).call(u, this), 200), _(window).on("scroll", this._onScroll), this._refreshTimeout = v()((function() {
                                Waypoint.refreshAll(), this._refreshTimeout = null
                            }), 500)
                        }
                    }
                    return (0, o.Z)(e, [{
                        key: "_onScrolledToElement",
                        value: function(e) {
                            _(e).addClass("s-animation-page-".concat(this._animationType)).removeClass("s-animation-page-".concat(this._animationType, "-before"))
                        }
                    }, {
                        key: "_onScroll",
                        value: function() {
                            var e = this;
                            _(window).scrollTop() + _(window).height() >= _("body").height() && _(".s-animation-page-".concat(this._animationType, "-before")).each((function(t, n) {
                                return e._onScrolledToElement(n)
                            }))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var e;
                            d()(e = this._waypoints).call(e, (function(e) {
                                return e.destroy()
                            })), _(window).off("resize", this._onScroll), clearTimeout(this._refreshTimeout)
                        }
                    }]), e
                }(),
                w = n(977766),
                k = n.n(w),
                S = n(620116),
                C = n.n(S),
                T = n(981643),
                A = n.n(T),
                x = n(98926),
                z = n.n(x),
                I = n(43138),
                B = n(234584);

            function P(e) {
                var t, n;
                return m()(t = _(e)).call(t, ".s-bg-image").length > 0 && (e = m()(n = _(e)).call(n, ".s-bg-image")[0]), e
            }
            var E, L = ["zine", "glow", "pitch_new"],
                N = k()(a = ["app", "s5-theme"]).call(a, L),
                F = function() {
                    function e(t, n) {
                        var a, o, r;
                        (0, i.Z)(this, e), (0, l.Z)(this, "_sectionsThatShouldBeAnimated", void 0), (0, l.Z)(this, "_parallaxSpeed", void 0), (0, l.Z)(this, "_contentElement", void 0), (0, l.Z)(this, "_isDestroyed", !1), (0, l.Z)(this, "_isAppliedParallax", !1), this._contentElement = n, this._applyParallax = s()(a = this._applyParallax).call(a, this), this._onWindowResize = h.debounce(s()(o = this._onWindowResize).call(o, this), 200), _(window).on("resize", this._onWindowResize), _(window).on("scroll", s()(r = this._applyParallax).call(r, this, !1)), this._updateSectionsThatShouldBeAnimated(), this._updateBackgroundAnimationSpeed(t, !0)
                    }
                    return (0, o.Z)(e, [{
                        key: "_updateBackgroundAnimationSpeed",
                        value: function(e, t) {
                            var n = this._getParallaxSpeed(e);
                            n !== this._parallaxSpeed && (this._parallaxSpeed = n, 1 === this._parallaxSpeed ? this._removeParallax() : t || this._applyParallax(!0))
                        }
                    }, {
                        key: "_getParallaxSpeed",
                        value: function(e) {
                            return "none" === e.background ? 1 : "fixed" === e.background ? 0 : "parallax" === e.background ? .3 : void 0
                        }
                    }, {
                        key: "_onWindowResize",
                        value: function() {
                            var e = this;
                            E() || this._sectionsThatShouldBeAnimated.each((function(t, n) {
                                e._revertAnimationStyles(n)
                            })), this._applyParallax(!0)
                        }
                    }, {
                        key: "handlePageDataChange",
                        value: function(e) {
                            this._updateSectionsThatShouldBeAnimated(), this._updateBackgroundAnimationSpeed(e)
                        }
                    }, {
                        key: "_removeParallax",
                        value: function() {
                            var e = this;
                            this._sectionsThatShouldBeAnimated.each((function(t, n) {
                                e._revertAnimationStyles(n)
                            }))
                        }
                    }, {
                        key: "_updateSectionsThatShouldBeAnimated",
                        value: function() {
                            var e, t;
                            this._sectionsThatShouldBeAnimated = C()(e = m()(t = _(this._contentElement)).call(t, ".s-section")).call(e, (function(e, t) {
                                var n = _(t),
                                    a = n.is(".s-slider-section"),
                                    i = n.is(".s-grid-section"),
                                    o = "none" != n.css("backgroundImage") || "none" != m()(n).call(n, "s-bg-image").css("backgroundImage"),
                                    l = n.is(".s-bg-video");
                                return o && !a && !l && !i
                            }))
                        }
                    }, {
                        key: "_applyParallax",
                        value: function(e) {
                            var t = this;
                            if (E() && 1 !== this._parallaxSpeed) {
                                var n = _(window).scrollTop();
                                this._sectionsThatShouldBeAnimated.each((function(a, i) {
                                    if (i = P(i), _(i).hasClass("_animate-background")) {
                                        var o = _(i).parents(".slide").index(),
                                            l = o <= 1,
                                            r = o < 1,
                                            s = 1 === o,
                                            u = _(i).data("imageHeight") > _(i).outerHeight() + 150,
                                            d = t._parallaxSpeed,
                                            c = .3 === d,
                                            h = i.offsetHeight,
                                            g = window.innerHeight,
                                            m = (window.innerWidth, i.getBoundingClientRect().top + n),
                                            p = m,
                                            v = B.getThemeName(),
                                            y = -1 !== A()(N).call(N, v);
                                        if (l && y && c && u && !I.isSmallerThanDesktop()) {
                                            d = .7;
                                            var b = "s5-theme" === v,
                                                w = -1 === A()(L).call(L, v);
                                            if (b) {
                                                var S = f.getS5Theme(),
                                                    C = null == S ? void 0 : S.getIn(["nav", "name"]);
                                                w = !(null != S && S.getIn(["nav", "isTransparent"])) && "left" !== C
                                            }
                                            w && (p -= _(".s-navbar-desktop").outerHeight() || _("#header-container").outerHeight()), s && (p -= _(".s-section-1").outerHeight())
                                        }
                                        var T = p - g,
                                            x = p + h,
                                            E = m - g <= n && n <= m + h,
                                            F = x - T,
                                            M = (n - T) / F,
                                            D = (Math.max(g, h), x - g),
                                            H = x - (D + (g * d - F * d * ((D - T) / F)));
                                        if (t._isAppliedParallax && !e || $B.TH.getBackgroundImageSize(_(i), (function(e) {
                                                if (!t._isDestroyed) {
                                                    t._isAppliedParallax = !0;
                                                    var n = e.width / e.height;
                                                    if (_(i).hasClass("_image-position-center")) _(i).data("imageWidth", e.width), _(i).data("imageHeight", e.height);
                                                    else {
                                                        var a = H,
                                                            o = H * n,
                                                            l = _(i).outerWidth() || 0;
                                                        o < l && (a = (o = l) / n), _(i).data("imageWidth", o), _(i).data("imageHeight", a)
                                                    }
                                                    t._applyParallax(!1)
                                                }
                                            })), E) {
                                            var W, R = _(i).outerWidth() || 0,
                                                O = _(i).offset().left + (R - _(i).data("imageWidth")) / 2,
                                                V = g * d - F * d * M,
                                                Z = (H - _(i).data("imageHeight")) / 2 + V;
                                            if (r || (Z += 2.75), l && y && c && u && !I.isSmallerThanDesktop()) {
                                                var U = (_(i).data("imageHeight") - _(i).outerHeight()) / 2,
                                                    Y = (_(i).offset() || {}).top;
                                                if (!z()(Y) && (Z = Y - U + V, s)) {
                                                    var j = Y - n;
                                                    Z = Math.min(j, Z)
                                                }
                                            }
                                            if (z()(Z)) return;
                                            _(i).css({
                                                "background-attachment": "fixed",
                                                "background-position-x": O,
                                                "background-position-y": Z
                                            }), "repeat" !== _(i).css("background-repeat") && _(i).css({
                                                "background-size": k()(W = "".concat(_(i).data("imageWidth"), "px ")).call(W, _(i).data("imageHeight"), "px")
                                            })
                                        }
                                    } else t._revertAnimationStyles(i)
                                }))
                            }
                        }
                    }, {
                        key: "_revertAnimationStyles",
                        value: function(e) {
                            e = P(e), _(e).css("background-attachment", "");
                            var t = _(e).attr("data-react-style");
                            t && _(e).css(JSON.parse(t))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._removeParallax(), _(window).off("resize", this._onWindowResize), _(window).off("scroll", this._applyParallax), this._isDestroyed = !0
                        }
                    }]), e
                }();
            E = function() {
                return !(I.isMobile() || I.isSmallScreen() || I.isEdge() || I.isIE11())
            }, n(569600);
            var M = n(2991),
                D = n.n(M),
                H = function() {
                    function e(t, n, a) {
                        if ((0, i.Z)(this, e), (0, l.Z)(this, "_contentElement", void 0), this._contentElement = n, !I.isMobile() && "zoom_in" === t.image_link_hover || a) {
                            var o = [".s-component.s-media", ".s-gallery-item", ".image-wrapper", ".s-image", ".s-blog-avatar-container"],
                                r = D()(o).call(o, (function(e) {
                                    return ".s-section:not(.s-footer-section) ".concat(e, " a img")
                                })).join(", ");
                            r += ", .s-blog-avatar, .s-grid-section-cell a .s-bg-image", _(n).on("mouseenter.imageLinkHoverAnimator", r, (function() {
                                var e, t = _(this),
                                    n = t.width(),
                                    a = t.height();
                                e = n > a ? (n + 20) / n : (a + 20) / a, _(this).css("transform", "scale(".concat(e, ")"))
                            })), _(n).on("mouseleave.imageLinkHoverAnimator", r, (function() {
                                _(this).css("transform", "")
                            }))
                        }
                    }
                    return (0, o.Z)(e, [{
                        key: "destroy",
                        value: function() {
                            _(this._contentElement).off("mouseenter.imageLinkHoverAnimator"), _(this._contentElement).off("mouseleave.imageLinkHoverAnimator")
                        }
                    }]), e
                }(),
                W = function() {
                    function e(t) {
                        var n, a;
                        (0, i.Z)(this, e), (0, l.Z)(this, "_newPageFadeInToken", null), (0, l.Z)(this, "_animations", void 0), (0, l.Z)(this, "_contentElement", void 0), (0, l.Z)(this, "isPreviewMode", (function() {
                            return !1
                        })), this._contentElement = t, this._shouldAnimate() && (f.getSiteAnimations(), this._initAnimations(t), this._onPageDataChange = h.debounce(s()(n = this._onPageDataChange).call(n, this), 50), f.addChangeListener(this._onPageDataChange), this._onNewPageFadeIn = s()(a = this._onNewPageFadeIn).call(a, this), this._newPageFadeInToken = c.Event.subscribe("Page.afterNewOneFadeIn", this._onNewPageFadeIn))
                    }
                    return (0, o.Z)(e, [{
                        key: "_onPageDataChange",
                        value: function() {
                            var e, t = f.getSiteAnimations();
                            d()(e = this._animations).call(e, (function(e) {
                                e.handlePageDataChange && e.handlePageDataChange(t)
                            }))
                        }
                    }, {
                        key: "_onNewPageFadeIn",
                        value: function() {
                            f.getSiteAnimations(), this._destroyAnimations(), this._initAnimations(this._contentElement)
                        }
                    }, {
                        key: "_initAnimations",
                        value: function(e) {
                            var t = f.getSiteAnimations();
                            this._animations = [], this._animations.push(new b(t, e)), this._animations.push(new H(t, e, this.isPreviewMode())), this._animations.push(new F(t, e))
                        }
                    }, {
                        key: "_shouldAnimate",
                        value: function() {
                            return !/animation=0/.test(window.location.href)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._shouldAnimate() && (f.removeChangeListener(this._onPageDataChange), c.Event.unsubscribe(this._newPageFadeInToken), this._destroyAnimations())
                        }
                    }, {
                        key: "_destroyAnimations",
                        value: function() {
                            var e;
                            d()(e = this._animations).call(e, (function(e) {
                                return e.destroy()
                            }))
                        }
                    }]), e
                }(),
                R = W
        },
        629869: function(e, t, n) {
            n.d(t, {
                nb: function() {
                    return a
                },
                tw: function() {
                    return i
                },
                Vx: function() {
                    return o
                },
                qA: function() {
                    return l
                },
                rZ: function() {
                    return r
                },
                wn: function() {
                    return s
                },
                G3: function() {
                    return u
                },
                gk: function() {
                    return d
                }
            });
            var a = "nextgen/editor/open_dialog",
                i = "nextgen/editor/close_dialog",
                o = "nextgen/editor/open_common_dialog",
                l = "nextgen/editor/close_common_dialog",
                r = "nextgen/editor/open_bridge_dialog",
                s = "nextgen/editor/close_bridge_dialog";

            function u(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return {
                    type: a,
                    payload: {
                        dialogName: e,
                        options: t
                    }
                }
            }

            function d(e) {
                return {
                    type: i,
                    payload: {
                        dialogName: e
                    }
                }
            }
        },
        213515: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n(844845),
                i = n(629869),
                o = n(508962);

            function l(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    switch (n.type) {
                        case i.nb:
                            return t.merge((0, a.Z)({}, n.payload.dialogName, {
                                isOpen: !0,
                                options: n.payload.options
                            }));
                        case i.tw:
                            return t.mergeDeepIn([n.payload.dialogName], {
                                isOpen: !1
                            });
                        case i.Vx:
                            return t.merge({
                                commonDialog: {
                                    isOpen: !0,
                                    props: n.payload.props
                                }
                            });
                        case i.qA:
                            return t.setIn(["commonDialog", "isOpen"], !1);
                        case i.rZ:
                            return o.openDialog(n.payload.dialogName, n.payload.options), t;
                        case i.wn:
                            return o.closeDialog(n.payload.dialogName, n.payload.options), t;
                        default:
                            return t
                    }
                }
            }
        },
        218022: function(e, t, n) {
            var a = n(366757);
            n(496486), e.exports = function() {
                return a.createElement("div", {
                    className: "video-bg-wrap",
                    "data-video-html": this.dtProps.videoHtml
                })
            }
        },
        716505: function(e, t, n) {
            var a = n(501068),
                i = n(686902),
                o = n(14310),
                l = n(620116),
                r = n(834074),
                s = n(778914),
                u = n(239649),
                d = n(820368),
                c = n(663978),
                f = n(60530)(n(60530));
            c(t, "__esModule", {
                value: !0
            });
            var h = n(205872),
                g = (0, f.default)(h),
                m = n(812077),
                p = (0, f.default)(m),
                v = n(726394),
                y = (0, f.default)(v),
                _ = n(569198),
                b = (0, f.default)(_),
                w = n(705824),
                k = (0, f.default)(w),
                S = n(351379),
                C = (0, f.default)(S),
                T = n(900214),
                A = (0, f.default)(T),
                x = n(566380),
                z = (0, f.default)(x),
                I = n(487672),
                B = (0, f.default)(I);
            n(974916), n(323123), n(569600), n(115306);
            var P = n(981643),
                E = ((0, f.default)(P), n(2991)),
                L = (0, f.default)(E),
                N = n(54103),
                F = (0, f.default)(N),
                M = n(25843),
                D = (0, f.default)(M),
                H = n(666419),
                W = (0, f.default)(H),
                R = n(936384),
                O = (0, f.default)(R),
                V = n(620116),
                Z = (0, f.default)(V),
                U = n(678580),
                Y = (0, f.default)(U),
                j = n(729828),
                G = (0, f.default)(j),
                q = n(51942),
                J = (0, f.default)(q),
                K = n(977766),
                $ = (0, f.default)(K),
                Q = n(359340),
                X = (0, f.default)(Q),
                ee = n(366757),
                te = (0, f.default)(ee),
                ne = n(45697),
                ae = ((0, f.default)(ne), n(143268)),
                ie = n(818166),
                oe = (0, f.default)(ie),
                le = n(851922),
                re = (0, f.default)(le),
                se = n(408072),
                ue = n(743050),
                de = ((0, f.default)(ue), n(294184)),
                ce = (0, f.default)(de),
                fe = n(496486),
                he = (0, f.default)(fe),
                ge = n(223336),
                me = (0, f.default)(ge),
                pe = n(595386),
                ve = (0, f.default)(pe);

            function ye(e, t) {
                var n = i(e);
                if (o) {
                    var a = o(e);
                    t && (a = l(a).call(a, (function(t) {
                        return r(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function _e(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) s(n = ye(Object(a), !0)).call(n, (function(t) {
                        (0, B.default)(e, t, a[t])
                    }));
                    else if (u) d(e, u(a));
                    else {
                        var i;
                        s(i = ye(Object(a))).call(i, (function(t) {
                            c(e, t, r(a, t))
                        }))
                    }
                }
                return e
            }
            var be = "undefined" != typeof window,
                we = Boolean(be && window.document && window.document.createElement);
            we && !window.lazyListener && (n(777090), window.lazyListener = document.addEventListener("lazybeforeunveil", (function(e) {
                var t;
                e.defaultPrevented || (t = e.target.getAttribute("data-bg")) && (e.target.style.backgroundImage = "url(".concat(t, ")"), lazySizes.fire(e.target, "_lazyloaded", {}, !0, !0))
            })));
            var ke = (0, ve.default)("div", {
                    target: "css-1g80h9c0"
                })("position:absolute;top:0;left:0;width:100%;height:100%;line-height:1;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);transition:all ease-in 0.2s;&.loaded{-webkit-backdrop-filter:blur(0px);backdrop-filter:blur(0px);visibility:hidden;}"),
                Se = function(e) {
                    (0, C.default)(o, e);
                    var t, n, i = (t = o, n = function() {
                        if ("undefined" == typeof Reflect || !a) return !1;
                        if (a.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(a(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, i = (0, z.default)(t);
                        if (n) {
                            var o = (0, z.default)(this).constructor;
                            e = a(i, arguments, o)
                        } else e = i.apply(this, arguments);
                        return (0, A.default)(this, e)
                    });

                    function o(e) {
                        var t;
                        (0, y.default)(this, o), t = i.call(this, e), (0, B.default)((0, k.default)(t), "isPreviewMode", (function() {
                            return !1
                        }));
                        var n = t.props.dataSrc;
                        return t.state = {
                            isBackgroundImageLoaded: !n,
                            canUseFocus: !1
                        }, t
                    }
                    return (0, b.default)(o, [{
                        key: "componentWillMount",
                        value: function() {
                            this.updateEnableBackgroundAnimationsInState()
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e, t = this,
                                n = this.props.dataSrc;
                            n && (this.backgroundImageCopy = new Image, this.backgroundImageCopy.src = n, this.backgroundImageCopy.onload = function() {
                                t.setState({
                                    isBackgroundImageLoaded: !0
                                }), t.setSiteBuilderNotify()
                            }, this.backgroundImageCopy.onerror = function() {
                                t.setState({
                                    isBackgroundImageLoaded: !0
                                }), t.setSiteBuilderNotify()
                            }), this.afterResize = he.default.debounce((0, F.default)(e = this.afterResize).call(e, this), 300), (0, me.default)(window).on("resize", this.afterResize)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            this.updateEnableBackgroundAnimationsInState(e)
                        }
                    }, {
                        key: "componentWillUpdate",
                        value: function(e) {
                            for (var t = this.lazyElement, n = !1, a = 0, i = ["src", "dataSrc"]; a < i.length; a++) {
                                var o = i[a];
                                if (this.props[o] !== e[o]) {
                                    n = !0;
                                    break
                                }
                            }
                            if (n && t && t.classList.contains("lazyloaded") && t.classList.remove("lazyloaded"), t) {
                                var l, r, s = this.props.className,
                                    u = function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                                        return (0, D.default)(e).call(e)
                                    },
                                    d = (0, L.default)(l = s.split(" ")).call(l, u),
                                    c = (0, W.default)(new O.default((0, L.default)(r = t.className.split(" ")).call(r, u))),
                                    f = (0, Z.default)(c).call(c, (function(e) {
                                        return "background-image" !== e && e && !(0, Y.default)(d).call(d, e) && !(0, G.default)(e).call(e, "_")
                                    }));
                                this.extraClass = f.join(" ")
                            }
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            var e = this.lazyElement;
                            !e || e.classList.contains("lazyloaded") || e.classList.contains("lazyload") || e.classList.add("lazyload")
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            (0, me.default)(window).off("resize", this.afterResize), this.removeImageLoadListener()
                        }
                    }, {
                        key: "setSiteBuilderNotify",
                        value: function() {
                            this.props.sectionIndex
                        }
                    }, {
                        key: "getContainerSize",
                        value: function() {
                            var e = this.lazyElement || {
                                clientWidth: 0,
                                clientHeight: 0
                            };
                            return {
                                width: e.clientWidth,
                                height: e.clientHeight
                            }
                        }
                    }, {
                        key: "removeImageLoadListener",
                        value: function() {
                            this.backgroundImageCopy && (this.backgroundImageCopy.onload = function() {}, this.backgroundImageCopy = null)
                        }
                    }, {
                        key: "afterResize",
                        value: function() {
                            this.updateEnableBackgroundAnimationsInState()
                        }
                    }, {
                        key: "updateEnableBackgroundAnimationsInState",
                        value: function(e) {
                            var t = "contain" !== (e = e || this.props).style.backgroundSize,
                                n = "none" !== e.animations.background && (0, se.areBackgroundAnimationsEnabledOnThisDevice)() && t;
                            this.state.enableBackgroundAnimations !== n && this.setState({
                                enableBackgroundAnimations: n
                            }), this.setState({
                                canUseFocus: !n || be && window.innerWidth <= 700
                            })
                        }
                    }, {
                        key: "imagePositioningIsCenter",
                        value: function(e) {
                            return "auto" === (e = e || this.props).style.backgroundSize && "50% 50%" === e.style.backgroundPosition && "repeat" !== e.style.backgroundRepeat
                        }
                    }, {
                        key: "renderBackgroundImage",
                        value: function() {
                            var e, t, n, a = this,
                                i = this.props,
                                o = i.className,
                                l = i.src,
                                r = i.dataSrc,
                                s = i.eagerLoad,
                                u = i.image,
                                d = i.textColor,
                                c = i.isFullContent,
                                f = (i.sectionIndex, i.inSectionSelector, this.state),
                                h = f.enableBackgroundAnimations,
                                m = f.canUseFocus,
                                v = f.isBackgroundImageLoaded,
                                y = h ? " _animate-background" : "";
                            this.imagePositioningIsCenter() && (y += " _image-position-center");
                            var _ = this.props.style,
                                b = u && u.getFocusCoordinate(),
                                w = this.getContainerSize(),
                                k = v > 0 ? "loaded" : "";
                            if (m && b && w.width > 0 && (_ = (0, J.default)({}, _, {
                                    backgroundPosition: u.transformFocusToBackgroundPosition(w)
                                })), s) {
                                var S, C = r;
                                return _ = (0, J.default)({}, _, {
                                    backgroundImage: "url(".concat(C, ")")
                                }), te.default.createElement("div", {
                                    className: "lazyload ".concat(o + y, " background-image"),
                                    ref: function(e) {
                                        return a.lazyElement = e
                                    },
                                    style: _,
                                    "data-bg": r,
                                    "data-react-style": this.getDataReactStyle(_)
                                }, r && (0, p.default)(ke, {
                                    className: (0, ce.default)("blurred-layer", {
                                        loaded: !0
                                    })
                                }), m && b && (0, p.default)("div", {
                                    className: (0, $.default)(S = "background-overlay overlay-".concat(d, " ")).call(S, k)
                                }), c ? [r ? (0, p.default)("img", {
                                    src: r,
                                    alt: "background image",
                                    style: {
                                        width: "100%",
                                        height: "100%",
                                        opacity: 0
                                    }
                                }) : null, (0, p.default)("div", {
                                    style: {
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%"
                                    }
                                }, void 0, this.props.children)] : this.props.children)
                            }
                            var T = {};
                            if (r) {
                                var A = we ? l : r;
                                _ = _e(_e({}, _), {}, {
                                    backgroundImage: "url(".concat(A, ")")
                                }), T = {
                                    "data-bg": r
                                }
                            }
                            return te.default.createElement("div", (0, g.default)({
                                className: (0, $.default)(e = (0, $.default)(t = "lazyload ".concat(this.extraClass || "", " ")).call(t, o)).call(e, y, " background-image"),
                                style: _
                            }, T, {
                                "data-react-style": this.getDataReactStyle(_),
                                ref: function(e) {
                                    return a.lazyElement = e
                                }
                            }), r && (0, p.default)(ke, {
                                className: (0, ce.default)("blurred-layer", {
                                    loaded: !0
                                })
                            }), m && b && (0, p.default)("div", {
                                className: (0, $.default)(n = "background-overlay overlay-".concat(d, " ")).call(n, k)
                            }), c ? [r ? (0, p.default)("img", {
                                src: r,
                                alt: "background image",
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    opacity: 0
                                }
                            }) : null, (0, p.default)("div", {
                                style: {
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%"
                                }
                            }, void 0, this.props.children)] : this.props.children)
                        }
                    }, {
                        key: "getDataReactStyle",
                        value: function(e) {
                            return e = e || {}, e = he.default.omit(e, "backgroundImage"), (0, X.default)(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.linkTarget,
                                n = e.linkUrl,
                                a = e.clickable,
                                i = this.renderBackgroundImage(),
                                o = (0, ae.addProtocol)(n);
                            return a && n && t ? (0, p.default)("a", {
                                href: o,
                                target: t
                            }, void 0, i) : i
                        }
                    }]), o
                }(te.default.Component);
            (0, B.default)(Se, "defaultProps", {
                className: "",
                style: {},
                eagerLoad: !1,
                src: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                linkUrl: null,
                linkTarget: null,
                image: null,
                textColor: "",
                backgroundColor: null,
                clickable: !0
            });
            var Ce = (0, re.default)(Se, [oe.default], (function() {
                return {
                    animations: oe.default.getSiteAnimations()
                }
            }));
            t.default = Ce, e.exports = t.default
        },
        436173: function(e, t, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            }), n(974916), n(115306), n(556977), n(323123), n(804723);
            var o = n(694473),
                l = (0, i.default)(o),
                r = n(981643),
                s = (0, i.default)(r),
                u = n(678580),
                d = (0, i.default)(u),
                c = n(394198),
                f = (0, i.default)(c),
                h = n(933032),
                g = (0, i.default)(h),
                m = n(666419),
                p = (0, i.default)(m),
                v = n(931581),
                y = (0, i.default)(v),
                _ = n(359340),
                b = (0, i.default)(_),
                w = n(54103),
                k = (0, i.default)(w),
                S = n(778914),
                C = (0, i.default)(S),
                T = n(223336),
                A = (0, i.default)(T),
                x = n(496486),
                z = (0, i.default)(x),
                I = n(45697),
                B = (0, i.default)(I),
                P = n(973935),
                E = (0, i.default)(P),
                L = n(399069),
                N = (0, i.default)(L),
                F = n(43138),
                M = (0, i.default)(F),
                D = n(786483),
                H = (0, i.default)(D),
                W = n(868309),
                R = (0, i.default)(W),
                O = n(454613),
                V = (0, i.default)(O),
                Z = n(218022),
                U = (0, i.default)(Z),
                Y = N.default.createPageComponent({
                    displayName: "VideoBgContent",
                    bobcatPropTypes: {
                        data: {
                            videoHtml: B.default.string,
                            videoUrl: B.default.string,
                            className: B.default.string,
                            style: B.default.object
                        }
                    },
                    observedProps: ["videoHtml"],
                    getBobcatDefaultProps: function() {
                        return {
                            data: {
                                videoHtml: ""
                            }
                        }
                    },
                    _removeIframe: function() {
                        var e = (0, A.default)(E.default.findDOMNode(this));
                        return (0, l.default)(e).call(e, "iframe").remove()
                    },
                    _isSliderCloneComponent: function() {
                        return Boolean((0, A.default)(E.default.findDOMNode(this)).closest(".slick-slide").hasClass("slick-cloned"))
                    },
                    componentDidMount: function() {
                        this._isSliderCloneComponent() ? this._removeIframe() : this._setupBgVideo()
                    },
                    componentDidUpdate: function(e) {
                        e.videoHtml === this.dtProps.videoHtml || this._isSliderCloneComponent() || this._setupBgVideo()
                    },
                    componentWillUnmount: function() {
                        var e = this;
                        this._isSliderCloneComponent() || this._video && null != this._video.frame && null != this._video.frame.youTubePlayer && ("function" == typeof this._video.frame.youTubePlayer.stopVideo && this._video.frame.youTubePlayer.stopVideo(), "function" == typeof this._video.frame.youTubePlayer.clearVideo && this._video.frame.youTubePlayer.clearVideo(), this._video.frame.isRemoved = !0, z.default.remove(window.youTubeVideoBgList, (function(t) {
                            return t === e._video.frame
                        })))
                    },
                    afterLayoutChange: function() {
                        return this._setupBgVideo()
                    },
                    _setupBgVideo: function() {
                        var e = this;
                        H.default.Event.unsubscribe(this._token), this._video || (this._video = {});
                        var t = (0, A.default)(E.default.findDOMNode(this));
                        if (t.length && !M.default.isMobile()) {
                            window.clearInterval(null != this._video.frame ? this._video.frame.loopTimer : void 0);
                            var n = function() {
                                switch (e._video.type) {
                                    case "youtube":
                                        var t, a = e._video.frame;
                                        if (window.youTubeVideoBgList || (window.youTubeVideoBgList = []), (0, d.default)(t = (0, p.default)(window.youTubeVideoBgList)).call(t, a) || window.youTubeVideoBgList.push(a), window.onYouTubeIframeAPIReady = function() {
                                                if (null != (null != window.YT ? window.YT.Player : void 0)) {
                                                    for (var e = 0, t = (0, p.default)(window.youTubeVideoBgList); e < t.length; e++) ! function(e) {
                                                        var t = new window.YT.Player(e.attr("id"), {
                                                            videoId: e.attr("id").split("_")[0],
                                                            height: e.attr("height"),
                                                            width: e.attr("width"),
                                                            events: {
                                                                onReady: function(t) {
                                                                    var n;
                                                                    return e.player = n = t.target, V.default.get("enableSoundForVideoBg") || (n.setVolume(0), n.mute && n.mute()), n.setLoop(!0), e.duration = n.getDuration(), e.loopTimer = null, e.startLoop = function() {
                                                                        var e = this;
                                                                        return window.clearInterval(this.loopTimer), this.loopTimer = (0, y.default)((function() {
                                                                            return e.isRemoved ? window.clearInterval(e.loopTimer) : e.player.seekTo(0)
                                                                        }), 1e3 * (this.duration - 1))
                                                                    }, e.startLoop()
                                                                },
                                                                onStateChange: function(t) {
                                                                    try {
                                                                        var n;
                                                                        if (t.data === window.YT.PlayerState.PLAYING && (e.css("opacity", 1), e.closest(".video-bg-wrap").addClass("no-bg")), (0, d.default)(n = [window.YT.PlayerState.ENDED, window.YT.PlayerState.PAUSED]).call(n, t.data)) return t.target.playVideo(), e.startLoop()
                                                                    } catch (e) {}
                                                                }
                                                            }
                                                        });
                                                        e.youTubePlayer = t
                                                    }(a = t[e]);
                                                    return window.youTubeVideoBgList = []
                                                }
                                            }, null == window.YT) return (0, A.default)("body").append((0, A.default)("<script src='https://www.youtube.com/iframe_api'><\/script>"));
                                        break;
                                    case "vimeo":
                                        var i, o = {
                                                method: "setVolume",
                                                value: "0"
                                            },
                                            l = {
                                                method: "addEventListener",
                                                value: "pause"
                                            },
                                            r = {
                                                method: "play"
                                            },
                                            s = function(e) {
                                                e.css("opacity", 1);
                                                var t = e.attr("src").split("?")[0];
                                                t = "https:".concat(t.replace(/^https?:/, ""));
                                                try {
                                                    return e[0].contentWindow.postMessage((0, b.default)(r), t)
                                                } catch (e) {}
                                            };
                                        return (0, k.default)(i = (0, A.default)(window)).call(i, "message", (function(t) {
                                            var a;
                                            if (t.originalEvent.origin.match(/player\.vimeo\.com/)) switch (JSON.parse(t.originalEvent.data).event) {
                                                case "ready":
                                                    n = !V.default.get("enableSoundForVideoBg"),
                                                        function(e) {
                                                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                                                n = e.attr("src").split("?")[0];
                                                            n = "https:".concat(n.replace(/^https?:/, ""));
                                                            try {
                                                                e[0].contentWindow.postMessage((0, b.default)(l), n), t && e[0].contentWindow.postMessage((0, b.default)(o), n)
                                                            } catch (e) {}
                                                        }(e._video.frame, n), s(e._video.frame), (0, C.default)(a = [1e3, 2e3, 5e3, 1e4]).call(a, (function(t) {
                                                            return (0, g.default)((function() {
                                                                return s(e._video.frame)
                                                            }), t)
                                                        }));
                                                    break;
                                                case "pause":
                                                    s(e._video.frame)
                                            }
                                        }))
                                }
                            };
                            if (function() {
                                    var n = e.dtProps.isFullScreen,
                                        a = (e.dtProps.videoHtml || "").replace("&origin=", "&origin=".concat(A.default.url().attr("base"))).replace(/^(https?):/, "");
                                    if (t.html(a), "" !== a) {
                                        var i = (0, l.default)(t).call(t, "iframe");
                                        if (i.length || (i = (0, l.default)(t).call(t, "video")), e._video.frame = i, e._video.type = -1 !== (0, s.default)(a).call(a, "youtube.com") ? "youtube" : (0, s.default)(a).call(a, "vimeo.com") ? "vimeo" : "mp4", i.length) {
                                            var o;
                                            "youtube" === e._video.type && i.addClass("youtube-video");
                                            var r = t.closest(".slide, #s-header, .s-blog-header, .s-grid-section-cell-container"),
                                                u = t.closest(".video-bg");
                                            (0, d.default)(o = ["static", "initial"]).call(o, u.css("position")) && u.css("position", "relative"), u.children().each((function() {
                                                var e, t, n = (0, A.default)(this);
                                                if (window.edit_page.v4 ? n.hasClass("video-bg-wrap") || !(0, d.default)(t = ["static", "initial"]).call(t, n.css("position")) || n.hasClass("s-section-editor-wrapper") || n.css("position", "relative") : !n.hasClass("video-bg-wrap") && (0, d.default)(e = ["static", "initial"]).call(e, n.css("position")) && n.css("position", "relative"), ((0, f.default)(n.css("z-index"), 10) || 1) < 3) return n.css("z-index", 3)
                                            })), (0, l.default)(u).call(u, ".video-bg-wrap").css("z-index", 1), e._resizeFn && (0, A.default)(window).off("resize", e._resizeFn), e._resizeFn = z.default.debounce((function() {
                                                var t = Math.max(r.outerHeight() || 0, u.height() || 0),
                                                    a = Math.max(r.outerWidth() || 0, u.width() || 0),
                                                    o = (a / t).toFixed(2);
                                                return function() {
                                                    var e, l;
                                                    i.css({
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0
                                                    });
                                                    var r = (0, f.default)(i.attr("height"), 10),
                                                        s = ((0, f.default)(i.attr("width"), 10) / r).toFixed(2);
                                                    if (s > o) {
                                                        var u = n ? (0, A.default)(window).innerHeight() : 100;
                                                        e = t + u, l = (t + u) * s
                                                    } else {
                                                        var d = n ? (0, A.default)(window).innerWidth() : 100;
                                                        e = (a + d) / s, l = a + d
                                                    }
                                                    var c = (t - e) / 2,
                                                        h = (a - l) / 2;
                                                    i.css({
                                                        height: "".concat(e, "px"),
                                                        width: "".concat(l, "px"),
                                                        top: "".concat(c, "px"),
                                                        left: "".concat(h, "px")
                                                    })
                                                }(), (0, g.default)((function() {
                                                    if (t !== Math.max(r.height() || 0, u.height())) return e._resizeFn()
                                                }), 50)
                                            }), 100), e._resizeFn
                                        }
                                    }
                                }(), n(), null != window.YT && window.onYouTubeIframeAPIReady(), this._resizeFn) {
                                for (var a = 0, i = [100, 500, 1e3, 2e3, 5e3]; a < i.length; a++) {
                                    var o = i[a];
                                    (0, g.default)(this._resizeFn, o)
                                }
                                return (0, A.default)(window).on("resize", this._resizeFn), this._token = H.default.Event.subscribe("Section.changed", (function(t, n) {
                                    return e._resizeFn()
                                })), this._token
                            }
                        }
                    },
                    render: function() {
                        return U.default.apply(this)
                    }
                });
            Y.WaypointLazy = (0, R.default)(Y, {
                noWrapper: !0
            }), t.default = Y.WaypointLazy, e.exports = t.default
        },
        443673: function(e, t, n) {
            var a = n(663978),
                i = n(60530)(n(60530));
            a(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                e.moreartyRootBinding = t;
                var n = function() {
                    e.dispatch({
                        type: r.MOREARTY_STORE_CHANGE,
                        newData: t.get()
                    })
                };
                n = l.default.debounce(n, 2), t.addListener((function() {
                    return s((function() {
                        n()
                    }))
                }))
            }, t.reduxStoreIsConnectedToBinding = function(e) {
                return void 0 !== e.moreartyRootBinding
            };
            var o = n(496486),
                l = (0, i.default)(o),
                r = n(398193),
                s = "undefined" == typeof requestAnimationFrame ? function(e) {
                    return l.default.delay(e, 1 / 60)
                } : requestAnimationFrame
        }
    }
]);