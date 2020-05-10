import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DashboardRouteConfig from './DashboardRouteConfig';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        DashboardRouteConfig
    ]
});

export default router;
