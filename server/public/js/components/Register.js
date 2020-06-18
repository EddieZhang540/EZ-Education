const Register = {
    data: function(){
        return {
            user : { role : '' },
            errors : {},
            timezone : [
                { text: 'UTC +12', value: 'UTC +12' },
                { text: 'UTC +11', value: 'UTC +11' },
                { text: 'UTC +10', value: 'UTC +10' },
                { text: 'UTC +9', value:  'UTC +9' },
                { text: 'UTC +8', value:  'UTC +8' },
                { text: 'UTC +7', value:  'UTC +7' },
                { text: 'UTC +6', value:  'UTC +6' },
                { text: 'UTC +5', value:  'UTC +5' },
                { text: 'UTC +4', value:  'UTC +4' },
                { text: 'UTC +3', value:  'UTC +3' },
                { text: 'UTC +2', value:  'UTC +2' },
                { text: 'UTC +1', value:  'UTC +1' },
                { text: 'UTC +0', value:  'UTC +0' },
                { text: 'UTC -1', value:  'UTC -1' },
                { text: 'UTC -2', value:  'UTC -2' },
                { text: 'UTC -3', value:  'UTC -3' },
                { text: 'UTC -4', value:  'UTC -4' },
                { text: 'UTC -5', value:  'UTC -5' },
                { text: 'UTC -6', value:  'UTC -6' },
                { text: 'UTC -7', value:  'UTC -7' },
                { text: 'UTC -8', value:  'UTC -8' },
                { text: 'UTC -9', value:  'UTC -9' },
                { text: 'UTC -10', value: 'UTC -10' },
                { text: 'UTC -11', value: 'UTC -11' },
            ],
            acceptAgreement : false,
            confirmPassword : '',
            hobbies : []
        };
    },
    methods: {
        role: function( role ){
            this.user.role = role;
        },
        create: function(){
            if(!this.validateForm()) return;
            var hobby = ''
            this.hobbies.forEach(( h, i )=>{
                hobby +=  h.value + ( i+1 === this.hobbies.length? '': ',' );
            });
            this.user.hobby = hobby;
            axios.post('/user', this.user).then((response)=>{
                if( response.status === 200 ){
                    if(response.data.result === 'success'){
                        this.user = response.data.model;
                        alert('Register success.');
                        $('#registerModal').modal('hide');
                        this.cancel();
                    }else if(response.data.result === 'duplicate_user'){
                        alert('Username exists. Please try another one.');
                    }else if(response.data.result === 'failed'){
                        alert('Register failed. Please try again later.');
                    }
                }
            }).catch(function(error){
                console.error( error );
                alert('Register failed. Please try again later.');
            });
        },
        accept: function(){
            this.acceptAgreement = true;
        },
        cancel: function(){
            this.user.role = '';
            this.acceptAgreement = false;
        },
        validateForm: function(){
            this.errors = {};
            this.validateUsername();
            this.validatePassword();
            this.validateConfirmPassword();
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
        validatePassword: function(){
            delete this.errors.password;
            if(!this.user.password){
                this.errors.password='Password is required.';
            }
        },
        validateConfirmPassword: function(){
            delete this.errors.confirmPassword;
            if(!this.confirmPassword){
                this.errors.confirmPassword='Confirm password is required.';
            }else if( this.confirmPassword !== this.user.password ){
                this.errors.confirmPassword='Password and confirm password must match.';
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
        },
        validateAge: function(){
            delete this.errors.age;
            if(!this.user.age){
                this.errors.age='Age is required.';
            }
        }
    },
    components: { VoerroTagsInput },
    watch : {
        "user.username" : function(){
            this.validateUsername();
        },
        "user.password" : function(){
            this.validatePassword();
        },
        "user.surname" : function(){
            this.validateSurname();
        },
        "user.givenname" : function(){
            this.validateGivenname();
        }
    }
}
