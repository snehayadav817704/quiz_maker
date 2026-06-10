const quizData = JSON.parse(localStorage.getItem("quiz"));

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let timer;
let timeLeft = 30;

const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const timerText = document.getElementById("timer");

function loadQuestion(){

  clearInterval(timer);

  timeLeft = 30;

  startTimer();

  let q = quizData[currentQuestion];

  progressText.innerText =
    `Question ${currentQuestion + 1}/${quizData.length}`;

  progressBar.style.width =
    `${((currentQuestion + 1)/quizData.length)*100}%`;

  questionText.innerText = q.question;

  optionsDiv.innerHTML = "";

  selectedAnswer = null;

  q.options.forEach((option,index)=>{

    const button = document.createElement("button");

    button.innerText = option;

    button.classList.add("option-btn");

    button.onclick = ()=>{

      document
      .querySelectorAll(".option-btn")
      .forEach(btn => btn.classList.remove("selected"));

      button.classList.add("selected");

      selectedAnswer = index;
    };

    optionsDiv.appendChild(button);

  });

}

function startTimer(){

  timerText.innerText = `${timeLeft}s`;

  timer = setInterval(()=>{

    timeLeft--;

    timerText.innerText = `${timeLeft}s`;

    if(timeLeft <= 0){

      clearInterval(timer);

      nextQuestion();

    }

  },1000);

}

nextBtn.onclick = ()=>{

  const q = quizData[currentQuestion];

  if(selectedAnswer == q.answer){
    score++;
  }

  nextQuestion();

};

function nextQuestion(){

  currentQuestion++;

  if(currentQuestion < quizData.length){

    loadQuestion();

  }else{

    localStorage.setItem("score",score);
    localStorage.setItem("total",quizData.length);

    window.location.href = "result.html";

  }

}

loadQuestion();