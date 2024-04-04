// Javascript requirement #1 on line # 46
// Javascript requirement #2 on line # 16
// Javascript requirement #3 on line # 28-57, & Nested at 45
// Javascript requirement #4 on line # 70, 112
// Javascript requirement #5 on line # 26


    // ensure all inputs are correctly filled out
    function validateForm(){
        // get main elements from document
        const form = document.getElementById("formId");
        const submitButton = document.getElementById("submitButtonId");
        const userFeedback = document.getElementById("outputAreaId");
        
        // when button clicks, run this function
        submitButton.addEventListener("click", function(event){ // JAVASCRIPT REQUIREMENT #2 - EVENT HANDLER TO RESPOND TO USER INTERACTION
            event.preventDefault();

            // get specific inputs user has entered
            const name = document.getElementById("inputName").value;
            const email = document.getElementById("inputEmail").value; 
            const phone = document.getElementById("inputTelephone").value;
            const message = document.getElementById("inputMessage").value;
            const checkbox = document.getElementById("inputAgreement");

            // // JAVASCRIPT REQUIREMENT #5 - FORM WITH 5 REQUIRE QUESTIONS, DIFFERENT TYPES OF INPUT
            // if any field is empty display an error
            if(!name.trim() === "" || !email.trim() === "" || !phone.trim() === "" || !phone.trim() === "" || !checkbox.checked){
                userFeedback.innerHTML = "Please ensured all fields above are filled or checked";
                userFeedback.style.fontWeight = "bold";
                userFeedback.style.backgroundColor = "red";
            } 
            
            else if(name.trim() === ""){ // if other fields filled but name is empty, display error
                userFeedback.innerHTML = "Please enter your name above";
                userFeedback.style.fontWeight = "bold";
                userFeedback.style.backgroundColor = "red";
            } 
            
            else if(email.trim() === "" || !email.endsWith("@gmail.com")){ // ensure email is entered ending with @gmail.com
                userFeedback.innerHTML = "Please enter an email ending with @gmail.com";
                userFeedback.style.fontWeight = "bold";
                userFeedback.style.backgroundColor = "red";
            } else if(isNaN(phone) || phone.length != 10){
                if(isNaN(phone)){ // // JAVASCRIPT REQUIREMENT #3 - CONDITIONALS & NESTED IF IF ELSE AND ELSE STATEMENTS
                    alert("You cannot enter letters as a phone number"); // JAVASCRIPT REQUIREMENT #1 - AT LEAST ONE NOTIFICATION
                } else if(phone.length != 10){
                    alert("Please enter a 10 digit phone number in the format ##########"); 
                }
            } 
            
            else if(message.trim() === ""){ // ensure user has entered some sort of message else error
                userFeedback.innerHTML = "Please enter some sort of message";
                userFeedback.style.fontWeight = "bold";
                userFeedback.style.backgroundColor = "red";
            }  
             else { // present uer a sucsess message if no other errors were found
                userFeedback.innerHTML = "Thank you for sending a message!";
                userFeedback.style.fontWeight = "bold";
                userFeedback.style.backgroundColor = "green";
            }
            
        });
    }
    
    // instatiating to later be able to toggle on/off color changing buttons
    let buttonState = false;
    let secondButtonState = false;

    // JAVASCRIPT REQUIREMENT #4 - COLOR CHANGER (2 DIFF FUNCTIONS)
    function lightDarkModeCSS(){
        
        // get elements from html doc
        const nav = document.getElementById("navBarId");
        const body = document.querySelector("body");
        const footer = document.querySelector("footer");

        // select all items with these tags
        const links = document.querySelectorAll("a, h2");
        const texts = document.querySelectorAll("p, label, li, th");

        buttonState = !buttonState

        // if user clicks button once, update to light mode
        if(buttonState){
            nav.style.backgroundColor = "white";
            links.forEach(function(links){ // for each element with tag defined earlier, style black
                links.style.color = "black";
            })

            texts.forEach(function(texts){ // for each element with tag defined earlier, style 
                texts.style.color = "black";
            })

            body.style.backgroundColor = "#cccccc";
            footer.style.backgroundColor = "#999999"
        } else { //if user clicks button again, update to dark mode
            nav.style.backgroundColor = "#000000";
            links.forEach(function(links){
                links.style.color = "white"; // for each element with tag defined earlier, style white
            })

            texts.forEach(function(texts){ // for each element with tag defined earlier, style 
                texts.style.color = "white";
            })

            body.style.backgroundColor = "#152232";
            footer.style.backgroundColor = "black";
        }
    }

    function matrixMode(){

        secondButtonState = !secondButtonState;

        // get elements from document
        const nav = document.getElementById("navBarId");
        const body = document.querySelector("body");
        const footer = document.querySelector("footer");

        // select all elements with tag
        const links = document.querySelectorAll("a, h2");
        const texts = document.querySelectorAll("p, label, li, th");
        const inputs = document.querySelectorAll("input, textarea");

        const mediaContainer = document.getElementById("mediaId");
        if(secondButtonState){ // for each element, style with matrix color scheme
            mediaContainer.style.border = "2px solid lightGreen";
            nav.style.borderBottom = "2px solid lightGreen";
            body.style.backgroundColor = "black";
            links.forEach(function(links){ // for each item selected earlier, style
                links.style.color = "lightGreen";
            })
    
            texts.forEach(function(texts){
                texts.style.color = "lightGreen";
            })

            inputs.forEach(function(inputs){
                inputs.style.backgroundColor = "lightGreen";
            })
        } else { // set page to black and white
            links.forEach(function(links){
                links.style.color = "white";
            })
    
            texts.forEach(function(texts){
                texts.style.color = "white";
            })

            inputs.forEach(function(inputs){
                inputs.style.backgroundColor = "white";
            })
        }
        
    }

    validateForm();










    