<template>
  <div class="homePage">
    <div class="homeTitle"> <h1>智能运维管理系统</h1> </div>
    <div class="banner">
      <img src="../../assets/homebanner.png" alt="">
    </div>
    <div class="flex menus">
        <div @click="getTask()">我的任务</div>
        <div>设备管理</div>
        <div @click="getMaterial()"> 物料管理</div>
        <div>消息</div>
    </div>
    <div class="cartogram">
      <div class="catTop">

      </div>
      <div class="chat"></div>
    </div>
    <div class="flex footNav">
      <div class="footCur">首页</div>
      <div @click="goMine()">我的</div>
    </div>
  </div>
</template>

<script>
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
    getTask(){
      this.$router.push({name:'myTask'}) // 我的任务
    },
    getMaterial(){
      this.$router.push({name:'material'}) // 我的任务
    },
    goMine() {
      this.$router.push({name: 'my'}) // 我的
    }
  },
  created() {
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted() {
    
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
@import '../../../static/css/common.less';
  .homeTitle{
    text-align: center;padding: 5% 0;
    h1{
      font-size: 36*@rpx;
    }
  }
  .banner{
    width: 70%;margin: 0 auto;height: 150*@rpx;background: #409eff;margin-bottom: 20*@rpx;
    img{
      width: 100%;height: 100%;
    }
  }
  .menus{
    width: 70%;margin: 0 auto;flex-wrap: wrap;padding: 30*@rpx;
    >div{
      width: 50%;text-align: center;height: 150*@rpx;
    }
  }
  .cartogram{
    height: 600*@rpx;background:#eee;
   .catTop{
     background: #ccc;height: 80*@rpx;
   } 
  }
</style>
