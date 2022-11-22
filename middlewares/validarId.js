const { Product } = require("../models/farmacia")

const validarId = async (req, res, next) => {
    try {
        const item = await Product.findById(req.params.id)
        if (item !== null) {
            next()
        } else {
            res.status(500).json({msg: "El ID es inválido"})
        }
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = { validarId }