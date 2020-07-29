require('./bootstrap');

import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Vuex from 'vuex';
Vue.use(Vuex);

import VCalendar from 'v-calendar';
Vue.use(VCalendar);

import CKEditor from 'ckeditor4-vue';
Vue.use(CKEditor);

import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

import Form from './utilites/form';
window.Form = Form;

window.moment = moment;
window.Event = new Vue();

import {routes} from './routes';

import storage from './store';
const store = new Vuex.Store(storage);
window.Store = store;

const router = new VueRouter({
	routes,
	mode: ''
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import mainapp from './components/mainapp.vue';
import auth from './components/auth';
import loading from './utilites/Loading';
import bigMenu from './components/menufullscreen.vue';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
    	mainapp, auth, loading, bigMenu, 
    }
});
