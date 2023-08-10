const connectDB = require('../config/connection');
const { User, Thought } = require('../models');
connectDB();

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
    {
        username: 'user3',
        email: 'user3@example.com'
    },
    {
        username: 'user4',
        email: 'user4@example.com'
    },
    {
        username: 'user5',
        email: 'user5@example.com'
    },
    {
        username: 'user6',
        email: 'user6@example.com'
    },
    {
        username: 'user7',
        email: 'user7@example.com'
    },
    {
        username: 'deleteme',
        email: 'deleteme@example.com'
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
    {
        thoughtText: 'This is a sample thought from user3.',
        username: 'user3'
    },
    {
        thoughtText: 'This is another sample thought from user4.',
        username: 'user4'
    },
    {
        thoughtText: 'This is a sample thought from user5.',
        username: 'user5'
    },
    {
        thoughtText: 'This is another sample thought from user6.',
        username: 'user6'
    },
    {
        thoughtText: 'This is a sample thought from user7.',
        username: 'user7'
    },
    {
        thoughtText: 'This is another sample thought from deleteme.',
        username: 'deleteme'
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
