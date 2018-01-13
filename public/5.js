webpackJsonp([5],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Insert_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Insert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Insert_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__View_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__View_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__View_vue__);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'index-forum',
  components: { InsertForum: __WEBPACK_IMPORTED_MODULE_0__Insert_vue___default.a, ViewForum: __WEBPACK_IMPORTED_MODULE_1__View_vue___default.a },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(106)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(108)
/* template */
var __vue_template__ = __webpack_require__(110)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\forum\\Insert.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-695c56cb", Component.options)
  } else {
    hotAPI.reload("data-v-695c56cb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("a3bf48f2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-695c56cb\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Insert.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-695c56cb\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Insert.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n#grid {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap:  wrap;\r\n      flex-wrap:  wrap;\r\n  border: 1px solid lightgray;\r\n  border-radius: 4px;\r\n  min-height: 36px;\r\n  line-height: 1.6;\r\n  padding: 6px 12px;\n}\n.grid{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\n}\n.rule-item{\r\n  -webkit-box-flex: 0;\r\n      -ms-flex: 0 0 auto;\r\n          flex: 0 0 auto;\r\n  padding: 0 5px;\r\n  width:  auto;\r\n  margin: 2px 4px 2px 0;\n}\n.category-tag{\r\n  -webkit-box-flex: 0;\r\n      -ms-flex: 0 0 auto;\r\n          flex: 0 0 auto;\r\n  border: 0.5px solid grey;\r\n  border-radius: 5px;\r\n  padding: 0 5px;\r\n  width:  auto;\r\n  margin: 2px 4px 2px 0;\n}\n.invisibleInput{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\n}\n.invisibleInput input{\r\n  border: none;\r\n  background-color: transparent;\r\n  width:  100%;\n}\n.invisibleInput input:focus{\r\n  outline: none;\n}\n.category-tag i{\r\n  cursor: pointer;\n}\n.card{\r\n  margin: 0 auto;\r\n  float: none;\r\n  background-color: white;\r\n  border-radius: 3px;\r\n  padding: 20px;\n}\n.form-insert{\r\n  border: 1px solid lightgray;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin-top: 20px;\r\n  -webkit-transition: all 2s ease;\r\n  transition: all 2s ease;\r\n  overflow-y: hidden;\r\n  -webkit-box-shadow: inset 2px 2px 2px rgba(255, 255, 255, .4), inset -2px -2px 2px rgba(0, 0, 0, .4);\r\n          box-shadow: inset 2px 2px 2px rgba(255, 255, 255, .4), inset -2px -2px 2px rgba(0, 0, 0, .4);\n}\n.toogle-button{\r\n  width: 100%;\n}\n.slide-fade-enter-active {\r\n  -webkit-transition: all .5s ease;\r\n  transition: all .5s ease;\n}\n.slide-fade-leave-active {\r\n  -webkit-transition: all .5s ease;\r\n  transition: all .5s ease;\n}\n.slide-fade-enter{\r\n  max-height: 0;\n}\n.slide-fade-enter-to{\r\n  max-height: 300px;\n}\n.slide-fade-leave{\r\n  max-height: 300px;\n}\n.slide-fade-leave-to{\r\n  max-height: 0;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_forum_js__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_rule_js__ = __webpack_require__(109);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'insert-forum',
  data: function data() {
    return {
      auth: this.$store.state.auth,
      isShowForm: false,
      config: {
        placeholderText: 'Debate Content',
        events: {
          'froalaEditor.initialized': function froalaEditorInitialized() {
            console.log('initialized');
          }
        }
      },
      currCategory: '',
      categoryPaddingLeft: '',
      rules: [],
      forum: {
        title: '',
        content: '',
        type: '',
        categories: [],
        rules: []
      }
    };
  },

  methods: {
    create: function create(event) {
      event.preventDefault();
      console.log(this.forum);
      var token = $('meta[name="csrf-token"]').attr('content');
      __WEBPACK_IMPORTED_MODULE_0__services_forum_js__["a" /* default */].create({
        title: this.forum.title,
        content: this.forum.content,
        type: this.forum.type,
        categories: this.forum.categories.join('#'),
        rules: this.forum.rules
      }, token).then(function (response) {
        console.log(response);
      }).catch(function (exception) {
        console.log(exception);
      });
    },
    showForm: function showForm(event) {
      event.preventDefault();
      if (this.isShowForm) this.isShowForm = false;else this.isShowForm = true;
    },
    createCategory: function createCategory() {
      var category = this.currCategory.trim();

      if (category.length > 0) {
        if (this.forum.categories.indexOf(category) == -1) {
          this.forum.categories.push(category);
          this.currCategory = '';
        } else {
          this.currCategory = '';
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_1__services_rule_js__["a" /* default */].get().then(function (response) {
      _this.rules = response;
    });
  }
});

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(5);



var URL = '/api/rule';

var HEADERS = {
  emulateJSON: true
};

/* harmony default export */ __webpack_exports__["a"] = ({
  get: function get() {
    return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.http.get(URL, null).then(function (response) {
      return response.body;
    });
  }
});

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card col-md-11" },
    [
      _c("legend", [_vm._v(_vm._s(_vm.auth.user.username))]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "toogle-button btn btn-primary",
          on: {
            click: function($event) {
              _vm.showForm($event)
            }
          }
        },
        [_vm._v("Start a debate")]
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide-fade" } }, [
        _c(
          "form",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isShowForm,
                expression: "isShowForm"
              }
            ],
            staticClass: "form-insert"
          },
          [
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.forum.title,
                    expression: "forum.title"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  placeholder: "Debate Title",
                  required: ""
                },
                domProps: { value: _vm.forum.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.forum, "title", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("froala", {
                  attrs: { tag: "textarea", config: _vm.config },
                  model: {
                    value: _vm.forum.content,
                    callback: function($$v) {
                      _vm.$set(_vm.forum, "content", $$v)
                    },
                    expression: "forum.content"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "grid" }, [
                _c("div", { staticClass: "rule-item" }, [
                  _c("label", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.forum.type,
                          expression: "forum.type"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        name: "type",
                        value: "scientific"
                      },
                      domProps: {
                        checked: _vm._q(_vm.forum.type, "scientific")
                      },
                      on: {
                        change: function($event) {
                          _vm.$set(_vm.forum, "type", "scientific")
                        }
                      }
                    }),
                    _vm._v(" \n              Scientific\n          ")
                  ]),
                  _vm._v(" "),
                  _c("label", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.forum.type,
                          expression: "forum.type"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        name: "type",
                        value: "discussion"
                      },
                      domProps: {
                        checked: _vm._q(_vm.forum.type, "discussion")
                      },
                      on: {
                        change: function($event) {
                          _vm.$set(_vm.forum, "type", "discussion")
                        }
                      }
                    }),
                    _vm._v(" \n              Discussion\n          ")
                  ]),
                  _vm._v(" "),
                  _c("label", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.forum.type,
                          expression: "forum.type"
                        }
                      ],
                      attrs: { type: "radio", name: "type", value: "open" },
                      domProps: { checked: _vm._q(_vm.forum.type, "open") },
                      on: {
                        change: function($event) {
                          _vm.$set(_vm.forum, "type", "open")
                        }
                      }
                    }),
                    _vm._v(" \n              Open\n          ")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "div",
                { attrs: { id: "grid" } },
                [
                  _vm._l(_vm.forum.categories, function(category, index) {
                    return _c(
                      "div",
                      { staticClass: "category-tag grid-item" },
                      [
                        _c("span", [_vm._v(_vm._s(category))]),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "fa fa-times",
                          attrs: { "aria-hidden": "true" },
                          on: {
                            click: function($event) {
                              _vm.forum.categories.splice(index)
                            }
                          }
                        })
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "invisibleInput grid-item" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.currCategory,
                          expression: "currCategory"
                        }
                      ],
                      attrs: { type: "text", placeholder: "Debate Categories" },
                      domProps: { value: _vm.currCategory },
                      on: {
                        keyup: function($event) {
                          if (
                            !("button" in $event) &&
                            _vm._k($event.keyCode, "space", 32, $event.key)
                          ) {
                            return null
                          }
                          _vm.createCategory($event)
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.currCategory = $event.target.value
                        }
                      }
                    })
                  ])
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "div",
                { staticClass: "grid" },
                _vm._l(_vm.rules, function(rule, index) {
                  return _c("div", { staticClass: "rule-item" }, [
                    _c("label", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.forum.rules,
                            expression: "forum.rules"
                          }
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          value: rule.id,
                          checked: Array.isArray(_vm.forum.rules)
                            ? _vm._i(_vm.forum.rules, rule.id) > -1
                            : _vm.forum.rules
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.forum.rules,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = rule.id,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 && (_vm.forum.rules = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.forum.rules = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.$set(_vm.forum, "rules", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(
                        "\n              " + _vm._s(rule.name) + "\n          "
                      )
                    ])
                  ])
                })
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  on: {
                    click: function($event) {
                      _vm.create($event)
                    }
                  }
                },
                [_vm._v("Create")]
              )
            ])
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-695c56cb", module.exports)
  }
}

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(112)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(114)
/* template */
var __vue_template__ = __webpack_require__(115)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61a22f37"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\forum\\View.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61a22f37", Component.options)
  } else {
    hotAPI.reload("data-v-61a22f37", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("537295f6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-61a22f37\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./View.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-61a22f37\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./View.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.card[data-v-61a22f37]{\r\n  margin-top: 20px;\n}\nlegend span[data-v-61a22f37]{\r\n  font-size: 0.6em;\n}\nlegend hr[data-v-61a22f37]{\r\n  margin: 5px 0;\n}\n.title[data-v-61a22f37]{\r\n  display: inline-block;\r\n  width: 96%;\n}\n.content[data-v-61a22f37]{\r\n  border: 1px solid lightgray;\r\n  padding: 5px;\r\n  border-radius: 4px;\r\n  margin-bottom: 20px;\n}\n.rules[data-v-61a22f37]{\r\n  display: inline-block;\r\n  width:  3%;\r\n  vertical-align: top;\r\n  font-size: 2em;\r\n  cursor: pointer;\r\n  text-align: right;\n}\n.rules i[data-v-61a22f37]:hover{\r\n  color: lightgray;\n}\n.rules:hover .rules-detail[data-v-61a22f37]{\r\n  display: block;\n}\n.rules-detail[data-v-61a22f37]{\r\n  display: none;\r\n  position: absolute;\r\n  right:  20px;\r\n  font-size: 0.5em;\r\n  background-color: white;\r\n  border-radius: 3px;\r\n  border: 1px solid lightgray;\r\n  padding: 7px;\r\n  line-height: 200%;\r\n  z-index:  100;\n}\n.rules-detail span[data-v-61a22f37]{\r\n  display: block;\n}\n.tags[data-v-61a22f37]{\r\n  position: relative;\r\n  bottom: 5px;\n}\n.join-btn[data-v-61a22f37]{\r\n  position: absolute;\r\n  right: 20px;\r\n  bottom: 20px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_forum_js__ = __webpack_require__(95);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'view-forum',
  data: function data() {
    return {
      forums: []
    };
  },

  methods: {
    detail: function detail(id) {
      this.$router.push({ name: 'forumdetail', params: { forum_id: id } });
    },
    submitSearch: function submitSearch(category) {
      this.$router.push({ name: 'forumsearch', params: { search: category } });
    }
  },
  mounted: function mounted(argument) {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0__services_forum_js__["a" /* default */].get().then(function (response) {
      _this.forums = response;
      console.log(response);
    });
  }
});

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.forums, function(forum) {
      return _c("div", { staticClass: "card col-md-11" }, [
        _c("div", { staticClass: "title" }, [
          _c("legend", [
            _c("span", [_vm._v(_vm._s(forum.type))]),
            _vm._v(" "),
            _c("hr"),
            _vm._v("  \n        " + _vm._s(forum.title) + "\n    ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "rules" }, [
          _c("i", {
            staticClass: "fa fa-book",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v(" "),
          forum.rules.length > 0
            ? _c(
                "div",
                { staticClass: "rules-detail" },
                _vm._l(forum.rules, function(rule) {
                  return _c("span", [
                    _c("i", {
                      staticClass: "fa fa-check-square-o",
                      attrs: { "aria-hidden": "true" }
                    }),
                    _vm._v("\n          " + _vm._s(rule.name) + "\n        ")
                  ])
                })
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "content" }, [
          _c("span", { domProps: { innerHTML: _vm._s(forum.content) } })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "tags" },
          [
            _vm._l(forum.categories.split("#"), function(category) {
              return [
                _c(
                  "a",
                  {
                    on: {
                      click: function($event) {
                        _vm.submitSearch(category)
                      }
                    }
                  },
                  [_vm._v("\n        #" + _vm._s(category) + "\n      ")]
                )
              ]
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary join-btn",
            on: {
              click: function($event) {
                _vm.detail(forum.id)
              }
            }
          },
          [_vm._v("Join")]
        )
      ])
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-61a22f37", module.exports)
  }
}

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ev-view-forum" },
    [_c("insert-forum"), _vm._v(" "), _c("view-forum")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-02e49530", module.exports)
  }
}

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(104)
/* template */
var __vue_template__ = __webpack_require__(116)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\forum\\Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02e49530", Component.options)
  } else {
    hotAPI.reload("data-v-02e49530", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(5);



var URL = '/api/forum';

var HEADERS = {
  emulateJSON: true
};

/* harmony default export */ __webpack_exports__["a"] = ({
  get: function get() {
    return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.http.get(URL, null).then(function (response) {
      return response.body;
    });
  },
  find: function find(id) {
    return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.http.get(URL + '/' + id, null).then(function (response) {
      return response.body;
    });
  },
  search: function search(tag) {
    return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.http.get(URL + '/search/' + tag, null).then(function (response) {
      return response.body;
    });
  },
  create: function create(data, token) {
    var params = {
      'title': data.title,
      'content': data.content,
      'type': data.type,
      'categories': data.categories,
      'rules': data.rules,
      '_token': token
    };

    return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.http.post(URL + '/create', params, HEADERS).then(function (response) {
      return response.body;
    });
  }
});

/***/ })

});