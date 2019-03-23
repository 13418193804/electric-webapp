<template>
  <div class="messages">
      <cheader title="我的消息" @leftClick="leftClick"></cheader>
      <div class="flex switch">
        <div @click="getInform()">通知</div>
        <div class="cur">消息</div>
      </div>
     <div class="messages-content">
        <div class="messages-content-box">
          <div class="messages-content-box-list" v-for="(item,index) in infoData" :key="index" @click="checkMessage(item)">
            <p :class="{'dots':item.is_read == 0}" >{{item.create_time}}</p>
            <p>{{item.device_name}}:{{item.event}} ({{item.location}})</p>
          </div>
        </div>
      </div>
      
  </div>
</template>

<script>
import cheader from "../../components/header";
import { mapMutations } from "vuex";

export default {
  data() {
    // 选项 数据
    return {
      ...mapMutations(["setTaskId"]),

      pagesize: 10,
      pageindex: 1,
      infoData: []
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
    this.getDataList();
  },
  methods: {
    // 事件处理方法
    leftClick() {
      this.$router.push("/");
    },
    checkMessage(item) {
      this.setTaskId(item.workorder_id);
      if (item.status == 0 || item.status == 2) {
        this.$router.push({
          name: "taskDetails"
        });
      } else if (item.status == 1) {
        this.$router.push({
          name: "taskProgress"
        });
      }
    },
    getInform() {
      this.$router.push({ name: "inform" });
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
            this.infoData = res.data.news.data;
            console.log(res.data.news);
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
@import "../../../static/css/common.less";
.switch {
  width: 90%;
  margin: 40 * @rpx auto;
  div {
    width: 50%;
    text-align: center;
    background: #409eff;
    color: #fff;
    height: 80 * @rpx;
    line-height: 80 * @rpx;
  }
  .cur {
    background: #1575ed;
  }
}
.messages {
  &-content {
    padding-top: 20 * @rpx;
    border-top: 1px solid #eee;
    &-box {
      width: 90%;
      margin: 10 * @rpx auto;
      &-list {
        position: relative;
        p {
          font-size: 24 * @rpx;
          padding-left: 20 * @rpx;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
