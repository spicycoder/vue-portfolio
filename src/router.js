import Vue from 'vue'
import Router from 'vue-router'
import WorkExperience from "./views/WorkExperience.vue";
import Skills from "./views/Skills.vue";
import About from "./views/About.vue";

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    {
      path: '/experience',
      name: 'experience',
      component: WorkExperience
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
