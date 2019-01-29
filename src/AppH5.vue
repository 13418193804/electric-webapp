<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'App',
    created(){
      this.$store.commit('SETOS', 'chroms')
    }


}
</script>

<style lang="less">
@import '../static/css/common.less';
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
    height: 100%;
    width: auto;
    // margin: 0;
    // background: #25487e;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%!important;
    text-size-adjust: 100%!important;
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}

/******reset********/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
 caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  // color: #fff;
}
body{
  font-family:Arial,"STHeiti", Helvetica, sans-serif;
  font-size:14px;
  color:#444!important;
  width:100%;
  overflow-x: hidden;
  -webkit-overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}


table{
  border-collapse:collapse;
  border-spacing:0
}
fieldset, img{
  border:0
}
legend{
  display:none
}
// address, caption, cite, code, dfn, em, strong, th, var{
//   font-style:normal;
//   font-weight:normal
// }
ol, ul{
  list-style:none
}
caption, th{
  text-align:left
}
h1, h2, h3, h4, h5, h6{
  font-size:100%;
  font-weight:normal
}
q:before, q:after{
  content:''
}
abbr, acronym{
  border:0
}
a{
     text-decoration:none;
}
html{-webkit-text-size-adjust:none;width:100%;height:100% } /*????iphone??safari????????????*/
input[type="text"], input[type="button"], input[type="submit"], input[type="search"]{
                
  -webkit-appearance:none;
  border-radius:0;
  outline: none;
  color: #fff;
}

html, body {
    height: 100%;
    width: auto;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%!important;
    text-size-adjust: 100%!important;
}
.bg{
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

.wrap{
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 219/7.5vw;
  left: 35/7.5vw;
}
.item{
  width: 68/7.5vw;
  height: 68/7.5vw;
  margin:0 5/7.5vw 2/7.5vw 0;
  z-index: 10;
  box-sizing: border-box;
  position: relative;
}
.item img{
  width: 100%;
  height: 100%;
}
.item .lighted{
  position: absolute;
  width: 72/7.5vw;
  height: 72/7.5vw;
  top: -3/7.5vw;
  left: -1/7.5vw;
  z-index: 11;
}
.item.active{
  position: relative;
}

.column3{
  margin-right: 23/7.5vw;
}
.column6{
  margin-right: 23/7.5vw;
}
.mb{
  margin-bottom: 26/7.5vw;
}
.top{
  display: flex;
  flex-direction: row;
  position: absolute;
  top:36/7.5vw;
  width: 100%;
  height: 70/7.5vw;
}
.top img{
  position: absolute;
  z-index: 2;
}
.back{
  width:69/7.5vw;
  height: 71/7.5vw;
  left: 26/7.5vw;
}
.undo,.restart{
  width: 207/7.5vw;
  height:63/7.5vw;
  top: 5/7.5vw;
}
.undo{
  left: 116/7.5vw;
}
.restart{
  left: 116/7.5vw;
}
.top .base{
  width: 420/7.5vw;
  height: 70/7.5vw;
  z-index: 1;
  left:112/7.5vw;
}
.logo{
  width: 151/7.5vw;
  height: 45/7.5vw;
  right:38/7.5vw;
  top: 14/7.5vw;
}
.btnwrap{
  display: flex;
  flex-direction: row;
  margin-left: 12/7.5vw;
  position: absolute;
  bottom:129/7.5vw;
  width: 105/7.5vw;
  height:105/7.5vw;
}

.btnwrap  img.btn{
  width: 105/7.5vw;
  height:105/7.5vw;
  position: absolute;
  top: 0;
}
// denglei
/* flex */
.flex{
  display: -webkit-flex; /* Safari */
  display: flex;
}
/* header */
header{
  line-height: 100*@rpx;background: #000;color: #fff;position: relative;text-align:center;
  .back{
    position: absolute;left: 5%;top: 10px;
  }
}
/* tabs */
.taskTabs{
    display: flex;
    position: fixed;
    right: 0;
    top:82px*@rpx;
    // width: 100%;
    left: 0;
    height: 100%;
    background: #fff;
    height: 80px*@rpx;line-height: 80px*@rpx;z-index: 999;
    padding: 0 5%;
    li{
        flex: 1;text-align: center;
        // border-right:1px solid #eee;
        border-bottom:1px solid #eee;
    }
    .titilebCur{
         color: #4699ff;border-bottom: 2px solid #4699ff;
        //  background: #4699ff;
    }
}
/* foot */
.footNav{
  position: fixed;bottom: 0;width: 100%;left: 0;line-height: 90*@rpx;
  div{
    width: 50%;font-size: 34*@rpx;text-align: center;line-height: 90*@rpx;background: #409EFF;height: 90*@rpx;color: #fff;
    background: linear-gradient(#6DB2F9,#409EFF);
  }
  .footCur{
    background: linear-gradient(#409EFF,#6DB2F9)
  }
}
// icon 
.icon-xianshi_jinggao{
  color: #409EFF;margin-right: 3px;
}
.icon-yigouxuan{
  font-size: 14px!important;
}
.icon-weigouxuan{
  margin-right: 3px;
}
.icon-saoyisao{
  font-size: 28px!important;color: #777;
}
.icon-danxuan-weixuan{
  color: #409EFF;
}
// 第三方ui
.md-scroll-view-refresh{
  padding: 50*@rpx 0;
}
.md-scroll-view-refresh .refresh-tip{
  margin-left: 15*@rpx;
    font-size: 24*@rpx;
}
.md-scroll-view{
    height: -webkit-fill-available;
}
.md-switch{
  width: 40px;height: 22px;border-radius: 22px;
}
.md-switch:before{
  width: 40px;height: 22px;border-radius: 22px;
}
.md-switch:after{
  top: 2px;left: 2px;width: 20px;height: 18px;
}
.active:after{
  left: -12px;
}
.md-switch.active{
  background-color: #4699ff;
}
.md-input-item,.md-input-item .md-input-item-control{
  min-height: 30px;
}
.md-input-item .md-input-item-control .md-input-item-fake, .md-input-item .md-input-item-control .md-input-item-input{
  height: 30px;font-size: 14px;
}
</style>
