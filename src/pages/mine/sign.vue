<template>
  <div>
    <cheader title="签到记录" @leftClick="leftClick"></cheader>
    <div class="sign">
        <div class="flex flex-pack-justify sign-list">
            <div><span class="dots"></span>2018年8月10日</div>
            <div>签到时间</div>
        </div>
        <div class="flex flex-pack-justify sign-list">
            <div><span class="dots"></span>2018年8月10日</div>
            <div>签到时间</div>
        </div>
    </div>
  </div>
</template>

<script>
import cheader from '../../components/header'
export default {
  data() {
    // 选项 数据
    return {};
  },
  components: {
      cheader,
  },

  methods: {
    leftClick(){
      this.$router.go(-1)
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
.sign{
  &-list{
    width: 70%;margin-left:7%;margin-top:30*@rpx;  line-height: 44*@rpx;
    div{
     position: relative;padding-left: 20*@rpx;
    }
  }
}
.dots{
  width: 5px;height: 5px;border-radius: 50%;background: #4699ff;position: absolute;
  top:13*@rpx;left: 0;
}
</style>
