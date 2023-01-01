const mongoose = require('mongoose');
const cuidador = require('./cuidador');
const mascota = require('./mascota');
const vecino = require('./vecino');
const Schema = mongoose.Schema;

const RetiroSchema = new Schema({
    cuidador:{
    type: Schema.Types.ObjectId,
    ref: cuidador,
    },
    mascota:{
    type: Schema.Types.ObjectId,
    ref: mascota,
    },
    vecino:{
    type: Schema.Types.ObjectId,
    ref: vecino,
    },
    hora_de_retiro: {
    type: Date,
    default: Date.now()
    },

})

module.exports = mongoose.model('retiro', RetiroSchema);