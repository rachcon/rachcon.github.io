import Vue from 'vue'
import Router from 'vue-router'
import Resume from './components/Resume.vue'

 
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'profile',
      component: Resume
    }
  ]
})
