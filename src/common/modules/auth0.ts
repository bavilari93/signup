/* Auth0 Module */

import Auth0 from 'auth0-js';
import { configVars } from 'common/config/enviroment-variables';

export const CLIENT_ID = configVars.AUTH0_CLIENT_ID;
export const AUTH0_DOMAIN = configVars.AUTH0_DOMAIN;
export const AUTH0_AUDIENCE = configVars.AUTH0_AUDIENCE;
export const AUTH0_CALLBACK_URL = configVars.AUTH0_CALLBACK_URL;
export const AUTH0_TENANT = configVars.AUTH0_TENANT;
export const AUTH0_SCOPE = 'openid profile email read:current_user update:current_user_metadata read:authenticators enroll';
export const AUTH0_DEFAULT_CONNECTION = 'Username-Password-Authentication';
export const AUTH0_RESPONSE_TYPE = 'token id_token';
// auth0 constructor - with custom domain implementation
export const auth0MFA = new Auth0.WebAuth({
  domain: AUTH0_DOMAIN || '',
  clientID: CLIENT_ID || '',
  redirectUri: AUTH0_CALLBACK_URL || '',
  responseType: AUTH0_RESPONSE_TYPE,
  scope: AUTH0_SCOPE,
  audience: configVars.AUTH0_AUDIENCE_MFA,
  overrides: {
  	__tenant:AUTH0_TENANT ,
  	__token_issuer:AUTH0_DOMAIN
  },
});

export const auth0Api= new Auth0.WebAuth({
  domain: AUTH0_DOMAIN || '',
  clientID: CLIENT_ID || '',
  redirectUri: AUTH0_CALLBACK_URL || '',
  responseType: AUTH0_RESPONSE_TYPE,
  scope: AUTH0_SCOPE,
  audience: configVars.AUTH0_AUDIENCE,
  overrides: {
  	__tenant:AUTH0_TENANT ,
  	__token_issuer:AUTH0_DOMAIN
  },
});
