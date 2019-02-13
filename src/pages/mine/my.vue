<template>
  <div class="mine">
    <div class="mine-titile">
        <h2>我的</h2>
    </div>
    <div class="mine-user">
      <div>
         <img src="../../assets/user.jpg" alt="">
      </div>
       <p>操作人:龙添</p>
    </div> 
    <div class="mine-operation">
        <div @click="getSgin()">签 到</div>
        <div>签 到 日 期</div>
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
    getSgin(){
      this.$router.push({name: 'sign'})
    },
   goHome(){
     this.$router.push({name: 'home'})
   }
  },
  created() {
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted() {

  }
};
</script>

<style lang="less">
@import '../../../static/css/common.less';
.mine{
  text-align: center;height: 100%;
  background: linear-gradient(20deg,#0f91ef,#06c1f4);color: #fff;padding:8% 5%;
  &-titile{
    h2{
      text-align: center;font-size: 32*@rpx;margin-bottom: 100*@rpx;
    }
  }
  &-user{
    // padding: 5*@rpx;border-radius: 50%;width: 160px*@rpx;height: 160px*@rpx;border: 2px solid #8bd9fd;margin:0 auto;
    text-align: center;
    div{
      img{
        width: 150px*@rpx;height: 150px*@rpx;border-radius: 50%;
      }
    }
    p{
      margin-top: 30*@rpx;
    }
  }
  &-operation{
    margin-top: 40%;
    div{
      display: inline-block;width: 70%;margin-bottom: 40*@rpx;
      border: 1px solid #fff;border-radius: 4px; text-align: center;height: 60*@rpx;line-height: 60*@rpx;
    }
  }
}
</style>
