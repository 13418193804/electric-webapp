<template>
<div>
<div class="cheader flex  flex-align-center" ref="titleHeader">
    <div>
        <div class="flex  flex-align-center flex-pack-center doback" @click="doback">
                <i class="iconfont icon-fanhui" ></i>
            <div>返回</div>
            </div>
    </div>
    <div class="flex-1 ctitle">{{title}}</div>

</div>
<div class="postHeight"></div>

</div>
  </template>

  <script>
export default {
  props: ["title"],
  data: function() {
    return {};
  },
  beforeDestroy() {
    window.titleHeaderDoback = null;
  },
  mounted() {
    window.titleHeaderDoback = this.doback;
  },
  methods: {
    doback() {
      if (typeof this.$emit("leftClick").$listeners["leftClick"]) {
        // this.$emit("leftClick");
      } else {
        this.$router.go(-1);
      }
    }
  },
  components: {}
};
</script>
 <style lang="less" scoped>
@import "../../static/css/common.less";
.cheader {
  position: fixed;
  height: 82px * @rpx;
  width: 100%;
  background-color: #4699ff;
  z-index: 9999;
  color: #fff;
}
.postHeight {
  height: 82px * @rpx;
}
.icon-fanhui {
  font-size: 32px * @rpx;
}
.doback {
  height: -webkit-fill-available;
  width: 128px * @rpx;
}
.doback:active {
  opacity: 0.5;
}
.ctitle {
  font-size: 32px * @rpx;
  text-align: center;
  padding-right: 128px * @rpx;
}
</style>

