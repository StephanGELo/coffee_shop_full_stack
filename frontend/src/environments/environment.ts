/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'universaleagle.auth0.com', // the auth0 domain prefix
    audience: 'drinks', // the audience set for the auth0 app
    clientId: 'KNroO0PVLi5rI5m3AcMSN3jauhWAa1da', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};


// https://universaleagle.auth0.com/authorize?audience=drinks&response_type=token&client_id=KNroO0PVLi5rI5m3AcMSN3jauhWAa1da&redirect_uri=http://localhost:8100