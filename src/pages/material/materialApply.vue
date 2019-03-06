<template>
  <div>
    <cheader title="我的物料" @leftClick="leftClick"></cheader>
    <ul class="flex taskTabs">
      <li v-for="(item,index) in tabs" :key="index" :class="{titilebCur:index == active}" @click="handelClick(index)">{{item.titile}}</li>
    </ul>
    <better-scroll ref="betterScroll" @onPullingUp="onPullingUp">
      <template slot="list-content">
        <!-- 物料申请 -->
        <div class="scroll-view-list material taskNew" v-if="active == 0">
            <div class="material-apply tag" @click="getApply()">申请物料</div>
            <div class="material-list" v-for="(item,index) in appleyData" :key="index">
                <div class="flex flex-pack-justify material-list-dots">
                    <div>{{item.create_time}}</div>
                    <div>物料申请单：<span>{{item.workorder_id}}</span></div>
                </div>
                <div>关联任务单：<span>{{item.workorder_id}}</span></div>
                <div class="flex material-list-btn">
                    <span  v-for="(list,listIndex) in item.lists" :key="listIndex">{{list.name+list.amount+list.units+';'}}</span>
                </div>
                <div class="flex material-list-operation">
                    <div>
                        <span class="tag" v-if="item.status == 0" @click="confirmRevoke(item.id)">撤销</span>
                    </div>
                    <div>状态：<span>
                        {{handleStatus(item)}}
                        </span></div>
                </div>
            </div>
        </div>
      
        <!-- 物料备用 -->
        <div class="scroll-view-list material" v-if="active == 1">
          <div class="material-reserve">
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

              <div class="material-table">
                  <div class="flex material-table-box">
                      <div class="material-table-box-list">编号</div>
                      <div class="material-table-box-list">名称</div>
                      <div class="material-table-box-list">单位</div>
                      <div class="material-table-box-list">剩余数量</div>
                      <div class="material-table-box-list"></div>
                  </div>
                  <div class="flex material-table-box" v-if="reserveData.length > 0" v-for="(item,index) in reserveData" :key="index">
                  <div class="material-table-box-list">{{tableData[index].id}}</div>
                      <div class="material-table-box-list">{{tableData[index].name}}</div>
                      <div class="material-table-box-list">{{tableData[index].units}}</div>
                      <div class="material-table-box-list">{{tableData[index].amount}}</div>
                      <div class="material-table-box-list" @click="getPop()">使用</div>
                  </div>
              </div>            
              <!-- 列表 -->
              <div class="material-reserve-table">
                  <div class=""></div>
              </div>
          </div>
          <!-- 弹窗 -->
          <popup ref="popup" v-show="isPopup"></popup>
        </div>

        <!-- 物料使用记录 -->
        <div class="scroll-view-list material" v-if="active == 2">
            <div class="material-reserve">
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
                      <div class="tag">申请物料</div>
                  </div>
              </div>
              <div class="material-table">
                  <div class="flex material-table-box">
                      <div class="material-table-box-list">编号</div>
                      <div class="material-table-box-list">名称</div>
                      <div class="material-table-box-list">单位</div>
                      <div class="material-table-box-list">剩余数量</div>
                      <div class="material-table-box-list">使用情况</div>
                  </div>
                  <div class="flex material-table-box" v-for="(item,index) in tableData.length" :key="index">
                  <div class="material-table-box-list">{{tableData[index].no}}</div>
                      <div class="material-table-box-list">{{tableData[index].name}}</div>
                      <div class="material-table-box-list">{{tableData[index].danwei}}</div>
                      <div class="material-table-box-list">{{tableData[index].no}}</div>
                      <div class="material-table-box-list"></div>
                  </div>
              </div>            
              <!-- 物料列表 -->
              <div class="material-reserve-table">
                  <div class=""></div>
              </div>
            </div>
        </div>
      </template>
    </better-scroll>

  </div>
</template>

<script>
import cheader from "../../components/header";
import popup from "./popUp";
import { Dialog, Button, Toast } from "mand-mobile";
import betterScroll from "../../components/better-scroll";
export default {
  name: "landscape-demo",
  components: {
    cheader,
    popup,
    betterScroll,
    [Dialog.name]: Dialog,
    [Button.name]: Button
  },
  data() {
    return {
      pagesize: 3,
      pageindex: 1,
      active: 0,
      isFinished: true,
      list: 3,
      keyword: "",
      tabs: [
        { titile: "物料申请单" },
        { titile: "我的备用物料" },
        { titile: "物料使用记录" }
      ],
      appleyData: [], // 物料列表
      isGetListEnum: ["等待领取", "已经领取"],
      status: null, // 审核状态

      reserveData: [], // 备用列表
      tableData: [],
      //   showNoMask: false,
      isPopup: false // 弹窗
    };
  },
  mounted() {
    this.getDataList(0);
    this.getReserveData(); //备用
    window.ScrollViewTrigger1 = () => {
      this.$refs.scrollView.triggerRefresh();
    };
  },
  methods: {
    onPullingUp() {
      console.log('拉一次')
      if (!this.isFinished) {
        return;
      }
      // async data
      setTimeout(() => {
        this.pageindex += 1;
        this.getDataList(this.active);
      }, 1000);
    },
    forceUpdate(status) {
      //  isFinished   判断当前是否可以继续加载
      //  然后设置子组件可否加载的状态
      this.isFinished = status;
      if (this.$refs.betterScroll) {
        this.$refs.betterScroll[0].forceUpdate(status);
      }
    },
    $_onRefresh() {
      // async data
      setTimeout(() => {
        this.list += 5;
        this.$refs.scrollView.finishRefresh();
      }, 2000);
    },
    leftClick() {
      this.$router.go(-1);
    },
    handelClick(index) {
      this.active = index;
      this.pageindex = 1
      this.forceUpdate(true);
      this.getDataList(index)
      if (this.active === 0) {
      }
      if (this.active === 1) {
      }
      if (this.active === 2) {
      }
    },
    leftClick() {
      this.$router.push("/");
    },
    /* 物料申请 star */
    getApply() {
      this.$router.push({ name: "materialList" });
    },
    /* API */
    getDataList(active) {
      this.$toast.loading("加载中...");
      let data = {
        token: this.$store["getters"].getToken,
        pagesize: this.pagesize,
        pageindex: this.pageindex
      };
      this.service
        .httpRequest({
          url: "/aapi/materialorder",
          methods: "get",
          data: data
        })
        .then(res => {
          this.$toast.hide();
          if (res.returnStatus) {
            this.$nextTick(() => {
              this.forceUpdate(true);
            });
            if (res.data.data.length !== this.pagesize) {
              // this.$nextTick(() => {
              //   this.forceUpdate(false);
              // });
              this.forceUpdate(false);
            }
            this.active = active
            this.appleyData = res.data.data;
            console.log("appley", res.data.data);
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
          if (this.$refs.scrollView) {
            // 停止刷新
            this.$refs.scrollView[0].finishLoadMore();
          }
        });
    },
    // 撤销
    confirmRevoke(id) {
      this.$dialog.confirm({
        title: "确认",
        content: "是否撤销该物料申请",
        confirmText: "确定",
        onConfirm: () => {
          let data = {
            token: this.$store.getters.getToken,
            id: id
          };
          this.service
            .httpRequest({
              url: "/aapi/materialordercancel",
              methods: "post",
              data: data
            })
            .then(res => {
              this.$toast.hide();
              if (res.returnStatus) {
                Toast({ content: "已撤销" });
                this.getDataList();
              } else {
                this.$dialog.alert({
                  content: res.msg,
                  confirmText: "确定"
                });
              }
            });
        }
      });
    },
    onBasicCancel() {
      Toast({
        content: "已取消"
      });
      this.basicDialog.open = false;
    },

    /* end 
    *
    *
    */
    /*状态处理 */
    handleStatus(item) {
      switch (item.status) {
        case 0:
          return "等待审核";
        case 1:
          return this.isGetListEnum[item.is_get];
        case 2:
          return "不予受理";
        case 3:
          return "已经撤消";
        default:
          return "";
      }
    },
    /* 备用物料 */
    getPop() {
      this.isPopup = true;
    },
    /* api */
    getReserveData() {
      this.$toast.loading("加载中...");
      let data = {
        token: this.$store.getters.getToken,
        pagesize: this.pagesize,
        pageindex: this.pageindex
      };
      this.service
        .httpRequest({
          url: "/aapi/materialspare",
          methods: "get",
          data: data
        })
        .then(res => {
          this.$toast.hide();
          if (res.returnStatus) {
            this.reserveData = res.data.data;
            console.log("beiyong", res.data.data);
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    }
    /* end */

    /* end 
    *
    *
    */
  }
};
</script>

<style lang="less" scope>
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
      margin-bottom: 15 * @rpx;flex-wrap: wrap;
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
      border: 1*@rpx solid #7e7e7e;
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
    width: 90%;
    margin: 0 * @rpx auto;
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
        position: absolute;
        right: 0;
        width: 30px;
        height: 30px;
        top: 0;
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
      border-top: 1px solid #999;
      border-left: 1px solid #999;
      &-list {
        width: 20%;
        text-align: center;
        border-right: 1px solid #999;
        padding: 3px 0;
      }
    }
  }
}
.material-table-box:last-child {
  border-bottom: 1px solid #999;
}
// 蒙层
.apply {
  background: #fff;
  padding: 20 * @rpx;
  border-radius: 10 * @rpx;
  &-list {
    margin-bottom: 10 * @rpx;
    font-size: 24 * @rpx;
    div {
      font-size: 24 * @rpx;
      span {
        font-size: 24 * @rpx;
      }
      textarea {
        width: 100%;
        height: 100 * @rpx;
        border: 1px solid #ddd;
        resize: none;
      }
    }
    img {
      width: 15px;
      height: 15px;
      vertical-align: middle;
    }
    span {
      margin-bottom: 10 * @rpx;
      font-size: 24 * @rpx;
      display: inline-block;
    }
  }
}
.material-list:nth-of-type(1) {
  color: #4699ff;
}
.taskNew .material-list:nth-of-type(1) .material-list-dots {
  background: url(../../assets/dots.png) no-repeat left center;
  background-size: 7px 7px;
  padding-left: 12px;
}
.md-landscape-content {
  width: 550 * @rpx!important;
}
.md-field-item-content {
  min-height: 70 * @rpx;
}
</style>
