//ROTAS DE AUTENTICAÇÃO

const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

//LOGIN
router.get('/login', AuthController.login)
router.post('/login', AuthController.loginPost)

//REGISTER
router.get('/register', AuthController.register)
router.post('/register', AuthController.registerPost)

//LOGOUT
router.get('/logout', AuthController.logout)

module.exports = router
