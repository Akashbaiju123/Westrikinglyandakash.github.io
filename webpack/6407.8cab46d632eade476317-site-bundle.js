/*! For license information please see 6407.8cab46d632eade476317-site-bundle.js.LICENSE.txt */
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [6407], {
        196696: function(e, o, t) {
            var n = t(893379),
                i = t(780133);
            "string" == typeof(i = i.__esModule ? i.default : i) && (i = [
                [e.id, i, ""]
            ]);
            n(i, {
                insert: "head",
                singleton: !1
            }), e.exports = i.locals || {}
        },
        813243: function(e, o, t) {
            var n = t(893379),
                i = t(646859);
            "string" == typeof(i = i.__esModule ? i.default : i) && (i = [
                [e.id, i, ""]
            ]);
            n(i, {
                insert: "head",
                singleton: !1
            }), e.exports = i.locals || {}
        },
        466407: function(e, o, t) {
            "use strict";
            t.r(o);
            var n = t(686902),
                i = t.n(n),
                a = t(14310),
                s = t.n(a),
                l = t(620116),
                r = t.n(l),
                c = t(834074),
                p = t.n(c),
                d = t(778914),
                h = t.n(d),
                g = t(239649),
                m = t.n(g),
                f = t(820368),
                b = t.n(f),
                u = t(663978),
                w = t.n(u),
                v = t(844845),
                k = t(694473),
                x = t.n(k),
                N = t(51942),
                E = t.n(N),
                _ = t(981643),
                y = t.n(_),
                P = (t(209653), t(974916), t(864765), t(496486)),
                I = t(836808),
                L = t(45697),
                S = t(223336),
                C = t(399069),
                Z = t.n(C),
                B = t(234584),
                j = t.n(B),
                T = t(834243),
                z = t(183123),
                F = t(8689),
                U = t.n(F),
                M = (t(141655), t(43138)),
                O = t.n(M),
                W = t(585209),
                D = t.n(W),
                A = t(792681),
                q = t(267385);

            function H(e, o) {
                var t = i()(e);
                if (s()) {
                    var n = s()(e);
                    o && (n = r()(n).call(n, (function(o) {
                        return p()(e, o).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function R(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var t, n = null != arguments[o] ? arguments[o] : {};
                    if (o % 2) h()(t = H(Object(n), !0)).call(t, (function(o) {
                        (0, v.Z)(e, o, n[o])
                    }));
                    else if (m()) b()(e, m()(n));
                    else {
                        var i;
                        h()(i = H(Object(n))).call(i, (function(o) {
                            w()(e, o, p()(n, o))
                        }))
                    }
                }
                return e
            }
            var $ = P.throttle((function() {
                var e = t(796764),
                    o = R(R({}, j().getUserSubscriptionAttributes()), {}, {
                        site_id: j().getId()
                    });
                o = E()({}, o, {
                    pbs_i18n_abtest: I.get("_pbs_i18n_ab_test"),
                    pbs_i18n_status: z.getPbsI18n() && (0, A.matchPbsI18nLocaleWithBrowserLocale)()
                }), e.sendPbsImpression(o)
            }), 8e3, {
                leading: !1
            });
            o.default = Z().createPageComponent({
                displayName: "FooterLogo",
                observedProps: ["showLogo", "showTermsLink", "showPrivacyPolicyLink"],
                bobcatPropTypes: {
                    designer: {
                        showLogo: L.bool.isRequired,
                        showTermsLink: L.bool,
                        showPrivacyPolicyLink: L.bool
                    }
                },
                componentDidMount: function() {
                    var e = this;
                    this.props.showLogo && function(e) {
                        var o = S(window),
                            t = S(document);
                        e.hide();
                        var n = S(".logo-link-pbs-b");
                        if (e.css({
                                bottom: 0,
                                position: "fixed"
                            }).hide(), Number(o.height()) >= Number(t.height()) ? (n.length ? e.show() : e.css({
                                bottom: "-5px"
                            }).show(), $()) : o.scroll((function() {
                                var i, a = Number(t.height()),
                                    s = Number(o.height()),
                                    l = Number(t.scrollTop()),
                                    r = j().getIsBlog(),
                                    c = a - s - l,
                                    p = S(".s-footer-section").outerHeight() || 500;
                                i = "free" === j().getMemberShip() ? l > 10 : p > c;
                                var d = x()(e).call(e, ".logo-link");
                                return d.outerHeight(), l + s + Number(n.outerHeight()) >= a ? (d.removeClass("fixed animate-show animate-hide"), $()) : i ? (d.addClass("fixed"), d.removeClass("animate-hide"), d.addClass("animate-show"), $()) : (d.removeClass("animate-show"), d.addClass("animate-hide")), "s5-theme" !== j().getThemeName() || r ? e.css({
                                    bottom: 0,
                                    position: "absolute"
                                }).show() : e.css({
                                    bottom: -Number(n.outerHeight()),
                                    position: "absolute"
                                }).show()
                            })), z.getIsSxl() || (x()(e).call(e, "a.logo-link").mouseover((function() {
                                return x()(e).call(e, ".s-footer-logo-tooltip").addClass("hover")
                            })), x()(e).call(e, "a.logo-link").mouseout((function() {
                                return x()(e).call(e, ".s-footer-logo-tooltip").removeClass("hover")
                            }))), j().hasNewMobileActions()) e.addClass("has-new-mobile-actions")
                    }(S(this.refs.logo)), this.setPostion(), this.oneClickInfoUpdateHandler = window.edit_page.Event.subscribe("OneClick.Share.Info.Update", (function() {
                        e.forceUpdate()
                    }))
                },
                componentDidUpdate: function() {
                    this.setPostion()
                },
                componentWillUnmount: function() {
                    window.edit_page.Event.unsubscribe(this.oneClickInfoUpdateHandler)
                },
                showOneClickFooterPBS: function() {
                    var e;
                    return j().isOneClickPageInPreview() && (null === (e = T.getOneClickShareInfo()) || void 0 === e ? void 0 : e.oneclickShareEnableContact)
                },
                _onClickRemoveLogo: function() {},
                setPostion: function() {
                    if (this.props.showLogo || this.showOneClickFooterPBS()) {
                        var e, o = 50;
                        e = z.getIsSxl() ? S(".s-footer-logo") : S(".s-footer-logo-pbs"), this.props.isMobilePreview && (o = 130);
                        var t = Number(S(".logo-link-pbs-b").outerHeight());
                        if (S(".logo-link-pbs-b").length && t < o) requestAnimationFrame(this.setPostion);
                        else {
                            var n = 0;
                            O().isMobile() && (n = 100), S("#s-content").css("padding-bottom", t), "s5-theme" != j().getThemeName() || j().getIsBlog() || e.css("bottom", "-".concat(t + n, "px"))
                        }
                    } else S("#s-content").css("padding-bottom", "0")
                },
                _onClickMobileFooter: function(e) {
                    var o;
                    return o = z.getIsInstantFollowRollout() ? "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIyNjAxNTI1NA==&scene=110#wechat_redirect" : "http://mp.weixin.qq.com/s?__biz=MzIyNjAxNTI1NA==&mid=502981655&idx=1&sn=0d28f2e6e3d02cbf91dcfc5802371c0c#rd", e.preventDefault(), z.getInWeChat() ? window.location.href = o : window.location.href = U().getFooterLogoSeoData().anchor_link
                },
                _isLoadedInTemplatePreview: function() {
                    var e;
                    return !(!window.location || !window.location.search) && y()(e = window.location.search).call(e, "in_template_preview=1") > -1
                },
                isPBSB: function() {
                    return z.getIsPBSB()
                },
                isI18nPbsB: function() {
                    return "b" === (0, A.getPbsI18nAbTest)()
                },
                getI18nPbsMatchLocale: function() {
                    var e = (0, q.getBrowserLocale)();
                    return (0, A.matchPbsI18nLocaleWithBrowserLocale)() ? e : "en"
                },
                render: function() {
                    return /smoke-test=1/.test(window.location.href) ? null : this.showOneClickFooterPBS() ? (0, t(217530).Z)() : D().apply(this)
                }
            })
        },
        217530: function(e, o, t) {
            "use strict";
            t.d(o, {
                Z: function() {
                    return b
                }
            });
            var n, i, a, s, l, r = t(863056),
                c = t(366757),
                p = t(384788),
                d = t(834243),
                h = t(859056),
                g = (t(196696), c.useEffect),
                m = c.useState,
                f = function() {
                    var e, o = (null === (e = $S.user_meta) || void 0 === e ? void 0 : e.oneClickShareInfo) || {},
                        t = m(o),
                        s = (0, h.Z)(t, 2),
                        l = s[0],
                        c = s[1],
                        p = l.oneclickSharePhone,
                        d = l.oneclickShareEmail,
                        f = l.oneclickShareWechatId,
                        b = l.oneclickShareWechatIdQrCode;
                    return g((function() {
                        var e, o, t = null === (e = window.edit_page) || void 0 === e || null === (o = e.Event) || void 0 === o ? void 0 : o.subscribe("OneClick.Share.Info.Update", (function() {
                            var e, o = (null === (e = $S.user_meta) || void 0 === e ? void 0 : e.oneClickShareInfo) || {};
                            c(o)
                        }));
                        return function() {
                            t && window.edit_page.Event.unsubscribe(t)
                        }
                    }), [c]), (0, r.Z)("ul", {
                        className: "contact-info-list"
                    }, void 0, (0, r.Z)("li", {
                        className: "contact-info-row"
                    }, void 0, n || (n = (0, r.Z)("i", {
                        className: "fas fa-phone-alt"
                    })), (0, r.Z)("span", {}, void 0, p)), d && (0, r.Z)("li", {
                        className: "contact-info-row"
                    }, void 0, i || (i = (0, r.Z)("i", {
                        className: "fas fa-envelope"
                    })), (0, r.Z)("span", {}, void 0, d)), f && (0, r.Z)("li", {
                        className: "contact-info-row"
                    }, void 0, a || (a = (0, r.Z)("i", {
                        className: "fab fa-weixin"
                    })), (0, r.Z)("span", {}, void 0, f)), b && (0, r.Z)("li", {
                        className: "contact-info-row"
                    }, void 0, (0, r.Z)("img", {
                        className: "qr-code",
                        src: b,
                        alt: ""
                    })))
                },
                b = (t(813243), function() {
                    var e = (d.getOneClickShareInfo() || {}).oneclickShareName;
                    return (0, r.Z)("div", {
                        className: "s-component s-footer-logo s-footer-pbs s-footer-logo-pbs oneclick-footer-pbs-wrapper"
                    }, void 0, (0, r.Z)(p.Z, {
                        title: s || (s = (0, r.Z)(f, {})),
                        overlayClassName: "oneclick-footer-pbs-tooltip",
                        placement: "top",
                        trigger: "hover"
                    }, void 0, (0, r.Z)("div", {
                        className: "oneclick-footer-pbs"
                    }, void 0, (0, r.Z)("span", {}, void 0, "该网站由 ", e, " 制作"), l || (l = (0, r.Z)("span", {
                        className: "contact-us-text"
                    }, void 0, "联系我们")))))
                })
        },
        585209: function(e, o, t) {
            "use strict";
            var n = t(353147),
                i = t(366757),
                a = t(496486),
                s = t(8689),
                l = (t(183123), t(834243)),
                r = t(271866),
                c = t(589499);
            t(43138), e.exports = function() {
                return i.createElement(r, {
                    key: "464"
                }, this.props.showLogo ? i.createElement("div", {
                    className: "s-component s-footer-logo s-footer-pbs " + this.getI18nPbsMatchLocale() + " " + a.transform({
                        "s-footer-logo-pbs": !0,
                        "s-preview-logo-pbs": !1
                    }, (function(e, o, t) {
                        o && e.push(t)
                    }), []).join(" "),
                    ref: "logo",
                    key: "556"
                }, null, this.isI18nPbsB() ? null : i.createElement("div", {
                    key: "1104"
                }, i.createElement("a", {
                    className: "i18n-pbs-link logo-link",
                    target: "_parent",
                    href: s.getFooterLogoSeoData().anchor_link
                }, i.createElement("div", {
                    className: "logo-content"
                }, i.createElement("i", {
                    className: "down-icon fa fa-caret-down"
                }), i.createElement("div", {
                    className: "vertical-line"
                }), i.createElement("div", {
                    className: "logo-panel"
                }, i.createElement("div", {
                    className: "pbs-text"
                }, i.createElement("span", {
                    className: "pbs-span"
                }, "Create a site with"), i.createElement("img", {
                    src: c.cdnAssetPath("/images/pbs/logo-footer-pbs.svg"),
                    alt: n("Strikingly Logo"),
                    style: {
                        width: "88px",
                        height: "22px"
                    }
                })))), i.createElement("div", {
                    className: "s-footer-logo-tooltip"
                }, i.createElement("div", {
                    className: "tooltip-container"
                }, i.createElement("div", {
                    className: "tooltip-white"
                }, "\n              ", n("This website is built with Strikingly."), "\n              ", i.createElement("br", {}), "\n              ", n("Create yours today!"), "\n            ")))), i.createElement("a", {
                    className: "logo-link-pbs-b",
                    target: "_parent",
                    href: s.getFooterLogoSeoData().anchor_link,
                    key: "2084"
                }, i.createElement("p", {}, "\n          ", n("This website is built with Strikingly."), "\n        "), i.createElement("p", {}, "\n          ", n("Create your FREE website today!"), "\n        "), i.createElement("button", {}, i.createElement("span", {}, "\n            ", n("start now"), "\n          "), i.createElement("span", {
                    className: "arrow entypo-right-open-big"
                })))), this.isI18nPbsB() ? i.createElement("div", {
                    key: "2579"
                }, i.createElement("a", {
                    className: "i18n-pbs-link logo-link " + this.getI18nPbsMatchLocale(),
                    target: "_parent",
                    href: s.getFooterLogoSeoData().anchor_link
                }, i.createElement("div", {
                    className: "logo-content"
                }, i.createElement("i", {
                    className: "down-icon fa fa-caret-down"
                }), i.createElement("div", {
                    className: "vertical-line"
                }), i.createElement("div", {
                    className: "logo-panel"
                }, "\n            ", s.getPhraseWithBrowserLocale("title")(), "\n          ")), i.createElement("div", {
                    className: "s-footer-logo-tooltip"
                }, i.createElement("div", {
                    className: "tooltip-container"
                }, i.createElement("div", {
                    className: "tooltip-white"
                }, "\n              ", s.getPhraseWithBrowserLocale("tooltipText1"), "\n              ", i.createElement("br", {}), "\n              ", s.getPhraseWithBrowserLocale("tooltipText2"), "\n            ")))), i.createElement("a", {
                    className: "logo-link-pbs-b",
                    target: "_parent",
                    href: s.getFooterLogoSeoData().anchor_link,
                    key: "3432"
                }, i.createElement("p", {}, "\n          ", s.getPhraseWithBrowserLocale("guideText1"), "\n        "), i.createElement("p", {}, "\n          ", s.getPhraseWithBrowserLocale("guideText2"), "\n        "), i.createElement("button", {}, i.createElement("span", {}, "\n            ", s.getPhraseWithBrowserLocale("startNow"), "\n          "), i.createElement("span", {
                    className: "arrow entypo-right-open-big"
                })))) : null) : null, this.props.showLogo ? i.createElement("div", {
                    className: "s-component s-footer-logo " + a.transform({
                        "s-footer-logo-zbj": l.isZbjUser(),
                        "s-preview-logo-pbs": !1
                    }, (function(e, o, t) {
                        o && e.push(t)
                    }), []).join(" "),
                    ref: "logo",
                    key: "3999"
                }, i.createElement("span", {}, null, i.createElement("a", {
                    className: "logo-link " + (l.isZbjUser() ? "logo-link-sxl-zbj" : "logo-link-sxl"),
                    target: l.isZbjUser() ? "_blank" : "_parent",
                    href: this._isLoadedInTemplatePreview() ? "javascript: void 0" : l.isZbjUser() ? "http://yunzhan.zbj.com" : s.getFooterLogoSeoData().anchor_link
                }, "\n        ", l.isZbjUser() ? "八戒云站提供技术支持" : s.getFooterLogoSeoData().anchor_text, "\n      "), i.createElement("div", {
                    className: "logo-hover logo-hover-sxl"
                }), i.createElement("div", {
                    className: "s-footer-logo-tooltip"
                }, i.createElement("div", {
                    className: "tooltip-container"
                }, i.createElement("div", {
                    className: "tooltip-white"
                }, "\n            ", l.isZbjUser() ? "开始用八戒云站创建自己的网站" : "开始用上线了创建自己的网站", "\n          "))))) : null)
            }
        },
        780133: function(e, o, t) {
            (o = t(923645)(!1)).push([e.id, ".contact-info-list {\n  color: #4b5056;\n  font-family: open_sans, Open Sans, sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 150%;\n}\n.contact-info-list > .contact-info-row:not(:last-child) {\n  margin: 20px 0;\n}\n.contact-info-list > .contact-info-row i {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n}\n.contact-info-list > .contact-info-row .qr-code {\n  display: block;\n  width: 80px;\n  height: 80px;\n}\n.oneclick-contact-info-dialog {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 5000;\n  display: none;\n}\n.oneclick-contact-info-dialog .oneclick-contact-info-dialog-content {\n  width: 440px;\n  max-width: 90%;\n  max-height: 80%;\n  overflow-y: auto;\n  margin: 100px auto 0;\n  padding: 30px;\n  box-sizing: border-box;\n  background-color: white;\n  color: #4b5056;\n  font-size: 14px;\n  font-family: open_sans, Open Sans, sans-serif;\n  border-radius: 5px;\n  font-weight: 700;\n  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);\n}\n.oneclick-contact-info-dialog .oneclick-contact-info-dialog-content .title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 20px;\n  font-style: normal;\n  line-height: 120%;\n}\n.oneclick-contact-info-dialog .oneclick-contact-info-dialog-content .title .close-button {\n  cursor: pointer;\n  font-size: 30px;\n}\n.oneclick-contact-info-dialog .oneclick-contact-info-dialog-content .tips {\n  color: #636972;\n  font-weight: 400;\n  line-height: 150%;\n  margin-top: 10px;\n}\n", ""]), e.exports = o
        },
        646859: function(e, o, t) {
            (o = t(923645)(!1)).push([e.id, ".oneclick-footer-pbs {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  width: 310px;\n  box-sizing: border-box;\n  line-height: 1.5;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.2);\n  background-image: linear-gradient(180deg, #633f97, #493d70);\n  margin: auto;\n  color: white;\n}\n.oneclick-footer-pbs .contact-us-text {\n  margin-left: 8px;\n  text-decoration: underline;\n}\n.oneclick-footer-pbs-tooltip .s-kit-tooltip-content {\n  border-color: #dadbde;\n}\n.oneclick-footer-pbs-tooltip .s-kit-tooltip-content .s-kit-tooltip-inner-content {\n  width: 310px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  background-color: #f4f6f8;\n  border-color: #f4f6f8;\n}\n.oneclick-footer-pbs-tooltip .s-kit-tooltip-content .s-kit-tooltip-arrow {\n  border-top-color: #f4f6f8;\n}\n.oneclick-footer-pbs-tooltip .s-kit-tooltip-content .contact-info-list > .contact-info-row:first-child {\n  margin-top: 0;\n}\n", ""]), e.exports = o
        }
    }
]);