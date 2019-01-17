import Vue from 'vue'
import Router from 'vue-router'
import game from '../pages/game/index.vue'
import home from '../pages/home/index.vue'
import result from '../pages/result/index.vue'
import test from '../pages/test/index.vue'
import server from '../pages/server/index.vue'
import map from '../pages/map/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home,
    alias: '/pages/home/main'
  }, {
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


]
})
