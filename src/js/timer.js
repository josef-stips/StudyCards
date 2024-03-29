let playTimer = document.getElementById('play-timer');

let misecs = 0;
let msecs = 0;
let secs = 0;
let mins = 0;

playTimer.textContent = `${secs}.${msecs}${misecs}`;

let timerIsOn = false;

let times = {};

//How often the user don't knew the vocabulray/phrase of the index card?
let ToRepeat = {};
//The date where the data was created
let FromUserDate = {};
//How many Cards were existing on this date/point of time
let CardsAmount = {};
//What mode the user used at this round
let UsedModes = {};

//Deletes old localstorageItem
if (localStorage.getItem('timesArray')) {
    localStorage.removeItem('timesArray');
};

if (localStorage.getItem('timesArrayNew')) {
    let ArrayTimes = JSON.parse(localStorage.getItem('timesArrayNew'));

    times = ArrayTimes;
};

if (localStorage.getItem('RepsItem')) {
    let RepsObject = JSON.parse(localStorage.getItem('RepsItem'));

    ToRepeat = RepsObject;
};

if (localStorage.getItem('DateItem')) {
    let DateItem = JSON.parse(localStorage.getItem('DateItem'));

    FromUserDate = DateItem;
};

if (localStorage.getItem('AmountOfCards')) {
    let CardAm = JSON.parse(localStorage.getItem('AmountOfCards'));

    CardsAmount = CardAm;
};

if (localStorage.getItem('UsedMode')) {
    let usedmode = JSON.parse(localStorage.getItem('UsedMode'));

    UsedModes = usedmode;
};

//Real Stuff
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

function stop_Timer(ConnectMode) { // Connect Mode : boolean
    if (timerIsOn) {
        clearInterval(timer);

        if (Runde == Karteikarten[`${stackLocation}`].vs.length - 1 && ConnectMode == undefined) {
            save_UserTime(playTimer.textContent);
        };

        if (ConnectMode == true) {
            save_UserTime(playTimer.textContent);
        };

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

        if (time.includes(':')) {
            let timeInSec = parseInt(time.split(':')[0]) * 60 + parseFloat(time.split(':')[1]);

            times[stackLocation].user_timesNew.push(timeInSec);

            console.log(timeInSec, time)

        } else {
            times[stackLocation].user_timesNew.push(time);

            console.log(time)
        };

    } else {

        if (times[stackLocation] == null) {
            times[stackLocation] = { 'user_timesNew': [] };
        };

        if (time.includes(':')) {
            let timeInSec = parseInt(time.split(':')[0]) * 60 + parseFloat(time.split(':')[1]);

            times[stackLocation].user_timesNew.push(timeInSec);

            console.log(timeInSec, time)

        } else {
            times[stackLocation].user_timesNew.push(time);

            console.log(time)
        };

        currentLocation = stackLocation;
    };

    localStorage.setItem('timesArrayNew', JSON.stringify(times));
    localStorage.setItem(`${stackLocation}_UserTimesNew`, JSON.stringify(times[stackLocation]));
};

let currentLocation02;

//Saves the user reps
function save_UserReps(reps) {
    if (stackLocation == currentLocation02) {

        ToRepeat[stackLocation].user_repsNew.push(reps);

        console.log(reps)

    } else {

        if (ToRepeat[stackLocation] == null) {
            ToRepeat[stackLocation] = { 'user_repsNew': [] };
        };

        ToRepeat[stackLocation].user_repsNew.push(reps);

        console.log(reps)

        currentLocation02 = stackLocation;
    };

    localStorage.setItem('RepsItem', JSON.stringify(ToRepeat));
    localStorage.setItem(`${stackLocation}_UserRepsNew`, JSON.stringify(ToRepeat[stackLocation]));

    save_UserDate();
};

let currentLocation03;

//Svaes the user date
function save_UserDate() {
    if (stackLocation == currentLocation03) {

        FromUserDate[stackLocation].user_dateNew.push(todayDate);

        console.log(todayDate)

    } else {

        if (FromUserDate[stackLocation] == null) {
            FromUserDate[stackLocation] = { 'user_dateNew': [] };
        };

        FromUserDate[stackLocation].user_dateNew.push(todayDate);

        console.log(todayDate)

        currentLocation03 = stackLocation;
    };

    localStorage.setItem('DateItem', JSON.stringify(FromUserDate));
    localStorage.setItem(`${stackLocation}_UserDateNew`, JSON.stringify(FromUserDate[stackLocation]));

    save_UserCardAmount();
};

let currentLocation04;

//Saves the user card amount on a certain point of time
function save_UserCardAmount() {
    if (stackLocation == currentLocation04) {

        CardsAmount[stackLocation].user_cardAmountNew.push(Karteikarten[stackLocation].vs.length);

    } else {

        if (CardsAmount[stackLocation] == null) {
            CardsAmount[stackLocation] = { 'user_cardAmountNew': [] };
        };

        CardsAmount[stackLocation].user_cardAmountNew.push(Karteikarten[stackLocation].vs.length);

        currentLocation04 = stackLocation;
    };

    localStorage.setItem('AmountOfCards', JSON.stringify(CardsAmount));
    localStorage.setItem(`${stackLocation}_UserCardAmountNew`, JSON.stringify(CardsAmount[stackLocation]));

    save_UserUsedMode();
};

let currentLocation05;

//Saves the mode the user was in
function save_UserUsedMode() {
    if (stackLocation == currentLocation05) {

        UsedModes[stackLocation].user_usedMode.push(CurrMode);

    } else {

        if (UsedModes[stackLocation] == null) {
            UsedModes[stackLocation] = { 'user_usedMode': [] };
        };

        UsedModes[stackLocation].user_usedMode.push(CurrMode);

        currentLocation05 = stackLocation;
    };

    localStorage.setItem('UsedMode', JSON.stringify(UsedModes));
    localStorage.setItem(`${stackLocation}_user_usedMode`, JSON.stringify(UsedModes[stackLocation]));
};