/*
 |-------------------------------------------------------------------------------
 | routes.js
 |-------------------------------------------------------------------------------
 | Contains all of the routes for the application
 */

/**
 * Imports Vue and VueRouter to extend with the routes.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * Extends Vue to use Vue Router
 */
Vue.use( VueRouter );
/**
 * Makes a new VueRouter that we will use to run all of the routes for the app.
 */
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {name: 'index'},
            name: 'layout',
            components: Vue.component( 'Home', require( './pages/Layout.vue')),
            children: [
                {
                    path: 'index',
                    name: 'index',
                    components: Vue.component( 'Index', require( './pages/Index.vue'))
                },
                {
                    path: 'blogs',
                    name: 'blogs',
                    components: Vue.component( 'Blogs', require( './pages/Blogs.vue' )),
                },

                {
                    path: 'blogs/:id',
                    name: 'blog',
                    components: Vue.component( 'Blog', require( './pages/Blog.vue'))
                },
                {
                    path: 'register',
                    name: 'register',
                    components: Vue.component( 'Register', require( './pages/Register.vue'))
                },
                {
                    path: 'home',
                    name: 'home',
                    components: Vue.component( 'Home', require( './pages/Home.vue'))
                }
            ]
        }
    ]
});