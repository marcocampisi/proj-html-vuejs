import { createApp } from 'vue';
import './assets/scss/main.scss';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-regular-svg-icons";
import { faShop } from "@fortawesome/free-regular-svg-icons";
import { faHamburger } from "@fortawesome/free-regular-svg-icons";

library.add(faSearch, faShop, faHamburger);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
