let getAbout = document.getElementsByClassName("AboutMe")[0];
let getHome = document.getElementsByClassName("HomeBtn")[0];
let getGod_one = document.getElementsByClassName("godContainer")[0];

getAbout.addEventListener("click", function(){
    let displayAbout = window.getComputedStyle(getGod_one).display;
    if(displayAbout === "block"){
        getGod_one.style.display = "none";
    }
})
getHome.addEventListener("click", function(){
    let displayHome = window.getComputedStyle(getGod_one).display;
    if(displayHome === "none"){
        getGod_one.style.display = "block";
    }
})