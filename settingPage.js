let getSettingButton = document.getElementsByClassName("Settings_")[0];
let getGoButton = document.getElementsByClassName("Go_button")[0];
let getTechDetails = document.getElementsByClassName("hiddenDetails")[0];
let getProjDetails = document.getElementsByClassName("hiddenDetails_Proj")[0];

let getSettings = document.getElementsByClassName("SettingSector")[0];

getGoButton.addEventListener("click", function(){
    let getSettingvalue = document.getElementById("AddingTabs").value;
    if(getSettingvalue == "Technologies" && getProjDetails.style.display == "block"){
        getProjDetails.style.display = "none";
        getTechDetails.style.display = "block";
    }
    else if (getSettingvalue == "Technologies"){
        getTechDetails.style.display = "block";
    }
    else if(getSettingvalue == "Projects" && getTechDetails.style.display == "block"){
        getTechDetails.style.display = "none";
        getProjDetails.style.display = "block";
    }
    else if(getSettingvalue == "Projects"){
        getProjDetails.style.display = "block";
    }
})


