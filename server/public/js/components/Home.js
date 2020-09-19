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
                                <a class="nav-link" href="#landing">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="//admin">Admin</router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#team">The Team</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link" href="#contact">Contact Us</a>
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
                <!-- landing page -->
                <div id="landing">
                    <!-- captions -->
                    <div class="caption text-center">
                        <h1>WELCOME TO EZ EDUCATION</h1>
                        <h3>YOUR PERSONAL JOURNEY STARTS HERE</h3>
                        <a href="#">
                            <img src="img/down-arrow.png" width="75" height="80" alt="">
                        </a>
                    </div>
                </div>

                <!-- about -->
                <div id="about" class="row pt-5">
                    <div class="col-9 text-center">
                        <h1>ABOUT</h1>
                        <hr class="short">
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your
                            page. I’m a great place for you to tell a story and let your users know a little more about you.​This is a great space to write long text about your company and your services. You can use this space to go into a little more
                            detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your
                            company stand out and show your visitors who you are.</p>
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

                <!-- Removes the top margins -->
                <div>&nbsp;</div>
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
