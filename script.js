let getAbout = document.getElementsByClassName("AboutMe")[0];
let getHome = document.getElementsByClassName("HomeBtn")[0];
let getTech = document.getElementsByClassName("Technology")[0];
let getGod_one = document.getElementsByClassName("godContainer")[0];
let getGod_two = document.getElementsByClassName("godContainer_2")[0];
let getGod_three = document.getElementsByClassName("godContainer_3")[0];

getAbout.addEventListener("click", function(){
    let displayHome = window.getComputedStyle(getGod_one).display;
    let displayAbout = window.getComputedStyle(getGod_two).display;
    let displayTech = window.getComputedStyle(getGod_three).display;
    if((displayHome === "block" && displayAbout == "none" && displayTech == "none") || (displayHome === "none" && displayAbout === "none" && displayTech==="block")){
        getGod_one.style.display = "none";
        getGod_three.style.display = "none";
        getGod_two.style.display = "block";
    }
})
getHome.addEventListener("click", function(){
    let displayHome_1 = window.getComputedStyle(getGod_one).display;
    let displayAbout_1 = window.getComputedStyle(getGod_two).display;
    let displayTech_1 = window.getComputedStyle(getGod_three).display;
    if((displayHome_1 === "none" && displayAbout_1 === "block" && displayTech_1 === "none") || (displayHome_1 === "none" && displayAbout_1 === "none" && displayTech_1 === "block")){
        getGod_one.style.display = "block";
        getGod_two.style.display = "none";
        getGod_three.style.display = "none";
    }
})
getTech.addEventListener("click", function(){
    let displayHome_2 = window.getComputedStyle(getGod_one).display;
    let displayAbout_2 = window.getComputedStyle(getGod_two).display;
    let displayTech_2 = window.getComputedStyle(getGod_three).display;
    if((displayHome_2 === "none" && displayAbout_2 === "block" && displayTech_2 === "none") || (displayHome_2 === "block" && displayAbout_2 === "none" || displayTech_2 === "none")){
        getGod_one.style.display = "none";
        getGod_two.style.display = "none";
        getGod_three.style.display = "block";
    }
})