import {createApp} from 'vue';
import './assets/scss/main.scss';
import App from './App.vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faTag} from "@fortawesome/free-solid-svg-icons";
import {faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons";

library.add(faSearch, faBagShopping, faBars, faChevronUp, faCircle, faUser, faTag, faPhoneVolume, faClock);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
