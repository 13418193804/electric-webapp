import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters.js'

Vue.use(Vuex)

/** 状态定义 */
export const state = {
    result: '',
    os:'',
    userInfo: {
        token:null
    }
}



// 定义所需的 mutations
const mutations = {
    SETOS(state,os) {
        state.os=os
    },
    setUserInfo (state,userInfo){
        state.userInfo = userInfo
    }
}
const store = new Vuex.Store({
    state,
  mutations
});
// service.interceptors.request.use(
//     config => {
//         if (localStorage.getItem('Authorization')) {
//         config.headers.Authorization = localStorage.getItem('Authorization');
//         }
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
// });

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    store
})

