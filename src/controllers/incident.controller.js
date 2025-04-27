const incidentService = require('../services/incident.service');
const { successResponse, errorResponse } = require('../utils/apiResponse');

async function getAll(req, res) {
    try {
        const incidents = await incidentService.getAllIncidents();
        return successResponse(res, 'Incidents fetched successfully', incidents);
    } catch (error) {
        return errorResponse(res, 'Failed to fetch incidents', 500);
    }
}

async function create(req, res) {
    try {
        const { title, description, severity } = req.body;
        if (!title || !description || !severity) {
            return errorResponse(res, 'All fields are required', 400);
        }

        const incident = await incidentService.createIncident({ title, description, severity });
        return successResponse(res, 'Incident created successfully', incident, 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create incident', 500);
    }
}

async function getById(req, res) {
    try {
        const { id } = req.params;
        const incident = await incidentService.getIncidentById(id);

        if (!incident) {
            return errorResponse(res, 'Incident not found', 404);
        }

        return successResponse(res, 'Incident fetched successfully', incident);
    } catch (error) {
        return errorResponse(res, 'Invalid incident ID', 400);
    }
}

async function remove(req, res) {
    try {
        const { id } = req.params;
        const incident = await incidentService.deleteIncident(id);

        if (!incident) {
            return errorResponse(res, 'Incident not found', 404);
        }

        return successResponse(res, 'Incident deleted successfully', incident);
    } catch (error) {
        return errorResponse(res, 'Invalid incident ID', 400);
    }
}

module.exports = {
    getAll,
    create,
    getById,
    remove
};
