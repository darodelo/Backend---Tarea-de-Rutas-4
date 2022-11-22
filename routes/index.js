const express = require("express")
const router = express.Router()
const { crearProducto, verProducto, vistaUnicaProducto, editarProducto, eliminarProducto, users, division, suma, esPar, lista, metodoPost } = require("../controllers/indexController")
const { validarId } = require("../middlewares/validarId")
const { check } = require("express-validator")


// GET

router.get('/farmacia/ver', verProducto) 

router.get('/farmacia/ver/:id', validarId, vistaUnicaProducto)

router.get('/users/nombre/:nombre/apellido/:apellido', users) 

router.get('/maths/dividir/:dividendo/:divisor', division) 

router.get('/maths/sumar/:num1/:num2', suma)

router.get('/maths/espar', esPar)

router.get('/list', lista)


// POST

router.post('/farmacia', [
    check("producto").not().isEmpty().withMessage("El campo producto es requerido"),
    check("laboratorio").not().isEmpty().withMessage("El campo laboratorio es requerido"),
    check("precio").not().isEmpty().withMessage("El campo precio es requerido"),
    check("stock").not().isEmpty().withMessage("El campo stock es requerido"),
] , crearProducto)

router.post('/post', metodoPost)


// PUT

router.put('/farmacia/editar/:id', validarId, [
    check("producto").not().isEmpty().withMessage("El campo producto es requerido"),
    check("laboratorio").not().isEmpty().withMessage("El campo laboratorio es requerido"),
    check("precio").not().isEmpty().withMessage("El campo precio es requerido"),
    check("stock").not().isEmpty().withMessage("El campo stock es requerido"),
], editarProducto)


// DELETE

router.delete('/farmacia/eliminar/:id', validarId, eliminarProducto)


module.exports = router