<template>
  <div class="details">
    <cheader title="我的任务" @leftClick="leftClick"></cheader>
    <div class="details-declare">
         <div class="flex details-declare-list">
            <div class="left"><i class="icon"><img src="../../assets/01.png" alt=""></i>报警：</div>
            <div class="right">{{detailsData.fault||''}}</div>
        </div>
        <div class="flex details-declare-list auto">
            <div class="left"><i class="icon"><img src="../../assets/02.png" alt="" class="A"></i>{{detailsData.type == 0 ?'系统自动派单':'手动派单'}}</div>
            <div class="right"> <span>{{detailsData.create_time}}</span></div>
        </div>
        <div class="flex details-declare-list" v-if="detailsData.is_emergency">
            <div class="left"><i class="icon"><img src="../../assets/01.png" alt=""></i>紧急</div>
            <div class="right"></div>
        </div>
        <div class="flex details-declare-list">
            <div class="left">设备编号：</div>
            <div class="right"> <span>{{detailsData.device_sn}}</span></div>
        </div>
        <div class="flex details-declare-list">
            <div class="left">设备名称：</div>
            <div class="right"> <span>{{detailsData.device_name}}</span></div>
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
          <div class="flex details-result-cause-check">
                <span v-for="(item,index) in checkData" :key="index" 
                @click="handelCheck(item,index)">
                <i class="iconfont icon-weigouxuan" :class="[comifCheck(item)?'icon-yigouxuan':'']"></i>{{item.name}}</span>
            </div>
            
            <!-- <div class="flex details-result-cause-check" v-if="curId == 1">
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
            </div> -->
        </div>
        <div class="flex details-result-cause">
            <div class="left">备注：</div>
            <div class="details-result-cause-remak">
                <textarea v-model="desp" maxlength="255" placeholder="请录入详细问题描述"></textarea>
            </div>
        </div>
        <div class="details-result-cause">
            <div class="left">上传：</div>
              <ul class="flex clearfix">
                <template v-if="imgs.length>0" v-for="(item, index) in imgs">
                  <li class="picBox" @click="showViewer(index, $event)" :key="index">
                      <div class="deleteImg" @click.stop="getDeleteImg(index)">
                        <i class="iconfont icon-guanbi"></i>
                      </div>
                      <div class="img" :style="`background: url(${baseurl+item}) center no-repeat;background-size:cover;`">
                        
                      </div>
                      <!-- <img :src="baseurl + item"> -->
                  </li>
                </template>
                  <li class="uploadPic" v-if="imgs.length>=6 ? false : true">
                      <p><i class="iconfont icon-shangchuantupian"></i></p>
                      <input class="upload" ref="input" @change='add_img'  type="file" style="opacity:0;">
                  </li>
              </ul>
        </div>
        <md-image-viewer
        v-model="isViewerShow"
        :list="urlimgs"
        :has-dots="true"
        :initial-index="viewerIndex">
      </md-image-viewer>
    </div>
    <div class="flex flex-pack-center details-footer">
      <div class="details-footer-btn column6" @click="goMaterialList()">物料申请</div>
      <div class="details-footer-btn" @click="getSubmit()">提交</div>
    </div>
  </div> 
</template>

<script>
import cheader from "../../components/header";
import { Switch, ImageViewer } from "mand-mobile";
import { setBaseUrl, getBaseUrl } from "../../api/conf";
export default {
  data() {
    // 选项 数据
    return {
      isActive: "",
      active: null,
      detailsData: [],
      checkData: [], // 选项列表
      listData: [],
      // checkDataNo: [{ name: "无法处理" }, { name: "下雨" }, { name: "其他" }],
      option: [
        { name: "已解决", id: 2 },
        { name: "未解决", id: 1 }
      ],
      desp: "", // 备注
      curOption: "", //处理结果 option
      status: "", // 维修状态
      solution: "", // 解决方法
      curId: 1,
      isOption: false,
      imgs: [], // 图片路径
      imgList: [], //array img
      imgData: {
        accept: "image/gif, image/jpeg, image/png, image/jpg"
      },
      baseurl: "", // url
      isViewerShow: false,
      viewerIndex: 0,
      urlimgs: []
    };
  },
  name: "switch-demo",
  components: {
    [Switch.name]: Switch,
    [ImageViewer.name]: ImageViewer,
    // 定义组件
    cheader
  },
  created() {
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted() {
    this.baseurl = getBaseUrl();
    this.getDataDetail();
  },
  methods: {
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
          console.log('查看',res.data)
            this.detailsData = res.data.workorder;
            this.checkData = res.data.solution_list
            this.listData = this.detailsData.solution.split(',')
          console.log(this.listData)
            if (this.detailsData.status == 0) {
              this.curOption = "";
            } else {
              this.curOption = this.detailsData.status;
              this.status = this.detailsData.status;
            }
            this.desp = this.detailsData.desp;
            this.imgs = this.detailsData.imgs;
            this.imgs.forEach(item => {
              let url = this.baseurl + item;
              this.urlimgs.push(url);
            });
          } else {
            this.$dialog.alert({
              content: res.msg,
              confirmText: "确定"
            });
          }
        });
    },
    getDeleteImg(index) {
      this.imgs.splice(index, 1);
    },
    showViewer(index) {
      this.viewerIndex = index;
      this.isViewerShow = true;
    },
    add_img(event) {
      let reader = new FileReader();
      let img1 = event.target.files[0];
      let type = img1.type; //文件的类型，判断是否是图片
      let size = img1.size; //文件的大小，判断图片的大小
      if (this.imgData.accept.indexOf(type) == -1) {
        this.$dialog.alert({
          content: "请选择我们支持的图片格式！",
          confirmText: "确定"
        });
        return false;
      }
      if (size > 3145728) {
        this.$dialog.alert({
          content: "请选择3M以内的图片！",
          confirmText: "确定"
        });
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
            uri = this.baseurl + res.data.img_path;
            this.urlimgs.push(uri);
            reader.readAsDataURL(img1);
            reader.onloadend = () => {
              this.imgs.push(res.data.img_path);
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
      if (this.detailsData.status == "0") {
        this.$router.push({ name: "taskDetails" });
      } else {
        this.$router.push({ name: "myTask", query: { active: "1" } });
      }
    },
    handelSelect(event) {
      this.curId = event.target.value;
      this.status = event.target.value;
    },
    removeByValue(arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
          arr.splice(i, 1);
          break;
        }
      }
    },
    handelCheck(item) {
      if(this.listData.filter(items=>{
        return item.id == items
      }).length>0){
        this.removeByValue(this.listData,item.id)
      }else{
        this.listData.push(item.id)
      }
    },
    comifCheck(item){
      if(this.listData.filter(items=>{
        return item.id == items
      }).length>0){
            return true
      }else{
        return false
      }
    },
    /* API */
    getSubmit() {
      this.$toast.loading("加载中...");
      if (this.status === "") {
        this.$toast.hide();
        this.$toast.info("请选择处理结果");
        return;
      }
      let list = [];
      this.solution = this.listData.join(',')
      list.push("token=" + this.$store.getters.getToken);
      list.push("id=" + this.detailsData.id);
      list.push("solution=" + this.solution);
      list.push("desp=" + this.desp);
      list.push("status=" + this.status);
      let length = this.imgs.filter(item => {
        list.push("img_paths=" + item);
      }).length;
      this.service
        .httpRequest({
          url: "/aapi/workorderdetail?" + list.join("&"),
          methods: "post",
          data: {}
        })
        .then(res => {
          this.$toast.hide();
          if (res.returnStatus) {
            this.$toast.succeed("已提交申请", 2000, true);
            setTimeout(() => {
              this.leftClick();
            }, 1000);
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
        params: { detailsData: this.detailsData }
        // params: { id: this.detailsData.id }
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
          cheak: inline-block;
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
          font-size: 24 * @rpx!important;
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
        textarea {
          width: 93%;
          border: 1px solid #ddd;
          outline: none;
          height: 90 * @rpx;
          font-size: 24 * @rpx;
          padding: 5px 10px;
          line-height: 44 * @rpx!important;
          resize: none;
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
// .details{
//   width: 100%;height: 100%;
//   &-declare{
//     width: 90%;margin: 45*@rpx auto 0*@rpx;
//     &-list{
//       flex-wrap: wrap;background:#eeeeef;padding:0 5px;position: relative;
//       font-size:24*@rpx;border-bottom: 1px solid #fff;
//       .left{
//         width: 160*@rpx;text-align: right;line-height: 30px;
//       }
//       .right{
//         width:430*@rpx;line-height: 30px;
//       }
//       &-swich{
//         position: absolute;right: 3px;top: 4px;
//         button{
//           background: #2680f0;color: #fff;border: none;border-radius: 5px;width:100*@rpx;height: 50*@rpx;font-size: 24*@rpx;
//         }
//       }
//     }
//     .auto{
//       .left{
//         width: 230*@rpx!important;margin-right: 10*@rpx;
//       }
//       .right{
//         width: 380*@rpx!important;
//       }
//     }
//   }
//   &-map{
//     width: 90%;margin: 60*@rpx auto 0*@rpx;
//   }
// }
// 上传
.clearfix {
  flex-wrap: wrap;
  li {
    width: 160 * @rpx;
    height: 160 * @rpx;
    margin: 0 50 * @rpx 30 * @rpx 0;
    position: relative;
  }
  .picBox {
    .img {
      width: 160 * @rpx;
      height: 160 * @rpx;
    }
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
.md-example-child-image-reader {
  float: left;
  width: 100%;
  .md-example-child {
    float: left;
  }
  ul {
    float: left;
    width: 100%;
    li {
      position: relative;
      float: left;
      width: 22%;
      padding-bottom: 22%;
      margin-left: 2%;
      margin-top: 2%;
      border-sizing: border-box;
      border-radius: 2px;
      overflow: hidden;
      list-style: none;
      .img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
