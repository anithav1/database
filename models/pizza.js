var mongoose = require('mongoose')
var bcrypt = require('bcrypt');
var pizzaSchema = mongoose.Schema({

    pizzaname: {
        type: String,

    },
    pizzasize: {
        type: String,

    },
    pizzaprice: {
        type: Number,

    },
    pizzaimage: {
        type: jpg,
    },
    createdAt: {type: Date, default: Date.now}
})
module.exports = mongoose.model('pizza',pizzaSchema)

