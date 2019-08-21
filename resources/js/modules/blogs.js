/*
 |-------------------------------------------------------------------------------
 | VUEX modules/blogs.js
 |-------------------------------------------------------------------------------
 | The Vuex data store for the blogs
 */

import BlogAPI from '../api/blog.js';

export const blogs = {
    /**
     * Defines the state being monitored for the module.
     */
    state: {
        blogs: [],
        blogsLoadStatus: 0,

        blog: {},
        blogLoadStatus: 0
    },
    /**
     * Defines the actions used to retrieve the data.
     */
    actions: {
        loadBlogs( { commit } ){
            commit( 'setBlogsLoadStatus', 1 );

            BlogAPI.getBlogs()
                .then( function( response ){
                    commit( 'setBlogs', response.data );
                    commit( 'setBlogsLoadStatus', 2 );
                })
                .catch( function(){
                    commit( 'setBlogs', [] );
                    commit( 'setBlogsLoadStatus', 3 );
                });
        },

        loadBlog( { commit }, data ){
            commit( 'setBlogLoadStatus', 1 );

            BlogAPI.getBlog( data.id )
                .then( function( response ){
                    commit( 'setBlog', response.data );
                    commit( 'setBlogLoadStatus', 2 );
                })
                .catch( function(){
                    commit( 'setBlog', {} );
                    commit( 'setBlogLoadStatus', 3 );
                });

        }
    },
    /**
     * Defines the mutations used
     */
    mutations: {
        setBlogsLoadStatus( state, status ){
            state.blogsLoadStatus = status;
        },

        setBlogs( state, blogs ){
            state.blogs = blogs;
        },

        setBlogLoadStatus( state, status ){
            state.blogLoadStatus = status;
        },

        setBlog( state, blog ){
            state.blog = blog;
        }
    },
    /**
     * Defines the getters used by the module
     */
    getters: {
        getBlogsLoadStatus( state ){
            return state.blogsLoadStatus;
        },

        getBlogs( state ){
            return state.blogs;
        },

        getBlogLoadStatus( state ){
            return state.blogLoadStatus;
        },

        getBlog( state ){
            return state.blog;
        }
    }
};