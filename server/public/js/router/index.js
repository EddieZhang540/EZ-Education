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
        methods : {
            signup : function(){
                $('#registerModal').modal('show');
            },
            login : function(){
                $('#loginModal').modal('show');
            }
      }
    }).$mount('#container');

    new Vue(Register).$mount('#registerModal');
    new Vue(Login).$mount('#loginModal');


}
