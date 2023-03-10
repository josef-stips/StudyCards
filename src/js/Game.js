//That functions are called while the game
var count_timer;

function ClosePlayGround() {
    PlayModeIsNotActive();
    ExitGame();
    pgKarteikarte.style.cursor = 'pointer';

    clearInterval(count_timer);
};

function OpenPlayGround() {
    if (TableCells.length >= 1) {
        if (Karteikarten[`${stackLocation}`].vs.length != 0) {

            PlayGround.style.display = 'flex';
            darkContainer.style.display = 'block';
            pg_countdown_wrapper.style.display = 'none';

        } else {
            SetUpSmallPopUp('Okay', 'No', 'block', 'block', `Add an index card first ${String.fromCodePoint(0x1F496)}`);
        };
    };
};

function StartGameCountDown() {
    pg_countdown.textContent = 'The Game begins in..';

    pg_countdown_wrapper.style.display = 'flex';
    pg_ModeOverview.style.display = 'none';

    var counter = 3;

    count_timer = setInterval(() => {
        if (counter > 0) {
            pg_countdown.textContent = counter;

            counter--;
        } else {
            clearInterval(count_timer);
            OpenGame();
        };
    }, 1000);
};

function OpenGame() {
    pg_countdown_wrapper.style.display = 'none';
    pg_MainContent.style.display = 'block';
    pg_header_ini_Wrapper.style.display = 'none';
    pg_navHeader.style.display = 'block';

    pgUntenSichtbarDiv.style.display = 'none';
    pgObenSichtbarDiv.style.display = 'none';
    pgKannIchButton.style.display = 'none';
    pgWiederhohlenButton.style.display = 'none';
    pg_countdown_wrapper.style.display = 'none';

    PlayModeIsActive();
    start_Timer(); //Timer function of 'timer.js' file

    //Defines value for two arrays with copied values from the users first stack as default
    DefineValueForStackArray();

    pgKarteiKarteVS.querySelector('h3').textContent = PlayGround_Cards_VS[0];
    pgKarteiKarteRS.querySelector('h3').textContent = PlayGround_Cards_RS[0];

    CardsOfMaxCardstext.textContent = `0/${Karteikarten[`${stackLocation}`].vs.length}`;

    pgKannIchButton.style.display = 'none';
    pgWiederhohlenButton.style.display = 'none';

    //If User clicked "view below" button or "view_above" button.
    CardView();

    PlayMode = true;
};

//reloads the Game
function reloadGame() {
    DefineValueForStackArray();
    PlayModeIsNotActive();
    GameEnd = false;

    pgKarteikarte.style.cursor = 'pointer';

    pgObenSichtbarDiv.style.display = 'block';
    pgUntenSichtbarDiv.style.display = 'block';

    pg_ModeOverview.style.display = 'flex';
    pg_MainContent.style.display = 'none';
    pg_header_ini_Wrapper.style.display = 'flex';
    pg_navHeader.style.display = 'none';

    GameEnd = false;
    PlayMode = false;

    clearInterval(count_timer);
    StartGameCountDown();
};

function CardView() {
    if (UntenSichtbar_Boolean) {
                
        pgKarteiKarteRS.style.color = 'var(--front-color)'
        pgKarteiKarteVS.style.color = 'rgba(255,255,255,0)'

    } else {
        pgKarteiKarteRS.style.color = 'rgba(255,255,255,0)'
        pgKarteiKarteVS.style.color = 'var(--front-color)'
    };
};

function PlayModeIsActive() {
    PlayMode = true;

    pgKarteiKarteRS.style.color = 'var(--front-color)';
    pgKarteiKarteVS.style.color = 'var(--front-color)';
    pgShowCardsButton.style.display = 'none';

    pgKannIchButton.style.display = 'block';
    pgWiederhohlenButton.style.display = 'block';

    pgObenSichtbarDiv.style.display = 'none';
    pgUntenSichtbarDiv.style.display = 'none';
};

//Wird aufgerufen wenn User das Spiel durch das klicken von einem "Exit-Button" verlässt.
//Als "Exit-Button" steht das "Häkchen-Button" und das "Kreuz-Button" als Verfügung
//Wenn der "Später Button" beim End-Screen betätigt wird, wird diese Funktion ebenfafalls aufgerufen
function PlayModeIsNotActive() {
    if (EndScreen_Boolean == true) {
        pgKarteikarte.removeChild(pgKarteikarte.lastElementChild);
        pgKarteikarte.removeChild(pgKarteikarte.lastElementChild);
    };

    ZuWiederhohlen = 0;
    EndScreen_Boolean = false;
    Runde = 0;

    pgKarteiKarteVS.querySelector('h3').textContent = `${PlayGround_Cards_VS[Runde]}`;
    pgKarteiKarteRS.querySelector('h3').textContent = `${PlayGround_Cards_RS[Runde]}`;

    CardsOfMaxCardstext.textContent = `0/${Karteikarten[`${stackLocation}`].vs.length}`;

    //Checks if the front or the back should be shown as default
    CardView();

    pgShowCardsButton.style.display = 'flex';

    pgKannIchButton.style.display = 'none';
    pgWiederhohlenButton.style.display = 'none';
    pgNochmalButton.style.display = 'none';
    pgSpaeterButton.style.display = 'none';

    pgKarteiKarteVS.style.display = 'flex';
    pgKarteiKarteRS.style.display = 'flex';

    stop_Timer();//Timer function of 'timer.js' file
    clear_Timer();//Timer function of 'timer.js' file
};

function ExitGame() {
    if(Runde < Karteikarten[`${stackLocation}`].vs.length || EndScreen_Boolean == true) {
    
        PlayGround.style.display = 'none';
        darkContainer.style.display = 'none';

        pg_ModeOverview.style.display = 'flex';
        pg_MainContent.style.display = 'none';
        pg_header_ini_Wrapper.style.display = 'flex';
        pg_navHeader.style.display = 'none';

        GameEnd = false;
        PlayMode = false;

        pgKarteikarte.style.cursor = 'pointer';

        stop_Timer();//Timer function of 'timer.js' file
        clear_Timer();//Timer function of 'timer.js' file
    }; 
}

//When user presses the button "Kann Ich" wird die nächste Karte vom Stapel angezeigt
function ShowNextCard() {
    if(Runde == Karteikarten[`${stackLocation}`].vs.length - 1) {//Checks if this is the last card of array

        EndScreen_Boolean = true;

        //HTML Counter shows the reps 
        CardsOfMaxCardstext.textContent = `${Karteikarten[`${stackLocation}`].vs.length}/${Karteikarten[`${stackLocation}`].vs.length}`;

        ShowEndText();
        ShowOptionsAfterGame();

        stop_Timer();//Timer function of 'timer.js' file
        save_UserReps(ZuWiederhohlen)//save data for analysis function of 'timer.js' file

    }  else {
        Runde++;

        pgKarteiKarteVS.querySelector('h3').textContent = PlayGround_Cards_VS[Runde];
        pgKarteiKarteRS.querySelector('h3').textContent = PlayGround_Cards_RS[Runde];
    
        pgKannIchButton.style.display = 'none';
        pgWiederhohlenButton.style.display = 'none';
    
        if (!UntenSichtbar_Boolean) {
            pgKarteiKarteRS.style.color = 'rgba(255,255,255,0)';
            pgKarteiKarteVS.style.color = 'var(--front-color)';
        } else {
            pgKarteiKarteRS.style.color = 'var(--front-color)';
            pgKarteiKarteVS.style.color = 'rgba(255,255,255,0)';
        };

        //HTML Counter shows the reps 
        CardsOfMaxCardstext.textContent = `${Runde}/${Karteikarten[`${stackLocation}`].vs.length}`;

        pgObenSichtbarDiv.style.display = 'none';
        pgUntenSichtbarDiv.style.display = 'none';
    };
};

function ShowEndText() {
    GameEnd = true;

    pgKarteiKarteVS.style.display = 'none';
    pgKarteiKarteRS.style.display = 'none';
    
    let h3 = document.createElement('h3');
    let p = document.createElement('p');

    //style p
    p.style.marginTop = '0';
    p.style.fontWeight = '600';

    let AfterGameText = document.createTextNode(`Great that you are continuing your education!    -    You have to repeat ${ZuWiederhohlen} cards!`);
    let underText = document.createTextNode(`Your Time ${playTimer.textContent}`);

    h3.appendChild(AfterGameText);
    p.appendChild(underText);

    pgKarteikarte.appendChild(h3);
    pgKarteikarte.appendChild(p);

    if (GameEnd == true) {
        pgKarteikarte.style.cursor = 'default';
    };

    stop_Timer();//Timer function of 'timer.js' file
};

function ShowOptionsAfterGame() {
    pgKannIchButton.style.display = 'none';
    pgWiederhohlenButton.style.display = 'none';

    pgNochmalButton.style.display = 'block';
    pgSpaeterButton.style.display = 'block';

    pgNochmalButton.style.display = 'block'
    pgSpaeterButton.style.display = 'block'

    pgShowCardsButton.style.display = 'flex';

};

//Defines Value for Array and calls shuffle function to shuffle array
function DefineValueForStackArray() {
    PlayGround_Cards_VS = [];
    PlayGround_Cards_RS = [];

    for (i of Karteikarten[`${stackLocation}`].vs) {
        PlayGround_Cards_VS.push(i);
    };
    for (i of Karteikarten[`${stackLocation}`].vr) {
        PlayGround_Cards_RS.push(i);
    };

    shuffle(PlayGround_Cards_VS, PlayGround_Cards_RS);
};

//Function which shuffles two arrays
function shuffle(obj1, obj2) {
    var index = obj1.length;
    var rnd, tmp1, tmp2;
  
    while (index) {
      rnd = Math.floor(Math.random() * index);
      index -= 1;
      tmp1 = obj1[index];
      tmp2 = obj2[index];
      obj1[index] = obj1[rnd];
      obj2[index] = obj2[rnd];
      obj1[rnd] = tmp1;
      obj2[rnd] = tmp2;
    };
};