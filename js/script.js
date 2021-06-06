// Global variable(s) (TODO: is this bad practice?)
var p1_score;
var p2_score;

var p1_cards = [];
var p2_cards = [];

var game_in_progress;

function init() {
    // Set global variables
    p1_score = 0;
    p2_score = 0;
    game_in_progress = true;

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 13; j++) {
            p1_cards.push(j);
        }
    }
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 13; j++) {
            p2_cards.push(j);
        }
    }
    shuffle(p1_cards);
    shuffle(p2_cards);
    // console.log('shuffled cards', p1_cards);
}

/* When the player first starts the game:
    - The game window is unhidden
    - The start button is hidden (TODO: change)
*/
function start_game() {
    document.getElementById("game").style.display = "block";
    document.getElementById("start").style.display = "none";
}

function player_draw_card() {
    return p1_cards.splice(0, 1)[0];
}

function opp_draw_card() {
    return p2_cards.splice(0, 1)[0];
}

// Taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(cards) {
    var i = cards.length, temp, randomIndex;

    while (0 !== i) {
        randomIndex = Math.floor(Math.random() * i);
        i -= 1;

        temp = cards[i];
        cards[i] = cards[randomIndex];
        cards[randomIndex] = temp;
    }

    return cards;
}