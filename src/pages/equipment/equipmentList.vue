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
            <div class="equipment-top-search-icon"><i class="iconfont icon-sousuo"></i></div>
        </div>
        <div>
            <i class="iconfont icon-saoyisao"></i>
        </div>
    </div>
    <ul class="flex taskTabs" style="top:100px">
      <li v-for="(item,index) in tabs" :key="index" :class="{titilebCur:index == active}" @click="handelClick(index)">{{item.titile}}</li>
    </ul>
    <!-- 设备列表 -->
    <div class="equipment-list" v-if="active == 0" >
        <div class="equipment-list-box" v-for="(item,index) in eqData" :key="index" @click="getDetails()">
            <div class="flex flex-pack-justify">
                <div class="equipment-list-bold">设备名称：{{item.device_name}}</div>
                <div>设备编号：{{item.device_sn}}</div>
            </div>
            <div>最后一次维护时间：{{item.last_maintenance_time}}</div>
            <div>维护次数：{{item.maintenance_count}}</div>
            <div>位置：{{item.location}}</div>
            <div>坐标：深蓝色</div>
            <div>扫码</div>
        </div>
        
    </div>
    <!-- 设备备用 -->
    <div class="material" v-if="active == 1">
       邓员峰
    </div>
    <!-- 设备使用记录 -->
    <div class="material" v-if="active == 2">
        潘兰华
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
      eqData: [] // 设备列表
      
    }
  },
  mounted () {
      this.getDataList()
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
    /* api */
    getDataList(){
        this.service.httpRequest({
            url: "/aapi/device",
            methods: "get",
            data: {token:this.$store.getters.getToken}
        }).then(res => {
            if(res.data.status === '00'){
               this.eqData = res.data.data
               console.log('设备列表',res.data)
            } else{
                this.$dialog.alert({
                    content:res.msg,
                    confirmText: '确定',
                })
            }
        });
    },
    getDetails(){
        this.$router.push({name: 'equipmentDetails'})
    }
  }
}
</script>

<style lang="less">
@import '../../../static/css/common.less';
// 设备
.equipment{
    &-top{
        width: 90%; margin: 30*@rpx auto;height: 80*@rpx;justify-content:space-between;
        &-search{
            width: 75%;position: relative;
            .md-input-item .md-input-item-control .md-input-item-fake, .md-input-item .md-input-item-control .md-input-item-input{
                border:1px solid #eee;border-radius: 5px;height: 35px;
            }
            &-icon{
                position: absolute;right: 0;width: 30px;height: 30px;top: 0;line-height: 35px;
            }
        } 
    }
    &-list{
        width: 100%;padding:0 5%;margin-top:50px;
        &-box{
            border-bottom:1px solid #4699ff;padding-bottom:15px;margin-bottom: 10px;
            &-bold{
                font-weight: bold;
            }
            div{
                color: #999;
            }
        }
        &-box:last-child{
            border:none;
        }
    }
}

</style>
