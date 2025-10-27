let getLoginClick = document.getElementsByClassName("Login_button")[0];
let getLoginButton = document.getElementsByClassName("LogIn")[0];
let getLoginButton_cont = document.getElementsByClassName("buttonContainer")[0];
let getLogInOverlay_ = document.getElementsByClassName("LogInSector")[0];
let getSettingsHere = document.getElementsByClassName("SettingSector")[0];
let getCancelHere = document.getElementsByClassName("crossSetting")[0];
let getLoginBox = document.getElementsByClassName("LogInBox")[0];

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

            let getNotificationButton = document.getElementsByClassName("Notifications")[0];
            let getSettingButtonHere = document.getElementsByClassName("Settings_")[0];
            getSettingButtonHere.addEventListener("click", function () {
                getSettingsHere.style.display = "flex";
            })
            let getNotificationSector = document.createElement('div');
            getNotificationSector.classList.add('NotificationsSector');
            let getNotificationsBox = document.createElement('div');
            getNotificationsBox.classList.add('NotificationsBox');

            let getCrossIcon_cont = document.createElement('div');
            getCrossIcon_cont.classList.add = "crossIcon";
            let getCrossIconNoti = document.createElement('img');
            getCrossIconNoti.src = "images/icons/cross.png"
            getCrossIconNoti.classList.add("cross");
            getCrossIcon_cont.append(getCrossIconNoti);
            getNotificationsBox.append(getCrossIcon_cont);
            getNotificationSector.append(getNotificationsBox);
            document.body.prepend(getNotificationSector);
            const notiData = await fetch("http://localhost:3000/Notifications-Hiring", { method: "GET" });
            const notiData_usable = await notiData.json();
            let createNotiBox_cont = document.createElement('div');
            createNotiBox_cont.classList.add("NewNoti_container");
            notiData_usable.forEach(noti => {
                let createNotiBox = document.createElement('div');
                createNotiBox.classList.add("NewNoti");
                createNotiBox_cont.prepend(createNotiBox);
                getNotificationsBox.append(createNotiBox_cont);
                createNotiBox.innerHTML = `Role: ${noti.role} <br> From: ${noti.name}<br>Email: ${noti.email}<br>Contact: ${noti.number}<br>Organization: ${noti.organization}`
            });
            getNotificationButton.addEventListener("click", function () {
                getNotificationSector.style.display = "flex";
                getCrossIconNoti.addEventListener("click", function () {
                    getNotificationSector.style.display = "none";
                })


                document.body.style.overflowY = "hidden";
            })

        }
        else {
            let FailedLogin = document.createElement('span');
            FailedLogin.innerHTML = "Login Failed"
            FailedLogin.classList.add("FailedLogin");
            getLoginBox.append(FailedLogin);

        }
        getCancelHere.addEventListener("click", function () {
            getSettingsHere.style.display = "none";
        })
    }
})