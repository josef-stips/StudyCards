let input = document.getElementsByClassName('NeuerStapel_UserShortInput')[0];
let input1 = document.getElementsByClassName('NeuerStapel_UserShortInput')[1];
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');

export let settings = {
    maxLen: 29,
    maxCardLen: 37,
}

let keys = {
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

let utils = {
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
    let hasSelection = false;
    let selection = window.getSelection();
    let isSpecial = utils.isSpecial(event);
    let isNavigational = utils.isNavigational(event);

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
    let hasSelection = false;
    let selection = window.getSelection();
    let isSpecial = utils.isSpecial(event);
    let isNavigational = utils.isNavigational(event);

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
    let len = event.target.value.trim().length;
    let hasSelection = false;
    let selection = window.getSelection();
    let isSpecial = utils.isSpecial(event);
    let isNavigational = utils.isNavigational(event);

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
    let hasSelection = false;
    let selection = window.getSelection();
    let isSpecial = utils.isSpecial(event);
    let isNavigational = utils.isNavigational(event);

    if (selection) {
        hasSelection = !!selection.toString();
    };

    if (isSpecial || isNavigational) {
        return true;
    };

    if (len >= settings.maxCardLen && !hasSelection) {
        event.preventDefault();
        return false;
    };

    if (event.which == 13) {
        event.preventDefault();
    }
});

input4.addEventListener('keydown', function(event) {
    let len = event.target.value.trim().length;
    let hasSelection = false;
    let selection = window.getSelection();
    let isSpecial = utils.isSpecial(event);
    let isNavigational = utils.isNavigational(event);

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