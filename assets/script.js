//Timer Related
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');



//hides the welcome page

function welcomePage() {
var welcomePage = document.getElementById('welcome-page');
    if (welcomePage.style.display === "none") {
        welcomePage.style.display = "block";
    } else {
        welcomePage.style.display = "none";
    }
    }



//TIMER
function countdown() {
    var timeLeft = 5;



//function that creates time
var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
    }   else if (timeLeft ===1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
    }   else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
    }
    }, 1000);
}


//controls the start-button for the timer
startBtn.onclick = countdown;
startBtn.onclick = welcomePage; 
startBtn.addEventListener('click', countdown);