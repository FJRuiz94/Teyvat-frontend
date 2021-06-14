import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Characters from '../views/Characters.vue'
import World from '../views/World.vue'
import Builds from '../views/Builds.vue'
import CharacterInfo from '../views/Character.vue'
import CreateBuild from '../views/newBuild.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },{
    path: '/characters/:name',
    name: 'Character',
    component: CharacterInfo
  },
  {
    path: '/world',
    name: 'World',
    component: World
  },
  {
    path: '/builds',
    name: 'Builds',
    component: Builds
  },
  {
  path: '/builds/newBuild',
  name: CreateBuild,
  component: CreateBuild
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
