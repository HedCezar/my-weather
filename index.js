const weatherForm = document.getElementById("weatherForm");

weatherForm.addEventListener("submit", (event) =>
{
    event.preventDefault();
    const city = event.target[0].value;
    searchWeather(city);
})

async function searchWeather(city)
{
    const appKey = 'cc15b86641ceefed4f4b037128019183';
    const lang = 'pt-br';
    const units = 'metric';
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&lang=${lang}&units=${units}`)
    const weatherData = await weatherResponse.json();
    showWeather(weatherData);
}

function showWeather(weather)
{
    console.log(weather)
    const temperature = 0;
    const description = '';
    const city = '';
    const iconCode = '';
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}.png`;
}