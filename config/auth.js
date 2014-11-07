// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '652498118198606', // your App ID
		'clientSecret' 	: '76c1538d675005e2ae1c76fcc40b409f', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: '9g615vBOiHJBPGi4o8HZ1IqHJ',
		'consumerSecret' 	: 'A1Jtw3wGi9YLEtHunRXEYfQziKx0hhLejqMORyO3HVa9nvBiUm',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '69237819910-6r68ju5klf1kkdmk7blq11oc9a72g0os.apps.googleusercontent.com',
		'clientSecret' 	: '4YaCJQZ9vNN4CtUIlgSXel5h ',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};

