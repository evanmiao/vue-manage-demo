import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/pages/Create'
import Manage from '@/pages/Manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Create',
      component: Create
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    }
  ]
})
