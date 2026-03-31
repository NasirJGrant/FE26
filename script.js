const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeBtn = document.getElementById("themeBtn");
const learnBtn = document.getElementById("learnBtn");
const goalBtn = document.getElementById("goalBtn");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
const faqQuestions = document.querySelectorAll(".faq-question");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

learnBtn.addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

goalBtn.addEventListener("click", function () {
  alert("LinkUp was designed to make nightlife planning faster, easier, and more social.");
});

tabButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    tabButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    tabContents.forEach(function (content) {
      content.classList.remove("active");
    });

    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    question.parentElement.classList.toggle("open");
  });
});