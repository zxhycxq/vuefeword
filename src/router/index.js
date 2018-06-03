import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Components/Home'
import About from '@/Components/About'
import Check from '@/Components/Check'
import Author from '@/Components/Author'
import Search from '@/Components/Search'
// Vue.http.options.emulateJSON = true;
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
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
    }
  ]
})
