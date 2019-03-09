<template>
  <div class="details">
    <cheader title="我的任务" @leftClick="leftClick"></cheader>
    <div class="details-declare">
        <div class="flex details-declare-list">
            <div class="left"><i class="icon"><img src="../../assets/01.png" alt=""></i>报警：</div>
            <div class="right">{{detailsData.location||''+detailsData.device_name||''+detailsData.fault||''}}</div>
            <div class="details-declare-list-swich" v-if="detailsData.status==0">
              <button @click="getProgress(detailsData)">处理</button>
            </div>
            <div class="details-declare-list-swich" v-if="detailsData.status==1">
              <button>处理中</button>
            </div>
            <div class="details-declare-list-swich" v-if="detailsData.status==2">
              <button>已处理</button>
            </div>
        </div>
        <div class="flex details-declare-list auto">
            <div class="left"><i class="icon"><img src="../../assets/02.png" alt="" class="A"></i>{{detailsData.type == 0 ?'系统自动派单':'手动派单'}}</div>
            <div class="right"> <span>{{detailsData.create_time}}</span></div>
        </div>
        <div class="flex details-declare-list">
            <div class="left">紧急：</div>
            <div class="right">{{detailsData.solution||''}}</div>
        </div>
        <div class="flex details-declare-list auto">
            <div class="left">位置：{{detailsData.location||''}}</div>
            <div class="right">坐标：{{detailsData.longitude||'' }} {{detailsData.latitude||''}}</div>
        </div>
        <div class="flex details-declare-list">
        </div>
    </div>
    <div class="details-map">
        <mapbox v-if="flag" :detailsData="detailsData" ref="map"></mapbox>
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
      isActive:'',
      flag:false,
      detailsData:[]
    };
  },
  name: 'switch-demo',
  components: {
    [Switch.name]: Switch,
    // 定义组件
    cheader,
    mapbox
  },
  created() {
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted() {

    this.getDataList()
    
  },
  methods: {
    // 事件处理方法
    leftClick(){
        this.$router.go(-1)
    },
    handler(name, active) {
      console.log(`Status of switch ${name} is ${active ? 'active' : 'inactive'}`)
    },
    getProgress(detailsData) {
      this.$router.push({
        name: 'taskProgress',
        params: {
          detailsData:detailsData
        }
      })
    },
    /* API */
    getDataList(){
      // let id = this.$route.query.id
      let id = this.$route.params.id
      console.log('详情',this.$route.params.id)
        this.service.httpRequest({
            url: "/aapi/workorderdetail",
            methods: "get",
            data: {
              token:this.$store.getters.getToken,
              id: id
            }
        }).then(res => {
            if(res.returnStatus){
               this.detailsData = res.data.workorder
               this.flag = true

               this.$nextTick(()=>{
                this.$refs.map.mapSetIcon(this.detailsData.latitude,this.detailsData.longitude)
               })

            } else{
                this.$dialog.alert({
                    content:res.msg,
                    confirmText: '确定',
                })
            }
        });
    },

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
        position: absolute;right: 3px;top: 4px;
        button{
          background: #2680f0;color: #fff;border: none;border-radius: 5px;width:100*@rpx;height: 50*@rpx;font-size: 24*@rpx;
        }
      }
    }
    .auto{  
      .left{
        width: 230*@rpx!important;margin-right: 10*@rpx;
      }
      .right{
        width: 380*@rpx!important;
      }
    }
  }
  &-map{
    width: 90%;margin: 60*@rpx auto 0*@rpx;
  }
}
</style>
