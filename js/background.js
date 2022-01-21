const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const container = document.getElementById("container");
const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`;

container.prepend(bgImage);
// document.body.appendChild(bgImage);
