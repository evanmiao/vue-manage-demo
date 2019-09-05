import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/components/Create'
import Manage from '@/components/Manage'

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
