const db = require('./connection');
const { User, Event } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await cleanDB('User', 'users');
    await cleanDB('Event', 'events')

    const events = await Event.insertMany([
        {
            createdBy: await User._id,
            name: 'Absolute Rager',
            description: 'The raddest party ever! 80s theme party! BE THERE!',
            date: '12/12/23',
            time: '7pm',
            location: 'Airplane Bunker #1'
        },
        {
            createdBy: await User._id,
            name: 'Bootcamp Reunion',
            description: `Man, it's been such a ride! Can't wait to meet everyone in person and bounce ideas and motivation with each other over unlimited FOOD! Special guest visit from Chaselikethebank and jwhitney2209!`,
            date: 'TBD',
            location: 'Texas de Brazil at The Riverwalk'
        },
        {
            createdBy: await User._id,
            name: 'Booklyn Group Meetup',
            description: `FINALLY going to meet up with the rest of the Booklyn Squad! Been planning this one for way too long, man. #NOSLEEPTILLBOOKLYN`,
            date: 'Post Bootcamp',
            location: 'Pan & Coffee'
        }
    ]);

    console.log('events seeded')

    await User.create([
        {
            firstName: 'Snow',
            lastName: 'HeyOh',
            email: 'snowh@testmail.com',
            password: 'pass123123',
            events: [events[0]._id, events[1]._id, events[2]._id]
        }
    ])

    console.log('users seeded')

    process.exit()
});

