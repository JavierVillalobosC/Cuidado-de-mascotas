const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mascotaSchema = new Schema({
    code:{
        type: String,
        required: true
    },
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
        type:Schema.ObjectI,
        ref: vecino,
        required: true
    }

})

module.exports = mongoose.model('mascota', mascotaSchema);