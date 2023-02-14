//Foi criado uma rota de POST que vai salvar os dados do banco. Então a gente fez o segundo processo do formulário, que 1 é mostrar ele, e o 2 é para acessar os dados. Ele terceirizou para o controller, para seguir o padrão MVC então o dado veio da VIEW(Formulário) se comunicou com o CONTROLLER ativou a função save e lá na função SAVE formou um objeto ou seja processou os dados que vieram da requisição,  e aí passaremos para o MODEL.

//Então VIEW > Controller > MODEL e voltou para a VIEW de novo. Então está encadeado sempre no ciclo, não fugiu do padrão e isso é arquitetura MVC.

const Task = require('../models/Task')

module.exports = class TaskController {
  static createTask(req, res) {
    res.render('tasks/create')
  }

  static createTaskSave(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    }

    Task.create(task)
      .then(res.redirect('/tasks'))
      .catch((err) => console.log())
  }

  static showTasks(req, res) { //Renderizando uma view por meio de Redirect
    res.render('tasks/all')
  }
}