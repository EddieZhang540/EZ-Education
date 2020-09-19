const Dashboard = {
    template: `
        <div id="dashboard">
            <header class="dashboard-header">
                <nav class="navbar fixed-top navbar-expand-md">
                    <div class="navbar-brand">
                        <img src="img/logo-small.png" width="80" height="80" alt="EZ Education">
                        <span>EZ Education</span>
                    </div>

                    <span class="navbar-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapsible" aria-controls="navbarCollapsible" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </span>
                </nav>
            </header>

            <main class="dashboard-main row">
                <nav class="col-md-3 sidebar navbar-expand-md">
                    <div class="collapse navbar-collapse" id="navbarCollapsible">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/dashboardHome">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/dashboardProfile">Profile</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/dashboardSettings">Settings</router-link>
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
};
