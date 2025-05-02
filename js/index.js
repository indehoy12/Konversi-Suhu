let isReverse = false;

const celciusInput = document.getElementById("celcius-input");
const fahrenheitResult = document.getElementById("fahrenheit-result");
const fahrenheitCalculate = document.getElementById("fahrenheit-calculate");

const fahrenheitInput = document.getElementById("fahrenheit-input");
const celciusResult = document.getElementById("celcius-result");
const celciusCalculate = document.getElementById("celcius-calculate");

function convert() {
  if (isReverse) {
    if (fahrenheitInput.value === "") {
      alert("Input Fahrenheit tidak boleh kosong!");
    } else {
      const f = Number(fahrenheitInput.value);
      const c = (f - 32) / 1.8;
      celciusResult.value = c.toFixed(2);
      celciusCalculate.value = `(${f}°F - 32) / 1.8 = ${c.toFixed(2)}°C`;
    }
  } else {
    if (celciusInput.value === "") {
      alert("Input Celcius tidak boleh kosong!");
    } else {
      const c = Number(celciusInput.value);
      const f = (c * 1.8) + 32;
      fahrenheitResult.value = f.toFixed(2);
      fahrenheitCalculate.value = `(${c}°C × 1.8) + 32 = ${f.toFixed(2)}°F`;
    }
  }
}

function reset() {
  celciusInput.value = "";
  fahrenheitResult.value = "";
  fahrenheitCalculate.value = "";
  fahrenheitInput.value = "";
  celciusResult.value = "";
  celciusCalculate.value = "";
}

function reverse() {
  reset();
  const cToF = document.getElementById("c-to-f");
  const fToC = document.getElementById("f-to-c");
  isReverse = !isReverse;

  if (isReverse) {
    fToC.classList.add("active");
    cToF.classList.remove("active");
  } else {
    cToF.classList.add("active");
    fToC.classList.remove("active");
  }
}

window.onload = () => {
  document.getElementById("c-to-f").classList.add("active");
};

