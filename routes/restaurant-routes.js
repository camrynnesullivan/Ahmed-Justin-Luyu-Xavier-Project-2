<<<<<<< HEAD
// Requiring our models and passport as we've configured it
=======
>>>>>>> 1f9bb95a17360a46817e33a231a6075144605a64
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
<<<<<<< HEAD
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
=======
  // Find all the restaurants and return them to the user with res.json
  app.get("/restaurant", function(req, res) {
    db.Post.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
    // console.log("get restaurants:");
    // res.json({ message: "get restaurants" });
  });
  // Create one restaurant with the re.params.id and return them to the user with res.json
  app.post("/restaurant", function(req, res) {
    console.log("post restaurants:");
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
    // res.json({ message: "post restaurants" });
  });
  app.put("/restaurant/:id", function(req, res) {
    // console.log("put restaurants:" + req.params.id);
    // res.json({ message: `put restaurants ${req.params.id}` });
  });
  app.delete("/restaurant/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
    // console.log("delete restaurants:" + req.params.id);
    // res.json({ message: `delete restaurants ${req.params.id}` });
>>>>>>> 1f9bb95a17360a46817e33a231a6075144605a64
  });
};
