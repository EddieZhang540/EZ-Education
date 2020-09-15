var options = {
    persist: true
}
Vue.use(VueSession, options)

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/goal', component: Goal },
    { path: '/contact', component: Contact },
    {
        path: '/admin',
        component: Admin,
        children: [
            { path: '', component: User }, // show User page by default
            { path: 'user', component: User },
            { path: 'help', component: Help }
        ]
    },
    { path: '/dashboardHome', component: DashboardHome },
    { path: '/dashboardProfile', component: DashboardProfile },
    { path: '/dashboardSettings', component: DashboardSettings }
];

const router = new VueRouter({
    routes
});

function onLoad(){
    const app = new Vue({
        router,
        data: function(){
            return {
                loggedin : true,
                user : {},
                errors : {}
            };
        },
        methods : {
            signup : function(){
                $('#registerModal').modal('show');
            },
            login : function(){
                $('#loginModal').modal('show');
            },
            save: function(){
                this.$session.set('test',{test:'aaa'});
            },
            test: function(){
                alert(this.$session.get('test').test);
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
    }).$mount('#container');

    new Vue(Register).$mount('#registerModal');
    new Vue(Login).$mount('#loginModal');
   // new Vue(Dashboard).$mount('#dashboard');

}
