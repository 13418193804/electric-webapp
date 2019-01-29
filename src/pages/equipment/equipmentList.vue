<template>
  <div class="equipment">
    <cheader title="我的设备" @leftClick="leftClick"></cheader>
    <!-- 扫一扫 -->
    <div class="flex equipment-top">
        <div class="equipment-top-search">
            <md-input-item
            ref="input0"
            type="textarea"
            :maxlength="200"
            ></md-input-item>
        </div>
        <div>
            <i class="iconfont icon-saoyisao"></i>
        </div>
    </div>
    <ul class="flex taskTabs" style="top:100px">
      <li v-for="(item,index) in tabs" :key="index" :class="{titilebCur:index == active}" @click="handelClick(index)">{{item.titile}}</li>
    </ul>
    <!-- 设备申请 -->
    <div class="material" v-if="active == 0">
        <div class="material-list" @click="getDetails()">
            <div class="material-list-dots"><i></i> 2018-12-11 12:22:22</div>
            <div>关联任务单：<span>2018297836263</span></div>
            <div class="flex material-list-btn">A0997-C征集上海市；保护卡个</div>
            <div class="flex material-list-operation">
                <div class="tag">申请设备</div>
                <div>状态：<span>等待领取</span></div>
            </div>
        </div>
    </div>
    <!-- 设备备用 -->
    <div class="material" v-if="active == 1">
       2
    </div>
    <!-- 设备使用记录 -->
    <div class="material" v-if="active == 2">
        3
    </div>
  </div>
</template>

<script>
import cheader from '../../components/header'

export default {
  name: 'HelloWorld',
  components: {
      cheader
  },
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
    leftClick(){
        this.$router.push('/')
    },
    handelClick (index) {
      this.active = index
      if (this.active === 0) {
      }
      if (this.active === 1) {
      }
      if (this.active === 2) {
      }
    },
    getDetails(){
        this.$router.push({name: 'equipmentDetails'})
    }
  }
}
</script>

<style lang="less">
@import '../../../static/css/common.less';
.material{
    padding: 5%;margin-top:100*@rpx;
    &-list{
        div{
            margin-bottom: 10*@rpx;
        }
        &-dots{
            i{
                 width: 5px;height: 5px;border-radius: 50%;background: #4699ff;display: inline-block;
            }
        }
        &-btn{
            border:1px solid #7e7e7e;line-height: 56*@rpx; padding: 0 5px;border-radius: 5px;margin-bottom: 15*@rpx!important;
        }
        &-operation{
            justify-content:space-between;align-items:center;
            .tag{
                font-size: 20px*@rpx;border: 1px solid #4699ff;border-radius: 50px; padding: 0 6px;
            }
        }

    }
}
// 设备
.equipment{
    &-top{
        width: 90%; margin: 30*@rpx auto;height: 80*@rpx;justify-content:space-between;
        &-search{
            width: 75%;
            .md-input-item .md-input-item-control .md-input-item-fake, .md-input-item .md-input-item-control .md-input-item-input{
                border:1px solid #eee;border-radius: 5px;height: 35px;
            }
        }
        
    }
}

</style>
