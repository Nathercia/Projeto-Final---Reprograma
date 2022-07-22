const express = require('express')
const controller = require('../controllers/abrigosController')

const router = express.Router()

router.post('/abrigo', controller.createAbrigo)
router.get('/abrigos/name', controller.findByName)
router.get('/abrigos', controller.findAllAbrigos)
router.get('/abrigo/:id', controller.findById)
router.put('/abrigo/:id', controller.updateAbrigo)
router.delete('/abrigo/:id', controller.deleteAbrigo)

module.exports = router