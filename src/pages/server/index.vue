<template>
  <div class="homePage">


<div style="font-size:16px;"  >
  字体大小
</div>
<div style="font-size:16rpx;">
  字体大小
</div>


<div>



</div>



  </div>
</template>

<script>
import mqtt from 'mqtt'



export default {
  data() {
    // 选项 数据
    return {
      os: this.$store.getters["getOs"],
      mapCtx: {},
      latitude: 23.099994,
      longitude: 113.32452,
      markers: [
        {
          id: 1,
          latitude: 23.099994,
          longitude: 113.32452,
          name: "T.I.T 创意园"
        }
      ],
      covers: [
        {
          latitude: 23.099994,
          longitude: 113.34452,
          iconPath: "../../../static/img/location.png"
        },
        {
          latitude: 23.099994,
          longitude: 113.30452,
          iconPath: "../../../static/img/location.png"
        }
      ]
    };
  },
  components: {
    // 定义组件
  },
  methods: {
    
  },
  created() {
    // 生命周期函数
    // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted() {
    console.log(this.os);
  if(this.os == 'wx'){
    this.mapCtx = wx.createMapContext("myMap");
  }else{



const mqtt = require('mqtt');
var client  = mqtt.connect('tcp://119.29.102.131:1883');

client.on('connect', function () {
   console.log('>>> connected');
   client.subscribe('/temperature');
})

client.on('message', function (topic, message) {
  var temperature = parseInt(message.toString());
  var data = {temperature};

  if (temperature >= 60) {
        data.tips = "热... 500服务器故障";
  }
  else if (temperature >= 50) {
        data.tips = "今天天气非常热，建议不要穿衣服了";
  }
  else if (temperature >= 40) {
        data.tips = "今天天气十分的热，建议穿短袖T恤+短裤";
  }
  else if (temperature >= 30) {
        data.tips = "今天天气有点的热，建议穿短袖T恤";
  }
  else if (temperature >= 0) {
        data.tips = "今天天气正好，可以穿上一件薄衣服";
  }
  else if (temperature >= -10) {
        data.tips = "今天天气十分寒冷，棉袄可以穿上一件";    
  }
  else {
        data.tips = "今天天气十分十分寒冷，棉袄可以穿上二件";  
  }
  client.publish('/tips', JSON.stringify(data));
  // if (temperature+1) {}
  // message is Buffer
  console.log(JSON.stringify(data));
})

  }

  }
};
</script>

<style lang="less">
.title_wx{

}

.title{
  

}



</style>
