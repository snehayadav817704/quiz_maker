const score = Number(localStorage.getItem("score"));
const total = Number(localStorage.getItem("total"));

const percentage = Math.round((score/total)*100);

document.getElementById(
  "scoreText"
).innerHTML = `
  ${score} / ${total}<br>
  ${percentage}% Score
`;