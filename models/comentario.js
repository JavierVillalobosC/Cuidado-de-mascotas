const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const comentarioSchema = new Schema({
    comments:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('comentario', comentarioSchema);