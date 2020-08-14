var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // // GET route for getting all of the p
  // app.get("/api/restaurant:id", function(req, res) {
  //   db.Post.findAll({
  //     where: { id: req.body.id },
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // // GET route for retriveing a specific restaurant
  app.get("/restaurant/:id", function(req, res) {
    db.Restaurant.findOne({
      where: {
        yelpId: req.params.id,
      },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
    // console.log("get post:");
    // res.json({ message: "get post" });
  });

  // POST route for saving a new post
  app.post("/newRestaurant", function(req, res) {
    db.Restaurant.create({
      yelpId: req.body.yelpId,
      name: req.body.name,
      url: req.body.url,
      rating: req.body.rating,
      address1: req.body.address1,
      address2: req.body.address2,
      phone: req.body.phone,
      image: req.body.image,
      reviewCount: req.body.reviewCount,
    }).then(function(dbPost) {
      console.log("something");
      res.json(dbPost);
    });
    // console.log("posting a post:");
    // res.json({ message: "posting a post" });
  });

  // PUT route for updating posts
  app.put("/restaurant/update", function(req, res) {
    db.Restaurant.update(
      {
        reviewCount: req.body.reviewCount,
      },
      {
        where: {
          yelpId: req.body.yelpId,
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
    db.Restaurant.destroy({
      where: {
        yelpId: req.params.id,
      },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
    // console.log("delete posts:" + req.params.id);
    // res.json({ message: `delete posts ${req.params.id}` });
  });
};
