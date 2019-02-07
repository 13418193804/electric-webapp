<template>
  <div class="details">
    <cheader title="维修记录" @leftClick="leftClick"></cheader>
    <div class="details-declare">
        <div class="flex details-declare-list">
            <div class="div">设备名称：<span>主控电源</span></div>
            <div class="div">设备编号：<span>100101001</span></div>
        </div>
        <div class="flex details-declare-list">
            <div class="div">位置：<span>深圳大道啥事吧</span></div>
        </div>
        <div class="flex details-declare-list">
            <div class="div">坐标：<span>62.3434.232</span></div>
        </div>
    </div>
    <!--  -->
    <div class="details-content">
      <div class="details-content-box">
        <div class="details-content-box-text">处理时间 <span>2018-19-22</span></div>
        <div class="details-content-box-text">问题原因 <span>线路故障</span></div>
        <div class="details-content-box-text">维护人 <span>周猩猩</span></div>
        <div class="details-content-box-text">备注 <span>线路进水</span></div>
        <div>

        </div>
      </div>
    </div>
    <!--  -->
    <div class="details-record">
      <h2>维护记录</h2>
      <ul>
        <li>
          <div><i class="dots"></i> 2018年8月9日 12:22:22</div>
          <div>报警：<span>深圳大道丽莎</span> </div>
        </li>
      </ul>
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
      isCheack: 0,
      checkData: [{name:'线路故障'},{name: '元气损坏'},{name: '其他'}],
      typeData: [{name: 'A1'},{name:'A2'}]
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
        this.$router.go(-1)
    },
    handelType(index){
      this.isCheack = index
      console.log('index',index,'ischeack', this.isCheack)
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
        width:50%;line-height: 30px;
      }
      &-swich{
        // position: absolute;right: 2px;top: 2px;
        button{
          background: #409EFF;color: #fff;border: none;border-radius: 5px;
        }
      }
    }
  }
  &-content{
    width: 90%;margin: 60*@rpx auto;
    &-box{
      border: 1px dashed #ccc;border-radius: 6px;padding: 25*@rpx;
      &-text{
        line-height: 46*@rpx;font-size: 24*@rpx;
      }
    }
  }
  &-record{
    width: 90%;margin: 0 auto;
    h2{
      padding-left: 30*@rpx; font-size: 36*@rpx;font-weight: bold; color: #409EFF;line-height: 60*@rpx;border-bottom: 1px solid #409EFF;
    }
    ul{
      padding: 30*@rpx;
      li{
        div{
          line-height: 52*@rpx;
          // .dots{
          //   width: 5px;height: 5px;border-radius: 50%;background: #4699ff;position: absolute;
          //   left: 0;top:44*@rpx;
          // }
        }
        // :nth-of-type(1){
        //   padding-left: 50*@rpx;
        // }
      }
    }
  }
}
</style>
