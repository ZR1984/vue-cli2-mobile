// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from './store/store'
import 'lib-flexible'
import './assets/css/public.less'
import './assets/css/elementUI.less'
import * as custom from './common/filter'

Vue.use(ElementUI);

Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
