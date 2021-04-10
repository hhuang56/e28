import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from "./components/pages/HomePage.vue";
import CategoriesPage from "./components/pages/CategoriesPage.vue";
import ProductsPage from "./components/pages/ProductsPage.vue";
import ProductPage from "./components/pages/ProductPage.vue";
import ProductCreatePage from "./components/pages/ProductCreatePage.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/products',
            component: ProductsPage
        },
        {
            path: '/product/:id',
            component: ProductPage,
            props: true
        },
        {
            path: '/categories',
            component: CategoriesPage
        },
        {
            path: '/product/new',
            component: ProductCreatePage
        },
    ]
})

createApp(App).use(router).mount('#app')
