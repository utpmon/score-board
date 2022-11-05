let scoreBoardH = document.getElementById("score-home");
let scoreBoardG = document.getElementById("score-guest");
let scoreH = 0;
let scoreG = 0;

function add1H() {
    scoreH += 1;
    scoreBoardH.textContent = scoreH;
}

function add2H() {
    scoreH += 2;
    scoreBoardH.textContent = scoreH;
}

function add3H() {
    scoreH += 3;
    scoreBoardH.textContent = scoreH;
}

function add1G() {
    scoreG += 1;
    scoreBoardG.textContent = scoreG;
}

function add2G() {
    scoreG += 2;
    scoreBoardG.textContent = scoreG;
}

function add3G() {
    scoreG += 3;
    scoreBoardG.textContent = scoreG;
}

function newGame() {
    scoreH = 0;
    scoreG = 0;
    scoreBoardH.textContent = 0;
    scoreBoardG.textContent = 0;
}