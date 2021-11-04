setInterval(setDate,1000);
const hourHand = document.querySelector(".data-hour-hand");
const minHand = document.querySelector(".data-min-hand");
const secondHand = document.querySelector(".data-second-hand");

function setDate(){
const currentDate =new Date();
const secondRatio = (currentDate.getSeconds()) / 60;
const minRatio = (secondRatio + (currentDate.getMinutes()))/60;
const hourRatio = (minRatio +(currentDate.getHours())) /12;
setRotation(secondHand,secondRatio);
setRotation(minHand,minRatio);
setRotation(hourHand,hourRatio);
}

function setRotation(element,rotationRatio){
    element.style.setProperty(`--rotation`,rotationRatio * 360);
}
setDate();