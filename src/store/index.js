import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters.js'

Vue.use(Vuex)

/** 状态定义 */
export const state = {
    result: '',
    os:''
}

// 定义所需的 mutations
const mutations = {
    SETOS(state,os) {
        state.os=os
    },
}
const store = new Vuex.Store({
    state: {
        // 存储token
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
    },
    mutations: {
        // 修改token，并将token存入localStorage
        changeLogin (state, user) {
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
        }
    }
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

