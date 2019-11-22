const express = require('express')
const router = express.Router()
const sailorsController = require('../controller/sailorsController')

router.get('/',sailorsController.getAll) 
router.post('/',sailorsController.add) 
router.put('/:id',sailorsController.replace) 
router.patch('/:id',sailorsController.update)
router.delete('/:id',sailorsController.remove) 

module.exports = router