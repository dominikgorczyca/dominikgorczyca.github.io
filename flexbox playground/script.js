let description = document.querySelectorAll(".description");
let test = document.getElementById("test")
let properties = document.getElementsByClassName("property-button");
let buttonContainers = document.getElementsByClassName("buttons")
let blockContainers = document.getElementsByClassName("property-potrayal")
let move = 1;
let blockInfo = [];

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};


for(let [i, value] of Object.entries(properties)) {
    if(value.innerText == "order") {
        for(let [j, value] of Object.entries(blockContainers[i].children)) {
            value.style.order = value.innerText;
        }
        break;
    }
}

let jsProperty = (text) => {
    if(text.indexOf("-") == -1) {
        return text;
    }

    let [firstWord, secondWord] = [...text.split("-")];
    secondWord = secondWord.split('').map((letter, i) => i == 0 ? letter.toUpperCase() : letter).join("");

    return firstWord + secondWord;
}

let blockHeight = () => {
    return screen.width >= 700 ? "2em" : "3em";
}

let saveBlocks = (i) => {
    for(let block of blockContainers[i].children) {
        blockInfo.push([block.offsetTop, block.offsetLeft]);   
    }
}

let moveBlocks = (i, property, value) => {
    
    move = 0;
    for(let [j, block] of Object.entries(blockContainers[i].children)) {
        let topStart = blockInfo[j][0];
        let leftStart = blockInfo[j][1];
        let topEnd = block.offsetTop;
        let leftEnd = block.offsetLeft;


        if(topEnd != topStart || leftEnd != leftStart ) {
            block.style.transitionProperty = "max-height, transform, flex-grow , flex-shrink, flex-basis";
            block.style.left = leftStart - leftEnd + "px";
            block.style.top = topStart - topEnd + "px";
            block.style.position = "relative";
            
            block.style.transform = `translate(${leftEnd - leftStart}px, ${topEnd - topStart}px)`;
        };
        if(property == "alignSelf" && j != 0) break; 

        if(value == "stretch") {
            block.style.maxHeight = blockContainers[i].offsetHeight - 36 + "px";
            block.style.height = "100%";
            
            if(property == "alignContent") {
                block.style.height = "100%";
                block.style.maxHeight = (blockContainers[i].offsetHeight - 36) / 2 - 12 + "px";
            }
        } else {
            block.style.maxHeight = blockHeight();
        }

    }
    blockInfo = [];

    setTimeout(function() {
        for(let [j, block] of Object.entries(blockContainers[i].children)) {
            block.style.transitionProperty = "max-height, flex-grow , flex-shrink, flex-basis";
            block.style.position = `static`;
            block.style.transform = `none`;
            block.style.top = 0;
            block.style.left = 0; 
        }
        move = 1;
    }, 500);


    
}

let changePosition = (event, i) => {
    if(move == 0) return;
    let property = jsProperty(properties[i].innerText);
    let propertyValue = event.target.innerText;
    let firstChild = blockContainers[i].children[0];

    saveBlocks(i);

    if(blockContainers[i].children[0].classList.contains("special")) {
        eval(`blockContainers[${i}].children[0].style.${property} = '${propertyValue}'`);

        if(property == "order") {
            firstChild.innerText = firstChild.style.order;
        } 
    } else {
        eval(`blockContainers[${i}].style.${property} = '${propertyValue}'`);
    }

    moveBlocks(i, property, propertyValue);
    
}

for(let [i, btnContainer] of Object.entries(buttonContainers)) {
    for(let btn of btnContainer.children) {
        btn.addEventListener("mousedown", (event) => changePosition(event, i));
    }
}




let initialX;
let initialY;
let up = 0;


document.body.addEventListener("touchstart", startTouch);
document.body.addEventListener("touchmove", moveTouch);

function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
};

function moveTouch(e) {
    if(screen.width >= 700) return;

    if (initialX === null) {
        return;
    }
    if (initialY === null) {
        return;
    }

    var currentY = e.touches[0].clientY;

    var diffY = initialY - currentY;

    console.log(up)
    if (diffY > 0 && up != 1100) {
        up += 100;
        document.body.style.bottom = up + "vh";
    } else if ( up != 0)  {
        up -= 100;
        document.body.style.bottom = up + "vh";
    }  

    initialX = null;
    initialY = null;

    e.preventDefault();
};

