const quizData = [
  {
    question: "What is an object in Java?",
    options: [
      "A function in Java",
      "An instance of a class with state and behavior",
      "A data type in Java",
      "A method that calls another method"
    ],
    answer: "An instance of a class with state and behavior"
  },
  {
    question: "What is a class in Java?",
    options: [
      "An object inside a method",
      "A function that returns an object",
      "A blueprint used to create objects",
      "An interface with default methods"
    ],
    answer: "A blueprint used to create objects"
  },
  {
    question: "Which of the following is an example of an object?",
    options: [
      "int",
      "class",
      "dog",
      "void"
    ],
    answer: "dog"
  }
];

let currentQuiz = 0;
let score = 0;

function startQuiz() {
  document.getElementById("results").classList.add("hidden");
  document.getElementById("actions").classList.add("hidden");
  document.getElementById("quiz-container").innerHTML = "";
  currentQuiz = 0;
  score = 0;
  loadQuestion();
}

function loadQuestion() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  if (currentQuiz >= quizData.length) {
    document.getElementById("submit-btn").style.display = "block";
    return;
  }

  const questionObj = quizData[currentQuiz];
  const questionEl = document.createElement("div");
  questionEl.innerHTML = `
    <h2>${questionObj.question}</h2>
    ${questionObj.options.map(opt => `
      <button class="option-btn" data-answer="${opt}">${opt}</button>
    `).join("")}
  `;

  quizContainer.appendChild(questionEl);

  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
      if (btn.dataset.answer === questionObj.answer) {
        score++;
      }
      currentQuiz++;
      setTimeout(loadQuestion, 500);
    });
  });
}

function showResults() {
  const total = quizData.length;
  const percentage = ((score / total) * 100).toFixed(2);
  document.getElementById("score").textContent = `${score} / ${total} (${percentage}%)`;
  document.getElementById("results").classList.remove("hidden");
  document.getElementById("actions").classList.remove("hidden");
  document.getElementById("submit-btn").style.display = "none";
  document.getElementById("quiz-container").innerHTML = "";
}

function takeAgain() {
  startQuiz();
}

function returnToHome() {
  window.location.href = "index.html";
}

// Initialize
window.onload = () => {
  document.getElementById("submit-btn").addEventListener("click", showResults);
  startQuiz();
};