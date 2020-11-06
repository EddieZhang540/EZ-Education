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
                    <div class="col-1">
                    </div>
                    <div class="col-4">
                        <img src="img/logo.png" width="400" height="400" alt="">   
                    </div>
                    <div class="col-6">
                        <h1>ABOUT</h1>
                        <hr class="short">
                        <p>
                        EZ Education is a not-for-profit organization based in the Greater Toronto Area. Our mission is to provide a platform that connects people learning English as a foreign language with volunteer teachers who are fluent in English. 
                        At EZ Education, we aim to to offer a more relaxed and flexible learning environment than a traditional classroom. The teachers and students are free to decide which subjects to cover and how the lessons will be delivered. Through
                        one-on-one lessons and discussions, EZ Education promotes a broader understanding of the English language and facilitates strong and meaningful relationships between students and teachers.
                        </p>
                        <p>
                        Our purpose at EZ Education is to break down lingual and cultural barriers between anyone, from anywhere. 
                        
                        Both Chinese and English are prominent and popular languages in Canada, but a lot of people are fluent in only one of the two. This sometimes results in a gap between different groups. For example, the immigrant students that come to Canada are generally not as good at spoken English, and this isolates them from other students. The same thing is true the other way around. The aim of this organization is to help close that cultural gap by offering free classes to those who need them.
                        We completely understand what it's like to be a complete stranger in a new country, having experienced the exact same thing ourselves, which is why we strive to ease the transition for as many students as possible. We do that by building a motivated and diverse team and making sure that everyone, both students and teachers, feel not just comfortable, but passionate about global communication, interaction and support.
                        </p>                        
                    </div>

                    <div class="offer">
                        <h2>WHAT WE OFFER</h2>
                    </div>

                </div>

                <!-- the team -->
                <div id="team" class="row">
                    <div class="col-9 text-center">
                        <h1>THE TEAM</h1>
                        <hr class="short">

                        <div class="team-member1">
                            <img src="img/member1" alt="team-member1">
                            <p>Eddie Zhang1</p>
                        </div>

                        <div class="team-member2">
                            <img src="img/member2" alt="team-member2">
                            <p>Eddie Zhang2</p>
                        </div>

                        <div class="team-member3">
                            <img src="img/member3" alt="team-member3">
                            <p>Eddie Zhang3</p>
                        </div>

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
