
import App from './App.vue'
import router from './router'
import part from 'vue-particles'
import axios from 'axios'
import element from 'element-ui'
import VueSocketIO from 'vue-socket.io'
import echarts from 'echarts'



 

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
Vue.prototype.$http = axios
Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts
Vue.use(element)
Vue.use(part)
Vue.use(router)
Vue.use(echarts)



Vue.use(new VueSocketIO({
  debug: true,
  // 服务器端地址
  connection: 'http://59.110.69.160',
  
 }))