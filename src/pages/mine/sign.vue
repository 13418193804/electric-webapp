<template>
  <div>
    <cheader title="签到记录" @leftClick="leftClick"></cheader>
    <div class="sign">
      <!-- <video class="video" controls width="100%" height="300">
        <source src="../../assets/mp4.mp4" type="video/mp4">
      </video> -->
        <div class="flex flex-pack-justify sign-list" v-for="(item,index) in signData" :key="index">
            <div class="dots">2018年8月10日</div>
            <div>签到时间</div>
        </div>
    </div>
  </div>
</template>

<script>
import cheader from '../../components/header'
export default {
  data() {
    // 选项 数据
    return {
      signData:[]
    };
  },
  components: {
      cheader,
  },
  created() {
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted() {
    this.getList()
  },
  methods: {
    leftClick(){
      this.$router.go(-1)
    },
    getList(){
      this.service.httpRequest({
            url: "/aapi/sign",
            methods: "post",
            data: this.loginForm
        }).then(res => {
            if(res.returnStatus){
               this.signData = res.data
            } else{
                this.$dialog.alert({
                    content:res.msg,
                    confirmText: '确定',
                })
            }
        });
    } 
  }
};
</script>

<style lang="less">
@import '../../../static/css/common.less';
.sign{
  &-list{
    width: 70%;margin-left:7%;margin-top:30*@rpx;  line-height: 44*@rpx;
    div{
     position: relative;padding-left: 20*@rpx;
    }
  }
}
</style>
