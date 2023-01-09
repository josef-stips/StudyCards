let playTimer = document.getElementById('play-timer');

let misecs = 0;
let msecs = 0;
let secs = 0;
let mins = 0;

playTimer.textContent = `${secs}.${msecs}${misecs}`;

let timerIsOn = false;

let times = {};

if (localStorage.getItem('timesArray')) {
    let ArrayTimes = JSON.parse(localStorage.getItem('timesArray'));

    times = ArrayTimes;
};

function start_Timer() {
    if (!timerIsOn) {
        timer = setInterval(function() { update_Timer() }, 10);

        timerIsOn = true;
    };
};

function update_Timer() {
    if (misecs == 9) {
        msecs++;
        misecs = 0;
    } else {
        misecs++;
    }

    if (msecs > 9) {
        msecs = 0
        secs++;
    }

    if (secs > 59) {
        mins++;
        secs = 0;
    }

    if (msecs < 10 && mins < 1) {
        playTimer.textContent = `${secs}.${msecs}${misecs}`;
    }

    if (mins > 0 && secs < 10) {
        playTimer.textContent = `${mins}:0${secs}.${msecs}${misecs}`;
    } else if (mins > 0) {
        playTimer.textContent = `${mins}:${secs}.${msecs}${misecs}`;
    }
};

function stop_Timer() {
    if (timerIsOn) {
        clearInterval(timer);
        save_UserTime(playTimer.textContent);

        timerIsOn = false;
    };
};

function clear_Timer() {
    mins = 0;
    secs = 0;
    msecs = 0;
    misecs = 0;

    playTimer.textContent = `${secs}.${msecs}${misecs}`;
};


let currentLocation;

function save_UserTime(time) {
    if (stackLocation == currentLocation) {

        times[stackLocation].user_times.push(time)

    } else {

        if (times[stackLocation] == null) {
            times[stackLocation] = { 'user_times': [] };
        };

        times[stackLocation].user_times.push(time)

        currentLocation = stackLocation;
    };

    localStorage.setItem('timesArray', JSON.stringify(times));
    localStorage.setItem(`${stackLocation}_UserTimes`, JSON.stringify(times[stackLocation]));
};