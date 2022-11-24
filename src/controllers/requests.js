const RequestsModel = require("../models/requests")

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const requests = await RequestsModel.find(obj)

    res.send(requests)

}

async function post(req, res) {
    const {
        codeClient,
        codeProduct,
        dateCreated,
        statusRequest
    } = req.body

    const request = new RequestsModel({
        codeClient,
        codeProduct,
        dateCreated,
        statusRequest
    })

    request.save()

    res.send()

}

async function put(req, res) {
    const { id } = req.params

    const request = await RequestsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({
        message: "success",
        request
    })
}

async function remove(req, res) {
    const { id } = req.params

    const remove = await RequestsModel.deleteOne({ _id: id })
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