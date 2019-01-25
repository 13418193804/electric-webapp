global.webpackJsonp([8],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(149);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0e37d300_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(152);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(150)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0e37d300_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/home/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e37d300", Component.options)
  } else {
    hotAPI.reload("data-v-0e37d300", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 150:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 151:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    // 选项 数据
    return {};
  },

  components: {
    // 定义组件
  },

  methods: {
    // 事件处理方法
    gotoGame: function gotoGame(path) {
      this.reLaunchPageTo(this.router + path);
    },
    getTask: function getTask() {

      this.$router.push({ name: 'myTask' }); // 我的任务
    },
    goMine: function goMine() {
      this.$router.push({ name: 'my' }); // 我的
    }
  },
  created: function created() {
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted: function mounted() {

    // this.service
    //   .httpRequest({
    //     url: "/address/queryprovince",
    //     methods: "post",
    //     data: {}
    //   })
    //   .then(res => {
    //     console.log(res);
    //   });
    // console.log('home999', this.$root, this.$root.$mp)
  }
});

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "homePage"
  }, [_c('div', {
    staticClass: "homeTitle"
  }, [_c('h1', [_vm._v("智能运维管理系统")])], 1), _vm._v(" "), _c('div', {
    staticClass: "banner"
  }), _vm._v(" "), _c('div', {
    staticClass: "flex menus"
  }, [_c('div', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.getTask()
      }
    }
  }, [_vm._v("我的任务")]), _vm._v(" "), _c('div', [_vm._v("设备管理")]), _vm._v(" "), _c('div', [_vm._v("物料管理")]), _vm._v(" "), _c('div', [_vm._v("消息")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "flex footNav"
  }, [_c('div', {
    staticClass: "footCur"
  }, [_vm._v("首页")]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.goMine()
      }
    }
  }, [_vm._v("我的")])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cartogram"
  }, [_c('div', {
    staticClass: "catTop"
  }), _vm._v(" "), _c('div', {
    staticClass: "chat"
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0e37d300", esExports)
  }
}

/***/ })

},[148]);
//# sourceMappingURL=main.js.map