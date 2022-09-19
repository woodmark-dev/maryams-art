const headerEl = document.querySelector(".header");
const forwardButton = document.querySelector(".slider-icons-div-forward");
const backButton = document.querySelector(".slider-icons-div-back");
const sliderDiv = document.querySelector(".slider-image-div");
const closeButton = document.querySelector(".slider-icons-div-close");
const galleryImages = document.querySelectorAll(".gallery-image");
const sliderSection = document.querySelector(".slider-section");
const galleryItems = document.querySelector(".gallery-grid");
const lastElementNumber =
  galleryItems.lastElementChild.querySelector(".image-gallery").dataset.image;

const gallery = document.querySelector(".gallery");
const html = document.querySelector("html");

document.querySelector(".total-values").textContent =
  parseInt(lastElementNumber) + 1;

headerEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const sectionHeroEl = document.querySelector(".hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);

let num = 0;

forwardButton.addEventListener("click", function () {
  num += 400;
  if (num <= lastElementNumber * 400) {
    sliderDiv.style.transform = `translateX(-${num}%)`;
    document.querySelector(".current-value").textContent =
      num === 0 ? 1 : num / 400 + 1;
  } else {
    sliderDiv.style.transform = "translateX(0%)";
    document.querySelector(".current-value").textContent = 1;
    num = 0;
  }
});

backButton.addEventListener("click", function () {
  num -= 400;
  if (num >= 0) {
    sliderDiv.style.transform = `translateX(-${num}%)`;
    document.querySelector(".current-value").textContent =
      num === 0 ? 1 : num / 400 + 1;
  } else {
    sliderDiv.style.transform = `translateX(-${lastElementNumber * 400}%)`;
    num = lastElementNumber * 400;
    document.querySelector(".current-value").textContent = num / 400 + 1;
  }
});

closeButton.addEventListener("click", function () {
  num = 0;
  gallery.classList.remove("initialize-padding");
  html.classList.remove("body-hide-overflow-y");
  closeButton
    .closest(".slider-section")
    .classList.add("slider-section-inactive");
});

galleryImages.forEach((item) => {
  item.addEventListener("click", function () {
    const image = item.querySelector(".image-gallery");
    const imageNumber = parseInt(image.dataset.image);
    document.querySelector(".current-value").textContent = imageNumber + 1;
    num = imageNumber * 400;
    gallery.classList.add("initialize-padding");
    html.classList.add("body-hide-overflow-y");
    sliderSection.classList.remove("slider-section-inactive");

    sliderDiv.style.transform = `translateX(-${imageNumber * 400}%)`;
  });
});
