const express = require('express')
const router = express.Router()  
const countFieldsController = require('../controller/countFieldsController')
 
router.post('/',countFieldsController.countFields) 

module.exports = router