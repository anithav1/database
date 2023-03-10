require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://anithav:anithav@cluster0.msc5chm.mongodb.net/Foodapp?retryWrites=true&w=majority'
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
var appRoutes = require("./routes/appRoutes")
var adminRoutes = require('./routes/adminRoute')

// process.env.PORT hoy to e else 3000
const PORT = process.env.PORT || 3000

// some useful library
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// data base connection
mongoose.Promise=global.Promise
mongoose.connect(url, { useNewUrlParser: true ,useUnifiedTopology: true})
const con = mongoose.connection
con.on('open', () => {
    console.log("database connected");
})



// for testing purposr
app.get('/', (req, res) => {
    res.send("Hello Anitha from Serverrrrrrrr")
})



// route configure
app.use('/', appRoutes)
app.use('/admin', adminRoutes)



// print console message
app.listen(PORT, () => {
    console.log(`Listeing onnn port ${PORT}`);
})

