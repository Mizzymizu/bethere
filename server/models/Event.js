import { Schema, model } from 'mongoose';

// Event Name
// Event Description
// Event Date, time, location
// Event Attendance
// Event messages

const eventSchema = new Schema ({
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
    eventMessages: [EventMessages.schema]
});

const Event = model('Event', eventSchema);

export default Event;