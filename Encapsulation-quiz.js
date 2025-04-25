const quizData = [
    {
      question: "1. What is the primary purpose of encapsulation in Java?",
      options: [
        "A) To allow multiple inheritance",
        "B) To wrap data and methods into a single unit and control access to them",
        "C) To improve runtime performance",
        "D) To enable method overloading"
      ],
      answer: 1
    },
    {
      question: "2. How do you achieve full encapsulation in a Java class?",
      options: [
        "A) Make all data members public",
        "B) Make all data members private and provide getters/setters",
        "C) Use only static methods",
        "D) Declare the class as final"
      ],
      answer: 1
    },
    {
      question: `3. What is the output of the following code?<br><br>
  <pre>public class Student {  
      private String name;  
      public String getName() { return name; }  
      public void setName(String name) { this.name = name; }  
  }  
  
  public class Test {  
      public static void main(String[] args) {  
          Student s = new Student();  
          s.setName("Alice");  
          System.out.println(s.getName());  
      }  
  }</pre>`,
      options: [
        "A) null",
        "B) Alice",
        "C) Compilation error (missing constructor)",
        "D) Runtime error"
      ],
      answer: 1
    },
    {
      question: "4. Which of the following is an example of a write-only class?",
      options: [
        "A) A class with only private fields",
        "B) A class with only getter methods",
        "C) A class with only setter methods",
        "D) A class with public fields"
      ],
      answer: 2
    },
    {
      question: "5. Why is encapsulation important for data hiding?",
      options: [
        "A) It prevents other classes from accessing private data directly",
        "B) It allows unrestricted access to all fields",
        "C) It makes all methods static",
        "D) It enforces multiple inheritance"
      ],
      answer: 0
    },
    {
      question: "6. What happens if you try to override a protected method with a default (package-private) method in a subclass?",
      options: [
        "A) It works fine because both are similar",
        "B) Compilation error (cannot weaken access privileges)",
        "C) Runtime error",
        "D) The subclass method becomes public automatically"
      ],
      answer: 1
    },
    {
      question: "7. Which access modifier allows visibility only within the same package?",
      options: [
        "A) private",
        "B) default (no modifier)",
        "C) protected",
        "D) public"
      ],
      answer: 1
    },
    {
      question: "8. What is the advantage of using getters/setters instead of public fields?",
      options: [
        "A) To allow direct modification of fields",
        "B) To add validation logic (e.g., reject negative values)",
        "C) To make the class immutable",
        "D) To avoid inheritance"
      ],
      answer: 1
    },
    {
      question: "9. Which of the following violates encapsulation?",
      options: [
        "A) Using private fields with getters/setters",
        "B) Declaring a class as final",
        "C) Making all fields public and not using methods",
        "D) Overriding a method with the same access modifier"
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