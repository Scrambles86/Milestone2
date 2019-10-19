/* global $ */
/*
GAME FUNCTION:
- Player must correctly guess all of the matching image pairs
- Player has infinite guesses, but there is a time limit
- Three different difficulties listed in a dropdown bar
- Notify player of time left
- Notify the player of the correct answer if there is a match
- Let player choose to play again
*/

$(document).ready(function () {
});

// Query selector for the card class
const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));

// Global variables
let hasFlippedCard = false
let boardLocked = false;
let firstCard, secondCard;
let selectedOneCard  = false;
let pairCounter = 1;
let pairTotal = 6;
let eachCard = [];

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    }
