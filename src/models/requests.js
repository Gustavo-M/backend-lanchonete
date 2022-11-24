const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    codeClient: [{
        type: mongoose.Schema.ObjectId,
        ref: 'clients'
    }],
    codeProduct: [{
        type: mongoose.Schema.ObjectId,
        ref: 'products'
    }],
    dateCreated: String,
    statusRequest: String
})

const Model = mongoose.model("requests", schema)

module.exports = Model