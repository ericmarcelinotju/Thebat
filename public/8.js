webpackJsonp([8],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("60b37816", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-628ef530\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Register.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-628ef530\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Register.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.container[data-v-628ef530]{\r\n  height: 100vh;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\n}\n.row[data-v-628ef530]{\r\n  width:100%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_js__ = __webpack_require__(18);
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
  name: 'register',

  data: function data() {
    return {
      credentials: {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      error: ''
    };
  },

  methods: {
    submit: function submit(event) {
      var _this = this;

      event.preventDefault();
      var token = $('meta[name="csrf-token"]').attr('content');
      __WEBPACK_IMPORTED_MODULE_0__services_auth_js__["a" /* default */].register(this.credentials, token).then(function (response) {
        _this.$router.push('/home');
      }).catch(function (exception) {
        console.log(exception);
      });
    }
  }
});

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-8 col-md-offset-2" }, [
        _c("div", { staticClass: "panel panel-default" }, [
          _c("div", { staticClass: "panel-heading" }, [_vm._v("Register")]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c(
              "form",
              {
                staticClass: "form-horizontal",
                on: {
                  submit: function($event) {
                    _vm.submit($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-4 control-label",
                      attrs: { for: "name" }
                    },
                    [_vm._v("Name")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.credentials.username,
                          expression: "credentials.username"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        id: "name",
                        type: "text",
                        required: "",
                        autofocus: ""
                      },
                      domProps: { value: _vm.credentials.username },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.credentials,
                            "username",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-4 control-label",
                      attrs: { for: "email" }
                    },
                    [_vm._v("E-Mail Address")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.credentials.email,
                          expression: "credentials.email"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "email", type: "email", required: "" },
                      domProps: { value: _vm.credentials.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.credentials,
                            "email",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-4 control-label",
                      attrs: { for: "password" }
                    },
                    [_vm._v("Password")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.credentials.password,
                          expression: "credentials.password"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "password", type: "password", required: "" },
                      domProps: { value: _vm.credentials.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.credentials,
                            "password",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-4 control-label",
                      attrs: { for: "password-confirm" }
                    },
                    [_vm._v("Confirm Password")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.credentials.password_confirmation,
                          expression: "credentials.password_confirmation"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        id: "password-confirm",
                        type: "password",
                        required: ""
                      },
                      domProps: {
                        value: _vm.credentials.password_confirmation
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.credentials,
                            "password_confirmation",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _vm._m(0)
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "col-md-6 col-md-offset-4" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [_vm._v("\r\n                    Register\r\n                ")]
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-628ef530", module.exports)
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(100)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(102)
/* template */
var __vue_template__ = __webpack_require__(103)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-628ef530"
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
Component.options.__file = "resources\\assets\\js\\components\\auth\\Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-628ef530", Component.options)
  } else {
    hotAPI.reload("data-v-628ef530", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});