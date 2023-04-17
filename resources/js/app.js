import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import { routes } from './routes';
import axios from 'axios';
import VueAxios from 'vue-axios';

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const app = createApp(App);
app.use(VueAxios, axios);

app.use(router);
app.mount('#app');
