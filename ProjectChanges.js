let getProjectForm = document.getElementsByClassName("ProjForm")[0];
let getSettingsPanel = document.getElementsByClassName("hiddenDetails_Proj")[0];
let getProjectContainer = document.getElementsByClassName("projectsCard_container")[0];

async function fetchProjData() {
    const ProjData = await fetch("https://portfolio-backend-ta0x.onrender.com/Sending_Proj_data", { method: "POST" })
    const data = await ProjData.json();
    data.forEach(element => {
        const aTag = document.createElement("a");
        aTag.href = `${element.Link}`; 

        const projectCard = document.createElement("div");
        projectCard.className = "projectCard";
        
        const img = document.createElement("img");
        if(element.Type === "Project_form"){
            img.src = "https://cdn-icons-png.flaticon.com/128/3767/3767084.png";
        }
        else if(element.Type === "CPlatform"){
            img.src = "https://cdn-icons-png.flaticon.com/128/1049/1049443.png"
        }
        img.alt = "";
        img.className = "projectIMG";

        const projCard = document.createElement("div");
        projCard.className = "projCARD";
        projCard.textContent = `${element.ProjectName}`;

        const lib1 = document.createElement("div");
        lib1.className = "Libraries";
        lib1.textContent = `Tech Used: ${element.TechUsed}`;
 
        const lib2 = document.createElement("div");
        lib2.className = "Libraries";
        lib2.textContent = `Github Link: ${element.Github}`;

        projCard.appendChild(lib1);
        projCard.appendChild(lib2);

        projectCard.appendChild(img);
        projectCard.appendChild(projCard);

        aTag.appendChild(projectCard);
        getProjectContainer.appendChild(aTag);
    });
}
getProjectForm.addEventListener("submit", async function (e) {
    e.preventDefault()

    const formData = {
        ProjectName: e.target.Projname.value,
        TechUsed: e.target.ProjTech.value,
        Type: e.target.type.value,
        Link: e.target.links.value,
        Github: e.target.gitLink.value
    }

    const sendData_proj = await fetch("https://portfolio-backend-ta0x.onrender.com/Send_Proj_data", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData)
    });
    getSettingsPanel.style.display = "none";
})
window.addEventListener("load", fetchProjData)