<template>
  <div class="homePage">
    <div class="homeTitle"> <h1>智能运维管理系统</h1> </div>
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
          <div><i class="dots"></i>离线设备 <span>2</span>台</div>
          <div><i class="dots"></i>未处理任务 <span>2</span>条</div>
          <div><i class="dots"></i>在线设备 <span>2</span>台</div>
          <div><i class="dots"></i>以处理任务 <span>2</span>条</div>
      </div>
      <div class="flex chat catTop ">
         <div>
             <canvas id="canvas_circle" width="120" height="120"></canvas>  
          </div>
         <div>
             <canvas id="canvas_circle1" width="120" height="120"></canvas>  
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
    return {};
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
  h1 {
    font-size: 36 * @rpx;
  }
}
.banner {
  width: 70%;
  margin: 0 auto;
  height: 150 * @rpx;
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
    height: 150 * @rpx;
    img{
      width: 64*@rpx;height: 66*@rpx;
    }
  }
}
.cartogram {
  width: 80vw;
  margin: 0 auto;
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
      text-align: center;
      color: #fff;
      .dots {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #fff;
        display: inline-block;
        margin-right: 5px;
      }
    }
  }
}
.chat{
      background: #eee!important;
      height: auto!important;
}

</style>
