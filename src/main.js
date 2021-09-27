import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './router.js'
import VModal from 'vue-js-modal'
import {store} from './store/store'
// import STORAGE_KEY from './store/store'

Vue.use(VueRouter);
Vue.use(VModal);

const router = new VueRouter({
  routes:Routes,
  mode:'history'
});
   
Vue.config.productionTip = false

new Vue({
//   created(){
//     store.state.categories = JSON.parse(localStorage.getItem(STORAGE_KEY)|| '[]');
// },
  render: h => h(App),
  router:router,
  store:store

}).$mount('#app')
