setInterval(setClock,1000);
const hourHand = document.querySelector('[data-hour-hand]');
const minHand = document.querySelector('[data-min-hand]');
const secHand = document.querySelector('[data-sec-hand]');

function setClock(){
    const currDate = new Date();
    const secondsRatio = currDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio  + currDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currDate.getHours())/ 12;

    setRotation(secHand,secondsRatio);
    setRotation(minHand,minutesRatio);
    setRotation(hourHand,hoursRatio);
}


function setRotation(element, rotationRatio)
{
    element.style.setProperty('--rotation', rotationRatio * 360);
}