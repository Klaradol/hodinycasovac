function updateTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('time').textContent = timeString;
  }
  
 
  setInterval(updateTime, 1000);
  
  
  updateTime();

  function startTimer() {
    var timerElement = document.getElementById("timer");
    var time = 1800;
    var minutes, seconds;

    var timerInterval = setInterval(function() {
        minutes = parseInt(time / 60, 10);
        seconds = parseInt(time % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerElement.textContent = minutes + ":" + seconds;

        if (--time < 0) {
            clearInterval(timerInterval);
            alert("Dosáhli jste svého denního limitu.");
            timerElement.textContent = "Čas vypršel";
        }
    }, 1000);
}
  
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimerDisplay();
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    document.getElementById("timer").textContent = formattedTime;
}

function pad(num) {
    return num.toString().padStart(2, "0");
}

function saveTime() {
    const currentTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    const historyDiv = document.getElementById("history");
    const timeEntry = document.createElement("p");
    timeEntry.textContent = currentTime;
    historyDiv.appendChild(timeEntry);
}