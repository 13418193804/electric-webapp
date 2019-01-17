<template>
    <div class="amap-page-container">
    <div class="amap-wrapper">
      <!-- <el-amap class="amap-box" vid="map" 
        :zoom="zoom"
        :center="center">

  <el-amap-ground-image v-for="groundimage in groundimages" :url="groundimage.url" :bounds="groundimage.bounds" :events="groundimage.events"></el-amap-ground-image>

      </el-amap> -->
      123
    </div>

    </div>
  </template>

  <style>
    .amap-demo {
      height: 300px;
    }
  </style>

  <script>
  // import VueAMap from "vue-amap";

  // import { AMapManager } from 'vue-amap';
    // NPM 方式
    // import { AMapManager } from 'vue-amap';
    // CDN 方式
    module.exports = {
      data: function() {
        return {
          // amapManager,
      //         zoom:12,
      // center:[113.928902,22.520294],
      //    groundimages: [
      //       {
      //         url: require('./dx.png'),
      //         bounds: [[113.928902,22.520294], [113.928902,22.520294]],
      //         events: {
      //           click() {
      //             alert('click groundimage');
      //           }
      //         }
      //       }
      //     ]


        };
      },
      mounted(){
        // console.log(AMapManager)
      },
      methods: {
  
      },
     components: {
    // 定义组件
    // AMapManager
  },
    };
</script>
 <style lang="less" scoped>
@import "../../../static/css/common.less";

.amap-box{
  width:700*@rpx;
  height: 700*@rpx
}




</style>

