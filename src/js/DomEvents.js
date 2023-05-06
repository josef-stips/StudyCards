//variable
let DropDownIsOpen = false;

// A few button events
cards_wrapper_question_mark.addEventListener('click', () => {
    md02_info_pop_up.style.display = 'block';
});

md02_infoPopup_close_btn.addEventListener('click', () => {
    md02_info_pop_up.style.display = 'none';
});

md02_selectOppo_cards_btn.addEventListener('click', () => {
    md02_select_oppo_cards();
});

md02_deselect_cards_btn.addEventListener('click', () => {
    md02_deselect_all_cards();
});

ScrollToLeft = false;
ScrollToRight = false;

scrollToRight_btn.addEventListener('click', () => {
    if (!ScrollToLeft) {
        ScrollToRight = true;
        scrollToRightSlowly();
        ScrollToRight = false;
    };
});

scrollToLeft_btn.addEventListener('click', () => {
    if (!ScrollToRight) {
        ScrollToLeft = true;
        scrollToLeftSlowly();
        ScrollToLeft = false;
    };
});

DeleteChartData_btn.addEventListener('click', () => {
    DeleteChartData();
});

header_btn_clicked = false;
header_StackDropDownMenu_btn.addEventListener('click', () => {
    toggleHeaderDropDownMenu();
});

checkbox_clicked = true;
chart_firstcheckbox.addEventListener('click', () => {
    switch (checkbox_clicked) {
        case false:

            chart_firstcheckbox.className = 'fa-regular fa-square-check';
            checkbox_clicked = true;

            ActivateMixedChart();
            break;

        case true:

            chart_firstcheckbox.className = 'fa-regular fa-square';
            checkbox_clicked = false;

            DeactivateMixedChart();
            break;
    };
});

checkbox_clicked02 = true;
chart_seccheckbox.addEventListener('click', () => {
    switch (checkbox_clicked02) {
        case false:

            chart_seccheckbox.className = 'fa-regular fa-square-check';
            checkbox_clicked02 = true;

            ActivateMixedChart02();
            break;

        case true:

            chart_seccheckbox.className = 'fa-regular fa-square';
            checkbox_clicked02 = false;

            DeactivateMixedChart02();
            break;
    };
});

toggleDropDownMenu_btn.addEventListener('click', () => {
    toggleDropDownMenu();
});

selectOppo_cards_btn.addEventListener('click', () => {
    ToggleSelectOppositecards();
});

copy_cards_btn.addEventListener('click', () => {
    if (Karteikarten.length != {} && selected_stacks_int != 0 && selected_cards_int != 0) {

        SetUpSmallPopUp('yes', 'actually not', 'block', 'block', `Are you sure you want to copy ${selected_cards_int} cards in ${selected_stacks_int} stacks?`);
        pressed_copyCards_butt = true;

    } else {
        pressed_copyCards_butt = true;
        SetUpSmallPopUp('oh ok', 'sensible', 'block', 'block', `You first need to select a card and a stack if there is one.`);
    };
});

transfer_cards_btn.addEventListener('click', () => {
    if (Karteikarten.length != {} && selected_stacks_int != 0 && selected_cards_int != 0) {

        SetUpSmallPopUp('yes', 'actually not', 'block', 'block', `Are you sure you want to transfer ${selected_cards_int} cards in ${selected_stacks_int} stacks?`);
        pressed_transferCards_butt = true;

    } else {
        pressed_transferCards_butt = true;
        SetUpSmallPopUp('oh ok', 'sensible', 'block', 'block', `You first need to select a card and a stack if there is one.`);
    };
});

abort_transfer_btn.addEventListener('click', () => {
    DeselectAllCards();
});

email_send_btn.addEventListener('click', (e) => {
    e.preventDefault();

    SendMail();

    pressed_SendMail_butt = true;
});

second_md_PopUp_Header_item.addEventListener('click', () => {
    md_PopUp_TransferCards.style.display = 'none';
    darkContainer.style.display = 'none';

    selected_cards_int = 0;
    selected_stacks_int = 0;

    selectedStacks_Counter.textContent = `selected stacks to push cards in: ${selected_stacks_int}`;

    if (Karteikarten[stackLocation] != undefined) {
        selectedCards_Counter.textContent = `selected cards: ${selected_cards_int}/${Karteikarten[stackLocation].vs.length}`;
    };
});

second_DownloadCards_Header_item.addEventListener('click', () => {
    md_PopUp_DownloadCards.style.display = 'none';
    darkContainer.style.display = 'none';

    Selected_FileCards = [];
    FileCards_SelectedCards_Amount = 0;
    opened_md02_popUp = false;
});

second_TimesProgress_Header_item.addEventListener('click', () => {
    md_PopUp_TimesProgress.style.display = 'none';
    DropDownIsOpen = true;
    toggleDropDownMenu();

    //Bug Fix: When the user turns off the mixed chart leave and opens the window again , an error message returns.
    //This piece of code first calls two functions. These functions turn on the mixed chart again and the code below makes the icon a checked check-box
    ActivateMixedChart();
    ActivateMixedChart02();

    chart_firstcheckbox.className = 'fa-regular fa-square-check';
    checkbox_clicked = true;
    chart_seccheckbox.className = 'fa-regular fa-square-check';
    checkbox_clicked02 = true;

    //So the app is no longer darker
    darkContainer.style.display = 'none';
});

sn_transferCards_butt.addEventListener('click', () => {
    darkContainer.style.display = 'block';

    if (TableCells[0] != null) {
        md_PopUp_TransferCards.style.display = 'block';

        CreateMiniCardListLoop_2();
        GetStackTable();

        selectedCards_Counter.textContent = `selected cards: ${selected_cards_int}/${Karteikarten[stackLocation].vs.length}`;

    } else {
        SetUpSmallPopUp('ok', 'aj', 'block', 'block', 'There is no stack availible');
    };

    //closes the header drop down menu when it's open
    CloseHeaderDropDown();
});

sn_saveStack_butt.addEventListener('click', () => {
    opened_md02_popUp = true;
    darkContainer.style.display = 'block';

    //closes the header drop down menu when it's open
    CloseHeaderDropDown();

    md02_selected_cards = 0;
    md02_stack_loc = stackLocation;

    if (TableCells[0] != null) {
        md_PopUp_DownloadCards.style.display = 'flex';

        CreateMiniCardListLoop_3();
        GetStacks();

        md02_selectedCards_counter.textContent = `selected cards: ${md02_selected_cards}/${Karteikarten[stackLocation].vs.length}`;
        md02_selectedStacks_shower.textContent = stackLocation + " | ";
        file_namefield.value = stackLocation;
        md02_stackOverview_tab.style.display = 'block';

        //Changes stackLocation from preload.js so both is the same
        window.App.ChangeThisStackLoc(stackLocation, Karteikarten);
        //Calls Function from preload.js
        //Checks if File with Stacklocation name is already saved
        window.App.CheckFileExists();

        //Checks if localStorage property exists and displays the property
        if (localStorage.getItem(`${stackLocation}_lastSave`)) {
            file_lastSave_field.value = localStorage.getItem(`${stackLocation}_lastSave`);

        } else {
            file_lastSave_field.value = '-';
        };

    } else {
        md_PopUp_DownloadCards.style.display = 'flex';
        md02_OpenTab('none', 'flex', 'none', 'block');
        OpenFilesTab();
        // SetInitialText_DownloadCardsWindow();   
        md02_stackOverview_tab.style.display = 'none';
    };
});

sn_timeChart_butt.addEventListener('click', () => {
    md_PopUp_TimesProgress.style.display = 'block';

    darkContainer.style.display = 'block';

    if (CurrChartStack != "") {
        stackInfoText.textContent = `Current Stack - ${CurrChartStack}`;
    } else if (CurrChartStack == "" && stackLocation == "") {
        stackInfoText.textContent = `Current Stack`;
    } else if (CurrChartStack == "" && stackLocation != "") {
        stackInfoText.textContent = `Current Stack - ${stackLocation}`;
    };

    GetRepsData();
    GetTimeData();

    //closes the header drop down menu when it's open
    CloseHeaderDropDown();
});

ResetApp_Butt.addEventListener('click', () => {
    spu_text.style.fontSize = "23px";

    SetUpSmallPopUp('Yeah why not', 'No what the hell', 'block', 'block', 'This is IRREVERSIBLE! All costum changes and Studycards will be deleted!')
    pressed_ResetApp_butt = true;
});

SetColorToDefault_Butt.addEventListener('click', () => {
    SetUpSmallPopUp('Yea', 'Nope', 'block', 'block', 'Want to reset the app colors to default?');
    pressed_ResetColors_butt = true;
});

sdm_XIcon.addEventListener('click', () => {
    if (TableCells.length >= 1) {

        SetUpSmallPopUp('Yes', 'No', 'block', 'block', 'Do you really want to delete this stack?');

        pressed_DeleteCurrStack_butt = true;

    } else {
        SetUpSmallPopUp('Okay', 'Oh', 'block', 'block', `There is no stack to delete... ${String.fromCodePoint(0x1F928)} `);
    };
})

sdm_TrashIcon.addEventListener('click', () => {
    if (TableCells.length >= 1) {

        SetUpSmallPopUp('Yes', 'No', 'block', 'block', 'Do you really want to delete all stacks?');

        pressed_DeleteAllStacks_butt = true;

    } else {
        SetUpSmallPopUp('Okay', 'Oh', 'block', 'block', `There are no stacks in your Storage to delete... ${String.fromCodePoint(0x1F928)} `);
    };
})

spu_YesButton.addEventListener('click', () => {
    SmallPopUp.style.display = 'none';

    if (PlayMode == false &&
        pressed_DeleteAllStacks_butt == false &&
        pressed_DeleteCurrStack_butt == false &&
        pressed_ResetColors_butt == false &&
        pressed_ResetApp_butt == false &&
        pressed_SendMail_butt == false &&
        pressed_transferCards_butt == false &&
        pressed_copyCards_butt == false &&
        pressed_savedFile_butt == false &&
        pressed_small_pop_up == false &&
        pressed_deleteAllCards_butt == false &&
        pressed_deleteSubTopic == false &&
        pressed_deleteFile_butt == false) {

        darkContainer.style.display = 'none';

    } else if (pressed_DeleteAllStacks_butt == true) {
        DeleteAllStacks();

        darkContainer.style.display = 'none';

        pressed_DeleteAllStacks_butt = false;

    } else if (pressed_DeleteCurrStack_butt == true) {
        DeleteCurrentStack();

        darkContainer.style.display = 'none';

        pressed_DeleteCurrStack_butt = false;

    } else if (pressed_ResetColors_butt == true) {
        SetAppColorsToDefault();

        pressed_ResetColors_butt = false;

    } else if (pressed_ResetApp_butt == true) {
        ResetApp();

        pressed_ResetApp_butt = false;

    } else if (pressed_SendMail_butt == true) {

        pressed_SendMail_butt = false;

        //Clears Formular
        clearFormular();
    } else if (pressed_transferCards_butt == true && selected_cards_int != 0 && selected_stacks_int != 0) {

        pressed_transferCards_butt = false;

        TransferCards();

    } else if (pressed_copyCards_butt == true && selected_cards_int != 0 && selected_stacks_int != 0) {

        pressed_copyCards_butt = false;

        CopyCards();

    } else if (pressed_savedFile_butt == true) {
        pressed_savedFile_butt = false;

    } else if (pressed_small_pop_up == true) {
        pressed_small_pop_up = false;

    } else if (pressed_deleteAllCards_butt == true) {

        pressed_deleteAllCards_butt = false;
        deleteAllCards();

    } else if (pressed_deleteSubTopic == true) {
        pressed_deleteSubTopic = false;
        deleteSubTopic(subtopic_toDelete);
        darkContainer.style.display = 'none';

    } else if (pressed_deleteFile_butt == true) {
        pressed_deleteFile_butt = false;
        md02_deleteFile(li_File);
    };
})

spu_NoButton.addEventListener('click', () => {
    if (PlayMode == false &&
        pressed_DeleteAllStacks_butt == false &&
        pressed_DeleteCurrStack_butt == false &&
        pressed_ResetColors_butt == false &&
        pressed_ResetApp_butt == false &&
        pressed_SendMail_butt == false &&
        pressed_transferCards_butt == false &&
        pressed_copyCards_butt == false &&
        pressed_savedFile_butt == false &&
        pressed_small_pop_up == false &&
        pressed_deleteAllCards_butt == false &&
        pressed_deleteSubTopic == false &&
        pressed_deleteFile_butt == false) {

        SmallPopUp.style.display = 'none';
        darkContainer.style.display = 'none';

    } else if (pressed_DeleteAllStacks_butt == true) {

        darkContainer.style.display = 'none';
        SmallPopUp.style.display = 'none';

        pressed_DeleteAllStacks_butt = false;

    } else if (pressed_DeleteCurrStack_butt == true) {

        darkContainer.style.display = 'none';
        SmallPopUp.style.display = 'none';

        pressed_DeleteCurrStack_butt = false;

    } else if (pressed_ResetColors_butt == true) {

        SmallPopUp.style.display = 'none';

        pressed_ResetColors_butt = false;

    } else if (pressed_ResetApp_butt == true) {

        SmallPopUp.style.display = 'none';
        pressed_ResetApp_butt = false;

    } else if (pressed_SendMail_butt == true) {

        SmallPopUp.style.display = 'none';
        pressed_SendMail_butt = false;

        //Clears Formular 
        clearFormular();

    } else if (pressed_transferCards_butt == true) {

        SmallPopUp.style.display = 'none';
        pressed_transferCards_butt = false;

    } else if (pressed_copyCards_butt == true) {

        SmallPopUp.style.display = 'none';
        pressed_copyCards_butt = false;

    } else if (pressed_savedFile_butt == true) {

        SmallPopUp.style.display = 'none';
        pressed_savedFile_butt = false;

    } else if (pressed_small_pop_up == true) {

        SmallPopUp.style.display = 'none';
        pressed_small_pop_up = false;

    } else if (pressed_deleteAllCards_butt == true) {

        SmallPopUp.style.display = 'none';
        pressed_deleteAllCards_butt = false;

    } else if (pressed_deleteSubTopic == true) {
        darkContainer.style.display = 'none';
        SmallPopUp.style.display = 'none';
        pressed_deleteSubTopic = false;

    } else if (pressed_deleteFile_butt == true) {
        SmallPopUp.style.display = 'none';
        pressed_deleteFile_butt = false;
    };
})

deleteAllCards_Button.addEventListener('click', () => {
    pressed_deleteAllCards_butt = true;
    SetUpSmallPopUp('Yes', 'No', 'block', 'block', 'Do you really want to irrevocably delete all cards?');
});

EditCard_Button.addEventListener('click', () => {
    EditCardName();
    MakeCardEditPossible();
});

//Settings Window - table side element cells (tr->td)
stsTable_Item1.addEventListener('click', () => {
    Settings_tabLocation = stsTable_Item1.textContent;

    sts_HeadTitle.textContent = Settings_tabLocation;

    sts_FirstContent.style.display = 'block';
    sts_SecondContent.style.display = 'none';
    sts_ThirdContent.style.display = 'none';
    sts_FourthContent.style.display = 'none';
    sts_FiftContent.style.display = 'none';
})

stsTable_Item2.addEventListener('click', () => {
    Settings_tabLocation = stsTable_Item2.textContent;

    sts_HeadTitle.textContent = Settings_tabLocation;

    sts_FirstContent.style.display = 'none';
    sts_SecondContent.style.display = 'block';
    sts_ThirdContent.style.display = 'none';
    sts_FourthContent.style.display = 'none';
    sts_FiftContent.style.display = 'none';
})

stsTable_Item3.addEventListener('click', () => {
    Settings_tabLocation = stsTable_Item3.textContent;

    sts_HeadTitle.textContent = Settings_tabLocation;

    sts_FirstContent.style.display = 'none';
    sts_SecondContent.style.display = 'none';
    sts_ThirdContent.style.display = 'block';
    sts_FourthContent.style.display = 'none';
    sts_FiftContent.style.display = 'none';
})

stsTable_Item4.addEventListener('click', () => {
    Settings_tabLocation = stsTable_Item4.textContent;

    sts_HeadTitle.textContent = Settings_tabLocation;

    sts_FirstContent.style.display = 'none';
    sts_SecondContent.style.display = 'none';
    sts_ThirdContent.style.display = 'none';
    sts_FourthContent.style.display = 'block';
    sts_FiftContent.style.display = 'none';
})

stsTable_Item5.addEventListener('click', () => {
    Settings_tabLocation = stsTable_Item5.textContent;

    sts_HeadTitle.textContent = Settings_tabLocation;

    sts_FirstContent.style.display = 'none';
    sts_SecondContent.style.display = 'none';
    sts_ThirdContent.style.display = 'none';
    sts_FourthContent.style.display = 'none';
    sts_FiftContent.style.display = 'block';
});

//Other
NavPen.addEventListener('click', () => {
    //Text von der karteikarte
    var StInner = stappel_RueckSeite.children[0].textContent;
    var StInner_vs = stappel_VorderSeite.children[0].textContent;

    if (StInner != "" && StInner_vs != "") {

        AddCardToStack();

        ResetPlaceHolderToDefault();

        back_stack_words_left.textContent = `/ 37`;
        front_stack_words_left.textContent = `Letters left: 37`;
    };

    if (StInner_vs == "" || StInner == "" ||
        StInner != "" && StInner_vs == "" ||
        StInner != "" && StInner_vs == "front") {

        NeuerStapel_VS.focus();
    };

    CloseHeaderDropDown();
});

ShowAllCardsWind_OpenButton.addEventListener('click', () => {
    ShowAllcardsWind.style.display = 'flex';
    darkContainer.style.display = 'block';

    CreateMiniCardListLoop();

    pgOverview_CardAmount.textContent = `${Karteikarten[stackLocation].vs.length} Cards`;
});

ShowAllCardsWind_ClsButton.addEventListener('click', () => {
    ShowAllcardsWind.style.display = 'none';
});

pgNochmalButton.addEventListener('click', () => {
    reloadGame();
});

pgSpaeterButton.addEventListener('click', () => {
    ExitGame();
    PlayModeIsNotActive();

    pgKarteikarte.style.cursor = 'pointer';
});

pgWiederhohlenButton.addEventListener('click', () => {
    SeeCard(true);
});

pgKannIchButton.addEventListener('click', () => {
    SeeCard(false);
});

pgKarteikarte.addEventListener('click', () => {
    if (GameEnd == false && CurrMode == Object.keys(UserPlayModes)[0]) {
        PlayModeIsActive();
    };
})

stappel.addEventListener('click', () => {
    OpenPlayGround();

    CloseHeaderDropDown();
})

pgNavClickEl_1.addEventListener('click', () => {
    ClosePlayGround();
});

pgNavClickEl_2.addEventListener('click', () => {
    ClosePlayGround();
});

pgNavClickEl_3.addEventListener('click', () => {
    reloadGame();
});

////////////////////////////////////////
pgObenSichtbarDiv.addEventListener('click', () => {
    if (document.body.className != 'dark-mode') {
        pgKarteiKarteRS.style.color = 'rgba(255,255,255,0)'
        pgKarteiKarteVS.style.color = 'var(--font-color)'

    } else {
        pgKarteiKarteRS.style.color = 'rgba(255,255,255,0)'
        pgKarteiKarteVS.style.color = 'var(--font-color)'

    };

    UntenSichtbar_Boolean = false;
});

pgUntenSichtbarDiv.addEventListener('click', () => {
    if (document.body.className != 'dark-mode') {

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
    CTE_ContenteditableField.focus();
})

CTE_AcceptButton.addEventListener('click', () => {
    AcceptUserStackName();
});

SideMenuAddButton.addEventListener('click', () => {
    CreateTableElWindow.style.display = 'block';
    darkContainer.style.display = 'block';
    CTE_ContenteditableField.focus();
    CTE_headerTitle.textContent = "Create new stack";
    CreateStack_footer_infoText.style.display = 'none';

    displayed_subtopic.textContent = null;
});

SideMenuOpenButton.addEventListener('click', () => {
    SideMenu.style.width = '44vh';

    CloseHeaderDropDown();
});

clsCloseButton.addEventListener('click', () => {
    SideMenu.style.width = '0';
});

SettingsWindowOpenButton.addEventListener('click', () => {
    SettingsWindow.style.display = 'flex';
    darkContainer.style.display = 'block';

    CloseHeaderDropDown();
});

SettingCloseButton.addEventListener('click', () => {
    SettingsWindow.style.display = 'none';
    darkContainer.style.display = 'none';
});

Check_ForEdit_Button.addEventListener('click', () => {
    EndEditMode();
    SaveEditChanges();
});

ShowCardsWind_InfoButt.addEventListener('click', () => {
    ShowCards_SideContent.innerHTML = `<h2 id="SideCont_Text" >You pressed the info button :)</h2>`;

});

CreateTableElWindow.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        AcceptUserStackName();

        e.preventDefault();
    };

    if (e.key === 'Escape') {
        AbortUserStackName();
    };

    if (e.key === 'Delete') {
        DeleteStackNameInPopUp();
    };
});

//Other
stappel_VorderSeite.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {

        e.preventDefault();

        NeuerStapel_RS.focus();
    };
});

// Um mit den Arrow Keys zwischen den Feldern zu switchen
stappel_VorderSeite.addEventListener('keyup', (el) => {
    if (el.which === 40) {
        NeuerStapel_RS.focus();
    }
});

stappel_RueckSeite.addEventListener('keyup', (el) => {
    if (el.which === 38) {
        NeuerStapel_VS.focus();
    }
});

pg_INI_close_btn.addEventListener('click', () => {
    ClosePlayGround();
});

//Playground mode overview
pg_classicMode_btn.addEventListener('click', () => {
    ChangePlayMode(Object.keys(UserPlayModes)[0]); //Classic Mode
});

pg_writeMode_btn.addEventListener('click', () => {
    ChangePlayMode(Object.keys(UserPlayModes)[1]); //Write Mode
});

pg_choiceMode_btn.addEventListener('click', () => {
    ChangePlayMode(Object.keys(UserPlayModes)[2]); //Multiple Choice Mode
});

pg_connectMode_btn.addEventListener('click', () => {
    ChangePlayMode(Object.keys(UserPlayModes)[3]); //Connect Mode
});

pg_Start_btn.addEventListener('click', () => {
    if (CurrMode == 'Connect Mode' && Karteikarten[stackLocation].vs.length > 20) {
        SetUpSmallPopUp('aj', 'ok', 'block', 'block', 'You can use the connect mode only with up to 20 Cards');
        pressed_small_pop_up = true;
    };

    if (CurrMode == 'Multiple Choice Mode' && Karteikarten[stackLocation].vs.length < 10) {
        SetUpSmallPopUp('aj', 'ok', 'block', 'block', 'You need minimum 10 Cards to play the Multiple Choice Mode');
        pressed_small_pop_up = true;
    };

    if (CurrMode == 'Write Mode' ||
        CurrMode == 'Classic Mode' ||
        CurrMode == 'Multiple Choice Mode' && Karteikarten[stackLocation].vs.length >= 10 ||
        CurrMode == 'Connect Mode' && Karteikarten[stackLocation].vs.length <= 20) {
        StartGameCountDown();
    };
});

function ShowViewBelowInPG() {
    pg_ShowCardView_title.textContent = 'Selected view - Below';
    UntenSichtbar_Boolean = true;
};

function ShowViewAboveInPG() {
    pg_ShowCardView_title.textContent = 'Selected view - Above (recommended)';
    UntenSichtbar_Boolean = false;
};

pg_showCardAbove_btn.addEventListener('click', ShowViewAboveInPG);
pg_showCardBelow_btn.addEventListener('click', ShowViewBelowInPG);

pg_ShowAllCards_btn.addEventListener('click', () => {
    ShowAllcardsWind.style.display = 'flex';
    CreateMiniCardListLoop();

    pgOverview_CardAmount.textContent = `${Karteikarten[stackLocation].vs.length} Cards`;
});

side_nav_toggle_btn.addEventListener('click', () => {
    md02_sidebar.style.display = 'block';
    md02_sidebar.style.width = '35vh';
});

md02_sidebar_close_btn.addEventListener('click', () => {
    md02_sidebar.style.width = '0';
    md02_sidebar.style.display = 'none';
});

extra_retry_btn.addEventListener('click', () => {
    StartRedoGame();
});

//Playground -> All Cards Overview Window Search Button
search_bar.addEventListener('keyup', () => {
    searchCard(search_bar.value);
});

logIn_btn.addEventListener('click', () => {
    SetUpSmallPopUp('ok', 'aj', 'block', 'block', 'This feature is availible soon');
});

info_pp_close_btn.addEventListener('click', () => {
    info_pop_up.style.display = 'none';
    darkContainer.style.display = 'none';
    localStorage.setItem(`sawUpdate_${window.App.version}`, true);
});

sdm_plusTopic_item.addEventListener('click', () => {
    darkContainer.style.display = 'block';
    createSubTopic_popUp.style.display = 'flex';
    cst_nameField.focus();
    cst_nameField.value = null;
});

cst_AbortButton.addEventListener('click', () => {
    darkContainer.style.display = 'none';
    createSubTopic_popUp.style.display = 'none';
});

cst_DeleteName.addEventListener('click', () => {
    cst_nameField.value = null;
    cst_nameField.focus();
});

connect_cards_area.addEventListener('click', () => {
    CM_deselect_Card();
});

CTE_SubTopic_btn.addEventListener('click', () => {
    if (CTE_SubTopic_btn.getAttribute('cte_subtopic-btn-isclicked') == 'false') {
        CTE_SubTopic_btn.setAttribute('cte_subtopic-btn-isclicked', 'true');
        CTE_SubTopic_btn.classList = 'fa-solid fa-caret-down';
        CTE_SubTopic_btn.style.marginTop = '0.25em';
        CTE_subtopic_dropdown.style.display = 'flex';
        CTE_dropdown_DisplaySubTopics();

    } else if (CTE_SubTopic_btn.getAttribute('cte_subtopic-btn-isclicked') == 'true') {
        CTE_SubTopic_btn.setAttribute('cte_subtopic-btn-isclicked', 'false');
        CTE_SubTopic_btn.classList = 'fa-solid fa-caret-right';
        CTE_SubTopic_btn.style.marginTop = '0.3em';
        CTE_subtopic_dropdown.style.display = 'none';
    };
});

theme_1.addEventListener('click', () => {
    ChooseStackTheme(Object.keys(StackThemes)[0]);
});
theme_2.addEventListener('click', () => {
    ChooseStackTheme(Object.keys(StackThemes)[1]);
});
theme_3.addEventListener('click', () => {
    ChooseStackTheme(Object.keys(StackThemes)[2]);
});
theme_4.addEventListener('click', () => {
    ChooseStackTheme(Object.keys(StackThemes)[3]);
});

cst_acceptName.addEventListener('click', () => {
    CST_AcceptSubTopicName();
});

adjustableHeader_btn.addEventListener('click', () => {
    toggleAppHeader();
});

//md02 stuff
md02_stackOverview_tab.addEventListener('click', () => {
    md02_OpenTab('flex', 'none', 'block', 'none');
    CreateCardsForHeaderBar(stackLocation);
});

md02_files_tab.addEventListener('click', () => {
    md02_OpenTab('none', 'flex', 'none', 'block');
    OpenFilesTab();
});

// Open Tab in general
function md02_OpenTab(Tab_dis_01, Tab_dis_02, stackheader, headerText) {
    md02_Tab_Content_01.style.display = Tab_dis_01;
    md02_Tab_Content_02.style.display = Tab_dis_02;
    md02_sidebar.style.display = 'none';

    md02_headerText.style.display = headerText;
    stackHeader_el01.style.display = stackheader;
    stackHeader_el02.style.display = stackheader;
    stackHeader_el03.style.display = stackheader;
};

md02_fileContent_SelectAllCards_btn.addEventListener('click', function a() {
    filesCards_SelectOppoCards();
});

md02_fileContent_DeselectAllCards_btn.addEventListener('click', function a() {
    fileCards_Deselect_AllCards();
});

md02_fileContent_ExportFileAs_Stack_btn.addEventListener('click', function a() {
    ExportFile_toStack();
});

md02_fileContent_ExportAll_SelectedCards_btn.addEventListener('click', function a() {
    clicked_ExportSelectedCards_btn = true;
    Export_FileCards_toStack();
});

files_wrapper_questionMark.addEventListener('click', function a() {
    md02_filesTab_openInfo_Window();
});

// open files tab info button
function md02_filesTab_openInfo_Window() {
    md02_info_pop_up_FilesTab.style.display = 'block';
};

md02_info_popup_close_btn_filesTab.addEventListener('click', function a() {
    md02_filesTab_closeInfo_Window();
});

// close files tab info button
function md02_filesTab_closeInfo_Window() {
    md02_info_pop_up_FilesTab.style.display = 'none';
};