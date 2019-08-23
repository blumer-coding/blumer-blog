/**
 * Imports the Blumer API URL from the config.
 */
import { BLUMER_CONFIG } from '../config.js';

export default {
    getUser: function( userID ){
        return axios.get( BLUMER_CONFIG.API_URL + '/user/' + userID );
    },
}