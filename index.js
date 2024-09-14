const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth > 768) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
      }
   }
});


// Catalog Section
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel-image");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;
const totalImages = images.length;
const gap = 55; // Updated gap to 70px
const imageWidth = 200; // Set image width to 200px

// Clone the first few elements to the end to create an infinite loop effect
for (let i = 0; i < 5; i++) {
  carousel.appendChild(images[i].cloneNode(true));
}

// Clone the last few elements to the start to create an infinite loop effect
for (let i = totalImages - 1; i >= totalImages - 5; i--) {
  carousel.insertBefore(images[i].cloneNode(true), carousel.firstChild);
}

let offset = (imageWidth + gap) * 5; // Offset for the initial cloned images
carousel.style.transform = `translateX(-${offset}px)`;

leftArrow.addEventListener("click", () => {
  currentIndex--;
  carousel.style.transition = "transform 0.5s ease-in-out";
  carousel.style.transform = `translateX(-${(currentIndex + 5) * (imageWidth + gap)}px)`;

  if (currentIndex < 0) {
    setTimeout(() => {
      carousel.style.transition = "none";
      currentIndex = totalImages - 1;
      carousel.style.transform = `translateX(-${(currentIndex + 5) * (imageWidth + gap)}px)`;
    }, 500);
  }
});

rightArrow.addEventListener("click", () => {
  currentIndex++;
  carousel.style.transition = "transform 0.5s ease-in-out";
  carousel.style.transform = `translateX(-${(currentIndex + 5) * (imageWidth + gap)}px)`;

  if (currentIndex >= totalImages) {
    setTimeout(() => {
      carousel.style.transition = "none";
      currentIndex = 0;
      carousel.style.transform = `translateX(-${offset}px)`;
    }, 500);
  }
});
// Ends



// Testimonial Section
document.addEventListener("DOMContentLoaded", function () {
   const scrollImages = document.querySelector(".scroll-images");
   const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
   const leftButton = document.querySelector(".left");
   const rightButton = document.querySelector(".right");
 
   function checkScroll() {
     const currentScroll = scrollImages.scrollLeft;
     if (currentScroll === 0) {
       leftButton.setAttribute("disabled", "true");
       rightButton.removeAttribute("disabled");
     } else if (currentScroll === scrollLength) {
       rightButton.setAttribute("disabled", "true");
       leftButton.removeAttribute("disabled");
     } else {
       leftButton.removeAttribute("disabled");
       rightButton.removeAttribute("disabled");
     }
   }
 
   scrollImages.addEventListener("scroll", checkScroll);
   window.addEventListener("resize", checkScroll);
   checkScroll();
 
   function leftScroll() {
     scrollImages.scrollBy({
       left: -200,
       behavior: "smooth"
     });
   }
 
   function rightScroll() {
     scrollImages.scrollBy({
       left: 200,
       behavior: "smooth"
     });
   }
 
   leftButton.addEventListener("click", leftScroll);
   rightButton.addEventListener("click", rightScroll);
 });
// Ends


// Accordion
document.addEventListener('DOMContentLoaded', function () {
  const accordionBtns = document.querySelectorAll('.accordion-btn');

  accordionBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Close all panels
      accordionBtns.forEach(function (otherBtn) {
        if (otherBtn !== btn) {
          const otherPanel = otherBtn.nextElementSibling;
          otherPanel.classList.remove('show');
          otherPanel.style.maxHeight = 0;
          otherBtn.classList.remove('active');
        }
      });

      // Toggle the clicked panel
      const panel = this.nextElementSibling;
      if (panel.classList.contains('show')) {
        panel.classList.remove('show');
        panel.style.maxHeight = 0;
        this.classList.remove('active');
      } else {
        panel.classList.add('show');
        panel.style.maxHeight = panel.scrollHeight + '500px';
        this.classList.add('active');
      }
    });
  });
});
// Ends



// Footer year
document.getElementById("year").innerHTML = new Date().getFullYear();



