
require('./bootstrap');
window.Vue = require('vue').default;

import aslidjalsidjlaisjd from './Apa.vue';
import testingRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import { halo } from "./routes.js";
import Vue from 'vue';

axios.defaults.baseURL = 'http://localhost:8000/api/'
Vue.use(VueAxios, axios)
Vue.use(testingRouter)

const halodocter = new testingRouter({
    routes: halo,
    mode: 'hash'
});

const app = new Vue({
    el: '#app',
    router: halodocter,
    render: h => h(aslidjalsidjlaisjd),
});
