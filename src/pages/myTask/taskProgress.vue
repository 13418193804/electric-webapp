<template>
  <div class="details">
    <cheader title="我的任务" @leftClick="leftClick"></cheader>
    <div class="details-declare">
        <div class="flex details-declare-list">
            <div class="div div1"><i class="icon"><img src="../../assets/01.png" alt=""></i>报警：</div>
            <div class="div">深圳大道</div>
            <div class="details-declare-list-swich">
              <!-- <button @click="getProgress()">处理</button> -->
              <!-- <div class="md-example-child md-example-child-switch md-example-child-switch-0">
                <md-switch
                    v-model="isActive"
                    @change="handler('switch0', isActive, $event)"
                  ></md-switch>
                </div> -->
            </div>
        </div>
        <div class="flex details-declare-list">
            <div class="div div1"><i class="icon"><img src="../../assets/02.png" alt="" class="A"></i></div>
            <div class="div">系统自动派单 <span>2018年8月10日 12:00:00</span></div>
        </div>
         <div class="flex details-declare-list">
            <div class="div div1"><i class="icon"><img src="../../assets/01.png" alt=""></i>报警：</div>
            <div class="div">深圳大道故障</div>
        </div>
        <div class="flex details-declare-list">
            <div class="div div1">紧急：</div>
            <div class="div">XXX</div>
        </div>
        <div class="flex details-declare-list">
            <div class="div div1">位置：</div>
            <div class="div">深圳22坐标：xx</div>
        </div>
    </div>
    <div class="details-result">
        <div class="flex details-result-cause">
            <div>处理结果</div>
            <div class="details-result-cause-select">
              <!-- <p @click="handelSelect()">&nbsp;{{curName}}</p>
              <div v-show="isOption" class="details-result-cause-select-list">
                  <div v-for="(item,index) in option" :key="index" @click="handelClick(item,index)" :class="{cur:index == curOption}">{{item.name}}</div>
              </div> -->
              <div class="selectBox">
                    <div class="blockBlue"></div>
                    <select>
                        <option value ="volvo">损耗</option>
                        <option value ="saab">任务单</option>
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
               <div>
                  <textarea style="width:100%;height:50px;border:1px solid #999;outline:none;padding-left:10px;" placeholder="暂时不处理的原因"></textarea>
                </div>
            </div>
            <div class="flex details-result-cause-check" v-if="curId == 3">
                <textarea style="width:100%;height:50px;border:1px solid #999;outline:none;padding-left:10px;" placeholder="暂时不处理的原因"></textarea>
            </div>
        </div>
        <div class="flex details-result-cause">
            <div>备注：</div>
            <div>
              <md-input-item
                ref="input0"
                type="textarea"
                :maxlength="200"
              ></md-input-item>
            </div>
        </div>
        <div class="details-result-cause">
            <div>上传：</div>
            <ul class="clearfix">
                <li v-if="imgs.length > 0" v-for='(item ,index ) in imgs' :key="index">
                    <img :src="item">
                </li>
                <li style="position:relative" v-if="imgs.length>=6 ? false : true">
                    <i class="iconfont icon-shangchuantupian"></i> <input class="upload" @change='add_img'  type="file" style="opacity:0;">
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
      imgs: [],
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
        this.$router.push('/')
    },
    handelSelect(){
      this.isOption = true
    },
    handelClick(item,index){
      console.log('当前',item)
      this.curOption = index
      this.curName = item.name
      this.curId = item.id
      this.isOption = false
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
  &-declare{
    width: 90%;margin: 40*@rpx auto 0*@rpx;
    &-list{
      flex-wrap: wrap;background:#eee;padding:0 5px;position: relative;
      font-size:24*@rpx;border-bottom: 1px solid #fff;
      .div{
        width:69%;line-height: 30px;
      }
      .div1{
        width: 20%;text-align: right;
      }
      &-swich{
        position: absolute;right: 2px;top: 2px;
        button{
          background: #409EFF;color: #fff;border: none;border-radius: 5px;
        }
      }
    }
  }
  &-result{
    padding: 5%;
    &-cause{
      margin-bottom: 10*@rpx;line-height: 40px;
      div{
        line-height: 30px;
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
        span{
          display: inline-block;width: 50%;flex-wrap: wrap;line-height: 64*@rpx;
        }
        .cur{
          color: #409EFF;
        }
      }
    }
  }
}

</style>
