{"filter":false,"title":"game.js","tooltip":"/assets/js/game.js","undoManager":{"mark":32,"position":32,"stack":[[{"start":{"row":0,"column":0},"end":{"row":9,"column":2},"action":"insert","lines":["/* global $ */","/*","GAME FUNCTION:","- Player must correctly guess all of the matching image pairs","- Player has infinite guesses, but there is a time limit","- Three different difficulties listed in a dropdown bar","- Notify player of time left","- Notify the player of the correct answer if there is a match","- Let player choose to play again","*/"],"id":1}],[{"start":{"row":1,"column":0},"end":{"row":9,"column":2},"action":"remove","lines":["/*","GAME FUNCTION:","- Player must correctly guess all of the matching image pairs","- Player has infinite guesses, but there is a time limit","- Three different difficulties listed in a dropdown bar","- Notify player of time left","- Notify the player of the correct answer if there is a match","- Let player choose to play again","*/"],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":14},"action":"remove","lines":["/* global $ */"],"id":3},{"start":{"row":0,"column":0},"end":{"row":9,"column":2},"action":"insert","lines":["/* global $ */","/*","GAME FUNCTION:","- Player must correctly guess all of the matching image pairs","- Player has infinite guesses, but there is a time limit","- Three different difficulties listed in a dropdown bar","- Notify player of time left","- Notify the player of the correct answer if there is a match","- Let player choose to play again","*/"]}],[{"start":{"row":9,"column":2},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":11,"column":0},"end":{"row":15,"column":29},"action":"insert","lines":["// Global variables","let hasFlippedCard = false","let boardLocked = false;","let firstCard, secondCard;","let selectedOneCard  = false;"],"id":5}],[{"start":{"row":9,"column":2},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":11,"column":0},"end":{"row":17,"column":3},"action":"insert","lines":["$(document).ready(function () {","    $('.full-game').hide();","    $('#won-modal').hide();","    $('#modal-win').hide();","    $('#modal-lose').hide();","    $(\"#mem-table\").hide();","});"],"id":7}],[{"start":{"row":12,"column":4},"end":{"row":16,"column":27},"action":"remove","lines":["$('.full-game').hide();","    $('#won-modal').hide();","    $('#modal-win').hide();","    $('#modal-lose').hide();","    $(\"#mem-table\").hide();"],"id":8},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"remove","lines":["    "]},{"start":{"row":11,"column":31},"end":{"row":12,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":12,"column":3},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":9},{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":14,"column":0},"end":{"row":16,"column":64},"action":"insert","lines":["// Query selector for the card class","const cards = document.querySelectorAll('.memory-card');","cards.forEach(card => card.addEventListener('click', flipCard));"],"id":10}],[{"start":{"row":22,"column":29},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":11},{"start":{"row":23,"column":0},"end":{"row":24,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":24,"column":0},"end":{"row":32,"column":10},"action":"insert","lines":["   <!-- Select Bar -->","","    <div class=\"select-bar\">","        <select id=\"dropdown-toggle\" onchange=\"selectDifficulty()\">Select Difficulty</button>","       <option class=\"dropdown-item\" value=\"Easy\">Easy</option>","       <option class=\"dropdown-item\" value=\"Medium\">Medium</option>","       <option class=\"dropdown-item\" value=\"Hard\">Hard</option>","    </select>","    </div>"],"id":12}],[{"start":{"row":24,"column":0},"end":{"row":32,"column":10},"action":"remove","lines":["   <!-- Select Bar -->","","    <div class=\"select-bar\">","        <select id=\"dropdown-toggle\" onchange=\"selectDifficulty()\">Select Difficulty</button>","       <option class=\"dropdown-item\" value=\"Easy\">Easy</option>","       <option class=\"dropdown-item\" value=\"Medium\">Medium</option>","       <option class=\"dropdown-item\" value=\"Hard\">Hard</option>","    </select>","    </div>"],"id":13}],[{"start":{"row":24,"column":0},"end":{"row":32,"column":5},"action":"insert","lines":["function checkForMatch() {","    $('.memory-game').addClass('locked');","    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;","    if (isMatch) {","        disableCards();","        trueMatch();","    } else {","        unflipCards();","    }"],"id":14}],[{"start":{"row":27,"column":3},"end":{"row":31,"column":22},"action":"remove","lines":[" if (isMatch) {","        disableCards();","        trueMatch();","    } else {","        unflipCards();"],"id":15},{"start":{"row":27,"column":2},"end":{"row":27,"column":3},"action":"remove","lines":[" "]},{"start":{"row":27,"column":1},"end":{"row":27,"column":2},"action":"remove","lines":[" "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":1},"action":"remove","lines":[" "]}],[{"start":{"row":26,"column":79},"end":{"row":27,"column":0},"action":"remove","lines":["",""],"id":16}],[{"start":{"row":25,"column":4},"end":{"row":25,"column":41},"action":"remove","lines":["$('.memory-game').addClass('locked');"],"id":17},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"remove","lines":["    "]},{"start":{"row":24,"column":26},"end":{"row":25,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":22,"column":29},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":18}],[{"start":{"row":23,"column":0},"end":{"row":25,"column":18},"action":"insert","lines":["let pairCounter = 1;","let pairTotal = 6;","let eachCard = [];"],"id":19}],[{"start":{"row":30,"column":0},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":20}],[{"start":{"row":31,"column":0},"end":{"row":49,"column":1},"action":"insert","lines":["function flipCard() {","    if (!gameStart) {","        gameStart = true;","    }","    flipCount++;","    $('#attempt').html('&nbsp;' + flipCount);","    this.classList.add('flip');","    if (boardLocked) return;","    ","    if (!hasFlippedCard) {","        hasFlippedCard = true;","        firstCard = this;","        return;","    }","    ","    secondCard = this;","    hasFlippedCard = false;","    checkForMatch();","}"],"id":21}],[{"start":{"row":35,"column":4},"end":{"row":38,"column":28},"action":"remove","lines":["flipCount++;","    $('#attempt').html('&nbsp;' + flipCount);","    this.classList.add('flip');","    if (boardLocked) return;"],"id":22}],[{"start":{"row":32,"column":4},"end":{"row":34,"column":5},"action":"remove","lines":["if (!gameStart) {","        gameStart = true;","    }"],"id":23},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":44,"column":1},"end":{"row":45,"column":0},"action":"insert","lines":["",""],"id":24},{"start":{"row":45,"column":0},"end":{"row":46,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":46,"column":0},"end":{"row":49,"column":2},"action":"insert","lines":["function disableCards() {","   firstCard.removeEventListener('click', flipCard);","   secondCard.removeEventListener('click', flipCard);"," }"],"id":25}],[{"start":{"row":49,"column":2},"end":{"row":50,"column":0},"action":"insert","lines":["",""],"id":26},{"start":{"row":50,"column":0},"end":{"row":50,"column":1},"action":"insert","lines":[" "]},{"start":{"row":50,"column":1},"end":{"row":51,"column":0},"action":"insert","lines":["",""]},{"start":{"row":51,"column":0},"end":{"row":51,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":51,"column":1},"end":{"row":59,"column":2},"action":"insert","lines":["function unflipCards() {","    boardLocked = true;","    ","    setTimeout(() => {","        firstCard.classList.remove('flip');","        secondCard.classList.remove('flip');","        boardLocked = false;","    }, 800);"," }"],"id":27}],[{"start":{"row":58,"column":7},"end":{"row":58,"column":8},"action":"remove","lines":["8"],"id":28}],[{"start":{"row":58,"column":7},"end":{"row":58,"column":8},"action":"insert","lines":["1"],"id":29},{"start":{"row":58,"column":8},"end":{"row":58,"column":9},"action":"insert","lines":["5"]}],[{"start":{"row":58,"column":8},"end":{"row":58,"column":9},"action":"remove","lines":["5"],"id":30},{"start":{"row":58,"column":7},"end":{"row":58,"column":8},"action":"remove","lines":["1"]}],[{"start":{"row":58,"column":7},"end":{"row":58,"column":8},"action":"insert","lines":["8"],"id":31}],[{"start":{"row":59,"column":2},"end":{"row":60,"column":0},"action":"insert","lines":["",""],"id":32},{"start":{"row":60,"column":0},"end":{"row":60,"column":1},"action":"insert","lines":[" "]},{"start":{"row":60,"column":1},"end":{"row":61,"column":0},"action":"insert","lines":["",""]},{"start":{"row":61,"column":0},"end":{"row":61,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":61,"column":1},"end":{"row":67,"column":1},"action":"insert","lines":["function noMatch() {","    boardLocked = true;","    setTimeout(() => {","        firstCard.classList.remove('flip');","        secondCard.classList.remove('flip');","    }, 1000);","}"],"id":33}]]},"ace":{"folds":[],"scrolltop":614,"scrollleft":0,"selection":{"start":{"row":67,"column":1},"end":{"row":67,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":37,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1571560810406,"hash":"6b52ce67e95cb346574c03c3218ca811ad4d6439"}