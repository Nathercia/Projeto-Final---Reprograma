const express = require('express')
const controller = require('../controllers/usuariosController')

const router = express.Router()

router.post('/usuario', controller.registerUsuario)
router.post('/usuario/login', controller.loginUsuario)
router.get('/usuarios', controller.findAllUsuarios)
router.get('/usuario/:id', controller.findUsuarioById)
router.put('/usuario/:id', controller.updateUsuario)
router.delete('/usuario/:id', controller.deleteUsuario)


module.exports = router