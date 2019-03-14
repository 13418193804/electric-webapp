<template>
  <div>
       <!-- 弹窗 -->
       <!-- <md-button @click.native="showNoMask=true">点击蒙层关闭</md-button> -->
        <md-landscape v-model="showNoMask" :mask-closable="true">
            <div class="apply">
                <div class="apply-list">物料编码：{{materialspareObject.id}}</div>
                <div class="apply-list">物料名称：{{materialspareObject.name}}</div>
                <div class="apply-list">物料单位：{{materialspareObject.units}}</div>
                <div class="flex apply-list">
                     <div>数量：</div>
                     <div>{{materialspareObject.amount}}
                        <span @click="getMinute()">
                          <img src="../../assets/jian.png" alt=""></span>
                            {{nowNum}}
                          <span @click="getAdd()"><img src="../../assets/jia.png" alt=""></span></div>
                 </div>
                <div class="apply-list selectDiv" style="width:200px;">
                    <div class="blockBlue"></div>
                    <select v-model="wastage">
                        <option :value="1">损耗</option>
                        <option :value="0">任务单</option>
                    </select>
                </div>
                <div class="flex flex-pack-justify apply-list" v-if="wastage == 0">
                    <div style="height:45px;line-height:45px;">任务单：{{workorderId||''}}</div>
                    <div class="tag" @click="changeChecktask">选择任务单</div>
                </div>
                <div class="apply-list">
                    <div style="margin-bottom:15px;">备注：</div>
                    <div>
                        <textarea v-model="desp"></textarea>
                    </div>
                </div>
                <div class="footer-btn">
                    <!-- <button class="btn btn-white" @click="showNoMask=false">取消</button> -->
                    <button class="btn btn-blue" @click="materialspare()">确定</button>
                </div>
            </div>
        </md-landscape>

        <checktask ref="checktask" @confirm="confirm"></checktask>
  </div>
</template>

<script>
import { Landscape, Toast, Button } from "mand-mobile";
import checktask from "../../components/checktask";

export default {
  name: "landscape-demo",
  components: {
    [Landscape.name]: Landscape,
    [Button.name]: Button,
    checktask
  },
  data() {
    return {
      materialspareObject: {},
      showNoMask: false,
      sum: 11,
      nowNum: 1,
      wastage: 1,
      desp: "",
      workorderId: null
    };
  },
  mounted() {},
  methods: {
    /* 蒙层 */
    alert(msg) {
      Toast.succeed(msg);
    },
    getMinute() {
      if (this.nowNum < 1) {
        this.nowNum -= 1;
      }
    },
    getAdd() {
      if (this.nowNum < this.materialspareObject.amount) {
        this.nowNum += 1;
      } else{
        this.$dialog.alert({
          content:'已超出库存',
          confirmText: "确定"
        });
      }
    },
    //使用备用物料
    materialspare() {
      this.$toast.loading("加载中...");
      let data = {
        token: this.$store.getters.getToken,
        spare_id: this.materialspareObject.id,
        spare_amount: this.nowNum,
        desp: this.desp
      };
      if (this.wastage == 1) {
        Object.assign(data, { wastage: 1 });
      } else {
        if (this.workorderId !== null) {
          Object.assign(data, { workorder_id: this.workorderId });
        }
      }
      this.service
        .httpRequest({
          url: "/aapi/materialspare",
          methods: "post",
          data: data
        })
        .then(res => {
          this.$toast.hide();
          if (res.returnStatus) {
            this.showNoMask = false;
            this.$emit("getReserveData", () => {
              this.$toast.succeed("已生成记录");
            });
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
// 蒙层
.apply {
  background: #fff;
  padding: 30 * @rpx;
  border-radius: 10 * @rpx;
  &-list {
    margin-bottom: 10 * @rpx;
    font-size: 28 * @rpx!important;
    div {
      font-size: 28 * @rpx!important;
      span {
        font-size: 28 * @rpx!important;
      }
      textarea {
        width: 100%;
        height: 100 * @rpx;
        border: 1px solid #ddd;
        resize: none;
        font-size: 28 * @rpx!important;
      }
    }
    img {
      width: 15px;
      height: 15px;
      vertical-align: middle;
    }
    span {
      margin-bottom: 10 * @rpx;
      font-size: 38 * @rpx;
      display: inline-block;
    }
  }
  .selectDiv{
    position: relative;
    select{
      font-size: 28*@rpx;height: 50*@rpx;border: none; border: 1px solid #409eff;width: 100%;padding-left:10px;
      outline: none;background: #fff;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  }
  .blockBlue{
    position: absolute;right: 0;width: 40*@rpx;height:50*@rpx;background: #409eff;
  }
}
</style>
