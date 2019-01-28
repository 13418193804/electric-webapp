global.webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conf__ = __webpack_require__(66);







/* harmony default export */ __webpack_exports__["a"] = ({
  getUserInfo: function getUserInfo() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
      var data;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                wx.login({
                  success: function success() {
                    wx.getUserInfo({
                      success: resolve,
                      fail: reject
                    });
                  }
                });
              });

            case 2:
              data = _context.sent;
              return _context.abrupt('return', data);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  httpRequest: function httpRequest() {
    var _this2 = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var data;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                // switch (options.type) {
                //   case 0:
                //     options.url = 'https://stocks.liangplus.com' + options.url.split('/liang')[1]
                //     break
                //   case 1:
                //     options.url = 'http://www.liangplus.com' + options.url.split('/api')[1]
                //     break;
                //   default:
                //     break
                // }
                wx.request({
                  url: __WEBPACK_IMPORTED_MODULE_4__conf__["a" /* base_url */] + options.url,
                  data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, options.data),
                  method: options.methods || 'GET',
                  header: options.headers || {
                    'Content-Type': 'application/json'
                  },
                  success: resolve,
                  fail: reject
                });
              });

            case 2:
              data = _context2.sent;
              return _context2.abrupt('return', data);

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
});

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conf__ = __webpack_require__(66);




// import axios from 'axios'
/* unused harmony default export */ var _unused_webpack_default_export = ({
  //ajax请求
  httpRequest: function httpRequest() {
    var _this = this;

    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(option.methods == 'GET' || option.methods == 'get')) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return axios.get(__WEBPACK_IMPORTED_MODULE_2__conf__["a" /* base_url */] + option.url, {
                params: option.data
              });

            case 3:
              return _context.abrupt('return', _context.sent);

            case 6:
              if (!(option.methods == 'POST' || option.methods == 'post')) {
                _context.next = 12;
                break;
              }

              _context.next = 9;
              return axios.post(__WEBPACK_IMPORTED_MODULE_2__conf__["a" /* base_url */] + option.url, option.data, {
                headers: option.headers || {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              });

            case 9:
              return _context.abrupt('return', _context.sent);

            case 12:
              console.log('method not allow!');

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return base_url; });


// export const base_url = "https://pbms.onv.com.cn/api"


var base_url = "http://203.195.236.254:8886/yidekuai";

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_wxService__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_httpService__ = __webpack_require__(141);






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.mixin({
  data: function data() {
    return {
      service: '',
      router: '/',
      imgSrc: '/'
    };
  },

  methods: {
    newroot: function newroot() {
      return this.$root.$mp;
    },
    navigatePageTo: function navigatePageTo(url) {
      wx.navigateTo({ url: url });
    },
    reLaunchPageTo: function reLaunchPageTo(url) {
      wx.reLaunch({ url: url });
    }
  },
  created: function created() {
    this.service = __WEBPACK_IMPORTED_MODULE_3__api_wxService__["a" /* default */];
  }
});

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/home/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '数独小游戏',
      navigationBarTextStyle: 'black'
    }
  }
});

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(95);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(93)
}
var normalizeComponent = __webpack_require__(10)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3279189e", Component.options)
  } else {
    hotAPI.reload("data-v-3279189e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 93:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    this.$store.commit('SETOS', 'wx');
  }
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export state */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters_js__ = __webpack_require__(99);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/** 状态定义 */
var state = {
    result: '',
    os: ''

    // 定义所需的 mutations
};var mutations = {
    SETOS: function SETOS(state, os) {
        state.os = os;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    actions: __WEBPACK_IMPORTED_MODULE_2__actions__,
    getters: __WEBPACK_IMPORTED_MODULE_3__getters_js__,
    state: state,
    mutations: mutations
}));

/***/ }),

/***/ 98:
/***/ (function(module, exports) {



/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOs", function() { return getOs; });

var getOs = function getOs(state) {
    return state.os;
};

/***/ })

},[91]);
//# sourceMappingURL=app.js.map