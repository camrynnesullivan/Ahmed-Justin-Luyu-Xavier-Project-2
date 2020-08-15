$(document).ready(() => {
    // check if there is a user or not
    // if no user login and signup buttons display=block, logout btn display=none
    // if there is a user login and signup buttons display=none and logout btn display=block
    // when user tap on a specific box, it will bring the user to the specific retuarant page
    $.get("/api/user_data").then(data => {
        if (!data.email || !data.password) {
            return $("a#logoutlink").style.display = "none";
        }
    });
    $("#logoutBtn").on("click", () => {
        $.get("/logout");
    })
});