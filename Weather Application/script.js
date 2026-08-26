const input = document.querySelector(".input-box")
const searchBtn = document.getElementById("searchBtn")
const weather = document.querySelector('.weather')
const tempreature = document.querySelector('.tempreature')
const description = document.querySelector('.description')
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind-speed")
const loc = document.querySelector(".location")
const we = document.querySelector(".weather-body")
const livecon = document.querySelector(".icon")
const livecon2 = document.querySelector(".icon2")
console.log(wind);

console.log(searchBtn);

async function checkWeather(city){
    const api_key = '60572d73f81835d41b4aa28cb770ad3f'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_Data = await fetch(`${url}`).then((res) => res.json()).then((res) => res)
    console.log(weather_Data);
    if(weather_Data.cod === '404'){
        loc.style.display = "flex"
        we.style.display = "none"
        livecon.style.display = "none"
   livecon2.style.display = "none"
        return
    }
 loc.style.display = "none"
   we.style.display = "flex"
   livecon.style.display = "flex"
   livecon2.style.display = "flex"
    tempreature.innerHTML = `${Math.round(weather_Data.main.temp - 273)}°C`
    description.innerHTML = `${weather_Data.weather[0].description}`
    humidity.innerText = `${weather_Data.main.humidity}%`
    wind.innerText = `${weather_Data.wind.speed} km/h`

    switch(weather_Data.weather[0].main){
    case 'Clouds' : 
    weather.src = "/assets/cloud.png"
    break;
    case 'Clear' : 
    weather.src = "/assets/clear.png"
    break;
    case 'Rain' : 
    weather.src = "./assets/rain.png"
    break;
    case 'Mist' : 
    weather.src = "/assets/mist.png"
    break
    case 'Snow' : 
    weather.src = "/assets/snow.png"
    break
    }
}
searchBtn.addEventListener('click' , () => {
    checkWeather(input.value)
})
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}