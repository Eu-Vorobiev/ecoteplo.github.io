document.addEventListener("DOMContentLoaded", function () {
  // Scroll to Section#2 By Click
  let arrowDown = document.querySelector(".slide-down");
  let sectionFeatures = document.getElementById("section2");

  console.log(sectionFeatures);
  arrowDown.addEventListener("click", () => {
    window.scroll(0, (sectionFeatures.clientHeight + 50));
  });

  // Features Card
  let featuresCard = document.querySelectorAll(".features__item");

  featuresCard.forEach(e => {
    e.addEventListener("click", function () {
      if (e.classList.contains("non-active")) {
        this.classList.toggle("non-active");
      } else {
        this.classList.toggle("non-active");
      }
    })
  });
});