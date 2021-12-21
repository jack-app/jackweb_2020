import Vue from 'vue'
import VueRouter from 'vue-router'
import Activity from '@/views/Activity/Activity.vue'
// import Contact from '@/components/Contact.vue'
// import Products from '@/components/Products.vue'
// import Results from '@/components/Results.vue'
// import Welcome from '@/components/Welcome.vue'


Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
    //   path: '/',
    //   name: 'Welcome',
    //   component: Welcome
    // },{
      path: '/activity',
      name: 'Activity',
      component: Activity
    // },{
    //   path: '/contact',
    //   name: 'Contact',
    //   component: Contact
    // },{
    //   path: '/Products',
    //   name: 'Products',
    //   component: Products
    // },{
    //   path: '/Results',
    //   name: 'Results',
    //   component: Results
    }
  ]
})

export default router
