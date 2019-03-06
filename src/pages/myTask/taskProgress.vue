<template>
  <div class="details">
    <cheader title="我的任务" @leftClick="leftClick"></cheader>
    <div class="details-declare">
        <div class="flex details-declare-list">
            <div class="left"><i class="icon"><img src="../../assets/01.png" alt=""></i>报警：</div>
            <div class="right">深圳大道</div>
            <div class="details-declare-list-swich">
            </div>
        </div>
        <div class="flex details-declare-list">
            <div class="left"><i class="icon"><img src="../../assets/02.png" alt="" class="A"></i></div>
            <div class="right">系统自动派单 <span>2018年8月10日 12:00:00</span></div>
        </div>
         <div class="flex details-declare-list">
            <div class="left"><i class="icon"><img src="../../assets/01.png" alt=""></i>报警：</div>
            <div class="right">深圳大道故障</div>
        </div>
        <div class="flex details-declare-list">
            <div class="left">紧急：</div>
            <div class="right">XXX</div>
        </div>
        <div class="flex details-declare-list">
            <div class="left">位置：</div>
            <div class="right">深圳22坐标：xx</div>
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
                @click="handelCheck(index)" :class="{cur:index == active}">
                <i class="iconfont icon-weigouxuan" :class="{'icon-yigouxuan':index == active}"></i>{{item.name}}</span>
            </div>
            <div class=" details-result-cause-check" v-if="curId == 2">
              <span v-for="(item,index) in checkDataNo" :key="index" 
                @click="handelCheck(index)" :class="{cur:index == active}">
                <i class="iconfont icon-weigouxuan" :class="{'icon-yigouxuan':index == active}"></i>{{item.name}}</span>
            </div>
            <div class="flex details-result-cause-check" v-if="curId == 3">
                <textarea placeholder="暂时不处理的原因"></textarea>
            </div>
        </div>
        <div class="flex details-result-cause">
            <div class="left">备注：</div>
            <div class="details-result-cause-remak">
                <input type="text">
            </div>
        </div>
        <div class="details-result-cause">
            <div class="left">上传：</div>
            <ul class="flex clearfix">
                <li class="picBox" v-if="imgs.length>0" v-for='(item ,index ) in imgs'>
                    <div class="deleteImg" @click="getDeleteImg(index)">
                      <i class="iconfont icon-guanbi"></i>
                    </div>
                    <img :src="item">
                </li>
                <li class="uploadPic" v-if="imgs.length>=6 ? false : true">
                    <p><i class="iconfont icon-shangchuantupian"></i></p>
                    <input class="upload" @change='add_img'  type="file" style="opacity:0;">
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import cheader from '../../components/header'
import {Switch} from 'mand-mobile'

export default {
  data() {
    // 选项 数据
    return {
      isActive:'',
      active: 0,
      checkData: [{name:'线路故障'},{name: '元气损坏'},{name: '其他'}],
      checkDataNo: [{name:'无法处理'},{name: '下雨'},{name: '其他'}],
      option:[{name:'已解决',id:1},{name:'未解决',id:2},{name:'暂停',id:3}],
      curName: '', //当前name
      curOption: '',
      curId: 1,
      isOption: false,
      imgs: [1],
      imgData: {
          accept: 'image/gif, image/jpeg, image/png, image/jpg',
      }
    };
  },
  name: 'switch-demo',
  components: {
    [Switch.name]: Switch,
    // 定义组件
    cheader
  },

  methods: {
    getDeleteImg(index){
      this.imgs.splice(index,1)
    },
    add_img(event){  
      let reader =new FileReader();
      let img1=event.target.files[0];
      let type=img1.type;//文件的类型，判断是否是图片
      let size=img1.size;//文件的大小，判断图片的大小
      if(this.imgData.accept.indexOf(type) == -1){
          alert('请选择我们支持的图片格式！');
          return false;
      }
      if(size>3145728){
          alert('请选择3M以内的图片！');
          return false;
      }
      var uri = ''
      let form = new FormData(); 
      form.append('file',img1,img1.name);
      // this.$http.post('/file/upload',form,{
      //     headers:{'Content-Type':'multipart/form-data'}
      // }).then(response => {
      //     console.log(response.data)
      //     uri = response.data.url
      //     reader.readAsDataURL(img1);
      //     var that=this;
      //     reader.onloadend=function(){
      //         that.imgs.push(uri);
      //     }
      // }).catch(error => {
      //     alert('上传图片出错！');
      // })    
    },
    // 事件处理方法
    leftClick(){
        this.$router.go(-1)
    },
    handelSelect(event){
      this.curId = event.target.value;
      console.log(event)
    },
    handelCheck(index){
      this.active = index
    }
  },
  created() {
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted() {
    
  }
};
</script>

<style lang="less" scope>
@import '../../../static/css/common.less';
.details{
  width: 100%;height: 100%;
  
  &-result{
    padding: 5%;
    &-cause{
      margin-bottom: 20*@rpx;line-height: 40px;
      div{
        line-height: 60*@rpx;
        height: 60px*@rpx;
      }
      &-select{
        width: 80%;
        p{
          padding-left:10px;font-size: 12px;
        }
        &-list{
          position: absolute;left: 0;width: 86%;border:1px solid #2680f0;border-top:none;background:#fff;z-index: 10;
          div{
            border-bottom: 1px solid #eee;line-height: 30px;font-size: 12px;padding-left: 10px;
          }
          .cur{
            color: #409EFF;
          }
        }
      }
      &-check{
        height: auto!important;padding-left:135*@rpx;
        span{
          display: inline-block;flex-wrap: wrap;line-height: 64*@rpx;margin-right: 40*@rpx;
        }
        textarea{
          width: 100%;border:1px solid #ddd;outline:none;padding:10*@rpx 20*@rpx;
          height: 100*@rpx;font-size: 24*@rpx;
        }
        .cur{
          color: #409EFF;
        }
      }
      .left{
        width: 120*@rpx;
      }
      &-remak{
        width: 80%;margin-left:15*@rpx;
        input{
          width: 100%;border:1px solid #ddd;outline:none;height: 60*@rpx;
        }
      }
    }
  }
}
// 上传
.clearfix{
  li{
    width: 160*@rpx;height: 160*@rpx;
    margin: 0 30*@rpx 30*@rpx 0;position: relative;
  }
  .picBox{
    .deleteImg{
      position: absolute;right: -14*@rpx;top: -20*@rpx;
    }
    img{
      width: 100%;height: 100%;border:0;
    }
  }
  .uploadPic{
    // border: none!important;
    border: 1px solid #ddd;
    p{
      position: absolute;left: 30*@rpx;top: 30*@rpx;
      i{
        color: #999;
      }
    }
    input{
      width: 100%;height: 100%;
    }
  }
}

</style>
