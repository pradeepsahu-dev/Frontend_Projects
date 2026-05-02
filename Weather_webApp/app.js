const inputBox = document.querySelector("input");
const searchBtn = document.querySelector("button");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");
const location_not_found = document.querySelector(".location-not-found");

 async function checkweather(city){
    const api_key = "c1449d27138b4f2ecfc7359f35e58b70";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response =>
        response.json ());

        if(weather_data.cod === `404`){
            location_not_found.style.display = "flex"; 
            document.querySelector(".weather-body").style.display = "none";

            setTimeout(() =>{
                location_not_found.style.display ="none";
                document.querySelector(".weather-body").style.display = "flex";
                resetUI();
                inputBox.value = "";
            }, 2000);

            return; 

        }



        console.log(weather_data);

    temperature.innerText = `${Math.round(weather_data.main.temp -273.15)}°C`;    
    description.innerText = `${weather_data.weather[0].description}`;
    humidity.innerText = `${weather_data.main.humidity}%`;
    windSpeed.innerText = `${weather_data.wind.speed}Km/h`;

    switch(weather_data.weather[0].main){
        case `Clouds`:
            weather_img.src="assets/cloud.png";
            break;
        
         case `Clear`:
            weather_img.src="assets/clear.png";
            break;
           
         case `Rain`:
            weather_img.src="assets/rain.png";
            break;
        
         case `Mist`:
            weather_img.src="assets/mist.png";
            break;
            
         case `Snow`:
            weather_img.src="assets/snow.png";
            break;
            
          
    }


    function resetUI(){
        temperature.innerText = `--°C`;
        description.innerText =`---`;
        humidity.innerText = `--%`;
        windSpeed.innerText = `-- Km/h`;
        weather_img.src = "assets/weather.png" // default image
    }

}

searchBtn.addEventListener("click", ()=>{
    resetUI();
    checkweather(inputBox.value);
});

 function resetUI(){
        temperature.innerText = `--°C`;
        description.innerText =`---`;
        humidity.innerText = `--%`;
        windSpeed.innerText = `-- Km/h`;
        weather_img.src = "assets/weather.png" // default image
    }

