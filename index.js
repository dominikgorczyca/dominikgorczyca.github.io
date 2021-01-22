const scoreboard = {
    1: document.getElementById("player1Scoreboard"),
    2: document.getElementById("player2Scoreboard")
}
const dots =  {
    1: document.querySelectorAll("#player1Dice .dot"),
    2: document.querySelectorAll("#player2Dice .dot")
}
const dice = {
    1: document.getElementById(`player1Dice`).classList,
    2: document.getElementById(`player2Dice`).classList
}
const roll = document.getElementById("rollBtn");
const reset = document.getElementById("resetBtn")
const playerTurn = document.getElementById("message");
let turn = 1;

roll.addEventListener("click", () => {
    let rand = Math.floor(Math.random() * 6 + 1);
    
    diceFace(rand, dots[turn])
    scoreboard[turn].textContent = Number(scoreboard[turn].textContent) + rand; 
    
    dice[turn].remove("active");
    turn = Math.abs(turn - 3) 
    dice[turn].add("active");
    
    playerTurn.textContent = "Player " + turn + " Turn";
    win();
});

reset.addEventListener("click", () => {
    scoreboard[1].textContent = 0; scoreboard[2].textContent = 0;
    diceFace(1, dots[1]); diceFace(1, dots[2]);
    
    playerTurn.textContent = "Player " + turn + " Turn";
    roll.classList.remove("display");
    reset.classList.add("display");
})

const diceFace = (face, dots) => {
    for(let v of dots) {
        v.classList.remove("show")
    }
    
    if(face == 1) {
        dots[4].classList.add("show")
    } else if (face == 2) {
        dots[2].classList.add("show")
        dots[6].classList.add("show")
    } else if (face == 3) {
        dots[2].classList.add("show")
        dots[4].classList.add("show")
        dots[6].classList.add("show")
    } else if (face == 4) {
        dots[0].classList.add("show")
        dots[2].classList.add("show")
        dots[6].classList.add("show")
        dots[8].classList.add("show")
    } else if (face == 5) {
        dots[0].classList.add("show")
        dots[2].classList.add("show")
        dots[4].classList.add("show")
        dots[6].classList.add("show")
        dots[8].classList.add("show")
    } else if (face == 6) {
        dots[0].classList.add("show")
        dots[2].classList.add("show")
        dots[3].classList.add("show")
        dots[5].classList.add("show")
        dots[6].classList.add("show")
        dots[8].classList.add("show")
    }   
}

const win = () => {
    if(Number(scoreboard[1].textContent) >= 20) {
        playerTurn.textContent = "Player 1 Won 🥳";
    } else if(Number(scoreboard[2].textContent) >= 20) {
        playerTurn.textContent = "Player 2 Won 🥳";
    } else {
        return;
    }
    
    roll.classList.add("display");
    reset.classList.remove("display");
}