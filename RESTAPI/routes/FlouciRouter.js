const express =require ("express");
const { Add } = require("./FlouciCont");
const Router =express.Router();
Router.post("/payment", Add)
Router.post("/payment/:id", Add)
module.exports = Router;