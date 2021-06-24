// Global variable(s) (TODO: is this bad practice?)
var p1_cards = [];
var p2_cards = [];

var p1_card_count = 0;
var p2_card_count = 0;

var at_war = false;
var war_cards = [];

/* When the player starts the game:
    - The game window is unhidden
    - Cleanup
*/
function start_new_game() {
    document.getElementById("game").style.display = "block";
    // document.getElementById("start").style.display = "none";

    cleanup();

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
}

function cleanup() {
    war_cards = [];
    p1_cards = [];
    p2_cards = [];

    p1_card_count = 0;
    p2_card_count = 0;

    at_war = false;

    document.getElementById("player-cards").innerHTML = 0;
    document.getElementById("opp-cards").innerHTML = 0;
    document.getElementById("player-score").innerHTML = 0;
    document.getElementById("opp-score").innerHTML = 0;

    document.getElementById("winner").style.display = "none";
}

function draw_card() {
    if (p1_cards.length !== 0 && p2_cards.length !== 0) {

        var p1_draw = p1_cards.splice(0, 1)[0];
        var p2_draw = p2_cards.splice(0, 1)[0];

        document.getElementById("player-cards").innerHTML = p1_draw;
        document.getElementById("opp-cards").innerHTML = p2_draw;
        
        if (p1_draw > p2_draw) {
            if (!at_war) {
                p1_card_count++;
            } else {
                p1_card_count += war_cards.length;
                war_cards = [];
                at_war = false;
            }
        } else if (p2_draw > p1_draw) {
            if (!at_war) {
                p2_card_count++;
            } else {
                p2_card_count += war_cards.length;
                war_cards = [];
                at_war = false;
            }
        } else {
            at_war = true;
            war_cards.push(p1_draw);
            war_cards.push(p2_draw);
        }

        document.getElementById("player-score").innerHTML = p1_card_count;
        document.getElementById("opp-score").innerHTML = p2_card_count;
    } else {
        declare_winner();
    }
}

function declare_winner() {
    document.getElementById("game").style.display = "none";
    document.getElementById("winner").style.display = "block";

    if (p1_card_count > p2_card_count) {
        document.getElementById("winner-text").innerHTML = "Player wins!";
    } else if (p2_card_count > p1_card_count) {
        document.getElementById("winner-text").innerHTML = "Opponent wins!";
    } else {
        document.getElementById("winner-text").innerHTML = "It's a tie!";
    }
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