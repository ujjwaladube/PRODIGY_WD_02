let isRunning = false;
let startTime;
let intervalId;

function startStop() {
    if (isRunning) {
        clearInterval(intervalId);
        document.getElementById("startStop").textContent = "Start";
    } else {
        startTime = startTime || Date.now();
        intervalId = setInterval(updateDisplay, 10);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(intervalId);
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("lapList").innerHTML = "";
    isRunning = false;
    startTime = null;
}

function updateDisplay() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const formattedTime = elapsedTime.toISOString().substr(11, 8);
    document.getElementById("display").textContent = formattedTime;
}

function recordLap() {
    if (isRunning) {
        const lapTime = document.getElementById("display").textContent;
        const lapList = document.getElementById("lapList");
        const lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    }
}