const Tought = require('../models/Tought')
const User = require('../models/User')

const { Op } = require('sequelize')

module.exports = class ToughController {
  
   //---------------------------------DASHBOARD------------------------------
  static async dashboard(req, res) { //async = esta utilizando o banco de dados (reposta)
    const userId = req.session.userid //Pegar o IDusuário pela session

    const user = await User.findOne({
      where: { //Filtrando
        id: userId,
      },
      include: Tought, //todos os model que esta relacionado com esse usuário eu posso dar um include.
      plain: true, //Tras o usuário e os pensamentos
    })

    const toughts = user.Toughts.map((result) => result.dataValues) //tras só as tasks.

    let emptyToughts = false //

    if (toughts.length === 0) { //verificação os pensamentos estao vazias ou não
      emptyToughts = true
    }

    console.log(toughts) //Imprimendo pensamentos
    console.log(emptyToughts)

    res.render('toughts/dashboard', { toughts, emptyToughts })
  }

   //-----------------------------------CREATE----------------------------------
  static async createTought(req, res) { //banco de dados
    res.render('toughts/create')
  }

  static async createToughtSave(req, res) { //async = banco de dados
    const tought = {
      title: req.body.title,
      UserId: req.session.userid,
    }

    Tought.create(tought) //esperando o pensamento ser efetuado
      .then(() => {
        req.flash('message', 'Pensamento criado com sucesso!')
        req.session.save(() => { //salvando
          res.redirect('/toughts/dashboard') //redirecionando 
        })
      })
      .catch((err) => console.log())
  }

   //----------------------------------SHOW-------------------------------------
  static async showToughts(req, res) {//banco de dados
    console.log(req.query)

    // VERIDICAR SE O USUÁRIO ESTA PESQUISANDO
    let search = '' 

    if (req.query.search) {
      search = req.query.search
    }

    // RESULTADO DO PEDIDO (RECENTES PRIMEIRO)
    let order = 'DESC'

    if (req.query.order === 'old') {
      order = 'ASC' //MAIS ANTIGO
    } else {
      order = 'DESC' //MAIS NOVOS
    }

    Tought.findAll({
      include: User,
      where: {
        title: { [Op.like]: `%${search}%` }, //Filtrar o title para Op like, como: %= coringa (paravras que contenha o valor dentro deles)
      },
      order: [['createdAt', order]], //Sequelize cria automático
    })
      .then((data) => {
        let toughtsQty = data.length //Contando quandos resultados da busca

        if (toughtsQty === 0) {
          toughtsQty = false
        }

        const toughts = data.map((result) => result.get({ plain: true }))

        res.render('toughts/home', { toughts, toughtsQty, search })
      })
      .catch((err) => console.log(err))
  }

   //----------------------------------REMOVE----------------------------------
  static async removeTought(req, res) { //banco de dados

    const id = req.body.id //Pegando ID da tarefa pela req do body
    const UserId = req.session.userid //Pegando o ID do usuário pela session

    Tought.destroy({ where: { id: id, UserId: UserId } }) //Filtrando
      .then(() => {
        req.flash('message', 'Pensamento removido com sucesso!')
        req.session.save(() => { //Save
          res.redirect('/toughts/dashboard') //Redirecionar
        })
      })
      .catch((err) => console.log())
  }

  //-----------------------------------UPDATE----------------------------------
  static async updateTought(req, res) { //banco de dados
    const id = req.params.id //Esta vindo pela URL

    Tought.findOne({ where: { id: id }, raw: true })
      .then((tought) => {
        res.render('toughts/edit', { tought })
      })
      .catch((err) => console.log())
  }

  static async updateToughtPost(req, res) { //banco de dados
    const id = req.body.id

    const tought = {
      title: req.body.title,
      description: req.body.description,
    }

    Tought.update(tought, { where: { id: id } }) //Tought é informado para se atualizado
      .then(() => {
        req.flash('message', 'Pensamento atualizado com sucesso!')
        req.session.save(() => {
          res.redirect('/toughts/dashboard')
        })
      })
      .catch((err) => console.log())
  }
}