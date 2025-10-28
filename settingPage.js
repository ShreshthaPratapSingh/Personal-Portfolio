
let getSettingButton = document.getElementsByClassName("Settings_")[0];
let getGoButton = document.getElementsByClassName("Go_button")[1];
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
    const sendTech_set = await fetch("http://localhost:3000/Setting-Tech-Data", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData)
    })
    getTechDetails.style.display = "none";

})
const TechData = await fetch("http://localhost:3000/Tech_Setting", { method: "GET" })
const Tech_Data_json = await TechData.json();
console.log(Tech_Data_json)
Tech_Data_json.forEach(element => {

    let skillCard = document.createElement("div");
    skillCard.className = "skillCard";

    let img = document.createElement("img");
    img.className = "skillIMG";
    img.src = `${element.url}`;
    img.alt = "";

    let cardText = document.createElement("div");
    cardText.style.color = `${element.color}`
    cardText.className = "TechCARD";
    cardText.textContent = `${element.name}`;

    let librariesDiv = document.createElement("div");
    librariesDiv.className = "Libraries";
    librariesDiv.innerHTML = `Libraries: ${element.library} <br> Category: ${element.type}`;

    cardText.appendChild(librariesDiv);
    skillCard.appendChild(img);
    skillCard.appendChild(cardText);

    getSkillCard_container.appendChild(skillCard);
});

