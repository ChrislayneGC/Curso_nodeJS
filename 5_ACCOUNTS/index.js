// Modulos EXTERNOS
const inquirer = require('inquirer')
const chalk = require('chalk')

// Modulos INTERNOS
const fs = require('fs')

operation() //Invocando a opcao de listas

//Operacao que o usuario vai iniciar o sistema e depois seguir para as outras
function operation() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'O que você deseja fazer?',
                choices: [ //Escolhas
                    'Criar conta',
                    'Consultar Saldo',
                    'Depositar',
                    'Sacar',
                    'Sair',
                ],
            },
        ])
        .then((answer) => { // Solucao das opcoes que o usuario escolher

            const action = answer['action'] //acao baseada na resposta do usuário

            if (action === 'Criar conta') {
                createAccount()
            } else if (action === 'Depositar') {
                deposit()
            } else if (action === 'Consultar Saldo') {
                getAccountBalance()
            } else if (action === 'Sacar') {
                withdraw()
            } else if (action === 'Sair') {
                console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
                process.exit() //Encerra a execucao do sistema
            }
        })
}

// CRIANDO UMA CONTA PARA O USUÁRIO ACCOUNT
function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))

    buildAccount()
}

function buildAccount() { //Criar conta
    inquirer
        .prompt([
            {
                name: 'accountName',
                message: 'Digite um nome para a sua conta:',
            },
        ])
        .then((answer) => {
            console.info(answer['accountName'])

            const accountName = answer['accountName'] //Imprimi o nome do usuário

            if (!fs.existsSync('accounts')) { //Verifica se existe esse diretório
                fs.mkdirSync('accounts') //Se não existir ele irá criar
            }

            if (fs.existsSync(`accounts/${accountName}.json`)) { //O nome da conta já existe?
                console.log(
                    chalk.bgRed.black('Esta conta já existe, escolha outro nome!'),
                )
                buildAccount(accountName) //Reiniciar a parte de criacão de conta
            }

            fs.writeFileSync(  //Criacao
                `accounts/${accountName}.json`,
                '{"balance":0}', //Determinando o conteudo
                function (err) {
                    console.log(err) //Evidenciar o erro
                },
            )

            console.log(chalk.green('Parabéns, sua conta foi criada!'))
            operation()
        })
}

//ADICIONAR UM VALOR À CONTA DO USUÁRIO
function deposit() {
    inquirer
        .prompt([ //Qual a conta que o usuário ira depositar?
            {
                name: 'accountName',
                message: 'Qual o nome da sua conta?',
            },
        ])
        .then((answer) => { //Resposta do usuário
            const accountName = answer['accountName'] //Procurando o usuário

            if (!checkAccount(accountName)) {
                return deposit()
            }

            inquirer
                .prompt([
                    {
                        name: 'amount',
                        message: 'Quanto você deseja depositar?',
                    },
                ])
                .then((answer) => {
                    const amount = answer['amount'] //Acessando o Array que vem de respostas

                    addAmount(accountName, amount) //Mostrando a adicão na conta
                    operation()
                })
        })
}

function checkAccount(accountName) { //Verificacao de existencia de conta
    if (!fs.existsSync(`accounts/${accountName}.json`)) { 
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'))
        return false
    }
    return true
}

function getAccount(accountName) { //Ler o arquivo
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r',
    })

    return JSON.parse(accountJSON) //Transformando o arquivo txt em Json 
}

function addAmount(accountName, amount) { //Pegar a conta em Json
    const accountData = getAccount(accountName)

    if (!amount) { //Validação no Amount
        console.log(
            chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'),
        )
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance) //Fazendo a soma de quantos tinha para oque foi depositado

    fs.writeFileSync( //Salvando os dados no banco
        `accounts/${accountName}.json`,
        JSON.stringify(accountData), //Transformar o Json em Txt
        function (err) {
            console.log(err)
        },
    )

    console.log( //Mostrando para o usuário o valor depositado
        chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`),
    )
}

// DEVOLVENDO SALDO DA CONTA
function getAccountBalance() { //Mostrar o saldo
    inquirer
        .prompt([
            {
                name: 'accountName',
                message: 'Qual o nome da sua conta?',
            },
        ])
        .then((answer) => { //Resposta do usuário
            const accountName = answer['accountName']

            if (!checkAccount(accountName)) { //Verificação 
                return getAccountBalance()
            }

            const accountData = getAccount(accountName) //Ja sabe que a conta existe

            console.log( //Exibindo a mensagem para o usuário
                chalk.bgBlue.black(
                    `Olá, o saldo da sua conta é de R$${accountData.balance}`,
                ),
            )
            operation()
        })
}

// SACAR O DINHEIRO DA CONTA
function withdraw() {
    inquirer //Biblioteca
        .prompt([//Função
            {
                name: 'accountName',
                message: 'Qual o nome da sua conta?',
            },
        ])
        .then((answer) => { //Resposta do usuário
            const accountName = answer['accountName']

            if (!checkAccount(accountName)) { //Vericação se a conta existe
                return withdraw()
            }

            inquirer
                .prompt([
                    {
                        name: 'amount',
                        message: 'Quanto você deseja sacar?',
                    },
                ])
                .then((answer) => {
                    const amount = answer['amount'] //Saque

                    removeAmount(accountName, amount)
                    operation()
                })
        })
}

// FINALIZAÇÃO DO SAQUE
function removeAmount(accountName, amount) {
    const accountData = getAccount(accountName)//Verificação se a conta existe

    if (!amount) { //Validar se a amount veio
        console.log(
            chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'),
        )
        return withdraw()
    }

    if (accountData.balance < amount) { //Verificar se quer tirar mais do que existe na conta 
        console.log(chalk.bgRed.black('Valor indisponível!'))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount) //Salvar na conta, o valor reduzido

    fs.writeFileSync(  //Salvando os dados no banco
        `accounts/${accountName}.json`,
        JSON.stringify(accountData), //Transformar o Json em Txt
        function (err) {
            console.log(err)
        },
    )

    console.log( //Mensagem para o usuário
        chalk.green(`Foi realizado um saque de R$${amount} da sua conta!`),
    )
}