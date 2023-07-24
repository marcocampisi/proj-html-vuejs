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
            <div class="container-fluid">
                <a class="navbar-brand" href>
                    <img src="../assets/img/logo-light.png" alt="">
                </a>
                <ul>
                    <li class="nav-item">Home</li>
                    <li class="nav-item">Courses</li>
                    <li class="nav-item">Instructors</li>
                    <li class="nav-item">Events</li>
                    <li class="nav-item">Pages</li>
                    <li class="nav-item">Elements</li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
nav {
    background-color: aquamarine;

    ul {
        display: flex;
        flex-direction: row;

        li {
            list-style-type: none;
        }
    }
}
</style>