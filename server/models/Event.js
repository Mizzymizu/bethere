const mongoose = require('mongoose');
const EventMessages = require('./EventMessage');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true,
        trim: true
    },
    eventDescription: {
        type: String
    },
    eventDate: {
        type: Date,
        required: true
    },
    eventTime: {
        type: String
    },
    eventLocation: {
        type: String,
        required: true
    },
    eventAttendance: {
        type: Boolean,
        required: true
    },
    eventMessages: [EventMessage.schema]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;