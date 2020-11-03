var options = {
    persist: true,
};
Vue.use(VueSession, options);
Vue.use(VueSmoothScroll);

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/admin",
        component: Admin,
        children: [
            { path: "", component: User },
            { path: "user", component: User },
            { path: "help", component: Help },
        ],
    },
    {
        path: "/dashboard",
        component: Dashboard,
        redirect: "/dashboardHome",
        children: [
            { path: "/dashboardHome", component: DashboardHome },
            { path: "/dashboardProfile", component: DashboardProfile },
            { path: "/dashboardSettings", component: DashboardSettings },
        ],
    },
];

const router = new VueRouter({
    routes,
});

function onLoad() {
    const app = new Vue({
        router,
    }).$mount("#container");

    new Vue(Register).$mount("#registerModal");
    new Vue(Login).$mount("#loginModal");
}
