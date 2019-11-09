const express = require('express')
const router = express.Router()  
const plusRoute = require('./plusRoute')
const plusByJSONRoute = require('./plusByJSONRoute')
const checkEvenNumberRoute = require('./checkEvenNumberRoute')
const numbersRoute = require('./numbersRoute') 
const countFieldsRoute = require('./countFieldsRoute') 

const static = (req,res) => res.send('Hello World') 
const staticJSON = (req,res) => res.send(JSON.stringify({text:"Hello World"})) 
const echo = (req,res) => res.send(req.query.text)

router.get('/static',static)
router.get('/staticJSON',staticJSON)
router.get('/echo',echo)
router.use('/plus',plusRoute)
router.use('/plusByJSON',plusByJSONRoute)
router.use('/checkEvenNumber',checkEvenNumberRoute)
router.use('/number',numbersRoute)
router.use('/countFields',countFieldsRoute)

module.exports = router