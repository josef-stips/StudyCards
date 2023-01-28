let ColorField_1 = document.getElementById('ColorText-1');
let style1_Input = document.getElementById('style1');

let ColorField_2 = document.getElementById('ColorText-2');
let style2_Input = document.getElementById('style2');

let saveColorChanges1 = document.getElementById('saveColorChanges-1');

//default Settings

if (!document.body.classList.contains('dark-mode')) {

    ColorChangeUI_Area.style.backgroundImage = "linear-gradient(to bottom right, var(--standard-dark-color-01), var(--standard-dark-color-02))"
    EmailUI_Area.style.backgroundImage = "linear-gradient(to bottom right, var(--standard-dark-color-01), var(--standard-dark-color-02))"

} else {};

//Checks if the User already saved costum colors 
//If not , the default colors are shown 
//If the user saved costum colors the saved colors are shown
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

//User selects color
style1_Input.addEventListener('input', () => {
    ColorField_1.textContent = style1_Input.value;

    if (document.body.classList.contains('dark-mode')) {

        r.style.setProperty('--bg-div-gardiant-01', `${style1_Input.value}`);
        r.style.setProperty('--bg-gardiant-01', `${style1_Input.value}`);

    } else {

        r.style.setProperty('--bg-gardiant-01', `${style1_Input.value}`);
    };
});

style2_Input.addEventListener('input', () => {
    ColorField_2.textContent = style2_Input.value;

    if (document.body.classList.contains('dark-mode')) {

        r.style.setProperty('--bg-div-gardiant-02', `${style2_Input.value}`);
        r.style.setProperty('--bg-gardiant-02', `${style2_Input.value}`);

    } else {

        r.style.setProperty('--bg-gardiant-02', `${style2_Input.value}`);
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