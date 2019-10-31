import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
//定义一个全局的过滤器
Vue.filter('setWH',(url,arg)=>{
    return url.replace(/w\.h/,arg);
});
// 全局引入BScroll组件
import BScroll from '@/components/better-scroll/BScroll'
Vue.component('BScroll',BScroll);
//全局引入Loading组件
import Loading from '@/components/loading/Loading'
Vue.component('Loading',Loading)
//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
