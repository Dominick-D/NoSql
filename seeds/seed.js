const db = require('../config/connection');
const { User, Thought } = require('../models');


// Sample data for users
const userSeedData = [
    {
        username: 'user1',
        email: 'user1@example.com'
    },
    {
        username: 'user2',
        email: 'user2@example.com'
    },
];

// Sample data for thoughts
const thoughtSeedData = [
    {
        thoughtText: 'This is a sample thought from user1.',
        username: 'user1'
    },
    {
        thoughtText: 'This is another sample thought from user2.',
        username: 'user2'
    },
];

// Function to seed the database
const seedDatabase = async () => {
    try {
        await User.deleteMany({});
        await Thought.deleteMany({});

        await User.create(userSeedData);
        await Thought.create(thoughtSeedData);

        console.log('Database seeded!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDatabase();
