// User Interface Logic
function checkNumber(number) {
  if (isNaN(number) || number < 0) {
    throw "Not a valid number!";
  } else {
    return true;
  }
}

window.addEventListener("load", function() {
  document.querySelector('#submittedNumber').addEventListener("submit", function(event) {
    event.preventDefault();

    const inputtedNumber = parseInt(document.querySelector('#number').value);
    document.querySelector('#number').value = null;

    try {
      // checkNumber(inputtedNumber);
      const isNumberValid = checkNumber(inputtedNumber);
      if(isNumberValid instanceof Error){
        console.error(isNumberValid.message);
        throw RangeError("Not a valid Number");
      } else {
        console.log("Try = successful,  no catch needed:)");
        document.querySelector('#displayNumber').innerText = "This number is valid. Pls Continue.";
      }
    } catch(error) {
      console.error(`Red alert! We have an error: ${error.message}`);
    } 
  });
});