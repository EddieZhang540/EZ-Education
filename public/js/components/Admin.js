const Admin = {
    template: `
        <div class="container-fluid">
            <div>
                <span><router-link to="/admin/user">User</router-link></span>
                <span><router-link to="/admin/help">Help</router-link></span>
            </div>
            <div>
                <router-view></router-view>
            </div>
        </div>
    `
}

