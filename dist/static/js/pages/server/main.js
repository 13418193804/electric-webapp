global.webpackJsonp([5],{

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(249);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_447e6a64_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(254);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(250)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_447e6a64_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/server/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-447e6a64", Component.options)
  } else {
    hotAPI.reload("data-v-447e6a64", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 250:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mqtt__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mqtt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mqtt__);

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
      os: this.$store.getters["getOs"],
      mapCtx: {},
      latitude: 23.099994,
      longitude: 113.32452,
      markers: [{
        id: 1,
        latitude: 23.099994,
        longitude: 113.32452,
        name: "T.I.T 创意园"
      }],
      covers: [{
        latitude: 23.099994,
        longitude: 113.34452,
        iconPath: "../../../static/img/location.png"
      }, {
        latitude: 23.099994,
        longitude: 113.30452,
        iconPath: "../../../static/img/location.png"
      }]
    };
  },

  components: {
    // 定义组件
  },
  methods: {},
  created: function created() {
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted: function mounted() {
    console.log(this.os);
    if (this.os == 'wx') {
      this.mapCtx = wx.createMapContext("myMap");
    } else {

      var _mqtt = __webpack_require__(29);
      var client = _mqtt.connect('tcp://119.29.102.131:1883');

      client.on('connect', function () {
        console.log('>>> connected');
        client.subscribe('/temperature');
      });

      client.on('message', function (topic, message) {
        var temperature = parseInt(message.toString());
        var data = { temperature: temperature };

        if (temperature >= 60) {
          data.tips = "热... 500服务器故障";
        } else if (temperature >= 50) {
          data.tips = "今天天气非常热，建议不要穿衣服了";
        } else if (temperature >= 40) {
          data.tips = "今天天气十分的热，建议穿短袖T恤+短裤";
        } else if (temperature >= 30) {
          data.tips = "今天天气有点的热，建议穿短袖T恤";
        } else if (temperature >= 0) {
          data.tips = "今天天气正好，可以穿上一件薄衣服";
        } else if (temperature >= -10) {
          data.tips = "今天天气十分寒冷，棉袄可以穿上一件";
        } else {
          data.tips = "今天天气十分十分寒冷，棉袄可以穿上二件";
        }
        client.publish('/tips', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(data));
        // if (temperature+1) {}
        // message is Buffer
        console.log(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(data));
      });
    }
  }
});

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "homePage"
  }, [_c('div', {
    staticStyle: {
      "font-size": "16px"
    }
  }, [_vm._v("\n  字体大小\n")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "font-size": "16rpx"
    }
  }, [_vm._v("\n  字体大小\n")]), _vm._v(" "), _c('div')])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-447e6a64", esExports)
  }
}

/***/ })

},[248]);
//# sourceMappingURL=main.js.map