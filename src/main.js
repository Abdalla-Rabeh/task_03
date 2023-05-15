import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue3 from "bootstrap-vue-3";
createApp(App).use(store).use(BootstrapVue3).use(router).mount('#app')
