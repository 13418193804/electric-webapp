global.webpackJsonp([2],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(155);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_07d7791e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(159);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(156)
}
var normalizeComponent = __webpack_require__(10)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-07d7791e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_07d7791e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/map/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07d7791e", Component.options)
  } else {
    hotAPI.reload("data-v-07d7791e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 156:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baidu__ = __webpack_require__(158);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({

  data: function data() {
    return {
      map: null

    };
  },
  mounted: function mounted() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_0__baidu__["a" /* init */])(function (map) {
      _this.map = map;
    });
  },

  methods: {},
  components: {}
});

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setPoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return init; });
/* unused harmony export setPosition */
/* unused harmony export getPosition */
/* unused harmony export setPlace */
var _this = this;

var setPoint = function setPoint(map, latitude, longitude) {
    setPosition(null);
    setTimeout(function () {
        var point = new BMap.Point(longitude, latitude);
        var marker = new BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        marker.disableDragging();
        map.centerAndZoom(point, 18);
        setPosition(point);
    }, 500);
};

var init = function init(callback) {
    var map = new BMap.Map("l-map");
    callback(map);
    map.centerAndZoom("北京", 18);
    map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用

    var ac = new BMap.Autocomplete( //建立一个自动完成的对象
    {
        "input": "suggestId",
        "location": map
    });

    ac.addEventListener("onhighlight", function (e) {
        //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
            _value = e.toitem.value;
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        G("searchResultPanel").innerHTML = str;
    });

    ac.addEventListener("onconfirm", function (e) {
        //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        var menpai = _value.district + _value.street + _value.business;
        G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
        setPlace(map, myValue);
    });
};

function G(id) {
    return document.getElementById(id);
}

var position = null;

var setPosition = function setPosition(position) {
    return _this.position = position;
};

var getPosition = function getPosition() {
    return _this.position;
};

var setPlace = function setPlace(map, myValue) {

    map.clearOverlays(); //清除地图上所有覆盖物
    setPosition(null);
    function myFun() {
        if (local.getResults()) {
            var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
            map.centerAndZoom(pp, 18);
            setPosition(pp);
            map.addOverlay(new BMap.Marker(pp)); //添加标注
        } else {}
    }
    var local = new BMap.LocalSearch(map, { //智能搜索
        onSearchComplete: myFun
    });
    local.search(myValue);
};

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    attrs: {
      "id": "l-map"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-07d7791e", esExports)
  }
}

/***/ })

},[154]);
//# sourceMappingURL=main.js.map