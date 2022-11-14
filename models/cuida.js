const mongoose = require('mongoose');
const cuidador = require('./cuidador');
const mascota = require('./mascota');
const Schema = mongoose.Schema;
const cuidaSchema = new Schema({
    cuidador:{
    type: Schema.Types.ObjectId,
    ref: cuidador,
    },
    mascota:{
    type: Schema.Types.ObjectId,
    ref: mascota,
    },
    hora_de_ingreso: {
    type: String,
    minLenght: 1,
    maxLenght: 10
    },
    hora_de_retiro: {
    type: String,
    minLenght: 1,
    maxLenght: 10
    }

})

module.exports = mongoose.model('cuida', cuidaSchema);