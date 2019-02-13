import Vue from 'vue'
import Router from 'vue-router'
import game from '../pages/game/index.vue'
import home from '../pages/home/index.vue'
import result from '../pages/result/index.vue'
import test from '../pages/test/index.vue'
import server from '../pages/server/index.vue'
import map from '../pages/map/index.vue'
import login from '../pages/login/login.vue'
import myTask from '../pages/myTask/taskList.vue' //我的任务
import taskDetails from '../pages/myTask/taskDetails.vue' 
import taskProgress from '../pages/myTask/taskProgress.vue' 

import demo from '../pages/myTask/demo.vue'
import my from '../pages/mine/my.vue' //我的
import sign from '../pages/mine/sign.vue' 
import inform from '../pages/mine/inform.vue' 
import message from '../pages/mine/message.vue' 
import material from '../pages/material/materialApply.vue' //我的物料
import equipment from '../pages/equipment/equipmentList.vue' //我的设备
import equipmentDetails from '../pages/equipment/equipmentDetails.vue'
import equimentRecord from '../pages/equipment/equimentRecord.vue' 

// #0f91ef
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home,
    alias: '/pages/home/main'
  },

   {
    path: '/game',
    name: 'game',
    component: game,
    alias: '/pages/game/main'
  }, {
    path: '/result',
    name: 'result',
    component: result,
    alias: '/pages/result/main'
  },
  {
    path: '/test',
    name: 'test',
    component: test,
    alias: '/pages/test/main'
  },
  {
    path: '/server',
    name: 'server',
    component: server,
    alias: '/pages/server/main'
  },

  {
    path: '/map',
    name: 'map',
    component: map,
    alias: '/pages/map/main'
  },

  {
    path: '/login',
    name: 'login',
    component: login,
    alias: '/pages/login/login'
  },
  {
    path: '/myTask',
    name: 'myTask',
    component: myTask,
    alias: '/pages/myTask/taskList'
  },
  
  {
    path: '/taskDetails',
    name: 'taskDetails',
    component: taskDetails,
    alias: '/pages/myTask/taskDetails'
  },
  {
    path: '/taskProgress',
    name: 'taskProgress',
    component: taskProgress,
    alias: '/pages/myTask/taskProgress'
  },
  {
    path: '/demo',
    name: 'demo',
    component: demo,
    alias: '/pages/myTask/demo'
  },
  {
    path: '/material',
    name: 'material',
    component: material,
    alias: '/pages/material/materialApply'
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: equipment,
    alias: '/pages/equipment/equipmentList'
  },
  {
    path: '/equipmentDetails',
    name: 'equipmentDetails',
    component: equipmentDetails,
    alias: '/pages/equipment/equipmentDetails'
  },
  {
    path: '/equimentRecord',
    name: 'equimentRecord',
    component: equimentRecord,
    alias: '/pages/equipment/equimentRecord'
  },
  {
    path: '/my',
    name: 'my',
    component: my,
    alias: '/pages/mine/my'
  },
  {
    path: '/sign',
    name: 'sign',
    component: sign,
    alias: '/pages/mine/sign'
  },
  {
    path: '/inform',
    name: 'inform',
    component: inform,
    alias: '/pages/mine/inform'
  },
  {
    path: '/message',
    name: 'message',
    component: message,
    alias: '/pages/mine/message'
  },

]
})
