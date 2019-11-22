const express = require('express')
const router = express.Router()
const reservesController = require('../controller/reservesController')

router.get('/',reservesController.getAll) 
router.post('/',reservesController.add) 
router.put('/:sid/:bid/',reservesController.replace) 
router.patch('/:sid/:bid/',reservesController.update)
router.delete('/:sid/:bid/',reservesController.remove) 

module.exports = router