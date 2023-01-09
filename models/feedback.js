var mongoose = require('mongoose')
var bcrypt = require('bcrypt');
var feedbackSchema = mongoose.Schema({
    whichuser: {
        type: String,
    },
    email: {
        type: String,
    },
    name: {
        type: String,

    },
    msg: {
        type: String,
    },
    createdAt: {type: Date, default: Date.now}
})
module.exports = mongoose.model('feedback',feedbackSchema)

