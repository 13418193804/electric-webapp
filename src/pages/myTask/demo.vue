<template>
  <div class="taskBox">
    <h1>demo</h1>
     <div class="md-example-child md-example-child-scroll-view md-example-child-scroll-view-1">
        <md-scroll-view
        ref="scrollView"
        :scrolling-x="false"
        @refreshing="$_onRefresh"
        >
        <md-scroll-view-refresh
            slot="refresh"
            slot-scope="{ scrollTop, isRefreshActive, isRefreshing }"
            :scroll-top="scrollTop"
            :is-refreshing="isRefreshing"
            :is-refresh-active="isRefreshActive"
        ></md-scroll-view-refresh>
        <div
            v-for="i in list"
            :key="i"
            class="scroll-view-list"
        >
            <p class="scroll-view-item">{{i}}</p>
        </div>
        </md-scroll-view>
    </div>
  </div>
</template>

<script>
import {ScrollView, ScrollViewRefresh} from 'mand-mobile'
export default {
  name: 'scroll-view-demo-0',
  components: {
    [ScrollView.name]: ScrollView,
    [ScrollViewRefresh.name]: ScrollViewRefresh,
  },
  data () {
    return {
      list: 5,
      isFinished: false,
    }
  },
  mounted () {
    window.ScrollViewTrigger1 = () => {
      this.$refs.scrollView.triggerRefresh()
    }
  },
  methods: {
     $_onRefresh() {
      // async data
      setTimeout(() => {
        this.list += 5
        this.$refs.scrollView.finishRefresh()
      }, 2000)
    },
  }
}
</script>

<style lang="less">
@import '../../../static/css/common.less';
.md-scroll-view{
    .scroll-view-list{
        text-align: center;
        p{
            font-size: 16px;
        }
    }
}

</style>
