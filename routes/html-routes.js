// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const restaurant = require("../models/restaurant");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the main page
    if (req.user) {
      res.render("/main");
    }
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.render("signup", { background: "class='imgbackground'" });
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the main page
    if (req.user) {
      res.render("/main");
    }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("signup", { background: "class='imgbackground'" });
  });

  app.get("/logout", (req, res) => {
    // If the user already has an account send them to the main page
    req.logout();
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("login", { background: "class='imgbackground'" });
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the main page
    if (req.user) {
      res.render("/main");
    }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("login", { background: "class='imgbackground'" });
  });

  app.get("/restuarant", (req, res) => {
    if(req.user){
      res.render("restaurant")
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/main", isAuthenticated, (req, res) => {
    // res.sendFile(path.join(__dirname, "../public/main.html"));
    const yelp = require("yelp-fusion");
    const client = yelp.client(process.env.API_KEY);
    let restaurants;
    client
      .search({
        term: "vegan",
        location: "new york, ny",
      })
      .then((response) => {
        restaurants = response.jsonBody.businesses.map((business) => {
          const obj = {
            key: business.id,
            name: business.name,
            url: business.url,
            rating: business.rating,
            address: business.location.display_address,
            phone: business.display_phone,
            image: business.image_url,
          };
          return obj;
        });
        var hbsObject = {
          restaurant: restaurants,
        };
        res.render("main", hbsObject);
        console.log(restaurants);
      })
      .catch((e) => {
        console.log(e);
      });
    // res.render("main", restaurant);
  });
};
