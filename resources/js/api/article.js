/**
 * Imports the Roast API URL from the config.
 */
import { ROAST_CONFIG } from '../config.js';

export default {
    /**
     * GET /api/v1/articles
     */
    getArticles: function(){
        return axios.get( ROAST_CONFIG.API_URL + '/articles' );
    },
    /**
     * GET /api/v1/articles/{articleID}
     */
    getArticle: function( articleID ){
        return axios.get( ROAST_CONFIG.API_URL + '/articles/' + articleID );
    },
    /**
     * POST /api/v1/articles
     */
    postAddNewArticle: function( name, address, city, state, zip ){
        return axios.post( ROAST_CONFIG.API_URL + '/articles',
            {
                name: name,
                address: address,
                city: city,
                state: state,
                zip: zip
            }
        );
    }
}