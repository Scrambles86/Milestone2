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
    $('.full-game').hide();
    $('#won-modal').hide();
    $('#modal-win').hide();
    $('#modal-lose').hide();
    $("#mem-table").hide();
});

var modal = document.getElementById('id01');
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
var difficulty = 1;

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

function trueMatch() {
    if (pairCounter === pairTotal) {
        $('#modal-win').show();
        $('#modal-attempt').html(flipCount);
        $('#won-modal').show();
    }

function flipCard() {

    
    
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
 }
 
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

// shuffle function wrapped in extra parenthesis to call function immediately
(function shuffle() {
    cards.forEach(card => {
        // multiplied by 12 to account for cards 1 to 11
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

$(".close, #restart").click(function(){
    window.location.reload(false);
});

function setTimer(count){
    var thiscount = count, timer = setInterval(function() {
        
                clearInterval(timer);
            }
        }
    }, 1000);
}