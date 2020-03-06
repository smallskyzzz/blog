import Vue from 'vue'
import Router from 'vue-router'
import ShowBlog from '@/components/ShowBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowBlog',
      component: ShowBlog
    }
  ]
})
