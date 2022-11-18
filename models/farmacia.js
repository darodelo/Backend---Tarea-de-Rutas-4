const mongoose = require("mongoose")

const Schema = mongoose.Schema
const productSchema = new Schema ({
    producto: {
        type: String,
        required: true
    },
    laboratorio: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    descuento: {
        type: Boolean
    }
})

const Product = mongoose.model('Product', productSchema)
module.exports = { Product }