<template>
  <div id="app">


    <router-view></router-view>
      
<div class=" flex flex-pack-center  backMessage" v-if="backMessageModel">
  <div class="">再按一次退出ONV智能运维</div>
</div>

<!-- <div class=" flex flex-pack-center  backMessage" style="bottom:50%;" onClick="plusReady()">
  <div>按钮</div>
</div> -->

  </div>

   
</template>

<script>
export default {
  name: "App",
  data() {
    // 选项 数据
    return {
      historyClickTime: null,
      backMessageModel: false
    };
  },
  methods: {},
  created() {
    window.myvue = this;
    window.titleHeaderDoback = null;
    this.historyClickTime = null;
    this.backMessageModel = false;
    this.$store.commit("SETOS", "chroms");
  }
};
</script>

<style lang="less">
@import "../static/css/common.less";
.flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.flex-v {
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.flex-1 {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.flex-align-center {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.flex-align-flex-end {
  -webkit-box-align: flex-end;
  -webkit-align-items: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;
}
.flex-pack-center {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.flex-flex-start-center {
  -webkit-box-pack: flex-start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
}
.flex-pack-justify {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.flex-around-justify {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-around;
  -ms-flex-pack: justify;
  justify-content: space-around;
}
.flex-end-justify {
  -webkit-box-pack: flex-end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: flex-end;
  justify-content: flex-end;
}
.flex-warp-justify {
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  -o-flex-wrap: wrap;
}
.flex-nowrap-justify {
  -webkit-flex-wrap: nowrap;
  -moz-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  -o-flex-wrap: nowrap;
}
//// "out": true
body {
  width: auto;
  // margin: 0;
  // background: #25487e;
  overflow-x: hidden;
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
  margin: 0;
  box-sizing: border-box;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
// * {
//   transition: width 2s;
//   -moz-transition: width 2s;
//   -webkit-transition: width 2s;
//   -o-transition: width 2s;
// }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
/******reset********/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
a,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  font-size: 14px;
  // color: #fff;
}
body {
  font-family: Arial, "STHeiti", Helvetica, sans-serif;
  font-size: 14px;
  color: #444 !important;
  width: 100%;
  overflow-x: hidden;
  -webkit-overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
fieldset,
img {
  border: 0;
}
legend {
  display: none;
}
// address, caption, cite, code, dfn, em, strong, th, var{
//   font-style:normal;
//   font-weight:normal
// }
ol,
ul {
  list-style: none;
}
caption,
th {
  text-align: left;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
q:before,
q:after {
  content: "";
}
abbr,
acronym {
  border: 0;
}
a {
  text-decoration: none;
}
html {
  -webkit-text-size-adjust: none;
  width: 100%;
  // height: 100%;
} /*????iphone??safari????????????*/
input[type="text"],
input[type="button"],
input[type="submit"],
input[type="search"] {
  -webkit-appearance: none;
  border-radius: 0;
  outline: none;
  color: #fff;
}

html,
body {
  // height: 100%;
  width: auto;
  overflow-x: hidden;
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
}
.bg {
  width: 100%;
  height: 100%;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200/7.5vw 10/7.5vw;
  box-sizing: border-box;
  width: 100%;
}

.wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 219/7.5vw;
  left: 35/7.5vw;
}
.item {
  width: 68/7.5vw;
  height: 68/7.5vw;
  margin: 0 5/7.5vw 2/7.5vw 0;
  z-index: 10;
  box-sizing: border-box;
  position: relative;
}
.item img {
  width: 100%;
  height: 100%;
}
.item .lighted {
  position: absolute;
  width: 72/7.5vw;
  height: 72/7.5vw;
  top: -3/7.5vw;
  left: -1/7.5vw;
  z-index: 11;
}
.item.active {
  position: relative;
}

.column3 {
  margin-right: 23/7.5vw;
}
.column6 {
  margin-right: 23/7.5vw;
}
.mb {
  margin-bottom: 26/7.5vw;
}
.top {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 36/7.5vw;
  width: 100%;
  height: 70/7.5vw;
}
.top img {
  position: absolute;
  z-index: 2;
}
.back {
  width: 69/7.5vw;
  height: 71/7.5vw;
  left: 26/7.5vw;
}
.undo,
.restart {
  width: 207/7.5vw;
  height: 63/7.5vw;
  top: 5/7.5vw;
}
.undo {
  left: 116/7.5vw;
}
.restart {
  left: 116/7.5vw;
}
.top .base {
  width: 420/7.5vw;
  height: 70/7.5vw;
  z-index: 1;
  left: 112/7.5vw;
}
.logo {
  width: 151/7.5vw;
  height: 45/7.5vw;
  right: 38/7.5vw;
  top: 14/7.5vw;
}
.btnwrap {
  display: flex;
  flex-direction: row;
  margin-left: 12/7.5vw;
  position: absolute;
  bottom: 129/7.5vw;
  width: 105/7.5vw;
  height: 105/7.5vw;
}
.btnwrap img.btn {
  width: 105/7.5vw;
  height: 105/7.5vw;
  position: absolute;
  top: 0;
}
// denglei
/* flex */
.flex {
  display: -webkit-flex; /* Safari */
  display: flex;
}
/* header */
header {
  line-height: 100 * @rpx;
  background: #000;
  color: #fff;
  position: relative;
  text-align: center;
  .back {
    position: absolute;
    left: 5%;
    top: 10px;
  }
}
/* tabs */
.taskTabs {
  display: flex;
  position: fixed;
  right: 0;
  top: 82px * @rpx;
  // width: 100%;
  left: 0;
  height: 100%;
  background: #fff;
  height: 80px * @rpx;
  line-height: 80px * @rpx;
  z-index: 999;
  padding: 0 5%;
  li {
    flex: 1;
    text-align: center;
    // border-right:1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .titilebCur {
    color: #4699ff;
    border-bottom: 2px solid #4699ff;
    //  background: #4699ff;
  }
}
/* foot */
.footNav {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  line-height: 90 * @rpx;
  div {
    width: 50%;
    font-size: 34 * @rpx;
    text-align: center;
    line-height: 90 * @rpx;
    background: #409eff;
    height: 90 * @rpx;
    color: #fff;
    background: linear-gradient(#6db2f9, #409eff);
  }
  .footCur {
    background: linear-gradient(#409eff, #6db2f9);
  }
}
// icon
.icon-xianshi_jinggao {
  color: #409eff;
  margin-right: 3px;
}
.icon-yigouxuan {
  font-size: 14px !important;
}
.icon-yigouxuan,
.icon-weigouxuan {
  font-size: 14px !important;
}
.icon-weigouxuan {
  margin-right: 3px;
}
.icon-saoyisao {
  font-size: 30px !important;
  color: #777;
}
.icon-danxuan-weixuan {
  font-size: 24px !important;
  color: #409eff;
}
.icon-danxuanxuanzhong {
  font-size: 24px !important;
  color: #409eff;
}
.icon-guanbi {
  font-size: 24px !important;
  color: #999;
}
.icon-sousuo {
  font-size: 24px !important;
}
.icon-zanwushuju {
  font-size: 54px !important;
  color: #999;
}
.icon-iconfontdian11{
  font-size: 24px !important;color: red;
}
.icon-iconfontdian1{
  font-size: 24px !important;color: #1afa29;
}
.noneData{
  text-align: center;margin-top: 100px;
  p{
    margin-top:10px;color: #999;
  }
}
.tag {
  font-size: 20px * @rpx;
  border: 1px solid #4699ff;
  border-radius: 10 * @rpx;
  padding: 4 * @rpx 20 * @rpx;
  display: inline-block;
}
.icon-shangchuantupian {
  font-size: 50px !important;
}
.icon {
  margin-right: 5px;
}
.icon img {
  width: 22px;
  height: 16px;
  vertical-align: middle;
}
.icon .A {
  width: 18px;
  height: 18px;
}
.dots {
  background: url(./assets/dots.png) no-repeat left center;
  background-size: 7px 7px;
  padding-left: 12px;
}
// 第三方ui
.scroll-loading {
  width: 40 * @rpx!important;
  height: 40 * @rpx!important;
}
.md-scroll-view-refresh {
  padding: 50 * @rpx 0;
}
.md-scroll-view-refresh .refresh-tip {
  margin-left: 15 * @rpx;
  font-size: 24 * @rpx;
}
.md-scroll-view {
  height: -webkit-fill-available;
}
.md-switch {
  width: 40px;
  height: 22px;
  border-radius: 22px;
}
.md-switch:before {
  width: 40px;
  height: 22px;
  border-radius: 22px;
}
.md-switch:after {
  top: 2px;
  left: 2px;
  width: 20px;
  height: 18px;
}
.active:after {
  left: -12px;
}
.md-switch.active {
  background-color: #4699ff;
}
.md-input-item,
.md-input-item .md-input-item-control {
  min-height: 30px;
}
.md-field-item {
  width: 100% !important;
}
.md-field-item-content:before {
  background-color: #fff !important;
}
.md-input-item .md-input-item-control .md-input-item-fake,
.md-input-item .md-input-item-control .md-input-item-input {
  height: 30px;
  font-size: 14px;
}
.backMessage {
  z-index: 999;
  position: fixed;
  bottom: 15%;
  width: 100%;
  div {
    margin: 0 auto;
    height: 30px;
    line-height: 20px;
    border-radius: 15px;
    padding: 5px 10px;
    background: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    color: #fff;
  }
}
.md-input-item-input {
  height: 50 * @rpx;
}
// 弹窗
.md-dialog .md-dialog-content {
  border-radius: 5px;
  width: 200px;
}
.md-dialog .md-dialog-body {
  padding: 25px 15px 20px;
}
.md-dialog .md-dialog-actions a {
  font-size: 16px;
}
.md-dialog .md-dialog-actions a {
  height: 40px !important;
}
// footer 按钮
.footBtb{
  position: fixed;bottom: 0;left: 0;width: 100%;background: #409EFF;color: #fff;text-align: center;line-height: 100*@rpx;
}
// 下拉框
.selectBox {
  position: relative;
  width: 100%;
  padding-left: 10px;
  height: 100% !important;
  background: url("data:image/png;base64,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")
    no-repeat left center;
  background-size: 100% 100%;
  margin-left: 10px;
  select {
    height: 50 * @rpx;
    font-size: 22 * @rpx;
    outline: none;
    width: 80%;
    background: #fff;
    padding-left: 10 * @rpx;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 17px;
  }
  select option {
    font-size: 22 * @rpx;
  }
}

.details {
  width: 100%;
  height: 100%;
  &-declare {
    width: 90%;
    margin: 45 * @rpx auto 0 * @rpx;
    &-list {
      flex-wrap: wrap;
      background: #eeeeef;
      padding: 0 5px;
      position: relative;
      font-size: 24 * @rpx;
      border-bottom: 1px solid #fff;
      .left {
        width: 160 * @rpx;
        text-align: right;
        line-height: 30px;
      }
      .right {
        width: 430 * @rpx;
        line-height: 30px;
      }
      &-swich {
        position: absolute;
        right: 3px;
        top: 4px;
        button {
          background: #2680f0;
          color: #fff;
          border: none;
          border-radius: 5px;
          width: 100 * @rpx;
          height: 50 * @rpx;
          font-size: 24 * @rpx;
        }
      }
    }
    .auto {
      .left {
        width: 230 * @rpx!important;
        margin-right: 10 * @rpx;
      }
      .right {
        width: 380 * @rpx!important;
      }
    }
  }
  &-map {
    width: 90%;
    margin: 60 * @rpx auto 0 * @rpx;
  }
}

// 按钮
.footer-btn {
  text-align: center;
}
.btn {
  width: 160 * @rpx;
  font-size: 24 * @rpx;
  height: 60 * @rpx;
  border-radius: 6 * @rpx;
  color: #fff;
  margin-right: 20 * @rpx;
}
.btn-white {
  background: #fff;
  border: 1px solid #409eff;
  color: #409eff;
}
.btn-blue {
  background: #409eff;
  border: 1px solid #409eff;
}
.md-landscape .md-icon.md-landscape-close {
  display: none;
}
.md-dialog .md-popup {
  z-index: 2000;
}

//把每个页面的全局做好管理import进来
</style>
