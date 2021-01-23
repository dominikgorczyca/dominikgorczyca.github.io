let input = document.getElementById("searchInput");
let names = document.getElementsByClassName("name");


input.addEventListener("input", (e) => {
    let regex = new RegExp(input.value, "i") ;
    for(let v of names) {
        if(v.textContent.match(regex)) {
            v.classList.remove("hide")
        } else {
            v.classList.add("hide")
        }
    }
})