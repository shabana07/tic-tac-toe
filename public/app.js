// form //
var firstPlayer = document.getElementById('firstPlayer');
var secondPlayer = document.getElementById('secondPlayer');
var playerOne = document.getElementById('playerOne');
var playerTwo = document.getElementById('playerTwo');
var main = document.getElementById('main');
var form = document.getElementById('form');


function startGame() {
    if (firstPlayer.value.length < 3 && secondPlayer.value.length < 3) {
        alert('Name must contain atleast three characters.')
    } else {
        main.classList.remove('hide');
        form.classList.add('hide');
        playerOne.innerHTML = 'Player One : ' + firstPlayer.value;
        playerTwo.innerHTML = 'Player Two : ' + secondPlayer.value;
    }
}
// main body //
var box = document.getElementsByClassName('block');
var block1 = document.getElementById('block1');
var block2 = document.getElementById('block2');
var block3 = document.getElementById('block3');
var block4 = document.getElementById('block4');
var block5 = document.getElementById('block5');
var block6 = document.getElementById('block6');
var block7 = document.getElementById('block7');
var block8 = document.getElementById('block8');
var block9 = document.getElementById('block9');
var result = document.getElementById('result');
var count = 0;
var timer = 0;

for (var i = 0; i < box.length; i++) {
    box[i].setAttribute('onclick', 'setValue(this)');
}


function setValue(val) {
    for (var a = 0; a < box.length; a++) {
        if (count % 2 == 0) {
            val.innerText = 'o';
        } else {
            val.innerText = 'x';
        }
    }
    count++;
    timer++;
    getWinner();
    
}

/// reset game ///
function resetGame() {
    for (var b = 0; b < box.length; b++) {
        box[b].innerHTML = "";
    }
    for (var i = 0; i < box.length; i++) {
        box[i].setAttribute('onclick', 'setValue(this)');
    }
    result.innerHTML = "";
}

function getWinner() {
    if (block1.innerText == 'o' && block2.innerText == 'o' && block3.innerText == 'o'
        || block4.innerText == 'o' && block5.innerText == 'o' && block6.innerText == 'o'
        || block7.innerText == 'o' && block8.innerText == 'o' && block9.innerText == 'o'
        || block1.innerText == 'o' && block4.innerText == 'o' && block7.innerText == 'o'
        || block2.innerText == 'o' && block5.innerText == 'o' && block8.innerText == 'o'
        || block3.innerText == 'o' && block6.innerText == 'o' && block9.innerText == 'o'
        || block1.innerText == 'o' && block5.innerText == 'o' && block9.innerText == 'o'
        || block3.innerText == 'o' && block5.innerText == 'o' && block7.innerText == 'o') {

        result.innerHTML = firstPlayer.value + " won";
        for (var i = 0; i < box.length; i++) {
            box[i].removeAttribute('onclick');
        }
        timer = 0;
    }
    if (block1.innerText == 'x' && block2.innerText == 'x' && block3.innerText == 'x'
        || block4.innerText == 'x' && block5.innerText == 'x' && block6.innerText == 'x'
        || block7.innerText == 'x' && block8.innerText == 'x' && block9.innerText == 'x'
        || block1.innerText == 'x' && block4.innerText == 'x' && block7.innerText == 'x'
        || block2.innerText == 'x' && block5.innerText == 'x' && block8.innerText == 'x'
        || block3.innerText == 'x' && block6.innerText == 'x' && block9.innerText == 'x'
        || block1.innerText == 'x' && block5.innerText == 'x' && block9.innerText == 'x'
        || block3.innerText == 'x' && block5.innerText == 'x' && block7.innerText == 'x') {

         result.innerHTML = secondPlayer.value + " won";
        for (var i = 0; i < box.length; i++) {
            box[i].removeAttribute('onclick');
        }
        timer = 0;
    }
    if (timer == 9) {
        result.innerHTML = "It's a Tie";
        for (var i = 0; i < box.length; i++) {
            box[i].removeAttribute('onclick');
        }
        timer = 0;
    }
}
