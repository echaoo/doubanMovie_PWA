/**
 * @file entry
 * @author echaoo(1299529160@qq.com)
 */

import Vue from 'vue';
import Vuetify from 'vuetify';
import {createRouter} from './router';
import store from './store';
import App from './App.vue';
import Icon from 'vue-awesome/components/Icon.vue';

Vue.use(Vuetify);
// Vue.filter('arr2string', value => value.join(' / '));
Vue.component('icon', Icon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
export function createApp() {
    let router = createRouter();
    let app = new Vue({
        router,
        store,
        ...App
    });
    return {app, router, store};
}
