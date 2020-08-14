$(document).ready(() => {
    // check if there is a user or not
    // if no user login and signup buttons display=block, logout btn display=none
    // if there is a user login and signup buttons display=none and logout btn display=block
    // when user tap on a specific box, it will bring the user to the specific retuarant page
    if (!userData.email || !userData.password) {
        return $("a#logoutlink").style.display = "none";
    }

});