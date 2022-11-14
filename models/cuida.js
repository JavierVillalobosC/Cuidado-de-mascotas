const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cuidaSchema = new Schema({
    cuidador:{
        type:Schema.ObjectId,
        required: true 
        },
        mascota:{
        type:Schema.ObjectId,
        ref: mascota,
        required: true 
        },
        hora_de_ingreso: {
            type: Date,
            default: Date.now()
        },
        hora_de_retiro: {
            type: Date,
            default: Date.now()
        }

})

module.exports = mongoose.model('cuida', cuidaSchema);