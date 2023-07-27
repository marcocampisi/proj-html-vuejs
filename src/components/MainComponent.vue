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
                    isActive: true
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
            courses: [
                {
                    id: 1,
                    title: 'Android Developer',
                    instructor: 'David Sanders',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque ducimus fugit minima minus mollitia natus quas quasi quos tempora.',
                    enrollments: 1,
                    category: 'Programming',
                    isFree: true,
                    image: '../src/assets/img/course-5-f-img.jpg',
                },
                {
                    id: 2,
                    title: 'Web Designing',
                    instructor: 'Jennifer Powell',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque ducimus fugit minima minus mollitia natus quas quasi quos tempora.',
                    enrollments: 1,
                    category: 'Programming',
                    isFree: true,
                    image: '../src/assets/img/course-6-f-img.jpg',
                },
                {
                    id: 3,
                    title: 'Financial Modeling',
                    instructor: 'Edward Bowman',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque ducimus fugit minima minus mollitia natus quas quasi quos tempora.',
                    enrollments: 1,
                    category: 'Business',
                    isFree: false,
                    price: '$20',
                    image: '../src/assets/img/course-12-f-img.jpg',
                }
            ],
            imageSources: [
                '../src/assets/img/h5-client-5.png',
                '../src/assets/img/h5-client-1.png',
                '../src/assets/img/h5-client-2.png',
                '../src/assets/img/h5-client-3.png',

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
                <div class="my-4 dots">
                    <span><font-awesome-icon icon="fa-solid fa-circle"></font-awesome-icon></span>
                    <span><font-awesome-icon icon="fa-solid fa-circle"></font-awesome-icon></span>
                    <span><font-awesome-icon icon="fa-solid fa-circle"></font-awesome-icon></span>
                </div>
            </div>
        </div>
        <div class="container-fluid d-flex py-5">
            <div>
                <ul class="left-column mx-4">
                    <li v-for="row in rows" :key="row.id" @click="activeRow(row)" :class="{ 'active': row.isActive }">
                        {{ row.title }}
                    </li>
                </ul>
            </div>
            <div class="container right-column">
                <h2 class="fw-bold">Learning Possibilities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque doloremque error eum
                    eveniet, expedita, illo ipsa laudantium magni, molestias nostrum officia provident recusandae
                    reiciendis sapiente soluta tenetur? Accusamus at, dolor dolore dolorem doloremque incidunt quae
                    recusandae voluptatibus? Consequatur, doloremque!</p>
                <p><span>&check;</span> We enrich lives through learning.</p>
                <p><span>&check;</span> Maximizing potential through individual attention.</p>
                <p><span>&check;</span> The trusted name for specialized training.</p>
                <p><span>&check;</span> People teach. People learn. This is where they connect.</p>
                <img src="../assets/img/h12-tabs-icon-1.png" alt="">
            </div>
            <div class="d-flex flex-column topButton" style="top: 10px">
                <font-awesome-icon icon="fa-solid fa-chevron-up" class="w-100"></font-awesome-icon>
                <p>TOP</p>
            </div>
        </div>
        <div class="container-fluid d-flex flex-column align-items-center justify-content-center courses-container">
            <h2 class="fw-bold mt-5 mb-3">Popular Online Courses</h2>
            <p class="px-5 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum
                perspiciatis quidem soluta tempore! Culpa nemo nostrum optio provident voluptatem!</p>
            <div class="row my-5">
                <div class="col-4 px-5" v-for="course in courses" :key="course.id">
                    <div class="card">
                        <img :src="course.image" class="card-img-top" :alt="course.title">
                        <div class="card-body">
                            <h5 class="card-title">{{ course.title }}</h5>
                            <h6 class="card-subtitle mb-4">{{ course.instructor }}</h6>
                            <p class="card-text">{{ course.description }}</p>
                            <span><font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon> {{
                                    course.enrollments
                                }}</span>
                            <span><font-awesome-icon icon="fa-solid fa-tag"></font-awesome-icon> {{
                                    course.category
                                }}</span>
                            <span v-if="course.isFree" class="badge rounded-pill free-badge">Free</span>
                            <span v-else class="badge rounded-pill price-badge">{{ course.price }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-4 dots" style="color: #40c4ff">
                <span><font-awesome-icon icon="fa-solid fa-circle"></font-awesome-icon></span>
                <span><font-awesome-icon icon="fa-solid fa-circle"></font-awesome-icon></span>
                <span><font-awesome-icon icon="fa-solid fa-circle"></font-awesome-icon></span>
            </div>
            <div class="d-flex flex-column topButton" style="top: 90%">
                <font-awesome-icon icon="fa-solid fa-chevron-up" class="w-100"></font-awesome-icon>
                <p>TOP</p>
            </div>
        </div>
        <div class="container-fluid px-5" id="tableContainer">
            <h2 class="fw-bold fs-1 text-center mt-5">Pricing Plans</h2>
            <p class="text-center px-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
                laborum?</p>
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>
                        <h5 class="fw-bold text-center">Save up to 40% by paying weekly</h5>
                    </th>
                    <th>
                        <div class="d-flex flex-column justify-content-center align-items-center">
                            <img src="../assets/img/h5-custom-icon-7.png" alt="" style="width: 80px" class="mb-3">
                            <h5 class="fw-bold">Standard</h5>
                            <h6 class="fw-bold">$12</h6>
                        </div>
                    </th>
                    <th>
                        <div class="d-flex flex-column justify-content-center align-items-center">
                            <img src="../assets/img/h5-custom-icon-8.png" alt="" style="width: 80px" class="mb-3">
                            <h5 class="fw-bold">Professional</h5>
                            <h6 class="fw-bold">$59</h6>
                        </div>
                    </th>
                    <th>
                        <div class="d-flex flex-column justify-content-center align-items-center">
                            <img src="../assets/img/h5-custom-icon-9.png" alt="" style="width: 80px" class="mb-3">
                            <h5 class="fw-bold">Advanced</h5>
                            <h6 class="fw-bold">$88</h6>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style="width: 20%">Number of Courses</td>
                    <td>2</td>
                    <td>4</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Time</td>
                    <td>15 Days</td>
                    <td>30 Days</td>
                    <td>30 Days</td>
                </tr>
                <tr>
                    <td>Web Designing</td>
                    <td>&check;</td>
                    <td>&check;</td>
                    <td>&check;</td>
                </tr>
                <tr>
                    <td>Human-Centered Design</td>
                    <td>&check;</td>
                    <td>&check;</td>
                    <td>&check;</td>
                </tr>
                <tr>
                    <td>Basic Marketing</td>
                    <td>&cross;</td>
                    <td>&check;</td>
                    <td>&check;</td>
                </tr>
                <tr>
                    <td>Python for Everybody</td>
                    <td>&cross;</td>
                    <td>&check;</td>
                    <td>&check;</td>
                </tr>
                <tr>
                    <td>Android Developer</td>
                    <td>&cross;</td>
                    <td>&cross;</td>
                    <td>&check;</td>
                </tr>
                <tr>
                    <td>Business English</td>
                    <td>&cross;</td>
                    <td>&cross;</td>
                    <td>&check;</td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button class="btn">Get it now</button>
                    </td>
                    <td>
                        <button class="btn">Get it now</button>
                    </td>
                    <td>
                        <button class="btn">Get it now</button>
                    </td>

                </tr>
                </tbody>
            </table>
            <div class="d-flex flex-column topButton" style="top: 90%">
                <font-awesome-icon icon="fa-solid fa-chevron-up" class="w-100"></font-awesome-icon>
                <p>TOP</p>
            </div>

        </div>
        <div class="container-fluid d-flex justify-content-center p-5 my-5">
            <img v-for="imageSrc in imageSources" :key="imageSrc" :src="imageSrc" alt="Immagine">
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
    }
}

.dots {
    span {
        margin: 0 10px;

        &:not(:nth-child(2)) {
            opacity: 0.5;
        }
    }
}

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

.right-column {
    position: relative;

    p {
        color: #808080;
        margin-bottom: 40px;
    }

    span {
        color: #40c4ff;
    }

    img {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100px;
    }
}

.courses-container {
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
}

.card {
    border: 1px solid #f2f2f2;
    border-radius: 0px;

    .card-body {
        position: relative;
    }

    .card-img-top {
        border-radius: 0px;
    }

    .card-title {
        font-family: "Times New Roman", 'serif';
        font-weight: bold;
    }

    .card-subtitle {
        color: #ababab;
    }

    span {
        color: #ababab;
        margin-right: 10px;
        text-transform: uppercase;
        font-size: small;
        font-weight: bold;
    }

    .badge {
        position: absolute;
        top: 20px;
        right: 20px;
        color: white;
    }

    .free-badge {
        background-color: #ffd740;
    }

    .price-badge {
        background-color: #40c4ff;
    }
}

th {
    background-color: #f2f8fc;
    border-top: 4px solid #d6f2ff;

    &:first-child {
        background-color: white;
    }
}

td {
    text-align: center;
    color: #808080;

    > button {
        border: 2px solid #ababab;
        border-radius: 0px;
        text-transform: uppercase;
        font-size: small;
        font-weight: bold;
        padding: 10px 20px;
        color: #808080;

    }

    &:nth-child(3) {
        > button {
            background-color: #40c4ff;
            color: white;
            border: none;
        }
    }
}

#tableContainer {
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 100px;
}

</style>