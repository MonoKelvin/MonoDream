import Vue from 'vue';
import Router from 'vue-router';
import App from '@/pages/App.vue';
import Dreams from '@/components/dreams/index.vue';

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: App,
            children: [
                { path: '', component: Dreams },
                { path: 'dreams', name: 'dreams', component: Dreams }
            ]
        }
    ],
});
