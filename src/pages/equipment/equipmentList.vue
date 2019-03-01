<template>
  <div class="equipment">

    <cheader :title="scanStatus == 'opening'?'扫描二维码':'我的设备'" @leftClick="leftClick"></cheader>

      <div class="background-bcid" @click.stop="()=>{return}">
        <!-- <md-button type="warning" size="small"  @click='initScan()' inline>创建扫码控件</md-button>
        <md-button type="warning" size="small"  @click='cancelScan()' inline>取消扫码</md-button>
        <md-button type="warning" size="small" @click='setFlash()' inline>开启闪光灯</md-button> -->
          <div id="bcid" ></div>
      </div>

    <!-- 设备列表 -->
<!--     
    <div class="equipment-list" v-if="active == 0" >
        <div class="equipment-list-box" v-for="(item,index) in eqData" :key="index" @click="getDetails(item,index)">
            <div class="flex flex-pack-justify">
                <div class="equipment-list-bold">设备名称：{{item.device_name}}</div>
                <div>设备编号：{{item.device_sn}}</div>
            </div>
            <div>最后一次维护时间：{{item.last_maintenance_time}}</div>
            <div>维护次数：{{item.maintenance_count}}</div>
            <div>位置：{{item.location}}</div>
            <div>坐标：{{item.latitude+' '+item.longitude}}</div>
            <div>扫码</div>
        </div>
        
    </div>
    <div class="material" v-if="active == 1">
       邓员峰
    </div>
    <div class="material" v-if="active == 2">
        潘兰华
    </div> -->
      <div class="equipment-while" v-show="scanStatus !== 'opening'">
                  <!-- 扫一扫 -->
          <div class="flex flex-pack-center equipment-top ">
              <div class="equipment-top-search flex flex-align-center ">
                  <md-input-item ref="input0" v-model="keyword" type="textarea" :maxlength="200" ></md-input-item>
                  <div class="equipment-top-search-icon flex flex-align-center"  @click="doSearch"><i class="iconfont icon-sousuo"></i></div>
              </div>
              <div class="flex  flex-align-center equipment-top-search-code" @click="initScan()">
                  <i class="iconfont icon-saoyisao"></i>
              </div>
          </div>
          <ul class="flex taskTabs bottom-search" >
            <li v-for="(item,index) in tabs" :key="index" :class="{titilebCur:index == active}" @click="handelClick(index)">{{item.titile}}</li>
          </ul>
      </div>

      <div v-for="(tab,index) in tabs" v-if="active == index " v-show="scanStatus !== 'opening'">
      <div class="md-example-child md-example-child-scroll-view md-example-child-scroll-view-3" v-show="scanStatus !== 'opening'">
        <md-scroll-view ref="scrollView" :scrolling-x="false" @endReached="$_onEndReached">
          <div style="height:240px;width:100%;"></div>
          <!-- 这组件一定要数据出来后再显示  否则卡顿  -->
          <div class="scroll-view-list equipment-list">
          <div class="  equipment-list-box" v-for="(item,index) in eqData[active]" :key="index" @click="getDetails(item.device_id)">
                  <div class="flex flex-pack-justify">
                      <div class="equipment-list-box-bold">设备名称：{{item.device_name}}</div>
                      <div>设备编号：{{item.device_sn}}</div>
                  </div>
                  <div>最后一次维护时间：{{item.last_maintenance_time}}</div>
                  <div>维护次数：{{item.maintenance_count}}</div>
                  <div>位置：{{item.location}}</div>
                  <div>坐标：{{item.latitude+' '+item.longitude}}</div>
                  <div>扫码</div>
            </div>
          </div>

        <!-- <div
              v-for="i in list"
              :key="i"
              class="scroll-view-list"
            >
              <p class="scroll-view-item">{{i}}</p>
            </div> -->

            <md-scroll-view-more slot="more" :is-finished="isFinished">
            </md-scroll-view-more>
          </md-scroll-view>
        </div>
      </div>


  </div>


</template>

<script>
import cheader from "../../components/header";
import { ScrollView, ScrollViewMore } from "mand-mobile";
import { startRecognize } from "./barcode";

export default {
  name: "HelloWorld",
  components: {
    [ScrollView.name]: ScrollView,
    [ScrollViewMore.name]: ScrollViewMore,
    cheader
  },
  data() {
    return {
      active: null,
      tabs: [
        { titile: "设备列表" },
        { titile: "在线设备" },
        { titile: "离线设备" }
      ],
      eqData: [], // 设备列表
      list: 10,
      isFinished: false,
      keyword: "",
      onlineActiveList: [null, 1, 0],
      scan: null,
      scanStatus: "init",
      routerFinish: [
        {
          status: "init",
          remark: "初始化,从未打开扫码窗"
        },
        {
          status: "opening",
          remark: "打开了扫码窗，未关闭"
        },
        {
          status: "opened",
          remark: "已经关闭了扫码窗,仍然不可返回"
        },
        {
          status: "finished",
          remark: "已经关闭了扫码窗,已经可以调用router"
        }
      ]
    };
  },

  mounted() {
    // let width =window.innerWidth
    // let height =window.innerHeight
    // document.getElementById("bcid").style.width = (width /2.3) + "px";
    // document.getElementById("bcid").style.height =height + "px";

    this.getDataList(0);
    // this.initScan();
  },
  methods: {
    $_onEndReached() {
      if (this.isFinished) {
        return;
      }
      // async data
      setTimeout(() => {
        this.eqData.forEach((item, index) => {
          if (index < 5) {
            this.eqData.push(item);
          }
        });
        if (this.eqData.length >= 20) {
          this.isFinished = true;
        }
        // 停止刷新
        this.$refs.scrollView[0].finishLoadMore();
      }, 1000);
    },
    leftClick() {
      if (this.scanStatus == "opening") {
        this.cancelScan();
        this.scanStatus = "opened";
        return;
      }

      if (this.scanStatus == "opened") {
        this.scanStatus = "finished";
        return;
      }

      if (this.scanStatus == "init" || this.scanStatus == "finished") {
        this.$router.push("/");
      }
    },
    handelClick(index) {
      //   this.active = index;1
      this.getDataList(index);
    },
    doSearch() {
      this.getDataList(this.active);
    },

    /**
     * 扫码
     */
    initScan() {
      this.scanStatus = "opening";
      startRecognize("bcid", scan => {
        this.scan = scan;
      });
    },
    cancelScan() {
      this.scan.close();
    },
    setFlash() {
      this.scan.setFlash();
    },

    /* api */
    getDataList(active) {
      this.eqData[active] = [];
      let data = {
        token: this.$store.getters.getToken,
        keyword: this.keyword
      };
      if (this.onlineActiveList[active] != null) {
        Object.assign(data, {
          online: this.onlineActiveList[active]
        });
      }
      this.service
        .httpRequest({
          url: "/aapi/device",
          methods: "get",
          data: data
        })
        .then(res => {
          if (res.returnStatus) {
            this.eqData[active] = res.data.data;
            this.active = active;
            this.eqData.push();
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    },
    getDetails(device_id) {
      this.$router.push({
        name: "equipmentDetails",
        query: {
          deviceId: device_id
        }
      });
    }
  }
};
</script>

<style lang="less">
@import "../../../static/css/common.less";
// 设备
.equipment {
  &-while {
    width: 100%;
    position: fixed;
    z-index: 999;
    background: #fff;

    background-color: #fff;
  }
  &-top {
    margin-top: 42px * @rpx;
    height: 80 * @rpx;
    width: 100%;

    &-search {
      width: 75%;
      position: relative;
      border: 1px solid #e5e5e5;
      padding: 5px;

      .md-input-item .md-input-item-control .md-input-item-fake,
      .md-input-item .md-input-item-control .md-input-item-input {
        border: 1px solid #eee;
        border-radius: 5px;
        height: 35px;
      }

      &-icon {
        position: absolute;
        right: 0;
        width: 30px;
        height: 30px;
        top: 0;
        line-height: 35px;
      }
      &-code {
        padding: 0 20px;
      }
    }
  }
  &-list {
    height: 100%;
    width: 100%;
    padding: 0 5%;
    margin-top: 50px;
    &-box {
      text-align: left;
      border-bottom: 1px solid #4699ff;
      padding-bottom: 10px;
      padding-left: 10px;
      padding-right: 10px;
      margin-bottom: 10px;
      &-bold {
        font-weight: bold;
      }
      div {
        color: #999;
      }
    }
    &-box:last-child {
      border: none;
    }
  }
}
.bottom-search {
  // top:110px;
  position: static;
}
.md-example-child-scroll-view-3 {
  height: -webkit-fill-available;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  .scroll-view-item {
    padding: 30px 0;
    text-align: center;
    font-size: 32px;
    // font-family: DINAlternate-Bold;
    border-bottom: 0.5px solid #efefef;
  }
}
.background-bcid {
  position: fixed;
  top: 0;
  left: 0;
  // background: #fff;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
}
#bcid {
  margin-top: 20px;
  // background: #0f0;
  z-index: 999;
  height: 260px;
  width: 160px;
}
</style>
