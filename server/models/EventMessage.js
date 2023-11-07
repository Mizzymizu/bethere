import { Schema, model } from 'mongoose';

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

const EventMessage = model('EventMessage', eventMessageSchema);

export default EventMessage;