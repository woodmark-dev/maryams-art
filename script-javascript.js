const closeImage = document.querySelectorAll(".icon-close");
const overlay = document.querySelector(".overlay-effect");
const openImage = document.querySelectorAll(".image");
const imageDivs = document.querySelectorAll(".image-div--slider");

openImage.forEach(function (el) {
  el.addEventListener("click", function () {
    const slider = document.querySelector(`.image-${el.dataset.image}--slider`);
    slider.closest(".image-div--slider").classList.add("slider-active");
    overlay.classList.add("overlay");
  });
});

closeImage.forEach(function (el) {
  el.addEventListener("click", function () {
    const slider = el.closest(".image-div--slider");
    slider.classList.remove("slider-active");
    overlay.classList.remove("overlay");
  });
});

overlay.addEventListener("click", function () {
  imageDivs.forEach(function (el) {
    el.classList.remove("slider-active");
  });
  overlay.classList.remove("overlay");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    imageDivs.forEach(function (el) {
      el.classList.remove("slider-active");
    });
    overlay.classList.remove("overlay");
  }
});

const forwardButton = document.querySelectorAll(".icon-forward");

const backwardButton = document.querySelectorAll(".icon-back");

forwardButton.forEach(function (el) {
  el.addEventListener("click", function () {
    // console.log(this.closest(".image-div").classList);
    const parentDiv = this.closest(".slider");
    const allDivs = parentDiv.querySelectorAll(".image-div--slider");
    const allDivsArr = [...allDivs];

    const index = allDivsArr.findIndex((el) =>
      el.classList.contains("slider-active")
    );

    allDivsArr[index].classList.remove("slider-active");

    if (index !== allDivsArr.length - 1) {
      allDivsArr[index + 1].classList.add("slider-active");
    } else {
      allDivsArr[0].classList.add("slider-active");
    }
  });
});

backwardButton.forEach(function (el) {
  el.addEventListener("click", function () {
    // console.log(this.closest(".image-div").classList);
    const parentDiv = this.closest(".slider");
    const allDivs = parentDiv.querySelectorAll(".image-div--slider");
    const allDivsArr = [...allDivs];

    const index = allDivsArr.findIndex((el) =>
      el.classList.contains("slider-active")
    );
    allDivsArr[index].classList.remove("slider-active");

    if (index !== 0) {
      allDivsArr[index - 1].classList.add("slider-active");
    } else {
      allDivsArr[allDivsArr.length - 1].classList.add("slider-active");
    }
  });
});

// const imageDivArray = [...imageDivs];

// // console.log(imageDivArray);

// const arr = ["maryam", "ibrahim", "abigail"];

// // console.log(arr[1]);

// const index = imageDivArray.findIndex((el) => el.classList.contains("active"));

// // console.log(index);

// console.log(imageDivArray[0]);

// forwardButton.forEach(function (el) {
//   el.addEventListener("click", function () {
//     const images = document.querySelectorAll(".image");
//     // images.forEach(function (el) {
//     //   const parentNodes = el.parentNode;
//     //   // if (parentNodes.classList.contains("active"))
//     // });
//     const iterator = images.entries();
//     for (const [first, second] of iterator) {
//       const images = document.querySelectorAll(".image");
//       if (second.parentNode.classList.contains("active")) {
//         second.parentNode.classList.remove("active");
//         const ment =
//           images[first + 1].offsetParent.querySelectorAll(".image-div");
//         ment[0].classList.add("active");
//       }
//     }
//   });
// });

// const images = document.querySelectorAll(".image");
// // // console.log(images);

// const iterator = images.entries();

// // for (const [first, second] of iterator) {
// //   // console.log(images);
// //   const ment = images[first].offsetParent.querySelectorAll(".image-div");
// //   ment.forEach(function (el) {
// //     el.classList.add("active");
// //   });
// // }
