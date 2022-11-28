const Retiro = require('../models/retiro');

const createRetiro = (req, res) => {
    const { cuidador, mascota, vecino, hora_de_retiro} = req.body
    const newRetiro = new Retiro({
        cuidador,
        mascota,
        vecino,
        hora_de_retiro
    })
    newRetiro.save((error, retiro) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear el retiro" })
        }
        return res.status(201).send(retiro)
    })
}
const getRetiro = (req, res) => {
    const { id } = req.params
    Retiro.findById(id, (error, retiro) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido modificar el retiro" })
        }
        if (!retiro) {
            return res.status(404).send({ message: "No se ha podido encontrar un retiro" })
        }
        return res.status(200).send(retiro)
    })
}
const getRetiros = (req, res) => {
    Retiro.find({}).populate({ path: 'category status' }).exec((error, retiros) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo realizar la busqueda de retiros" })
        }
        if (retiros.length === 0) {
            return res.status(404).send({ message: "No se encontraron retiros" })
        }
        return res.status(200).send(retiros)
    })
}
const updateRetiro = (req, res) => {
    const { id } = req.params
    Retiro.findByIdAndUpdate(id, req.body, (error, retiro) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo actualizar el retiro" })
        }
        if (!retiro) {
            return res.status(404).send({ message: "No se encontro el retiro" })
        }
        return res.status(200).send({ message: "Retiro modificado" })
    })
}

const deleteRetiro = (req, res) => {
    const { id } = req.params
    Retiro.findByIdAndDelete(id,(error, retiro) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido eliminar el retiro" })
        }
        if (!retiro) {
            return res.status(404).send({ message: "No se ha podido encontrar un retiro" })
        }
        return res.status(200).send({ message: "Se ha eliminado el retiro de forma correcta" })
    })
}



module.exports = {
    createRetiro,
    getRetiro,
    getRetiros,
    updateRetiro,
    deleteRetiro
}