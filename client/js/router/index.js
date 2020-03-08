const routes = [
    { path: '/', component: Main },
    { path: '/about', component: About },
    {
        path: '/admin',
        component: Admin,
        children: [
            { path: '', component: User }, // show User page by default
            { path: 'user', component: User },
            { path: 'help', component: Help }
        ]
    }
];

const router = new VueRouter({
    routes
});

function onLoad(){
    const app = new Vue({
      router
    }).$mount('#container');
}
