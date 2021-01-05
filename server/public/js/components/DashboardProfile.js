const DashboardProfile = {
    template: `
        <div>
            <form class="dashboard-profile">
                <div class="row mb-4">
                    <div class="col-sm-11 h3">General Information</div>
                    <div class="col-sm-1 edit-icon">
                        <button type="button" class="btn btn-success square-btn" v-on:click="editMode = !editMode"><i class="fas fa-edit" v-bind:class="{ 'fas fa-times': editMode }"></i></button>
                    </div>
                </div>

                <div class="row form-group">
                    <label class="col-lg-3 col-form-label" for="profile-given">First name</label>
                    <div class="col-lg-3">
                        <input type="text" id="profile-given" v-model="user.givenname" v-bind:class="{ 'border-danger': errors.givenname, 'form-control':editMode, 'form-control-plaintext': !editMode }" v-bind:readonly="!editMode" />
                        <p v-if="errors.givenname" class="text-danger">{{errors.givenname}}</p>
                    </div>
                    <label class="col-lg-3 col-form-label" for="profile-surname">Last name</label>
                    <div class="col-lg-3">
                        <input type="text" id="profile-surname" v-model="user.surname" v-bind:class="{ 'border-danger': errors.surname, 'form-control':editMode, 'form-control-plaintext': !editMode }" v-bind:readonly="!editMode" />
                        <p v-if="errors.surname" class="text-danger">{{errors.surname}}</p>
                    </div>
                </div>

                <hr v-if="!editMode"/>

                <div class="row form-group">
                    <label class="col-lg-3 col-form-label" for="profile-age">Age</label>
                    <div class="col-lg-3">
                        <input
                            type="number"
                            id="profile-age"
                            v-model="user.age"
                            v-bind:class="{ 'border-danger': errors.age, 'form-control':editMode, 'form-control-plaintext': !editMode }"
                            v-bind:readonly="!editMode"
                            oninput="if(value>99)value=99;if(value.length>2)value=value.slice(0,2);if(value<0)value=0"
                        />
                        <p v-if="errors.age" class="text-danger">{{errors.age}}</p>
                    </div>
                    <label class="col-lg-3 col-form-label" for="profile-secondlang">Secondary language</label>
                    <div class="col-lg-3">
                        <input type="text" id="profile-secondlang" v-model="user.secondlang" v-bind:class="{ 'border-danger': errors.secondlang, 'form-control':editMode, 'form-control-plaintext': !editMode }" v-bind:readonly="!editMode" />
                        <p v-if="errors.secondlang" class="text-danger">{{errors.secondlang}}</p>
                    </div>
                </div>

                <hr v-if="!editMode"/>

                <div class="row form-group">
                    <label class="col-lg-3 col-form-label" for="profile-contact">Contact</label>
                    <div class="col-lg-3">
                        <input type="text" id="profile-contact" v-model="user.contact" v-bind:class="{ 'border-danger': errors.contact, 'form-control':editMode, 'form-control-plaintext': !editMode }" v-bind:readonly="!editMode" />
                        <p v-if="errors.contact" class="text-danger">{{errors.contact}}</p>
                    </div>
                    <label class="col-lg-3 col-form-label" for="profile-contactID">Contact ID</label>
                    <div class="col-lg-3">
                        <input type="text" id="profile-contactID" v-model="user.contactID" v-bind:class="{ 'border-danger': errors.contactID, 'form-control':editMode, 'form-control-plaintext': !editMode }" v-bind:readonly="!editMode" />
                        <p v-if="errors.contactID" class="text-danger">{{errors.contactID}}</p>
                    </div>
                </div>

                <hr v-if="!editMode"/>

                <div class="row form-group">
                    <div class="col" id="profile-hobby-field">
                        <label for="profile-hobby">Hobbies</label>
                        <div v-if="editMode">
                            <p class="field-caption">Press 'enter' after each hobby to save it</p>
                            <voerro-tags-input type="text" element-id="profile-hobby" v-model="hobbies" v-bind:class="{ 'border-danger': errors.hobbies }"></voerro-tags-input>
                            <p v-if="errors.hobbies" class="text-danger">{{errors.hobbies}}</p>
                        </div>
                        <ul v-else>
                            <li v-for="hobby in hobbies" :key="hobby.value">{{hobby.value}}</li>
                        </ul>
                    </div>
                </div>

                <hr v-if="!editMode"/>

                <div class="row form-group">
                    <div class="col">
                        <label for="profile-bio">Description about you</label>
                        <textarea class="form-control" id="profile-bio" v-model="user.bio" v-bind:class="{ 'border-danger': errors.bio }" v-on:click="editMode = true"></textarea>
                    </div>
                </div>

                <div v-if="editMode">
                    <button type="button" class="btn btn-success" v-on:click="update">Update</button>
                    <button type="button" class="btn btn-secondary" v-on:click="cancel">Cancel</button>
                </div>
            </form>
        </div>
    `,
    data: function () {
        return {
            user: this.$session.get("user"),
            errors: {},
            hobbies: [],
            editMode: false,
        };
    },
    methods: {
        createHobbiesTags: function () {
            var hobbiesArray = this.user.hobby.split(",");
            hobbiesArray.forEach((h, i) => {
                let t = { key: i, value: h };
                this.hobbies.push(t);
            });
        },
        cancel: function () {
            if (!this.validateForm()) return;
            this.user = this.$session.get("user");
            this.editMode = false;
        },
        update: function () {
            if (!this.validateForm()) return;
            var hobby = "";
            this.hobbies.forEach((h, i) => {
                hobby += h.value + (i + 1 === this.hobbies.length ? "" : ",");
            });
            this.user.hobby = hobby;
            this.editMode = false;
        },
        validateForm: function () {
            this.errors = {};
            this.validateEmail();
            this.validatePassword();
            this.validateSurname();
            this.validateGivenname();
            this.validateAge();
            this.validateContact();
            this.validateContactID();
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
        validateContact: function () {
            delete this.errors.contact;
            if (!this.user.contact) {
                this.errors.contact = "This is a required field";
            }
        },
        validateContactID: function () {
            delete this.errors.contactID;
            if (!this.user.contactID) {
                this.errors.contactID = "This is a required field";
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
        "user.contact": function () {
            this.validateContact();
        },
        "user.contactID": function () {
            this.validateContactID();
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
