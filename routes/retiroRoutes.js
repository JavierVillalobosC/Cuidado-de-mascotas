const express = require('express');
const api = express.Router();
const retiroController = require('../controllers/retiroController');

api.post('/retiro', retiroController.createRetiro);
api.get('/retiros', retiroController.getRetiros);
api.get('/retiro/search/:id', retiroController.getRetiros);
api.put('/retiro/update/:id', retiroController.updateRetiro);
api.delete('/retiro/delete/:id', retiroController.deleteRetiro);

module.exports = api;