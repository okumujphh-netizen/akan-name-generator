// Akan names
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

// Form event listener
document.getElementById("akanForm").addEventListener("submit", function (event) {

    event.preventDefault();

    // Get user input
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const result = document.getElementById("result");

    // Check if birthdate is entered
    if (!birthdate) {
        result.style.display = "block";
        result.innerHTML = "<h2>Error</h2><p>Please select your birth date.</p>";
        return;
    }

    // Split the date into year, month and day
    const [year, month, day] = birthdate.split("-").map(Number);

    // Validate day
    if (day < 1 || day > 31) {
        result.style.display = "block";
        result.innerHTML = "<h2>Error</h2><p>Day must be between 1 and 31.</p>";
        return;
    }

    // Validate month
    if (month < 1 || month > 12) {
        result.style.display = "block";
        result.innerHTML = "<h2>Error</h2><p>Month must be between 1 and 12.</p>";
        return;
    }

    // Validate gender
    if (gender === "") {
        result.style.display = "block";
        result.innerHTML = "<h2>Error</h2><p>Please select your gender.</p>";
        return;
    }

    // Century and year
    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = day;

    // Day calculation formula
    let dayOfWeek = (
        ((CC / 4) - 2 * CC - 1) +
        ((5 * YY) / 4) +
        ((26 * (MM + 1)) / 10) +
        DD
    ) % 7;

    // Remove decimals
    dayOfWeek = Math.floor(dayOfWeek);

    // Handle negative values
    if (dayOfWeek < 0) {
        dayOfWeek += 7;
    }

    // Get Akan name
    let akanName;

    if (gender === "male") {
        akanName = maleNames[dayOfWeek];
    } else {
        akanName = femaleNames[dayOfWeek];
    }

    // Display result
    result.style.display = "block";
    result.innerHTML = `
        <h2>Your Akan Name</h2>
        <p>Your Akan name is <strong>${akanName}</strong>.</p>
    `;
});