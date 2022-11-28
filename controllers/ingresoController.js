const Ingreso = require('../models/ingreso');

const createIngreso = (req, res) => {
    const { cuidador, mascota, vecino, hora_de_ingreso} = req.body
    const newIngreso = new Ingreso({
        cuidador,
        mascota,
        vecino,
        hora_de_ingreso
    })
    newIngreso.save((error, ingreso) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear el ingreso" })
        }
        if (!vecino){
            return res.status(400).send({ message: "No existe el vecino" })
        }
        return res.status(201).send(ingreso)
    })
}
const getIngreso = (req, res) => {
    const { id } = req.params
    Ingreso.findById(id, (error, ingreso) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido modificar el ingreso" })
        }
        if (!ingreso) {
            return res.status(404).send({ message: "No se ha podido encontrar un ingreso" })
        }
        return res.status(200).send(ingreso)
    })
}
const getIngresos = (req, res) => {
    Ingreso.find({}).populate({ path: 'category status' }).exec((error, ingresos) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo realizar la busqueda" })
        }
        if (ingresos.length === 0) {
            return res.status(404).send({ message: "No se encontraron ingresos" })
        }
        return res.status(200).send(ingresos)
    })
}
const updateIngreso = (req, res) => {
    const { id } = req.params
    Ingreso.findByIdAndUpdate(id, req.body, (error, ingreso) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo actualizar el ingreso" })
        }
        if (!ingreso) {
            return res.status(404).send({ message: "No se encontro el ingreso" })
        }
        return res.status(200).send({ message: "Ingreso modificado" })
    })
}

const deleteIngreso = (req, res) => {
    const { id } = req.params
    Ingreso.findByIdAndDelete(id, (error, ingreso) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido eliminar el ingreso" })
        }
        if (!ingreso) {
            return res.status(404).send({ message: "No se ha podido encontrar un ingreso" })
        }
        return res.status(200).send({ message: "Se ha eliminado el ingreso de forma correcta" })
    })
}



module.exports = {
    createIngreso,
    getIngreso,
    getIngresos,
    updateIngreso,
    deleteIngreso
}