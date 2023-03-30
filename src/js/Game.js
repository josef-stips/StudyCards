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

let lastExecutionTime = 0;
//This happens when user is in write mode and he enters his ansewer
WriteMode_AcceptUserAnswer_btn.addEventListener('keyup' , (event) => {
  //Sends user text 
  //playground write mode
    if (event.which == 13) {
    // Überprüfen Sie, ob genügend Zeit vergangen ist, seit der Code zuletzt ausgeführt wurde
    const now = Date.now();
    if (now - lastExecutionTime > 1300) {
    // Aktualisieren Sie die letzte Ausführungszeit auf die aktuelle Zeit
    lastExecutionTime = now;

    event.preventDefault();

    window.App.SendStringToMain(pgKarteiKarteRS.querySelector('h3').textContent, input3.textContent)

    input3.textContent = null;

    //Waits till all things in back-end are done
    let WaitToFinish = setInterval(() => {

        //This function from "preload.js" returns an array with the the case if the users answer is correct and a color
        //if result[0] = false it means that the users answer is correct and if it's true it's uncorrect
        let result = window.App.updateRepeatState();

        if (GameEnd == false) {
            PlayModeIsActive();
        };

        //Animation
        //result[1] is the color that gets returned in the function that is saved as the variable "result"
        gsap.to(pgKarteiKarteRS, {duration: 0.10, color: result[1], onComplete: () => {

            let WaitForAnimationAndContinue = setInterval(() => {
                CardView();
                SeeCard(result[0]);

                clearInterval(WaitForAnimationAndContinue);
            }, 1300)
        }});

        clearInterval(WaitToFinish);
        
            }, 100);
        };
    };
});

//Configure all thinks to Classic Mode
const ToClassicMode = () => {
    pgKarteiKarteVS.style.display = 'flex';
    pgKarteiKarteRS.style.display = 'flex';

    pg_writeField.parentElement.style.display = 'none';
    connect_cards_area.style.display = 'none';
};

//Configure all thinks to Write Mode
const ToWriteMode = () => {
    pg_writeField.parentElement.style.display = 'block';
    pgKarteiKarteVS.style.display = 'flex';
    pgKarteiKarteRS.style.display = 'flex';
    WriteMode_AcceptUserAnswer_btn.focus();

    connect_cards_area.style.display = 'none';
};

//Configure all thinks to Multiple Choice Mode
const ToMultipleMode = () => {
    pg_writeField.parentElement.style.display = 'none';
    connect_cards_area.style.display = 'none';

    pgKarteiKarteVS.style.display = 'flex';
    pgKarteiKarteRS.style.display = 'flex';
};

//Configure all thinks to Connect Mode
const ToConnectMode = () => {
    pg_writeField.parentElement.style.display = 'none';
    pgKarteiKarteVS.style.display = 'none';
    pgKarteiKarteRS.style.display = 'none';

    connect_cards_area.style.display = 'flex';

    pgKarteikarte.style.cursor = 'default';

    //Creates all Cards for the Connect Mode 
    //CM = Connect Mode 
    CM_createCards();
};

//Creates Cards for the connect mode 
function CM_createCards() {
    let FrontCards = Karteikarten[`${stackLocation}`].vs;
    let BackCards = Karteikarten[`${stackLocation}`].vr;

    ConnectMode_FrontCards.textContent = null;
    ConnectMode_BackCards.textContent = null;

    //Build for front cards
    for (const f in FrontCards) {
        //Create li Element
        let text = document.createTextNode(FrontCards[f]);
        let li = document.createElement('li');

        //Sets attributes and stuff
        li.setAttribute(`FrontCard_id` , f);
        li.addEventListener('click' , function a(e) {
            e.stopPropagation();

            CM_UserSelect_FrontCard(this , this.textContent);
        });

        //Add to Document (ul)
        li.appendChild(text);
        ConnectMode_FrontCards.appendChild(li);
    };

    //Build for back cards
    for (const b in BackCards) {
        //Create li Element
        let text = document.createTextNode(BackCards[b]);
        let li = document.createElement('li');

        //Sets attributes and stuff
        li.setAttribute(`BackCard_id` , b);
        li.addEventListener('click' , function a(e) {
            e.stopPropagation();

            CM_UserSelect_BackCard(this , this.textContent);
        });

        //Add to Document (ul)
        li.appendChild(text);
        ConnectMode_BackCards.appendChild(li);
    };

    //shuffle document elements
    let front_el = [...ConnectMode_FrontCards.children];
    let back_el = [...ConnectMode_BackCards.children];

    shuffleSingle(front_el);
    shuffleSingle(back_el);

    ConnectMode_FrontCards.textContent = null;
    ConnectMode_BackCards.textContent = null;

    for (let i = 0; i < front_el.length; i++) {
        ConnectMode_FrontCards.appendChild(front_el[i]);  
    };
    for (let i = 0; i < back_el.length; i++) {
        ConnectMode_BackCards.appendChild(back_el[i]);  
    };

    CardsOfMaxCardstext.textContent = `${curr_SelPairs}/${Karteikarten[`${stackLocation}`].vs.length}`;
};

//When user selects cards the text gets saved here
//The user can select only 2 cards each
let CM_selected_cards = {
    'vs':{'card': [], 'name': [], 'index': []},
    'rs':{'card': [], 'name': [], 'index': []} 
};

// When user selects a front card in the Connect Mode 
function CM_UserSelect_FrontCard(card , name) { // card : li element ; name : card text
    //Changes the style of selected card
    if(CM_selected_cards.vs.card.length == 0) {
        CM_changeStyleOfCard(card);

        let li_el = document.querySelectorAll('#FrontCards-ul li');
        // Find the index of the selected element
        const card_index = Array.prototype.indexOf.call(li_el, card);
    
        // adds card to Object
        if(CM_selected_cards.vs.card.length == 0) {
            //pushes data from card in Object
            CM_selected_cards.vs.card.push(card);    
            CM_selected_cards.vs.name.push(name); 
            CM_selected_cards.vs.index.push(card_index);
    
            UserSelectedTwoCards(card);
        };
    } else {
        CM_select_new_card('vs' , 'Front' , card , name); // selects new card
    };
};

// When user selects a front card in the Connect Mode 
function CM_UserSelect_BackCard(card , name) { // card : li element ; name : card text
    //Changes the style of selected card
    if(CM_selected_cards.rs.card.length == 0) {
        CM_changeStyleOfCard(card);

        let Bli_el = document.querySelectorAll('#BackCards-ul li');
        // Find the index of the selected element
        const card_index = Array.prototype.indexOf.call(Bli_el, card);
    
        // adds card to Object
        if(CM_selected_cards.rs.card.length == 0) {
            //pushes data from card in Object
            CM_selected_cards.rs.card.push(card);    
            CM_selected_cards.rs.name.push(name); 
            CM_selected_cards.rs.index.push(card_index);
    
            UserSelectedTwoCards(card);
        };
    } else {
        CM_select_new_card('rs', 'Back' , card , name); // selects new card
    };
};

// select new card when a card is already selected
function CM_select_new_card(side,doc_side , card , name) { // side: front/back ; doc_side: which side in the document
    let li_el = document.querySelectorAll(`#${doc_side}Cards-ul li`);
    // Find the index of the selected element
    const card_index = Array.prototype.indexOf.call(li_el, card);

    // Old card gets default style
    CM_selected_cards[side].card[0].style.border = '2px dashed rgb(128 , 128 , 128)';

    // deletes previous card
    CM_selected_cards[side].card.length = 0;    
    CM_selected_cards[side].name.length = 0; 
    CM_selected_cards[side].index.length = 0;

    //adds new card
    CM_selected_cards[side].card.push(card);    
    CM_selected_cards[side].name.push(name); 
    CM_selected_cards[side].index.push(card_index);

    // New card gets "selected" style
    CM_selected_cards[side].card[0].style.border = '2px solid rgb(65, 105, 187)';
};

//If the case is true this function block grabs the current seleted cards from the user
//Then it looks if the pair is matching
//If not the border color of both elements gets red else it gets green and it gets removed from the html document
function UserSelectedTwoCards(card) {
    if (CM_selected_cards.vs.card.length == 1 && CM_selected_cards.rs.card.length == 1) {
        let solution = CM_grab_CardPair();

        //all returns from "CM_grab_CardPair" function
        let curr_CardLength = solution[0];
        let oppo_UserSel_frontCard = solution[1];
        let UserSel_backCard = solution[2];
        let html_front_card = solution[3];
        let html_back_card = solution[4];

        // Check if user got the right pair of front and back card
        if (oppo_UserSel_frontCard == UserSel_backCard) { // If yes
            CM_removePair(html_front_card , html_back_card);

            //Border color of both selected cards gets green
            html_front_card.style.border = '2px solid rgb(52, 143, 52)';
            html_back_card.style.border = '2px solid rgb(52, 143, 52)';

            //If the last pair was selected this function does stuff
            CM_endGame(curr_CardLength);

            curr_SelPairs++;
            CardsOfMaxCardstext.textContent = `${curr_SelPairs}/${Karteikarten[`${stackLocation}`].vs.length}`;

        } else { // If not
            CM_selected_wrongPair_ani(html_front_card , html_back_card);

            //If the last pair was selected this function does stuff
            CM_endGame(curr_CardLength);

            ZuWiederhohlen++;
        };
        CM_ClearsArrays();
    };  
};

function CM_grab_CardPair() {
    // Grab both elements of the document which the user selected
    //index of li element
    let front_card_index = [...ConnectMode_FrontCards.children].indexOf(CM_selected_cards.vs.card[0]);
    let back_card_index = [...ConnectMode_BackCards.children].indexOf(CM_selected_cards.rs.card[0]);

    //the real li element in the document
    let html_front_card = ConnectMode_FrontCards.children[front_card_index];
    let html_back_card = ConnectMode_BackCards.children[back_card_index];

    //Check if the card pair is matching
    //All Cards
    let AllCards = CM_ALlCards();

    //user selected cards
    //If these cards are the same the user got a correct pair
    let oppo_UserSel_frontCard = AllCards[CM_selected_cards.vs.name[0]]; // This shows the back of the front card the user selected
    let UserSel_backCard;

    // Find x
    for(const propertyName in AllCards) {
        if (AllCards[propertyName] == CM_selected_cards.rs.name[0]) {
            UserSel_backCard = AllCards[propertyName];
        };
    };

    //Amount of left front cards
    let curr_CardLength = [...ConnectMode_FrontCards.children].length;

    return [curr_CardLength , oppo_UserSel_frontCard , UserSel_backCard , html_front_card , html_back_card];
};

//Changes style of selected card
function CM_changeStyleOfCard(card) {
    /* grün : rgb(52, 143, 52) , grau : rgb(128 , 128 , 128) , blau : rgb(65, 105, 187)*/

    //Change color to blue
    card.style.border = '2px solid rgb(65, 105, 187)';
};

// User selected wrong card pair animation
function CM_selected_wrongPair_ani(html_front_card , html_back_card) {
    //Border color of both selected cards gets red
    html_front_card.style.border = '2px solid red';
    html_back_card.style.border = '2px solid red';

    let ani = setInterval(() => {
        html_front_card.style.border = '2px dashed rgb(128, 128, 128)';
        html_back_card.style.border = '2px dashed rgb(128, 128, 128)';

        clearInterval(ani);
        let ani2 = setInterval(() => {
            html_front_card.style.border = '2px solid red';
            html_back_card.style.border = '2px solid red';

            clearInterval(ani2);
            let ani3 = setInterval(() => {
                html_front_card.style.border = '2px dashed rgb(128, 128, 128)';
                html_back_card.style.border = '2px dashed rgb(128, 128, 128)';

                clearInterval(ani3);
            }, 200);
        }, 100);
        clearInterval(ani);
    }, 200);
};

//Clears cards arrays so the user can select his next cards
function CM_ClearsArrays() { // Clears arrays
    //Front Card
    CM_selected_cards.vs.card.length = 0;    
    CM_selected_cards.vs.name.length = 0; 
    CM_selected_cards.vs.index.length = 0;
    //Back Card
    CM_selected_cards.rs.card.length = 0;    
    CM_selected_cards.rs.name.length = 0; 
    CM_selected_cards.rs.index.length = 0;
};

//Create Object with all current cards in Connect Mode 
function CM_ALlCards() {
    let CM_ALlCards = {};

    let FrontCards = Karteikarten[`${stackLocation}`].vs;
    let BackCards = Karteikarten[`${stackLocation}`].vr;

    //Push everything in "CM_ALlCards" Object
    for (let i = 0; i < FrontCards.length; i++) {
        // Einer Front Karte wird jeweils eine Hinter Karte zugeteilt 
        const el = FrontCards[i];
        const backCard = BackCards[i];

        CM_ALlCards[el] = [];
        CM_ALlCards[el].push(backCard);
    };

    return CM_ALlCards;
};

// Removes a card selected card pair 
function CM_removePair(front , back) {
    //Waits a little bit and removes the cards
    let waiter = setInterval(() => {
        ConnectMode_FrontCards.removeChild(front);
        ConnectMode_BackCards.removeChild(back);

        clearInterval(waiter);
    }, 900);
};

// deselects card by clicking just somewhere in the card area
function CM_deselect_Card() {
    if(CM_selected_cards.vs.card.length != 0) {
        // Old card gets default style
        CM_selected_cards['vs'].card[0].style.border = '2px dashed rgb(128 , 128 , 128)';
    };
    if(CM_selected_cards.rs.card.length != 0) {
        // Old card gets default style
        CM_selected_cards['rs'].card[0].style.border = '2px dashed rgb(128 , 128 , 128)';
    };

    CM_ClearsArrays();
};

//Do things if the last card pair was selected
function CM_endGame(curr_CardLength) {
    if (curr_CardLength <= 1) {
        EndScreen_Boolean = true;

        //HTML Counter shows the reps 
        CardsOfMaxCardstext.textContent = `${Karteikarten[`${stackLocation}`].vs.length}/${Karteikarten[`${stackLocation}`].vs.length}`;
        connect_cards_area.style.display = 'none';

        //ConnectMode = true
        stop_Timer();//Timer function of 'timer.js' file
        save_UserTime(playTimer.textContent);// Save Timer function of 'timer.js'
        save_UserReps(ZuWiederhohlen);//save data for analysis function of 'timer.js' file

        ShowEndText();
        ShowOptionsAfterGame();
    };
};