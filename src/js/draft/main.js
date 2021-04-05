document.addEventListener("DOMContentLoaded", function () {
  // Scroll to Section#2 By Click
  let arrowDown = document.querySelector(".slide-down");
  let sectionFeatures = document.getElementById("section2");

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

  // Mask on How It Works
  let maskWork = document.querySelector(".work__photo--bg");
  let shemaWork = document.querySelector(".work__photo");

  shemaWork.addEventListener("mouseenter", () => {
    maskWork.style.zIndex = 0;
  });
  shemaWork.addEventListener("mouseleave", () => {
    maskWork.style.zIndex = 2;
  });

  // SLIDER
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 40,
    initialSlide: 1,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

});