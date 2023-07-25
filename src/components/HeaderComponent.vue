<script>
import { store } from '../store.js';
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
            <div class="container-fluid d-flex align-items-center justify-content-between">
                <a class="navbar-brand" href>
                    <img src="../assets/img/logo-light.png" alt="iAcademy" width="200px" class="mx-5">
                </a>
                <ul class="d-flex flex-row m-0">
                    <li class="nav-item">Home</li>
                    <li class="nav-item">Courses</li>
                    <li class="nav-item">Instructors</li>
                    <li class="nav-item">Events</li>
                    <li class="nav-item">Pages</li>
                    <li class="nav-item">Elements</li>
                </ul>
                <ul class="d-flex flex-row m-0">
                    <li>
                        <font-awesome-icon icon="fa-solid fa-search"></font-awesome-icon>
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-bag-shopping"></font-awesome-icon>
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-bars"></font-awesome-icon>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <JumboComponent/>
</template>

<style lang="scss" scoped>
nav {
    position: absolute;
    width: 100vw;

    li {
        list-style-type: none;
        color: white;
        margin: 0 10px;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: bold;
        font-size: .8rem;
    }
}

JumboComponent {
    position: relative;
}
</style>