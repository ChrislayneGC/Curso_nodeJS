//CHECKAUTH PARA VER SE O USUÁRIO ESTIVER LOGADO

module.exports.checkAuth = function (req, res, next) {
    const userId = req.session.userid
  
    if (!userId) {
      res.redirect('/login')
    }
  
    next()
  }