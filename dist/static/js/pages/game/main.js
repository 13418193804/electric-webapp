global.webpackJsonp([3],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(143);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0bdbf1d3_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(147);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(144)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0bdbf1d3_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/game/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0bdbf1d3", Component.options)
  } else {
    hotAPI.reload("data-v-0bdbf1d3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 144:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_sdpro_js__ = __webpack_require__(146);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      sdArr: [],
      blankArr: [],
      level: 18,
      startTime: Date.now(),
      activeId: null,
      able: [],
      sign: 'g0',
      signX: 0,
      signY: 0,
      error: 0,
      count: 1,
      typelevel: 0,
      type: 0,
      path: ''
    };
  },

  components: {// 定义组件

  },
  methods: { // 事件处理方法
    signChange: function signChange(e) {
      // console.log(e.target.dataset.able, e.target.dataset)
      if (e.target.dataset.able == 1) {
        this.activeId = e.target.dataset.id;
        this.sign = e.target.dataset.id;
        this.signX = e.target.dataset.id - e.target.dataset.id % 10;
        this.signY = e.target.dataset.id % 10;
      } else {
        // console.log(888)
        this.sign = 'g' + e.target.dataset.num;
        this.activeId = null;
        this.signX = 0;
        this.signY = 0;
      }
    },
    set: function set(e) {
      if (this.activeId && this.sdArr[this.activeId] != e.target.dataset.index) {
        this.level = this.sdArr[this.activeId] == '' ? this.level - 1 : this.level;
        this.sdArr[this.activeId] = parseInt(e.target.dataset.index);
        this.sign = 'g' + e.target.dataset.index;
        this.signX = 0;
        this.signY = 0;
        if (this.level == 0) {
          this.check();
        }
      }
    },
    check: function check() {
      if (this.sdArr + '' == this.sd.backupSdArr + '') {
        this.$store.result = {
          type: this.type,
          sdArr: this.sd.backupSdArr,
          time: Math.floor((Date.now() - this.startTime) / 1000),
          count: this.count,
          error: this.error,
          avg: this.avg
        };
        var url = 'pages/result/main';
        this.reLaunchPageTo(this.router + url);
      }
    },
    undo: function undo() {},
    back: function back() {
      this.reLaunchPageTo(this.router + 'pages/home/main');
    },
    restart: function restart() {
      console.log(this.sdArr, this.sd.sdArr);
      this.level = this.typelevel;
      this.sdArr = this.sd.sdArr.slice();
      this.startTime = Date.now();
      this.activeId = null;
      this.sign = 'g0';
      this.signX = 0;
      this.signY = 0;
      this.count = this.count + 1;
    }
  },
  created: function created() {// 生命周期函数
    // console.log('game----created',this.$root, this.path, this.$root.$mp)
  },
  mounted: function mounted() {
    // console.log('query', this.$root.$mp, this.newroot().query)
    // this.path = this.service.getroot(this).query.path
    this.path = this.newroot().query.path;
    if (this.path == 'four') {
      this.sd = new __WEBPACK_IMPORTED_MODULE_0__utils_sdpro_js__["a" /* SDfour */]();
      this.sd.createSdArr();
      this.sd.blankNum = this.level = this.typelevel = 8;
      this.sd.createBlank();
      this.type = 4;
      this.avg = 120;
    } else if (this.path == 'six') {
      this.sd = new __WEBPACK_IMPORTED_MODULE_0__utils_sdpro_js__["c" /* SDsix */]();
      this.sd.createSdArr();
      this.sd.blankNum = this.level = this.typelevel = 18;
      this.sd.createBlank();
      this.type = 6;
      this.avg = 180;
    } else if (this.path == 'nine') {
      this.sd = new __WEBPACK_IMPORTED_MODULE_0__utils_sdpro_js__["b" /* SDnine */]();
      this.sd.createSdArr();
      this.sd.blankNum = this.level = this.typelevel = 40;
      this.sd.createBlank();
      this.type = 9;
      this.avg = 360;
    } else {
      this.reLaunchPageTo(this.router + 'pages/home/main');
    }
    this.sdArr = this.sd.sdArr.slice();
    this.able = this.sd.sdArr.map(function (x) {
      return x ? 0 : 1;
    });
    this.startTime = Date.now();
    this.activeId = null;
    this.sign = 'g0';
    this.signX = 0;
    this.signY = 0;
  }
});

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDfour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SDsix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SDnine; });

function SDsix() {
  this.sdArr = []; // 生成的数独数组
  this.errorArr = []; // 错误的格子。
  this.blankNum = 30; // 空白格子数量
  this.backupSdArr = []; // 数独数组备份。
}

SDsix.prototype = {
  constructor: SDsix,
  createSdArr: function createSdArr() {
    // 生成数独数组。
    var that = this;
    try {
      this.sdArr = [];
      var allNum = [1, 2, 3, 4, 5, 6];
      // outerfor:
      for (var i = 1; i <= 6; i++) {
        // innerfor:
        for (var j = 1; j <= 6; j++) {
          // console.log(this.sdArr[parseInt(i + '' + j)])
          if (!this.sdArr[parseInt(i + '' + j)]) {
            // continue innerfor
            var XArr = this.getXArr(j, this.sdArr);
            var YArr = this.getYArr(i, this.sdArr);
            var thArr = this.getThArr(i, j, this.sdArr);
            var arr = getConnect(getConnect(XArr, YArr), thArr);
            var ableArr = arrMinus(allNum, arr);
            if (ableArr.length == 0) {
              this.createSdArr();
              return;
              // break outerfor
              // break
            }
            var item;
            // 如果生成的重复了就重新生成。
            do {
              item = ableArr[getRandom(ableArr.length) - 1];
            } while (arr.indexOf(item) > -1);

            this.sdArr[parseInt(i + '' + j)] = item;
          }
        }
      }
      this.backupSdArr = this.sdArr.slice();
      return this.sdArr;
    } catch (e) {
      // 如果因为超出浏览器的栈限制出错，就重新运行。
      that.createSdArr();
    }
  },
  getXArr: function getXArr(j, sdArr) {
    // 获取所在行的值。
    var arr = [];
    for (var a = 1; a <= 6; a++) {
      if (this.sdArr[parseInt(a + '' + j)]) {
        arr.push(sdArr[parseInt(a + '' + j)]);
      }
    }
    return arr;
  },
  getYArr: function getYArr(i, sdArr) {
    // 获取所在列的值。
    var arr = [];
    for (var a = 1; a <= 6; a++) {
      if (sdArr[parseInt(i + '' + a)]) {
        arr.push(sdArr[parseInt(i + '' + a)]);
      }
    }
    return arr;
  },
  getThArr: function getThArr(i, j, sdArr) {
    // 获取所在三宫格的值。
    var arr = [];
    var cenNum = this.getTh(i, j);
    var thIndexArr = [cenNum - 11, cenNum - 1, cenNum + 9, cenNum - 10, cenNum, cenNum + 10];
    for (var a = 0; a < 6; a++) {
      if (sdArr[thIndexArr[a]]) {
        arr.push(sdArr[thIndexArr[a]]);
      }
    }
    return arr;
  },
  getTh: function getTh(i, j) {
    // 获取所在三宫格的中间位坐标。
    var cenArr = [22, 52, 24, 54, 26, 56];
    var index = (Math.ceil(j / 2) - 1) * 2 + Math.ceil(i / 3) - 1;
    var cenNum = cenArr[index];
    return cenNum;
  },
  createBlank: function createBlank(num) {
    // 生成指定数量的空白格子的坐标。
    var blankArr = [];
    var numArr = [1, 2, 3, 4, 5, 6];
    var item;
    num = num || this.blankNum;
    for (var a = 0; a < num; a++) {
      do {
        item = parseInt(numArr[getRandom(6) - 1] + '' + numArr[getRandom(6) - 1]);
      } while (blankArr.indexOf(item) > -1);
      blankArr.push(item);
    }
    this.blankArr = blankArr;
    for (var i = 0; i < blankArr.length; i++) {
      this.sdArr[blankArr[i]] = '';
    }
  }
};

function SDfour() {
  this.sdArr = []; // 生成的数独数组
  this.errorArr = []; // 错误的格子。
  this.blankNum = 5; // 空白格子数量
  this.backupSdArr = []; // 数独数组备份。
}

SDfour.prototype = {
  constructor: SDfour,
  init: function init(blankNum) {
    this.createSdArr();
    this.createBlank();
  },
  createSdArr: function createSdArr() {
    // 生成数独数组。
    var that = this;
    try {
      this.sdArr = [];
      var allNum = [1, 2, 3, 4];
      // outerfor:
      for (var i = 1; i <= 4; i++) {
        // innerfor:
        for (var j = 1; j <= 4; j++) {
          if (!this.sdArr[parseInt(i + '' + j)]) {
            // continue innerfor;
            var XArr = this.getXArr(j, this.sdArr);
            var YArr = this.getYArr(i, this.sdArr);
            var thArr = this.getThArr(i, j, this.sdArr);
            var arr = getConnect(getConnect(XArr, YArr), thArr);
            var ableArr = arrMinus(allNum, arr);

            if (ableArr.length == 0) {
              this.createSdArr();
              return;
              // break outerfor;
            }

            var item;
            // 如果生成的重复了就重新生成。
            do {
              item = ableArr[getRandom(ableArr.length) - 1];
            } while (arr.indexOf(item) > -1);

            this.sdArr[parseInt(i + '' + j)] = item;
          }
        }
      }
      this.backupSdArr = this.sdArr.slice();
      return this.sdArr;
    } catch (e) {
      // 如果因为超出浏览器的栈限制出错，就重新运行。
      that.createSdArr();
    }
  },
  getXArr: function getXArr(j, sdArr) {
    // 获取所在行的值。
    var arr = [];
    for (var a = 1; a <= 4; a++) {
      if (this.sdArr[parseInt(a + '' + j)]) {
        arr.push(sdArr[parseInt(a + '' + j)]);
      }
    }
    return arr;
  },
  getYArr: function getYArr(i, sdArr) {
    // 获取所在列的值。
    var arr = [];
    for (var a = 1; a <= 4; a++) {
      if (sdArr[parseInt(i + '' + a)]) {
        arr.push(sdArr[parseInt(i + '' + a)]);
      }
    }
    return arr;
  },
  getThArr: function getThArr(i, j, sdArr) {
    // n获取所在三宫格的值。
    var arr = [];
    var cenNum = this.getTh(i, j);
    var thIndexArr = [cenNum - 10, cenNum, cenNum + 1, cenNum - 9];
    for (var a = 0; a < 4; a++) {
      if (sdArr[thIndexArr[a]]) {
        arr.push(sdArr[thIndexArr[a]]);
      }
    }
    return arr;
  },
  getTh: function getTh(i, j) {
    // 获取所在三宫格的中间位坐标。
    var cenArr = [21, 41, 23, 43];
    var index = (Math.ceil(j / 2) - 1) * 2 + Math.ceil(i / 2) - 1;
    var cenNum = cenArr[index];
    return cenNum;
  },
  createBlank: function createBlank(num) {
    // 生成指定数量的空白格子的坐标。
    var blankArr = [];
    var numArr = [1, 2, 3, 4];
    var item;
    num = num || this.blankNum;
    for (var a = 0; a < num; a++) {
      do {
        item = parseInt(numArr[getRandom(4) - 1] + '' + numArr[getRandom(4) - 1]);
      } while (blankArr.indexOf(item) > -1);
      blankArr.push(item);
    }
    this.blankArr = blankArr;
    // console.log(blankArr)
    for (var i = 0; i < blankArr.length; i++) {
      this.sdArr[blankArr[i]] = '';
    }
  }

  //  九宫格-----------------------------------------------------------------------------
};function SDnine() {
  this.sdArr = []; // 生成的数独数组
  this.errorArr = []; // 错误的格子。
  this.blankNum = 30; // 空白格子数量
  this.backupSdArr = []; // 数独数组备份。
}

SDnine.prototype = {
  constructor: SDnine,
  init: function init(blankNum) {
    this.createSdArr();
    this.createBlank();
  },
  createSdArr: function createSdArr() {
    // 生成数独数组。
    var that = this;
    try {
      this.sdArr = [];
      this.setThird(2, 2);
      this.setThird(5, 5);
      this.setThird(8, 8);
      var allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      // outerfor:
      for (var i = 1; i <= 9; i++) {
        // innerfor:
        for (var j = 1; j <= 9; j++) {
          if (!this.sdArr[parseInt(i + '' + j)]) {
            // continue innerfor
            var XArr = this.getXArr(j, this.sdArr);
            var YArr = this.getYArr(i, this.sdArr);
            var thArr = this.getThArr(i, j, this.sdArr);
            var arr = getConnect(getConnect(XArr, YArr), thArr);
            var ableArr = arrMinus(allNum, arr);

            if (ableArr.length == 0) {
              this.createSdArr();
              return;
              // break outerfor
              // break
            }
            var item;
            // 如果生成的重复了就重新生成。
            do {
              item = ableArr[getRandom(ableArr.length) - 1];
            } while (arr.indexOf(item) > -1);

            this.sdArr[parseInt(i + '' + j)] = item;
          }
        }
      }
      this.backupSdArr = this.sdArr.slice();
      return this.sdArr;
    } catch (e) {
      // 如果因为超出浏览器的栈限制出错，就重新运行。
      that.createSdArr();
    }
  },
  getXArr: function getXArr(j, sdArr) {
    // 获取所在行的值。
    var arr = [];
    for (var a = 1; a <= 9; a++) {
      if (this.sdArr[parseInt(a + '' + j)]) {
        arr.push(sdArr[parseInt(a + '' + j)]);
      }
    }
    return arr;
  },
  getYArr: function getYArr(i, sdArr) {
    // 获取所在列的值。
    var arr = [];
    for (var a = 1; a <= 9; a++) {
      if (sdArr[parseInt(i + '' + a)]) {
        arr.push(sdArr[parseInt(i + '' + a)]);
      }
    }
    return arr;
  },
  getThArr: function getThArr(i, j, sdArr) {
    // 获取所在三宫格的值。
    var arr = [];
    var cenNum = this.getTh(i, j);
    var thIndexArr = [cenNum - 11, cenNum - 1, cenNum + 9, cenNum - 10, cenNum, cenNum + 10, cenNum - 9, cenNum + 1, cenNum + 11];
    for (var a = 0; a < 9; a++) {
      if (sdArr[thIndexArr[a]]) {
        arr.push(sdArr[thIndexArr[a]]);
      }
    }
    return arr;
  },
  getTh: function getTh(i, j) {
    // 获取所在三宫格的中间位坐标。
    var cenArr = [22, 52, 82, 25, 55, 85, 28, 58, 88];
    var index = (Math.ceil(j / 3) - 1) * 3 + Math.ceil(i / 3) - 1;
    var cenNum = cenArr[index];
    return cenNum;
  },
  setThird: function setThird(i, j) {
    // 为对角线上的三个三宫格随机生成。
    var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var sortedNumArr = numArr.sort(function () {
      return Math.random() - 0.5 > 0 ? -1 : 1;
    });
    var cenNum = parseInt(i + '' + j);
    var thIndexArr = [cenNum - 11, cenNum - 1, cenNum + 9, cenNum - 10, cenNum, cenNum + 10, cenNum - 9, cenNum + 1, cenNum + 11];
    for (var a = 0; a < 9; a++) {
      this.sdArr[thIndexArr[a]] = sortedNumArr[a];
    }
  },
  createBlank: function createBlank(num) {
    // 生成指定数量的空白格子的坐标。
    var blankArr = [];
    var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var item;
    num = num || this.blankNum;
    for (var a = 0; a < num; a++) {
      do {
        item = parseInt(numArr[getRandom(9) - 1] + '' + numArr[getRandom(9) - 1]);
      } while (blankArr.indexOf(item) > -1);
      blankArr.push(item);
    }
    this.blankArr = blankArr;
    // console.log(blankArr)
    for (var i = 0; i < blankArr.length; i++) {
      this.sdArr[blankArr[i]] = '';
    }
  }

  // 生成随机正整数
};function getRandom(n) {
  return Math.floor(Math.random() * n + 1);
}

// 两个简单数组的并集。
function getConnect(arr1, arr2) {
  var i;
  var len = arr1.length;
  var resArr = arr2.slice();
  for (i = 0; i < len; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {
      resArr.push(arr1[i]);
    }
  }
  return resArr;
}

// 两个简单数组差集，arr1为大数组
function arrMinus(arr1, arr2) {
  var resArr = [];
  var len = arr1.length;
  for (var i = 0; i < len; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {
      resArr.push(arr1[i]);
    }
  }
  return resArr;
}



/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.path == 'six') ? _c('div', {
    staticClass: "sudoSixBox"
  }, [_c('img', {
    staticClass: "bg",
    attrs: {
      "src": "../../../static/img/bg2.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "top"
  }, [_c('img', {
    staticClass: "back",
    attrs: {
      "src": "../../../static/img/back.png",
      "eventid": '0'
    },
    on: {
      "click": _vm.back
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "restart",
    attrs: {
      "src": "../../../static/img/restart2.png",
      "eventid": '1'
    },
    on: {
      "click": _vm.restart
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "logo",
    attrs: {
      "src": "../../../static/img/logo.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "wrap"
  }, [_vm._l((_vm.sdArr), function(item, index) {
    return (index % 10 == 1 && index <= 66 && index >= 11) ? _c('div', {
      key: index,
      class: ['item', index == 31 ? 'column3' : '', !item ? 'blank' : 'num', _vm.activeId == index ? 'active' : ''],
      attrs: {
        "data-index": index,
        "data-num": item,
        "eventid": '2-' + index
      },
      on: {
        "click": _vm.signChange
      }
    }, [_c('img', {
      staticClass: "numimg",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": !item ? _vm.imgSrc + 'static/img/blank.png' : _vm.able[index] ? _vm.imgSrc + 'static/img/blank' + item + '.png' : _vm.imgSrc + 'static/img/' + item + '.png'
      }
    }), _vm._v(" "), (_vm.sign == 'g' + item) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_1.png"
      }
    }) : _vm._e(), _vm._v(" "), (_vm.sign == index) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_2.png"
      }
    }) : _vm._e(), _vm._v(" "), (!item ? false : (index % 10 == _vm.signY || index - index % 10 == _vm.signX)) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_3.png"
      }
    }) : _vm._e()]) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.sdArr), function(item, index) {
    return (index % 10 == 2 && index <= 66 && index >= 11) ? _c('div', {
      key: index,
      class: ['item', 'mb', index == 32 ? 'column3' : '', !item ? 'blank' : 'num', _vm.activeId == index ? 'active' : ''],
      attrs: {
        "data-index": index,
        "data-num": item,
        "eventid": '3-' + index
      },
      on: {
        "click": _vm.signChange
      }
    }, [_c('img', {
      staticClass: "numimg",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": !item ? _vm.imgSrc + 'static/img/blank.png' : _vm.able[index] ? _vm.imgSrc + 'static/img/blank' + item + '.png' : _vm.imgSrc + 'static/img/' + item + '.png'
      }
    }), _vm._v(" "), (_vm.sign == 'g' + item) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_1.png"
      }
    }) : _vm._e(), _vm._v(" "), (_vm.sign == index) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_2.png"
      }
    }) : _vm._e(), _vm._v(" "), (!item ? false : (index % 10 == _vm.signY || index - index % 10 == _vm.signX)) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_3.png"
      }
    }) : _vm._e()]) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.sdArr), function(item, index) {
    return (index % 10 == 3 && index <= 66 && index >= 11) ? _c('div', {
      key: index,
      class: ['item', index == 33 ? 'column3' : '', !item ? 'blank' : 'num', _vm.activeId == index ? 'active' : ''],
      attrs: {
        "data-index": index,
        "data-num": item,
        "eventid": '4-' + index
      },
      on: {
        "click": _vm.signChange
      }
    }, [_c('img', {
      staticClass: "numimg",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": !item ? _vm.imgSrc + 'static/img/blank.png' : _vm.able[index] ? _vm.imgSrc + 'static/img/blank' + item + '.png' : _vm.imgSrc + 'static/img/' + item + '.png'
      }
    }), _vm._v(" "), (_vm.sign == 'g' + item) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_1.png"
      }
    }) : _vm._e(), _vm._v(" "), (_vm.sign == index) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_2.png"
      }
    }) : _vm._e(), _vm._v(" "), (item ? false : (index % 10 == _vm.signY || index - index % 10 == _vm.signX)) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_3.png"
      }
    }) : _vm._e()]) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.sdArr), function(item, index) {
    return (index % 10 == 4 && index <= 66 && index >= 11) ? _c('div', {
      key: index,
      class: ['item', 'mb', index == 34 ? 'column3' : '', !item ? 'blank' : 'num', _vm.activeId == index ? 'active' : ''],
      attrs: {
        "data-index": index,
        "data-num": item,
        "eventid": '5-' + index
      },
      on: {
        "click": _vm.signChange
      }
    }, [_c('img', {
      staticClass: "numimg",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": !item ? _vm.imgSrc + 'static/img/blank.png' : _vm.able[index] ? _vm.imgSrc + 'static/img/blank' + item + '.png' : _vm.imgSrc + 'static/img/' + item + '.png'
      }
    }), _vm._v(" "), (_vm.sign == 'g' + item) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_1.png"
      }
    }) : _vm._e(), _vm._v(" "), (_vm.sign == index) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_2.png"
      }
    }) : _vm._e(), _vm._v(" "), (!item ? false : (index % 10 == _vm.signY || index - index % 10 == _vm.signX)) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_3.png"
      }
    }) : _vm._e()]) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.sdArr), function(item, index) {
    return (index % 10 == 5 && index <= 66 && index >= 11) ? _c('div', {
      key: index,
      class: ['item', index == 35 ? 'column3' : '', !item ? 'blank' : 'num', _vm.activeId == index ? 'active' : ''],
      attrs: {
        "data-index": index,
        "data-num": item,
        "eventid": '6-' + index
      },
      on: {
        "click": _vm.signChange
      }
    }, [_c('img', {
      staticClass: "numimg",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": !item ? _vm.imgSrc + 'static/img/blank.png' : _vm.able[index] ? _vm.imgSrc + 'static/img/blank' + item + '.png' : _vm.imgSrc + 'static/img/' + item + '.png'
      }
    }), _vm._v(" "), (_vm.sign == 'g' + item) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_1.png"
      }
    }) : _vm._e(), _vm._v(" "), (_vm.sign == index) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_2.png"
      }
    }) : _vm._e(), _vm._v(" "), (!item ? false : (index % 10 == _vm.signY || index - index % 10 == _vm.signX)) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_3.png"
      }
    }) : _vm._e()]) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.sdArr), function(item, index) {
    return (index % 10 == 6 && index <= 66 && index >= 11) ? _c('div', {
      key: index,
      class: ['item', index == 36 ? 'column3' : '', !item ? 'blank' : 'num', _vm.activeId == index ? 'active' : ''],
      attrs: {
        "data-index": index,
        "data-num": item,
        "eventid": '7-' + index
      },
      on: {
        "click": _vm.signChange
      }
    }, [_c('img', {
      staticClass: "numimg",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": !item ? _vm.imgSrc + 'static/img/blank.png' : _vm.able[index] ? _vm.imgSrc + 'static/img/blank' + item + '.png' : _vm.imgSrc + 'static/img/' + item + '.png'
      }
    }), _vm._v(" "), (_vm.sign == 'g' + item) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_1.png"
      }
    }) : _vm._e(), _vm._v(" "), (_vm.sign == index) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_2.png"
      }
    }) : _vm._e(), _vm._v(" "), (!item ? false : (index % 10 == _vm.signY || index - index % 10 == _vm.signX)) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_3.png"
      }
    }) : _vm._e()]) : _vm._e()
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "btnwrap"
  }, [_c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 1,
      "src": "../../../static/img/btn1.png",
      "eventid": '8'
    },
    on: {
      "click": _vm.set
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 2,
      "src": "../../../static/img/btn2.png",
      "eventid": '9'
    },
    on: {
      "click": _vm.set
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 3,
      "src": "../../../static/img/btn3.png",
      "eventid": '10'
    },
    on: {
      "click": _vm.set
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 4,
      "src": "../../../static/img/btn4.png",
      "eventid": '11'
    },
    on: {
      "click": _vm.set
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 5,
      "src": "../../../static/img/btn5.png",
      "eventid": '12'
    },
    on: {
      "click": _vm.set
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 6,
      "src": "../../../static/img/btn6.png",
      "eventid": '13'
    },
    on: {
      "click": _vm.set
    }
  })]), _vm._v(" "), _c('img', {
    staticClass: "board",
    attrs: {
      "src": "../../../static/img/board_6.png",
      "mode": "widthFix"
    }
  })]) : (_vm.path == 'four') ? _c('div', {
    staticClass: "sudoFourBox"
  }, [_c('img', {
    staticClass: "bg",
    attrs: {
      "src": "../../../static/img/bg2.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "top"
  }, [_c('img', {
    staticClass: "back",
    attrs: {
      "src": "../../../static/img/back.png",
      "eventid": '14'
    },
    on: {
      "click": _vm.back
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "restart",
    attrs: {
      "src": "../../../static/img/restart2.png",
      "eventid": '15'
    },
    on: {
      "click": _vm.restart
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "logo",
    attrs: {
      "src": "../../../static/img/logo.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "wrap"
  }, _vm._l((_vm.sdArr), function(item, index) {
    return (index % 10 <= 4 && index >= 11 && index <= 44 && index % 10 != 0) ? _c('div', {
      key: index,
      class: ['item', (index > 20 && index < 30) ? 'mb' : '', index % 10 == 2 ? 'column3' : '', !item ? 'blank' : 'num', _vm.activeId == index ? 'active' : ''],
      attrs: {
        "data-index": index,
        "data-num": item,
        "eventid": '16-' + index
      },
      on: {
        "click": _vm.signChange
      }
    }, [_c('img', {
      staticClass: "numimg",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": !item ? _vm.imgSrc + 'static/img/blank.png' : _vm.able[index] ? _vm.imgSrc + 'static/img/blank' + item + '.png' : _vm.imgSrc + 'static/img/' + item + '.png'
      }
    }), _vm._v(" "), (_vm.sign == 'g' + item) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_1.png"
      }
    }) : _vm._e(), _vm._v(" "), (_vm.sign == index) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_2.png"
      }
    }) : _vm._e(), _vm._v(" "), (!item ? false : (index % 10 == _vm.signY || index - index % 10 == _vm.signX)) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_3.png"
      }
    }) : _vm._e()]) : _vm._e()
  })), _vm._v(" "), _c('div', {
    staticClass: "btnwrap"
  }, [_c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 1,
      "src": "../../../static/img/btn1.png",
      "eventid": '17'
    },
    on: {
      "click": _vm.set
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 2,
      "src": "../../../static/img/btn2.png",
      "eventid": '18'
    },
    on: {
      "click": _vm.set
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 3,
      "src": "../../../static/img/btn3.png",
      "eventid": '19'
    },
    on: {
      "click": _vm.set
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 4,
      "src": "../../../static/img/btn4.png",
      "eventid": '20'
    },
    on: {
      "click": _vm.set
    }
  })]), _vm._v(" "), _c('img', {
    staticClass: "board",
    attrs: {
      "src": "../../../static/img/board_4.png",
      "mode": "widthFix"
    }
  })]) : (_vm.path == 'nine') ? _c('div', {
    staticClass: "sudoNineBox"
  }, [_c('img', {
    staticClass: "bg",
    attrs: {
      "src": "../../../static/img/bg2.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "top"
  }, [_c('img', {
    staticClass: "back",
    attrs: {
      "src": "../../../static/img/back.png",
      "eventid": '21'
    },
    on: {
      "click": _vm.back
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "restart",
    attrs: {
      "src": "../../../static/img/restart2.png",
      "eventid": '22'
    },
    on: {
      "click": _vm.restart
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "logo",
    attrs: {
      "src": "../../../static/img/logo.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "wrap"
  }, _vm._l((_vm.sdArr), function(item, index) {
    return (index >= 11 && index <= 99 && index % 10 != 0) ? _c('div', {
      key: index,
      class: ['item', (index > 30 && index < 40) || (index > 60 && index < 70) ? 'mb' : '', index % 10 == 6 ? 'column6' : '', index % 10 == 3 ? 'column3' : '', !item ? 'blank' : 'num', _vm.activeId == index ? 'active' : ''],
      attrs: {
        "data-index": index,
        "data-num": item,
        "eventid": '23-' + index
      },
      on: {
        "click": _vm.signChange
      }
    }, [_c('img', {
      staticClass: "numimg",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": !item ? _vm.imgSrc + 'static/img/blank.png' : _vm.able[index] ? _vm.imgSrc + 'static/img/blank' + item + '.png' : _vm.imgSrc + 'static/img/' + item + '.png'
      }
    }), _vm._v(" "), (_vm.sign == 'g' + item) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_1.png"
      }
    }) : _vm._e(), _vm._v(" "), (_vm.sign == index) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_2.png"
      }
    }) : _vm._e(), _vm._v(" "), (!item ? false : (index % 10 == _vm.signY || index - index % 10 == _vm.signX)) ? _c('img', {
      staticClass: "border lighted",
      attrs: {
        "data-id": index,
        "data-able": _vm.able[index],
        "data-num": item,
        "src": "../../../static/img/lighted_3.png"
      }
    }) : _vm._e()]) : _vm._e()
  })), _vm._v(" "), _c('div', {
    staticClass: "btnwrap"
  }, [_c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 1,
      "src": "../../../static/img/btn1.png",
      "eventid": '24'
    },
    on: {
      "click": _vm.set
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 2,
      "src": "../../../static/img/btn2.png",
      "eventid": '25'
    },
    on: {
      "click": _vm.set
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 3,
      "src": "../../../static/img/btn3.png",
      "eventid": '26'
    },
    on: {
      "click": _vm.set
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 4,
      "src": "../../../static/img/btn4.png",
      "eventid": '27'
    },
    on: {
      "click": _vm.set
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 5,
      "src": "../../../static/img/btn5.png",
      "eventid": '28'
    },
    on: {
      "click": _vm.set
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 6,
      "src": "../../../static/img/btn6.png",
      "eventid": '29'
    },
    on: {
      "click": _vm.set
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 7,
      "src": "../../../static/img/btn7.png",
      "eventid": '30'
    },
    on: {
      "click": _vm.set
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 8,
      "src": "../../../static/img/btn8.png",
      "eventid": '31'
    },
    on: {
      "click": _vm.set
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn",
    attrs: {
      "data-index": 9,
      "src": "../../../static/img/btn9.png",
      "eventid": '32'
    },
    on: {
      "click": _vm.set
    }
  })]), _vm._v(" "), _c('img', {
    staticClass: "board",
    attrs: {
      "src": "../../../static/img/board_9.png",
      "mode": "widthFix"
    }
  })]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0bdbf1d3", esExports)
  }
}

/***/ })

},[142]);
//# sourceMappingURL=main.js.map