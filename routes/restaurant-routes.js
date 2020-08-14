// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.get("/restaurant", function(req, res) {
    console.log("get restaurants:");
    res.json({ message: "get restaurants" });
  });

  app.post("/restaurant", function(req, res) {
    console.log("post restaurants:");
    res.json({ message: "post restaurants" });
  });

  app.put("/restaurant/:id", function(req, res) {
    console.log("put restaurants:" + req.params.id);
    res.json({ message: `put restaurants ${req.params.id}` });
  });

  app.delete("/restaurant/:id", function(req, res) {
    console.log("delete restaurants:" + req.params.id);
    res.json({ message: `delete restaurants ${req.params.id}` });
  });
};
