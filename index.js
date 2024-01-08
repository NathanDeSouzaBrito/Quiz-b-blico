const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container");
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".questions");


$startGameButton.addEventListener("click", startGame)


let currentQuestionIndex = 0


function startGame() {
    $startGameButton.classList.add("hide");
    $questionsContainer.classList.remove("hide");
    displayNextQuestion();
}

function displayNextQuestion() {
    while($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer =>{
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer) 
    })
}
























const questions = [
  {
    question: "Quantos livros tem a Biblia?",
    answers: [
        { text: "66 livros", correct: true},
        { text: "65 livros", correct: false},
        { text: "74 livros", correct: false},
        { text: "76 livros", correct: false}
    ]
  }
]