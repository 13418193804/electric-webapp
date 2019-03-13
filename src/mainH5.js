// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './AppH5'
import router from './router'
import wxService from './api/wxService'
import httpService from './api/httpService'
import store from './store/index'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
import BScroll from 'better-scroll'
import * as FastClick from "fastclick"
// import { base_url } from './api/conf';
// Vue.prototype.baseImageUrl = base_url

FastClick.attach(document.body)

// import BMap from 'BMap'

// import VueAMap from "vue-amap";
// VueAMap.initAMapApiLoader({
//     key: "e7eba2dbd02bf2fb365fac7dd7070530",
//     plugin: [
//       "AMap.Autocomplete", //输入提示插件
//       "AMap.PlaceSearch", //POI搜索插件
//       "AMap.Scale", //右下角缩略图插件 比例尺
//       "AMap.OverView", //地图鹰眼插件
//       "AMap.ToolBar", //地图工具条
//       "AMap.MapType", //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
//       "AMap.PolyEditor", //编辑 折线多，边形
//       "AMap.CircleEditor", //圆形编辑器插件
//       "AMap.Geolocation" //定位控件，用来获取和展示用户主机所在的经纬度位置
//     ],
//     uiVersion: "1.0"
//   });


// Vue.use(VueAMap)

Vue.use(mandMobile)
// Vue.use(BMap)

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.mixin({
    data() {
        return {
            service: '', // 服务
            router: '/', // 路由路径
            imgSrc: '' // 图片路径
        }
    },
    methods: {
        newroot() {
            return this.$route
        },
        navigatePageTo(url) {
            this.$router.push(url)
        },
        reLaunchPageTo(url) {
            this.$router.replace(url)
        }
    },
    created() {
        this.service = httpService
    },
    // 判断是否登录
    beforeCreate(){
       
    }
})

/* eslint-disable no-new */
let newVue = new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store
})


router.beforeEach((to, from, next) => {
    if (to.path === '/login' || to.path === '/configIp' ) {
      next();
    } else {
      if ((newVue.$store.getters.getToken||'') =='') {
        console.log('kong')
        next('/login');
      } else {
        next();
      }
    }
  });

