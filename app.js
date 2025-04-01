const quizes = [
  {
    question: "Who is the largest animal in the world?",
    answers: {
      answer1: "Elephant",
      answer2: "Girrafe",
      answer3: "Whale",
      answer4: "Dog",
      answer5: "Ant",
    },
    status: "Whale",
    statusNo: 3,
  },
  {
    question: "What you will need to be online?",
    answers: {
      answer1: "Radio",
      answer2: "Modem",
      answer3: "RJ45 cable",
      answer4: "Speakers",
      answer5: "Computer",
    },
    status: "Computer",
    statusNo: 5,
  },
  {
    question: "Who drew the great drawing 'Monalisa'?",
    answers: {
      answer1: "Albert Einstein",
      answer2: "Leonardo Da Vinci",
      answer3: "Thomas Edison",
      answer4: "Martin Luther",
      answer5: "Thomsan",
    },
    status: "Leonardo Da Vinci",
    statusNo: 2,
  },
  {
    question: "What is one of the fruits from these?",
    answers: {
      answer1: "Carrot",
      answer2: "Cabbage",
      answer3: "Tomato",
      answer4: "Lemon",
      answer5: "Cauli Flower",
    },
    status: "Lemon",
    statusNo: 4,
  },
  {
    question: "What is the country which has the largest population in Asia?",
    answers: {
      answer1: "India",
      answer2: "China",
      answer3: "Sri Lanka",
      answer4: "Pakistan",
      answer5: "Afganisthan",
    },
    status: "China",
    statusNo: 2,
  },
];

const displayItems = document.querySelector(".container");
const quizTitle = document.querySelector(".quiz-title");
const option1 = document.querySelector(".quiz-option1");
const option2 = document.querySelector(".quiz-option2");
const option3 = document.querySelector(".quiz-option3");
const option4 = document.querySelector(".quiz-option4");
const option5 = document.querySelector(".quiz-option5");

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const wrapper = document.querySelector(".wrapper");
const wrapperBtn = document.querySelector(".wrapper-btn");
const nextBtn = document.getElementById("nextBtn");
const scoreBtn = document.getElementById("scoreBtn");
const retryBtn = document.getElementById("retryBtn");

let userScore = document.querySelector(".score");
const totalScore = document.querySelector(".total");

// const incorrect = document.getElementsByClassName("current");
let incorrect = null;

let token = 0;
let score = 0;
let currentQuestion = null;

const p = document.querySelectorAll("p");

currentQuestion = quizes[token];
quizTitle.textContent = token + 1 + ". " + currentQuestion.question;
quizTitle.textContent = token + 1 + ". " + currentQuestion.question;
option1.textContent = currentQuestion.answers.answer1;
option2.textContent = currentQuestion.answers.answer2;
option3.textContent = currentQuestion.answers.answer3;
option4.textContent = currentQuestion.answers.answer4;
option5.textContent = currentQuestion.answers.answer5;

nextBtn.addEventListener("click", () => {
  p[currentQuestion.statusNo - 1].classList.remove("correct");
  if (incorrect) {
    incorrect.classList.remove("incorrect");
  }

  wrapper.style.display = "none";
  wrapperBtn.style.display = "block";

  token += 1;

  currentQuestion = quizes[token];
  quizTitle.textContent = token + 1 + ". " + currentQuestion.question;
  quizTitle.textContent = token + 1 + ". " + currentQuestion.question;
  option1.textContent = currentQuestion.answers.answer1;
  option2.textContent = currentQuestion.answers.answer2;
  option3.textContent = currentQuestion.answers.answer3;
  option4.textContent = currentQuestion.answers.answer4;
  option5.textContent = currentQuestion.answers.answer5;
  if (token === 4) {
    nextBtn.style.display = "none";
    scoreBtn.style.display = "block";
  }
});

scoreBtn.addEventListener("click", () => {
  box1.style.display = "none";
  box2.style.display = "block";
  scoreBtn.style.display = "none";
  retryBtn.style.display = "block";
});

retryBtn.addEventListener("click", () => {
  window.location.reload();
});

// console.log(p[0].innerText);
p.forEach((a) => {
  a.addEventListener("click", () => {
    wrapper.style.display = "block";
    wrapperBtn.style.display = "none";
    if (a.innerText === currentQuestion.status) {
      score++;
      a.classList.add("correct");
      console.log(score);
    } else {
      incorrect = a;
      incorrect.classList.add("incorrect");
      p[currentQuestion.statusNo - 1].classList.add("correct");
      console.log(score);
    }

    userScore.innerText = score;
  });
});

totalScore.innerText = quizes.length;
