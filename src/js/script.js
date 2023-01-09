let stappel = document.getElementById('stappel');
let stappelHeader = document.getElementById('stappel-header');
let stappelUnderHead = document.getElementById('stappel-underhead');

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

let deleteAllCards_Button = document.getElementById('deleteAllCards_Button');
let EditCard_Button = document.getElementById('EditCard_Button');

let ShowAllCardsWind_OpenButton = document.getElementsByClassName('bn30')[0];

//Settings Window table Elements

let stsTable_Item1 = document.getElementById('stsTable-Item1');
let stsTable_Item2 = document.getElementById('stsTable-Item2');
let stsTable_Item3 = document.getElementById('stsTable-Item3');
let stsTable_Item4 = document.getElementById('stsTable-Item4');

let sts_HeadTitle = document.getElementById('sts-head-title');

let sts_FirstContent = document.getElementById('first-content');
let sts_SecondContent = document.getElementById('sec-content');
let sts_ThirdContent = document.getElementById('third-content');
let sts_FourthContent = document.getElementById('fourth-content');

//Small PopUp window 
let SmallPopUp = document.getElementsByClassName('small-pop-up')[0];
let spu_YesButton = document.getElementById('PopUp-yes-button');
let spu_NoButton = document.getElementById('PopUp-no-button');
let spu_text = document.getElementById('spu-text');

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

let TableCells = [];

//On the Settings Window there are buttons at the side with names
//If you click on any of these this variable has the same name as the button you just clicked
//"Shortcuts" is default
let Settings_tabLocation = 'Shortcuts';

let pressed_DeleteAllStacks_butt = false;
let pressed_DeleteCurrStack_butt = false;

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
}


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

    StackNameTitle.textContent = stackLocation

} else {
    StackNameTitle.textContent = 'Your stack name';
};

if (TableCells.length >= 1) {

    PlayGroundHeader.textContent = stackLocation;
    stappelHeader.textContent = `your ${stackLocation} stack`;
    stappelUnderHead.textContent = `Amount of the index cards: (${Karteikarten[`${stackLocation}`].vs.length})`;

    MainCon_InitialText.style.display = 'none';
    MainContent.style.display = 'flex';

    //Defines new Array for front and back cards from the original array.
    //When the user clicks on the stack field to start the game , this two arrays get mixed by a funtion
    let PlayGround_Cards_VS = Karteikarten[`${stackLocation}`].vs;
    let PlayGround_Cards_RS = Karteikarten[`${stackLocation}`].vr;

} else {
 
    MainCon_InitialText.style.display = 'block';
    MainContent.style.display = 'none';
    SideMenuTable.style.display = 'none';

};

//Fügt eine Karte einem Stapel hinzu
stappel_RueckSeite.addEventListener('keydown', (e) => {

    if (e.key === 'Enter') {

                e.preventDefault();

                //Anderes
                let StInner = stappel_RueckSeite.innerText;
                let StInner_vs = stappel_VorderSeite.innerText;

        if (StInner != 'back' && StInner_vs != 'front' && StInner != '') {
            Karteikarten[`${stackLocation}`].vr.push(StInner);
            Karteikarten[`${stackLocation}`].vs.push(StInner_vs);

            
            pgKarteiKarteVS.querySelector('h3').textContent = `${Karteikarten[`${stackLocation}`].vs[0]}`;
            pgKarteiKarteRS.querySelector('h3').textContent = `${Karteikarten[`${stackLocation}`].vr[0]}`;
    
            stappelUnderHead.textContent = `Amount of the index cards: (${Karteikarten[`${stackLocation}`].vs.length})`;

            //Stapel wird gespeichert
            localStorage.setItem(`${stackLocation}_stapel_VS` , JSON.stringify(Karteikarten[`${stackLocation}`].vs));
            localStorage.setItem(`${stackLocation}_stapel_RS` , JSON.stringify(Karteikarten[`${stackLocation}`].vr));

            //Sets focus to the first field (Vorderseite)
            NeuerStapel_VS.focus();

            for (let i = 0; i < NewStapel_Field.length; i++) {
                const element = NewStapel_Field[i];
                const El_placeholder = element.getAttribute('data-placeholder');

                element.textContent = '';
                NeuerStapel_RS.textContent = El_placeholder;
                
            };
        };
    };
});

stappel_VorderSeite.addEventListener('keydown' , (e) => {
    if(e.key === 'Enter') {
        
        e.preventDefault();

        NeuerStapel_RS.focus();
    };
});

// Um mit den Arrow Keys zwischen den Feldern zu switchen
stappel_VorderSeite.addEventListener('keyup' , (el) => {
    if(el.which === 40) {
        NeuerStapel_RS.focus();
    }
});

stappel_RueckSeite.addEventListener('keyup' , (el) => {
    if(el.which === 38) {
        NeuerStapel_VS.focus();
    }
});


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
    aEl.addEventListener('click' , deleteSingleIndexCard)

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

//Generall Shortcuts
document.onkeydown = (e) => {

    if(e.ctrlKey && e.which == 77) {

        SideMenu.style.width = '35vh';

    } else if( e.shiftKey && e.which == 77) {

        SideMenu.style.width = '0';

    } else if(e.shiftKey && e.which == 68) {

        Darkmode();

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

//Button in the header (moon)
ColorSwitcher.addEventListener('click' , () => {
    ToggleDarkMode();
});

function ToggleDarkMode() {
    document.body.classList.toggle('dark-mode');


    if(document.body.classList == 'dark-mode') {

        if(CheckButton_Blur == true) {

            r.style.setProperty('--button-blur' , 'rgba(0,0,0,0.4)');
            r.style.setProperty('--button-hover-color-special' , 'rgba(0,0,0,0.4)');
    
        } else if(CheckButton_Blur == false) {
    
            r.style.setProperty('--button-blur' , 'rgba(0,0,0,1)');
            r.style.setProperty('--button-hover-color-special' , '#5070d6');
        };

    } else if(document.body.classList != 'dark-mode') {

        if(CheckButton_Blur == true) {

            r.style.setProperty('--button-blur' , 'rgba(255,255,255,0.6)');
            r.style.setProperty('--button-hover-color-special' , 'rgba(0,0,0,0.6)');
    
        } else if(CheckButton_Blur == false) {
    
            r.style.setProperty('--button-blur' , 'rgba(255,255,255,1)');
            r.style.setProperty('--button-hover-color-special' , '#5070d6');
        };

    }
};

function LightMode() {
    document.body.classList.add('dark-mode');

    if(CheckButton_Blur == true) {

        r.style.setProperty('--button-blur' , 'rgba(0,0,0,0.4)');
        r.style.setProperty('--button-hover-color-special' , 'rgba(0,0,0,0.4)');

    } else if(CheckButton_Blur == false) {

        r.style.setProperty('--button-blur' , 'rgba(0,0,0,1)');
        r.style.setProperty('--button-hover-color-special' , '#5070d6');
    };
};

function Darkmode() {
    document.body.classList.remove('dark-mode');

    if(CheckButton_Blur == true) {

        r.style.setProperty('--button-blur' , 'rgba(255,255,255,0.6)');
        r.style.setProperty('--button-hover-color-special' , 'rgba(0,0,0,0.6)');

    } else if(CheckButton_Blur == false) {

        r.style.setProperty('--button-blur' , 'rgba(255,255,255,1)');
        r.style.setProperty('--button-hover-color-special' , '#5070d6');
    };
};

// A few button events
sdm_XIcon.addEventListener('click' , () => {
    if (TableCells.length >= 1) {

        SetUpSmallPopUp('Yes' , 'No' , 'block' , 'block' , 'Do you really want to delete the current stack?');

        pressed_DeleteCurrStack_butt = true;

    } else {
        SetUpSmallPopUp('Okay' , 'Oh' , 'block' , 'block' , `There is no stack to delete... ${String.fromCodePoint(0x1F928)} `);
    };
})

sdm_TrashIcon.addEventListener('click' , () => {
    if (TableCells.length >= 1) {

        SetUpSmallPopUp('Yes' , 'No' , 'block' , 'block' , 'Do you really want to delete all stacks?');

        pressed_DeleteAllStacks_butt = true;

    } else {
        SetUpSmallPopUp('Okay' , 'Oh' , 'block' , 'block' , `There are no stacks in your Storage to delete... ${String.fromCodePoint(0x1F928)} `);
    };
})

spu_YesButton.addEventListener('click' , () => {
    SmallPopUp.style.display = 'none';
    
    if (PlayMode == true) {
        deleteAllCards();

        PlayMode = false;

    } else if(PlayMode == false && pressed_DeleteAllStacks_butt == false && pressed_DeleteCurrStack_butt == false) {
        darkContainer.style.display = 'none';

    } else if(pressed_DeleteAllStacks_butt == true) {
        DeleteAllStacks();

        darkContainer.style.display = 'none';

        pressed_DeleteAllStacks_butt = false;

    } else if(pressed_DeleteCurrStack_butt == true) {
        DeleteCurrentStack();

        darkContainer.style.display = 'none';

        pressed_DeleteCurrStack_butt = false;
    };
})

spu_NoButton.addEventListener('click' , () => {
    if (PlayMode == true) {
        SmallPopUp.style.display = 'none';

    } else if(PlayMode == false && pressed_DeleteAllStacks_butt == false && pressed_DeleteCurrStack_butt == false) {

        SmallPopUp.style.display = 'none';
        darkContainer.style.display = 'none';

    } else if(pressed_DeleteAllStacks_butt == true) {

        darkContainer.style.display = 'none';
        SmallPopUp.style.display = 'none';

        pressed_DeleteAllStacks_butt = false;

    } else if(pressed_DeleteCurrStack_butt == true) {
        darkContainer.style.display = 'none';
        SmallPopUp.style.display = 'none';


        pressed_DeleteCurrStack_butt = false;
    };
})

deleteAllCards_Button.addEventListener('click' , () => {
    SetUpSmallPopUp('Yes' , 'No' , 'block' , 'block' , 'Do you really want to irrevocably delete all cards?');
});

EditCard_Button.addEventListener('click' , () => {
    EditCardName();
    MakeCardEditPossible();
});

//Settings Window - table side element cells (tr->td)
stsTable_Item1.addEventListener('click' ,  () => {
    Settings_tabLocation = stsTable_Item1.textContent;

    sts_HeadTitle.textContent = Settings_tabLocation;

    sts_FirstContent.style.display = 'block';
    sts_SecondContent.style.display = 'none';
    sts_ThirdContent.style.display = 'none';
    sts_FourthContent.style.display = 'none';
})

stsTable_Item2.addEventListener('click' ,  () => {
    Settings_tabLocation = stsTable_Item2.textContent;

    sts_HeadTitle.textContent = Settings_tabLocation;

    sts_FirstContent.style.display = 'none';
    sts_SecondContent.style.display = 'block';
    sts_ThirdContent.style.display = 'none';
    sts_FourthContent.style.display = 'none';
})

stsTable_Item3.addEventListener('click' ,  () => {
    Settings_tabLocation = stsTable_Item3.textContent;

    sts_HeadTitle.textContent = Settings_tabLocation;

    sts_FirstContent.style.display = 'none';
    sts_SecondContent.style.display = 'none';
    sts_ThirdContent.style.display = 'block';
    sts_FourthContent.style.display = 'none';
})

stsTable_Item4.addEventListener('click' ,  () => {
    Settings_tabLocation = stsTable_Item4.textContent;

    sts_HeadTitle.textContent = Settings_tabLocation;

    sts_FirstContent.style.display = 'none';
    sts_SecondContent.style.display = 'none';
    sts_ThirdContent.style.display = 'none';
    sts_FourthContent.style.display = 'block';
})

//Other
NavPen.addEventListener('click' , () => {
    NeuerStapel_VS.focus();
});

ShowAllCardsWind_OpenButton.addEventListener('click' , () => {
    ShowAllcardsWind.style.display = 'flex';
    darkContainer.style.display = 'block';
    
    CreateMiniCardListLoop();
});

ShowAllCardsWind_ClsButton.addEventListener('click' , () => {
    ShowAllcardsWind.style.display = 'none';

    pgKarteiKarteVS.querySelector('h3').textContent = `${Karteikarten[`${stackLocation}`].vs[0]}`;
    pgKarteiKarteRS.querySelector('h3').textContent = `${Karteikarten[`${stackLocation}`].vr[0]}`;
});

pgNochmalButton.addEventListener('click' , () => {
    PlayModeIsNotActive();
    GameEnd = false;

    pgKarteikarte.style.cursor = 'pointer';
});

pgSpaeterButton.addEventListener('click' , () => {
    ExitGame();

    pgKarteikarte.style.cursor = 'pointer';
});

pgWiederhohlenButton.addEventListener('click' , () => {
    ZuWiederhohlen++;

    ShowNextCard();
})

pgKannIchButton.addEventListener('click', () => {
    ShowNextCard();
})

pgKarteikarte.addEventListener('click', () => {
    if (GameEnd == false) {
        PlayModeIsActive();

        start_Timer();//Timer function of 'timer.js' file
    }
})

stappel.addEventListener('click', () => {
    OpenPlayGround();
})

pgNavClickEl_1.addEventListener('click', () => {
    ClosePlayGround();
});

pgNavClickEl_2.addEventListener('click', () => {
    ClosePlayGround();
});

pgNavClickEl_3.addEventListener('click' , () => {
    PlayModeIsNotActive();
    // DefineValueForStackArray();

    GameEnd = false;

    pgKarteikarte.style.cursor = 'pointer';
});

////////////////////////////////////////
pgObenSichtbarDiv.addEventListener('click', () => {
    if(document.body.className !=  'dark-mode') {
        pgKarteiKarteRS.style.color = 'rgba(255,255,255,0)'
        pgKarteiKarteVS.style.color = 'var(--font-color)'

    } else {
        pgKarteiKarteRS.style.color = 'rgba(255,255,255,0)'
        pgKarteiKarteVS.style.color = 'var(--font-color)'

    };

    UntenSichtbar_Boolean = false;
});

pgUntenSichtbarDiv.addEventListener('click', () => {
    if(document.body.className !=  'dark-mode') {

        pgKarteiKarteRS.style.color = 'var(--font-color)'
        pgKarteiKarteVS.style.color = 'rgba(255,255,255,0)'

    } else {
        pgKarteiKarteRS.style.color = 'var(--font-color)'
        pgKarteiKarteVS.style.color = 'rgba(255,255,255,0)'

    };

    UntenSichtbar_Boolean = true;
});
///////////////////////////////////////

CTE_AbortButton.addEventListener('click', () => {
    AbortUserStackName();
})

CTE_DeleteButton.addEventListener('click', () => {
    DeleteStackNameInPopUp();
})


CTE_AcceptButton.addEventListener('click', () => {
    AcceptUserStackName();
});

SideMenuAddButton.addEventListener('click', () => {
    CreateTableElWindow.style.display = 'block';
    darkContainer.style.display = 'block';

    //Sets focus to contenteditable area (so its comfortabler for the user to use the app)
    CTE_ContenteditableField.focus();

})

SideMenuOpenButton.addEventListener('click', () => {
    SideMenu.style.width = '35vh';
});

clsCloseButton.addEventListener('click', () => {
    SideMenu.style.width = '0';
});

SettingsWindowOpenButton.addEventListener('click', () => {
    SettingsWindow.style.display = 'flex';
    darkContainer.style.display = 'block';
});

SettingCloseButton.addEventListener('click', () => {
    SettingsWindow.style.display = 'none';
    darkContainer.style.display = 'none';
});

Check_ForEdit_Button.addEventListener('click' , () => {
    EndEditMode();
    SaveEditChanges();
});

ShowCardsWind_InfoButt.addEventListener('click' , () => {
    ShowCards_SideContent.innerHTML = `<h2 id="SideCont_Text" >You pressed the info button :)</h2>`;

});

CreateTableElWindow.addEventListener('keydown' , (e) => {
    if(e.key === 'Enter') {
        AcceptUserStackName();

        e.preventDefault();
    };

    if (e.key === 'Escape') {
        AbortUserStackName();
    };

    if(e.key === 'Delete') {
        DeleteStackNameInPopUp();
    };
});

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

function ClosePlayGround() {
    PlayModeIsNotActive();
    ExitGame();
    pgKarteikarte.style.cursor = 'pointer';
};

function OpenPlayGround() {
    if(TableCells.length >= 1) {
        if (Karteikarten[`${stackLocation}`].vs.length != 0) {
            //Defines value for two arrays with copied values from the users first stack as default
            DefineValueForStackArray();

            PlayGround.style.display = 'flex';
            darkContainer.style.display = 'block';  

            pgKarteiKarteVS.querySelector('h3').textContent = PlayGround_Cards_VS[0];
            pgKarteiKarteRS.querySelector('h3').textContent = PlayGround_Cards_RS[0];

            //If User clicked "view below" button or "view_above" button.
            CardView();

            PlayMode = true;

        } else {
            SetUpSmallPopUp('Okay' , 'No' , 'block' , 'block' , `Add an index card first ${String.fromCodePoint(0x1F496)}`);
        }
    };
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
    if (CTE_ContenteditableField.textContent != '') {
        let Content = CTE_ContenteditableField.textContent
    
        CreateTableElement(Content);
    
        CreateTableElWindow.style.display = 'none';
        darkContainer.style.display = 'none'; 
        CTE_ContenteditableField.textContent = null;
    }
};

//That functons are called while the game
function PlayModeIsActive() {
    PlayMode = true;

    pgKarteiKarteRS.style.color = 'var(--front-color)';
    pgKarteiKarteVS.style.color = 'var(--front-color)';
    pgShowCardsButton.style.display = 'none';
    pgSubDoubleButton.style.marginTop = '4.4%'

    pgUntenSichtbarDiv.style.display = 'none';
    pgObenSichtbarDiv.style.display = 'none';

    pgKannIchButton.style.display = 'block';
    pgWiederhohlenButton.style.display = 'block';
};

//Wird aufgerufen wenn User das Spiel durch das klicken von einem "Exit-Button" verlässt.
//Als "Exit-Button" steht das "Häkchen-Button" und das "Kreuz-Button" als Verfügung
//Wenn der "Später Button" beim End-Screen betätigt wird, wird diese Funktion ebenfafalls aufgerufen
function PlayModeIsNotActive() {
    if(EndScreen_Boolean == true) {
        pgKarteikarte.removeChild(pgKarteikarte.lastElementChild);
        pgKarteikarte.removeChild(pgKarteikarte.lastElementChild);
    };

    EndScreen_Boolean = false;
    Runde = 0;
    ZuWiederhohlen = 0;

    pgKarteiKarteVS.querySelector('h3').textContent = `${Karteikarten[`${stackLocation}`].vs[Runde]}`;
    pgKarteiKarteRS.querySelector('h3').textContent = `${Karteikarten[`${stackLocation}`].vr[Runde]}`;

    //Checks if the front or the back should be shown as default
    CardView();

    pgShowCardsButton.style.display = 'flex';
    pgSubDoubleButton.style.marginTop = '1.5%'

    pgUntenSichtbarDiv.style.display = 'block';
    pgObenSichtbarDiv.style.display = 'block';

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
        PlayModeIsNotActive();
    
        PlayGround.style.display = 'none';
        darkContainer.style.display = 'none';

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

        ShowEndText();
        ShowOptionsAfterGame();

        stop_Timer();//Timer function of 'timer.js' file

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
    PlayGround_Cards_VS = Karteikarten[`${stackLocation}`].vs;
    PlayGround_Cards_RS = Karteikarten[`${stackLocation}`].vr;

    shuffle(PlayGround_Cards_VS, PlayGround_Cards_RS);
};


//Function which shuffles an array
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
    }
};

//This function creates a contenteditable table element for the user
function CreateTableElement(user_input) {
    let LastChildDataSet

    if (TableCells.length >= 1 && SideMenuTable.getElementsByTagName('tbody').length >= 1) {
        LastChildDataSet = document.getElementById('sdm-table').querySelector('tbody').lastElementChild.lastElementChild.getAttribute('data-table-index');
    } else {
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
    Karteikarten = {};
    TableCells = [];

    localStorage.clear();

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
};

//Deletes the current stack
function DeleteCurrentStack() {
    let CurrStack = stackLocation;
    let LiveTableList = SideMenuTable.querySelector('tbody').children

    for(i=0;i < LiveTableList.length;i++) {

        if (LiveTableList[i].innerText == CurrStack) {
            removeSpecificNode(i, CurrStack);
        };
    };

    //Switches to the next stack in your table
    SwitchToNextStack();
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

    SwitchToNextStack();
};

//Switches to the next stack in your table
function SwitchToNextStack() {
    //Sets the focus to the next stack. If there is no stack anymore , another function will be called.
    if(TableCellList.length >= 1) {

        if(i <= 0) {
            SetFocusToTable(TableCellList[i].textContent ,Karteikarten[`${TableCellList[i].textContent}`].vs.length);

        } else if(i == TableCellList.length) {
            SetFocusToTable(TableCellList[i - 1].textContent ,Karteikarten[`${TableCellList[i - 1].textContent}`].vs.length);

        }  else if(i == TableCellList.length - 1) {
            SetFocusToTable(TableCellList[i - 1].textContent ,Karteikarten[`${TableCellList[i - 1].textContent}`].vs.length);

        } else if(i > 0) {
            SetFocusToTable(TableCellList[i].textContent ,Karteikarten[`${TableCellList[i - 1].textContent}`].vs.length);
        };

    } else if(TableCellList.length <= 0) {
        AllStacksDeleted();
    };
};


//When all stacks are deleted , this function shows the right things in the document
function AllStacksDeleted() {
    SideMenuTable.style.display = 'none';
    MainContent.style.display = 'none';
    MainCon_InitialText.style.display = 'block';
    StackNameTitle.textContent = 'Your stack name';

    setTimeout(() => {
        SideMenu.style.width = '0';
    } , 10);
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