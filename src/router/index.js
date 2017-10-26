import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Example from '@/components/Example'
import TodoPage from '@/components/TodoPage'//추가

Vue.use(Router)

export default new Router({
  routes: [
    {//추가
      path: '/',
      name: 'TodoPage',
      component: TodoPage
    }
  ]
})
