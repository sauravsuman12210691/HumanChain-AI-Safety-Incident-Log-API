const mongoose = require('mongoose');

async function connectDB() {
    try {
        const dbURI = process.env.MONGODB_URI;
        if (!dbURI) {
            throw new Error('MONGODB_URI is not defined in environment variables.');
        }

        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Successfully connected to MongoDB.');
    } catch (err) {
        console.error('Failed to connect to MongoDB.');
        console.error('Error details:', err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
