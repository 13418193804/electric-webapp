<template>
  <div class="loginBox">
    <div class="logoImg">
        <img src="" alt="">
    </div>
    <h1>智 能 电 源 箱 管 理</h1>
    <div class="loginForm">
        <div>
            <input type="text" name="" placeholder="请输入账号"> 
        </div>
        <div>
            <input type="text" name="" placeholder="请输入密码"> 
        </div>
        <span class="forget">忘记密码</span>
    </div>
    <div class="loginCode">
        <!-- <img src="" alt=""> -->
        <span></span>
        <button>登陆</button>
    </div>

  </div>
</template>

<script>
export default {
  data () { // 选项 数据
    return {

    }
  },
  components: { // 定义组件

  },
  methods: { // 事件处理方法

  },
  created () { // 生命周期函数

  },
  mounted () {
      
  }
}
</script>

<style lang="less">
@import '../../../static/css/common.less';
.loginBox{
    padding: 12% 5%;
    .logoImg{
        width: 150px*@rpx;height: 150px*@rpx;border-radius: 50%;border: 2px*@rpx solid #fff;
        text-align: center;margin:0 auto;
        img{
            width: 150px*@rpx;height: 150px*@rpx;border-radius: 50%;border: 2px*@rpx solid #fff;
        }
    }
    h1{
        font-size: 40px*@rpx;margin-top: 20px*@rpx;
    }
    .loginForm{
        text-align: left;padding:30px*@rpx 60px*@rpx;position:relative;
        div{
            margin-bottom: 20px*@rpx;
            input{
                border:none; border-bottom: 2px*@rpx solid #fff;
                height: 70px*@rpx;padding-left: 10px*@rpx;width: 100%;
                background: #25487e;color: #fff;
            }
        }
        .forget{
            position: absolute;font-size: 24px*@rpx;right: 60*@rpx;
        }
    }
    .loginCode{
        margin-top: 60px*@rpx;
        span{
            display: block;margin: 0 auto;margin-bottom: 30px*@rpx;
            width: 160px*@rpx;height: 160px*@rpx;border: 2px*@rpx solid #fff;
        }
        button{
            width: 210px*@rpx;height: 70px*@rpx;border-radius: 100px*@rpx;background: #fff;
            color: blue;
        }
    }
}
</style>
