var mongoose = require('mongoose')
var bcrypt = require('bcrypt');
var orderSchema = mongoose.Schema({
    whichuser: {
        type: String,
    },
    pizza: {
        type  :Array,
        default:[]
    },
    total:{
        type:Number,
    },
    createdAt: {type: Date, default: Date.now}
})
module.exports = mongoose.model('order',orderSchema)

