<<<<<<< HEAD
// Requiring our models and passport as we've configured it
=======
>>>>>>> 1f9bb95a17360a46817e33a231a6075144605a64
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
<<<<<<< HEAD
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
=======
  // GET route for getting all of the posts
  app.get("/api/post:id", function(req, res) {
    db.Post.findAll({
      where: { id: req.body.id },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // // GET route for retriveing a single post
  // app.get("/post", function(req, res) {
  //   db.Post.findOne({
  //     where: {
  //       id: req.params.id,
  //     },
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  //   // console.log("get post:");
  //   // res.json({ message: "get post" });
  // });

  // POST route for saving a new post
  app.post("/newReview", function(req, res) {
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      UserId: req.body.userId,
      RestaurantId: req.body.restaurantId,
    }).then(function(dbPost) {
      console.log("something");
      res.json(dbPost);
    });
    // console.log("posting a post:");
    // res.json({ message: "posting a post" });
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
    // console.log("put post:" + req.params.id);
    // res.json({ message: `put post ${req.params.id}` });
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
    // console.log("delete posts:" + req.params.id);
    // res.json({ message: `delete posts ${req.params.id}` });
>>>>>>> 1f9bb95a17360a46817e33a231a6075144605a64
  });
};
