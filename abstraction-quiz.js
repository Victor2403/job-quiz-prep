const quizData = [
    {
      question: "1. What is the primary purpose of abstraction in Java?",
      options: [
        "A) To hide implementation details and show only essential features", // ANS
        "B) To allow multiple inheritance",
        "C) To improve runtime performance",
        "D) To make all methods final"
      ],
      answer: 0
    },
    {
      question: "2. Which keyword is used to declare an abstract class in Java?",
      options: [
        "A) interface",
        "B) abstract", // ANS
        "C) extends",
        "D) implements"
      ],
      answer: 1
    },
    {
      question: "3. What is true about an abstract class?",
      options: [
        "A) It cannot have any non-abstract methods",
        "B) It can be instantiated directly",
        "C) It can have both abstract and concrete methods", // ANS
        "D) It cannot have constructors"
      ],
      answer: 2
    },
    {
      question: "4. Which of the following is an example of abstraction in real life?",
      options: [
        "A) Knowing how a car engine works in detail",
        "B) Pressing the 'start' button to ignite a car without knowing the internal mechanics", // ANS
        "C) Repairing a smartphone's motherboard",
        "D) Writing code for a compiler"
      ],
      answer: 1
    },
    {
      question: "5. What happens if a subclass does not implement all abstract methods of its parent abstract class?",
      options: [
        "A) The subclass becomes abstract automatically",
        "B) Compilation error", // ANS
        "C) Runtime error",
        "D) The program runs successfully"
      ],
      answer: 1
    },
    {
      question: `6. What is the output of the following code?<br><br>
  <pre>abstract class Animal {  
      abstract void sound();  
  }  
  class Dog extends Animal {  
      void sound() { System.out.println("Bark"); }  
  }  
  public class Test {  
      public static void main(String[] args) {  
          Animal a = new Dog();  
          a.sound();  
      }  
  }</pre>`,
      options: [
        "A) Bark", // ANS
        "B) null",
        "C) Compilation error (missing @Override)",
        "D) Runtime error"
      ],
      answer: 0
    },
    {
      question: "7. Which concept is demonstrated when a subclass adds unique properties (e.g., degreeOfHazardousness) to a generalized superclass (e.g., Freight)?",
      options: [
        "A) Generalization",
        "B) Specialization", // ANS 
        "C) Encapsulation",
        "D) Polymorphism"
      ],
      answer: 1
    },
    {
      question: "8. How is an abstract method different from a regular method?",
      options: [
        "A) It has a body",
        "B) It is declared with the abstract keyword and has no implementation", // ANS
        "C) It can only be static",
        "D) It cannot be overridden"
      ],
      answer: 1
    },
    {
      question: "9. Which of the following is a valid declaration in an abstract class?",
      options: [
        "A) private abstract void print();",
        "B) abstract final void print();",
        "C) abstract void print();", // ANS
        "D) static abstract void print();"
      ],
      answer: 2
    }
  ];

let currentQuiz = 0;
let score = 0;

// ============== DO NOT MODIFY BELOW THIS LINE ==============
// (This ensures all quizzes behave identically)

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
    if (currentQuiz >= quizData.length) {
        showResults();
        return;
    }

    const questionObj = quizData[currentQuiz];
    const questionEl = document.createElement("div");
    questionEl.classList.add("question");
    questionEl.innerHTML = `
        <h2>${questionObj.question}</h2>
        <div class="options">
            ${questionObj.options.map((opt, i) => `
                <button onclick="submitAnswer(${i})">${opt}</button>
            `).join("")}
        </div>
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
        <h3>Quiz Results</h3>
        <p>You scored ${score} out of ${total} (${percentage}%)</p>
    `;
    results.classList.remove("hidden");
    document.getElementById("actions").classList.remove("hidden");
}

function returnToHome() {
    window.location.href = "index.html";
}

function takeAgain() {
    startQuiz();
}

// Initialize quiz
startQuiz();