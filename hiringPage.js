let getHiringButton = document.getElementsByClassName("HireMe")[0];
let getHiringSector = document.getElementsByClassName("HiringSector")[0];
let getRemoveButton = document.getElementsByClassName("crossHir")[0];
let getHiringForm = document.getElementsByClassName("HiringForm")[0];


getHiringButton.addEventListener("click", function(){
    getHiringSector.style.display = "flex";
})
getRemoveButton.addEventListener("click", function(){
    getHiringSector.style.display = "none";
})
getHiringForm.addEventListener("submit", async(e)=>{
    e.preventDefault();

    const formdata = {
        role: e.target.role.value,
        name: e.target.name.value,
        email: e.target.email.value,
        number: e.target.number.value,
        organization: e.target.organization.value
    }
    const send = await fetch("http://localhost:5000/send-Hform-data", {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(formdata)
    })
    const response_Hire = await send.json();
    console.log(response_Hire)
    if(response_Hire.success){
        getHiringSector.style.display = "none";
        let successMessagebox = document.createElement('div');
        successMessagebox.classList.add("successMessage")
        let successMessage = document.createElement('span');
        successMessage.innerHTML = 'Sent Successfully! ThankYou!';
        successMessagebox.append(successMessage)
        document.body.prepend(successMessagebox);

        setTimeout(() => {
           successMessagebox.classList.add('move-back');
           setTimeout(() => {
            successMessagebox.remove();
           }, 1000);
        }, 3000);
    }
})