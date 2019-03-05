<template>
  <div>
       <!-- 弹窗 -->
       <!-- <md-button @click.native="showNoMask=true">点击蒙层关闭</md-button> -->
        <md-landscape v-model="showNoMask" :mask-closable="true">
            <div class="apply">
                <div class="apply-list">物料编码：987654</div>
                <div class="apply-list">物料名称：网线</div>
                <div class="apply-list">物料名称：个</div>
                <div class="flex apply-list">
                     <div>数量：</div>
                     <div>{{sum}} <span @click="getMinute()"><img src="../../assets/jian.png" alt=""></span> {{nowNum}} <span @click="getAdd()"><img src="../../assets/jia.png" alt=""></span></div>
                 </div>
                <div class="apply-list selectBox" style="width:200px;">
                    <div class="blockBlue"></div>
                    <select>
                        <option value ="volvo">损耗</option>
                        <option value ="saab">任务单</option>
                    </select>
                </div>
                <div class="flex flex-pack-justify apply-list">
                    <div>任务单：967678</div>
                    <div class="tag">选择任务单</div>
                </div>
                <div class="apply-list">
                    <span>备注：</span>
                    <div>
                        <textarea></textarea>
                    </div>
                </div>
                <div class="footer-btn">
                    <button class="btn btn-white">取消</button>
                    <button class="btn btn-blue" @click="showNoMask=false">确定</button>
                </div>
            </div>
        </md-landscape>
  </div>
</template>

<script>
import {Landscape, Toast, Button} from 'mand-mobile'
export default {
  name: 'landscape-demo',
    components: {
      [Landscape.name]: Landscape,
      [Button.name]: Button
  },
  data () {
    return {
      showNoMask: true,
      sum:11,
      nowNum: 1
    }
  },
  mounted () {
    this.getDataList()
  },
  methods: {
    /* 蒙层 */
    alert(msg) {
      Toast.succeed(msg)
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
    },
    /* end */
    
  }
}
</script>

<style lang="less">
@import '../../../static/css/common.less';
// 蒙层
.apply{
    background: #fff;padding:20*@rpx; border-radius: 10*@rpx;
    &-list{
        margin-bottom: 10*@rpx;font-size: 24*@rpx;
        div{
            font-size: 24*@rpx;
            span{
                font-size: 24*@rpx;
            }
            textarea{
                width: 100%;height: 100*@rpx;border: 1px solid #ddd;resize: none;
            }
        }
        img{
            width: 15px;height: 15px;vertical-align: middle;
        }
        span{
            margin-bottom: 10*@rpx;font-size: 24*@rpx;display: inline-block;
        }
    }
    
}
</style>
