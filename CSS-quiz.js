// CSS Quiz - Complete Implementation
const quizData = [
    {
        question: "1. What does CSS stand for?",
        options: [
            "A) Computer Style Sheets",
            "B) Creative Style Sheets",
            "C) Cascading Style Sheets",
            "D) Colorful Style Sheets"
        ],
        answer: 2
    },
    {
        question: "2. Which CSS property is used to change the text color of an element?",
        options: [
            "A) <span class='css-code'>text-color</span>",
            "B) <span class='css-code'>font-color</span>",
            "C) <span class='css-code'>color</span>",
            "D) <span class='css-code'>text-style</span>"
        ],
        answer: 2
    },
    {
        question: "3. Where in an HTML document is the correct place to refer to an external style sheet?",
        options: [
            "A) In the <span class='css-code'>&lt;body&gt;</span> section",
            "B) At the end of the document",
            "C) In the <span class='css-code'>&lt;head&gt;</span> section",
            "D) In a <span class='css-code'>&lt;div&gt;</span> element"
        ],
        answer: 2
    },
    {
        question: "4. Which HTML attribute is used to define inline styles?",
        options: [
            "A) <span class='css-code'>class</span>",
            "B) <span class='css-code'>font</span>",
            "C) <span class='css-code'>styles</span>",
            "D) <span class='css-code'>style</span>"
        ],
        answer: 3
    },
    {
        question: "5. Which CSS property controls the text size?",
        options: [
            "A) <span class='css-code'>text-style</span>",
            "B) <span class='css-code'>font-size</span>",
            "C) <span class='css-code'>text-size</span>",
            "D) <span class='css-code'>font-style</span>"
        ],
        answer: 1
    },
    {
        question: "6. How do you select an element with id \"demo\" in CSS?",
        options: [
            "A) <span class='css-code'>#demo</span>",
            "B) <span class='css-code'>.demo</span>",
            "C) <span class='css-code'>demo</span>",
            "D) <span class='css-code'>*demo</span>"
        ],
        answer: 0
    },
    {
        question: "7. Which property is used to change the background color?",
        options: [
            "A) <span class='css-code'>bgcolor</span>",
            "B) <span class='css-code'>background-color</span>",
            "C) <span class='css-code'>color</span>",
            "D) <span class='css-code'>bg-color</span>"
        ],
        answer: 1
    },
    {
        question: "8. Which CSS property is used to make text bold?",
        options: [
            "A) <span class='css-code'>text-weight: bold</span>",
            "B) <span class='css-code'>font: bold</span>",
            "C) <span class='css-code'>font-weight: bold</span>",
            "D) <span class='css-code'>style: bold</span>"
        ],
        answer: 2
    },
    {
        question: "9. What is the default value of the position property?",
        options: [
            "A) <span class='css-code'>fixed</span>",
            "B) <span class='css-code'>absolute</span>",
            "C) <span class='css-code'>relative</span>",
            "D) <span class='css-code'>static</span>"
        ],
        answer: 3
    },
    {
        question: "10. Which property is used to add space between letters?",
        options: [
            "A) <span class='css-code'>letter-spacing</span>",
            "B) <span class='css-code'>text-spacing</span>",
            "C) <span class='css-code'>word-spacing</span>",
            "D) <span class='css-code'>line-height</span>"
        ],
        answer: 0
    },
    {
        question: "11. How do you select all &lt;p&gt; elements inside a &lt;div&gt; element?",
        options: [
            "A) <span class='css-code'>div + p</span>",
            "B) <span class='css-code'>div.p</span>",
            "C) <span class='css-code'>div p</span>",
            "D) <span class='css-code'>div > p</span>"
        ],
        answer: 2
    }
];

const matchingData = {
    keywords: [
        "<span class='css-code'>margin</span>",
        "<span class='css-code'>padding</span>",
        "<span class='css-code'>.class</span>",
        "<span class='css-code'>#id</span>",
        "<span class='css-code'>text-align</span>"
    ],
    descriptions: [
        "A) Space between the element's content and its border",
        "B) Space outside the element's border",
        "C) Selects elements with a specific class",
        "D) Selects a single unique element",
        "E) Aligns the text horizontally"
    ],
    correctMatches: [1, 0, 2, 3, 4] // 1-B, 2-A, 3-C, 4-D, 5-E
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
        <p>Match each CSS concept with its correct description:</p>
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
    if (percentage >= 90) return "Excellent! You're a CSS expert!";
    if (percentage >= 70) return "Great job! You have strong CSS knowledge.";
    if (percentage >= 50) return "Good effort! Keep practicing CSS.";
    return "Keep learning! Review CSS basics and try again.";
}

function returnToHome() {
    window.location.href = "index.html";
}

function takeAgain() {
    startQuiz();
}

// Initialize the quiz
document.addEventListener('DOMContentLoaded', startQuiz);