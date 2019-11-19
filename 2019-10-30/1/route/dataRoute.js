const express = require('express')
const router = express.Router()
const dataController = require('../controller/dataController')

router.get('/:id',dataController.get) 
router.post('/',dataController.add) 
router.put('/:id',dataController.update) 
router.delete('/:id',dataController.remove) 
 
module.exports = router