/* global $ */
/*
GAME FUNCTION:
- Player must correctly guess all of the matching image pairs
- Player has infinite guesses, but there is a time limit on harder difficulties
- Three different difficulties listed in buttons on the landing page
- Notify player of time left
- Cards stay flipped once matched
- Modal resets game to start screen
*/
/**
 * Hides full game and modals until they are called
 * 
 */ 
$(document).ready(function () {
    $('.full-game').hide();
    $('#won-modal').hide();
    $('#modal-win').hide();
    $('#modal-lose').hide();
    $("#mem-table").hide();
});

let modal = document.getElementById('id01');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

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
let flipCount = 0;
let gameStart = false;
let difficulty = 1;

/**
 * Check for match looks in the memory game class for two cards that match the same data framework. 
 * If they match the function calls the trueMatch funtion, if they don't it calls the unFlip function. 
 * A timeout of 1 second is set to removed the locked class after 1 second. 
 * This is to stop the cards from being clicked too fast, potentially breaking the game.
 * 
 */ 
function checkForMatch() {
    $('.memory-game').addClass('locked');
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    if (isMatch) {
        disableCards();
        trueMatch();
    } else {
        unflipCards();
    }
    
    setTimeout(() => {
        $('.memory-game').removeClass('locked');
    }, 1000);
}

/**
 * The trueMatch function checks to see if the amount of matched pairs is equal to the final pair total.
 * If it is, it calls the win-game modal from css and html.
 * 
 */ 
function trueMatch() {
    if (pairCounter === pairTotal) {
        $('#modal-win').show();
        $('#modal-attempt').html(flipCount);
        $('#won-modal').show();
    }
    // Correct Match
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    pairCounter++;
    eachCard.push(firstCard, secondCard);
}

/**
 * The flipCard function adds one to the flip attempts in the game, 
 * adds the class of flip from css to the flipped card, and calls the board lock function. 
 * It holds the first card in place until a second card has been flipped, 
 * where it then calls the check for match function
 * 
 */ 
function flipCard() {
    if (!gameStart) {
        gameStart = true;
    }
    flipCount++;
    $('#attempt').html('&nbsp;' + flipCount);
    this.classList.add('flip');
    if (boardLocked) return;
    
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

/**
 * Removes the flip class from cards when disable Cards is called
 * 
 */ 
function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
 }

/**
 * The unflipCards function locks the board and removes the class of flip from cards that dont match. 
 * It does this in .8 of a second to keep the flow of the game quick.
 * 
 */ 
function unflipCards() {
    boardLocked = true;
    
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        boardLocked = false;
    }, 800);
 }

function noMatch() {
    boardLocked = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1000);
}

/**
 * The shuffle function shuffles the 12 images randomly and is wrapped in extra parenthesis, which calls the function at game start.
 * 
 */ 
(function shuffle() {
    cards.forEach(card => {
        // multiplied by 12 to account for cards 1 to 11
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

/**
 * The difficulty select function first hides the main game and shows the hero image. 
 * It then uses a switch to call the chosen difficulty, hiding the hero image and showing the main game.
 * 
 */ 
// difficulty select
$(".select-diff").click(function(){
    let diff = $(this).attr('data-value');
    difficulty = diff;
    $(".hero-image").hide();
    $('.full-game').show();
    
    switch (diff) {
        case "1":
            $(".easyGrid").show();
            $('#mode').html('&nbsp; Easy');
            break;
        case "2":
            $(".mediumGrid").show();
            $('#mode').html('&nbsp; Medium');
            setTimer(60);
            break;
        case "3":
            $(".hardGrid").show();
            $('#mode').html('&nbsp; Hard');
            setTimer(30);
            break;
        default:
            console.log("Something went wrong somehow");
    }
});

//Restarts the game when the x is clicked in the modal
$(".close, #restart").click(function(){
    window.location.reload(false);
});

/**
 *The set timer function sets a countdown to start on whatever time has been placed in the html. 
 *It has been called to not appear at all on easy mode, and to show the game over modal when the timer reaches zero.
 */ 
function setTimer(count){
    let thiscount = count, timer = setInterval(function() {
        if (difficulty != 1 && gameStart) {
            $("#mem-table").show();
            $("#counter").html(thiscount--);
            if(thiscount === -2) {
                $('#modal-lose').show();
                $('#won-modal').show();
                clearInterval(timer);
            }
        }
    }, 1000);
}