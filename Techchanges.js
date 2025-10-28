let getSkillCard_container_here = document.getElementsByClassName("skillCards")[0];
async function fetchTechData(){
try{

    const TechData = await fetch("http://localhost:5000/Tech_Setting", { method: "GET" })
    const Tech_Data_json = await TechData.json();
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
    
        getSkillCard_container_here.appendChild(skillCard);
    });
}
catch(err){
    console.log("Something went wrong", err)
}
}   
window.addEventListener("load", fetchTechData); 
