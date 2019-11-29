import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/Home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      children: [
        {
          path: 'Hdfs',
          name: 'hdfs',
          component: () => import('@/views/components/Hdfs')
        },
        {
          path: 'Menu',
          name: 'menu',
          component: () => import('@/views/components/Menu')
        },
        {
          path: 'Model',
          name: 'model',
          component: () => import('@/views/components/Model')
        },
        {
          path: 'Count',
          name: 'count',
          component: () => import('@/views/components/Count')
        },
        {
          path: 'Task',
          name: 'task',
          component: () => import('@/views/components/Task')
        },
        {
          path: 'Procedure',
          name: 'procedure',
          component: () => import('@/views/components/Procedure')
        }
      ]
    },
    {
      path: '/Process',
      name: 'process',
      component: () => import('@/views/components/Process'),
      children: [
        {
          path: 'Operator',
          name: 'operator',
          component: () => import('@/views/components/Operator')
        }
      ]
    },
    {
      path: '/Program',
      name: 'program',
      component: () => import('@/views/components/Program')
    }
  ]
})
