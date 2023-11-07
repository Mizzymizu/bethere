import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import Event from './Event';

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    events: [Event.schema]
});

// Setting up the pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.harsh(this.password, saltRounds)
    }

    next();
});

// Comapre the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
};

const User = model('User', userSchema);

export default User;