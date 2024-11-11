/*! For license information please see 6587.4a6511c6a71c19d639f8-site-bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [6587], {
        971638: function(e, t, a) {
            a.r(t), a.d(t, {
                imageDataForSaving: function() {
                    return i
                },
                dataForEmptyBackground: function() {
                    return r
                }
            });
            var n = a(51942),
                o = a.n(n),
                l = a(496486),
                i = function(e) {
                    var t = {},
                        a = e.getMeta(),
                        n = a.backgroundSizing,
                        i = a.backgroundClassName;
                    if (n || i) {
                        if (i) switch (l.trim(i)) {
                            case "strikingly-light-text strikingly-text-overlay":
                            case "strikingly-text-overlay strikingly-light-text":
                            case "overlay":
                                t.textColor = "overlay";
                                break;
                            case "strikingly-light-text":
                            case "light":
                                t.textColor = "light";
                                break;
                            case "strikingly-dark-text":
                            case "dark":
                                t.textColor = "dark";
                                break;
                            default:
                                t.textColor = "light"
                        }
                        t.sizing = "cover", -1 !== l.indexOf(["cover", "contain", "tile", "center"], n) && (t.sizing = n)
                    }
                    return o()({}, e.dataToSave("background"), {
                        videoHtml: ""
                    }, t)
                },
                r = function(e) {
                    return {
                        w: null,
                        h: null,
                        storage: null,
                        storageKey: null,
                        storagePrefix: null,
                        format: null,
                        url: "",
                        textColor: e || "light",
                        videoUrl: "",
                        videoHtml: "",
                        focus: null
                    }
                }
        },
        937195: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            });
            var n = a(501068),
                o = a.n(n),
                l = a(863056),
                i = a(468420),
                r = a(327344),
                u = a(484441),
                s = a(103020),
                c = a(803362),
                d = a(2991),
                f = a.n(d),
                g = a(977766),
                p = a.n(g);
            var m = function(e) {
                (0, u.Z)(d, e);
                var t, a, n = (t = d, a = function() {
                    if ("undefined" == typeof Reflect || !o()) return !1;
                    if (o().sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(o()(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, n = (0, c.Z)(t);
                    if (a) {
                        var l = (0, c.Z)(this).constructor;
                        e = o()(n, arguments, l)
                    } else e = n.apply(this, arguments);
                    return (0, s.Z)(this, e)
                });

                function d() {
                    return (0, i.Z)(this, d), n.apply(this, arguments)
                }
                return (0, r.Z)(d, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.tags,
                            a = e.onClickTag;
                        return (0, l.Z)("span", {
                            className: "s-blog-tags"
                        }, void 0, f()(t).call(t, (function(e, n) {
                            var o;
                            return (0, l.Z)("span", {
                                onClick: function() {
                                    a(e)
                                },
                                className: "s-blog-tag ".concat(n === t.length - 1 ? "last" : "")
                            }, n, p()(o = "".concat(e)).call(o, n === t.length - 1 ? "" : ","))
                        })))
                    }
                }]), d
            }(a(366757).Component)
        },
        574689: function(e, t, a) {
            var n = a(863056),
                o = a(859056),
                l = a(493476),
                i = a.n(l),
                r = (a(66992), a(241539), a(788674), a(978783), a(333948), a(366757)),
                u = r.useState,
                s = r.useEffect;
            t.Z = 2266 != a.j ? function(e) {
                var t = e.squarePaymentParams,
                    l = u(null),
                    r = (0, o.Z)(l, 2),
                    c = r[0],
                    d = r[1];
                return s((function() {
                    i().all([Promise.all([a.e(9240), a.e(5386), a.e(8186), a.e(6764), a.e(7852), a.e(8440), a.e(2786), a.e(3694), a.e(2558), a.e(1639), a.e(6105)]).then(a.bind(a, 206105)), Promise.all([a.e(9240), a.e(5386), a.e(8186), a.e(6764), a.e(7852), a.e(8440), a.e(2786), a.e(3694), a.e(2558), a.e(1639)]).then(a.bind(a, 103450))]).then((function(e) {
                        var a = (0, o.Z)(e, 2),
                            l = a[0],
                            i = a[1].default,
                            r = l.default;
                        d((0, n.Z)(i, {}, void 0, (0, n.Z)(r, {
                            squarePaymentParams: t
                        })))
                    }))
                }), [t]), c
            } : null
        },
        602371: function(e, t, a) {
            var n = a(25089);
            t.Z = 2266 != a.j ? n.Z : null
        },
        456448: function(e, t, a) {
            a.d(t, {
                R: function() {
                    return m
                },
                s: function() {
                    return v
                }
            });
            var n = a(333938),
                o = a(563109),
                l = a.n(o),
                i = a(493476),
                r = a.n(i),
                u = a(359340),
                s = a.n(u),
                c = a(977766),
                d = a.n(c),
                f = a(359011),
                g = a(34822),
                p = a(368768);

            function m(e) {
                return new(r())((function(t, a) {
                    (0, f.fetchJSON)("/r/v1/sites/".concat(g.OE, "/membership/subscriptions"), {
                        method: "POST",
                        body: s()(e)
                    }).then((function(e) {
                        return e.json()
                    })).then((function(e) {
                        var n, o = d()(n = "/r/v1/tasks/".concat(e.data.type, "/")).call(n, e.data.id, ".jsm?v=2");
                        p.poller(o, (function(e) {
                            var a = e.data.id;
                            t(a)
                        }), (function(e) {
                            a(e)
                        }))
                    })).catch(a)
                }))
            }
            var h, v = 2266 != a.j ? (h = (0, n.Z)(l().mark((function e(t) {
                var a, n, o;
                return l().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, (0, f.fetchJSON)(d()(a = "/r/v1/sites/".concat(g.OE, "/membership/accounts/")).call(a, t, "/events"), {
                                method: "GET"
                            });
                        case 2:
                            return n = e.sent, e.next = 5, n.json();
                        case 5:
                            return o = e.sent, e.abrupt("return", null == o ? void 0 : o.data);
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), function(e) {
                return h.apply(this, arguments)
            }) : null
        },
        881832: function(e, t, a) {
            a.d(t, {
                A4: function() {
                    return l
                },
                dF: function() {
                    return i
                },
                bP: function() {
                    return r
                },
                uh: function() {
                    return n
                },
                TW: function() {
                    return u
                }
            });
            var n, o = a(348703),
                l = {
                    LOGIN: "LOGIN",
                    REGISTER: "REGISTER",
                    RESET_PASSWORD: "RESET_PASSWORD",
                    ACCOUNT_INFO: "ACCOUNT_INFO",
                    UPDATE_INFO: "UPDATE_INFO",
                    SUBSCRIPTIONS: "SUBSCRIPTIONS",
                    PAYMENT: "PAYMENT",
                    PAYMENT_SUCCESS: "PAYMENT_SUCCESS",
                    PAYMENT_FAILURE: "PAYMENT_FAILURE"
                },
                i = {
                    ORDER_LIST: "orderList",
                    ORDER_DETAIL: "orderDetail"
                },
                r = {
                    BOOKING_EVENT_LIST: "bookingEventList",
                    BOOKING_DETAIL: "bookingDetail"
                };
            ! function(e) {
                e.MEMBER_DIALOG = "memberDialog", e.ORDER_HISTORY = "memberOrderHistory", e.BOOKING_EVENT_LIST = "memberBookingEventList"
            }(n || (n = {}));
            var u = (0, o.Q)({
                initialState: {
                    memberDialog: {
                        isOpen: !1,
                        options: {
                            currentView: l.LOGIN
                        }
                    },
                    memberOrderHistory: {
                        isOpen: !1,
                        options: {
                            currentView: i.ORDER_LIST
                        }
                    },
                    memberBookingEventList: {
                        isOpen: !1,
                        options: {
                            currentView: r.BOOKING_EVENT_LIST
                        }
                    }
                }
            }).reduxToolkit
        },
        34822: function(e, t, a) {
            a.d(t, {
                cV: function() {
                    return o.Z
                },
                HL: function() {
                    return l.default
                },
                gt: function() {
                    return i
                },
                _r: function() {
                    return r
                },
                $B: function() {
                    return u
                },
                UT: function() {
                    return s
                },
                qj: function() {
                    return c
                },
                ls: function() {
                    return d
                },
                WW: function() {
                    return f.Z
                },
                jP: function() {
                    return g.Z
                },
                VT: function() {
                    return p.Z
                },
                $W: function() {
                    return m
                },
                Gg: function() {
                    return h
                },
                OE: function() {
                    return v
                },
                zw: function() {
                    return b
                }
            });
            var n = a(684961),
                o = a(878210),
                l = a(189508),
                i = a(818166),
                r = a(234584),
                u = a(607947),
                s = a(99729),
                c = a(71302),
                d = a(164760),
                f = a(574689),
                g = a(661390),
                p = a(602371),
                m = Boolean(n("standalone")),
                h = n("stores.pageMeta.forcedLocale") || n("blogPostData.pageMeta.forcedLocale"),
                v = n("stores.pageMeta.id") || n("blogPostData.pageMeta.id"),
                b = n("stores.pageMeta.theme.name") || n("blogPostData.pageMeta.theme.name")
        },
        879042: function(e, t, a) {
            a.r(t), a.d(t, {
                sxlValidateSocialMedia: function() {
                    return i
                },
                defaultSxlSocialMediaList: function() {
                    return r
                },
                sxlSocialMediaMap: function() {
                    return u
                },
                strikinglySocialMediaMap: function() {
                    return s
                },
                defaultSocialMediaList: function() {
                    return c
                },
                SOCIAL_MEDIA_CONFIG: function() {
                    return d
                },
                STRIKINGLY_SOCIAL_MEDIA_BUTTON_LIST: function() {
                    return f
                },
                SXL_SOCIAL_MEDIA_BUTTON_LIST: function() {
                    return g
                },
                INTI_SOCIAL_MEDIA_BUTTON_LIST: function() {
                    return p
                },
                INTI_SOCIAL_MEDIA_CONTACT_LIST: function() {
                    return m
                },
                SOCIAL_MEDIA_CONTACT_LIST_TYPE: function() {
                    return h
                }
            });
            var n = a(726469),
                o = a(828125),
                l = a(193917),
                i = {
                    LinkedIn: !0,
                    SinaWeibo: !0,
                    WeChat: !0,
                    DouYin: !0,
                    YouKu: !0,
                    Bilibili: !0,
                    TencentVideo: !0,
                    TieBa: !0
                },
                r = [{
                    id: (0, o.Bu)(),
                    url: "",
                    show_button: !1,
                    type: "LinkedIn",
                    className: "fab fa-linkedin-in"
                }, {
                    id: (0, o.Bu)(),
                    url: "",
                    show_button: !1,
                    type: "SinaWeibo",
                    className: "fab fa-weibo"
                }, {
                    id: (0, o.Bu)(),
                    url: "",
                    show_button: !1,
                    type: "WeChat",
                    className: "fab fa-weixin"
                }, {
                    id: (0, o.Bu)(),
                    url: "",
                    show_button: !1,
                    type: "DouYin",
                    className: "fab fa-tiktok"
                }, {
                    id: (0, o.Bu)(),
                    url: "",
                    show_button: !1,
                    type: "YouKu",
                    className: "fas fa-link"
                }, {
                    id: (0, o.Bu)(),
                    url: "",
                    show_button: !1,
                    type: "Bilibili",
                    className: "fas fa-link"
                }, {
                    id: (0, o.Bu)(),
                    url: "",
                    show_button: !1,
                    type: "TencentVideo",
                    className: "fas fa-link"
                }, {
                    id: (0, o.Bu)(),
                    url: "",
                    show_button: !1,
                    type: "TieBa",
                    className: "fas fa-link"
                }],
                u = {
                    LinkedIn: {
                        envType: n.Mb.sxl,
                        text: "SocialMedia|LinkedIn URL",
                        shareType: n.qy.URL,
                        placeholderUrl: "https://linkedin.com/in/sxlcn",
                        validateUrl: /^(https?:\/\/)?(\w+\.)?linkedin\.com/,
                        iconType: n.BC.FONT,
                        className: "fab fa-linkedin-in"
                    },
                    SinaWeibo: {
                        envType: n.Mb.sxl,
                        text: "SocialMedia|Weibo",
                        shareType: n.qy.URL,
                        placeholderUrl: "https://weibo.com/sxlcn",
                        validateUrl: /^(https?:\/\/)?(\w+\.)?weibo\.com/,
                        iconType: n.BC.FONT,
                        className: "fab fa-weibo"
                    },
                    WeChat: {
                        envType: n.Mb.sxl,
                        text: "SocialMedia|WeChat QR code",
                        shareType: n.qy.QR_CODE,
                        iconType: n.BC.FONT,
                        className: "fab fa-weixin"
                    },
                    DouYin: {
                        envType: n.Mb.sxl,
                        text: "SocialMedia|Douyin QR code",
                        shareType: n.qy.QR_CODE,
                        iconType: n.BC.FONT,
                        className: "fab fa-tiktok"
                    },
                    YouKu: {
                        envType: n.Mb.sxl,
                        shareType: n.qy.URL,
                        placeholderUrl: "https://v.youku.com/12345678",
                        validateUrl: /^(https?:\/\/)?v\.youku\.com/,
                        iconType: n.BC.SVG,
                        svgCode: l.youKu,
                        viewBox: "0 0 640 640",
                        text: "SocialMedia|Youku URL"
                    },
                    Bilibili: {
                        envType: n.Mb.sxl,
                        text: "SocialMedia|Bilibili URL",
                        shareType: n.qy.URL,
                        placeholderUrl: "https://www.bilibili.com/video/12345678",
                        validateUrl: /^(https?:\/\/)?(\w+\.)?bilibili\.com/,
                        iconType: n.BC.SVG,
                        svgCode: l.bilibili,
                        viewBox: "0 0 1024 1024"
                    },
                    TencentVideo: {
                        envType: n.Mb.sxl,
                        text: "SocialMedia|Tencent Video URL",
                        shareType: n.qy.URL,
                        placeholderUrl: "https://v.qq.com/12345678",
                        validateUrl: /^(https?:\/\/)?v\.qq\.com/,
                        iconType: n.BC.SVG,
                        svgCode: l.tencentVideo,
                        viewBox: "0 0 254.8 235.4"
                    },
                    TieBa: {
                        envType: n.Mb.sxl,
                        text: "SocialMedia|Tieba URL",
                        shareType: n.qy.URL,
                        placeholderUrl: "https://tieba.baidu.com/12345678",
                        validateUrl: /^(https?:\/\/)?tieba\.baidu\.com/,
                        iconType: n.BC.SVG,
                        svgCode: l.tieba,
                        viewBox: "0 0 256 256"
                    }
                },
                s = {
                    Facebook: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-facebook-f",
                        placeholderUrl: "https://facebook.com/strikingly",
                        iconType: n.BC.FONT
                    },
                    Twitter: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-twitter",
                        placeholderUrl: "https://x.com/strikingly",
                        iconType: n.BC.SVG,
                        svgCode: l.twitterX,
                        viewBox: "0 0 512 512"
                    },
                    LinkedIn: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-linkedin-in",
                        placeholderUrl: "https://linkedin.com/in/strikingly",
                        iconType: n.BC.FONT
                    },
                    Instagram: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-instagram",
                        placeholderUrl: "https://instagram.com/strikingly",
                        iconType: n.BC.FONT
                    },
                    YouTube: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-youtube",
                        placeholderUrl: "https://youtube.com/user/strikingly",
                        iconType: n.BC.FONT
                    },
                    Pinterest: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-pinterest",
                        placeholderUrl: "https://pinterest.com/strikingly",
                        iconType: n.BC.FONT
                    },
                    Snapchat: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-snapchat",
                        placeholderUrl: "https://www.snapchat.com/add/strikingly-example",
                        iconType: n.BC.FONT
                    },
                    TikTok: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-tiktok",
                        placeholderUrl: "https://",
                        iconType: n.BC.FONT
                    },
                    Messenger: {
                        envType: n.Mb.strikingly,
                        className: "fab fa-facebook-messenger",
                        placeholderUrl: "https://www.messenger.com/t/strikingly",
                        iconType: n.BC.FONT
                    }
                },
                c = [],
                d = {
                    facebook: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?facebook\.com/, /^(https?:\/\/)?(\w+\.)?fb\.me/],
                        className: "fab fa-facebook-f"
                    },
                    twitter: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?twitter\.com/, /^(https?:\/\/)?(\w+\.)?t\.co/, /^(https?:\/\/)?(\w+\.)?x\.com/],
                        className: "fab fa-twitter",
                        type: "Twitter"
                    },
                    linkedin: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?linkedin\.com/],
                        className: "fab fa-linkedin-in"
                    },
                    instagram: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?instagram\.com/],
                        className: "fab fa-instagram"
                    },
                    youtube: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?youtube\.com/, /^(https?:\/\/)?(\w+\.)?youtu\.be/],
                        className: "fab fa-youtube"
                    },
                    pinterest: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?pinterest\.com/, /^(https?:\/\/)?(\w+\.)?pin\.it/],
                        className: "fab fa-pinterest"
                    },
                    snapchat: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?snapchat\.com/],
                        className: "fab fa-snapchat"
                    },
                    tiktok: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?tiktok\.com/],
                        className: "fab fa-tiktok"
                    },
                    messenger: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?messenger\.com/, /^(https?:\/\/)?(\w+\.)?m\.me/],
                        className: "fab fa-facebook-messenger"
                    },
                    spotify: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?spotify\.com/],
                        className: "fab fa-spotify"
                    },
                    telegram: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?telegram\.me/, /^(https?:\/\/)?(\w+\.)?t\.me/, /^(https?:\/\/)?(\w+\.)?telegram\.org/],
                        className: "fab fa-telegram"
                    },
                    discord: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?discord\.com/, /^(https?:\/\/)?(\w+\.)?discord\.gg/, /^(https?:\/\/)?(\w+\.)?discordapp\.com/],
                        className: "fab fa-discord"
                    },
                    medium: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?medium\.com/],
                        className: "fab fa-medium"
                    },
                    twitch: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?twitch\.tv/],
                        className: "fab fa-twitch"
                    },
                    flickr: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?flickr\.com/, /^(https?:\/\/)?(\w+\.)?flicker\.com/, /^(https?:\/\/)?(\w+\.)?flic\.kr/],
                        className: "fab fa-flickr"
                    },
                    tumblr: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?tumblr\.com/],
                        className: "fab fa-tumblr"
                    },
                    vimeo: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?vimeo\.com/],
                        className: "fab fa-vimeo"
                    },
                    dribbble: {
                        validateUrl: [/^(https?:\/\/)?(\w+\.)?dribbble\.com/],
                        className: "fab fa-dribbble"
                    }
                },
                f = [{
                    type: "Facebook",
                    id: (0, o.Bu)(),
                    url: "",
                    link_url: "",
                    share_text: "",
                    show_button: !1
                }, {
                    type: "Twitter",
                    id: (0, o.Bu)(),
                    url: "",
                    link_url: "",
                    share_text: "",
                    show_button: !1
                }, {
                    type: "LinkedIn",
                    id: (0, o.Bu)(),
                    url: "",
                    link_url: "",
                    share_text: "",
                    show_button: !1
                }, {
                    type: "Pinterest",
                    id: (0, o.Bu)(),
                    url: "",
                    link_url: "",
                    share_text: "",
                    show_button: !1
                }],
                g = [{
                    type: "LinkedIn",
                    id: (0, o.Bu)(),
                    url: "",
                    link_url: "",
                    share_text: "",
                    show_button: !1
                }, {
                    type: "SinaWeibo",
                    id: (0, o.Bu)(),
                    url: "",
                    link_url: "",
                    share_text: "",
                    show_button: !1
                }],
                p = f,
                m = [{
                    className: "fas fa-phone-alt",
                    type: "SocialMediaPhone",
                    id: (0, o.Bu)(),
                    defaultValue: ""
                }, {
                    className: "fas fa-envelope",
                    type: "SocialMediaEmail",
                    id: (0, o.Bu)(),
                    defaultValue: ""
                }],
                h = {
                    PHONE: "SocialMediaPhone",
                    EMAIL: "SocialMediaEmail"
                }
        },
        71302: function(e, t, a) {
            a.d(t, {
                zk: function() {
                    return l.Z
                },
                TW: function() {
                    return n.TW
                },
                Yk: function() {
                    return o
                }
            });
            var n = a(152223),
                o = a(756759),
                l = a(200590)
        },
        99729: function(e, t, a) {
            a.d(t, {
                zk: function() {
                    return i
                },
                TW: function() {
                    return o.TW
                }
            });
            var n = a(353149),
                o = a(661017),
                l = a(873244),
                i = (0, n.Y)(l.Z)
        },
        164760: function(e, t, a) {
            a.d(t, {
                TW: function() {
                    return n.TW
                },
                zk: function() {
                    return r
                },
                Yk: function() {
                    return l
                }
            });
            var n = a(293879),
                o = a(772117),
                l = a(795663),
                i = a(197362),
                r = (0, o.Y)(i.Z)
        },
        792681: function(e, t, a) {
            a.r(t), a.d(t, {
                getAbTestRandomResult: function() {
                    return c
                },
                getAbTestRolloutWithCookie: function() {
                    return d
                },
                matchPbsI18nLocaleWithBrowserLocale: function() {
                    return f
                },
                getPbsI18nAbTest: function() {
                    return g
                }
            });
            var n = a(981643),
                o = a.n(n),
                l = (a(209653), a(496486)),
                i = a(836808),
                r = a(183123),
                u = a(267385),
                s = ["en", "zh-TW", "ja", "fr"],
                c = function(e, t) {
                    var a = 0,
                        n = null,
                        o = l.reduce(t, (function(e, t) {
                            return e + t
                        }), 0),
                        i = Math.random() * o;
                    return l.each(t, (function(t, o) {
                        if (a += Number(t), i <= a) return n = e[o], !1
                    })), n
                },
                d = function(e, t, a, n) {
                    var o = i.get(e);
                    if (o) return o;
                    var l = c(a, n) || "";
                    return i.set(e, l, {
                        expires: t
                    }), l
                },
                f = function() {
                    var e = (0, u.getBrowserLocale)(),
                        t = i.get("_pbs_i18n_ab_test");
                    return "b" === t && o()(s).call(s, e) > -1 || "a" === t && "en" === e
                },
                g = function() {
                    return r.getPbsI18n() ? d("_pbs_i18n_ab_test", 30, ["a", "b"], [.5, .5]) : "a"
                }
        },
        169042: function(e, t, a) {
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var l, i, r = a(487672),
                u = (0, o.default)(r),
                s = a(778914),
                c = (0, o.default)(s),
                d = a(359340),
                f = (0, o.default)(d),
                g = a(933032),
                p = (0, o.default)(g),
                m = a(678580),
                h = (0, o.default)(m),
                v = a(386912),
                b = (0, o.default)(v),
                y = a(23436),
                C = (0, o.default)(y),
                N = a(298657),
                w = (0, o.default)(N),
                k = a(141655),
                S = (0, o.default)(k),
                T = a(762903),
                _ = (0, o.default)(T),
                L = [],
                P = (l = {}, (0, u.default)(l, w.default.DELETE_ITEM, "nativeDeleteButton"), (0, u.default)(l, w.default.GALLERY_ADD_IMAGE, "nativeAddImage"), (0, u.default)(l, "getAction", (function(e) {
                    if (P[e]) return P[e]
                })), l),
                B = [w.default.SCROLL_TO_SECTION, w.default.OPEN_SECTION_SELECTOR, w.default.CLOSE_SECTION_SELECTOR, w.default.TOGGLE_SECTION_SELECTOR, w.default.TOGGLE_SIDE_MENU, w.default.SWITCH_PAGE, w.default.PULL_DOWN_AUDIENCE_PAGE, w.default.CLOSE_AUDIENCE_DETAIL, w.default.OPEN_AUDIENCE_DETAIL],
                x = (0, u.default)({}, w.default.ADD_TO_ASSET_LIBRARY, (function(e) {
                    _.default.addImageAsset({
                        img: e.payload.image
                    })
                })),
                E = function e(t) {
                    var a = (0, f.default)(t);
                    a && (L.push(a), console.info("Params scheduled for sendMessageToNative:\n", function(e) {
                        try {
                            return (0, f.default)(JSON.parse(e), null, 2)
                        } catch (t) {
                            return e
                        }
                    }(a))), window.NativeBridge && window.NativeBridge.sendMessageToNative ? ((0, c.default)(L).call(L, (function(e) {
                        window.NativeBridge.sendMessageToNative(e)
                    })), L = []) : (0, p.default)(e, 1e3)
                },
                I = {
                    setTarget: function(e) {
                        i = e
                    },
                    _getTarget: function() {
                        return i
                    },
                    sendMessageToWeb: function(e) {
                        if (console.info("sendMessageToWeb was called with params: ", e), e.meta && e.meta.id) {
                            var t = e.type,
                                a = e.payload,
                                n = i.props.dataProps ? i.props.dataProps.type : i.dtProps.type;
                            if (t === w.default.NATIVE_UPDATE_DATA) n || console.error("Binding target has no type", i.props), i.nativeUpdateData(b.default.convertToSnake(n, a));
                            else {
                                var o = P.getAction(t);
                                o ? i[o](a) : console.error("".concat(t, " on target is not found or allowed"))
                            }
                            S.default.save(), BlogEditorActions.save()
                        } else x[e.type] ? x[e.type](e) : (C.default.dispatch(e), (0, h.default)(B).call(B, e.type) || S.default.save())
                    },
                    sendMessageToNative: function(e) {
                        try {
                            E(e)
                        } catch (e) {
                            console.error("NativeBridge Error:", e.message)
                        }
                    }
                };
            t.default = I, window.DEBUG = window.DEBUG || {}, window.DEBUG.NativeBridge = I, e.exports = t.default
        },
        990264: function(e, t, a) {
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var l = a(51942),
                i = (0, o.default)(l),
                r = a(62431),
                u = a(879893),
                s = (0, o.default)(u),
                c = a(234584),
                d = (0, o.default)(c),
                f = a(141655),
                g = (0, o.default)(f),
                p = a(469155),
                m = (0, o.default)(p),
                h = a(604990),
                v = (0, o.default)(h),
                b = a(183123),
                y = (0, o.default)(b),
                C = a(105001);
            s.default.sharedProps = (0, r.sharedPropsBuilder)((function() {
                return []
            }), (function() {
                var e = {
                    pageId: d.default.getId(),
                    getPagination: v.default.getPagination,
                    getBlogShowDummyData: v.default.getBlogShowDummyData,
                    getPosts: v.default.getPosts,
                    getCategories: v.default.getCategories,
                    getBlogSetting: v.default.getBlogSetting,
                    getShowMorePostsWith: v.default.getShowMorePostsWith,
                    fromSiteToApp: y.default.getFromSiteToApp(),
                    addBlogPostsChangeListener: function(e, t) {
                        v.default.addBlogPostsChangeListener(e, t)
                    },
                    addBlogPostsLoadingStateListener: function(e, t) {
                        v.default.addBlogPostsLoadingStateListener(e, t)
                    },
                    removeBlogPostsLoadingStateListener: function(e, t) {
                        v.default.removeBlogPostsLoadingStateListener(e, t)
                    },
                    removeBlogPostsChangeListener: function(e, t) {
                        v.default.removeBlogPostsChangeListener(e, t)
                    },
                    addBlogCategoriesChangeListener: function(e) {
                        v.default.addBlogCategoriesChangeListener(e)
                    },
                    removeBlogCategoriesChangeListener: function(e) {
                        v.default.removeBlogCategoriesChangeListener(e)
                    }
                };
                return (0, i.default)({}, e)
            }), (function() {
                return {
                    fetchBlogPosts: function(e, t, a, n, o, l, i) {
                        return m.default.fetchBlogPosts(e, t, a, n, o, l, i)
                    },
                    updateBlogArchiveDialog: function(e, t, a, n) {
                        g.default.updateBlogArchiveDialog(e, t, a, n)
                    },
                    fetchBlogCategories: function(e, t) {
                        g.default.fetchBlogCategories(e, t)
                    }
                }
            }));
            var N = s.default;
            t.default = (0, C.addOffline)(N), e.exports = t.default
        },
        454275: function(e, t, a) {
            var n = a(353147),
                o = a(223765),
                l = a(501068),
                i = a(752424),
                r = a(663978),
                u = a(834074),
                s = a(60530)(a(60530));
            r(t, "__esModule", {
                value: !0
            });
            var c, d, f, g, p, m, h = a(726394),
                v = (0, s.default)(h),
                b = a(569198),
                y = (0, s.default)(b),
                C = a(705824),
                N = (0, s.default)(C),
                w = a(351379),
                k = (0, s.default)(w),
                S = a(900214),
                T = (0, s.default)(S),
                _ = a(566380),
                L = (0, s.default)(_),
                P = a(487672),
                B = (0, s.default)(P),
                x = a(812077),
                E = (0, s.default)(x);
            a(209653), a(241539), a(339714);
            var I = a(620116),
                M = (0, s.default)(I),
                O = a(2991),
                A = (0, s.default)(O),
                D = a(694473),
                U = (0, s.default)(D),
                R = a(977766),
                F = (0, s.default)(R),
                W = a(54103),
                z = (0, s.default)(W),
                j = a(277149),
                G = (0, s.default)(j),
                q = a(778914),
                V = (0, s.default)(q),
                Z = a(686902),
                Y = (0, s.default)(Z),
                H = a(366757),
                K = (0, s.default)(H),
                J = a(45697),
                Q = ((0, s.default)(J), a(223336)),
                $ = (0, s.default)(Q),
                X = a(496486),
                ee = (0, s.default)(X),
                te = a(294184),
                ae = (0, s.default)(te),
                ne = a(500134),
                oe = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var a = de(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {},
                        l = r && u;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var s = l ? u(e, i) : null;
                            s && (s.get || s.set) ? r(n, i, s) : n[i] = e[i]
                        }
                    return n.default = e, a && a.set(e, n), n
                }(a(818166)),
                le = a(421522),
                ie = (0, s.default)(le),
                re = a(285072),
                ue = (0, s.default)(re),
                se = a(43138),
                ce = (0, s.default)(se);

            function de(e) {
                if ("function" != typeof i) return null;
                var t = new i,
                    a = new i;
                return (de = function(e) {
                    return e ? a : t
                })(e)
            }
            var fe = function(e, t, a) {
                    var n, o = function(e, t) {
                            return (0, E.default)("li", {
                                className: "option",
                                "data-id": e
                            }, e, t)
                        },
                        l = (0, M.default)(n = e.children).call(n, (function(e) {
                            return e.id !== t
                        })),
                        i = (0, A.default)(l).call(l, (function(e) {
                            var t = e.id,
                                a = e.name;
                            return o(t, a)
                        })),
                        r = e.id,
                        u = e.name;
                    return r !== t && i.unshift(o(r, u)), (0, E.default)("ul", {
                        onClick: function(e) {
                            e.stopPropagation(), a(Number(e.target.dataset.id))
                        }
                    }, void 0, (0, A.default)(i).call(i, (function(e) {
                        return e
                    })))
                },
                ge = function(e) {
                    var t, a, n = e.category,
                        o = e.hidden,
                        l = e.currentCategory,
                        i = e.mobile,
                        r = e.index,
                        u = e.onClickFn,
                        s = e.categoryType,
                        d = e.isNeedStaticLink,
                        f = n.children,
                        g = (null == f ? void 0 : (0, U.default)(f).call(f, (function(e) {
                            return e.id === l
                        }))) || n,
                        p = g.id,
                        m = g.name,
                        h = "store";
                    oe.isInPortfolioCategoriesPage() ? h = "portfolio" : "blog" === s && (h = "blog");
                    var v = K.default.createElement(K.default.Fragment, null, d ? (0, E.default)("a", {
                        className: (0, ae.default)("category-link-item", {
                            selected: l === p || l === m,
                            "no-hover": i
                        }),
                        href: (0, F.default)(t = "/".concat(h, "/categories/")).call(t, m)
                    }, r + p + m, m) : (0, E.default)("span", {
                        className: (0, ae.default)("category-link-item", {
                            selected: l === p || l === m,
                            "no-hover": i
                        })
                    }, r + p + m, m));
                    return (0, E.default)("div", {
                        className: "category-link-item-wrapper",
                        onClick: function() {
                            return u(p)
                        },
                        style: {
                            display: o ? "none" : "inline-block"
                        }
                    }, void 0, null !== (a = n.children) && void 0 !== a && a.length ? (0, E.default)(ne.Popover, {
                        placement: "bottom",
                        whiteBg: !0,
                        trigger: "hover",
                        overlayClassName: "category-bar-popover",
                        content: fe(n, l, u)
                    }, void 0, v, c || (c = (0, E.default)("i", {
                        className: "entypo-right-open-big"
                    }))) : v)
                },
                pe = ie.default.decorate(ue.default)(d = function(e) {
                    (0, k.default)(i, e);
                    var t, a, o = (t = i, a = function() {
                        if ("undefined" == typeof Reflect || !l) return !1;
                        if (l.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(l(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, L.default)(t);
                        if (a) {
                            var o = (0, L.default)(this).constructor;
                            e = l(n, arguments, o)
                        } else e = n.apply(this, arguments);
                        return (0, T.default)(this, e)
                    });

                    function i(e) {
                        var t, a, n, l;
                        return (0, v.default)(this, i), l = o.call(this, e), (0, B.default)((0, N.default)(l), "listRefsWidth", 0), (0, B.default)((0, N.default)(l), "isNeedStaticLink", (function() {
                            return oe.isInStorePage, oe.isInPortfolioCategoriesPage, !1
                        })), l.state = {
                            showMore: !1,
                            changePosition: !1,
                            mobile: !1
                        }, l._onClickShowMore = (0, z.default)(t = l._onClickShowMore).call(t, (0, N.default)(l)), l._onClickShowLess = (0, z.default)(a = l._onClickShowLess).call(a, (0, N.default)(l)), l._changePosition = (0, z.default)(n = l._changePosition).call(n, (0, N.default)(l)), l
                    }
                    return (0, y.default)(i, [{
                        key: "componentWillMount",
                        value: function() {
                            var e;
                            this._shrinkIndex = 999, this._updateBar = ee.default.debounce((0, z.default)(e = this._updateBar).call(e, this), 50)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this._updateBar(), this._changePosition(), this.listRefsWidth = window.innerWidth, (0, $.default)(window).on("resize", (function() {
                                e.listRefsWidth !== window.innerWidth && (e.listRefsWidth = window.innerWidth, e._updateBar())
                            })), this.setState({
                                mobile: ce.default.isMobile()
                            })
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e, t) {
                            var a = this;
                            e.categories.length !== this.props.categories.length && this._updateBar(), !t.changePosition && this.state.changePosition && this.setTimeout((function() {
                                var e, t = (0, U.default)(e = (0, $.default)(a.refs.list)).call(e, ".top-list"),
                                    n = (0, U.default)(t).call(t, ".selected");
                                n.length && t.scrollLeft(t.scrollLeft() + n.offset().left - t.offset().left - 10), a.setState({
                                    changePosition: !1
                                })
                            }), 10)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            (0, $.default)(window).off("resize", this._updateBar)
                        }
                    }, {
                        key: "_changePosition",
                        value: function() {
                            this.setState({
                                changePosition: !0,
                                showMore: !1
                            })
                        }
                    }, {
                        key: "_onClickShowMore",
                        value: function() {
                            this.setState({
                                showMore: !0
                            })
                        }
                    }, {
                        key: "_onClickShowLess",
                        value: function() {
                            this.setState({
                                showMore: !1
                            })
                        }
                    }, {
                        key: "_updateBar",
                        value: function() {
                            var e = this,
                                t = 0;
                            this._shrinkIndex = 999, this.forceUpdate();
                            var a = (0, $.default)(this.refs.list).width() || 0;
                            this.setTimeout((function() {
                                var n;
                                (0, U.default)(n = (0, $.default)(e.refs.list)).call(n, ".check-list .category-link-item-wrapper").each((function(n, o) {
                                    if (t += (0, $.default)(o).outerWidth(!0), a <= t + 50) return e._shrinkIndex = n, !1
                                })), e.forceUpdate()
                            }), 100)
                        }
                    }, {
                        key: "formatCategories",
                        value: function(e) {
                            if ((0, G.default)(e).call(e, (function(e) {
                                    return 1 !== e.level
                                }))) {
                                var t, a = {},
                                    n = ee.default.cloneDeep(e);
                                return (0, V.default)(e).call(e, (function(e, t) {
                                    var o = e.parent_id,
                                        l = e.id;
                                    o && (a[o] ? a[o].push(e) : a[o] = [e], n = (0, M.default)(n).call(n, (function(e) {
                                        return e.id !== l
                                    })))
                                })), (0, V.default)(t = (0, Y.default)(a)).call(t, (function(e) {
                                    var t = (0, U.default)(n).call(n, (function(t) {
                                        return t.id.toString() === e
                                    }));
                                    t && (t.children = a[e] || [])
                                })), n
                            }
                            return e
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a = this,
                                o = this.props,
                                l = o.changeCategory,
                                i = o.sbClass,
                                r = o.isCategoryIdExist,
                                u = o.categoryType,
                                s = this.props.currentCategory,
                                c = this.state,
                                d = c.showMore,
                                h = c.mobile,
                                v = ee.default.cloneDeep("blog" === u ? (0, M.default)(e = this.props.categories).call(e, (function(e) {
                                    return e.count > 0
                                })) : (0, M.default)(t = this.props.categories).call(t, (function(e) {
                                    return e.products_count > 0
                                })));
                            return (v = this.formatCategories(v)).unshift({
                                name: n("Ecommerce|All"),
                                id: "all"
                            }), r(s) || (s = "all"), K.default.createElement("div", {
                                className: (0, ae.default)("s-category-bar s-font-body clearfix ".concat(i || ""), {
                                    shrinked: this._shrinkIndex < v.length
                                }),
                                ref: "list"
                            }, !1, h && (0, E.default)("div", {
                                className: "category-list"
                            }, void 0, (0, E.default)("div", {
                                className: "top-bar check-list ".concat(d ? "hide-top-bar" : "")
                            }, void 0, (0, E.default)("div", {
                                className: "top-list"
                            }, void 0, (0, A.default)(v).call(v, (function(e, t) {
                                return (0, E.default)(ge, {
                                    isNeedStaticLink: a.isNeedStaticLink(),
                                    currentCategory: s,
                                    category: e,
                                    index: t,
                                    mobile: h,
                                    categoryType: u,
                                    hidden: !d && t >= a._shrinkIndex,
                                    onClickFn: l
                                })
                            })))), this._shrinkIndex < v.length && !d && (0, E.default)("div", {
                                className: "show-more-link mobile-link",
                                onClick: this._onClickShowMore
                            }, void 0, f || (f = (0, E.default)("i", {
                                className: "fa fa-angle-down"
                            }))), d && (0, A.default)(v).call(v, (function(e, t) {
                                return (0, E.default)(ge, {
                                    currentCategory: s,
                                    category: e,
                                    index: t,
                                    mobile: h,
                                    categoryType: u,
                                    isNeedStaticLink: a.isNeedStaticLink(),
                                    onClickFn: function(e) {
                                        return l(e)
                                    }
                                })
                            })), this._shrinkIndex < v.length && d && (0, E.default)("div", {
                                className: "show-more-link",
                                onClick: this._onClickShowLess
                            }, void 0, g || (g = (0, E.default)("i", {
                                className: "fa fa-angle-up"
                            })))), !h && (0, E.default)("div", {
                                className: "category-list check-list"
                            }, void 0, (0, A.default)(v).call(v, (function(e, t) {
                                return (0, E.default)(ge, {
                                    currentCategory: s,
                                    category: e,
                                    index: t,
                                    mobile: h,
                                    categoryType: u,
                                    hidden: !d && t >= a._shrinkIndex,
                                    isNeedStaticLink: a.isNeedStaticLink(),
                                    onClickFn: l
                                })
                            })), this._shrinkIndex < v.length && !d && (0, E.default)("div", {
                                className: "show-more-link",
                                onClick: this._onClickShowMore
                            }, void 0, p || (p = (0, E.default)("i", {
                                className: "fa fa-angle-down"
                            }))), this._shrinkIndex < v.length && d && (0, E.default)("div", {
                                className: "show-more-link",
                                onClick: this._onClickShowLess
                            }, void 0, m || (m = (0, E.default)("i", {
                                className: "fa fa-angle-up"
                            })))))
                        }
                    }]), i
                }(K.default.Component)) || d;
            t.default = pe, e.exports = t.default
        },
        755802: function(e, t, a) {
            var n = a(501068),
                o = a(663978),
                l = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(812077),
                r = (0, l.default)(i),
                u = a(726394),
                s = (0, l.default)(u),
                c = a(569198),
                d = (0, l.default)(c),
                f = a(351379),
                g = (0, l.default)(f),
                p = a(900214),
                m = (0, l.default)(p),
                h = a(566380),
                v = (0, l.default)(h),
                b = a(366757),
                y = (0, l.default)(b),
                C = a(45697);
            (0, l.default)(C);
            var N = function(e) {
                (0, g.default)(l, e);
                var t, a, o = (t = l, a = function() {
                    if ("undefined" == typeof Reflect || !n) return !1;
                    if (n.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(n(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, o = (0, v.default)(t);
                    if (a) {
                        var l = (0, v.default)(this).constructor;
                        e = n(o, arguments, l)
                    } else e = o.apply(this, arguments);
                    return (0, m.default)(this, e)
                });

                function l() {
                    return (0, s.default)(this, l), o.apply(this, arguments)
                }
                return (0, d.default)(l, [{
                    key: "render",
                    value: function() {
                        return (0, r.default)("div", {
                            className: "s-mobile-disabled-notice"
                        }, void 0, (0, r.default)("span", {
                            className: "s-common-status s-font-body"
                        }, void 0, this.props.disabledNotice))
                    }
                }]), l
            }(y.default.Component);
            t.default = N, e.exports = t.default
        },
        487628: function(e, t, a) {
            var n = a(501068),
                o = a(663978),
                l = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var i = a(205872),
                r = (0, l.default)(i),
                u = a(726394),
                s = (0, l.default)(u),
                c = a(569198),
                d = (0, l.default)(c),
                f = a(351379),
                g = (0, l.default)(f),
                p = a(900214),
                m = (0, l.default)(p),
                h = a(566380),
                v = (0, l.default)(h),
                b = a(366757),
                y = (0, l.default)(b),
                C = a(45697),
                N = ((0, l.default)(C), a(454275)),
                w = (0, l.default)(N),
                k = a(604990),
                S = (0, l.default)(k),
                T = a(205223),
                _ = (0, l.default)(T);
            var L = function(e) {
                    (0, g.default)(l, e);
                    var t, a, o = (t = l, a = function() {
                        if ("undefined" == typeof Reflect || !n) return !1;
                        if (n.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(n(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, o = (0, v.default)(t);
                        if (a) {
                            var l = (0, v.default)(this).constructor;
                            e = n(o, arguments, l)
                        } else e = o.apply(this, arguments);
                        return (0, m.default)(this, e)
                    });

                    function l() {
                        return (0, s.default)(this, l), o.apply(this, arguments)
                    }
                    return (0, d.default)(l, [{
                        key: "render",
                        value: function() {
                            return y.default.createElement(w.default, (0, r.default)({}, this.props, {
                                categoryType: "blog"
                            }))
                        }
                    }]), l
                }(y.default.Component),
                P = (0, _.default)(L, [], (function() {
                    return {
                        isCategoryIdExist: function(e) {
                            return S.default.isCategoryIdExist(e)
                        }
                    }
                }));
            t.default = P, e.exports = t.default
        },
        476914: function(e, t, a) {
            var n = a(353147),
                o = a(223765),
                l = a(752424),
                i = a(663978),
                r = a(834074),
                u = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var s = a(811128),
                c = (0, u.default)(s),
                d = a(977766),
                f = (0, u.default)(d),
                g = a(678580),
                p = (0, u.default)(g),
                m = a(730381),
                h = (0, u.default)(m);
            a(815461);
            var v = a(912972),
                b = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var a = y(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {},
                        l = i && r;
                    for (var u in e)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                            var s = l ? r(e, u) : null;
                            s && (s.get || s.set) ? i(n, u, s) : n[u] = e[u]
                        }
                    return n.default = e, a && a.set(e, n), n
                }(a(996646));

            function y(e) {
                if ("function" != typeof l) return null;
                var t = new l,
                    a = new l;
                return (y = function(e) {
                    return e ? a : t
                })(e)
            }
            var C = {
                formatDate: function(e, t, a) {
                    return b.formatDate(e, t, a)
                },
                fromNow: function(e, t, a) {
                    if (e) {
                        var o = (0, h.default)(e).locale(t),
                            l = (0, h.default)().diff(o, "days");
                        return l < 1 ? o.fromNow() : 1 === l ? "".concat(n("Blog|a day ago")) : l <= 31 ? (0, v.t)(n("Blog|%{number} days ago"), {
                            number: l
                        }) : o.format(a || b.getDateFormat(t))
                    }
                    return ""
                },
                isExpired: function(e) {
                    return new Date - new Date(e) > 0
                },
                getLastSaveText: function(e) {
                    var t = (0, c.default)() - e;
                    return t < 3e4 ? n("Editor|Saved just now.") : t < 9e4 ? n("Editor|Saved 1 min ago.") : n("Editor|Saved %{minutes} min ago.", {
                        minutes: ~~(t / 1e3 / 60)
                    })
                },
                formatPublishedDate: function(e, t) {
                    return e ? (0, h.default)(e).locale(t).format(b.getDateFormat(t)) : ""
                },
                formatBlogDate: function(e, t, a, o, l, i) {
                    var r, u, s, c, d = e || t,
                        g = n("Blog|Scheduled for %{var}", {
                            var: (0, h.default)(a).lang(o).format("lll")
                        });
                    return "scheduled" === t ? (0, f.default)(r = "".concat(g, " ")).call(r, C.fromNow(l, o)) : (0, p.default)(u = ["published", "pass"]).call(u, d) ? (0, f.default)(s = "".concat(n("Published"), " ")).call(s, C.formatPublishedDate(l, o)) : (0, f.default)(c = "".concat(n("Draft created"), " ")).call(c, C.fromNow(i, o))
                }
            };
            t.default = C, e.exports = t.default
        },
        851922: function(e, t, a) {
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var l = a(387937),
                i = (0, o.default)(l);
            t.default = function(e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
                        return {}
                    },
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
                        return {}
                    };
                return (0, i.default)(e, (function(e, a) {
                    return t(a)
                }), (function(e, t) {
                    return a(t)
                }), "Stores")
            }, e.exports = t.default
        },
        109245: function(e, t, a) {
            var n = a(353147),
                o = a(663978),
                l = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var i, r, u, s, c, d, f = a(812077),
                g = (0, l.default)(f),
                p = a(726394),
                m = (0, l.default)(p),
                h = a(569198),
                v = (0, l.default)(h),
                b = a(977766),
                y = (0, l.default)(b),
                C = a(20455),
                N = (0, l.default)(C),
                w = a(678580),
                k = (0, l.default)(w),
                S = a(778914),
                T = (0, l.default)(S),
                _ = a(694473),
                L = (0, l.default)(_);
            a(974916), a(323123), a(569600);
            var P = a(366757),
                B = (0, l.default)(P),
                x = a(234584),
                E = (0, l.default)(x),
                I = a(766463),
                M = ["grid", "card"],
                O = "automatic",
                A = [{
                    key: "columns_mobile",
                    label: function() {
                        return n("Editor|Columns")
                    },
                    component: "select",
                    children: [{
                        value: O,
                        label: function() {
                            return n("Automatic")
                        }
                    }, {
                        value: "one",
                        label: function() {
                            return "1"
                        },
                        visible: [{
                            type: "structure",
                            value: M
                        }]
                    }, {
                        value: "two",
                        label: function() {
                            return "2"
                        },
                        visible: [{
                            type: "structure",
                            value: M
                        }]
                    }],
                    defaultValue: O
                }],
                D = {
                    one: 1,
                    two: 2,
                    three: 3,
                    four: 4
                },
                U = {
                    none: !1,
                    show: !0
                };
            for (var R in U) U[U[R]] = R;
            var F = {
                    imageAlignment: "s-avatar-alignment",
                    imageShape: "s-avatar",
                    imageSize: "s-avatar",
                    snippetLength: "s-snippet"
                },
                W = [{
                    key: "structure",
                    label: function() {
                        return n("Editor|Structure")
                    },
                    component: "select",
                    children: [{
                        value: "rows",
                        label: function() {
                            return n("Editor|List")
                        }
                    }, {
                        value: "grid",
                        label: function() {
                            return n("Editor|Grid")
                        }
                    }, {
                        value: "card",
                        label: function() {
                            return n("Editor|Card")
                        }
                    }, {
                        value: "tiled",
                        label: function() {
                            return n("Editor|Tiled")
                        }
                    }]
                }, {
                    key: "columns",
                    label: function() {
                        return n("Editor|Columns")
                    },
                    component: "button",
                    visible: [{
                        type: "structure",
                        value: ["grid", "card", "tiled"]
                    }],
                    children: [{
                        value: 1,
                        label: function() {
                            return "1"
                        },
                        visible: [{
                            type: "structure",
                            value: ["grid", "card"]
                        }]
                    }, {
                        value: 2,
                        label: function() {
                            return "2"
                        }
                    }, {
                        value: 3,
                        label: function() {
                            return "3"
                        }
                    }, {
                        value: 4,
                        label: function() {
                            return "4"
                        }
                    }]
                }, {
                    key: "imageShape",
                    label: function() {
                        return n("Editor|Image Shape")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["rows", "grid", "card"]
                    }],
                    children: [{
                        value: "square",
                        label: function() {
                            return n("Editor|Square")
                        }
                    }, {
                        value: "landscape-4-3",
                        label: function() {
                            return n("Editor|Landscape (4:3)")
                        }
                    }, {
                        value: "landscape-16-9",
                        label: function() {
                            return n("Editor|Landscape (16:9)")
                        }
                    }, {
                        value: "landscape-4-1",
                        label: function() {
                            return n("Editor|Landscape (4:1)")
                        }
                    }, {
                        value: "circle",
                        label: function() {
                            return n("Editor|Small circle")
                        },
                        visible: [{
                            type: "structure",
                            value: ["rows"]
                        }]
                    }, {
                        value: "none",
                        label: function() {
                            return n("Editor|No image")
                        },
                        visible: [{
                            type: "structure",
                            value: ["rows"]
                        }]
                    }]
                }, {
                    key: "imageAlignment",
                    label: function() {
                        return n("Editor|Image Alignment")
                    },
                    component: "button",
                    visible: [{
                        type: "structure",
                        value: ["rows"]
                    }, {
                        type: "imageShape",
                        value: ["square", "circle", "landscape-4-3", "landscape-16-9", "landscape-4-1"]
                    }],
                    children: [{
                        value: "left",
                        label: function() {
                            return n("Editor|Left")
                        }
                    }, {
                        value: "right",
                        label: function() {
                            return n("Editor|Right")
                        }
                    }]
                }, {
                    key: "imageSize",
                    label: function() {
                        return n("Editor|Image Size")
                    },
                    component: "button",
                    visible: [{
                        type: "structure",
                        value: ["rows"]
                    }, {
                        type: "imageShape",
                        value: ["square", "landscape-4-3", "landscape-16-9", "landscape-4-1"]
                    }],
                    children: [{
                        value: "s",
                        label: function() {
                            return n("Editor|S")
                        }
                    }, {
                        value: "m",
                        label: function() {
                            return n("Editor|M")
                        }
                    }, {
                        value: "l",
                        label: function() {
                            return n("Editor|L")
                        }
                    }]
                }, {
                    key: "snippetLength",
                    label: function() {
                        return n("Editor|Snippet")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["rows", "grid"]
                    }],
                    children: [{
                        value: "none",
                        label: function() {
                            return n("Editor|No snippet")
                        }
                    }, {
                        value: "short",
                        label: function() {
                            return n("Editor|Short snippet")
                        }
                    }, {
                        value: "long",
                        label: function() {
                            return n("Editor|Long snippet")
                        },
                        visible: [{
                            type: "structure",
                            value: ["rows"]
                        }]
                    }]
                }],
                z = null;

            function j() {
                return z || (z = {
                    columnOne: {
                        thumbnail: [{
                            value: "none",
                            name: n("Editor|No thumbnail")
                        }, {
                            value: "smallCircle",
                            name: n("Editor|Small circle")
                        }, {
                            value: "smallSquare",
                            name: n("Editor|Small square")
                        }, {
                            value: "landscape",
                            name: n("Editor|Landscape")
                        }],
                        snippet: [{
                            value: "none",
                            name: n("Editor|No snippet")
                        }, {
                            value: "short",
                            name: n("Editor|Short snippet")
                        }, {
                            value: "long",
                            name: n("Editor|Long snippet")
                        }]
                    },
                    columnOther: {
                        thumbnail: [{
                            value: "landscape",
                            name: n("Editor|Landscape")
                        }, {
                            value: "card",
                            name: n("Editor|Card")
                        }],
                        snippet: {
                            landscape: [{
                                value: "none",
                                name: n("Editor|No snippet")
                            }, {
                                value: "short",
                                name: n("Editor|Short snippet")
                            }],
                            card: [{
                                value: "none",
                                name: n("Editor|No snippet")
                            }]
                        }
                    }
                }), z
            }
            var G = ["one-thumbnail-snippet", "one-thumbnail-none", "one-none-none", "one-none-snippet", "one-landscape-none", "one-landscape-snippet", "num-landscape-none", "num-landscape-short", "num-card-none"],
                q = {
                    thumbnail: {
                        none: "none",
                        smallCircle: "circle",
                        smallSquare: "square",
                        landscape: "landscape",
                        card: "card"
                    },
                    snippet: {
                        none: 0,
                        short: 100,
                        long: 300
                    },
                    titleLength: {
                        one: 999,
                        two: 100,
                        three: 68,
                        four: 68
                    }
                },
                V = function() {
                    function e(t) {
                        (0, m.default)(this, e);
                        var a = t.split("-");
                        this.columns = a[0], this.thumbnail = a[1], this.snippet = a[2], this.showCategoryTabs = U[a[3]]
                    }
                    return (0, v.default)(e, [{
                        key: "serialize",
                        value: function() {
                            var e = this.columns,
                                t = this.thumbnail,
                                a = this.snippet,
                                n = this.showCategoryTabs;
                            return [e, t, a, U[n]].join("-")
                        }
                    }, {
                        key: "getAllColumns",
                        value: function() {
                            return D
                        }
                    }, {
                        key: "getThumbnailSelectItem",
                        value: function() {
                            var e = j();
                            return "one" === this.columns ? e.columnOne.thumbnail : e.columnOther.thumbnail
                        }
                    }, {
                        key: "getSnippetSelectItem",
                        value: function() {
                            var e = j();
                            return "one" === this.columns ? e.columnOne.snippet : e.columnOther.snippet[this.thumbnail]
                        }
                    }, {
                        key: "isRowAndLandscapeThumbnail",
                        value: function() {
                            return "one" === this.columns && "landscape" === this.thumbnail
                        }
                    }, {
                        key: "isRowAndNoneThumbnail",
                        value: function() {
                            return "one" === this.columns && "none" === this.thumbnail
                        }
                    }, {
                        key: "isColumnsAndCard",
                        value: function() {
                            return "one" !== this.columns && "card" === this.thumbnail
                        }
                    }, {
                        key: "isColumns",
                        value: function() {
                            return "one" !== this.columns
                        }
                    }, {
                        key: "getLayoutClass",
                        value: function() {
                            var e;
                            return "one" === this.columns ? "s-layout-row s-avatar-".concat(q.thumbnail[this.thumbnail]) : (0, y.default)(e = "s-layout-columns ".concat(this.columns, "  s-avatar-")).call(e, q.thumbnail[this.thumbnail])
                        }
                    }]), e
                }(),
                Z = {},
                Y = {
                    default: {
                        A: "one-smallCircle-long-none",
                        B: "one-smallCircle-none-none",
                        C: "one-none-long-none",
                        D: "one-landscape-short-none",
                        E: "one-landscape-long-none",
                        F: "three-landscape-short-none"
                    },
                    glow: {
                        A: "one-smallCircle-long-none",
                        B: "one-smallCircle-none-none",
                        C: "one-none-long-none",
                        D: "one-landscape-short-none",
                        E: "one-landscape-long-none",
                        F: "three-landscape-short-none",
                        G: "three-card-none-none"
                    }
                },
                H = {
                    getDefaultLayoutKey: function(e, t) {
                        var a;
                        return t ? (a = (Y[e] || Y.default)[t]) || (a = t) : a = Y.default.A, a
                    },
                    getLayout: function(e, t) {
                        var a = this.parseLayoutVariation(t);
                        return function() {
                            var n, o = (0, y.default)(n = "".concat(e, "-")).call(n, t);
                            if (Z[o]) return Z[o];
                            var l = {
                                showCategoryTabs: a.showCategoryTabs,
                                isRowAndLandscapeThumbnail: a.isRowAndLandscapeThumbnail(),
                                layoutClass: a.getLayoutClass(),
                                isColumns: a.isColumns(),
                                snippetLength: q.snippet[a.snippet],
                                isColumnsAndCard: a.isColumnsAndCard(),
                                isRowAndNoneThumbnail: a.isRowAndNoneThumbnail(),
                                titleLength: q.titleLength[a.columns]
                            };
                            return Z[o] = l, l
                        }
                    },
                    getNewLayout: function(e, t) {
                        if (!e) return {};
                        var a = this.parseLayoutVariation(t),
                            n = this.getColumnsClassname(),
                            o = e.get("structure"),
                            l = e.get("imageShape"),
                            i = "rows" !== o;
                        return {
                            showCategoryTabs: a.showCategoryTabs,
                            isRowAndLandscapeThumbnail: !i && "circle" !== l && "none" !== l,
                            layoutClass: this.getNewLayoutClass(e),
                            isColumns: i,
                            snippetLength: q.snippet[e.get("snippetLength")],
                            isColumnsAndCard: "card" === o,
                            isRowAndNoneThumbnail: !i && "none" === l,
                            titleLength: q.titleLength[n[e.get("columns") - 1]]
                        }
                    },
                    parseLayoutVariation: function(e) {
                        return new V(e)
                    },
                    getLayoutOptions: function() {
                        return G
                    },
                    getOldLayoutOptions: function(e) {
                        var t = Y[e] || Y.default;
                        return (0, N.default)(t)
                    },
                    getArchiveDialogClass: function(e) {
                        var t = this.parseLayoutVariation(e);
                        return "s-avatar-".concat(q.thumbnail[t.thumbnail])
                    },
                    getNewLayoutClass: function(e) {
                        var t, a, n = this.getColumnsClassname(),
                            o = e.get("columns"),
                            l = e.get("columns_mobile"),
                            i = e.get("structure"),
                            r = e.get("imageShape"),
                            u = (0, y.default)(t = (0, y.default)(a = "s-blog-new-layout s-blog-new-layout-".concat(i, " ")).call(a, n[o - 1], " ")).call(t, (0, k.default)(M).call(M, i) && l ? "mobile-".concat(l, "-columns mobile-columns") : "");
                        return "rows" === i ? (u += " s-layout-row", "perspective" === E.default.getThemeName() && (u += " s-blog-entry-wide-margin")) : u += " s-layout-columns", "none" !== r && "circle" !== r && (u += " s-avatar-landscape"), "card" === i && (u += " s-avatar-card"), (0, T.default)(e).call(e, (function(e, t) {
                            var a;
                            F[t] && (u += (0, y.default)(a = " ".concat(F[t], "-")).call(a, e))
                        })), u
                    },
                    getNewLayoutConfigByVariation: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = e.split("-") || [],
                            a = {
                                imageShape: "none",
                                columns: D[t[0]] || 3,
                                snippetLength: "short",
                                customized: !0,
                                imageSize: "m",
                                imageAlignment: "left"
                            };
                        return "one" === t[0] ? (a.structure = "rows", a.columns = 1, a.templateName = "D", "smallSquare" === t[1] && (a.imageShape = "square", a.imageSize = "s", a.templateName = "A"), "smallCircle" === t[1] ? (a.imageShape = "circle", a.templateName = "A") : "landscape" === t[1] && (a.imageShape = "landscape-16-9", a.templateName = "A", a.imageAlignment = "right")) : "card" === t[1] ? (a.structure = "card", a.templateName = "C", a.imageShape = "square") : (a.structure = "grid", a.imageShape = "landscape-16-9", a.templateName = "B"), "none" === t[2] && (a.snippetLength = "none"), "long" === t[2] && (a.snippetLength = "long"), "three" === t[0] && "none" === t[2] && (a.customized = !1), a
                    },
                    getNewLayoutConfigByTemplate: function(e) {
                        var t = [{
                            templateName: "A",
                            structure: "rows",
                            imageShape: "landscape-4-3",
                            imageAlignment: "left",
                            imageSize: "m",
                            columns: 1,
                            snippetLength: "short",
                            customized: !1
                        }, {
                            templateName: "B",
                            structure: "grid",
                            imageShape: "square",
                            imageAlignment: "left",
                            imageSize: "m",
                            columns: 3,
                            snippetLength: "short",
                            customized: !1
                        }, {
                            templateName: "C",
                            structure: "card",
                            imageShape: "square",
                            imageAlignment: "left",
                            imageSize: "m",
                            columns: 3,
                            snippetLength: "none",
                            customized: !1
                        }, {
                            templateName: "D",
                            structure: "rows",
                            imageShape: "none",
                            imageAlignment: "left",
                            imageSize: "m",
                            columns: 1,
                            snippetLength: "short",
                            customized: !1
                        }, {
                            templateName: "E",
                            structure: "grid",
                            imageShape: "landscape-16-9",
                            imageAlignment: "left",
                            imageSize: "m",
                            columns: 1,
                            snippetLength: "short",
                            customized: !1
                        }, {
                            templateName: "F",
                            structure: "tiled",
                            imageShape: "square",
                            imageAlignment: "left",
                            imageSize: "m",
                            columns: 3,
                            snippetLength: "none",
                            customized: !1
                        }];
                        return (0, L.default)(t).call(t, (function(t) {
                            return t.templateName === e
                        })) || {}
                    },
                    getNewLayoutTemplates: function() {
                        return [{
                            name: "A",
                            template: i || (i = (0, g.default)(B.default.Fragment, {}, void 0, (0, g.default)("div", {
                                className: "left"
                            }, void 0, (0, g.default)("div", {
                                className: "block"
                            })), (0, g.default)("div", {
                                className: "right"
                            }, void 0, (0, g.default)("div", {
                                className: "title"
                            }), (0, g.default)("div", {
                                className: "subtitle"
                            }))))
                        }, {
                            name: "B",
                            template: r || (r = (0, g.default)(B.default.Fragment, {}, void 0, (0, g.default)("div", {
                                className: "left"
                            }, void 0, (0, g.default)("div", {
                                className: "block"
                            }), (0, g.default)("div", {
                                className: "title"
                            })), (0, g.default)("div", {
                                className: "right"
                            }, void 0, (0, g.default)("div", {
                                className: "block"
                            }), (0, g.default)("div", {
                                className: "title"
                            }))))
                        }, {
                            name: "C",
                            template: u || (u = (0, g.default)(B.default.Fragment, {}, void 0, (0, g.default)("div", {
                                className: "left"
                            }, void 0, (0, g.default)("div", {
                                className: "block"
                            }), (0, g.default)("div", {
                                className: "title"
                            })), (0, g.default)("div", {
                                className: "right"
                            }, void 0, (0, g.default)("div", {
                                className: "block"
                            }), (0, g.default)("div", {
                                className: "title"
                            }))))
                        }, {
                            name: "D",
                            template: s || (s = (0, g.default)("div", {
                                className: "layout-template-d"
                            }, void 0, (0, g.default)("div", {
                                className: "title"
                            }), (0, g.default)("div", {
                                className: "title"
                            })))
                        }, {
                            name: "E",
                            template: c || (c = (0, g.default)(B.default.Fragment, {}, void 0, (0, g.default)("div", {
                                className: "block"
                            }), (0, g.default)("div", {
                                className: "title"
                            })))
                        }, {
                            name: "F",
                            template: d || (d = (0, g.default)(B.default.Fragment, {}, void 0, (0, g.default)("div", {
                                className: "left"
                            }, void 0, (0, g.default)("div", {
                                className: "block"
                            }), (0, g.default)("div", {
                                className: "block small"
                            })), (0, g.default)("div", {
                                className: "right"
                            }, void 0, (0, g.default)("div", {
                                className: "block small"
                            }), (0, g.default)("div", {
                                className: "block"
                            }))))
                        }]
                    },
                    getNewLayoutOptions: function(e) {
                        return (0, I.getLayoutOptions)(e, W)
                    },
                    getColumnsClassname: function() {
                        return ["one", "two", "three", "four"]
                    },
                    getAvailableMobileLayouts: function() {
                        return M
                    },
                    getMobileLayoutOptions: function(e) {
                        return (0, I.getLayoutOptions)(e, A)
                    }
                };
            t.default = H, e.exports = t.default
        },
        766463: function(e, t, a) {
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var l = a(223765),
                i = (0, o.default)(l);
            t.getLayoutMapping = function(e) {
                var t, a = {};
                return (0, u.default)(t = (0, c.default)(e)).call(t, (function(t) {
                    return a[t] = (n = e[t], o = {}, function e() {
                        var t, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        (0, u.default)(t = (0, c.default)(a)).call(t, (function(t) {
                            var l = n + (n ? "-".concat(t) : t),
                                r = a[t];
                            "object" !== (0, i.default)(r) ? o[l] = r: e(l, r)
                        }))
                    }("", n), o);
                    var n, o
                })), a
            }, t.getThemeName = x, t.getThemeFeature = E, t.generateColumnClassWithOffset = I, t.generateColumnClass = M, t.generateItemClassByColumnsNum = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    a = 16,
                    n = x(),
                    o = "";
                if ("persona" === n) o = 4 === e ? "three columns half-fixed" : 5 === e ? "spfive columns half-fixed" : 6 === e ? "two columns half-fixed" : M(12 / e);
                else switch (e) {
                    case 1:
                        o = E("narrowMedia") ? t ? M(14) : I(14, 14) : M(a);
                        break;
                    case 3:
                        o = "third columns";
                        break;
                    case 4:
                        o = "four columns half-fixed";
                        break;
                    case 5:
                        o = "fifth columns half-fixed";
                        break;
                    case 6:
                        o = "sixth columns half-fixed";
                        break;
                    default:
                        o = M(a / e)
                }
                return "".concat(o, " no-float")
            }, t.getClosestKey = function(e, t, a) {
                for (var n = t.split("-"), o = e, l = "", i = "", r = 0, u = n.length; r < u; r++) {
                    if (!o[i = n[r]]) {
                        if (r >= 1) {
                            for (var s = r; s < a; s++) o = o[i = (0, c.default)(o)[0]], l += "".concat(i, "-");
                            break
                        }
                        return ""
                    }
                    o = o[i], l += "".concat(i, "-")
                }
                if ((0, c.default)(o).length)
                    for (var d = n.length; d < a; d++) o = o[i = (0, c.default)(o)[0]], l += "".concat(i, "-");
                return l.replace(/-$/, "")
            }, t.removeOldBackgroundForText = function(e) {
                var t, n = a(225425),
                    o = a(971638),
                    l = x(),
                    i = e,
                    r = i.getDefaultBinding().get("template_name"),
                    u = i._getLayoutBinding().get("layout_variation");
                n.getLayoutMapping(l)[u] || "text" !== r || (0, p.default)(t = ["persona", "perspective"]).call(t, l) || i.getComponentBinding("background1").merge(L.default.fromJS(o.dataForEmptyBackground()))
            }, t.getLayoutOptions = function(e, t) {
                var a = (0, w.default)(t).call(t, (function(t) {
                    var a = t.visible,
                        n = t.children;
                    return !a || O(e, a) ? (0, S.default)({}, t, {
                        children: A(e, n)
                    }) : null
                }));
                return (0, C.default)(a).call(a, (function(e) {
                    return Boolean(e)
                }))
            }, t.saveNewLayoutConfig = function(e, t) {
                e.merge(L.default.fromJS(t))
            }, t.adjustImageSize = function(e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = e.outerWidth() || 0,
                    o = e.outerHeight() || 0,
                    l = n / o,
                    i = t.prop("naturalWidth"),
                    r = t.prop("naturalHeight"),
                    u = i / r || 4 / 3;
                if (l > u) {
                    var s = n + 10,
                        c = s / u;
                    t.width(s), t.height(c), t.css({
                        top: "".concat((o - c) / 2, "px")
                    }), a ? t.css({
                        right: "".concat((n - s) / 2, "px")
                    }) : t.css({
                        left: "".concat((n - s) / 2, "px")
                    })
                } else {
                    var d = o + 10,
                        f = d * u;
                    t.height(d), t.width(f), t.css({
                        top: "".concat((o - d) / 2, "px")
                    }), a ? t.css({
                        right: "".concat((n - f) / 2, "px")
                    }) : t.css({
                        left: "".concat((n - f) / 2, "px")
                    })
                }
            }, a(974916), a(323123), a(115306);
            var r = a(778914),
                u = (0, o.default)(r),
                s = a(686902),
                c = (0, o.default)(s),
                d = a(977766),
                f = (0, o.default)(d),
                g = a(678580),
                p = (0, o.default)(g),
                m = a(277149),
                h = (0, o.default)(m),
                v = a(981643),
                b = (0, o.default)(v),
                y = a(620116),
                C = (0, o.default)(y),
                N = a(2991),
                w = (0, o.default)(N),
                k = a(51942),
                S = (0, o.default)(k),
                T = a(496486),
                _ = ((0, o.default)(T), a(143393)),
                L = (0, o.default)(_),
                P = {
                    one: 1,
                    two: 2,
                    three: 3,
                    four: 4,
                    five: 5,
                    six: 6,
                    seven: 7,
                    eight: 8,
                    nine: 9,
                    ten: 10,
                    eleven: 11,
                    twelve: 12,
                    thirteen: 13,
                    fourteen: 14,
                    fifteen: 15,
                    sixteen: 16
                };
            for (var B in P) P[P[B]] = B;

            function x() {
                return a(234584).getThemeName()
            }

            function E(e) {
                var t = a(843296).get(x());
                return t && t.features && t.features[e]
            }

            function I(e) {
                var t, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16,
                    o = Math.floor((n - a) / 2);
                return (0, f.default)(t = "".concat(P[e], " columns ")).call(t, o ? "offset-".concat(P[o]) : "")
            }

            function M(e) {
                return "".concat(P[e], " columns")
            }

            function O(e, t) {
                return !(0, h.default)(t).call(t, (function(t) {
                    var a = t.type,
                        n = t.value;
                    return n && -1 === (0, b.default)(n).call(n, e.get(a))
                }))
            }

            function A(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return (0, C.default)(t).call(t, (function(t) {
                    var a = t.visible;
                    return !a || O(e, a)
                }))
            }
        },
        225425: function(e, t, a) {
            var n = a(353147),
                o = a(663978),
                l = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            }), a(974916), a(323123);
            var i = a(51942),
                r = (0, l.default)(i),
                u = a(981643),
                s = (0, l.default)(u),
                c = a(686902),
                d = (0, l.default)(c),
                f = a(766463),
                g = "automatic",
                p = [{
                    key: "columns_mobile",
                    label: function() {
                        return n("Editor|Columns")
                    },
                    component: "select",
                    children: [{
                        value: g,
                        label: function() {
                            return n("Automatic")
                        }
                    }, {
                        value: "one",
                        label: function() {
                            return "1"
                        }
                    }, {
                        value: "two",
                        label: function() {
                            return "2"
                        }
                    }],
                    defaultValue: g
                }],
                m = {
                    repeatableClass: "",
                    itemClass: "",
                    textClass: "",
                    buttonClass: ""
                },
                h = "s-mh",
                v = "s-text-button";

            function b() {
                return m
            }

            function y(e) {
                return (0, r.default)({}, m, e)
            }

            function C(e) {
                var t = (0, f.generateItemClassByColumnsNum)(e.columnsNum, !0),
                    a = e.box ? "s-mhi s-info-box" : "s-mhi";
                return {
                    text: function() {
                        return y({
                            repeatableClass: h,
                            itemClass: t,
                            textClass: a
                        })
                    },
                    button: function() {
                        return y({
                            repeatableClass: h,
                            itemClass: t,
                            textClass: a,
                            buttonClass: v
                        })
                    }
                }
            }

            function N(e, t) {
                var a = e.getRepeatableBinding("repeatable1").get().size,
                    n = "";
                return n = a <= 2 || a % 2 && 0 == t ? "" : "half", 2 == a ? 0 == t && (n += " border-bottom") : (t < a - 2 && (n += " border-bottom"), t > 0 && t % 2 && a % 2 && (n += " border-right"), t % 2 || a % 2 || (n += " border-right")), a <= 4 && (n += " large-info-box"), "s-persp-column s-mhi ".concat(n)
            }

            function w(e, t) {
                return "s-persp-container absolute ".concat(["topRight", "bottomLeft", "bottomRight"][t])
            }

            function k(e) {
                return function(t, a) {
                    var n = t,
                        o = n.getRepeatableBinding("repeatable1").sub(a),
                        l = "";
                    return n.sbAnyHasContent("text1 text2", {
                        parentBinding: o,
                        showOnly: !1
                    }) && (l = "s-persp-".concat(e)), l
                }
            }

            function S(e) {
                return {
                    text: function() {
                        return y({
                            itemClass: w,
                            textClass: k(e)
                        })
                    },
                    button: function() {
                        return y({
                            itemClass: w,
                            textClass: k(e),
                            buttonClass: v
                        })
                    }
                }
            }

            function T() {
                return {
                    text: function() {
                        return y({
                            repeatableClass: "s-mh",
                            itemClass: N,
                            textClass: "s-info-box"
                        })
                    },
                    button: function() {
                        return y({
                            repeatableClass: "s-mh",
                            itemClass: N,
                            textClass: "s-info-box",
                            buttonClass: "s-text-button"
                        })
                    }
                }
            }
            var _ = {
                    default: {
                        text: {
                            one: C({
                                columnsNum: 1
                            }),
                            two: C({
                                columnsNum: 2
                            }),
                            three: C({
                                columnsNum: 3
                            }),
                            four: C({
                                columnsNum: 4
                            })
                        },
                        box: {
                            one: C({
                                columnsNum: 1,
                                box: !0
                            }),
                            two: C({
                                columnsNum: 2,
                                box: !0
                            }),
                            three: C({
                                columnsNum: 3,
                                box: !0
                            }),
                            four: C({
                                columnsNum: 4,
                                box: !0
                            })
                        }
                    },
                    perspective: {
                        text: {
                            overlay: S("overlay"),
                            card: S("card")
                        },
                        box: {
                            center: T(),
                            mediaLeft: T(),
                            mediaRight: T()
                        }
                    }
                },
                L = (0, f.getLayoutMapping)(_),
                P = {
                    default: {
                        "1col": "box-one-text",
                        "2col": "box-two-text",
                        "3col": "box-three-text",
                        "4col": "box-four-text"
                    },
                    perspective: {
                        overlay: "text-overlay-text",
                        card: "text-card-text",
                        mediaLeft: "box-mediaLeft-text",
                        mediaRight: "box-mediaRight-text",
                        center: "box-center-text"
                    }
                },
                B = {
                    default: {
                        text: function(e) {
                            return "text-one-".concat(e)
                        },
                        box: function(e) {
                            return "box-two-".concat(e)
                        }
                    },
                    perspective: {
                        text: function(e) {
                            return "text-card-".concat(e)
                        },
                        box: function(e) {
                            return "box-center-".concat(e)
                        }
                    }
                };
            t.default = {
                getDefaultLayoutKey: function(e, t) {
                    var a = (P[e] || P.default)[t = t || ""];
                    if ((L[e] || L.default)[t] && (a = t), !a) {
                        var n = -1 !== (0, s.default)(t).call(t, "button") ? "button" : "text",
                            o = t.split("-")[0],
                            l = B[e] || B.default;
                        a = l[o] && l[o](n)
                    }
                    return a || (a = (0, d.default)(L[e] || L.default)[0]), a
                },
                getLayout: function(e, t) {
                    return (L[e] || L.default)[t] || b
                },
                getLayoutOptions: function(e) {
                    return _[e] || _.default
                },
                getLayoutMapping: function(e) {
                    return L[e] || L.default
                },
                getMobileLayoutOptions: function() {
                    return p
                }
            }, e.exports = t.default
        },
        386912: function(e, t, a) {
            var n = a(223765),
                o = a(752424),
                l = a(663978),
                i = a(834074);
            l(t, "__esModule", {
                value: !0
            });
            var r = function(e, t) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n(e) && "function" != typeof e) return {
                    default: e
                };
                var a = u(t);
                if (a && a.has(e)) return a.get(e);
                var o = {},
                    r = l && i;
                for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var c = r ? i(e, s) : null;
                        c && (c.get || c.set) ? l(o, s, c) : o[s] = e[s]
                    }
                return o.default = e, a && a.set(e, o), o
            }(a(496486));

            function u(e) {
                if ("function" != typeof o) return null;
                var t = new o,
                    a = new o;
                return (u = function(e) {
                    return e ? a : t
                })(e)
            }
            var s = {};

            function c(e, t) {
                return s[e][t] || t
            }

            function d(e, t, a, n) {
                return a > n ? t : r.reduce(t, (function(t, o, l) {
                    var i = o;
                    r.isPlainObject(o) ? i = d(e, o, a + 1, n) : r.isArray(o) && (i = r.map(o, (function(t) {
                        return d(e, t, a + 1, n)
                    }))), s[e] = s[e] || {};
                    var u = r.camelCase(l);
                    return function(e, t, a) {
                        s[e] = s[e] || {}, s[e][t] = a
                    }(e, u, l), t[u] = i, t
                }), {})
            }

            function f(e, t, a, n) {
                return a > n ? t : r.reduce(t, (function(t, o, l) {
                    var i = o;
                    return r.isPlainObject(o) ? i = f(e, o, a + 1, n) : r.isArray(o) && (i = r.map(o, (function(t) {
                        return f(e, t, a + 1, n)
                    }))), t[c(e, l)] = i, t
                }), {})
            }
            t.default = {
                getCache: function(e, t) {
                    return c(e, t)
                },
                convertToCamel: function(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    return d(e, t, 0, a)
                },
                convertToSnake: function(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
                        n = s[e];
                    return void 0 === n && console.error("".concat(e, " has to be converted to camel first before it can be used")), f(e, t, 0, a)
                }
            }, e.exports = t.default
        },
        879893: function(e, t, a) {
            var n = a(353147),
                o = a(501068),
                l = a(686902),
                i = a(14310),
                r = a(620116),
                u = a(834074),
                s = a(778914),
                c = a(239649),
                d = a(820368),
                f = a(663978),
                g = a(60530)(a(60530));
            f(t, "__esModule", {
                value: !0
            });
            var p, m, h, v, b, y = a(205872),
                C = (0, g.default)(y),
                N = a(359036),
                w = (0, g.default)(N),
                k = a(812077),
                S = (0, g.default)(k),
                T = a(726394),
                _ = (0, g.default)(T),
                L = a(569198),
                P = (0, g.default)(L),
                B = a(705824),
                x = (0, g.default)(B),
                E = a(351379),
                I = (0, g.default)(E),
                M = a(900214),
                O = (0, g.default)(M),
                A = a(566380),
                D = (0, g.default)(A),
                U = a(487672),
                R = (0, g.default)(U);
            a(974916), a(864765);
            var F = a(694473),
                W = (0, g.default)(F),
                z = a(54103),
                j = (0, g.default)(z),
                G = a(981643),
                q = (0, g.default)(G),
                V = a(492762),
                Z = (0, g.default)(V),
                Y = a(703649),
                H = ((0, g.default)(Y), a(366757)),
                K = (0, g.default)(H),
                J = a(45697),
                Q = (0, g.default)(J),
                $ = a(223336),
                X = (0, g.default)($),
                ee = a(143393),
                te = (0, g.default)(ee),
                ae = a(868309),
                ne = (0, g.default)(ae),
                oe = a(755802),
                le = ((0, g.default)(oe), a(786483)),
                ie = ((0, g.default)(le), a(508962)),
                re = (0, g.default)(ie),
                ue = a(294184),
                se = (0, g.default)(ue),
                ce = a(176965),
                de = (0, g.default)(ce),
                fe = a(421522),
                ge = (0, g.default)(fe),
                pe = a(109245),
                me = (0, g.default)(pe),
                he = a(487628),
                ve = (0, g.default)(he),
                be = a(183123),
                ye = (0, g.default)(be),
                Ce = a(874346),
                Ne = (0, g.default)(Ce),
                we = a(77178),
                ke = (0, g.default)(we),
                Se = a(344711),
                Te = (0, g.default)(Se),
                _e = a(141655),
                Le = ((0, g.default)(_e), a(234584)),
                Pe = ((0, g.default)(Le), a(169042)),
                Be = ((0, g.default)(Pe), a(549556)),
                xe = ((0, g.default)(Be), a(500134));

            function Ee(e, t) {
                var a = l(e);
                if (i) {
                    var n = i(e);
                    t && (n = r(n).call(n, (function(t) {
                        return u(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }
            var Ie = ge.default.decorate(de.default.Mixin)((h = m = function(e) {
                (0, I.default)(i, e);
                var t, a, l = (t = i, a = function() {
                    if ("undefined" == typeof Reflect || !o) return !1;
                    if (o.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, n = (0, D.default)(t);
                    if (a) {
                        var l = (0, D.default)(this).constructor;
                        e = o(n, arguments, l)
                    } else e = n.apply(this, arguments);
                    return (0, O.default)(this, e)
                });

                function i(e) {
                    var t, a;
                    return (0, _.default)(this, i), a = l.call(this, e), (0, R.default)((0, x.default)(a), "_getCategoryBarProps", (function() {
                        var e = a.constructor.sharedProps().getCategories;
                        return {
                            currentCategory: a.props.category.get("id"),
                            categories: e(),
                            changeCategory: a._changeCategory
                        }
                    })), (0, R.default)((0, x.default)(a), "_onClickEditor", (function(e) {
                        var t = a.props.category;
                        a.constructor.sharedProps().openBlogManagerDialog(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a, n = null != arguments[t] ? arguments[t] : {};
                                if (t % 2) s(a = Ee(Object(n), !0)).call(a, (function(t) {
                                    (0, R.default)(e, t, n[t])
                                }));
                                else if (c) d(e, c(n));
                                else {
                                    var o;
                                    s(o = Ee(Object(n))).call(o, (function(t) {
                                        f(e, t, u(n, t))
                                    }))
                                }
                            }
                            return e
                        }({
                            category: t.get("id")
                        }, e))
                    })), (0, R.default)((0, x.default)(a), "publishOpenSideMenuTabPanel", (function(e) {
                        (a._getPostsProps() || {}).showDummyData
                    })), (0, R.default)((0, x.default)(a), "postChangeListener", (function(e) {
                        e === a.props.category.get("id") && (a.forceUpdate(), (0, X.default)(window).trigger("resize"))
                    })), (0, R.default)((0, x.default)(a), "categoriesChangeListener", (function() {
                        a.forceUpdate()
                    })), (0, R.default)((0, x.default)(a), "_changeCategory", (function(e) {
                        var t, o = a.constructor.sharedProps().getCategories;
                        if ("all" !== e) {
                            var l = o();
                            t = (0, W.default)(l).call(l, (function(t) {
                                return t.id === e
                            }))
                        } else t = {
                            id: "all",
                            name: n("Section|All Categories")
                        };
                        a.getDefaultBinding().set("category", te.default.fromJS(t))
                    })), (0, R.default)((0, x.default)(a), "getIsShowComponentOverlay", (function() {
                        return (a._getPostsProps() || {}).showDummyData, !1
                    })), (0, R.default)((0, x.default)(a), "renderTooltipTilte", (function() {
                        return K.default.createElement(K.default.Fragment, null, n("Editor|These sample posts won’t be shown on your live site. And the samples will be removed when you add your own posts."), v || (v = (0, S.default)("br", {})), n("Editor|Click here to add your own posts!"))
                    })), (0, R.default)((0, x.default)(a), "shouldUseDummy", (function() {
                        return !!a.props.templateDummyData || a.props.inSectionSelector && !a.props.isPreviewMode
                    })), a.state = {
                        isFetchingPosts: !1,
                        isShowBlogTooltip: !1
                    }, a.loadingChangeListener = (0, j.default)(t = a.loadingChangeListener).call(t, (0, x.default)(a)), a
                }
                return (0, P.default)(i, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.constructor.sharedProps(),
                            t = (e.pageId, e.addBlogPostsChangeListener),
                            a = e.addBlogPostsLoadingStateListener,
                            n = e.addBlogCategoriesChangeListener,
                            o = this.props,
                            l = o.sectionId,
                            i = o.layoutSetting,
                            r = (i = void 0 === i ? {} : i).blogNumber;
                        o.inSectionSelector || (t(this.postChangeListener, l), n(this.categoriesChangeListener), this.fetchBlogCategories(), this.fetchPosts(1, r, l), a(this.loadingChangeListener, l))
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this.props,
                            a = t.sectionId,
                            n = t.layoutSetting,
                            o = (n = void 0 === n ? {} : n).blogNumber;
                        if (!t.inSectionSelector) {
                            (e.category.get("id") || "all") !== (this.props.category.get("id") || "all") && this.fetchPosts(1, o, a);
                            var l = e.layoutSetting;
                            (l = void 0 === l ? {} : l).blogNumber !== o && this.fetchPosts(1, o, a)
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this.constructor.sharedProps(),
                            t = e.removeBlogPostsLoadingStateListener,
                            a = e.removeBlogPostsChangeListener,
                            n = e.removeBlogCategoriesChangeListener,
                            o = this.props,
                            l = o.sectionId;
                        o.inSectionSelector || (t(this.loadingChangeListener, l), a(this.postChangeListener, l), n(this.categoriesChangeListener))
                    }
                }, {
                    key: "getPagination",
                    value: function() {
                        var e = this.props,
                            t = e.category,
                            a = e.sectionId,
                            n = e.layoutSetting,
                            o = (n = void 0 === n ? {} : n).blogNumber,
                            l = t.get("id"),
                            i = this.constructor.sharedProps().getPagination;
                        return o ? i(l, a) : i(l)
                    }
                }, {
                    key: "_getPostsProps",
                    value: function() {
                        var e, t, a = this.props,
                            n = a.layout,
                            o = a.category,
                            l = a.sectionId,
                            i = a.layoutSetting,
                            r = (i = void 0 === i ? {} : i).blogNumber,
                            u = a.layoutConfig,
                            s = a.isPreviewMode,
                            c = this.constructor.sharedProps().getBlogShowDummyData,
                            d = o.get("id");
                        return t = r ? c(d, l) : c(d), {
                            layout: n,
                            category: o,
                            openArchiveDialog: (0, j.default)(e = this.openArchiveDialog).call(e, this),
                            layoutConfig: u,
                            showDummyData: t,
                            isPreviewMode: s
                        }
                    }
                }, {
                    key: "_getFooterProps",
                    value: function() {
                        var e, t, a, n = this.props,
                            o = n.category,
                            l = n.componentsBinding;
                        return {
                            fromBlogPage: this.context.fromBlogPage,
                            category: o,
                            isFetchingPosts: this.state.isFetchingPosts,
                            fetchPosts: (0, j.default)(e = this.fetchPosts).call(e, this),
                            openArchiveDialog: (0, j.default)(t = this.openArchiveDialog).call(t, this),
                            getPagination: (0, j.default)(a = this.getPagination).call(a, this),
                            componentsBinding: l
                        }
                    }
                }, {
                    key: "_getLayoutObject",
                    value: function() {
                        var e = this.constructor.sharedProps().themeName,
                            t = this.props.layout;
                        return me.default.getLayout(e, t)()
                    }
                }, {
                    key: "toggleTooltip",
                    value: function(e) {
                        (this._getPostsProps() || {}).showDummyData && this.setState({
                            isShowBlogTooltip: e
                        })
                    }
                }, {
                    key: "loadingChangeListener",
                    value: function(e) {
                        this.setState({
                            isFetchingPosts: e
                        })
                    }
                }, {
                    key: "fetchBlogCategories",
                    value: function() {
                        var e = this.constructor.sharedProps();
                        (0, e.fetchBlogCategories)(e.pageId, this.props.category.get("id"))
                    }
                }, {
                    key: "fetchPosts",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "null",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            o = this.props.inSectionSelector;
                        if (!o && "audience_agent" !== Te.default.getRole() && "store_manager" !== Te.default.getRole()) {
                            var l = this.constructor.sharedProps(),
                                i = l.fetchBlogPosts,
                                r = l.pageId,
                                u = ye.default.getIsPreview(),
                                s = "";
                            if (!0 & u) {
                                var c = window.location || {},
                                    d = c.search,
                                    f = void 0 === d ? "" : d; - 1 !== (0, q.default)(f).call(f, "without_custom_code=true") && (s = "&without_custom_code=true")
                            }
                            this.setState({
                                isFetchingPosts: !0
                            }), i(r, t, a, this.props.category.toJS(), !0, n, s).fail((function() {
                                e.props.onConnectionFailed()
                            })).always((function() {
                                return e.setState({
                                    isFetchingPosts: !1
                                })
                            }))
                        }
                    }
                }, {
                    key: "openArchiveDialog",
                    value: function(e, t) {
                        if (this.constructor.sharedProps().fromSiteToApp) return this.props.onClickTag(e);
                        var a = this.props,
                            n = a.layout,
                            o = "all" === a.category.get("id");
                        return (0, this.constructor.sharedProps().updateBlogArchiveDialog)(e, n, o, t), re.default.openDialog("blogArchiveDialog", {
                            shade: !1
                        }), null
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, a, o = this,
                            l = this.constructor.sharedProps(),
                            i = l.getPosts,
                            r = l.getShowMorePostsWith,
                            u = l.getCategories,
                            s = l.themeName,
                            c = this.props,
                            d = c.category,
                            f = c.sectionId,
                            g = c.layoutSetting,
                            p = (g = void 0 === g ? {} : g).blogNumber,
                            m = c.inSectionSelector,
                            h = c.templateDummyData,
                            v = (c.isPreviewMode, c.allBlogPosts, this.state),
                            y = v.isFetchingPosts,
                            N = v.isShowBlogTooltip,
                            k = u(),
                            T = this.getPagination(),
                            _ = this._getLayoutObject().showCategoryTabs,
                            L = this.context.fromBlogPage,
                            P = r(),
                            B = (this._getPostsProps() || {}).showDummyData,
                            x = m && (p || 3) < (null == h ? void 0 : h.length),
                            E = p || 3;
                        a = p || B ? i(d.get("id"), f) : i(d.get("id")), m && h && (a = (0, w.default)(h) || []), !L && a && "pagination" !== P && (0, Z.default)(a).call(a, E, a.length);
                        var I = "persona" !== s ? "columns sixteen" : "";
                        return (0, S.default)("div", {}, void 0, _ && k.length > 0 && !m && K.default.createElement(ve.default, this._getCategoryBarProps(), (0, S.default)("div", {
                            className: "s-component-editor-wrapper"
                        }, void 0, (0, S.default)("div", {
                            className: (0, se.default)("s-component-overlay", {
                                visible: ye.default.getInWeChat()
                            }),
                            onClick: function() {
                                return o._onClickEditor({
                                    activeTab: "blogCategories",
                                    activeSettingsPane: "category"
                                })
                            }
                        }, void 0, (0, S.default)("div", {
                            className: "overlay"
                        }, void 0, (0, S.default)("div", {
                            className: "center"
                        }, void 0, (0, S.default)("span", {}, void 0, n("Editor|Blog Categories"))))))), (0, S.default)("div", {
                            className: "s-component s-blog ".concat(I)
                        }, void 0, this.getIsShowComponentOverlay() && (0, S.default)("div", {
                            className: "s-component-editor-wrapper"
                        }, void 0, (0, S.default)("div", {
                            onMouseEnter: (0, j.default)(e = this.toggleTooltip).call(e, this, !0),
                            onMouseLeave: (0, j.default)(t = this.toggleTooltip).call(t, this, !1),
                            className: "s-component-overlay",
                            onClick: function() {
                                return o._onClickEditor()
                            }
                        }, void 0, (0, S.default)("div", {
                            className: "center"
                        }, void 0, (0, S.default)(xe.Tooltip, {
                            getPopupContainer: function(e) {
                                return null == e ? void 0 : e.parentNode
                            },
                            destroyTooltipOnHide: !0,
                            visible: N,
                            title: this.renderTooltipTilte()
                        }, void 0, (0, S.default)("span", {}, void 0, n("Editor|Manage Blog Posts")))))), (0, S.default)("div", {
                            className: "s-blog-wrapper"
                        }, void 0, (0, S.default)("div", {
                            className: "s-blog-col-placeholder clearfix"
                        }, void 0, a ? K.default.createElement(Ne.default, (0, C.default)({
                            blogPosts: a
                        }, this._getPostsProps())) : b || (b = (0, S.default)("div", {
                            className: "s-loading"
                        })), (!y && T || x) && K.default.createElement(ke.default, (0, C.default)({}, this._getFooterProps(), {
                            inSectionSelector: m
                        }))))))
                    }
                }]), i
            }(K.default.Component), (0, R.default)(m, "contextTypes", {
                fromBlogPage: Q.default.bool
            }), p = h)) || p;
            Ie.defaultProps = {
                layout: "one-smallCircle-none-none",
                category: te.default.Map({
                    id: "all",
                    name: n("Section|All Categories")
                })
            }, Ie.WaypointLazy = (0, ne.default)(Ie), t.default = Ie, e.exports = t.default
        },
        77178: function(e, t, a) {
            var n = a(353147),
                o = a(501068),
                l = a(663978),
                i = a(60530)(a(60530));
            l(t, "__esModule", {
                value: !0
            });
            var r, u = a(812077),
                s = (0, i.default)(u),
                c = a(726394),
                d = (0, i.default)(c),
                f = a(569198),
                g = (0, i.default)(f),
                p = a(351379),
                m = (0, i.default)(p),
                h = a(900214),
                v = (0, i.default)(h),
                b = a(566380),
                y = (0, i.default)(b),
                C = a(54103),
                N = (0, i.default)(C),
                w = a(366757),
                k = (0, i.default)(w),
                S = a(45697),
                T = ((0, i.default)(S), a(805803)),
                _ = a(183123),
                L = (0, i.default)(_),
                P = a(62431),
                B = a(604990),
                x = (0, i.default)(B),
                E = a(513495),
                I = (0, i.default)(E);
            var M = function(e) {
                (0, m.default)(i, e);
                var t, a, l = (t = i, a = function() {
                    if ("undefined" == typeof Reflect || !o) return !1;
                    if (o.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, n = (0, y.default)(t);
                    if (a) {
                        var l = (0, y.default)(this).constructor;
                        e = o(n, arguments, l)
                    } else e = n.apply(this, arguments);
                    return (0, v.default)(this, e)
                });

                function i() {
                    return (0, d.default)(this, i), l.apply(this, arguments)
                }
                return (0, g.default)(i, [{
                    key: "loadMorePosts",
                    value: function() {
                        var e = this.props.getPagination(),
                            t = (e && e.currentPage || 0) + 1;
                        this.props.fetchPosts(t)
                    }
                }, {
                    key: "goToPage",
                    value: function(e) {
                        var t = this.props.getPagination().perPage,
                            a = this.constructor.sharedProps().themeName;
                        this.props.fetchPosts(e, t), "persona" !== a && (window.location = "#blog")
                    }
                }, {
                    key: "needToShowFooter",
                    value: function() {
                        var e = (0, this.constructor.sharedProps().getShowMorePostsWith)(),
                            t = this.props.getPagination();
                        return !!this.props.inSectionSelector || ("pagination" === e ? t.totalPages > 1 : t.currentPage < t.totalPages)
                    }
                }, {
                    key: "renderPagination",
                    value: function() {
                        var e, t, a = this.props.getPagination(),
                            o = a.currentPage,
                            l = a.totalPages,
                            i = Math.min(l, 10);
                        o + 3 > i && (i = Math.min(l, o + 3));
                        for (var r = [], u = 1; u < i + 1; u++) {
                            var c;
                            r.push((0, s.default)("li", {}, u, (0, s.default)("a", {
                                className: u === o ? "s-blog-link s-blog-pagination-page active" : "s-blog-link s-blog-pagination-page ",
                                onClick: (0, N.default)(c = this.goToPage).call(c, this, u)
                            }, void 0, u), " "))
                        }
                        return r.length > 1 && (0, s.default)("div", {
                            className: "s-blog-col-foot s-font-body"
                        }, void 0, o > 1 ? (0, s.default)("a", {
                            className: "s-blog-link s-blog-next-link",
                            onClick: (0, N.default)(e = this.goToPage).call(e, this, o - 1)
                        }, void 0, n("Blog|Newer")) : "", " ", (0, s.default)("ul", {
                            className: "ul s-blog-pagination"
                        }, void 0, r), " ", o < l ? (0, s.default)("a", {
                            className: "s-blog-link s-blog-prev-link",
                            onClick: (0, N.default)(t = this.goToPage).call(t, this, o + 1)
                        }, void 0, n("Blog|Older")) : "")
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.constructor.sharedProps(),
                            t = e.getShowMorePostsWith,
                            a = e.fromSiteToApp,
                            o = this.props,
                            l = o.category,
                            i = o.fromBlogPage,
                            u = o.isFetchingPosts,
                            c = o.openArchiveDialog,
                            d = o.componentsBinding,
                            f = l.get("id"),
                            g = l.get("name"),
                            p = t();
                        return this.needToShowFooter() ? "pagination" === p ? this.renderPagination() : a ? i ? u ? r || (r = (0, s.default)("i", {
                            className: "fa fa-spin fa-spinner"
                        })) : (0, s.default)("span", {
                            className: "s-common-button s-small-button s-font-body",
                            onClick: this.loadMorePosts
                        }, void 0, n("Blog|More Posts")) : (0, s.default)(T.Link, {
                            className: "s-common-button s-small-button s-font-body",
                            to: "/blog/page?category=".concat(f)
                        }, void 0, n("Blog|More Posts")) : (0, s.default)("div", {
                            className: "s-blog-col-foot"
                        }, void 0, (0, s.default)(I.default, {
                            component: "span",
                            className: "s-common-button s-small-button s-font-body",
                            sectionStyleProps: d,
                            onClick: (0, N.default)(c).call(c, this, "all" === f ? void 0 : g, f)
                        }, void 0, n("Blog|More Posts"))) : null
                    }
                }]), i
            }(k.default.Component);
            M.sharedProps = (0, P.sharedPropsBuilder)((function() {
                return []
            }), (function() {
                return {
                    fromSiteToApp: L.default.getFromSiteToApp(),
                    getShowMorePostsWith: x.default.getShowMorePostsWith
                }
            })), t.default = M, e.exports = t.default
        },
        874346: function(e, t, a) {
            var n = a(353147),
                o = a(223765),
                l = a(501068),
                i = a(686902),
                r = a(14310),
                u = a(620116),
                s = a(834074),
                c = a(778914),
                d = a(239649),
                f = a(820368),
                g = a(663978),
                p = a(752424),
                m = a(60530)(a(60530));
            g(t, "__esModule", {
                value: !0
            });
            var h, v, b, y, C, N, w, k, S = a(205872),
                T = (0, m.default)(S),
                _ = a(812077),
                L = (0, m.default)(_),
                P = a(487672),
                B = (0, m.default)(P),
                x = a(359036),
                E = (0, m.default)(x),
                I = a(726394),
                M = (0, m.default)(I),
                O = a(569198),
                A = (0, m.default)(O),
                D = a(351379),
                U = (0, m.default)(D),
                R = a(900214),
                F = (0, m.default)(R),
                W = a(566380),
                z = (0, m.default)(W);
            a(974916), a(115306), a(804723), a(323123);
            var j = a(981643),
                G = (0, m.default)(j),
                q = a(703649),
                V = (0, m.default)(q),
                Z = a(344494),
                Y = (0, m.default)(Z),
                H = a(778914),
                K = (0, m.default)(H),
                J = a(977766),
                Q = (0, m.default)(J),
                $ = a(2991),
                X = (0, m.default)($),
                ee = a(678580),
                te = (0, m.default)(ee),
                ae = a(54103),
                ne = (0, m.default)(ae),
                oe = a(366757),
                le = (0, m.default)(oe),
                ie = a(294184),
                re = (0, m.default)(ie),
                ue = a(45697),
                se = ((0, m.default)(ue), a(496486)),
                ce = (0, m.default)(se),
                de = a(476914),
                fe = (0, m.default)(de),
                ge = (Fe(a(143268)), a(743050)),
                pe = (0, m.default)(ge),
                me = Fe(a(144726)),
                he = a(223336),
                ve = (0, m.default)(he),
                be = a(607947),
                ye = (0, m.default)(be),
                Ce = a(937195),
                Ne = (0, m.default)(Ce),
                we = a(43138),
                ke = (0, m.default)(we),
                Se = a(109245),
                Te = (0, m.default)(Se),
                _e = a(62431),
                Le = a(183123),
                Pe = (0, m.default)(Le),
                Be = a(234584),
                xe = (0, m.default)(Be),
                Ee = a(680523),
                Ie = ((0, m.default)(Ee), a(604990)),
                Me = (0, m.default)(Ie),
                Oe = a(500134),
                Ae = Fe(a(818166)),
                De = a(595386),
                Ue = (0, m.default)(De);

            function Re(e) {
                if ("function" != typeof p) return null;
                var t = new p,
                    a = new p;
                return (Re = function(e) {
                    return e ? a : t
                })(e)
            }

            function Fe(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== o(e) && "function" != typeof e) return {
                    default: e
                };
                var a = Re(t);
                if (a && a.has(e)) return a.get(e);
                var n = {},
                    l = g && s;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var r = l ? s(e, i) : null;
                        r && (r.get || r.set) ? g(n, i, r) : n[i] = e[i]
                    }
                return n.default = e, a && a.set(e, n), n
            }

            function We(e, t) {
                var a = i(e);
                if (r) {
                    var n = r(e);
                    t && (n = u(n).call(n, (function(t) {
                        return s(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function ze(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a, n = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) c(a = We(Object(n), !0)).call(a, (function(t) {
                        (0, B.default)(e, t, n[t])
                    }));
                    else if (d) f(e, d(n));
                    else {
                        var o;
                        c(o = We(Object(n))).call(o, (function(t) {
                            g(e, t, s(n, t))
                        }))
                    }
                }
                return e
            }
            var je = Oe.Tag.Tag,
                Ge = Te.default.getColumnsClassname(),
                qe = Te.default.getAvailableMobileLayouts(),
                Ve = /(width=')([0-9]+)/i,
                Ze = /(height=')([0-9]+)/i,
                Ye = function(e) {
                    (0, U.default)(i, e);
                    var t, a, o = (t = i, a = function() {
                        if ("undefined" == typeof Reflect || !l) return !1;
                        if (l.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(l(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, z.default)(t);
                        if (a) {
                            var o = (0, z.default)(this).constructor;
                            e = l(n, arguments, o)
                        } else e = n.apply(this, arguments);
                        return (0, F.default)(this, e)
                    });

                    function i() {
                        return (0, M.default)(this, i), o.apply(this, arguments)
                    }
                    return (0, A.default)(i, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            (0, ve.default)(window).resize(ye.default.debounce((function() {
                                return e.forceUpdate()
                            }), 200))
                        }
                    }, {
                        key: "getHeaderBackgroundImageUrl",
                        value: function(e) {
                            var t = e.headerImage,
                                a = "";
                            return t.storageKey ? a = me.createImage(t).getUrlWithoutFocus(this._getImageSize()) : "!" !== t.url && (a = t.url), a
                        }
                    }, {
                        key: "getFirstContentImageUrl",
                        value: function(e) {
                            var t = e.firstContentImage,
                                a = "";
                            return t && (a = me.createImage(t).getUrl(this._getImageSize())), a
                        }
                    }, {
                        key: "_getImageSize",
                        value: function() {
                            var e = Pe.default.getIsNewBlogLayout(),
                                t = this.props.layoutConfig;
                            return ["540x540>", "2000x2000>", "1440x1440>", "1080x1080>", "1080x1080>"][e ? t && t.get("columns") : 0]
                        }
                    }, {
                        key: "_getLayoutObject",
                        value: function() {
                            var e = this.constructor.sharedProps().themeName,
                                t = this.props,
                                a = t.layout,
                                n = t.layoutConfig;
                            return Pe.default.getIsNewBlogLayout() && n ? Te.default.getNewLayout(n, a) : Te.default.getLayout(e, a)()
                        }
                    }, {
                        key: "linkToPost",
                        value: function(e) {
                            this.constructor.sharedProps().isPreview, this._getLayoutObject().isColumnsAndCard && (window.location.href = e)
                        }
                    }, {
                        key: "transformBlurb",
                        value: function(e) {
                            var t = this._getLayoutObject().snippetLength,
                                a = 0 === (0, G.default)(e).call(e, "\\n") ? (0, V.default)(e).call(e, 2) : e;
                            return a = a.replace(/(\\n)+/g, " "), 0 === t ? "" : ce.default.truncate(a, {
                                length: t,
                                separator: /\W/
                            })
                        }
                    }, {
                        key: "transformTitle",
                        value: function(e, t) {
                            var a = /[^\x00-\xff]/g;
                            if (e.replace(a, "mm").length <= t) return e;
                            for (var n = 0, o = 1; o < e.length && (n = o, !(e.substr(0, o).replace(a, "mm").length >= t)); o++);
                            if (/[A-Za-z]/.test(e[n - 1]))
                                for (var l = /\W/, i = n + 1; i < e.length; i++)
                                    if (l.test(e[i])) {
                                        n = i;
                                        break
                                    }
                            return "".concat(e.substr(0, n), "...")
                        }
                    }, {
                        key: "_getTiledList",
                        value: function() {
                            var e = this.props,
                                t = e.blogPosts,
                                a = e.layoutConfig,
                                n = [],
                                o = [],
                                l = a && a.get("columns");
                            return l ? (n.length = l, o.length = l, (0, Y.default)(n).call(n, []), (0, Y.default)(o).call(o, 0), (0, K.default)(t).call(t, (function(e) {
                                var t, a = (0, G.default)(o).call(o, Math.min.apply(Math, o));
                                if (-1 !== a) {
                                    var l = e.headerImage,
                                        i = l.w,
                                        r = l.h,
                                        u = l.videoHtml,
                                        s = void 0 === u ? "" : u;
                                    if (!i && !r) {
                                        var c = s && s.match(Ve),
                                            d = s && s.match(Ze);
                                        i = c ? c[2] : null, r = d ? d[2] : null
                                    }
                                    var f = (r || 1) / (i || 1) * 100;
                                    ke.default.isSmallScreen() && (f = 0), o[a] += f + 30, n[a] = (0, Q.default)(t = []).call(t, (0, E.default)(n[a]), [ze(ze({}, e), {}, {
                                        renderPercentage: f
                                    })])
                                }
                            })), n) : []
                        }
                    }, {
                        key: "_renderThumbnail",
                        value: function(e) {
                            var t, a, n = this._getLayoutObject().isRowAndLandscapeThumbnail,
                                o = this.getHeaderBackgroundImageUrl(e),
                                l = this.getFirstContentImageUrl(e);
                            t = n ? l || o : o || l;
                            var i = n && t === l ? "s-blog-whole-avatar s-blog-avatar" : "s-blog-avatar";
                            return a = ke.default.isSmallScreen() ? (0, L.default)("div", {
                                className: i,
                                style: {
                                    backgroundImage: "url(".concat(t.replace(".mp4", ".jpg"), ")")
                                }
                            }) : /\.mp4$/.test(t) ? (0, L.default)("div", {
                                className: i
                            }, void 0, (0, L.default)("video", {
                                src: t,
                                autoPlay: "true",
                                muted: "true",
                                loop: "true",
                                width: "100%"
                            })) : (0, L.default)("div", {
                                className: i,
                                style: {
                                    backgroundImage: "url(".concat(t, ")")
                                }
                            }), t ? a : h || (h = (0, L.default)("div", {
                                className: "s-blog-default-avatar s-blog-avatar"
                            }, void 0, (0, L.default)("div", {
                                className: "entypo-bookmark"
                            })))
                        }
                    }, {
                        key: "_renderNoPost",
                        value: function() {
                            var e = this.props;
                            return e.isPreviewMode, e.category.get("id"), (0, L.default)("div", {
                                className: "s-blog-col-body s-blog-no-posts"
                            }, void 0, (0, L.default)("div", {
                                className: "s-common-status s-font-body no-posts-error"
                            }, void 0, (0, L.default)("div", {}, void 0, n("Blog|There are no published blog posts yet."))))
                        }
                    }, {
                        key: "renderTiledList",
                        value: function() {
                            var e = this,
                                t = this._getTiledList(),
                                a = this.props.layoutConfig,
                                n = a.get("columns_mobile"),
                                o = a.get("structure");
                            return (0, X.default)(t).call(t, (function(t, l) {
                                var i;
                                return (0, L.default)("div", {
                                    className: (0, Q.default)(i = "tiled-columns s-blog-entry s-layout-columns ".concat(Ge[a.get("columns") - 1] || "one", " ")).call(i, (0, te.default)(qe).call(qe, o) && n ? "mobile-".concat(n, "-columns mobile-columns") : "")
                                }, "tiled-column-".concat(l), (0, X.default)(t).call(t, (function(t, a) {
                                    var n = t.renderPercentage,
                                        o = (0, Ue.default)("div", {
                                            target: "css-utcgxc0"
                                        })(".s-blog-entry.s-blog-new-layout.s-layout-columns.s-avatar-landscape\n              .s-blog-avatar-container{padding-bottom:", n, "% !important;height:100%;}");
                                    return (0, L.default)(o, {}, "blog-post-item-".concat(a), e.renderItem(t))
                                })))
                            }))
                        }
                    }, {
                        key: "renderItem",
                        value: function(e) {
                            var t, a, o, l, i = fe.default.formatDate,
                                r = this.props,
                                u = r.category,
                                s = r.openArchiveDialog,
                                c = r.showDummyData,
                                d = u.get("id"),
                                f = this.constructor.sharedProps(),
                                g = f.getBlogSetting,
                                p = f.isPreview,
                                m = f.language,
                                h = g(),
                                S = this._getLayoutObject(),
                                _ = S.layoutClass,
                                P = S.isRowAndLandscapeThumbnail,
                                B = S.isRowAndNoneThumbnail,
                                x = S.showCategoryTabs,
                                E = S.isColumnsAndCard,
                                I = S.titleLength,
                                M = e.publicUrl,
                                O = (M.split("?") || []).length > 1 ? "&" : "?";
                            "all" !== d && (M += (0, Q.default)(l = "".concat(O, "categoryId=")).call(l, d), O = "&");
                            var A, D = !(null !== (t = e.settings) && void 0 !== t && t.hideBlogDate),
                                U = !x && "all" === d && e.allTagsList.length > 0,
                                R = xe.default.getIsS5Theme();
                            A = p ? xe.default.isOneClickPageInPreview() ? "_blank" : "_parent" : "_self";
                            var F = E && !ke.default.isSmallScreen() ? this.transformTitle(e.title, I) : e.title,
                                W = Ae.isInBlogCategoryPage(),
                                z = {};
                            return Boolean(pe.default.getAiSiteBuilderIframeUrl()) && (M += "".concat(O, "mode=nonstatic"), z = {
                                target: "_self"
                            }), (0, L.default)("div", {
                                className: "s-blog-entry ".concat(_)
                            }, e.id, (0, L.default)("div", {
                                className: "s-blog-entry-inner",
                                onClick: (0, ne.default)(a = this.linkToPost).call(a, this, M)
                            }, void 0, (0, L.default)("div", {
                                className: "s-blog-entry-left s-blog-avatar-container"
                            }, void 0, c && (0, L.default)(je, {
                                className: "sample-tag light-blue",
                                label: n("Editor|Sample")
                            }), (0, L.default)("a", {
                                target: A,
                                href: M,
                                "aria-label": F
                            }, void 0, this._renderThumbnail(e))), (0, L.default)("div", {
                                className: "s-blog-entry-right"
                            }, void 0, (0, L.default)("div", {
                                className: "s-blog-details"
                            }, void 0, (0, L.default)("div", {
                                className: "s-blog-details-head"
                            }, void 0, (0, L.default)("div", {
                                className: (0, re.default)({
                                    "s-item-title": R
                                }, "s-blog-title s-font-heading")
                            }, void 0, (0, L.default)("a", {
                                target: A,
                                href: M
                            }, void 0, W ? (0, L.default)("h2", {}, void 0, F) : F), c && (0, L.default)(je, {
                                className: "sample-tag light-blue",
                                label: n("Editor|Sample")
                            })), (0, L.default)("div", {
                                className: "s-blog-info  s-font-body"
                            }, void 0, e.pinned && (v || (v = (0, L.default)("span", {
                                className: "fa fa-star"
                            }))), D && (0, L.default)("span", {
                                className: "s-blog-date"
                            }, void 0, i(e.publishedAt, m, "LL")), D && !B && U && (b || (b = (0, L.default)("span", {
                                className: "dot"
                            }, void 0, " · "))), U && !B && (0, L.default)(Ne.default, {
                                tags: e.allTagsList,
                                onClickTag: s
                            }), !B && h.enableComments && e.approvedCommentsCount > 0 && (0, L.default)("span", {}, void 0, (e.pinned || D || U) && (y || (y = (0, L.default)("span", {
                                className: "dot"
                            }, void 0, " · "))), (0, L.default)("a", {
                                target: "_blank",
                                href: "".concat(M, "#comments"),
                                className: "s-approved-comments-count"
                            }, void 0, C || (C = (0, L.default)("i", {
                                className: "entypo-comment"
                            })), e.approvedCommentsCount)))), B && U && (0, L.default)("div", {
                                className: "s-blog-info  s-font-body"
                            }, void 0, (0, L.default)(Ne.default, {
                                tags: e.allTagsList,
                                onClickTag: s
                            }), h.enableComments && e.approvedCommentsCount > 0 && (0, L.default)("span", {}, void 0, (e.pinned || D || U) && (N || (N = (0, L.default)("span", {
                                className: "dot"
                            }, void 0, " · "))), (0, L.default)("a", {
                                target: "_blank",
                                href: "".concat(M, "#comments"),
                                className: "s-approved-comments-count"
                            }, void 0, w || (w = (0, L.default)("i", {
                                className: "entypo-comment"
                            })), e.approvedCommentsCount))), P ? (0, L.default)("div", {
                                className: "s-blog-details-blurb s-font-body s-blog-row"
                            }, void 0, (0, X.default)(o = this.transformBlurb(e.longBlurb || "").split("<br>")).call(o, (function(e, t) {
                                return (0, L.default)("div", {}, t, e, k || (k = (0, L.default)("br", {})))
                            }))) : (0, L.default)("div", {
                                className: "s-blog-details-blurb  s-font-body s-blog-row"
                            }, void 0, this.transformBlurb(e.longBlurb || "")), P && le.default.createElement("a", (0, T.default)({
                                className: "s-blog-read-more-link s-font-body"
                            }, z, {
                                href: M
                            }), " ", "".concat(n("Blog|Read more"), "..."))))))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.blogPosts,
                                n = t.layoutConfig,
                                o = this._getLayoutObject().isColumns,
                                l = Pe.default.getIsNewBlogLayout(),
                                i = n && "tiled" === n.get("structure") && l;
                            return 0 === a.length ? this._renderNoPost() : (0, L.default)("div", {
                                className: "s-blog-col-body s-blog-no-posts"
                            }, void 0, (0, L.default)("div", {
                                className: "s-blog-posts ".concat(o ? "s-blog-posts-columns clearfix" : "")
                            }, void 0, !i && (0, X.default)(a).call(a, (function(t) {
                                return e.renderItem(t)
                            })), i && this.renderTiledList()))
                        }
                    }]), i
                }(le.default.Component);
            Ye.sharedProps = (0, _e.sharedPropsBuilder)((function() {
                return []
            }), (function() {
                return {
                    fromSiteToApp: Pe.default.getFromSiteToApp(),
                    isPreview: Pe.default.getIsPreview(),
                    language: xe.default.getForcedLocale() || "en",
                    getBlogSetting: Me.default.getBlogSetting
                }
            })), t.default = Ye, e.exports = t.default
        }
    }
]);