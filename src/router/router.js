import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About'
import Applications from '@/views/applications/Applications'
import Projects from '@/views/Projects'
import Contact from '@/views/Contact'
import Options from '@/views/Options'

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
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/options',
        name: 'Options',
        component: Options
    },
    {
        path: '/applications',
        name: 'Applications',
        components: {
            application: Applications
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
