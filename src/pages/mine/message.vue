<template>
  <div class="messages">
      <cheader title="我的消息" @leftClick="leftClick"></cheader>
      <div class="switchbox">
      <div class="flex switch">
        <div @click="getInform()">通知</div>
        <div class="cur">消息</div>
      </div>
      </div>
        <better-scroll ref="betterScroll" @onPullingUp="onPullingUp" marginTop="150px" >
                  <template slot="list-content">

      <div class="messages-content">
          <div class="messages-content-box">
            <div class="messages-content-box-list" v-for="(item,index) in infoData" :key="index" @click="checkMessage(item)">
              <p :class="{'dots':item.is_read == 0}" >{{item.create_time}}</p>
              <h4> 消息编号：<span>{{item.id}}</span></h4>
              <h4> 工单编号：<span>{{item.workorder_id}}</span></h4>
              <h4> 设备编号：<span>{{item.device_sn}}</span></h4>
              <h4> 设备名称：<span>{{item.device_name}}</span></h4>
              <h4> 设备位置：<span>{{item.location}}</span></h4>
              <h4> 报警：<span>{{item.event}}</span></h4>
              <h4> 状态：<span>{{statusEnum[item.status]}}</span></h4>
            </div>
          </div>
        </div>
           </template>
                </better-scroll>
  </div>
</template>

<script>
import cheader from "../../components/header";
import { mapMutations } from "vuex";
import betterScroll from "../../components/better-scroll";

export default {
  data() {
    // 选项 数据
    return {
      ...mapMutations(["setTaskId"]),
      pagesize: 10,
      pageindex: 1,
      infoData: [],
      statusEnum: {
        "0": "新任务",
        0: "新任务",
        "1": "处理中",
        1: "处理中",
        2: "处理完毕",
        "2": "处理完毕"
      },
      isFinished: true
    };
  },
  components: {
    // 定义组件
    betterScroll,
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
    onPullingUp() {
      if (!this.isFinished) {
        return;
      }
      // async data
      setTimeout(() => {
        this.pageindex += 1;
        this.getDataList();
      }, 1000);
    },
    // 事件处理方法
    leftClick() {
      this.$router.push("/");
    },
    checkMessage(item) {
      this.service
        .httpRequest({
          url: "/aapi/message",
          methods: "post",
          data: {
            token: this.$store.getters.getToken,
            id: item.workorder_id,
            type: 1
          }
        })
        .then(res => {
          if (res.returnStatus) {
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
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    },
    getInform() {
      this.$router.push({ name: "inform" });
    },
    forceUpdate(status) {
      //  isFinished   判断当前是否可以继续加载
      //  然后设置子组件可否加载的状态
      this.isFinished = status;
      if (this.$refs.betterScroll) {
        this.$refs.betterScroll.forceUpdate(status);
      }
    },
    getDataList() {
      let list = this.infoData || [];
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
            this.$nextTick(() => {
              this.forceUpdate(true);
            });
            if (res.data.news.data.length !== this.pagesize) {
              this.$nextTick(() => {
                this.forceUpdate(false);
              });
            }
            this.infoData = res.data.news.data;
            res.data.news.data.forEach(item => {
              list.push(item);
            });
            this.infoData = list;
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
.switchbox {
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 20;
  background-color: #fff;
}
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
        margin-top: 10px;
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 15px;
        position: relative;
        p,h4 {
          font-size: 26 * @rpx;
          padding-left: 20 * @rpx;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
