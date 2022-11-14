const express = require('express');
const api = express.Router();
const cuidadorController = require('../controllers/cuidadorController');

api.post('/cuidador/:id', cuidadorController.createCuidador);
api.get('/cuidadores', cuidadorController.getCuidadors);
api.get('/cuidador/search/:id', cuidadorController.getCuidador);
api.put('/cuidador/update/:id', cuidadorController.updateCuidador);
api.delete('/cuidador/delete/:id', cuidadorController.deleteCuidador);

module.exports = api;