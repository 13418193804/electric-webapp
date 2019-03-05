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

                <div v-for="(item,index) in valueList">
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
            <div class="Mdetails-form-list">
                关联任务单：76543456789
            </div>
            <!-- <div class="Mdetails-form-list">
                领用备注：76543456789
            </div> -->
            <div class="Mdetails-form-list">
                申请物料：
                <div class="Mdetails-form-list-border">
                    {{getPreMaterialListString()}}
                </div>
            </div>
             <div class="Mdetails-form-list">
                领用备注：
                <div>
                    <textarea style="width:100%;height:50px;border:1px solid #ddd"></textarea>
                </div>
            </div>
        </div>

           <md-button type="default" @click="postMaterialwarehouse">Default</md-button>

    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import cheader from "../../components/header";

export default {
  name: "HelloWorld",
  components: {
    cheader
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
      warehouse: [],
      valueList: [],
      preMaterialList: []
    };
  },
  mounted() {
    this.getMaterialwarehouse();
  },
  methods: {
    leftClick() {
      this.$router.go(-1);
    },
    handelLook(item, index) {
      this.active = index;
      console.log(item);
      this.valueList = item.data;
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
    
      let list = this.preMaterialList.filter(filter=>{
        return (filter.getCount||0) >0
      }).map(item => {
        return `${item.name}${item.getCount}${item.units}`;
      });
 
      return list.join("；");
    },
    //取物料仓库
    getMaterialwarehouse() {
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
          if (res.returnStatus) {
            this.warehouse = res.data.data.warehouse;
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    },
    //提交物料申请
    postMaterialwarehouse() {}
  }
};
</script>

<style lang="less">
@import "../../../static/css/common.less";
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
        line-height: 28px;
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
      padding: 30 * @rpx;
    }
  }
  &-form {
    &-list {
      margin-bottom: 10px;
      &-border {
        border: 1px solid #ddd;
        padding: 10px;
      }
    }
  }
}
</style>
