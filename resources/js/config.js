/**
 * Defines the API route we are using.
 */
var api_url = '';

switch( process.env.NODE_ENV ){
    case 'development':
        api_url = 'http://blumer.cn/api/v1';
        break;
    case 'production':
        api_url = 'http://www.blumer.cn/api/v1';
        break;
}
export const BLUMER_CONFIG = {
    API_URL: api_url,
};