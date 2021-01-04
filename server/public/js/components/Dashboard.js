const Dashboard = {
    template: `
        <div id="dashboard">
            <header class="dashboard-header">
                <nav class="navbar fixed-top navbar-expand-md row">
                    <div class="col-md-4">
                        <div class="navbar-brand">
                            <img src="img/logo-small.png" width="60" height="60" />
                            <span>EZ Education</span>
                        </div>

                        <span class="navbar-light">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapsible" aria-controls="navbarCollapsible" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </span>
                    </div>

                    <div class="navbar-item name dropdown col-md-8">
                        <span class="dropdown-toggle" href="#" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{fullName}}</span>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu">
                            <router-link class="dropdown-item" to="/dashboardSettings"> <i class="fas fa-sliders-h"></i> Settings</router-link>
                            <div class="dropdown-divider"></div>
                            <router-link class="dropdown-item logout" to="/" v-on:click="logout"> <i class="fas fa-sign-out-alt"></i> Logout </router-link>
                        </div>
                    </div>
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
    data: function () {
        return {
            fullName: this.$session.get("user").givenname + " " + this.$session.get("user").surname + " ",
        };
    },
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
