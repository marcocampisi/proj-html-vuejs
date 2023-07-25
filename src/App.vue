<script>
import {store} from './store';
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
    components: {
        HeaderComponent,
        MainComponent,
        FooterComponent
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <HeaderComponent/>
    <MainComponent/>
    <FooterComponent/>
</template>

<style scoped>

</style>
