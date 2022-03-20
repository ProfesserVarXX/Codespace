const passengers = document.querySelector(".people");
let defaults = 0;

passengers.innerHTML = "Total: " + defaults;

function increment() {
    let increments = defaults+=1;
    passengers.innerHTML = "Total: " + increments;
} 
