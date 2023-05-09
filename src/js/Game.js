let WriteMode_AcceptUserAnswer_btn = document.getElementById('input3');

//While Playing
let PlayMode = false; //Prüft sich der Spieler gerade ab?
let Runde = 0; //Bei Welcher Karte befindet sich der Spieler gerade?
let UntenSichtbar_Boolean = false; //Wird die Vorderseite oder die Rückseite zum Abfragen benutzt?
let ZuWiederhohlen = 0; //Wie viele Karten muss der Spieler am Ende des Spiels wiederhohlen?
let EndScreen_Boolean = false; //Wurde schon das Ende des Spiels also der End-Screen erreicht?
let GameEnd = false; //Is nur true wenn man sich im EndScreen des Spiels befindet
let redo_game = false; //Is the player in the redo game to retry his mistakes?

//That functions are called while the game
var count_timer;

let redo_game_counter = 0;
let RedoGame_CardsToRepeat = {};

//amount of already selected pairs in Connect Mode
let curr_SelPairs = 0;

//
setInterval(() => {
    if (CurrMode == 'Multiple Choice Mode' || CurrMode == 'Connect Mode') {
        pg_ViewList.children[0].style.color = 'grey';
        pg_ViewList.children[1].style.color = 'grey';
        pg_showCardAbove_btn.removeEventListener('click', ShowViewAboveInPG);
        pg_showCardBelow_btn.removeEventListener('click', ShowViewBelowInPG);
        pg_ShowCardView_title.style.color = 'grey';
        selectCardViewTitle.style.color = 'grey';

    } else {
        pg_ViewList.children[0].style.color = 'white';
        pg_ViewList.children[1].style.color = 'white';
        pg_showCardAbove_btn.addEventListener('click', ShowViewAboveInPG);
        pg_showCardBelow_btn.addEventListener('click', ShowViewBelowInPG);
        pg_ShowCardView_title.style.color = 'white';
        selectCardViewTitle.style.color = 'white';
    };
}, 1);

function ClosePlayGround() {
    redo_game_counter = 0;
    RedoGame_CardsToRepeat = {};

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
            SwitchToMode();
        };
    }, 1000);
};

function OpenGame() {
    redo_game_counter++;

    RedoGame_CardsToRepeat[`Game_0${redo_game_counter}`] = { 'vs': [], 'rs': [] };

    pg_countdown_wrapper.style.display = 'none';
    pg_MainContent.style.display = 'block';
    pg_header_ini_Wrapper.style.display = 'none';
    pg_navHeader.style.display = 'block';
    playTimer.style.color = 'white';

    pgUntenSichtbarDiv.style.display = 'none';
    pgObenSichtbarDiv.style.display = 'none';
    pgKannIchButton.style.display = 'none';
    pgWiederhohlenButton.style.display = 'none';
    pg_countdown_wrapper.style.display = 'none';
    extra_retry_btn.style.display = 'none';

    PlayModeIsActive();
    start_Timer(); //Timer function of 'timer.js' file

    //Defines value for two arrays with copied values from the users first stack as default
    DefineValueForStackArray();

    pgKarteiKarteVS.querySelector('h3').textContent = PlayGround_Cards_VS[0];
    pgKarteiKarteRS.querySelector('h3').textContent = PlayGround_Cards_RS[0];

    CardsOfMaxCardstext.textContent = `${Runde + 1}/${Karteikarten[`${stackLocation}`].vs.length}`;

    pgKannIchButton.style.display = 'none';
    pgWiederhohlenButton.style.display = 'none';

    //If User clicked "view below" button or "view_above" button.
    CardView();

    PlayMode = true;
};

//reloads the Game
function reloadGame() {
    redo_game_counter = 0;
    RedoGame_CardsToRepeat = {};
    curr_SelPairs = 0;

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
    extra_retry_btn.style.display = 'none';

    GameEnd = false;
    PlayMode = false;

    clearInterval(count_timer);
    StartGameCountDown();
};

function CardView() {
    pgKarteiKarteRS.style.transition = 'none';
    if (UntenSichtbar_Boolean) {
                
        pgKarteiKarteRS.style.color = 'var(--front-color)';
        pgKarteiKarteVS.style.color = 'rgba(255,255,255,0)';

    } else {
        pgKarteiKarteRS.style.color = 'rgba(255,255,255,0)';
        pgKarteiKarteVS.style.color = 'var(--front-color)';
    };
};

function PlayModeIsActive() {
    PlayMode = true;

    pgKarteiKarteRS.style.color = 'var(--front-color)';
    pgKarteiKarteVS.style.color = 'var(--front-color)';
    pgShowCardsButton.style.display = 'none';

    //If current mode isn't write mode
    if(CurrMode != Object.keys(UserPlayModes)[1]) {
        pgKannIchButton.style.display = 'block';
        pgWiederhohlenButton.style.display = 'block';
    };

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
    redo_game = false;
    Runde = 0;
    //If user is in connect mode
    curr_SelPairs = 0;

    console.log(PlayGround_Cards_RS, PlayGround_Cards_VS)

    if(PlayGround_Cards_VS && PlayGround_Cards_RS) {
        pgKarteiKarteVS.querySelector('h3').textContent = `${PlayGround_Cards_VS[Runde]}`;
        pgKarteiKarteRS.querySelector('h3').textContent = `${PlayGround_Cards_RS[Runde]}`;
    };

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

        extra_retry_btn.style.display = 'none';

        GameEnd = false;
        PlayMode = false;
        redo_game = false;

        pgKarteikarte.style.cursor = 'pointer';

        stop_Timer();//Timer function of 'timer.js' file
        clear_Timer();//Timer function of 'timer.js' file
    }; 
}

//Start redo game with cards to redo 
function StartRedoGame() {
    redo_game_counter++;

    RedoGame_CardsToRepeat[`Game_0${redo_game_counter}`] = {'vs': [] , 'rs': [] };

    PlayModeIsNotActive();

    pgKarteikarte.style.cursor = 'pointer';

    pg_countdown_wrapper.style.display = 'none';
    pg_MainContent.style.display = 'block';
    pg_header_ini_Wrapper.style.display = 'none';
    pg_navHeader.style.display = 'block';
    pgKannIchButton.style.display = 'none';
    pgWiederhohlenButton.style.display = 'none';
    pg_countdown_wrapper.style.display = 'none';
    extra_retry_btn.style.display = 'none'; 

    if(CurrMode == Object.keys(UserPlayModes)[0]) { // Classic Mode
        pgUntenSichtbarDiv.style.display = 'block';
        pgObenSichtbarDiv.style.display = 'block';

        ToClassicMode();

    } else if(CurrMode == Object.keys(UserPlayModes)[1]) { // Write Mode
        ToWriteMode();

    } else if(CurrMode == Object.keys(UserPlayModes)[2]) { // Multiple Choice Mode
        ToMultipleMode();

    } else if(CurrMode == Object.keys(UserPlayModes)[3]) { // Connect Mode
        ToConnectMode();
    };

    GameEnd = false;
    PlayMode = false;
    redo_game = true;

    pgKarteiKarteVS.querySelector('h3').textContent = RedoGame_CardsToRepeat[`Game_0${redo_game_counter - 1}`].vs[0];
    pgKarteiKarteRS.querySelector('h3').textContent = RedoGame_CardsToRepeat[`Game_0${redo_game_counter - 1}`].rs[0];

    CardsOfMaxCardstext.textContent = `${Runde + 1}/${RedoGame_CardsToRepeat[`Game_0${redo_game_counter - 1}`].vs.length}`;

    console.log('Gibt es')

    CardView();

    playTimer.style.color = 'rgba(0,0,0,0)';

    console.log(redo_game_counter)
};

//When user presses the button "Kann Ich" wird die nächste Karte vom Stapel angezeigt
function ShowNextCard() {
    //This current Value of this variable is just a placeholder here it gets overwritten when the user wants to repeat his missed cards
    let MistakeLength = RedoGame_CardsToRepeat[`Game_0${redo_game_counter}`].vs.length;

    if(redo_game) {
        MistakeLength = RedoGame_CardsToRepeat[`Game_0${redo_game_counter - 1}`].vs.length;
    };

    console.log(RedoGame_CardsToRepeat);

    if(Runde == Karteikarten[`${stackLocation}`].vs.length - 1 && redo_game == false ||
        Runde == MistakeLength - 1 && redo_game == true) {//Checks if this is the last card of array

        EndScreen_Boolean = true;

        //HTML Counter shows the reps 
        if(!redo_game) {
            CardsOfMaxCardstext.textContent = `${Karteikarten[`${stackLocation}`].vs.length}/${Karteikarten[`${stackLocation}`].vs.length}`;

            stop_Timer();//Timer function of 'timer.js' file
            save_UserReps(ZuWiederhohlen)//save data for analysis function of 'timer.js' file

        } else {
            CardsOfMaxCardstext.textContent =`${RedoGame_CardsToRepeat[`Game_0${redo_game_counter - 1}`].vs.length}/${RedoGame_CardsToRepeat[`Game_0${redo_game_counter - 1}`].vs.length}`;
        };

        ShowEndText();
        ShowOptionsAfterGame();

    }  else {
        Runde++;
    
        pgKannIchButton.style.display = 'none';
        pgWiederhohlenButton.style.display = 'none';
    
        CardView();

        if (redo_game == false) {
            //HTML Counter shows the reps 
            CardsOfMaxCardstext.textContent = `${Runde + 1}/${Karteikarten[`${stackLocation}`].vs.length}`;

            pgKarteiKarteVS.querySelector('h3').textContent = PlayGround_Cards_VS[Runde];
            pgKarteiKarteRS.querySelector('h3').textContent = PlayGround_Cards_RS[Runde];

        } else {
            console.log(redo_game_counter)

            CardsOfMaxCardstext.textContent = `${Runde + 1}/${RedoGame_CardsToRepeat[`Game_0${redo_game_counter - 1}`].vs.length}`;

            pgKarteiKarteVS.querySelector('h3').textContent = RedoGame_CardsToRepeat[`Game_0${redo_game_counter - 1}`].vs[Runde];
            pgKarteiKarteRS.querySelector('h3').textContent = RedoGame_CardsToRepeat[`Game_0${redo_game_counter - 1}`].rs[Runde];
        };

        pgObenSichtbarDiv.style.display = 'none';
        pgUntenSichtbarDiv.style.display = 'none';
    };
};

function ShowEndText() {
    GameEnd = true;

    pgKarteiKarteVS.style.display = 'none';
    pgKarteiKarteRS.style.display = 'none';

    console.table(RedoGame_CardsToRepeat[`Game_0${redo_game_counter}`])

    if(RedoGame_CardsToRepeat[`Game_0${redo_game_counter}`].vs.length != 0) {
        
        extra_retry_btn.style.display = 'block';
    } else extra_retry_btn.style.display = 'none';
    
    let h3 = document.createElement('h3');
    let p = document.createElement('p');

    //style p
    p.style.marginTop = '0';
    p.style.fontWeight = '600';

    if(!redo_game && RedoGame_CardsToRepeat[`Game_0${redo_game_counter}`].vs.length > 0) {
        var AfterGameText = document.createTextNode(`Great that you are continuing your education! - You have to repeat ${ZuWiederhohlen} cards!`);
        var underText = document.createTextNode(`Your Time ${playTimer.textContent}`);

    } else if(redo_game == true && RedoGame_CardsToRepeat[`Game_0${redo_game_counter}`].vs.length > 0) {

        var AfterGameText = document.createTextNode(`Great that you are continuing your education! - 
        You still have to repeat ${RedoGame_CardsToRepeat[`Game_0${redo_game_counter}`].vs.length} cards!`);

        var underText = document.createTextNode(`Keep going!`);
    };

    if(redo_game == true && RedoGame_CardsToRepeat[`Game_0${redo_game_counter}`].vs.length <= 0 || 
        !redo_game && RedoGame_CardsToRepeat[`Game_0${redo_game_counter}`].vs.length <= 0) {

        var AfterGameText = document.createTextNode(`Congrats you learned all cards!`);

        var underText = document.createTextNode(``);
    };

    h3.appendChild(AfterGameText);
    p.appendChild(underText);

    pgKarteikarte.appendChild(h3);
    pgKarteikarte.appendChild(p);

    if (GameEnd == true) {
        pgKarteikarte.style.cursor = 'default';
    };

    if(!redo_game) stop_Timer();//Timer function of 'timer.js' file
};

function ShowOptionsAfterGame() {
    pgKannIchButton.style.display = 'none';
    pgWiederhohlenButton.style.display = 'none';

    pgNochmalButton.style.display = 'block';
    pgSpaeterButton.style.display = 'block';

    pgNochmalButton.style.display = 'block'
    pgSpaeterButton.style.display = 'block'

    pgShowCardsButton.style.display = 'flex';

    pg_writeField.parentElement.style.display = 'none';
};

//User clicks whether he needs to repeat or not
//Event on 'DomEvents.js' l.527-535 and 'ShortCuts.js' l.63
function SeeCard(clicked_repeat) {
    if(redo_game == false) {
        switch (clicked_repeat) {
            case true:
                RedoGame_CardsToRepeat[`Game_0${redo_game_counter}`].vs.push(PlayGround_Cards_VS[Runde]);
                RedoGame_CardsToRepeat[`Game_0${redo_game_counter}`].rs.push(PlayGround_Cards_RS[Runde]);
    
                ZuWiederhohlen++;
                ShowNextCard();

                console.log('user answer is false')
                break;
        
            case false:
                ShowNextCard();

                console.log("user answer was true")
                break;
        };
    } else {
        switch (clicked_repeat) {
            case true:

                RedoGame_CardsToRepeat[`Game_0${redo_game_counter}`].vs.push(RedoGame_CardsToRepeat[`Game_0${redo_game_counter - 1}`].vs[Runde]);
                RedoGame_CardsToRepeat[`Game_0${redo_game_counter}`].rs.push(RedoGame_CardsToRepeat[`Game_0${redo_game_counter - 1}`].rs[Runde]);

                ShowNextCard();
                break;
        
            case false:
                ShowNextCard();
                break;
        };
    };
    console.table(RedoGame_CardsToRepeat)
};

function SwitchToMode() {
    switch (CurrMode) {
        case Object.keys(UserPlayModes)[0]: //Classic Mode

            ToClassicMode();
        break;

        case Object.keys(UserPlayModes)[1]: //Write Mode

            ToWriteMode();
        break;

        case Object.keys(UserPlayModes)[2]: //Multiple Choice Mode

            ToMultipleMode();
        break;

        case Object.keys(UserPlayModes)[3]: //Connect Mode

            ToConnectMode();
        break;
    };
};

//Configure all thinks to Classic Mode
const ToClassicMode = () => {
    pgKarteiKarteVS.style.display = 'flex';
    pgKarteiKarteRS.style.display = 'flex';

    pg_writeField.parentElement.style.display = 'none';

    connect_cards_area.style.display = 'none';
    multipleChoice_area.style.display = 'none';
};

//Configure all thinks to Write Mode
const ToWriteMode = () => {
    pg_writeField.parentElement.style.display = 'block';
    pgKarteiKarteVS.style.display = 'flex';
    pgKarteiKarteRS.style.display = 'flex';
    WriteMode_AcceptUserAnswer_btn.focus();

    connect_cards_area.style.display = 'none';
    multipleChoice_area.style.display = 'none';
};

//Configure all thinks to Multiple Choice Mode
const ToMultipleMode = () => {
    selection_amount = 1;
    CardsOfMaxCardstext.textContent = `1/${Karteikarten[stackLocation].vs.length}`;

    pg_writeField.parentElement.style.display = 'none';
    connect_cards_area.style.display = 'none';
    pgKarteiKarteVS.style.display = 'none';
    pgKarteiKarteRS.style.display = 'none';

    multipleChoice_area.style.display = 'flex';

    MM_createCards();
};

//Configure all thinks to Connect Mode
const ToConnectMode = () => {
    pg_writeField.parentElement.style.display = 'none';
    pgKarteiKarteVS.style.display = 'none';
    pgKarteiKarteRS.style.display = 'none';
    multipleChoice_area.style.display = 'none';

    connect_cards_area.style.display = 'flex';

    pgKarteikarte.style.cursor = 'default';

    //Creates all Cards for the Connect Mode 
    //CM = Connect Mode 
    CM_createCards();
};