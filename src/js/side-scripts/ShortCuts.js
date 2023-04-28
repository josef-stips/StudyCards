import { settings } from "../side-scripts/MaxTextLength.js";

const MAX_TEXT_LENGTH = settings.maxCardLen;

//Fügt eine Karte einem Stapel hinzu
stappel_RueckSeite.addEventListener('keydown', (e) => {
    TryToAddCard(e);

    if (e.which != 13) {
        //On the html page there is a counter which counts how many letters the user can still type in his card (front and back)
        //Here is the logic
        let text = stappel_RueckSeite.innerText;
        let textWithoutNewLines = text.replace(/(\r\n|\n|\r)/gm, "");
        let remainingChars = MAX_TEXT_LENGTH - textWithoutNewLines.length;

        if (remainingChars >= 0) {
            back_stack_words_left.textContent = `/ ${remainingChars}`;
        } else {
            back_stack_words_left.textContent = `/ 0`;
            stappel_RueckSeite.innerText = text.slice(0, MAX_TEXT_LENGTH);
        };
    };
});

//Trys to add a card to the stack if it is not possible try something different
function TryToAddCard(e) {
    //Text von der karteikarte
    var StInner = stappel_RueckSeite.children[0].textContent;
    var StInner_vs = stappel_VorderSeite.children[0].textContent;

    if (e.key === 'Enter' && StInner != "" && StInner_vs != "") {
        e.preventDefault();

        //Check if front/back card already exists
        let CardAlreadyExists = CheckIfCardExists(StInner_vs, StInner);

        if (!CardAlreadyExists) {
            AddCardToStack();
            ResetPlaceHolderToDefault();

            back_stack_words_left.textContent = `/ 37`;
            front_stack_words_left.textContent = `Letters left: 37`;
        };
    };

    if (e.key === 'Enter' && StInner_vs == "" ||
        e.key === 'Enter' && StInner == "" ||
        e.key === 'Enter' && StInner != "" && StInner_vs == "" ||
        e.key === 'Enter' && StInner != "" && StInner_vs == "front") {

        e.preventDefault();

        NeuerStapel_VS.focus();
    };
};

stappel_VorderSeite.addEventListener('keydown', (e) => {
    if (e.which != 13) {
        //On the html page there is a counter which counts how many letters the user can still type in his card (front and back)
        //Here is the logic
        let text = stappel_VorderSeite.innerText;
        let textWithoutNewLines = text.replace(/(\r\n|\n|\r)/gm, "");
        let remainingChars = MAX_TEXT_LENGTH - textWithoutNewLines.length;

        if (remainingChars >= 0) {
            front_stack_words_left.textContent = `Letters left: ${remainingChars}`;
        } else {
            front_stack_words_left.textContent = `Letters left: 0`;
            stappel_VorderSeite.innerText = text.slice(0, MAX_TEXT_LENGTH);
        };
    };
});

//Generall Shortcuts
document.onkeydown = (e) => {
    if (document.activeElement !== NeuerStapel_RS &&
        document.activeElement !== NeuerStapel_VS &&
        document.activeElement !== CTE_ContenteditableField &&
        document.activeElement !== mail_name_field &&
        document.activeElement !== mail_message_field &&
        document.activeElement !== search_bar &&
        document.activeElement !== WriteMode_AcceptUserAnswer_btn &&
        document.activeElement !== document.querySelector('#input2') &&
        document.activeElement !== cst_nameField
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

// for creating sub topic
document.querySelector('#input4').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        CST_AcceptSubTopicName();
    };
});