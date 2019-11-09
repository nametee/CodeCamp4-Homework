const express = require('express')
const router = express.Router()

const plus = (req,res) => {
    let a = parseFloat(req.query.a) 
    let b = parseFloat(req.query.b)  
    res.send('sum of '+ String(a) +' + '+ String(b) +' = ' + String(a+b))
}

const plusParams = (req,res) => { 
    let a = parseFloat(req.params.a) 
    let b = parseFloat(req.params.b)  
    res.send('sum of '+ String(a) +' + '+ String(b) +' = ' + String(a+b))
}
router.get('/',plus) 
router.get('/:a/:b',plusParams)

module.exports = router