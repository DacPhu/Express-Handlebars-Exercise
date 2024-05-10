let controller = {};
const { emotions, categories, products, zodiacs } = require("../models/data");

controller.task1 = (req, res) => {
  res.locals.emotions = emotions;
  res.render("task1", { title: "Inspiring Quotes" });
};

controller.task2 = (req, res) => {
  let salary = isNaN(req.query.salary) ? 0 : parseFloat(req.query.salary);
  let p55 = (salary * 55) / 100;
  let p10 = (salary * 10) / 100;
  let p5 = (salary * 5) / 100;
  res.render("task2", { title: "Jars Saving", p55, p10, p5 });
};

controller.task2Post = (req, res) => {
  let salary = isNaN(req.body.salary) ? 0 : parseFloat(req.body.salary);
  let p55 = (salary * 55) / 100;
  let p10 = (salary * 10) / 100;
  let p5 = (salary * 5) / 100;
  res.render("task2", { title: "Jars Saving", p55, p10, p5 });
};

controller.task3 = (req, res) => {
  let category = req.query.category;

  res.locals.categories = categories;
  res.locals.products = products;
  if (category) {
    res.locals.products = products.filter((item) => item.category == category);
  }
  res.render("task3", { title: "TV Sales" });
};

controller.task4List = (req, res) => {
  res.locals.zodiacs = zodiacs;
  res.render("task4", { title: "Zodiac Characteristics" });
};

controller.task4Details = (req, res) => {
  let name = req.params.name;
  let zodiac = zodiacs[0];
  let filters = zodiacs.filter((item) => item.name == name);
  if (filters.length) {
    zodiac = filters[0];
  }
  res.render("task4-details", { title: "Zodiac Characteristics", zodiac });
};

module.exports = controller;
