const express = require('express')
const router = express.Router()
const boatController = require('../controller/boatsController')

router.get('/',boatController.getAll)
router.get('/id/:id',boatController.getByID)
router.get('/name/:name',boatController.getByName)
router.get('/color/:color',boatController.getByColor)
router.get('/name/:name/color/:color',boatController.getByParams)
router.get('/color/:color/name/:name',boatController.getByParams)
router.post('/',boatController.add) 
router.put('/:id',boatController.replace) 
router.patch('/:id',boatController.update)
router.delete('/:id',boatController.remove) 

module.exports = router