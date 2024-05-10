const express = require("express");
const controller = require("../controllers/controller");
const route = express.Router();

route.get("/", controller.task1);

module.exports = route;
