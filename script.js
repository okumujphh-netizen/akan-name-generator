// Arrays

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

// Event Listener

document.getElementById("akanForm").addEventListener("submit", generateAkanName);

// Validation Function

function validateInput(day, month, year, gender) {

    const currentYear = new Date().getFullYear();

    

    if (!day) {
        alert("Please enter the day.");
        return false;
    }

    if (!month) {
        alert("Please select the month.");
        return false;
    }

    if (!year) {
        alert("Please enter the year.");
        return false;
    }

    if (gender === "") {
        alert("Please select your gender.");
        return false;
    }

    if (day < 1 || day > 31) {
        alert("Day must be between 1 and 31.");
        return false;
    }

    if (month < 1 || month > 12) {
        alert("Please select a valid month.");
        return false;
    }

    if (year < 1) {
        alert("Year must be greater than 0.");
        return false;
    }

    if (year > currentYear) {
        alert(`Year cannot be greater than ${currentYear}.`);
        return false;
    }

    const date = new Date(year, month - 1, day);

    if (
        date.getFullYear() !== year ||
        date.getMonth() !== month - 1 ||
        date.getDate() !== day
    ) {
        alert("Please enter a valid calendar date.");
        return false;
    }

    return true;
}

// Main Function

function generateAkanName(event) {

    event.preventDefault();

    const result = document.getElementById("result");

    console.log("Button clicked");

    // Get user input as strings
    const dayValue = document.getElementById("day").value;
    const monthValue = document.getElementById("month").value;
    const yearValue = document.getElementById("year").value;
    const gender = document.getElementById("gender").value;

    console.log(dayValue);
    console.log(monthValue);
    console.log(yearValue);
    console.log(gender);

  // Check if all fields are empty
if (
    dayValue === "" &&
    monthValue === "" &&
    yearValue === "" &&
    gender === ""
) {
    result.innerHTML = `
        <h2>Error</h2>
        <p style="color:red;">Please fill in all the fields.</p>
    `;
    return;
}

    // Convert strings to numbers
    const day = Number(dayValue);
    const month = Number(monthValue);
    const year = Number(yearValue);

    // Validate
    const valid = validateInput(day, month, year, gender);

    if (!valid) {
        return;
    }

    // Formula

let MM = month;
let YY = year % 100;
let CC = Math.floor(year / 100);

// January and February are treated as months 13 and 14
if (MM === 1 || MM === 2) {
    MM += 12;
    YY--;

    if (YY < 0) {
        YY = 99;
        CC--;
    }
}

let d = Math.floor(
    (
        (CC / 4) -
        (2 * CC) -
        1 +
        ((5 * YY) / 4) +
        ((26 * (MM + 1)) / 10) +
        day
    ) % 7
);

d = ((d % 7) + 7) % 7;

// Get Akan name

let akanName;

if (gender === "male") {
    akanName = maleNames[d];
} else {
    akanName = femaleNames[d];
}
    // Display Result

    document.getElementById("result").innerHTML = `
        <h2>Result</h2>
        <p>You were born on <strong>${days[d]}</strong>.</p>
        <p>Your Akan name is <strong>${akanName}</strong>.</p>
    `;
}