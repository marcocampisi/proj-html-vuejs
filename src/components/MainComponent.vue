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
            ],
            rows: [
                {
                    id: 1,
                    title: 'What We Do',
                    content: 'Lorem ipsum',
                    isActive: false
                },
                {
                    id: 2,
                    title: 'Degree Programme',
                    content: 'Lorem ipsum',
                    isActive: false
                },
                {
                    id: 3,
                    title: 'Career Achievements',
                    content: 'Lorem ipsum',
                    isActive: false
                },
                {
                    id: 4,
                    title: 'Personal Management',
                    content: 'Lorem ipsum',
                    isActive: false
                },
                {
                    id: 5,
                    title: 'Steps to Success',
                    content: 'Lorem ipsum',
                    isActive: false
                },
                {
                    id: 6,
                    title: 'Knowledge Transfer',
                    content: 'Lorem ipsum',
                    isActive: false
                }

            ],
            activeRowIndex: 0
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
        },
        activeRow(clickedRow) {
            this.rows.forEach((row) => {
                row.isActive = row.id === clickedRow.id;
            });
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
            <h2 class="fw-bold w-25">The Trusted Name for In-Home Tutoring.</h2>
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
        <div class="container-fluid d-flex align-items-center">
            <img src="../assets/img/h5-img-2.jpg" alt="" class="w-50">
            <div class="textContainer px-5">
                <h2 class="fw-bold w-50">Empowering Children to Reach Their Potential.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi in nostrum nulla numquam
                    quae quam quo tempora tenetur vitae.</p>
                <div class="statistics d-flex">
                    <div class="me-5">
                        <h3>168</h3>
                        <p>User Stories</p>
                    </div>
                    <div>
                        <h3>347</h3>
                        <p>Events</p>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column topButton" style="top: 90%">
                <font-awesome-icon icon="fa-solid fa-chevron-up" class="w-100"></font-awesome-icon>
                <p>TOP</p>
            </div>
        </div>
        <div class="container-fluid d-flex align-items-center" id="instructorContainer">
            <div class="container d-flex flex-column align-items-center text-white">
                <img src="../assets/img/instructor-img-6.jpg" alt="" class="my-5">
                <p class="px-5 py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quos repudiandae
                    sint totam. Consectetur delectus doloribus eaque est fuga, harum maiores, molestiae optio, quas
                    quasi quidem reiciendis rem suscipit voluptate?</p>
                <h4>Joan Collins</h4>
                <h5 class="text-uppercase">Student</h5>
                <div class="my-4">
                    <span><font-awesome-icon icon="fa-solid fa-circle"></font-awesome-icon></span>
                    <span><font-awesome-icon icon="fa-solid fa-circle"></font-awesome-icon></span>
                    <span><font-awesome-icon icon="fa-solid fa-circle"></font-awesome-icon></span>
                </div>
            </div>
        </div>
        <div class="container-fluid d-flex py-5">
            <div id="selectInfo">
                <ul class="left-column">
                    <li v-for="row in rows" :key="row.id" @click="activeRow(row)" :class="{ 'active': row.isActive }">
                        {{ row.title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h2 {
    font-family: "Times New Roman", 'serif';
    font-size: 2em;
}

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

    .statistics {
        color: #40c4ff;

        h3 {
            font-family: "Times New Roman", 'serif';
            font-weight: bold;
            font-size: 3rem;
        }

        p {
            font-family: "Times New Roman", 'serif';
        }
    }
}

#instructorContainer {
    background-image: url("../assets/img/h5-parallax-img-1.png");
    height: 800px;

    .container {
        > img {
            width: 200px;
            border-radius: 50%;
        }

        > h4 {
            font-size: 2rem;
            font-family: "Times New Roman", 'serif';
        }

        > h5 {
            font-size: smaller;
            font-weight: bolder;
        }

        span {
            margin: 0 10px;

            &:not(:nth-child(2)) {
                opacity: 0.5;
            }
        }
    }
}

#selectInfo {
    .left-column {
        li {
            list-style-type: none;
            padding: 20px 30px;
            border: 1px solid #f2f2f2;
            color: #595959;
            cursor: pointer;
            font-family: "Times New Roman", 'serif';
            font-weight: bold;

            &.active {
                background-color: #fbfbfc;
                border-left: 5px solid #40c4ff;
                color: #40c4ff;
            }
        }
    }
}
</style>