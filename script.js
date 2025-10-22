let getAbout = document.getElementsByClassName("AboutMe")[0];
let getHome = document.getElementsByClassName("HomeBtn")[0];
let getGod_one = document.getElementsByClassName("godContainer")[0];
let getGod_two = document.getElementsByClassName("godContainer_2")[0];

getAbout.addEventListener("click", function(){
    let displayHome = window.getComputedStyle(getGod_one).display;
    let displayAbout = window.getComputedStyle(getGod_two).display;
    if(displayHome === "block" && displayAbout == "none"){
        getGod_one.style.display = "none";
        getGod_two.style.display = "block"
    }
})
getHome.addEventListener("click", function(){
    let displayHome_1 = window.getComputedStyle(getGod_one).display;
    let displayAbout_1 = window.getComputedStyle(getGod_two).display;
    if(displayHome_1 === "none" && displayAbout_1 === "block"){
        getGod_one.style.display = "block";
        getGod_two.style.display = "none"
    }
})