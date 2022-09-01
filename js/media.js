const gridImages = document.querySelectorAll(".grid > img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

gridImages.forEach((img) => {
  img.addEventListener("click", () => {
    // To open lightbox
    lightbox.classList.add("active");
    // set the image clicked as the image of the lightbox
    lightboxImg.src = img.src;
  });
});

// To close lightbox
lightbox.addEventListener("click", (e) => {
  // if the clicked element is not the dark overlay don't close it
  if (e.target !== e.currentTarget) return;
  // if it was the overlay it will close it
  lightbox.classList.remove("active");
});
