const Login = {
    data: function () {
        return {
            user: {},
            errors: {},
        };
    },
    methods: {
        login: function () {
            if (!this.validateForm()) return;
            axios
                .post("/login", this.user)
                .then((response) => {
                    if (response.status === 200) {
                        if (response.data.result === "success") {
                            this.$session.start();
                            this.$session.set("user", response.data.model);
                            $("#loginModal").modal("hide");
                            router.push({ path: "/dashboard" });
                        } else if (response.data.result === "wrong_credentials") {
                            alert("The email or password is incorrect, please try again.");
                        }
                    }
                })
                .catch(function (error) {
                    console.error(error);
                    alert("Login failed. Please try again later.");
                });
        },
        validateForm: function () {
            this.errors = {};
            this.validateEmail();
            this.validatePassword();
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
    },
    watch: {
        "user.email": function () {
            this.validateEmail();
        },
        "user.password": function () {
            this.validatePassword();
        },
    },
};
