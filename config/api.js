"use strict";
require("dotenv").config();
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
        name: business.name,
        url: business.url,
        rating: business.rating,
        address: business.location.display_address,
        phone: business.display_phone,
      };
      return obj;
    });
  })
  .catch((e) => {
    console.log(e);
  });
module.exports = restaurants;
