const oneBtn = document.querySelector(".one-btn");
const twoBtn = document.querySelector(".two-btn");
const threeBtn = document.querySelector(".three-btn");
const fourBtn = document.querySelector(".four-btn");
const fiveBtn = document.querySelector(".five-btn");
const sixBtn = document.querySelector(".six-btn");
const sevenBtn = document.querySelector(".seven-btn");
const eightBtn = document.querySelector(".eight-btn");
const nineBtn = document.querySelector(".nine-btn");
const zeroBtn = document.querySelector(".zero-btn");
const displayContent = document.querySelector(".display");

oneBtn.addEventListener('click', (e) => {
    displayContent.textContent += "1";
});

twoBtn.addEventListener('click', (e) => {
    displayContent.textContent += "2";
});

threeBtn.addEventListener('click', (e) => {
    displayContent.textContent += "3";
});

fourBtn.addEventListener('click', (e) => {
    displayContent.textContent += "4";
});

fiveBtn.addEventListener('click', (e) => {
    displayContent.textContent += "5";
});

sixBtn.addEventListener('click', (e) => {
    displayContent.textContent += "6";
});

sevenBtn.addEventListener('click', (e) => {
    displayContent.textContent += "7";
});

eightBtn.addEventListener('click', (e) => {
    displayContent.textContent += "8";
});

nineBtn.addEventListener('click', (e) => {
    displayContent.textContent += "9";
});

zeroBtn.addEventListener('click', (e) => {
    displayContent.textContent += "0";
});