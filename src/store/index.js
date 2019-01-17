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



export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})
