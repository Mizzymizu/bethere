const { User, Event, EventMessage } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const { GraphQLError } = require("graphql");
// Import Stripe

const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (err) {
        throw new Error(err);
      }
    },
    user: async (parent, { userId }) => {
      try {
        const user = await User.findById(userId);
        if (user) {
          return user;
        } else {
          throw new Error("User not found");
        }
      } catch (err) {
        throw new Error(err);
      }

      // if(context.user) {
      //     const user = await User.findById(context.user._id).populate({
      //         path: 'event',
      //         populate: 'events'
      //     })

      //     return user;
      // }

      // throw AuthenticationError;
    },
    events: async (_, args, context) => {
      const user = context.user;
      if (!user) {
        throw new Error("You must be logged in to perform this action!");
      }
      try {
        const events = await Event.find().populate("createdBy");
        return events;
      } catch (err) {
        throw new Error(err);
      }
    },
    // myEvents: async (parent, { _id }, context) => {
    //     if (context.user) {
    //         const user = await User.findById(context.user._id).populate({
    //             path: 'myEvent'
    //         })

    //         return user.myEvents.id(_id)
    //     }

    //     throw AuthenticationError
    // },
    // eventMessage: async (parent, { _id }, context) => {
    //     if (context.user) {
    //         const user = await User.findById(context.user._id).populate({
    //             path: 'myMessages',
    //         })

    //         return user.myEvents.id(_id)
    //     }

    //     throw AuthenticationError
    // }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addEvent: async (_, { input }, context) => {
      const user = context.user;
      if (!user) {
        throw new Error("You m ust be logged in to perform this action!");
      }

      const { name, description, date, time, location } = input;

      const newEvent = new Event({
        createdBy: user,
        name,
        description,
        date,
        time,
        location,
      });

      const event = await newEvent.save();

      return event;
    },
    // addEventMessage: async (parent, { eventMessages, eventId }, context) => {
    //     const user = context.user._id
    //     console.log(user)
    //     const newMessage = await Event.findOneAndUpdate(
    //         { _id: eventId }, // filter
    //         { $push: { user, eventMessages } }, // push over addtoset to add similar comments
    //         { new: true }
    //     )

    //     return newMessage
    // },
    // updateUser: async (parent, args, context) => {
    //     if (context.user) {
    //         return await User.findByIdAndUpdate(context.user._id, args, {
    //             new: true
    //         })
    //     }

    //     throw AuthenticationError
    // },
    // updateEvent: async (parent, { eventName, eventDescription, eventDate, eventTime, eventLocation }) => {
    //     const updatedEvent = await Event.findOneAndUpdate(
    //         { eventName },
    //         { eventName, eventDescription, eventDate, eventTime, eventLocation },
    //         { new: true, upsert: true }
    //     )
    //     return updatedEvent
    // },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new GraphQLError("We do not recognize that email/password");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user: user };
    },
  },
};

module.exports = resolvers;
