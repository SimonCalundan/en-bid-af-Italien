/* Burger menu  */

const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-open");
});

/* Text appear effect  */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
