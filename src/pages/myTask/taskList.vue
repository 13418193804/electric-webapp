<template>
  <div class="taskBox">
      <cheader title="我的任务" @leftClick="leftClick"></cheader>
    <!-- <header><div class="back"><i class="icon"></i></div>我的任务</header> -->
    <ul class="flex taskTabs">
      <li v-for="(item,index) in tabs" :key="index" :class="{titilebCur:index == active}" @click="handelClick(index)">{{item.titile}}</li>
    </ul>
    <!-- 新任务 -->
    <div class="taskList" v-if="active == 0">
        <div class="md-example-child md-example-child-scroll-view md-example-child-scroll-view-1">
            <md-scroll-view
                ref="scrollView"
                :scrolling-x="false"
                @refreshing="$_onRefresh"
            >
            <md-scroll-view-refresh
                slot="refresh"
                slot-scope="{ scrollTop, isRefreshActive, isRefreshing }"
                :scroll-top="scrollTop"
                :is-refreshing="isRefreshing"
                :is-refresh-active="isRefreshActive"
            ></md-scroll-view-refresh>
            <ul>
                <li v-for="(item,index) in list " :key="index" class="scroll-view-list" @click="getDetails()">
                    <span class="dots"></span>
                    <div>
                        <p> 2018年8月10日 12:00:00</p>
                        <h4> 报警：<span>深南达到香蜜</span></h4>
                        <span class="tag">自动排单</span>
                    </div>
                </li>
            </ul>
            </md-scroll-view>
        </div>
    </div>
    <!-- 处理中 -->
    <div class="taskList" v-if="active == 1">
        <ul>
            <li v-for="(item,index) in 1 " :key="index">
                <div>
                    <p> 订单时间</p>
                    <h4> 报警：深南达到香蜜</h4>
                    <h4> 备注：<span>回公司</span></h4>
                </div>
            </li>
        </ul>
    </div>
    <!-- 处理完毕 -->
    <div class="taskList" v-if="active == 2">
     <ul>
            <li v-for="(item,index) in 5 " :key="index">
                <div>
                    <p> 订单时间</p>
                    <h4> 报警：<span>深南达到香蜜</span></h4>
                    <h4> 问腿：<span>线路问题</span></h4>
                    <h4> 备注：<span>回公司</span></h4>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import {ScrollView, ScrollViewRefresh} from 'mand-mobile'
import cheader from '../../components/header'

export default {
  name: 'scroll-view-demo-0',
  components: {
      cheader,
    [ScrollView.name]: ScrollView,
    [ScrollViewRefresh.name]: ScrollViewRefresh,
  },
  data () {
    return {
      active: 0,
      tabs: [{titile: '新任务'}, {titile: '处理中'}, {titile: '处理完毕'}],
      quoteData: [], // data
      quoteList: [{
        beenQuote: [{text: '新任务'}, {text: '2019男装潮流冷帽'}],
        noQuote: [{text: '处理中'}],
        prohibituote: [{text: '处理完毕'}, {text: '潮流潮流潮流潮流潮流潮流潮流潮流潮流'}]
      }],
      list: 3,
    }
  },
  mounted () {
    window.ScrollViewTrigger1 = () => {
      this.$refs.scrollView.triggerRefresh()
    }
  },
  methods: {
    leftClick(){
        this.$router.push('/')
    },
    handelClick (index) {
      this.active = index
      if (this.active === 0) {
        this.quoteData = this.quoteList[0].beenQuote
      }
      if (this.active === 1) {
        this.quoteData = this.quoteList[0].noQuote
      }
      if (this.active === 2) {
        this.quoteData = this.quoteList[0].prohibituote
      }
    },
    $_onRefresh() {
      // async data
      setTimeout(() => {
        this.list += 5
        this.$refs.scrollView.finishRefresh()
      }, 2000)
    },
    getDetails(){
        this.$router.push({name:'taskDetails'})
    }
  }
}
</script>


<style lang="less">
@import '../../../static/css/common.less';
.taskBox{
    .taskList{
        padding: 5%;padding-top:100px*@rpx;
        ul{
            width: 100%;
            height: 100%;
            overflow: hidden;
            li{
                position: relative;padding:30px*@rpx 0;border-top: 2px*@rpx solid #eee;padding-left:20*@rpx;
                div{
                    p{
                        font-size: 26px*@rpx;width: 80%;height: 40px*@rpx;
                    }
                    h4{
                        font-size: 24px*@rpx;width: 80%;height: 40px*@rpx;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        
                    }
                    span.tag{
                            font-size: 20px*@rpx;position: absolute;right: 0;top: 30px*@rpx;
                            border: 1px solid #4699ff;border-radius: 50px; padding: 0 6px;
                        }
                    
                }
                .dots{
                    width: 5px;height: 5px;border-radius: 50%;background: #4699ff;position: absolute;
                    left: 0;top:44*@rpx;
                }
            }
        }
    }
}

</style>
