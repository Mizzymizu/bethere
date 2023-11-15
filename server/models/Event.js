const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        // required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String
    },
    location: {
        type: String,
        required: true
    },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;