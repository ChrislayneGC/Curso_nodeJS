const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask) //Puxar a view
router.post('/add', TaskController.createTaskSave) //Save = Salvar dados
router.get('/', TaskController.showTasks) //Mostrar dados

module.exports = router