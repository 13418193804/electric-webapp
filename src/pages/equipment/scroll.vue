<template>
  <div id="app">
   

      <div class="scroll-view">
<better-scroll></better-scroll>
      </div>

  </div>
</template>

<script>
import betterScroll from "../../components/better-scroll";
let count = 1;
export default {
  name: "app",
  components: { betterScroll },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style>
.scroll-view {
}
</style>