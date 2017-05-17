var duration = 1500;
var breakDuration = 300;
var sessionTime = 25;
var breakTime = 5;
var currentTime = duration;
var workTime = currentTime;

var currentBreak = breakDuration;
var myBreak = currentBreak;

var countStarted = false;
var myInterval;

window.onload = function() {
    document.getElementById("pomodoro").innerHTML = timeToString(workTime);
    document.getElementById("minutesOfWork").innerHTML = sessionTime;
    document.getElementById("minutesOfBreak").innerHTML = breakTime;
};

function timer() {
    if (workTime == 0) {
        if (myBreak >= 0) {
            document.getElementById("pomodoro").innerHTML = timeToString(myBreak);
            myBreak--;
        } else {
            workTime = currentTime = duration;
            myBreak = currentBreak = breakDuration;
            document.getElementById("pomodoro").innerHTML = timeToString(workTime);
        }
    } else {
        workTime--;
        document.getElementById("pomodoro").innerHTML = timeToString(workTime);
    }
}

function timeToString(workTime) {
    var minutes = 0;
    var seconds = 0;
    minutes = Math.floor(workTime / 60);
    seconds = workTime - (60 * minutes);
    return padTime(minutes) + ":" + padTime(seconds);
}

function padTime(arg) {
    return arg > 9 ? "" + arg : "0" + arg;
}

function startCount() {
    if (countStarted === false) {
        workTime = currentTime;
        myBreak = currentBreak;
        myInterval = setInterval(timer, 1000);
    }
}

function stopTimer() {
    clearInterval(myInterval);
    myInterval = false;
    workTime = currentTime;
    myBreak = currentBreak;
    document.getElementById("pomodoro").innerHTML = timeToString(duration);
}

function pauseTimer() {
    clearInterval(myInterval);
    myInterval = false;
    currentTime = workTime;
    currentBreak = myBreak;
}

function minutesToSeconds(minutes) {
    return minutes * 60;
}

function addTime() {
    clearInterval(myInterval);
    myInterval = false;
    sessionTime++;
    document.getElementById("minutesOfWork").innerHTML = sessionTime;
    workTime = currentTime = duration = minutesToSeconds(sessionTime);
    document.getElementById("pomodoro").innerHTML = timeToString(workTime);
}

function substractTime() {
    if (sessionTime > 1) {
        clearInterval(myInterval);
        myInterval = false;
        sessionTime--;
        document.getElementById("minutesOfWork").innerHTML = sessionTime;
        workTime = currentTime = duration = minutesToSeconds(sessionTime);
        document.getElementById("pomodoro").innerHTML = timeToString(workTime);
    }
}
function addBreak() {
    clearInterval(myInterval);
    myInterval = false;
    breakTime++;
    document.getElementById("minutesOfBreak").innerHTML = breakTime;
    workTime = currentTime = duration = minutesToSeconds(sessionTime);
    document.getElementById("pomodoro").innerHTML = timeToString(workTime);
    myBreak = currentBreak = breakDuration = minutesToSeconds(breakTime);
}

function substractBreak() {
    if (breakTime > 1) {
        clearInterval(myInterval);
        myInterval = false;
        breakTime--;
        document.getElementById("minutesOfBreak").innerHTML = breakTime;
        workTime = currentTime = duration = minutesToSeconds(sessionTime);
        document.getElementById("pomodoro").innerHTML = timeToString(workTime);
        myBreak = currentBreak = breakDuration = minutesToSeconds(breakTime);
    }
}
