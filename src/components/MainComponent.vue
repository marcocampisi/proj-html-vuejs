<script>
import {store} from '../store.js';

export default {
    name: "MainComponent",
    data() {
        return {
            store,
            totalImages: 6,
            imageTitles: [
                'Languages',
                'Software',
                'Business',
                'Chemistry',
                'Science',
                'DIY & Craft'
            ]
        }
    },
    computed: {
        imageNumbers() {
            const imageNumbers = [];
            for (let i = 1; i <= this.totalImages; i++) {
                imageNumbers.push(i)
            }
            return imageNumbers;
        }
    },
    methods: {
        getImagePath(imageNum) {
            return `../src/assets/img/h5-custom-icon-${imageNum}.png`;
        }
    }
}
</script>

<template>
    <div class="mainContainer">
        <div class="subjects-container my-5 px-5">
            <div v-for="(imageNum, index) in imageNumbers" :key="imageNum" class="image-container">
                <img :src="getImagePath(imageNum)" alt="Icon">
                <h5>{{ imageTitles[index] }}</h5>
            </div>
        </div>
        <div class="container d-flex flex-column">
            <h2 class="fw-bold">The Trusted Name for In-Home Tutoring.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aliquid debitis dignissimos
                maiores recusandae repellat rerum sequi ullam unde.</p>
            <button class="btn">Learn more</button>
        </div>
        <div class="container-fluid">
            <img src="../assets/img/h5-img-1.jpg" alt="">
            <div class="d-flex flex-column topButton">
                <font-awesome-icon icon="fa-solid fa-chevron-up" class="w-100"></font-awesome-icon>
                <p>TOP</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.subjects-container {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .image-container {
        width: 180px;
        height: 220px;
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f7fdff;
        text-align: center;

        img {
            margin-bottom: 20px;
            cursor: pointer;
        }
    }
}

.container {
    > h2 {
        font-family: "Times New Roman", 'serif';
        font-size: 2em;
        width: 25%;
    }

    > button {
        color: #40c4ff;
        text-transform: uppercase;
        font-weight: bold;
        font-size: small;
        align-self: start;
        padding: 0;
    }
}

.container-fluid {
    position: relative;

    > img {
        width: 100%;
    }

    .topButton {
        position: absolute;
        right: 0;
        top: 50%;
        width: 50px;
        height: 50px;
        background-color: #40c4ff;
        text-align: center;
        color: white;
        padding-top: 10px;
        cursor: pointer;
        font-size: small;
        font-weight: bold;
    }
}
</style>