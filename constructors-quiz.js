const quizData = [
    {
      question: "What is a constructor in Java?",
      options: [
        "A special method used to initialize an object",
        "A function to destroy objects",
        "A static method to run at program start",
        "A return type for classes"
      ],
      answer: 0
    },
    {
      question: "When is a constructor called?",
      options: [
        "When a method is executed",
        "Only when the compiler finds an error",
        "At the time of object creation",
        "At the end of the program"
      ],
      answer: 2
    },
    {
      question: "Which of the following is true about Java constructors?",
      options: [
        "A constructor can be static",
        "A constructor must have a return type",
        "Constructor name must match the class name",
        "A constructor can be abstract"
      ],
      answer: 2
    },
    {
      question: "What is constructor overloading?",
      options: [
        "Having a constructor and a method with the same name",
        "Creating multiple constructors with different parameter lists",
        "Using inheritance with constructors",
        "A constructor calling a method"
      ],
      answer: 1
    },
    {
      question: "Choose the correct difference between a constructor and a method:",
      options: [
        "A method is used to initialize the object; a constructor defines behavior",
        "A constructor must have a return type; a method must not",
        "A method is invoked implicitly; a constructor is invoked explicitly",
        "A constructor initializes state; a method defines behavior"
      ],
      answer: 3
    }
];

const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");
const resultsContainer = document.getElementById("results");
const actionsContainer = document.getElementById("actions");

function loadQuiz() {
  quizContainer.innerHTML = "";
  quizData.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionText = document.createElement("p");
    questionText.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionText);

    q.options.forEach((option, i) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question${index}`;
      input.value = i;
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      questionDiv.appendChild(label);
      questionDiv.appendChild(document.createElement("br"));
    });

    quizContainer.appendChild(questionDiv);
  });
}

function calculateScore() {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name='question${index}']:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });
  return score;
}

function displayResults() {
  const score = calculateScore();
  const totalQuestions = quizData.length;
  const percent = ((score / totalQuestions) * 100).toFixed(2);
  
  resultsContainer.innerHTML = `
    <p>You scored ${score}/${totalQuestions} (${percent}%)</p>
    <p>Score as a fraction: ${score}/${totalQuestions}</p>
  `;
  resultsContainer.classList.remove("hidden");
  actionsContainer.classList.remove("hidden");
  submitBtn.classList.add("hidden");
}

submitBtn.addEventListener("click", displayResults);

// Action buttons for taking the quiz again or returning to home screen
function returnToHome() {
  window.location.href = "index.html"; // Change to your home page URL
}

function takeAgain() {
  window.location.reload(); // Reloads the quiz page to start over
}

loadQuiz();