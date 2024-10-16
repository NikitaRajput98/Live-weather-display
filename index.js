const apiKey = "daac599b1097634ab2b02f724ebc3a25";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");



async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
        document.querySelector(".weather-icon").src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        document.querySelector(".weather-icon").src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        document.querySelector(".weather-icon").src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
        document.querySelector(".weather-icon").src = "images/snow.png";
    } else if (data.weather[0].main == "Mist") {
        document.querySelector(".weather-icon").src = "images/mist.png";
    } else if (data.weather[0].main == "Drizzle") {
        document.querySelector(".weather-icon").src = "images/drizzle.png";
    } else if (data.weather[0].main == "Haze") {
        document.querySelector(".weather-icon").src = "images/haze.png";
    }
    document.querySelector('.weather').style.display = "block";
}

searchbtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})