const express = require('express')
const router = express.Router()

const checkEven = (req,res) => parseFloat(req.params.num) % 2 === 0 ?  res.status(200).send(req.params.num + ' is even') :  res.status(400).send(req.params.num + ' is not even')
 
router.get('/:num',checkEven)  

module.exports = router