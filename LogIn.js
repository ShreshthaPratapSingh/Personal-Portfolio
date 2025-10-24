let getLogInBTN = document.getElementsByClassName("LogIn")[0];
let getLogInOverlay = document.getElementsByClassName("LogInSector")[0];
let getClose = document.getElementsByClassName("cross")[0];

getLogInBTN.addEventListener("click", function(){
    document.body.style.overflowY = "hidden";
    getLogInOverlay.style.display = "flex";
})
getClose.addEventListener("click", function(){
    document.body.style.overflowY = "visible";
    getLogInOverlay.style.display = "none";
})