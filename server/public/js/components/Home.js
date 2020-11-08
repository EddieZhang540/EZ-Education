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
                                <a class="nav-link" href="#about" v-smooth-scroll="{ duration: 1000, offset: -105 }">About</a>
                            </li>
                            <!--
                            <li class="nav-item">
                                <router-link class="nav-link" to="//admin">Admin</router-link>
                            </li>
                            -->
                            <li class="nav-item">
                                <a class="nav-link" href="#mission" v-smooth-scroll="{ duration: 1000, offset: -105 }">Our Mission</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link" href="#for-student" v-smooth-scroll="{ duration: 1000, offset: -105 }">What we offer</a>
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
                        <a href="#about" v-smooth-scroll="{ duration: 1000, offset: -105 }">
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
                        EZ Education is a student-run initiative based in the Greater Toronto Area, Canada. We operate as a not-for-profit organization partnered with the Rotary Club of Mississauga Streetsville.
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
                    <div class="col-8 text-center">
                        <h2>OUR MISSION</h2>
                        <p>
                            At EZ Education, we strive to help break down the language and cultural barriers that stand in the way of immigrants to English-speaking countries. We understand what it's like to be a stranger in a foriegn land,
                            having experienced similar circumstances ourselves, which is why we work to ease the transition for as many newcomers as possible. We do so by building a motivated and diverse team and ensuring that our students and
                            teachers feel not only comfortable, but also excited about global communication and interaction.
                        </p>
                    </div>  
                </div>

                <div id="for-student" class="row">
                    <div class="col-10 text-center">
                        <div class="row">
                            <h2 class="col">FOR STUDENTS, WE OFFER...</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg">
                                <div class="card shadow">
                                    <div class="card-body">
                                        <div style="background: #fceef3"><i class="fas fa-drafting-compass" style="color: #ff689b"></i></div>
                                        <h4>Flexibility</h4>
                                        <p class="card-text">
                                            Recognizing that different individuals vary in background, proficiency and learning styles, EZ Education aims to offer a more relaxed and flexible learning environment than a traditional classroom.
                                            Students are free to decide which subjects to cover and discuss how lesson will be delivered with their teachers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="card shadow">
                                    <div class="card-body">
                                        <div style="background: #fff7e1"><i class="fas fa-balance-scale" style="color: #ffdc7b"></i></div>
                                        <h4>Authenticity</h4>
                                        <p class="card-text">
                                            Practical application is often an overlooked element in many ESL programs. Immigrant students could learn to read and write in English very well, only to find out that they have trouble understanding
                                            native speakers. EZ Education recruits fluent English speakers in the GTA as volunteers teachers. By learning and interacting with their teachers, students will grasp the implicit cultural concepts and
                                            idioms much more effectively than a regular English course.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="card shadow">
                                    <div class="card-body">
                                        <div style="background: #dfd9ff"><i class="fas fa-wifi" style="color: #857aff"></i></div>
                                        <h4>Accessibility</h4>
                                        <p class="card-text">
                                            EZ Education is located in the GTA. However, we do not limit student membership to only new immigrants in the GTA. By delivering lessons through online platforms such as Zoom, Wechat, and WhatsApp, EZ
                                            Education welcomes ESL students from any part of the world to have the opportunity to learn from a native English speaker, for free.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
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
