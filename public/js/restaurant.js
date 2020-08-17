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
    let userId;
    $.get("/api/user_data", function(data) {
      // console.log(data.id);
      userId = data.id;
    }).then(() => {
      let newPost = {
        restaurantId: submitBtn.attr("data"),
        body: userInput.val().trim(),
        userId: userId,
      };
      console.log(newPost);
      $.post("/newReview", newPost, function() {
        window.location.href = "/restaurant/" + submitBtn.attr("data");
      });
    });
  });
});
