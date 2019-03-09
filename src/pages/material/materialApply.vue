<template>
  <div>
    <cheader title="我的物料" @leftClick="leftClick"></cheader>
    <ul class="flex taskTabs">
      <li v-for="(item,index) in tabs" :key="index" :class="{titilebCur:index == active}" @click="handelClick(index)">{{item.titile}}</li>
    </ul>



    
    <better-scroll ref="betterScroll" @onPullingUp="onPullingUp" marginTop="110px" v-if="active == 0">
      <template slot="list-content">
        <!-- 物料申请 -->
        <div class="scroll-view-list material taskNew" >
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
      

      </template>

    </better-scroll>
      
        <!-- 物料备用 -->
        <div class="scroll-view-list material" v-if="active == 1">
          <div style="height:60px;"></div>
          <div class="material-reserve">
              <!-- 扫一扫 -->
              <div class="flex material-top">
                  <div class="material-top-search">
                      <md-input-item
                      ref="input0" v-model="keyword"
                      type="textarea"
                      :maxlength="200"
                      ></md-input-item>
                      <div class="material-top-search-icon" @click="search(1)"><i class="iconfont icon-sousuo"></i></div>
                  </div>
                  <div class="material-top-button">
                      <div class="tag"  @click="getApply()">申请物料</div>
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
                  <div class="material-table-box-list">{{item.id}}</div>
                      <div class="material-table-box-list">{{item.name}}</div>
                      <div class="material-table-box-list">{{item.units}}</div>
                      <div class="material-table-box-list">{{item.amount}}</div>
                      <div class="material-table-box-list" @click="getPop(item)"><span>使用</span></div>
                  </div>
              </div>            
              <!-- 列表 -->
              <div class="material-reserve-table">
                  <div class=""></div>
              </div>
          </div>
          <!-- 弹窗 -->
          <popup ref="popup" @getReserveData="getReserveData"></popup>
        </div>

        <!-- 物料使用记录 -->
        <div class="scroll-view-list material" v-if="active == 2">
                    <div style="height:60px;"></div>
            <div class="material-reserve">
              <!-- 扫一扫 -->
              <div class="flex material-top">
                  <div class="material-top-search">
                      <md-input-item v-model="keyword"
                      ref="input0"
                      type="textarea"
                      :maxlength="200"
                      ></md-input-item>
                      <div class="material-top-search-icon" @click="search(2)"><i class="iconfont icon-sousuo"></i></div>
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
                  <div class="flex material-table-box" v-for="(item,index) in materiallist" :key="index">
                  <div class="material-table-box-list">{{item.id}}</div>
                      <div class="material-table-box-list">{{item.name}}</div>
                      <div class="material-table-box-list">{{item.units}}</div>
                      <div class="material-table-box-list">{{item.amount}}</div>
                      <div class="material-table-box-list" @click="goTask(item)">{{item.is_wastage==1?'损耗':'查看工单'}}</div>
                      <!-- wastageOrworkorder -->
                  </div>
              </div>            
              <!-- 物料列表 -->
              <div class="material-reserve-table">
                  <div class=""></div>
              </div>
            </div>
        </div>

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
      pagesize: 10,
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
      materiallist: [] //设备记录
    };
  },
  mounted() {
    // 如果你那里实在不行的话我给你一个node脚本
    this.getDataList();
    // this.getMateriallist(); //使用记录
    // this.getReserveData(); //备用
  },
  methods: {
    onPullingUp() {
      if (!this.isFinished) {
        return;
      }
      // async data
      setTimeout(() => {
        this.pageindex += 1;
        this.getDataList();
      }, 1000);
    },
    forceUpdate(status) {
      //  isFinished   判断当前是否可以继续加载
      //  然后设置子组件可否加载的状态
      this.isFinished = status;
      if (this.$refs.betterScroll) {
        this.$refs.betterScroll.forceUpdate(status);
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
      if (this.active === index) {
        return;
      }
      this.keyword = "";
      this.pageindex = 1;
      this.active = index;
      if (this.active === 0) {
        this.appleyData = [];
        this.getDataList();
      }
      if (this.active === 1) {
        this.getReserveData(); //备用
      }
      if (this.active === 2) {
        this.getMateriallist(); //使用记录
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
      let list = this.appleyData || [];
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
              this.$nextTick(() => {
                this.forceUpdate(false);
              });
            }

            // this.active = active;
            this.appleyData = res.data.data;
            res.data.data.forEach(item => {
              list.push(item);
            });
            this.appleyData = list;
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
    getPop(item) {
      this.$refs.popup.desp = "";
      this.$refs.popup.wastage = 1;
      this.$refs.popup.workorder_id = null;

      this.$refs.popup.materialspareObject = item;
      this.$refs.popup.showNoMask = true;
    },

    /* 备用物料 */
    getReserveData(callback = null) {
      this.$toast.loading("加载中...");
      let data = {
        token: this.$store.getters.getToken,
        keyword: this.keyword
      };
      this.service
        .httpRequest({
          url: "/aapi/materialspare",
          methods: "get",
          data: data
        })
        .then(res => {
          this.$toast.hide();
          if (callback) {
            callback();
          }
          if (res.returnStatus) {
            this.reserveData = res.data.data;
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    },
    //使用记录列表
    getMateriallist() {
      this.$toast.loading("加载中...");
      let data = {
        token: this.$store.getters.getToken,
        keyword: this.keyword
      };
      this.service
        .httpRequest({
          url: "/aapi/materiallist",
          methods: "get",
          data: data
        })
        .then(res => {
          this.$toast.hide();
          if (res.returnStatus) {
            this.materiallist = res.data.data;
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    },
    goTask(item) {
      if (item.is_wastage == 1) {
        return;
      }
      this.$router.push({
        name: "taskDetails",
        query: {
          id: item.id
        }
      });
    },
    search(index) {
      // if ((this.keyword || "") == "") {
      //   return;
      // }
      if (index == 1) {
        this.getReserveData();
      }
      if (index == 2) {
        this.getMateriallist();
      }
    }
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
.material-table-box:last-child {
  border-bottom: 1 * @rpx solid #999;
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
