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
  "A stone’s throw from the French Quarter, in the soul of the Deep South.",
  "The Haunted Museum & Voodoo Shop features Historic Haunted Museum Tours, Ghost Hunts, Haunted Collections, Paranormal Evidence and more...",
  "When you make a child’s potential visible, wonderful things happen. So we created a place where kids use play, shared exploration, and conversation to connect with the people and world around them.",
  "The Museum of Death experience is a self guided tour lasting approximately 45 minutes to an hour, however those who can stomach it may stay as long as they like, as there are hundreds of items on display.",
  "We live at the intersection of parking and technology. We are a technology company, a parking operator, and network of parking advisors to bring it all together.",
  "Upgrade your stay with premium Sheraton Club Lounge access or reboot in our fully-equipped Sheraton Fitness Center.",
  "Rich in history and personality, New Orleans is unlike any other US city. Honoring its spirit and elegance, The Ritz-Carlton, New Orleans invites visitors to its French Quarter retreat, set within a 1908 Beaux Arts building.",
  "Whether you’re here for dinner with the family, date night, cocktails with the girls, or to watch a game on the big screen, we’re always happy to share our Louisiana culture with you.",
];

const spLinks = [
  "https://acehotel.com/new-orleans/?gclid=CjwKCAjwpKyYBhB7EiwAU2Hn2ZxZjdq8EtaP22XoBupXEctCdq0AUKQH9JTtomayCTwGjSS1EqvVyxoCceoQAvD_BwE",
  "https://www.bloodymarystours.com/hauntedmuseum.html",
  "https://lcm.org/",
  "http://www.museumofdeath.net/nola",
  "https://www.premiumparking.com/P402",
  "https://www.marriott.com/en-us/hotels/msyis-sheraton-new-orleans-hotel/overview/",
  "https://www.ritzcarlton.com/en/hotels/new-orleans",
  "https://walk-ons.com/",
];
const bg_options = [
  "url(/img/sponsersIMG/AceHotelBG.jpg)",
  "url(/img/sponsersIMG/HauntedMuseumBG.jpg)",
  "url(/img/sponsersIMG/LCMBG.jpg)",
  "url(/img/sponsersIMG/MuseumOfDeathBG.jpeg)",
  "url(/img/sponsersIMG/PremiumParkingBG.jfif)",
  "url(/img/sponsersIMG/SheratonBG.jfif)",
  "url(/img/sponsersIMG/TheRitzCarltonBG.jfif)",
  "url(/img/sponsersIMG/WalkonsBG.jpg)",
];
const image_options = [
  "/img/logos/AceHotel.png",
  "/img/logos/HauntedMuseum.png",
  "/img/logos/LCM.png",
  "/img/logos/MuseumOfDeath.png",
  "/img/logos/PremiumParking.png",
  "/img/logos/Sheraton.png",
  "/img/logos/TheRitzCarlton.png",
  "/img/logos/Walkons.png",
];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("crslBg");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerHTML =
  text2_options[i] +
  `</br> <a href="${spLinks}" target="_blank" class="sp-link"> Visit Site </a>`;
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.backgroundImage =
  "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.8) 85%, rgba(255,255,255,0) 100%)," +
  bg_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  mainMenu.style.backgroundImage =
    "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.8) 85%, rgba(255,255,255,0) 100%)," +
    bg_options[i];
  carousel.classList.add("anim-next");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerHTML =
      text2_options[i] +
      `</br> <a href="${spLinks}" target="_blank" class="sp-link"> Visit Site </a>`;
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

  mainMenu.style.backgroundImage =
    "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.8) 85%, rgba(255,255,255,0) 100%)," +
    bg_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerHTML =
      text2_options[i] +
      `</br> <a href="${spLinks}" target="_blank" class="sp-link"> Visit Site </a>`;
    carousel.classList.remove("anim-previous");
  }, 650);
};

// ############ Sponsered card JS end here ############

// ############ Newsletter JS start here ############

let nlForm = document.getElementById("newsletter-form");
let nlMsg = document.getElementById("nl_msg");

nlForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let nlMail = document.getElementById("newsletter");

  if (!nlMail.value.includes("@")) {
    nlMsg.innerHTML = "Mail incorect. Let's try again";
  } else {
    nlMsg.innerHTML = "Thank you for joining our newsletter";
  }

  nlMail.value = "";
});

// ############ Newsletter JS end here ############
