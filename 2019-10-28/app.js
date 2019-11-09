const express = require('express')
const bodyParser = require('body-parser')
const mainRoute = require('./route/mainRoute') 

const app = express()

app.use(express.static('./public/'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',mainRoute)

app.listen(3000)