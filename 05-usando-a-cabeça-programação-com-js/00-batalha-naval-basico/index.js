let randomLoc = Math.floor(Math.random() * 5);

let location1 = randomLoc;
let location2 = randomLoc + 1;
let location3 = randomLoc + 2;

let guess;
let guesses = 0;

let hits = 0;
let isSunk = false;

while (isSunk == false) {
    guess = prompt('Ready, aim fire! (enter a number from 0-6): ');

    if(guess < 0 || guess > 6) {
        alert('Please enter a valid cell number!');
    } else {
        guesses = guesses + 1;
    
        if(guesses == location1 || guesses == location2 || guesses == location3) {
            alert('HIT');

            hits = hits + 1;

            if (hits == 3) {
                isSunk = true;
                alert('You sank my battleship!');
            }
        } else {
            alert('MISS');
        }
    }
}

var status = 'You took ' + guesses + ' guesses to sink the battleship, ' + 'which means your shooting accuracy was ' + (3/guesses);

alert(status);

