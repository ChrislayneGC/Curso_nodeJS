//Consegui processar e executar as respostas com base em promises que é um recurso de JS / Conseguimos criar uma logica tanto para quem programa quanto para quem vai responder!

const inquirer = require('inquirer')

inquirer
  .prompt([ // responsavel por fazer as perguntas
    {
      name: 'p1',
      message: 'Qual a primeira nota?',
    },
    {
      name: 'p2',
      message: 'Qual a segunda nota?',
    },
  ])
  .then((answers) => {
    console.log(answers)
    const media = ((parseInt(answers.p1) + parseInt(answers.p2)) / 2)

    console.log(`A média é: ${media}`)
  })
  .catch((err) => console.log(err)) 
  //CATCH = Imprimir erro no codigo todo THEN = Se estiver tudo certo com o codigo vai pro then.
