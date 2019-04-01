<template>
  <div class="aboutBox">
        <cheader title="关于" @leftClick="leftClick"></cheader>

        
        <div class="flex logo00"><img src="../../assets/onv.png" alt=""><h1>智能运维管理系统</h1> </div>

        <div class="optionbox">
            <div class="option flex   flex-pack-justify" v-for="(item,index) in option">
                <div class="option-title">{{item.title}}</div>
                <div class="option-content">{{item.content}}</div>
            </div>
        </div>

  </div>
</template>

<script>
import { mapMutations } from "vuex";
import store from "../../store/index";
import Vue from "vue";
import cheader from "../../components/header";

export default {
  data() {
    // 选项 数据
    return {
      option: [
        { title: "版本号", content: "1.0.2" },
        { title: "客服电话", content: "0755-33376606" },
        { title: "官网", content: "http://www.onv.com.cn/" }
      ]
    };
  },
  components: {
    // 定义组件
    cheader
  },
  created() {
    // 生命周期函数
  },
  mounted() {},
  methods: {
    // 事件处理方法
    leftClick() {
      this.$router.replace("/");
    }
  }
};
</script>

<style lang="less" scope>
@import "../../../static/css/common.less";
.logo00 {
  // text-align: left;
  margin-top:50px;
  text-align: left;
  padding: 5%;
  img {
    width: 70px;
    height: 35px;
  }
  h1 {
    font-size: 36 * @rpx;
    line-height: 35px;
  }
}
.optionbox {
  border-top: 1px solid #e5e5e5;
}
.option {
  border-bottom: 1px solid #e5e5e5;
  padding: 10px 40px;
  font-size: 16px;
  &-title {
  }
}
</style>
