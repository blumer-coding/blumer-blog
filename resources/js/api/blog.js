/**
 * Imports the Roast API URL from the config.
 */
import { ROAST_CONFIG } from '../config.js';

export default {
    /**
     * GET /api/v1/blogs
     */
    getBlogs: function(){
        return axios.get( ROAST_CONFIG.API_URL + '/blogs' );
    },
    /**
     * GET /api/v1/blogs/{blogID}
     */
    getBlog: function( blogID ){
        return axios.get( ROAST_CONFIG.API_URL + '/blogs/' + blogID );
    },
    /**
     * POST /api/v1/blogs
     */
    postAddNewBlog: function( name, address, city, state, zip ){
        return axios.post( ROAST_CONFIG.API_URL + '/blogs',
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