<<<<<<< HEAD
// Requiring our models and passport as we've configured it
=======
>>>>>>> 1f9bb95a17360a46817e33a231a6075144605a64
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  // // GET route for getting all of the p
  // app.get("/api/restaurant:id", function(req, res) {
  //   db.Post.findAll({
  //     where: { id: req.body.id },
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

=======
>>>>>>> 38cc4d10a4ccc613435ca02e01145ba6732ad890
  // // GET route for retriveing a specific restaurant
  app.get("/restaurant/:id", function(req, res) {
    db.Restaurant.findOne({
      where: {
        yelpId: req.params.id,
      },
    }).then(function(dbPost) {
>>>>>>> b1b509d0822d1f349011bc3ec469149200b6d730
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
<<<<<<< HEAD
<<<<<<< HEAD
    // console.log("delete restaurants:" + req.params.id);
    // res.json({ message: `delete restaurants ${req.params.id}` });
>>>>>>> 1f9bb95a17360a46817e33a231a6075144605a64
=======
    // console.log("delete posts:" + req.params.id);
    // res.json({ message: `delete posts ${req.params.id}` });
>>>>>>> b1b509d0822d1f349011bc3ec469149200b6d730
=======
>>>>>>> 38cc4d10a4ccc613435ca02e01145ba6732ad890
  });
};
