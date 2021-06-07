document.addEventListener("DOMContentLoaded", function () {
  // Scroll to Section#2 By Click
  let arrowDown = document.querySelector(".slide-down");
  let sectionFeatures = document.getElementById("section2");

  arrowDown.addEventListener("click", () => {
    window.scroll(0, (sectionFeatures.clientHeight + 25));
  });

  // Scroll by Sections
  let sideNavBtn = document.querySelectorAll(".side-nav__link");

  sideNavBtn.forEach( e => {
    e.addEventListener("click", function () {
      if (e.classList.contains("active")) {
        
      } else {
        e.parentNode(".side-nav__item").children(".side-nav__link").classList.remove("active");
        this.classList.add("active");
    
      }
    })
  });

  // Features Card
  let featuresCard = document.querySelectorAll(".features__item");

  featuresCard.forEach(e  => {
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

  // ACCORDION
  let accordionItem = document.querySelectorAll(".accordion__item");

  accordionItem.forEach(e => {
    e.addEventListener("click", () => {
      e.classList.toggle("active");
    });
  });

  // SCROLL IN #7 SECTION
  // let promoImg = document.querySelector(".promo__img");

  // window.addEventListener("scroll", function () {
  //   if (promoImg.clientHeight + window.scrollY >= promoImg.offsetTop + 400) {
  //     promoImg.classList.add("visible");
  //   } else {
  //     promoImg.classList.remove("visible");
  //   }
  // });
});