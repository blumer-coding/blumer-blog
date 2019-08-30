/**
 * Imports the Blumer API URL from the config.
 */
import { BLUMER_CONFIG } from '../config.js';

export default {
    getUser: function(){
        return axios.get( BLUMER_CONFIG.API_URL + '/user');
    },
    register: function (name,pwd,pwdcfm,email) {
        return axios.post( BLUMER_CONFIG.API_URL + '/register',
            {
                name: name,
                pwd: pwd,
                pwdcfm: pwdcfm,
                email: email,
            }
        );
    },
    logout: function () {
        return axios.post( BLUMER_CONFIG.API_URL + '/logout',
        );
    }
}