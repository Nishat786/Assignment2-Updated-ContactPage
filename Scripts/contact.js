/* all javascript files goes here */
(function (content) {
    // Local Variables
    let FirstName = document.getElementById("FirstName");
    let LastName = document.getElementById("LastName");
    let PrimaryContact = document.getElementById("PrimaryContact");
    let SecondaryContact = document.getElementById("SecondaryContact");
    let Email_ID = document.getElementById("Email_ID");
    let Your_Message = document.getElementById("ADDITIONAL_QUERIES");


    function OutputFormDataToConsole() {
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Data`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c FirstName     : ${FirstName.value}`, "color: blue;");
        console.log(`%c LastName     : ${LastName.value}`, "color: blue;");
        console.log(`%c PrimaryContact: ${PrimaryContact.value}`, "color: blue;");
        console.log(`%c SecondaryContact: ${SecondaryContact.value}`, "color: blue;");
        console.log(`%c Email_ID : ${Email_ID.value}`, "color: blue;");
        console.log(`%c Your_Message  : ${Your_Message.value}`, "color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");

        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Properties`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Length     : ${document.forms[0].length}`, "color: blue;");

        for (let index = 0; index < document.forms[0].length; index++) {
            console.log(`%c Form Element ${index}: ${document.forms[0].elements[index].value}`, "color: blue;");

        }

    }

    function clearValidationMessages() {
        FirstName.setCustomValidity("");
        LastName.setCustomValidity("");
        PrimaryContact.setCustomValidity("");
        SecondaryContact.setCustomValidity("");
        Email_ID.setCustomValidity("");
        Your_Message.setCustomValidity("");
    }

    function setEventHandlersForFormElements() {

        for (const element of document.forms[0].elements) {
            if ((element.tagName === "INPUT") || (element.tagName === "TEXTAREA")) {
                element.addEventListener("input", function () {
                    element.setCustomValidity("");
                });

                // when the user enters incorrect data
                element.addEventListener("invalid", function () {
                    switch(element.id) {
                        case "FirstName":
                        element.setCustomValidity("You must enter an appropriate First Name with at least 2 characters");
                        break;
                        case "LastName":
                        element.setCustomValidity("You must enter an appropriate Last Name with at least 2 characters");
                        break;
                        case "PrimaryContact":
                        element.setCustomValidity("You must enter a phone number with the pattern (###) ###-####");
                        break;
                        case "Email_ID":
                        element.setCustomValidity("Your email address is not valid");
                        break;
                        case "Your_Message":
                        element.setCustomValidity("You must enter a message");
                        break;
                        default:
                        element.setCustomValidity("This Field is Required");
                        break;
                    }
                    
                });
            }

        }
    }

    function ValidateForm() {
        setEventHandlersForFormElements();
    }


    function ContactContent() {
        clearValidationMessages();

        console.log("%c Contact Content Accessed...", "font-weight:bold; font-size: 20px;");

        document.getElementsByClassName("card-title")[0].textContent = "Contact You!";

        // create a new HTML Element
        let cancelButton = document.createElement("button");

        cancelButton.setAttribute("class", "btn btn-warning");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("index.html", "_parent");
        });

        document.forms[0].appendChild(cancelButton);


        let SubmitButton = document.getElementById("SendButton");
        SubmitButton.addEventListener("click", (event) => {

            if (!document.forms[0].checkValidity()) {
                OutputFormDataToConsole();
                ValidateForm();
            }


        });
    }
})();