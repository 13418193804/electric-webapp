<template>
  <div class="map">
   <!-- <p>地图</p> -->

 	<div id="l-map"></div>


   
  </div>
</template>

<script>
import { init, setPlace, getPosition, setIcon } from "./baidu";
export default {
  data() {
    // 选项 数据
    return {
      map:null
    };
  },
  props: {
    detailsData: Object,
    required: true
  },
  mounted (){
    init(map => {
      this.map = map;
    console.log('map===1', this.detailsData)

      // setPoint(this.map,29.602414,106.515893)
      // setIcon(this.map,106.515893,29.602414)
    });
  },
  methods: {
    // ready() {
    //   var map = new BMap.Map('allmap');
    //   var point = new BMap.Point(104.075796, 30.659684);
    //   map.centerAndZoom(point, 14);
    //   map.addControl(new BMap.MapTypeControl());
    //   map.enableScrollWheelZoom(true);
    //   map.enableDoubleClickZoom(true);
    //   var marker = new BMap.Marker(point);
    //   map.addOverlay(marker)
    // }
    mapSetIcon(latitude,longitude){
      setTimeout(()=>{
        this.$nextTick(()=>{
          setIcon(this.map,longitude,latitude)
        })  
      },1500)
   

    }
  },
}

</script>

<style>
#l-map {
  height: 300px;
  width: 100%;
}
</style>
