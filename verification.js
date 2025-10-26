let getLoginClick = document.getElementsByClassName("Login_button")[0];
let getLoginButton = document.getElementsByClassName("LogIn")[0];
let getLoginButton_cont = document.getElementsByClassName("buttonContainer")[0];
let getLogInOverlay_ = document.getElementsByClassName("LogInSector")[0];
let getSettingsHere = document.getElementsByClassName("SettingSector")[0];
let getCancelHere = document.getElementsByClassName("crossSetting")[0];


getLoginClick.addEventListener("click", async function () {
    let getLoginTEXT = document.getElementById("SecretText").value;
    let getLoginPasskey = document.getElementById("LoginPass").value;

    if (getLoginTEXT && getLoginPasskey) {
        const response = await fetch("http://localhost:3000/verify-login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                username: getLoginTEXT,
                password: getLoginPasskey
            })
        })
        const result = await response.json();
        if (result.success) {
            getLoginButton.remove();
            let Setting_BTN = document.createElement('span');
            Setting_BTN.innerHTML = "Settings";
            Setting_BTN.classList.add('Settings_');
            let Setting_BTN_container = document.createElement('div');
            Setting_BTN_container.style.display = "flex";
            Setting_BTN_container.style.alignItems = "center";
            Setting_BTN_container.append(Setting_BTN);
            getLoginButton_cont.append(Setting_BTN_container);

            let Setting_icon = document.createElement('img');
            Setting_icon.src = "./images/icons/settings.png";
            Setting_icon.classList.add('Sett');
            Setting_BTN_container.append(Setting_icon)

            
            getLogInOverlay_.style.display = "none";
            document.body.style.overflowY = "visible";

            let notificationsBtn = document.createElement('img');
            notificationsBtn.src = "./images/icons/offer.png";
            notificationsBtn.classList.add('Notifications');
            getLoginButton_cont.append(notificationsBtn);

            let getSettingButtonHere = document.getElementsByClassName("Settings_")[0];
            getSettingButtonHere.addEventListener("click", function () {
                getSettingsHere.style.display = "flex";
            })
            
        }
        else {
            console.log("Failed to login")
        }
        getCancelHere.addEventListener("click", function () {
            getSettingsHere.style.display = "none";
        })
    }
})