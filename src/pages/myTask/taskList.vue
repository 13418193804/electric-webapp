<template>
  <div class="taskBox">
      <cheader title="我的任务" @leftClick="leftClick"></cheader>
    <!-- <header><div class="back"><i class="icon"></i></div>我的任务</header> -->
    <ul class="flex taskTabs">
      <li v-for="(item,index) in tabs" :key="index" :class="{titilebCur:index == active}" @click="handelClick(index)">{{item.titile}}</li>
    </ul>
     <div v-for="(quote,quoteIndex) in tabs" :key="quoteIndex" v-if="quoteIndex === active" > 
        <!-- 新任务 -->
        <div>
           <better-scroll ref="betterScroll" @onPullingUp="onPullingUp"  marginTop="100px">
            <template slot="list-content">
                <div class="scroll-view-list taskList taskNew"  v-if="active == 0">
                    <ul>
                        <li v-for="(item,index) in quoteData[active]" :key="index" class="scroll-view-list" @click="getDetails()">
                            <div>
                                <p>{{item.create_time}}</p>
                                <h4> 报警：<span>{{item.fault}}</span></h4>
                                <span class="tag">{{quoteTypeEnum[item.type]}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                 <!-- 处理中 -->
                <div class="scroll-view-list taskList" v-if="active == 1" >
                    <ul>
                        <li v-for="(item,index) in quoteData[active] " :key="index">
                            <div>
                                <p> 订单时间：{{item.create_time}}</p>
                                <h4> 报警：{{item.fault}}</h4>
                                <h4> 备注：<span>{{item.desp}}</span></h4>
                                <p> 最后一次更新时间：{{item.update_time}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                 <!-- 处理完毕 -->
                <div class="scroll-view-list taskList"  v-if="active == 2">
                    <ul>
                        <li v-for="(item,index) in  quoteData[active] " :key="index">
                            <div>
                                <p> 订单时间：{{item.create_time}}</p>
                                <h4> 报警：<span>{{item.fault}}</span></h4>
                                <!-- <h4> 问题：<span>{{item.fault}}</span></h4> -->
                                <h4> 备注：<span>{{item.desp}}</span></h4>
                                <p> 最后一次更新时间：{{item.update_time}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </template>
         </better-scroll>
        </div>

    </div>
  </div>
</template>

<script>
// import { ScrollView, ScrollViewRefresh } from "mand-mobile";
import cheader from "../../components/header";
import betterScroll from "../../components/better-scroll";

export default {
  name: "scroll-view-demo-0",
  components: {
    cheader,
    betterScroll
    // [ScrollView.name]: ScrollView,
    // [ScrollViewRefresh.name]: ScrollViewRefresh
  },
  data() {
    return {
      active: 0,
      tabs: [
        { titile: "新任务" },
        { titile: "处理中" },
        { titile: "处理完毕" }
      ],
      quoteData: [], // data
      quoteList: [
        {
          beenQuote: [{ text: "新任务" }, { text: "2019男装潮流冷帽" }],
          noQuote: [{ text: "处理中" }],
          prohibituote: [
            { text: "处理完毕" },
            { text: "潮流潮流潮流潮流潮流潮流潮流潮流潮流" }
          ]
        }
      ],
      list: 3,
      isIndex: null,
      isFinished: true,
      pagesize: 10,
      pageindex: 1,
      quoteTypeEnum: {
        "0": "自动派单",
        "1": "手动派单",
        0: "自动派单",
        1: "手动派单"
      }
    };
  },
  mounted() {
    this.getDataList(0);
    window.ScrollViewTrigger1 = () => {
      this.$refs.scrollView.triggerRefresh();
    };
  },
  methods: {
    onPullingUp() {
      if (!this.isFinished) {
        return;
      }
      // async data
      setTimeout(() => {
        this.pageindex += 1;
        this.getDataList(this.active);
      }, 1000);
    },

    forceUpdate(status) {
      //  isFinished   判断当前是否可以继续加载
      //  然后设置子组件可否加载的状态
      this.isFinished = status;
      if (this.$refs.betterScroll) {
        this.$refs.betterScroll[0].forceUpdate(status);
      }
    },
    /* api */
    getDataList(active) {
      this.$toast.loading("加载中...");
      let list = this.quoteData[active] || [];
      this.quoteData[active] = [];
      let data = {
        token: this.$store["getters"].getToken,
        status: active,
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
            this.quoteData[active] = list;
            this.active = active;
            this.quoteData.push();
            console.log("quoteData", this.quoteData[active]);
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
          if (this.$refs.scrollView) {
            // 停止刷新
            this.$refs.scrollView[0].finishLoadMore();
          }
        });
    },
    leftClick() {
      this.$router.go(-1);
    },
    handelClick(index) {
      if (this.active === index) {
        return;
      }
      this.pageindex = 1;
      this.forceUpdate(true);
      this.quoteData[index] = [];
      this.getDataList(index);
    },
    $_onRefresh() {
      // async data
      setTimeout(() => {
        this.list += 5;
        this.$refs.scrollView.finishRefresh();
      }, 2000);
    },
    getDetails() {
      this.$router.push({ name: "taskDetails" });
    }
  }
};
</script>


<style lang="less">
@import "../../../static/css/common.less";
.taskBox {
  .taskList {
    padding: 0% 5%;
    // padding-top: 100px * @rpx;
    ul {
      width: 100%;
      height: 100%;
      overflow: hidden;
      li {
        position: relative;
        padding: 20*@rpx;
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
  .taskNew ul li:nth-of-type(1) div p {
    background: url(../../assets/dots.png) no-repeat left center;
    background-size: 7px 7px;
    padding-left: 12px;
  }
}
</style>
