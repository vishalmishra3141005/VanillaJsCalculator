

let outputDisplay = document.getElementById("output") as HTMLInputElement;

let zeroButton = document.getElementById("0");
let oneButton = document.getElementById("1");
let twoButton = document.getElementById("2");
let threeButton = document.getElementById("3");
let fourButton = document.getElementById("4");
let fiveButton = document.getElementById("5");
let sixButton = document.getElementById("6");
let sevenButton = document.getElementById("7");
let eightButton = document.getElementById("8");
let nineButton = document.getElementById("9");

let plusButton = document.getElementById("+");
let minusButton = document.getElementById("-");
let productButton = document.getElementById("*");
let equalButton = document.getElementById("=");
let clearButton = document.getElementById("AC");
let divideButton = document.getElementById("/");

zeroButton?.addEventListener("click", function(e) {
    outputDisplay!.value = `${outputDisplay!.value}0`; 
});

oneButton?.addEventListener("click", function(e) {
    outputDisplay!.value = `${outputDisplay!.value}1`; 
});

twoButton?.addEventListener("click", function(e) {
    outputDisplay!.value = `${outputDisplay!.value}2`; 
});

threeButton?.addEventListener("click", function(e) {
    outputDisplay!.value = `${outputDisplay!.value}3`; 
});

fourButton?.addEventListener("click", function(e) {
    outputDisplay!.value = `${outputDisplay!.value}4`
});

fiveButton?.addEventListener("click", function(e) {
    outputDisplay!.value = `${outputDisplay!.value}5`
});

sixButton?.addEventListener("click", function(e) {
    outputDisplay!.value = `${outputDisplay!.value}6`
});

sevenButton?.addEventListener("click", function(e) {
    outputDisplay!.value = `${outputDisplay!.value}7`
});

eightButton?.addEventListener("click", function(e) {
    outputDisplay!.value = `${outputDisplay!.value}8`
});

nineButton?.addEventListener("click", function(e) {
    outputDisplay!.value = `${outputDisplay!.value}9`
});

plusButton?.addEventListener("click", function(e) {
    outputDisplay!.value = `${outputDisplay!.value}+`
});


minusButton?.addEventListener("click", function(e) {
    outputDisplay!.value = `${outputDisplay!.value}-`
});

productButton?.addEventListener("click", function(e) {
    outputDisplay!.value = `${outputDisplay!.value}*`
});

divideButton?.addEventListener("click", function(e) {
    outputDisplay!.value = `${outputDisplay!.value}/`
});

clearButton?.addEventListener("click", function(e) {
    outputDisplay!.value = "";
});

equalButton?.addEventListener("click", function(e) {
    let result: string = evaluate(outputDisplay!.value);
    outputDisplay!.value = result
});


function evaluate(s: string): string {
    let ans: string;
    try {
        ans = eval(s);
    } catch(err) {
        return "Invalid";
    }
    return eval(s);
}