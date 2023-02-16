const User = require('../models/User')

const bcrypt = require('bcryptjs') //CRYPT A SENHA - Segurança

module.exports = class UserController { //LOGIN
  static login(req, res) {
    res.render('auth/login')
  }

   //---------------------------------LOGIN------------------------------------
  static async loginPost(req, res) { //VALIDAÇÃO DE LOGIN NO SISTEMA
    const { email, password } = req.body

    // USUÁRIO EXISTE?
    const user = await User.findOne({ where: { email: email } })

    if (!user) { //Não encontrado
      res.render('auth/login', {
        message: 'Usuário não encontrado!',
      })

      return
    }

    // SENHA COMPATIVEL COM A SENHA CADASTRADA NO BANCO DE DADOS
    const passwordMatch = bcrypt.compareSync(password, user.password)

    if (!passwordMatch) { //Não é compativel
      res.render('auth/login', {
        message: 'Senha inválida!',
      })

      return
    }

    // AUTENTICAÇÃO DO USUÁRIO
    req.session.userid = user.id 

    req.flash('message', 'Login realizado com sucesso!')

    req.session.save(() => {
      res.redirect('/')
    })
  }


  //-------------------------------REGISTER---------------------------------------
  static register(req, res) { 
    res.render('auth/register')
  }

  static async registerPost(req, res) {
    const { name, email, password, confirmpassword } = req.body

    // VALIDAÇÃO DE SENHA 
    if (password != confirmpassword) {
      req.flash('message', 'As senhas não conferem, tente novamente!')
      res.render('auth/register')

      return
    }

    // VALIDAÇÃO DO EMAIL 
    const checkIfUserExists = await User.findOne({ where: { email: email } })

    if (checkIfUserExists) { //Se já existe
      req.flash('message', 'O e-mail já está em uso!')
      res.render('auth/register')

      return
    }

    //CRIAR UMA SENHA
    const salt = bcrypt.genSaltSync(10) //Complicando a senha para evitar hackers
    const hashedPassword = bcrypt.hashSync(password, salt)

    const user = { //Inserindo os dados no sistema
      name,
      email,
      password: hashedPassword,
    }

    User.create(user) //Criando dado no BANCO DE DADOS
      .then((user) => {
        
        // INICIALIZAR A SESSION (Já vai logar o usuário)
        req.session.userid = user.id

        // console.log('salvou dado')
        // console.log(req.session.userid)

        req.session.userid = user.id

        req.flash('message', 'Cadastro realizado com sucesso!')

        req.session.save(() => { //Salvando session
          res.redirect('/')
        })
      })
      .catch((err) => console.log(err))
  }

  //---------------------------------LOGOUT-------------------------------------
  static logout(req, res) { 
    
    req.session.destroy() //Removendo a session do sistema
    res.redirect('/login') //Redirecionando o usuário para pag Home
  }
}