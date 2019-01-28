<template>
  <div class="details">
    <cheader title="我的任务" @leftClick="leftClick"></cheader>
    <div class="details-declare">
        <div class="flex details-declare-list">
            <div class="div div1">报警：</div>
            <div class="div">深圳大道</div>
            <div class="details-declare-list-swich">
              <!-- <button @click="getProgress()">处理</button> -->
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
            <div class="div div1">报警：</div>
            <div class="div">深圳大道故障</div>
            <div class="div div1">紧急：</div>
            <div class="div">XXX</div>
            <div class="div div1">位置：</div>
            <div class="div">深圳22坐标：xx</div>
        </div>
        
    </div>
    <div class="details-result">
        <div class="flex details-result-cause">
            <div>处理结果</div>
            <div>
              <select name="" id="">
                <option value="ss">处理</option>
              </select>
            </div>
        </div>
        <div class="details-result-cause">
            <div class="flex details-result-cause-check">
                <span v-for="(item,index) in checkData" :key="index" 
                @click="handelCheck(index)" :class="{cur:index == active}">
                <i class="iconfont icon-choose-line"></i>{{item.name}}</span>
            </div>
        </div>
        <div class="flex details-result-cause">
            <div>备注：</div>
            <div>
              <md-input-item
                ref="input0"
                type="textarea"
                :maxlength="200"
              ></md-input-item>
            </div>
        </div>
        <div class="details-result-cause">
            <div>上传：</div>
            
        </div>
    </div>
  </div>
</template>

<script>
import cheader from '../../components/header'
import {Switch} from 'mand-mobile'

export default {
  data() {
    // 选项 数据
    return {
      isActive:'',
      active: 0,
      checkData: [{name:'线路故障'},{name: '元气损坏'},{name: '其他'}]
    };
  },
  name: 'switch-demo',
  components: {
    [Switch.name]: Switch,
    // 定义组件
    cheader
  },

  methods: {
    // 事件处理方法
    leftClick(){
        this.$router.push('/')
    },
    handelCheck(index){
      this.active = index
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
      font-size:24*@rpx;
      .div{
        width:69%;border-bottom: 1px solid #fff;line-height: 24px;
      }
      .div1{
        width: 20%;text-align: right;
      }
      &-swich{
        // position: absolute;right: 2px;top: 2px;
        button{
          background: #409EFF;color: #fff;border: none;border-radius: 5px;
        }
      }
    }
  }
  &-result{
    padding: 5%;
    &-cause{
      margin-bottom: 10*@rpx;
      div{
        line-height: 30px;
      }
      &-check{
        span{
          display: inline-block;width: 50%;flex-wrap: wrap;
        }
        .cur{
          color: #409EFF;
        }
      }
    }
  }
}
</style>
