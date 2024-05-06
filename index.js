const imageSliderBox = document.querySelector(".image-slider__image-box");
const imageSliderLeftBtn = document.querySelector(".image-slider__left-btn");
const imageSliderRightBtn = document.querySelector(".image-slider__right-btn");
const imageSliderRounds = document.querySelectorAll(".image-slider__round");
const images = document.querySelectorAll("img");

let imageSliderCounter = 0;
let intervalId;

const removeInterval = () => {
  clearInterval(intervalId);
};

const startInterval = () => {
  intervalId = setInterval(slideImageToRight, 5000);
};

const updateImageRounds = () => {
  imageSliderRounds.forEach((round) =>
    round.classList.remove("image-slider__round--active")
  );
  imageSliderRounds[imageSliderCounter].classList.add(
    "image-slider__round--active"
  );
};

const slideImage = () => {
  imageSliderBox.style = `transform: translateX(-${
    imageSliderBox.clientWidth * imageSliderCounter
  }px)`;
};

const slideImageToLeft = () => {
  imageSliderCounter--;
  if (imageSliderCounter < 0) {
    imageSliderCounter = images.length - 1;
  }
  updateImageRounds();
  slideImage();
  removeInterval();
  startInterval();
};

const slideImageToRight = () => {
  imageSliderCounter++;
  if (imageSliderCounter > images.length - 1) {
    imageSliderCounter = 0;
  }
  updateImageRounds();
  slideImage();
  removeInterval();
  startInterval();
};

const updateCounter = (roundIndex) => {
  imageSliderCounter = roundIndex;
  updateImageRounds();
  slideImage();
  removeInterval();
  startInterval();
};

const initiateAutomaticImageSlide = () => {
  startInterval();
};

initiateAutomaticImageSlide();

imageSliderLeftBtn.addEventListener("click", slideImageToLeft);
imageSliderRightBtn.addEventListener("click", slideImageToRight);
imageSliderRounds.forEach((imageRound, index) =>
  imageRound.addEventListener("click", updateCounter.bind(null, index))
);
