"use strict";
let outputDisplay = document.getElementById("output");
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
zeroButton === null || zeroButton === void 0 ? void 0 : zeroButton.addEventListener("click", function (e) {
    outputDisplay.value = `${outputDisplay.value}0`;
});
oneButton === null || oneButton === void 0 ? void 0 : oneButton.addEventListener("click", function (e) {
    outputDisplay.value = `${outputDisplay.value}1`;
});
twoButton === null || twoButton === void 0 ? void 0 : twoButton.addEventListener("click", function (e) {
    outputDisplay.value = `${outputDisplay.value}2`;
});
threeButton === null || threeButton === void 0 ? void 0 : threeButton.addEventListener("click", function (e) {
    outputDisplay.value = `${outputDisplay.value}3`;
});
fourButton === null || fourButton === void 0 ? void 0 : fourButton.addEventListener("click", function (e) {
    outputDisplay.value = `${outputDisplay.value}4`;
});
fiveButton === null || fiveButton === void 0 ? void 0 : fiveButton.addEventListener("click", function (e) {
    outputDisplay.value = `${outputDisplay.value}5`;
});
sixButton === null || sixButton === void 0 ? void 0 : sixButton.addEventListener("click", function (e) {
    outputDisplay.value = `${outputDisplay.value}6`;
});
sevenButton === null || sevenButton === void 0 ? void 0 : sevenButton.addEventListener("click", function (e) {
    outputDisplay.value = `${outputDisplay.value}7`;
});
eightButton === null || eightButton === void 0 ? void 0 : eightButton.addEventListener("click", function (e) {
    outputDisplay.value = `${outputDisplay.value}8`;
});
nineButton === null || nineButton === void 0 ? void 0 : nineButton.addEventListener("click", function (e) {
    outputDisplay.value = `${outputDisplay.value}9`;
});
plusButton === null || plusButton === void 0 ? void 0 : plusButton.addEventListener("click", function (e) {
    outputDisplay.value = `${outputDisplay.value}+`;
});
minusButton === null || minusButton === void 0 ? void 0 : minusButton.addEventListener("click", function (e) {
    outputDisplay.value = `${outputDisplay.value}-`;
});
productButton === null || productButton === void 0 ? void 0 : productButton.addEventListener("click", function (e) {
    outputDisplay.value = `${outputDisplay.value}*`;
});
divideButton === null || divideButton === void 0 ? void 0 : divideButton.addEventListener("click", function (e) {
    outputDisplay.value = `${outputDisplay.value}/`;
});
clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener("click", function (e) {
    outputDisplay.value = "";
});
equalButton === null || equalButton === void 0 ? void 0 : equalButton.addEventListener("click", function (e) {
    let result = evaluate(outputDisplay.value);
    outputDisplay.value = result;
});
function evaluate(s) {
    let ans;
    try {
        ans = eval(s);
    }
    catch (err) {
        return "Invalid";
    }
    return eval(s);
}
