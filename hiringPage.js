let getHiringButton = document.getElementsByClassName("HireMe")[0];
let getHiringSector = document.getElementsByClassName("HiringSector")[0];

getHiringButton.addEventListener("click", function(){
    getHiringSector.style.display = "flex";
})