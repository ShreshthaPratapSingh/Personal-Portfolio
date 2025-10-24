let getLoginClick = document.getElementsByClassName("Login_button")[0];
let getLoginButton = document.getElementsByClassName("LogIn")[0];
let getLoginButton_cont = document.getElementsByClassName("buttonContainer")[0];
let getLogInOverlay_ = document.getElementsByClassName("LogInSector")[0];

getLoginClick.addEventListener("click", function(){
    let getLoginTEXT = document.getElementById("SecretText").value;
    let getLoginPasskey = document.getElementById("LoginPass").value;

    if(getLoginTEXT !== "" && getLoginPasskey !== ""){
        if(getLoginTEXT === "abhiShreshtha@2323" && getLoginPasskey === "ab131177#"){
            getLoginButton.remove();
            let Setting_BTN = document.createElement('span');
            Setting_BTN.innerHTML = "Settings";
            Setting_BTN.classList.add('Settings_');
            getLoginButton_cont.append(Setting_BTN);

            let Setting_icon = document.createElement('img');
            Setting_icon.src = "./images/icons/settings.png";
            Setting_icon.classList.add('Sett')

            getLoginButton_cont.append(Setting_icon)
            getLogInOverlay_.style.display = "none";
            document.body.style.overflowY = "visible";
        }
    }
})