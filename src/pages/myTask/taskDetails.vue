<template>
  <div class="details">
    <cheader title="我的任务" @leftClick="leftClick"></cheader>
    <div class="details-declare">
        <div class="flex details-declare-list">
            <div class="left"><i class="icon"><img src="../../assets/01.png" alt=""></i>报警：</div>
            <div class="right">{{detailsData.fault||''}}</div>
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
            <div class="right">{{detailsData.solution}}</div>
        </div>
        <div class="flex details-declare-list">
            <div class="left"><i class="icon"><i class="iconfont icon-dizhi1"></i></i>地址：</div>
            <div class="right" style="line-height: 70px;"> {{detailsData.location||''}}</div>
        </div>
        <div class="flex details-declare-list">
            <div class="left" style="text-align: right;">坐标：</div>
            <div class="right"> {{detailsData.longitude||'' }} {{detailsData.latitude||''}}</div>
        </div>
    </div>
    <div class="details-map">
        <mapbox v-if="flag" :detailsData="detailsData" ref="map"></mapbox>
    </div>
  </div>
</template>

<script>
import cheader from "../../components/header";
import mapbox from "../../components/map";
import { Switch } from "mand-mobile";

export default {
  data() {
    // 选项 数据
    return {
      isActive: "",
      flag: false,
      detailsData: []
    };
  },
  name: "switch-demo",
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
    this.getDataDetail();
  },
  methods: {
    // 事件处理方法
    leftClick() {
      this.$router.push({
        name: "myTask",
        query: { active: this.detailsData.status }
      });
    },
    handler(name, active) {
      console.log(
        `Status of switch ${name} is ${active ? "active" : "inactive"}`
      );
    },
    getProgress(detailsData) {
      this.$router.push({
        name: "taskProgress"
      });
    },
    /* API */
    getDataDetail() {
      this.service
        .httpRequest({
          url: "/aapi/workorderdetail",
          methods: "get",
          data: {
            token: this.$store.getters.getToken,
            id: this.$store.getters.getTaskId
          }
        })
        .then(res => {
          if (res.returnStatus) {
            this.detailsData = res.data.workorder;
            this.flag = true;
            this.$nextTick(() => {
              this.$refs.map.mapSetIcon(
                this.detailsData.latitude,
                this.detailsData.longitude
              );
            });
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    }
  }
};
</script>

<style lang="less">
@import "../../../static/css/common.less";
</style>
