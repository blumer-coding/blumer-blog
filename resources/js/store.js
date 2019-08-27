/*
 |-------------------------------------------------------------------------------
 | VUEX store.js
 |-------------------------------------------------------------------------------
 | Builds the data store from all of the modules for the Blumer app.
 */

/**
 * Adds the promise polyfill for IE 11
 */
require('es6-promise').polyfill();

/**
 * Import Vue and Vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Initializes Vuex on Vue.
 */
Vue.use( Vuex )
/**
 * Imports all of the modules used in the application to build the data store.
 */
import { blogs } from './modules/blogs.js';
import { users } from './modules/users.js';
import { global } from './modules/global.js';
/**
 * Export our data store.
 */
export default new Vuex.Store({
    modules: {
         blogs
        ,users
        ,global
    }
});