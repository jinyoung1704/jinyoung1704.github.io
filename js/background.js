const images = [
    "0.png",
    "1.png",
    "2.png"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

document.body.style.backgroundImage = `url("img/${chosenImage}")`;



