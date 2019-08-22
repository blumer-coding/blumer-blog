/**
 * Imports the Blumer API URL from the config.
 */
import { BLUMER_CONFIG } from '../config.js';

export default {
    /**
     * GET /api/v1/blogs
     */
    getBlogs: function(){
        return axios.get( BLUMER_CONFIG.API_URL + '/blogs' );
    },
    /**
     * GET /api/v1/blogs/{blogID}
     */
    getBlog: function( blogID ){
        return axios.get( BLUMER_CONFIG.API_URL + '/blogs/' + blogID );
    },
    /**
     * POST /api/v1/blogs
     */
    postAddNewBlog: function( slug, title, content ){
        return axios.post( BLUMER_CONFIG.API_URL + '/blogs',
            {
                slug: slug,
                title: title,
                content: content,
            }
        );
    }
}