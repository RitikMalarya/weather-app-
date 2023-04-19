const API_KEY = 'd75c6749358dc398a3ec8abda5df50d0';



const userTab = document.querySelector("[data-userWeather]")
const searchTab = document.querySelector("[data-searchWeather")

const userContainer= document.querySelector(".weather-container")
const grantAccess = document.querySelector(".grant-location-container")
const searchForm = document.querySelector("[data-searchForm]")
const loadingScreen = document.querySelector(".loading-container")
const userInfoContainer = document.querySelector(".user-info-container")

let currentTab = userTab;

currentTab.classList.add("current-tab");


function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");


        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active ");
            searchForm.classList.add("active");
        }


    }

}

userTab.addEventListener("click", () => {
    switchTab(userTab);
})


searchTab.addEventListener("click", () => {
    switchTab(searchTab);
})

