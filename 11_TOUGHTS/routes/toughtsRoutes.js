// ROTAS DE PENSAMENTOS

const express = require("express");
const router = express.Router();
const ToughtController = require("../controllers/ToughtController");

//IMPORTANDO AUTENTICAÇÃO (import check auth middleware) HELPERS
const checkAuth = require("../helpers/auth").checkAuth; //Sempre que quero proteger uma rota coloco "checkAuth"

//DASHBOARD
router.get("/dashboard", checkAuth, ToughtController.dashboard);

//CREATE
router.get("/add", checkAuth, ToughtController.createTought);
router.post("/add", checkAuth, ToughtController.createToughtSave);

//MOSTRAR
router.get("/", ToughtController.showToughts);

//REMOVE
router.post("/remove", checkAuth, ToughtController.removeTought);

//UPDATE
router.get("/edit/:id", checkAuth, ToughtController.updateTought);
router.post("/edit", checkAuth, ToughtController.updateToughtPost);

module.exports = router; //EXPORTANDO ROUTERS
