const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".indicators ul li");
let currentIndex = 0;

/*funçao de navegaçao*/

function navigateNext() {
  items[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].classList.add("active");
  updateDots();
}

function navigatePrev() {
  items[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  items[currentIndex].classList.add("active");
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === currentIndex) dot.classList.add("active");
  });
  document.querySelector(".indicators .number").innerHTML = `0${
    currentIndex + 1
  }`;
}

nextButton.addEventListener("click", navigateNext);
prevButton.addEventListener("click", navigatePrev);
