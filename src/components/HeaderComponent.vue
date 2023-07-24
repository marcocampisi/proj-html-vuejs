<script>
import {store} from '../store.js';

export default {
    name: "HeaderComponent",
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
</template>

<style lang="scss" scoped>
nav {
    background-color: aquamarine;

    li {
        list-style-type: none;
        color: white;
        margin: 0 10px;
        cursor: pointer;
    }
}
</style>