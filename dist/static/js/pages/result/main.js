global.webpackJsonp([7],{

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(244);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_94278a84_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(247);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(245)
}
var normalizeComponent = __webpack_require__(10)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_94278a84_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/result/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-94278a84", Component.options)
  } else {
    hotAPI.reload("data-v-94278a84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 245:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    // 选项 数据
    return {
      sdArr: new Array(100),
      msg: {},
      time: 0,
      status: 1
    };
  },

  components: {// 定义组件

  },
  methods: {
    // 事件处理方法
    again: function again() {
      var url = this.msg.type == 4 ? 'pages/game/main?path=four' : this.msg.type == 6 ? 'pages/game/main?path=six' : this.msg.type == 9 ? 'pages/game/main?path=nine' : 'pages/home/main';
      this.reLaunchPageTo(this.router + url);
    }
  },
  created: function created() {// 生命周期函数

  },
  mounted: function mounted() {
    // console.log(99966666, this.$route, this.$root.$mp)
    console.log('result', this.$store.result);
    if (this.$store.result) {
      var status = this.$store.result.avg - this.$store.result.time > 0 ? this.$store.result.avg - this.$store.result.time > 60 ? 3 : 2 : 1;
      this.sdArr = this.$store.result.sdArr;
      this.time = this.$store.result.time;
      this.msg = this.$store.result;
      this.able = this.sdArr.map(function (x) {
        return x ? 0 : 1;
      });
      this.status = status;
    } else {
      var url = 'pages/home/main';
      this.reLaunchPageTo(this.router + url);
    }
  }
});

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "resultBox"
  }, [_c('img', {
    staticClass: "bg",
    attrs: {
      "src": "../../../static/img/bg2.png"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "resultkuang",
    attrs: {
      "src": "../../../static/img/resultKuang.png",
      "alt": ""
    }
  }), _vm._v(" "), (_vm.msg.type == 4) ? _c('div', {
    staticClass: "wrap wrap_4"
  }, _vm._l((_vm.sdArr), function(item, index) {
    return (index % 10 <= 4 && index >= 11 && index <= 44 && index % 10 != 0) ? _c('div', {
      key: index,
      class: ['item', (index > 20 && index < 30) ? 'mb' : '', index % 10 == 2 ? 'column3' : '', !item ? 'blank' : 'num'],
      attrs: {
        "data-index": index,
        "data-num": item
      }
    }, [_c('img', {
      staticClass: "numimg",
      attrs: {
        "data-id": index,
        "data-num": item,
        "src": !item ? _vm.imgSrc + 'static/img/blank.png' : _vm.imgSrc + 'static/img/' + item + '.png'
      }
    })]) : _vm._e()
  })) : (_vm.msg.type == 6) ? _c('div', {
    staticClass: "wrap wrap_6"
  }, [_vm._l((_vm.sdArr), function(item, index) {
    return (index % 10 == 1 && index <= 66 && index >= 11) ? _c('div', {
      key: index,
      class: ['item', index == 31 ? 'column3' : '', !item ? 'blank' : 'num'],
      attrs: {
        "data-index": index,
        "data-num": item
      }
    }, [_c('img', {
      staticClass: "numimg",
      attrs: {
        "data-id": index,
        "src": !item ? _vm.imgSrc + 'static/img/blank.png' : _vm.imgSrc + 'static/img/' + item + '.png'
      }
    })]) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.sdArr), function(item, index) {
    return (index % 10 == 2 && index <= 66 && index >= 11) ? _c('div', {
      key: index,
      class: ['item', 'mb', index == 32 ? 'column3' : '', !item ? 'blank' : 'num'],
      attrs: {
        "data-index": index,
        "data-num": item
      }
    }, [_c('img', {
      staticClass: "numimg",
      attrs: {
        "data-id": index,
        "src": !item ? _vm.imgSrc + 'static/img/blank.png' : _vm.imgSrc + 'static/img/' + item + '.png'
      }
    })]) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.sdArr), function(item, index) {
    return (index % 10 == 3 && index <= 66 && index >= 11) ? _c('div', {
      key: index,
      class: ['item', index == 33 ? 'column3' : '', !item ? 'blank' : 'num'],
      attrs: {
        "data-index": index,
        "data-num": item
      }
    }, [_c('img', {
      staticClass: "numimg",
      attrs: {
        "data-id": index,
        "src": !item ? _vm.imgSrc + 'static/img/blank.png' : _vm.imgSrc + 'static/img/' + item + '.png'
      }
    })]) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.sdArr), function(item, index) {
    return (index % 10 == 4 && index <= 66 && index >= 11) ? _c('div', {
      key: index,
      class: ['item', 'mb', index == 34 ? 'column3' : '', !item ? 'blank' : 'num'],
      attrs: {
        "data-index": index,
        "data-num": item
      }
    }, [_c('img', {
      staticClass: "numimg",
      attrs: {
        "data-id": index,
        "src": !item ? _vm.imgSrc + 'static/img/blank.png' : _vm.imgSrc + 'static/img/' + item + '.png'
      }
    })]) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.sdArr), function(item, index) {
    return (index % 10 == 5 && index <= 66 && index >= 11) ? _c('div', {
      key: index,
      class: ['item', index == 35 ? 'column3' : '', !item ? 'blank' : 'num'],
      attrs: {
        "data-index": index,
        "data-num": item
      }
    }, [_c('img', {
      staticClass: "numimg",
      attrs: {
        "data-id": index,
        "src": !item ? _vm.imgSrc + 'static/img/blank.png' : _vm.imgSrc + 'static/img/' + item + '.png'
      }
    })]) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.sdArr), function(item, index) {
    return (index % 10 == 6 && index <= 66 && index >= 11) ? _c('div', {
      key: index,
      class: ['item', index == 36 ? 'column3' : '', !item ? 'blank' : 'num'],
      attrs: {
        "data-index": index,
        "data-num": item
      }
    }, [_c('img', {
      staticClass: "numimg",
      attrs: {
        "data-id": index,
        "src": !item ? _vm.imgSrc + 'static/img/blank.png' : _vm.imgSrc + 'static/img/' + item + '.png'
      }
    })]) : _vm._e()
  })], 2) : (_vm.msg.type == 9) ? _c('div', {
    staticClass: "wrap wrap_9"
  }, _vm._l((_vm.sdArr), function(item, index) {
    return (index >= 11 && index <= 99 && index % 10 != 0) ? _c('div', {
      key: index,
      class: ['item', (index > 30 && index < 40) || (index > 60 && index < 70) ? 'mb' : '', index % 10 == 6 ? 'column6' : '', index % 10 == 3 ? 'column3' : '', !item ? 'blank' : 'num'],
      attrs: {
        "data-index": index,
        "data-num": item
      }
    }, [_c('img', {
      staticClass: "numimg",
      attrs: {
        "data-id": index,
        "data-num": item,
        "src": !item ? _vm.imgSrc + 'static/img/blank.png' : _vm.imgSrc + 'static/img/' + item + '.png'
      }
    })]) : _vm._e()
  })) : _vm._e(), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "src": "../../../static/img/again.png",
      "eventid": '0'
    },
    on: {
      "click": _vm.again
    }
  }), _vm._v(" "), (_vm.status == 1) ? _c('img', {
    staticClass: "monkey pass",
    attrs: {
      "src": "../../../static/img/pass.png"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.status == 2) ? _c('img', {
    staticClass: "monkey great",
    attrs: {
      "src": "../../../static/img/great.png"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.status == 3) ? _c('img', {
    staticClass: "monkey perfect",
    attrs: {
      "src": "../../../static/img/perfect.png"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.status == 1) ? _c('img', {
    staticClass: "icon passi",
    attrs: {
      "src": "../../../static/img/passicon.png"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.status == 2) ? _c('img', {
    staticClass: "icon greati",
    attrs: {
      "src": "../../../static/img/greaticon.png"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.status == 3) ? _c('img', {
    staticClass: "icon perfecti",
    attrs: {
      "src": "../../../static/img/perfecticon.png"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "result time"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/img/time.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s((_vm.time - _vm.time % 60) / 60))]), _vm._v(" "), _c('span', {
    staticClass: "r"
  }, [_vm._v(_vm._s(_vm.time % 60))])]), _vm._v(" "), _c('div', {
    staticClass: "result error"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/img/error.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.msg.error))])]), _vm._v(" "), _c('div', {
    staticClass: "result count"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/img/count.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.msg.count))])]), _vm._v(" "), _c('div', {
    staticClass: "result avg"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/img/avg.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s((_vm.msg.avg - _vm.msg.avg % 60) / 60))]), _vm._v(" "), _c('span', {
    staticClass: "r"
  }, [_vm._v(_vm._s(_vm.msg.avg % 60))])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-94278a84", esExports)
  }
}

/***/ })

},[243]);
//# sourceMappingURL=main.js.map