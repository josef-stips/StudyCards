//This is only a part of the write mode functionality
//The write mode is a bit mixed with the classic code in Game.js

let lastExecutionTime = 0;
//This happens when user is in write mode and he enters his ansewer
WriteMode_AcceptUserAnswer_btn.addEventListener('keyup', (event) => {
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
                gsap.to(pgKarteiKarteRS, {
                    duration: 0.10,
                    color: result[1],
                    onComplete: () => {

                        let WaitForAnimationAndContinue = setInterval(() => {
                            CardView();
                            SeeCard(result[0]);

                            clearInterval(WaitForAnimationAndContinue);
                        }, 1300)
                    }
                });

                clearInterval(WaitToFinish);

            }, 100);
        };
    };
});