const DashboardProfile = {
    template: `
        <div>
            <form>
                <div class="row">
                    <div class="col-lg form-group">
                        <label for="profile-email">Email</label>
                        <input type="text" class="form-control" id="profile-email" v-model="user.email" v-bind:class="{ 'border-danger': errors.email }" />
                        <p v-if="errors.email" class="text-danger">{{errors.email}}</p>
                    </div>
                    <div class="col-lg form-group">
                        <label for="profile-password">Password</label>
                        <input type="password" class="form-control" id="profile-password" v-model="user.password" v-bind:class="{ 'border-danger': errors.password }" />
                        <p v-if="errors.password" class="text-danger">{{errors.password}}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg form-group">
                        <label for="profile-given">First name</label>
                        <input type="text" class="form-control" id="profile-given" v-model="user.givenname" v-bind:class="{ 'border-danger': errors.givenname }" />
                        <p v-if="errors.givenname" class="text-danger">{{errors.givenname}}</p>
                    </div>
                    <div class="col-lg form-group">
                        <label for="profile-surname">Last name</label>
                        <input type="text" class="form-control" id="profile-surname" v-model="user.surname" v-bind:class="{ 'border-danger': errors.surname }" />
                        <p v-if="errors.surname" class="text-danger">{{errors.surname}}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg form-group">
                        <label for="profile-age">Age</label>
                        <input type="number" class="form-control" id="profile-age" v-model="user.age" v-bind:class="{ 'border-danger': errors.age }" oninput="if(value>99)value=99;if(value.length>2)value=value.slice(0,2);if(value<0)value=0" />
                        <p v-if="errors.age" class="text-danger">{{errors.age}}</p>
                    </div>
                    <div class="col-lg form-group">
                        <label for="profile-address">Address</label>
                        <input type="text" class="form-control" id="profile-address" v-model="user.address" v-bind:class="{ 'border-danger': errors.address }" />
                        <p v-if="errors.address" class="text-danger">{{errors.address}}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg form-group">
                        <label for="profile-wechat">WeChat ID</label>
                        <input type="text" class="form-control" id="profile-wechat" v-model="user.wechat" v-bind:class="{ 'border-danger': errors.wechat }" />
                        <p v-if="errors.wechat" class="text-danger">{{errors.wechat}}</p>
                    </div>
                    <div class="col-lg form-group">
                        <label for="profile-school">School</label>
                        <input type="text" class="form-control" id="profile-school" v-model="user.school" v-bind:class="{ 'border-danger': errors.school }" />
                        <p v-if="errors.school" class="text-danger">{{errors.school}}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col form-group" id="profile-hobby-field">
                        <label for="profile-hobby">Hobbies</label>
                        <p class="field-caption">Press 'enter' after each hobby to save it</p>
                        <voerro-tags-input type="text" element-id="profile-hobby" v-model="hobbies" v-bind:class="{ 'border-danger': errors.hobbies }"></voerro-tags-input>
                        <p v-if="errors.hobbies" class="text-danger">{{errors.hobbies}}</p>
                    </div>
                </div>
            </form>
        </div>
    `,
    data: function () {
        return {
            user: this.$session.get("user"),
            errors: {},
            hobbies: [],
        };
    },
    methods: {
        createHobbiesTags: function () {
            var hobbiesArray = this.$session.get("user").hobby.split(",");
            hobbiesArray.forEach((h, i) => {
                let t = { key: i, value: h };
                this.hobbies.push(t);
            });
        },
        validateForm: function () {
            this.errors = {};
            this.validateEmail();
            this.validatePassword();
            this.validateSurname();
            this.validateGivenname();
            this.validateAge();
            this.validateHobbies();
            for (let key in this.errors) {
                return false;
            }
            return true;
        },
        validateEmail: function () {
            delete this.errors.email;
            if (!this.user.email) {
                this.errors.email = "Please enter the email";
            }
        },
        validatePassword: function () {
            delete this.errors.password;
            if (!this.user.password) {
                this.errors.password = "Please enter the password";
            }
        },
        validateSurname: function () {
            delete this.errors.surname;
            if (!this.user.surname) {
                this.errors.surname = "This is a required field";
            }
        },
        validateGivenname: function () {
            delete this.errors.givenname;
            if (!this.user.givenname) {
                this.errors.givenname = "This is a required field";
            }
        },
        validateAge: function () {
            delete this.errors.age;
            if (!this.user.age) {
                this.errors.age = "This is a required field";
            }
        },
        validateHobbies: function () {
            delete this.errors.hobbies;
            if (this.hobbies.length < 2) {
                this.errors.hobbies = "Please enter at least 2 hobbies.";
            }
        },
    },
    components: { VoerroTagsInput },
    watch: {
        "user.email": function () {
            this.validateEmail();
        },
        "user.password": function () {
            this.validatePassword();
        },
        "user.surname": function () {
            this.validateSurname();
        },
        "user.givenname": function () {
            this.validateGivenname();
        },
        "user.age": function () {
            this.validateAge();
        },
        hobbies: function () {
            this.validateHobbies();
        },
    },
    //load & parse vuerro tags
    beforeMount() {
        this.createHobbiesTags();
    },
};
