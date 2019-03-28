<template>
  <div class="details">
    <cheader title="我的设备" @leftClick="leftClick"></cheader>
    <div class="details-declare">
        <div class="flex details-declare-list">
            <div class="div">设备名称：<span>{{detailsData.device_name}}</span></div>
            <div class="div">设备编号：<span>{{detailsData.device_sn}}</span></div>
        </div>
        <div class="flex details-declare-list">
            <div class="div div1">位置：<span>{{detailsData.location}}</span></div>
        </div>
        <div class="flex details-declare-list">
            <div class="div div1">坐标：<span>{{detailsData.longitude||'' }} {{detailsData.latitude||''}}</span></div>
      <div class="details-type-set" @click="getCurrentPosition">更新</div>
     
        </div>
        <!-- <div class="flex details-declare-list">
            <div class="div div1">调用手机</div>
        </div> -->
    </div>
    <!--  --> 
    <div class="details-type" v-for="(item,index) in detailsData.state" :key="index">
      <div class="details-type-titile" v-if="!item.temperatureType"><h4>{{item.name}}</h4></div>
      <div class="details-type-titile" v-if="item.temperatureType"><h4>{{item.name}}：{{item.temperature}}°</h4></div>
      <div class="details-type-content"  v-if="!item.temperatureType">
    
        <div class="details-type-content-list">
          <div class="details-type-content-list-item" v-for="(items,itemsIndex) in item.list[0]" :key="itemsIndex" @click="handelType(item.id,items,itemsIndex,item.list[0])">
            <span>{{itemsIndex}}</span>
            <i class="iconfont" :class="[items == 1?'icon-danxuanxuanzhong':'icon-danxuan-weixuan']"></i>
          </div>
        </div>
       </div>
       <div v-else class="temperature">
          <span>预警高温：{{item.list[0].highest||0}}°</span>
          <span>预警低温：{{item.list[0].lowest||0}}°</span>
       </div>
      <div class="details-type-set" @click="handelSet(item)">设置</div>
    </div>


      <!-- <div class="details-type-content-list">
            <span>B1</span> <span>B2</span> <span>B3</span>
          </div> -->




    <!-- <div class="details-type">
      <div class="details-type-titile"><h4>温度:</h4></div>
      <div class="flex details-type-temp">
         <div>预警高温：<span>68</span></div>
         <div>预警低温：<span>68</span></div>
      </div>
      <div class="details-type-set">设置</div>
    </div> -->
    <!-- <div class="details-type">
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
    </div> -->
    <!-- button -->
    <div class="footBtb" @click="getRecord()">
      设备维护记录
    </div>

    <!-- 温度弹窗 -->
            <md-landscape v-model="teamperatureModel" :mask-closable="true">
            <div class="apply">
              <div class="flex flex-pack-justify flex-align-center apply-list">
              <div class="apply-prop">预警高温：</div>
                  <md-input-item ref="teamperature" v-model="highest"  type="textarea" :maxlength="10" placeholder="请输入设备温度"></md-input-item>
              </div>
                <div class="flex flex-pack-justify flex-align-center apply-list">
                  <div class="apply-prop">预警低温：</div>
                  <md-input-item ref="teamperature" v-model="lowest"  type="textarea" :maxlength="10" placeholder="请输入设备温度"></md-input-item>
              </div>
                   <div class="footer-btn bottom-btn">
                    <button class="btn btn-blue" @click="doUpdateTeamperature()">确定</button>
                </div>
            </div>
            </md-landscape>


               <!-- 温度弹窗 -->
            <md-landscape v-model="locationModel" :mask-closable="true">
            <div class="apply">
              <div class="flex flex-pack-justify flex-align-center apply-list">
              <div class="apply-prop">地址：</div>
                  <md-input-item v-model="location"   type="textarea" :maxlength="70" placeholder="请输入设备详细地址"></md-input-item>
              </div>
              <div class="flex  flex-align-center apply-list">
              
              <div class="apply-prop">
                  经纬度：
              </div>
              <div>{{point.lng}}，{{point.lat}}</div>
              </div>
              <div></div>
                   <div class="footer-btn bottom-btn">
                    <button class="btn btn-blue" @click="doupdateLocation()">确定</button>
                </div>
            </div>
            </md-landscape>


  </div>
</template>

<script>
import cheader from "../../components/header";
import { Switch } from "mand-mobile";
import { getCurrentPosition } from "../../components/baidu.js";
export default {
  data() {
    // 选项 数据
    return {
      isActive: "",
      active: 0,
      isCheack: 0,
      checkData: [{ name: "线路故障" }, { name: "元气损坏" }, { name: "其他" }],
      // typeData: [{name: 'A1',auto:false},{name:'A2',auto:true}],
      typeData: [], // 别名
      statasData: [], // 状态
      deviceId: "",
      detailsData: [],
      deviceUpdateList: [], //编辑修改时的对象列表[ {IO} , {温度} , {电源} ...]
      selectEnum: [1, 0],
      teamperatureModel: false,
      highest: "",
      lowest: "",
      teamperatureId: null,
      location: "",
      locationModel: false,
      point: {
        lng: "",
        lat: ""
      }
    };
  },
  name: "switch-demo",
  components: {
    [Switch.name]: Switch,
    // 定义组件
    cheader
  },
  created() {
    this.getDataList();
  },
  mounted() {},
  methods: {
    getCurrentPosition() {
      this.$toast.loading("加载定位中...");
      getCurrentPosition((address, point) => {
        // alert(point.lng || "");
        // alert(point.lat || "");
        this.$toast.hide();
        this.locationModel = true;

        this.location = `${address.province || ""}${address.city ||
          ""}${address.district || ""}${address.street ||
          ""}${address.street_number || ""}`;
        // point.lng
        this.point = point;
      });
    },
    doupdateLocation() {
      this.service
        .httpRequest({
          url: "/aapi/modifygps",
          methods: "post",
          data: {
            token: this.$store.getters.getToken,
            id: this.deviceId,
            longitude: this.point.lng,
            latitude: this.point.lat,
            location: this.location
          }
        })
        .then(res => {
          this.locationModel = false;
          if (res.returnStatus) {
            this.$toast.succeed("已更新", 2000, true);
            this.getDataList();
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    },
    // 事件处理方法
    leftClick() {
      this.$router.go(-1);
    },

    handelType(id, item, index, content) {
      let object = this.deviceUpdateList[id] || {};
      object[index] = this.selectEnum[item];
      content[index] = this.selectEnum[item];
      this.deviceUpdateList[id] = object;
      // if (item.auto === true) {
      //   item.auto = false;
      // } else {
      //   item.auto = true;
      // }

      // deviceUpdateList
    },

    doUpdateTeamperature() {
      this.devicedetail({
        token: this.$store.getters.getToken,
        id: this.deviceId,
        type: this.teamperatureId,
        highest: this.highest, //温度
        lowest: this.lowest //温度
      });
      this.teamperatureModel = false;
    },
    // 设置
    handelSet(item) {
      if (item.temperatureType) {
        this.teamperatureModel = true;
        this.highest = item.list[0].highest;
        this.lowest = item.list[0].lowest;
        this.teamperatureId = item.id;
      } else {
        this.devicedetail(
          Object.assign(
            {
              token: this.$store.getters.getToken,
              id: this.deviceId,
              type: item.id
            },
            this.deviceUpdateList[item.id]
          )
        );
      }
    },
    // 发送指令接口
    devicedetail(params) {
      // id
      // type
      // teamperature

      this.$toast.loading("加载中...");
      this.service
        .httpRequest({
          url: "/aapi/devicedetail",
          methods: "post",
          data: params
        })
        .then(res => {
          this.$toast.hide();
          if (res.returnStatus) {
            this.$toast.succeed("已发送", 2000, true);
            this.getDataList();
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    },
    /* api */
    getDataList() {
      this.deviceId = this.$route.query.deviceId;
      this.service
        .httpRequest({
          url: "/aapi/devicedetail",
          methods: "get",
          data: {
            token: this.$store.getters.getToken,
            id: this.deviceId
          }
        })
        .then(res => {
          if (res.returnStatus) {
            this.detailsData = res.data.device_info;
            this.detailsData.state = this.detailsData.state.map(item => {
              return Object.assign(item, {
                temperatureType: typeof item.temperature == "string"
              });
            });

            //  this.typeData = res.data.device_info.state[0].list
            //  let dataList = res.data.device_info.state[0].list
            //  dataList.map((item, i) => {
            //     console.log('1')
            //     var array = Object.keys(item).map(function(el){
            //     console.log('2',item,el)
            //     return item[el]
            //     });
            //     console.log('3',array)
            //  });
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    },

    /* end */
    getRecord() {
      this.$router.push({
        name: "equimentRecord",
        query: {
          deviceId: this.deviceId
        }
      });
    }
  }
};
</script>

<style lang="less">
@import "../../../static/css/common.less";
.details {
  width: 100%;
  height: 100%;
  &-declare {
    width: 90%;
    margin: 60 * @rpx auto 0 * @rpx;
    &-list {
      flex-wrap: wrap;
      background: #eee;
      padding: 0 5px;
      position: relative;
      font-size: 24 * @rpx;
      .div {
        width: 50%;
        line-height: 24px;
      }
      .div1 {
        width: 100%;
      }
      &-swich {
        // position: absolute;right: 2px;top: 2px;
        button {
          background: #409eff;
          color: #fff;
          border: none;
          border-radius: 5px;
        }
      }
    }
  }
  &-type {
    padding: 5%;
    position: relative;
    &-titile {
      h4 {
        width: 160 * @rpx;
        height: 56 * @rpx;
        border-radius: 20px;
        background: #409eff;
        color: #fff;
        line-height: 56 * @rpx;
        text-align: center;
      }
    }
    &-content {
      padding: 20 * @rpx 0;
      &-list {
        margin-bottom: 20 * @rpx;
        &-item {
          display: inline-block;
          margin-right: 20 * @rpx;
          span {
            margin-left: 20 * @rpx;
            width: 80 * @rpx;
            display: inline-block;
          }
        }
      }
    }
    &-temp {
      padding: 20 * @rpx 0;
      div {
        width: 50%;
      }
    }
    &-set {
      position: absolute;
      right: 5px;
      background: #409eff;
      color: #fff;
      border-radius: 4px;
      width: 100 * @rpx;
      height: 50 * @rpx;
      line-height: 50 * @rpx;
      text-align: center;
    }
  }
}
// 蒙层
.apply {
  background: #fff;
  padding: 30 * @rpx;
  border-radius: 10 * @rpx;
  &-prop {
    white-space: nowrap;
    width: 65px;
  }

}
.temperature {
  padding: 40 * @rpx 40 * @rpx 20 * @rpx;
  font-size: 16px;
}
.bottom-btn{
  margin-top: 30 * @rpx;
}
</style>
