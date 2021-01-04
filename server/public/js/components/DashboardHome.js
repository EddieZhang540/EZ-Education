const DashboardHome = {
    template: `
        <div>
            <div class="dashboard-home">
                <div class="temp-welcome jumbotron">
                    <p class="h1">Thank you for your interest in EZ Education. A team member will contact you for an online meeting in the coming days.</p>
                    <p class="lead">Meanwhile, you can...</p>
                    <hr class="my-3" />
                    <ul>
                        <li>
                            <a href="https://zoom.us/freesignup/"><i class="fas fa-chevron-circle-right"></i>  Create a zoom account</a>
                        </li>
                        <li>
                            <router-link to="/dashboardProfile"><i class="fas fa-chevron-circle-right"></i>  Write a short description about yourself</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,
};
