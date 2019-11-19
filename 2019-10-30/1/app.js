const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataRoute = require('./route/dataRoute')

app.use(express.static('./public/'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/data',dataRoute)

app.listen(3000)
