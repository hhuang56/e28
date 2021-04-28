import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from "./components/pages/HomePage.vue";
import AddRecipePage from "./components/pages/AddRecipePage.vue";
import ReviewPage from "./components/pages/ReviewPage.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
            props: true
        },
        {
            path: '/contribute',
            component: AddRecipePage
        },
        {
            path: '/ratings',
            component: ReviewPage,
            props: true
        },
    ]
})

createApp(App).use(router).mount('#app')
