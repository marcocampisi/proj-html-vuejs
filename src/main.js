import { createApp } from 'vue';
import './assets/scss/main.scss';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faBagShopping, faBars);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
