"use strict";

function showResponse(e, image = "") {
    const response = e.currentTarget.getAttribute("data-message");
    const chatDisplay = document.getElementById('chat-display');
    const newMessage = createResponseElement(response, image);
    chatDisplay.appendChild(newMessage);
    scrollToBottom(".response-container");
}

function showRandomLetter() {
    const response = randomLetter();
    const chatDisplay = document.getElementById('chat-display');
    const newMessage = createResponseElement(response);
    chatDisplay.appendChild(newMessage);
    scrollToBottom(".response-container");
}

function createResponseElement(response, image = "") {
    const newMessage = document.createElement('div');
    newMessage.className = 'response response-left';
    newMessage.innerHTML = `<img src="${image}" alt="Image" > <p>${response}</p>`;
    return newMessage;
}

function randomLetter() {
    const alphabet = "abcdef";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function scrollToBottom(selector) {
    const chatContainer = document.querySelector(selector);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

const randomLetterTrigger = document.querySelector("#randomLetter");
randomLetterTrigger.addEventListener("click", showRandomLetter);

const responseTriggers = document.querySelectorAll(".responseTrigger");
responseTriggers.forEach(responseTrigger => {
    responseTrigger.addEventListener("click", (e) => showResponse(e, e.currentTarget.getAttribute("data-image")));
});


function actionToggle(){
    var action = document.querySelector('.action');
    action.classList.toggle('active')
}

function showResponse2(e, image = "") {
    const response2 = e.currentTarget.getAttribute("data-message2");
    const chatDisplay2 = document.getElementById('chat-display2');
    const newMessage2 = createResponseElement2(response2, image);
    chatDisplay2.appendChild(newMessage2);
    scrollToBottom(".response-container2");
}


function createResponseElement2(response2, image = "") {
    const newMessage2 = document.createElement('div');
    newMessage2.className = 'response2 response-left2';
    newMessage2.innerHTML = `<img src="${image}" alt="Image" > <p>${response2}</p>`;
    return newMessage2;
}

function scrollToBottom(selector) {
    const chatContainer2 = document.querySelector(selector);
    chatContainer2.scrollTop = chatContainer2.scrollHeight;
}


const responseTriggers2 = document.querySelectorAll(".responseTrigger2");
responseTriggers2.forEach(responseTrigger2 => {
    responseTrigger2.addEventListener("click", (e) => showResponse2(e, e.currentTarget.getAttribute("data-image2")));
});


function actionToggle2(){
    var action2 = document.querySelector('.action2');
    action2.classList.toggle('active2')
}





function afficher(){
    var wrapper = document.getElementById("loginWrapper").style.display = "block"; 
}

function cacher(){
    var wrapper = document.getElementById("loginWrapper").style.display = "none"; 
}

const toggleButton = document.getElementById('toggleButton');
const wrapper = document.getElementById('loginWrapper');

// Ajoutez un écouteur d'événements au bouton
toggleButton.addEventListener('click', function() {
    // Inversez la visibilité du wrapper en ajoutant ou en supprimant la classe 'visible'
    wrapper.classList.toggle('visible');
});

var username = "Pablo97"
var password = "123456"
