let getAbout = document.getElementsByClassName("AboutMe")[0];
let getHome = document.getElementsByClassName("HomeBtn")[0];
let getTech = document.getElementsByClassName("Technology")[0];
let getProjects = document.getElementsByClassName("ProjectsBTN")[0];
let getGod_one = document.getElementsByClassName("godContainer")[0];
let getGod_two = document.getElementsByClassName("godContainer_2")[0];
let getGod_three = document.getElementsByClassName("godContainer_3")[0];
let getGod_four = document.getElementsByClassName("godContainer_4")[0];

getAbout.addEventListener("click", function () {
    getGod_one.style.display = "none";
    getGod_two.style.display = "block";
    getGod_three.style.display = "none";
    getGod_four.style.display = "none";    
})
getHome.addEventListener("click", function () {
    getGod_one.style.display = "block";
    getGod_two.style.display = "none";
    getGod_three.style.display = "none";
    getGod_four.style.display = "none";
})
getTech.addEventListener("click", function () {
    getGod_one.style.display = "none";
    getGod_two.style.display = "none";
    getGod_three.style.display = "block";
    getGod_four.style.display = "none";
})
getProjects.addEventListener("click", function(){
    getGod_one.style.display = "none";
    getGod_two.style.display = "none";
    getGod_three.style.display = "none";
    getGod_four.style.display = "block";
})