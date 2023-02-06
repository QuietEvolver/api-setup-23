import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


// Business Logic

function getWeather(city) {
  let request = new XMLHttpRequest();
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

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
  The temperature in Kelvins is ${apiResponse.main.temp} degrees.`;
}
// printerr from getWeather()
function printError(request, city) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}:  ${request.status} ${request.statusText}`;
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

// function handleTriangleForm(event) {
//   event.preventDefault();
//   document.querySelector("#response").innerText = null;
//   const length1 = parseInt(document.querySelector("#length1").value);
//   const length2 = parseInt(document.querySelector("#length2").value);
//   const length3 = parseInt(document.querySelector("#length3").value);
//   const triangle = new Triangle(length1, length2, length3);
//   const response = triangle.checkType();
//   const pTag = document.createElement("p");
//   pTag.append(`Your result is: ${response}.`);
//   document.querySelector("#response").append(pTag);
// }

// function handleRectangleForm(event) {
//   event.preventDefault();
//   document.querySelector("#response2").innerText = null;
//   const length1 = parseInt(document.querySelector("#rect-length1").value);
//   const length2 = parseInt(document.querySelector("#rect-length2").value);
//   const rectangle = new Rectangle(length1, length2);
//   const response = rectangle.getArea();
//   const pTag = document.createElement("p");
//   pTag.append(`The area of the rectangle is ${response}.`);
//   document.querySelector("#response2").append(pTag);
// }

// window.addEventListener("load", function () {
//   document
//     .querySelector("#triangle-checker-form")
//     .addEventListener("submit", handleTriangleForm);
//   document
//     .querySelector("#rectangle-area-form")
//     .addEventListener("submit", handleRectangleForm);
// });
