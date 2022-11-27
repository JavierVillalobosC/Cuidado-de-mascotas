const express = require('express');
const api = express.Router();
const comentarioController = require('../controllers/comentarioController');

api.post('/comentario', comentarioController.createComentario);
api.get('/comentarios', comentarioController.getComentarios);
api.get('/comentario/search/:id', comentarioController.getComentario);
api.delete('/comentario/delete/:id', comentarioController.deleteComentario);

module.exports = api;