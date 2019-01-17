<template>
  <div class="homePage">
    <div class="wraps">
   
   134

      <!-- gotoGame('pages/test/main?path=four') -->
       
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
</style>
