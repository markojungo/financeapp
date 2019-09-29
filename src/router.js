import Vue from 'vue'
import Router from 'vue-router'

import Summary from '@/components/Summary'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/summary',
      name: 'Summary',
      component: Summary
    }
  ]
})
