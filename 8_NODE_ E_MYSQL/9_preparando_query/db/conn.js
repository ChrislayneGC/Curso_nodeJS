//PROCESSO DE CONEXÃO
//Recurso de Cash nas minhas Querys, para poder entregar mais rapido para o usuário e também gerenciando as conexões e limites para ele ir matando os que não serão mais utilizadas ou que não estão respondendo.

const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit: 10, //Manter no máximo 10 conexões, a partir disso ele vai comecar a matar as conexoes inativas ou sem respostas.
  host: 'localhost',
  user: 'root',
  password: 'fuvest01',
  database: 'nodemysql',
})

module.exports = pool