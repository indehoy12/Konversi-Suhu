let isReverse = false;

// variable c-to-f
var celciusInput = document.getElementById("celcius-input");
var fahrenheitResult = document.getElementById("fahrenheit-result");
var fahrenheitCalculate = document.getElementById("fahrenheit-calculate");

// variable f-to-c
var fahrenheitInput = document.getElementById("fahrenheit-input");
var celciusResult = document.getElementById("celcius-result");
var celciusCalculate = document.getElementById("celcius-calculate");

function convert() {
  if (isReverse) {
    if (fahrenheitInput.value === "") {
      alert("input fahrenheit can't be empty");
    } else {
      let result = Number(fahrenheitInput.value - 32) / 1.8;
      celciusResult.innerHTML = result;
      celciusCalculate.innerHTML = `(${fahrenheitInput.value}&deg;F - 32) / 1.8 = ${result}&deg;C`
    }
  } else {
    if (celciusInput.value === "") {
      alert("input celcius can't be empty");
    } else {
      let result = Number(celciusInput.value * 1.8) + 32;
      fahrenheitResult.innerHTML = result; 
      fahrenheitCalculate.innerHTML =`(${celciusInput.value}&deg;C x 1.8) + 32 = ${result}&deg;F`
    }
  }
}

function reset() {
  celciusInput.innerHTML = "";
  fahrenheitResult.innerHTML = "";
  fahrenheitCalculate.innerHTML = "";
  fahrenheitInput.innerHTML = "";
  celciusResult.innerHTML = "";
  celciusCalculate.innerHTML = "";
}

function reverse() {
  reset();
  var cToF = document.getElementById("c-to-f");
  var fToC = document.getElementById("f-to-c");
  isReverse = !isReverse;

  if (isReverse) {
    fToC.style.display = "block";
    cToF.style.display = "none";
  } else {
    cToF.style.display = "block";
    fToC.style.display = "none";
  }
}