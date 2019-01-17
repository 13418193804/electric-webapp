<template>
  <div class="taskBox">
    <!-- <header>我的任务</header> -->
    <ul class="flex taskTabs">
      <li v-for="(item,index) in tabs" :key="index" :class="{titilebCur:index == active}" @click="handelClick(index)">{{item.titile}}</li>
    </ul>
    <!-- 已报价 -->
    <div class="taskList" v-if="active == 0">
        <ul>
            <li>
                <div>
                    <p> 2018年8月10日 12:00:00</p>
                    <h4> 报警：深南达到香蜜</h4>
                    <span>自动排单</span>
                </div>
            </li>
            <li>
                <div>
                    <p> 2018年8月10日 12:00:00</p>
                    <h4> 报警：深南达到香蜜报警：深南达到香蜜报警：深南达到香蜜</h4>
                    <span>自动排单</span>
                </div>
            </li>
        </ul>
    </div>
    <!-- 处理中 -->
    <div class="taskList" v-if="active == 1">
     2
    </div>
    <!-- 处理完毕 -->
    <div class="taskList" v-if="active == 2">
     3
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      active: 0,
      tabs: [{titile: '新任务'}, {titile: '处理中'}, {titile: '处理完毕'}],
      quoteData: [], // data
      quoteList: [{
        beenQuote: [{text: '新任务'}, {text: '2019男装潮流冷帽'}],
        noQuote: [{text: '处理中'}],
        prohibituote: [{text: '处理完毕'}, {text: '潮流潮流潮流潮流潮流潮流潮流潮流潮流'}]
      }]
    }
  },
  mounted () {
    this.quoteData = this.quoteList[0].beenQuote
  },
  methods: {
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
    }
  }
}
</script>

<style lang="less">
@import '../../../static/css/common.less';
/* header */
  header{
    width: 100%;height: 80px*@rpx;background: #fff;text-align: center;line-height: 80px*@rpx;color: #25487e;font-size: 32px*@rpx;
    font-weight: bold;
}
.taskBox{
    .taskTabs{
       height: 80px*@rpx;border-bottom:2px solid #e7e7e7;line-height: 80px*@rpx;
    //    padding: 0 3%;
       li{
            flex: 1;text-align: center;
        }
        .titilebCur{
            border-bottom:2px solid #fff; color: #284b7c;background: #fff;
        }
    }
}
.taskList{
    padding: 5%;
    ul{
        li{
            position: relative;padding:30px*@rpx 0;border-top: 2px*@rpx solid #eee;
            p{
                font-size: 26px*@rpx;width: 80%;height: 40px*@rpx;
            }
            h4{
                font-size: 24px*@rpx;width: 80%;height: 40px*@rpx;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            span{
                font-size: 24px*@rpx;    position: absolute;right: 0;top: 30px*@rpx;
            }
        }
    }
}
</style>
