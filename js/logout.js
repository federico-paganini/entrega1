const navlogout = document.getElementById("navlogout");

if (!localStorage.getItem("isLoggedIn")) {
    navlogout.style.display = "none";
} else {
    navlogout.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    
    const logoutbtn = document.getElementById("logout");

    logoutbtn.addEventListener("click", function () {

        if (localStorage.getItem("isLoggedIn")) {
            localStorage.removeItem('isLoggedIn');
            redirectToPageWithDelay('login.html', 3, 5);
        }
    })

});