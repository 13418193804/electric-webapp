<template>
  <div class="map">
   <p>地图</p>
  </div>
</template>

<script>
export default {
  data() {
    // 选项 数据
    return {
    };
  },
  mounted (){
    this.ready()
    
  },
  methods: {
    ready() {
      var map = new BMap.Map('allmap');
      var point = new BMap.Point(104.075796, 30.659684);
      map.centerAndZoom(point, 14);
      map.addControl(new BMap.MapTypeControl());
      map.enableScrollWheelZoom(true);
      map.enableDoubleClickZoom(true);
      var marker = new BMap.Marker(point);
      map.addOverlay(marker)
    }
  },
}

</script>

<style>

</style>
