const Comentario = require('../models/comentario')

const createComentario = (req,res) => {
    const { vecino,comments, calification } = req.body
    const newComentario = new Comentario ({
        vecino,
        comments,
        calification
    })
    newComentario.save((error,vecino,comentario) =>{
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear el comentario" })
        }
        if (!vecino){
            return res.status(400).send({ message: "No existe el vecino" })
        }
        return res.status(201).send(comentario)
    })
}

const getComentarios = (req, res) => {
    Comentario.find({}).populate({ path: 'category status' }).exec((error, comentario) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo mostrar los comentarios" })
        }
        if (comentario.length === 0) {
            return res.status(404).send({ message: "No se encontraron comentarios" })
        }
        return res.status(200).send(comentario)
    })
}

const deleteComentario = (req, res) => {
    const { id } = req.params
    Comentario.findByIdAndDelete(id, (error, comentario) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido eliminar el Comentario" })
        }
        if (!comentario) {
            return res.status(404).send({ message: "No se ha podido encontrar un comentario" })
        }
        return res.status(200).send({ message: "Se ha eliminado el comentario de forma correcta" })
    })
}

const getComentario = (req, res) => {
    const { id } = req.params
    Comentario.findById(id, (error, comentario) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido modificar el comentario" })
        }
        if (!comentario) {
            return res.status(404).send({ message: "No se ha podido encontrar un comentario" })
        }
        return res.status(200).send(cuidador)
    })
}

module.exports = {
    createComentario,
    getComentarios,
    deleteComentario,
    getComentario
}