const Home = {
    template: `
        <div class="EZ-main">
            <header class="main-header">
                <nav class="navbar fixed-top navbar-expand-lg shadow">
                    <router-link class="navbar-brand" to="/">
                        <img src="img/logo-small.png" width="80" height="80" alt="EZ Education">
                        <span>EZ Education</span>
                    </router-link>

                    <!-- collapse button class dependency -->
                    <span class="navbar-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapsible" aria-controls="navbarCollapsible" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </span>

                    <div class="collapse navbar-collapse" id="navbarCollapsible">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#home" v-smooth-scroll="{ duration: 1000 }">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about" v-smooth-scroll="{ duration: 1000, offset: -155 }">About</a>
                            </li>
                            <!--
                            <li class="nav-item">
                                <router-link class="nav-link" to="//admin">Admin</router-link>
                            </li>
                            -->
                            <li class="nav-item">
                                <a class="nav-link" href="#team" v-smooth-scroll="{ duration: 1000, offset: -105 }">The Team</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link" href="#contact" v-smooth-scroll="{ duration: 1000, offset: -105 }">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="btn btn-outline-primary" v-on:click="signup">Sign Up</a>
                            </li>
                            <li class="nav-item">
                                <a class="btn btn-primary" v-on:click="login">Log In</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main>
                <!-- home page -->
                <div id="home">
                    <!-- captions -->
                    <div class="caption text-center">
                        <h1>WELCOME TO EZ EDUCATION</h1>
                        <h3>YOUR PERSONAL JOURNEY STARTS HERE</h3>
                        <a href="#about" v-smooth-scroll="{ duration: 1000, offset: -155 }">
                            <img src="img/down-arrow.png" width="75" height="80" alt="">
                        </a>
                    </div>
                </div>

                <!-- about -->
                <div id="about" class="row">
                    <div class="col-1"></div>
                    <div class="col-4">
                    </div>
                    <div class="col-6">
                        <h1>ABOUT</h1>
                        <hr class="short">
                        <p>
                        EZ Education is a student-run initiative based in the Greater Toronto Area. We operate as a not-for-profit organization partnered with the Rotary Club of Mississauga Streetsville.
                        </p>
                        <p>
                        We provide a platform that connects people learning English as a foreign language with volunteer teachers who are fluent in English.
                        </p>
                        <p>
                        Through one-on-one classes and discussions, EZ Education promotes a richer understanding of English and facilitates meaningful relationships between students and teachers.
                        </p>
                    </div>
                </div>

                <div id="mission" class="row">
                    <div class="col-7 text-center">
                        <h2>OUR MISSION</h2>
                        <p>
                            At EZ Education, we strive to help break down the language and cultural barriers that stand in the way of immigrants to English-speaking countries. We understand what it's like to be a stranger in a foriegn land,
                            having experienced similar circumstances ourselves, which is why we work to ease the transition for as many newcomers as possible. We do so by building a motivated and diverse team and ensuring that our students and
                            teachers feel not only comfortable, but also excited about global communication and interaction.
                        </p>
                    </div>  
                </div>

                <div id="for-student" class="row">
                    <div class="col-9 text-center">
                        <div class="row">
                            <h2 class="col">What we offer</h2>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <div class="card shadow">
                                    <div class="card-body">
                                        <div class="icon" style="background: #fceef3;"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
                                        <h4>Flexibility</h4>
                                        <p class="card-text">We aim to offer a more relaxed and flexible learning environment than a traditional classroom. The teachers and students are free to decide which subjects to cover and how each lesson will be delivered to cater to the diverse range of learners.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm">
                                <div class="card shadow">
                                    <div class="card-body">
                                        <div class="icon" style="background: #fceef3;"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
                                        <h4>Authenticity</h4>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm">
                                <div class="card shadow">
                                    <div class="card-body">
                                        <div class="icon" style="background: #fceef3;"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
                                        <h4>Accessibility</h4>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- the team -->
                <div id="team" class="row">
                    <div class="col-9 text-center">
                        <h1>HI</h1>
                    </div>
                </div>

                <!-- contact -->
                <div id="contact" class="row">

                </div>
            </main>

            <footer>
                <div class="container-fluid">
                    <div class="row text-center">
                        <div class="col">
                            column 1
                        </div>
                        <div class="col">
                            column 2
                        </div>
                        <div class="col">
                            column 3
                        </div>

                        <div class="col-12">
                            <hr>
                            <h6>&copy; ez-edu</h6>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    `,
    methods: {
        signup: function () {
            $("#registerModal").modal("show");
        },
        login: function () {
            $("#loginModal").modal("show");
        },
    },
};
