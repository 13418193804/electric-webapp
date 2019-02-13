<template>
  <div class="details">
    <cheader title="我的任务" @leftClick="leftClick"></cheader>
    <div class="details-declare">
        <div class="flex details-declare-list">
            <div class="div div1"><i class="iconfont icon-xianshi_jinggao"></i>报警：</div>
            <div class="div">深圳大道</div>
            <div class="details-declare-list-swich">
              <button @click="getProgress()">处理</button>
              <!-- <div class="md-example-child md-example-child-switch md-example-child-switch-0">
                <md-switch
                    v-model="isActive"
                    @change="handler('switch0', isActive, $event)"
                  ></md-switch>
                </div> -->
            </div>
        </div>
        <div class="flex details-declare-list">
            <div class="div div1">A</div>
            <div class="div">系统自动派单 <span>2018年8月10日 12:00:00</span></div>
        </div>
         <div class="flex details-declare-list">
            <div class="div div1"><i class="iconfont icon-xianshi_jinggao"></i>报警：</div>
            <div class="div">深圳大道故障</div>
            
        </div>
        <div class="flex details-declare-list">
            <div class="div div1">紧急：</div>
            <div class="div">XXX</div>
        </div>
        <div class="flex details-declare-list">
            <div class="div div1">位置：</div>
            <div class="div">深圳22坐标：xx</div>
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
        this.$router.push('/')
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
    width: 90%;margin: 60*@rpx auto 0*@rpx;
    &-list{
      flex-wrap: wrap;background:#eee;padding:0 5px;position: relative;
      font-size:24*@rpx;border-bottom: 1px solid #fff;
      .div{
        width:69%;line-height: 30px;
      }
      .div1{
        width: 19%;text-align: right;
      }
      &-swich{
        position: absolute;right: 3px;top: 6px;
        button{
          background: #409EFF;color: #fff;border: none;border-radius: 5px;
        }
      }
    }
  }
}
</style>
