// curr_SelPairs is in the Game.js file

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
        li.setAttribute(`FrontCard_id`, f);
        li.addEventListener('click', function a(e) {
            e.stopPropagation();

            CM_UserSelect_FrontCard(this, this.textContent);
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
        li.setAttribute(`BackCard_id`, b);
        li.addEventListener('click', function a(e) {
            e.stopPropagation();

            CM_UserSelect_BackCard(this, this.textContent);
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