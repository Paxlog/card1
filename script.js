// script.js
function showMessageExternal() {
    console.log("JavaScript з зовнішнього файлу завантажено.");
}
showMessageExternal();

function changeBackground() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F6"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}   
