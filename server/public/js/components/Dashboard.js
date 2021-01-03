const Dashboard = {
    template: `
        <div id="dashboard">
            <header class="dashboard-header">
                <nav class="navbar fixed-top navbar-expand-md">
                    <div class="navbar-brand">
                        <img src="img/logo-small.png" width="60" height="60" />
                        <span>EZ Education</span>
                    </div>

                    <span class="navbar-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapsible" aria-controls="navbarCollapsible" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </span>

                    <span class="navbar-item ml-auto name">test</span>
                </nav>
            </header>

            <main class="dashboard-main row">
                <nav class="col-md-2 sidebar navbar-expand-md">
                    <div class="collapse navbar-collapse" id="navbarCollapsible">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/dashboardHome"> <i class="fas fa-home"></i> Home </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/dashboardProfile"> <i class="fas fa-user-circle"></i> Profile </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/dashboardSettings"> <i class="fas fa-sliders-h"></i> Settings</router-link>
                            </li>
                            <li class="nav-item logout" v-on:click="logout">
                                <router-link class="nav-link" to="/"> <i class="fas fa-sign-out-alt"></i> Logout</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="col-md-12 content">
                    <div class="container">
                        <router-view></router-view>
                    </div>
                </div>
            </main>
        </div>

    `,
    methods: {
        logout: function () {
            this.$session.destroy();
            router.push({ path: "/" });
        },
    },
    //check if logged in
    beforeCreate() {
        if (!this.$session.exists()) {
            router.push({ path: "/" });
        }
    },
};
