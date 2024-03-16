const form = document.querySelector("form");
const result = document.querySelector("#result");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const height = parseInt(heightInput.value);
    const weight = parseInt(weightInput.value);
    
    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = "Please give a valid height";
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please give a valid weight";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `${bmi}`;
        if (bmi < 18.6) {
            result.className = "underweight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.className = "normal";
        } else {
            result.className = "overweight";
        }
    }
});

// Reset button functionality
const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", function () {
    heightInput.value = "";
    weightInput.value = "";
    result.innerHTML = "";
    result.className = "";
});
