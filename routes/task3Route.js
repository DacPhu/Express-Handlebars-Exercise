const express = require("express");
const controller = require("../controllers/controller");
const route = express.Router();

route.get("/", controller.task3);

module.exports = route;
