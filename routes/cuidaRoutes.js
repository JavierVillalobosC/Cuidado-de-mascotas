const express = require('express');
const api = express.Router();
const cuidaController = require('../controllers/cuidaController');

api.post('/cuida/:id', cuidaController.createCuida);
api.get('/cuidados', cuidaController.getCuidados);
api.get('/cuidado/search/:id', cuidaController.getCuidado);
api.put('/cuidado/update/:id', cuidaController.updateCuidado);
api.delete('/cuidado/delete/:id', cuidaController.deleteCuidado);

module.exports = api;