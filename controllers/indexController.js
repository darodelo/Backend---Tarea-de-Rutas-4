
// RUTAS CREAR PRODUCTO (TAREA 3)

const { validationResult } = require("express-validator")
const { Product } = require("../models/farmacia")


const crearProducto = async (req, res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            const item = new Product(req.body)
            await item.save()
            res.status(201).json({item})
        } else {
            res.status(501).json({err})
        }
    } catch (error) {
        res.status(501).json({error})
    }
}

const verProducto = async (req, res) => {
    const items = await Product.find()
    res.status(200).json({items})
}

const vistaUnicaProducto = async (req, res) => {
    const item = await Product.findById(req.params.id)
    res.status(200).json({item})
}

// RUTAS DE USUARIO

const users = (req, res) => {
    res.status(200).json({
        msg: `Hola, ${req.params.nombre} ${req.params.apellido}`
    })
}

// RUTAS DE OPERACIONES MATEMÁTICAS

const division = (req, res) =>  {
    
    let dividendo = Number(req.params.dividendo)
    let divisor = Number(req.params.divisor)
    let resultado = dividendo / divisor

    if (divisor == 0) {
        res.status(200).json({
            error: "No se puede dividir por cero"
        })
    } else {
        res.status(200).json({
        resultado: `${resultado}`
        })
    }
}

const suma = (req, res) =>  {
    
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    let resultado = num1 + num2

    if (resultado < 0) {
        res.status(200).json({
            msg: "No se puede enviar el resultado"
        })
    } else {
        res.status(200).json({
        resultado: `${resultado}`
        })
    }
}

const esPar = (req, res) => {
    
    let num = Number(req.query.num)

    if(num % 2 != 0 || num == 0) {
        res.status(200).send("No autorizado")
    } else {
        res.status(200).send("Autorizado")
    }
}

// RUTAS DE LISTA

const lista = (req, res) =>  {
    
    res.status(200).json({
        producto1: req.query.producto1,
        producto2: req.query.producto2,
        producto3: req.query.producto3,
        producto4: req.query.producto4,
        producto5: req.query.producto5,
    })
}

// RUTAS MÉTODO HTTP POST

const metodoPost = (req, res) => {

    res.status(201).json({
        nombre: req.body.nombre,
        status: "success"
    })
}

module.exports = { crearProducto, verProducto, vistaUnicaProducto, users, division, suma, esPar, lista, metodoPost }