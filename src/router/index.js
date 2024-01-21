import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dinosaurs',
    name: 'dinosaurs',
    // route level code-splitting
    // this generates a separate chunk (dinosaurs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dinosaurs" */ '../views/DinosaurPage.vue')
  },
  {
    path: '/ocean',
    name: 'ocean',
    // route level code-splitting
    // this generates a separate chunk (ocean.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ocean" */ '../views/OceanPage.vue')
  },
  {
    path: '/space',
    name: 'space',
    // route level code-splitting
    // this generates a separate chunk (space.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "space" */ '../views/SpacePage.vue')
  },
  {
    path: '/wildlife',
    name: 'wildlife',
    // route level code-splitting
    // this generates a separate chunk (wildlife.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "wildlife" */ '../views/WildlifePage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
