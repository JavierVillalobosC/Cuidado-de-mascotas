const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vecino = require('./vecino');
const comentarioSchema = new Schema({
    vecino:{
        type: Schema.Types.ObjectId,
        ref: vecino,
    },
    comments:{
        type: String,
        require: true
    },
    calification:{
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('comentario', comentarioSchema);