const mongoose = require('mongoose');
const cuidador = require('./cuidador');
const mascota = require('./mascota');
const Schema = mongoose.Schema;

const IngresoSchema = new Schema({
    cuidador:{
    type: Schema.Types.ObjectId,
    ref: cuidador,
    },
    mascota:{
    type: Schema.Types.ObjectId,
    ref: mascota,
    },
    hora_de_ingreso: {
    type: Date,
    default: Date.now
    },

})

module.exports = mongoose.model('ingreso', IngresoSchema);