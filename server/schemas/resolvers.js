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
        console.error("Error getting users:", err);
        throw new Error("Error getting users. Please try again.");
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
    me: async (_, args, context) => {
      const user = context.user;
      if (!user) {
        throw new Error("You must be logged in to perform this action!");
      }
      try {
        const me = await User.findById(user._id).populate("events");
        return me;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    addUser: async (_, args) => {
      try {
        const existingUser = await User.findOne({ email: args.email });
    
        if (existingUser) {
          throw new GraphQLError("User with this email already exists");
        }
    
        const user = await User.create(args);
        const token = signToken(user);
    
        return {
          success: true,
          message: "Signup successful!",
          token,
          user: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
        };
      } catch (err) {
        console.error("Error adding user:", err);
        throw new Error("Error adding user. Please try again.");
      }
    },
    updateUser: async (_, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },
    addEvent: async (_, { input }, context) => {
      const user = context.user;
      if (!user) {
        throw new Error("You must be logged in to perform this action!");
      }
      try {
        const createdEvent = await Event.create({ ...input, createdBy: user._id });
        return createdEvent;
      } catch (err) {
        console.error("Error adding event:", err);
        throw new Error("Error adding event. Please try again.");
      }
    },
    updateEvent: async (_, { input, events }, context) => {
      const user = context.user;
      if (!user) {
        throw new Error("You must be logged in to perform this action!");
      }

      const { name, description, date, time, location } = input;

      const updatedEvent = await User.findOneAndUpdate(
        { events },
        { name, description, date, time, location },
        { new: true }
      );

      return updatedEvent;
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("We do not recognize that email/password");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);

      return {
        user,
        token,
      };
    },
  },
};

module.exports = resolvers;
