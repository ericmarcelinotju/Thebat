webpackJsonp([1],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("7a6271dc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1bfdbf3a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Detail.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1bfdbf3a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Detail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.card[data-v-1bfdbf3a]{\r\n  margin-top: 20px;\r\n  min-height: 200px;\r\n  padding-bottom: 20px;\n}\n.content[data-v-1bfdbf3a]{\r\n  border: 1px solid lightgray;\r\n  padding: 5px;\r\n  border-radius: 4px;\r\n  margin-bottom: 20px;\r\n  margin-top: 10px;\n}\nlegend span[data-v-1bfdbf3a]{\r\n  font-size: 0.6em;\n}\nlegend hr[data-v-1bfdbf3a]{\r\n  margin: 5px 0;\n}\n.title[data-v-1bfdbf3a]{\r\n  display: inline-block;\r\n  width: 80%;\n}\n.rules[data-v-1bfdbf3a]{\r\n  display: inline-block;\r\n  width:  auto;\r\n  vertical-align: top;\r\n  font-size: 1.4em;\r\n  cursor: pointer;\r\n  text-align: left;\r\n  float: right;\n}\n.rules-detail[data-v-1bfdbf3a]{\r\n  font-size: 0.5em;\r\n  background-color: white;\r\n  border-radius: 3px;\r\n  border: 1px solid lightgray;\r\n  padding: 7px;\r\n  line-height: 200%;\r\n  z-index:  100;\n}\n.rules-detail span[data-v-1bfdbf3a]{\r\n  display: block;\n}\n.join-btn[data-v-1bfdbf3a]{\r\n  position: absolute;\r\n  right: 20px;\r\n  bottom: 20px;\n}\n.grid[data-v-1bfdbf3a]{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\n}\n.comment input[data-v-1bfdbf3a]{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n  border-radius: 18px;\r\n  height: 40px;\r\n  margin-right: 12px;\r\n  padding-left: 16px;\r\n  border: 1px solid lightgray;\n}\n.comment input[data-v-1bfdbf3a]:focus{\r\n  outline: none;\n}\n.comment button[data-v-1bfdbf3a]{\r\n  -webkit-box-flex: 0;\r\n      -ms-flex: 0 0 auto;\r\n          flex: 0 0 auto;\r\n  border-radius: 100%;\r\n  height: 40px;\n}\n.comment-item[data-v-1bfdbf3a]{\r\n  border-radius: 18px;\r\n  background-color: #fafafa;\r\n  padding: 5px 16px;\r\n  margin-bottom: 10px;\n}\n.comment-item a[data-v-1bfdbf3a]{\r\n  margin-left: 10px;\n}\n.comments-comment[data-v-1bfdbf3a]{\r\n  padding-left: 20px;\n}\n.comments-comment .comment-item[data-v-1bfdbf3a]{\r\n  background-color: #fdfdfd;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_forum_js__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_comment_js__ = __webpack_require__(120);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: 'detail-forum',
  data: function data() {
    return {
      forum: {},
      comment: ''
    };
  },

  methods: _defineProperty({
    doComment: function doComment(id) {
      var _this = this;

      var token = $('meta[name="csrf-token"]').attr('content');

      __WEBPACK_IMPORTED_MODULE_1__services_comment_js__["a" /* default */].create({
        content: this.comment,
        forum_id: id,
        comment_id: null
      }, token).then(function (response) {
        _this.forum.comments.push(response);
      });
    },
    showReply: function showReply(comment) {
      comment.isReply = true;
    },
    doCommentComment: function doCommentComment(comment) {
      var _this2 = this;

      var token = $('meta[name="csrf-token"]').attr('content');
      console.log(comment);
      __WEBPACK_IMPORTED_MODULE_1__services_comment_js__["a" /* default */].create({
        content: comment.commentContent,
        forum_id: null,
        comment_id: comment.id
      }, token).then(function (response) {
        _this2.forum.comments.push(response);
      });
    }
  }, 'showReply', function showReply(comment) {
    comment.isReply = true;
  }),
  mounted: function mounted() {
    var _this3 = this;

    __WEBPACK_IMPORTED_MODULE_0__services_forum_js__["a" /* default */].find(this.$route.params.forum_id).then(function (response) {
      console.log(response);
      _this3.forum = response;
      for (var i = 0; i < _this3.forum.comments.length; i++) {
        _this3.$set(_this3.forum.comments[i], 'isReply', false);
        _this3.$set(_this3.forum.comments[i], 'commentContent', '');
      }
    });
  }
});

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(5);



var URL = '/api/comment';

var HEADERS = {
  emulateJSON: true
};

/* harmony default export */ __webpack_exports__["a"] = ({
  get: function get() {
    return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.http.get(URL, null).then(function (response) {
      return response.body;
    });
  },
  create: function create(data, token) {
    var params = {
      'content': data.content,
      'forum_id': data.forum_id,
      'comment_id': data.comment_id,
      '_token': token
    };

    return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.http.post(URL + '/create', params, HEADERS).then(function (response) {
      return response.body;
    });
  }
});

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card col-md-11" }, [
      _c("div", { staticClass: "title" }, [
        _c("legend", [
          _c("span", [_vm._v(_vm._s(_vm.forum.type))]),
          _vm._v(" "),
          _c("hr"),
          _vm._v("  \n        " + _vm._s(_vm.forum.title) + "\n    ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "rules" }, [
        _c(
          "div",
          { staticClass: "rules-detail" },
          _vm._l(_vm.forum.rules, function(rule) {
            return _c("span", [
              _c("i", {
                staticClass: "fa fa-check-square-o",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v("\n          " + _vm._s(rule.name) + "\n        ")
            ])
          })
        ),
        _vm._v(" "),
        _c("span", [_vm._v("by " + _vm._s(_vm.forum.user.username))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("span", { domProps: { innerHTML: _vm._s(_vm.forum.content) } })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "comments" },
        _vm._l(_vm.forum.comments, function(comment) {
          return _c("div", { staticClass: "comment-item" }, [
            _c("b", [
              _vm._v("\n        " + _vm._s(comment.username) + "\n        ")
            ]),
            _vm._v("\n        " + _vm._s(comment.content) + "\n        "),
            _c("br"),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    _vm.showReply(comment)
                  }
                }
              },
              [_vm._v("reply")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "comments-comment" },
              _vm._l(comment.comments, function(comment2) {
                return _c("div", { staticClass: "comment-item" }, [
                  _c("b", [
                    _vm._v(
                      "\n            " +
                        _vm._s(comment2.username) +
                        "\n            "
                    )
                  ]),
                  _vm._v(
                    "\n            " + _vm._s(comment2.content) + "\n          "
                  )
                ])
              })
            ),
            _vm._v(" "),
            comment.isReply
              ? _c("div", { staticClass: "comment grid" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: comment.commentContent,
                        expression: "comment.commentContent"
                      }
                    ],
                    attrs: {
                      type: "text",
                      placeholder: "Express your thoughts"
                    },
                    domProps: { value: comment.commentContent },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(comment, "commentContent", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("button", { staticClass: "btn" }, [
                    _c("i", {
                      staticClass: "fa fa-paper-plane-o",
                      attrs: { "aria-hidden": "true" },
                      on: {
                        click: function($event) {
                          _vm.doCommentComment(comment)
                        }
                      }
                    })
                  ])
                ])
              : _vm._e()
          ])
        })
      ),
      _vm._v(" "),
      _c("div", { staticClass: "comment grid" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.comment,
              expression: "comment"
            }
          ],
          attrs: { type: "text", placeholder: "Express your thoughts" },
          domProps: { value: _vm.comment },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.comment = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("button", { staticClass: "btn" }, [
          _c("i", {
            staticClass: "fa fa-paper-plane-o",
            attrs: { "aria-hidden": "true" },
            on: {
              click: function($event) {
                _vm.doComment(_vm.forum.id)
              }
            }
          })
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1bfdbf3a", module.exports)
  }
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(117)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(119)
/* template */
var __vue_template__ = __webpack_require__(121)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1bfdbf3a"
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
Component.options.__file = "resources\\assets\\js\\components\\forum\\Detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1bfdbf3a", Component.options)
  } else {
    hotAPI.reload("data-v-1bfdbf3a", Component.options)
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