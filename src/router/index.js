import Vue from 'vue'
import VueRouter from 'vue-router'
import Clendar from '../components/Clendar'

Vue.use(VueRouter)

const routes = [
  {
    path:'/clendar',
    name:'clendar',
    component:Clendar
  }
]

const router = new VueRouter({
  routes
})

export default router
