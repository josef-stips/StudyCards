// Creates all cards
function MM_createCards() {
    let FrontCards = Karteikarten[stackLocation].vs;
    let BackCards = Karteikarten[stackLocation].vr;

    multipleChoice_front.textContent = null;
    multipleChoice_back.textContent = null;

    // Random Intenger between 2 and 5
    let rndInt = randomInt(2, 4);

    // creates single card
    createSingleCard(FrontCards, 0); // 0: which card in the array above should be displayed. 0 = index

    // creates multiple back cards 
    createMultipleCards(BackCards, 0, rndInt); // 3: How many backcards should be displayed. 3 = amount

    console.log(FrontCards, BackCards)
};

// Creates single card (front card)
function createSingleCard(FrontCards, count) { // the count says which card needs to be displayed
    multipleChoice_front.textContent = null;

    if (FrontCards[count] != undefined) {
        let li = document.createElement('li');
        let text = document.createTextNode(FrontCards[count]);

        li.className = 'MultipleChoice_frontCard';
        li.appendChild(text);
        multipleChoice_front.appendChild(li);
    };
};

// creates multiple back cards
function createMultipleCards(BackCards, start, amount) {
    multipleChoice_back.textContent = null;

    // BackCards: Array with cards; start: At which index in the array it should create a card; amount: How many it should create
    for (let i = start; i < amount; i++) {
        if (BackCards[i] != undefined) {
            const e = BackCards[i]; // card text

            let li = document.createElement('li');
            let text = document.createTextNode(e);

            li.addEventListener('click', function a(el) {
                el.stopPropagation();

                select_backCard(this, this.textContent);
            });

            li.appendChild(text);
            multipleChoice_back.appendChild(li);
        };
    };

    //shuffle document elements
    let back_el = [...multipleChoice_back.children];
    shuffleSingle(back_el);

    multipleChoice_back.textContent = null;

    for (let i = 0; i < back_el.length; i++) {
        multipleChoice_back.appendChild(back_el[i]);
    };
};

//How often the user selected a card
let selection_amount = 1;

// Checks if the "right answer" animation finished
let greenAni = false;

//When the user selects a back card
function select_backCard(card, cardText) {
    //Get all cards
    let AllCards = CM_ALlCards();

    // displayed card the user need to translate
    let curr_frontCard = multipleChoice_front.children[0].textContent;
    // The solution
    let right_card = AllCards[curr_frontCard][0];
    // The card that the user selected
    let selected_card = cardText;

    // Check if the right card is equal to the user selected card
    if (right_card == selected_card && greenAni == false) {
        card.style.border = '2px solid rgb(52, 143, 52)';

        nextCard(multipleChoice_front.children[0], card);

    } else {
        // Animation
        let replaceEL = document.createElement('div');
        CM_selected_wrongPair_ani(replaceEL, card)

        ZuWiederhohlen++;
    };
};

// Show next card
function nextCard(frontCard, backCard) {
    greenAni = true;

    let CardIndex = Karteikarten[stackLocation].vs.indexOf(frontCard.textContent);
    console.log(CardIndex, frontCard)

    let waiter = setInterval(() => {
        backCard.style.border = '2px solid rgb(128 , 128 , 128)';

        if (selection_amount != Karteikarten[stackLocation].vs.length) {
            // Random Intenger between 2 and 5
            let rndInt = randomInt(2, 4);

            createSingleCard(Karteikarten[stackLocation].vs, CardIndex + 1);
            createMultipleCards(Karteikarten[stackLocation].vr, CardIndex, rndInt + CardIndex);

        } else {
            EndScreen();
        };

        greenAni = false;

        if (selection_amount != Karteikarten[stackLocation].vs.length) selection_amount++;
        CardsOfMaxCardstext.textContent = `${selection_amount}/${Karteikarten[stackLocation].vs.length}`;

        clearInterval(waiter);
    }, 500);
};

function EndScreen() {
    EndScreen_Boolean = true;

    //HTML Counter shows the reps 
    CardsOfMaxCardstext.textContent = `${Karteikarten[`${stackLocation}`].vs.length}/${Karteikarten[`${stackLocation}`].vs.length}`;
    multipleChoice_area.style.display = 'none';

    stop_Timer();//Timer function of 'timer.js' file
    save_UserTime(playTimer.textContent);// Save Timer function of 'timer.js'
    save_UserReps(ZuWiederhohlen);//save data for analysis function of 'timer.js' file

    ShowEndText();
    ShowOptionsAfterGame();
};