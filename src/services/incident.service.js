const Incident = require('../models/incident.model');

async function getAllIncidents() {
    return await Incident.find();
}

async function createIncident(data) {
    const incident = new Incident(data);
    return await incident.save();
}

async function getIncidentById(id) {
    return await Incident.findById(id);
}

async function deleteIncident(id) {
    return await Incident.findByIdAndDelete(id);
}

module.exports = {
    getAllIncidents,
    createIncident,
    getIncidentById,
    deleteIncident
};
