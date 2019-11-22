const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const boatsRoute = require('./route/boatsRoute')
const sailorsRoute = require('./route/sailorsRoute')
const reservesRoute = require('./route/reservesRoute')

app.use(express.static('./public/'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/boats',boatsRoute) 
app.use('/sailors',sailorsRoute) 
app.use('/reserves',reservesRoute) 

app.listen(3000,()=>{
    console.log('start server and connect database')
})