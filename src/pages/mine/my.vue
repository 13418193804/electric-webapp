<template>
  <div id="my" class="mine">
    <div class="mine-titile">
        <h2 @click="handelBack()">我的</h2>
    </div>
    <div class="mine-user">
      <div>
         <img src="../../assets/logo1.png" alt=""> 
      </div>
       <p>操作人:{{username}}</p>
    </div> 
    <div class="mine-cinfigbox">
      <div>服务器地址：www.108.170.11</div>
      <div>&nbsp;&nbsp;&nbsp;推送地址：wwe.1874.97793</div>
      <div>&nbsp;&nbsp;&nbsp;链接状态：
        <span><i class="iconfont icon-iconfontdian1"></i>已链接</span>
        <!-- <span><i class="iconfont icon-iconfontdian11"></i>链接已断开 <span>重新连接</span></span> -->
      </div>
    </div>
    <div class="mine-operation">
        <div @click="getSign()">签 到</div>
        <div @click="getData()">签 到 日 期</div>
        <div @click="getConfigIp()">服务器配置</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
const $vue = new Vue();
export default {
  data() {
    // 选项 数据
    return {
      imgInfo: {}, // 存图片的宽高信息
      username: this.$store.getters.getUserName
    };
  },
  components: {
    // 定义组件
  },
  beforeCreate() {},
  methods: {
    getConfigIp(){
      this.$router.push({name:"configIp"})
    },
    getSign() {
      this.service
        .httpRequest({
          url: "/aapi/sign",
          methods: "post",
          data: { token: this.$store.getters.getToken }
        })
        .then(res => {
          if (res.returnStatus) {
            this.signData = res.data;
            this.$dialog.alert({
              content: "签到成功",
              confirmText: "确定"
            });
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    },
    getData() {
      this.$router.push({ name: "sign" });
    },
    getImgInfo() {
      let img = new Image();
      img.src = this.myImg;
      const vm = this;
      img.onload = function() {
        vm.$set(vm.imgInfo, "width", img.width);
        vm.$set(vm.imgInfo, "height", img.height);
        console.log("img", vm.imgInfo); // 打印图片信息
      };
    },
    handelBack() {
      window.plusReady();
    }
  },
  created() {
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted() {
    if ((this.$store.getters.getToken || "") == "") {
      this.$router.replace("/login");
      return;
    }
    this.getImgInfo();
  }
};
</script>

<style lang="less">
@import "../../../static/css/common.less";
.mine {
  text-align: center;
  height: 100%;
  background: linear-gradient(20deg, #0f91ef, #06c1f4);
  color: #fff;
  padding: 8% 5%;
  &-titile {
    h2 {
      text-align: center;
      font-size: 32 * @rpx;
      margin-bottom: 100 * @rpx;
    }
  }
  &-user {
    // padding: 5*@rpx;border-radius: 50%;width: 160px*@rpx;height: 160px*@rpx;border: 2px solid #8bd9fd;margin:0 auto;
    text-align: center;
    div {
      img {
        width: 200px * @rpx;
        height: 200px * @rpx;
        border-radius: 50%;
      }
    }
    p {
      margin-top: 30 * @rpx;
    }
  }
  &-cinfigbox{
    margin:20% auto 0;
    width: 65%;
    div{
      text-align: left;
      span{
        position: relative;padding-left:20*@rpx;
        i{
          position: absolute;left:-26*@rpx;top:-10*@rpx;
        }
      }
    }
  }
  &-operation {
    margin-top: 20%;
    div {
      display: inline-block;
      width: 70%;
      margin-bottom: 40 * @rpx;
      border: 1px solid #fff;
      border-radius: 4px;
      text-align: center;
      height: 60 * @rpx;
      line-height: 60 * @rpx;
    }
  }
}
</style>
