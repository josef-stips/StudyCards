//start-screen elements
const startscreen = document.querySelector('#start-screen');

//start-screen elements
const separator = document.getElementById('startscreen-title-seperator');
const title = document.getElementById('startscreen-title');
const subtitle = document.getElementById('startscreen-sub-title');

separator.addEventListener('animationend', () => {
    title.style.animationPlayState = 'running';
    subtitle.style.animationPlayState = 'running';
});

title.addEventListener('animationend', () => {
    setTimeout(() => {
        startscreen.classList.add('hide');

        setTimeout(() => {
            startscreen.style.display = 'none';
        }, 700);

    }, 300);
});