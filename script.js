// ====================================
// Akan Names Arrays
// ====================================

const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];

const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// ====================================
// Validate User Input
// ====================================

function validateInput(day, month, year, gender) {

    if (isNaN(day) || day < 1 || day > 31) {
        alert("Please enter a valid day (1-31).");
        return false;
    }

    if (isNaN(month) || month < 1 || month > 12) {
        alert("Please enter a valid month (1-12).");
        return false;
    }

    if (isNaN(year) || year <= 0) {
        alert("Please enter a valid year.");
        return false;
    }

    if (gender === "") {
        alert("Please select your gender.");
        return false;
    }

    return true;
}

// ====================================
// Calculate Day of the Week
// Formula:
// d=((CC/4)-2CC-1+(5YY/4)+(26(MM+1)/10)+DD) mod 7
// ====================================

function calculateDay(day, month, year) {

    const CC = Math.floor(year / 100);
    const YY = year % 100;

    let dayOfWeek = Math.floor(
        (
            (CC / 4) -
            (2 * CC) -
            1 +
            ((5 * YY) / 4) +
            ((26 * (month + 1)) / 10) +
            day
        ) % 7
    );

    // Handle negative values
    if (dayOfWeek < 0) {
        dayOfWeek += 7;
    }

    return dayOfWeek;
}

// ====================================
// Get Akan Name
// ====================================

function getAkanName(dayOfWeek, gender) {

    if (gender === "male") {
        return maleNames[dayOfWeek];
    } else {
        return femaleNames[dayOfWeek];
    }

}

// ====================================
// Display Result
// ====================================

function displayResult(dayName, akanName) {

    const result = document.getElementById("result");

    result.style.display = "block";

    result.innerHTML = `
        <h2>Your Akan Name</h2>
        <p>You were born on <strong>${dayName}</strong>.</p>
        <p>Your Akan name is <strong>${akanName}</strong>.</p>
    `;

}

// ====================================
// Main Function
// ====================================

function generateAkanName(event) {

    event.preventDefault();

    // Get user input using the DOM
    const day = Number(document.getElementById("day").value);
    const month = Number(document.getElementById("month").value);
    const year = Number(document.getElementById("year").value);
    const gender = document.getElementById("gender").value;

    // Validate input
    const valid = validateInput(day, month, year, gender);

    if (!valid) {
        return;
    }

    // Calculate day of the week
    const dayOfWeek = calculateDay(day, month, year);

    // Get day name
    const dayName = days[dayOfWeek];

    // Get Akan name
    const akanName = getAkanName(dayOfWeek, gender);

    // Display result
    displayResult(dayName, akanName);

}

// ====================================
// Event Listener
// ====================================

document
    .getElementById("akanForm")
    .addEventListener("submit", generateAkanName);