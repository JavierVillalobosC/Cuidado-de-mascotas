const express = require('express');
const api = express.Router();
const vecinoController = require('../controllers/vecinoController');

api.post('/vecino/:id', vecinoController.createVecino);
api.get('/vecinos', vecinoController.getVecinos);
api.get('/vecino/search/:id', vecinoController.getVecino);
api.put('/vecino/update/:id', vecinoController.updateVecino);
api.delete('/vecino/delete/:id', vecinoController.deleteVecino);

module.exports = api;