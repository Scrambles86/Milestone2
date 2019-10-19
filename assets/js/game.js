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

   <!-- Select Bar -->

    <div class="select-bar">
        <select id="dropdown-toggle" onchange="selectDifficulty()">Select Difficulty</button>
       <option class="dropdown-item" value="Easy">Easy</option>
       <option class="dropdown-item" value="Medium">Medium</option>
       <option class="dropdown-item" value="Hard">Hard</option>
    </select>
    </div>
