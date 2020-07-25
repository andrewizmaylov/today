/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');
window.moment = moment;

import VCalendar from 'v-calendar';




Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VCalendar);

import {routes} from './routes';

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
import bigMenu from './components/menufullscreen.vue';
import login from './components/login.vue';
import register from './components/register.vue';
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 window.Event = new Vue();

const app = new Vue({
    el: '#app',
    router,
    components: {
    	mainapp, bigMenu, login, register
    }
});
