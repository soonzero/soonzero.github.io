const UNSPLASH_API_KEY = "eOzhigP2NvzcIoHDWWHwwichG2t2AJ08EP62ZbBmp00";
const UNSPLASH_URL = `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API_KEY}&query=landscape&orientation=landscape`;

const body = document.querySelector("body");
const locationSpace = document.getElementById("location");

function getBackground() {
  const savedImage = localStorage.getItem("background");
  if (savedImage === null) {
    getImage();
  } else {
    const parsedImage = JSON.parse(savedImage);
    const now = new Date();
    if (now > parsedImage.changeTime) {
      getImage();
    } else {
      body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${parsedImage.url})`;
      locationSpace.innerText = `${parsedImage.location}`;
    }
  }
  return;
}

function saveImage(fullImageUrl, location) {
  const savedImage = localStorage.getItem("background");
  if (savedImage !== null) {
    localStorage.removeItem("background");
  }
  const backgroundChangeTime = new Date();
  backgroundChangeTime.setDate(backgroundChangeTime.getDate() + 1);
  const imageObj = {
    url: fullImageUrl,
    changeTime: backgroundChangeTime,
    location,
  };
  localStorage.setItem("background", JSON.stringify(imageObj));
  getBackground();
  return;
}

function getImage() {
  fetch(UNSPLASH_URL)
    .then((response) => response.json())
    .then((json) => {
      const image = json;
      if (image.location.name && image.urls.full) {
        const location = image.location.name;
        const fullImageUrl = image.urls.full;
        saveImage(fullImageUrl, location);
      } else {
        getImage();
      }
    });
  return;
}

const bgchangeBtn = document.getElementById("background-change");
bgchangeBtn.addEventListener("click", backgroundChange);

function backgroundChange() {
  localStorage.removeItem("background");
  getBackground();
}

function startApplication() {
  getBackground();
  return;
}

startApplication();
