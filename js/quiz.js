const quizData = [
  {
    question: "What is the day before Mardi Gras called?",
    a: "Monday",
    b: "Independence Day",
    c: "He has no special name",
    d: "Lundi Gras",
    correct: "d",
  },
  {
    question: "Where was the first known carnival celebration?",
    a: "Berlin, Germany",
    b: "Nice, France",
    c: "Rio de Janeiro, Brazil",
    d: "Tel Aviv, Israel",
    correct: "b",
  },
  {
    question: "When was the earliest known carnival celebration?",
    a: "1294",
    b: "1985",
    c: "1864",
    d: "1735",
    correct: "a",
  },
  {
    question: "What is the signature Mardi Gras dessert?",
    a: "Chees cake",
    b: "King cake",
    c: "Apple Pie",
    d: "Crack Pie",
    correct: "b",
  },
  {
    question:
      "What time does New Orleans law require masks to be removed on Mardi Gras?",
    a: "6 p.m.",
    b: "6 a.m.",
    c: "8 p.m.",
    d: "There is no such role",
    correct: "a",
  },
  {
    question: "When was the first known New Orleans Mardi Gras parade?",
    a: "1294",
    b: "1837",
    c: "1992",
    d: "2010",
    correct: "b",
  },
  {
    question:
      "On average, how many people typically visit New Orleans for Mardi Gras every year?",
    a: "1.4 million",
    b: "150,000",
    c: "2 million",
    d: "10,000",
    correct: "a",
  },
  {
    question:
      "How many times have Mardi Gras parades been canceled in New Orleans?",
    a: "Mardi Gras was never cenceled",
    b: "5",
    c: "25",
    d: "13",
    correct: "d",
  },
  {
    question: "Mardi Gras beads used to be made of what material?",
    a: "Plastic",
    b: "Iron",
    c: "Glass",
    d: "China",
    correct: "c",
  },
  {
    question:
      " In which year did Mardi Gras move its New Orleans celebration dates to not interfere with the Super Bowl?",
    a: "2013",
    b: "2010",
    c: "1992",
    d: "1980",
    correct: "a",
  },
];

const MsgTxt = [
  "This is correct! :)",
  "Sorry, maybe next time :(",
  "Thank you",
  "We'll keep in tuch",
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

let msg = document.getElementById("msg");

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
      msg.classList.remove("hide");
      msg.style.color = "green";
      msg.innerHTML = MsgTxt[0];
    } else {
      msg.classList.remove("hide");
      msg.style.color = "red";
      msg.innerHTML = MsgTxt[1];
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      setTimeout(() => {
        msg.classList.add("hide");
        loadQuiz();
      }, 700);
    } else {
      if (score <= 6) {
        quiz.innerHTML = `
            <h2 id="res">You answered ${score}/${quizData.length} questions correctly</h2>
            <p id="res-text"> Fill in your details to enter the lottery and you can win a voucher for a meal for two at one of the restaurants participating in the carnival. </p>
            <form action="" id="lotoryForm">
                <label for="fName">First Name:</label>
                <input type="text" name="fName" id="fName" />
                <label for="lName">Lest Name:</label>
                <input type="text" name="lName" id="lName" />
                <label for="mail">Email:</label>
                <input type="text" name="mail" id="mail"/>
                <div>
                <input type="checkbox" name="terms" id="terms" />
                <label for="terms">By sending I agree to the contest regulations</label>
                </div>
                <button id ="sendBtn">Send</button>
                </form>
        `;
      } else if (score === 8 || score === 7) {
        quiz.innerHTML = `
            <h2 id="res">You answered ${score}/${quizData.length} questions correctly</h2>
            <p id="res-text"> Fill in your details to enter the lottery and you can win a spa day for two at one of the hotels participating in the carnival. </p>
            <form action="" id="lotoryForm">
                <label for="fName">First Name:</label>
                <input type="text" name="fName" id="fName" />
                <label for="lName">Lest Name:</label>
                <input type="text" name="lName" id="lName" />
                <label for="mail">Email:</label>
                <input type="text" name="mail" id="mail"/>
                <div>
                <input type="checkbox" name="terms" id="terms" />
                <label for="terms">By sending I agree to the contest regulations</label>
                </div>
                <button id ="sendBtn">Send</button>
                </form>
        `;
      } else {
        quiz.innerHTML = `
            <h2 id="res">You answered ${score}/${quizData.length} questions correctly</h2>
            <p id="res-text"> Fill in your details to enter the lottery and you can win a weekend tor two in one of the hotels participating in the carnival </p>
            <form action="" id="lotoryForm">
                <label for="fName">First Name:</label>
                <input type="text" name="fName" id="fName" />
                <label for="lName">Lest Name:</label>
                <input type="text" name="lName" id="lName" />
                <label for="mail">Email:</label>
                <input type="text" name="mail" id="mail"/>
                <div>
                <input type="checkbox" name="terms" id="terms" />
                <label for="terms">By sending I agree to the contest regulations</label>
                </div>
                <button id ="sendBtn">Send</button>
                </form>
        `;
      }
      let myForm = document.getElementById("lotoryForm");
      let fName = document.getElementById("fName");
      let lName = document.getElementById("lName");
      let mail = document.getElementById("mail");
      let sendDetailsBtn = document.getElementById("sendBtn");

      myForm.addEventListener("submit", (evt) => {
        evt.preventDefault;
        quiz.innerHTML = `
          <h1 id="finel"> ${MsgTxt[2]} ${fName.value}, ${MsgTxt[3]} </h1>
          <button><a href="/index.html" id="hp-link">Go back to home page</a></button>
          `;
      });
    }
  }
});
