document.addEventListener("DOMContentLoaded", function () {
  const question1 = document.getElementById("question1");
  const question2 = document.getElementById("question2");
  const question3 = document.getElementById("question3");
  const start = document.getElementById("start");
  const scoreText = document.getElementById("score-text");
  const questionAnswers = document.getElementById("question-answers");

  const answerA = document.getElementById("answerA");
  const answerB = document.getElementById("answerB");
  const answerC = document.getElementById("answerC");
  const answerD = document.getElementById("answerD");
  const answerE = document.getElementById("answerE");
  const answerF = document.getElementById("answerF");

  let score = 0;
  let currentQuestion = 1;
  let userAnswers = {};

  let correctAnswers = {
    question1: "A",
    question2: "B",
    question3: "C",
  };

  start.addEventListener("click", startQuiz);

  function startQuiz() {
    question1.style.display = "block";
    question2.style.display = "none";
    question3.style.display = "none";
    start.style.display = "none";
    updateScore();
  }

  function checkAnswer1() {
    checkAnswer("question1", answerA);
  }

  function checkAnswer2() {
    checkAnswer("question2", answerB);
  }

  function checkAnswer3() {
    checkAnswer("question3", answerC);
  }

  function checkAnswer(questionId) {
    const selectedAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
    if (selectedAnswer) {
      userAnswers[questionId] = selectedAnswer.value;
      if (correctAnswers[questionId] === selectedAnswer.value) {
        score++;
        updateScore();
      }
      showNextQuestion();
    } else {
      alert("Please select an answer before proceeding.");
    }
    showNextQuestion();
  } else {
    alert("Please select an answer before proceeding.");
  }
}

// Update event listeners to use the dynamic approach
answerA.addEventListener("click", () => checkAnswer("question1"));
answerB.addEventListener("click", () => checkAnswer("question2"));
answerC.addEventListener("click", () => checkAnswer("question3"));

  function showNextQuestion() {
    currentQuestion++;

    if (currentQuestion === 2) {
      question1.style.display = "none";
      question2.style.display = "block";
    } else if (currentQuestion === 3) {
      question2.style.display = "none";
      question3.style.display = "block";
    } else {
      displayResults();
    }
  }

  function displayResults() {
    questionAnswers.innerHTML = `<h1>Quiz Results</h1><p>Your score is: ${score}</p>`;

    for (const questionId in correctAnswers) {
      const correctAnswer = correctAnswers[questionId];
      const userAnswer = userAnswers[questionId] || "Not Answered";
      const isCorrect = correctAnswer === userAnswer;

      const color = isCorrect ? "green" : "red";
      questionAnswers.innerHTML += `<p><strong>${questionId}:</strong> Your answer: <span style="color: ${color}">${userAnswer}</span>. Correct answer: ${correctAnswer}</p>`;
    }
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
  }

  function updateScore() {
    scoreText.textContent = score;
  }

  answerA.addEventListener("click", checkAnswer1);
  answerB.addEventListener("click", checkAnswer2);
  answerC.addEventListener("click", checkAnswer3);
});
