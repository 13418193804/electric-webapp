<template>
  <div>
    <md-popup style="z-index:1900"
        v-model="showTask"
        position="bottom"
        >
        <md-popup-title-bar
            title="选择任务单"
            ok-text="确定"
            cancel-text="取消"
            @confirm="confirm"
            @cancel="showTask=false"
        ></md-popup-title-bar>
        <div>
            <div class="md-example-popup md-example-popup-bottom">
            <!-- describe="Popup Description" -->
        <better-scroll ref="betterScroll" @onPullingUp="onPullingUp" mainStyle="top:30vh" marginTop="0">
            <template slot="list-content">
                <div class="scroll-view-list taskList taskNew"  >
                    <ul>
                        <li v-for="(item,index) in taskList" :key="index" class="scroll-view-list" @click="doSelect(item.id)">
                            <div>
                                <p :class="{'isSelect': selectId == item.id}">{{item.create_time}}</p>
                                <h4 :class="{'isSelect': selectId == item.id}"> 报警：<span>{{item.fault}}</span></h4>
                                <span class="tag">{{quoteTypeEnum[item.type]}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </template>
        </better-scroll>
            </div>
        </div>
    </md-popup>
  </div>
</template>

<script>
import { Toast, Button } from "mand-mobile";
import { Popup, PopupTitleBar } from "mand-mobile";
import betterScroll from "./better-scroll";

export default {
  name: "landscape-demo",
  components: {
    [Button.name]: Button,
    [Popup.name]: Popup,
    [PopupTitleBar.name]: PopupTitleBar,
    betterScroll
  },
  data() {
    return {
      showTask: false,
      taskList: [],
      pagesize: 10,
      pageindex: 1,
      isFinished: true,
      quoteTypeEnum: {
        "0": "自动派单",
        "1": "手动派单",
        0: "自动派单",
        1: "手动派单"
      },
      selectId: null
    };
  },
  mounted() {},
  methods: {
    confirm() {
      if (this.selectId == null) {
        // this.$dialog.alert({
        //   content: "请选择任务单",
        //   confirmText: "确定"
        // });
        return;
      }
      this.$emit("confirm", this.selectId);
    },
    doSelect(id) {
      this.selectId = id;
    },
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
    forceUpdate(status) {
      //  isFinished   判断当前是否可以继续加载
      //  然后设置子组件可否加载的状态
      this.isFinished = status;
      if (this.$refs.betterScroll) {
        this.$refs.betterScroll.forceUpdate(status);
      }
    },
    /* api */
    getDataList() {
      this.$toast.loading("加载中...");
      let list = this.taskList || [];
      this.taskList = [];
      let data = {
        token: this.$store["getters"].getToken,
        status: "01",
        pagesize: this.pagesize,
        pageindex: this.pageindex
      };
      this.service
        .httpRequest({
          url: "/aapi/workorder",
          methods: "get",
          data: data
        })
        .then(res => {
          this.$toast.hide();
          if (res.returnStatus) {
            this.$nextTick(() => {
              this.forceUpdate(true);
            });

            if (res.data.workorder_list.length !== this.pagesize) {
              this.$nextTick(() => {
                this.forceUpdate(false);
              });
            }
            res.data.workorder_list.forEach(item => {
              list.push(item);
            });
            this.taskList = list;
            this.taskList.push();
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
          //   if (this.$refs.scrollView) {
          //     // 停止刷新
          //     this.$refs.scrollView[0].finishLoadMore();
          //   }
        });
    }
  }
};
</script>

<style lang="less">
@import "../../static/css/common.less";
.isSelect {
  color: #2f86f6;
}

.taskList {
  padding: 0% 5%;
  // padding-top: 100px * @rpx;
  ul {
    width: 100%;
    height: 100%;
    overflow: hidden;
    li {
      position: relative;
      padding: 20 * @rpx;
      border-top: 2px * @rpx solid #eee;
      padding-left: 20 * @rpx;
      div {
        text-align: left;
        p {
          font-size: 26px * @rpx;
          width: 80%;
          height: 40px * @rpx;
        }
        h4 {
          font-size: 24px * @rpx;
          width: 80%;
          height: 40px * @rpx;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          // padding-left: 12px;
          span {
            font-size: 24px * @rpx;
          }
        }
        span.tag {
          font-size: 20px * @rpx;
          position: absolute;
          right: 0;
          top: 20px * @rpx;
          border: 1px solid #4699ff;
          border-radius: 50px;
          padding: 0 6px;
        }
      }
    }
    :nth-of-type(1) {
      border: 0;
    }
  }
}
.md-example-popup-bottom {
  background-color: #fff;
  min-height: 70vh;
  max-height: 70vh;
  position: relative;
}
</style>
