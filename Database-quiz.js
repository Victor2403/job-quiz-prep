const quizData = [
    {
        question: "1. What is the primary purpose of a primary key in a database table?",
        options: [
            "A) To store large binary data",
            "B) To uniquely identify each row in a table",
            "C) To link two tables together",
            "D) To improve query performance"
        ],
        answer: 1
    },
    {
        question: "2. Which SQL statement is used to retrieve data from a database?",
        options: [
            "A) UPDATE",
            "B) SELECT",
            "C) INSERT",
            "D) DELETE"
        ],
        answer: 1
    },
    {
        question: "3. What is the correct syntax for creating a foreign key in SQL?",
        options: [
            "A) ALTER TABLE Orders ADD FOREIGN KEY (Customer_ID) REFERENCES Customers(ID);",
            "B) CREATE FOREIGN KEY Orders(Customer_ID) ON Customers(ID);",
            "C) SET FOREIGN KEY Orders(Customer_ID) = Customers(ID);",
            "D) ADD CONSTRAINT Orders FOREIGN KEY (Customer_ID) REFERENCES Customers(ID);"
        ],
        answer: 0
    },
    {
        question: "4. Which type of SQL JOIN returns all records from the left table and matching records from the right table?",
        options: [
            "A) INNER JOIN",
            "B) LEFT JOIN",
            "C) RIGHT JOIN",
            "D) FULL JOIN"
        ],
        answer: 1
    },
    {
        question: "5. What does the WHERE clause do in an SQL query?",
        options: [
            "A) Specifies the columns to retrieve",
            "B) Filters records based on a condition",
            "C) Sorts the results",
            "D) Groups records by a column"
        ],
        answer: 1
    },
    {
        question: "6. Which SQL command is part of Data Definition Language (DDL)?",
        options: [
            "A) SELECT",
            "B) INSERT",
            "C) CREATE",
            "D) UPDATE"
        ],
        answer: 2
    },
    {
        question: "7. What is the purpose of a foreign key?",
        options: [
            "A) To ensure data uniqueness in a single table",
            "B) To establish a relationship between two tables",
            "C) To automatically delete records when referenced data is removed",
            "D) To encrypt sensitive data"
        ],
        answer: 1
    },
    {
        question: "8. Which SQL statement is used to modify existing data in a table?",
        options: [
            "A) ALTER",
            "B) UPDATE",
            "C) CHANGE",
            "D) MODIFY"
        ],
        answer: 1
    },
    {
        question: "9. What is the difference between DELETE and TRUNCATE?",
        options: [
            "A) DELETE removes specific rows, while TRUNCATE removes all rows and resets the table",
            "B) DELETE is faster than TRUNCATE",
            "C) TRUNCATE can be rolled back, but DELETE cannot",
            "D) DELETE is a DDL command, while TRUNCATE is DML"
        ],
        answer: 0
    },
    {
        question: "10. Which SQL clause is used to sort the results of a query?",
        options: [
            "A) GROUP BY",
            "B) ORDER BY",
            "C) SORT BY",
            "D) HAVING"
        ],
        answer: 1
    },
    {
        question: "11. What does the GROUP BY clause do?",
        options: [
            "A) Filters groups based on a condition",
            "B) Combines rows into groups based on column values",
            "C) Orders the results in ascending or descending order",
            "D) Joins multiple tables together"
        ],
        answer: 1
    }
];

const matchingData = {
    keywords: [
        "PRIMARY KEY",
        "FOREIGN KEY",
        "WHERE",
        "INNER JOIN",
        "INSERT INTO"
    ],
    descriptions: [
        "A) Used to filter records in a query",
        "B) Ensures each row in a table is unique",
        "C) Links a column to a primary key in another table",
        "D) Combines rows from two tables where the join condition is met",
        "E) Adds new records to a table"
    ],
    correctMatches: [1, 2, 0, 3, 4] // index matches
};

let currentQuiz = 0;
let score = 0;

function startQuiz() {
    document.getElementById("results").style.display = "none";
    document.getElementById("actions").style.display = "none";
    document.getElementById("quiz-container").innerHTML = "";
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

function renderMatchingSection() {
    const container = document.getElementById("matching-container");
    container.innerHTML = `<h2>Matching Section</h2>`;
    const keywordList = matchingData.keywords;
    const descriptionList = matchingData.descriptions;

    keywordList.forEach((keyword, i) => {
        const row = document.createElement("div");
        row.classList.add("match-item");

        row.innerHTML = `
            <div>${keyword}</div>
            <select class="select" data-index="${i}">
                <option value="">-- Match --</option>
                ${descriptionList.map((desc, idx) => `<option value="${idx}">${desc}</option>`).join("")}
            </select>
        `;
        container.appendChild(row);
    });

    const submitBtn = document.createElement("button");
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
        }
    });

    score += matchScore;
    showResults();
}

function showResults() {
    const total = quizData.length + matchingData.keywords.length;
    const percentage = ((score / total) * 100).toFixed(2);
    const results = document.getElementById("results");

    results.innerHTML = `
        <h3>Quiz Results</h3>
        <p>You scored ${score} out of ${total} (${percentage}%)</p>
    `;
    results.style.display = "block";
    document.getElementById("actions").style.display = "block";
}

function returnToHome() {
    window.location.href = "index.html";
}

function takeAgain() {
    startQuiz();
}

startQuiz();
