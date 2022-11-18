const { Product } = require("../models/farmacia")

const validarId = async (req, res, next) => {
    const item = await Product.findById(req.params.id)
    if (item !== null) {
        next()
    } else {
        res.status(500).json({msg: "El ID es inválido"})
    }
}

module.exports = { validarId }