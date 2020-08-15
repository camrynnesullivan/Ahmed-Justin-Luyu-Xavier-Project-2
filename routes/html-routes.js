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
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.render("signup",{background: "class='imgbackground'"})
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the main page
    if (req.user) {
      res.redirect("/main");
    }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("signup",{background: "class='imgbackground'"})
  });

  app.get("/logout", (req, res) => {
    // If the user already has an account send them to the main page
    req.logout()
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("login",{background: "class='imgbackground'"})
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the main page
    if (req.user) {
      res.redirect("/main");
    }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("login",{background: "class='imgbackground'"})
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/main", isAuthenticated, (req, res) => {
    // res.sendFile(path.join(__dirname, "../public/main.html"));
    res.render("main")
  });
};
