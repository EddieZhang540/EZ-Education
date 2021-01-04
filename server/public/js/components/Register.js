const Register = {
    data: function () {
        return {
            user: { role: "" },
            errors: {},
            contactList: [
                { text: "Skype", value: "Skype" },
                { text: "Discord", value: "Discord" },
                { text: "WhatsApp", value: "WhatsApp" },
                { text: "WeChat", value: "WeChat" },
                { text: "Messenger", value: "Messenger" },
            ],
            confirmPassword: "",
            hobbies: [],
        };
    },
    methods: {
        role: function (role) {
            this.user.role = role;
        },
        create: function () {
            if (!this.validateForm()) return;
            var hobby = "";
            this.hobbies.forEach((h, i) => {
                hobby += h.value + (i + 1 === this.hobbies.length ? "" : ",");
            });
            this.user.hobby = hobby;
            axios
                .post("/user", this.user)
                .then((response) => {
                    if (response.status === 200) {
                        if (response.data.result === "success") {
                            this.user = response.data.model;
                            alert("Register success.");
                            $("#registerModal").modal("hide");
                            this.cancel();
                        } else if (response.data.result === "duplicate_user") {
                            alert("This email has already been registered. Please use another one.");
                        } else if (response.data.result === "failed") {
                            alert("Register failed. Please try again later.");
                        }
                    }
                })
                .catch(function (error) {
                    console.error(error);
                    alert("Register failed. Please try again later.");
                });
        },
        cancel: function () {
            this.user.role = "";
        },
        validateForm: function () {
            this.errors = {};
            this.validateEmail();
            this.validatePassword();
            this.validateConfirmPassword();
            this.validateSurname();
            this.validateGivenname();
            this.validateAge();
            this.validateContact();
            this.validateContactID();
            this.validateHobbies();
            this.validatePurpose();
            this.validateSkill();
            for (let key in this.errors) {
                return false;
            }
            return true;
        },
        validateEmail: function () {
            delete this.errors.email;
            if (!this.user.email) {
                this.errors.email = "This is a required field";
            }
        },
        validatePassword: function () {
            delete this.errors.password;
            if (!this.user.password) {
                this.errors.password = "This is a required field";
            } else if (this.user.password.length < 6 || this.user.password.length > 15) {
                this.errors.password = "Your password must be between 6-15 characters.";
            }
        },
        validateConfirmPassword: function () {
            delete this.errors.confirmPassword;
            if (!this.confirmPassword) {
                this.errors.confirmPassword = "This is a required field";
            } else if (this.confirmPassword !== this.user.password) {
                this.errors.confirmPassword = "Password and the confirm password must match.";
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
        validateSecondLang: function () {
            delete this.errors.secondlang;
            if (!this.user.secondlang) {
                this.errors.secondlang = "This is a required field";
            }
        },
        validateHobbies: function () {
            delete this.errors.hobbies;
            if (this.hobbies.length < 2) {
                this.errors.hobbies = "Please enter at least 2 hobbies.";
            }
        },

        validatePurpose: function () {
            delete this.errors.purpose;
            if (this.user.role === "teacher" && !this.user.purpose) {
                this.errors.purpose = "This is a required field.";
            }
        },
        validateSkill: function () {
            delete this.errors.skill;
            if (this.user.role === "teacher" && !this.user.skill) {
                this.errors.skill = "This is a required field.";
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
        confirmPassword: function () {
            this.validateConfirmPassword();
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
        "user.purpose": function () {
            this.validatePurpose();
        },
        "user.skill": function () {
            this.validateSkill();
        },
    },
};
