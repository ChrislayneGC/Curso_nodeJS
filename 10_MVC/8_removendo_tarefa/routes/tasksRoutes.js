const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask) //Criar tasks
router.post('/add', TaskController.createTaskSave) //Save tasks
router.post('/remove', TaskController.removeTask) //Remover tasks
router.get('/', TaskController.showTasks) //Mostrar tasks

module.exports = router