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

            <div class="material-list" v-for="(item,index) in appleyData" :key="index" v-if="appleyData.length > 0">
                <div class="flex flex-pack-justify material-list-dots">
                    <div>{{item.create_time}}</div>
                    <div>物料申请单：<span>{{item.workorder_id}}</span></div>
                </div>
                <div>关联任务单：<span>{{item.workorder_id == '0' ?'':item.workorder_id}}</span></div>
                <div class="flex material-list-btn">
                    <span  v-for="(list,listIndex) in item.lists" :key="listIndex">{{list.name+list.amount+list.units}}</span>
                </div>

                <span v-if="item.status_desp"> 备注:{{item.status_desp}}</span>
                <div class="flex material-list-operation">
                    <div>
                        <span class="tag" v-if="item.status == 0" @click="confirmRevoke(item.id)">撤销</span>
                    </div>
                    <div>状态：<span>
                        {{handleStatus(item)}}
                        </span></div>
                </div>
            </div>
            <div class="noneData" v-else>
                <i class="iconfont icon-zanwushuju"></i>
                <p>暂无数据</p>
            </div>
        </div>
      </template>
    </better-scroll>
      
  

  <div class="material" v-if="active == 1">
              <!-- 扫一扫 -->
            <div class="material-box  flex  flex-align-center">
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
            </div>

    <better-scroll ref="betterScroll" @onPullingUp="onPullingUp" marginTop="200px" >
      <template slot="list-content">
        <!-- 物料申请 -->
        <div class="scroll-view-list material taskNew" >
                <div class="material-table" v-if="reserveData.length > 0">
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
                        <div class="material-table-box-list  flex  flex-align-center flex-pack-center" @click="getPop(item)"><span>使用</span></div>
                    </div>
                </div>
            <div class="noneData" v-else>
                <i class="iconfont icon-zanwushuju"></i>
                <p>暂无数据</p>
            </div>
        </div>
      </template>
    </better-scroll>
        </div>

          <!-- 弹窗 -->
          <popup ref="popup" @getReserveData="getReserveData"></popup>

        <!-- 物料使用记录 -->
        <div class="material" v-if="active == 2">
            <div class="material-box  flex  flex-align-center">
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
            </div>
                
            <better-scroll ref="betterScroll" @onPullingUp="onPullingUp" marginTop="200px" >
                  <template slot="list-content">
                    <!-- 物料申请 -->
                    <div class="scroll-view-list material taskNew" >
                      <div class="material-table" v-if="materiallist.length > 0">
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
                                <div class="material-table-box-list flex  flex-align-center flex-pack-center" @click="goTask(item)">{{item.is_wastage==1?'损耗':'查看工单'}}</div>
                            </div>
                        </div>    
                        <div class="noneData" v-else>
                            <i class="iconfont icon-zanwushuju"></i>
                            <p>暂无数据</p>
                        </div>   
                    </div>
                  </template>
                </better-scroll>
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
        if (this.active === 0) {
          this.getDataList();
        }
        if (this.active === 1) {
          this.getReserveData(); //备用
        }
        if (this.active === 2) {
          this.getMateriallist(); //使用记录
        }
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
        this.reserveData = [];
        this.getReserveData(); //备用
      }
      if (this.active === 2) {
        this.materiallist = [];
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
      this.$refs.popup.nowNum = 1;
      this.$refs.popup.desp = "";
      this.$refs.popup.wastage = 1;
      this.$refs.popup.workorder_id = null;
      this.$refs.popup.materialspareObject = item;
      this.$refs.popup.showNoMask = true;
    },

    /* 备用物料 */
    getReserveData(callback = null) {
      this.$toast.loading("加载中...");
      let list = this.reserveData || [];
      let data = {
        token: this.$store.getters.getToken,
        keyword: this.keyword,
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
          if (callback) {
            callback();
          }
          if (res.returnStatus) {
            this.$nextTick(() => {
              this.forceUpdate(true);
            });
            if (res.data.data.length !== this.pagesize) {
              this.$nextTick(() => {
                this.forceUpdate(false);
              });
            }
            this.reserveData = res.data.data;
            console.log('备用', res.data)
            res.data.data.forEach(item => {
              list.push(item);
            });
            this.reserveData = list;
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
      let list = this.materiallist || [];
      let data = {
        token: this.$store.getters.getToken,
        keyword: this.keyword,
        pagesize: this.pagesize,
        pageindex: this.pageindex
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
            this.$nextTick(() => {
              this.forceUpdate(true);
            });
            if (res.data.data.length !== this.pagesize) {
              this.$nextTick(() => {
                this.forceUpdate(false);
              });
            }
            this.materiallist = res.data.data;
            res.data.data.forEach(item => {
              list.push(item);
            });
            this.materiallist = list;
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
  // padding: 5% 5% 5% 3%;
  width: 90%;
  margin: 0 auto;
  padding: 5% 0;
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
  &-box {
    position: absolute;
    z-index: 20;
    top: 80 * @rpx;
    width: 100%;
    height: 150 * @rpx;
    background-color: #fff;
  }
  // 扫一扫
  &-top {
    // width: 90%;
    margin: 0 * @rpx auto;
    height: 80 * @rpx;
    justify-content: space-between;
    width: 100%;
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
    width: 100%;
    margin-top: 20 * @rpx;
    &-box {
      border-top: 1 * @rpx solid #999;
      border-left: 1 * @rpx solid #999;
      &-list {
        width: 20%;
        text-align: left;
        border-right: 1 * @rpx solid #999;
        padding: 5px ;
        word-break: break-all;
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
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAKL2lDQ1BJQ0MgUHJvZmlsZQAASMedlndUVNcWh8+9d3qhzTDSGXqTLjCA9C4gHQRRGGYGGMoAwwxNbIioQEQREQFFkKCAAaOhSKyIYiEoqGAPSBBQYjCKqKhkRtZKfHl57+Xl98e939pn73P32XuftS4AJE8fLi8FlgIgmSfgB3o401eFR9Cx/QAGeIABpgAwWempvkHuwUAkLzcXerrICfyL3gwBSPy+ZejpT6eD/0/SrFS+AADIX8TmbE46S8T5Ik7KFKSK7TMipsYkihlGiZkvSlDEcmKOW+Sln30W2VHM7GQeW8TinFPZyWwx94h4e4aQI2LER8QFGVxOpohvi1gzSZjMFfFbcWwyh5kOAIoktgs4rHgRm4iYxA8OdBHxcgBwpLgvOOYLFnCyBOJDuaSkZvO5cfECui5Lj25qbc2ge3IykzgCgaE/k5XI5LPpLinJqUxeNgCLZ/4sGXFt6aIiW5paW1oamhmZflGo/7r4NyXu7SK9CvjcM4jW94ftr/xS6gBgzIpqs+sPW8x+ADq2AiB3/w+b5iEAJEV9a7/xxXlo4nmJFwhSbYyNMzMzjbgclpG4oL/rfzr8DX3xPSPxdr+Xh+7KiWUKkwR0cd1YKUkpQj49PZXJ4tAN/zzE/zjwr/NYGsiJ5fA5PFFEqGjKuLw4Ubt5bK6Am8Kjc3n/qYn/MOxPWpxrkSj1nwA1yghI3aAC5Oc+gKIQARJ5UNz13/vmgw8F4psXpjqxOPefBf37rnCJ+JHOjfsc5xIYTGcJ+RmLa+JrCdCAACQBFcgDFaABdIEhMANWwBY4AjewAviBYBAO1gIWiAfJgA8yQS7YDApAEdgF9oJKUAPqQSNoASdABzgNLoDL4Dq4Ce6AB2AEjIPnYAa8AfMQBGEhMkSB5CFVSAsygMwgBmQPuUE+UCAUDkVDcRAPEkK50BaoCCqFKqFaqBH6FjoFXYCuQgPQPWgUmoJ+hd7DCEyCqbAyrA0bwwzYCfaGg+E1cBycBufA+fBOuAKug4/B7fAF+Dp8Bx6Bn8OzCECICA1RQwwRBuKC+CERSCzCRzYghUg5Uoe0IF1IL3ILGUGmkXcoDIqCoqMMUbYoT1QIioVKQ21AFaMqUUdR7age1C3UKGoG9QlNRiuhDdA2aC/0KnQcOhNdgC5HN6Db0JfQd9Dj6DcYDIaG0cFYYTwx4ZgEzDpMMeYAphVzHjOAGcPMYrFYeawB1g7rh2ViBdgC7H7sMew57CB2HPsWR8Sp4sxw7rgIHA+XhyvHNeHO4gZxE7h5vBReC2+D98Oz8dn4Enw9vgt/Az+OnydIE3QIdoRgQgJhM6GC0EK4RHhIeEUkEtWJ1sQAIpe4iVhBPE68QhwlviPJkPRJLqRIkpC0k3SEdJ50j/SKTCZrkx3JEWQBeSe5kXyR/Jj8VoIiYSThJcGW2ChRJdEuMSjxQhIvqSXpJLlWMkeyXPKk5A3JaSm8lLaUixRTaoNUldQpqWGpWWmKtKm0n3SydLF0k/RV6UkZrIy2jJsMWyZf5rDMRZkxCkLRoLhQWJQtlHrKJco4FUPVoXpRE6hF1G+o/dQZWRnZZbKhslmyVbJnZEdoCE2b5kVLopXQTtCGaO+XKC9xWsJZsmNJy5LBJXNyinKOchy5QrlWuTty7+Xp8m7yifK75TvkHymgFPQVAhQyFQ4qXFKYVqQq2iqyFAsVTyjeV4KV9JUCldYpHVbqU5pVVlH2UE5V3q98UXlahabiqJKgUqZyVmVKlaJqr8pVLVM9p/qMLkt3oifRK+g99Bk1JTVPNaFarVq/2ry6jnqIep56q/ojDYIGQyNWo0yjW2NGU1XTVzNXs1nzvhZei6EVr7VPq1drTltHO0x7m3aH9qSOnI6XTo5Os85DXbKug26abp3ubT2MHkMvUe+A3k19WN9CP16/Sv+GAWxgacA1OGAwsBS91Hopb2nd0mFDkqGTYYZhs+GoEc3IxyjPqMPohbGmcYTxbuNe408mFiZJJvUmD0xlTFeY5pl2mf5qpm/GMqsyu21ONnc332jeaf5ymcEyzrKDy+5aUCx8LbZZdFt8tLSy5Fu2WE5ZaVpFW1VbDTOoDH9GMeOKNdra2Xqj9WnrdzaWNgKbEza/2BraJto22U4u11nOWV6/fMxO3Y5pV2s3Yk+3j7Y/ZD/ioObAdKhzeOKo4ch2bHCccNJzSnA65vTC2cSZ79zmPOdi47Le5bwr4urhWuja7ybjFuJW6fbYXd09zr3ZfcbDwmOdx3lPtKe3527PYS9lL5ZXo9fMCqsV61f0eJO8g7wrvZ/46Pvwfbp8Yd8Vvnt8H67UWslb2eEH/Lz89vg98tfxT/P/PgAT4B9QFfA00DQwN7A3iBIUFdQU9CbYObgk+EGIbogwpDtUMjQytDF0Lsw1rDRsZJXxqvWrrocrhHPDOyOwEaERDRGzq91W7109HmkRWRA5tEZnTdaaq2sV1iatPRMlGcWMOhmNjg6Lbor+wPRj1jFnY7xiqmNmWC6sfaznbEd2GXuKY8cp5UzE2sWWxk7G2cXtiZuKd4gvj5/munAruS8TPBNqEuYS/RKPJC4khSW1JuOSo5NP8WR4ibyeFJWUrJSBVIPUgtSRNJu0vWkzfG9+QzqUvia9U0AV/Uz1CXWFW4WjGfYZVRlvM0MzT2ZJZ/Gy+rL1s3dkT+S453y9DrWOta47Vy13c+7oeqf1tRugDTEbujdqbMzfOL7JY9PRzYTNiZt/yDPJK817vSVsS1e+cv6m/LGtHlubCyQK+AXD22y31WxHbedu799hvmP/jk+F7MJrRSZF5UUfilnF174y/ariq4WdsTv7SyxLDu7C7OLtGtrtsPtoqXRpTunYHt897WX0ssKy13uj9l4tX1Zes4+wT7hvpMKnonO/5v5d+z9UxlfeqXKuaq1Wqt5RPXeAfWDwoOPBlhrlmqKa94e4h+7WetS212nXlR/GHM44/LQ+tL73a8bXjQ0KDUUNH4/wjowcDTza02jV2Nik1FTSDDcLm6eORR67+Y3rN50thi21rbTWouPguPD4s2+jvx064X2i+yTjZMt3Wt9Vt1HaCtuh9uz2mY74jpHO8M6BUytOdXfZdrV9b/T9kdNqp6vOyJ4pOUs4m3924VzOudnzqeenL8RdGOuO6n5wcdXF2z0BPf2XvC9duex++WKvU++5K3ZXTl+1uXrqGuNax3XL6+19Fn1tP1j80NZv2d9+w+pG503rm10DywfODjoMXrjleuvyba/b1++svDMwFDJ0dzhyeOQu++7kvaR7L+9n3J9/sOkh+mHhI6lH5Y+VHtf9qPdj64jlyJlR19G+J0FPHoyxxp7/lP7Th/H8p+Sn5ROqE42TZpOnp9ynbj5b/Wz8eerz+emCn6V/rn6h++K7Xxx/6ZtZNTP+kv9y4dfiV/Kvjrxe9rp71n/28ZvkN/NzhW/l3x59x3jX+z7s/cR85gfsh4qPeh+7Pnl/eriQvLDwG/eE8/s3BCkeAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIXRFWHRDcmVhdGlvbiBUaW1lADIwMTk6MDE6MjUgMTA6Mzg6NDCi/0N6AAAFyUlEQVRoQ+WbeYxTRRzH5zfdwy10tdtjkati0Gg0atTEYCKISNg/MCFGJYHERAlm1UXEPTRRQdQ/zB4g8chGOSJiooZ43yYIEkOiEEM0qAmyXAlLu6/dQ5Zl287P38ybFkq73VK6S/veJ3n9Ha9t5ts53sx7U0BENt7w+hNOl4s5ETh3nBqO9v11aEDsmBPTp8eNMRXvaghNqnTCbEB2GwO4kVIz6ZhGR5U8fw6yEAaZw2T/RgH7mRB7wvG+vWLDzDPqHWNAwcVf8XTPNWUVsJQEL2LAbqIUmGfyANl/9LJDMPg4MjD8qei8clCfKQgFEc/5Wu5+pmEh52wVhXPoyF/wCFAp++hlq4DY+nBrbZdOXxQXLd7T1LOQA7xKcm/WqbEmRkXeCsNDa0IbphzXubzIW3xNy8kZDlb2Nrl1ZmacoS5BJX8lvO/PdfkOlnmJ9zYb9QCsg1ynmbmk7ItG2dLe9Z5/dJwzFySeN4Qm1jj5ZurQD+pUcSBbAeDynlbvhzqTEzmL9zUen8IcVV+Re4uZKTqkkpfD7b61QoicRHFts+JuDF5NwneTW6zCJdQT2RpPU/BNefXRuayMWvOe5u4Ah/KfyZ1uZkoAxE6jw//EaC0g6y/kfvKYm0PZd+SWjnAJQL2nMfiijkZkRPF88XaHw+n8iL7pOp0qLQBe8jWHHtBRRkYUXzN97mrqRPN1WIoAA75ZTrd1nEZG8d6W4CwS/rwOSxkXrTPel61YxymkieeLD1Qw5niX3IwfKDXoCnCHJ3D3Ch2mkCa+JuBvoA/coEOrsLZ6VbBW+0lSxHvquy6njvKCDi0EVFeUO9J0pYjnLpdsHm4zshbUmpdPfMqYrENFUjxfebCS3tKgQytSWXUZpuhLiq+pcN9PP09av7AUCI+aA7pJUjxd2h7WrnWhynUHahfoyBQvp7Fk5knf6nDE5HJciXdMqJIzuXLpWx6AusSqT70AsrnS2gSfu+lxeRs90edhlmntATCH0svV6AfsepW1CcBQ3Wnm1dP8V5FNDv+2ANm10vByEAGVsBMASjMX4PCphI1AGvSk5TTSV6uMjaB5vktaTp3fHtf3VDi/Z1cZFwjj/ly8CEC2c26ccxAFfexbIgzK29qy5g2dsBNKM83w8JgK7QQy9WibR3r5IRXaCcCD0nCx0TNA0rtU0iaggD+kNRc2wH5V1iYgoNKrxAvB5INIu3A6Ypw6Kx55TD6MtAs7xebAkHSUeL276XfpWx1E/ES7us8TiOwD7VqZobgYShcfHY5uJTNmux2LA9we6Zga1sFZ8X0bJoXoYr9Nh5YkhvC6dhVJ8ZJ4XLxGxqoLnW8jbZ592lekiI90+Gjmg5t0aCVEHDFtv0GKeMkZFl9NJmJGlmFTuM2bdjVLE9/fWhukob9Jh1agO3Zq8Fntp5AmXmJ0+LeQ+dKMShpEgcsib03L2JIzipcL/ejpM4+QKzf/lzDY2tPu/UYHaWQUL+l9Y7JBP8IicgfMTMnxtXFkZ9ZNVaPuwPQ2hxYA8M/JrTQzpQD+ZoRhnlquZ2HEmk/Q0+b7nlZ9D5FbIrM/3BuLD9WNJlwyqniJ0e75gmH8Pvrifp0qThB/Ev0D9547hc1GTuIloTb/j4KJuxgyedur+EC20TgarDM6Z/TpzKjkvN8+gdzF4ZjgfAcYy7qvdRwZYChWhNp87+k4Zy5YfAJPi7GEmo1cKFyyZ31U8h8Ei9Xn+2+rvMVLVCtwOtcAsHoKx/Nq8C/V9nNU29t1nBcXJT6BZ9WJ6VBe0UhdYRmFE8xs4aGSHgCG7Ub/0W2i89aoTudNQcQnkNtX2cTqJZyzJRTeSUfOA2oWeqmEn1E5t0Q6/Ltz/f9MLhRU/LlUt5z0l2PZfFI/mwG7nVJy68v5/6HNRDeVaD/V8x7BYFdv/5FfClHLmRgz8eej/nK68rGp4Cibiox7gaMTGXCgZQQVoi+OLMjY4OHwukCv/sgYw9j/qlgByD2V7vkAAAAASUVORK5CYII=")
    no-repeat left center;
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
