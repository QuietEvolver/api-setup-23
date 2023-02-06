// User Interface Logic
function checkNumber(number) {
  if (isNaN(number) || number < 0) {
    throw "Not a valid number!";
  } else {
    document.querySelector('#displayNumber').innerText = "This number is valid. You may continue.";
  }
}

window.addEventListener("load", function() {
  document.querySelector('#submittedNumber').addEventListener("submit", function(event) {
    event.preventDefault();

    const inputtedNumber = parseInt(document.querySelector('#number').value);
    document.querySelector('#number').value = null;

    try {
      checkNumber(inputtedNumber);
    } catch(error) {
      console.error(`Red alert! We have an error: ${error.message}`);
    } 
  });
});