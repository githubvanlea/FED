console.log("hallo")

/* javascript voor het menu */

var deButton = document.querySelector("header nav button");
console.log(deButton);

deButton.addEventListener("click", toonMenu);

function toonMenu() {
    console.log("click")
    var deNav = document.querySelector("header nav");
    deNav.classList.toggle("open");
}

/* javascript voor hover */

