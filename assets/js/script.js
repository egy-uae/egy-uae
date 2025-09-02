// js/script.js

// ----- Toggle Mobile Menu -----
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = "&#9776;"; // أيقونة القائمة
  document.querySelector("header nav").prepend(menuToggle);

  const navList = document.querySelector("header nav ul");

  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("showing");
  });
});

// ----- FAQ Toggle -----
document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });
});
