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


// Function

function generateAkanName(event) {

    event.preventDefault();

    // Get user input

    const day = Number(document.getElementById("day").value);
    const month = Number(document.getElementById("month").value);
    const year = Number(document.getElementById("year").value);
    const gender = document.getElementById("gender").value;

    // Validate input

    if (day < 1 || day > 31) {
        alert("Please enter a valid day.");
        return;
    }

    if (month < 1 || month > 12) {
        alert("Please enter a valid month.");
        return;
    }

    if (year <= 0) {
        alert("Please enter a valid year.");
        return;
    }

    if (gender === "") {
        alert("Please select your gender.");
        return;
    }

    // Formula

    const CC = Math.floor(year / 100);

    const YY = year % 100;

    let d = Math.floor(
        (
            (CC / 4)
            - (2 * CC)
            - 1
            + ((5 * YY) / 4)
            + ((26 * (month + 1)) / 10)
            + day
        ) % 7
    );

    if (d < 0) {
        d += 7;
    }

    // Akan Name

    let akanName;

    if (gender === "male") {
        akanName = maleNames[d];
    } else {
        akanName = femaleNames[d];
    }

    // Display Result

    document.getElementById("result").innerHTML =

    `<h2>Result</h2>

    <p>You were born on <strong>${days[d]}</strong>.</p>

    <p>Your Akan name is <strong>${akanName}</strong>.</p>`;
}