import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/register'
import Hello from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
