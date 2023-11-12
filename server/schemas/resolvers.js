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
    user: async (_, { userId }) => {
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
  },
  Mutation: {
    addUser: async (_, args) => {
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
    updateUser: async (_, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },
    updateEvent: async (_, { input }, context) => {
      const user = context.user;
      if (!user) {
        throw new Error("You must be logged in to perform this action!");
      }

      const { name, description, date, time, location } = input;

      const updatedEvent = await User.findOneAndUpdate(
        { name },
        { name, description, date, time, location },
        { new: true }
      );

      return updatedEvent;
    },
    login: async (_, { email, password }) => {
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
