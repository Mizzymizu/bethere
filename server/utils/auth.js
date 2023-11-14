const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config()
// Make sure to set up your environment variable by assigning values to 'EXPIRATION' and 'SECRET' in your .env file

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user...', {
        extensions: {
            code: 'UNAUTHENTICATED'
        }
    }),
    authMiddleware: function ({ req }) {
        // Allows token to be  sent via re.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // ['Bearer', '<tokenvalue>']
        if (req.headers.authorization) {
            token = token.split('Bearer ')[1]
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, process.env.SECRET, { maxAge: process.env.EXPIRATION });
            req.user = data;
        } catch {
            console.log('Invalid token!');
        }

        return req;
    },
    signToken: function ({ firstName, email, _id }) {
        const payload = { firstName, email, _id };

        return jwt.sign({ data: payload }, process.env.SECRET, { expiresIn: process.env.EXPIRATION })
    }
}