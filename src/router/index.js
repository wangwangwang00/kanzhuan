import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Login'
import Login from '@/components/Login'
import Login1 from '@/components/Login1'
import Login2 from '@/components/Login2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login1',
      name: 'Login',
      component: Login,
      children:[
        {
          path:'/login1',
          component:Login1
        },{
          path:'/login2',
          component:Login2
        }
      ]
    }
  ]
})
