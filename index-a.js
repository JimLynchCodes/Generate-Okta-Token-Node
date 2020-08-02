require('dotenv').config()

const generateTokenWithSharedKey = () => {

	const njwt = require('njwt');

	const clientSecret = process.env.OKTA_CLIENT_SECRET;
	const clientId = process.env.OKTA_CLIENT_ID;
	const now = Math.floor( new Date().getTime() / 1000 );
	const plus5Minutes = new Date( ( now + (5*60) ) * 1000);

	const claims = {
		  aud: "https://${yourOktaDomain}/oauth2/default/v1/token",
	};

	const jwt = njwt.create(claims, clientSecret)
	  .setIssuedAt(now)
	  .setExpiration(plus5Minutes)
	  .setIssuer(clientId)
	  .setSubject(clientId)
	  .compact();

	return jwt;
}

const main = () => {

	console.log('okta api key is: ', process.env.OKTA_KEY);

	console.log('jwt is: ', generateTokenWithSharedKey()); 
};

main();
