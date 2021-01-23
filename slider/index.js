let images = Array.from(document.getElementsByClassName("carousel-item"));
let current = 0;
let buttons = document.getElementsByTagName("button");

for(let event of buttons) {
    event.addEventListener("click", (e) => {
        for(let v of images) {
            if(v.classList.contains("carousel-item-visible")) {
                v.classList.remove("carousel-item-visible");
                
                if(e.target.id == "carousel-button-prev") {
                    prev();
                } else if(e.target.id == "carousel-button-next") {
                    next();
                }
                break; 
            }    
        }
        images[current].className += " carousel-item-visible";
    })
}

const prev = (index) => {
    if(current == 0) {
        current = images.length - 1
    } else {
        current--;
    }
}
const next = (index) => {
    if(current == images.length - 1) {
        current = 0
    } else {
        current++;
    }
}

