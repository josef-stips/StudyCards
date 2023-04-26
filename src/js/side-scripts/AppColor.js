let ColorField_1 = document.getElementById('ColorText-1');
let style1_Input = document.getElementById('style1');

let ColorField_2 = document.getElementById('ColorText-2');
let style2_Input = document.getElementById('style2');

let saveColorChanges1 = document.getElementById('saveColorChanges-1');

let ColorChangeUI_Area = document.getElementById('color-field-1');
let EmailUI_Area = document.getElementsByClassName('form')[0];
let pg_ModeOverview = document.querySelector('.pg-Overview-wrapper');

let TableCells = [];

let r = document.querySelector(':root');
let rs = getComputedStyle(r);

//default Settings

if (!document.body.classList.contains('dark-mode')) {

    ColorChangeUI_Area.style.backgroundImage = "linear-gradient(to bottom right, var(--standard-dark-color-01), var(--standard-dark-color-02))"
    EmailUI_Area.style.backgroundImage = "linear-gradient(to pg_ModeOverview right, var(--standard-dark-color-01), var(--standard-dark-color-02))"
    pg_ModeOverview.style.backgroundImage = "linear-gradient(to bottom right, var(--standard-dark-color-01), var(--standard-dark-color-02))"

} else {};

//Checks if the User already saved costum colors 
//If not , the default colors are shown 
//If the user saved costum colors the saved colors are shown
function mainBGColor() {
    if (!document.body.classList.contains('dark-mode')) {
        if (localStorage.getItem('firstBackground')) {

            //Sets color value
            r.style.setProperty('--bg-gardiant-01', localStorage.getItem('firstBackground'))

            //calls function to show the colors to the page
            setColor(style1_Input, '--bg-gardiant-01', ColorField_1);

        } else {
            //Sets color value
            r.style.setProperty('--bg-gardiant-01', "#528bff")

            //calls function to show the colors to the page
            setColor(style1_Input, '--bg-gardiant-01', ColorField_1);
        };

        if (localStorage.getItem('secondBackground')) {

            //Sets color value
            r.style.setProperty('--bg-gardiant-02', localStorage.getItem('secondBackground'))

            //calls function to show the colors to the page
            setColor(style2_Input, '--bg-gardiant-02', ColorField_2);

        } else {
            //Sets color value
            r.style.setProperty('--bg-gardiant-02', "#8575ff");

            //calls function to show the colors to the page
            setColor(style2_Input, '--bg-gardiant-02', ColorField_2);
        };
    } else {
        if (localStorage.getItem('firstBackground')) {

            //Sets color value
            r.style.setProperty('--bg-gardiant-01', localStorage.getItem('firstBackground'))
            r.style.setProperty('--bg-div-gardiant-01', localStorage.getItem('firstBackground'))

            //calls function to show the colors to the page
            setColor(style1_Input, '--bg-gardiant-01', ColorField_1);
            setColor(style1_Input, '--bg-div-gardiant-01', ColorField_1);

        } else {
            //Sets color value
            r.style.setProperty('--bg-gardiant-01', "#528bff")
            r.style.setProperty('--bg-div-gardiant-01', "#528bff")

            //calls function to show the colors to the page
            setColor(style1_Input, '--bg-gardiant-01', ColorField_1);
            setColor(style1_Input, '--bg-div-gardiant-01', ColorField_1);
        };

        if (localStorage.getItem('secondBackground')) {

            //Sets color value
            r.style.setProperty('--bg-gardiant-02', localStorage.getItem('secondBackground'))
            r.style.setProperty('--bg-div-gardiant-02', localStorage.getItem('secondBackground'))

            //calls function to show the colors to the page
            setColor(style2_Input, '--bg-gardiant-02', ColorField_2);
            setColor(style2_Input, '--bg-div-gardiant-02', ColorField_2);

        } else {
            //Sets color value
            r.style.setProperty('--bg-gardiant-02', "#8575ff");
            r.style.setProperty('--bg-div-gardiant-02', "#8575ff");

            //calls function to show the colors to the page
            setColor(style2_Input, '--bg-gardiant-02', ColorField_2);
            setColor(style2_Input, '--bg-div-gardiant-02', ColorField_2);
        };
    };
};

if (TableCells.length <= 0) {
    mainBGColor();
};

//User selects color
style1_Input.addEventListener('input', () => {
    ColorField_1.textContent = style1_Input.value;

    let INIT_theme = stackData.themes[stackLocation];

    if (Object.keys(INIT_theme)[0] == 'No theme') {
        if (document.body.classList.contains('dark-mode')) {

            r.style.setProperty('--bg-div-gardiant-01', `${style1_Input.value}`);
            r.style.setProperty('--bg-gardiant-01', `${style1_Input.value}`);

        } else {
            r.style.setProperty('--bg-gardiant-01', `${style1_Input.value}`);
        };
    };
});

style2_Input.addEventListener('input', () => {
    ColorField_2.textContent = style2_Input.value;

    let INIT_theme = stackData.themes[stackLocation];

    if (Object.keys(INIT_theme)[0] == 'No theme') {
        if (document.body.classList.contains('dark-mode')) {

            r.style.setProperty('--bg-div-gardiant-02', `${style2_Input.value}`);
            r.style.setProperty('--bg-gardiant-02', `${style2_Input.value}`);

        } else {

            r.style.setProperty('--bg-gardiant-02', `${style2_Input.value}`);
        };
    };
});

//Save Colors
saveColorChanges1.addEventListener('click', () => {
    localStorage.setItem('firstBackground', `${style1_Input.value}`);
    localStorage.setItem('secondBackground', `${style2_Input.value}`);
});


//Html gets the color value
function setColor(Input, cssVar, InnerText) {
    Input.value = rs.getPropertyValue(`${cssVar}`);
    InnerText.textContent = Input.value;
};

// When the user wants to create a new stack he needs to choose a theme
// So every stack has his own theme 
// And this function handles the theme of the current stack
function ChangeToStackTheme(stack) {
    console.log(stackData, stack)

    let INIT_theme = stackData.themes[stack];
    let Stacktheme = stackData.themes[stack][Object.keys(INIT_theme)[0]];

    if (Stacktheme[0] != '') {
        if (!document.body.classList.contains('dark-mode')) {
            //Sets color value
            r.style.setProperty('--bg-gardiant-01', Stacktheme[0]);
            r.style.setProperty('--bg-gardiant-02', Stacktheme[1]);

        } else {
            //Sets color value
            r.style.setProperty('--bg-div-gardiant-01', Stacktheme[0]);
            r.style.setProperty('--bg-div-gardiant-02', Stacktheme[1]);

            //Sets color value
            r.style.setProperty('--bg-gardiant-01', Stacktheme[0]);
            r.style.setProperty('--bg-gardiant-02', Stacktheme[1]);
        };

        display_stack_theme.textContent = Object.keys(INIT_theme)[0];

    } else {
        mainBGColor();

        display_stack_theme.textContent = 'no theme';
    };
};

// Sets the default app colors which the user can change to default
function SetAppColorsToDefault() {
    localStorage.setItem('firstBackground', "#528bff");
    localStorage.setItem('secondBackground', "#8575ff");

    if (Object.keys(stackData.themes).length !== 0) {
        let INIT_theme = stackData.themes[stackLocation];

        if (Object.keys(INIT_theme)[0] == 'No theme') {
            if (document.body.classList.contains('dark-mode')) {

                r.style.setProperty('--bg-div-gardiant-01', "#528bff");
                r.style.setProperty('--bg-div-gardiant-02', "#8575ff");
                r.style.setProperty('--bg-gardiant-01', "#528bff");
                r.style.setProperty('--bg-gardiant-02', "#8575ff");

            } else {

                r.style.setProperty('--bg-gardiant-01', "#528bff");
                r.style.setProperty('--bg-gardiant-02', "#8575ff");
            };
        };
    };

    setColor(style1_Input, '--bg-gardiant-01', ColorField_1);
    setColor(style2_Input, '--bg-gardiant-02', ColorField_2);
};