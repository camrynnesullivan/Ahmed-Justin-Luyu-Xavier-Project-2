$(document).ready(() => {
  // Button references
  const backBtn = $("#back-btn");
  const searchBtn = $("#search-btn");
  const saveBtn = $("#save-btn");
  const reviewBtn = $("#review-btn");
  const submitBtn = $("#submit-btn");

  // User references
  const userName = $("#user-name");
  const userInput = $("#user-input");
  const otherUser = $("#other-user-name");
  const otherInput = $("#other-user-input");

  // Restaurant references
  const restaurantTitle = $("#restaurant-title");
  const restautantDescription = $("#restaurant-description");

  // Button click functions

  // Back button 
  backBtn.on("click", function(){
    console.log("button works");
  })

  searchBtn.on("click", function(){
    console.log("button works");
  })

  saveBtn.on("click", function(){
    console.log("button works");
  })

  reviewBtn.on("click", function(){
    console.log("button works");
  })

  submitBtn.on("click", function(){
    console.log("button works");
  })
});
