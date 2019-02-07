<template>
  <div class="messages">
      <cheader title="我的通知" @leftClick="leftClick"></cheader>
      <div class="flex switch">
        <div class="cur">通知</div>
        <div @click="getMessage()">消息</div>
      </div>
      <div class="messages-content">
        <div class="messages-content-box">
          <div class="messages-content-box-list">
            <span class="dots"></span>
            <p>2018年10月22日 12:00:00</p>
            <p>你有一条消息</p>
          </div>
          <div class="messages-content-box-list">
            <span class="dots"></span>
            <p>2018年10月22日 12:00:00</p>
            <p>你有一条消息</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import cheader from '../../components/header'

export default {
  data() {
    // 选项 数据
    return {
    };
  },
  components: {
    // 定义组件
    cheader
  },
  created() {
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted() {
    
  },
  methods: {
    // 事件处理方法
    leftClick(){
      this.$router.push('/')
    },
    getMessage() {
      this.$router.push({name: 'message'})
    }
  }

};
</script>

<style lang="less">
@import '../../../static/css/common.less';
.switch{
  width: 90%;margin:40*@rpx auto;
  div{
    width: 50%;text-align: center;background: #409EFF;color: #fff;height: 80*@rpx;line-height: 80*@rpx;
  }
  .cur{
    background: #1575ed;
  }
}
.messages{
  &-content{
   padding-top: 20*@rpx;border-top: 1px solid #eee;
   &-box{
     width: 90%;margin: 10*@rpx auto;
     &-list{
       position: relative;
       .dots{
         position: absolute;left: 0;top:8px;width: 5px;height: 5px;border-radius: 50%;background: #409EFF;
       }
       p{
         font-size: 24*@rpx;padding-left: 20*@rpx;line-height: 24px;
       }
     }
   }
  }
  
}

</style>
