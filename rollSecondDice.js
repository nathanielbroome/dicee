function rollSecondDice() {
    var a = Math.random();
    var rollTwo = Math.floor(a * 6) +1;
    var rolled2;
    
    if(rollTwo === 1) {
        rolled2 = document.querySelector(".img2").src = './images/dice1.png';
        return rolled2;

    } else if(rollTwo === 2) {
        rolled2 = document.querySelector(".img2").src = './images/dice2.png';
        return rolled2;

    } else if(rollTwo === 3) {
        rolled2 = document.querySelector(".img2").src = './images/dice3.png';
        return rolled2;

    } else if(rollTwo === 4) {
        rolled2 = document.querySelector(".img2").src = './images/dice4.png';
        return rolled2;

    } else if(rollTwo === 5) {
        rolled2 = document.querySelector(".img2").src = './images/dice5.png';
        return rolled2;

    } else {
        rolled2 = document.querySelector(".img2").src = './images/dice6.png';
        return rolled2;
    }
    rollSecondDice();
}