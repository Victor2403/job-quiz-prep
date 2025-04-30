const quizTopics = {
    java: {
        title: "Java Programming Quiz",
        questions: [
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
        ],
        matching: {
            title: "Java Concepts Matching",
            keywords: [
                "Polymorphism",
                "Inheritance",
                "Encapsulation",
                "Abstraction"
            ],
            descriptions: [
                "A) The ability of an object to take many forms",
                "B) Hiding implementation details and showing only functionality",
                "C) The concept of one class acquiring properties of another",
                "D) Wrapping data and methods into a single unit"
            ],
            correctMatches: [0, 2, 3, 1]
        }
    },
    inheritance: {
        title: "Java Inheritance Quiz",
        questions: [
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
                options: [
                    "Single inheritance",
                    "Multilevel inheritance",
                    "Multiple inheritance",
                    "Hierarchical inheritance"
                ],
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
            }
        ]
    },
    polymorphism: {
        title: "Java Polymorphism Quiz",
        questions: [
            {
                question: "What is Polymorphism in Java?",
                options: [
                    "The ability of a class to inherit from multiple superclasses",
                    "The ability of an object to take on many forms, often through inheritance and interfaces",
                    "The process of converting data types implicitly",
                    "A feature that allows a class to have multiple constructors"
                ],
                answer: 1
            },
            {
                question: "Which of the following is true about method overloading?",
                options: [
                    "It requires methods to have different names",
                    "It is done by changing the method's return type alone",
                    "It can be achieved by changing the number or type of parameters",
                    "It only works with static methods"
                ],
                answer: 2
            },
            {
                question: "Which scenario demonstrates method overriding?",
                options: [
                    "A subclass defining a method with the same name and parameters as its superclass",
                    "A class having multiple methods with the same name but different parameters",
                    "A static method being redefined in a subclass",
                    "A private method in a superclass being reused in a subclass"
                ],
                answer: 0
            },
            {
                question: "Why can't static methods be overridden?",
                options: [
                    "Because they are implicitly final",
                    "Because they belong to the class, not instances",
                    "Because Java does not allow methods in subclasses to have the same name as superclass methods",
                    "Because they are always private"
                ],
                answer: 1
            }
        ]
    },
    encapsulation: {
        title: "Java Encapsulation Quiz",
        questions: [
            {
                question: "What is the primary purpose of encapsulation in Java?",
                options: [
                    "To allow multiple inheritance",
                    "To wrap data and methods into a single unit and control access to them",
                    "To improve runtime performance",
                    "To enable method overloading"
                ],
                answer: 1
            },
            {
                question: "How do you achieve full encapsulation in a Java class?",
                options: [
                    "Make all data members public",
                    "Make all data members private and provide getters/setters",
                    "Use only static methods",
                    "Declare the class as final"
                ],
                answer: 1
            },
            {
                question: "Which of the following is an example of a write-only class?",
                options: [
                    "A class with only private fields",
                    "A class with only getter methods",
                    "A class with only setter methods",
                    "A class with public fields"
                ],
                answer: 2
            },
            {
                question: "Why is encapsulation important for data hiding?",
                options: [
                    "It prevents other classes from accessing private data directly",
                    "It allows unrestricted access to all fields",
                    "It makes all methods static",
                    "It enforces multiple inheritance"
                ],
                answer: 0
            }
        ]
    },
    sql: {
        title: "SQL Database Quiz",
        questions: [
            {
                question: "What is the primary purpose of a primary key in a database table?",
                options: [
                    "To store large binary data",
                    "To uniquely identify each row in a table",
                    "To link two tables together",
                    "To improve query performance"
                ],
                answer: 1
            },
            {
                question: "Which SQL statement is used to retrieve data from a database?",
                options: ["UPDATE", "SELECT", "INSERT", "DELETE"],
                answer: 1
            },
            {
                question: "What is the correct syntax for creating a foreign key in SQL?",
                options: [
                    "ALTER TABLE Orders ADD FOREIGN KEY (Customer_ID) REFERENCES Customers(ID);",
                    "CREATE FOREIGN KEY Orders(Customer_ID) ON Customers(ID);",
                    "SET FOREIGN KEY Orders(Customer_ID) = Customers(ID);",
                    "ADD CONSTRAINT Orders FOREIGN KEY (Customer_ID) REFERENCES Customers(ID);"
                ],
                answer: 0
            },
            {
                question: "Which type of SQL JOIN returns all records from the left table and matching records from the right table?",
                options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
                answer: 1
            },
            {
                question: "What does the WHERE clause do in an SQL query?",
                options: [
                    "Specifies the columns to retrieve",
                    "Filters records based on a condition",
                    "Sorts the results",
                    "Groups records by a column"
                ],
                answer: 1
            },
            {
                question: "Which SQL command is part of Data Definition Language (DDL)?",
                options: ["SELECT", "INSERT", "CREATE", "UPDATE"],
                answer: 2
            },
            {
                question: "What is the purpose of a foreign key?",
                options: [
                    "To ensure data uniqueness in a single table",
                    "To establish a relationship between two tables",
                    "To automatically delete records when referenced data is removed",
                    "To encrypt sensitive data"
                ],
                answer: 1
            }
        ],
        matching: {
            title: "SQL Concepts Matching",
            keywords: [
                "PRIMARY KEY",
                "FOREIGN KEY",
                "WHERE",
                "GROUP BY",
                "INSERT INTO"
            ],
            descriptions: [
                "A) Used to filter records in a query",
                "B) Ensures each row in a table is unique",
                "C) Links a column to a primary key in another table",
                "D) Combines rows from two tables where the join condition is met",
                "E) Adds new records to a table"
            ],
            correctMatches: [1, 2, 0, 3, 4]
        }
    }
};

// Quiz state variables
let currentQuiz = null;
let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];
let selectedTopic = 'java';

// DOM elements
const quizContainer = document.getElementById("quiz-container");
const matchingContainer = document.getElementById("matching-container");
const resultsContainer = document.getElementById("results");
const actionsContainer = document.getElementById("actions");

// Initialize the quiz
function initQuiz(topic) {
    currentQuiz = quizTopics[topic];
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.innerHTML = "";
    matchingContainer.innerHTML = "";
    resultsContainer.style.display = "none";
    actionsContainer.style.display = "none";
    
    document.querySelector("header h1").textContent = currentQuiz.title;
    loadQuestion();
}

// Load the current question
function loadQuestion() {
    quizContainer.innerHTML = "";
    
    if (currentQuestion >= currentQuiz.questions.length) {
        // Check if this quiz has a matching section
        if (currentQuiz.matching) {
            renderMatchingSection();
        } else {
            showResults();
        }
        return;
    }

    const questionObj = currentQuiz.questions[currentQuestion];
    quizContainer.innerHTML = `
        <div class="question">
            <h2>Question ${currentQuestion + 1}: ${questionObj.question}</h2>
            <div class="options">
                ${questionObj.options.map((opt, i) => `
                    <button class="option-btn" onclick="submitAnswer(${i}, ${currentQuestion})">${opt}</button>
                `).join("")}
            </div>
        </div>
    `;
}

// Submit answer and move to next question
function submitAnswer(selectedIndex, questionIndex) {
    const correctIndex = currentQuiz.questions[questionIndex].answer;
    
    if (selectedIndex !== correctIndex) {
        incorrectAnswers.push({
            question: currentQuiz.questions[questionIndex].question,
            selected: currentQuiz.questions[questionIndex].options[selectedIndex],
            correct: currentQuiz.questions[questionIndex].options[correctIndex]
        });
    } else {
        score++;
    }
    
    currentQuestion++;
    loadQuestion();
}

// Render the matching section
function renderMatchingSection() {
    quizContainer.innerHTML = "";
    matchingContainer.innerHTML = `
        <h2>${currentQuiz.matching.title}</h2>
        <p>Match each concept with its correct description:</p>
    `;
    
    currentQuiz.matching.keywords.forEach((keyword, i) => {
        const row = document.createElement("div");
        row.classList.add("match-item");

        row.innerHTML = `
            <div>${keyword}</div>
            <select class="match-select" data-index="${i}">
                <option value="">-- Select Match --</option>
                ${currentQuiz.matching.descriptions.map((desc, idx) => `
                    <option value="${idx}">${desc}</option>
                `).join("")}
            </select>
        `;
        matchingContainer.appendChild(row);
    });

    const submitBtn = document.createElement("button");
    submitBtn.className = "submit-btn";
    submitBtn.textContent = "Submit Matching Answers";
    submitBtn.onclick = submitMatchingAnswers;
    matchingContainer.appendChild(submitBtn);
}

// Submit matching answers
function submitMatchingAnswers() {
    const selects = document.querySelectorAll(".match-select");
    let matchScore = 0;

    selects.forEach(select => {
        const keywordIndex = parseInt(select.dataset.index);
        const selectedValue = parseInt(select.value);
        
        if (selectedValue === currentQuiz.matching.correctMatches[keywordIndex]) {
            matchScore++;
            select.style.borderColor = "var(--success)";
        } else {
            select.style.borderColor = "var(--danger)";
            incorrectAnswers.push({
                question: currentQuiz.matching.keywords[keywordIndex],
                selected: currentQuiz.matching.descriptions[selectedValue] || "No answer selected",
                correct: currentQuiz.matching.descriptions[currentQuiz.matching.correctMatches[keywordIndex]]
            });
        }
    });

    score += matchScore;
    showResults();
}

// Show final results
function showResults() {
    const totalQuestions = currentQuiz.questions.length + currentQuiz.matching.keywords.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    let incorrectAnswersHTML = "";
    if (incorrectAnswers.length > 0) {
        incorrectAnswersHTML = `
            <h3>Incorrect Answers</h3>
            ${incorrectAnswers.map(item => `
                <div class="incorrect-answer">
                    <p><strong>Question:</strong> ${item.question}</p>
                    <p><strong>Your answer:</strong> ${item.selected}</p>
                    <p class="correct"><strong>Correct answer:</strong> ${item.correct}</p>
                </div>
            `).join("")}
        `;
    }

    resultsContainer.innerHTML = `
        <h2>Quiz Results</h2>
        <p>You scored <strong>${score}/${totalQuestions}</strong> (${percentage}%)</p>
        ${getFeedback(percentage)}
        ${incorrectAnswersHTML}
    `;
    
    resultsContainer.style.display = "block";
    actionsContainer.style.display = "flex";
}

// Get feedback based on score
function getFeedback(percentage) {
    if (percentage >= 90) return "<p>Excellent! You've mastered this topic!</p>";
    if (percentage >= 70) return "<p>Great job! You have a strong understanding.</p>";
    if (percentage >= 50) return "<p>Good effort! Keep practicing to improve.</p>";
    return "<p>Keep learning! Review the material and try again.</p>";
}

// Button handlers
function takeAgain() {
    initQuiz(selectedTopic);
}

function returnToHome() {
    // In a real app, this would return to a topic selection screen
    alert("Returning to home screen (would navigate in a full app)");
}

// Start with Java quiz by default
window.onload = function() {
    initQuiz('java');
};

// For topic switching (not shown in UI in this simplified version)
function switchTopic(topic) {
    selectedTopic = topic;
    initQuiz(topic);
}