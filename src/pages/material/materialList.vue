<template>
  <div>
    <cheader title="物料列表" @leftClick="leftClick"></cheader>
    <div class=""></div>
    <div class="details">
        <div class="details-search">
            <md-input-item
            ref="input0"
            type="textarea"
            :maxlength="200"
            placeholder="输入物料名称或者物料编号"
            ></md-input-item>
            <div class="details-search-icon"><i class="iconfont icon-sousuo"></i></div>
        </div>
        <div class="flex details-content">
            <div class="details-content-box">
                <div class="details-content-box-list" v-for="(item,index) in listData" :key="index"
                    @click="handelLook(item,index)" :class="{cur:index == active}"
                >{{item.name}}</div>
            </div>
             <div class="details-content-box">
                 <div class="flex details-content-box-details">
                     <div>型号</div>
                     <div>98766789-K</div>
                 </div>
                 <div class="flex details-content-box-details">
                     <div>库存:</div>
                     <div>{{sum}} <span @click="getMinute()"><img src="../../assets/jian.png" alt=""></span> {{nowNum}} <span @click="getAdd()"><img src="../../assets/jia.png" alt=""></span></div>
                 </div>
            </div>
        </div>
        <div class="details-form">
            <div class="details-form-list">
                关联任务单：76543456789
            </div>
            <!-- <div class="details-form-list">
                领用备注：76543456789
            </div> -->
            <div class="details-form-list">
                申请物料：
                <div class="details-form-list-border">
                    98766789-K整机一台；网线10米；保护开关1个
                </div>
            </div>
             <div class="details-form-list">
                领用备注：
                <div>
                    <textarea style="width:100%;height:50px;border:1px solid #ddd"></textarea>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import cheader from '../../components/header'

export default {
  name: 'HelloWorld',
    components: {
      cheader,
  },
  data () {
    return {
     active: 0,
     sum:11,
     nowNum: 1,
     listData: [{name:'机箱'},{name: '整机'},{name: '电源'},{name: '网线'},{name: '电源保护开关'}]
    }
  },
  mounted () {
      
  },
  methods: {
    leftClick(){
        this.$router.go(-1)
    },
    handelLook(item,index){
        this.active = index
    },
    getMinute(){
        if(this.nowNum === 1){
            return
        } else {
            this.nowNum = this.nowNum - 1
        }
    },
    getAdd(){
        if(this.nowNum === this.sum){
            return
        } else {
            this.nowNum = this.nowNum + 1
        }
    }
  }
}
</script>

<style lang="less">
@import '../../../static/css/common.less';
.details{
     width: 90%;margin: 40*@rpx auto;
    &-search{
        position: relative;margin-bottom:40*@rpx;
        .md-input-item .md-input-item-control .md-input-item-fake, .md-input-item .md-input-item-control .md-input-item-input{
            border:1px solid #eee;border-radius: 5px;height: 35px;padding-left:10px;
        }
        &-icon{
            position: absolute;right: 0;width: 30px;height: 30px;top: 0;line-height: 35px;
        }
    }
    &-content{
        margin-bottom:40*@rpx;
        &-box{
            border:1px solid #ddd;width:70%;height: 400*@rpx;overflow: auto;
            &-list{
                line-height: 28px;border-bottom:1px solid #ddd; 
            }
            &-details{
                margin-bottom: 5px;
                div{
                    line-height: 20px;
                    img{
                        width: 15px;height: 15px;vertical-align: middle;
                    }
                }
            }
            .cur{
                background: #4699ff;color: #fff;
            }
            &-list:last-child{
                border-bottom: none;
            }
        }
        &-box:nth-of-type(1){
            width: 30%;margin-right: 3%;text-align: center;
        }
        &-box:nth-of-type(2){
            padding: 30*@rpx;
        }
    }
    &-form{
        &-list{
            margin-bottom: 10px;
            &-border{
                border:1px solid #ddd; padding: 10px;
            }
        }
    }
}
</style>
