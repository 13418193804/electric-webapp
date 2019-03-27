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
import { loginMQTT } from './mqtt';
// import { base_url } from './api/conf';
// Vue.prototype.baseImageUrl = base_url
FastClick.attach(document.body)



Vue.use(mandMobile)
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
        this.loginMQTT = loginMQTT
        // this.service = httpService
    },
    // 判断是否登录
    beforeCreate() {
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
    if (to.path === '/login' || to.path === '/configIp') {
        next();
    } else {
        if ((newVue.$store.getters.getToken || '') == '') {
            next('/login');
        } else {
            next();
        }
    }
});

