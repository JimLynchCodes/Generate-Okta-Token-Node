
const OktaJwtVerifier = require('@okta/jwt-verifier');

require('dotenv').config()

const oktaJwtVerifier = new OktaJwtVerifier({
	issuer: process.env.ISSUER_URL
});

const inputToken = process.argv.slice(2)[0];

console.log('checking token: ', inputToken);

// Passing a string for expectedAud
oktaJwtVerifier.verifyAccessToken(inputToken, 'api://default')
 .then( jwt => console.log('token is valid', jwt) )
 .catch( err => console.warn('token failed validation', err) );

// Passing an array for expectedAud
// oktaJwtVerifier.verifyAccessToken(
//   accessTokenString, 
//     [ 'api://special', 'api://default'] 
//     )
//     .then( jwt => console.log('token is valid') )
//     .catch( err => console.warn('token failed validation') );
