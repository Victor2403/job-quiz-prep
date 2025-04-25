// HTML Quiz - Enhanced Version
const quizData = [
    {
        question: "1. What does HTML stand for?",
        options: [
            "A) Hyperlinks and Text Markup Language",
            "B) Hyper Text Markup Language",
            "C) Home Tool Markup Language",
            "D) Hyper Transfer Markup Language"
        ],
        answer: 1
    },
    {
        question: "2. Which HTML element is used to define a paragraph?",
        options: [
            "A) <span class='html-tag'>&lt;para&gt;</span>",
            "B) <span class='html-tag'>&lt;p&gt;</span>",
            "C) <span class='html-tag'>&lt;paragraph&gt;</span>",
            "D) <span class='html-tag'>&lt;text&gt;</span>"
        ],
        answer: 1
    },
    {
        question: "3. What is the correct HTML element for inserting a line break?",
        options: [
            "A) <span class='html-tag'>&lt;break&gt;</span>",
            "B) <span class='html-tag'>&lt;lb&gt;</span>",
            "C) <span class='html-tag'>&lt;br&gt;</span>",
            "D) <span class='html-tag'>&lt;newline&gt;</span>"
        ],
        answer: 2
    },
    {
        question: "4. Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?",
        options: [
            "A) <span class='html-tag'>title</span>",
            "B) <span class='html-tag'>src</span>",
            "C) <span class='html-tag'>alt</span>",
            "D) <span class='html-tag'>href</span>"
        ],
        answer: 2
    },
    {
        question: "5. Which HTML element is used to define the structure of an HTML document (root element)?",
        options: [
            "A) <span class='html-tag'>&lt;head&gt;</span>",
            "B) <span class='html-tag'>&lt;body&gt;</span>",
            "C) <span class='html-tag'>&lt;html&gt;</span>",
            "D) <span class='html-tag'>&lt;!DOCTYPE&gt;</span>"
        ],
        answer: 2
    },
    {
        question: "6. What is the correct HTML for creating a hyperlink?",
        options: [
            "A) <span class='html-tag'>&lt;a url=\"https://example.com\"&gt;Example&lt;/a&gt;</span>",
            "B) <span class='html-tag'>&lt;a href=\"https://example.com\"&gt;Example&lt;/a&gt;</span>",
            "C) <span class='html-tag'>&lt;link&gt;https://example.com&lt;/link&gt;</span>",
            "D) <span class='html-tag'>&lt;a&gt;https://example.com&lt;/a&gt;</span>"
        ],
        answer: 1
    },
    {
        question: "7. Which HTML tag is used to define an unordered list?",
        options: [
            "A) <span class='html-tag'>&lt;list&gt;</span>",
            "B) <span class='html-tag'>&lt;ol&gt;</span>",
            "C) <span class='html-tag'>&lt;ul&gt;</span>",
            "D) <span class='html-tag'>&lt;li&gt;</span>"
        ],
        answer: 2
    },
    {
        question: "8. Which HTML element is used to define the title of a document?",
        options: [
            "A) <span class='html-tag'>&lt;meta&gt;</span>",
            "B) <span class='html-tag'>&lt;title&gt;</span>",
            "C) <span class='html-tag'>&lt;head&gt;</span>",
            "D) <span class='html-tag'>&lt;header&gt;</span>"
        ],
        answer: 1
    },
    {
        question: "9. What is the correct HTML for adding a background color?",
        options: [
            "A) <span class='html-tag'>&lt;body bgcolor=\"yellow\"&gt;</span>",
            "B) <span class='html-tag'>&lt;body style=\"background-color:yellow;\"&gt;</span>",
            "C) <span class='html-tag'>&lt;background&gt;yellow&lt;/background&gt;</span>",
            "D) <span class='html-tag'>&lt;body color=\"yellow\"&gt;</span>"
        ],
        answer: 1
    },
    {
        question: "10. Which HTML element is used to define table data?",
        options: [
            "A) <span class='html-tag'>&lt;td&gt;</span>",
            "B) <span class='html-tag'>&lt;tr&gt;</span>",
            "C) <span class='html-tag'>&lt;table&gt;</span>",
            "D) <span class='html-tag'>&lt;th&gt;</span>"
        ],
        answer: 0
    },
    {
        question: "11. What is the correct HTML for creating a checkbox?",
        options: [
            "A) <span class='html-tag'>&lt;input type=\"check\"&gt;</span>",
            "B) <span class='html-tag'>&lt;checkbox&gt;</span>",
            "C) <span class='html-tag'>&lt;input type=\"checkbox\"&gt;</span>",
            "D) <span class='html-tag'>&lt;check&gt;</span>"
        ],
        answer: 2
    }
];

const matchingData = {
    keywords: [
        "<span class='html-tag'>&lt;h1&gt;</span>",
        "<span class='html-tag'>&lt;img&gt;</span>",
        "<span class='html-tag'>&lt;a&gt;</span>",
        "<span class='html-tag'>&lt;p&gt;</span>",
        "<span class='html-tag'>&lt;ol&gt;</span>"
    ],
    descriptions: [
        "A) Defines a paragraph",
        "B) Defines the most important heading",
        "C) Inserts an image",
        "D) Creates a hyperlink",
        "E) Defines an ordered list"
    ],
    correctMatches: [1, 2, 3, 0, 4] // 1-B, 2-C, 3-D, 4-A, 5-E
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
        <p>Match each HTML tag with its correct description:</p>
    `;
    
    const keywordList = matchingData.keywords;
    const descriptionList = matchingData.descriptions;

    keywordList.forEach((keyword, i) => {
        const row = document.createElement("div");
        row.classList.add("match-item");

        row.innerHTML = `
            <div class="tag">${keyword}</div>
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
    const percentageClass = percentage >= 70 ? "good" : percentage >= 50 ? "average" : "poor";

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
    if (percentage >= 90) return "Excellent! You're an HTML expert!";
    if (percentage >= 70) return "Great job! You have strong HTML knowledge.";
    if (percentage >= 50) return "Good effort! Keep practicing HTML.";
    return "Keep learning! Review HTML basics and try again.";
}

function returnToHome() {
    // Change this to your actual home page URL
    window.location.href = "index.html";
}

function takeAgain() {
    startQuiz();
}

// Initialize the quiz
document.addEventListener('DOMContentLoaded', startQuiz);