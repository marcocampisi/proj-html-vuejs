<script>
import {store} from '../store.js';

export default {
    name: "FooterComponent",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container-fluid footerContainer">
        <div class="container-fluid d-flex justify-content-center px-5 pb-5">
            <div class="col-3">
                <img src="../assets/img/logo-light.png" alt="iAcademy">
                <p class="pb-5">Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life.
                    Closer to Home</p>
                <p>
                    <font-awesome-icon icon="fa-solid fa-phone-volume"></font-awesome-icon>
                    1-677-124-44227
                </p>
                <p>
                    <font-awesome-icon icon="fa-regular fa-clock"></font-awesome-icon>
                    Mon - Sat 8.00 - 18.00
                </p>
            </div>
            <div class="col-3">
                <h3>Popular Courses</h3>
                <h5>Business English</h5>
                <p>Preston Marshall</p>
                <h5>Social Computing</h5>
                <p>David Sanders</p>
                <h5>Learn Spanish</h5>
                <p>Jennie King</p>
            </div>
            <div class="col-3">
                <h3>Support</h3>
                <h6>User dashboard</h6>
                <h6>Contact Us</h6>
                <h6>FAQ</h6>
                <h6>Course Offer</h6>
                <h6>Events</h6>
            </div>
            <div class="col-3">
                <h3>Flexible Learning</h3>
                <img src="../assets/img/footer-img-1.png" alt="">
            </div>
        </div>
        <div class="container-fluid d-flex justify-content-between" id="footerInfo">
            <div id="footerLeft">
                <p>Copyrights 2017 &copy;Mikado Themes </p>
            </div>
            <div id="footerRight">
                <span>CALL +44 300 303 0266</span>
                <span>FOLLOW US</span>
                <font-awesome-icon icon="fa-brands fa-twitter" class="footerIcon"></font-awesome-icon>
                <font-awesome-icon icon="fa-brands fa-instagram" class="footerIcon"></font-awesome-icon>
                <font-awesome-icon icon="fa-brands fa-facebook" class="footerIcon"></font-awesome-icon>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footerContainer {
    height: 650px;
    background-color: #222222;
    padding-top: 150px;

    .col-3 {
        > img {
            width: 80%;
            padding-bottom: 40px;
        }

        > p {
            color: #ababab;
            width: 80%;
        }

        h3 {
            color: white;
            font-family: "Times New Roman", 'serif';
            font-weight: bold;
            margin-bottom: 60px;
        }

        h5 {
            color: #ababab;
            font-family: "Times New Roman", 'serif';
            font-weight: bold;
        }

        h6 {
            color: #ababab;
            margin-bottom: 20px;
            cursor: pointer;
        }
    }
}

#footerInfo {
    padding-top: 60px;
    border-top: 1px solid #595959;

    #footerLeft {
        color: #ababab;
    }

    #footerRight {
        color: #ababab;

        span {
            margin: 0 10px;
        }

        .footerIcon {
            margin: 0 10px;
            cursor: pointer;
        }
    }
}
</style>