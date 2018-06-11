import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Components/Home'
import About from '@/Components/About'
import Check from '@/Components/Check'
import Author from '@/Components/Author'
import Search from '@/Components/Search'
import Word from '@/Components/Word'
import NotFound from '@/Components/NotFound'
import Feedback from '@/Components/Feedback'
// Vue.http.options.emulateJSON = true;
Vue.use(Router)

export default new Router({
// mode:'history',
// base:'__dirname',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Index',
      redirect: { name: 'Home' },
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/About',
      alias: '/Info',
      component: About
    },
    {
      path: '/feedback',
      alias: '/feedback',
      component: Feedback
    },
    {
      path: '/Check',
      name: 'Check',
      component: Check
    },
    {
      path: '/Author',
      name: 'Author',
      component: Author
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Search/:id(\\d{2,10})',
      name: 'Word',
      component: Word
    },
    {
      path: '*',
      name: 'NotFound',
      alias: '404',
      component: NotFound
    }
  ]
})
