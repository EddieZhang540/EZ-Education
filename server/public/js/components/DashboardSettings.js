const DashboardSettings = {
    template: `
        <div>
            <form>
                <div class="row form-group">
                    <div class="col-lg">
                        <label for="profile-email">Email</label>
                        <input type="email" class="form-control" id="profile-email" v-model="user.email" v-bind:class="{ 'border-danger': errors.email }" />
                        <p v-if="errors.email" class="text-danger">{{errors.email}}</p>
                    </div>
                    <div class="col-lg">
                        <label for="profile-password">Password</label>
                        <input type="password" class="form-control" id="profile-password" v-model="user.password" v-bind:class="{ 'border-danger': errors.password }" />
                        <p v-if="errors.password" class="text-danger">{{errors.password}}</p>
                    </div>
                </div>
            </form>
        </div>
    `,
    data: function () {
        return {
            user: this.$session.get("user"),
            errors: {},
        };
    },
};
