<template>
<div>
 	<div id="l-map"></div>
</div>
  </template>

  <script>
import { init, setPlace, getPosition, setPoint } from "./baidu";
export default {
  data: function() {
    return {
      map: null
    };
  },
  mounted() {
    init(map => {
      this.map = map;
    });
  },
  methods: {},
  components: {}
};
</script>
 <style lang="less" scoped>
@import "../../../static/css/common.less";

.amap-box {
  width: 700 * @rpx;
  height: 700 * @rpx;
}
#l-map {
  height: 300px;
  width: 100%;
}
#r-result {
  width: 100%;
}
</style>

