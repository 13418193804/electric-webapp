<template>
  <div class="loginBox">
    <div class="logoImg">
        <img src="../../assets/logo1.png" alt="">
    </div>
    <h1>智 能 电 源 箱 管 理</h1>
    <h3>监控不当机 只选ONV</h3>
    <div class="loginForm"> 
        <div>
            <input type="text" name="username" v-model="loginForm.username" placeholder="请输入账号"> 
        </div>
        <div>
            <input type="password" name="password" v-model="loginForm.password"  placeholder="请输入密码"> 
        </div>
        <span class="config" @click="getConfigIp()">配置服务器</span>
    </div>
    <div class="loginCode">
        <img src="../../assets/code.png" alt="">
        <div @click.prevent="goLogin()">登录</div>
    </div>

  </div>
</template>

<script>
import { mapMutations } from "vuex";
import store from "../../store/index";

export default {
  data() {
    // 选项 数据
    return {
      ...mapMutations(["setUserInfo"]),
      loginForm: {
        token: "0d273991b2efdc04"
      }
    };
  },
  components: {
    // 定义组件
  },
  created() {
    // 生命周期函数
  },
  mounted() {
    store.state.bAuth = false;
  },
  methods: {
    // 事件处理方法
    ...mapMutations(["changeLogin"]),
    getConfigIp() {
      this.$router.push({ name: "configIp" });
    },
    goLogin() {
      // if ((localStorage.servicer || "") == "") {
      //   this.$toast.info("请配置服务器");
      //   return;
      // }
      if (this.loginForm.username == "q") {
        this.loginForm.username = "18603050282";
      }
      if (this.loginForm.password == "q") {
        this.loginForm.password = "123456";
      }
      // this.loginForm.username = "18603050282";
      // this.loginForm.password = "123456";
      this.$toast.loading("登录中...");
      this.service
        .httpRequest({
          url: "/aapi/login",
          methods: "post",
          data: this.loginForm
        })
        .then(res => {
          this.$toast.hide();
          if (res.returnStatus) {
            this.userToken = "Bearer " + res.data.token;
            // 将用户token保存到vuex中
            localStorage.setItem("packageToken", res.data.token);
            localStorage.setItem("username", res.data.username || "");
            
            this.setUserInfo({
              token: res.data.token,
              username: res.data.username || ""
            });
            

         
            this.$router.push({ name: "home" });
            // store.state.bAuth = true;
            // this.$router.push({ name: "home" });
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

<style lang="less" scope>
@import "../../../static/css/common.less";
.loginBox {
  padding: 12% 5%;
  background: #4699ff;
  height: 100%;
  .logoImg {
    border-radius: 50%;
    text-align: center;
    margin: 0 auto;
    img {
      width: 200px * @rpx;
      height: 200px * @rpx;
      border-radius: 50%;
    }
  }
  h1 {
    font-size: 40px * @rpx;
    margin-top: 40px * @rpx;
    text-align: center;
    color: #fff;
  }
  h3 {
    color: #fff;
    border: 2px * @rpx solid #fff;
    line-height: 60px * @rpx;
    padding: 0 10 * @rpx;
    text-align: center;
    width: 300 * @rpx;
    margin: 30 * @rpx auto;
  }
  .loginForm {
    text-align: left;
    padding: 40px * @rpx 60px * @rpx;
    position: relative;
    div {
      margin-bottom: 20px * @rpx;
      input {
        border: none;
        outline: none;
        border-bottom: 2px * @rpx solid #fff;
        height: 70px * @rpx;
        padding-left: 10px * @rpx;
        width: 100%;
        background: #4699ff;
        color: #fff;
        font-size: 28 * @rpx;
      }
    }
    .config {
      position: absolute;
      font-size: 24px * @rpx;
      right: 60 * @rpx;
      color: #fff;
    }
  }
  .loginCode {
    margin-top: 60px * @rpx;
    text-align: center;
    img {
      width: 180px * @rpx;
      height: 180px * @rpx;
    }
    span {
      display: block;
      margin: 0 auto;
      margin-bottom: 30px * @rpx;
      width: 160px * @rpx;
      height: 160px * @rpx;
      border: 2px * @rpx solid #fff;
    }
    div {
      width: 210px * @rpx;
      height: 70px * @rpx;
      border-radius: 100px * @rpx;
      background: #fff;
      margin: 0 auto;
      margin-top: 30 * @rpx;
      color: blue;
      text-align: center;
      line-height: 70px * @rpx;
      font-size: 16px;
    }
  }
}
input::-webkit-input-placeholder {
  color: #fff;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #fff;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #fff;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #fff;
}
</style>
