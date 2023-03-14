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

    if (e.key === 'Enter' && StInner_vs == "" ||
        e.key === 'Enter' && StInner == "" ||
        e.key === 'Enter' && StInner != "" && StInner_vs == "" ||
        e.key === 'Enter' && StInner != "" && StInner_vs == "front") {

        e.preventDefault();

        NeuerStapel_VS.focus();
    };
});

//Generall Shortcuts
document.onkeydown = (e) => {
    if (document.activeElement !== NeuerStapel_RS &&
        document.activeElement !== NeuerStapel_VS &&
        document.activeElement !== CTE_ContenteditableField &&
        document.activeElement !== mail_name_field &&
        document.activeElement !== mail_message_field
    ) {
        if (e.ctrlKey && e.which == 77) {

            SideMenu.style.width = '35vh';

        } else if (e.shiftKey && e.which == 77) {

            SideMenu.style.width = '0';

        } else if (e.shiftKey && e.which == 68) {

            Darkmode("user_event");

        } else if (e.shiftKey && e.which == 76) {

            LightMode();

        } else if (e.shiftKey && e.which == 84) {

            ToggleDarkMode();

        } else if (e.shiftKey && e.which == 80) {

            OpenPlayGround();

        } else if (e.shiftKey && e.which == 71) {

            ClosePlayGround();
        } else if (e.which == 13 && PlayMode == true && CurrMode == Object.keys(UserPlayModes)[0]) {
            if (GameEnd == false) {
                PlayModeIsActive();
            };
        }
        // } else if (e.which == 39 && PlayMode == true) {
        //     if (GameEnd == false) {
        //         SeeCard(false);
        //     };

        // } else if (e.which == 37 && PlayMode == true) {
        //     if (GameEnd == false) {
        //         SeeCard(true);
        //     };
        // }
    };
};