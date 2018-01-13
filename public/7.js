webpackJsonp([7],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(134)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(136)
/* template */
var __vue_template__ = __webpack_require__(137)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-056cea3a"
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
Component.options.__file = "resources\\assets\\js\\components\\forum\\Search.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-056cea3a", Component.options)
  } else {
    hotAPI.reload("data-v-056cea3a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("511f07ca", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-056cea3a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Search.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-056cea3a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Search.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.card[data-v-056cea3a]{\r\n  margin-top: 20px;\n}\nlegend span[data-v-056cea3a]{\r\n  font-size: 0.6em;\n}\nlegend hr[data-v-056cea3a]{\r\n  margin: 5px 0;\n}\n.title[data-v-056cea3a]{\r\n  display: inline-block;\r\n  width: 96%;\n}\n.content[data-v-056cea3a]{\r\n  border: 1px solid lightgray;\r\n  padding: 5px;\r\n  border-radius: 4px;\r\n  margin-bottom: 20px;\n}\n.rules[data-v-056cea3a]{\r\n  display: inline-block;\r\n  width:  3%;\r\n  vertical-align: top;\r\n  font-size: 2em;\r\n  cursor: pointer;\r\n  text-align: right;\n}\n.rules i[data-v-056cea3a]:hover{\r\n  color: lightgray;\n}\n.rules:hover .rules-detail[data-v-056cea3a]{\r\n  display: block;\n}\n.rules-detail[data-v-056cea3a]{\r\n  display: none;\r\n  position: absolute;\r\n  right:  20px;\r\n  font-size: 0.5em;\r\n  background-color: white;\r\n  border-radius: 3px;\r\n  border: 1px solid lightgray;\r\n  padding: 7px;\r\n  line-height: 200%;\r\n  z-index:  100;\n}\n.rules-detail span[data-v-056cea3a]{\r\n  display: block;\n}\n.tags[data-v-056cea3a]{\r\n  position: relative;\r\n  bottom: 5px;\n}\n.join-btn[data-v-056cea3a]{\r\n  position: absolute;\r\n  right: 20px;\r\n  bottom: 20px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 136:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'search-forum',
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

    __WEBPACK_IMPORTED_MODULE_0__services_forum_js__["a" /* default */].search(this.$route.params.search).then(function (response) {
      _this.forums = response;
      console.log(_this.$route.params.search);
      console.log(response);
    });
  }
});

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ev-view-forum" },
    _vm._l(_vm.forums, function(forum) {
      return _c("div", { staticClass: "card col-md-11" }, [
        _c("div", { staticClass: "title" }, [
          _c("legend", [
            _c("span", [_vm._v(_vm._s(forum.type))]),
            _vm._v(" "),
            _c("hr"),
            _vm._v("  \r\n          " + _vm._s(forum.title) + "\r\n      ")
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
                    _vm._v(
                      "\r\n            " + _vm._s(rule.name) + "\r\n          "
                    )
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
          _vm._l(forum.categories.split("#"), function(category) {
            return _c("a", [
              _vm._v("\r\n          #" + _vm._s(category) + "\r\n        ")
            ])
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-056cea3a", module.exports)
  }
}

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