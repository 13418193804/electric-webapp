<template>
  <div>
    <cheader title="配置服务器" @leftClick="leftClick"></cheader>
    <div class="ipbox">
        <div class="loginForm"> 
            <div>
                <input type="text" v-model="ipForm.url" placeholder="服务器地址"> 
            </div>
            <!-- <div>
                <input type="text" v-model="ipForm.password"  placeholder="推送地址"> 
            </div> -->
        </div>
        <div class="loginCode">
            <div @click="handelConfig()">保存</div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { Dialog, Button, Toast } from "mand-mobile";
import cheader from "../../components/header";
import store from "../../store/index";
import Vue from "vue";
import { base_url } from "../../api/conf"

export default {
  data() {
    // 选项 数据
    return {
      ipForm: {}
    };
  },
  components: {
    // 定义组件
    cheader
  },
  created() {
    // 生命周期函数
    this.ipForm.url = localStorage.servicer;
  },
  mounted() {
    store.state.bAuth = false;
    this.ipForm.url = localStorage.servicer;
    // getBaseUrl()
    // console.log('configip-',setBaseUrl())
  },

  methods: {
    // 事件处理方法
    leftClick() {
      this.$router.go(-1);
    },
    handelConfig(){
      if((this.$store.getters.getToken||'') == ''){

          if(this.ipForm.url!==''){
            localStorage.servicer = this.ipForm.url //本地存
            this.$router.push({ name: "login" });
          }

          console.log('未登录',localStorage.servicer)
      } else {
          localStorage.servicer = this.ipForm.url //本地存
          this.getFormIP()
          console.log('已登陆',localStorage.servicer)
      }
    },
    /* API star */
    getFormIP() {
      this.service
        .httpRequest({
          url: "/aapi/server",
          methods: "post",
          data: {
            token: this.$store.getters.getToken,
            url: this.ipForm.url
          }
        })
        .then(res => {
          if (res.returnStatus) {
            this.$toast.succeed("配置成功", 2000, true);
            localStorage.servicer = this.ipForm.url
            setTimeout(() => {
              this.$router.push({ name: "login" });
            }, 1000);
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    }
    /* end */
  }
};
</script>

<style lang="less" scope>
@import "../../../static/css/common.less";
.ipbox {
  padding: 5% 5%;
}
.loginForm {
  text-align: left;
  padding: 40px * @rpx 60px * @rpx;
  position: relative;
  div {
    margin-bottom: 20px * @rpx;
    input {
      border: none;
      border: 1px * @rpx solid #4699ff;
      height: 70px * @rpx;
      border-radius: 5px;
      padding-left: 10px * @rpx;
      width: 100%;
      color: #333;
      font-size: 28 * @rpx;
    }
  }
}
.loginCode {
  margin-top: 60px * @rpx;
  text-align: center;
  div {
    width: 210px * @rpx;
    height: 70px * @rpx;
    border-radius: 100px * @rpx;
    background: #4699ff;
    margin: 0 auto;
    margin-top: 30 * @rpx;
    color: #fff;
    text-align: center;
    line-height: 70px * @rpx;
    font-size: 16px;
  }
}
.ipbox input::-webkit-input-placeholder {
  color: #999;
}
.ipbox input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #999;
}
.ipbox input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #999;
}
.ipbox input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #999;
}
</style>
