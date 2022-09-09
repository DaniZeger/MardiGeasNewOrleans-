let form = document.getElementById("contactForm");
let uName = document.getElementById("name");
let uPhone = document.getElementById("phone");
let uMail = document.getElementById("email");
let uSob = document.getElementById("sobject");
let uTxt = document.getElementById("textarea");
let elem = document.getElementById("msg");

class userMsg {
  constructor(name, phone, email, sobject, text) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.sobject = sobject;
    this.text = text;
  }
}

form.addEventListener("submit", (evt) => {
  let filledForm = new userMsg(
    uName.value,
    uPhone.value,
    uMail.value,
    uSob.value,
    uTxt.value
  );

  if (!uPhone.value.includes("+")) {
    elem.innerHTML += "Please enter area code";
    evt.preventDefault();
  } else if (!uMail.value.includes("@")) {
    elem.innerHTML += "Somthing wrong with your Email";
    evt.preventDefault();
  } else {
    elem.innerHTML += `
    Thank you ${filledForm.name} your form has been sent :)
    `;
    uName.value = "";
    uPhone.value = "";
    uMail.value = "";
    uSob.value = "";
    uTxt.value = "";
  }
  setTimeout(() => {
    elem.style.display = "none";
  }, 3000);

  evt.preventDefault();
});
