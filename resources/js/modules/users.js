/*
 |-------------------------------------------------------------------------------
 | VUEX modules/users.js
 |-------------------------------------------------------------------------------
 | The Vuex data store for the users
 */

import UserAPI from '../api/user.js';

export const users = {
    /**
     * Defines the state being monitored for the module.
     */
    state: {
        user: {},
        userLoadStatus: 0,
        registerStatus: 0
    },
    /**
     * Defines the actions used to retrieve the data.
     */
    actions: {
        loadUser({commit}) {
            commit('setUserLoadStatus', 1);
            //legacy problem used to occured in UserAPI.getUser(data.id)
            // 'data.id',not defined ,wait for you to bind data.id
            UserAPI.getUser()
                .then(function (response) {
                    commit('setUser', response.data);
                    commit('setUserLoadStatus', 2);
                })
                .catch(function () {
                    commit('setUser', {});
                    commit('setUserLoadStatus', 3);
                });
        },
        register({commit, state, dispatch}, data) {
            // 状态1表示开始注册
            commit('setRegisterStatus', 1);
            UserAPI.register(data.name, data.pwd, data.pwdcfm, data.email)
                .then(function (response){
                    // 状态2表示注册成功
                    commit('setRegisterStatus', 2);
                })
                .catch(function (response){
                    // 状态3表示注册失败
                    commit('setRegisterStatus', 3);
                });
        },
    },
    /**
     * Defines the mutations used
     */
    mutations: {
        setUserLoadStatus( state, status ){
            state.userLoadStatus = status;
        },

        setUser( state, user ){
            state.user = user;
        },
        setRegisterStatus( state,status){
            state.registerStatus = status;
        }
    },
    /**
     * Defines the getters used by the module
     */
    getters: {
        getUserLoadStatus( state ){
            return state.userLoadStatus;
        },
        getUser( state ){
            return state.user;
        },
        getRegisterStatus(state){
            return state.registerStatus;
        }
    }
};