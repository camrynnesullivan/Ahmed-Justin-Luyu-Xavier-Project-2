// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.get("/post", function(req, res) {
    console.log("get post:");
    res.json({ message: "get post" });
  });

  app.post("/post", function(req, res) {
    console.log("posting a post:");
    res.json({ message: "posting a post" });
  });

  app.put("/post/:id", function(req, res) {
    console.log("put post:" + req.params.id);
    res.json({ message: `put post ${req.params.id}` });
  });

  app.delete("/post/:id", function(req, res) {
    console.log("delete posts:" + req.params.id);
    res.json({ message: `delete posts ${req.params.id}` });
  });
};
