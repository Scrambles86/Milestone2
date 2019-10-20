{"changed":true,"filter":false,"title":"game.js","tooltip":"/assets/js/game.js","value":"/* global $ */\n/*\nGAME FUNCTION:\n- Player must correctly guess all of the matching image pairs\n- Player has infinite guesses, but there is a time limit\n- Three different difficulties listed in a dropdown bar\n- Notify player of time left\n- Notify the player of the correct answer if there is a match\n- Let player choose to play again\n*/\n\n$(document).ready(function () {\n    $('.full-game').hide();\n    $('#won-modal').hide();\n    $('#modal-win').hide();\n    $('#modal-lose').hide();\n    $(\"#mem-table\").hide();\n});\n\nvar modal = document.getElementById('id01');\nwindow.onclick = function(event) {\n  if (event.target == modal) {\n    modal.style.display = \"none\";\n  }\n}\n\n// Query selector for the card class\nconst cards = document.querySelectorAll('.memory-card');\ncards.forEach(card => card.addEventListener('click', flipCard));\n\n// Global variables\nlet hasFlippedCard = false\nlet boardLocked = false;\nlet firstCard, secondCard;\nlet selectedOneCard  = false;\nlet pairCounter = 1;\nlet pairTotal = 6;\nlet eachCard = [];\nlet flipCount = 0;\nlet gameStart = false;\nvar difficulty = 1;\n\nfunction checkForMatch() {\n    $('.memory-game').addClass('locked');\n    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;\n    if (isMatch) {\n        disableCards();\n        trueMatch();\n    } else {\n        unflipCards();\n    }\n    \n    setTimeout(() => {\n        $('.memory-game').removeClass('locked');\n    }, 1000);\n}\n\nfunction flipCard() {\n\n    \n    \n    if (!hasFlippedCard) {\n        hasFlippedCard = true;\n        firstCard = this;\n        return;\n    }\n    \n    secondCard = this;\n    hasFlippedCard = false;\n    checkForMatch();\n}\n\nfunction disableCards() {\n   firstCard.removeEventListener('click', flipCard);\n   secondCard.removeEventListener('click', flipCard);\n }\n \n function unflipCards() {\n    boardLocked = true;\n    \n    setTimeout(() => {\n        firstCard.classList.remove('flip');\n        secondCard.classList.remove('flip');\n        boardLocked = false;\n    }, 800);\n }\n \n function noMatch() {\n    boardLocked = true;\n    setTimeout(() => {\n        firstCard.classList.remove('flip');\n        secondCard.classList.remove('flip');\n    }, 1000);\n}\n\n// difficulty select\n$(\".select-diff\").click(function(){\n    let diff = $(this).attr('data-value');\n    difficulty = diff;\n    $(\".hero-image\").hide();\n    $('.full-game').show();\n    \n        switch (diff) {\n        case \"1\":\n            $(\".easyGrid\").show();\n            $('#mode').html('&nbsp; Easy');\n            break;\n        case \"2\":\n            $(\".mediumGrid\").show();\n            $('#mode').html('&nbsp; Medium');\n            setTimer(60);\n            break;\n        case \"3\":\n            $(\".hardGrid\").show();\n            $('#mode').html('&nbsp; Hard');\n            setTimer(30);\n            break;\n        default:\n            console.log(\"Something went wrong somehow\");\n    }\n});\n\n// shuffle function wrapped in extra parenthesis to call function immediately\n(function shuffle() {\n    cards.forEach(card => {\n        // multiplied by 12 to account for cards 1 to 11\n        let randomPos = Math.floor(Math.random() * 12);\n        card.style.order = randomPos;\n    });\n})();\n\n$(\".close, #restart\").click(function(){\n    window.location.reload(false);\n});\n\nfunction setTimer(count){\n    var thiscount = count, timer = setInterval(function() {\n        \n                clearInterval(timer);\n            }\n        }\n    }, 1000);\n}","undoManager":{"mark":46,"position":56,"stack":[[{"start":{"row":0,"column":0},"end":{"row":9,"column":2},"action":"insert","lines":["/* global $ */","/*","GAME FUNCTION:","- Player must correctly guess all of the matching image pairs","- Player has infinite guesses, but there is a time limit","- Three different difficulties listed in a dropdown bar","- Notify player of time left","- Notify the player of the correct answer if there is a match","- Let player choose to play again","*/"],"id":1}],[{"start":{"row":1,"column":0},"end":{"row":9,"column":2},"action":"remove","lines":["/*","GAME FUNCTION:","- Player must correctly guess all of the matching image pairs","- Player has infinite guesses, but there is a time limit","- Three different difficulties listed in a dropdown bar","- Notify player of time left","- Notify the player of the correct answer if there is a match","- Let player choose to play again","*/"],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":14},"action":"remove","lines":["/* global $ */"],"id":3},{"start":{"row":0,"column":0},"end":{"row":9,"column":2},"action":"insert","lines":["/* global $ */","/*","GAME FUNCTION:","- Player must correctly guess all of the matching image pairs","- Player has infinite guesses, but there is a time limit","- Three different difficulties listed in a dropdown bar","- Notify player of time left","- Notify the player of the correct answer if there is a match","- Let player choose to play again","*/"]}],[{"start":{"row":9,"column":2},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":11,"column":0},"end":{"row":15,"column":29},"action":"insert","lines":["// Global variables","let hasFlippedCard = false","let boardLocked = false;","let firstCard, secondCard;","let selectedOneCard  = false;"],"id":5}],[{"start":{"row":9,"column":2},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":11,"column":0},"end":{"row":17,"column":3},"action":"insert","lines":["$(document).ready(function () {","    $('.full-game').hide();","    $('#won-modal').hide();","    $('#modal-win').hide();","    $('#modal-lose').hide();","    $(\"#mem-table\").hide();","});"],"id":7}],[{"start":{"row":12,"column":4},"end":{"row":16,"column":27},"action":"remove","lines":["$('.full-game').hide();","    $('#won-modal').hide();","    $('#modal-win').hide();","    $('#modal-lose').hide();","    $(\"#mem-table\").hide();"],"id":8},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"remove","lines":["    "]},{"start":{"row":11,"column":31},"end":{"row":12,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":12,"column":3},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":9},{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":14,"column":0},"end":{"row":16,"column":64},"action":"insert","lines":["// Query selector for the card class","const cards = document.querySelectorAll('.memory-card');","cards.forEach(card => card.addEventListener('click', flipCard));"],"id":10}],[{"start":{"row":22,"column":29},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":11},{"start":{"row":23,"column":0},"end":{"row":24,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":24,"column":0},"end":{"row":32,"column":10},"action":"insert","lines":["   <!-- Select Bar -->","","    <div class=\"select-bar\">","        <select id=\"dropdown-toggle\" onchange=\"selectDifficulty()\">Select Difficulty</button>","       <option class=\"dropdown-item\" value=\"Easy\">Easy</option>","       <option class=\"dropdown-item\" value=\"Medium\">Medium</option>","       <option class=\"dropdown-item\" value=\"Hard\">Hard</option>","    </select>","    </div>"],"id":12}],[{"start":{"row":24,"column":0},"end":{"row":32,"column":10},"action":"remove","lines":["   <!-- Select Bar -->","","    <div class=\"select-bar\">","        <select id=\"dropdown-toggle\" onchange=\"selectDifficulty()\">Select Difficulty</button>","       <option class=\"dropdown-item\" value=\"Easy\">Easy</option>","       <option class=\"dropdown-item\" value=\"Medium\">Medium</option>","       <option class=\"dropdown-item\" value=\"Hard\">Hard</option>","    </select>","    </div>"],"id":13}],[{"start":{"row":24,"column":0},"end":{"row":32,"column":5},"action":"insert","lines":["function checkForMatch() {","    $('.memory-game').addClass('locked');","    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;","    if (isMatch) {","        disableCards();","        trueMatch();","    } else {","        unflipCards();","    }"],"id":14}],[{"start":{"row":27,"column":3},"end":{"row":31,"column":22},"action":"remove","lines":[" if (isMatch) {","        disableCards();","        trueMatch();","    } else {","        unflipCards();"],"id":15},{"start":{"row":27,"column":2},"end":{"row":27,"column":3},"action":"remove","lines":[" "]},{"start":{"row":27,"column":1},"end":{"row":27,"column":2},"action":"remove","lines":[" "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":1},"action":"remove","lines":[" "]}],[{"start":{"row":26,"column":79},"end":{"row":27,"column":0},"action":"remove","lines":["",""],"id":16}],[{"start":{"row":25,"column":4},"end":{"row":25,"column":41},"action":"remove","lines":["$('.memory-game').addClass('locked');"],"id":17},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"remove","lines":["    "]},{"start":{"row":24,"column":26},"end":{"row":25,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":22,"column":29},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":18}],[{"start":{"row":23,"column":0},"end":{"row":25,"column":18},"action":"insert","lines":["let pairCounter = 1;","let pairTotal = 6;","let eachCard = [];"],"id":19}],[{"start":{"row":30,"column":0},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":20}],[{"start":{"row":31,"column":0},"end":{"row":49,"column":1},"action":"insert","lines":["function flipCard() {","    if (!gameStart) {","        gameStart = true;","    }","    flipCount++;","    $('#attempt').html('&nbsp;' + flipCount);","    this.classList.add('flip');","    if (boardLocked) return;","    ","    if (!hasFlippedCard) {","        hasFlippedCard = true;","        firstCard = this;","        return;","    }","    ","    secondCard = this;","    hasFlippedCard = false;","    checkForMatch();","}"],"id":21}],[{"start":{"row":35,"column":4},"end":{"row":38,"column":28},"action":"remove","lines":["flipCount++;","    $('#attempt').html('&nbsp;' + flipCount);","    this.classList.add('flip');","    if (boardLocked) return;"],"id":22}],[{"start":{"row":32,"column":4},"end":{"row":34,"column":5},"action":"remove","lines":["if (!gameStart) {","        gameStart = true;","    }"],"id":23},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":44,"column":1},"end":{"row":45,"column":0},"action":"insert","lines":["",""],"id":24},{"start":{"row":45,"column":0},"end":{"row":46,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":46,"column":0},"end":{"row":49,"column":2},"action":"insert","lines":["function disableCards() {","   firstCard.removeEventListener('click', flipCard);","   secondCard.removeEventListener('click', flipCard);"," }"],"id":25}],[{"start":{"row":49,"column":2},"end":{"row":50,"column":0},"action":"insert","lines":["",""],"id":26},{"start":{"row":50,"column":0},"end":{"row":50,"column":1},"action":"insert","lines":[" "]},{"start":{"row":50,"column":1},"end":{"row":51,"column":0},"action":"insert","lines":["",""]},{"start":{"row":51,"column":0},"end":{"row":51,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":51,"column":1},"end":{"row":59,"column":2},"action":"insert","lines":["function unflipCards() {","    boardLocked = true;","    ","    setTimeout(() => {","        firstCard.classList.remove('flip');","        secondCard.classList.remove('flip');","        boardLocked = false;","    }, 800);"," }"],"id":27}],[{"start":{"row":58,"column":7},"end":{"row":58,"column":8},"action":"remove","lines":["8"],"id":28}],[{"start":{"row":58,"column":7},"end":{"row":58,"column":8},"action":"insert","lines":["1"],"id":29},{"start":{"row":58,"column":8},"end":{"row":58,"column":9},"action":"insert","lines":["5"]}],[{"start":{"row":58,"column":8},"end":{"row":58,"column":9},"action":"remove","lines":["5"],"id":30},{"start":{"row":58,"column":7},"end":{"row":58,"column":8},"action":"remove","lines":["1"]}],[{"start":{"row":58,"column":7},"end":{"row":58,"column":8},"action":"insert","lines":["8"],"id":31}],[{"start":{"row":59,"column":2},"end":{"row":60,"column":0},"action":"insert","lines":["",""],"id":32},{"start":{"row":60,"column":0},"end":{"row":60,"column":1},"action":"insert","lines":[" "]},{"start":{"row":60,"column":1},"end":{"row":61,"column":0},"action":"insert","lines":["",""]},{"start":{"row":61,"column":0},"end":{"row":61,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":61,"column":1},"end":{"row":67,"column":1},"action":"insert","lines":["function noMatch() {","    boardLocked = true;","    setTimeout(() => {","        firstCard.classList.remove('flip');","        secondCard.classList.remove('flip');","    }, 1000);","}"],"id":33}],[{"start":{"row":67,"column":1},"end":{"row":68,"column":0},"action":"insert","lines":["",""],"id":34},{"start":{"row":68,"column":0},"end":{"row":69,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":69,"column":0},"end":{"row":76,"column":5},"action":"insert","lines":["// shuffle function wrapped in extra parenthesis to call function immediately","(function shuffle() {","    cards.forEach(card => {","        // multiplied by 12 to account for cards 1 to 11","        let randomPos = Math.floor(Math.random() * 12);","        card.style.order = randomPos;","    });","})();"],"id":35}],[{"start":{"row":76,"column":5},"end":{"row":77,"column":0},"action":"insert","lines":["",""],"id":36},{"start":{"row":77,"column":0},"end":{"row":78,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":78,"column":0},"end":{"row":94,"column":1},"action":"insert","lines":["function selectDifficulty() {","      var level= document.getElementById(\"dropdown-toggle\").value;","        $(\".levelGrid\").hide();","    switch (level) {","        case \"Easy\": ","            $(\".easyGrid\").show();","            break;","        case \"Medium\":","            $(\".mediumGrid\").show();","            break;","        case \"Hard\":","            $(\".hardGrid\").toggle();","            break;","        default: ","            $(\".easyGrid\").show();","    }","}"],"id":37}],[{"start":{"row":78,"column":0},"end":{"row":94,"column":1},"action":"remove","lines":["function selectDifficulty() {","      var level= document.getElementById(\"dropdown-toggle\").value;","        $(\".levelGrid\").hide();","    switch (level) {","        case \"Easy\": ","            $(\".easyGrid\").show();","            break;","        case \"Medium\":","            $(\".mediumGrid\").show();","            break;","        case \"Hard\":","            $(\".hardGrid\").toggle();","            break;","        default: ","            $(\".easyGrid\").show();","    }","}"],"id":38}],[{"start":{"row":78,"column":0},"end":{"row":80,"column":3},"action":"insert","lines":["$(\".close, #restart\").click(function(){","    window.location.reload(false);","});"],"id":39}],[{"start":{"row":80,"column":3},"end":{"row":81,"column":0},"action":"insert","lines":["",""],"id":40},{"start":{"row":81,"column":0},"end":{"row":82,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":82,"column":0},"end":{"row":94,"column":1},"action":"insert","lines":["function setTimer(count){","    var thiscount = count, timer = setInterval(function() {","        if (difficulty != 1 && gameStart) {","            $(\"#mem-table\").show();","            $(\"#counter\").html(thiscount--);","            if(thiscount === -2) {","                $('#modal-lose').show();","                $('#won-modal').show();","                clearInterval(timer);","            }","        }","    }, 1000);","}"],"id":41}],[{"start":{"row":84,"column":8},"end":{"row":89,"column":39},"action":"remove","lines":["if (difficulty != 1 && gameStart) {","            $(\"#mem-table\").show();","            $(\"#counter\").html(thiscount--);","            if(thiscount === -2) {","                $('#modal-lose').show();","                $('#won-modal').show();"],"id":42}],[{"start":{"row":67,"column":1},"end":{"row":68,"column":0},"action":"insert","lines":["",""],"id":43},{"start":{"row":68,"column":0},"end":{"row":69,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":69,"column":0},"end":{"row":74,"column":27},"action":"insert","lines":["// difficulty select","$(\".select-diff\").click(function(){","    let diff = $(this).attr('data-value');","    difficulty = diff;","    $(\".hero-image\").hide();","    $('.full-game').show();"],"id":44}],[{"start":{"row":74,"column":27},"end":{"row":75,"column":0},"action":"insert","lines":["",""],"id":45},{"start":{"row":75,"column":0},"end":{"row":75,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":75,"column":4},"end":{"row":93,"column":3},"action":"insert","lines":["    switch (diff) {","        case \"1\":","            $(\".easyGrid\").show();","            $('#mode').html('&nbsp; Easy');","            break;","        case \"2\":","            $(\".mediumGrid\").show();","            $('#mode').html('&nbsp; Medium');","            setTimer(60);","            break;","        case \"3\":","            $(\".hardGrid\").show();","            $('#mode').html('&nbsp; Hard');","            setTimer(30);","            break;","        default:","            console.log(\"Something went wrong somehow\");","    }","});"],"id":46}],[{"start":{"row":74,"column":27},"end":{"row":75,"column":0},"action":"insert","lines":["",""],"id":47},{"start":{"row":75,"column":0},"end":{"row":75,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":11,"column":0},"end":{"row":12,"column":3},"action":"remove","lines":["$(document).ready(function () {","});"],"id":48},{"start":{"row":11,"column":0},"end":{"row":17,"column":3},"action":"insert","lines":["$(document).ready(function () {","    $('.full-game').hide();","    $('#won-modal').hide();","    $('#modal-win').hide();","    $('#modal-lose').hide();","    $(\"#mem-table\").hide();","});"]}],[{"start":{"row":17,"column":3},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":49},{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":19,"column":0},"end":{"row":24,"column":1},"action":"insert","lines":["var modal = document.getElementById('id01');","window.onclick = function(event) {","  if (event.target == modal) {","    modal.style.display = \"none\";","  }","}"],"id":50}],[{"start":{"row":37,"column":18},"end":{"row":38,"column":0},"action":"insert","lines":["",""],"id":51}],[{"start":{"row":38,"column":0},"end":{"row":39,"column":19},"action":"insert","lines":["let gameStart = false;","var difficulty = 1;"],"id":52}],[{"start":{"row":37,"column":18},"end":{"row":38,"column":0},"action":"insert","lines":["",""],"id":53}],[{"start":{"row":38,"column":0},"end":{"row":38,"column":18},"action":"insert","lines":["let flipCount = 0;"],"id":54}],[{"start":{"row":43,"column":4},"end":{"row":44,"column":5},"action":"remove","lines":["let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;","    }"],"id":55},{"start":{"row":43,"column":4},"end":{"row":50,"column":5},"action":"insert","lines":["$('.memory-game').addClass('locked');","    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;","    if (isMatch) {","        disableCards();","        trueMatch();","    } else {","        unflipCards();","    }"]}],[{"start":{"row":50,"column":5},"end":{"row":51,"column":0},"action":"insert","lines":["",""],"id":56},{"start":{"row":51,"column":0},"end":{"row":51,"column":4},"action":"insert","lines":["    "]},{"start":{"row":51,"column":4},"end":{"row":52,"column":0},"action":"insert","lines":["",""]},{"start":{"row":52,"column":0},"end":{"row":52,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":52,"column":4},"end":{"row":55,"column":1},"action":"insert","lines":["setTimeout(() => {","        $('.memory-game').removeClass('locked');","    }, 1000);","}"],"id":57}]]},"ace":{"folds":[],"scrolltop":546,"scrollleft":0,"selection":{"start":{"row":55,"column":1},"end":{"row":55,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":33,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1571566493550}