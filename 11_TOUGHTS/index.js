const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const flash = require("express-flash");

const app = express();

const conn = require("./db/conn");

// MODELS
const Tought = require("./models/Tought");
const User = require("./models/User");

// ROUTES
const toughtsRoutes = require("./routes/toughtsRoutes");
const authRoutes = require("./routes/authRoutes");
const ToughController = require("./controllers/ToughtController");

//TEMPLATE ENGINE
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//RECEBER RESPOSTA DO BODY
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//SESSION MIDDLEWARE
app.use(
    session({
        name: "session",
        secret: "nosso_secret",
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function () { },
            path: require('path').join(require('os').tmpdir(), 'session'), //Configurar a Session para salvar arquivos de secão(Dados do usuário)
        }),
        cookie: { //Cookie para o PC do usuário
            secure: false,
            maxAge: 360000, //Tempo de duração (1 dia)
            expires: new Date(Date.now() + 360000), //Expiração 
            httpOnly: true
        }
    }),
)

//FLASH MESSAGES
app.use(flash());

//PUBLIC PATH
app.use(express.static("public"));

// set session to res (DEFINICÃO DA SESSION PARA RESPOSTA)
app.use((req, res, next) => {
    // console.log(req.session)
    console.log(req.session.userid);

    if (req.session.userid) { //Verificando se o usuario tem essa sessian
        res.locals.session = req.session; //garantir que id vai estar em todas as respostas do usuário
    }

    next();
});

//ROUTES
app.use("/toughts", toughtsRoutes);
app.use("/", authRoutes);

app.get("/", ToughController.showToughts); //Mostrar todos os pensamentos

conn
// .sync({ force: true }) CASO PRECISE RESETAR OS DADOS
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))