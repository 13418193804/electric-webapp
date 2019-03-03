<template>
  <div class="details">
    <cheader title="我的设备" @leftClick="leftClick"></cheader>
    <div class="details-declare">
        <div class="flex details-declare-list">
            <div class="div">设备名称：<span>{{detailsData.device_info.device_name}}</span></div>
            <div class="div">设备编号：<span>{{detailsData.device_info.device_sn}}</span></div>
        </div>
        <div class="flex details-declare-list">
            <div class="div">位置：<span>{{detailsData.device_info.location}}</span></div>
        </div>
         <div class="flex details-declare-list">
            <div class="div">坐标：<span>{{detailsData.device_info.longitude}}</span></div>
            <div class="div">调用手机</div>
        </div>
    </div>
    <!--  -->
    <div class="details-type">
      <div class="details-type-titile"><h4>IO状态</h4></div>
      <div class="details-type-content">
          <div class="details-type-content-list">
            <div class="details-type-content-list-item" v-for="(item,index) in typeData" :key="index" @click="handelType(item,index)">
              <span>{{item.name}}</span>
              <i class="iconfont" :class="[item.auto==true?'icon-danxuanxuanzhong':'icon-danxuan-weixuan']"></i>
            </div>
              <!-- <i class="iconfont" v-for="(item,index) in statasData" :key="index" 
              :class="[item.auto==true?'icon-danxuanxuanzhong':'icon-danxuan-weixuan']"></i> -->
            <!-- </span>  -->
          </div>
          <!-- <div class="details-type-content-list">
            <span>B1</span> <span>B2</span> <span>B3</span>
          </div> -->
      </div>
      <div class="details-type-set">设置</div>
    </div>
    <div class="details-type">
      <div class="details-type-titile"><h4>温度</h4></div>
      <div class="flex details-type-temp">
         <div>预警高温：<span>68</span></div>
         <div>预警低温：<span>68</span></div>
      </div>
      <div class="details-type-set">设置</div>
    </div>
    <div class="details-type">
      <div class="details-type-titile"><h4>电源控制</h4></div>
      <div class="details-type-content">
          <div class="details-type-content-list">
            <span>A1</span> <span>A3</span> <span>A3</span>
          </div>
          <div class="details-type-content-list">
            <span>B1</span> <span>B2</span> <span>B3</span>
          </div>
      </div>
      <div class="details-type-set">设置</div>
    </div>
    <!-- button -->
    <div class="footBtb" @click="getRecord()">
      设备维护记录
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
      typeData: [{name: 'A1',auto:false},{name:'A2',auto:true}],
      //typeData: [],  别名
      statasData: [], // 状态
      deviceId:'',
      detailsData:[]
    };
  },
  name: 'switch-demo',
  components: {
    [Switch.name]: Switch,
    // 定义组件
    cheader
  },
  created() {
    this.getDataList()
    //this.getAliasData()
    this.getStatusData()
  },
  mounted() {
  },
  methods: {
    // 事件处理方法
    leftClick(){
        this.$router.push('/')
    },
    handelType(item,index){
      console.log('item',item)
      if (item.auto === true) {
        item.auto = false
      } else {
        item.auto = true
      }
    },
     /* api */
    getDataList(){
      let deviceId = this.$route.query.deviceId
        this.service.httpRequest({
            url: "/aapi/devicedetail",
            methods: "get",
            data: {
              token:this.$store.getters.getToken,
              id: deviceId
            }
        }).then(res => {
            if(res.data.status === '00'){
               this.detailsData = res.data
               console.log('设备详情',this.detailsData)
            } else{
                this.$dialog.alert({
                    content:res.msg,
                    confirmText: '确定',
                })
            }
        });
    },
    //io
    getAliasData(){
        this.service.httpRequest({
            url: "/aapi/getalias",
            methods: "get",
            data: {
              token:this.$store.getters.getToken,
            }
        }).then(res => {
            if(res.data.status === '00'){
              this.typeData = res.data
              let list = []
              // this.typeData.forEach(item => {
              //   list.push(Object.assign({}, item, {auto: item.false}))
              // })
              // this.typeData = list
               console.log('别名',this.typeData)
            } else{
                this.$dialog.alert({
                    content:res.msg,
                    confirmText: '确定',
                })
            }
        });
    },
    getStatusData(){
        this.service.httpRequest({
            url: "/aapi/getalias",
            methods: "get",
            data: {
              token:this.$store.getters.getToken,
            }
        }).then(res => {
            if(res.data.status === '00'){
              this.statasData = res.data
               console.log('状态',res.data)
            } else{
                this.$dialog.alert({
                    content:res.msg,
                    confirmText: '确定',
                })
            }
        });
    },
    getRecord(){
      this.$router.push({name: 'equimentRecord'})
    }
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
        width:50%;line-height: 24px;
      }
      &-swich{
        // position: absolute;right: 2px;top: 2px;
        button{
          background: #409EFF;color: #fff;border: none;border-radius: 5px;
        }
      }
    }
  }
  &-type{
    padding: 5%;position: relative;
    &-titile{
      h4{
        width: 160*@rpx;height: 56*@rpx;border-radius: 20px;background: #409EFF;color: #fff;
        line-height: 56*@rpx;text-align: center;
      }
    }
    &-content{
      padding: 20*@rpx 0;
      &-list{
        margin-bottom: 20*@rpx;
        &-item{
          display: inline-block;margin-right:20*@rpx;
          span{
          margin-left: 20*@rpx;
            width: 80*@rpx;display: inline-block;
          }
        }
      }
    }
    &-temp{
      padding: 20*@rpx 0;
      div{
        width: 50%;
      }
    }
    &-set{
      position: absolute;right: 5px;background: #409EFF;color: #fff;border-radius: 4px;
       width: 100*@rpx;height: 50*@rpx;line-height: 50*@rpx;text-align: center;
    }
  }
}
.footBtb{
  position: fixed;bottom: 0;left: 0;width: 100%;background: #409EFF;color: #fff;text-align: center;line-height: 100*@rpx;
}
</style>
