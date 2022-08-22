//  ############## Header slideshow  JS start here ##############

var slideIndex = -1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  function autoSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }
  autoSlides();
}

//  ############## Header slideshow  JS end here ##############

//  ############## Countdown JS start here ##############

var countDownDate = new Date("Feb 21, 2023 07:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("clock-time").innerHTML = `<li>${days}</li>
            <li>${hours}</li>
            <li>${minutes}</li>
            <li>${seconds}</li>
            `;
  // days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// ############# Countdown JS end here ##############

// ############# Sponserd JS start here ##############

const controls = document.querySelector(".controls");
const container = document.querySelector(".thumbnail-container");
const allBox = container.children;
const containerWidth = container.offsetWidth;
const margin = 30;
var items = 0;
var totalItems = 0;
var jumpSlideWidth = 0;

// item setup per slide

responsive = [
  { breakPoint: { width: 0, item: 1 } }, //if width greater than 0 (1 item will show)
  { breakPoint: { width: 600, item: 2 } }, //if width greater than 600 (2  item will show)
  { breakPoint: { width: 1000, item: 4 } }, //if width greater than 1000 (4 item will show)
];

function load() {
  for (let i = 0; i < responsive.length; i++) {
    if (window.innerWidth > responsive[i].breakPoint.width) {
      items = responsive[i].breakPoint.item;
    }
  }
  start();
}

function start() {
  var totalItemsWidth = 0;
  for (let i = 0; i < allBox.length; i++) {
    // width and margin setup of items
    allBox[i].style.width = containerWidth / items - margin + "px";
    allBox[i].style.margin = margin / 2 + "px";
    totalItemsWidth += containerWidth / items;
    totalItems++;
  }

  // thumbnail-container width set up
  container.style.width = totalItemsWidth + "px";

  // slides controls number set up
  const allSlides = Math.ceil(totalItems / items);
  const ul = document.createElement("ul");
  for (let i = 1; i <= allSlides; i++) {
    const li = document.createElement("li");
    li.id = i;
    li.innerHTML = i;
    li.setAttribute("onclick", "controlSlides(this)");
    ul.appendChild(li);
    if (i == 1) {
      li.className = "active";
    }
  }
  controls.appendChild(ul);
}

// when click on numbers slide to next slide
function controlSlides(ele) {
  // select controls children  'ul' element
  const ul = controls.children;

  // select ul children 'li' elements;
  const li = ul[0].children;

  var active;

  for (let i = 0; i < li.length; i++) {
    if (li[i].className == "active") {
      // find who is now active
      active = i;
      // remove active class from all 'li' elements
      li[i].className = "";
    }
  }
  // add active class to current slide
  ele.className = "active";

  var numb = ele.id - 1 - active;
  jumpSlideWidth = jumpSlideWidth + containerWidth * numb;
  container.style.marginLeft = -jumpSlideWidth + "px";
}

window.onload = load();

// ############# Sponserd JS end here ##############
