const express = require("express");
const controller = require("../controllers/controller");
const route = express.Router();

route.get("/", controller.task4List);
route.get("/:name", controller.task4Details);

module.exports = route;
