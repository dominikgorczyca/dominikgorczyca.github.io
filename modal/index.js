let open = document.getElementById("open-modal");
let close = document.getElementById("close-modal");

let overlay = document.getElementById("overlay");
let makeDark = document.getElementById("make-it-dark");
let modal = document.getElementById("modal");

open.addEventListener("click", () => {
   overlay.classList.add("dark-background");
   makeDark.classList.add("dark");
   modal.classList.remove("hide");
});

close.addEventListener("click", () => {
   overlay.classList.remove("dark-background");
   makeDark.classList.remove("dark");
   modal.classList.add("hide");
});

