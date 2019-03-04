<template>
  <div class="equipment">
    <cheader :title="scanStatus == 'opening'?'扫描二维码':'我的设备'" @leftClick="leftClick"></cheader>
    <div class="background-bcid" @click.stop="()=>{return}">
      <div id="bcid" ></div>
    </div>
     <!-- flex  flex-align-center flex-pack-center -->
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

    <div v-for="(tab,index) in tabs" v-if="active == index " :key="index" v-show="scanStatus !== 'opening'">
      <!-- mainStyle="top: 250px;"
      :pullDownRefreshObj="{ threshold: 90, stop: 40 }" -->
      <better-scroll ref="betterScroll" @onPullingUp="onPullingUp"  >
        <template slot="list-content">
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
        </template>
      </better-scroll>
    </div>
   </div>
</template>

<script>
import cheader from "../../components/header";
import { ScrollView, ScrollViewMore } from "mand-mobile";
import { startRecognize } from "./barcode";
import betterScroll from "../../components/better-scroll";

export default {
  name: "HelloWorld",
  components: {
    [ScrollView.name]: ScrollView,
    [ScrollViewMore.name]: ScrollViewMore,
    betterScroll,
    cheader
  },
  data() {
    return {
      pagesize: 10,
      pageindex: 1,
      active: null,
      tabs: [
        { titile: "设备列表" },
        { titile: "在线设备" },
        { titile: "离线设备" }
      ],
      eqData: [], // 设备列表 [所有,在线,离线 ]
      list: 10,
      isFinished: true,
      keyword: "",
      onlineActiveList: [null, 1, 0],
      scan: null, //扫码实例对象
      scanStatus: "init", //扫码窗口状态
      routerFinish: [
        { status: "init", remark: "初始化,从未打开扫码窗" },
        { status: "opening", remark: "打开了扫码窗，未关闭" },
        { status: "opened", remark: "已经关闭了扫码窗,仍然不可返回" },
        { status: "finished", remark: "已经关闭了扫码窗,已经可以调用router" }
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
    onPullingUp() {
      if (!this.isFinished) {
        return;
      }
      // async data
      setTimeout(() => {
        this.pageindex += 1;
        this.getDataList(this.active);
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
    forceUpdate(status) {
      //  isFinished   判断当前是否可以继续加载
      //  然后设置子组件可否加载的状态
      this.isFinished = status;
      this.$refs.betterScroll[0].forceUpdate(status);
    },
    handelClick(index) {
      if (this.active === index) {
        return;
      }
      this.pageindex = 1;
      this.forceUpdate(true);
      this.getDataList(index);
    },
    doSearch() {
      if((this.keyword||'') === ''){
        return
      }
      // 重置页数
      // 重置list
      this.pageindex = 1;
      this.eqData[this.active] = [];
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
      this.$toast.loading('加载中...');
      let list = this.eqData[active] || [];
      this.eqData[active] = [];
      let data = {
        token: this.$store.getters.getToken,
        keyword: this.keyword,
        pagesize: this.pagesize,
        pageindex: this.pageindex
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
           this.$toast.hide()
          if (res.returnStatus) {
            if (res.data.data.length !== this.pagesize) {
              this.forceUpdate(false);
            }
            res.data.data.forEach(item => {
              list.push(item);
            });
            this.eqData[active] = list;
            this.active = active;
            this.eqData.push();
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
          if (this.$refs.scrollView) {
            // 停止刷新
            this.$refs.scrollView[0].finishLoadMore();
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
      padding: 8px;
      border-radius: 8px;
      .md-input-item .md-input-item-control .md-input-item-fake,
      .md-input-item .md-input-item-control .md-input-item-input {
        border: 1px solid #eee;
        border-radius: 5px;
        height: 35px;
      }

      &-icon {
        margin-top: -2.5px;
        position: absolute;
        right: 0;
        width: 30px;
        height: 30px;
        top: 6px;
        line-height: 35px;
      }
      &-code {
        padding: 0 20px;
      }
    }
  }
  &-list {
    width: 100%;
    padding: 0 5%;
    margin-top: 40px;
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
  // position: fixed;
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
  width: 100%;
  height: 100vh;
}
#bcid {
  margin-top: 20px;
  // background: #0f0;
  z-index: 999;
  height: 260px;
  // width: -webkit-fill-available;
  width: 160px;
}
</style>
