import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import charactersAPI from './plugins/api/index'

Vue.use(charactersAPI, {baseURL: 'https://teyvat-project-api.herokuapp.com'})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
