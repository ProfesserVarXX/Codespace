const nav = document.querySelector("#i");
const navContent = document.querySelector(".nav-content");
const tite = document.querySelector(".title");
const x = document.querySelector("#me");


function disappear() {
    navContent.style.display = "none";
    nav.style.display = "block";
    tite.style.display = "flex";
}

function run() {
    navContent.style.transition = "1s";
    navContent.style.display = "flex";
    nav.style.transform = "translate(0px)";
    nav.style.display = "none";
    tite.style.display = "none";
}

