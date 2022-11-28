const Mascota = require('../models/mascota');

const createMascota = (req, res) => {
    const { type, name, raza, age, features, vecino } = req.body
    const newMascota = new Mascota({
        type,
        name,
        raza,
        age,
        features,
        vecino
    })
    newMascota.save((error, mascota) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear la Mascota" })
        }
        if (!vecino){
            return res.status(400).send({ message: "No existe el vecino" })
        }
        return res.status(201).send(mascota)
    })
}

const getMascotas = (req, res) => {
    Mascota.find({}).populate({ path: 'category status' }).exec((error, mascota) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo realizar la busqueda" })
        }
        if (mascota.length === 0) {
            return res.status(404).send({ message: "No se encontraron las Mascotas" })
        }
        return res.status(200).send(mascota)
    })
}

const updateMascota = (req, res) => {
    const { id } = req.params
    Mascota.findByIdAndUpdate(id, req.body, (error, mascota) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo actualizar la Mascota" })
        }
        if (!mascota) {
            return res.status(404).send({ message: "No se encontro la Mascota" })
        }
        return res.status(200).send({ message: "Mascota modificada" })
    })
}

const deleteMascota= (req, res) => {
    const { id } = req.params
    Mascota.findByIdAndDelete(id, (error, mascota) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido eliminar el Mascota" })
        }
        if (!mascota) {
            return res.status(404).send({ message: "No se ha podido encontrar un Mascota" })
        }
        return res.status(200).send({ message: "Se ha eliminado el Mascota de forma correcta" })
    })
}

const getMascota = (req, res) => {
    const { id } = req.params
    Mascota.findById(id, (error, mascota) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido modificar el Vecino" })
        }
        if (!mascota) {
            return res.status(404).send({ message: "No se ha podido encontrar un Vecino" })
        }
        return res.status(200).send(mascota)
    })
}

module.exports = {
    createMascota,
    getMascotas,
    updateMascota,
    deleteMascota,
    getMascota
}