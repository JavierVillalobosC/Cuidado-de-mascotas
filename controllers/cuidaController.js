const Cuida = require('../models/cuida');

const createCuida = (req, res) => {
    const { cuidador, mascota, hora_de_ingreso, hora_de_retiro} = req.body
    const newCuida = new Cuida({
        cuidador,
        mascota,
        hora_de_ingreso,
        hora_de_retiro
    })
    newCuida.save((error, cuida) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear el cuidado" })
        }
        return res.status(201).send(cuida)
    })
}
const getCuidados = (req, res) => {
    Cuida.find({}).populate({ path: 'category status' }).exec((error, cuidados) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo realizar la busqueda" })
        }
        if (cuidados.length === 0) {
            return res.status(404).send({ message: "No se encontraron cuidados" })
        }
        return res.status(200).send(cuidados)
    })
}
const updateCuidado = (req, res) => {
    const { id } = req.params
    Cuida.findByIdAndUpdate(id, req.body, (error, cuidado) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo actualizar el Cuidado" })
        }
        if (!cuidado) {
            return res.status(404).send({ message: "No se encontro el Cuidado" })
        }
        return res.status(200).send({ message: "Cuidado modificado" })
    })
}

const deleteCuidado = (req, res) => {
    const { id } = req.params
    Cuida.findByIdAndDelete(id, (error, cuidado) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido eliminar el Cuidado" })
        }
        if (!cuidado) {
            return res.status(404).send({ message: "No se ha podido encontrar un Cuidado" })
        }
        return res.status(200).send({ message: "Se ha eliminado el Cuidado de forma correcta" })
    })
}

const getCuidado = (req, res) => {
    const { id } = req.params
    Cuida.findById(id, (error, cuidado) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido modificar el Cuidado" })
        }
        if (!cuidado) {
            return res.status(404).send({ message: "No se ha podido encontrar un Cuidado" })
        }
        return res.status(200).send(cuidado)
    })
}

module.exports = {
    createCuida,
    getCuidados,
    updateCuidado,
    deleteCuidado,
    getCuidado
}