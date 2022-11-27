const mongoose = require('mongoose');
const cuidador = require('./cuidador');
const mascota = require('./mascota');
const Schema = mongoose.Schema;
const fecha = new Date

const RetiroSchema = new Schema({
    cuidador:{
    type: Schema.Types.ObjectId,
    ref: cuidador,
    },
    mascota:{
    type: Schema.Types.ObjectId,
    ref: mascota,
    },
    hora_de_retiro: {
    type: fecha.toLocaleDateString('es-ES')
    },

})

module.exports = mongoose.model('retiro', RetiroSchema);