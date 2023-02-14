const Task = require('../models/Task')

module.exports = class TaskController {
    static createTask(req, res) { //Metodos estáticos.
        res.render('tasks/create') //Renderizar uma view
    }
}