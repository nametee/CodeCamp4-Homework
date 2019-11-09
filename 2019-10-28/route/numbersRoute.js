const express = require('express')
const router = express.Router()  
const numberController = require('../controller/numbersController')
 
router.post('/',numberController.addNumber)
router.put('/',numberController.updateNumber)
router.delete('/',numberController.deleteNumber)

module.exports = router