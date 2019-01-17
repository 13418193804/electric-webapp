<template>
  <div class="homePage">


<button @click="onConnected()">订阅消息</button>
<div id="index">字体16号</div>


<div v-for="item in messageList">

  {{item}}
  
</div>
<div v-if="os == 'wx'">
  <map
      id="myMap"
      style="width: 100%; height: 300px;"
      :latitude="latitude"
      :longitude="longitude"
      :markers="markers"
      :covers="covers"
      show-location
    ></map>

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
      ],
      messageList:[]
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

// var client  = mqtt.connect('mqtt://120.78.135.69:9000');


// client.on('connect', function () {
//    console.log('>>> connected')
//   // 发布主题
//   //  setInterval(
//   //  		()=>{client.publish('mqtt', '30');},
//   //  		3000
//   //  	);


//   // 订阅主题/temperature  在message 处接收
//      client.subscribe('/temperature');
// })

// client.on('message',  (topic, message)=> {
//   var data = JSON.parse(message.toString());

//   this.messageList.push(message.toString())
// sendMessage(message.toString())




// })
console.log('------')
console.log(this.service)

  }
  }
};
</script>

<style scoped  lang="less">

@import '../../../static/css/common.less';
  #index {font-size:32*@rpx;}


</style>
