import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Check from '@/components/Check'
import Author from '@/components/Author'
import Search from '@/components/Search'
// Vue.http.options.emulateJSON = true;
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
