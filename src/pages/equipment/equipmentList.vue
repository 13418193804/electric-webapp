<template>
  <div class="equipment">
    <cheader title="我的设备" @leftClick="leftClick"></cheader>





    <ul class="flex taskTabs" >
      <li v-for="(item,index) in tabs" :key="index" :class="{titilebCur:index == active}" @click="handelClick(index)">{{item.titile}}</li>
    </ul>


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




<div v-for="(tab,index) in tabs" v-if="active == index ">
    
 <div class="md-example-child md-example-child-scroll-view md-example-child-scroll-view-3">
 <md-scroll-view
      ref="scrollView"
      :scrolling-x="false"
      @endReached="$_onEndReached"
    >
<div style="height:180px"></div>

    <!-- 这组件一定要数据出来后再显示  否则卡顿  -->
    <div class="scroll-view-list equipment-list">


            <!-- 扫一扫 -->
    <div class="flex equipment-top">
        <div class="equipment-top-search flex flex-align-center">
            <md-input-item
            ref="input0"
            type="textarea"
            :maxlength="200"
            ></md-input-item>
            <div class="equipment-top-search-icon"><i class="iconfont icon-sousuo"></i></div>
        </div>
        <div>
            <i class="iconfont icon-saoyisao"></i>
        </div>
    </div>
    
     <div class="  equipment-list-box" v-for="(item,index) in eqData" :key="index" @click="getDetails(item,index)">
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

      <md-scroll-view-more
        slot="more"
        :is-finished="isFinished"
      >
      </md-scroll-view-more>
    </md-scroll-view>

</div>

</div>


  </div>




</template>

<script>
import cheader from "../../components/header";
import { ScrollView, ScrollViewMore } from "mand-mobile";

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




    };
  },



  mounted() {
    this.getDataList();
  },
  methods: {
    $_onEndReached() {
      if (this.isFinished) {
        return;
      }
      // async data
      setTimeout(() => {
        this.eqData.forEach((item,index)=>{
                if(index<5){
            this.eqData.push(item)
                }
        })
        if (this.eqData.length >= 20) {
          this.isFinished = true;
        }
        // 停止刷新
        this.$refs.scrollView[0].finishLoadMore();
      }, 1000);
    },
    leftClick() {
      this.$router.push("/");
    },
    handelClick(index) {
      this.active = index;
      if (this.active === 0) {
      }
      if (this.active === 1) {
      }
      if (this.active === 2) {
      }
    },
    /* api */
    getDataList() {
      this.service
        .httpRequest({
          url: "/aapi/device",
          methods: "get",
          data: { token: this.$store.getters.getToken }
        })
        .then(res => {
          if (res.returnStatus) {
            this.eqData = res.data.data;
                this.active = 0

            console.log("设备列表", res.data);
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    },
    getDetails(item, index) {
      this.$router.push({
        name: "equipmentDetails",
        query: {
          deviceId: item.device_id
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
  &-top {
    width: 90%;
    margin-top: 82px * @rpx;
    height: 80 * @rpx;
    justify-content: space-between;
    &-search {
      width: 75%;
      position: relative;
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
    }
  }
  &-list {
    height: 100%;
    width: 100%;
    padding: 0 5%;
    margin-top: 50px;
    &-box {
      border-bottom: 1px solid #4699ff;
      padding-bottom: 10px;
      margin-bottom: 10px;
//   padding: 30px 0;
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
</style>
