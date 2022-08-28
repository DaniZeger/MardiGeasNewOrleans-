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
    setTimeout(showSlides, 5000); // Change image every 2 seconds
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

// ############ Sponsered card JS start here ############

const text1_options = [
  "Ace Hotel New Orleans",
  "Haunted Museum",
  "Louisiana Children's Museum",
  "Museum of Death",
  "Premium Parking - P402",
  "Sheraton New Orleans Hotel",
  "The Ritz-Carlton, New Orleans",
  "Walk-On's Bistreaux and Bar",
];
const text2_options = [
  "69 min. read",
  "7 min. read",
  "8 min. read",
  "87,658.1277 min. read",
  "69 min. read",
  "7 min. read",
  "8 min. read",
  "87,658.1277 min. read"
];
const bg_options = ["url(/img/sponsersIMG/AceHotelBG.jpg)","url(/img/sponsersIMG/HauntedMuseumBG.jpg)", "url(/img/sponsersIMG/LCMBG.jpg)", "url(/img/sponsersIMG/MuseumOfDeathBG.jpeg)", "url(/img/sponsersIMG/PremiumParkingBG.jfif)", "url(/img/sponsersIMG/SheratonBG.jfif)", "url(/img/sponsersIMG/TheRitzCarltonBG.jfif)", "url(/img/sponsersIMG/WalkonsBG.jpg)" ];
const image_options = ["/img/logos/AceHotel.png","/img/logos/HauntedMuseum.png","/img/logos/LCM.png","/img/logos/MuseumOfDeath.png","/img/logos/PremiumParking.png","/img/logos/Sheraton.png","/img/logos/TheRitzCarlton.png","/img/logos/Walkons.png"];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("crslBg");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.backgroundImage = "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.8) 85%, rgba(255,255,255,0) 100%)," + bg_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  mainMenu.style.backgroundImage = "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.8) 85%, rgba(255,255,255,0) 100%)," + bg_options[i];
  carousel.classList.add("anim-next");
  
  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-next");
  }, 650);
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];

  mainMenu.style.backgroundImage = "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.8) 85%, rgba(255,255,255,0) 100%)," + bg_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);
};

// ############ Sponsered card JS end here ############
