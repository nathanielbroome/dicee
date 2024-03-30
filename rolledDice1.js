function rollDice() {
    var n = Math.random();
    var roll = Math.floor(n * 6) +1;

    var rolled;

    if(roll === 1) {
        rolled = document.querySelector(".img1").src = './images/dice1.png';
        return rolled;

    } else if(roll === 2) {
        rolled = document.querySelector(".img1").src = './images/dice2.png';
        return rolled;

    } else if(roll === 3) {
        rolled = document.querySelector(".img1").src = './images/dice3.png';
        return rolled;

    } else if(roll === 4) {
        rolled = document.querySelector(".img1").src = './images/dice4.png';
        return rolled;

    } else if(roll === 5) {
        rolled = document.querySelector(".img1").src = './images/dice5.png';
        return rolled;

    } else {
        rolled = document.querySelector(".img1").src = './images/dice6.png';
        return rolled;
    }
    rollDice();
}



