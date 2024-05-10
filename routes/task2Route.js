const express = require("express");
const controller = require("../controllers/controller");
const route = express.Router();

route.get("/", controller.task2);
route.post("/", controller.task2Post);

module.exports = route;
