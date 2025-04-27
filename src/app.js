const express = require('express');
const bodyParser = require('body-parser');
const incidentRoutes = require("./routes/incident.routes.js");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/incidents', incidentRoutes);

// Health Check
app.get('/', (req, res) => {
    res.send('Welcome to HumanChain AI Safety Incident Log API');
});

module.exports = app;
