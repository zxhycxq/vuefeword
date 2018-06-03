// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
import axios from 'axios'

Vue.config.productionTip = false
/* eslint-disable */
// Vue.http.options.emulateJSON = true;
Vue.prototype.$http = axios;
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App,
		'my-component': {
			template: `<div>这是一个局部的自定义组件，只能在当前Vue实例中使用</div>`,
		}
	},
  template: '<App/>'
})
