window.onload = init();

function init() {   // entry point for program. TODO: is there a better way to do this?
    let p1_cards = [];
    let p2_cards = [];
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