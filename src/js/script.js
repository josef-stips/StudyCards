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
let pg_ModeOverview = document.querySelector('.pg-ModeOverview');

let pg_classicMode_btn = document.querySelector('#pg-classicMode-btn');
let pg_writeMode_btn = document.querySelector('#pg-writeMode-btn');
let pg_choiceMode_btn = document.querySelector('#pg-multipleChoiceMode-btn');
let pg_connectMode_btn = document.querySelector('#pg-connectMode-btn');

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

//Fügt eine Karte einem Stapel hinzu
stappel_RueckSeite.addEventListener('keydown', (e) => {
    //Text von der karteikarte
    StInner = stappel_RueckSeite.children[0].textContent;
    StInner_vs = stappel_VorderSeite.children[0].textContent;

    if (e.key === 'Enter' && StInner != "" && StInner_vs != "") {

        e.preventDefault();

        AddCardToStack();

        ResetPlaceHolderToDefault();

    };

    if(e.key === 'Enter' && StInner_vs == "" || 
        e.key === 'Enter' && StInner == "" || 
        e.key === 'Enter' && StInner != "" && StInner_vs == "" || 
        e.key === 'Enter' && StInner != "" && StInner_vs == "front") {

        e.preventDefault();

        NeuerStapel_VS.focus();
    };
});

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

//Generall Shortcuts
document.onkeydown = (e) => {
    if (document.activeElement !== NeuerStapel_RS && 
        document.activeElement !== NeuerStapel_VS && 
        document.activeElement !== CTE_ContenteditableField && 
        document.activeElement !== mail_name_field && 
        document.activeElement !== mail_message_field
        ) {
        if(e.ctrlKey && e.which == 77) {

            SideMenu.style.width = '35vh';
    
        } else if( e.shiftKey && e.which == 77) {
    
            SideMenu.style.width = '0';
    
        } else if(e.shiftKey && e.which == 68) {
    
            Darkmode("user_event");
    
        }  else if(e.shiftKey && e.which == 76) {
    
            LightMode();
    
        }  else if(e.shiftKey && e.which == 84) {
    
            ToggleDarkMode();
    
        } else if(e.shiftKey && e.which == 80) {
    
            OpenPlayGround();
    
        }  else if(e.shiftKey && e.which == 71) {
    
            ClosePlayGround();
        }
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

//Other

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

var count_timer;

function ClosePlayGround() {
    PlayModeIsNotActive();
    ExitGame();
    pgKarteikarte.style.cursor = 'pointer';

    clearInterval(count_timer);
};

function OpenPlayGround() {
    if(TableCells.length >= 1) {
        if (Karteikarten[`${stackLocation}`].vs.length != 0) {

            PlayGround.style.display = 'flex';
            darkContainer.style.display = 'block';
            pg_countdown_wrapper.style.display = 'none'; 

        } else {
            SetUpSmallPopUp('Okay' , 'No' , 'block' , 'block' , `Add an index card first ${String.fromCodePoint(0x1F496)}`);
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

function CardView() {
    if (UntenSichtbar_Boolean) {
                
        pgKarteiKarteRS.style.color = 'var(--front-color)'
        pgKarteiKarteVS.style.color = 'rgba(255,255,255,0)'

    } else {
        pgKarteiKarteRS.style.color = 'rgba(255,255,255,0)'
        pgKarteiKarteVS.style.color = 'var(--front-color)'
    };
};

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

//That functons are called while the game
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
    if(EndScreen_Boolean == true) {
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

    let AfterGameText = document.createTextNode(`Super das du dich weiterbildest!    -    Du hast ${ZuWiederhohlen} Vokabeln zu wiederhohlen!`);
    let underText = document.createTextNode(`Deine Zeit ${playTimer.textContent}`);

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

//when user clicks to a study card in the "copy cards from one stack to the other stack" window 
//The Card gets selected by this function
let selected_cards_int = 0;

function selectSingleIndexCard() {
    let cardList = [...document.getElementsByClassName('AllCardsList_popUp-window')[0].children];

    switch (this.getAttribute('IsSelected')) {

        case 'false':
            //Change Attribute font awesome item
            this.className = "fa-solid fa-x fa-1x";
            this.setAttribute('IsSelected' , 'true');

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
            this.setAttribute('IsSelected' , 'false');

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

            ChangeStyleOfCard(e.querySelector('#Cardmini-SelectionMark') , cardList);
        };
    };
};

//Deselects all selected cards
function DeselectAllCards() {
    let cardList = [...document.getElementsByClassName('AllCardsList_popUp-window')[0].children];

    selected_cards_int = 0;
    selectedCards_Counter.textContent = `selected cards: ${selected_cards_int}/${cardList.length -1}`;

    for (let i = 0; i < cardList.length; i++) {
        const el = cardList[i];
        
        for (let i = 0; i < el.children.length; i++) {
            const e = el.children[i];
            
            e.querySelector('#Cardmini-SelectionMark').setAttribute('Isselected' , 'false')

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
function ChangeStyleOfCard(cell , cardList) {
    switch (cell.getAttribute('Isselected')) {
        case 'false':
        
            cell.setAttribute('Isselected' , 'true');

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

            cell.setAttribute('Isselected' , 'false');

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
    let Stacks = SideMenuTable.querySelector('tbody');

    //Copy Stacks from SideMenu to pop up window
    allStacks_table.textContent = null;
    allStacks_table.appendChild(Stacks.cloneNode(true));

    //pushes all cells in one array
    let table_cells = [...allStacks_table.querySelector('tbody').children];

    //remove className from all td elements
    for (let i = 0; i < table_cells.length; i++) {
        const e = table_cells[i];

        for (let i = 0; i < e.children.length; i++) {
            const ele = e.children[i];
            
            ele.classList.remove(`tableCell`);
            ele.setAttribute('cellisselected' , 'false')

            //Adds Eventlistener to cell
            addEventListenerToStackTable(ele); 

            //removes padding from first cell
            if(ele.getAttribute('data-table-index') == 1) {
                ele.style.padding = "0 0 0 0";
            };
        };
    };
};

//Adds Eventlistener to cell
function addEventListenerToStackTable(e) {
    e.addEventListener('click' , () => {
        ToggleSelectOfCell(e);
    });
};

//Toggles the Select Bool of Cell
let selected_stacks_int = 0;

function ToggleSelectOfCell(cell) {
    switch (cell.getAttribute('CellIsSelected')) {
        case 'false':
    
        cell.setAttribute('CellIsSelected' , 'true');
        cell.style.backgroundImage = "linear-gradient(to bottom right, var(--bg-table-gardiant-01), var(--bg-table-gardiant-02))";
        
        //Inccrease selected_cards variable
        selected_stacks_int++;

        selectedStacks_Counter.textContent = `selected stacks to push cards in: ${selected_stacks_int}`;

        break;

    case 'true':
        
        cell.setAttribute('CellIsSelected' , 'false');
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
        const e = table_cells[i];

        for (let i = 0; i < e.children.length; i++) {
            const ele = e.children[i];

            if(ele.getAttribute('cellisselected') == 'true') {
                stacks.push(ele.parentElement)
                ToggleSelectOfCell(ele);
            };
        };
    };

    //get selected cards
    let cardList = [...document.getElementsByClassName('AllCardsList_popUp-window')[0].children];
    
    for (let i = 0; i < cardList.length; i++) {
        const el = cardList[i];
        
        for (let i = 0; i < el.children.length; i++) {
            const e = el.children[i];
            
            if(e.children[2].getAttribute('isselected') == 'true') {
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
        localStorage.setItem(`${k.children[0].textContent}_stapel_VS` , JSON.stringify(Karteikarten[`${k.children[0].textContent}`].vs));
    };
    for (var k of stacks) {
        for (let i = 0; i < card_rs.length; i++) {
            const e = card_rs[i];
            Karteikarten[k.children[0].textContent].vr.push(e);
        };

        //saves the current stack in the loop
        localStorage.setItem(`${k.children[0].textContent}_stapel_RS` , JSON.stringify(Karteikarten[`${k.children[0].textContent}`].vr));
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
        const e = table_cells[i];

        for (let i = 0; i < e.children.length; i++) {
            const ele = e.children[i];

            if(ele.getAttribute('cellisselected') == 'true') {
                stacks.push(ele.parentElement)
                ToggleSelectOfCell(ele);
            };
        };
    };

    //get selected cards
    let cardList = [...document.getElementsByClassName('AllCardsList_popUp-window')[0].children];
    
    for (let i = 0; i < cardList.length; i++) {
        const el = cardList[i];
        
        for (let i = 0; i < el.children.length; i++) {
            const e = el.children[i];
            
            if(e.children[2].getAttribute('isselected') == 'true') {
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
        localStorage.setItem(`${k.children[0].textContent}_stapel_VS` , JSON.stringify(Karteikarten[`${k.children[0].textContent}`].vs));
    };
    for (var k of stacks) {
        for (let i = 0; i < card_rs.length; i++) {
            const e = card_rs[i];
            Karteikarten[k.children[0].textContent].vr.push(e);
        };

        //saves the current stack in the loop
        localStorage.setItem(`${k.children[0].textContent}_stapel_RS` , JSON.stringify(Karteikarten[`${k.children[0].textContent}`].vr));
    };

    //Resets the amount of selected cards/stacks
    DeselectAllCards();

    //Removes all selected cards from current stack
    RemoveSelectedCards(card_vs , card_rs , Karteikarten[stackLocation].vs , Karteikarten[stackLocation].vr);

    //Saves the current Stack the user is in and updates html
    SaveAndUpdate();

    //Updates html of pop up window
    CreateMiniCardListLoop_2();
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

//Removes a specific node from an element (from Stackoverflow)
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

//clears the formular after the email was sended 
function clearFormular() {
    mail_name_field.value = "";
    mail_message_field.value = "";
};

function FetchPreload() {
    if (window.App != undefined) {
        let version_field = document.getElementById('info-version_field');

        let node = document.createTextNode(`Version ${window.App.version}`);
    
        version_field.appendChild(node);
    };
};

FetchPreload();

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
                a.addEventListener('click' , UpdateToNextStackData);
            
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
                a.addEventListener('click' , function SendParamToFunc() {
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
        if(Karteikarten[`${stackLocation}`].vs.length != JSON.parse(localStorage.getItem(`${stackLocation}_stapel_VS`)).length) {
    
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
    };

    GetTimeData();
    GetRepsData();

    CloseHeaderDropDown();
};

//Gets the updated version of tableCells that only existed in localstorage
function GetUpdatedStackTable(UpdatedChilds) {
    let TableHTML = localStorage.getItem('UserTable');
    let HTMLreceiver = document.createElement('table');
    HTMLreceiver.innerHTML = TableHTML;

    if (HTMLreceiver.querySelector('tbody') !== null) {
        let UpdatedTableList = [...HTMLreceiver.querySelector('tbody').children];

        for (const k of UpdatedTableList) {
            UpdatedChilds.push(k.children[0])
        };
    };
};

//Close the header drop down
function CloseHeaderDropDown() {
    header_btn_clicked = true;
    toggleHeaderDropDownMenu();
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
    delete TimesArrayItem[CurrStack];
    delete AmountOfCardsItem[CurrStack];
    delete DateItem[CurrStack];
    delete RepsItem[CurrStack];

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

    delete times[CurrStack];
    delete ToRepeat[CurrStack] ;
    delete FromUserDate[CurrStack];
    delete CardsAmount[CurrStack];

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
    window.App.ChangeThisStackLoc(Stack);
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
//Die Datei die später gespeichert wird , wird immer mit den neu ausgewählten Carden ersetzt 
function modifyStackData(stack , data_VS , data_RS , addProp) {
    switch (addProp) {
        //If the user wants to add a card
        case true:

            //Proof if a Card is already saved 
            if(Stackdata[stack] != undefined && Stackdata[stack] != undefined) {

                
                if(!Stackdata[stack].vs[data_VS] && !Stackdata[stack].vs[data_RS]) {
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
        pressed_savedFile_butt = true;
        SetUpSmallPopUp('ok' , 'ah' , 'block' , 'block' , 'You first need to select cards you wanna save');

    } else if(PropAmount > 0) {
        //Saves date when data was saved
        localStorage.setItem(`${md02_stack_loc}_lastSave` , todayDate);
        //Updates html with it
        file_lastSave_field.value = localStorage.getItem(`${md02_stack_loc}_lastSave`);

        window.App.ChangeThisStackLoc(md02_stack_loc);
        window.App.CreateFile(Stackdata);

        //Deselects all selected cards from md02-pop-up
        md02_deselect_all_cards();

        pressed_savedFile_butt = true;
        SetUpSmallPopUp('ok' , 'cool' , 'block' , 'block' , 'The selected Cards are save now! Go to the "files" tab to monitor your saved file.');

        Stackdata = {};
    };
};