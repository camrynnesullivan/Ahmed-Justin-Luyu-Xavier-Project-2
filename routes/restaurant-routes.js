var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // // GET route for retriveing a specific restaurant
  app.get("/restaurant/:id", function(req, res) {
    db.Restaurant.findOne({
      where: {
        yelpId: req.params.id,
      },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new restaurant
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
  });

  // PUT route for updating restaurant
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
  });

  // DELETE route for deleting restaurant
  app.delete("/delete/:id", function(req, res) {
    db.Restaurant.destroy({
      where: {
        yelpId: req.params.id,
      },
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
