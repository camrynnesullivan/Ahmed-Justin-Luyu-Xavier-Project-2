var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // GET route for getting all of the posts
  app.get("/api/post:id", function(req, res) {
    db.Post.findAll({
      where: { id: req.body.id },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
  // POST route for saving a new post
  app.post("/newReview", function(req, res) {
    db.Post.create({
      body: req.body.body,
      UserId: req.body.userId,
      restaurantId: req.body.restaurantId,
    }).then(function(dbPost) {
      console.log("something");
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/review/update", function(req, res) {
    db.Post.update(
      {
        title: req.body.title,
        body: req.body.body,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    ).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting posts
  app.delete("/delete/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
