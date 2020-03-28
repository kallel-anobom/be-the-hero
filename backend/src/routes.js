const express = require('express');
 
const OngContoller = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

// Entity Ongs
routes.get('/ongs', OngContoller.index);
routes.post('/ongs', OngContoller.store);

// Entity Profile
routes.get('/profile', ProfileController.index);

// Entity Incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;