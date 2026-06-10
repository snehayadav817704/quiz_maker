let questions = [];

function addQuestion(){

  const question = document.getElementById("question").value;
  const option1 = document.getElementById("option1").value;
  const option2 = document.getElementById("option2").value;
  const option3 = document.getElementById("option3").value;
  const option4 = document.getElementById("option4").value;
  const answer = document.getElementById("answer").value;

  const questionObj = {
    question,
    options:[option1,option2,option3,option4],
    answer
  };

  questions.push(questionObj);

  document.getElementById("message").innerText =
    "Question Added Successfully";

  document.getElementById("question").value = "";
  document.getElementById("option1").value = "";
  document.getElementById("option2").value = "";
  document.getElementById("option3").value = "";
  document.getElementById("option4").value = "";
}

function saveQuiz(){

  localStorage.setItem("quiz",JSON.stringify(questions));

  document.getElementById("message").innerText =
    "Quiz Saved Successfully";
}