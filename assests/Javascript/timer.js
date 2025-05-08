document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");

  if (startButton) {
    startButton.addEventListener("click", () => {
      localStorage.setItem("quizStartTimeLeft", "60"); // Set initial time
      window.location.href = "./assests/pages/question1.html";
    });
  }

document.addEventListener("DOMContentLoaded", () => {
  const timerDisplay = document.getElementById("time-left");
  let timeLeft = localStorage.getItem("quizStartTimeLeft")
    ? parseInt(localStorage.getItem("quizStartTimeLeft"))
    : 60; // Get stored time or default
  let timerInterval;
  const startButton = document.getElementById("start-button");

  function updateTimerDisplay() {
    if (timerDisplay) {
      timerDisplay.textContent = timeLeft;
    }
  }

  function startTimer(onTimerEndCallback) {
    updateTimerDisplay();

    timerInterval = setInterval(() => {
      timeLeft--;
      localStorage.setItem("quizStartTimeLeft", timeLeft.toString()); // Store updated time

      updateTimerDisplay();

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        localStorage.removeItem("quizStartTimeLeft"); // Clear stored time
        if (typeof onTimerEndCallback === "function") {
          onTimerEndCallback();
        }
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval);
    localStorage.removeItem("quizStartTimeLeft"); // Clear stored time on stop
  }

  // Logic for index.html to start the timer and navigate
  if (startButton) {
    startButton.addEventListener("click", () => {
      localStorage.setItem("quizStartTimeLeft", "60"); // Set initial time
      window.location.href = "./assests/pages/question1.html";
      // Optionally, you could start a visual countdown on index.html if desired
    });
  }

  // Logic for question1.html to resume/start the timer
  if (timerDisplay) {
    startTimer(endQuiz); // Assuming 'endQuiz' is defined in your script.js on question1.html
  }

  // Export functions if needed
  window.startQuizTimer = startTimer;
  window.stopQuizTimer = stopTimer;
});
});
