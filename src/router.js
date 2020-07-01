import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import  Home from './views/Home.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/sign-up',
            name: 'sign-up',
            component: SignUp
        }
    ]
});

router.beforeEach((to, from, next) =>{
    const publicPages = ['/login', '/sign-up'];
    const authRequired = !publicPages.includes(to.path);

    store.dispatch("loadLocalAccount");
    let loggedIn = store.getters["isLoggedIn"];

    if (authRequired && !loggedIn){
        return next({
            path: '/login',
            query: {returnrUri: to.path}
        });
    }
    next();
});

export default router;