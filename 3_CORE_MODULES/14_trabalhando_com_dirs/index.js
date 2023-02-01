const fs = require('fs')

if (!fs.existsSync('./minhapasta')) { //Verificar se um diretório existe ou não
    console.log('Não existe!') //Se não tem irá criar uma pasta
    
    fs.mkdirSync('minhapasta') //Criando a Pasta

} else if (fs.existsSync('minhapasta')) { //Verificando novamente
    console.log('Existe!')
}
