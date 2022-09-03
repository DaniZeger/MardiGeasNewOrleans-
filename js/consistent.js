const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

// Navbar apear whan scroll up

var lastScrollTop;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// Search JS

const f = document.getElementById("search-form");
const q = document.getElementById("query");
const google = "https://www.google.com/search?q=";

function submitted(event) {
  event.preventDefault();
  const url = google + "mardi gras" + "+" + q.value;
  const win = window.open(url, "_blank");
  win.focus();
}

f.addEventListener("submit", submitted);
