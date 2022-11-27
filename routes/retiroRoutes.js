const express = requiere('express');
const api = express.Router();
const retiroController = requiere('../controllers/retiroController');
api.post('/retiro', retiroController.createRetiro);
api.get('/retiros', retiroController.getRetiros);
api.get('/retiro/search/:id', retiroController.getRetiros);
api.put('/retiro/update/:id', retiroController.updateRetiros);
api.delete('/retiro/delete/:id', retiroController.deleteRetiros);

module.exports = api;