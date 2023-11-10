const { User, Event, EventMessage } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');
// Import Stripe

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if(context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'event',
                    populate: 'events'
                })

                return user;
            }

            throw AuthenticationError;
        },
        myEvents: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'myEvent'
                })

                return user.myEvents.id(_id)
            }

            throw AuthenticationError
        },
        eventMessage: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'myMessages',
                })

                return user.myEvents.id(_id)
            }

            throw AuthenticationError
        }
    }
}