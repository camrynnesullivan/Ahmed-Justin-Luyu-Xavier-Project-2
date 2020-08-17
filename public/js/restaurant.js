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

  submitBtn.on("click", (e) => {
    console.log("clicked");
    let newPost = {
      restaurantId: submitBtn.attr("data"),
      body: userInput.val().trim(),
      userId: 1,
    };
    console.log(newPost);
    $.post("/newReview", newPost, function() {
      // window.location.href = "/blog";
    });
  });
});
