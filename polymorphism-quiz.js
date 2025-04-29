const quizData = [
  {
    question: "1. What is Polymorphism in Java?",
    options: [
      "A) The ability of a class to inherit from multiple superclasses",
      "B) The ability of an object to take on many forms, often through inheritance and interfaces", // ANS
      "C) The process of converting data types implicitly",
      "D) A feature that allows a class to have multiple constructors"
    ],
    answer: 1
  },
  {
    question: "2. Which of the following is true about method overloading?",
    options: [
      "A) It requires methods to have different names",
      "B) It is done by changing the method's return type alone",
      "C) It can be achieved by changing the number or type of parameters", // ANS
      "D) It only works with static methods"
    ],
    answer: 2
  },
  {
    question: `3. What is the output of the following code?<br><br>
<pre>class Adder {
    static int add(int a, int b) { return a + b; }
    static double add(double a, double b) { return a + b; }
}
public class Test {
    public static void main(String[] args) {
        System.out.println(Adder.add(5, 5));
        System.out.println(Adder.add(5.5, 6.5));
    }
}</pre>`,
    options: [
      "A) 10 followed by 12.0", // ANS
      "B) 10 followed by 12",
      "C) Compilation error (ambiguous method call)",
      "D) Runtime error"
    ],
    answer: 0
  },
  {
    question: "4. Which scenario demonstrates method overriding?",
    options: [
      "A) A subclass defining a method with the same name and parameters as its superclass", // ANS
      "B) A class having multiple methods with the same name but different parameters",
      "C) A static method being redefined in a subclass",
      "D) A private method in a superclass being reused in a subclass"
    ],
    answer: 0
  },
  {
    question: "5. Why can't static methods be overridden?",
    options: [
      "A) Because they are implicitly final",
      "B) Because they belong to the class, not instances", // ANS
      "C) Because Java does not allow methods in subclasses to have the same name as superclass methods",
      "D) Because they are always private"
    ],
    answer: 1
  },
  {
    question: `6. What is the output of the following code?<br><br>
<pre>class Parent {
    void show() { System.out.println("Parent"); }
}
class Child extends Parent {
    void show() { System.out.println("Child"); }
}
public class Test {
    public static void main(String[] args) {
        Parent obj = new Child();
        obj.show();
    }
}</pre>`,
    options: [
      "A) Parent",
      "B) Child", // ANS
      "C) Compilation error",
      "D) Runtime error"
    ],
    answer: 1
  },
  {
    question: "7. Which of the following is NOT a rule for method overriding?",
    options: [
      "A) The method must have the same name as in the parent class",
      "B) The method must have the same return type (or a covariant type)",
      "C) The method must have a different number of parameters", // ANS
      "D) There must be an IS-A relationship (inheritance)"
    ],
    answer: 2
  },
  {
    question: "8. Can the main() method be overloaded in Java?",
    options: [
      "A) No, it is a reserved method",
      "B) Yes, but the JVM only calls the standard main(String[] args) version", // ANS
      "C) Only if it is declared final",
      "D) Only in abstract classes"
    ],
    answer: 1
  },
  {
    question: "9. What is the key difference between method overloading and overriding?",
    options: [
      "A) Overloading occurs in the same class, while overriding requires inheritance", // ANS
      "B) Overriding changes the method's parameters, while overloading does not",
      "C) Overloading is runtime polymorphism, while overriding is compile-time polymorphism",
      "D) Overriding only works with static methods"
    ],
    answer: 0
  }
];

// [Keep your exact same quizData array with all polymorphism questions]

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