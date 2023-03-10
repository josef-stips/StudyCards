//Sends Mail to developer
function SendMail() {
    // let email = document.getElementById('email').value; //display = none;
    // let subject = document.getElementById('subject').value; //display = none;
    let name = document.getElementById('name').value;
    let user_message = document.getElementById('message').value;
    let body = `name - ${name}<br/>message:<br/><br/>${user_message}`;

    if (mail_name_field.value != "" &&
        mail_message_field.value != "") {

        Email.send({
                SecureToken: "50ae5256-e4e9-4700-b42b-fafc3cd150ec",
                To: 'josef.stips@sgw-schule.de',
                From: 'josefstips@gmx.de',
                Subject: 'Sended from User',
                Body: body
            })
            .then(
                message => SetUpSmallPopUp('ok', 'cool', 'block', 'block', 'Email was successfully send to the developer')
            );
    } else {
        SetUpSmallPopUp('okay', 'oh!', 'block', 'block', 'Fill out the text fields!');
    };
};

//clears the formular after the email was sended 
function clearFormular() {
    mail_name_field.value = "";
    mail_message_field.value = "";
};