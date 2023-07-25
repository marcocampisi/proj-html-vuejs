<script>
import { store } from '../store.js';

export default {
    name: "JumboComponent",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container-fluid d-flex flex-column align-items-center justify-content-center">
        <h1 class="text-white fw-bold mb-4">Contemporary Ideas</h1>
        <p class="text-white px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at cumque ea
            exercitationem expedita fuga minima provident? Aut consequuntur esse natus necessitatibus recusandae sit
            voluptas.</p>
        <button class="btn btn-primary p-3">Register now</button>
    </div>
</template>

<style scoped lang="scss">
.container-fluid {
    width: 100vw;
    height: 600px;
    background-image: url('../assets/img/h5-slide-3-background.jpg');

    > h1 {
        font-family: "Times New Roman", 'serif'
    }

    > button {
        background-color: #40c4ff;
        border: none;
        border-radius: 0px;
    }
}
</style>