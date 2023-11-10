const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventMessageSchema = new Schema({
    dateCreated: {
        type: Date,
        required: true
    },
    poster: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    messageText: {
        type: String,
        required: true
    }
});

const EventMessage = mongoose.model('EventMessage', eventMessageSchema);

module.exports = EventMessage;