global.webpackJsonp([7],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(161);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0a2d37c2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(242);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(162)
}
var normalizeComponent = __webpack_require__(10)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0a2d37c2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0a2d37c2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/mqttpush/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a2d37c2", Component.options)
  } else {
    hotAPI.reload("data-v-0a2d37c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mqtt__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mqtt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mqtt__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      }],
      messageList: []
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

      // var client  = mqtt.connect('mqtt://120.78.135.69:9000');


      // client.on('connect', function () {
      //    console.log('>>> connected')
      //   // 发布主题
      //   //  setInterval(
      //   //  		()=>{client.publish('mqtt', '30');},
      //   //  		3000
      //   //  	);


      //   // 订阅主题/temperature  在message 处接收
      //      client.subscribe('/temperature');
      // })

      // client.on('message',  (topic, message)=> {
      //   var data = JSON.parse(message.toString());

      //   this.messageList.push(message.toString())
      // sendMessage(message.toString())


      // })
      console.log('------');
      console.log(this.service);
    }
  }
});

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "homePage"
  }, [_c('button', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.onConnected()
      }
    }
  }, [_vm._v("订阅消息")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "index"
    }
  }, [_vm._v("字体16号")]), _vm._v(" "), _vm._l((_vm.messageList), function(item, index) {
    return _c('div', [_vm._v("\n\n  " + _vm._s(item) + "\n  \n")])
  }), _vm._v(" "), (_vm.os == 'wx') ? _c('div', [_c('map', {
    staticStyle: {
      "width": "100%",
      "height": "300px"
    },
    attrs: {
      "id": "myMap",
      "latitude": _vm.latitude,
      "longitude": _vm.longitude,
      "markers": _vm.markers,
      "covers": _vm.covers,
      "show-location": ""
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div')], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0a2d37c2", esExports)
  }
}

/***/ })

},[160]);
//# sourceMappingURL=main.js.map