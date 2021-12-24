import Vue from 'vue'
import VueRouter from 'vue-router'
import Activity from '@/views/activity/Activity.vue'
import Contact from '@/views/contact/Contact.vue'
import Products from '@/views/products/Products.vue'
import Achievements from '@/views/achievements/Achievements.vue'
import Welcome from '@/views/welcome/Welcome.vue'


Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },{
      path: '/activity',
      name: 'Activity',
      component: Activity
    },{
      path: '/contact',
      name: 'Contact',
      component: Contact
    },{
      path: '/products',
      name: 'Products',
      component: Products
    },{
      path: '/achievements',
      name: 'Achievements',
      component: Achievements
    }
  ]
})

export default router
