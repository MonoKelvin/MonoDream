import Vue from 'vue';
import axios from 'axios';

import App from './pages/App.vue';
import router from './router';
import store from '../store';

if (!process.env.IS_WEB) {
    Vue.use(require('vue-electron'));
}
(Vue as any).http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    components: { App },
    store,
    router,
    template: '<router-view class="view"></router-view>'
}).$mount('#app');
