const quizData = [
    {
        question: "What is the name of the largest big cat in the worid?",
        options: ["Lion", "Leopard", "Tiger", "Hynas"],
        answer: "Tiger"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the capital city of Nigeria?",
        options: ["Imo", "Lagos", "Abuja", "Enugu"],
        answer: "Abuja"
    },
    {
        question: "What is the smallest continent in the world?",
        options: ["Australia", "Artic", "Asia", "Africa"],
        answer: "Australia"
    },

    {
        question: "The smallest unit of life is?",
        options: ["Skeleton", "Tissue", "Organ", "Cell"],
        answer: "Cell"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = "";
    nextButton.disabled = true;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.addEventListener("click", () => {
            checkAnswer(option);
            nextButton.disabled = false;
        });
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
}

function showResult() {
    quizContainer.style.display = "none";
    resultElement.innerText = `You scored ${score} out of ${quizData.length}`;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

loadQuestion();
