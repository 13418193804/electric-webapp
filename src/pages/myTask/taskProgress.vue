<template>
  <div class="details">
    <cheader title="我的任务" @leftClick="leftClick"></cheader>
    <div class="details-declare">
        <div class="flex details-declare-list">
            <div class="left"><i class="icon"><img src="../../assets/01.png" alt=""></i>报警：</div>
            <div class="right">{{detailsData.location||''+ detailsData.device_name||''+detailsData.fault||''}}</div>
            <!-- <div class="details-declare-list-swich">
              <button @click="getProgress(detailsData)">处理</button>
            </div> -->
        </div>
        <div class="flex details-declare-list auto">
            <div class="left"><i class="icon"><img src="../../assets/02.png" alt="" class="A"></i>{{detailsData.type == 0 ?'系统自动派单':'手动派单'}}</div>
            <div class="right"> <span>{{detailsData.create_time}}</span></div>
        </div>
        <!-- <div class="flex details-declare-list">
            <div class="left">紧急：</div>
            <div class="right">{{detailsData.solution}}</div>
        </div> -->
        <div class="flex details-declare-list auto">
            <div class="left">位置：{{detailsData.location||''}}</div>
            <div class="right">坐标：{{detailsData.longitude||''}} {{detailsData.latitude||''}}</div>
        </div>
        <div class="flex details-declare-list">
        </div>
    </div>
    <div class="details-result">
        <div class="flex details-result-cause">
            <div class="left">处理结果</div>
            <div class="details-result-cause-select">
              <div class="selectBox flex  flex-align-center">
                    <select v-model="curOption" @change="handelSelect($event)">
                        <option v-for="(item,index) in option" :key="index" :value="item.id">{{item.name}}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="details-result-cause">
            <div class="flex details-result-cause-check" v-if="curId == 1">
                <span v-for="(item,index) in checkData" :key="index" 
                @click="handelCheck(item,index)" :class="{cur:index == active}">
                <i class="iconfont icon-weigouxuan" :class="{'icon-yigouxuan':index == active}"></i>{{item.name}}</span>
            </div>
            <div class=" details-result-cause-check" v-if="curId == 2">
              <span v-for="(item,index) in checkDataNo" :key="index" 
                @click="handelCheck(item,index)" :class="{cur:index == active}">
                <i class="iconfont icon-weigouxuan" :class="{'icon-yigouxuan':index == active}"></i>{{item.name}}</span>
            </div>
            <div class="flex details-result-cause-check" v-if="curId == 3">
                <textarea placeholder="暂时不处理的原因" v-model="solution"></textarea>
            </div>
        </div>
        <div class="flex details-result-cause">
            <div class="left">备注：</div>
            <div class="details-result-cause-remak">
                <input type="textarea" v-model="desp">
            </div>
        </div>
        <div class="details-result-cause">
            <div class="left">上传：</div>
            <ul class="flex clearfix">
                <li class="picBox" v-if="imgs.length>0" v-for='(item ,index ) in imgs'>
                    <div class="deleteImg" @click="getDeleteImg(index)">
                      <i class="iconfont icon-guanbi"></i>
                    </div>
                    <img :src="'http://'+item">
                </li>
                <li class="uploadPic" v-if="imgs.length>=6 ? false : true">
                    <p><i class="iconfont icon-shangchuantupian"></i></p>
                    <input class="upload" ref="input" @change='add_img'  type="file" style="opacity:0;">
                </li>
            </ul>
        </div>
    </div>
    <div class="flex flex-pack-center details-footer">
      <div class="details-footer-btn column6" @click="goMaterialList()">物料申请</div>
      <div class="details-footer-btn" @click="getSubmit()">提交</div>
    </div>
  </div>
</template>

<script>
import cheader from "../../components/header";
import { Switch } from "mand-mobile";
import Vue from "vue";
export default {
  data() {
    // 选项 数据
    return {
      isActive: "",
      active: null,
      detailsData: [],
      checkData: [{ name: "线路故障" }, { name: "元气损坏" }, { name: "其他" }],
      checkDataNo: [{ name: "无法处理" }, { name: "下雨" }, { name: "其他" }],
      option: [
        { name: "已解决", id: 1 },
        { name: "未解决", id: 2 },
        { name: "暂停", id: 3 }
      ],
      desp: "", // 备注
      curOption: "", //处理结果 option
      status: "", // 维修状态
      solution: "", // 解决方法
      curId: 1,
      isOption: false,
      imgs: [], // 图片路径
      imgData: {
        accept: "image/gif, image/jpeg, image/png, image/jpg"
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
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted() {
    console.log(this.$route)
    // this.getDataList()
    this.detailsData = this.$route.params.detailsData;
    // this.detailsData = this.$route.query.detailsData
    console.log("解决", this.detailsData);
  },
  methods: {
    getDeleteImg(index) {
      this.imgs.splice(index, 1);
    },
    add_img(event) {
      let reader = new FileReader();
      let img1 = event.target.files[0];
      let type = img1.type; //文件的类型，判断是否是图片
      let size = img1.size; //文件的大小，判断图片的大小
      if (this.imgData.accept.indexOf(type) == -1) {
        alert("请选择我们支持的图片格式！");
        return false;
      }
      if (size > 3145728) {
        alert("请选择3M以内的图片！");
        return false;
      }

      var uri = "";
      let form = new FormData();

      form.append("token", this.$store.getters.getToken);
      form.append("image", this.$refs.input.files[0]);
      this.service
        .httpRequest({
          url: "/aapi/uploadimg",
          methods: "upload",
          form
        })
        .then(res => {
          if (res.returnStatus) {
            console.log(res.data.img_path);
            uri = res.data.img_path;
            reader.readAsDataURL(img1);
            var that = this;
            reader.onloadend = function() {
              that.imgs.push(uri);
            };
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        })
        .catch(error => {
          alert("上传图片出错！");
        });
    },
    // 事件处理方法
    leftClick() {
      this.$router.go(-1);
    },
    handelSelect(event) {
      this.curId = event.target.value;
      console.log(event);
      this.status = event.target.value;
    },
    handelCheck(item, index) {
      this.active = index;
      this.solution = item.name;
      console.log(item);
    },
    /* API */
    getSubmit() {
      if (this.status === "") {
        this.$dialog.alert({
          content: "请选择解决方案",
          confirmText: "确定"
        });
        return;
      }
      this.imgs = this.imgs.join(",");
      let data = {
        token: this.$store.getters.getToken,
        id: this.detailsData.id,
        solution: this.solution,
        desp: this.desp,
        status: this.status,
        img_paths: this.imgs
      };
      console.log("提交", data);
      this.service
        .httpRequest({
          url: "/aapi/workorderdetail",
          methods: "get",
          data: data
        })
        .then(res => {
          if (res.data.status === "00") {
            this.$router.push({
              name: "taskDetails",
              query: {
                id: this.detailsData.id
              }
            });
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    },
    goMaterialList() {
      this.$router.push({
        name: "materialList",
        query: { id: this.detailsData.id }
      });
    }
  }
};
</script>

<style lang="less" scope>
@import "../../../static/css/common.less";
.details {
  width: 100%;
  height: 100%;
  &-result {
    padding: 5%;
    &-cause {
      margin-bottom: 20 * @rpx;
      line-height: 40px;
      div {
        line-height: 60 * @rpx;
        height: 60px * @rpx;
      }
      &-select {
        width: 80%;
        p {
          padding-left: 10px;
          font-size: 12px;
        }
        &-list {
          position: absolute;
          left: 0;
          width: 86%;
          border: 1px solid #2680f0;
          border-top: none;
          background: #fff;
          z-index: 10;
          div {
            border-bottom: 1px solid #eee;
            line-height: 30px;
            font-size: 12px;
            padding-left: 10px;
          }
          .cur {
            color: #409eff;
          }
        }
      }
      &-check {
        height: auto !important;
        padding-left: 135 * @rpx;
        span {
          display: inline-block;
          flex-wrap: wrap;
          line-height: 64 * @rpx;
          margin-right: 40 * @rpx;
        }
        textarea {
          width: 100%;
          border: 1px solid #ddd;
          outline: none;
          padding: 10 * @rpx 20 * @rpx;
          height: 100 * @rpx;
          font-size: 24 * @rpx;
        }
        .cur {
          color: #409eff;
        }
      }
      .left {
        width: 120 * @rpx;
      }
      &-remak {
        width: 80%;
        margin-left: 15 * @rpx;
        line-height: 24 * @rpx!important;
        height: 90 * @rpx!important;
        input {
          width: 100%;
          border: 1px solid #ddd;
          outline: none;
          height: 90 * @rpx;
          font-size: 24 * @rpx;
          padding: 2px 5px;
          line-height: 24 * @rpx!important;
        }
      }
    }
  }
  &-footer {
    width: 100%;
    margin-top: 30 * @rpx;
    &-btn {
      border-radius: 50px;
      background: #4699ff;
      color: #fff;
      width: 180 * @rpx;
      line-height: 60 * @rpx;
      font-size: 24 * @rpx;
      text-align: center;
    }
  }
}
// 上传
.clearfix {
  li {
    width: 160 * @rpx;
    height: 160 * @rpx;
    margin: 0 30 * @rpx 30 * @rpx 0;
    position: relative;
  }
  .picBox {
    .deleteImg {
      position: absolute;
      right: -14 * @rpx;
      top: -20 * @rpx;
    }
    img {
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
  .uploadPic {
    // border: none!important;
    border: 1px solid #ddd;
    p {
      position: absolute;
      left: 30 * @rpx;
      top: 30 * @rpx;
      i {
        color: #999;
      }
    }
    input {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
