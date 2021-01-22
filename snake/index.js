const grid = document.querySelector('.grid')
const score = document.getElementById('score')
const restart = document.getElementById("restart")
let elements;
let moveLimit = 1;
let snake = [94,93,92];
let direction = "right"; 
let interval;


function createGame() {
    for(let i = 0; i < 225; i++) {
        let element = document.createElement("div")
        element.classList.add("square")
        element.classList.add(i % 2 == 0 ? "field1" : "field2");
        grid.append(element);
    }  
    
    elements = document.getElementsByClassName("square")

    for(let [v, i] of snake.entries()) {
        elements[i].classList.add("snake");
    }
    elements[101].classList.add("apple")
    startGame()
    
}

function move() {
    switch(direction) {
        case "right":
            changeSnake(1);
            break;
        case "left":
            changeSnake(-1);
            break;
        case "up":
            changeSnake(-15);
            break;
        case "down":
            changeSnake(15);
            break;
    }
}

function changeSnake(num) {
    snake.unshift(snake[0] + num);
    let checkNum = {
        "1": snake[0] % 15 == 0,
        "-1": snake[0] % 15 == 14 ,
        "15": snake[0] > 224 ,
        "-15": snake[0] < 0 
    }
    
    if(checkNum[num]) {   
        gameOver()
        return;
    } else if (elements[snake[0]].classList.contains("snake")) {
        gameOver();
        return;
    }

    elements[snake[0]].classList.add("snake")
    apple();
       
}
function gameOver() {
    clearInterval(interval);
    document.getElementById("gameover").style.display = "block";
}

function apple() {
    if(!elements[snake[0]].classList.contains("apple")) {
        elements[(snake.pop())].classList.remove("snake");
    } else {
        elements[snake[0]].classList.remove("apple");
        while(true) {
            let random = Math.floor(Math.random() * 225);
            if(!elements[random].classList.contains("snake")) {
                elements[random].classList.add("apple");
                break;
            }
        }
        score.textContent++;
    }
}

function goodDirection(string) {
    //ignoring reverse button
    if((string == "up" && direction == "down") || (string == "down" && direction == "up") ||           (string == "right" && direction == "left") || (string == "left" && direction == "right")) {
        return;
    }
    direction = string;
    moveLimit = 0;
}

document.addEventListener("keydown", (e) => {
    if(moveLimit == 0) {
        return;
    }
    if (e.code == "ArrowUp" || e.code == "KeyW") {
        goodDirection("up")
    } else if (e.code == "ArrowDown" || e.code == "KeyS") {
        goodDirection("down")
    } else if (e.code == "ArrowLeft" || e.code == "KeyA") {
        goodDirection("left")
    } else if (e.code == "ArrowRight" || e.code == "KeyD") {
        goodDirection("right")
    }
})
restart.addEventListener("click", () => {
    clearInterval(interval);
    for(let v of elements) {
        v.classList.remove("snake")
        v.classList.remove("apple")
    }
    snake = [94,93,92];
    direction = "right"
    
    for(let [v, i] of snake.entries()) {
        elements[i].classList.add("snake");
    }
    elements[101].classList.add("apple")
    
    document.getElementById("gameover").style.display = "none";
    score.textContent = 0;
    
    startGame()
})

function startGame() {
    interval = setInterval( function() {
        if(direction != undefined) {
            move();
            moveLimit = 1;
        }
    }, 100)
} 

createGame();


