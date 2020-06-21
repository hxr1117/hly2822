import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '../components/Index.vue'
const Index = () => import(/* webpackChunkName: "Main" */'../components/Index.vue')
// import Service from '../components/Service.vue'
const Service = () => import(/* webpackChunkName: "Main" */'../components/Service.vue')
// import Home from '../components/Home.vue'
const Home = () => import(/* webpackChunkName: "Main" */'../components/Home.vue')
// import Customer from '../components/Customer.vue'
const Customer = () => import(/* webpackChunkName: "Main" */'../components/Customer.vue')
// import Contact from '../components/Contact.vue'
const Contact = () => import(/* webpackChunkName: "Main" */'../components/Contact.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/service',
        name: 'Service',
        component: Service
      },
      {
        path: '/customer',
        name: 'Customer',
        component: Customer
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
