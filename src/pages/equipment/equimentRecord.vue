<template>
  <div class="details">
    <cheader title="维修记录" @leftClick="leftClick"></cheader>
    <div class="details-declare">
        <div class="flex details-declare-list">
            <div class="div">设备名称：<span>{{recordData.device_name}}</span></div>
            <div class="div">设备编号：<span>{{recordData.device_sn}}</span></div>
        </div>
        <div class="details-declare-list">
            <div class="div div1">位置：<span>{{recordData.location}}</span></div>
        </div>
        <div class="details-declare-list">
            <div class="div div1">坐标：<span>{{recordData.longitude||'' }} {{recordData.latitude||''}}</span></div>
        </div>
    </div>
    <!--  -->
    <div class="details-content">
      <div class="details-content-box" v-if="recordList.length>0">
        <div class="details-content-box-text">处理时间 <span>{{recordList[0].update_time||''}}</span></div>
        <div class="details-content-box-text">问题原因 <span>{{recordList[0].fault}}</span></div>
        <div class="details-content-box-text">维护人 <span>周猩猩</span></div>
        <div class="details-content-box-text">备注 <span>{{recordList[0].desp}}</span></div>
        <div>
          <ul class="flex clearfix">
            <template v-if="recordList[0].imgs.length>0" v-for="(item, index) in recordList[0].imgs">
              <li class="picBox" @click="showViewer(index, $event)" :key="index">
                  <div class="img" :style="`background: url(${baseurl+item}) center no-repeat;background-size:cover;`"></div>
              </li>
            </template>
          </ul>
        </div>
         <md-image-viewer
        v-model="isViewerShow"
        :list="urlimgs"
        :has-dots="true"
        :initial-index="viewerIndex">
      </md-image-viewer>
      </div>
    </div>
    <!--  -->
    <div class="details-record">
      <h2>维护记录</h2>
      <ul>
        <li v-for="(item,index) in recordList" :key="index">
          <div><i class="dots"></i> {{item.update_time}}</div>
          <div>报警：<span>{{item.fault}}</span> </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import cheader from "../../components/header";
import { setBaseUrl, getBaseUrl } from "../../api/conf";
import { ImageViewer } from "mand-mobile";

export default {
  data() {
    // 选项 数据
    return {
      isActive: "",
      active: 0,
      isCheack: 0,
      checkData: [{ name: "线路故障" }, { name: "元气损坏" }, { name: "其他" }],
      typeData: [{ name: "A1" }, { name: "A2" }],
      baseurl: "", // url
      recordData: [], //设备信息
      recordList: [], //维修列表
      baseurl: "", // url
      isViewerShow: false,
      viewerIndex: 0,
      urlimgs: []
    };
  },
  components: {
    // 定义组件
    cheader,
    [ImageViewer.name]: ImageViewer
  },
  created() {
    // 生命周期函数
  },
  mounted() {
    this.getDataList();
    console.log("weixiu");
    this.baseurl = getBaseUrl();
  },
  methods: {
    // 事件处理方法
    leftClick() {
      this.$router.go(-1);
    },
    showViewer(index) {
      this.viewerIndex = index;
      this.isViewerShow = true;
    },
    /* api */
    getDataList() {
      let deviceId = this.$route.query.deviceId;
      this.service
        .httpRequest({
          url: "/aapi/devicerecord",
          methods: "get",
          data: {
            token: this.$store.getters.getToken,
            id: deviceId
          }
        })
        .then(res => {
          if (res.returnStatus) {
            this.recordData = res.data.device_info;
            this.recordList = res.data.finish_workorders;
            this.recordList[0].imgs.forEach(item => {
              let url = this.baseurl + item;
              this.urlimgs.push(url);
            });
            console.log("记录", res.data);
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    }
  }
};
</script>

<style lang="less">
@import "../../../static/css/common.less";
.details {
  width: 100%;
  height: 100%;
  &-declare {
    width: 90%;
    margin: 60 * @rpx auto 0 * @rpx;
    &-list {
      flex-wrap: wrap;
      background: #eee;
      padding: 0 5px;
      position: relative;
      font-size: 24 * @rpx;
      .div {
        width: 50%;
        line-height: 30px;
      }
      .div {
        width: 100%;
      }
      &-swich {
        // position: absolute;right: 2px;top: 2px;
        button {
          background: #409eff;
          color: #fff;
          border: none;
          border-radius: 5px;
        }
      }
    }
  }
  &-content {
    width: 90%;
    margin: 60 * @rpx auto;
    &-box {
      border: 1px dashed #ccc;
      border-radius: 6px;
      padding: 25 * @rpx;
      &-text {
        line-height: 46 * @rpx;
        font-size: 26 * @rpx;
        span {
          font-size: 26 * @rpx;
        }
      }
    }
  }
  &-record {
    width: 90%;
    margin: 0 auto;
    h2 {
      padding-left: 30 * @rpx;
      font-size: 36 * @rpx;
      font-weight: bold;
      color: #409eff;
      line-height: 60 * @rpx;
      border-bottom: 1px solid #409eff;
    }
    ul {
      padding: 30 * @rpx;
      li {
        margin-bottom: 20 * @rpx;
        div {
          line-height: 52 * @rpx;
          // .dots{
          //   width: 5px;height: 5px;border-radius: 50%;background: #4699ff;position: absolute;
          //   left: 0;top:44*@rpx;
          // }
        }
        // :nth-of-type(1){
        //   padding-left: 50*@rpx;
        // }
      }
    }
  }
}
// 上传
.clearfix {
  flex-wrap: wrap;
  li {
    width: 160 * @rpx;
    height: 160 * @rpx;
    margin: 0 50 * @rpx 30 * @rpx 0;
    position: relative;
  }
  .picBox {
    .img {
      width: 160 * @rpx;
      height: 160 * @rpx;
    }
    .deleteImg {
      position: absolute;
      right: -14 * @rpx;
      top: -20 * @rpx;
    }
    img {
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
  .uploadPic {
    // border: none!important;
    border: 1px solid #ddd;
    p {
      position: absolute;
      left: 30 * @rpx;
      top: 30 * @rpx;
      i {
        color: #999;
      }
    }
    input {
      width: 100%;
      height: 100%;
    }
  }
}
.md-example-child-image-reader {
  float: left;
  width: 100%;
  .md-example-child {
    float: left;
  }
  ul {
    float: left;
    width: 100%;
    li {
      position: relative;
      float: left;
      width: 22%;
      padding-bottom: 22%;
      margin-left: 2%;
      margin-top: 2%;
      border-sizing: border-box;
      border-radius: 2px;
      overflow: hidden;
      list-style: none;
      .img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
