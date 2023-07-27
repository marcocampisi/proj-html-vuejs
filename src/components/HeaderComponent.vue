<script>
import {store} from '../store.js';
import JumboComponent from "./JumboComponent.vue";

export default {
    name: "HeaderComponent",
    components: {
        JumboComponent
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <nav class="navbar">
            <div class="container-fluid d-flex align-items-center">
                <a class="navbar-brand" width="200px" href>
                    <img src="../assets/img/logo-light.png" alt="iAcademy" class="mx-5 w-50">
                </a>
                <ul class="d-flex flex-row m-0">
                    <li class="nav-item">Home</li>
                    <li class="nav-item">Courses</li>
                    <li class="nav-item">Instructors</li>
                    <li class="nav-item">Events</li>
                    <li class="nav-item">Pages</li>
                    <li class="nav-item">Elements</li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-search"></font-awesome-icon>
                    </li>
                    <li class="position-relative">
                        <font-awesome-icon icon="fa-solid fa-bag-shopping"></font-awesome-icon>
                        <span class="badge rounded-pill">0</span>
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-bars"></font-awesome-icon>
                    </li>
                </ul>
            </div>
        </nav>
        <JumboComponent/>
    </header>

</template>

<style lang="scss" scoped>
header {
    background-image: url('../assets/img/h5-slide-3-background.jpg');
    position: relative;
}

nav {
    width: 100vw;

    li {
        list-style-type: none;
        color: white;
        margin: 0 10px;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1rem;

        > span {
            background-color: #40c4ff;
            font-size: .5rem;
            position: absolute;
            top: 0;
            right: -10px;
        }
    }
}
</style>