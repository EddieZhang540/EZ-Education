const Register = {
    data: function(){
        return {
            user : {},
            errors : {}
        };
    },
    methods: {
        create: function(){
            if(!this.validateForm()) return;
            axios.post('/user', this.user).then((response)=>{
                if( response.status === 200 ){
                    this.user = response.data.model;
                    alert('Register success.');
                }
            }).catch(function(error){
                console.error( error );
                alert('Register failed. Please try again later.');
            });
        },
        validateForm: function(){
            this.errors = {};
            this.validateUsername();
            this.validateSurname();
            this.validateGivenname();
            for( let key in this.errors){
                return false;
            }
            return true;
        },
        validateUsername: function(){
            delete this.errors.username;
            if(!this.user.username){
                this.errors.username='Username is required.';
            }
        },
        validateSurname: function(){
            delete this.errors.surname;
            if(!this.user.surname){
                this.errors.surname='Surname is required.';
            }
        },
        validateGivenname: function(){
            delete this.errors.givenname;
            if(!this.user.givenname){
                this.errors.givenname='Givenname is required.';
            }
        }
    },
    components: { VoerroTagsInput },
    watch : {
        "user.username" : function(){
            this.validateUsername();
        },
        "user.surname" : function(){
            this.validateSurname();
        },
        "user.givenname" : function(){
            this.validateGivenname();
        }
    }
}
