// Navbar apear when scroll up - start
{
  const nav = document.querySelector("#topmenu");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });
}
// Navbar apear when scroll up - end

//  ############## Search JS start here ##############

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

//  ############## Search JS end here  ##############
