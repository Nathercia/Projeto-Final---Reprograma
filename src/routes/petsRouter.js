const express = require('express')
const controller = require('../controllers/petsController')

const router = express.Router()

router.post('/pet', controller.createPet)
router.get('/pets', controller.findAllPets)
router.get('/pet/:id', controller.findById)
router.put('/pet/:id', controller.updatePet)
router.delete('/pet/:id', controller.deletePet)

module.exports = router



