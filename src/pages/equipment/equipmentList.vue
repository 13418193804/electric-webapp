<template>
  <div>
    <!-- <header><div class="back"><i class="icon"></i></div>我的任务</header> -->
    <ul class="flex taskTabs">
      <li v-for="(item,index) in tabs" :key="index" :class="{titilebCur:index == active}" @click="handelClick(index)">{{item.titile}}</li>
    </ul>
    <!-- 物料申请 -->
    <div class="material" v-if="active == 0">
        <div class="material-list">
            <div class="material-list-dots"><i></i> 2018-12-11 12:22:22</div>
            <div>关联任务单：<span>2018297836263</span></div>
            <div class="flex material-list-btn">A0997-C征集上海市；保护卡个</div>
            <div class="flex material-list-operation">
                <div class="tag">申请物料</div>
                <div>状态：<span>等待领取</span></div>
            </div>
        </div>
    </div>
    <!-- 物料备用 -->
    <div class="material" v-if="active == 1">
       2
    </div>
    <!-- 物料使用记录 -->
    <div class="material" v-if="active == 2">
        3
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'HelloWorld',
  data () {
    return {
      active: 0,
      tabs: [{titile: '设备列表'}, {titile: '在线设备'}, {titile: '离线设备'}],
      quoteData: [] // data
      
    }
  },
  mounted () {
      
  },
  methods: {
    handelClick (index) {
      this.active = index
      if (this.active === 0) {
      }
      if (this.active === 1) {
      }
      if (this.active === 2) {
      }
    }
  }
}
</script>

<style lang="less">
@import '../../../static/css/common.less';
.taskTabs{
    display: flex;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    height: 80px*@rpx;line-height: 80px*@rpx;z-index: 999;
    li{
        flex: 1;text-align: center;border-right:1px solid #eee;border-bottom:1px solid #eee;
    }
    .titilebCur{
         color: #fff;background: #0f91ef;
    }
}
.material{
    padding: 5%;margin-top:100*@rpx;
    &-list{
        div{
            margin-bottom: 10*@rpx;
        }
        &-dots{
            i{
                 width: 5px;height: 5px;border-radius: 50%;background: #0f91ef;display: inline-block;
            }
        }
        &-btn{
            border:1px solid #7e7e7e;line-height: 56*@rpx; padding: 0 5px;border-radius: 5px;margin-bottom: 15*@rpx!important;
        }
        &-operation{
            justify-content:space-between;align-items:center;
            .tag{
                font-size: 20px*@rpx;border: 1px solid #0f91ef;border-radius: 50px; padding: 0 6px;
            }
        }

    }
}

</style>
