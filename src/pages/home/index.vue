<template>
  <div class="homePage">
    <div class="flex flex-pack-center homeTitle"><img src="../../assets/onv.png" alt=""><h1>智能运维管理系统</h1> </div>
    <div class="banner">
      <img src="../../assets/homebanner.png" alt="">
    </div>
    <div class="flex menus">
        <div @click="getTask()"><img src="../../assets/task.png" alt=""><h3>我的任务</h3></div>
        <div @click="getEquipment()"><img src="../../assets/equipment.png" alt=""><h3>设备管理</h3></div>
        <div @click="getMaterial()"> <img src="../../assets/material.png" alt=""><h3>物料管理</h3></div>
        <div @click="getMessage()"> <img src="../../assets/messge.png" alt=""><h3>消息</h3></div>
    </div>
    <div class="cartogram">
      <div class="flex catTop">
          <div><i class="dot"></i>离线设备 <span>222</span>台</div>
          <div><i class="dot"></i>未处理任务 <span>2</span>条</div>
          <div><i class="dot"></i>在线设备 <span>2</span>台</div>
          <div><i class="dot"></i>以处理任务 <span>22</span>条</div>
      </div>
      <div class="flex chat catTop ">
         <div>
             <canvas id="canvas_circle" width="200" height="200"></canvas>  
          </div>
         <div>
             <canvas id="canvas_circle1" width="200" height="200"></canvas>  
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
export default {
  data() {
    // 选项 数据
    return {
    };
  },
  components: {
    // 定义组件
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
      this.$router.push({name: 'message'})
    },
    goMine() {
      this.$router.push({ name: "my" }); // 我的
    }
  },
  created() {
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted() {
    init([
      {
        id: "canvas_circle",
        data_arr: [0.8, 0.2]
      },
      {
        id: "canvas_circle1",
        data_arr: [0.8, 0.8]
      }
    ]);

    // this.service
    //   .httpRequest({
    //     url: "/address/queryprovince",
    //     methods: "post",
    //     data: {}
    //   })
    //   .then(res => {
    //     console.log(res);
    //   });
    // console.log('home999', this.$root, this.$root.$mp)
  }
};
</script>

<style lang="less">
@import "../../../static/css/common.less";
.homeTitle {
  text-align: center;
  padding: 5% 0;
  img{
    width: 70px;height: 35px;
  }
  h1 {
    font-size: 36 * @rpx;line-height: 35px;
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
    margin-top:50*@rpx;
    img{
      width: 84*@rpx;height: 86*@rpx;
    }
    h3{
      margin-top:20*@rpx;
    }
  }
}
.cartogram {
  width: 80vw;
  margin: 40*@rpx auto 0;
  // height: 600 * @rpx;
  background: #eee;
  .catTop {
    background: #ccc;
    height: 100 * @rpx;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 0%;
    div {
      width: 50%;
      line-height: 50 * @rpx;
      padding-left:35px;
      color: #fff;position: relative;font-size:13px;
      .dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #fff;
        display: inline-block;
        margin-right: 5px;
        position: absolute;left:25px;top:9px;
      }
    }
  }
}
.chat{
      background: #eee!important;
      height: auto!important;
}

</style>
