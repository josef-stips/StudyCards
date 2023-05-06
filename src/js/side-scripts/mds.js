//All functional code of the middle big pop ups

//when user clicks to a study card in the "copy cards from one stack to the other stack" window 
//The Card gets selected by this function
let selected_cards_int = 0;

function selectSingleIndexCard() {
    let cardList = [...document.getElementsByClassName('AllCardsList_popUp-window')[0].children];

    switch (this.getAttribute('IsSelected')) {

        case 'false':
            //Change Attribute font awesome item
            this.className = "fa-solid fa-x fa-1x";
            this.setAttribute('IsSelected', 'true');

            //Style
            this.style.color = "var(--Font_Is_Selected)";
            this.parentNode.style.backgroundColor = "var(--Card_Is_Selected)";

            this.previousElementSibling.previousElementSibling.style.borderRight = "var(--Font_Is_Selected) solid 1px";
            this.previousElementSibling.previousElementSibling.childNodes[0].style.color = "var(--Font_Is_Selected)";
            this.previousElementSibling.childNodes[0].style.color = "var(--Font_Is_Selected)";

            //Increase selected_cards variable
            selected_cards_int++;

            selectedCards_Counter.textContent = `selected cards: ${selected_cards_int}/${cardList.length}`;

            break;

        case 'true':
            //Change Attribute font awesome item
            this.className = "fa-solid fa-check fa-1x";
            this.setAttribute('IsSelected', 'false');

            //Style
            this.style.color = "var(--front-color)";
            this.parentNode.style.backgroundColor = "";

            this.previousElementSibling.previousElementSibling.style.borderRight = "var(--front-color) solid 1px";
            this.previousElementSibling.previousElementSibling.childNodes[0].style.color = "var(--front-color)";
            this.previousElementSibling.childNodes[0].style.color = "var(--front-color)";

            //Decrease selected_cards variable
            if (selected_cards_int > 0) selected_cards_int--;

            selectedCards_Counter.textContent = `selected cards: ${selected_cards_int}/${cardList.length}`;

            break;
    };
};

//Selects Opposite Cards in the pop up window "copy cards from one stack to the other stack"
function ToggleSelectOppositecards() {
    let cardList = [...document.getElementsByClassName('AllCardsList_popUp-window')[0].children];

    for (let i = 0; i < cardList.length; i++) {
        const el = cardList[i];

        for (let i = 0; i < el.children.length; i++) {
            const e = el.children[i];

            ChangeStyleOfCard(e.querySelector('#Cardmini-SelectionMark'), cardList);
        };
    };
};

//Deselects all selected cards
function DeselectAllCards() {
    let cardList = [...document.getElementsByClassName('AllCardsList_popUp-window')[0].children];

    selected_cards_int = 0;
    selectedCards_Counter.textContent = `selected cards: ${selected_cards_int}/${cardList.length}`;

    for (let i = 0; i < cardList.length; i++) {
        const el = cardList[i];

        for (let i = 0; i < el.children.length; i++) {
            const e = el.children[i];

            e.querySelector('#Cardmini-SelectionMark').setAttribute('Isselected', 'false')

            ResetStyleOfCard(e.querySelector('#Cardmini-SelectionMark'));
        };
    };
};

//Resets the style to default from the selected cards that get deselect by the function above
function ResetStyleOfCard(cell) {
    cell.className = "fa-solid fa-check fa-1x";

    cell.style.color = "var(--front-color)";
    cell.parentNode.style.backgroundColor = "";

    cell.previousElementSibling.previousElementSibling.style.borderRight = "var(--front-color) solid 1px";
    cell.previousElementSibling.previousElementSibling.childNodes[0].style.color = "var(--front-color)";
    cell.previousElementSibling.childNodes[0].style.color = "var(--front-color)";
};

//Toggles the Style of a Card
function ChangeStyleOfCard(cell, cardList) {
    switch (cell.getAttribute('Isselected')) {
        case 'false':

            cell.setAttribute('Isselected', 'true');

            cell.className = "fa-solid fa-x fa-1x";

            cell.style.color = "var(--Font_Is_Selected)";
            cell.parentNode.style.backgroundColor = "var(--Card_Is_Selected)";

            cell.previousElementSibling.previousElementSibling.style.borderRight = "var(--Font_Is_Selected) solid 1px";
            cell.previousElementSibling.previousElementSibling.childNodes[0].style.color = "var(--Font_Is_Selected)";
            cell.previousElementSibling.childNodes[0].style.color = "var(--Font_Is_Selected)";

            //Amount of selected cards is equal to the length of the array with all cards
            selected_cards_int++;
            selectedCards_Counter.textContent = `selected cards: ${selected_cards_int}/${cardList.length}`;
            break;

        case 'true':

            cell.setAttribute('Isselected', 'false');

            cell.className = "fa-solid fa-check fa-1x";

            cell.style.color = "var(--front-color)";
            cell.parentNode.style.backgroundColor = "";

            cell.previousElementSibling.previousElementSibling.style.borderRight = "var(--front-color) solid 1px";
            cell.previousElementSibling.previousElementSibling.childNodes[0].style.color = "var(--front-color)";
            cell.previousElementSibling.childNodes[0].style.color = "var(--front-color)";

            //Amount of selected cards is equal 0
            selected_cards_int--;
            selectedCards_Counter.textContent = `selected cards: ${selected_cards_int}/${cardList.length}`;
            break;
    };
};

//If in the current stack there is no card , this function sets a replacement text
function SetInitialText_TransferCardsWindow() {
    AllCardsListWrapper_PopUp_Wind.innerHTML = `<h2 id='PopUp_Win-iniText'>Add a Card first</h2>`;
};

//If there are no stacks , this function sets a replacement text
function SetInIText_TransferWin() {
    allStacks_table.innerHTML = `<h2 id='PopUp_Win-iniText'>Add a Stack first</h2>`;
    AllCardsListWrapper_PopUp_Wind.innerHTML = `<h2 id='PopUp_Win-iniText'>Add a Card first</h2>`;
};

//Copies the table from the side menu to the pop up window and modifies the copied table
function GetStackTable() {
    let Stacks = SideMenuTable.querySelectorAll('tbody');
    let tbody = document.createElement('tbody');
    let All_trs = [];

    //Copy Stacks from SideMenu to pop up window
    allStacks_table.textContent = null;

    for (const i of Stacks) {
        for (const h of i.childNodes) {
            tbody.appendChild(h.cloneNode(true));
            All_trs.push(h)
        };
    };

    allStacks_table.appendChild(tbody)

    let All_html_trs = [...allStacks_table.children];

    //remove className from all td elements
    for (let i = 0; i < All_html_trs.length; i++) {
        const e = All_html_trs[i];

        for (let i = 0; i < e.children.length; i++) {
            const ele = e.children[i];

            ele.classList.remove(`tableCell`);
            ele.setAttribute('cellisselected', 'false')

            //Adds Eventlistener to cell
            addEventListenerToStackTable(ele);

            //removes padding from first cell
            if (ele.getAttribute('data-table-index') == 1) {
                ele.style.padding = "0 0 0 0";
            };
        };
    };
};

//Adds Eventlistener to cell
function addEventListenerToStackTable(e) {
    e.addEventListener('click', () => {
        ToggleSelectOfCell(e);
    });
};

//Toggles the Select Bool of Cell
let selected_stacks_int = 0;

function ToggleSelectOfCell(cell) {
    switch (cell.getAttribute('cellisselected')) {
        case 'false':

            cell.setAttribute('cellisselected', 'true');
            cell.style.backgroundImage = "linear-gradient(to bottom right, var(--bg-table-gardiant-01), var(--bg-table-gardiant-02))";

            //Inccrease selected_cards variable
            selected_stacks_int++;

            selectedStacks_Counter.textContent = `selected stacks to push cards in: ${selected_stacks_int}`;

            break;

        case 'true':

            cell.setAttribute('cellisselected', 'false');
            cell.style.backgroundImage = "";

            //Decrease selected_cards variable
            if (selected_stacks_int > 0) selected_stacks_int--;

            selectedStacks_Counter.textContent = `selected stacks to push cards in: ${selected_stacks_int}`;

            break;
    };
};

//Copies card from current stack to other stacks
function CopyCards() {
    let stacks = [];
    let card_vs = [];
    let card_rs = [];

    //get selected stacks
    let table_cells = [...allStacks_table.querySelector('tbody').children];

    for (let i = 0; i < table_cells.length; i++) {
        const ele = table_cells[i];

        if (ele.getAttribute('cellisselected') == 'true') {
            stacks.push(ele)
            ToggleSelectOfCell(ele);
        };
    };

    //get selected cards
    let cardList = [...document.getElementsByClassName('AllCardsList_popUp-window')[0].children];

    for (let i = 0; i < cardList.length; i++) {
        const el = cardList[i];

        for (let i = 0; i < el.children.length; i++) {
            const e = el.children[i];

            if (e.children[2].getAttribute('isselected') == 'true') {
                card_vs.push(e.children[0].textContent);
                card_rs.push(e.children[1].textContent);
            };
        };
    };

    //With this code you can copy cards to MULTIPLE stacks
    for (var k of stacks) {
        for (let i = 0; i < card_vs.length; i++) {
            const e = card_vs[i];
            Karteikarten[k.children[0].textContent].vs.push(e);
        };

        //saves the current stack in the loop
        localStorage.setItem(`${k.children[0].textContent}_stapel_VS`, JSON.stringify(Karteikarten[`${k.children[0].textContent}`].vs));
    };
    for (var k of stacks) {
        for (let i = 0; i < card_rs.length; i++) {
            const e = card_rs[i];
            Karteikarten[k.children[0].textContent].vr.push(e);
        };

        //saves the current stack in the loop
        localStorage.setItem(`${k.children[0].textContent}_stapel_RS`, JSON.stringify(Karteikarten[`${k.children[0].textContent}`].vr));
    };

    //Resets the amount of selected cards/stacks
    DeselectAllCards();

    //Saves the current Stack the user is in and updates html
    SaveAndUpdate();

    //Updates html of pop up window
    CreateMiniCardListLoop_2();
};

//Transfers card from current stack to other stacks
function TransferCards() {
    let stacks = [];
    let card_vs = [];
    let card_rs = [];

    //get selected stacks
    let table_cells = [...allStacks_table.querySelector('tbody').children];

    for (let i = 0; i < table_cells.length; i++) {
        const ele = table_cells[i];

        if (ele.getAttribute('cellisselected') == 'true') {
            stacks.push(ele)
            ToggleSelectOfCell(ele);
        };
    };

    //get selected cards
    let cardList = [...document.getElementsByClassName('AllCardsList_popUp-window')[0].children];

    for (let i = 0; i < cardList.length; i++) {
        const el = cardList[i];

        for (let i = 0; i < el.children.length; i++) {
            const e = el.children[i];

            if (e.children[2].getAttribute('isselected') == 'true') {
                card_vs.push(e.children[0].textContent);
                card_rs.push(e.children[1].textContent);
            };
        };
    };

    //With this code you can transfer cards to MULTIPLE stacks
    for (var k of stacks) {
        for (let i = 0; i < card_vs.length; i++) {
            const e = card_vs[i];
            Karteikarten[k.children[0].textContent].vs.push(e);
        };

        //saves the current stack in the loop
        localStorage.setItem(`${k.children[0].textContent}_stapel_VS`, JSON.stringify(Karteikarten[`${k.children[0].textContent}`].vs));
    };
    for (var k of stacks) {
        for (let i = 0; i < card_rs.length; i++) {
            const e = card_rs[i];
            Karteikarten[k.children[0].textContent].vr.push(e);
        };

        //saves the current stack in the loop
        localStorage.setItem(`${k.children[0].textContent}_stapel_RS`, JSON.stringify(Karteikarten[`${k.children[0].textContent}`].vr));
    };

    //Resets the amount of selected cards/stacks
    DeselectAllCards();

    //Removes all selected cards from current stack
    RemoveSelectedCards(card_vs, card_rs, Karteikarten[stackLocation].vs, Karteikarten[stackLocation].vr);

    //Saves the current Stack the user is in and updates html
    SaveAndUpdate();

    //Updates html of pop up window
    CreateMiniCardListLoop_2();
};

function toggleDropDownMenu() {
    //Changes item
    switch (DropDownIsOpen) {
        case false:

            let UpdatedChilds = [];
            GetUpdatedStackTable(UpdatedChilds);

            DropDownContent.style.display = 'block';

            toggleDropDownMenu_btn.classList = 'fa-solid fa-sort-down';
            toggleDropDownMenu_btn.style.marginBottom = '0.5em';
            DropDownIsOpen = true;

            for (const i of UpdatedChilds) {
                let stackName = document.createTextNode(`${i.textContent}`);
                let a = document.createElement('a');

                a.className = 'DropMenuItem';
                a.append(stackName);
                a.addEventListener('click', UpdateToNextStackData);

                DropDownContent.appendChild(a);
            };

            break;

        case true:

            DropDownContent.style.display = 'none';
            DropDownContent.textContent = null;

            toggleDropDownMenu_btn.classList = 'fa-solid fa-caret-right';
            toggleDropDownMenu_btn.style.marginBottom = '0';
            DropDownIsOpen = false;
            break;
    };
};

function toggleHeaderDropDownMenu() {
    switch (header_btn_clicked) {
        case true:

            header_StackDropDownMenu_btn.className = 'fa-solid fa-caret-right';
            header_btn_clicked = false;

            Header_DropDownContent.style.display = 'none';
            Header_DropDownContent.textContent = null;

            header_StackDropDownMenu_btn.classList = 'fa-solid fa-caret-right';
            header_StackDropDownMenu_btn.style.marginBottom = '0';
            break;

        case false:
            let UpdatedChilds = [];

            GetUpdatedStackTable(UpdatedChilds);

            for (const i of UpdatedChilds) {
                let stackName = document.createTextNode(`${i.textContent}`);
                let a = document.createElement('a');

                a.className = 'DropMenuItem';
                a.append(stackName);
                a.addEventListener('click', function SendParamToFunc() {
                    let aEl = this.innerText;

                    SwitchToSelectedStack(aEl);
                });

                Header_DropDownContent.appendChild(a);
            };

            Header_DropDownContent.style.display = 'block';

            header_StackDropDownMenu_btn.style.marginBottom = '0.5em';
            header_StackDropDownMenu_btn.className = 'fa-solid fa-sort-down';
            header_btn_clicked = true;
            break;
    };
};

function UpdateToNextStackData() {
    toggleDropDownMenu();
    stackInfoText.textContent = `Current Stack - ${this.textContent}`;

    CurrChartStack = this.textContent;

    //Bug Fix: When the user turns off the mixed chart leave and opens the window again , an error message returns.
    //This piece of code first calls two functions. These functions turn on the mixed chart again and the code below makes the icon a checked check-box
    ActivateMixedChart();
    ActivateMixedChart02();

    chart_firstcheckbox.className = 'fa-regular fa-square-check';
    checkbox_clicked = true;
    chart_seccheckbox.className = 'fa-regular fa-square-check';
    checkbox_clicked02 = true;

    GetTimeData();
    GetRepsData();

    //Bug Fix
    if (localStorage.getItem(`${CurrChartStack}_UserTimesNew`)) {
        reloadAllCharts();
    };
};

function SwitchToSelectedStack(aEl) {
    stackLocation = aEl;

    //Gets Data from localstorage and push it into the right array
    if (localStorage.getItem(`${stackLocation}_stapel_VS`) != null) {
        if (Karteikarten[`${stackLocation}`].vs.length != JSON.parse(localStorage.getItem(`${stackLocation}_stapel_VS`)).length) {

            for (k of JSON.parse(localStorage.getItem(`${stackLocation}_stapel_VS`))) {
                Karteikarten[`${stackLocation}`].vs.push(k)
            };

            for (h of JSON.parse(localStorage.getItem(`${stackLocation}_stapel_RS`))) {
                Karteikarten[`${stackLocation}`].vr.push(h)
            };
        };

        PlayGroundHeader.textContent = stackLocation;
        stappelHeader.textContent = `your ${stackLocation} stack`;
        stappelUnderHead.textContent = `Amount of the index cards: (${Karteikarten[`${stackLocation}`].vs.length})`;
        
        pgKarteiKarteVS.querySelector('h3').textContent = `${Karteikarten[`${stackLocation}`].vs[0]}`;
        pgKarteiKarteRS.querySelector('h3').textContent = `${Karteikarten[`${stackLocation}`].vr[0]}`;
        
        StackNameTitle.textContent = stackLocation;
        
        stackInfoText.textContent = `Current Stack - ${stackLocation}`;
        
        CurrChartStack = stackLocation;

        ChangeToStackTheme(stackLocation);
    };

    GetTimeData();
    GetRepsData();

    CloseHeaderDropDown();
};

//Deletes Chart Data from curr Stack
function DeleteChartData() {
    //Curr Stack
    let CurrStack = CurrChartStack;

    //Items from localStorage that need to modify
    let TimesArrayItem = JSON.parse(localStorage.getItem('timesArrayNew'));
    let AmountOfCardsItem = JSON.parse(localStorage.getItem('AmountOfCards'));
    let DateItem = JSON.parse(localStorage.getItem('DateItem'));
    let RepsItem = JSON.parse(localStorage.getItem('RepsItem'));

    //Delete specific item
    if(TimesArrayItem != null) {
        delete TimesArrayItem[CurrStack];
    };

    if(AmountOfCardsItem != null) {
        delete AmountOfCardsItem[CurrStack];
    };

    if(RepsItem != null) {
        delete RepsItem[CurrStack];
    };

    if(DateItem != null) {
        delete DateItem[CurrStack];
    };

    //Items from localStorage that need to remove
    localStorage.setItem('timesArrayNew' , JSON.stringify(TimesArrayItem));
    localStorage.setItem('AmountOfCards' , JSON.stringify(AmountOfCardsItem));
    localStorage.setItem('DateItem' , JSON.stringify(DateItem));
    localStorage.setItem('RepsItem' , JSON.stringify(RepsItem));

    //Removes Items that need to remove
    localStorage.removeItem(`${CurrStack}_UserRepsNew`);
    localStorage.removeItem(`${CurrStack}_UserTimesNew`);
    localStorage.removeItem(`${CurrStack}_UserDateNew`);
    localStorage.removeItem(`${CurrStack}_UserCardAmountNew`);
    localStorage.removeItem(`${CurrStack}_UserCardAmountNew`);

    //From timer.js
    currentLocation = "";
    currentLocation02 = "";
    currentLocation03 = "";
    currentLocation04 = "";
    currentLocation05 = "";

    delete times[CurrStack];
    delete ToRepeat[CurrStack] ;
    delete FromUserDate[CurrStack];
    delete CardsAmount[CurrStack];
    delete UsedModes[CurrStack];

    //Sets Replacement Text
    GetTimeData();
    GetRepsData();
};

//////////////////////MD02-POP-UP AND FILE DATA////////////////////////
let Stackdata = {};

//Scrollt im zweiten Fenster im header (list) bis nach rechts 
function scrollToRightSlowly() {
    let scrollAmount = 0;

    let scrollInterval01 = setInterval(function() {
        md02_headerbarlist.scrollLeft += 20; // anpassen der scroll-Geschwindigkeit
        scrollAmount += 20;
        if (scrollAmount >= md02_headerbarlist.scrollWidth) {
            clearInterval(scrollInterval01);
        };
    }, 20); // anpassen der scroll-Frequenz
};

//Scrollt im zweiten Fenster im header (list) bis nach links
function scrollToLeftSlowly() {
    let scrollAmount = 0;

    let scrollInterval02 = setInterval(function() {
        md02_headerbarlist.scrollBy(-20 , 0); // anpassen der scroll-Geschwindigkeit
        scrollAmount += 20;
        if (scrollAmount >= md02_headerbarlist.scrollWidth) {
            clearInterval(scrollInterval02);
        };
    }, 20); // anpassen der scroll-Frequenz
};

//Gets the names of the stack and calls function that creates list items for md02-header-bar
function GetStacks() {
    //Array with all names
    let stacks = [];

    //pushes all stack names in the array
    GetUpdatedStackTable(stacks);

    //Creates list element for header-bar-list
    md02_headerbarlist.textContent = null;

    for (const i of stacks) {
        let currentStack = i.textContent;

        let li = document.createElement('li');

        li.className = 'header-bar-list-item';
        li.addEventListener('click' , function ParamHoster() {
            CreateCardsForHeaderBar(currentStack);
        });

        let StackName = document.createTextNode(i.textContent);

        li.appendChild(StackName);
        md02_headerbarlist.appendChild(li);  
    };

    //Bug fix or something
    Stackdata = {};
};

//Is MiniCardListLoop_3 but called out from a different location
function CreateCardsForHeaderBar(Stack) {
    if (Karteikarten[Stack].vs.length > 0) {
        md02_selected_cards = 0;
        
        md02_content_cardsList.textContent = null;

        md02_selectedCards_counter.textContent = `selected cards: ${md02_selected_cards}/${Karteikarten[Stack].vs.length}`;

        Stackdata = {};
    
        let numb = 0;
        for (i of Karteikarten[`${Stack}`].vs) {
                
            CreateListMiniCard_3(numb , Stack);
        
            numb++;
        };

        md02_stack_loc = Stack;
    
    } else {
            SetInitialText_DownloadCardsWindow();
            md02_selectedCards_counter.textContent = `selected cards: 0`;
    };

    //Changes stackLocation from preload.js so both is the same
    window.App.ChangeThisStackLoc(Stack, Karteikarten);
    //Calls Function from preload.js
    //Checks if File with Stacklocation name is already saved
    window.App.CheckFileExists();

    file_namefield.value = Stack;
    md02_selectedStacks_shower.textContent = Stack + " | ";

    //Checks if localStorage property exists and displays the property
    if(localStorage.getItem(`${Stack}_lastSave`)) {
        file_lastSave_field.value = localStorage.getItem(`${Stack}_lastSave`);

    } else {
        file_lastSave_field.value = '-';
    };
};

//Sets Replacement Text for md02 pop up 
function SetInitialText_DownloadCardsWindow() {
    md02_content_cardsList.textContent = "No cards to save";
};

function md02_SelectCard() {
    let li = this.parentElement.parentElement

    //Handle if card is selected
    if (this.getAttribute('md02-isselected') === 'false') {

            this.setAttribute('md02-isselected' , 'true');
            this.className = "fa-solid fa-x fa-1x";

            md02_selected_cards++;

            //style
            li.style.backgroundColor = "rgba(0,0,0,0.8)";

            //Modifys Data that can be saved as a file later
            modifyStackData(md02_stack_loc , li.childNodes[0].childNodes[0].textContent , li.childNodes[0].childNodes[1].textContent , true);

    } else if(this.getAttribute('md02-isselected') === 'true') {

            this.setAttribute('md02-isselected' , 'false');
            this.className = "fa-solid fa-check fa-1x";

            if(md02_selected_cards > 0) md02_selected_cards--;

            //style
            li.style.backgroundColor = "";

            //Modifys Data that can be saved as a file later
            modifyStackData(md02_stack_loc , li.childNodes[0].childNodes[0].textContent , li.childNodes[0].childNodes[1].textContent , false);
    };

    md02_selectedCards_counter.textContent = `selected cards: ${md02_selected_cards}/${Karteikarten[md02_stack_loc].vs.length}`;
    md02_selectedStacks_shower.textContent = md02_stack_loc + " | ";
    file_namefield.value = md02_stack_loc;
};

//Deselects all Cards in md02 window 
function md02_deselect_all_cards() {
    //Gets li Elements
    let ulChilds = [...md02_content_cardsList.children];

    //Gets children and set all back to default
    for (const k of ulChilds) {
        for (let i = 0; i < k.children.length; i++) {
            const e = k.children[i].lastChild;
            
            if(e.getAttribute('md02-isselected') === 'true') {
                //Sets back to defaut 
                e.setAttribute('md02-isselected' , 'false');
                e.className = "fa-solid fa-check fa-1x";
                e.parentElement.parentElement.style.backgroundColor = "";

                modifyStackData(md02_stack_loc , e.parentElement.childNodes[0].textContent , e.parentElement.childNodes[1].textContent , false)
            };
        };
    };

    //Update html
    md02_selected_cards = 0;
    md02_selectedCards_counter.textContent = `selected cards: ${md02_selected_cards}/${Karteikarten[md02_stack_loc].vs.length}`;
    md02_selectedStacks_shower.textContent = md02_stack_loc + " | ";
    file_namefield.value = md02_stack_loc;
};

//Selects all opposits cards of md02 window. true -> false ; false -> true
function md02_select_oppo_cards() {
    //Gets li Elements
    let ulChilds = [...md02_content_cardsList.children];

    //Gets children and set all back to default
    for (const k of ulChilds) {
        for (let i = 0; i < k.children.length; i++) {
            const e = k.children[i].lastChild;

            if(e.getAttribute('md02-isselected') === 'false') {
                //Sets back to defaut 
                e.setAttribute('md02-isselected' , 'true');
                e.className = "fa-solid fa-x fa-1x";
                e.parentElement.parentElement.style.backgroundColor = "rgba(0 ,0 ,0 ,0.7)";

                md02_selected_cards++;

                modifyStackData(md02_stack_loc , e.parentElement.childNodes[0].textContent , e.parentElement.childNodes[1].textContent , true)

            } else if(e.getAttribute('md02-isselected') === 'true') {
                //Sets back to defaut 
                e.setAttribute('md02-isselected' , 'false');
                e.className = "fa-solid fa-check fa-1x";
                e.parentElement.parentElement.style.backgroundColor = "";

                if(md02_selected_cards > 0) md02_selected_cards--;

                modifyStackData(md02_stack_loc , e.parentElement.childNodes[0].textContent , e.parentElement.childNodes[1].textContent , false)
            };
        };
    };

    //Update html
    md02_selectedCards_counter.textContent = `selected cards: ${md02_selected_cards}/${Karteikarten[md02_stack_loc].vs.length}`;
    md02_selectedStacks_shower.textContent = md02_stack_loc + " | ";
    file_namefield.value = md02_stack_loc;
};

//All about file system and saving,creating,read,write files

//On button klick the selected data will be saved
document.querySelector('#save-button').addEventListener('click', SaveStackInSystem);

// Save stack with cards (Always replaces old data with new data)
//Die Datei die später gespeichert wird , wird immer mit den neu ausgewählten Karden ersetzt 
function modifyStackData(stack , data_VS , data_RS , addProp) {
    switch (addProp) {
        //If the user wants to add a card
        case true:

            //Proof if a Card is already saved 
            if(Stackdata[stack] != undefined && Stackdata[stack] != undefined) {
                //Check if card is already in array 
                let found_vs = false;
                let found_rs = false;
                // vs
                for (const card of Stackdata[stack].vs) {
                    if(data_VS == card) {
                        found_vs = true;
                    };
                };
                // rs
                for (const card of Stackdata[stack].rs) {
                    if(data_RS == card) {
                        found_rs = true;
                    };
                };
                
                if(!found_vs && !found_rs) {
                    //Adds card
                    Stackdata[stack].vs.push(data_VS);
                    Stackdata[stack].rs.push(data_RS);
                };

            } else {
                //Builds arrays and adds card
                Stackdata[stack] = {'vs' : [data_VS]  , 'rs' : [data_RS]};
            };

            break;

        //If the user wants to deselect a card
        case false:
            if (Stackdata != {}) {
                //Proofs if Element that the user wants to delete exists and deletes it
                let VS_index = Stackdata[stack]['vs'].indexOf(data_VS);
                let RS_index = Stackdata[stack]['rs'].indexOf(data_RS);

                if(VS_index !== -1 && RS_index !== -1) {
                    //delete
                    Stackdata[stack].vs.splice(VS_index , 1);
                    Stackdata[stack].rs.splice(RS_index , 1);
                };
            };

            break;
    };
    md02_stack_loc = stack;
};

function SaveStackInSystem() {  
    let PropAmount = Object.keys(Stackdata).length;

    if (PropAmount == 0) {
        pressed_small_pop_up = true;
        SetUpSmallPopUp('ok' , 'ah' , 'block' , 'block' , 'You first need to select cards you wanna save');

    } else if(PropAmount > 0) {
        //Saves date when data was saved
        localStorage.setItem(`${md02_stack_loc}_lastSave` , todayDate);
        //Updates html with it
        file_lastSave_field.value = localStorage.getItem(`${md02_stack_loc}_lastSave`);

        console.log(Stackdata)
        window.App.ChangeThisStackLoc(md02_stack_loc);
        window.App.CreateFile(Stackdata);

        //Deselects all selected cards from md02-pop-up
        md02_deselect_all_cards();

        pressed_savedFile_butt = true;
        SetUpSmallPopUp('ok' , 'cool' , 'block' , 'block' , 'The selected Cards are save now! Go to the "files" tab to monitor your saved file.');

        Stackdata = {};
    };

    CreateCardsForHeaderBar(md02_stack_loc);
};

// All Files in one Object
let CardsFiles = {};

// Open Files Tab
function OpenFilesTab() {
    // Returns File Data
    window.App.ReturnFiles();

    const { App } = window;

    setTimeout(() => {
        (async () => {
            const FileObject = await App.getFileObject();
            
            setTimeout(() => {
                CardsFiles = FileObject // Output: "File Data from index.js"
                DisplayFileData(FileObject);

                const Data = FileObject['Data'];
                const firstPropertyName = Object.keys(Data)[0];

                DisplayFileCards(FileObject, firstPropertyName);
            },50);
        })();
    }, 50);
};

// Here are all cards the user selected from every file
// It gets reseted when the user leaves the "files" tab
// All files from one single file gets removed when the user switches the file
let Selected_FileCards = [];
let FileCards_SelectedCards_Amount = 0;

// Handle File Data 
let li_File;
function DisplayFileData(FileObject) {
    let FileNames = FileObject['Names'];

    md02_contentFilesList.textContent = null;
    // Displays the amount of files
    FilesCount.textContent = `Files: ${FileNames.length}`;

    for (const name of FileNames) {
        let li = document.createElement('li');
        let i = document.createElement('i');
        let p = document.createElement('p');
        // p
        p.className = 'md02_Files-ListItem-Text';
        p.textContent = name;
        // i
        i.className = 'fa-solid fa-trash-can';
        i.id = 'md02_Files-ListItem-TrashCan';
        i.addEventListener('click', function a() {
            li_File = this.parentElement;
            pressed_deleteFile_butt = true;
            SetUpSmallPopUp('yes', 'no', 'block', 'block', 'Are you sure about this?');
        });
        // li
        li.id = name; 
        li.className = 'md02_Files-ListItem';
        li.style.display = 'flex';
        li.style.flexDirection = 'row';
        li.style.justifyContent = 'space-between'; 
        li.addEventListener('click', function a() {
            DisplayFileCards(FileObject, name);
        })

        li.appendChild(p);
        li.appendChild(i);
        md02_contentFilesList.appendChild(li);
    };

    if(FileNames.length == 0) {
        md02_noFiles();// Set replacement-text
    };
};

// Displays the cards from a certain file
function DisplayFileCards(FileObject, fileName) {
    if (fileName != undefined) {
        // example: fileName -> Englisch.json; stackName -> Englisch
        let stackName = fileName.slice(0,-5); 
        // get the cards of the current stack from the file 
        let FileData_vs = FileObject['Data'][fileName][stackName].vs;
        let FileData_rs = FileObject['Data'][fileName][stackName].rs;
        console.log(FileData_vs, FileData_rs)
    
        // Inform user from which file the cards are
        md02_FilesHeader_FileName_Displayer.textContent = fileName;
        // Inform user how many cards this file has
        md02_FilesHeader_FileCards_Amount_Displayer.textContent = `| Selected cards: 0/${FileData_vs.length}`;
    
        CreateMiniCardListLoop_4(FileData_vs, FileData_rs, stackName);
    
        Selected_FileCards = [];
        FileCards_SelectedCards_Amount = 0;
    
        console.log(Selected_FileCards)
    };
};

// delete single file
function md02_deleteFile(liEl) {
    md02_contentFilesList.removeChild(liEl);

    // Delete File and return if the deleting was succesfull
    window.App.deleteFileFromSys(liEl.firstChild.textContent);

    FilesCount.textContent = `Files: ${md02_contentFilesList.children.length}`;

    CheckIfFilesExisting();

    // Check if there was an error deleting the file
    const { App } = window;
    setTimeout(() => {
        (async () => {
            const DeletingSuccess = await App.getFile_DeleteSuccess();

            if(DeletingSuccess == false) {
                pressed_small_pop_up = true;
                SetUpSmallPopUp('oh', 'uuuh', 'block', 'block', 'An error occured deleting the file');
            };
        })();
    }, 150);

    SetInitialText_CardsFromFile();

    deleteFileInfoFromStorage(liEl.firstChild.textContent);

    Selected_FileCards = [];
    FileCards_SelectedCards_Amount = 0;
};

// Deletes the small lastSave Info from the storage because
// when the file is deleted this info is useless
function deleteFileInfoFromStorage(FileName) {
    let name = FileName.slice(0, -5);

    localStorage.removeItem(`${name}_lastSave`);
};

function CheckIfFilesExisting() {
    if(md02_contentFilesList.children.length == 0) {
        md02_noFiles();
    };
};

function md02_noFiles() {
    let li = document.createElement('li');
    li.textContent = 'There are no files on your system saved';
    li.className = 'md02_Files-ListItem';

    md02_contentFilesList.appendChild(li);
};

//Sets Replacement Text for md02 pop up 
function SetInitialText_CardsFromFile() {
    md02_contentFilesCardsList.textContent = null;

    let p = document.createElement('p');
    let text = document.createTextNode('There are no cards.');
    p.className = 'CardsFromFile_ReplacementText';
    p.appendChild(text);
    md02_contentFilesCardsList.appendChild(p);

    md02_FilesHeader_FileName_Displayer.textContent = 'Stack';
    md02_FilesHeader_FileCards_Amount_Displayer.textContent = `| Cards: 0`;
};

// Everything about selecting cards in the "files" tab

// User selects a single card from a file in the "files" tab
function md02_SelectCard_FromFile(card, select_btn) {// card: li element; select_btn: a element
    let vs = card.firstChild.firstChild.firstChild.textContent;
    let rs = card.firstChild.children[1].firstChild.textContent;

    // curr selected file name "string"
    let Curr_file = md02_FilesHeader_FileName_Displayer.textContent;

    switch (select_btn.getAttribute('md02-filesCard-IsSelected')) {
        case 'true':
            select_btn.setAttribute('md02-filesCard-IsSelected', 'false');

            // style
            select_btn.className = "fa-solid fa-check fa-1x";
            card.style.backgroundColor = "";

            console.log(Curr_file)
            modifyFiles_StackData(Curr_file, vs, rs, false);// add card to array

            if(FileCards_SelectedCards_Amount > 0) FileCards_SelectedCards_Amount--;

            break;

        case 'false':
            select_btn.setAttribute('md02-filesCard-IsSelected', 'true');

            // style
            select_btn.className = "fa-solid fa-x fa-1x";
            card.style.backgroundColor = "rgba(0 ,0 ,0 ,0.7)";

            modifyFiles_StackData(Curr_file, vs, rs, true);// add card to array

            FileCards_SelectedCards_Amount++;
        
            break;
    };

    // Inform user: How many cards he selected and how many cards are in the file 
    md02_FilesHeader_FileCards_Amount_Displayer.textContent = `| Selected cards: ${Selected_FileCards[Curr_file].vs.length}/${card.parentElement.children.length}`;
};

// function triggered with a button in the small header: Selects all opposite cards
function filesCards_SelectOppoCards() {
    //Gets li Elements
    let ulChilds = [...md02_contentFilesCardsList.children];

    //Gets children and set all back to default
    for (const k of ulChilds) {
        for (let i = 0; i < k.children.length; i++) {
            const e = k.children[i].lastChild;

            if(e.getAttribute('md02-filescard-isselected') === 'false') {
                //Sets back to defaut 
                e.setAttribute('md02-filescard-isselected' , 'true');
                e.className = "fa-solid fa-x fa-1x";
                e.parentElement.parentElement.style.backgroundColor = "rgba(0 ,0 ,0 ,0.7)";

                modifyFiles_StackData(md02_FilesHeader_FileName_Displayer.textContent , e.parentElement.childNodes[0].textContent , e.parentElement.childNodes[1].firstChild.textContent , true);

                FileCards_SelectedCards_Amount++;

            } else if(e.getAttribute('md02-filescard-isselected') === 'true') {
                //Sets back to defaut 
                e.setAttribute('md02-filescard-isselected' , 'false');
                e.className = "fa-solid fa-check fa-1x";
                e.parentElement.parentElement.style.backgroundColor = "";

                modifyFiles_StackData(md02_FilesHeader_FileName_Displayer.textContent , e.parentElement.childNodes[0].textContent , e.parentElement.childNodes[1].firstChild.textContent , false);

                if(FileCards_SelectedCards_Amount > 0) FileCards_SelectedCards_Amount--;
            };
        };
    };

    // Update html
    // Inform user: How many cards he selected and how many cards are in the file 
    md02_FilesHeader_FileCards_Amount_Displayer.textContent = `| Selected cards: ${FileCards_SelectedCards_Amount}/${ulChilds.length}`;
};

// function triggered by a btn click event in the header of "files" tab content
// deselects all cards
function fileCards_Deselect_AllCards() {
    FileCards_SelectedCards_Amount = 0;
    Selected_FileCards = [];

    //Gets li Elements and ul
    let ulChilds = [...md02_contentFilesCardsList.children];

    //Gets children and set all back to default
    for (const k of ulChilds) {
        for (let i = 0; i < k.children.length; i++) {
            const e = k.children[i].lastChild;

            if(e.getAttribute('md02-filescard-isselected') === 'true') {
                //Sets back to defaut 
                e.setAttribute('md02-filescard-isselected' , 'false');
                e.className = "fa-solid fa-check fa-1x";
                e.parentElement.parentElement.style.backgroundColor = "";

                if(FileCards_SelectedCards_Amount > 0) FileCards_SelectedCards_Amount--;

            } else if(e.getAttribute('md02-filescard-isselected') === 'false') {};
        };
    };

    // Update html
    // Inform user: How many cards he selected and how many cards are in the file 
    md02_FilesHeader_FileCards_Amount_Displayer.textContent = `| Selected cards: ${FileCards_SelectedCards_Amount}/${ulChilds.length}`;
};

// modifyss the array with the user selected cards from a file in the "files" tab
function modifyFiles_StackData(stack , data_VS , data_RS , addProp) {// addProp: false -> user wants to delete a card from the array
    switch (addProp) {
        //If the user wants to add a card
        case true:

            //Proof if a Card is already saved 
            if(Selected_FileCards[stack] != undefined && Selected_FileCards[stack] != undefined) {
                //Check if card is already in array 
                let found_vs = false;
                let found_rs = false;
                // vs
                for (const card of Selected_FileCards[stack].vs) {
                    if(data_VS == card) {
                        found_vs = true;
                    };
                };
                // rs
                for (const card of Selected_FileCards[stack].rs) {
                    if(data_RS == card) {
                        found_rs = true;
                    };
                };
                
                if(!found_vs && !found_rs) {
                    //Adds card
                    Selected_FileCards[stack].vs.push(data_VS);
                    Selected_FileCards[stack].rs.push(data_RS);
                };

            } else {
                //Builds arrays and adds card
                Selected_FileCards[stack] = {'vs' : [data_VS]  , 'rs' : [data_RS]};
            };

            break;

        //If the user wants to deselect a card
        case false:
            if (Selected_FileCards != {}) {
                //Proofs if Element that the user wants to delete exists and deletes it
                let VS_index = Selected_FileCards[stack]['vs'].indexOf(data_VS);
                let RS_index = Selected_FileCards[stack]['rs'].indexOf(data_RS);

                if(VS_index !== -1 && RS_index !== -1) {
                    //delete
                    Selected_FileCards[stack].vs.splice(VS_index , 1);
                    Selected_FileCards[stack].rs.splice(RS_index , 1);
                };
            };

            break;
    };
};

// triggered by btn event: Export all cards from the file as a stack
function ExportFile_toStack() {
    let currFile = md02_FilesHeader_FileName_Displayer.textContent;

    md02_Open_CreateStack(currFile.slice(0, -5)); // name of file without extname 
};

function md02_Open_CreateStack(name) {
    CTE_ContenteditableField.focus();
    displayed_subtopic.textContent = null;
    CreateTableElWindow.style.display = 'block';
    darkContainer.style.display = 'block';
    CTE_ContenteditableField.value = name;
    CTE_headerTitle.textContent = "Creates a new stack with all cards from the file";
    CreateStack_footer_infoText.textContent = `By clicking "Create Stack" all cards from the file are automatically in the stack`;
    CreateStack_footer_infoText.style.display = 'block';
};

// triggered by btn event: Export all selected cards from the file as a stack
function Export_FileCards_toStack() {
    console.log("export all selected cards", Selected_FileCards)

    let currFile = md02_FilesHeader_FileName_Displayer.textContent;

    md02_Open_CreateStack(currFile.slice(0, -5)); // name of file without extname 
    CTE_headerTitle.textContent = "Creates a new stack with all cards you selected from the file";
    CreateStack_footer_infoText.textContent = `By clicking "Create Stack" all cards you selected from the file are automatically in the stack`;
};