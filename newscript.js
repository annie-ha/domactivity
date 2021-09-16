// Grab the elements

// let btnFirstName = document.getElementById("btnFirstName");
let btnFirstName = document.querySelector("#btnFirstName");
let firstName = document.querySelector("#firstName");
let errMsg = document.querySelector("#errMsg");
let simleyDiv = document.querySelector("#simleyDiv");
let welcomeText = document.querySelector("#welcomeText");

// console.log(btnFirstName);

// Add an eventlistener

btnFirstName.addEventListener("click", displaySecond);

// Define the function

function displaySecond() {
    // alert("here");
    if (firstName.value === "") {
        errMsg.innerHTML = "Please enter your name in the box";
        errMsg.style.color = "red";
    } else {
        simleyDiv.style.display = "block";
        welcomeText.innerHTML = `Welcome ${firstName.value}. What is your mood today?`;
    }
}

// Mouseover to display mood selection by using loop

// let sad = document.querySelector("#sad");
// let displayMood = document.querySelector("#displayMood");

// sad.addEventListener("mouseover", sadMood);

// function sadMood() {
//     displayMood.innerHTML = sad.getAttribute("alt");
//     displayMood.style.color = "red";
// }

let imgTag = document.querySelectorAll("img");
let displayMood = document.querySelector("#displayMood");

for (let i = 0; i < imgTag.length; i++) {
    imgTag[i].addEventListener("mouseover", () => {
        displayMood.innerHTML = imgTag[i].getAttribute("alt");
        if (i == 0) {
            displayMood.style.color = "red";
        } else if (i == 1) {
            displayMood.style.color = "yellow";
        } else {
            displayMood.style.color = "green";
        }
    })
}

// Open the last message box after the second Next button

let btnMessage = document.querySelector("#btnMessage");

// Add an event by using method 

btnMessage.addEventListener("click", lastMsgBox);

// Define the function

function lastMsgBox() {
    displayMessage.style.display = "block";
    displayMessage.innerHTML = `<p>You need a vacation.</p><img src="./myimages/beach.jpg" alt="Beach" />`;
}