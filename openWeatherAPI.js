import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Business Logic

function getWeather(city) {
  let request = new XMLHttpRequest();
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`;

  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response, city);
    } else {
      printError(this, response, city);
    }
  });

  request.open("GET", url, true);
  request.send();
}

// UI Logic

function printElements(apiResponse, city) {
  document.querySelector('#showResponse').innerText = `The humidity in ${city} is ${apiResponse.main.humidity}%.
  The weather is ${apiResponse.weather[0].main}.
  The temperature in Kelvins is ${apiResponse.main.temp} degrees.  \n The wind speed is ${apiResponse.wind.speed} mph, due ${windDirection(apiResponse.wind.deg)} \n
  The temperature is ${tempKelvinToFarenheit(apiResponse.main.temp)} F.`;
}

//"https://api.radar.io/v1/geocode/reverse?coordinates=40.7343%2C-73.9911"
/* this is important I think for figuring out where the location is based on it's latlon coordinates
*/




function windDirection(deg) {
  if (315 < deg || deg <= 45) {
    return "north";
  } else if (45 < deg && deg <= 135) {
    return "east";
  } else if (135 < deg && deg <= 225) {
    return "south";
  } else if (225 < deg && deg <= 315){
    return "west";
  } else {
    "there is no wind";
  }
}

function tempKelvinToFarenheit(fish){
  let farenheit = parseFloat(1.8*(fish-273) + 32).toFixed(2);
  return farenheit;
}





function printError(request, apiResponse, city) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const city = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  getWeather(city);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});