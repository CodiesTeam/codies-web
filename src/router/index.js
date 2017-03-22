import Vue from 'vue'
import Router from 'vue-router'
import New from '@/components/New'
import Top from '@/components/Top'
import Tags from '@/components/Tags'
import Like from '@/components/Like'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/top',
      name: 'top',
      component: Top
    },
    {
      path: '/tags',
      name: 'tags',
      component: Tags
    },
    {
      path: '/like',
      name: 'like',
      component: Like
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    { path: '/',
      redirect: '/top'
    }
  ]
})
