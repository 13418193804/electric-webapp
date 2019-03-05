<template>
  <div class="details">
    <cheader title="我的任务" @leftClick="leftClick"></cheader>
    <div class="details-declare">
        <div class="flex details-declare-list">
            <div class="left"><i class="icon"><img src="../../assets/01.png" alt=""></i>报警：</div>
            <div class="right">深圳大道深圳大道深圳大道深圳大道深圳大道深圳大道深圳大道</div>
            <div class="details-declare-list-swich">
              <button @click="getProgress()">处理</button>
            </div>
        </div>
        <div class="flex details-declare-list">
            <div class="left"><i class="icon"><img src="../../assets/02.png" alt="" class="A"></i></div>
            <div class="right">系统自动派单 <span>2018年8月10日 12:00:00</span></div>
        </div>
         <div class="flex details-declare-list">
            <div class="left"><i class="icon"><img src="../../assets/01.png" alt=""></i>报警：</div>
            <div class="right">深圳大道故障</div>
        </div>
        <div class="flex details-declare-list">
            <div class="left">紧急：</div>
            <div class="right">XXX</div>
        </div>
        <div class="flex details-declare-list">
            <div class="left">位置：</div>
            <div class="right">深圳22坐标：xx</div>
        </div>
        
    </div>
    <div class="details-map">
        <mapbox></mapbox>
    </div>
  </div>
</template>

<script>
import cheader from '../../components/header'
import mapbox from '../../components/map'
import {Switch} from 'mand-mobile'

export default {
  data() {
    // 选项 数据
    return {
      isActive:''
    };
  },
  name: 'switch-demo',
  components: {
    [Switch.name]: Switch,
    // 定义组件
    cheader,
    mapbox
  },

  methods: {
    // 事件处理方法
    leftClick(){
        this.$router.go(-1)
    },
    handler(name, active) {
      console.log(`Status of switch ${name} is ${active ? 'active' : 'inactive'}`)
    },
    getProgress() {
      this.$router.push({name: 'taskProgress'})
    }
    
  },
  created() {
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
    
  },
  mounted() {
    
  }
};
</script>

<style lang="less">
@import '../../../static/css/common.less';
.details{
  width: 100%;height: 100%;
  &-declare{
    width: 90%;margin: 45*@rpx auto 0*@rpx;
    &-list{
      flex-wrap: wrap;background:#eeeeef;padding:0 5px;position: relative;
      font-size:24*@rpx;border-bottom: 1px solid #fff;
      .left{
        width: 160*@rpx;text-align: right;line-height: 30px;
      }
      .right{
        width:430*@rpx;line-height: 30px;
      }
      &-swich{
        position: absolute;right: 3px;top: 6px;
        button{
          background: #2680f0;color: #fff;border: none;border-radius: 5px;width:100*@rpx;height: 50*@rpx;font-size: 24*@rpx;
        }
      }
    }
  }
  &-map{
    width: 90%;margin: 60*@rpx auto 0*@rpx;
  }
}
</style>
