!(function (e) {
    var t = {};
    function a(i) {
        if (t[i]) return t[i].exports;
        var n = (t[i] = { i: i, l: !1, exports: {} });
        return e[i].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
    }
    (a.m = e),
        (a.c = t),
        (a.d = function (e, t, i) {
            a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
        }),
        (a.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (a.t = function (e, t) {
            if ((1 & t && (e = a(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if ((a.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var n in e)
                    a.d(
                        i,
                        n,
                        function (t) {
                            return e[t];
                        }.bind(null, n)
                    );
            return i;
        }),
        (a.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return a.d(t, "a", t), t;
        }),
        (a.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (a.p = "/dist/"),
        a((a.s = 0));
})([
    function (e, t, a) {
        "use strict";
        a.r(t);
        var i = (function (e, t, a, i, n, s, r, o) {
            var u,
                l = "function" == typeof e ? e.options : e;
            if (
                (t && ((l.render = t), (l.staticRenderFns = a), (l._compiled = !0)),
                i && (l.functional = !0),
                s && (l._scopeId = "data-v-" + s),
                r
                    ? ((u = function (e) {
                          (e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                              n && n.call(this, e),
                              e && e._registeredComponents && e._registeredComponents.add(r);
                      }),
                      (l._ssrRegister = u))
                    : n &&
                      (u = o
                          ? function () {
                                n.call(this, this.$root.$options.shadowRoot);
                            }
                          : n),
                u)
            )
                if (l.functional) {
                    l._injectStyles = u;
                    var h = l.render;
                    l.render = function (e, t) {
                        return u.call(t), h(e, t);
                    };
                } else {
                    var c = l.beforeCreate;
                    l.beforeCreate = c ? [].concat(c, u) : [u];
                }
            return { exports: e, options: l };
        })(
            {
                props: {
                    elementId: String,
                    existingTags: {
                        type: Array,
                        default: function () {
                            return [];
                        },
                    },
                    value: {
                        type: Array,
                        default: function () {
                            return [];
                        },
                    },
                    typeahead: { type: Boolean, default: !1 },
                    typeaheadStyle: { type: String, default: "badges" },
                    typeaheadActivationThreshold: { type: Number, default: 1 },
                    typeaheadMaxResults: { type: Number, default: 0 },
                    typeaheadAlwaysShow: { type: Boolean, default: !1 },
                    typeaheadShowOnFocus: { type: Boolean, default: !0 },
                    typeaheadHideDiscard: { type: Boolean, default: !1 },
                    typeaheadUrl: { type: String, default: "" },
                    placeholder: { type: String, default: "Add a hobby" },
                    discardSearchText: { type: String, default: "Discard Search Results" },
                    limit: { type: Number, default: 0 },
                    hideInputOnLimit: { type: Boolean, default: !1 },
                    onlyExistingTags: { type: Boolean, default: !1 },
                    deleteOnBackspace: { type: Boolean, default: !0 },
                    allowDuplicates: { type: Boolean, default: !1 },
                    validate: {
                        type: Function,
                        default: function () {
                            return !0;
                        },
                    },
                    addTagsOnComma: { type: Boolean, default: !1 },
                    addTagsOnSpace: { type: Boolean, default: !1 },
                    addTagsOnBlur: { type: Boolean, default: !1 },
                    wrapperClass: { type: String, default: "tags-input-wrapper-default" },
                    sortSearchResults: { type: Boolean, default: !0 },
                    caseSensitiveTags: { type: Boolean, default: !1 },
                    beforeAddingTag: {
                        type: Function,
                        default: function () {
                            return !0;
                        },
                    },
                    beforeRemovingTag: {
                        type: Function,
                        default: function () {
                            return !0;
                        },
                    },
                },
                data: function () {
                    return { badgeId: 0, tags: [], input: "", oldInput: "", hiddenInput: "", searchResults: [], searchSelection: 0, selectedTag: -1, isActive: !1 };
                },
                created: function () {
                    this.tagsFromValue(), this.typeaheadAlwaysShow && this.searchTag(!1);
                },
                mounted: function () {
                    var e = this;
                    this.$emit("initialized"),
                        document.addEventListener("click", function (t) {
                            t.target !== e.$refs.taginput && e.clearSearchResults();
                        });
                },
                computed: {
                    hideInputField: function () {
                        return this.hideInputOnLimit && this.limit > 0 && this.tags.length >= this.limit;
                    },
                },
                watch: {
                    input: function (e, t) {
                        if ((this.searchTag(!1), e.length && e != t)) {
                            e.substring(t.length, e.length);
                            this.addTagsOnSpace && e.endsWith(" ") && ((this.input = e.trim()), this.tagFromInput(!0)),
                                this.addTagsOnComma && (e = e.trim()).endsWith(",") && ((this.input = e.substring(0, e.length - 1)), this.tagFromInput(!0)),
                                this.$emit("change", e);
                        }
                    },
                    tags: function () {
                        (this.hiddenInput = JSON.stringify(this.tags)), this.$emit("input", this.tags);
                    },
                    value: function () {
                        this.tagsFromValue();
                    },
                    typeaheadAlwaysShow: function (e) {
                        e ? this.searchTag(!1) : this.clearSearchResults();
                    },
                },
                methods: {
                    escapeRegExp: function (e) {
                        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                    },
                    tagFromInput: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (this.searchResults.length && this.searchSelection >= 0 && !e) this.tagFromSearch(this.searchResults[this.searchSelection]), (this.input = "");
                        else {
                            var t = this.input.trim();
                            if (!this.onlyExistingTags && t.length && this.validate(t)) {
                                this.input = "";
                                var a = { key: "", value: t },
                                    i = this.escapeRegExp(this.caseSensitiveTags ? a.value : a.value.toLowerCase()),
                                    n = !0,
                                    s = !1,
                                    r = void 0;
                                try {
                                    for (var o, u = this.existingTags[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                                        var l = o.value,
                                            h = this.caseSensitiveTags ? l.value : l.value.toLowerCase();
                                        if (i === h) {
                                            a = Object.assign({}, l);
                                            break;
                                        }
                                    }
                                } catch (e) {
                                    (s = !0), (r = e);
                                } finally {
                                    try {
                                        !n && u.return && u.return();
                                    } finally {
                                        if (s) throw r;
                                    }
                                }
                                this.addTag(a);
                            }
                        }
                    },
                    tagFromSearchOnClick: function (e) {
                        this.tagFromSearch(e), this.$refs.taginput.blur();
                    },
                    tagFromSearch: function (e) {
                        var t = this;
                        this.clearSearchResults(),
                            this.addTag(e),
                            this.$nextTick(function () {
                                (t.input = ""), (t.oldInput = "");
                            });
                    },
                    addTag: function (e) {
                        var t = this;
                        return (
                            !!this.beforeAddingTag(e) &&
                            (this.limit > 0 && this.tags.length >= this.limit
                                ? (this.$emit("limit-reached"), !1)
                                : void (
                                      this.tagSelected(e) ||
                                      (this.tags.push(e),
                                      this.$nextTick(function () {
                                          t.$emit("tag-added", e), t.$emit("tags-updated");
                                      }))
                                  ))
                        );
                    },
                    removeLastTag: function () {
                        !this.input.length && this.deleteOnBackspace && this.tags.length && this.removeTag(this.tags.length - 1);
                    },
                    removeTag: function (e) {
                        var t = this,
                            a = this.tags[e];
                        if (!this.beforeRemovingTag(a)) return !1;
                        this.tags.splice(e, 1),
                            this.$nextTick(function () {
                                t.$emit("tag-removed", a), t.$emit("tags-updated"), t.typeaheadAlwaysShow && t.searchTag();
                            });
                    },
                    searchTag: function () {
                        if (!0 !== this.typeahead) return !1;
                        if (this.oldInput != this.input || (!this.searchResults.length && 0 == this.typeaheadActivationThreshold) || this.typeaheadAlwaysShow || this.typeaheadShowOnFocus) {
                            (this.searchResults = []), (this.searchSelection = 0);
                            var e = this.input.trim();
                            if ((e.length && e.length >= this.typeaheadActivationThreshold) || 0 == this.typeaheadActivationThreshold || this.typeaheadAlwaysShow) {
                                var t = this.escapeRegExp(this.caseSensitiveTags ? e : e.toLowerCase());
                                if (this.typeaheadUrl.length > 0) {
                                    this.existingTags.splice();
                                    var a = new XMLHttpRequest(),
                                        i = this;
                                    a.onreadystatechange = function () {
                                        4 == this.readyState && 200 == this.status && ((i.existingTags = JSON.parse(a.responseText)), i.doSearch(t));
                                    };
                                    var n = this.typeaheadUrl.replace(":search", t);
                                    a.open("GET", n, !0), a.send();
                                } else this.doSearch(t);
                            }
                            this.oldInput = this.input;
                        }
                    },
                    doSearch: function (e) {
                        var t = !0,
                            a = !1,
                            i = void 0;
                        try {
                            for (var n, s = this.existingTags[Symbol.iterator](); !(t = (n = s.next()).done); t = !0) {
                                var r = n.value;
                                (this.caseSensitiveTags ? r.value : r.value.toLowerCase()).search(e) > -1 && !this.tagSelected(r) && this.searchResults.push(r);
                            }
                        } catch (e) {
                            (a = !0), (i = e);
                        } finally {
                            try {
                                !t && s.return && s.return();
                            } finally {
                                if (a) throw i;
                            }
                        }
                        this.sortSearchResults &&
                            this.searchResults.sort(function (e, t) {
                                return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
                            }),
                            this.typeaheadMaxResults > 0 && (this.searchResults = this.searchResults.slice(0, this.typeaheadMaxResults));
                    },
                    hideTypeahead: function () {
                        var e = this;
                        this.input.length ||
                            this.$nextTick(function () {
                                e.clearSearchResults();
                            });
                    },
                    nextSearchResult: function () {
                        this.searchSelection + 1 <= this.searchResults.length - 1 && this.searchSelection++;
                    },
                    prevSearchResult: function () {
                        this.searchSelection > 0 && this.searchSelection--;
                    },
                    clearSearchResults: function () {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        (this.searchResults = []),
                            (this.searchSelection = 0),
                            this.typeaheadAlwaysShow &&
                                this.$nextTick(function () {
                                    e.searchTag();
                                }),
                            t && this.$refs.taginput.focus();
                    },
                    clearTags: function () {
                        this.tags.splice(0, this.tags.length);
                    },
                    tagsFromValue: function () {
                        if (this.value && this.value.length) {
                            if (!Array.isArray(this.value)) return void console.error("Voerro Tags Input: the v-model value must be an array!");
                            var e = this.value;
                            if (this.tags == e) return;
                            this.clearTags();
                            var t = !0,
                                a = !1,
                                i = void 0;
                            try {
                                for (var n, s = e[Symbol.iterator](); !(t = (n = s.next()).done); t = !0) {
                                    var r = n.value;
                                    this.addTag(r);
                                }
                            } catch (e) {
                                (a = !0), (i = e);
                            } finally {
                                try {
                                    !t && s.return && s.return();
                                } finally {
                                    if (a) throw i;
                                }
                            }
                        } else {
                            if (0 == this.tags.length) return;
                            this.clearTags();
                        }
                    },
                    tagSelected: function (e) {
                        if (this.allowDuplicates) return !1;
                        if (!e) return !1;
                        var t = this.escapeRegExp(this.caseSensitiveTags ? e.value : e.value.toLowerCase()),
                            a = !0,
                            i = !1,
                            n = void 0;
                        try {
                            for (var s, r = this.tags[Symbol.iterator](); !(a = (s = r.next()).done); a = !0) {
                                var o = s.value,
                                    u = this.caseSensitiveTags ? o.value : o.value.toLowerCase();
                                if (o.key === e.key && this.escapeRegExp(u).length == t.length && u.search(t) > -1) return !0;
                            }
                        } catch (e) {
                            (i = !0), (n = e);
                        } finally {
                            try {
                                !a && r.return && r.return();
                            } finally {
                                if (i) throw n;
                            }
                        }
                        return !1;
                    },
                    clearInput: function () {
                        this.input = "";
                    },
                    onKeyUp: function (e) {
                        this.$emit("keyup", e);
                    },
                    onKeyDown: function (e) {
                        this.$emit("keydown", e);
                    },
                    onFocus: function (e) {
                        this.$emit("focus", e), (this.isActive = !0);
                    },
                    onClick: function (e) {
                        this.$emit("click", e), (this.isActive = !0), this.searchTag();
                    },
                    onBlur: function (e) {
                        this.$emit("blur", e), this.addTagsOnBlur && this.tagFromInput(!0), this.typeaheadAlwaysShow ? this.searchTag() : this.hideTypeahead(), (this.isActive = !1);
                    },
                },
            },
            function () {
                var e,
                    t = this,
                    a = t.$createElement,
                    i = t._self._c || a;
                return i("div", { staticClass: "tags-input-root", staticStyle: { position: "relative" } }, [
                    i(
                        "div",
                        { class: ((e = {}), (e[t.wrapperClass + " tags-input"] = !0), (e.active = t.isActive), e) },
                        [
                            t._l(t.tags, function (e, a) {
                                return i("span", { key: a, staticClass: "tags-input-badge tags-input-badge-pill tags-input-badge-selected-default" }, [
                                    i("span", { domProps: { innerHTML: t._s(e.value) } }),
                                    t._v(" "),
                                    i("a", {
                                        staticClass: "tags-input-remove",
                                        attrs: { href: "#" },
                                        on: {
                                            click: function (e) {
                                                return e.preventDefault(), t.removeTag(a);
                                            },
                                        },
                                    }),
                                ]);
                            }),
                            t._v(" "),
                            i("input", {
                                directives: [
                                    { name: "model", rawName: "v-model", value: t.input, expression: "input" },
                                    { name: "show", rawName: "v-show", value: !t.hideInputField, expression: "!hideInputField" },
                                ],
                                ref: "taginput",
                                attrs: { type: "text", placeholder: t.placeholder },
                                domProps: { value: t.input },
                                on: {
                                    keydown: [
                                        function (e) {
                                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.tagFromInput(!1));
                                        },
                                        function (e) {
                                            return e.type.indexOf("key") || 8 === e.keyCode ? t.removeLastTag(e) : null;
                                        },
                                        function (e) {
                                            return !e.type.indexOf("key") && t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"]) ? null : t.nextSearchResult(e);
                                        },
                                        function (e) {
                                            return !e.type.indexOf("key") && t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"]) ? null : t.prevSearchResult(e);
                                        },
                                        t.onKeyDown,
                                    ],
                                    keyup: [
                                        t.onKeyUp,
                                        function (e) {
                                            return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : t.clearSearchResults(e);
                                        },
                                    ],
                                    focus: t.onFocus,
                                    click: t.onClick,
                                    blur: t.onBlur,
                                    value: t.tags,
                                    input: function (e) {
                                        e.target.composing || (t.input = e.target.value);
                                    },
                                },
                            }),
                            t._v(" "),
                            t.elementId
                                ? i("input", {
                                      directives: [{ name: "model", rawName: "v-model", value: t.hiddenInput, expression: "hiddenInput" }],
                                      attrs: { type: "hidden", name: t.elementId, id: t.elementId },
                                      domProps: { value: t.hiddenInput },
                                      on: {
                                          input: function (e) {
                                              e.target.composing || (t.hiddenInput = e.target.value);
                                          },
                                      },
                                  })
                                : t._e(),
                        ],
                        2
                    ),
                    t._v(" "),
                    i("div", { directives: [{ name: "show", rawName: "v-show", value: t.searchResults.length, expression: "searchResults.length" }] }, [
                        "badges" === t.typeaheadStyle
                            ? i(
                                  "p",
                                  { class: "typeahead-" + t.typeaheadStyle },
                                  [
                                      t.typeaheadHideDiscard
                                          ? t._e()
                                          : i("span", {
                                                staticClass: "tags-input-badge typeahead-hide-btn tags-input-typeahead-item-default",
                                                domProps: { textContent: t._s(t.discardSearchText) },
                                                on: {
                                                    click: function (e) {
                                                        return e.preventDefault(), t.clearSearchResults(!0);
                                                    },
                                                },
                                            }),
                                      t._v(" "),
                                      t._l(t.searchResults, function (e, a) {
                                          return i("span", {
                                              key: a,
                                              staticClass: "tags-input-badge",
                                              class: { "tags-input-typeahead-item-default": a != t.searchSelection, "tags-input-typeahead-item-highlighted-default": a == t.searchSelection },
                                              domProps: { innerHTML: t._s(e.value) },
                                              on: {
                                                  mouseover: function (e) {
                                                      t.searchSelection = a;
                                                  },
                                                  mousedown: function (a) {
                                                      return a.preventDefault(), t.tagFromSearchOnClick(e);
                                                  },
                                              },
                                          });
                                      }),
                                  ],
                                  2
                              )
                            : "dropdown" === t.typeaheadStyle
                            ? i(
                                  "ul",
                                  { class: "typeahead-" + t.typeaheadStyle },
                                  [
                                      t.typeaheadHideDiscard
                                          ? t._e()
                                          : i("li", {
                                                staticClass: "tags-input-typeahead-item-default typeahead-hide-btn",
                                                domProps: { textContent: t._s(t.discardSearchText) },
                                                on: {
                                                    click: function (e) {
                                                        return e.preventDefault(), t.clearSearchResults(!0);
                                                    },
                                                },
                                            }),
                                      t._v(" "),
                                      t._l(t.searchResults, function (e, a) {
                                          return i("li", {
                                              key: a,
                                              class: { "tags-input-typeahead-item-default": a != t.searchSelection, "tags-input-typeahead-item-highlighted-default": a == t.searchSelection },
                                              domProps: { innerHTML: t._s(e.value) },
                                              on: {
                                                  mouseover: function (e) {
                                                      t.searchSelection = a;
                                                  },
                                                  mousedown: function (a) {
                                                      return a.preventDefault(), t.tagFromSearchOnClick(e);
                                                  },
                                              },
                                          });
                                      }),
                                  ],
                                  2
                              )
                            : t._e(),
                    ]),
                ]);
            },
            [],
            !1,
            null,
            null,
            null
        ).exports;
        window.VoerroTagsInput = i;
        t.default = i;
    },
]);
//# sourceMappingURL=voerro-vue-tagsinput.js.map
