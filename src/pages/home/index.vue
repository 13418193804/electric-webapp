<template>
  <div class="homePage">
    <div class="homeTitle"> <h1>智能运维管理系统</h1> </div>
    <div class="banner">
      <!-- <img src="" alt=""> -->
    </div>
    <div class="flex menus">
        <div @click="getTask()">我的任务</div>
        <div>设备管理</div>
        <div>物料管理</div>
        <div>消息</div>
    </div>
    <div class="cartogram">
      <div class="catTop">

      </div>
      <div class="chat"></div>
    </div>
    <div class="footNav">
      <!-- <div>首页</div>
      <div></div> -->
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
      this.$router.push({name:'myTask'})
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
