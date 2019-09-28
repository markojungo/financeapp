import Vue from 'vue'
import Router from 'vue-router'
import Summary from '@/components/Summary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Summary',
      component: Summary
    }
  ]
})
