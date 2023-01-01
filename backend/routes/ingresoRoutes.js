const express = require('express');
const api = express.Router();
const ingresoController = require('../controllers/ingresoController');

api.post('/ingreso', ingresoController.createIngreso);
api.get('/ingresos', ingresoController.getIngresos);
api.get('/ingreso/search/:id', ingresoController.getIngreso);
api.put('/ingreso/update/:id', ingresoController.updateIngreso);
api.delete('/ingreso/delete/:id', ingresoController.deleteIngreso);

module.exports = api;