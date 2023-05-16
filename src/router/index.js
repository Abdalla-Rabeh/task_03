import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView'
import taskEdit from '@/views/taskEdit'
import fileEdit from '@/views/fileEdit'
const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView,
    
    
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: taskEdit,
    beforeEnter: (to, from, next) => {
      if(!localStorage.token) {
        next('/');
      }
      next();
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    beforeEnter: (to, from, next) => {
      if(!localStorage.token) {
        next('/');
      }
      next();
    },
  },
  {
    path: '/task',
    name: 'task',
    component:HomeView,
    beforeEnter: (to, from, next) => {
      if(!localStorage.token) {
        next('/');
      }
      next();
    },
  },
  {
    path:"/file/:id",
    name:"file",
    component:fileEdit,
    beforeEnter: (to, from, next) => {
      if(!localStorage.token) {
        next('/');
      }
      next();
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
