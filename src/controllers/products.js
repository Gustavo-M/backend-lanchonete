const ProductsModel = require("../models/products")

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        price,
    } = req.body

    const product = new ProductsModel({
        name,
        price,
    })

    product.save()

    res.send({
        message: "success",
    })
}

async function put(req, res) {
    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({
        message: "Success",
        product
    })
}

async function remove(req, res) {
    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id: id })

    const message = remove.ok ? "success" : "error"

    res.send({
        message,
    })
}

module.exports = {
    get,
    post,
    put,
    remove
}