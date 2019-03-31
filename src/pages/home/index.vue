<template>
  <div class="homePage">
    <!-- <button onclick="resume()">resume</button> -->
    <div class="navigation flex   flex-pack-justify flex-align-center">
      <div class="flex flex-pack-center homeTitle"><img src="../../assets/onv.png" alt=""><h1>智能运维管理系统</h1> </div>
      <div class="navigation-icon" @click="openSelect()">
        <i class="iconfont icon-xuanxiang xuanxiang"></i>
      </div>
      
    </div>
    <div class="selectDown" v-show="isSelectDown">
      <ul>
        <li @click="loginOut()">注销登陆</li>
        <li @click="goAbout()">关于</li>
        <li @click="checkBack()">退出</li>
      </ul>
    </div>
    <div class="banner">
      <img src="../../assets/homebanner.png" alt="">
    </div>
    <div class="flex menus">
        <div @click="getTask()">
          <div class="badge" v-if="numbelData.undisposed">{{numbelData.undisposed}}</div>
          <img src="../../assets/task.png" alt=""><h3>我的任务</h3>
        </div>
        <div @click="getEquipment()"><img src="../../assets/equipment.png" alt=""><h3>设备管理</h3></div>
        <div @click="getMaterial()"> <img src="../../assets/material.png" alt=""><h3>物料管理</h3></div>
        <div @click="getMessage()">
          <div class="badge" v-if="message">{{message}}</div>
           <img src="../../assets/messge.png" alt=""><h3>消息</h3></div>
    </div>
    <div class="cartogram">
      <div class="flex catTop">
          <div><i class="dot" style="background-color:#FFCC00"></i>未处理任务 <span>{{numbelData.undisposed}}</span>条</div>
          <div><i class="dot" style="background-color:#FFCC00"></i>在线设备 <span>{{numbelData.online}}</span>台</div>
          <div><i class="dot" style="background-color:#FF9934"></i>处理中任务 <span>{{numbelData.processing}}</span>条</div>
          <div><i class="dot" style="background-color:#FF9934"></i>离线设备 <span>{{numbelData.offline}}</span>台</div>
          <div><i class="dot" style="background-color:#c4932e"></i>已处理任务 <span>{{numbelData.processed}}</span>条</div>
      </div>
      <div class="flex chat catTop ">
         <div>
             <canvas id="canvas_circle1" width="200" height="200"></canvas>  
          </div>
         <div>
             <canvas id="canvas_circle" width="200" height="200"></canvas>  
          </div>
      </div>
    </div>
    <div class="flex footNav">
      <div class="footCur">首页</div>
      <div @click="goMine()">我的</div>
    </div>




  </div>
</template>

<script>
import { init } from "./pie.js";
import Vue from "vue";
import { setBaseUrl, setMqttUrl } from "../../api/conf.js";
import { mapMutations } from "vuex";

export default {
  data() {
    // 选项 数据
    return {
      numbelData: [],
      isSelectDown: false,
      message:0,
      ...mapMutations(["setUserInfo"])
    };
  },
  components: {
    // 定义组件
  },
  created() {
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
  },
  updated() {},
  mounted() {
    if ((this.$store.getters.getToken || "") !== "") {
      this.getNumbel();
    } else {
      this.$router.push("/login");
      // init([
      //   {
      //     id: "canvas_circle",
      //     data_arr: [1, 0]
      //   },
      //   {
      //     id: "canvas_circle1",
      //     data_arr: [0, 1]
      //   }
      // ]);
    }
  },
  methods: {
    // 事件处理方法
    gotoGame(path) {
      this.reLaunchPageTo(this.router + path);
    },
    getTask() {
      this.$router.push({ name: "myTask" }); // 我的任务
    },
    getMaterial() {
      this.$router.push({ name: "material" }); // 我的任务
    },
    getEquipment() {
      this.$router.push({ name: "equipment" }); // 我的设备
    },
    getMessage() {
      this.$router.push({ name: "message" });
    },
    goMine() {
      this.$router.push({ name: "my" }); // 我的
    },
    openSelect() {
      this.isSelectDown = !this.isSelectDown;
    },
    //关于
    goAbout() {
      this.$router.push("/about");
    },
    //注销
    loginOut() {
      this.$dialog.confirm({
        content: "注销登录将清除用户信息，是否继续?",
        confirmText: "确定",
        onConfirm: () => {
          localStorage.clear();
          sessionStorage.clear();
          setBaseUrl("");
          setMqttUrl("");
          this.setUserInfo({
            token: "",
            username: ""
          });
          this.$router.push("/login");
        }
      });
    },
    //退出
    checkBack() {
      this.$dialog.confirm({
        content: "是否退出当前用户?",
        confirmText: "确定",
        onConfirm: () => {
          localStorage.packageToken = "";
          this.setUserInfo({
            token: "",
            username: ""
          });
          this.$router.push("/login");
        }
      });
    },
    /* API */
    getNumbel() {
      this.service
        .httpRequest({
          url: "/aapi/getstatistics",
          methods: "get",
          data: {
            token: this.$store.getters.getToken
          }
        })
        .then(res => {
          if (res.returnStatus) {
            this.numbelData = res.data.data;
            this.message = res.data.data.message_not_read + res.data.data.news_not_read
            init([
              {
                id: "canvas_circle",
                data_arr: [
                  res.data.data.online /
                    (res.data.data.offline + res.data.data.online),
                  res.data.data.offline /
                    (res.data.data.offline + res.data.data.online)
                ]
              },
              {
                id: "canvas_circle1",
                data_arr: [
                  res.data.data.undisposed /
                    (res.data.data.undisposed +
                      res.data.data.processed +
                      res.data.data.processing),
                  res.data.data.processing /
                    (res.data.data.undisposed +
                      res.data.data.processed +
                      res.data.data.processing),
                  res.data.data.processed /
                    (res.data.data.undisposed +
                      res.data.data.processed +
                      res.data.data.processing)
                ]
              }
            ]);

            if (!Vue.prototype.mqttClient) {
              //开启mqtt
              this.loginMQTT(this.$store.getters.getToken, mqttClient => {
                Vue.prototype.mqttClient = mqttClient;
              });
            }
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
.homeTitle {
  text-align: center;
  padding: 5% 0;
  img {
    width: 70px;
    height: 35px;
  }
  h1 {
    font-size: 36 * @rpx;
    line-height: 35px;
  }
}
.banner {
  width: 70%;
  margin: 0 auto;
  height: 180 * @rpx;
  background: #409eff;
  margin-bottom: 20 * @rpx;
  img {
    width: 100%;
    height: 100%;
  }
}
.menus {
  width: 70%;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 30 * @rpx;
  > div {
    width: 50%;
    text-align: center;
    height: 140 * @rpx;
    margin-top: 50 * @rpx;
    position: relative;
    img {
      width: 84 * @rpx;
      height: 86 * @rpx;
    }
    h3 {
      margin-top: 20 * @rpx;
    }
    .badge {
      background: #f56c6c;
      color: #fff;
      font-size: 25 * @rpx;
      position: absolute;
      right: 15px;
      top: -15px;
      border-radius: 20px;
      width: 35px;
      height: 25px;
      text-align: center;
      line-height: 25px;
    }
  }
}
.cartogram {
  width: 80vw;
  margin: 40 * @rpx auto 0;
  margin-bottom: 95 * @rpx;
  // height: 600 * @rpx;
  background: #eee;
  .catTop {
    background: #ccc;
    height: 150 * @rpx;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 0%;

    div {
      width: 50%;
      line-height: 50 * @rpx;
      padding-left: 35px;
      color: #fff;
      position: relative;
      font-size: 13px;
      .dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #fff;
        display: inline-block;
        margin-right: 5px;
        position: absolute;
        left: 25px;
        top: 9px;
      }
    }
  }
}
.chat {
  background: #eee !important;
  height: auto !important;
}
.xuanxiang {
  font-size: 24px !important;
}
.navigation {
  &-icon {
    padding: 10px;
  }
}
// select
.selectDown {
  width: 300 * @rpx;
  background: #4c4c4c;
  position: absolute;
  top: 110 * @rpx;
  right: 0;
  border-radius: 4px;
  ul {
    li {
      line-height: 50 * @rpx;
      color: #fff;
      padding: 20 * @rpx;
      border-bottom: 1 * @rpx solid #ddd;
      font-weight: bold;
    }
  }
}
</style>
