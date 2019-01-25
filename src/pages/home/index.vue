<template>
  <div class="homePage">
    <div class="homeTitle"> <h1>智能运维管理系统</h1> </div>
    <div class="banner">
      <img src="../../assets/homebanner.png" alt="">
    </div>
    <div class="flex menus">
        <div @click="getTask()">我的任务</div>
        <div @click="getEquipment()">设备管理</div>
        <div @click="getMaterial()"> 物料管理</div>
        <div>消息</div>
    </div>
    <div class="cartogram">
      <div class="flex catTop">
          <div><i class="dots"></i>离线设备 <span>2</span>台</div>
          <div><i class="dots"></i>未处理任务 <span>2</span>条</div>
          <div><i class="dots"></i>在线设备 <span>2</span>台</div>
          <div><i class="dots"></i>以处理任务 <span>2</span>条</div>
      </div>
      <div class="chat">
        <canvas id="canvas_circle" width="290" height="200"> </canvas> 
      </div>
    </div>
    <div class="flex footNav">
      <div class="footCur">首页</div>
      <div @click="goMine()">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 选项 数据
    return {};
  },
  components: {
    // 定义组件
  },

  methods: {
    // 事件处理方法
    gotoGame(path) {
      this.reLaunchPageTo(this.router + path);
    },
    getTask(){
      this.$router.push({name:'myTask'}) // 我的任务
    },
    getMaterial(){
      this.$router.push({name:'material'}) // 我的任务
    },
    getEquipment(){
      this.$router.push({name: 'equipment'}) // 我的设备
    },
    goMine() {
      this.$router.push({name: 'my'}) // 我的
    },
    //绘制饼图  
      drawCircle(canvasId, data_arr, color_arr, text_arr)  
        {  
            var c = document.getElementById(canvasId);  
            var ctx = c.getContext("2d");  

            var radius = c.height / 2 - 20; //半径  
            var ox = radius + 20, oy = radius + 20; //圆心  

            var width = 30, height = 10; //图例宽和高  
            var posX = ox * 2 + 20, posY = 30;   //  
            var textX = posX + width + 5, textY = posY + 10;  

            var startAngle = 0; //起始弧度  
            var endAngle = 0;   //结束弧度  
            for (var i = 0; i < data_arr.length; i++)  
            {  
                //绘制饼图  
                endAngle = endAngle + data_arr[i] * Math.PI * 2; //结束弧度  
                ctx.fillStyle = color_arr[i];  
                ctx.beginPath();  
                ctx.moveTo(ox, oy); //移动到到圆心  
                ctx.arc(ox, oy, radius, startAngle, endAngle, false);  
                ctx.closePath();  
                ctx.fill();  
                startAngle = endAngle; //设置起始弧度  
            }  
      },

      init() {  
        //绘制饼图  
        //比例数据和颜色  
        var data_arr = [0.2,0.8,];  
        var color_arr = ["#FFCC00",'#FF9934'];  
        var text_arr = ["第一季度", "第二季度", ];  

        drawCircle("canvas_circle", data_arr, color_arr, text_arr);  
    }  
  },
  created() {
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted() {
    this.drawCircle()
    this.init()
    // this.service
    //   .httpRequest({
    //     url: "/address/queryprovince",
    //     methods: "post",
    //     data: {}
    //   })
    //   .then(res => {
    //     console.log(res);
    //   });
    // console.log('home999', this.$root, this.$root.$mp)
  }
};
</script>

<style lang="less">
@import '../../../static/css/common.less';
  .homeTitle{
    text-align: center;padding: 5% 0;
    h1{
      font-size: 36*@rpx;
    }
  }
  .banner{
    width: 70%;margin: 0 auto;height: 150*@rpx;background: #409eff;margin-bottom: 20*@rpx;
    img{
      width: 100%;height: 100%;
    }
  }
  .menus{
    width: 70%;margin: 0 auto;flex-wrap: wrap;padding: 30*@rpx;
    >div{
      width: 50%;text-align: center;height: 150*@rpx;
    }
  }
  .cartogram{
    height: 600*@rpx;background:#eee;
   .catTop{
     background: #ccc;height: 100*@rpx;flex-wrap:wrap;justify-content: space-between;
     padding: 0 0%;
     div{
       width: 50%;line-height: 50*@rpx;text-align:center;color:#fff;
       .dots{
         width: 5px;height: 5px;border-radius: 50%;background: #fff;display: inline-block;
         margin-right: 5px;
       }
     }
   } 
  }
</style>
