const Login = {
    data: function(){
        return {
            user : {},
            errors : {}
        };
    },
    methods: {
        login: function(){
            if(!this.validateForm()) return;
            alert('TODO: login');
        },
        validateForm: function(){
            this.errors = {};
            this.validateEmail();
            this.validatePassword();
            for( let key in this.errors){
                return false;
            }
            return true;
        },
        validateEmail: function(){
            delete this.errors.email;
            if(!this.user.email){
                this.errors.email='Please enter the email';
            }
        },
        validatePassword: function(){
            delete this.errors.password;
            if(!this.user.password){
                this.errors.password='Please enter the password';
            }
        }
    },
    watch : {
        "user.email" : function(){
            this.validateEmail();
        },
        "user.password" : function(){
            this.validatePassword();
        }
    }
}
