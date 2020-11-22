import Vue from 'vue';
import Router from 'vue-router';
import App from '@/pages/App.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: App,
            // children: [],
        }
    ],
});
