const express = require('express');
const api = express.Router();
const mascotaController = require('../controllers/mascotaController');
const { validateCreate } = require('../validators/validacion_mascota');

api.post('/mascota', mascotaController.createMascota);
api.get('/mascotas', mascotaController.getMascotas);
api.get('/mascota/search/:id', mascotaController.getMascota);
api.put('/mascota/update/:id', mascotaController.updateMascota);
api.delete('/mascota/delete/:id', mascotaController.deleteMascota);

module.exports = api;