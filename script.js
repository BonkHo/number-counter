document.getElementById("counter-number").innerHTML = 0;
let counter = 0;

function incrementCounter() {
    counter++;
    document.getElementById("counter-number").innerHTML = counter;
}

function decrementCounter() {
    counter--;
    document.getElementById("counter-number").innerHTML = counter;
}

function resetCounter() {
    counter = 0;
    document.getElementById("counter-number").innerHTML = counter;
}
