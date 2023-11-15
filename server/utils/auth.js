const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

// Environment variables
// secret
// expiration
const secret = "mysecretshhhhhhh";
const expiration = "2h";

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user...', {
        extensions: {
            code: 'UNAUTHENTICATED'
        }
    }),
    authMiddleware: function ({ req }) {
        // Allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;
    
        // Log the received token
        console.log('Received token:', token);
    
        // Check if the token is present and starts with 'Bearer'
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split('Bearer ')[1];
        }
    
        if (!token) {
            // Log the absence of a token
            console.log('No token found');
            return req;
        }
    
        try {
            // Verify the token
            const { data } = jwt.verify(token, secret, { expiresIn: expiration });
    
            // Log the decoded token
            console.log('Decoded token:', data);
    
            req.user = data;
        } catch (error) {
            // Log errors during token verification
            console.error('Error verifying token:', error.message);
            console.log('Invalid token!');
        }
    
        return req;
    },
    
    signToken: function ({ firstName, email, _id }) {
        const payload = { firstName, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
};
