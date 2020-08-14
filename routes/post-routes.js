var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // GET route for getting all of the posts
  app.get("/api/post", function(req, res) {
    var query = {};
    if (req.query.author_id) {
      query.PostId = req.query.post_id;
    }
    db.Post.findAll({
      where: query,
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // GET route for retriveing a single post
  app.get("/post", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
    // console.log("get post:");
    // res.json({ message: "get post" });
  });

  // POST route for saving a new post
  app.post("/post", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
    // console.log("posting a post:");
    // res.json({ message: "posting a post" });
  });

  // PUT route for updating posts
  app.put("/post/:id", function(req, res) {
    db.Post.update({
      where: {
        id: id.params.id,
      },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
    // console.log("put post:" + req.params.id);
    // res.json({ message: `put post ${req.params.id}` });
  });

  // DELETE route for deleting posts
  app.delete("/post/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: id.params.id,
      },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
    // console.log("delete posts:" + req.params.id);
    // res.json({ message: `delete posts ${req.params.id}` });
  });
};
