input = document.getElementsByClassName('NeuerStapel_UserShortInput')[0];
input1 = document.getElementsByClassName('NeuerStapel_UserShortInput')[1];
input2 = document.getElementById('input2');
input3 = document.getElementById('input3');

settings = {
    maxLen: 29,
    maxCardLen: 37,
}

keys = {
    'backspace': 8,
    'shift': 16,
    'ctrl': 17,
    'alt': 18,
    'delete': 46,
    // 'cmd':
    'leftArrow': 37,
    'upArrow': 38,
    'rightArrow': 39,
    'downArrow': 40,
}

utils = {
    special: {},
    navigational: {},
    isSpecial(e) {
        return typeof this.special[e.keyCode] !== 'undefined';
    },
    isNavigational(e) {
        return typeof this.navigational[e.keyCode] !== 'undefined';
    }
}

utils.special[keys['backspace']] = true;
utils.special[keys['shift']] = true;
utils.special[keys['ctrl']] = true;
utils.special[keys['alt']] = true;
utils.special[keys['delete']] = true;

utils.navigational[keys['upArrow']] = true;
utils.navigational[keys['downArrow']] = true;
utils.navigational[keys['leftArrow']] = true;
utils.navigational[keys['rightArrow']] = true;

input.addEventListener('keydown', function(event) {
    let len = event.target.innerText.trim().length;
    hasSelection = false;
    selection = window.getSelection();
    isSpecial = utils.isSpecial(event);
    isNavigational = utils.isNavigational(event);

    if (selection) {
        hasSelection = !!selection.toString();
    }

    if (isSpecial || isNavigational) {
        return true;
    }

    if (len >= settings.maxCardLen && !hasSelection) {
        event.preventDefault();
        return false;
    }
});

input1.addEventListener('keydown', function(event) {
    let len = event.target.innerText.trim().length;
    hasSelection = false;
    selection = window.getSelection();
    isSpecial = utils.isSpecial(event);
    isNavigational = utils.isNavigational(event);

    if (selection) {
        hasSelection = !!selection.toString();
    }

    if (isSpecial || isNavigational) {
        return true;
    }

    if (len >= settings.maxCardLen && !hasSelection) {
        event.preventDefault();
        return false;
    }
});

input2.addEventListener('keydown', function(event) {
    let len = event.target.innerText.trim().length;
    hasSelection = false;
    selection = window.getSelection();
    isSpecial = utils.isSpecial(event);
    isNavigational = utils.isNavigational(event);

    if (selection) {
        hasSelection = !!selection.toString();
    }

    if (isSpecial || isNavigational) {
        return true;
    }

    if (len >= settings.maxLen && !hasSelection) {
        event.preventDefault();
        return false;
    }
});

input3.addEventListener('keydown', function(event) {
    let len = event.target.innerText.trim().length;
    hasSelection = false;
    selection = window.getSelection();
    isSpecial = utils.isSpecial(event);
    isNavigational = utils.isNavigational(event);

    if (selection) {
        hasSelection = !!selection.toString();
    }

    if (isSpecial || isNavigational) {
        return true;
    }

    if (len >= settings.maxCardLen && !hasSelection) {
        event.preventDefault();
        return false;
    }

    //Sends user text 
    if (event.which == 13) {
        event.preventDefault();

        window.App.SendStringToMain(pgKarteiKarteRS.querySelector('h3').textContent, input3.textContent)

        input3.textContent = null;

        let WaitToFinish = setInterval(() => {
            let result;
            let FinalResult = window.App.updateRepeatState(result)

            console.log(FinalResult)

            SeeCard(FinalResult);

            clearInterval(WaitToFinish);
        }, 10);
    };
});