function init() {
    let cards = [];
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 14; j++) {
            cards.push(new Card(j, i));
        }
    }
    console.log('cards', cards);
    shuffle(cards);
    console.log('shuffled cards', cards);
}

function Card(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    
    if (rank == 11) {
        this.face = 'jack';
    } else if (rank == 12) {
        this.face = 'queen';
    } else if (rank == 13) {
        this.face = 'king';
    } else {
        this.face = 'none';
    }
}

// Taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(cards) {
    var i = cards.length, temp, randomIndex;

    while (0 !== i) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temp = cards[i];
        cards[i] = cards[randomIndex];
        array[randomIndex] = temp;
    }

    return cards;
}