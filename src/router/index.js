import Vue from 'vue';
import Router from 'vue-router';
import CallList from '../components/CallList.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/About.vue',
      name: 'about',
      component: About
    },
    {
      path: '/CallList.vue',
      name: 'CallList',
      component: CallList
    },
  ]
})
