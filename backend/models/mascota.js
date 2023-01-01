const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mascotaSchema = new Schema({
    type: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    raza: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    age: {
        type: Number,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    features: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 500
    },
    vecino:{
        type: Schema.Types.ObjectId,
        ref: 'vecino'
    }

})

module.exports = mongoose.model('mascota', mascotaSchema);