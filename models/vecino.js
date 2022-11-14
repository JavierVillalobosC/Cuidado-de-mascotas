const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vecinoSchema = new Schema({
    rut:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    lastname: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    address: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 250
    },
    email: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    phone: {
        type: Number,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    mascota:{
        type:Schema.ObjectId,
        ref: mascota,
        required: true
    }

})

module.exports = mongoose.model('vecino', vecinoSchema);