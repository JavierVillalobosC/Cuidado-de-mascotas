const Cuidador = require('../models/cuidador');

const createCuidador = (req, res) => {
    const { rut, name, lastname, address, email, phone } = req.body
    const newCuidador = new Cuidador({
        rut,
        name,
        lastname,
        address,
        email,
        phone
    })
    newCuidador.save((error, cuidador) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear el cuidador" })
        }
        return res.status(201).send(cuidador)
    })
}

const getCuidadors = (req, res) => {
    Cuidador.find({}).populate({ path: 'category status' }).exec((error, cuidador) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo realizar la busqueda" })
        }
        if (cuidadors.length === 0) {
            return res.status(404).send({ message: "No se encontraron cuidadores" })
        }
        return res.status(200).send(cuidadors)
    })
}

const updateCuidador = (req, res) => {
    const { id } = req.params
    Cuidador.findByIdAndUpdate(id, req.body, (error, cuidador) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo actualizar el Cuidador" })
        }
        if (!cuidador) {
            return res.status(404).send({ message: "No se encontro el Cuidador" })
        }
        return res.status(200).send({ message: "Cuidador modificado" })
    })
}

const deleteCuidador = (req, res) => {
    const { id } = req.params
    Cuidador.findByIdAndDelete(id, (error, cuidador) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido eliminar el Cuidador" })
        }
        if (!cuidador) {
            return res.status(404).send({ message: "No se ha podido encontrar un Cuidador" })
        }
        return res.status(200).send({ message: "Se ha eliminado el Cuidador de forma correcta" })
    })
}

const getCuidador = (req, res) => {
    const { id } = req.params
    Cuidador.findById(id, (error, cuidador) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido modificar el Cuidador" })
        }
        if (!cuidador) {
            return res.status(404).send({ message: "No se ha podido encontrar un Cuidador" })
        }
        return res.status(200).send(cuidador)
    })
}

module.exports = {
    createCuidador,
    getCuidadors,
    updateCuidador,
    deleteCuidador,
    getCuidador
}