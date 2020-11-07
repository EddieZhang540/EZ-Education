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
                                <a class="nav-link" href="#home" v-smooth-scroll="{ duration: 600 }">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about" v-smooth-scroll="{ duration: 600, offset: -180 }">About</a>
                            </li>
                            <!--
                            <li class="nav-item">
                                <router-link class="nav-link" to="//admin">Admin</router-link>
                            </li>
                            -->
                            <li class="nav-item">
                                <a class="nav-link" href="#team" v-smooth-scroll="{ duration: 600, offset: -105 }">The Team</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link" href="#contact" v-smooth-scroll="{ duration: 600, offset: -105 }">Contact Us</a>
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
                        <a href="#about" v-smooth-scroll="{ duration: 600, offset: -180 }">
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
                        EZ Education is a not-for-profit organization based in the Greater Toronto Area. Our mission is to provide a platform that connects people learning English as a foreign language with volunteer teachers who are fluent in English. 
                        At EZ Education, we aim to to offer a more relaxed and flexible learning environment than a traditional classroom. The teachers and students are free to decide which subjects to cover and how the lessons will be delivered. Through
                        one-on-one lessons and discussions, EZ Education promotes a broader understanding of the English language and facilitates strong and meaningful relationships between students and teachers.
                        </p>
                    </div>
                </div>

                <div id="our-mission" class="row">
                    <div class="col-7 text-center">
                        <h1>Our Mission</h1>

                        <p>Our mission is to break down lingual and cultural barriers between anyone, from anywhere. We completely understand what it's like to be a complete stranger in a new country, having experienced the exact same thing ourselves, which is why we work to ease the transition for as many newcomers as possible. We do that by building a motivated and diverse team and making sure that everyone, both students and teachers, feel not just comfortable, but passionate about global communication, interaction and support.</p>
                    </div>
                </div>

                <div id="for-student" class="row">
                    <div class="col text-center">
                        <div class="row">
                            <h2 class="col">What we offer</h2>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <img class="card-img-top" src="img/logo.png" height="200">
                                    <div class="card-body">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img class="card-img-top" src="img/logo.png" height="80">
                                    <div class="card-body">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img class="card-img-top" src="img/logo.png" height="80">
                                    <div class="card-body">
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
