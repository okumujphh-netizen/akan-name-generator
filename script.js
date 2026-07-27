// =========================
// Akan Names Arrays
// =========================
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

// =========================
// Form Event Listener
// =========================
document.getElementById("akanForm").addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get user input
    const day = Number(document.getElementById("day").value);
    const month = Number(document.getElementById("month").value);
    const year = Number(document.getElementById("year").value);
    const gender = document.getElementById("gender").value;

    // Validate input
    if (day < 1 || day > 31) {
        alert("Please enter a valid day (1-31).");
        return;
    }

    if (month < 1 || month > 12) {
        alert("Please enter a valid month (1-12).");
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

    // Calculate century and year
    const CC = Math.floor(year / 100);
    const YY = year % 100;

    // Calculate day of the week
    let dayOfWeek = Math.floor(
        (
            (CC / 4) -
            (2 * CC) -
            1 +
            (5 * YY / 4) +
            (26 * (month + 1) / 10) +
            day
        ) % 7
    );

    // Handle negative numbers
    if (dayOfWeek < 0) {
        dayOfWeek += 7;
    }

    // Select Akan name
    let akanName;

    if (gender === "male") {
        akanName = maleNames[dayOfWeek];
    } else {
        akanName = femaleNames[dayOfWeek];
    }

    // Display result
    const result = document.getElementById("result");
    result.style.display = "block";

    result.innerHTML = `
        <h2>Your Akan Name</h2>
        <p>You were born on day number <strong>${dayOfWeek}</strong>.</p>
        <p>Your Akan name is <strong>${akanName}</strong>.</p>
    `;
});
