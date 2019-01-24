<template>
  <div class="mine">
    <div class=""></div>
    <div class="flex footNav">
      <div @click="goHome()">首页</div>
      <div class="footCur">我的</div>
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

</style>
