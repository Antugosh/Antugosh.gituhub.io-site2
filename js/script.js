// Define a Random Number between 1 to 10
let low = 1;
let high = 10;
let number_of_tries = 1;

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let correct_ans = randomInteger(low, high);

// Get the UI Element
let guessBtn = document.querySelector("#guess-btn");
let restartBtn = document.querySelector("#restart-btn");

// Add Event Listeners
guessBtn.addEventListener("click", checkGuessNumber);
restartBtn.addEventListener("click", reloadGame);
restartBtn.disabled = true;

// Define Functions
function checkGuessNumber(e) {
    if (checkCorrectNumber()) {
        return;
    }
    if (number_of_tries == 3) {
        showAlert("Wrong guess! You Lost! Haha Loser", "alert-danger");
        showHint("Correct Answer", ":", correct_ans);
        restartBtn.disabled = false;
        guessBtn.disabled = true;
        return;
    }
    number_of_tries += 1;
    e.preventDefault();
}

function checkCorrectNumber() {
    let guessNumber = Number(prompt("Write a number between 1 to 10"));

    if (correct_ans === guessNumber) {
        showAlert(
            `Correct Answer! The number is ${correct_ans}`,
            "alert-success"
        );
        showHint("The Number", "=", correct_ans);
        restartBtn.disabled = false;
        guessBtn.disabled = true;
        return true;
    } else {
        if (correct_ans > guessNumber) {
            showAlert(
                "The Correct number is greater than your guessed number",
                "alert-warning"
            );
            showHint("The Number", ">", guessNumber);
        } else if (correct_ans < guessNumber) {
            showAlert(
                "The Correct number is less than your guessed number",
                "alert-warning"
            );
            showHint("The Number", "<", guessNumber);
        }
    }
    return false;
}

function showAlert(message, className) {
    clearAlert();
    let div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    let container = document.querySelector(".container");
    container.appendChild(div);
}

function showHint(message, mathSymbol, number) {
    clearHint();
    let div = document.createElement("div");
    div.className = "showHint";
    div.appendChild(
        document.createTextNode(`${message} ${mathSymbol} ${number}`)
    );
    let container = document.querySelector(".container");
    container.appendChild(div);
}

function clearAlert() {
    let currentAlert = document.querySelector(".alert");

    if (currentAlert) {
        currentAlert.remove();
    }
}

function clearHint() {
    let currentHint = document.querySelector(".showHint");

    if (currentHint) {
        currentHint.remove();
    }
}

function reloadGame(e) {
    location.reload();
}
