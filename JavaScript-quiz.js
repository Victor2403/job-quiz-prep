// JavaScript Quiz - Complete Implementation
const quizData = [
    {
        question: "1. What is JavaScript primarily used for in web development?",
        options: [
            "A) Styling web pages",
            "B) Adding interactivity and behavior to web pages",
            "C) Creating database structures",
            "D) Defining page layout"
        ],
        answer: 1
    },
    {
        question: "2. Which keyword is used to declare variables in JavaScript?",
        options: [
            "A) <span class='js-code'>let</span>",
            "B) <span class='js-code'>var</span>",
            "C) <span class='js-code'>const</span>",
            "D) All of the above"
        ],
        answer: 3
    },
    {
        question: "3. What is the difference between == and === in JavaScript?",
        options: [
            "A) == compares values only, === compares both value and type",
            "B) == is for strings, === is for numbers",
            "C) They function exactly the same",
            "D) === is deprecated"
        ],
        answer: 0
    },
    {
        question: "4. How do you write \"Hello World\" in an alert box?",
        options: [
            "A) <span class='js-code'>msg(\"Hello World\")</span>",
            "B) <span class='js-code'>alertBox(\"Hello World\")</span>",
            "C) <span class='js-code'>alert(\"Hello World\")</span>",
            "D) <span class='js-code'>message(\"Hello World\")</span>"
        ],
        answer: 2
    },
    {
        question: "5. Which method is used to get an HTML element by its ID in JavaScript?",
        options: [
            "A) <span class='js-code'>document.getElement()</span>",
            "B) <span class='js-code'>document.getElementById()</span>",
            "C) <span class='js-code'>document.querySelector()</span>",
            "D) <span class='js-code'>document.findElement()</span>"
        ],
        answer: 1
    },
    {
        question: "6. What will <span class='js-code'>typeof null</span> return in JavaScript?",
        options: [
            "A) \"null\"",
            "B) \"undefined\"",
            "C) \"object\"",
            "D) \"number\""
        ],
        answer: 2
    },
    {
        question: "7. How do you create a function in JavaScript?",
        options: [
            "A) <span class='js-code'>function = myFunction() {}</span>",
            "B) <span class='js-code'>function myFunction() {}</span>",
            "C) <span class='js-code'>create function myFunction() {}</span>",
            "D) <span class='js-code'>new function myFunction() {}</span>"
        ],
        answer: 1
    },
    {
        question: "8. What will <span class='js-code'>5 + \"5\"</span> evaluate to in JavaScript?",
        options: [
            "A) 10",
            "B) \"55\"",
            "C) Error",
            "D) \"10\""
        ],
        answer: 1
    },
    {
        question: "9. Which event occurs when the user clicks on an HTML element?",
        options: [
            "A) <span class='js-code'>onchange</span>",
            "B) <span class='js-code'>onmouseover</span>",
            "C) <span class='js-code'>onclick</span>",
            "D) <span class='js-code'>onhover</span>"
        ],
        answer: 2
    },
    {
        question: "10. What does the <span class='js-code'>Date()</span> function return?",
        options: [
            "A) Current date as a number",
            "B) Current date and time as a string",
            "C) Time since 1970 in milliseconds",
            "D) A Date object"
        ],
        answer: 1
    },
    {
        question: "11. How do you write a comment in JavaScript?",
        options: [
            "A) <span class='js-code'>&lt;!-- This is a comment --&gt;</span>",
            "B) <span class='js-code'>// This is a comment</span>",
            "C) <span class='js-code'>/* This is a comment */</span>",
            "D) Both B and C"
        ],
        answer: 3
    }
];

const matchingData = {
    keywords: [
        "<span class='js-code'>var</span>",
        "<span class='js-code'>let</span>",
        "<span class='js-code'>const</span>",
        "<span class='js-code'>setTimeout()</span>",
        "<span class='js-code'>document.getElementById()</span>"
    ],
    descriptions: [
        "A) Declares a block-scoped variable",
        "B) Declares a function-scoped or globally-scoped variable",
        "C) Executes a function after a specified delay",
        "D) Declares a block-scoped constant",
        "E) Selects an HTML element by its ID"
    ],
    correctMatches: [1, 0, 3, 2, 4] // 1-B, 2-A, 3-D, 4-C, 5-E
};

// Quiz functionality
let currentQuiz = 0;
let score = 0;

function startQuiz() {
    document.getElementById("results").style.display = "none";
    document.getElementById("actions").style.display = "none";
    document.getElementById("quiz-container").innerHTML = "";
    document.getElementById("matching-container").innerHTML = "";
    currentQuiz = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    if (currentQuiz >= quizData.length) {
        renderMatchingSection();
        return;
    }

    const questionObj = quizData[currentQuiz];
    const questionEl = document.createElement("div");
    questionEl.classList.add("question");
    questionEl.innerHTML = `
        <h2>${questionObj.question}</h2>
        <div class="options">
            ${questionObj.options.map((opt, i) => `
                <button class="option-btn" onclick="submitAnswer(${i})">${opt}</button>
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

function renderMatchingSection() {
    const container = document.getElementById("matching-container");
    container.innerHTML = `
        <h2>Matching Section</h2>
        <p>Match each JavaScript concept with its correct description:</p>
    `;
    
    const keywordList = matchingData.keywords;
    const descriptionList = matchingData.descriptions;

    keywordList.forEach((keyword, i) => {
        const row = document.createElement("div");
        row.classList.add("match-item");

        row.innerHTML = `
            <div class="term">${keyword}</div>
            <select class="match-select" data-index="${i}">
                <option value="">-- Select Match --</option>
                ${descriptionList.map((desc, idx) => `<option value="${idx}">${desc}</option>`).join("")}
            </select>
        `;
        container.appendChild(row);
    });

    const submitBtn = document.createElement("button");
    submitBtn.className = "submit-btn";
    submitBtn.textContent = "Submit Matching Answers";
    submitBtn.onclick = submitMatchingAnswers;
    container.appendChild(submitBtn);
}

function submitMatchingAnswers() {
    const selects = document.querySelectorAll("#matching-container select");
    let matchScore = 0;

    selects.forEach(select => {
        const keywordIndex = parseInt(select.dataset.index);
        const selectedValue = parseInt(select.value);
        if (selectedValue === matchingData.correctMatches[keywordIndex]) {
            matchScore++;
            select.style.borderColor = "#2ecc71";
        } else {
            select.style.borderColor = "#e74c3c";
        }
    });

    score += matchScore;
    showResults();
}

function showResults() {
    const total = quizData.length + matchingData.keywords.length;
    const percentage = Math.round((score / total) * 100);
    const results = document.getElementById("results");

    results.innerHTML = `
        <h3>Quiz Results</h3>
        <div class="score">
            You scored <strong>${score} out of ${total}</strong> (${percentage}%)
        </div>
        <div class="feedback">
            ${getFeedback(percentage)}
        </div>
    `;
    results.style.display = "block";
    document.getElementById("actions").style.display = "flex";
}

function getFeedback(percentage) {
    if (percentage >= 90) return "Excellent! You're a JavaScript expert!";
    if (percentage >= 70) return "Great job! You have strong JavaScript knowledge.";
    if (percentage >= 50) return "Good effort! Keep practicing JavaScript.";
    return "Keep learning! Review JavaScript basics and try again.";
}

function returnToHome() {
    window.location.href = "index.html";
}

function takeAgain() {
    startQuiz();
}

// Initialize the quiz
document.addEventListener('DOMContentLoaded', startQuiz);