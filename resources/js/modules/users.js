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
        userLoadStatus: 0
    },
    /**
     * Defines the actions used to retrieve the data.
     */
    actions: {
        loadUser( { commit }, data ){
            commit( 'setUserLoadStatus', 1 );
            //legacy problem used to occured in UserAPI.getUser(data.id)
            // 'data.id',not defined ,wait for you to bind data.id
            console.log(data);
            UserAPI.getUser(1)
                .then( function( response ){
                    commit( 'setUser', response.data );
                    commit( 'setUserLoadStatus', 2 );
                })
                .catch( function(){
                    commit( 'setUser', {} );
                    commit( 'setUserLoadStatus', 3 );
                });

        }
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
        }
    }
};