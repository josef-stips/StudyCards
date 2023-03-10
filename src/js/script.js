let stappel = document.getElementById('stappel');
let stappelHeader = document.getElementById('stappel-header');
let stappelUnderHead = document.getElementById('stappel-underhead');
let header_StackDropDownMenu_btn = document.getElementById('header_StackDropDownMenu-btn');

let stappel_RueckSeite = document.getElementById('sr');
let stappel_VorderSeite = document.getElementById('sv');

let clsCloseButton = document.getElementById('cls-menu-button');

let SideMenu = document.getElementById('side-menu');
let SideMenuOpenButton = document.getElementById('sdm-open-button');
let SettingCloseButton = document.getElementById('cls-sts-button');

let darkContainer = document.getElementById('dark-webapp-con'); // Makes the complete website darker when pop up is in frontground

let SettingsWindow = document.getElementById('sts-popup');

let SettingsWindowOpenButton = document.getElementById('OpenSettWindow');
let NavPen = document.getElementById('Nav_createCard-Pen');

let MainContent = document.getElementById('main-content');
let MainCon_InitialText = document.getElementById('initial-text');

let StackNameTitle = document.getElementById('StackNameTitle');

let ShowCards_SideContent = document.getElementById('ShowCardsWindow-SideCon');
let Check_ForEdit_Button = document.getElementById('Check_ForEdit');
let ShowCardsWind_InfoButt = document.getElementById('AllCardsWind-InfoButt');

let SideMenuTable = document.getElementById('sdm-table');

let SetColorToDefault_Butt = document.getElementById('SetColorToDefault-Butt');
let ResetApp_Butt = document.getElementById('ResetApp-Butt');

let ColorChangeUI_Area = document.getElementById('color-field-1');
let EmailUI_Area = document.getElementsByClassName('form')[0];

//SideMenuIcons and IconDiv
let sdm_Icons = document.getElementById('sdm-icons');

let sdm_TrashIcon = document.getElementById('sdm-trash-item');
let sdm_XIcon = document.getElementById('sdm-x-item');
let SideMenuAddButton = document.getElementById('sdm-plus-item');

let CreateTableElWindow = document.getElementById('CreateTableElWindow');

let NeuerStapel_VS = document.getElementById('NeuerStapel_vs');
let NeuerStapel_RS = document.getElementById('NeuerStapel_rs');

let NewStapel_Field = document.getElementsByClassName('NeuerStapel_UserShortInput');

// Buttons from 'CreateTableElWindow' 

let CTE_AcceptButton = document.getElementById('cteAcceptName');
let CTE_AbortButton = document.getElementById('cteAbortButton');
let CTE_DeleteButton = document.getElementById('cteDeleteName');

//playGround data variables and document Elements
let PlayGround = document.getElementById('play-ground');
let PlayGroundHeader = document.getElementById('pg-loc-header');

let pgNavClickEl_1 = document.getElementById('pg-navClickEl-1');
let pgNavClickEl_2 = document.getElementById('pg-navClickEl-2');
let pgNavClickEl_3 = document.getElementById('pg-navClickEl-3');

//pg INI elements 
let pg_INI_close_btn = document.querySelector('#pg-INI-close-btn');
let pg_ModeOverview = document.querySelector('.pg-Overview-wrapper');

let pg_classicMode_btn = document.querySelector('#pg-classicMode-btn');
let pg_writeMode_btn = document.querySelector('#pg-writeMode-btn');
let pg_choiceMode_btn = document.querySelector('#pg-multipleChoiceMode-btn');
let pg_connectMode_btn = document.querySelector('#pg-connectMode-btn');
let pg_showCardAbove_btn = document.querySelector('.pg-showCardAbove-btn');
let pg_showCardBelow_btn = document.querySelector('.pg-showCardBelow-btn');
let pg_ShowCardView_title = document.querySelector('#pg-ShowCardView-title');
let pg_ShowAllCards_btn = document.querySelector('#pg-ShowAllCards-btn');
let side_nav_toggle_btn = document.querySelector('#side-nav-toggle-btn');
let md02_sidebar = document.querySelector('#md02-sidebar');
let md02_sidebar_close_btn = document.querySelector('#md02-sidebar-close-btn');

let pg_ShowMode_title = document.querySelector('#pg-ShowMode-title');
let pg_Start_btn = document.querySelector('#pg-Start-btn');
let pg_MainContent = document.querySelector('.pg-MainContent');
let pg_header_ini_Wrapper = document.querySelector('#pg-header-ini-Wrapper');
let pg_navHeader = document.querySelector('#pg-nav-header');
let pg_countdown = document.querySelector('#pg-countdown');
let pg_countdown_wrapper = document.querySelector('#pg-countdown-wrapper');

let pgObenSichtbarDiv = document.getElementsByClassName('pg-oben-SichtbarDiv')[0];
let pgUntenSichtbarDiv = document.getElementsByClassName('pg-unten-SichtbarDiv')[0];

let pgKarteiKarteVS = document.getElementById('pg-sv');
let pgKarteiKarteRS = document.getElementById('pg-sr');

let pgKarteikarte = document.getElementsByClassName('pg-Karteikarte')[0];

let pgShowCardsButton = document.getElementsByClassName('pg-sub-firsDiv')[0];
let pgSubDoubleButton = document.getElementsByClassName('pg-sub-secondDiv')[0];

let pgWiederhohlenButton = document.getElementsByClassName('pg-wiederhohlen-div')[0];
let pgKannIchButton = document.getElementsByClassName('pg-kannIch-div')[0];

let pgNochmalButton = document.getElementsByClassName('pg-nochmal-div')[0];
let pgSpaeterButton = document.getElementsByClassName('pg-spaeter-div')[0];


let ShowAllCardsWind_ClsButton = document.getElementById('showCards-WindButt');
let ShowAllcardsWind = document.getElementById('allCardsWindow');
let AllCardsListWrapper = document.getElementsByClassName('AllCardsList')[0];
let AllCardsListWrapper_PopUp_Wind = document.getElementsByClassName('AllCardsList_popUp-window')[0];

let deleteAllCards_Button = document.getElementById('deleteAllCards_Button');
let EditCard_Button = document.getElementById('EditCard_Button');

let ShowAllCardsWind_OpenButton = document.getElementById('ShowAllCards-Button');

//Settings Window table Elements

let stsTable_Item1 = document.getElementById('stsTable-Item1');
let stsTable_Item2 = document.getElementById('stsTable-Item2');
let stsTable_Item3 = document.getElementById('stsTable-Item3');
let stsTable_Item4 = document.getElementById('stsTable-Item4');
let stsTable_Item5 = document.getElementById('stsTable-Item5');

let sts_HeadTitle = document.getElementById('sts-head-title');

let sts_FirstContent = document.getElementById('first-content');
let sts_SecondContent = document.getElementById('sec-content');
let sts_ThirdContent = document.getElementById('third-content');
let sts_FourthContent = document.getElementById('fourth-content');
let sts_FiftContent = document.getElementById('fift-content');

//Small PopUp window 
let SmallPopUp = document.getElementsByClassName('small-pop-up')[0];
let spu_YesButton = document.getElementById('PopUp-yes-button');
let spu_NoButton = document.getElementById('PopUp-no-button');
let spu_text = document.getElementById('spu-text');

//Middle-Big PopUp and stuff
let md_PopUp_TransferCards = document.getElementById('md-PopUp-TransferCards');
let md_PopUp_DownloadCards = document.getElementById('md-PopUp-DownlaodCards');
let md_PopUp_TimesProgress = document.getElementById('md-PopUp-TimesProgress');

let sn_transferCards_butt = document.getElementById('sn-transferCards-butt');
let sn_saveStack_butt = document.getElementById('sn-saveStack-butt');
let sn_timeChart_butt = document.getElementById('sn-timeChart-butt');

let second_md_PopUp_Header_item = document.getElementById('second-md-PopUp-Header-item');
let second_DownloadCards_Header_item = document.getElementById('second-DownloadCards-Header-item');
let second_TimesProgress_Header_item = document.getElementById('second-TimesProgress-Header-item');

let selectedCards_Counter = document.getElementById('selectedCards-counter');
let selectedStacks_Counter = document.getElementById('selectedStacks-counter');
let AllStacks_tableWrapper = document.getElementById('allStacks-table-wrapper');
let allStacks_table = document.getElementById('allStacks-table');

let abort_transfer_btn = document.getElementById('abort-transfer-cards-btn');
let copy_cards_btn = document.getElementById('copy-cards-btn');
let transfer_cards_btn = document.getElementById('transfer-cards-btn');
let selectOppo_cards_btn = document.getElementById('selectOppo-cards-btn');

let chart_firstcheckbox = document.getElementById('chart-first-checkbox');
let chart_seccheckbox = document.getElementById('chart-sec-checkbox');

let CardsOfMaxCardstext = document.getElementById('CardsOfMaxCards-text');

//Dark/Light Mode Button
let ColorSwitcher = document.getElementById('colorSwitcher');

let r = document.querySelector(':root');
let rs = getComputedStyle(r);

//Variables for ShowAllCards Window

let CheckButton_Blur = true;

//While Playing
let PlayMode = false; //Prüft sich der Spieler gerade ab?
let Runde = 0; //Bei Welcher Karte befindet sich der Spieler gerade?
let UntenSichtbar_Boolean = false; //Wird die Vorderseite oder die Rückseite zum Abfragen benutzt?
let ZuWiederhohlen = 0; //Wie viele Karten muss der Spieler am Ende des Spiels wiederhohlen?
let EndScreen_Boolean = false; //Wurde schon das Ende des Spiels also der End-Screen erreicht?
let GameEnd = false; //Is nur true wenn man sich im EndScreen des Spiels befindet

//Other importaant stuff
let stackLocation = "";
let CurrChartStack = "";

let TableCells = [];

//On the Settings Window there are buttons at the side with names
//If you click on any of these this variable has the same name as the button you just clicked
//"Shortcuts" is default
let Settings_tabLocation = 'Shortcuts';

let pressed_DeleteAllStacks_butt = false;
let pressed_DeleteCurrStack_butt = false;
let pressed_ResetColors_butt = false;
let pressed_ResetApp_butt = false;
let pressed_SendMail_butt = false;
let pressed_transferCards_butt = false;
let pressed_copyCards_butt = false;
let pressed_savedFile_butt = false;
//For all buttons which open a new small window in a window and nothing special should happen 
let pressed_small_pop_up = false;

//Create todays date
const today = new Date();
const year = today.getFullYear().toString().slice(-2);
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const todayDate = `${day}.${month}.${year}`;

//Darkmode configuration
if (localStorage.getItem('DarkMode')) {
    Darkmode("configurator");
};

//email elements
let email_send_btn = document.getElementById("btn");

let mail_name_field = document.getElementById('name');
let mail_message_field = document.getElementById('message');

//Small Info Text about stack in progression window
let stackInfoText = document.getElementsByClassName('stack-info-text')[0];
let toggleDropDownMenu_btn = document.getElementById('toggle-dropDown-menu');
let DropDownContent = document.getElementById('dropdown-con');
let Header_DropDownContent = document.getElementById('header-dropdown-con');

//other
let DeleteChartData_btn = document.querySelector('#DeleteChartData-btn');
let scrollToRight_btn = document.querySelector('#scrollToRight-btn');
let scrollToLeft_btn = document.querySelector('#scrollToLeft-btn');
let md02_headerbarlist = document.querySelector('#header-bar-list');
let md02_content_cardsList = document.querySelector('#md02-content-cards-list');
let md02_selectedCards_counter = document.querySelector('#md02-selectedCards-counter');
let md02_selectedStacks_shower = document.querySelector('#md02-selectedStack-shower');
let md02_deselect_cards_btn = document.querySelector('#md02-deselect-cards-btn');
let md02_selectOppo_cards_btn = document.querySelector('#md02-selectOppo-cards-btn');
let file_namefield = document.querySelector('#file-namefield');
let file_lastSave_field = document.querySelector('#file-lastSave-field');
let cards_wrapper_question_mark = document.querySelector('#cards-wrapper-question-mark');
//md02 info pop up
let md02_info_pop_up = document.querySelector('.md02-info-pop-up');
let md02_infoPopup_close_btn = document.querySelector('#md02-info-popup-close-btn');

let md02_selected_cards = 0;
let md02_stack_loc;

//KarteiKarten Object
let Karteikarten = {
    // 'Example0': {

    //     'vr': [],
    //     'vs': []

    // },
    // 'Example1': {

    //     'vr': [],
    //     'vs': []

    // },
};

//PlayGround Mode 
let UserPlayModes = {
    'Classic Mode': true,
    'Write Mode': false,
    'Multiple Choice Mode': false,
    'Connect Mode': false,
};

let CurrMode; //String, one of the "UserPlayModes" Object

//Selected Mode is true and all other modes are false
const ChangePlayMode = (Selected_Mode) => {
    CurrMode = Selected_Mode;

    for (const k in UserPlayModes) {
        UserPlayModes[k] = false;
    };

    UserPlayModes[Selected_Mode] = true;

    pg_ShowMode_title.textContent = `Selected mode: ${Selected_Mode}`;
};

//Contenteditable field from 'CreateTableElWindow'
let CTE_ContenteditableField = document.getElementsByClassName('UserShortInput2')[0];

//SideTableMenu and important data

// Checks if localstorage has some things stored

//Pusht die von der letzten Session gespeicherten Table Elemente in den Array 'TableCells'
if (localStorage.getItem('UserTable')) {
    SideMenuTable.innerHTML = localStorage.getItem('UserTable');
}

if (document.getElementById('sdm-table').querySelector('tbody')) {

    let SingleTableEl = document.getElementById('sdm-table').querySelector('tbody').rows;


    for (i = 0; i < SingleTableEl.length; i++) {
        TableCells.push(SingleTableEl[i].lastElementChild);
    };

    for (i = 0; i < TableCells.length; i++) {
        Karteikarten[TableCells[i].innerText] = {
            'vs': [],
            'vr': []
        }
    }
}

for (i = 0; i < TableCells.length; i++) {
    if (localStorage.getItem(`${TableCells[0].innerText}_stapel_VS`) != null) {

        for (l of JSON.parse(localStorage.getItem(`${TableCells[i].innerText}_stapel_VS`))) {
            Karteikarten[`${TableCells[i].innerText}`].vs.push(l);
        };

        for (m of JSON.parse(localStorage.getItem(`${TableCells[i].innerText}_stapel_RS`))) {
            Karteikarten[`${TableCells[i].innerText}`].vr.push(m);
        };

    };
};


//Default Settings
if (TableCells.length >= 1) {

    stackLocation = TableCells[0].innerText;
    CurrChartStack = stackLocation;

    StackNameTitle.textContent = stackLocation

    //Shows the right stack name in the progress window
    stackInfoText.textContent = `Current Stack - ${stackLocation}`

} else {
    StackNameTitle.textContent = 'Your stack name';
};

if (TableCells.length >= 1) {

    PlayGroundHeader.textContent = stackLocation;
    stappelHeader.textContent = `your ${stackLocation} stack`;
    stappelUnderHead.textContent = `Amount of the index cards: (${Karteikarten[`${stackLocation}`].vs.length})`;
    CardsOfMaxCardstext.textContent = `0/${Karteikarten[`${stackLocation}`].vs.length}`;

    MainCon_InitialText.style.display = 'none';
    MainContent.style.display = 'flex';

    //Defines new Array for front and back cards from the original array.
    //When the user clicks on the stack field to start the game , this two arrays get mixed by a funtion
    DefineValueForStackArray();

} else {
 
    MainCon_InitialText.style.display = 'block';
    MainContent.style.display = 'none';
    SideMenuTable.style.display = 'none';

};

//Wird beim drücken von 'stappel_Rückseite' "z.237" ausgeführt
function AddCardToStack() {
    if (StInner != 'back' && StInner_vs != 'front' && StInner != '' && StInner_vs != '') {

        Karteikarten[`${stackLocation}`].vr.push(StInner);
        Karteikarten[`${stackLocation}`].vs.push(StInner_vs);


        pgKarteiKarteVS.querySelector('h3').textContent = `${Karteikarten[`${stackLocation}`].vs[0]}`;
        pgKarteiKarteRS.querySelector('h3').textContent = `${Karteikarten[`${stackLocation}`].vr[0]}`;
    
        stappelUnderHead.textContent = `Amount of the index cards: (${Karteikarten[`${stackLocation}`].vs.length})`;

        //Sets focus to the first field (Vorderseite)
        NeuerStapel_VS.focus();

        SaveStack();
    };
};

//Wird beim drücken von 'stappel_Rückseite' "z.237" ausgeführt
function SaveStack() {
    //Stapel wird gespeichert
    localStorage.setItem(`${stackLocation}_stapel_VS`, JSON.stringify(Karteikarten[`${stackLocation}`].vs));
    localStorage.setItem(`${stackLocation}_stapel_RS`, JSON.stringify(Karteikarten[`${stackLocation}`].vr));
};

//Wird beim drücken von 'stappel_Rückseite' "z.237" ausgeführt
function ResetPlaceHolderToDefault() {
    for (let i = 0; i < NewStapel_Field.length; i++) {
        const element = NewStapel_Field[i];
        const El_placeholder = element.getAttribute('data-placeholder');

        element.textContent = '';
        NeuerStapel_RS.textContent = El_placeholder;
    };
};

//Edits the Placeholder 
function EditPlaceHolder() {

    const ele = document.getElementById('NeuerStapel_vs');
    const ele2 = document.getElementById('NeuerStapel_rs');

    // Get the placeholder attribute
    const placeholder = ele.getAttribute('data-placeholder');

    // Set the placeholder as initial content if it's empty
    ele.innerHTML === '' && (ele.innerHTML = placeholder);

    ele.addEventListener('focus', function (e) {
        const value = e.target.innerHTML;
        value === placeholder && (e.target.innerHTML = '');
    });

    ele.addEventListener('blur', function (e) {
        const value = e.target.innerHTML;
        value === '' && (e.target.innerHTML = placeholder);
    });

    // Get the placeholder attribute
    const placeholder2 = ele2.getAttribute('data-placeholder');

    // Set the placeholder as initial content if it's empty
    ele2.innerHTML === '' && (ele2.innerHTML = placeholder2);

    ele2.addEventListener('focus', function (e) {
        const value = e.target.innerHTML;
        value === placeholder2 && (e.target.innerHTML = '');
    });

    ele2.addEventListener('blur', function (e) {
        const value = e.target.innerHTML;
        value === '' && (e.target.innerHTML = placeholder2);
    });
};

if(TableCells.length >= 1) {
    EditPlaceHolder();
} 

//Cretaes list element
function CreateListMiniCard(numb) {
    let liEl = document.createElement('li');
    liEl.setAttribute('list-index' , `${numb}`)

    let DivEl = document.createElement('div');
    DivEl.className = 'Einzel_Stapel';

    let DivEl2 = document.createElement('div');
    DivEl2.className = 'ministapel-Vorderseite';

    let DivEl3 = document.createElement('div');
    DivEl3.className = 'ministapel-Rückseite';

    let h3_El1 = document.createElement('h3');
    let h3_El1_text = document.createTextNode(`${Karteikarten[`${stackLocation}`].vs[numb]}`);

    h3_El1.className = 'MiniCardInput';
    h3_El1.style.margin = '3.9% 4% 0 4%';

    let h3_El2 = document.createElement('h3');
    let h3_El2_text = document.createTextNode(`${Karteikarten[`${stackLocation}`].vr[numb]}`);

    h3_El2.className = 'MiniCardInput';
    h3_El2.style.margin = '3.9% 4% 0 4%';

    let aEl = document.createElement('a');
    aEl.id = 'Cardmini-trashCan';
    aEl.className = 'fa-solid fa-trash fa-1x';
    aEl.href = '#';
    aEl.title = 'delete';
    aEl.addEventListener('click' , deleteSingleIndexCard);

    DivEl.appendChild(DivEl2);
    DivEl.appendChild(DivEl3);
    DivEl3.appendChild(h3_El2);
    h3_El1.appendChild(h3_El1_text);
    h3_El2.appendChild(h3_El2_text);
    DivEl.appendChild(aEl);
    DivEl2.appendChild(h3_El1);
    liEl.appendChild(DivEl);
    
    AllCardsListWrapper.appendChild(liEl);
};

//decides how often the function above needs to call
function CreateMiniCardListLoop() {
    AllCardsListWrapper.textContent = null;

    let numb = 0;
    for (i of Karteikarten[`${stackLocation}`].vs) {
        
        CreateListMiniCard(numb);

        numb++;
    };
};

//Cretaes list element for other window
function CreateListMiniCard_2(numb) {
    let liEl = document.createElement('li');
    liEl.setAttribute('list-index' , `${numb}`)

    let DivEl = document.createElement('div');
    DivEl.className = 'Einzel_Stapel_2';

    let DivEl2 = document.createElement('div');
    DivEl2.className = 'ministapel-Vorderseite';

    let DivEl3 = document.createElement('div');
    DivEl3.className = 'ministapel-Rückseite';

    let h3_El1 = document.createElement('h3');
    let h3_El1_text = document.createTextNode(`${Karteikarten[`${stackLocation}`].vs[numb]}`);

    h3_El1.className = 'MiniCardInput';
    h3_El1.style.margin = '3.9% 4% 0 4%';
    h3_El1.style.fontSize = "15px"

    let h3_El2 = document.createElement('h3');
    let h3_El2_text = document.createTextNode(`${Karteikarten[`${stackLocation}`].vr[numb]}`);

    h3_El2.className = 'MiniCardInput';
    h3_El2.style.margin = '3.9% 4% 0 4%';
    h3_El2.style.fontSize = "15px"

    let aEl = document.createElement('a');
    aEl.id = 'Cardmini-SelectionMark';
    aEl.className = 'fa-solid fa-check fa-1x';
    aEl.href = '#';
    aEl.title = 'select';
    aEl.setAttribute('IsSelected' , 'false')
    aEl.addEventListener('click' , selectSingleIndexCard);

    DivEl.appendChild(DivEl2);
    DivEl.appendChild(DivEl3);
    DivEl3.appendChild(h3_El2);
    h3_El1.appendChild(h3_El1_text);
    h3_El2.appendChild(h3_El2_text);
    DivEl.appendChild(aEl);
    DivEl2.appendChild(h3_El1);
    liEl.appendChild(DivEl);

    AllCardsListWrapper_PopUp_Wind.appendChild(liEl);
};

//decides how often the function above needs to call
function CreateMiniCardListLoop_2() {
    if (Karteikarten[stackLocation].vs.length > 0) {
        
        AllCardsListWrapper_PopUp_Wind.textContent = null;
    
        let numb = 0;
        for (i of Karteikarten[`${stackLocation}`].vs) {
                
            CreateListMiniCard_2(numb);
        
            numb++;
        };
    
    } else {
            SetInitialText_TransferCardsWindow();
    };
};

//Cretaes list element for other window
function CreateListMiniCard_3(numb , location) {
    if (location === undefined) {
        location = stackLocation
    };

    let liEl = document.createElement('li');
    liEl.setAttribute('list-index' , `${numb}`)

    let DivEl = document.createElement('div');
    DivEl.className = 'Einzel_Stapel_2';

    let DivEl2 = document.createElement('div');
    DivEl2.className = 'ministapel-Vorderseite';

    let DivEl3 = document.createElement('div');
    DivEl3.className = 'ministapel-Rückseite';

    let h3_El1 = document.createElement('h3');
    let h3_El1_text = document.createTextNode(`${Karteikarten[`${location}`].vs[numb]}`);

    h3_El1.className = 'MiniCardInput';
    h3_El1.style.margin = '3.9% 4% 0 4%';
    h3_El1.style.fontSize = "15px"

    let h3_El2 = document.createElement('h3');
    let h3_El2_text = document.createTextNode(`${Karteikarten[`${location}`].vr[numb]}`);

    h3_El2.className = 'MiniCardInput';
    h3_El2.style.margin = '3.9% 4% 0 4%';
    h3_El2.style.fontSize = "15px"

    let aEl = document.createElement('a');
    aEl.id = 'md02-Cardmini-SelectionMark';
    aEl.className = 'fa-solid fa-check fa-1x';
    aEl.href = '#';
    aEl.title = 'select';
    aEl.setAttribute('md02-IsSelected' , 'false');
    aEl.addEventListener('click' , md02_SelectCard);
    
    DivEl.appendChild(DivEl2);
    DivEl.appendChild(DivEl3);
    DivEl3.appendChild(h3_El2);
    h3_El1.appendChild(h3_El1_text);
    h3_El2.appendChild(h3_El2_text);
    DivEl.appendChild(aEl);
    DivEl2.appendChild(h3_El1);
    liEl.appendChild(DivEl);

    md02_content_cardsList.appendChild(liEl);
};

//decides how often the function above needs to call
function CreateMiniCardListLoop_3() {
    if (Karteikarten[stackLocation].vs.length > 0) {
        
        md02_content_cardsList.textContent = null;
    
        let numb = 0;
        for (i of Karteikarten[`${stackLocation}`].vs) {
                
            CreateListMiniCard_3(numb , stackLocation);
        
            numb++;
        };
    
    } else {
            SetInitialText_DownloadCardsWindow();
    };
};


//Button in the header (moon)
ColorSwitcher.addEventListener('click' , () => {
    ToggleDarkMode();
});

function ToggleDarkMode() {
    document.body.classList.toggle('dark-mode');


    if(document.body.classList == 'dark-mode') {

        Darkmode("user_event");

    } else if(document.body.classList != 'dark-mode') {

        LightMode();
    };
};

function LightMode() {
    ColorChangeUI_Area.style.backgroundImage = "linear-gradient(to bottom right, var(--standard-dark-color-01), var(--standard-dark-color-02))";
    EmailUI_Area.style.backgroundImage = "linear-gradient(to bottom right, var(--standard-dark-color-01), var(--standard-dark-color-02))";
    pg_ModeOverview.style.backgroundImage = "linear-gradient(to bottom right, var(--standard-dark-color-01), var(--standard-dark-color-02))";

    document.body.classList.remove('dark-mode');

    localStorage.removeItem('DarkMode');

    r.style.setProperty('--bg-div-gardiant-01' , `rgb(25, 32, 35)`);
    r.style.setProperty('--bg-div-gardiant-02' , `rgb(35, 41, 47)`);

    if(CheckButton_Blur == true) {

        r.style.setProperty('--button-blur' , 'rgba(0,0,0,0.4)');
        r.style.setProperty('--button-hover-color-special' , 'rgba(0,0,0,0.4)');

    } else if(CheckButton_Blur == false) {

        r.style.setProperty('--button-blur' , 'rgba(0,0,0,1)');
        r.style.setProperty('--button-hover-color-special' , '#5070d6');
    };
};

function Darkmode(from) {
    ColorChangeUI_Area.style.backgroundImage = "none";
    EmailUI_Area.style.backgroundImage = "none";
    pg_ModeOverview.style.backgroundImage = "none";

    let firstBasicBG = rs.getPropertyValue(`--bg-gardiant-01`);
    let secondBasicBG = rs.getPropertyValue(`--bg-gardiant-02`);

    let firstBasicBG_Storage = localStorage.getItem('firstBackground');
    let secondBasicBG_Storage = localStorage.getItem('secondBackground');

    if (from == "configurator") {
        r.style.setProperty('--bg-div-gardiant-01' , `${firstBasicBG_Storage}`);
        r.style.setProperty('--bg-div-gardiant-02' , `${secondBasicBG_Storage}`);

    } else {
        r.style.setProperty('--bg-div-gardiant-01' , `${firstBasicBG}`);
        r.style.setProperty('--bg-div-gardiant-02' , `${secondBasicBG}`);
    }

    document.body.classList.add('dark-mode');

    localStorage.setItem('DarkMode' , true);

    if(CheckButton_Blur == true) {

        r.style.setProperty('--button-blur' , 'rgba(255,255,255,0.6)');
        r.style.setProperty('--button-hover-color-special' , 'rgba(0,0,0,0.6)');

    } else if(CheckButton_Blur == false) {

        r.style.setProperty('--button-blur' , 'rgba(255,255,255,1)');
        r.style.setProperty('--button-hover-color-special' , '#5070d6');
    };
};

//real stuff

//Code Schnipsel 
//Select every nth item of an array[2,4,6]
const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
//Selects every nth item of array[1,3,5]
function getEveryNth(arr, nth) {
    const result = [];
  
    for (let i = 0; i < arr.length; i += nth) {
      result.push(arr[i]);
    }
  
    return result;
};

//User can edit the card after it was edit to the stack
function MakeCardEditPossible() {
    let FirstCard = document.getElementsByClassName('MiniCardInput')[0];
    FirstCard.focus();

    ToggleContentEditableOfElements(true);
};

function SaveEditChanges() {

    let AllCards = document.getElementsByClassName('MiniCardInput');
    let AllCardsName = [];

    ToggleContentEditableOfElements(false);

    for (let i = 0; i < AllCards.length; i++) {
        const element = AllCards[i];
    
        AllCardsName.push(element.textContent)
    };

    // every_nth(AllCardsName,2);
    Karteikarten[`${stackLocation}`].vr = every_nth(AllCardsName,2);
    Karteikarten[`${stackLocation}`].vs = getEveryNth(AllCardsName,2);

    localStorage.setItem(`${stackLocation}_stapel_RS` ,JSON.stringify(Karteikarten[`${stackLocation}`].vr));
    localStorage.setItem(`${stackLocation}_stapel_VS` ,JSON.stringify(Karteikarten[`${stackLocation}`].vs));
};

function EditCardName() {
    ShowCards_SideContent.innerHTML = `<h2 id="SideCont_Text" >Now you can change the name of your cards! <br> <br> Press <li class="fa-solid fa-check fa-2"></li> in the navigation bar above this text when you're done editing.</h2>`;

    CheckButton_Blur = false;
    
    if(document.body.classList != 'dark-mode') {

        r.style.setProperty('--button-blur' , 'rgb(255,255,255)');
        r.style.setProperty('--button-hover-color-special' , '#5070d6');

    } else if(document.body.classList == 'dark-mode') {

        r.style.setProperty('--button-blur' , 'rgb(0,0,0)');
        r.style.setProperty('--button-hover-color-special' , '#5070d6');

    };

    Check_ForEdit_Button.style.cursor = 'pointer';
};

function EndEditMode() {
    ShowCards_SideContent.innerHTML = ``;

    CheckButton_Blur = true;

    if(document.body.classList != 'dark-mode') {

        r.style.setProperty('--button-blur' , 'rgba(255,255,255,0.4)');
        r.style.setProperty('--button-hover-color-special' , 'rgba(255,255,255,0.4)');

    } else if(document.body.classList == 'dark-mode') {

        r.style.setProperty('--button-blur' , 'rgba(0,0,0,0.6)');
        r.style.setProperty('--button-hover-color-special' , 'rgba(0,0,0,0.6)');

    };
    Check_ForEdit_Button.style.cursor = 'default';
};

//This is an universal code 
function ToggleContentEditableOfElements(boolean) {
    let AllCards = document.getElementsByClassName('MiniCardInput');

    for (let i = 0; i < AllCards.length; i++) {
        const element = AllCards[i];
        
        element.contentEditable = `${boolean}`;
    };
}

function DeleteStackNameInPopUp() {
    CTE_ContenteditableField.textContent = null;
};

function AbortUserStackName() {
    CreateTableElWindow.style.display = 'none';
    darkContainer.style.display = 'none';
    CTE_ContenteditableField.textContent = null;
};

function AcceptUserStackName() {
    let result = CheckIfNameAlreadyExists(CTE_ContenteditableField.textContent);
    //If result == true a stack with this name already exists

    if(result && CTE_ContenteditableField.textContent != '') {
        pressed_small_pop_up = true;
        SetUpSmallPopUp('oh' , 'ok' , 'block' , 'block' , 'A stack with this name already exists');
    };

    if (CTE_ContenteditableField.textContent != '' && result == false) {
        let Content = CTE_ContenteditableField.textContent
    
        CreateTableElement(Content);
    
        CreateTableElWindow.style.display = 'none';
        darkContainer.style.display = 'none'; 
        CTE_ContenteditableField.textContent = null;

        CurrChartStack = stackLocation;

        GetTimeData();
        GetRepsData();
    };
};

function CheckIfNameAlreadyExists(NewName) {
    //Get all Stack names
    let names = []// example: names[0].textContent; Output: "first stack name"
    GetUpdatedStackTable(names);

    for (const i of names) {
        let e = i.textContent

        if (NewName === e) {
            return true;
        };
    };
    //If no same name exists the function returns false
    return false;
};

//This function creates a contenteditable table element for the user | user_input is the name of the new stack
function CreateTableElement(user_input) {
    let LastChildDataSet

    if (TableCells.length >= 1 && SideMenuTable.getElementsByTagName('tbody').length >= 1) {

        LastChildDataSet = document.getElementById('sdm-table').querySelector('tbody').lastElementChild.lastElementChild.getAttribute('data-table-index');
    
    } else if(TableCells.length <= 0 && SideMenuTable.getElementsByTagName('tbody').length <= 0) {
        
        LastChildDataSet = 0;
    };

    let UserCreatedName = document.createTextNode(`${user_input}`);

    //Creates a new element with attributes

    let Usertr = document.createElement('tr');
    let Usertd = document.createElement('td');

    Usertd.className = 'tableCell';
    Usertd.id = `${user_input}-table`;
    Usertd.setAttribute('data-table-index', `${parseInt(LastChildDataSet) + 1}`);

    Usertd.appendChild(UserCreatedName);
    Usertr.appendChild(Usertd);

    if (TableCells.length >= 1 && SideMenuTable.getElementsByTagName('tbody').length >= 1) {

        SideMenuTable.querySelector('tbody').appendChild(Usertr);

    } else {

        let t_tbody = document.createElement('tbody');

        SideMenuTable.appendChild(t_tbody);

        SideMenuTable.querySelector('tbody').appendChild(Usertr);
    }
    
    let NewTableChild = document.getElementById(`${user_input}-table`);

    //Pushes the new Element to the TableCell Array
    TableCells.push(NewTableChild);

    SideMenuTable.style.display = 'inline-table';

    //Calls function
    SaveTableElement(Usertd.textContent);

    TableObjectProperty(Usertd.textContent);

    TableCellEvent();

    //Close the DropDownMenu when it's open
    header_btn_clicked = true;
    toggleHeaderDropDownMenu();
};

// Saves the User created table elements in localstorage
function SaveTableElement(Inner) {
    let UsTableSt = SideMenuTable.innerHTML; //User Created Table Elements

    localStorage.setItem('UserTable', UsTableSt);

    SetFocusToTable(Inner , 0);
};


//This function adds an addEventlistener to every table element of the "TableCells" Array.
function TableCellEvent() {
    for (let i = 0; i < TableCells.length; i++) {
        TableCells[i].addEventListener('click', () => {

            stackLocation = `${TableCells[i].textContent}`;

            //Gets Data from localstorage and push it into the right array
            if (localStorage.getItem(`${stackLocation}_stapel_VS`) != null) {
                if(Karteikarten[`${stackLocation}`].vs.length != JSON.parse(localStorage.getItem(`${stackLocation}_stapel_VS`)).length) {
        
                    for (k of JSON.parse(localStorage.getItem(`${stackLocation}_stapel_VS`))) {
                        Karteikarten[`${stackLocation}`].vs.push(k)
                    };
                    
                    for (h of JSON.parse(localStorage.getItem(`${stackLocation}_stapel_RS`))) {
                        Karteikarten[`${stackLocation}`].vr.push(h)
                    };
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

            GetTimeData();
            GetRepsData();
        });
    };
};

function TableObjectProperty(Name) {
    //Creates new Propertys for the 'Karteikarten' Object 
    Karteikarten[`${Name}`] = {'vs':[], 'vr':[]};

    //Saves the new propertys in localstorage
    localStorage.setItem(`${Name}_stapel_VS` , JSON.stringify(Karteikarten[`${Name}`].vs));
    localStorage.setItem(`${Name}_stapel_RS` , JSON.stringify(Karteikarten[`${Name}`].vr));
};

function SetFocusToTable(TableCellInner , CardAmount) {
    //styling
    MainCon_InitialText.style.display = 'none';
    MainContent.style.display = 'flex';

    EditPlaceHolder();

    //configuration
    stackLocation = `${TableCellInner}`;
    CurrChartStack = `${TableCellInner}`;

    PlayGroundHeader.textContent = stackLocation;
    stappelHeader.textContent = `your ${stackLocation} stack`;
    stappelUnderHead.textContent = `Amount of the index cards: (${CardAmount})`;
    StackNameTitle.textContent = stackLocation;

    setTimeout(() => {
        SideMenu.style.width = '0';
    } , 140);
};

TableCellEvent();

//Deletes one specific Index Card of one the current stack
function deleteSingleIndexCard() {
    let ListCollection = [...AllCardsListWrapper.children];

    let list_index = ListCollection.indexOf(this.parentNode.parentNode);
    
    AllCardsListWrapper.removeChild(this.parentNode.parentNode);
    ListCollection.splice(list_index , 1);


    Karteikarten[`${stackLocation}`].vs.splice(list_index , 1);
    Karteikarten[`${stackLocation}`].vr.splice(list_index , 1);

    localStorage.setItem(`${stackLocation}_stapel_VS` , JSON.stringify(Karteikarten[`${stackLocation}`].vs));
    localStorage.setItem(`${stackLocation}_stapel_RS` , JSON.stringify(Karteikarten[`${stackLocation}`].vr));

    if(ListCollection.length <= 0) {
        PlayGround.style.display = 'none';
        ShowAllcardsWind.style.display = 'none';
        darkContainer.style.display = 'none';
    }

    stappelUnderHead.textContent = `Amount of the index cards: (${Karteikarten[`${stackLocation}`].vs.length})`;
};

//Removes all user selected cards from current stack
function RemoveSelectedCards(vs , rs , OriginVS , OriginRS) {
    for (let i = 0; i < vs.length; i++) {
        let index = OriginVS.indexOf(vs[i]);
        if (index > -1) {
          OriginVS.splice(index, 1);
        };
    };

    for (let i = 0; i < rs.length; i++) {
        let index = OriginRS.indexOf(rs[i]);
        if (index > -1) {
          OriginRS.splice(index, 1);
        };
    };
};

//Saves the current Stack the user is in and updates html
function SaveAndUpdate() {
    //saves the current stack the user is in
    localStorage.setItem(`${stackLocation}_stapel_VS` , JSON.stringify(Karteikarten[`${stackLocation}`].vs));
    localStorage.setItem(`${stackLocation}_stapel_RS` , JSON.stringify(Karteikarten[`${stackLocation}`].vr));
        
    //When the user transfers cards to the current stack he is in , the html needs to update to show the new amount of cards
    stappelUnderHead.textContent = `Amount of the index cards: (${Karteikarten[`${stackLocation}`].vs.length})`;
    selectedCards_Counter.textContent = `selected cards: ${selected_cards_int}/${Karteikarten[stackLocation].vs.length}`;

};

//Deletes all index cards of the current stack
function deleteAllCards() {
    AllCardsListWrapper.textContent = '';

    Karteikarten[`${stackLocation}`].vs.length = 0;
    Karteikarten[`${stackLocation}`].vr.length = 0;

    localStorage.setItem(`${stackLocation}_stapel_VS` , JSON.stringify(Karteikarten[`${stackLocation}`].vs));
    localStorage.setItem(`${stackLocation}_stapel_RS` , JSON.stringify(Karteikarten[`${stackLocation}`].vr));

    PlayGround.style.display = 'none';
    ShowAllcardsWind.style.display = 'none';
    darkContainer.style.display = 'none';

    stappelUnderHead.textContent = `Amount of the index cards: (${Karteikarten[`${stackLocation}`].vs.length})`;
};

//Deletes all cards
function DeleteAllStacks() {
    ClearStorage();

    Karteikarten = {};
    TableCells = [];

    setTimeout(() => {
        SideMenu.style.width = '0';
    } , 10);


    if(SideMenuTable.querySelector('tbody') != null) {
        SideMenuTable.removeChild(SideMenuTable.querySelector('tbody'))
    };

    SideMenuTable.style.display = 'none';
    MainContent.style.display = 'none';
    MainCon_InitialText.style.display = 'block';

    StackNameTitle.textContent = 'Your stack name';

    SetInIText_TransferWin();
};

//Deletes the current stack
function DeleteCurrentStack() {
    let CurrStack = stackLocation;
    let LiveTableList = SideMenuTable.querySelector('tbody').children

    if(LiveTableList.length == 1) {
        DeleteAllStacks();

        return
    };

    for(i=0;i < LiveTableList.length;i++) {

        if (LiveTableList[i].innerText == CurrStack) {
            removeSpecificNode(i, CurrStack);
        };
    };
};

//Removes a specific node from an element
function removeSpecificNode(i , Stack) {
    //Array of Table HTMlCollection 
    let TableCellList = [...SideMenuTable.querySelector('tbody').children]

    if (TableCellList.length > 1) {
        TableCellList.splice(i , 1)

    } else {
        TableCellList.splice(i , 1)
    };

    //Clears Content from Table
    SideMenuTable.querySelector('tbody').textContent = ``;

    //Adds Content from the Array above to Table
    for (let index = 0; index < TableCellList.length; index++) {
        const element = TableCellList[index];

        SideMenuTable.querySelector('tbody').appendChild(element);
    };

    //Removes Element in LocalStorage
    localStorage.removeItem(`${Stack}_stapel_VS`);
    localStorage.removeItem(`${Stack}_stapel_RS`);

    //Reloads the UserTable in localStorage
    localStorage.setItem('UserTable' , SideMenuTable.innerHTML);

    if(TableCellList != []) SwitchToNextStack(TableCellList);
};

//Switches to the next stack in your table
function SwitchToNextStack(Array) {
    //Sets the focus to the next stack. If there is no stack anymore , another function will be called.
    if(Array.length >= 1) {

        if(i <= 0) {
            SetFocusToTable(Array[i].textContent ,Karteikarten[`${Array[i].textContent}`].vs.length);

        } else if(i == Array.length) {
            SetFocusToTable(Array[i - 1].textContent ,Karteikarten[`${Array[i - 1].textContent}`].vs.length);

        }  else if(i == Array.length - 1) {
            SetFocusToTable(Array[i - 1].textContent ,Karteikarten[`${Array[i - 1].textContent}`].vs.length);

        } else if(i > 0) {
            SetFocusToTable(Array[i].textContent ,Karteikarten[`${Array[i - 1].textContent}`].vs.length);
        };

    } else if(Array.length <= 0) {
        AllStacksDeleted();
    };

    //Close the DropDownMenu when it's open
    CloseHeaderDropDown();
};


//When all stacks are deleted , this function shows the right things in the document
function AllStacksDeleted() {
    stackLocation = "";
    CurrChartStack = "";

    SideMenuTable.style.display = 'none';
    MainContent.style.display = 'none';
    MainCon_InitialText.style.display = 'block';
    StackNameTitle.textContent = 'Your stack name';

    stackInfoText.textContent = 'Current Stack';

    setTimeout(() => {
        SideMenu.style.width = '0';
    } , 10);

    //From timer.js
    currentLocation = "";
    currentLocation02 = "";
    currentLocation03 = "";
    currentLocation04 = "";
    
    times = {};
    ToRepeat = {};
    FromUserDate = {};
    CardsAmount = {};
};

//Sets up the Contet for the Small Alert PopUp
function SetUpSmallPopUp(butt1_Inner , butt2_Inner , SmallPopUpDisplay , darkCon_Display , spu_Text) {

    spu_NoButton.innerText = butt2_Inner;
    spu_YesButton.innerText = butt1_Inner;

    SmallPopUp.style.display = SmallPopUpDisplay;
    darkContainer.style.display = darkCon_Display;

    spu_text.textContent = spu_Text;
};

//Bug fix
ShowCards_SideContent.textContent = ``;

//Other
function ClearStorage() {
    localStorage.removeItem('UserTable');
    localStorage.removeItem('timesArrayNew');

    for (k in Karteikarten) {
        localStorage.removeItem(`${k}_UserTimesNew`);
        localStorage.removeItem(`${k}_stapel_RS`);
        localStorage.removeItem(`${k}_stapel_VS`);
    };

    stackLocation = "";
    CurrChartStack = "";

    //From timer.js
    currentLocation = "";
    currentLocation02 = "";
    currentLocation03 = "";
    currentLocation04 = "";
    
    times = {};
    ToRepeat = {};
    FromUserDate = {};
    CardsAmount = {};
};

function SetAppColorsToDefault() {
    localStorage.setItem('firstBackground' , "#528bff");
    localStorage.setItem('secondBackground' , "#8575ff");

    if (document.body.classList.contains('dark-mode')) {

        r.style.setProperty('--bg-div-gardiant-01', "#528bff");
        r.style.setProperty('--bg-div-gardiant-02', "#8575ff");
        r.style.setProperty('--bg-gardiant-01', "#528bff");
        r.style.setProperty('--bg-gardiant-02', "#8575ff");

    } else {

        r.style.setProperty('--bg-gardiant-01', "#528bff");
        r.style.setProperty('--bg-gardiant-02', "#8575ff");
    };

    setColor(style1_Input, '--bg-gardiant-01', ColorField_1);
    setColor(style2_Input, '--bg-gardiant-02', ColorField_2);
};

function ResetApp() {
    localStorage.clear();

    Karteikarten = {};
    TableCells = [];

    //From timer.js
    currentLocation = "";
    currentLocation02 = "";
    currentLocation03 = "";
    currentLocation04 = "";

    times = {};
    ToRepeat = {};
    FromUserDate = {};
    CardsAmount = {};

    stackLocation = "";
    CurrChartStack = "";

    setTimeout(() => {
        SideMenu.style.width = '0';
    } , 10);


    if(SideMenuTable.querySelector('tbody') != null) {
        SideMenuTable.removeChild(SideMenuTable.querySelector('tbody'))
    };

    SideMenuTable.style.display = 'none';
    MainContent.style.display = 'none';
    MainCon_InitialText.style.display = 'block';

    StackNameTitle.textContent = 'Your stack name';

    SettingsWindow.style.display = 'none';
    darkContainer.style.display = 'none';

    stackInfoText.textContent = 'Current Stack';

    SetAppColorsToDefault();
};

function FetchPreload() {
    if (window.App != undefined) {
        let version_field = document.getElementById('info-version_field');

        let node = document.createTextNode(`Version ${window.App.version}`);
    
        version_field.appendChild(node);
    };
};

FetchPreload();

//Close the header drop down
function CloseHeaderDropDown() {
    header_btn_clicked = true;
    toggleHeaderDropDownMenu();
};