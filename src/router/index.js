import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Articles from '../views/Articles.vue'
import Formation from '../views/Formation.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre-mi',
    name: 'About',
    component: About
  },
  {
    path: '/proyectos',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/articulos',
    name: 'Articles',
    component: Articles
  },
  {
    path: '/formacion',
    name: 'Formation',
    component: Formation
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
