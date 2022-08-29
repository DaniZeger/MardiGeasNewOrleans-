var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });

  let box = document.getElementsByClassName("panel");
  if (i % 2 === 0) {
    box[i].style.backgroundColor = "#cfff88";
    acc[i].classList.add("green");
  } else {
    box[i].style.backgroundColor = "#e5b8f1";
    acc[i].classList.add("purple");
  }
}
