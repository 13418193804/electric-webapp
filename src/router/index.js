import Vue from 'vue'
import Router from 'vue-router'
import game from '../pages/game/index.vue'
import home from '../pages/home/index.vue'
import result from '../pages/result/index.vue'
import test from '../pages/test/index.vue'
import server from '../pages/server/index.vue'
import map from '../pages/map/index.vue'
import login from '../pages/login/login.vue'
import myTask from '../pages/myTask/taskList.vue'
import demo from '../pages/myTask/demo.vue'
import my from '../pages/mine/my.vue'
import material from '../pages/material/materialApply.vue'
import equipment from '../pages/equipment/equipmentList.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: map,
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
    path: '/my',
    name: 'my',
    component: my,
    alias: '/pages/mine/my'
  },

]
})
