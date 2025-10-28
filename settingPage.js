
let getSettingButton = document.getElementsByClassName("Settings_")[0];
let getGoButton = document.getElementsByClassName("Go_button")[2];
let getSubmissionButton = document.getElementsByClassName("Go_button")[0];
let getTechDetails = document.getElementsByClassName("hiddenDetails")[0];
let getProjDetails = document.getElementsByClassName("hiddenDetails_Proj")[0];
let getTechForm = document.getElementsByClassName("TechForm")[0];

let getSettings = document.getElementsByClassName("SettingSector")[0];
let getSkillCard_container = document.getElementsByClassName("skillCards")[0];

getGoButton.addEventListener("click", async function () {
    let getSettingvalue = document.getElementById("AddingTabs").value;
    if (getSettingvalue == "Technologies" && getProjDetails.style.display == "block") {
        getProjDetails.style.display = "none";
        getTechDetails.style.display = "block";
    }
    else if (getSettingvalue == "Technologies") {
        getTechDetails.style.display = "block";
    }
    else if (getSettingvalue == "Projects" && getTechDetails.style.display == "block") {
        getTechDetails.style.display = "none";
        getProjDetails.style.display = "block";
    }
    else if (getSettingvalue == "Projects") {
        getProjDetails.style.display = "block";
    }


})
getTechForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        library: e.target.library.value,
        type: e.target.type.value,
        url: e.target.url.value,
        color: e.target.color.value
    }
    console.log(formData)
    const sendTech_set = await fetch("http://localhost:5000/Setting-Tech-Data", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData)
    })
    getTechDetails.style.display = "none";

})

