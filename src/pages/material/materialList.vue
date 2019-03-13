<template>
  <div>
    <cheader title="物料列表" @leftClick="leftClick"></cheader>
    <div class=""></div>
    <div class="Mdetails">
      <!-- 扫一扫 -->
        <div class="flex material-top">
            <div class="material-top-search">
                <md-input-item
                ref="input0"
                type="textarea"
                :maxlength="200"
                ></md-input-item>
                <div class="material-top-search-icon"><i class="iconfont icon-sousuo"></i></div>
            </div>
            <div class="material-top-button">
                <!-- <div class="tag"  @click="getApply()">申请物料</div> -->
            </div>
        </div>
        <div class="flex Mdetails-content">
            <div class="Mdetails-content-box">
                <div class="Mdetails-content-box-list" v-for="(item,index) in warehouse" :key="index"
                    @click="handelLook(item,index)" :class="{cur:index == active}"
                >{{item.type_name}}</div>
            </div>
             <div class="Mdetails-content-box">

                <div class="mb" v-for="(item,index) in warehouseList">
                 <div class="flex Mdetails-content-box-Mdetails">
                     <div>{{item.name}}</div>
                     <!-- <div>98766789-K</div> -->
                 </div>
                 <div class="flex Mdetails-content-box-Mdetails">
                     <div>库存:</div>
                     <div>{{item.amount}} <span @click="getMinute(item)"><img src="../../assets/jian.png" alt=""></span> {{getCount(item.id)}} <span @click="getAdd(item)"><img src="../../assets/jia.png" alt=""></span></div>
                 </div>
                </div> 
            </div>
        </div>
        <div class="Mdetails-form">
            <div class="Mdetails-form-list flex flex-pack-justify">
              <div>关联任务单：{{workorderId||''}}</div>
              <div class="tag" v-if="this.$route.params.detailsData==undefined" @click="changeChecktask">选择任务单</div>
            </div>
            <!-- <div class="Mdetails-form-list">
                领用备注：76543456789
            </div> -->
            <div class="Mdetails-form-list">
                <div>申请物料：</div>
                <div class="Mdetails-form-list-border">
                    {{getPreMaterialListString()}}
                </div>
            </div>
             <div class="Mdetails-form-list">
                <div>领用备注：</div>
                <div>
                    <textarea style=""></textarea>
                </div>
            </div>
        </div>
        <!-- <md-button type="default" @click="postMaterialwarehouse">申请物料</md-button> -->
        <!-- button -->
      <div class="footBtb" @click="postMaterialwarehouse()">
        申请物料
      </div>
    </div>
            <checktask ref="checktask" @confirm="confirm"></checktask>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import cheader from "../../components/header";
import checktask from "../../components/checktask";

export default {
  name: "HelloWorld",
  components: {
    cheader,
    checktask
  },
  data() {
    return {
      active: 0,
      nowNum: 1,
      listData: [
        { name: "机箱" },
        { name: "整机" },
        { name: "电源" },
        { name: "网线" },
        { name: "电源保护开关" }
      ],
      warehouse: [], //所有物料
      warehouseList: [], //当前展示的物料
      preMaterialList: [], //预选物料
      workorderId: null
    };
  },
  mounted() {
    this.getMaterialwarehouse();
    
    if (this.$route.params.detailsData) {
      this.workorderId = this.$route.params.detailsData.id;
      console.log('tiaozhuan',this.$route.params.detailsData.id)
    }
  },
  methods: {
    leftClick() {
      this.$router.go(-1);
    },
    handelLook(item, index) {
      this.active = index;
      this.warehouseList = item.data;
    },
    //实时取数量
    getCount(id) {
      let list = this.preMaterialList.filter((item, index) => {
        return item.id == id;
      });
      if (list.length > 0) {
        return list[0].getCount;
      } else {
        return 0;
      }
    },
    getIdx(id, callback) {
      let idx = null;
      new Promise(resolve => {
        this.preMaterialList.filter((item, index) => {
          if (item.id == id) idx = index;
          return item.id == id;
        });
        resolve(idx);
      }).then(res => {
        callback(res);
      });
    },
    getAdd(row) {
      this.getIdx(row.id, idx => {
        if (idx != null) {
          let getCount = this.preMaterialList[idx].getCount || 0;
          if (getCount < row.amount) {
            getCount += 1;
            this.preMaterialList[idx].getCount = getCount;
          }else {
              this.$dialog.alert({
              content:'已超出库存',
              confirmText: "确定"
            });
          }
        } else {
          this.preMaterialList.push(Object.assign(row, { getCount: 1 }));
          
        }
        this.preMaterialList.push();
      });
    },
    getMinute(row) {
      let idx = this.getIdx(row.id, idx => {
        if (idx != null) {
          let getCount = this.preMaterialList[idx].getCount || 0;
          if (getCount > 0) {
            getCount -= 1;
            this.preMaterialList[idx].getCount = getCount;
            this.preMaterialList.push();
          }
        }
      });
    },
    getPreMaterialListString() {
      let list = this.preMaterialList
        .filter(filter => {
          return (filter.getCount || 0) > 0;
        })
        .map(item => {
          return `${item.name}${item.getCount}${item.units}`;
        });

      return list.join("；");
    },
    //取物料仓库
    getMaterialwarehouse() {
      this.$toast.loading("加载物料中...");
      let data = {
        token: this.$store.getters.getToken
      };
      this.service
        .httpRequest({
          url: "/aapi/materialwarehouse",
          methods: "get",
          data: data
        })
        .then(res => {
          this.$toast.hide();
          if (res.returnStatus) {
            let power_box = [
              {
                type_id: "round",
                type_name: "电源箱",
                data: res.data.data.power_box
              }
            ];
            this.warehouse = power_box.concat(res.data.data.warehouse);
            console.log(this.warehouse);
            if (this.warehouse.length > 0) {
              this.handelLook(this.warehouse[0], 0);
            }
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    },
    //提交物料申请
    postMaterialwarehouse() {
      this.$toast.loading("加载中...");
      let list = [];
      list.push("token=" + this.$store.getters.getToken);

      if (this.workorderId) {
        list.push("workorder_id=" + this.workorderId);
      }
      let length = this.preMaterialList.filter(item => {
        if (item.getCount > 0) {
          list.push("warehouse_id=" + item.id);
          list.push("warehouse_type=" + item.type);
          list.push("warehouse_amount=" + item.getCount);
        }
        return item.getCount > 0;
      }).length;
      if (length == 0) {
        this.$toast.hide();
        this.$toast.info("请选择要提交的物料");
        return;
      }
      this.service
        .httpRequest({
          url: "/aapi/materialwarehouse?" + list.join("&"),
          methods: "post",
          data: {}
        })
        .then(res => {
          this.$toast.hide();
          if (res.returnStatus) {
            this.$toast.succeed("已提交申请", 2000, true);
            setTimeout(() => {
              this.$router.replace("/material");
            }, 1000);
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    },
    changeChecktask() {
      this.$refs.checktask.showTask = true;
      this.$refs.checktask.isFinished = true;
      this.$refs.checktask.pageindex = 1;
      this.$refs.checktask.selectId = this.workorderId;
      this.$refs.checktask.taskList = [];
      this.$refs.checktask.getDataList();
    },
    confirm(selectId) {
      this.workorderId = selectId;
      this.$refs.checktask.showTask = false;
    }
  }
};
</script>

<style lang="less">
@import "../../../static/css/common.less";

.material {
  // margin-top: 100 * @rpx;
  position: relative;
  padding: 5% 5% 5% 3%;
  &-apply {
    position: absolute;
    right: 35 * @rpx;
    top: -12 * @rpx;
  }
  &-list {
    margin-bottom: 25 * @rpx;
    div {
      margin-bottom: 15 * @rpx;
      flex-wrap: wrap;
    }
    &-dots {
      i {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #4699ff;
        display: inline-block;
      }
    }
    &-btn {
      border: 1 * @rpx solid #7e7e7e;
      line-height: 56 * @rpx;
      padding: 0 5px;
      border-radius: 5px;
      margin-bottom: 15 * @rpx!important;
    }
    &-operation {
      align-items: center;
      overflow: hidden;
      div {
        float: left;
        width: 60%;
      }
      :nth-of-type(2) {
        float: right;
        width: 40%;
      }
    }
  }
  // 扫一扫
  &-top {
    width: 100%;
    // margin: 0 * @rpx auto;
    height: 80 * @rpx;
    justify-content: space-between;
    &-search {
      width: 75%;
      position: relative;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding-left: 20 * @rpx;
      .md-input-item .md-input-item-control .md-input-item-fake,
      .md-input-item .md-input-item-control .md-input-item-input {
        border: 1px solid #eee;
        border-radius: 5px;
        height: 35px;
        padding-left: 10px;
      }
      &-icon {
        margin-top: -2.5px;
        position: absolute;
        right: 0;
        width: 30px;
        height: 30px;
        top: 6px;
        line-height: 35px;
      }
    }
    &-button {
      padding-top: 15 * @rpx;
    }
  }
  // table
  &-table {
    width: 90%;
    margin: 20 * @rpx auto 0;
    &-box {
      border-top: 1 * @rpx solid #999;
      border-left: 1 * @rpx solid #999;
      &-list {
        width: 20%;
        text-align: center;
        border-right: 1 * @rpx solid #999;
        padding: 5px 0;
      }
      :nth-of-type(2) {
        width: 30%;
      }
      :nth-of-type(3) {
        width: 15%;
      }
      :nth-of-type(5) {
        span {
          display: inline-bloack;
          color: #fff;
          font-size: 24 * @rpx;
          padding: 5 * @rpx;
          background: #4699ff;
          border-radius: 4px;
          padding: 3px 6px;
        }
      }
    }
  }
}

.Mdetails {
  width: 90%;
  margin: 40 * @rpx auto;
  &-search {
    position: relative;
    margin-bottom: 40 * @rpx;
    .md-input-item .md-input-item-control .md-input-item-fake,
    .md-input-item .md-input-item-control .md-input-item-input {
      border: 1px solid #eee;
      border-radius: 5px;
      height: 35px;
      padding-left: 10px;
    }
    &-icon {
      position: absolute;
      right: 0;
      width: 30px;
      height: 30px;
      top: 0;
      line-height: 35px;
    }
  }
  &-content {
    margin: 40 * @rpx 0 30 * @rpx;
    &-box {
      border: 1px solid #ddd;
      width: 70%;
      height: 400 * @rpx;
      overflow: auto;
      &-list {
        line-height: 30px;
        border-bottom: 1px solid #ddd;
      }
      &-Mdetails {
        margin-bottom: 5px;
        div {
          line-height: 20px;
          img {
            width: 15px;
            height: 15px;
            vertical-align: middle;
          }
        }
      }
      .cur {
        background: #4699ff;
        color: #fff;
      }
      &-list:last-child {
        border-bottom: none;
      }
    }
    &-box:nth-of-type(1) {
      width: 30%;
      margin-right: 3%;
      text-align: center;
    }
    &-box:nth-of-type(2) {
      padding: 20 * @rpx 30 * @rpx;
    }
  }
  &-form {
    &-list {
      margin-bottom: 10px;
      div {
        margin-bottom: 10px;
        textarea{
          width:100%;height:60px;border:1px solid #ddd;outline: none;
          padding: 10*@rpx 20*@rpx;font-size: 24*@rpx;
        }
      }
      &-border {
        border: 1px solid #ddd;
        margin-top: 10 * @rpx;
        padding: 5px;
        min-height: 32px;
      }
    }
  }
}
</style>
