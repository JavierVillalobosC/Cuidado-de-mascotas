const Vecino = require('../models/vecino');

const createVecino = (req, res) => {
    const { rut, name, lastname, address, email, phone,} = req.body
    const newVecino = new Vecino({
        rut,
        name,
        lastname,
        address,
        email,
        phone
    })
    newVecino.save((error, vecino) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear el Vecino" })
        }
        return res.status(201).send(vecino)
    })
}

const getVecinos = (req, res) => {
    Vecino.find({}).populate({ path: 'category status' }).exec((error, vecino) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo realizar la busqueda" })
        }
        if (vecino.length === 0) {
            return res.status(404).send({ message: "No se encontraron Vecinos" })
        }
        return res.status(200).send(vecino)
    })
}

const updateVecino = (req, res) => {
    const { id } = req.params
    Vecino.findByIdAndUpdate(id, req.body, (error, vecino) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo actualizar el Vecino" })
        }
        if (!vecino) {
            return res.status(404).send({ message: "No se encontro el Vecino" })
        }
        return res.status(200).send({ message: "Vecino modificado" })
    })
}

const deleteVecino = (req, res) => {
    const { id } = req.params
    Vecino.findByIdAndDelete(id, (error, vecino) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido eliminar el Vecino" })
        }
        if (!vecino) {
            return res.status(404).send({ message: "No se ha podido encontrar un Vecino" })
        }
        return res.status(200).send({ message: "Se ha eliminado el Vecino de forma correcta" })
    })
}

const getVecino = (req, res) => {
    const { id } = req.params
    Vecino.findById(id, (error, vecino) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido modificar el Vecino" })
        }
        if (!vecino) {
            return res.status(404).send({ message: "No se ha podido encontrar un Vecino" })
        }
        return res.status(200).send(vecino)
    })
}

module.exports = {
    createVecino,
    getVecinos,
    updateVecino,
    deleteVecino,
    getVecino
}