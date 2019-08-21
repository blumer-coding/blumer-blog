/*
 |-------------------------------------------------------------------------------
 | VUEX modules/articles.js
 |-------------------------------------------------------------------------------
 | The Vuex data store for the articles
 */

import ArticleAPI from '../api/article.js';

export const articles = {
    /**
     * Defines the state being monitored for the module.
     */
    state: {
        articles: [],
        articlesLoadStatus: 0,

        article: {},
        articleLoadStatus: 0
    },
    /**
     * Defines the actions used to retrieve the data.
     */
    actions: {
        loadArticles( { commit } ){
            commit( 'setArticlesLoadStatus', 1 );

            ArticleAPI.getArticles()
                .then( function( response ){
                    commit( 'setArticles', response.data );
                    commit( 'setArticlesLoadStatus', 2 );
                })
                .catch( function(){
                    commit( 'setArticles', [] );
                    commit( 'setArticlesLoadStatus', 3 );
                });
        },

        loadArticle( { commit }, data ){
            commit( 'setArticleLoadStatus', 1 );

            ArticleAPI.getArticle( data.id )
                .then( function( response ){
                    commit( 'setArticle', response.data );
                    commit( 'setArticleLoadStatus', 2 );
                })
                .catch( function(){
                    commit( 'setArticle', {} );
                    commit( 'setArticleLoadStatus', 3 );
                });

        }
    },
    /**
     * Defines the mutations used
     */
    mutations: {
        setArticlesLoadStatus( state, status ){
            state.articlesLoadStatus = status;
        },

        setArticles( state, articles ){
            state.articles = articles;
        },

        setArticleLoadStatus( state, status ){
            state.articleLoadStatus = status;
        },

        setArticle( state, article ){
            state.article = article;
        }
    },
    /**
     * Defines the getters used by the module
     */
    getters: {
        getArticlesLoadStatus( state ){
            return state.articlesLoadStatus;
        },

        getArticles( state ){
            return state.articles;
        },

        getArticleLoadStatus( state ){
            return state.articleLoadStatus;
        },

        getArticle( state ){
            return state.article;
        }
    }
};