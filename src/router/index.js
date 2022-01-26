import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyCv from '../views/MyCv.vue'
import About from '../views/About.vue'
import NotFound from '../components/Base/NotFound.vue'
import ContactMe from '../views/ContactMe.vue'
import Blog from '../views/Blog.vue'
//posts//
import Post1 from '../components/BlogItems/Post1.vue'
import Post2 from '../components/BlogItems/Post2.vue'
import Post3 from '../components/BlogItems/Post2.vue'
//posts//
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path:'/cv',
    name:'MyCv',
    component: MyCv
  },

  {
    // page 404
    path: '*',
    name: 'NotFound',
    component:NotFound
  },

  {
    path:'/blog',
    name:'Blog',
    component : Blog,
  },
//posts//
  {
  path : '/blog/post1',
  name:'Post1',
  component:Post1,
  },
  {
    path : '/blog/post2',
    name:'Post2',
    component:Post2,
  },
  {
  path : '/blog/post3',
  name:'Post3',
  component:Post3,
  },
//posts//

  {
    path:'/contactme',
    name:'ContactMe',
    component: ContactMe
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
