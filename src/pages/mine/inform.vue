<template>
  <div class="messages">
      <cheader title="我的通知" @leftClick="leftClick"></cheader>
      <div class="flex switch">
        <div class="cur">通知</div>
        <div @click="getMessage()">消息</div>
      </div>
      <div class="messages-content">
        <div class="messages-content-box">
          <div class="messages-content-box-list" v-for="(item,index) in infoData" :key="index" @click="gerRead(item)">
            <p :class="{'dots':item.is_read == 0}" >{{item.create_time}}</p>
            <p>{{item.content}}</p>
          </div>
        </div>
      </div>
      <md-landscape v-model="showNoMask" :mask-closable="true">
          <div class="info-box">
              <h4>通知</h4>
              <p>{{content.create_time}}</p>
              <div>{{content.content}}</div>
          </div>
      </md-landscape>
  </div>
</template>

<script>
import cheader from '../../components/header'
import {Landscape, Toast, Button} from 'mand-mobile'
import checktask from "../../components/checktask";

export default {
  data() {
    // 选项 数据
    return {
      pagesize: 10,
      pageindex: 1,
      infoData:[],
      showNoMask: false,
      content:{}

    };
  },
  components: {
    // 定义组件
    cheader,
    [Landscape.name]: Landscape,
    [Button.name]: Button,
    checktask
  },
  created() {
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted() {
    this.getDataList()
  },
  methods: {
    // 事件处理方法
    leftClick(){
      this.$router.push('/')
    },
    getMessage() {
      this.$router.push({name: 'message'})
    },
    getDataList() {
      this.service
        .httpRequest({
          url: "/aapi/message",
          methods: "get",
          data: {
            token: this.$store.getters.getToken,
            pagesize: this.pagesize,
            pageindex: this.pageindex
          }
        })
        .then(res => {
          if (res.returnStatus) {
            this.infoData = res.data.inform.data
            console.log(res.data.inform)
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    },
    gerRead(item){
      this.showNoMask = true
      this.content = item
      this.service
        .httpRequest({
          url: "/aapi/message",
          methods: "post",
          data: {
            token: this.$store.getters.getToken,
            id: item.id,
            type: 2
          }
        })
        .then(res => {
          if (res.returnStatus) {
            this.getDataList()
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
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
       p{
         font-size: 24*@rpx;padding-left: 20*@rpx;line-height: 24px;
       }
     }
   }
  }
}
.info-box{
  background: #fff;
  padding: 30 * @rpx;
  border-radius: 10 * @rpx;
  h4{
    font-size: 36 * @rpx;margin-bottom: 10*@rpx;text-align: center;
  }
  p{
    margin-bottom: 10*@rpx;
  }
  div{
    height: 320*@rpx;overflow: auto;
  }

}

</style>
