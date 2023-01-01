const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cuidadorSchema = new Schema({
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
    }

})

module.exports = mongoose.model('cuidador', cuidadorSchema);