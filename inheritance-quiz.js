const quizData = [
    {
      question: "What is the primary purpose of inheritance in Java?",
      options: [
        "To hide implementation details",
        "To achieve method overloading",
        "To reuse code and establish an IS-A relationship",
        "To improve runtime performance"
      ],
      answer: 2
    },
    {
      question: "Which keyword is used to implement inheritance in Java?",
      options: ["implements", "extends", "inherits", "super"],
      answer: 1
    },
    {
      question: "In Java, which type of inheritance is NOT supported through classes?",
      options: ["Single inheritance", "Multilevel inheritance", "Multiple inheritance", "Hierarchical inheritance"],
      answer: 2
    },
    {
      question: "What is the output of the following code?\n\nclass Animal {\n  void eat() { System.out.println(\"eating...\"); }\n}\nclass Dog extends Animal {\n  void bark() { System.out.println(\"barking...\"); }\n}\nclass Test {\n  public static void main(String[] args) {\n    Dog d = new Dog();\n    d.eat();\n    d.bark();\n  }\n}",
      options: [
        "eating... followed by barking...",
        "Compilation error",
        "barking... followed by eating...",
        "Runtime error"
      ],
      answer: 0
    },
    {
      question: "Why does Java not support multiple inheritance with classes?",
      options: [
        "It makes the language slower",
        "It leads to ambiguity in method calls (the \"Diamond Problem\")",
        "It requires too much memory",
        "It is not useful in real-world applications"
      ],
      answer: 1
    },
    {
      question: "In multilevel inheritance, if BabyDog extends Dog, and Dog extends Animal, which class is the superclass of Dog?",
      options: ["BabyDog", "Animal", "Object", "Both Animal and Object"],
      answer: 1
    },
    {
      question: "Which of the following is an example of hierarchical inheritance?",
      options: [
        "A class Car extending Vehicle, and Bike also extending Vehicle",
        "A class Car extending Vehicle, and SportsCar extending Car",
        "A class Car implementing both Drivable and FuelEfficient interfaces",
        "A class Car extending two different classes"
      ],
      answer: 0
    },
    {
      question: "What will happen if you try to compile the following code?\n\nclass A { void show() { System.out.println(\"A\"); } }\nclass B { void show() { System.out.println(\"B\"); } }\nclass C extends A, B {\n  public static void main(String[] args) {\n    C obj = new C();\n    obj.show();\n  }\n}",
      options: [
        "It prints \"A\"",
        "It prints \"B\"",
        "Compilation error (multiple inheritance not allowed)",
        "Runtime error"
      ],
      answer: 2
    },
    {
      question: "Which of the following is NOT an advantage of inheritance?",
      options: [
        "Code reusability",
        "Method overriding for runtime polymorphism",
        "Reduced memory usage",
        "Better organization of classes in an IS-A hierarchy"
      ],
      answer: 2
    }
  ];
  
  let currentQuiz = 0;
  let score = 0;
  
  function startQuiz() {
    document.getElementById("results").classList.add("hidden");
    document.getElementById("actions").classList.add("hidden");
    document.getElementById("quiz-container").innerHTML = "";
    document.getElementById("submit-btn").classList.add("hidden");
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
      <h2>${questionObj.question.replace(/\n/g, "<br>")}</h2>
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
  }
  
  // Action buttons
  function returnToHome() {
    window.location.href = "index.html"; // Update as needed
  }
  
  function takeAgain() {
    startQuiz();
  }
  
  // Initialize on page load
  if (document.getElementById("quiz-container")) {
    startQuiz();
  }
  