// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the main page
    if (req.user) {
      res.redirect("/main");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the main page
    if (req.user) {
      res.redirect("/main");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/restaurant", (req, res) => {
    if (req.user) {
      console.log("it works");
    }
    res.sendFile(path.join(__dirname, "../public/restaurant.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/main", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });
};
