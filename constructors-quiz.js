const quizData = [
    {
      question: "What is a constructor in Java?",
      options: [
        "A special method used to initialize an object", // ANS
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
        "At the time of object creation", // ANS
        "At the end of the program"
      ],
      answer: 2
    },
    {
      question: "Which of the following is true about Java constructors?",
      options: [
        "A constructor can be static",
        "A constructor must have a return type",
        "Constructor name must match the class name", // ANS
        "A constructor can be abstract"
      ],
      answer: 2
    },
    {
      question: "What is constructor overloading?",
      options: [
        "Having a constructor and a method with the same name",
        "Creating multiple constructors with different parameter lists",  // ANS
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
        "A constructor initializes state; a method defines behavior" // ANS 
      ],
      answer: 3
    }
  ];
  
  let currentQuiz = 0;
  let score = 0;
  
  function startQuiz() {
    document.getElementById("results").classList.add("hidden");
    document.getElementById("actions").classList.add("hidden");
    document.getElementById("quiz-container").innerHTML = "";
    document.getElementById("submit-btn").classList.remove("hidden");
    currentQuiz = 0;
    score = 0;
    loadQuestion();
  }
  
  function loadQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    if (currentQuiz >= quizData.length) {
      showResults();
      return;
    }
  
    const questionObj = quizData[currentQuiz];
    const questionEl = document.createElement("div");
    questionEl.classList.add("question");
    questionEl.innerHTML = `
      <h2>${questionObj.question}</h2>
      ${questionObj.options.map((opt, i) => `
        <button onclick="submitAnswer(${i})">${opt}</button>
      `).join("")}
    `;
  
    quizContainer.innerHTML = "";
    quizContainer.appendChild(questionEl);
  }
  
  function submitAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuiz].answer) {
      score++;
    }
    currentQuiz++;
    loadQuestion();
  }
  
  function showResults() {
    const total = quizData.length;
    const percentage = ((score / total) * 100).toFixed(2);
    const results = document.getElementById("results");
  
    results.innerHTML = `
      <p>You scored ${score} / ${total} (${percentage}%)</p>
      <p>Score as a fraction: ${score}/${total}</p>
    `;
    results.classList.remove("hidden");
    document.getElementById("actions").classList.remove("hidden");
    document.getElementById("submit-btn").classList.add("hidden");
  }
  
  // Action buttons
  function returnToHome() {
    window.location.href = "index.html"; 
  }
  
  function takeAgain() {
    startQuiz();
  }
  
  // Initialize on page load
  if (document.getElementById("quiz-container")) {
    startQuiz();
  }  