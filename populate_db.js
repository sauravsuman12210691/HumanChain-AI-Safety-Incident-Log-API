require('dotenv').config(); // Load

const connectDB = require('./src/config/database');
const Incident = require('./src/models/incident.model');

async function populateDB() {
    try {
        await connectDB();

        // Clear existing incidents (optional, if you want to reset every time)
        await Incident.deleteMany({});

        // Insert new sample incidents
        await Incident.insertMany([
            {
                title: 'AI Bias Detected',
                description: 'The AI showed hiring bias against female candidates.',
                severity: 'High',
                reported_at: new Date() // Adding timestamp
            },
            {
                title: 'Chatbot Misbehaving',
                description: 'Chatbot produced offensive responses during customer support.',
                severity: 'Medium',
                reported_at: new Date() // Adding timestamp
            },
            {
                title: 'Privacy Breach',
                description: 'AI recommendation engine leaked user data to wrong accounts.',
                severity: 'High',
                reported_at: new Date() // Adding timestamp
            }
        ]);

        console.log('Sample incidents populated.');
    } catch (error) {
        console.error('Error populating DB:', error);
    } finally {
        process.exit(0); // Exit with success code
    }
}

populateDB();
