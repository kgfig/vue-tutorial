import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../components/Users'
import Test from '../components/Test'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Users },
  { path: '/test', component: Test }
]

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})
