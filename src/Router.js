import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './views/LoginForm.vue';
import RegisterForm from './views/RegisterForm.vue';
import HomePage from './views/HomePage.vue';
import ProductsPage from './views/ProductsPage.vue';

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'LoginForm',
        component: LoginForm,
    },
    {
        path: '/register',
        name: 'RegisterForm',
        component: RegisterForm,
    },
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage
    },
    {
        path:'/products',
        name:'ProductsPage',
        component:ProductsPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
